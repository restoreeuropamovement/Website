import Link from "next/link";
import type { PolicyEdition, PolicyEntry } from "@/content/policy";
import { plural } from "@/lib/format";
import { getPolicyCategory } from "@/lib/policy";
import { localePath } from "@/lib/i18n";
import { cn } from "@/lib/utils";

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
 * A listing row. The title and the short answer, so the catalogue can be
 * scanned and a position understood without opening the full entry.
 *
 * Three bands rather than a stack of three lines: a section line, the position
 * itself, and a footer carrying how many commitments the entry makes. The
 * footer is pushed down with `mt-auto`, so every card in a row draws its rule
 * at the same height however long its short answer runs — which is what a row
 * of six needs when the shortest answer is nine words and the longest is
 * forty-three, and the more so in French and Spanish, which run longer again.
 *
 * The count is the entry's own `policies` list measured, not a new fact about
 * it. It is the one piece of the full entry that a card can honestly show
 * without quoting: a position with eleven commitments behind it is a different
 * proposition from one with three, and the catalogue holds both.
 *
 * The whole card is the target, not just the title. The card already lit up on
 * hover, which promised a hit area that only the four words of the heading
 * actually had. The overlay below is the usual way to keep that promise while
 * leaving the heading as the accessible name of the link.
 */
export function PolicyCard({ edition, entry, showCategory = true, className }: PolicyCardProps) {
  const category = showCategory ? getPolicyCategory(edition, entry.category) : undefined;
  const commitments = entry.policies?.length ?? 0;

  return (
    <article
      className={cn(
        "group relative flex flex-col border-t border-hairline pt-5",
        "transition-colors hover:border-rule-strong",
        "focus-within:border-rule-strong",
        className,
      )}
    >
      {category ? (
        <p className="eyebrow mb-3 flex items-baseline gap-2.5 text-faint">
          <span className="numerals-tabular">{category.numeral}</span>
          <span>{category.title}</span>
        </p>
      ) : null}

      <h3 className="font-serif text-display-4 font-normal text-ink">
        <Link
          href={localePath(edition.locale, `/policy/${entry.slug}`)}
          className="transition-colors before:absolute before:inset-0 before:content-[''] group-hover:text-burgundy"
        >
          {entry.title}
        </Link>
      </h3>

      <p className="mt-3 mb-6 text-[0.9375rem] leading-relaxed text-muted">{entry.shortAnswer}</p>

      <p className="mt-auto flex items-baseline justify-between gap-4 border-t border-hairline pt-3.5 text-micro text-faint">
        <span className="numerals-tabular">
          {commitments > 0 ? plural(edition.locale, commitments, edition.entry.commitments) : null}
        </span>
        <span
          aria-hidden="true"
          className="text-muted transition-transform group-hover:translate-x-1"
        >
          &rarr;
        </span>
      </p>
    </article>
  );
}
