"use server";

import { revalidatePath } from "next/cache";
import { after } from "next/server";
import { recordAudit } from "@/lib/admin/audit";
import { hasMail } from "@/lib/admin/env";
import { claimNotice, noticeAudience, sendMemberNotice } from "@/lib/admin/notices";
import { clientContext } from "@/lib/admin/request";
import { dropElevation, requireElevatedSession } from "@/lib/admin/session";

/** Long enough to say something, short enough that nobody pastes an essay in. */
const SUBJECT_MAX = 140;
const BODY_MAX = 20_000;

/**
 * Writing to the membership.
 *
 * **Elevated, and the argument is the dispatch action's only more so.** That
 * one decrypts every address on a list of people who asked for a letter; this
 * one decrypts every address on the membership roll — the table the whole
 * project is arranged around not disclosing — and writes to all of them in the
 * movement's name. A stolen session cookie must not be able to do it, and the
 * cost of saying so is a passkey touch by somebody standing at the machine.
 *
 * The subject has to be typed back to confirm, as a slug does when sending an
 * essay and as a name does when erasing a record. The mistake being guarded
 * against is the same in all three: the right-looking button pressed against
 * the wrong content, with no way back once it has gone.
 *
 * Unlike a dispatch there is no uniqueness constraint to lean on, because a
 * notice is free text and the movement may legitimately write twice about the
 * same thing. That makes the typed confirmation the only guard against a
 * double send, which is why it is the subject rather than a fixed word: a
 * second press of a stale form is confirmed against whatever is in the box.
 */
export async function sendNoticeAction(form: FormData): Promise<void> {
  const session = await requireElevatedSession();
  const { ipHash } = await clientContext();

  const subject = String(form.get("subject") ?? "").trim();
  const body = String(form.get("body") ?? "").trim();
  const confirmation = String(form.get("confirm") ?? "").trim();

  const audit = (outcome: "success" | "failure", detail: Record<string, unknown>) =>
    recordAudit({
      action: "member.notice",
      outcome,
      actorId: session.user.id,
      actorLabel: session.user.username,
      /*
       * The subject and the counts. The subject is operator-written and names
       * nobody; the body is not here, and is not stored anywhere else either,
       * for the reason given on `member_notice` in db/schema.sql.
       */
      detail,
      ipHash,
    });

  if (!subject || !body) {
    await audit("failure", { reason: "empty subject or body" });
    revalidatePath("/admin/notices");
    return;
  }

  if (subject.length > SUBJECT_MAX || body.length > BODY_MAX) {
    await audit("failure", { reason: "too long" });
    revalidatePath("/admin/notices");
    return;
  }

  if (confirmation !== subject) {
    await audit("failure", { subject, reason: "confirmation did not match" });
    revalidatePath("/admin/notices");
    return;
  }

  /*
   * Checked before the record is written, for the reason the dispatch action
   * checks it before the claim: with no provider every message fails, and a
   * row saying a notice went out to nobody is worse than no row.
   */
  if (!hasMail()) {
    await audit("failure", { subject, reason: "no mail provider configured" });
    revalidatePath("/admin/notices");
    return;
  }

  const { reachable } = await noticeAudience();
  const id = await claimNotice(subject);

  /*
   * Written now, before a single message leaves, and not from inside `after`.
   * The row records the decision — who authorised writing to the membership,
   * and about what — and that is a fact the moment the record is claimed.
   */
  await audit("success", { subject, intended: reachable });

  after(async () => {
    const outcome = await sendMemberNotice(id, subject, body);

    if (outcome.kind === "no-recipients") {
      await audit("failure", { subject, reason: "no recipients" });
      return;
    }

    /* A second row only when something went wrong; a clean send is above. */
    if (outcome.failures > 0) {
      await audit("failure", {
        subject,
        reason: "provider refused some messages",
        recipients: outcome.recipients,
        failures: outcome.failures,
      });
    }
  });

  revalidatePath("/admin/notices");
}

/** Ends the elevated window early, for leaving a shared machine. */
export async function lockNoticesAction(): Promise<void> {
  const session = await requireElevatedSession();
  await dropElevation(session);
  revalidatePath("/admin/notices");
}
