import { site } from "@/lib/site";
import { cn } from "@/lib/utils";

/** Four-sided mark — a quadrilateral built from two nested rotated squares. */
export function LogoMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 40 40"
      fill="none"
      className={cn("size-9", className)}
      aria-hidden
    >
      <defs>
        <linearGradient id="quad-mark" x1="0" y1="0" x2="40" y2="40">
          <stop offset="0%" stopColor="var(--color-brand-400)" />
          <stop offset="55%" stopColor="var(--color-violet-brand)" />
          <stop offset="100%" stopColor="var(--color-accent-400)" />
        </linearGradient>
      </defs>
      <rect
        x="3.5"
        y="3.5"
        width="33"
        height="33"
        rx="9"
        stroke="url(#quad-mark)"
        strokeWidth="2"
      />
      <path
        d="M20 10.5 29.5 20 20 29.5 10.5 20Z"
        fill="url(#quad-mark)"
        fillOpacity="0.9"
      />
      <path d="M20 16.5 23.5 20 20 23.5 16.5 20Z" fill="var(--bg)" />
    </svg>
  );
}

export function Logo({ className }: { className?: string }) {
  return (
    <span className={cn("inline-flex items-center gap-2.5", className)}>
      <LogoMark />
      <span className="text-[15px] font-semibold tracking-tight">
        {site.shortName}
        <span className="gradient-text"> IT</span>
      </span>
    </span>
  );
}
