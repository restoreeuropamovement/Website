import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { recordAudit } from "@/lib/admin/audit";
import { clientContext } from "@/lib/admin/request";
import { currentSession, destroyCurrentSession } from "@/lib/admin/session";

/**
 * Signs out.
 *
 * POST only. A sign-out reachable by GET can be triggered by any image tag on
 * any page, and the `SameSite=Strict` cookie plus this method restriction are
 * what keep that from being an annoyance an attacker controls.
 */
export async function POST(request: NextRequest) {
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
  return response;
}
