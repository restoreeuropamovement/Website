import { constantTimeEqual, sign } from "@/lib/admin/crypto";
import { adminVeilSecret } from "@/lib/admin/env";

/**
 * Hides the administrative surface from anyone who has not been told it exists.
 *
 * ## What this is not
 *
 * It is not a security control, and nothing else in this system may be relaxed
 * because it is switched on. The thing that protects `/admin` is the passkey:
 * hardware-bound, origin-bound, unguessable and unphishable. This is a curtain
 * in front of that door. Anyone who learns the value walks up to the same door
 * and still cannot open it, which is the only reason a curtain is acceptable
 * here at all — it can fail completely without costing anything.
 *
 * Saying so plainly matters, because obscurity becomes dangerous at the exact
 * moment somebody starts counting on it. The failure is never the curtain; it
 * is the reasoning that follows it, of the form "nobody can find the panel, so
 * the panel does not need X".
 *
 * ## What it is actually worth
 *
 * Two things, both real and both modest.
 *
 * The first is that it removes the pre-authentication attack surface from
 * anyone who has not been let in. Today an anonymous caller can reach the login
 * page, the enrolment page, the invitation page and four WebAuthn endpoints —
 * which means they can reach `@simplewebauthn/server`, Next's router, and every
 * line of parsing in between. None of that is known to be vulnerable. The point
 * is that "known" is doing the work in that sentence, and a flaw found in any
 * of it next year is reachable by a scanner tomorrow and not reachable at all
 * if the scanner gets a 404.
 *
 * The second is signal. A public `/admin` collects continuous automated
 * probing, and a log full of noise is a log nobody reads. Behind this, a failed
 * sign-in is somebody who was invited, which makes the alerting in
 * `lib/admin/alerts.ts` mean something.
 *
 * ## What it cannot do
 *
 * It cannot make the surface undiscoverable. Anyone who has ever administered
 * the site knows the path; so does anyone who reads the source, anyone who sees
 * a link in a browser's history or an autocomplete suggestion, and anyone who
 * obtains the value from one careless forward of an invitation email. Treat it
 * as raising the cost of *finding* the panel from zero to somewhere above zero,
 * and not one step further than that.
 *
 * ## How it works
 *
 * A value in the environment, presented once as `?k=…` on any admin URL. The
 * proxy checks it in constant time, sets a long-lived cookie and redirects to
 * the same URL without the parameter, so it stops appearing in the address bar,
 * the browser's history and any bookmark made afterwards. Every subsequent
 * request carries the cookie.
 *
 * The cookie holds a tag derived from `ADMIN_SESSION_SECRET`, never the value
 * itself, so reading it off a machine does not yield something that can be
 * passed on — and rotating that secret closes the curtain on every browser at
 * once, which is the recovery if the value is ever forwarded to the wrong
 * person.
 */

/** The parameter that draws the curtain back. Short, and says nothing. */
export const VEIL_PARAM = "k";

/*
 * Mirrors the session cookie's naming. `__Host-` in production makes the
 * browser refuse it unless it is Secure, host-only and path `/`; the dev name
 * exists because that prefix cannot work over plain http on localhost.
 */
const isProduction = process.env.NODE_ENV === "production";
export const VEIL_COOKIE = isProduction ? "__Host-rem_gate" : "rem_gate_dev";

/* Six months. Long, because being shut out is the expensive failure here and
 * being let in is worth nothing on its own. */
export const VEIL_MAX_AGE = 60 * 60 * 24 * 180;

/**
 * Refuses to admit that this route exists, unless the curtain has been drawn.
 *
 * Called from `app/admin/layout.tsx`, which every admin page sits under, and
 * from each `/api/admin` handler.
 *
 * Two layers answer, and neither is redundant.
 *
 * The proxy is the only one that can refuse a request the router never matched,
 * and that case is not a curiosity: a GET to a POST-only endpoint under
 * `/api/admin` is answered 405 before any handler on it runs, and a 405
 * confirms an endpoint exists as well as a 200 would. A proxy can only reply
 * with a rewrite, which has to name a destination, so it names one shaped like
 * the path that was asked for — see `veiledTarget` for why the shape matters.
 *
 * This function answers everything the router did match, and where it applies
 * it is the better reply. `notFound()` renders the same not-found boundary that
 * a genuine miss at this URL would, in the same layout, with the path that was
 * actually requested — because from the framework's point of view nothing
 * distinguishes the two cases at all.
 */
export async function requireVeil(): Promise<void> {
  if (!adminVeilSecret()) return;

  const { cookies } = await import("next/headers");
  const { notFound } = await import("next/navigation");

  if (!(await veilCookieValid((await cookies()).get(VEIL_COOKIE)?.value))) notFound();
}

/** The tag stored in the cookie. Not the secret, and not reversible to it. */
export function veilTag(): Promise<string> {
  return sign("admin-veil:v1");
}

/** Whether a presented `?k=` value is the configured one. */
export function veilParamMatches(presented: string | null): boolean {
  const secret = adminVeilSecret();
  return secret !== undefined && presented !== null && constantTimeEqual(presented, secret);
}

/** Whether a cookie value was issued by this deployment. */
export async function veilCookieValid(value: string | undefined): Promise<boolean> {
  return value !== undefined && constantTimeEqual(value, await veilTag());
}

/**
 * The address to send somebody who needs to get in for the first time: an
 * invited administrator, or whoever is enrolling the first passkey.
 *
 * Returned as a whole URL rather than a parameter to append, so no caller has
 * to remember that the curtain exists. When no veil is configured this is just
 * the URL, which is what keeps every call site free of a conditional.
 */
export function withVeil(url: string): string {
  const secret = adminVeilSecret();
  if (!secret) return url;

  const separator = url.includes("?") ? "&" : "?";
  return `${url}${separator}${VEIL_PARAM}=${encodeURIComponent(secret)}`;
}
