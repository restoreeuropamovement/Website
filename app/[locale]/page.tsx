import type { Metadata } from "next";
import { HomeSections } from "@/components/home/HomeSections";
import { JsonLd } from "@/components/seo/JsonLd";
import { getChrome } from "@/content/chrome";
import { localeAlternates, localeOpenGraph, resolveLocale } from "@/lib/locale-metadata";
import { routes, site } from "@/lib/site";
import { websiteSchema } from "@/lib/structured-data";

export async function generateMetadata(props: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const locale = resolveLocale((await props.params).locale);
  const chrome = await getChrome(locale);

  return {
    title: { absolute: site.name },
    description: chrome.site.description,
    alternates: localeAlternates(locale, routes.home),
    openGraph: localeOpenGraph(locale, routes.home, {
      title: site.name,
      description: chrome.site.description,
    }),
  };
}

export default async function LocaleHomePage(props: {
  params: Promise<{ locale: string }>;
}) {
  const locale = resolveLocale((await props.params).locale);

  return (
    <>
      <JsonLd data={websiteSchema()} />
      <HomeSections locale={locale} />
    </>
  );
}
