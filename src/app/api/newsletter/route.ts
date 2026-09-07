import { NextResponse } from "next/server";
import { z } from "zod";

export const runtime = "nodejs";

const schema = z.object({
  email: z.string().trim().email(),
  // Honeypot
  company: z.string().max(0).optional().or(z.literal("")),
});

export async function POST(request: Request) {
  let payload: unknown;
  try {
    payload = await request.json();
  } catch {
    return NextResponse.json({ ok: false, message: "Malformed request." }, { status: 400 });
  }

  const parsed = schema.safeParse(payload);
  if (!parsed.success) {
    return NextResponse.json(
      { ok: false, message: "Enter a valid email address." },
      { status: 422 },
    );
  }

  if (parsed.data.company) {
    return NextResponse.json({ ok: true, message: "You are subscribed." });
  }

  const webhook = process.env.NEWSLETTER_WEBHOOK_URL ?? process.env.CONTACT_WEBHOOK_URL;
  if (webhook) {
    try {
      await fetch(webhook, {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({
          type: "newsletter",
          email: parsed.data.email,
          receivedAt: new Date().toISOString(),
        }),
      });
    } catch (error) {
      console.error("[newsletter] webhook delivery failed", error);
    }
  } else {
    console.info("[newsletter] new subscriber", parsed.data.email);
  }

  return NextResponse.json({
    ok: true,
    message: "You are in — one useful email a month, no noise.",
  });
}
