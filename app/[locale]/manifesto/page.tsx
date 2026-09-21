import type { Metadata } from "next";
import { ManifestoDocument } from "@/components/manifesto/ManifestoDocument";
import { getManifesto } from "@/content/manifesto";
import { localeTag } from "@/lib/i18n";
import { localeAlternates, resolveLocale } from "@/lib/locale-metadata";
import { routes } from "@/lib/site";

export async function generateMetadata(props: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const locale = resolveLocale((await props.params).locale);
  const edition = await getManifesto(locale);
  return {
    title: edition.title,
    description: edition.subtitle,
    alternates: localeAlternates(locale, routes.manifesto),
  };
}

export default async function TranslatedManifestoPage(props: {
  params: Promise<{ locale: string }>;
}) {
  const locale = resolveLocale((await props.params).locale);
  const edition = await getManifesto(locale);

  return <ManifestoDocument edition={edition} bcp47={localeTag(locale)} />;
}
