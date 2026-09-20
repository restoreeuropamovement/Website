import type { Metadata } from "next";
import Link from "next/link";
import { PolicyCard } from "@/components/policy/PolicyCard";
import { PolicyFilters } from "@/components/policy/PolicyFilters";
import { PolicyStatusBadge } from "@/components/policy/PolicyStatusBadge";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { CATALOGUE_NOTICE, openQueue, policyMeta, statusLegend } from "@/content/policy";
import {
  getActivePolicyCategories,
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
    "Searchable, topic-by-topic positions of Restore Europe Movement, each marked with how settled it is: moral order, family, citizenship, economy, technology, education, justice, healthcare, environment and foreign policy.",
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
  const filtered = q !== "" || category !== undefined || status !== undefined;

  return (
    <>
      <header className="border-b border-hairline bg-canvas-deep pt-16 pb-14 lg:pt-24 lg:pb-20">
        <Container>
          <p className="eyebrow mb-6 flex items-center gap-3 text-burgundy">
            <span aria-hidden="true" className="h-px w-6 bg-burgundy/40" />
            {policyMeta.eyebrow}
          </p>
          <h1 className="font-serif text-display-1 font-normal text-ink">{policyMeta.title}</h1>

          <dl className="mt-8 flex flex-wrap gap-x-10 gap-y-4">
            <div>
              <dt className="eyebrow text-faint">Version</dt>
              <dd className="mt-1 text-[0.9375rem] text-muted">{policyMeta.version}</dd>
            </div>
            <div>
              <dt className="eyebrow text-faint">Date</dt>
              <dd className="mt-1 text-[0.9375rem] text-muted">
                <time dateTime={policyMeta.date}>{formatDate(policyMeta.date)}</time>
              </dd>
            </div>
            <div>
              <dt className="eyebrow text-faint">Framework</dt>
              <dd className="mt-1 text-[0.9375rem] text-muted">{policyMeta.framework}</dd>
            </div>
            <div>
              <dt className="eyebrow text-faint">Entries</dt>
              <dd className="mt-1 numerals-tabular text-[0.9375rem] text-muted">{total}</dd>
            </div>
          </dl>

          <p className="mt-10 max-w-(--container-reading) text-lede text-muted">{policyMeta.lede}</p>

          {policyMeta.body.map((paragraph) => (
            <p
              key={paragraph}
              className="mt-6 max-w-(--container-reading) text-reading leading-relaxed text-body/92"
            >
              {paragraph}
            </p>
          ))}

          <p className="mt-8 max-w-(--container-reading) border-l-2 border-gold/65 py-1 pl-5 text-[0.9375rem] leading-relaxed text-muted">
            {CATALOGUE_NOTICE}
          </p>
        </Container>
      </header>

      <section aria-labelledby="legend-heading" className="border-b border-hairline">
        <Container className="py-12 lg:py-16">
          <h2 id="legend-heading" className="eyebrow mb-6 text-muted">
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
        <PolicyFilters categories={categories} q={q} category={category} status={status} />

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
                <Reveal key={section.id}>
                  <section aria-labelledby={`${section.id}-heading`}>
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
                </Reveal>
              );
            })}
          </div>
        )}

        {!filtered ? (
          <Reveal>
            <section
              aria-labelledby="open-queue-heading"
              className="mt-20 border-t border-hairline pt-10 lg:mt-24"
            >
              <h2
                id="open-queue-heading"
                className="font-serif text-display-3 font-normal text-ink"
              >
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
          </Reveal>
        ) : null}
      </Container>
    </>
  );
}
