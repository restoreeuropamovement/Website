import Link from "next/link";
import type { PolicyEdition, PolicyEntry } from "@/content/policy";
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
 * Two things, in other words, and the card is now only those two. It used to
 * carry a third band: a second rule, the count of commitments behind the
 * entry, and an arrow that slid on hover. Each was defensible alone and the
 * three together were not, because this card is drawn a hundred times over. At
 * that multiple the furniture stops reading as structure and starts reading
 * as texture — two rules and two lines of grey metadata framing two lines of
 * actual position, repeated down the page until the catalogue looks like a
 * form rather than a set of arguments.
 *
 * The count is the thing most worth regretting: a position with eleven
 * commitments behind it really is a different proposition from one with
 * three. It survives on the entry page, where it is read once rather than a
 * hundred times and where the list it counts is directly beneath it.
 *
 * The section line keeps its title and loses its numeral. The numeral orders
 * ten sections; on a card it was a figure with nothing to be ordered against.
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
        "group relative flex flex-col border-t border-hairline pt-5",
        "transition-colors hover:border-rule-strong",
        "focus-within:border-rule-strong",
        className,
      )}
    >
      {category ? <p className="eyebrow mb-3 text-faint">{category.title}</p> : null}

      <h3 className="font-serif text-display-4 font-normal text-ink">
        <Link
          href={localePath(edition.locale, `/policy/${entry.slug}`)}
          className="transition-colors before:absolute before:inset-0 before:content-[''] group-hover:text-burgundy"
        >
          {entry.title}
        </Link>
      </h3>

      <p className="mt-3 text-[0.9375rem] leading-relaxed text-muted">{entry.shortAnswer}</p>
    </article>
  );
}
