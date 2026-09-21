import type { Metadata } from "next";
import WingPage from "@/app/(site)/wings/[slug]/page";
import { getWing, wings } from "@/content/wings";
import { localeAlternates, resolveLocale } from "@/lib/locale-metadata";

export function generateStaticParams() {
  return wings.map((wing) => ({ slug: wing.slug }));
}

export async function generateMetadata(props: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { locale: raw, slug } = await props.params;
  const locale = resolveLocale(raw);
  const wing = getWing(slug);
  if (!wing) return { title: "Not found" };

  return {
    title: wing.country,
    alternates: localeAlternates(locale, `/wings/${slug}`),
  };
}

export default WingPage;
