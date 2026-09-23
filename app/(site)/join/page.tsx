import type { Metadata } from "next";
import { JoinForm } from "@/components/forms/JoinForm";
import { Container } from "@/components/ui/Container";
import { PageHeader } from "@/components/layout/PageHeader";
import { europeanCountries, joinMeta, resolveInvolvementRole } from "@/content/involvement";
import { alternateLanguages } from "@/lib/i18n";
import { routes } from "@/lib/site";

export const metadata: Metadata = {
  title: "Join",
  description:
    "Join Restore Europa Movement as a member, or volunteer to help build it.",
  alternates: {
    canonical: routes.join,
    languages: alternateLanguages(routes.join),
  },
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
  const role = resolveInvolvementRole(
    Array.isArray(searchParams.role) ? searchParams.role[0] : searchParams.role,
  );

  return (
    <>
      <PageHeader
        kicker={joinMeta.eyebrow}
        title={joinMeta.title}
        lede={joinMeta.lede}
        size="narrow"
      >
        {country ? (
          <p className="mt-6 border-l border-rule py-1 pl-5 text-[0.9375rem] leading-relaxed text-muted">
            You arrived from the wing in {country}, so the form below is set to it. Change either
            field if that is not right.
          </p>
        ) : null}
      </PageHeader>

      <Container size="narrow" className="py-14 lg:py-20">
        <JoinForm initialCountry={country} initialRole={role} />
      </Container>
    </>
  );
}
