/**
 * Form state for the erasure-by-address form.
 *
 * Separate from `actions.ts` because a `"use server"` module may export only
 * async functions — a constant alongside the action is a build error, since
 * everything in such a file becomes a callable server endpoint.
 */
export interface EraseState {
  readonly status: "idle" | "erased" | "not-found" | "invalid";
  readonly message?: string;
}

export const ERASE_INITIAL: EraseState = { status: "idle" };

export interface AddMemberState {
  readonly status: "idle" | "added" | "duplicate" | "invalid";
  readonly errors: readonly string[];
  readonly message?: string;
}

export const ADD_MEMBER_INITIAL: AddMemberState = { status: "idle", errors: [] };
