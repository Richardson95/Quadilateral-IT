import { ArrowUpRight, Check } from "lucide-react";
import { Container, Section, SectionHeading } from "@/components/ui/primitives";
import { SpotlightCard } from "@/components/ui/spotlight-card";
import { Icon } from "@/components/ui/icon";
import { Reveal } from "@/components/ui/reveal";
import { SectionGlow } from "@/components/ui/backdrop";
import { services, site } from "@/lib/site";
import { cn } from "@/lib/utils";

export function Services() {
  return (
    <Section id="services">
      <SectionGlow />
      <Container>
        <SectionHeading
          eyebrow="What we do"
          title={
            <>
              One partner for the whole{" "}
              <span className="gradient-text">product lifecycle</span>
            </>
          }
          lead="Most teams juggle an agency, a freelancer and a contractor who never speak to each other. We cover strategy, design, engineering, AI, data, marketing and care — so nothing falls between the gaps."
        />

        <div className="mt-16 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <Reveal key={service.slug} delay={index * 0.06} className="h-full">
              <SpotlightCard
                as="article"
                className={cn(
                  "h-full",
                  service.featured && "lg:bg-[color-mix(in_oklab,var(--card)_100%,transparent)]",
                )}
              >
                <div className="flex items-start justify-between gap-4">
                  <span className="grid size-12 shrink-0 place-items-center rounded-2xl border border-line bg-[linear-gradient(140deg,color-mix(in_oklab,var(--color-brand-500)_18%,transparent),transparent)] text-brand-400 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3">
                    <Icon name={service.icon} className="size-6" />
                  </span>
                  {service.featured ? (
                    <span className="rounded-full border border-line px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-subtle">
                      Core
                    </span>
                  ) : null}
                </div>

                <h3 className="mt-6 text-xl font-semibold">{service.title}</h3>
                <p className="mt-2.5 text-sm leading-relaxed text-muted">
                  {service.blurb}
                </p>

                <ul className="mt-6 space-y-2.5 border-t border-line pt-5">
                  {service.bullets.map((bullet) => (
                    <li key={bullet} className="flex items-start gap-2.5 text-sm text-muted">
                      <Check className="mt-0.5 size-4 shrink-0 text-accent-400" />
                      {bullet}
                    </li>
                  ))}
                </ul>

                <a
                  href={`mailto:${site.email}`}
                  className="mt-auto self-start pt-6 inline-flex items-center gap-1 text-sm font-semibold text-(--fg) opacity-0 transition-all duration-300 group-hover:opacity-100 focus-visible:opacity-100"
                >
                  Discuss this
                  <ArrowUpRight className="size-4" />
                </a>
              </SpotlightCard>
            </Reveal>
          ))}
        </div>
      </Container>
    </Section>
  );
}
