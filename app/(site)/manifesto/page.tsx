import type { Metadata } from "next";
import { ManifestoDocument } from "@/components/manifesto/ManifestoDocument";
import { englishEdition } from "@/content/manifesto";
import { alternateLanguages, localeTag, DEFAULT_LOCALE } from "@/lib/i18n";
import { routes, site } from "@/lib/site";

export const metadata: Metadata = {
  title: englishEdition.title,
  description:
    "The founding document of Restore Europa Movement: twenty-two sections on moral order, family, nation, economy, technology, stewardship, subsidiarity and restoration.",
  alternates: {
    canonical: routes.manifesto,
    languages: alternateLanguages(routes.manifesto),
  },
  openGraph: {
    title: `${englishEdition.title} · ${site.short}`,
    description: englishEdition.subtitle,
    url: routes.manifesto,
    type: "article",
  },
};

export default function ManifestoPage() {
  return <ManifestoDocument edition={englishEdition} bcp47={localeTag(DEFAULT_LOCALE)} />;
}
