import Link from "next/link";
import type { PolicyEdition, PolicyEntry } from "@/content/policy";
import { getPolicyCategory } from "@/lib/policy";
import { localePath } from "@/lib/i18n";
import { cn } from "@/lib/utils";
import { PolicyStatusBadge } from "./PolicyStatusBadge";

interface PolicyCardProps {
  readonly edition: PolicyEdition;
  readonly entry: PolicyEntry;
  /**
   * Print the section this belongs to. Off when the cards are already grouped
   * under that section's heading, which is most of the catalogue: repeating
   * "Constitutional, Religious and Moral Order" on each of the nine cards
   * beneath a heading reading exactly that is 89 lines of noise down the page.
   */
  readonly showCategory?: boolean;
  readonly className?: string;
}

/**
 * A listing row. Title, status and the short answer, so the catalogue can be
 * scanned and a position understood without opening the full entry.
 *
 * The whole card is the target, not just the title. The card already lit up on
 * hover, which promised a hit area that only the four words of the heading
 * actually had. The overlay below is the usual way to keep that promise while
 * leaving the heading as the accessible name of the link.
 */
export function PolicyCard({ edition, entry, showCategory = true, className }: PolicyCardProps) {
  const category = showCategory ? getPolicyCategory(edition, entry.category) : undefined;

  return (
    <article
      className={cn(
        "group relative flex flex-col gap-3 border-t border-hairline pt-5",
        "transition-colors hover:border-rule-strong",
        "focus-within:border-rule-strong",
        className,
      )}
    >
      <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
        <PolicyStatusBadge status={entry.status} label={entry.statusLabel} />
        {category ? <span className="eyebrow text-faint">{category.title}</span> : null}
      </div>

      <h3 className="font-serif text-display-4 font-normal text-ink">
        <Link
          href={localePath(edition.locale, `/policy/${entry.slug}`)}
          className="transition-colors before:absolute before:inset-0 before:content-[''] group-hover:text-burgundy"
        >
          {entry.title}
        </Link>
      </h3>

      <p className="text-[0.9375rem] leading-relaxed text-muted">{entry.shortAnswer}</p>
    </article>
  );
}
