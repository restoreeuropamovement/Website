"use server";

import { after } from "next/server";

import { recordAudit } from "@/lib/admin/audit";
import { hasDatabase, hasMemberEncryptionKey } from "@/lib/admin/env";
import { consumeRateLimit } from "@/lib/admin/rate-limit";
import { clientContext } from "@/lib/admin/request";
import {
  confirmSubscription as confirmSubscriptionRecord,
  purgeExpiredUnconfirmed,
  requestSubscription,
  unsubscribeByToken,
  unsubscribeToken,
} from "@/lib/admin/subscribers";
import { alreadySubscribed, confirmSubscription } from "@/content/emails";
import { sendEmail } from "@/lib/email";
import { DEFAULT_LOCALE, isLocale } from "@/lib/i18n";
import { SITE_URL } from "@/lib/site";
import { NEWSLETTER_INITIAL, type NewsletterState } from "./state";

/**
 * The third server action on the public site, and it follows the same four
 * rules as the two that came before: validated here rather than in the
 * browser, rate limited per connection, encrypted before storage, audited
 * without personal data.
 *
 * It adds a fifth of its own. **Nothing is delivered to an address until that
 * address confirms.** Membership applications are read by a person, so a
 * malicious submission is caught by review; a subscription is read by nobody,
 * so the confirmation click is the only thing preventing this form from being
 * used to send political mail to someone who never asked for it.
 */

const EMAIL = /^[^\s@]+@[^\s@.]+(\.[^\s@.]+)+$/;

/** Per connection, per hour. A person subscribes once; a script does not. */
const RATE_LIMIT = 5;
const RATE_WINDOW_SECONDS = 60 * 60;

export async function subscribe(
  _state: NewsletterState,
  form: FormData,
): Promise<NewsletterState> {
  if (!hasDatabase() || !hasMemberEncryptionKey()) {
    return { status: "unavailable", errors: [] };
  }

  const email = String(form.get("email") ?? "").trim();
  /*
   * The language to write to this address in, now and for every issue after
   * it. Anything the browser sends that is not a language the site publishes
   * falls back to English rather than being stored and mailed in later.
   */
  const submitted = String(form.get("locale") ?? "").trim();
  const locale = isLocale(submitted) ? submitted : DEFAULT_LOCALE;

  if (!EMAIL.test(email) || email.length > 180) {
    return { status: "invalid", errors: ["Enter a valid email address."] };
  }

  const { ipHash } = await clientContext();
  const limit = await consumeRateLimit(
    `subscribe:${ipHash ?? "unknown"}`,
    RATE_LIMIT,
    RATE_WINDOW_SECONDS,
  );
  if (!limit.allowed) return { status: "throttled", errors: [] };

  const outcome = await requestSubscription(email, locale);

  await recordAudit({
    action: "newsletter.subscribe",
    outcome: "success",
    actorLabel: "public",
    /* Whether a confirmation was requested. Never the address. */
    detail: { reissued: outcome.kind === "already" },
    ipHash,
  });

  /*
   * After the response, so the two branches below cannot be told apart by how
   * long the form took to answer. They send visibly different messages, but
   * only to the address itself — which is the one party already entitled to
   * know whether it is on the list.
   */
  after(async () => {
    if (outcome.kind === "pending") {
      await sendEmail({ to: email, ...(await confirmSubscription(locale, outcome.token)) });
    } else {
      const url = `${SITE_URL}/newsletter/unsubscribe?token=${encodeURIComponent(
        await unsubscribeToken(outcome.id),
      )}`;
      await sendEmail({ to: email, ...(await alreadySubscribed(locale, url)) });
    }

    /*
     * Opportunistic rather than scheduled. Addresses that were entered and
     * never confirmed are cleared here, which spares the deployment a cron job
     * for a sweep that only needs to happen roughly as often as people
     * subscribe.
     */
    await purgeExpiredUnconfirmed();
  });

  return { status: "sent", errors: [] };
}

export async function resetNewsletterForm(): Promise<NewsletterState> {
  return NEWSLETTER_INITIAL;
}

/**
 * Completes a subscription.
 *
 * Reached from a button on `/newsletter/confirm`, not from the link in the
 * message directly, and that indirection is the point. Corporate mail filters
 * and link scanners fetch every URL in an incoming message to check it is
 * safe. If confirming were a plain GET, those scanners would confirm
 * subscriptions on behalf of people who never opened the mail — quietly
 * turning double opt-in back into single opt-in for exactly the readers whose
 * employers watch their mail most closely.
 */
export async function confirm(_state: boolean | null, form: FormData): Promise<boolean> {
  const token = String(form.get("token") ?? "");
  if (!token) return false;

  const confirmed = await confirmSubscriptionRecord(token);
  const { ipHash } = await clientContext();

  await recordAudit({
    action: "newsletter.confirm",
    outcome: confirmed ? "success" : "failure",
    actorLabel: "public",
    detail: {},
    ipHash,
  });

  return confirmed;
}

/**
 * Removes an address from the list.
 *
 * A button for the same reason as above, and additionally because an
 * unsubscribe triggered by a scanner would remove a reader who never asked to
 * leave. Always reports success: the person clicking has said they want no
 * further contact, and distinguishing "removed" from "was not subscribed"
 * would answer a question about an address to whoever is holding the link,
 * who is not necessarily its owner.
 */
export async function unsubscribe(_state: boolean | null, form: FormData): Promise<boolean> {
  const token = String(form.get("token") ?? "");
  const removed = token ? await unsubscribeByToken(token) : false;
  const { ipHash } = await clientContext();

  await recordAudit({
    action: "newsletter.unsubscribe",
    outcome: removed ? "success" : "failure",
    actorLabel: "public",
    detail: {},
    ipHash,
  });

  return true;
}
