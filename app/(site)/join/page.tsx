import type { Metadata } from "next";

import { JoinDocument } from "@/components/forms/JoinDocument";
import { englishInvolvement, pickCountry, pickRole } from "@/content/involvement";
import { alternateLanguages } from "@/lib/i18n";
import { routes } from "@/lib/site";

export const metadata: Metadata = {
  title: englishInvolvement.join.metaTitle,
  description: englishInvolvement.join.description,
  alternates: {
    canonical: routes.join,
    languages: alternateLanguages(routes.join),
  },
};

export default async function JoinPage(props: {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
}) {
  const searchParams = await props.searchParams;

  return (
    <JoinDocument
      edition={englishInvolvement}
      country={pickCountry(searchParams.country)}
      role={pickRole(searchParams.role)}
    />
  );
}
