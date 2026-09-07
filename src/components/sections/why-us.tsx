import {
  Banknote,
  Clock4,
  FileLock2,
  Gauge,
  MessagesSquare,
  Repeat2,
} from "lucide-react";
import { Container, Section, SectionHeading } from "@/components/ui/primitives";
import { Reveal } from "@/components/ui/reveal";

const reasons = [
  {
    icon: FileLock2,
    title: "You own everything",
    body: "Repositories, cloud accounts, designs, documentation and IP are yours from commit one. No lock-in, no hostage situations, no licence you have to keep paying.",
  },
  {
    icon: MessagesSquare,
    title: "One shared channel",
    body: "A Slack or Teams channel with the actual engineers building your product. Questions answered the same working day, not routed through an account manager.",
  },
  {
    icon: Gauge,
    title: "Shipped, not demoed",
    body: "A live staging link from week one and a Friday demo every week. If a sprint slips, you hear it from us before you notice it yourself.",
  },
  {
    icon: Banknote,
    title: "Honest pricing",
    body: "Fixed scope, fixed price. Any change is quoted and approved before we build it, so the final invoice matches the one you agreed to.",
  },
  {
    icon: Clock4,
    title: "Timezone that overlaps",
    body: "Based in Lagos with working hours that overlap Europe and US East. Real-time conversation, not a 12-hour reply cycle.",
  },
  {
    icon: Repeat2,
    title: "We stay after launch",
    body: "Most clients keep us on for maintenance, iteration and cost control. We are still running products we shipped four years ago.",
  },
];

export function WhyUs() {
  return (
    <Section id="why" className="py-20 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="Why teams stay"
          title={
            <>
              The unglamorous things that{" "}
              <span className="gradient-text">actually decide a project</span>
            </>
          }
          lead="Anyone can show you a nice portfolio. These are the working habits clients tell us made the difference."
        />

        <div className="mt-14 grid gap-px overflow-hidden rounded-4xl border border-line bg-(--line) md:grid-cols-2 lg:grid-cols-3">
          {reasons.map((reason, index) => (
            <Reveal key={reason.title} delay={index * 0.05} className="h-full">
              <div className="group h-full bg-(--bg) p-8 transition-colors duration-500 hover:bg-(--card-hover)">
                <reason.icon className="size-6 text-brand-400 transition-transform duration-500 group-hover:-translate-y-0.5" />
                <h3 className="mt-5 text-base font-semibold">{reason.title}</h3>
                <p className="mt-2.5 text-sm leading-relaxed text-muted">{reason.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </Section>
  );
}
