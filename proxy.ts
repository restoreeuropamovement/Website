import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { adminVeilSecret } from "@/lib/admin/env";
import { SESSION_COOKIE, hasPlausibleSessionCookie } from "@/lib/admin/session";
import {
  VEIL_COOKIE,
  VEIL_MAX_AGE,
  VEIL_PARAM,
  veilCookieValid,
  veilParamMatches,
  veilTag,
} from "@/lib/admin/veil";

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
  // Claiming an invitation. Whoever opens it has no session by definition —
  // being unable to sign in is why they were sent a link. The page gates itself
  // on the invitation being unspent, unexpired and not withdrawn.
  //
  // The token travels as a query parameter, which `pathname` excludes, so this
  // exact-match entry covers it. A path segment would not match here, and
  // loosening the check to a prefix for one route is how the rest of the list
  // stops meaning anything.
  "/admin/invite",
  // Bootstrap enrolment has no session yet; both routes gate themselves on the
  // credential table being empty, a valid bootstrap token, or a valid
  // invitation.
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
    /*
     * The materials store, for the thumbnails on `/admin/materials`. Written out
     * rather than imported from `next.config.ts`, where the same host is reasoned
     * about at length: this file is the other of the two policies this project
     * keeps deliberately separate, and sharing a constant between them is the
     * first step towards sharing the policy. Two lines that have to be changed
     * together is the intended cost of that separation.
     *
     * It is the narrower of the two grants. The public page shows an uploaded
     * poster to strangers; this one shows it to the administrator who uploaded
     * it, which is the only honest check that the file in the store is the file
     * they meant — a title and a byte count cannot tell them they picked the
     * wrong export. Confined to `https`, to the `materials/` prefix, and to
     * images.
     */
    "img-src 'self' data: blob: https://*.public.blob.vercel-storage.com/materials/",
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

/**
 * Where a veiled request is sent to be answered: a path that resolves to
 * nothing, in the same half of the route tree as the one that was asked for.
 *
 * Rewritten to rather than answered directly, because the reply then *is* the
 * site's real 404 — same renderer, same markup, same status, same headers. A
 * hand-written 404 would differ in its length or its markup, and a difference
 * is all an enumerator needs.
 *
 * The target mirrors the shape of the request rather than being a constant,
 * because the site's 404 is not one page. Measured against this build: a miss
 * one segment deep renders the prerendered site 404 with the full navigation,
 * about twenty-four kilobytes, carrying `etag` and Next's cache headers; a
 * deeper miss, or any miss under `/api`, renders the bare root 404 at about
 * sixteen, dynamically, carrying `link` instead. A single fixed destination
 * therefore answers a good half of the admin surface with a reply no genuine
 * miss at that address would produce — eight kilobytes of page furniture and
 * the wrong header set, which is not a subtle difference.
 *
 * Replacing every character except the separators keeps the segment count and
 * the total length, so the reply matches in size as well as in kind. `/api` is
 * preserved because it is what selects the boundary.
 *
 * The filler cannot collide with a real route: nothing in this site is named in
 * all `z`s, and `app/[locale]` sets `dynamicParams = false` against a closed
 * list of locales so an unknown first segment cannot be captured by it either.
 *
 * This is also the only layer that can do the job at all. `requireVeil` in the
 * routes is a useful second line, but a route handler runs only after the
 * router has matched the path *and* the method — so a GET to a POST-only
 * endpoint under `/api/admin` answers 405 before any of its code runs, and a
 * 405 confirms the endpoint exists just as well as a 200 would. The proxy runs
 * before the match and is indifferent to the method.
 */
function veiledTarget(pathname: string): string {
  const prefix = pathname.startsWith("/api/") ? "/api" : "";
  return prefix + pathname.slice(prefix.length).replace(/[^/]/g, "z");
}

export async function proxy(request: NextRequest) {
  const { pathname, search } = request.nextUrl;
  const isDev = process.env.NODE_ENV === "development";
  const nonce = crypto.randomUUID();
  const csp = adminCsp(nonce, isDev);

  /*
   * The curtain, checked before anything else and quite separately from
   * authorisation. See `lib/admin/veil.ts` — in particular the part about this
   * not being a security control, and nothing below being relaxed because of
   * it. Unset, none of this runs and the surface behaves as it always has.
   */
  if (adminVeilSecret()) {
    if (veilParamMatches(request.nextUrl.searchParams.get(VEIL_PARAM))) {
      /*
       * Accepted, and immediately removed from the URL. Redirecting rather than
       * proceeding is the whole point: the value must not survive in the
       * address bar, in history, in a bookmark made from this page, or in a
       * screenshot of somebody's browser. Other parameters are preserved, so an
       * invitation link still carries its token through.
       */
      const clean = request.nextUrl.clone();
      clean.searchParams.delete(VEIL_PARAM);

      const admitted = NextResponse.redirect(clean);
      admitted.cookies.set(VEIL_COOKIE, await veilTag(), {
        httpOnly: true,
        secure: !isDev,
        /*
         * `lax`, where the session cookie is `strict`. An invitation arrives by
         * email, and a strict cookie is not sent when the navigation comes from
         * another site — so the invited administrator would be met by the 404
         * this is supposed to have lifted for them. Nothing is authorised by
         * this cookie, so the reason `strict` exists on the session does not
         * apply to it.
         */
        sameSite: "lax",
        path: "/",
        maxAge: VEIL_MAX_AGE,
      });
      admitted.headers.set("Cache-Control", "no-store");
      return admitted;
    }

    if (!(await veilCookieValid(request.cookies.get(VEIL_COOKIE)?.value))) {
      return NextResponse.rewrite(new URL(veiledTarget(pathname), request.url));
    }
  }

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
   * Stricter than the site-wide `strict-origin-when-cross-origin`, because on
   * this surface the path itself is sensitive. The members page carries its
   * search term in the query string, and that term is usually somebody's name —
   * the one thing `queryDigest` exists to keep out of the audit log. Sending it
   * anywhere in a `Referer` would put it back in the clear, so nothing leaves
   * here with a referrer at all, cross-origin or not.
   */
  response.headers.set("Referrer-Policy", "no-referrer");
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
