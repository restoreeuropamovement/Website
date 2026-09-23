import { JoinForm } from "@/components/forms/JoinForm";
import { Container } from "@/components/ui/Container";
import { PageHeader } from "@/components/layout/PageHeader";
import type { InvolvementEdition } from "@/content/involvement";
import { fill } from "@/lib/format";

interface JoinDocumentProps {
  readonly edition: InvolvementEdition;
  /** A wing slug or `other`, already checked against the list. */
  readonly country?: string;
  readonly role?: string;
}

export function JoinDocument({ edition, country, role }: JoinDocumentProps) {
  const text = edition.join;
  const countryLabel = edition.countries.find((option) => option.value === country)?.label;

  return (
    <>
      <PageHeader kicker={text.eyebrow} title={text.title} lede={text.lede} size="narrow">
        {countryLabel ? (
          <p className="mt-6 border-l border-rule py-1 pl-5 text-[0.9375rem] leading-relaxed text-muted">
            {fill(text.prefilled, { country: countryLabel })}
          </p>
        ) : null}
      </PageHeader>

      <Container size="narrow" className="py-14 lg:py-20">
        <JoinForm edition={edition} initialCountry={country} initialRole={role} />
      </Container>
    </>
  );
}
