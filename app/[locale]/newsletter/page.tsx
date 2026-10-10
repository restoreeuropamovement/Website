import type { Metadata } from "next";

import { NewsletterDocument } from "@/components/newsletter/NewsletterDocument";
import { getNewsletter } from "@/content/newsletter";
import { localeAlternates, resolveLocale } from "@/lib/locale-metadata";
import { routes } from "@/lib/site";

export async function generateMetadata(props: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const locale = resolveLocale((await props.params).locale);
  const edition = await getNewsletter(locale);

  return {
    title: edition.metaTitle,
    description: edition.description,
    alternates: localeAlternates(locale, routes.newsletter),
  };
}

export default async function TranslatedNewsletterPage(props: {
  params: Promise<{ locale: string }>;
}) {
  const locale = resolveLocale((await props.params).locale);

  return <NewsletterDocument edition={await getNewsletter(locale)} />;
}
