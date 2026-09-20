import type { NextConfig } from "next";

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
 * scripts, styles, fonts, frames or connections.
 *
 * Web Analytics needs no exception: on Vercel both the script and the beacon are
 * served from this origin under `/_vercel/insights/`. Only the dev-mode debug
 * build is remote, which is why that one host is admitted in development alone.
 */
const vercelAnalyticsDebugHost = "https://va.vercel-scripts.com";

const contentSecurityPolicy = [
  "default-src 'self'",
  `script-src 'self' 'unsafe-inline'${isDev ? ` 'unsafe-eval' ${vercelAnalyticsDebugHost}` : ""}`,
  "style-src 'self' 'unsafe-inline'",
  "img-src 'self' data: blob:",
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

const nextConfig: NextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  images: {
    // All artwork is served from /public; no remote hosts are trusted.
    remotePatterns: [],
  },
  experimental: {
    optimizePackageImports: ["lucide-react", "motion"],
  },
  headers() {
    return Promise.resolve([{ source: "/:path*", headers: securityHeaders }]);
  },
};

export default nextConfig;
