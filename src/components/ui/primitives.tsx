import Link from "next/link";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

/* ------------------------------------------------------------------ Section */

export function Section({
  id,
  className,
  children,
}: {
  id?: string;
  className?: string;
  children: ReactNode;
}) {
  return (
    <section
      id={id}
      className={cn("relative scroll-mt-24 py-24 sm:py-32", className)}
    >
      {children}
    </section>
  );
}

export function Container({
  className,
  children,
}: {
  className?: string;
  children: ReactNode;
}) {
  return (
    <div className={cn("mx-auto w-full max-w-7xl px-5 sm:px-8", className)}>
      {children}
    </div>
  );
}

/* ------------------------------------------------------------------- Eyebrow */

export function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-line bg-(--card) px-3.5 py-1.5 text-[11px] font-semibold uppercase tracking-[0.16em] text-muted backdrop-blur">
      <span className="size-1.5 rounded-full bg-accent-400 shadow-[0_0_10px_var(--color-accent-400)]" />
      {children}
    </span>
  );
}

/* --------------------------------------------------------------- Section head */

export function SectionHeading({
  eyebrow,
  title,
  lead,
  align = "center",
  className,
}: {
  eyebrow: string;
  title?: ReactNode;
  lead?: ReactNode;
  align?: "center" | "left";
  className?: string;
}) {
  return (
    <div
      className={cn(
        "flex flex-col gap-5",
        align === "center" ? "items-center text-center" : "items-start text-left",
        className,
      )}
    >
      <Eyebrow>{eyebrow}</Eyebrow>
      {title ? (
        <h2 className="max-w-3xl text-3xl font-semibold leading-[1.1] sm:text-4xl md:text-5xl">
          {title}
        </h2>
      ) : null}
      {lead ? (
        <p className="max-w-2xl text-base leading-relaxed text-muted sm:text-lg">
          {lead}
        </p>
      ) : null}
    </div>
  );
}

/* -------------------------------------------------------------------- Button */

type ButtonVariant = "primary" | "secondary" | "ghost";
type ButtonSize = "md" | "lg";

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    "text-white bg-[linear-gradient(110deg,var(--color-brand-600),var(--color-violet-brand)_55%,var(--color-accent-500))] bg-[length:200%_auto] shadow-[0_10px_36px_-10px_var(--color-brand-600)] hover:bg-[position:right_center] hover:shadow-[0_16px_46px_-12px_var(--color-brand-500)]",
  secondary:
    "glass text-(--fg) hover:border-line-strong hover:bg-(--card-hover)",
  ghost: "text-muted hover:text-(--fg)",
};

const sizeStyles: Record<ButtonSize, string> = {
  md: "h-11 px-5 text-sm",
  lg: "h-13 px-7 text-[15px]",
};

export function ButtonLink({
  href,
  children,
  variant = "primary",
  size = "md",
  className,
  external,
}: {
  href: string;
  children: ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
  external?: boolean;
}) {
  const classes = cn(
    "group inline-flex items-center justify-center gap-2 rounded-full font-semibold transition-all duration-300 will-change-transform hover:-translate-y-0.5 active:translate-y-0",
    variantStyles[variant],
    sizeStyles[size],
    className,
  );

  if (external) {
    return (
      <a href={href} target="_blank" rel="noreferrer noopener" className={classes}>
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={classes}>
      {children}
    </Link>
  );
}

/* ---------------------------------------------------------------------- Pill */

export function Tag({ children }: { children: ReactNode }) {
  return (
    <span className="rounded-full border border-line bg-(--card) px-2.5 py-1 text-[11px] font-medium text-muted">
      {children}
    </span>
  );
}
