"use server";

import { recordAudit } from "@/lib/admin/audit";
import { createEnquiry } from "@/lib/admin/enquiries";
import { hasDatabase, hasMemberEncryptionKey } from "@/lib/admin/env";
import { consumeRateLimit } from "@/lib/admin/rate-limit";
import { clientContext } from "@/lib/admin/request";
import { GLOBAL_HOURLY_LIMIT, GLOBAL_WINDOW_SECONDS, honeypotTripped } from "@/lib/spam";
import { contactSubjects } from "@/content/involvement";
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

  const errors: string[] = [];
  if (name.length < 2 || name.length > 120) {
    errors.push("Enter your name, up to 120 characters.");
  }
  if (!EMAIL.test(email) || email.length > 180) {
    errors.push("Enter a valid email address, so a reply can reach you.");
  }
  if (!contactSubjects.includes(subject)) errors.push("Choose what your message is about.");
  if (message.length < 10 || message.length > 2000) {
    errors.push("Your message should be between 10 and 2000 characters.");
  }

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
    return { status: "throttled", errors: [] };
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

  return { status: "sent", errors: [] };
}
