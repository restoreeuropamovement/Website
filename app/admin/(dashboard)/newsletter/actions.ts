"use server";

import { revalidatePath } from "next/cache";
import { after } from "next/server";
import { recordAudit } from "@/lib/admin/audit";
import { claimDispatch, sendIssue } from "@/lib/admin/dispatch";
import { hasMail } from "@/lib/admin/env";
import { clientContext } from "@/lib/admin/request";
import { dropElevation, requireElevatedSession } from "@/lib/admin/session";
import { subscriberCounts } from "@/lib/admin/subscribers";

/**
 * Sending one issue to the list.
 *
 * **Elevated, not merely signed in**, and the reasoning is the same as the
 * membership roll's rather than an abundance of caution.
 *
 * `requireSession` guards things a stolen cookie should not be able to do.
 * This is one of two operations in the project that a stolen cookie must not
 * be able to do *at all*, and it is arguably the sharper of the two. Reading
 * the roll copies a list of people; sending to the list decrypts every address
 * on it in one pass and then writes, in the movement's name, to several
 * hundred inboxes belonging to people who are identifiable as sympathetic to
 * it. A message cannot be recalled, the essay cannot be sent again once the
 * dispatch row exists, and the reputational damage of one hostile send lands
 * on every future message this domain tries to deliver.
 *
 * Against that, the cost of elevation is a passkey touch by somebody who is
 * standing at the machine deliberately pressing "send to everyone". There is
 * no editing flow to interrupt and no draft to lose, which is the argument
 * that made saving an essay merely session-gated. It does not apply here.
 *
 * The slug has to be typed to confirm, as deletion does, because the two
 * mistakes have the same shape: the wrong row, one click away from the right
 * one, and no way back.
 */
export async function sendDispatchAction(form: FormData): Promise<void> {
  const session = await requireElevatedSession();
  const { ipHash } = await clientContext();

  const slug = String(form.get("slug") ?? "").trim();
  const confirmation = String(form.get("confirm") ?? "").trim();
  if (!slug || confirmation !== slug) return;

  const audit = (outcome: "success" | "failure", detail: Record<string, unknown>) =>
    recordAudit({
      action: "newsletter.dispatch",
      outcome,
      actorId: session.user.id,
      actorLabel: session.user.username,
      /* The slug and counts. Never an address, and never how many of which
         language — this log is not encrypted and the list is small enough
         that a locale breakdown starts to describe individuals. */
      detail,
      ipHash,
    });

  /*
   * Checked before the claim rather than after it, because the claim is
   * irreversible in the one case that matters. With no mail provider every
   * send fails, and a dispatch row would already exist for an essay nobody
   * received — which the unique constraint would then keep anybody from ever
   * sending properly.
   */
  if (!hasMail()) {
    await audit("failure", { slug, reason: "no mail provider configured" });
    revalidatePath("/admin/newsletter");
    return;
  }

  if (!(await claimDispatch(slug))) {
    await audit("failure", { slug, reason: "already dispatched" });
    revalidatePath("/admin/newsletter");
    return;
  }

  /*
   * Written now, before a single message leaves, and not from inside the
   * `after` below. The audit row records the *decision* — who authorised a
   * send of this essay to the list — and that is a fact the moment the claim
   * is taken. Deferring it would leave a window in which the most consequential
   * action on this surface had happened and nothing said so.
   *
   * `intended` comes from the counts rather than from the recipient list,
   * which has not been read yet and will not be read on this thread.
   */
  const { confirmed } = await subscriberCounts();
  await audit("success", { slug, intended: confirmed });

  /*
   * The sending itself happens after the response. Several hundred paced
   * requests to a mail provider is not something to hold an administrator's
   * browser open for, and the page they return to reads the counts from the
   * dispatch row as they land.
   */
  after(async () => {
    const outcome = await sendIssue(slug);

    if (outcome.kind !== "sent") {
      await audit("failure", { slug, reason: outcome.kind });
      return;
    }

    /*
     * A second row only when something went wrong. A clean send is already
     * recorded above and in `newsletter_dispatch`; a log that repeats every
     * success is a log in which the failures stop standing out.
     */
    if (outcome.failures > 0) {
      await audit("failure", {
        slug,
        reason: "provider refused some messages",
        recipients: outcome.recipients,
        failures: outcome.failures,
      });
    }
  });

  revalidatePath("/admin/newsletter");
}

/** Ends the elevated window early, for leaving a shared machine. */
export async function lockDispatchAction(): Promise<void> {
  const session = await requireElevatedSession();
  await dropElevation(session);
  revalidatePath("/admin/newsletter");
}
