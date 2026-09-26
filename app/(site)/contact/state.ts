import type { ContactErrorCode } from "@/content/involvement";

/** Shape returned by the public enquiry action. See the note in join/state.ts. */
export interface ContactState {
  readonly status: "idle" | "sent" | "invalid" | "unavailable" | "throttled" | "busy";
  readonly errors: readonly ContactErrorCode[];
}

export const CONTACT_INITIAL: ContactState = { status: "idle", errors: [] };
