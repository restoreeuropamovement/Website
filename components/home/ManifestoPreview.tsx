import { ContentBlocks } from "@/components/content/ContentBlocks";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import type { HomeContent } from "@/content/home";
import { localePath, type Locale } from "@/lib/i18n";
import { routes } from "@/lib/site";

/**
 * The opening of the founding document, at the length somebody will actually
 * read standing up: about a hundred and thirty words.
 *
 * Set on the deep ground and in the reading measure, so it looks like the page
 * it is quoting rather than like another panel of marketing.
 */
export function ManifestoPreview({
  content,
  locale,
}: {
  readonly content: HomeContent["manifesto"];
  readonly locale: Locale;
}) {
  return (
    <Section tone="deep" spacing="lg" bordered labelledBy="manifesto-preview">
      <Container>
        <Reveal className="grid gap-10 lg:grid-cols-[minmax(0,14rem)_minmax(0,1fr)] lg:gap-16">
          <div>
            <p className="eyebrow mb-4 text-burgundy">{content.eyebrow}</p>
            <h2
              id="manifesto-preview"
              className="font-serif text-display-4 font-normal text-ink"
            >
              {content.title}
            </h2>
          </div>

          <div className="max-w-reading">
            <ContentBlocks blocks={content.body} locale={locale} headingLevel={3} />
            <div className="mt-9">
              <Button href={localePath(locale, routes.manifesto)} variant="secondary" size="lg">
                {/*
                  The arrow is punctuation, not a word: it stays out of the
                  language files so no translator has to carry a glyph, and so
                  it cannot be dropped in one edition and kept in another.
                */}
                {content.cta} <span aria-hidden="true">→</span>
              </Button>
            </div>
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}
