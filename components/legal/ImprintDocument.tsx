import { ContentBlocks } from "@/components/content/ContentBlocks";
import { Container } from "@/components/ui/Container";
import { PageHeader } from "@/components/layout/PageHeader";
import type { LegalEdition } from "@/content/legal";

export function ImprintDocument({ edition }: { readonly edition: LegalEdition }) {
  const { locale } = edition;
  const text = edition.imprint;

  return (
    <>
      <PageHeader kicker={text.eyebrow} title={text.title} lede={text.lede} size="narrow" />

      <Container size="narrow" className="py-14 lg:py-20">
        <div className="flex flex-col gap-12">
          <ContentBlocks blocks={text.intro} locale={locale} />

          <section aria-labelledby="particulars-heading" className="border-t border-hairline pt-8">
            <h2
              id="particulars-heading"
              className="font-serif text-display-3 font-normal text-ink"
            >
              {text.particularsHeading}
            </h2>
            <p className="mt-4 text-[0.9375rem] leading-relaxed text-muted">
              {text.particularsNote}
            </p>
            <dl className="mt-8 flex flex-col border-t border-hairline">
              {text.entries.map((entry) => (
                <div
                  key={entry.id}
                  className="grid gap-1.5 border-b border-hairline py-4 sm:grid-cols-[16rem_1fr] sm:gap-8"
                >
                  <dt className="text-[0.9375rem] font-medium text-ink">{entry.term}</dt>
                  <dd className="text-[0.9375rem] leading-relaxed text-muted">
                    {entry.description}
                  </dd>
                </div>
              ))}
            </dl>
          </section>

          <section aria-label={text.aboutLabel} className="border-t border-hairline pt-8">
            <ContentBlocks blocks={text.closing} locale={locale} />
          </section>
        </div>
      </Container>
    </>
  );
}
