import type { Metadata } from "next";

import { ImprintDocument } from "@/components/legal/ImprintDocument";
import { getLegal } from "@/content/legal";
import { localeAlternates, resolveLocale } from "@/lib/locale-metadata";
import { routes } from "@/lib/site";

export async function generateMetadata(props: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const locale = resolveLocale((await props.params).locale);
  const edition = await getLegal(locale);

  return {
    title: edition.imprint.metaTitle,
    description: edition.imprint.description,
    alternates: localeAlternates(locale, routes.imprint),
  };
}

export default async function TranslatedImprintPage(props: {
  params: Promise<{ locale: string }>;
}) {
  const locale = resolveLocale((await props.params).locale);

  return <ImprintDocument edition={await getLegal(locale)} />;
}
