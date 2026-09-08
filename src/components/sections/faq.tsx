"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { MessageCircleQuestion, Plus } from "lucide-react";
import { Container, Section, SectionHeading } from "@/components/ui/primitives";
import { Reveal } from "@/components/ui/reveal";
import { faqs, site } from "@/lib/site";
import { cn } from "@/lib/utils";

export function Faq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <Section id="faq">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <SectionHeading
              align="left"
              eyebrow="Questions"
              title={
                <>
                  Answers before you{" "}
                  <span className="gradient-text">have to ask</span>
                </>
              }
              lead="Still unsure about something? Send it over — we reply to every enquiry within one business day."
            />
            <a
              href={`mailto:${site.email}`}
              className="mt-8 inline-flex h-11 items-center gap-2 rounded-full border border-line px-5 text-sm font-semibold transition-colors hover:bg-(--card-hover)"
            >
              <MessageCircleQuestion className="size-4" />
              Ask us anything
            </a>
            <p className="mt-4 text-sm text-subtle">
              Or email{" "}
              <a
                href={`mailto:${site.email}`}
                className="font-medium text-(--fg) underline underline-offset-4"
              >
                {site.email}
              </a>
            </p>
          </div>

          <ul className="flex flex-col gap-3">
            {faqs.map((item, index) => {
              const isOpen = open === index;
              return (
                <Reveal as="li" key={item.q} delay={index * 0.04}>
                  <div
                    className={cn(
                      "overflow-hidden rounded-3xl border transition-colors duration-300",
                      isOpen
                        ? "border-line-strong bg-(--card-hover)"
                        : "border-line bg-(--card) hover:border-line-strong",
                    )}
                  >
                    <h3>
                      <button
                        type="button"
                        onClick={() => setOpen(isOpen ? null : index)}
                        aria-expanded={isOpen}
                        aria-controls={`faq-panel-${index}`}
                        className="flex w-full items-center justify-between gap-6 px-6 py-5 text-left"
                      >
                        <span className="text-[15px] font-semibold sm:text-base">
                          {item.q}
                        </span>
                        <Plus
                          className={cn(
                            "size-5 shrink-0 text-subtle transition-transform duration-300",
                            isOpen && "rotate-45 text-accent-400",
                          )}
                        />
                      </button>
                    </h3>
                    <AnimatePresence initial={false}>
                      {isOpen ? (
                        <motion.div
                          id={`faq-panel-${index}`}
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.32, ease: [0.16, 1, 0.3, 1] }}
                          className="overflow-hidden"
                        >
                          <p className="px-6 pb-6 text-sm leading-relaxed text-muted">
                            {item.a}
                          </p>
                        </motion.div>
                      ) : null}
                    </AnimatePresence>
                  </div>
                </Reveal>
              );
            })}
          </ul>
        </div>
      </Container>
    </Section>
  );
}
