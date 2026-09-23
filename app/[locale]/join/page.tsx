import type { Metadata } from "next";

import { JoinDocument } from "@/components/forms/JoinDocument";
import { getInvolvement, pickCountry, pickRole } from "@/content/involvement";
import { localeAlternates, resolveLocale } from "@/lib/locale-metadata";
import { routes } from "@/lib/site";

export async function generateMetadata(props: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const locale = resolveLocale((await props.params).locale);
  const edition = await getInvolvement(locale);

  return {
    title: edition.join.metaTitle,
    description: edition.join.description,
    alternates: localeAlternates(locale, routes.join),
  };
}

export default async function TranslatedJoinPage(props: {
  params: Promise<{ locale: string }>;
  searchParams: Promise<Record<string, string | string[] | undefined>>;
}) {
  const [{ locale: raw }, searchParams] = await Promise.all([props.params, props.searchParams]);

  return (
    <JoinDocument
      edition={await getInvolvement(resolveLocale(raw))}
      country={pickCountry(searchParams.country)}
      role={pickRole(searchParams.role)}
    />
  );
}
