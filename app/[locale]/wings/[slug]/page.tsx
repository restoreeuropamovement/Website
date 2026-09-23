import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { WingDocument } from "@/components/wings/WingDocument";
import { getWing, getWings, wingSlugs } from "@/content/wings";
import { fill } from "@/lib/format";
import { localeAlternates, resolveLocale } from "@/lib/locale-metadata";

export function generateStaticParams() {
  return wingSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata(props: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { locale: raw, slug } = await props.params;
  const locale = resolveLocale(raw);
  const edition = await getWings(locale);
  const wing = getWing(edition, slug);
  if (!wing) return { title: edition.wing.notFound };

  const values = { country: wing.country };

  return {
    title: fill(edition.wing.metaTitle, values),
    description: fill(edition.wing.metaDescription, values),
    alternates: localeAlternates(locale, `/wings/${slug}`),
    openGraph: {
      title: fill(edition.wing.ogTitle, values),
      description: fill(edition.wing.ogDescription, values),
      url: `/wings/${slug}`,
      type: "website",
    },
  };
}

export default async function TranslatedWingPage(props: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale: raw, slug } = await props.params;
  const locale = resolveLocale(raw);
  const edition = await getWings(locale);
  const wing = getWing(edition, slug);
  if (!wing) notFound();

  return <WingDocument edition={edition} wing={wing} />;
}
