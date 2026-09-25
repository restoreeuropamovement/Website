import Link from "next/link";
import { PolicyCard } from "@/components/policy/PolicyCard";
import { PolicyFilters } from "@/components/policy/PolicyFilters";
import { PolicyStatusBadge } from "@/components/policy/PolicyStatusBadge";
import { Container } from "@/components/ui/Container";
import { PageHeader } from "@/components/layout/PageHeader";
import { POLICY_DATE, type PolicyEdition } from "@/content/policy";
import { plural } from "@/lib/format";
import { localePath } from "@/lib/i18n";
import {
  getActivePolicyCategories,
  getActivePolicyStatuses,
  runPolicyQuery,
  type PolicyQuery,
} from "@/lib/policy";
import { formatDate } from "@/lib/utils";

interface PolicyDocumentProps {
  readonly edition: PolicyEdition;
  readonly query: PolicyQuery & { readonly q: string };
}

/** The catalogue index, in one language. */
export function PolicyDocument({ edition, query }: PolicyDocumentProps) {
  const { locale, meta, labels, index } = edition;
  const { q, category, status } = query;

  const { entries: results, suggestions, ranked } = runPolicyQuery(edition, query);
  const total = edition.entries.length;
  const categories = getActivePolicyCategories(edition);
  const statuses = getActivePolicyStatuses(edition);
  const filtered = q !== "" || category !== undefined || status !== undefined;

  return (
    <>
      <PageHeader
        kicker={meta.eyebrow}
        title={meta.title}
        lede={meta.lede}
        aside={
          <dl className="grid grid-cols-2 gap-x-8 gap-y-5 border-t border-hairline pt-6">
            <div>
              <dt className="text-[0.8125rem] text-faint">{labels.version}</dt>
              <dd className="mt-1 text-[0.9375rem] text-muted">{meta.version}</dd>
            </div>
            <div>
              <dt className="text-[0.8125rem] text-faint">{labels.date}</dt>
              <dd className="mt-1 text-[0.9375rem] text-muted">
                <time dateTime={POLICY_DATE}>{formatDate(POLICY_DATE, locale)}</time>
              </dd>
            </div>
            <div>
              <dt className="text-[0.8125rem] text-faint">{labels.framework}</dt>
              <dd className="mt-1 text-[0.9375rem] text-muted">{meta.framework}</dd>
            </div>
            <div>
              <dt className="text-[0.8125rem] text-faint">{labels.entries}</dt>
              <dd className="mt-1 numerals-tabular text-[0.9375rem] text-muted">{total}</dd>
            </div>
          </dl>
        }
      >
        {/*
          Prose stays in one column and the notice takes the other. Setting
          the paragraphs themselves two-abreast would fill the width too, but
          a grid flows left-to-right: a reader going down the left column
          would jump from the first paragraph to the third.
        */}
        <div className="mt-10 grid gap-x-16 gap-y-8 border-t border-hairline pt-8 lg:grid-cols-[minmax(0,1.5fr)_minmax(0,1fr)] lg:gap-x-16 xl:gap-x-24">
          <div className="flex flex-col gap-5">
            {meta.body.map((paragraph) => (
              <p key={paragraph} className="text-reading leading-relaxed text-body/92">
                {paragraph}
              </p>
            ))}
          </div>

          <p className="self-start border-l border-rule py-1 pl-5 text-[0.9375rem] leading-relaxed text-muted lg:mt-1">
            {meta.notice}
          </p>
        </div>
      </PageHeader>

      <section aria-labelledby="legend-heading" className="border-b border-hairline">
        <Container className="py-12 lg:py-16">
          <h2 id="legend-heading" className="mb-6 font-serif text-[0.9375rem] text-muted">
            {index.legendHeading}
          </h2>
          <dl className="grid gap-px border border-hairline bg-hairline sm:grid-cols-2 lg:grid-cols-4">
            {edition.statuses.map((item) => (
              <div key={item.id} className="flex flex-col gap-3 bg-canvas p-6">
                <dt>
                  <PolicyStatusBadge status={item.id} label={item.label} />
                </dt>
                <dd className="text-[0.875rem] leading-relaxed text-muted">{item.description}</dd>
              </div>
            ))}
          </dl>
        </Container>
      </section>

      <Container className="py-14 lg:py-20">
        <PolicyFilters
          edition={edition}
          categories={categories}
          statuses={statuses}
          q={q}
          category={category}
          status={status}
        />

        <p
          aria-live="polite"
          className="mt-10 border-t border-hairline pt-8 text-[0.9375rem] text-muted"
        >
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
            ranking exists to replace. Browsing — no query, or a section or
            status filter alone — keeps the editorial sequence below.
          */
          <section aria-labelledby="relevance-heading" className="mt-12">
            <h2
              id="relevance-heading"
              className="border-t border-hairline pt-8 font-serif text-[0.9375rem] text-muted"
            >
              {index.relevanceHeading}
            </h2>
            <ul className="mt-10 grid gap-x-10 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
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
                  <div className="border-t border-hairline pt-8">
                    <p className="eyebrow numerals-tabular text-faint">{section.numeral}</p>
                    <h2
                      id={`${section.id}-heading`}
                      className="mt-3 font-serif text-display-3 font-normal text-ink"
                    >
                      {section.title}
                    </h2>
                    <p className="mt-3 max-w-(--container-reading) text-[0.9375rem] text-muted">
                      {section.summary}
                    </p>
                  </div>

                  <ul className="mt-10 grid gap-x-10 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
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
            <ul className="mt-8 grid gap-x-10 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
              {suggestions.map((entry) => (
                <li key={entry.slug} className="flex">
                  <PolicyCard edition={edition} entry={entry} className="flex-1" />
                </li>
              ))}
            </ul>
          </section>
        ) : null}

        {!filtered && index.openQueue.items.length > 0 ? (
          <Queue
            id="open-queue"
            heading={index.openQueue.heading}
            body={index.openQueue.body}
            items={index.openQueue.items}
          />
        ) : null}

        {!filtered && index.derivedQueue.items.length > 0 ? (
          <Queue
            id="derived-detail"
            heading={index.derivedQueue.heading}
            body={index.derivedQueue.body}
            items={index.derivedQueue.items}
          />
        ) : null}
      </Container>
    </>
  );
}

/** The two lists of what the catalogue has not settled. Identical furniture. */
function Queue({
  id,
  heading,
  body,
  items,
}: {
  readonly id: string;
  readonly heading: string;
  readonly body: string;
  readonly items: readonly string[];
}) {
  return (
    <section aria-labelledby={`${id}-heading`} className="mt-16 border-t border-hairline pt-10">
      <h2 id={`${id}-heading`} className="font-serif text-display-3 font-normal text-ink">
        {heading}
      </h2>
      <p className="mt-4 max-w-(--container-reading) text-reading leading-relaxed text-body/92">
        {body}
      </p>
      <ul className="mt-8 grid gap-x-10 gap-y-px border-t border-hairline sm:grid-cols-2 lg:grid-cols-3">
        {items.map((item) => (
          <li key={item} className="border-b border-hairline py-3 text-[0.9375rem] text-muted">
            {item}
          </li>
        ))}
      </ul>
    </section>
  );
}
