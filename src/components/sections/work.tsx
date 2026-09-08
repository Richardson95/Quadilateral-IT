"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Container, Section, SectionHeading, Tag } from "@/components/ui/primitives";
import { Reveal } from "@/components/ui/reveal";
import { projects } from "@/lib/site";
import { cn } from "@/lib/utils";

const filters = ["All", "Fintech", "Real Estate", "AI", "Data", "SaaS", "EdTech"] as const;

function matches(filter: (typeof filters)[number], category: string) {
  if (filter === "All") return true;
  return category.toLowerCase().includes(filter.toLowerCase());
}

export function Work() {
  const [filter, setFilter] = useState<(typeof filters)[number]>("All");
  const visible = projects.filter((project) => matches(filter, project.category));

  return (
    <Section id="work" className="border-y border-line bg-[color-mix(in_oklab,var(--bg-elevated)_55%,transparent)]">
      <Container>
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            align="left"
            eyebrow="Selected work"
            title={
              <>
                Products in the wild,{" "}
                <span className="gradient-text">not case-study fiction</span>
              </>
            }
            lead="A slice of what we have designed, shipped and still maintain — from consumer fintech to real estate platforms and AI support agents."
          />

          <div className="flex flex-wrap gap-2" role="tablist" aria-label="Filter work">
            {filters.map((item) => (
              <button
                key={item}
                type="button"
                role="tab"
                aria-selected={filter === item}
                onClick={() => setFilter(item)}
                className={cn(
                  "rounded-full border px-4 py-2 text-[13px] font-medium transition-all",
                  filter === item
                    ? "border-transparent bg-[linear-gradient(110deg,var(--color-brand-600),var(--color-violet-brand))] text-white"
                    : "border-line bg-(--card) text-muted hover:border-line-strong hover:text-(--fg)",
                )}
              >
                {item}
              </button>
            ))}
          </div>
        </div>

        <motion.div layout className="mt-14 grid gap-5 lg:grid-cols-2">
          <AnimatePresence mode="popLayout">
            {visible.map((project) => (
              <motion.article
                key={project.name}
                layout
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className="group relative isolate overflow-hidden rounded-4xl glass p-8 transition-colors duration-500 hover:bg-(--card-hover)"
              >
                <div
                  aria-hidden
                  className={cn(
                    "absolute -right-20 -top-24 size-64 rounded-full bg-gradient-to-br opacity-20 blur-3xl transition-opacity duration-700 group-hover:opacity-40",
                    project.accent,
                  )}
                />

                <div className="flex items-center justify-between gap-4">
                  <span className="text-xs font-semibold uppercase tracking-[0.14em] text-subtle">
                    {project.category}
                  </span>
                  <span className="font-mono text-xs text-subtle">{project.year}</span>
                </div>

                <h3 className="mt-5 flex items-center gap-2 text-2xl font-semibold sm:text-3xl">
                  {project.name}
                  <ArrowUpRight className="size-5 text-subtle transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </h3>

                <p className="mt-3 text-sm leading-relaxed text-muted">
                  {project.summary}
                </p>

                <div className="mt-6 flex flex-wrap gap-1.5">
                  {project.tags.map((tag) => (
                    <Tag key={tag}>{tag}</Tag>
                  ))}
                </div>

                <dl className="mt-7 grid grid-cols-3 gap-4 border-t border-line pt-6">
                  {project.metrics.map((metric) => (
                    <div key={metric.label}>
                      <dt className="text-[11px] uppercase tracking-wider text-subtle">
                        {metric.label}
                      </dt>
                      <dd
                        className={cn(
                          "mt-1 bg-gradient-to-r bg-clip-text text-xl font-semibold text-transparent",
                          project.accent,
                        )}
                      >
                        {metric.value}
                      </dd>
                    </div>
                  ))}
                </dl>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>

        <Reveal delay={0.1}>
          <p className="mt-12 text-center text-sm text-subtle">
            Under NDA we can still walk you through architecture and outcomes.
          </p>
        </Reveal>
      </Container>
    </Section>
  );
}
