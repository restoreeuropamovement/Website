import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { WingDocument } from "@/components/wings/WingDocument";
import { englishWings, getWing, wingSlugs } from "@/content/wings";
import { fill } from "@/lib/format";
import { alternateLanguages } from "@/lib/i18n";

export function generateStaticParams() {
  return wingSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata(props: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await props.params;
  const wing = getWing(englishWings, slug);
  if (!wing) return { title: englishWings.wing.notFound };

  const text = englishWings.wing;
  const values = { country: wing.country };
  const path = `/wings/${wing.slug}`;

  return {
    title: fill(text.metaTitle, values),
    description: fill(text.metaDescription, values),
    alternates: { canonical: path, languages: alternateLanguages(path) },
    openGraph: {
      title: fill(text.ogTitle, values),
      description: fill(text.ogDescription, values),
      url: path,
      type: "website",
    },
  };
}

export default async function WingPage(props: { params: Promise<{ slug: string }> }) {
  const { slug } = await props.params;
  const wing = getWing(englishWings, slug);
  if (!wing) notFound();

  return <WingDocument edition={englishWings} wing={wing} />;
}
