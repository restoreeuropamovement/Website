import type { Metadata } from "next";

import { WingsDocument } from "@/components/wings/WingsDocument";
import { getWings } from "@/content/wings";
import { localeAlternates, resolveLocale } from "@/lib/locale-metadata";
import { routes } from "@/lib/site";

export async function generateMetadata(props: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const locale = resolveLocale((await props.params).locale);
  const edition = await getWings(locale);

  return {
    title: edition.meta.metaTitle,
    description: edition.meta.description,
    alternates: localeAlternates(locale, routes.wings),
  };
}

export default async function TranslatedWingsPage(props: {
  params: Promise<{ locale: string }>;
}) {
  const locale = resolveLocale((await props.params).locale);

  return <WingsDocument edition={await getWings(locale)} />;
}
