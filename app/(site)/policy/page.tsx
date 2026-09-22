import type { Metadata } from "next";
import Link from "next/link";
import { PolicyCard } from "@/components/policy/PolicyCard";
import { PolicyFilters } from "@/components/policy/PolicyFilters";
import { PolicyStatusBadge } from "@/components/policy/PolicyStatusBadge";
import { Container } from "@/components/ui/Container";
import { PageHeader } from "@/components/layout/PageHeader";
import {
  CATALOGUE_NOTICE,
  derivedDetailQueue,
  openQueue,
  policyMeta,
  statusLegend,
} from "@/content/policy";
import {
  getActivePolicyCategories,
  getActivePolicyStatuses,
  getPolicyEntries,
  parsePolicyCategory,
  parsePolicyStatus,
  parseQueryText,
  queryPolicyEntries,
} from "@/lib/policy";
import { formatDate } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Policy Catalogue",
  description:
    "Searchable, topic-by-topic positions of Restore Europa Movement, each marked with how settled it is: moral order, family, citizenship, economy, technology, education, justice, healthcare, environment and foreign policy.",
  alternates: { canonical: "/policy" },
};

export default async function PolicyPage(props: {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
}) {
  const searchParams = await props.searchParams;
  const q = parseQueryText(searchParams.q);
  const category = parsePolicyCategory(searchParams.category);
  const status = parsePolicyStatus(searchParams.status);

  const results = queryPolicyEntries({ q, category, status });
  const total = getPolicyEntries().length;
  const categories = getActivePolicyCategories();
  const statuses = getActivePolicyStatuses();
  const filtered = q !== "" || category !== undefined || status !== undefined;

  return (
    <>
      <PageHeader kicker={policyMeta.eyebrow} title={policyMeta.title}>
        <dl className="mt-8 flex flex-wrap gap-x-10 gap-y-4">
            <div>
              <dt className="text-[0.8125rem] text-faint">Version</dt>
              <dd className="mt-1 text-[0.9375rem] text-muted">{policyMeta.version}</dd>
            </div>
            <div>
              <dt className="text-[0.8125rem] text-faint">Date</dt>
              <dd className="mt-1 text-[0.9375rem] text-muted">
                <time dateTime={policyMeta.date}>{formatDate(policyMeta.date)}</time>
              </dd>
            </div>
            <div>
              <dt className="text-[0.8125rem] text-faint">Framework</dt>
              <dd className="mt-1 text-[0.9375rem] text-muted">{policyMeta.framework}</dd>
            </div>
            <div>
              <dt className="text-[0.8125rem] text-faint">Entries</dt>
              <dd className="mt-1 numerals-tabular text-[0.9375rem] text-muted">{total}</dd>
            </div>
          </dl>

          <p className="mt-8 max-w-(--container-reading) text-lede text-muted">{policyMeta.lede}</p>

          {policyMeta.body.map((paragraph) => (
            <p
              key={paragraph}
              className="mt-5 max-w-(--container-reading) text-reading leading-relaxed text-body/92"
            >
              {paragraph}
            </p>
          ))}

          <p className="mt-6 max-w-(--container-reading) border-l border-rule py-1 pl-5 text-[0.9375rem] leading-relaxed text-muted">
            {CATALOGUE_NOTICE}
          </p>
      </PageHeader>

      <section aria-labelledby="legend-heading" className="border-b border-hairline">
        <Container className="py-12 lg:py-16">
          <h2 id="legend-heading" className="mb-6 font-serif text-[0.9375rem] text-muted">
            Status legend
          </h2>
          <dl className="grid gap-px border border-hairline bg-hairline sm:grid-cols-2 lg:grid-cols-4">
            {statusLegend.map((item) => (
              <div key={item.status} className="flex flex-col gap-3 bg-canvas p-6">
                <dt>
                  <PolicyStatusBadge status={item.status} />
                </dt>
                <dd className="text-[0.875rem] leading-relaxed text-muted">{item.description}</dd>
              </div>
            ))}
          </dl>
        </Container>
      </section>

      <Container className="py-14 lg:py-20">
        <PolicyFilters
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
            ? `Showing all ${total} positions.`
            : `${results.length} of ${total} positions match.`}
        </p>

        {results.length === 0 ? (
          <p className="mt-8 text-reading text-muted">
            Nothing in the catalogue matches that.{" "}
            <Link href="/policy" className="underline underline-offset-4 hover:text-burgundy">
              Show all positions
            </Link>
            .
          </p>
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

                    <ul className="mt-10 grid gap-x-10 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
                      {inSection.map((entry) => (
                        <li key={entry.slug} className="flex">
                          <PolicyCard entry={entry} className="flex-1" />
                        </li>
                      ))}
                    </ul>
                  </section>
              );
            })}
          </div>
        )}

        {!filtered && openQueue.length > 0 ? (
          <section
            aria-labelledby="open-queue-heading"
            className="mt-16 border-t border-hairline pt-10"
          >
            <h2 id="open-queue-heading" className="font-serif text-display-3 font-normal text-ink">
              Open policy development queue
            </h2>
            <p className="mt-4 max-w-(--container-reading) text-reading leading-relaxed text-body/92">
              These questions are recorded as undecided rather than inferred from the ideology.
              They are listed so the gaps are visible instead of being quietly filled in.
            </p>
            <ul className="mt-8 grid gap-x-10 gap-y-px border-t border-hairline sm:grid-cols-2 lg:grid-cols-3">
              {openQueue.map((item) => (
                <li
                  key={item}
                  className="border-b border-hairline py-3 text-[0.9375rem] text-muted"
                >
                  {item}
                </li>
              ))}
            </ul>
          </section>
        ) : null}

        {!filtered && derivedDetailQueue.length > 0 ? (
          <section
            aria-labelledby="derived-detail-heading"
            className="mt-16 border-t border-hairline pt-10"
          >
            <h2
              id="derived-detail-heading"
              className="font-serif text-display-3 font-normal text-ink"
            >
              Settled in direction, not in detail
            </h2>
            <p className="mt-4 max-w-(--container-reading) text-reading leading-relaxed text-body/92">
              Every question in the catalogue now carries a position. These are the figures inside
              those positions that have not been fixed, and will not be invented before there is a
              basis for them.
            </p>
            <ul className="mt-8 grid gap-x-10 gap-y-px border-t border-hairline sm:grid-cols-2 lg:grid-cols-3">
              {derivedDetailQueue.map((item) => (
                <li
                  key={item}
                  className="border-b border-hairline py-3 text-[0.9375rem] text-muted"
                >
                  {item}
                </li>
              ))}
            </ul>
          </section>
        ) : null}
      </Container>
    </>
  );
}
