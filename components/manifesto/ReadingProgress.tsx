"use client";

import { useEffect, useState } from "react";

interface ReadingProgressProps {
  /** Element whose scroll extent the bar measures. */
  readonly targetId: string;
  /** Names the bar to a screen reader; nothing about it is visible text. */
  readonly label: string;
}

/**
 * A hairline of progress through the document, pinned beneath the masthead.
 * Deliberately not built on a scroll library: one passive listener and a
 * transform is cheaper and smooth enough.
 */
export function ReadingProgress({ targetId, label }: ReadingProgressProps) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const target = document.getElementById(targetId);
    if (!target) return;

    let frame = 0;
    const measure = () => {
      frame = 0;
      const rect = target.getBoundingClientRect();
      const scrollable = rect.height - window.innerHeight;
      if (scrollable <= 0) {
        setProgress(rect.bottom <= window.innerHeight ? 1 : 0);
        return;
      }
      setProgress(Math.min(Math.max(-rect.top / scrollable, 0), 1));
    };

    const onScroll = () => {
      if (frame === 0) frame = window.requestAnimationFrame(measure);
    };

    measure();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, [targetId]);

  return (
    <div
      className="sticky top-18 z-40 h-px w-full bg-hairline lg:top-20"
      role="progressbar"
      aria-label={label}
      aria-valuemin={0}
      aria-valuemax={100}
      aria-valuenow={Math.round(progress * 100)}
    >
      <div
        className="h-px origin-left bg-burgundy transition-transform duration-150 ease-out"
        style={{ transform: `scaleX(${progress})` }}
      />
    </div>
  );
}
