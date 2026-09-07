"use client";

import { useState, type FormEvent } from "react";
import {
  ArrowRight,
  CalendarClock,
  CheckCircle2,
  Clock4,
  Loader2,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";
import { Container, Section } from "@/components/ui/primitives";
import { Reveal } from "@/components/ui/reveal";
import { SectionGlow } from "@/components/ui/backdrop";
import { budgets, serviceOptions, site } from "@/lib/site";
import { contactSchema, fieldErrors } from "@/lib/contact-schema";
import { cn } from "@/lib/utils";

type Status = "idle" | "submitting" | "success" | "error";

const fieldClass =
  "w-full rounded-2xl border border-line bg-(--bg-elevated) px-4 py-3 text-sm text-(--fg) placeholder:text-subtle transition-colors focus:border-(--color-brand-400) focus:outline-none";

const labelClass = "mb-2 block text-xs font-semibold uppercase tracking-wider text-subtle";

export function Contact() {
  const [status, setStatus] = useState<Status>("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [notice, setNotice] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const values = Object.fromEntries(new FormData(form).entries());

    const parsed = contactSchema.safeParse(values);
    if (!parsed.success) {
      setErrors(fieldErrors(parsed.error));
      setStatus("error");
      setNotice("Please check the highlighted fields.");
      return;
    }

    setErrors({});
    setStatus("submitting");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(parsed.data),
      });
      const result: { ok: boolean; message?: string; errors?: Record<string, string> } =
        await response.json();

      if (!response.ok || !result.ok) {
        setErrors(result.errors ?? {});
        setStatus("error");
        setNotice(result.message ?? "Something went wrong. Please try again.");
        return;
      }

      form.reset();
      setStatus("success");
      setNotice(result.message ?? "Thanks — your message is in.");
    } catch {
      setStatus("error");
      setNotice(
        `Network error. Email us directly at ${site.email} and we will pick it up.`,
      );
    }
  }

  return (
    <Section id="contact" className="border-t border-line">
      <SectionGlow className="h-96" />
      <Container>
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          {/* ------------------------------------------------------ Left rail */}
          <div>
            <Reveal>
              <span className="inline-flex items-center gap-2 rounded-full border border-line bg-(--card) px-3.5 py-1.5 text-[11px] font-semibold uppercase tracking-[0.16em] text-muted">
                <span className="animate-pulse-ring size-1.5 rounded-full bg-emerald-400" />
                Accepting new projects
              </span>

              <h2 className="mt-6 text-3xl font-semibold leading-[1.1] sm:text-4xl md:text-5xl">
                Tell us what you want to{" "}
                <span className="gradient-text">build</span>
              </h2>

              <p className="mt-5 max-w-md text-base leading-relaxed text-muted">
                A rough idea is enough to start. You will get a considered reply from an
                engineer — not an automated brochure — within one business day.
              </p>
            </Reveal>

            <Reveal delay={0.08}>
              <ul className="mt-10 space-y-4">
                {[
                  { icon: Mail, label: "Email", value: site.email, href: `mailto:${site.email}` },
                  { icon: Phone, label: "Phone / WhatsApp", value: site.phone, href: `tel:${site.phone.replace(/\s/g, "")}` },
                  { icon: MapPin, label: "Where we are", value: site.location },
                  { icon: Clock4, label: "Working hours", value: site.timezone },
                ].map((item) => (
                  <li key={item.label} className="flex items-start gap-4">
                    <span className="grid size-10 shrink-0 place-items-center rounded-xl border border-line bg-(--card) text-brand-400">
                      <item.icon className="size-4.5" />
                    </span>
                    <span>
                      <span className="block text-xs uppercase tracking-wider text-subtle">
                        {item.label}
                      </span>
                      {item.href ? (
                        <a
                          href={item.href}
                          className="text-sm font-medium transition-colors hover:text-brand-400"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <span className="text-sm font-medium">{item.value}</span>
                      )}
                    </span>
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal delay={0.16}>
              <a
                href={site.booking}
                target="_blank"
                rel="noreferrer noopener"
                className="group mt-10 flex items-center justify-between gap-4 rounded-3xl glass p-5 transition-colors hover:bg-(--card-hover)"
              >
                <span className="flex items-center gap-3">
                  <CalendarClock className="size-5 text-accent-400" />
                  <span>
                    <span className="block text-sm font-semibold">
                      Prefer to talk it through?
                    </span>
                    <span className="block text-xs text-subtle">
                      Book a free 30-minute call
                    </span>
                  </span>
                </span>
                <ArrowRight className="size-4 text-subtle transition-transform group-hover:translate-x-1" />
              </a>
            </Reveal>
          </div>

          {/* ----------------------------------------------------------- Form */}
          <Reveal delay={0.1} direction="left">
            <form
              onSubmit={handleSubmit}
              noValidate
              className="rounded-4xl glass p-7 sm:p-9"
            >
              <div className="grid gap-5 sm:grid-cols-2">
                <Field
                  label="Your name"
                  name="name"
                  placeholder="Ada Lovelace"
                  error={errors.name}
                  autoComplete="name"
                />
                <Field
                  label="Email"
                  name="email"
                  type="email"
                  placeholder="ada@company.com"
                  error={errors.email}
                  autoComplete="email"
                />
                <Field
                  label="Company (optional)"
                  name="company"
                  placeholder="Acme Ltd"
                  error={errors.company}
                  autoComplete="organization"
                />

                <div>
                  <label htmlFor="budget" className={labelClass}>
                    Budget
                  </label>
                  <select id="budget" name="budget" defaultValue="" className={fieldClass}>
                    <option value="" disabled>
                      Select a range
                    </option>
                    {budgets.map((budget) => (
                      <option key={budget} value={budget}>
                        {budget}
                      </option>
                    ))}
                  </select>
                  <FieldError message={errors.budget} />
                </div>

                <div className="sm:col-span-2">
                  <label htmlFor="service" className={labelClass}>
                    What do you need?
                  </label>
                  <select id="service" name="service" defaultValue="" className={fieldClass}>
                    <option value="" disabled>
                      Select a service
                    </option>
                    {serviceOptions.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                  <FieldError message={errors.service} />
                </div>

                <div className="sm:col-span-2">
                  <label htmlFor="message" className={labelClass}>
                    Project details
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    placeholder="What are you building, who is it for, and what does done look like? Deadlines and constraints welcome."
                    className={cn(fieldClass, "resize-y")}
                  />
                  <FieldError message={errors.message} />
                </div>
              </div>

              {/* Honeypot — hidden from people, irresistible to bots */}
              <div aria-hidden className="absolute -left-[9999px] h-0 w-0 overflow-hidden">
                <label htmlFor="website">Do not fill this in</label>
                <input id="website" name="website" type="text" tabIndex={-1} autoComplete="off" />
              </div>

              <button
                type="submit"
                disabled={status === "submitting"}
                className="group mt-7 inline-flex h-13 w-full items-center justify-center gap-2 rounded-full bg-[linear-gradient(110deg,var(--color-brand-600),var(--color-violet-brand)_55%,var(--color-accent-500))] bg-[length:200%_auto] text-[15px] font-semibold text-white shadow-[0_14px_44px_-14px_var(--color-brand-600)] transition-all duration-500 hover:bg-[position:right_center] disabled:cursor-not-allowed disabled:opacity-60"
              >
                {status === "submitting" ? (
                  <>
                    <Loader2 className="size-4 animate-spin" />
                    Sending…
                  </>
                ) : (
                  <>
                    Send project brief
                    <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                  </>
                )}
              </button>

              <p aria-live="polite" className="mt-4 min-h-5 text-center text-sm">
                {status === "success" ? (
                  <span className="inline-flex items-center gap-2 font-medium text-emerald-400">
                    <CheckCircle2 className="size-4" />
                    {notice}
                  </span>
                ) : status === "error" ? (
                  <span className="text-rose-400">{notice}</span>
                ) : (
                  <span className="text-subtle">
                    We sign NDAs on request. Your details are never shared or sold.
                  </span>
                )}
              </p>
            </form>
          </Reveal>
        </div>
      </Container>
    </Section>
  );
}

/* -------------------------------------------------------------------------- */

function Field({
  label,
  name,
  error,
  type = "text",
  placeholder,
  autoComplete,
}: {
  label: string;
  name: string;
  error?: string;
  type?: string;
  placeholder?: string;
  autoComplete?: string;
}) {
  return (
    <div>
      <label htmlFor={name} className={labelClass}>
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        autoComplete={autoComplete}
        aria-invalid={Boolean(error)}
        className={cn(fieldClass, error && "border-rose-400/70")}
      />
      <FieldError message={error} />
    </div>
  );
}

function FieldError({ message }: { message?: string }) {
  if (!message) return null;
  return <p className="mt-1.5 text-xs text-rose-400">{message}</p>;
}
