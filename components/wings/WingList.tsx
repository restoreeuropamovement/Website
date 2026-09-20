import Link from "next/link";
import type { Wing } from "@/content/wings";
import { cn } from "@/lib/utils";

interface WingListProps {
  readonly wings: readonly Wing[];
  readonly className?: string;
  /** Tightens the cells for the shorter list shown at the foot of a wing page. */
  readonly density?: "comfortable" | "compact";
}

/**
 * The grid is drawn as hairline gaps over a ruled ground, which means a ragged
 * final row would show that ground through the empty cells. Region counts vary
 * (8 to 16), so the shortfall is filled explicitly.
 *
 * The column steps are 1 → 2 → 4 rather than 1 → 2 → 3 → 4 deliberately: every
 * step divides four, so padding the count to a multiple of four completes the
 * last row at every breakpoint.
 */
const COLUMNS = 4;

export function WingList({ wings, className, density = "comfortable" }: WingListProps) {
  const fillers = (COLUMNS - (wings.length % COLUMNS)) % COLUMNS;

  return (
    <ul
      className={cn(
        "grid gap-px border border-hairline bg-hairline sm:grid-cols-2 lg:grid-cols-4",
        className,
      )}
    >
      {wings.map((wing) => (
        <li key={wing.slug} className="bg-canvas transition-colors hover:bg-surface">
          <Link
            href={`/wings/${wing.slug}`}
            className={cn(
              "flex h-full flex-col gap-1",
              density === "compact" ? "px-5 py-4" : "px-6 py-5",
            )}
          >
            <span className="font-serif text-[1.1875rem] leading-snug text-ink">
              {wing.country}
            </span>
            {wing.endonyms.length > 0 ? (
              <span className="text-[0.8125rem] leading-snug text-muted">
                {wing.endonyms.map((endonym, index) => (
                  <span key={endonym.lang}>
                    {index > 0 ? <span aria-hidden="true"> · </span> : null}
                    <span lang={endonym.lang}>{endonym.name}</span>
                  </span>
                ))}
              </span>
            ) : null}
          </Link>
        </li>
      ))}

      {Array.from({ length: fillers }, (_, index) => (
        <li key={`filler-${index}`} aria-hidden="true" className="hidden bg-canvas sm:block" />
      ))}
    </ul>
  );
}
