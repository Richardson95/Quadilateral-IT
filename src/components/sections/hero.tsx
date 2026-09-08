"use client";

import { motion } from "framer-motion";
import { ArrowRight, CalendarClock, Play, Star } from "lucide-react";
import { Container } from "@/components/ui/primitives";
import { Counter } from "@/components/ui/counter";
import { site, stats } from "@/lib/site";

const headlineWords = ["We", "build", "the", "software", "your", "vision", "deserves."];

const highlights = [
  "Software Engineering",
  "AI Engineering",
  "AI Automation",
  "Data & Analytics",
  "Email Marketing",
  "Product Design",
  "Maintenance & Support",
  "Tech Academy",
];

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pb-20 pt-36 sm:pt-44">
      <Container>
        <div className="flex flex-col items-center text-center">
          <motion.a
            href="#work"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="group inline-flex items-center gap-2.5 rounded-full border border-line bg-(--card) py-1.5 pl-1.5 pr-4 text-sm backdrop-blur transition-colors hover:border-line-strong"
          >
            <span className="rounded-full bg-[linear-gradient(110deg,var(--color-brand-600),var(--color-violet-brand))] px-2.5 py-1 text-[11px] font-bold uppercase tracking-wider text-white">
              New
            </span>
            <span className="text-muted">
              Kudi9ja hits 4.7★ on the store
            </span>
            <ArrowRight className="size-3.5 text-subtle transition-transform group-hover:translate-x-0.5" />
          </motion.a>

          <h1 className="mt-8 max-w-5xl text-[clamp(2.5rem,7vw,5.25rem)] font-semibold leading-[0.98]">
            {headlineWords.map((word, index) => (
              <motion.span
                key={word}
                initial={{ opacity: 0, y: 26, filter: "blur(8px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                transition={{
                  duration: 0.75,
                  delay: 0.08 * index,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className={
                  word === "vision" || word === "deserves."
                    ? "gradient-text mr-[0.25em] inline-block"
                    : "mr-[0.25em] inline-block"
                }
              >
                {word}
              </motion.span>
            ))}
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.55 }}
            className="mt-7 max-w-2xl text-balance text-lg leading-relaxed text-muted sm:text-xl"
          >
            {site.name} is a product-led consultancy for founders, startups and
            enterprises — engineering, AI automation, data and design under one roof,
            with an academy training the engineers who come next.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.68 }}
            className="mt-10 flex flex-col items-center gap-3 sm:flex-row"
          >
            <a
              href={`mailto:${site.email}`}
              className="group inline-flex h-13 w-full items-center justify-center gap-2 rounded-full bg-[linear-gradient(110deg,var(--color-brand-600),var(--color-violet-brand)_55%,var(--color-accent-500))] bg-[length:200%_auto] px-8 text-[15px] font-semibold text-white shadow-[0_14px_44px_-12px_var(--color-brand-600)] transition-all duration-500 hover:bg-[position:right_center] hover:-translate-y-0.5 sm:w-auto"
            >
              Start a project
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href={site.booking}
              target="_blank"
              rel="noreferrer noopener"
              className="glass inline-flex h-13 w-full items-center justify-center gap-2 rounded-full px-8 text-[15px] font-semibold transition-colors hover:bg-(--card-hover) sm:w-auto"
            >
              <CalendarClock className="size-4" />
              Book a free 30-min call
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.85 }}
            className="mt-7 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-subtle"
          >
            <span className="inline-flex items-center gap-1.5">
              <span className="animate-pulse-ring size-2 rounded-full bg-emerald-400" />
              Taking projects for next month
            </span>
            <span className="inline-flex items-center gap-1">
              {[0, 1, 2, 3, 4].map((index) => (
                <Star key={index} className="size-3.5 fill-amber-400 text-amber-400" />
              ))}
              <span className="ml-1">4.9 average client rating</span>
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Play className="size-3.5" />
              NDA-friendly, IP always yours
            </span>
          </motion.div>
        </div>

        {/* Capability strip */}
        <motion.ul
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.95 }}
          className="mx-auto mt-14 flex max-w-5xl flex-wrap items-center justify-center gap-2"
        >
          {highlights.map((item) => (
            <li
              key={item}
              className="rounded-full border border-line bg-(--card) px-4 py-2 text-[13px] font-medium text-muted backdrop-blur transition-colors hover:border-line-strong hover:text-(--fg)"
            >
              {item}
            </li>
          ))}
        </motion.ul>

        {/* Stats bar */}
        <motion.dl
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.05 }}
          className="mx-auto mt-16 grid max-w-5xl grid-cols-2 gap-px overflow-hidden rounded-4xl border border-line bg-(--line) lg:grid-cols-4"
        >
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="bg-[color-mix(in_oklab,var(--bg)_86%,transparent)] p-6 text-center backdrop-blur transition-colors hover:bg-(--card-hover) sm:p-8"
            >
              <dt className="sr-only">{stat.label}</dt>
              <dd>
                <span className="block text-3xl font-semibold tracking-tight sm:text-4xl">
                  <span className="gradient-text">
                    <Counter
                      value={stat.value}
                      suffix={stat.suffix}
                      decimals={stat.decimals ?? 0}
                    />
                  </span>
                </span>
                <span className="mt-2 block text-sm font-medium">{stat.label}</span>
                <span className="mt-0.5 block text-xs text-subtle">{stat.hint}</span>
              </dd>
            </div>
          ))}
        </motion.dl>
      </Container>
    </section>
  );
}
