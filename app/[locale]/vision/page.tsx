import type { Metadata } from "next";

import { VisionDocument } from "@/components/vision/VisionDocument";
import { getVision } from "@/content/vision";
import { localeAlternates, resolveLocale } from "@/lib/locale-metadata";
import { routes } from "@/lib/site";

export async function generateMetadata(props: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const locale = resolveLocale((await props.params).locale);
  const edition = await getVision(locale);

  return {
    title: edition.meta.metaTitle,
    description: edition.meta.description,
    alternates: localeAlternates(locale, routes.vision),
  };
}

export default async function TranslatedVisionPage(props: {
  params: Promise<{ locale: string }>;
}) {
  const locale = resolveLocale((await props.params).locale);

  return <VisionDocument edition={await getVision(locale)} locale={locale} />;
}
