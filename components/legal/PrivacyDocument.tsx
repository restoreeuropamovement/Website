import { ContentBlocks } from "@/components/content/ContentBlocks";
import { Container } from "@/components/ui/Container";
import { PageHeader } from "@/components/layout/PageHeader";
import type { LegalEdition } from "@/content/legal";

export function PrivacyDocument({ edition }: { readonly edition: LegalEdition }) {
  const { locale } = edition;
  const text = edition.privacy;

  return (
    <>
      <PageHeader kicker={text.eyebrow} title={text.title} lede={text.lede} size="narrow" />

      <Container size="narrow" className="py-14 lg:py-20">
        <div className="flex flex-col gap-12">
          {text.sections.map((section) => (
            <section
              key={section.id}
              id={section.id}
              aria-labelledby={`${section.id}-heading`}
              className="border-t border-hairline pt-8 first:border-t-0 first:pt-0"
            >
              <h2
                id={`${section.id}-heading`}
                className="mb-6 font-serif text-display-3 font-normal text-ink"
              >
                {section.title}
              </h2>
              <ContentBlocks blocks={section.body} locale={locale} />
            </section>
          ))}
        </div>
      </Container>
    </>
  );
}
