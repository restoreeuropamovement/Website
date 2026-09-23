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
export interface JoinState {
  readonly status: "idle" | "received" | "invalid" | "unavailable" | "throttled";
  readonly errors: readonly JoinErrorCode[];
}

export const JOIN_INITIAL: JoinState = { status: "idle", errors: [] };
