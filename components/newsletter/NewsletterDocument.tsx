import { ContentBlocks } from "@/components/content/ContentBlocks";
import { SubscribeForm } from "@/components/newsletter/SubscribeForm";
import { PageHeader } from "@/components/layout/PageHeader";
import { Container } from "@/components/ui/Container";
import type { NewsletterEdition } from "@/content/newsletter";

/**
 * The subscription page.
 *
 * The prose comes first and the box second, which is the opposite of how a
 * signup page is usually built. It is deliberate: what is being asked for is
 * an address belonging to somebody whose interest in a political movement may
 * be worth concealing, and the paragraphs above the field are the terms on
 * which it is taken. A reader who hands it over without reading them has lost
 * nothing, and a reader who wants to know what happens to it does not have to
 * leave for the privacy note to find out.
 */
export function NewsletterDocument({ edition }: { readonly edition: NewsletterEdition }) {
  return (
    <>
      <PageHeader
        kicker={edition.eyebrow}
        title={edition.title}
        lede={edition.lede}
        size="narrow"
      />

      <Container size="narrow" className="py-12 lg:py-16">
        <ContentBlocks blocks={edition.body} locale={edition.locale} headingLevel={2} />

        <div className="mt-14 border-t border-hairline pt-12 lg:mt-20 lg:pt-16">
          <SubscribeForm edition={edition} />
        </div>
      </Container>
    </>
  );
}
