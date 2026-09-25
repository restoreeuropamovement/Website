import { ChevronDown } from "lucide-react";
import Link from "next/link";
import type { PolicyCategory, PolicyCategoryId, PolicyEdition } from "@/content/policy";
import { localePath } from "@/lib/i18n";
import { policyHref } from "@/lib/policy";
import { cn } from "@/lib/utils";

interface PolicyFiltersProps {
  readonly edition: PolicyEdition;
  readonly categories: readonly PolicyCategory[];
  readonly q: string;
  readonly category?: PolicyCategoryId;
}

/*
 * The rule belongs to the list item and not to the link inside it: the item
 * is the grid cell and stretches to the height of its row, so a title that
 * wraps to two lines — most of them, in German — does not drop its rule below
 * the rules of the one-line titles beside it.
 */
const cell = "border-b border-hairline";
const row = "flex h-full items-baseline gap-3 py-2.5 transition-colors";
const rowOn = "text-ink";
const rowOff = "text-muted hover:text-ink";

/**
 * Searching and filtering both run through the URL rather than client state, so
 * any view of the catalogue can be linked to, bookmarked and read without
 * JavaScript. The search box is an ordinary GET form for the same reason.
 *
 * The ten sections were a row of pills, and ten pills bearing titles as long as
 * "Constitutional, Religious and Moral Order" wrap onto three rows in English
 * and four in French — a filter taller than the first result, pushing the
 * catalogue it filters below the fold. They are a disclosure now: one line
 * naming the section in force, opening onto the ten as a contents list. A
 * `details` element rather than a toggle, so this stays a Server Component and
 * keeps working with scripting off, like everything else on the page.
 */
export function PolicyFilters({ edition, categories, q, category }: PolicyFiltersProps) {
  const { locale } = edition;
  const text = edition.filters;
  const filtered = q !== "" || category !== undefined;
  const active = categories.find((item) => item.id === category);

  return (
    <div className="flex flex-col gap-6">
      <form
        method="get"
        action={localePath(locale, "/policy")}
        role="search"
        className="flex flex-col gap-3 sm:flex-row"
      >
        <div className="flex-1">
          <label htmlFor="policy-search" className="eyebrow mb-2 block text-muted">
            {text.searchLabel}
          </label>
          <input
            id="policy-search"
            type="search"
            name="q"
            defaultValue={q}
            placeholder={text.searchPlaceholder}
            className="w-full rounded-xs border border-field bg-surface px-4 py-3 text-[0.9375rem] text-body transition-colors placeholder:text-faint hover:border-ink focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-1 focus-visible:outline-burgundy"
          />
        </div>

        {/* The active filter survives a search, rather than being reset by it. */}
        {category ? <input type="hidden" name="category" value={category} /> : null}

        <div className="flex items-end gap-3">
          <button
            type="submit"
            className="inline-flex h-12 items-center justify-center rounded-xs bg-ink px-6 text-[0.875rem] font-medium text-canvas transition-colors hover:bg-burgundy"
          >
            {text.searchButton}
          </button>
          {filtered ? (
            <Link
              href={localePath(locale, "/policy")}
              className="inline-flex h-12 items-center text-[0.8125rem] text-muted underline decoration-rule underline-offset-[0.35em] transition-colors hover:text-burgundy hover:decoration-burgundy"
            >
              {text.clear}
            </Link>
          ) : null}
        </div>
      </form>

      <nav aria-label={text.sectionNavLabel}>
        {/* Open on a filtered view: a reader who is inside one section is the
            one most likely to want another. */}
        <details className="group border-y border-hairline" open={active !== undefined}>
          <summary className="flex cursor-pointer list-none items-center gap-4 py-4 [&::-webkit-details-marker]:hidden">
            <span className="eyebrow shrink-0 text-muted">{text.sectionHeading}</span>
            <span className="text-[0.9375rem] text-ink">
              {active ? active.title : text.allSections}
            </span>
            <ChevronDown
              aria-hidden="true"
              className="ml-auto size-4 shrink-0 text-muted transition-transform group-open:rotate-180"
            />
          </summary>

          <ul className="grid gap-x-12 pb-4 text-[0.875rem] sm:grid-cols-2 lg:grid-cols-3">
            <li className={cell}>
              <Link
                href={policyHref(locale, { q })}
                aria-current={category ? undefined : "true"}
                className={cn(row, category ? rowOff : rowOn)}
              >
                <span aria-hidden="true" className="eyebrow w-6 shrink-0 text-faint">
                  &mdash;
                </span>
                {text.allSections}
              </Link>
            </li>
            {categories.map((item) => (
              <li key={item.id} className={cell}>
                <Link
                  href={policyHref(locale, { q, category: item.id })}
                  aria-current={category === item.id ? "true" : undefined}
                  className={cn(row, category === item.id ? rowOn : rowOff)}
                >
                  <span
                    aria-hidden="true"
                    className="numerals-tabular eyebrow w-6 shrink-0 text-faint"
                  >
                    {item.numeral}
                  </span>
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </details>
      </nav>
    </div>
  );
}
