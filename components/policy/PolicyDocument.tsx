import Link from "next/link";
import { PolicyCard } from "@/components/policy/PolicyCard";
import { PolicyFilters } from "@/components/policy/PolicyFilters";
import { Container } from "@/components/ui/Container";
import { PageHeader } from "@/components/layout/PageHeader";
import { POLICY_DATE, type PolicyEdition } from "@/content/policy";
import { plural } from "@/lib/format";
import { localePath } from "@/lib/i18n";
import { getActivePolicyCategories, runPolicyQuery, type PolicyQuery } from "@/lib/policy";
import { formatDate } from "@/lib/utils";

interface PolicyDocumentProps {
  readonly edition: PolicyEdition;
  readonly query: PolicyQuery & { readonly q: string };
}

/** The catalogue index, in one language. */
export function PolicyDocument({ edition, query }: PolicyDocumentProps) {
  const { locale, meta, index } = edition;
  const { q, category } = query;

  const { entries: results, suggestions, ranked } = runPolicyQuery(edition, query);
  const total = edition.entries.length;
  const categories = getActivePolicyCategories(edition);

  return (
    <>
      <PageHeader
        kicker={meta.eyebrow}
        title={meta.title}
        lede={meta.lede}
        aside={
          /* A dateline, in the words the entry pages date themselves with. */
          <p className="border-t border-hairline pt-5 text-micro text-faint">
            {edition.entry.lastUpdatedBefore}{" "}
            <time dateTime={POLICY_DATE}>{formatDate(POLICY_DATE, locale)}</time>
            {edition.entry.lastUpdatedAfter}
          </p>
        }
      >
        {/*
          The framing paragraphs run two-abreast rather than in a single
          column, which would leave the right half of a wide screen empty
          under a header that uses it. Columns rather than a grid: a grid
          flows left-to-right, so a reader going down the left column would
          jump from the first paragraph to the third.
        */}
        <div className="mt-10 border-t border-hairline pt-8 lg:columns-2 lg:gap-x-16 xl:gap-x-24">
          {meta.body.map((paragraph) => (
            <p
              key={paragraph}
              className="mb-5 break-inside-avoid text-reading leading-relaxed text-body/92 last:mb-0"
            >
              {paragraph}
            </p>
          ))}
        </div>
      </PageHeader>

      <Container className="py-12 lg:py-16">
        <PolicyFilters edition={edition} categories={categories} q={q} category={category} />

        <p aria-live="polite" className="mt-6 text-[0.9375rem] text-muted">
          {results.length === total
            ? plural(locale, total, index.showingAll)
            : plural(locale, results.length, index.showingSome, { total })}
        </p>

        {results.length === 0 ? (
          <p className="mt-8 text-reading text-muted">
            {index.noMatch}{" "}
            <Link
              href={localePath(locale, "/policy")}
              className="underline underline-offset-4 hover:text-burgundy"
            >
              {index.showAll}
            </Link>
            .
          </p>
        ) : ranked ? (
          /*
            A text search returns one list in relevance order. Putting it back
            under the ten section headings would sort the best match to
            wherever its section happens to fall, which is the ordering the
            ranking exists to replace. Browsing — no query, or a section
            filter alone — keeps the editorial sequence below.
          */
          <section aria-labelledby="relevance-heading" className="mt-12">
            <h2
              id="relevance-heading"
              className="border-t border-hairline pt-8 font-serif text-[0.9375rem] text-muted"
            >
              {index.relevanceHeading}
            </h2>
            <ul className="mt-10 grid gap-x-10 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
              {results.map((entry) => (
                <li key={entry.slug} className="flex">
                  <PolicyCard edition={edition} entry={entry} className="flex-1" />
                </li>
              ))}
            </ul>
          </section>
        ) : (
          <div className="mt-12 flex flex-col gap-16 lg:gap-20">
            {categories.map((section) => {
              const inSection = results.filter((entry) => entry.category === section.id);
              if (inSection.length === 0) return null;

              return (
                <section key={section.id} aria-labelledby={`${section.id}-heading`}>
                  {/*
                    Numeral and count above the title, summary beside it. The
                    summary used to sit under the heading at a reading measure,
                    which left the right half of every one of the ten section
                    breaks empty on a wide screen.
                  */}
                  <div className="grid gap-4 border-t border-hairline pt-8 lg:grid-cols-[minmax(0,1.5fr)_minmax(0,1fr)] lg:gap-16 xl:gap-24">
                    <div>
                      <p className="eyebrow flex items-baseline gap-3 text-faint">
                        <span className="numerals-tabular">{section.numeral}</span>
                        <span aria-hidden="true">·</span>
                        <span className="numerals-tabular">
                          {plural(locale, inSection.length, index.sectionCount)}
                        </span>
                      </p>
                      <h2
                        id={`${section.id}-heading`}
                        className="mt-3 font-serif text-display-3 font-normal text-ink"
                      >
                        {section.title}
                      </h2>
                    </div>
                    <p className="text-[0.9375rem] leading-relaxed text-muted lg:pt-8">
                      {section.summary}
                    </p>
                  </div>

                  <ul className="mt-10 grid gap-x-10 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
                    {inSection.map((entry) => (
                      <li key={entry.slug} className="flex">
                        <PolicyCard
                          edition={edition}
                          entry={entry}
                          showCategory={false}
                          className="flex-1"
                        />
                      </li>
                    ))}
                  </ul>
                </section>
              );
            })}
          </div>
        )}

        {/*
          The nearest entries, when the query matched little or nothing. A
          search that finds no position on a reader's issue is how somebody
          concludes the movement has none, so the page answers with what it
          does hold on the words it could recognise rather than with silence.
        */}
        {suggestions.length > 0 ? (
          <section
            aria-labelledby="suggestions-heading"
            className="mt-16 border-t border-hairline pt-10"
          >
            <h2
              id="suggestions-heading"
              className="font-serif text-display-3 font-normal text-ink"
            >
              {index.suggestions.heading}
            </h2>
            <p className="mt-4 max-w-(--container-reading) text-reading leading-relaxed text-body/92">
              {index.suggestions.body}
            </p>
            <ul className="mt-8 grid gap-x-10 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
              {suggestions.map((entry) => (
                <li key={entry.slug} className="flex">
                  <PolicyCard edition={edition} entry={entry} className="flex-1" />
                </li>
              ))}
            </ul>
          </section>
        ) : null}
      </Container>
    </>
  );
}
