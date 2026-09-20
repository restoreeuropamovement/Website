import { headers } from "next/headers";
import { hashIp } from "@/lib/admin/crypto";

/**
 * Client attribution for throttling and the audit log.
 *
 * `NextRequest.ip` was removed in Next 15, so the address comes from the proxy
 * headers the host sets. `x-forwarded-for` is a client-supplied header and is
 * trivially spoofed when nothing trustworthy sits in front of the app — we take
 * the **first** hop because that is the entry Vercel and comparable platforms
 * overwrite themselves. Treat the result as a throttling hint and an audit
 * breadcrumb, never as proof of identity; authentication is the passkey's job.
 */
export async function clientContext(): Promise<{
  ipHash: string | null;
  userAgent: string | null;
}> {
  const headerList = await headers();
  const forwarded = headerList.get("x-forwarded-for");
  const ip = forwarded?.split(",")[0]?.trim() || headerList.get("x-real-ip") || null;

  return {
    ipHash: await hashIp(ip),
    // Bounded before it reaches the database; an unbounded header should not
    // decide how much storage a row consumes.
    userAgent: headerList.get("user-agent")?.slice(0, 256) ?? null,
  };
}
