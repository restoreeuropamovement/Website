import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { recordAudit } from "@/lib/admin/audit";
import { clientContext } from "@/lib/admin/request";
import { currentSession, destroyCurrentSession } from "@/lib/admin/session";
import { requireVeil } from "@/lib/admin/veil";

/**
 * Signs out.
 *
 * POST only. A sign-out reachable by GET can be triggered by any image tag on
 * any page, and the `SameSite=Strict` cookie plus this method restriction are
 * what keep that from being an annoyance an attacker controls.
 */
export async function POST(request: NextRequest) {
  /* The curtain, before any work at all. See `lib/admin/veil.ts`. */
  await requireVeil();

  const session = await currentSession();
  const { ipHash } = await clientContext();

  await destroyCurrentSession();

  if (session) {
    await recordAudit({
      action: "session.sign-out",
      outcome: "success",
      actorId: session.user.id,
      actorLabel: session.user.username,
      ipHash,
    });
  }

  // 303 so the browser follows with GET after the form POST, landing on the
  // login page rather than displaying a JSON body.
  const response = NextResponse.redirect(new URL("/admin/login", request.url), 303);
  response.headers.set("Cache-Control", "no-store");
  /*
   * Empty what the browser kept of this surface.
   *
   * The session is already revoked server-side, so this is not about access —
   * it is about what is left on the machine afterwards. Admin responses are
   * `no-store`, but the back button, the bfcache and any storage a future page
   * here happens to use are not covered by that, and the pages in question can
   * contain members' names. On a shared or borrowed computer, "signed out" has
   * to mean the roll is no longer a keystroke away.
   *
   * `"cookies"` is deliberately *not* included, which is a reversal worth
   * explaining. It was, on the reasoning that clearing the whole origin does
   * not depend on getting one cookie's attributes right. Then the origin
   * acquired a second cookie that must survive a sign-out: the veil in
   * `lib/admin/veil.ts`, whose entire job is to be there on the next visit so
   * the administrator is not met by a 404 after logging out of their own panel.
   *
   * Little is lost. The session cookie is explicitly deleted above, server-side
   * revocation has already happened, and the residue this header exists to
   * clear — the back button, the bfcache, anything in storage — is covered by
   * the two directives that remain.
   */
  response.headers.set("Clear-Site-Data", '"cache", "storage"');
  return response;
}
