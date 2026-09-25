import Link from "next/link";
import { PolicyCard } from "@/components/policy/PolicyCard";
import { PolicyStatusBadge } from "@/components/policy/PolicyStatusBadge";
import { Container } from "@/components/ui/Container";
import type { PolicyEdition, PolicyEntry } from "@/content/policy";
import { localePath } from "@/lib/i18n";
import { renderInline } from "@/lib/inline";
import { getManifestoBasis, getPolicyCategory, getRelatedEntries, policyHref } from "@/lib/policy";
import { formatDate } from "@/lib/utils";

interface PolicyEntryDocumentProps {
  readonly edition: PolicyEdition;
  readonly entry: PolicyEntry;
}

/** One position, in one language. */
export function PolicyEntryDocument({ edition, entry }: PolicyEntryDocumentProps) {
  const { locale, meta } = edition;
  const text = edition.entry;

  const category = getPolicyCategory(edition, entry.category);
  const related = getRelatedEntries(edition, entry);
  const basis = getManifestoBasis(entry);

  return (
    <>
      <header className="border-b border-hairline">
        <Container className="pt-10 pb-8 lg:pt-12 lg:pb-10">
          <p className="mb-6 flex flex-wrap items-center gap-x-3 gap-y-2 text-[0.8125rem] text-muted">
            <Link href={localePath(locale, "/policy")} className="hover:text-burgundy">
              {text.breadcrumb}
            </Link>
            {category ? (
              <>
                <span aria-hidden="true">·</span>
                <Link
                  href={policyHref(locale, { category: category.id })}
                  className="hover:text-burgundy"
                >
                  {category.title}
                </Link>
              </>
            ) : null}
          </p>

          <div className="grid gap-8 lg:grid-cols-[minmax(0,1.5fr)_minmax(0,1fr)] lg:gap-16 xl:gap-24">
            <div>
              <PolicyStatusBadge status={entry.status} label={entry.statusLabel} />
              <h1 className="mt-6 max-w-4xl font-serif text-display-2 font-normal text-ink text-balance">
                {entry.title}
              </h1>
            </div>

            <p className="text-lede text-muted lg:pt-2">{entry.shortAnswer}</p>
          </div>
        </Container>
      </header>

      <Container className="py-16 lg:py-24">
        {/*
          Two columns: the argument, and the apparatus that supports it.
          Manifesto basis, search terms and the revision date are not part of
          the case being made — they are how a reader checks it — so they go in
          the rail rather than at the bottom of the page, where they also
          happen to fill the half of the screen this page used to leave empty.
        */}
        <div className="grid gap-14 lg:grid-cols-[minmax(0,1fr)_16rem] lg:gap-16 xl:grid-cols-[minmax(0,1fr)_18rem] xl:gap-24">
          <div className="flex max-w-(--container-reading) min-w-0 flex-col gap-14">
            <section aria-labelledby="position-heading">
              <h2 id="position-heading" className="mb-4 font-serif text-[0.9375rem] text-muted">
                {text.positionHeading}
              </h2>
              <div className="flex flex-col gap-5">
                {entry.position.map((paragraph) => (
                  <p key={paragraph} className="text-reading leading-relaxed text-body/92">
                    {renderInline(paragraph, locale)}
                  </p>
                ))}
              </div>
            </section>

            {entry.policies ? (
              <section
                aria-labelledby="policies-heading"
                className="border-t border-hairline pt-10"
              >
                <h2 id="policies-heading" className="mb-4 font-serif text-[0.9375rem] text-muted">
                  {text.policiesHeading}
                </h2>
                <ul className="flex flex-col border-t border-hairline">
                  {entry.policies.map((item) => (
                    <li
                      key={item}
                      className="border-b border-hairline py-4 text-reading leading-relaxed text-body/92"
                    >
                      {renderInline(item, locale)}
                    </li>
                  ))}
                </ul>
              </section>
            ) : null}

            {entry.principle ? (
              <section
                aria-labelledby="principle-heading"
                className="border-t border-hairline pt-10"
              >
                <h2 id="principle-heading" className="mb-4 font-serif text-[0.9375rem] text-muted">
                  {text.principleHeading}
                </h2>
                <p className="border-l border-rule pl-5 font-serif text-display-4 leading-snug text-ink text-balance">
                  {renderInline(entry.principle, locale)}
                </p>
              </section>
            ) : null}

            {entry.limits ? (
              <section aria-labelledby="limits-heading" className="border-t border-hairline pt-10">
                <h2 id="limits-heading" className="mb-4 font-serif text-[0.9375rem] text-muted">
                  {text.limitsHeading}
                </h2>
                <ul className="flex flex-col gap-3">
                  {entry.limits.map((item) => (
                    <li key={item} className="flex gap-3 text-reading leading-relaxed text-body/92">
                      <span aria-hidden="true" className="mt-2 text-muted">
                        —
                      </span>
                      {renderInline(item, locale)}
                    </li>
                  ))}
                </ul>
              </section>
            ) : null}

          </div>

          <aside className="flex flex-col gap-10 border-t border-hairline pt-8 lg:sticky lg:top-24 lg:self-start lg:border-t-0 lg:pt-2">
            {basis.length > 0 ? (
              <section aria-labelledby="basis-heading">
                <h2 id="basis-heading" className="mb-4 font-serif text-[0.9375rem] text-muted">
                  {text.basisHeading}
                </h2>
                <ul className="flex flex-col gap-3">
                  {basis.map((section) => (
                    <li key={section.id}>
                      <Link
                        href={localePath(locale, `/manifesto#${section.id}`)}
                        className="group flex items-baseline gap-3"
                      >
                        <span className="numerals-tabular eyebrow w-7 shrink-0 text-faint">
                          {section.numeral}
                        </span>
                        <span className="font-serif text-[1rem] leading-snug text-ink transition-colors group-hover:text-burgundy">
                          {section.title}
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </section>
            ) : null}

            <section aria-labelledby="keywords-heading">
              <h2 id="keywords-heading" className="mb-4 font-serif text-[0.9375rem] text-muted">
                {text.keywordsHeading}
              </h2>
              <ul className="flex flex-wrap gap-2">
                {entry.keywords.map((keyword) => (
                  <li key={keyword}>
                    <Link
                      href={policyHref(locale, { q: keyword })}
                      className="inline-flex items-center border border-hairline px-3 py-1.5 text-[0.8125rem] text-muted transition-colors hover:border-ink hover:text-ink"
                    >
                      {keyword}
                    </Link>
                  </li>
                ))}
              </ul>
            </section>

            <p className="text-micro text-faint">
              {text.lastUpdatedBefore}{" "}
              <time dateTime={entry.lastUpdated}>{formatDate(entry.lastUpdated, locale)}</time>
              {text.lastUpdatedAfter}
            </p>
          </aside>
        </div>

        {related.length > 0 ? (
          <section
            aria-labelledby="related-heading"
            className="mt-20 border-t border-hairline pt-12 lg:mt-24"
          >
            <h2 id="related-heading" className="mb-8 font-serif text-[0.9375rem] text-muted">
              {text.relatedHeading}
            </h2>
            <ul className="grid gap-x-10 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((item) => (
                <li key={item.slug} className="flex">
                  <PolicyCard edition={edition} entry={item} className="flex-1" />
                </li>
              ))}
            </ul>
          </section>
        ) : null}

        <div className="mt-16 flex flex-col gap-4 border-t border-hairline pt-10 lg:mt-20">
          <p className="max-w-(--container-reading) text-micro leading-relaxed text-faint">
            {meta.notice}
          </p>
          <p className="mt-6 flex flex-wrap items-baseline gap-x-4 gap-y-2 text-[0.9375rem]">
            <Link
              href={localePath(locale, "/policy")}
              className="text-ink underline decoration-rule underline-offset-[0.28em] hover:text-burgundy hover:decoration-burgundy"
            >
              {text.allPositions}
            </Link>
            <span className="text-faint" aria-hidden="true">
              ·
            </span>
            <Link
              href={localePath(locale, "/manifesto")}
              className="text-ink underline decoration-rule underline-offset-[0.28em] hover:text-burgundy hover:decoration-burgundy"
            >
              {text.readManifesto}
            </Link>
          </p>
        </div>
      </Container>
    </>
  );
}
