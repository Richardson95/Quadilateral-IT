

"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, Menu, X } from "lucide-react";
import { Logo } from "@/components/logo";
import { ThemeToggle } from "@/components/ui/chrome";
import { nav, site } from "@/lib/site";
import { cn } from "@/lib/utils";

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string>("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Highlight the nav item whose section is currently on screen.
  useEffect(() => {
    const sections = nav
      .map(({ href }) => document.querySelector(href))
      .filter((el): el is Element => el !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActive(`#${visible.target.id}`);
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: [0, 0.25, 0.5] },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  // Lock body scroll while the mobile sheet is open.
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div
        className={cn(
          "mx-auto flex h-18 max-w-7xl items-center justify-between gap-6 px-5 transition-all duration-500 sm:px-8",
          scrolled &&
            "mt-3 h-16 max-w-6xl rounded-full border border-line bg-[color-mix(in_oklab,var(--bg)_78%,transparent)] px-5 shadow-[0_8px_40px_-16px_rgb(0_0_0/0.5)] backdrop-blur-xl sm:px-6",
        )}
      >
        <Link href="#top" aria-label={`${site.shortName} home`} className="shrink-0">
          <Logo />
        </Link>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={cn(
                "relative rounded-full px-3.5 py-2 text-sm font-medium transition-colors",
                active === item.href
                  ? "text-(--fg)"
                  : "text-muted hover:text-(--fg)",
              )}
            >
              {active === item.href ? (
                <motion.span
                  layoutId="nav-pill"
                  className="absolute inset-0 -z-10 rounded-full border border-line bg-(--card-hover)"
                  transition={{ type: "spring", stiffness: 380, damping: 32 }}
                />
              ) : null}
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <a
            href="#contact"
            className="group hidden h-10 items-center gap-1.5 rounded-full bg-[linear-gradient(110deg,var(--color-brand-600),var(--color-violet-brand))] px-5 text-sm font-semibold text-white shadow-[0_8px_28px_-10px_var(--color-brand-600)] transition-transform hover:-translate-y-0.5 sm:inline-flex"
          >
            Start a project
            <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
          </a>
          <button
            type="button"
            onClick={() => setOpen((value) => !value)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            className="grid size-10 place-items-center rounded-full border border-line bg-(--card) text-muted lg:hidden"
          >
            {open ? <X className="size-4.5" /> : <Menu className="size-4.5" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open ? (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="mx-4 mt-2 overflow-hidden rounded-3xl border border-line bg-[color-mix(in_oklab,var(--bg)_92%,transparent)] p-3 shadow-2xl backdrop-blur-xl lg:hidden"
          >
            <nav className="flex flex-col" aria-label="Mobile">
              {nav.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="rounded-2xl px-4 py-3 text-[15px] font-medium text-muted transition-colors hover:bg-(--card-hover) hover:text-(--fg)"
                >
                  {item.label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="mt-2 inline-flex h-12 items-center justify-center gap-2 rounded-2xl bg-[linear-gradient(110deg,var(--color-brand-600),var(--color-violet-brand))] text-sm font-semibold text-white"
              >
                Start a project
                <ArrowRight className="size-4" />
              </a>
            </nav>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
