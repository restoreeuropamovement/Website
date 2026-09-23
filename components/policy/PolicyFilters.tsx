import Link from "next/link";
import type {
  PolicyCategory,
  PolicyCategoryId,
  PolicyEdition,
  PolicyStatusId,
  PolicyStatusOption,
} from "@/content/policy";
import { localePath } from "@/lib/i18n";
import { policyHref } from "@/lib/policy";
import { cn } from "@/lib/utils";

interface PolicyFiltersProps {
  readonly edition: PolicyEdition;
  readonly categories: readonly PolicyCategory[];
  /** Only statuses the catalogue actually uses, so no pill returns nothing. */
  readonly statuses: readonly PolicyStatusOption[];
  readonly q: string;
  readonly category?: PolicyCategoryId;
  readonly status?: PolicyStatusId;
}

const pill =
  "inline-flex h-9 items-center border px-4 text-[0.8125rem] font-medium transition-colors";
const pillOn = "border-ink bg-ink text-canvas";
const pillOff = "border-hairline text-muted hover:border-ink hover:text-ink";

/**
 * Searching and filtering both run through the URL rather than client state, so
 * any view of the catalogue can be linked to, bookmarked and read without
 * JavaScript. The search box is an ordinary GET form for the same reason.
 */
export function PolicyFilters({
  edition,
  categories,
  statuses,
  q,
  category,
  status,
}: PolicyFiltersProps) {
  const { locale } = edition;
  const text = edition.filters;
  const filtered = q !== "" || category !== undefined || status !== undefined;

  return (
    <div className="flex flex-col gap-8">
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

        {/* The active filters survive a search, rather than being reset by it. */}
        {category ? <input type="hidden" name="category" value={category} /> : null}
        {status ? <input type="hidden" name="status" value={status} /> : null}

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
        <h2 className="eyebrow mb-3 text-muted">{text.sectionHeading}</h2>
        <ul className="flex flex-wrap items-center gap-2">
          <li>
            <Link
              href={policyHref(locale, { q, status })}
              aria-current={category ? undefined : "true"}
              className={cn(pill, category ? pillOff : pillOn)}
            >
              {text.allSections}
            </Link>
          </li>
          {categories.map((item) => (
            <li key={item.id}>
              <Link
                href={policyHref(locale, { q, status, category: item.id })}
                aria-current={category === item.id ? "true" : undefined}
                className={cn(pill, category === item.id ? pillOn : pillOff)}
              >
                <span aria-hidden="true" className="mr-2 text-faint">
                  {item.numeral}
                </span>
                {item.title}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      <nav aria-label={text.statusNavLabel}>
        <h2 className="eyebrow mb-3 text-muted">{text.statusHeading}</h2>
        <ul className="flex flex-wrap items-center gap-2">
          <li>
            <Link
              href={policyHref(locale, { q, category })}
              aria-current={status ? undefined : "true"}
              className={cn(pill, status ? pillOff : pillOn)}
            >
              {text.anyStatus}
            </Link>
          </li>
          {statuses.map((item) => (
            <li key={item.id}>
              <Link
                href={policyHref(locale, { q, category, status: item.id })}
                aria-current={status === item.id ? "true" : undefined}
                className={cn(pill, status === item.id ? pillOn : pillOff)}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}
