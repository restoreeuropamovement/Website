import { mailSender } from "@/lib/admin/env";

/**
 * Outbound mail.
 *
 * Three rules govern this file, and they follow from what the messages carry.
 *
 * **Sending is best-effort and never throws.** Every caller sits in the path of
 * something more important than the message: an application being recorded, a
 * subscription being confirmed. A provider outage must cost the reader a
 * confirmation email, never the thing they actually came to do. Failures are
 * returned, not raised, so the caller can audit them and carry on.
 *
 * **The provider sees addresses in the clear.** Everything in `member` is
 * encrypted precisely so a stolen database yields nothing, and mail punches a
 * hole in that: whoever delivers the message necessarily learns who it went to,
 * and keeps logs. Nothing can be done about the address — it is the destination
 * — but the *body* is ours, so messages to administrators carry counts and
 * nothing else, and messages to applicants avoid restating what they told us.
 * The less that passes through, the less those logs are worth to somebody who
 * takes them.
 *
 * **No HTML unless it earns its place.** Plain text cannot leak a read receipt
 * through a tracking pixel, cannot be used to fingerprint a mail client, and
 * renders identically everywhere. For a movement whose members may have reason
 * not to want their interest recorded, that is worth more than typography.
 */

/** The provider rejects a request that hangs; so should we, sooner. */
const TIMEOUT_MS = 10_000;

const ENDPOINT = "https://api.resend.com/emails";

export interface EmailMessage {
  readonly to: string;
  readonly subject: string;
  readonly text: string;
  /**
   * Extra headers. Used for `List-Unsubscribe` and `List-Unsubscribe-Post`,
   * which are what make Gmail and Outlook show their own unsubscribe control —
   * far more likely to be used than a link at the foot of the message, and the
   * difference between a complaint and a clean removal.
   */
  readonly headers?: Readonly<Record<string, string>>;
  /** Where a human reply should go, when that differs from the sender. */
  readonly replyTo?: string;
}

export type EmailResult =
  | { readonly ok: true }
  | { readonly ok: false; readonly reason: "unconfigured" | "rejected" | "unreachable" };

/**
 * Sends one message.
 *
 * Returns rather than throws; see the note above. `unconfigured` is a normal
 * state on a deployment that has no mail set up, and callers are expected to
 * treat it as such rather than as a fault.
 */
export async function sendEmail(message: EmailMessage): Promise<EmailResult> {
  const sender = mailSender();
  if (!sender) return { ok: false, reason: "unconfigured" };

  try {
    const response = await fetch(ENDPOINT, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${sender.apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: sender.from,
        to: [message.to],
        subject: message.subject,
        text: message.text,
        ...(message.replyTo ? { reply_to: message.replyTo } : {}),
        ...(message.headers ? { headers: message.headers } : {}),
      }),
      signal: AbortSignal.timeout(TIMEOUT_MS),
      /*
       * A confirmation is meaningless once it is stale, and this response is
       * never reused, so there is nothing worth caching and a cached POST would
       * be a bug waiting to happen.
       */
      cache: "no-store",
    });

    return response.ok ? { ok: true } : { ok: false, reason: "rejected" };
  } catch {
    /*
     * Deliberately opaque. The thrown value can contain the request, and the
     * request contains an address; letting it reach a log turns an outage into
     * a slow disclosure of who has been written to.
     */
    return { ok: false, reason: "unreachable" };
  }
}
