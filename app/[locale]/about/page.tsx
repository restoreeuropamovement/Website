import type { Metadata } from "next";

import { AboutDocument } from "@/components/about/AboutDocument";
import { getAbout } from "@/content/about";
import { localeAlternates, resolveLocale } from "@/lib/locale-metadata";
import { routes } from "@/lib/site";

export async function generateMetadata(props: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const locale = resolveLocale((await props.params).locale);
  const edition = await getAbout(locale);

  return {
    title: edition.meta.metaTitle,
    description: edition.meta.description,
    alternates: localeAlternates(locale, routes.about),
  };
}

export default async function TranslatedAboutPage(props: {
  params: Promise<{ locale: string }>;
}) {
  const locale = resolveLocale((await props.params).locale);

  return <AboutDocument edition={await getAbout(locale)} locale={locale} />;
}
