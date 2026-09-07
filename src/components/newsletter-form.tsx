"use client";

import { useState, type FormEvent } from "react";
import { ArrowRight, Check, Loader2 } from "lucide-react";

type Status = "idle" | "submitting" | "success" | "error";

export function NewsletterForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [notice, setNotice] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    setStatus("submitting");
    try {
      const response = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(data),
      });
      const result: { ok: boolean; message?: string } = await response.json();

      if (!response.ok || !result.ok) {
        setStatus("error");
        setNotice(result.message ?? "That did not work. Try again?");
        return;
      }

      form.reset();
      setStatus("success");
      setNotice(result.message ?? "You are subscribed.");
    } catch {
      setStatus("error");
      setNotice("Network error — please try again.");
    }
  }

  return (
    <form onSubmit={handleSubmit} className="mt-5">
      <label htmlFor="newsletter-email" className="sr-only">
        Email address
      </label>
      <div className="flex items-center gap-2 rounded-full border border-line bg-(--card) p-1.5 pl-4 transition-colors focus-within:border-(--color-brand-400)">
        <input
          id="newsletter-email"
          name="email"
          type="email"
          required
          placeholder="you@company.com"
          className="min-w-0 flex-1 bg-transparent text-sm text-(--fg) placeholder:text-subtle focus:outline-none"
        />
        <button
          type="submit"
          disabled={status === "submitting"}
          aria-label="Subscribe"
          className="grid size-9 shrink-0 place-items-center rounded-full bg-[linear-gradient(110deg,var(--color-brand-600),var(--color-violet-brand))] text-white transition-transform hover:scale-105 disabled:opacity-60"
        >
          {status === "submitting" ? (
            <Loader2 className="size-4 animate-spin" />
          ) : status === "success" ? (
            <Check className="size-4" />
          ) : (
            <ArrowRight className="size-4" />
          )}
        </button>
      </div>

      {/* Honeypot */}
      <input
        name="company"
        type="text"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden
        className="sr-only"
      />

      <p aria-live="polite" className="mt-2 min-h-4 text-xs">
        {status === "success" ? (
          <span className="text-emerald-400">{notice}</span>
        ) : status === "error" ? (
          <span className="text-rose-400">{notice}</span>
        ) : (
          <span className="text-subtle">
            Field notes on building software and AI. Monthly. Unsubscribe anytime.
          </span>
        )}
      </p>
    </form>
  );
}
