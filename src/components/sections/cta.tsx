import { ArrowRight, CalendarClock } from "lucide-react";
import { Container } from "@/components/ui/primitives";
import { Reveal } from "@/components/ui/reveal";
import { site } from "@/lib/site";

export function Cta() {
  return (
    <section className="relative py-20 sm:py-28">
      <Container>
        <Reveal>
          <div className="relative isolate overflow-hidden rounded-[2.5rem] border border-line bg-(--bg-elevated) px-7 py-16 text-center sm:px-14 sm:py-20">
            {/* Ambient wash */}
            <div
              aria-hidden
              className="absolute inset-0 -z-10 bg-[radial-gradient(60%_120%_at_50%_0%,color-mix(in_oklab,var(--color-brand-500)_28%,transparent),transparent_70%)]"
            />
            <div aria-hidden className="absolute inset-0 -z-10 grid-bg opacity-40" />

            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-subtle">
              Ready when you are
            </p>

            <h2 className="mx-auto mt-6 max-w-3xl text-[clamp(2rem,5vw,3.5rem)] font-semibold leading-[1.05]">
              Let us turn your idea into{" "}
              <span className="gradient-text">something people use</span>
            </h2>

            <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-muted sm:text-lg">
              Whether it is a first prototype, a rescue mission or a platform your whole
              company runs on — the first conversation is free and genuinely useful.
            </p>

            <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <a
                href="#contact"
                className="group inline-flex h-13 w-full items-center justify-center gap-2 rounded-full bg-[linear-gradient(110deg,var(--color-brand-600),var(--color-violet-brand)_55%,var(--color-accent-500))] bg-[length:200%_auto] px-8 text-[15px] font-semibold text-white shadow-[0_14px_44px_-12px_var(--color-brand-600)] transition-all duration-500 hover:bg-[position:right_center] hover:-translate-y-0.5 sm:w-auto"
              >
                Start a project
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
              </a>
              <a
                href={site.booking}
                target="_blank"
                rel="noreferrer noopener"
                className="inline-flex h-13 w-full items-center justify-center gap-2 rounded-full border border-line-strong px-8 text-[15px] font-semibold transition-colors hover:bg-(--card-hover) sm:w-auto"
              >
                <CalendarClock className="size-4" />
                Book a call
              </a>
            </div>

            <p className="mt-7 text-xs text-subtle">
              Replies within one business day · NDA-friendly · No obligation
            </p>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
