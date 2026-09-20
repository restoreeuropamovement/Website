"use client";

import { useMemo } from "react";
import { cn } from "@/lib/utils";
import { useActiveSection } from "./useActiveSection";

export interface SectionLink {
  readonly id: string;
  readonly numeral: string;
  readonly title: string;
}

interface ManifestoSidebarProps {
  readonly sections: readonly SectionLink[];
}

/** Sticky table of contents for desktop reading. */
export function ManifestoSidebar({ sections }: ManifestoSidebarProps) {
  const ids = useMemo(() => sections.map((section) => section.id), [sections]);
  const active = useActiveSection(ids);

  return (
    <nav aria-label="Manifesto contents" className="sticky top-32 max-h-[calc(100svh-10rem)] overflow-y-auto pr-4">
      <h2 className="eyebrow mb-5 text-muted">Contents</h2>
      <ol className="flex flex-col border-l border-hairline">
        {sections.map((section) => {
          const current = section.id === active;
          return (
            <li key={section.id}>
              <a
                href={`#${section.id}`}
                aria-current={current ? "location" : undefined}
                className={cn(
                  "-ml-px flex gap-3 border-l py-1.5 pl-4 text-[0.78125rem] leading-snug transition-colors",
                  current
                    ? "border-burgundy text-ink"
                    : "border-transparent text-muted hover:border-rule hover:text-ink",
                )}
              >
                <span
                  className={cn(
                    "w-7 shrink-0 text-[0.625rem] tracking-[0.08em]",
                    current ? "text-burgundy" : "text-faint",
                  )}
                >
                  {section.numeral}
                </span>
                <span>{section.title}</span>
              </a>
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
