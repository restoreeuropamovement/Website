"use client";

import { ChevronDown } from "lucide-react";
import { useEffect, useMemo, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import type { SectionLink } from "./ManifestoSidebar";
import { useActiveSection } from "./useActiveSection";

interface ManifestoMobileNavProps {
  readonly sections: readonly SectionLink[];
}

/**
 * Section selector for small screens: a sticky bar naming the section being
 * read, which opens the full contents list.
 */
export function ManifestoMobileNav({ sections }: ManifestoMobileNavProps) {
  const ids = useMemo(() => sections.map((section) => section.id), [sections]);
  const active = useActiveSection(ids);
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const currentSection = sections.find((section) => section.id === active) ?? sections[0];

  useEffect(() => {
    if (!open) return;
    const onPointerDown = (event: PointerEvent) => {
      if (!containerRef.current?.contains(event.target as Node)) setOpen(false);
    };
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    document.addEventListener("pointerdown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("pointerdown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  return (
    <div
      ref={containerRef}
      className="sticky top-18 z-30 -mx-6 border-b border-hairline bg-canvas/95 backdrop-blur-[6px] sm:-mx-8 lg:hidden"
    >
      <button
        type="button"
        onClick={() => setOpen((value) => !value)}
        aria-expanded={open}
        className="flex w-full items-center justify-between gap-4 px-6 py-3.5 text-left sm:px-8"
      >
        <span className="flex min-w-0 items-baseline gap-3">
          <span className="eyebrow shrink-0 text-burgundy">{currentSection?.numeral}</span>
          <span className="truncate text-[0.9375rem] font-medium text-ink">
            {currentSection?.title}
          </span>
        </span>
        <span className="flex shrink-0 items-center gap-2">
          <span className="eyebrow text-muted">Contents</span>
          <ChevronDown
            className={cn("size-4 text-muted transition-transform", open && "rotate-180")}
            strokeWidth={1.5}
            aria-hidden="true"
          />
        </span>
      </button>

      {open ? (
        <ol className="max-h-[60svh] overflow-y-auto border-t border-hairline px-6 py-2 sm:px-8">
          {sections.map((section) => (
            <li key={section.id}>
              <a
                href={`#${section.id}`}
                onClick={() => setOpen(false)}
                aria-current={section.id === active ? "location" : undefined}
                className={cn(
                  "flex gap-4 border-b border-hairline py-3 text-[0.9375rem] last:border-b-0",
                  section.id === active ? "text-ink" : "text-muted",
                )}
              >
                <span className="w-9 shrink-0 text-[0.6875rem] tracking-[0.08em] text-faint">
                  {section.numeral}
                </span>
                <span>{section.title}</span>
              </a>
            </li>
          ))}
        </ol>
      ) : null}
    </div>
  );
}
