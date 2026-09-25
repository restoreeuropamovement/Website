import Link from "next/link";
import { PolicyCard } from "@/components/policy/PolicyCard";
import { Container } from "@/components/ui/Container";
import { getManifesto } from "@/content/manifesto";
import type { PolicyEdition, PolicyEntry } from "@/content/policy";
import { fill, plural } from "@/lib/format";
import { localePath } from "@/lib/i18n";
import { renderInline } from "@/lib/inline";
import {
  getManifestoBasis,
  getPolicyCategory,
  getPolicyPlacement,
  getRelatedEntries,
  policyHref,
} from "@/lib/policy";
import { cn, formatDate } from "@/lib/utils";

interface PolicyEntryDocumentProps {
  readonly edition: PolicyEdition;
  readonly entry: PolicyEntry;
}

/** One position, in one language. */
export async function PolicyEntryDocument({ edition, entry }: PolicyEntryDocumentProps) {
  const { locale } = edition;
  const text = edition.entry;

  const category = getPolicyCategory(edition, entry.category);
  const related = getRelatedEntries(edition, entry);
  const placement = getPolicyPlacement(edition, entry);
  /*
   * The manifesto in the language being read, because the basis below prints
   * each cited section's own summary and not only its title.
   */
  const basis = getManifestoBasis(entry, (await getManifesto(locale)).sections);
  const commitments = entry.policies?.length ?? 0;

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

          {/*
            Title and short answer, two columns, as every other page's header
            sets a title against its lede. The badge that used to sit above
            the title is gone with the status scheme, and so is the margin it
            was clearing.
          */}
          <div className="grid gap-8 lg:grid-cols-[minmax(0,1.5fr)_minmax(0,1fr)] lg:gap-16 xl:gap-24">
            <h1 className="max-w-4xl font-serif text-display-2 font-normal text-ink text-balance">
              {entry.title}
            </h1>

            <p className="text-lede text-muted lg:pt-2">{entry.shortAnswer}</p>
          </div>
        </Container>
      </header>

      <Container className="py-16 lg:py-24">
        {/*
          Two columns: the argument, and the apparatus that supports it.
          Where this entry sits in the catalogue, its search terms and its
          revision date are not part of the case being made — they are how a
          reader places and checks it — so they go in the rail.

          The measure is the grid track now, not a `max-w` inside a track that
          went on taking the width anyway. Capping the prose at 45rem inside a
          `1fr` column left a band of nothing between the text and a 16rem
          rail — a fifth of a 1280px screen, reading as a column that had
          failed to fill rather than as a margin. The rail takes that width
          instead: the prose stops at the measure and everything past it
          belongs to the apparatus, so the two columns still start where the
          title above them does.
        */}
        <div className="grid gap-14 lg:grid-cols-[minmax(0,var(--container-reading))_minmax(16rem,1fr)] lg:gap-16 xl:gap-20">
          <div className="flex min-w-0 flex-col gap-14">
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
                {/* Counted, not asserted: how many commitments follow. */}
                <div className="mb-4 flex items-baseline justify-between gap-6">
                  <h2 id="policies-heading" className="font-serif text-[0.9375rem] text-muted">
                    {text.policiesHeading}
                  </h2>
                  <p className="numerals-tabular text-micro text-faint">
                    {plural(locale, commitments, text.commitments)}
                  </p>
                </div>
                {/* The rule that opens the next section closes the last row. */}
                <ul className="flex flex-col border-t border-hairline">
                  {entry.policies.map((item) => (
                    <li
                      key={item}
                      className="border-b border-hairline py-4 text-reading leading-relaxed text-body/92 last:border-b-0"
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

            {/*
              What the position rests on, in the argument rather than in the
              rail. It was a list of manifesto section titles beside the text,
              which told a reader that a longer document existed and nothing
              about what it said at the place cited. Each section's own summary
              is already written and already translated; printing it is the
              difference between a reference and a reason.
            */}
            {basis.length > 0 ? (
              <section aria-labelledby="basis-heading" className="border-t border-hairline pt-10">
                <h2 id="basis-heading" className="mb-4 font-serif text-[0.9375rem] text-muted">
                  {text.basisHeading}
                </h2>
                <ul className="flex flex-col border-t border-hairline">
                  {basis.map((section) => (
                    <li key={section.id} className="border-b border-hairline last:border-b-0">
                      <Link
                        href={localePath(locale, `/manifesto#${section.id}`)}
                        className="group flex flex-col gap-2 py-5 sm:flex-row sm:gap-6"
                      >
                        <span className="numerals-tabular eyebrow shrink-0 text-faint sm:w-10 sm:pt-1.5">
                          {section.numeral}
                        </span>
                        <span className="flex flex-col gap-1.5">
                          <span className="font-serif text-[1.0625rem] leading-snug text-ink transition-colors group-hover:text-burgundy">
                            {section.title}
                          </span>
                          <span className="text-[0.9375rem] leading-relaxed text-muted">
                            {section.summary}
                          </span>
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </section>
            ) : null}
          </div>

          <aside className="flex flex-col gap-10 border-t border-hairline pt-8 lg:sticky lg:top-24 lg:self-start lg:border-t-0 lg:pt-2">
            {/*
              Ninety-eight positions, and until now an entry said nothing about
              being one of them. The section it belongs to, and which of that
              section's entries it is — both counted from the catalogue's own
              order.
            */}
            {category ? (
              <section aria-labelledby="placement-heading">
                <h2 id="placement-heading" className="mb-4 font-serif text-[0.9375rem] text-muted">
                  {edition.filters.sectionHeading}
                </h2>
                <Link
                  href={policyHref(locale, { category: category.id })}
                  className="group flex items-baseline gap-3"
                >
                  <span className="numerals-tabular eyebrow w-7 shrink-0 text-faint">
                    {category.numeral}
                  </span>
                  <span className="font-serif text-[1rem] leading-snug text-ink transition-colors group-hover:text-burgundy">
                    {category.title}
                  </span>
                </Link>
                <p className="numerals-tabular mt-3 pl-10 text-micro text-faint">
                  {fill(text.sectionPosition, {
                    index: placement.index,
                    total: placement.total,
                  })}
                </p>
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

        {/*
          The neighbouring positions, given the weight of a section heading
          rather than a footnote. A catalogue is read by following what it
          cross-references, and these are the entries the catalogue itself
          names — the same cards the index is scanned with.
        */}
        {related.length > 0 ? (
          <section
            aria-labelledby="related-heading"
            className="mt-20 border-t border-hairline pt-12 lg:mt-24"
          >
            <h2 id="related-heading" className="font-serif text-display-3 font-normal text-ink">
              {text.relatedHeading}
            </h2>
            <ul className="mt-10 grid gap-x-10 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((item) => (
                <li key={item.slug} className="flex">
                  <PolicyCard edition={edition} entry={item} className="flex-1" />
                </li>
              ))}
            </ul>
          </section>
        ) : null}

        {/* The catalogue read straight through, for a reader doing that. */}
        {placement.previous || placement.next ? (
          <nav
            aria-label={text.breadcrumb}
            className="mt-16 grid gap-10 border-t border-hairline pt-10 sm:grid-cols-2 lg:mt-20"
          >
            {placement.previous ? (
              <Link
                href={localePath(locale, `/policy/${placement.previous.slug}`)}
                className="group flex flex-col gap-2"
              >
                <span className="eyebrow text-faint">{text.previous}</span>
                <span className="font-serif text-[1.125rem] leading-snug text-ink transition-colors group-hover:text-burgundy">
                  {placement.previous.title}
                </span>
              </Link>
            ) : null}
            {placement.next ? (
              <Link
                href={localePath(locale, `/policy/${placement.next.slug}`)}
                className={cn(
                  "group flex flex-col gap-2 sm:items-end sm:text-right",
                  placement.previous ? undefined : "sm:col-start-2",
                )}
              >
                <span className="eyebrow text-faint">{text.next}</span>
                <span className="font-serif text-[1.125rem] leading-snug text-ink transition-colors group-hover:text-burgundy">
                  {placement.next.title}
                </span>
              </Link>
            ) : null}
          </nav>
        ) : null}

        <p className="mt-16 flex flex-wrap items-baseline gap-x-4 gap-y-2 border-t border-hairline pt-10 text-[0.9375rem]">
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
      </Container>
    </>
  );
}
