import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PolicyCard } from "@/components/policy/PolicyCard";
import { PolicyStatusBadge } from "@/components/policy/PolicyStatusBadge";
import { Container } from "@/components/ui/Container";
import { CATALOGUE_NOTICE } from "@/content/policy";
import { renderInline } from "@/lib/inline";
import {
  getManifestoBasis,
  getPolicyCategory,
  getPolicyEntries,
  getPolicyEntry,
  getRelatedEntries,
} from "@/lib/policy";
import { formatDate } from "@/lib/utils";

export function generateStaticParams() {
  return getPolicyEntries().map((entry) => ({ slug: entry.slug }));
}

export async function generateMetadata(props: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await props.params;
  const entry = getPolicyEntry(slug);
  if (!entry) return { title: "Position not found" };

  return {
    title: entry.title,
    description: entry.shortAnswer,
    alternates: { canonical: `/policy/${entry.slug}` },
    keywords: [...entry.keywords],
    openGraph: {
      type: "article",
      title: entry.title,
      description: entry.shortAnswer,
      url: `/policy/${entry.slug}`,
    },
    twitter: {
      card: "summary_large_image",
      title: entry.title,
      description: entry.shortAnswer,
    },
  };
}

export default async function PolicyEntryPage(props: { params: Promise<{ slug: string }> }) {
  const { slug } = await props.params;
  const entry = getPolicyEntry(slug);
  if (!entry) notFound();

  const category = getPolicyCategory(entry.category);
  const related = getRelatedEntries(entry);
  const basis = getManifestoBasis(entry);

  return (
    <>
      <header className="border-b border-hairline">
        <Container className="pt-10 pb-8 lg:pt-12 lg:pb-10">
          <p className="mb-6 flex flex-wrap items-center gap-x-3 gap-y-2 text-[0.8125rem] text-muted">
            <Link href="/policy" className="hover:text-burgundy">
              Policy catalogue
            </Link>
            {category ? (
              <>
                <span aria-hidden="true">·</span>
                <Link href={`/policy?category=${category.id}`} className="hover:text-burgundy">
                  {category.title}
                </Link>
              </>
            ) : null}
          </p>

          <PolicyStatusBadge status={entry.status} secondaryStatus={entry.secondaryStatus} />

          <h1 className="mt-6 max-w-4xl font-serif text-display-2 font-normal text-ink">
            {entry.title}
          </h1>

          <p className="mt-6 max-w-(--container-reading) text-lede text-muted">
            {entry.shortAnswer}
          </p>
        </Container>
      </header>

      <Container className="py-16 lg:py-24">
        <div className="flex max-w-(--container-reading) flex-col gap-14">
          <section aria-labelledby="position-heading">
              <h2 id="position-heading" className="mb-4 font-serif text-[0.9375rem] text-muted">
                Position
              </h2>
              <div className="flex flex-col gap-5">
                {entry.position.map((paragraph) => (
                  <p key={paragraph} className="text-reading leading-relaxed text-body/92">
                    {renderInline(paragraph)}
                  </p>
                ))}
              </div>
            </section>

          {entry.policies ? (
            <section aria-labelledby="policies-heading" className="border-t border-hairline pt-10">
                <h2 id="policies-heading" className="mb-4 font-serif text-[0.9375rem] text-muted">
                  Policy
                </h2>
                <ul className="flex flex-col border-t border-hairline">
                  {entry.policies.map((item) => (
                    <li
                      key={item}
                      className="border-b border-hairline py-4 text-reading leading-relaxed text-body/92"
                    >
                      {renderInline(item)}
                    </li>
                  ))}
                </ul>
              </section>
          ) : null}

          {entry.principle ? (
            <section aria-labelledby="principle-heading" className="border-t border-hairline pt-10">
                <h2 id="principle-heading" className="mb-4 font-serif text-[0.9375rem] text-muted">
                  Principle
                </h2>
                <p className="border-l border-rule pl-5 font-serif text-display-4 leading-snug text-ink text-balance">
                  {renderInline(entry.principle)}
                </p>
              </section>
          ) : null}

          {entry.limits ? (
            <section aria-labelledby="limits-heading" className="border-t border-hairline pt-10">
                <h2 id="limits-heading" className="mb-4 font-serif text-[0.9375rem] text-muted">
                  Limits and unresolved details
                </h2>
                <ul className="flex flex-col gap-3">
                  {entry.limits.map((item) => (
                    <li
                      key={item}
                      className="flex gap-3 text-reading leading-relaxed text-body/92"
                    >
                      <span aria-hidden="true" className="mt-2 text-muted">
                        —
                      </span>
                      {renderInline(item)}
                    </li>
                  ))}
                </ul>
              </section>
          ) : null}

          {entry.implementationNote ? (
            <section aria-labelledby="implementation-heading">
                <h2 id="implementation-heading" className="sr-only">
                  Implementation note
                </h2>
                <div className="border border-rule bg-canvas-deep p-6 lg:p-8">
                  <p className="eyebrow mb-4 text-faint">Implementation note</p>
                  <p className="text-[0.9375rem] leading-relaxed text-muted">
                    {renderInline(entry.implementationNote)}
                  </p>
                </div>
              </section>
          ) : null}

          {basis.length > 0 ? (
            <section aria-labelledby="basis-heading" className="border-t border-hairline pt-10">
                <h2 id="basis-heading" className="mb-4 font-serif text-[0.9375rem] text-muted">
                  Manifesto basis
                </h2>
                <ul className="flex flex-col gap-3">
                  {basis.map((section) => (
                    <li key={section.id}>
                      <Link
                        href={`/manifesto#${section.id}`}
                        className="group flex items-baseline gap-4"
                      >
                        <span className="numerals-tabular eyebrow w-8 shrink-0 text-faint">
                          {section.numeral}
                        </span>
                        <span className="font-serif text-[1.125rem] text-ink transition-colors group-hover:text-burgundy">
                          {section.title}
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </section>
          ) : null}

          <section aria-labelledby="keywords-heading" className="border-t border-hairline pt-10">
              <h2 id="keywords-heading" className="mb-4 font-serif text-[0.9375rem] text-muted">
                Search terms
              </h2>
              <ul className="flex flex-wrap gap-2">
                {entry.keywords.map((keyword) => (
                  <li key={keyword}>
                    <Link
                      href={`/policy?q=${encodeURIComponent(keyword)}`}
                      className="inline-flex items-center border border-hairline px-3 py-1.5 text-[0.8125rem] text-muted transition-colors hover:border-ink hover:text-ink"
                    >
                      {keyword}
                    </Link>
                  </li>
                ))}
              </ul>
              <p className="mt-8 text-micro text-faint">
                Last updated{" "}
                <time dateTime={entry.lastUpdated}>{formatDate(entry.lastUpdated)}</time>.
              </p>
            </section>
        </div>

        {related.length > 0 ? (
          <section
              aria-labelledby="related-heading"
              className="mt-20 border-t border-hairline pt-12 lg:mt-24"
            >
              <h2 id="related-heading" className="mb-8 font-serif text-[0.9375rem] text-muted">
                Related positions
              </h2>
              <ul className="grid gap-x-10 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
                {related.map((item) => (
                  <li key={item.slug} className="flex">
                    <PolicyCard entry={item} className="flex-1" />
                  </li>
                ))}
              </ul>
            </section>
        ) : null}

        <div className="mt-16 flex flex-col gap-4 border-t border-hairline pt-10 lg:mt-20">
          <p className="max-w-(--container-reading) text-micro leading-relaxed text-faint">
            {CATALOGUE_NOTICE}
          </p>
          <p className="mt-6 flex flex-wrap items-baseline gap-x-4 gap-y-2 text-[0.9375rem]">
            <Link
              href="/policy"
              className="text-ink underline decoration-rule underline-offset-[0.28em] hover:text-burgundy hover:decoration-burgundy"
            >
              All positions
            </Link>
            <span className="text-faint" aria-hidden="true">
              ·
            </span>
            <Link
              href="/manifesto"
              className="text-ink underline decoration-rule underline-offset-[0.28em] hover:text-burgundy hover:decoration-burgundy"
            >
              Read the manifesto
            </Link>
          </p>
        </div>
      </Container>
    </>
  );
}
