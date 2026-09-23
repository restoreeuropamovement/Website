import Link from "next/link";
import { ContentBlocks } from "@/components/content/ContentBlocks";
import { SubsidiarityChain } from "@/components/wings/SubsidiarityChain";
import { WingList } from "@/components/wings/WingList";
import { Container } from "@/components/ui/Container";
import { getWingsByRegion, type Wing, type WingsEdition } from "@/content/wings";
import { fill } from "@/lib/format";
import { localePath } from "@/lib/i18n";

interface WingDocumentProps {
  readonly edition: WingsEdition;
  readonly wing: Wing;
}

/** One national wing, in one language. */
export function WingDocument({ edition, wing }: WingDocumentProps) {
  const { locale } = edition;
  const text = edition.wing;
  const neighbours = getWingsByRegion(edition, wing.region).filter(
    (item) => item.slug !== wing.slug,
  );

  return (
    <>
      <header className="border-b border-hairline">
        <Container className="pt-10 pb-8 lg:pt-12 lg:pb-10">
          <Link
            href={localePath(locale, "/wings")}
            className="text-[0.875rem] text-muted hover:text-burgundy"
          >
            {text.backLabel}
          </Link>

          <p className="mt-4 font-serif text-[0.9375rem] text-muted">{text.kicker}</p>

          <h1 className="mt-2 font-serif text-display-2 font-normal text-ink">{wing.country}</h1>

          {wing.endonyms.length > 0 ? (
            <p className="mt-4 font-serif text-display-4 leading-snug text-muted">
              {wing.endonyms.map((endonym, index) => (
                <span key={endonym.lang}>
                  {index > 0 ? <span aria-hidden="true"> · </span> : null}
                  <span lang={endonym.lang}>{endonym.name}</span>
                </span>
              ))}
            </p>
          ) : null}

          <p className="mt-8 border-t border-hairline pt-5 text-[0.9375rem] text-muted">
            {wing.regionName}
          </p>
        </Container>
      </header>

      <Container className="py-14 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,1.25fr)_minmax(0,1fr)] lg:gap-16">
          <ContentBlocks
            blocks={[
              { type: "lead", text: fill(text.lead, { country: wing.country }) },
              ...text.body,
            ]}
            locale={locale}
            className="max-w-(--container-reading)"
          />

          <SubsidiarityChain edition={edition} country={wing.country} />
        </div>

        <section aria-labelledby="remit-heading" className="mt-14 border-t border-hairline pt-10">
          <h2
            id="remit-heading"
            className="mb-4 font-serif text-display-3 font-normal text-ink"
          >
            {text.remitHeading}
          </h2>
          <p className="mb-8 max-w-(--container-reading) text-reading text-body/92">
            {fill(text.remitLede, { country: wing.country })}
          </p>

          <dl className="flex flex-col border-t border-hairline">
            {edition.remit.map((item) => (
              <div
                key={item.id}
                className="grid gap-2 border-b border-hairline py-5 sm:grid-cols-[14rem_minmax(0,1fr)] sm:gap-8"
              >
                <dt className="font-serif text-[1.125rem] text-ink">{item.term}</dt>
                <dd className="text-[0.9375rem] leading-relaxed text-muted">{item.description}</dd>
              </div>
            ))}
          </dl>
        </section>

        <section
          aria-labelledby="take-part-heading"
          className="mt-14 border-t border-hairline pt-10"
        >
          <h2
            id="take-part-heading"
            className="font-serif text-display-3 font-normal text-ink text-balance"
          >
            {fill(text.takePartHeading, { country: wing.country })}
          </h2>
          <p className="mt-4 max-w-2xl text-reading text-body/92">{text.takePartBody}</p>
          <p className="mt-6 flex flex-wrap items-baseline gap-x-4 gap-y-2 text-[0.9375rem]">
            {/*
              The prefill carries the slug, not the country name. A translated
              name in the query string would arrive at a select whose options
              are keyed by slug and match nothing, silently dropping the one
              piece of context the reader had already given us.
            */}
            <Link
              href={localePath(locale, `/join?country=${wing.slug}&role=volunteer`)}
              className="text-ink underline decoration-rule underline-offset-[0.28em] hover:text-burgundy hover:decoration-burgundy"
            >
              {text.getInvolved}
            </Link>
            <span className="text-faint" aria-hidden="true">
              ·
            </span>
            <Link
              href={localePath(locale, "/contact#chapters")}
              className="text-ink underline decoration-rule underline-offset-[0.28em] hover:text-burgundy hover:decoration-burgundy"
            >
              {text.contact}
            </Link>
          </p>
        </section>

        {neighbours.length > 0 ? (
          <section
            aria-labelledby="neighbours-heading"
            className="mt-14 border-t border-hairline pt-10"
          >
            <h2 id="neighbours-heading" className="mb-6 font-serif text-[0.9375rem] text-muted">
              {fill(text.neighboursHeading, { region: wing.regionName })}
            </h2>
            <WingList wings={neighbours} locale={locale} density="compact" />
          </section>
        ) : null}
      </Container>
    </>
  );
}
