import { Quote } from "lucide-react";
import { Container, Section, SectionHeading } from "@/components/ui/primitives";
import { Reveal } from "@/components/ui/reveal";
import { testimonials } from "@/lib/site";

function initials(name: string) {
  return name
    .split(" ")
    .map((part) => part.charAt(0))
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

export function Testimonials() {
  return (
    <Section id="testimonials">
      <Container>
        <SectionHeading
          eyebrow="Client & graduate words"
          title={
            <>
              What people say once{" "}
              <span className="gradient-text">the invoice is paid</span>
            </>
          }
          lead="Names shortened where clients asked for it — happy to arrange direct references on request."
        />

        <div className="mt-16 columns-1 gap-5 md:columns-2 lg:columns-3 [&>*]:mb-5 [&>*]:break-inside-avoid">
          {testimonials.map((item, index) => (
            <Reveal key={item.name} delay={index * 0.06}>
              <figure className="group rounded-4xl glass p-7 transition-colors duration-500 hover:bg-(--card-hover)">
                <Quote className="size-7 text-brand-400/50 transition-transform duration-500 group-hover:scale-110" />
                <blockquote className="mt-4 text-[15px] leading-relaxed text-muted">
                  {item.quote}
                </blockquote>
                <figcaption className="mt-6 flex items-center gap-3 border-t border-line pt-5">
                  <span className="grid size-10 shrink-0 place-items-center rounded-full bg-[linear-gradient(140deg,var(--color-brand-600),var(--color-violet-brand))] text-xs font-bold text-white">
                    {initials(item.name)}
                  </span>
                  <span>
                    <span className="block text-sm font-semibold">{item.name}</span>
                    <span className="block text-xs text-subtle">{item.role}</span>
                  </span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </Container>
    </Section>
  );
}
