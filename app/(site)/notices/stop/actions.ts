"use server";

import { recordAudit } from "@/lib/admin/audit";
import { stopNoticesByToken } from "@/lib/admin/notices";
import { clientContext } from "@/lib/admin/request";

/**
 * Stops notices for whoever holds the link.
 *
 * The fourth public server action, and it carries the properties the other
 * three do for the same reasons: it validates its one input server-side,
 * writes nothing anybody typed, and audits without personal data. It is the
 * one of the four that stores nothing at all, so there is nothing to encrypt,
 * and it is not rate limited for the same reason `newsletter.unsubscribe` is
 * not — the operation is idempotent, authorised by a keyed tag rather than by
 * knowing an address, and throttling the way out of a mailing list is how a
 * movement earns a spam complaint instead of a quiet departure.
 *
 * Returns `true` whatever happened, exactly as the newsletter's does. See
 * `StopPanel` for why the page must not distinguish the cases.
 */
export async function stopNotices(_state: boolean | null, form: FormData): Promise<boolean> {
  const token = String(form.get("token") ?? "");
  const stopped = token ? await stopNoticesByToken(token) : false;
  const { ipHash } = await clientContext();

  await recordAudit({
    action: "member.notices.stop",
    outcome: stopped ? "success" : "failure",
    actorLabel: "public",
    /* Not the token: it contains the member's id, which names a row in the roll. */
    detail: {},
    ipHash,
  });

  return true;
}
