"use client";

import { useEffect, useState } from "react";

/**
 * Tracks which section is currently being read.
 *
 * Uses the topmost section whose heading has passed under the masthead, rather
 * than raw intersection ratios — with sections of very unequal length that is
 * the reading position a person actually perceives.
 */
/**
 * `offset` must be at least the largest `scroll-margin-top` used by the tracked
 * sections, or a section reached by clicking its own link would not register as
 * the active one.
 */
export function useActiveSection(ids: readonly string[], offset = 160): string | undefined {
  const [active, setActive] = useState<string | undefined>(ids[0]);

  useEffect(() => {
    let frame = 0;

    const measure = () => {
      frame = 0;
      let current = ids[0];
      for (const id of ids) {
        const element = document.getElementById(id);
        if (!element) continue;
        if (element.getBoundingClientRect().top - offset <= 0) current = id;
      }

      // At the very bottom the last section is the one being read, however
      // short it is.
      if (window.innerHeight + window.scrollY >= document.body.scrollHeight - 8) {
        current = ids[ids.length - 1] ?? current;
      }

      setActive(current);
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
  }, [ids, offset]);

  return active;
}
