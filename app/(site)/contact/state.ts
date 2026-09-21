/** Shape returned by the public enquiry action. */
export interface ContactState {
  readonly status: "idle" | "sent" | "invalid" | "unavailable" | "throttled";
  readonly errors: readonly string[];
}

export const CONTACT_INITIAL: ContactState = { status: "idle", errors: [] };
