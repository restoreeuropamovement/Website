"use server";

import { after } from "next/server";

import { recordAudit } from "@/lib/admin/audit";
import { createEnquiry, enquiryOverview } from "@/lib/admin/enquiries";
import { hasDatabase, hasMemberEncryptionKey, mailNotifyAddress } from "@/lib/admin/env";
import { consumeRateLimit } from "@/lib/admin/rate-limit";
import { clientContext } from "@/lib/admin/request";
import { enquiryAlert } from "@/content/emails";
import { sendEmail } from "@/lib/email";
import { GLOBAL_HOURLY_LIMIT, GLOBAL_WINDOW_SECONDS, honeypotTripped } from "@/lib/spam";
import { isContactChannel, type ContactErrorCode } from "@/content/involvement";
import { type ContactState } from "./state";

/**
 * Correspondence from `/contact`.
 *
 * Same discipline as the membership intake: validated here rather than in the
 * browser, rate-limited per connection, encrypted before storage, and audited
 * with the subject line only — never the name, the address or the body.
 *
 * The reply does not vary with anything already stored, because nothing here is
 * looked up. There is no duplicate check by design: a person may write twice.
 */

const EMAIL = /^[^\s@]+@[^\s@.]+(\.[^\s@.]+)+$/;

const RATE_LIMIT = 5;
const RATE_WINDOW_SECONDS = 60 * 60;

export async function submitEnquiry(
  _state: ContactState,
  form: FormData,
): Promise<ContactState> {
  if (!hasDatabase() || !hasMemberEncryptionKey()) {
    return { status: "unavailable", errors: [] };
  }

  const { ipHash } = await clientContext();

  /* The decoy field. See lib/spam.ts, and the note in the membership intake. */
  if (honeypotTripped(form)) {
    const decoy = await consumeRateLimit(
      `enquiry:${ipHash ?? "unknown"}`,
      RATE_LIMIT,
      RATE_WINDOW_SECONDS,
    );
    if (decoy.allowed) {
      await recordAudit({
        action: "enquiry.create",
        outcome: "failure",
        actorLabel: "public contact form",
        detail: { reason: "decoy field completed" },
        ipHash,
      });
    }
    return { status: "sent", errors: [] };
  }

  const read = (name: string) => String(form.get(name) ?? "").trim();
  const name = read("name");
  const email = read("email");
  const subject = read("subject");
  const message = read("message");

  /*
   * Codes, not sentences. The subject is checked against the channel ids, not
   * against their titles: the title is what the reader sees and differs in
   * every language, while the id is what the unencrypted `subject` column
   * holds and is the same in all of them.
   */
  const errors: ContactErrorCode[] = [];
  if (name.length < 2 || name.length > 120) errors.push("name");
  if (!EMAIL.test(email) || email.length > 180) errors.push("email");
  if (!isContactChannel(subject)) errors.push("subject");
  if (message.length < 10 || message.length > 2000) errors.push("message");

  if (errors.length > 0) return { status: "invalid", errors };

  const limit = await consumeRateLimit(
    `enquiry:${ipHash ?? "unknown"}`,
    RATE_LIMIT,
    RATE_WINDOW_SECONDS,
  );
  if (!limit.allowed) return { status: "throttled", errors: [] };

  const global = await consumeRateLimit(
    "enquiry:all",
    GLOBAL_HOURLY_LIMIT,
    GLOBAL_WINDOW_SECONDS,
  );
  if (!global.allowed) {
    await recordAudit({
      action: "enquiry.create",
      outcome: "failure",
      actorLabel: "public contact form",
      detail: { reason: "site-wide hourly ceiling reached", subject },
      ipHash,
    });
    /* `busy`, not `throttled`. See the note in join/state.ts. */
    return { status: "busy", errors: [] };
  }

  await createEnquiry({ name, email, subject, message });

  await recordAudit({
    action: "enquiry.create",
    outcome: "success",
    actorLabel: "public contact form",
    /* The subject is from a fixed list. Nothing else from the form is logged. */
    detail: { subject },
    ipHash,
  });

  /*
   * After the response, for the reason the intake gives at greater length: the
   * enquiry is already stored by this point, and a mail provider that is down
   * or misconfigured must not turn a recorded enquiry into an error the writer
   * sees. Nothing is sent to the writer — the page already told them it was
   * received, and an unsolicited reply to an address typed into a public form
   * is a message somebody else may have caused them to receive.
   */
  if (mailNotifyAddress()) {
    after(async () => {
      const notify = mailNotifyAddress();
      if (!notify) return;

      const { newCount } = await enquiryOverview();
      const alert = await sendEmail({ to: notify, ...enquiryAlert(newCount) });

      /*
       * Recorded for the same reason the intake records it: an enquiry nobody
       * is told about sits unread, and silent non-delivery is how that is
       * discovered weeks later. `unconfigured` cannot occur here, since the
       * address is set, but it is not a fault in any case.
       */
      if (!alert.ok && alert.reason !== "unconfigured") {
        await recordAudit({
          action: "enquiry.create.mail",
          outcome: "failure",
          actorLabel: "public contact form",
          detail: { reason: alert.reason },
          ipHash,
        });
      }
    });
  }

  return { status: "sent", errors: [] };
}
