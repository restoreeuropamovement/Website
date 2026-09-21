import type { Metadata } from "next";
import { PrinciplesView } from "@/components/principles/PrinciplesView";
import { getPrinciples } from "@/content/principles";
import { localeAlternates, resolveLocale } from "@/lib/locale-metadata";
import { routes } from "@/lib/site";

export async function generateMetadata(props: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const locale = resolveLocale((await props.params).locale);
  const { meta } = await getPrinciples(locale);

  return {
    title: meta.title,
    description: meta.lede,
    alternates: localeAlternates(locale, routes.principles),
  };
}

export default async function LocalePrinciplesPage(props: {
  params: Promise<{ locale: string }>;
}) {
  const locale = resolveLocale((await props.params).locale);
  return <PrinciplesView locale={locale} />;
}
