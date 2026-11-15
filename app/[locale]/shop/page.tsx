import type { Metadata } from "next";

import { ShopDocument } from "@/components/shop/ShopDocument";
import { getShop } from "@/content/shop";
import { localeAlternates, resolveLocale } from "@/lib/locale-metadata";
import { loadShopPage, shopCountries, shopRobots } from "@/lib/shop/page";
import { routes } from "@/lib/site";

/** Per request, for the reason given in `app/(site)/shop/page.tsx`. */
export const dynamic = "force-dynamic";

export async function generateMetadata(props: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const locale = resolveLocale((await props.params).locale);
  const { text } = await getShop(locale);
  return {
    title: text.meta.metaTitle,
    description: text.meta.description,
    robots: shopRobots(),
    alternates: localeAlternates(locale, routes.shop),
  };
}

export default async function TranslatedShopPage(props: {
  params: Promise<{ locale: string }>;
  searchParams: Promise<Record<string, string | string[] | undefined>>;
}) {
  const page = await loadShopPage(resolveLocale((await props.params).locale));

  return (
    <ShopDocument
      edition={page.edition}
      mode={page.mode}
      open={page.open}
      designs={page.designs}
      countries={shopCountries()}
      selection={await props.searchParams}
      visitorCountry={page.visitorCountry}
    />
  );
}
