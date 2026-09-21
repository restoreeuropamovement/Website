/** Shape returned by the public membership intake action. */
export interface JoinState {
  readonly status: "idle" | "received" | "invalid" | "unavailable" | "throttled";
  readonly errors: readonly string[];
}

export const JOIN_INITIAL: JoinState = { status: "idle", errors: [] };
