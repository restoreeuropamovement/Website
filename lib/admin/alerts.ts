import { after } from "next/server";

import { securityAlert, type SecurityEventKind } from "@/content/emails";
import { recordAudit } from "@/lib/admin/audit";
import { mailNotifyAddress } from "@/lib/admin/env";
import { consumeRateLimit } from "@/lib/admin/rate-limit";
import { sendEmail } from "@/lib/email";

/**
 * Tells somebody, now, when the administrative surface changes hands.
 *
 * Everything else in this system records. The audit log is complete, the chain
 * makes it honest, and both are useless on the night it matters, because they
 * are pull: they answer questions asked by somebody who already suspects. The
 * gap that leaves is the whole reason breaches are measured in months. An
 * attacker who enrols their own passkey at two in the morning has a permanent
 * administrator account, and unless a human happens to open the security page
 * and read a line they have no reason to read, nothing in this codebase ever
 * mentions it again.
 *
 * So the events that change who can get in push, immediately, to a mailbox.
 *
 * ## Why these and so few
 *
 * See `SecurityEventKind`. The constraint is not technical: sending more is
 * trivial, and sending more is how this control dies. Every routine event added
 * here moves the whole stream one step closer to a filter rule, and the failure
 * mode of an ignored alert is worse than no alert, because the movement will
 * believe it is being watched.
 *
 * ## What the message may contain
 *
 * The same rule as every other outbound message, applied harder. No addresses,
 * no names, no session identifiers, no hashed IP. Mail is the one place where
 * this system's data leaves its own encryption and enters a provider's logs, so
 * an alert says what kind of thing happened and sends the reader to the passkey
 * for the rest. A notification that named the administrator would put a list of
 * the movement's organisers into an inbox, one message at a time.
 */

/**
 * At most this many messages per kind per hour.
 *
 * The bound is not politeness. Two of these events can be triggered by an
 * attacker at will — a run of failed sign-ins, a session presented from the
 * wrong client — and an alert that fires per occurrence hands them a way to
 * flood the operator's inbox until the real alert is buried, or until the mail
 * provider starts refusing the domain's messages altogether. Throttling turns
 * that attack into a single message saying it is happening.
 */
const ALERT_LIMIT_PER_HOUR = 3;
const ALERT_WINDOW_SECONDS = 60 * 60;

/**
 * How many failed sign-in ceremonies in an hour constitute someone trying.
 *
 * High enough that a person fumbling their own passkey twice does not raise it.
 * There are no passwords here, so a failure is an authenticator that did not
 * respond or an assertion that did not verify, both of which are rare in
 * ordinary use.
 */
export const BRUTEFORCE_THRESHOLD = 8;

/**
 * Raises one alert, throttled, in the background.
 *
 * Never throws and never blocks. Every call site is in the middle of something
 * that matters more — a sign-in being refused, a passkey being removed — and an
 * alert that can turn a completed action into a 500 is a denial of service
 * against the movement's own administrators. `after` moves the send off the
 * response path entirely, so a slow mail provider costs nobody a page load.
 */
export function raiseSecurityAlert(kind: SecurityEventKind): void {
  if (!mailNotifyAddress()) return;

  /*
   * `after` needs a request to be after, and throws outside one. Most callers
   * are in a request, but `currentSession` is also reached from scripts, so the
   * fallback sends inline instead. Either way this function does not throw:
   * raising the alarm must never be the reason the thing it is about fails.
   */
  try {
    after(() => deliver(kind));
  } catch {
    void deliver(kind);
  }
}

async function deliver(kind: SecurityEventKind): Promise<void> {
  try {
    const notify = mailNotifyAddress();
    if (!notify) return;

    const throttle = await consumeRateLimit(
      `security-alert:${kind}`,
      ALERT_LIMIT_PER_HOUR,
      ALERT_WINDOW_SECONDS,
    );
    if (!throttle.allowed) return;

    /*
     * The count goes in the message. Being told that a thing happened, when it
     * has happened forty times, is a materially different message — and since
     * the throttle is what stops the other thirty-nine being sent, this is the
     * only place the reader can learn the difference.
     */
    const result = await sendEmail({
      to: notify,
      ...securityAlert(kind, throttle.count),
    });

    /*
     * A security alert that was not delivered is itself a security event: it
     * means the movement believes it is being watched and is not. Recorded with
     * the kind, which names an event type and never a person.
     */
    if (!result.ok && result.reason !== "unconfigured") {
      await recordAudit({
        action: "security.alert.mail",
        outcome: "failure",
        actorLabel: "security alert",
        detail: { kind, reason: result.reason },
      });
    }
  } catch (error) {
    console.error("[admin][alert] could not raise", kind, error);
  }
}
