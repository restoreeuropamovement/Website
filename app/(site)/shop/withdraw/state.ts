export type WithdrawalErrorCode = "name" | "reference" | "email";

export interface WithdrawalState {
  /** form: being filled in · check: shown back for confirmation · done: confirmed. */
  readonly stage: "form" | "check" | "done";
  readonly errors: readonly WithdrawalErrorCode[];
  readonly status?: "throttled" | "unavailable";
  readonly values: { readonly name: string; readonly reference: string; readonly email: string };
}

export const WITHDRAWAL_INITIAL: WithdrawalState = {
  stage: "form",
  errors: [],
  values: { name: "", reference: "", email: "" },
};
