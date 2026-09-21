import type { Metadata } from "next";
import PolicyEntryPage from "@/app/(site)/policy/[slug]/page";
import { getPolicyEntries, getPolicyEntry } from "@/lib/policy";
import { localeAlternates, resolveLocale } from "@/lib/locale-metadata";

/** Slugs only; Next pairs them with the locales the parent layout generates. */
export function generateStaticParams() {
  return getPolicyEntries().map((entry) => ({ slug: entry.slug }));
}

export async function generateMetadata(props: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { locale: raw, slug } = await props.params;
  const locale = resolveLocale(raw);
  const entry = getPolicyEntry(slug);
  if (!entry) return { title: "Not found" };

  return {
    title: entry.title,
    description: entry.shortAnswer,
    alternates: localeAlternates(locale, `/policy/${slug}`),
  };
}

export default PolicyEntryPage;
