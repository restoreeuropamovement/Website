import type { JoinErrorCode } from "@/content/involvement";

/**
 * Shape returned by the public membership intake action.
 *
 * Errors are codes, not sentences. The action runs on the server and has no
 * business deciding what language the reader is in; the form does, and turns
 * each code into a sentence from its own edition. Posting a locale to the
 * action instead would mean a client-supplied value steering server behaviour
 * to no purpose.
 */
/**
 * `throttled` and `busy` are both refusals to accept a form, and separating
 * them is not a nicety. `throttled` means this connection has sent several
 * already; `busy` means the site-wide ceiling was reached and the reader has
 * very probably done nothing at all. Telling the second group they have
 * already applied is untrue, and on the day it would happen — a launch, a
 * link that travelled — it is untrue to the largest number of people the
 * movement will ever have had at once.
 */
export interface JoinState {
  readonly status: "idle" | "received" | "invalid" | "unavailable" | "throttled" | "busy";
  readonly errors: readonly JoinErrorCode[];
}

export const JOIN_INITIAL: JoinState = { status: "idle", errors: [] };
