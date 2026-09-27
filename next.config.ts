import type { NextConfig } from "next";

import { retiredWingSlugs } from "./content/wings/structure";
import { LOCALES, localePath } from "./lib/i18n";

const isDev = process.env.NODE_ENV === "development";

/**
 * Content Security Policy.
 *
 * `script-src` and `style-src` carry `'unsafe-inline'` deliberately. The strict
 * alternative is a per-request nonce, which Next can only inject while
 * rendering dynamically — adopting it would turn all 138 prerendered pages into
 * server-rendered ones and give up CDN caching, for a site that has no user
 * accounts, no user-generated content and no third-party scripts. The inline
 * code the policy has to admit is Next's own hydration payload, the style block
 * `next/font` injects, the `<noscript>` reveal override in `app/layout.tsx`, and
 * the style attributes `motion` writes while animating.
 *
 * That trade changes the day anything authenticated is served from this origin:
 * an admin surface would be dynamically rendered anyway, so it should get a
 * nonce-based policy of its own through `proxy.ts` rather than inherit this one.
 *
 * Everything else here is locked to the origin. No remote host is trusted for
 * scripts, styles, fonts, frames or connections — see `materialStore` below for
 * the one exception, which is images and images only.
 *
 * Web Analytics needs no exception: on Vercel both the script and the beacon are
 * served from this origin under `/_vercel/insights/`. Only the dev-mode debug
 * build is remote, which is why that one host is admitted in development alone.
 */
const vercelAnalyticsDebugHost = "https://va.vercel-scripts.com";

/**
 * The one remote host this site fetches anything from, and the reasoning for
 * admitting it.
 *
 * `/materials` publishes the movement's logos, posters and stickers. Until now
 * it listed them as titles with download links and showed none of them, because
 * a thumbnail has to be fetched from wherever the file is — and the files are in
 * a Vercel Blob store, which answers on `*.public.blob.vercel-storage.com`. Note
 * that the `blob:` in `img-src` below is not that: it is the blob URI scheme,
 * for objects a page has built in memory, and it has never had anything to do
 * with this provider's name.
 *
 * **What was given up.** The site fetched nothing from any other host, which is
 * a real property and is why `/privacy` can say that loading a page discloses
 * your visit to nobody. That sentence has been rewritten rather than quietly
 * falsified — a catalogue of artwork that shows none of the artwork is a list of
 * filenames wearing a page's clothes, and the honest trade is to make the
 * exception and describe it. What makes it a small one is who is on the other
 * end: the store is operated by the same company that serves this website, so no
 * new organisation learns that somebody read this page. The address carries no
 * identifier for the reader, and it is reached only on this one route.
 *
 * **How narrow this is, and how much narrower it could have been.** Three things
 * hold it in: `https` only, a path prefix, and images only. Every object is
 * written under `materials/` by `objectName` in `lib/admin/materials.ts`, so the
 * policy admits that prefix rather than the host — a store shared with something
 * else later is not admitted by this line. Nothing else opens: not `script-src`,
 * not `connect-src`, not `frame-src`.
 *
 * What is *not* narrowed is the subdomain, and that is a decision rather than an
 * oversight. Each store answers on a host of its own, `<storeId>.public.…`, and
 * the id is not a secret — it is in the address of every published file, and
 * `@vercel/blob` derives it from the fourth field of `BLOB_READ_WRITE_TOKEN`. It
 * was left as a wildcard anyway, because this policy is a build-time constant
 * and the public site must build with none of the administrative environment
 * set: CI has no token, so naming one store would mean either a policy that
 * differs between CI and production — and so a policy CI does not test — or a
 * store id hardcoded on the strength of a guess, which could not be checked from
 * here without writing to the store. A wrong host in a CSP fails silently. A
 * blocked thumbnail looks exactly like a slow one, and the mistake would be
 * discovered by a reader rather than by a build.
 *
 * The exposure that buys is also small enough to be worth saying out loud, which
 * is what makes it arguable rather than lazy: reaching it needs an injected
 * `<img>` — and this policy already carries `'unsafe-inline'` for scripts, so
 * anything able to inject markup has a larger door open beside this one — or a
 * `material.url` pointing somewhere else, which is written from the store's own
 * reply to an upload and cannot be set by hand. Narrowing to a single store is
 * one string away if the deployment's store ever becomes verifiable from here,
 * and `remotePatterns` below takes the same value for the same reason.
 */
const materialStore = {
  host: "*.public.blob.vercel-storage.com",
  /** The wildcard `remotePatterns` wants, where `*` is one subdomain and `**` any. */
  imageHost: "**.public.blob.vercel-storage.com",
  pathPrefix: "/materials/",
} as const;

