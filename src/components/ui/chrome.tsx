"use client";

import { useEffect, useState } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { useTheme } from "next-themes";
import { ArrowUp, Moon, Sun } from "lucide-react";

/* --------------------------------------------------------- Scroll progress */

export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const width = useSpring(scrollYProgress, {
    stiffness: 180,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <motion.div
      aria-hidden
      style={{ scaleX: width }}
      className="fixed inset-x-0 top-0 z-100 h-0.5 origin-left bg-[linear-gradient(90deg,var(--color-brand-500),var(--color-violet-brand),var(--color-accent-400))]"
    />
  );
}

/* ------------------------------------------------------------ Theme toggle */

export function ThemeToggle({ className }: { className?: string }) {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const isDark = resolvedTheme === "dark";

  return (
    <button
      type="button"
      aria-label={`Switch to ${isDark ? "light" : "dark"} theme`}
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className={`grid size-10 place-items-center rounded-full border border-line bg-(--card) text-muted transition-colors hover:border-line-strong hover:text-(--fg) ${className ?? ""}`}
    >
      {/* Render nothing until mounted so SSR and client markup agree */}
      {mounted ? (
        isDark ? (
          <Sun className="size-4.5" />
        ) : (
          <Moon className="size-4.5" />
        )
      ) : (
        <span className="size-4.5" />
      )}
    </button>
  );
}

/* ------------------------------------------------------------- Back to top */

export function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 900);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <button
      type="button"
      aria-label="Back to top"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className={`fixed bottom-6 right-6 z-50 grid size-11 place-items-center rounded-full border border-line-strong bg-(--bg-elevated) text-muted shadow-lg backdrop-blur transition-all duration-300 hover:text-(--fg) ${
        visible ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-4 opacity-0"
      }`}
    >
      <ArrowUp className="size-4.5" />
    </button>
  );
}
