import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { SESSION_COOKIE, hasPlausibleSessionCookie } from "@/lib/admin/session";

/**
 * Gate and hardening for the administrative surface.
 *
 * In Next 16 this file replaces `middleware.ts` — same capabilities, new name.
 *
 * What this does **not** do is decide whether a request is authorised. It
 * performs the cheap stateless part: reject anything without a cookie bearing a
 * valid HMAC, so unauthenticated traffic never reaches a render or costs a
 * query. The binding check — does this session exist, is it unexpired,
 * unrevoked, and attached to an enabled user — happens in `app/admin/layout.tsx`
 * and again in every mutation, because the Next documentation is explicit that
 * proxy code may be hoisted to a CDN and must not be the sole line of defence.
 *
 * Treating this file as the lock rather than the filter is the classic way to
 * ship an admin panel that a crafted request walks straight into.
 */

/**
 * Reachable without a session; everything else under /admin requires one.
 *
 * Enumerated rather than matched by prefix. `/api/admin/auth/*` would be the
 * convenient rule, but it silently exempts every endpoint added under that path
 * later — and at least one already must not be exempt: the elevation ceremony
 * raises a session's privileges and so presupposes a session. Listing the five
 * that genuinely cannot require one makes a new route authenticated by default,
 * which is the direction a mistake here should fall.
 */
const PUBLIC_ADMIN_PATHS = [
  "/admin/login",
  "/admin/enrol",
  // Bootstrap enrolment has no session yet; both routes gate themselves on the
  // credential table being empty or a valid bootstrap token.
  "/api/admin/auth/registration/options",
  "/api/admin/auth/registration/verify",
  "/api/admin/auth/authentication/options",
  "/api/admin/auth/authentication/verify",
  "/api/admin/auth/logout",
];

function isPublic(pathname: string): boolean {
  return PUBLIC_ADMIN_PATHS.includes(pathname);
}

/**
 * The strict policy the public site cannot afford.
 *
 * Admin pages are dynamically rendered by definition — they read cookies — so a
 * per-request nonce is free here, and Next attaches it to its own script tags
 * automatically once it sees this header. `strict-dynamic` then means an
 * injected `<script>` without the nonce cannot execute even if markup escaping
 * fails somewhere, which is the failure mode that matters on a page that can
 * publish content.
 *
 * `style-src` keeps `'unsafe-inline'` and deliberately carries no nonce: the CSP
 * spec ignores `'unsafe-inline'` for any directive that has one, and the inline
 * styles `next/font` emits would break. Styles are a far smaller hazard than
 * scripts.
 */
function adminCsp(nonce: string, isDev: boolean): string {
  return [
    "default-src 'self'",
    `script-src 'self' 'nonce-${nonce}' 'strict-dynamic'${isDev ? " 'unsafe-eval'" : ""}`,
    "style-src 'self' 'unsafe-inline'",
    "img-src 'self' data: blob:",
    "font-src 'self'",
    `connect-src 'self'${isDev ? " ws: wss:" : ""}`,
    "object-src 'none'",
    "frame-src 'none'",
    "frame-ancestors 'none'",
    "base-uri 'self'",
    "form-action 'self'",
    "upgrade-insecure-requests",
  ].join("; ");
}

export async function proxy(request: NextRequest) {
  const { pathname, search } = request.nextUrl;
  const isDev = process.env.NODE_ENV === "development";
  const nonce = crypto.randomUUID();
  const csp = adminCsp(nonce, isDev);

  const authorised =
    isPublic(pathname) ||
    (await hasPlausibleSessionCookie(request.cookies.get(SESSION_COOKIE)?.value));

  if (!authorised) {
    // API callers get a status they can act on; browsers get the login page.
    if (pathname.startsWith("/api/")) {
      return NextResponse.json(
        { error: "Not authenticated" },
        { status: 401, headers: { "Cache-Control": "no-store" } },
      );
    }

    const login = new URL("/admin/login", request.url);
    // Only ever a path within the admin surface, so this cannot be turned into
    // an open redirect to another origin.
    const target = `${pathname}${search}`;
    if (target.startsWith("/admin/") && !target.startsWith("/admin/login")) {
      login.searchParams.set("next", target);
    }
    const redirect = NextResponse.redirect(login);
    redirect.headers.set("Cache-Control", "no-store");
    redirect.headers.set("X-Robots-Tag", "noindex, nofollow");
    return redirect;
  }

  const requestHeaders = new Headers(request.headers);
  requestHeaders.set("x-nonce", nonce);
  requestHeaders.set("Content-Security-Policy", csp);

  const response = NextResponse.next({ request: { headers: requestHeaders } });

  response.headers.set("Content-Security-Policy", csp);
  /*
   * Obscurity is not a control, but indexing an admin panel is still a gift to
   * anyone enumerating targets. This is the honest version of "hidden": it keeps
   * the surface out of search results without pretending that secrecy is what
   * protects it.
   */
  response.headers.set("X-Robots-Tag", "noindex, nofollow, noarchive, nosnippet");
  /* Nothing here may be retained by a shared cache or the browser's disk cache. */
  response.headers.set("Cache-Control", "no-store, no-cache, must-revalidate, private");
  /*
   * The site-wide Permissions-Policy denies WebAuthn outright. The admin origin
   * needs it for its own frames only — this is the narrowest grant that lets a
   * passkey work at all.
   */
  response.headers.set(
    "Permissions-Policy",
    "publickey-credentials-get=(self), publickey-credentials-create=(self), camera=(), microphone=(), geolocation=(), payment=(), usb=()",
  );

  return response;
}

export const config = {
  matcher: ["/admin/:path*", "/api/admin/:path*"],
};
