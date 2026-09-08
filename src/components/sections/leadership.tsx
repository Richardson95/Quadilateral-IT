import Image from "next/image";
import { BadgeCheck, MapPin, Sparkles } from "lucide-react";
import { Container, Section, SectionHeading, Tag } from "@/components/ui/primitives";
import { Reveal } from "@/components/ui/reveal";
import { SectionGlow } from "@/components/ui/backdrop";
import { leadership, type Leader } from "@/lib/site";
import { cn } from "@/lib/utils";

function Portrait({ leader }: { leader: Leader }) {
  return (
    <figure className="relative">
      {/* Soft brand wash behind the frame. */}
      <div className="absolute -inset-3 -z-10 rounded-[2.5rem] bg-[linear-gradient(140deg,color-mix(in_oklab,var(--color-brand-500)_35%,transparent),transparent_60%)] blur-2xl" />

      <div className="group relative overflow-hidden rounded-4xl border border-line bg-(--card)">
        <Image
          src={leader.photo}
          alt={`${leader.name}, ${leader.role} of Quadilateral IT`}
          width={leader.photoWidth}
          height={leader.photoHeight}
          sizes="(min-width: 1024px) 38vw, 90vw"
          className="aspect-4/5 w-full object-cover object-top transition-transform duration-700 group-hover:scale-[1.03]"
        />
        {/* Keeps the location chip readable over any photo. */}
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/3 bg-[linear-gradient(to_top,rgba(0,0,0,0.72),transparent)]" />
        <span className="absolute bottom-4 left-4 inline-flex items-center gap-1.5 rounded-full border border-white/20 bg-black/45 px-3 py-1.5 text-[11px] font-semibold text-white backdrop-blur">
          <MapPin className="size-3.5" />
          {leader.location}
        </span>
      </div>

      <figcaption className="mt-6">
        <h3 className="text-2xl font-semibold leading-tight sm:text-3xl">
          {leader.name}
          {leader.credential ? (
            <span className="ml-2 align-middle text-sm font-medium text-subtle">
              {leader.credential}
            </span>
          ) : null}
        </h3>
        <p className="mt-1.5 text-sm font-semibold text-brand-400">{leader.role}</p>

        <div className="mt-4 flex flex-wrap gap-2">
          {leader.hats.map((hat) => (
            <Tag key={hat}>{hat}</Tag>
          ))}
        </div>
      </figcaption>
    </figure>
  );
}

function Profile({ leader, index }: { leader: Leader; index: number }) {
  // Alternate which side the portrait sits on so the two blocks mirror.
  const portraitFirst = index % 2 === 0;

  return (
    <div className="grid gap-10 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:items-start lg:gap-14">
      <Reveal className={cn(portraitFirst ? "lg:order-1" : "lg:order-2")}>
        <Portrait leader={leader} />
      </Reveal>

      <div
        className={cn(
          "flex flex-col gap-10",
          portraitFirst ? "lg:order-2" : "lg:order-1",
        )}
      >
        <Reveal delay={0.08}>
          <div className="space-y-5">
            {leader.bio.map((paragraph) => (
              <p key={paragraph.slice(0, 32)} className="text-base leading-relaxed text-muted">
                {paragraph}
              </p>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.14}>
          <div>
            <h4 className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-subtle">
              <BadgeCheck className="size-4 text-accent-400" />
              {leader.focusLabel}
            </h4>
            <ul className="mt-4 grid gap-x-6 gap-y-2.5 sm:grid-cols-2">
              {leader.focus.map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-sm text-muted">
                  <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-accent-400" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>

        <Reveal delay={0.2}>
          <div>
            <h4 className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-subtle">
              <Sparkles className="size-4 text-accent-400" />
              {leader.cardsLabel}
            </h4>
            <div className="mt-4 grid gap-px overflow-hidden rounded-3xl border border-line bg-(--line) sm:grid-cols-3">
              {leader.cards.map((card) => (
                <div
                  key={card.title}
                  className="bg-(--bg) p-5 transition-colors duration-500 hover:bg-(--card-hover)"
                >
                  <p className="text-sm font-semibold">{card.title}</p>
                  <p className="mt-1 text-[11px] font-semibold uppercase tracking-wider text-brand-400">
                    {card.subtitle}
                  </p>
                  <p className="mt-2.5 text-xs leading-relaxed text-muted">{card.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </div>
  );
}

export function Leadership() {
  return (
    <Section id="founders">
      <SectionGlow />
      <Container>
        <SectionHeading
          eyebrow="Who you are working with"
          lead="A researcher running senior secured data work in the US, and a senior engineer running delivery in Nigeria. You talk to them directly — the overlap is why our working hours cover Europe and the Americas."
        />

        <div className="mt-16 flex flex-col gap-16 lg:gap-24">
          {leadership.map((leader, index) => (
            <div
              key={leader.slug}
              className={cn(
                index > 0 && "border-t border-line pt-16 lg:pt-24",
              )}
            >
              <Profile leader={leader} index={index} />
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
