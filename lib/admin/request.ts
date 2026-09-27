import { headers } from "next/headers";
import { hashIp } from "@/lib/admin/crypto";

/**
 * Client attribution for throttling and the audit log.
 *
 * `NextRequest.ip` was removed in Next 15, so the address comes from the proxy
 * headers the host sets. Treat the result as a throttling hint and an audit
 * breadcrumb, never as proof of identity; authentication is the passkey's job.
 */

/**
 * Which header answers matters more than it looks, because this value picks the
 * rate-limit bucket, and the bucket is the only thing standing between a script
 * and unlimited attempts at the sign-in ceremony, the elevation ceremony and
 * both public forms. Whoever chooses their own bucket has no limit at all.
 *
 * So the headers are split by who is able to write them, and only the platform
 * one is believed without being asked for.
 */

/**
 * Written by the platform and stripped from the incoming request, so it is the
 * one address header a caller cannot set for themselves. Always trusted.
 */
const PLATFORM_HEADER = "x-vercel-forwarded-for";

/**
 * Ordinary request headers. A fronting proxy normally overwrites them, but that
 * is the host's promise rather than anything the protocol enforces — and on a
 * host that makes no such promise they are simply whatever the client typed.
 * Honoured only where the operator has said a trustworthy proxy is in front.
 */
const PROXY_HEADERS = ["x-forwarded-for", "x-real-ip"] as const;

/**
 * Whether to believe the headers above.
 *
 * Off unless `TRUST_PROXY_HEADERS=true`, which reverses the direction this used
 * to fail in. Reading them unconditionally meant that on any host which does
 * not overwrite them, the caller picked their own rate-limit bucket: a fresh
 * allowance per request from one changed header, and every per-connection
 * ceiling in this codebase — the sign-in ceremony, the elevation ceremony, both
 * public forms, the beacon — quietly became decorative.
 *
 * Read per request rather than at module scope, on the same reasoning as the
 * rest of the env contract: the public site must serve with none of this set.
 *
 * Nothing changes on Vercel, where the platform header is always present and
 * answers first. Elsewhere, forgetting the variable collapses everyone into the
 * single anonymous bucket, which is stricter than the truth rather than looser
 * — the direction a mistake here should fall.
 */
/**
 * Said once per process, the first time the setting is actually relied upon.
 *
 * There is no way for this code to check that a trusted proxy really is in
 * front of it — that is a fact about the deployment, not about the request, and
 * a caller who sets the header themselves looks identical to one whose proxy
 * set it. So the misconfiguration cannot be detected, only made harder to leave
 * in place unnoticed: whoever turned this on gets a line in the logs saying
 * exactly what they have made believable, on the reasoning that a variable
 * nobody is reminded of is a variable nobody revisits.
 */
let announcedProxyTrust = false;

function trustsProxyHeaders(): boolean {
  if (process.env.TRUST_PROXY_HEADERS !== "true") return false;

  if (!announcedProxyTrust) {
    announcedProxyTrust = true;
    console.warn(
      "[admin] TRUST_PROXY_HEADERS=true: x-forwarded-for and x-real-ip are believed. " +
        "Every rate limit in this codebase buckets on the result, so unless a proxy " +
        "you control overwrites both headers, callers choose their own allowance.",
    );
  }

  return true;
}

function clientAddress(list: Awaited<ReturnType<typeof headers>>): string | null {
  /*
   * The first hop, which is the entry a fronting proxy overwrites with the
   * address it observed. Later entries are whatever reached it.
   */
  const first = (header: string) => list.get(header)?.split(",")[0]?.trim() || null;

  const platform = first(PLATFORM_HEADER);
  if (platform) return platform;

  if (!trustsProxyHeaders()) return null;

  for (const header of PROXY_HEADERS) {
    const candidate = first(header);
    if (candidate) return candidate;
  }

  return null;
}

export async function clientContext(): Promise<{
  ipHash: string | null;
  userAgent: string | null;
}> {
  const headerList = await headers();

  return {
    ipHash: await hashIp(clientAddress(headerList)),
    // Bounded before it reaches the database; an unbounded header should not
    // decide how much storage a row consumes.
    userAgent: headerList.get("user-agent")?.slice(0, 256) ?? null,
  };
}
