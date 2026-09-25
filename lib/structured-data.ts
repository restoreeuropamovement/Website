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
    url: `${SITE_URL}/brand/restore-europa-mark.png`,
    width: 512,
    height: 512,
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

