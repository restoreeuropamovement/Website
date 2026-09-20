import type { Metadata } from "next";
import { JoinForm } from "@/components/forms/JoinForm";
import { Container } from "@/components/ui/Container";
import { europeanCountries, involvementRoles, joinMeta } from "@/content/involvement";

export const metadata: Metadata = {
  title: "Get Involved",
  description:
    "Take part in Restore Europe Movement as a supporter, volunteer, local organiser, writer or professional contributor.",
  alternates: { canonical: "/join" },
};

/** Only values the form already offers are accepted from the query string. */
function pick(
  value: string | string[] | undefined,
  allowed: readonly string[],
): string | undefined {
  const candidate = Array.isArray(value) ? value[0] : value;
  return candidate && allowed.includes(candidate) ? candidate : undefined;
}

export default async function JoinPage(props: {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
}) {
  const searchParams = await props.searchParams;
  const country = pick(searchParams.country, europeanCountries);
  const role = pick(
    searchParams.role,
    involvementRoles.map((item) => item.id),
  );

  return (
    <>
      <header className="border-b border-hairline bg-canvas-deep pt-16 pb-14 lg:pt-24 lg:pb-20">
        <Container>
          <p className="eyebrow mb-6 flex items-center gap-3 text-burgundy">
            <span aria-hidden="true" className="h-px w-6 bg-burgundy/40" />
            {joinMeta.eyebrow}
          </p>
          <h1 className="font-serif text-display-1 font-normal text-ink">{joinMeta.title}</h1>
          <p className="mt-8 max-w-(--container-reading) text-lede text-muted">{joinMeta.lede}</p>
          {country ? (
            <p className="mt-6 max-w-(--container-reading) border-l-2 border-gold/65 py-1 pl-5 text-[0.9375rem] leading-relaxed text-muted">
              You arrived from the wing in {country}, so the form below is set to it. Change either
              field if that is not right.
            </p>
          ) : null}
        </Container>
      </header>

      <Container className="py-14 lg:py-20">
        <div className="max-w-(--container-narrow)">
          <JoinForm initialCountry={country} initialRole={role} />
        </div>
      </Container>
    </>
  );
}
