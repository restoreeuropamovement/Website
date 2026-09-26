import { ContentBlocks } from "@/components/content/ContentBlocks";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import type { HomeContent } from "@/content/home";
import type { Locale } from "@/lib/i18n";

/**
 * The appeal, immediately under the masthead.
 *
 * On the `ink` slab, which `styles/globals.css` reserves for the footer and
 * "the major editorial statements". It is the only lifted ground on the page,
 * so using it here is what marks this passage as the one the reader is meant
 * to stop at rather than scan — and it separates two `deep` sections that
 * would otherwise run together into one long band.
 *
 * Set in the reading measure and centred under a single eyebrow: no heading,
 * because a heading would make this a section of the argument rather than the
 * reason for it, and no quotation marks, because these are the movement's own
 * words and punctuating them as a quotation would imply a source to cite.
 */
export function Creed({
  content,
  locale,
}: {
  readonly content: HomeContent["creed"];
  readonly locale: Locale;
}) {
  return (
    <Section tone="ink" spacing="lg" bordered>
      <Container>
        <Reveal className="mx-auto max-w-reading">
          <p className="eyebrow mb-6 text-gold-soft">{content.eyebrow}</p>
          <ContentBlocks blocks={content.body} tone="inverse" locale={locale} headingLevel={3} />
        </Reveal>
      </Container>
    </Section>
  );
}
