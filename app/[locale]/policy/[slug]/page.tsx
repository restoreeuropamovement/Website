import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { PolicyEntryDocument } from "@/components/policy/PolicyEntryDocument";
import { getPolicy, policySlugs } from "@/content/policy";
import { localeAlternates, resolveLocale } from "@/lib/locale-metadata";
import { getPolicyEntry } from "@/lib/policy";

export function generateStaticParams() {
  return policySlugs.map((slug) => ({ slug }));
}

export async function generateMetadata(props: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { locale: raw, slug } = await props.params;
  const locale = resolveLocale(raw);
  const edition = await getPolicy(locale);
  const entry = getPolicyEntry(edition, slug);
  if (!entry) return { title: edition.entry.notFound };

  return {
    title: entry.title,
    description: entry.shortAnswer,
    alternates: localeAlternates(locale, `/policy/${slug}`),
    keywords: [...entry.keywords],
    openGraph: {
      type: "article",
      title: entry.title,
      description: entry.shortAnswer,
      url: `/policy/${slug}`,
    },
    twitter: {
      card: "summary_large_image",
      title: entry.title,
      description: entry.shortAnswer,
    },
  };
}

export default async function TranslatedPolicyEntryPage(props: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale: raw, slug } = await props.params;
  const locale = resolveLocale(raw);
  const edition = await getPolicy(locale);
  const entry = getPolicyEntry(edition, slug);
  if (!entry) notFound();

  return <PolicyEntryDocument edition={edition} entry={entry} />;
}
