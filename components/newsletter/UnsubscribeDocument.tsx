import { UnsubscribePanel } from "@/components/newsletter/UnsubscribePanel";
import { PageHeader } from "@/components/layout/PageHeader";
import { Container } from "@/components/ui/Container";
import type { NewsletterEdition } from "@/content/newsletter";

/** See the note on `ConfirmDocument` for the shape `token` arrives in. */
export function UnsubscribeDocument({
  edition,
  token,
}: {
  readonly edition: NewsletterEdition;
  readonly token: string | string[] | undefined;
}) {
  const text = edition.unsubscribe;
  const value = (Array.isArray(token) ? token[0] : token) ?? "";

  return (
    <>
      <PageHeader kicker={text.eyebrow} title={text.title} lede={text.lede} size="narrow" />
      <Container size="narrow" className="py-12 lg:py-16">
        <UnsubscribePanel edition={edition} token={value} />
      </Container>
    </>
  );
}
