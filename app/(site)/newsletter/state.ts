/**
 * Shape returned by the newsletter subscription action.
 *
 * Note what is missing: there is no state meaning "already subscribed". The
 * reply must not vary with what is already on the list, or the form becomes a
 * way to test whether a named person reads this movement's letter. `sent`
 * covers both the new address and the one that was already there; which of the
 * two it was is communicated only in the message, which only the owner of the
 * address receives.
 */
export interface NewsletterState {
  readonly status: "idle" | "sent" | "invalid" | "unavailable" | "throttled";
  readonly errors: readonly string[];
}

export const NEWSLETTER_INITIAL: NewsletterState = { status: "idle", errors: [] };
