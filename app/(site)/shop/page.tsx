import type { Metadata } from "next";

import { ShopDocument } from "@/components/shop/ShopDocument";
import { getShop } from "@/content/shop";
import { alternateLanguages } from "@/lib/i18n";
import { loadShopPage, shopCountries, shopRobots } from "@/lib/shop/page";
import { routes } from "@/lib/site";

/**
 * Per request, because whether the shop exists at all is a runtime setting.
 * Rendering per request does not mean a query per request: the design list is
 * served from the data cache until an administrator changes it — see
 * `lib/shop/designs.ts`.
 */
export const dynamic = "force-dynamic";

export async function generateMetadata(): Promise<Metadata> {
  const { text } = await getShop("en");
  return {
    title: text.meta.metaTitle,
    description: text.meta.description,
    robots: shopRobots(),
    alternates: { canonical: routes.shop, languages: alternateLanguages(routes.shop) },
  };
}

export default async function ShopPage(props: {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
}) {
  const page = await loadShopPage("en");

  return (
    <ShopDocument
      edition={page.edition}
      mode={page.mode}
      open={page.open}
      designs={page.designs}
      countries={shopCountries()}
      selection={await props.searchParams}
      visitorCountry={page.visitorCountry}
      remaining={page.remaining}
    />
  );
}
