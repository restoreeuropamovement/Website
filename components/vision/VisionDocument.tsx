import Link from "next/link";

import { ContentBlocks } from "@/components/content/ContentBlocks";
import { EditorialImage } from "@/components/media/EditorialImage";
import { Container } from "@/components/ui/Container";
import { DocumentLayout } from "@/components/layout/DocumentLayout";
import { PageHeader } from "@/components/layout/PageHeader";
import { images } from "@/content/images";
import type { VisionEdition } from "@/content/vision";
import { localePath, type Locale } from "@/lib/i18n";
import { routes } from "@/lib/site";
import { pad } from "@/lib/utils";

/**
 * The vision page, rendered from an edition rather than from imports.
 *
 * Both routes share this: `/vision` passes the English edition, `/[locale]/vision`
 * passes a translated one. Before this existed the localised route re-exported
 * the English page, so /de/vision was German chrome around English prose —
 * which is worse than no translation, because the language switcher claims a
 * translation exists.
 *
 * Every link goes through `localePath`, so a reader who arrived in Italian is
 * still in Italian after clicking "the principle behind it".
 */
export function VisionDocument({
  edition,
  locale,
}: {
  readonly edition: VisionEdition;
  readonly locale: Locale;
}) {
  const path = (target: string) => localePath(locale, target);

  return (
    <>
      <PageHeader
        kicker={edition.meta.eyebrow}
        title={edition.meta.title}
        lede={edition.meta.lede}
      />

      <Container className="py-12 lg:py-16">
        <ContentBlocks
          blocks={edition.meta.intro}
          locale={locale}
          className="max-w-(--container-reading)"
        />

        <div className="mt-12">
          <EditorialImage
            slot={images.valleyWide}
            aspect="aspect-[21/9] sm:aspect-[24/7]"
            sizes="100vw"
          />
        </div>

        <DocumentLayout
          label={edition.outcomesHeading}
          items={edition.outcomes}
          className="mt-16"
        >
          <h2 className="font-serif text-display-3 font-normal text-ink lg:sr-only">
            {edition.outcomesHeading}
          </h2>

          <ol className="mt-2 lg:mt-0">
            {edition.outcomes.map((outcome, index) => (
              <li key={outcome.id} id={outcome.id}>
                <article className="grid gap-6 border-b border-hairline py-10 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:gap-12 lg:py-12 lg:first:pt-0 xl:gap-16">
                  <header className="flex gap-5">
                    <span className="numerals-tabular pt-2 text-[0.8125rem] text-muted">
                      {pad(index + 1)}
                    </span>
                    <div className="flex flex-col gap-3">
                      <h3 className="font-serif text-display-4 font-normal text-ink">
                        {outcome.title}
                      </h3>
                      <p className="text-[0.9375rem] text-muted">{outcome.summary}</p>
                    </div>
                  </header>

                  <div className="flex flex-col items-start gap-4 lg:pt-2">
                    <p className="text-reading text-body/92">{outcome.body}</p>
                    <Link
                      href={path(outcome.principle)}
                      className="text-[0.875rem] text-ink underline decoration-rule underline-offset-[0.28em] hover:text-burgundy hover:decoration-burgundy"
                    >
                      {edition.principleLink}
                    </Link>
                  </div>
                </article>
              </li>
            ))}
          </ol>
        </DocumentLayout>

        <div className="mt-16 max-w-(--container-reading)">
          <h2 className="font-serif text-display-3 font-normal text-ink text-balance">
            {edition.closing.statement}
          </h2>
          <div className="mt-6">
            <ContentBlocks blocks={edition.closing.body} locale={locale} />
          </div>
          <p className="mt-8 flex flex-wrap items-baseline gap-x-4 gap-y-2 text-[0.9375rem]">
            <Link
              href={path(routes.manifesto)}
              className="text-ink underline decoration-rule underline-offset-[0.28em] hover:text-burgundy hover:decoration-burgundy"
            >
              {edition.closing.readManifesto}
            </Link>
            <span className="text-faint" aria-hidden="true">
              ·
            </span>
            <Link
              href={path(routes.join)}
              className="text-ink underline decoration-rule underline-offset-[0.28em] hover:text-burgundy hover:decoration-burgundy"
            >
              {edition.closing.getInvolved}
            </Link>
          </p>
        </div>
      </Container>
    </>
  );
}
