import type { JournalArticle } from "@/lib/content-types";
import { SITE_URL, site } from "@/lib/site";

/** The publishing organisation, described only by what is known about it. */
export const organization = {
  "@type": "Organization",
  "@id": `${SITE_URL}/#organization`,
  name: site.formal,
  alternateName: site.short,
  url: `${SITE_URL}/`,
  description: site.description,
  slogan: site.tagline,
  logo: {
    "@type": "ImageObject",
    url: `${SITE_URL}/icon.svg`,
  },
} as const;

export function websiteSchema(): Record<string, unknown> {
  return {
    "@context": "https://schema.org",
    "@graph": [
      organization,
      {
        "@type": "WebSite",
        "@id": `${SITE_URL}/#website`,
        url: `${SITE_URL}/`,
        name: site.formal,
        description: site.description,
        inLanguage: "en",
        publisher: { "@id": `${SITE_URL}/#organization` },
      },
    ],
  };
}

export function articleSchema(article: JournalArticle): Record<string, unknown> {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    alternativeHeadline: article.subtitle,
    description: article.standfirst,
    articleSection: article.category,
    datePublished: article.date,
    inLanguage: "en",
    url: `${SITE_URL}/journal/${article.slug}`,
    mainEntityOfPage: `${SITE_URL}/journal/${article.slug}`,
    author: { "@type": "Organization", name: site.formal },
    publisher: { "@id": `${SITE_URL}/#organization` },
    image: `${SITE_URL}${article.hero.src}`,
  };
}
