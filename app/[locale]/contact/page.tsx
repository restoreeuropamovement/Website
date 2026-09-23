import type { Metadata } from "next";

import { ContactDocument } from "@/components/forms/ContactDocument";
import { getInvolvement } from "@/content/involvement";
import { localeAlternates, resolveLocale } from "@/lib/locale-metadata";
import { routes } from "@/lib/site";

export async function generateMetadata(props: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const locale = resolveLocale((await props.params).locale);
  const edition = await getInvolvement(locale);

  return {
    title: edition.contact.metaTitle,
    description: edition.contact.description,
    alternates: localeAlternates(locale, routes.contact),
  };
}

export default async function TranslatedContactPage(props: {
  params: Promise<{ locale: string }>;
}) {
  const locale = resolveLocale((await props.params).locale);

  return <ContactDocument edition={await getInvolvement(locale)} />;
}
