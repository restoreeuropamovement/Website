"use client";

import { motion } from "motion/react";
import type { ReactNode } from "react";

interface RevealProps {
  readonly children: ReactNode;
  readonly className?: string;
  /** Seconds. Use small, deliberate offsets to stagger a group. */
  readonly delay?: number;
  /** Travel distance in pixels. Kept small — this is a settle, not an entrance. */
  readonly distance?: number;
}

/**
 * The single reveal primitive: opacity plus a short upward settle, once, on
 * entering the viewport.
 *
 * Reduced motion and missing JavaScript are both handled by stylesheet rules
 * keyed on `data-reveal` — in `styles/globals.css` and in the no-script block of
 * the root layout respectively. Doing it there rather than with a branch in this
 * component keeps the server and client markup identical, which is what a
 * branch on `useReducedMotion()` would break.
 */
export function Reveal({ children, className, delay = 0, distance = 14 }: RevealProps) {
  return (
    <motion.div
      data-reveal
      className={className}
      initial={{ opacity: 0, y: distance }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "0px 0px -10% 0px" }}
      transition={{ duration: 0.75, delay, ease: [0.22, 0.61, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}
