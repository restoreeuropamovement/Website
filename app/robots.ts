import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";

/**
 * There is deliberately no `Disallow: /admin` here.
 *
 * `robots.txt` is world-readable, so a disallow rule is an announcement: it
 * tells anyone enumerating the site exactly where the authenticated surface
 * lives. Keeping crawlers out of `/admin` is done where it does not advertise
 * anything — `proxy.ts` sends `X-Robots-Tag: noindex, nofollow, noarchive,
 * nosnippet` on every admin response, the sitemap omits those routes, and no
 * public page links to them. Obeying a disallow rule is voluntary anyway;
 * honouring `noindex` is what compliant crawlers actually do.
 */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  };
}
