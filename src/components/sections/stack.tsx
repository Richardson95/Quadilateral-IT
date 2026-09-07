import { Container, Section, SectionHeading } from "@/components/ui/primitives";
import { Reveal } from "@/components/ui/reveal";
import { industries, techStack } from "@/lib/site";
import { cn } from "@/lib/utils";

function MarqueeRow({
  items,
  reverse,
}: {
  items: readonly string[];
  reverse?: boolean;
}) {
  return (
    <div className="fade-mask-x pause-on-hover flex overflow-hidden">
      <div
        className={cn(
          "flex w-max shrink-0 gap-3 pr-3",
          reverse ? "animate-marquee-reverse" : "animate-marquee",
        )}
      >
        {/* Duplicated once so the -50% translate loops seamlessly */}
        {[...items, ...items].map((item, index) => (
          <span
            key={`${item}-${index}`}
            className="rounded-2xl border border-line bg-(--card) px-5 py-3 text-sm font-medium whitespace-nowrap text-muted backdrop-blur"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}

export function Stack() {
  const half = Math.ceil(techStack.length / 2);
  const rowOne = techStack.slice(0, half);
  const rowTwo = techStack.slice(half);

  return (
    <Section className="overflow-hidden py-20 sm:py-24">
      <Container>
        <SectionHeading
          eyebrow="Stack & sectors"
          title={
            <>
              Boring technology where it counts,{" "}
              <span className="gradient-text">new technology where it wins</span>
            </>
          }
          lead="We pick tools your future team can hire for and your finance director can afford to run."
        />
      </Container>

      <Reveal className="mt-14 flex flex-col gap-3">
        <MarqueeRow items={rowOne} />
        <MarqueeRow items={rowTwo} reverse />
      </Reveal>

      <Container>
        <Reveal delay={0.1}>
          <div className="mt-16 rounded-4xl glass p-8 sm:p-10">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-subtle">
              Industries we serve
            </p>
            <ul className="mt-6 flex flex-wrap gap-x-8 gap-y-3">
              {industries.map((industry) => (
                <li
                  key={industry}
                  className="text-lg font-medium text-muted transition-colors hover:text-(--fg) sm:text-xl"
                >
                  {industry}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}
