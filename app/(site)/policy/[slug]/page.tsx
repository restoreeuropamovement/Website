import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { PolicyEntryDocument } from "@/components/policy/PolicyEntryDocument";
import { englishPolicy, policySlugs } from "@/content/policy";
import { getPolicyEntry } from "@/lib/policy";

export function generateStaticParams() {
  return policySlugs.map((slug) => ({ slug }));
}

export async function generateMetadata(props: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await props.params;
  const entry = getPolicyEntry(englishPolicy, slug);
  if (!entry) return { title: englishPolicy.entry.notFound };

  return {
    title: entry.title,
    description: entry.shortAnswer,
    alternates: { canonical: `/policy/${entry.slug}` },
    keywords: [...entry.keywords],
    openGraph: {
      type: "article",
      title: entry.title,
      description: entry.shortAnswer,
      url: `/policy/${entry.slug}`,
    },
    twitter: {
      card: "summary_large_image",
      title: entry.title,
      description: entry.shortAnswer,
    },
  };
}

export default async function PolicyEntryPage(props: { params: Promise<{ slug: string }> }) {
  const { slug } = await props.params;
  const entry = getPolicyEntry(englishPolicy, slug);
  if (!entry) notFound();

  return <PolicyEntryDocument edition={englishPolicy} entry={entry} />;
}
