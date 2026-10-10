import { ConfirmPanel } from "@/components/newsletter/ConfirmPanel";
import { PageHeader } from "@/components/layout/PageHeader";
import { Container } from "@/components/ui/Container";
import type { NewsletterEdition } from "@/content/newsletter";

/**
 * `token` is taken straight from the query string, so it arrives in the shape
 * Next gives it — absent, one value, or repeated. A repeated parameter is
 * normalised to the first rather than refused: nothing is trusted here anyway,
 * since the token is verified against the database before it does anything.
 */
export function ConfirmDocument({
  edition,
  token,
}: {
  readonly edition: NewsletterEdition;
  readonly token: string | string[] | undefined;
}) {
  const text = edition.confirm;
  const value = (Array.isArray(token) ? token[0] : token) ?? "";

  return (
    <>
      <PageHeader kicker={text.eyebrow} title={text.title} lede={text.lede} size="narrow" />
      <Container size="narrow" className="py-12 lg:py-16">
        <ConfirmPanel edition={edition} token={value} />
      </Container>
    </>
  );
}
