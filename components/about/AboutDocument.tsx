import Link from "next/link";

import { ContentBlocks } from "@/components/content/ContentBlocks";
import { Container } from "@/components/ui/Container";
import { DocumentLayout } from "@/components/layout/DocumentLayout";
import { PageHeader } from "@/components/layout/PageHeader";
import type { AboutEdition } from "@/content/about";
import { localePath, type Locale } from "@/lib/i18n";
import { routes } from "@/lib/site";

/**
 * The about page, rendered from an edition rather than from imports, so that
 * `/about` and `/[locale]/about` are the same page in different languages
 * rather than the same English page behind two URLs.
 */
export function AboutDocument({
  edition,
  locale,
}: {
  readonly edition: AboutEdition;
  readonly locale: Locale;
}) {
  return (
    <>
      <PageHeader
        kicker={edition.meta.eyebrow}
        title={edition.meta.title}
        lede={edition.meta.lede}
      />

      <Container className="py-12 lg:py-16">
        <DocumentLayout label={edition.onThisPage} items={edition.sections}>
          <div className="flex max-w-(--container-reading) flex-col gap-12 lg:gap-16">
            {edition.sections.map((section) => (
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

            <section aria-labelledby="people-heading" className="border-t border-hairline pt-8">
              <h2
                id="people-heading"
                className="mb-4 font-serif text-display-3 font-normal text-ink"
              >
                {edition.leadershipHeading}
              </h2>
              <p className="mb-8 text-reading text-body/92">{edition.leadershipNote}</p>

              <ul className="flex flex-col">
                {edition.leadership.map((slot) => (
                  <li key={slot.role} className="border-t border-hairline py-5">
                    <h3 className="font-serif text-[1.25rem] text-ink">{slot.role}</h3>
                    <p className="mt-2 text-[0.9375rem] leading-relaxed text-muted">{slot.remit}</p>
                  </li>
                ))}
              </ul>
            </section>

            <p className="flex flex-wrap items-baseline gap-x-4 gap-y-2 border-t border-hairline pt-8 text-[0.9375rem]">
              <Link
                href={localePath(locale, routes.join)}
                className="text-ink underline decoration-rule underline-offset-[0.28em] hover:text-burgundy hover:decoration-burgundy"
              >
                {edition.actions.getInvolved}
              </Link>
              <span className="text-faint" aria-hidden="true">
                ·
              </span>
              <Link
                href={localePath(locale, routes.contact)}
                className="text-ink underline decoration-rule underline-offset-[0.28em] hover:text-burgundy hover:decoration-burgundy"
              >
                {edition.actions.contact}
              </Link>
            </p>
          </div>
        </DocumentLayout>
      </Container>
    </>
  );
}
