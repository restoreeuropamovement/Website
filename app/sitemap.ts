import type { MetadataRoute } from "next";
import { policyStructure } from "@/content/policy";
import { wingSlugs } from "@/content/wings";
import { LOCALES, localePath } from "@/lib/i18n";
import { SITE_URL } from "@/lib/site";

/**
 * One entry per page *per language*.
 *
 * Every public page exists in all six, so the sitemap is the English list
 * expanded across `LOCALES` rather than a hand-kept second list that would
 * drift. `alternates.languages` on each page carries the `hreflang` pairing;
 * this file only has to make sure every address is discoverable.
 */
function everyLocale(
  path: string,
  entry: Omit<MetadataRoute.Sitemap[number], "url">,
): MetadataRoute.Sitemap {
  return LOCALES.map((locale) => ({
    ...entry,
    url: `${SITE_URL}${localePath(locale, path)}`,
  }));
}

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const pages: MetadataRoute.Sitemap = (
    [
      { path: "/", changeFrequency: "monthly", priority: 1 },
      { path: "/principles", changeFrequency: "monthly", priority: 0.9 },
      { path: "/manifesto", changeFrequency: "monthly", priority: 0.9 },
      { path: "/policy", changeFrequency: "monthly", priority: 0.9 },
      { path: "/vision", changeFrequency: "monthly", priority: 0.8 },
      { path: "/about", changeFrequency: "monthly", priority: 0.7 },
      { path: "/wings", changeFrequency: "monthly", priority: 0.8 },
      { path: "/join", changeFrequency: "monthly", priority: 0.7 },
      { path: "/contact", changeFrequency: "yearly", priority: 0.5 },
      { path: "/privacy", changeFrequency: "yearly", priority: 0.3 },
      { path: "/imprint", changeFrequency: "yearly", priority: 0.3 },
    ] as const
  ).flatMap(({ path, changeFrequency, priority }) =>
    everyLocale(path, { lastModified: now, changeFrequency, priority }),
  );

  const nationalWings: MetadataRoute.Sitemap = wingSlugs.flatMap((slug) =>
    everyLocale(`/wings/${slug}`, {
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.6,
    }),
  );

  const positions: MetadataRoute.Sitemap = policyStructure.flatMap((entry) =>
    everyLocale(`/policy/${entry.slug}`, {
      lastModified: new Date(`${entry.lastUpdated}T00:00:00Z`),
      changeFrequency: "monthly",
      priority: 0.6,
    }),
  );

  return [...pages, ...positions, ...nationalWings];
}
