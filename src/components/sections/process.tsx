import { Check } from "lucide-react";
import { Container, Section, SectionHeading } from "@/components/ui/primitives";
import { Reveal } from "@/components/ui/reveal";
import { processSteps } from "@/lib/site";

export function Process() {
  return (
    <Section id="process">
      <Container>
        <SectionHeading
          eyebrow="How we work"
          title={
            <>
              A process built to remove{" "}
              <span className="gradient-text">nasty surprises</span>
            </>
          }
          lead="No black boxes, no disappearing for a month. You always know what is being built, what it costs and when it lands."
        />

        <ol className="relative mt-16 space-y-4">
          {/* Vertical spine */}
          <span
            aria-hidden
            className="absolute left-[2.15rem] top-4 hidden h-[calc(100%-2rem)] w-px bg-[linear-gradient(to_bottom,var(--color-brand-500),var(--color-violet-brand),var(--color-accent-400),transparent)] opacity-40 md:block"
          />

          {processSteps.map((item, index) => (
            <Reveal as="li" key={item.step} delay={index * 0.07} direction="right">
              <div className="group relative flex flex-col gap-6 rounded-4xl glass p-7 transition-colors duration-500 hover:bg-(--card-hover) md:flex-row md:items-start md:gap-10 md:p-8">
                <div className="flex items-center gap-4 md:w-40 md:flex-col md:items-start">
                  <span className="grid size-14 shrink-0 place-items-center rounded-2xl border border-line bg-(--bg-elevated) font-mono text-lg font-semibold text-brand-400 transition-transform duration-500 group-hover:scale-105">
                    {item.step}
                  </span>
                  <div className="md:mt-1">
                    <h3 className="text-xl font-semibold">{item.title}</h3>
                    <p className="text-xs uppercase tracking-wider text-subtle">
                      {item.duration}
                    </p>
                  </div>
                </div>

                <p className="flex-1 text-sm leading-relaxed text-muted md:text-[15px]">
                  {item.body}
                </p>

                <ul className="flex shrink-0 flex-col gap-2 md:w-64">
                  {item.deliverables.map((deliverable) => (
                    <li
                      key={deliverable}
                      className="flex items-center gap-2 text-[13px] text-muted"
                    >
                      <Check className="size-3.5 shrink-0 text-accent-400" />
                      {deliverable}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </ol>
      </Container>
    </Section>
  );
}
