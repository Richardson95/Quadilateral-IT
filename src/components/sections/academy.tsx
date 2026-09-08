import { ArrowRight, Check, GraduationCap, Users } from "lucide-react";
import { Container, Section, SectionHeading } from "@/components/ui/primitives";
import { SpotlightCard } from "@/components/ui/spotlight-card";
import { Icon } from "@/components/ui/icon";
import { Reveal } from "@/components/ui/reveal";
import { academyPerks, site, tracks } from "@/lib/site";

export function Academy() {
  return (
    <Section
      id="academy"
      className="border-y border-line bg-[color-mix(in_oklab,var(--bg-elevated)_55%,transparent)]"
    >
      <Container>
        <SectionHeading
          eyebrow="Quadilateral Academy"
          title={
            <>
              Learn to build it{" "}
              <span className="gradient-text">from the people who ship it</span>
            </>
          }
          lead="Live cohorts taught by engineers working on real client products — not a pre-recorded course nobody finishes. Beginners welcome; career changers especially."
        />

        <div className="mt-16 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {tracks.map((track, index) => (
            <Reveal key={track.title} delay={index * 0.06} className="h-full">
              <SpotlightCard as="article" className="h-full">
                <div className="flex items-start justify-between gap-3">
                  <span className="grid size-11 place-items-center rounded-xl border border-line bg-[linear-gradient(140deg,color-mix(in_oklab,var(--color-violet-brand)_20%,transparent),transparent)] text-violet-400 transition-transform duration-500 group-hover:scale-110">
                    <Icon name={track.icon} className="size-5" />
                  </span>
                  <span className="rounded-full border border-line px-2.5 py-1 text-[11px] font-medium text-subtle">
                    {track.duration}
                  </span>
                </div>

                <h3 className="mt-5 text-lg font-semibold">{track.title}</h3>
                <p className="mt-1 text-xs font-medium uppercase tracking-wider text-accent-400">
                  {track.level}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-muted">{track.blurb}</p>

                <ul className="mt-5 space-y-2 border-t border-line pt-4">
                  {track.syllabus.map((topic) => (
                    <li key={topic} className="flex items-start gap-2 text-[13px] text-muted">
                      <span className="mt-1.5 size-1 shrink-0 rounded-full bg-(--line-strong)" />
                      {topic}
                    </li>
                  ))}
                </ul>
              </SpotlightCard>
            </Reveal>
          ))}
        </div>

        {/* Academy CTA panel */}
        <Reveal delay={0.1}>
          <div className="mt-6 overflow-hidden rounded-4xl glass p-8 sm:p-10 lg:p-12">
            <div className="grid gap-10 lg:grid-cols-[1.1fr_1fr] lg:items-center">
              <div>
                <div className="flex items-center gap-3">
                  <span className="grid size-11 place-items-center rounded-xl bg-[linear-gradient(140deg,var(--color-brand-600),var(--color-violet-brand))] text-white">
                    <GraduationCap className="size-5" />
                  </span>
                  <div>
                    <p className="text-sm font-semibold">Next cohort opens soon</p>
                    <p className="text-xs text-subtle">
                      Seats capped at 25 per track · scholarships available
                    </p>
                  </div>
                </div>

                <h3 className="mt-6 text-2xl font-semibold sm:text-3xl">
                  Everything included in every track
                </h3>

                <ul className="mt-6 grid gap-2.5 sm:grid-cols-2">
                  {academyPerks.map((perk) => (
                    <li key={perk} className="flex items-start gap-2.5 text-sm text-muted">
                      <Check className="mt-0.5 size-4 shrink-0 text-accent-400" />
                      {perk}
                    </li>
                  ))}
                </ul>

                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <a
                    href={`mailto:${site.email}`}
                    className="group inline-flex h-12 items-center justify-center gap-2 rounded-full bg-[linear-gradient(110deg,var(--color-brand-600),var(--color-violet-brand))] px-6 text-sm font-semibold text-white transition-transform hover:-translate-y-0.5"
                  >
                    Reserve a seat
                    <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
                  </a>
                  <a
                    href={`mailto:${site.email}`}
                    className="inline-flex h-12 items-center justify-center gap-2 rounded-full border border-line px-6 text-sm font-semibold transition-colors hover:bg-(--card-hover)"
                  >
                    <Users className="size-4" />
                    Train my team
                  </a>
                </div>
              </div>

              {/* Outcome panel */}
              <div className="rounded-3xl border border-line bg-(--bg-elevated) p-7">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-subtle">
                  Graduate outcomes
                </p>
                <dl className="mt-6 space-y-5">
                  {[
                    { value: "300+", label: "Engineers trained since 2021" },
                    { value: "78%", label: "Placed or freelancing within 6 months" },
                    { value: "1:1", label: "Mentor sessions every fortnight" },
                    { value: "4.8/5", label: "Average cohort rating" },
                  ].map((item) => (
                    <div key={item.label} className="flex items-baseline gap-4">
                      <dd className="gradient-text w-20 shrink-0 text-2xl font-semibold">
                        {item.value}
                      </dd>
                      <dt className="text-sm text-muted">{item.label}</dt>
                    </div>
                  ))}
                </dl>
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}
