import type { MetadataRoute } from "next";
import { wings } from "@/content/wings";
import { getArticles } from "@/lib/journal";
import { getPolicyEntries } from "@/lib/policy";
import { SITE_URL } from "@/lib/site";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const now = new Date();

  const pages: MetadataRoute.Sitemap = (
    [
      { url: `${SITE_URL}/`, changeFrequency: "monthly", priority: 1 },
      { url: `${SITE_URL}/principles`, changeFrequency: "monthly", priority: 0.9 },
      { url: `${SITE_URL}/manifesto`, changeFrequency: "monthly", priority: 0.9 },
      { url: `${SITE_URL}/policy`, changeFrequency: "monthly", priority: 0.9 },
      { url: `${SITE_URL}/vision`, changeFrequency: "monthly", priority: 0.8 },
      { url: `${SITE_URL}/about`, changeFrequency: "monthly", priority: 0.7 },
      { url: `${SITE_URL}/wings`, changeFrequency: "monthly", priority: 0.8 },
      { url: `${SITE_URL}/journal`, changeFrequency: "weekly", priority: 0.8 },
      { url: `${SITE_URL}/join`, changeFrequency: "monthly", priority: 0.7 },
      { url: `${SITE_URL}/contact`, changeFrequency: "yearly", priority: 0.5 },
      { url: `${SITE_URL}/privacy`, changeFrequency: "yearly", priority: 0.3 },
      { url: `${SITE_URL}/imprint`, changeFrequency: "yearly", priority: 0.3 },
    ] satisfies MetadataRoute.Sitemap
  ).map((page) => ({ ...page, lastModified: now }));

  const essays: MetadataRoute.Sitemap = (await getArticles()).map((article) => ({
    url: `${SITE_URL}/journal/${article.slug}`,
    lastModified: new Date(`${article.date}T00:00:00Z`),
    changeFrequency: "yearly",
    priority: 0.6,
  }));

  const nationalWings: MetadataRoute.Sitemap = wings.map((wing) => ({
    url: `${SITE_URL}/wings/${wing.slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  const positions: MetadataRoute.Sitemap = getPolicyEntries().map((entry) => ({
    url: `${SITE_URL}/policy/${entry.slug}`,
    lastModified: new Date(`${entry.lastUpdated}T00:00:00Z`),
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  return [...pages, ...positions, ...nationalWings, ...essays];
}
