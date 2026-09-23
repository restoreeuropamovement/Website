import type { Metadata } from "next";

import { PrivacyDocument } from "@/components/legal/PrivacyDocument";
import { getLegal } from "@/content/legal";
import { localeAlternates, resolveLocale } from "@/lib/locale-metadata";
import { routes } from "@/lib/site";

export async function generateMetadata(props: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const locale = resolveLocale((await props.params).locale);
  const edition = await getLegal(locale);

  return {
    title: edition.privacy.metaTitle,
    description: edition.privacy.description,
    alternates: localeAlternates(locale, routes.privacy),
  };
}

export default async function TranslatedPrivacyPage(props: {
  params: Promise<{ locale: string }>;
}) {
  const locale = resolveLocale((await props.params).locale);

  return <PrivacyDocument edition={await getLegal(locale)} />;
}
