import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export interface ContentsItem {
  readonly id: string;
  readonly title: string;
}

/**
 * A long document set beside a sticky index.
 *
 * The rail exists as much for composition as for navigation. A reading measure
 * is ~720px; the page container is 1360. Left-aligning the prose inside that
 * and leaving the rest empty is what made most of this site read as though it
 * had slid off the left edge of the screen. Putting the index in that space
 * gives the column a left wall to sit against and gives a long document the
 * one control it actually needs.
 *
 * Below `lg` the rail is dropped rather than stacked. A table of contents
 * above the text is something a reader on a phone scrolls past to reach what
 * they came for, and the pages that want in-page jumping on a small screen
 * have their own control for it.
 */
export function DocumentLayout({
  label,
  items,
  children,
  className,
}: {
  /** Heading for the index, translated by the caller. */
  readonly label: string;
  readonly items: readonly ContentsItem[];
  readonly children: ReactNode;
  readonly className?: string;
}) {
  return (
    <div
      className={cn(
        "grid gap-16 lg:grid-cols-[15rem_minmax(0,1fr)] lg:gap-16 xl:grid-cols-[17rem_minmax(0,1fr)] xl:gap-24",
        className,
      )}
    >
      <nav aria-label={label} className="hidden lg:block">
        <div className="sticky top-24">
          <h2 className="mb-4 font-serif text-[0.9375rem] text-muted">{label}</h2>
          <ol className="flex flex-col border-l border-hairline">
            {items.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  className="-ml-px block border-l border-transparent py-2 pl-4 text-[0.8125rem] leading-snug text-muted transition-colors hover:border-rule hover:text-ink"
                >
                  {item.title}
                </a>
              </li>
            ))}
          </ol>
        </div>
      </nav>

      <div className="min-w-0">{children}</div>
    </div>
  );
}
