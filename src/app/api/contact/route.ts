import { NextResponse } from "next/server";
import { contactSchema, fieldErrors } from "@/lib/contact-schema";

export const runtime = "nodejs";

/**
 * In-memory rate limit — good enough for a single instance. Swap for Upstash
 * or a KV store if the site is deployed to more than one region.
 */
const WINDOW_MS = 60_000;
const MAX_PER_WINDOW = 4;
const hits = new Map<string, { count: number; resetAt: number }>();

function rateLimited(key: string): boolean {
  const now = Date.now();
  const entry = hits.get(key);

  if (!entry || now > entry.resetAt) {
    hits.set(key, { count: 1, resetAt: now + WINDOW_MS });
    return false;
  }

  entry.count += 1;
  return entry.count > MAX_PER_WINDOW;
}

export async function POST(request: Request) {
  const forwarded = request.headers.get("x-forwarded-for");
  const ip = forwarded?.split(",")[0]?.trim() || "anonymous";

  if (rateLimited(ip)) {
    return NextResponse.json(
      { ok: false, message: "Too many messages — please try again in a minute." },
      { status: 429 },
    );
  }

  let payload: unknown;
  try {
    payload = await request.json();
  } catch {
    return NextResponse.json({ ok: false, message: "Malformed request." }, { status: 400 });
  }

  const parsed = contactSchema.safeParse(payload);
  if (!parsed.success) {
    return NextResponse.json(
      { ok: false, message: "Please check the highlighted fields.", errors: fieldErrors(parsed.error) },
      { status: 422 },
    );
  }

  const data = parsed.data;

  // Honeypot tripped — accept silently so bots do not learn anything.
  if (data.website) {
    return NextResponse.json({ ok: true, message: "Thanks — we will be in touch." });
  }

  const submission = {
    ...data,
    website: undefined,
    receivedAt: new Date().toISOString(),
    source: request.headers.get("referer") ?? "direct",
  };

  // Optional fan-out to Slack / Zapier / n8n / make.com.
  const webhook = process.env.CONTACT_WEBHOOK_URL;
  if (webhook) {
    try {
      await fetch(webhook, {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(submission),
      });
    } catch (error) {
      // Never fail the user's submission because a downstream tool is down.
      console.error("[contact] webhook delivery failed", error);
    }
  } else {
    console.info("[contact] new enquiry", submission);
  }

  return NextResponse.json({
    ok: true,
    message: "Thanks — your message is in. We reply within one business day.",
  });
}
