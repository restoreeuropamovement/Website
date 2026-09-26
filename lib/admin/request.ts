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
 * Address headers, most trustworthy first.
 *
 * Which one answers matters more than it looks, because this value picks the
 * rate-limit bucket, and the bucket is the only thing standing between a script
 * and unlimited attempts at the sign-in ceremony, the elevation ceremony and
 * both public forms. Whoever chooses their own bucket has no limit at all: they
 * take a fresh allowance per request by changing one header, and every
 * per-connection ceiling in this codebase becomes decorative.
 *
 * `x-vercel-forwarded-for` is written by the platform and stripped from the
 * incoming request, so it is the one entry here a caller cannot set for
 * themselves. `x-forwarded-for` is normally overwritten as well, but it is an
 * ordinary request header whose trustworthiness is the host's promise rather
 * than anything the protocol enforces — and on a host that makes no such
 * promise it is simply whatever the client typed. So it stays, for deployments
 * elsewhere, and it stays second.
 */
const ADDRESS_HEADERS = ["x-vercel-forwarded-for", "x-forwarded-for", "x-real-ip"] as const;

function clientAddress(list: Awaited<ReturnType<typeof headers>>): string | null {
  for (const header of ADDRESS_HEADERS) {
    /*
     * The first hop, which is the entry a fronting proxy overwrites with the
     * address it observed. Later entries are whatever reached it, and on the
     * headers above that means whatever the client appended.
     */
    const candidate = list.get(header)?.split(",")[0]?.trim();
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