const contentSecurityPolicy = [
  "default-src 'self'",
  `script-src 'self' 'unsafe-inline'${isDev ? ` 'unsafe-eval' ${vercelAnalyticsDebugHost}` : ""}`,
  "style-src 'self' 'unsafe-inline'",
  /*
   * The store appears here for the vector previews only. A PNG, a JPEG or a
   * WebP goes through `next/image`, which rewrites the address to `/_next/image`
   * on this origin and is therefore already covered by `'self'`; an SVG cannot,
   * because `next/image` will not process one without `dangerouslyAllowSVG`, so
   * `components/materials/MaterialPreview.tsx` renders it with a plain `<img>`
   * pointing at the store. That is the request this entry is for, and the reason
   * it is safe in that position is that an SVG loaded as an image executes
   * nothing — not in any browser, and not under this policy if one tried.
   */
  `img-src 'self' data: blob: https://${materialStore.host}${materialStore.pathPrefix}`,
  "font-src 'self'",
  // Dev needs the HMR socket; production talks to nothing but its own origin.
  `connect-src 'self'${isDev ? ` ws: wss: ${vercelAnalyticsDebugHost}` : ""}`,
  "media-src 'self'",
  "manifest-src 'self'",
  "worker-src 'self' blob:",
  "object-src 'none'",
  "frame-src 'none'",
  "frame-ancestors 'none'",
  "base-uri 'self'",
  "form-action 'self'",
  "upgrade-insecure-requests",
].join("; ");

/**
 * Capabilities the site never uses. Naming them denies them to anything that
 * ends up embedded here later, including third-party code added by mistake.
 */
const permissionsPolicy = [
  "accelerometer=()",
  "ambient-light-sensor=()",
  "autoplay=()",
  "battery=()",
  "camera=()",
  "display-capture=()",
  "document-domain=()",
  "encrypted-media=()",
  "fullscreen=(self)",
  "geolocation=()",
  "gyroscope=()",
  "idle-detection=()",
  "magnetometer=()",
  "microphone=()",
  "midi=()",
  "payment=()",
  "picture-in-picture=()",
  "publickey-credentials-get=()",
  "screen-wake-lock=()",
  "serial=()",
  "usb=()",
  "xr-spatial-tracking=()",
].join(", ");

const securityHeaders = [
  { key: "Content-Security-Policy", value: contentSecurityPolicy },
  /*
   * Two years, subdomains included. `preload` is deliberately absent: it is a
   * standing commitment that is slow to reverse, and it should not be claimed
   * before a real domain exists and is known to be HTTPS-only everywhere.
   */
  { key: "Strict-Transport-Security", value: "max-age=63072000; includeSubDomains" },
  { key: "X-Content-Type-Options", value: "nosniff" },
  /* `frame-ancestors` above is the modern control; this covers older browsers. */
  { key: "X-Frame-Options", value: "DENY" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  { key: "Permissions-Policy", value: permissionsPolicy },
  { key: "Cross-Origin-Opener-Policy", value: "same-origin" },
  { key: "Cross-Origin-Resource-Policy", value: "same-origin" },
  { key: "X-Permitted-Cross-Domain-Policies", value: "none" },
];

/**
 * Wing addresses that were live and no longer resolve.
 *
 * The United Kingdom page became four — England, Scotland, Wales and Northern
 * Ireland — so no single page succeeds it and the index is where all four are
 * listed. Every locale needs its own rule because the prefix is part of the
 * path, and the slug itself is structural, so it is the same in all six.
 */
const retiredWingRedirects = LOCALES.flatMap((locale) =>
  Object.keys(retiredWingSlugs).map((slug) => ({
    source: localePath(locale, `/wings/${slug}`),
    destination: localePath(locale, "/wings"),
    permanent: true,
  })),
);

const nextConfig: NextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  images: {
    /*
     * Editorial artwork is served from /public and needs nothing here. The one
     * entry is the materials store, so that an uploaded PNG, JPEG or WebP can be
     * downscaled into a thumbnail on this origin instead of being sent to the
     * reader at its full four megabytes. The reasoning for the host is with the
     * content security policy above; what is added here is the two constraints
     * that policy cannot express — `search: ""` refuses any query string, so the
     * optimiser cannot be pointed at a URL somebody decorated, and the path
     * confines it to the prefix `objectName` writes under.
     *
     * `dangerouslyAllowSVG` is deliberately absent and should stay absent. It is
     * not needed: the one format the optimiser will not touch is rendered by a
     * plain `<img>`, which is a decision about one page, where setting that flag
     * would be a decision about every caller of `next/image` in the project.
     */
    remotePatterns: [
      {
        protocol: "https",
        hostname: materialStore.imageHost,
        port: "",
        pathname: `${materialStore.pathPrefix}**`,
        search: "",
      },
    ],
  },
  experimental: {
    optimizePackageImports: ["lucide-react", "motion"],
    serverActions: {
      /*
       * Raised from the 1 MB default so that a poster can be uploaded at
       * `/admin/materials`. The figure is not arbitrary: the platform caps a
       * serverless function's request body at 4.5 MB before any of this code
       * runs, so this sits just under it, and `materialLimits.bytes` sits a
       * further half-megabyte under that to leave room for what
       * `multipart/form-data` adds around the file.
       *
       * It applies to every Server Action, which is worth saying out loud,
       * because the other three take a handful of text fields. Raising the
       * ceiling for one upload form also raises how much a caller can make
       * the join form parse before it is rejected — a rate-limited endpoint
       * behind a bucket the caller cannot choose, which is why four megabytes
       * of wasted parsing is an acceptable trade and forty would not be.
       */
      bodySizeLimit: "4.5mb",
    },
  },
  headers() {
    return Promise.resolve([{ source: "/:path*", headers: securityHeaders }]);
  },
  redirects() {
    return Promise.resolve(retiredWingRedirects);
  },
};

export default nextConfig;
