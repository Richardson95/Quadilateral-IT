import { cn } from "@/lib/utils";

/**
 * Ambient page backdrop: a fixed grid, three drifting colour blooms and a
 * subtle noise layer. Purely decorative — never in the accessibility tree.
 */
export function Backdrop() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 grid-bg fade-mask-b opacity-70" />

      <div className="animate-float absolute -left-40 -top-40 size-[38rem] rounded-full bg-(--glow-1) blur-[130px]" />
      <div
        className="animate-float absolute -right-52 top-[22%] size-[34rem] rounded-full bg-(--glow-2) blur-[130px]"
        style={{ animationDelay: "-3s" }}
      />
      <div
        className="animate-float absolute bottom-[8%] left-[24%] size-[30rem] rounded-full bg-(--glow-3) blur-[140px]"
        style={{ animationDelay: "-6s" }}
      />

      <div
        className="absolute inset-0 opacity-[0.035] mix-blend-overlay dark:opacity-[0.06]"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='160' height='160'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
        }}
      />
    </div>
  );
}

/** Section-local glow, used to lift a single band off the page. */
export function SectionGlow({ className }: { className?: string }) {
  return (
    <div
      aria-hidden
      className={cn(
        "pointer-events-none absolute left-1/2 top-0 -z-10 h-72 w-[min(70rem,100%)] -translate-x-1/2 rounded-full bg-(--glow-1) blur-[120px]",
        className,
      )}
    />
  );
}
