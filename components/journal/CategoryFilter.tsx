import Link from "next/link";
import type { JournalCategory } from "@/lib/content-types";
import { journalCategories } from "@/lib/journal-categories";
import { cn } from "@/lib/utils";

interface CategoryFilterProps {
  readonly active?: JournalCategory;
  /** Categories with no essay yet are shown, but not offered as links. */
  readonly available: readonly JournalCategory[];
}

/**
 * Filtering runs through the URL rather than client state, so a filtered view
 * can be linked to, bookmarked and read without JavaScript.
 */
export function CategoryFilter({ active, available }: CategoryFilterProps) {
  return (
    <nav aria-label="Filter essays by category">
      <ul className="flex flex-wrap items-center gap-x-2 gap-y-2">
        <li>
          <Link
            href="/journal"
            aria-current={active ? undefined : "true"}
            className={cn(
              "inline-flex h-9 items-center border px-4 text-[0.8125rem] font-medium transition-colors",
              active
                ? "border-hairline text-muted hover:border-ink hover:text-ink"
                : "border-ink bg-ink text-canvas",
            )}
          >
            All
          </Link>
        </li>

        {journalCategories.map((category) => {
          const enabled = available.includes(category);
          const current = active === category;

          if (!enabled) {
            return (
              <li key={category}>
                <span
                  title="No essays published in this category yet"
                  className="inline-flex h-9 cursor-not-allowed items-center border border-dashed border-hairline px-4 text-[0.8125rem] text-faint"
                >
                  {category}
                  <span className="sr-only"> — no essays yet</span>
                </span>
              </li>
            );
          }

          return (
            <li key={category}>
              <Link
                href={`/journal?category=${encodeURIComponent(category)}`}
                aria-current={current ? "true" : undefined}
                className={cn(
                  "inline-flex h-9 items-center border px-4 text-[0.8125rem] font-medium transition-colors",
                  current
                    ? "border-ink bg-ink text-canvas"
                    : "border-hairline text-muted hover:border-ink hover:text-ink",
                )}
              >
                {category}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
