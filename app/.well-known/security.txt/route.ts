import { SITE_URL } from "@/lib/site";

/**
 * Where to send a vulnerability report — RFC 9116.
 *
 * Worth having for a reason beyond tidiness. Somebody who finds a flaw in a
 * political movement's site has two options, and which one they take depends
 * largely on whether the first is obvious: tell the movement, or tell someone
 * else. A file at a fixed, well-known address is the cheapest way to make the
 * first one the path of least resistance, and it is the only part of this
 * codebase addressed to an attacker acting in good faith.
 *
 * `Contact` is the public contact form rather than an address. The imprint
 * prints no correspondence address because none is monitored yet, and inventing
 * one here would be the same fabrication in a file fewer people read — worse,
 * because a report sent to an unread mailbox is a vulnerability disclosed to
 * nobody. The form writes to `enquiry`, which an administrator actually reads.
 *
 * Served as a route rather than a static file so `Expires` moves with each
 * deployment. The field is mandatory, and a `security.txt` whose date has
 * passed is treated as abandoned by the tooling that reads it — which is a
 * slower and more embarrassing failure than not having one.
 *
 * The scope list below describes harms rather than surfaces, and deliberately
 * does not mention the administrative panel. This file is world-readable, so
 * naming it here would hand every scanner the one fact `lib/admin/veil.ts`
 * exists to withhold. A researcher who finds it anyway is in scope by the third
 * line, which is the one that matters.
 */
export const dynamic = "force-static";

/** A year ahead, so an abandoned deployment stops claiming to be monitored. */
function expiry(): string {
  const now = new Date();
  return new Date(Date.UTC(now.getUTCFullYear() + 1, now.getUTCMonth(), now.getUTCDate()))
    .toISOString()
    .replace(/\.\d{3}Z$/, "Z");
}

export function GET(): Response {
  const body = [
    "# Reporting a security problem with this site.",
    "#",
    "# Please tell us before telling anyone else, and give us a reasonable",
    "# period to fix it. We will not pursue anyone who reports in good faith,",
    "# stays within the scope below and does not access other people's data.",
    "",
    `Contact: ${SITE_URL}/contact`,
    `Canonical: ${SITE_URL}/.well-known/security.txt`,
    `Expires: ${expiry()}`,
    "Preferred-Languages: en, de, fr, pl, it, es",
    "",
    "# In scope, and the things we would most like to hear about:",
    "#   anything disclosing the name, address or region of someone who has",
    "#     written to us or applied to join;",
    "#   anything letting one visitor act as another;",
    "#   anything authenticating as, or acting on behalf of, this movement.",
    "#",
    "# Out of scope: reports produced solely by an automated scanner, missing",
    "# headers with no demonstrated impact, and volumetric denial of service.",
    "#",
    "# Please do not submit real personal data while testing the public forms.",
    "",
  ].join("\n");

  return new Response(body, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=3600",
    },
  });
}
