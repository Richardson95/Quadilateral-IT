"use client";

import type { MouseEvent, ReactNode } from "react";
import { cn } from "@/lib/utils";

/**
 * Card surface that tracks the cursor and paints a soft radial highlight
 * (see the `.spotlight` utility in globals.css).
 */
export function SpotlightCard({
  children,
  className,
  as: Tag = "div",
}: {
  children: ReactNode;
  className?: string;
  as?: "div" | "article" | "li";
}) {
  function handleMove(event: MouseEvent<HTMLElement>) {
    const target = event.currentTarget;
    const rect = target.getBoundingClientRect();
    target.style.setProperty("--mx", `${event.clientX - rect.left}px`);
    target.style.setProperty("--my", `${event.clientY - rect.top}px`);
  }

  return (
    <Tag
      onMouseMove={handleMove}
      className={cn(
        "spotlight gradient-ring group relative isolate overflow-hidden rounded-3xl glass p-7 transition-[transform,background-color,border-color] duration-500 hover:-translate-y-1 hover:bg-(--card-hover)",
        className,
      )}
    >
      <div className="relative z-10 flex h-full flex-col">{children}</div>
    </Tag>
  );
}
