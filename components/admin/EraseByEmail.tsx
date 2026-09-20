"use client";

import { useActionState } from "react";
import { eraseByEmailAction } from "@/app/admin/(dashboard)/members/actions";
import { ERASE_INITIAL, type EraseState } from "@/app/admin/(dashboard)/members/state";

/**
 * Honours a "delete my data" request that arrives by email or post.
 *
 * Separate from the Erase button on each row because the two start from
 * different places: that one begins with a record an administrator is looking
 * at, this one with an address on a request and no certainty there is a record
 * at all. It resolves the address through the keyed digest, so honouring one
 * person's erasure does not involve reading everybody else's name.
 *
 * Client-side only to show the action's result; the work is entirely server-side.
 */
export function EraseByEmail() {
  const [state, formAction, pending] = useActionState<EraseState, FormData>(
    eraseByEmailAction,
    ERASE_INITIAL,
  );

  return (
    <section className="flex flex-col gap-4 border border-burgundy/40 p-6">
      <div>
        <h2 className="eyebrow text-burgundy">Erasure request</h2>
        <p className="mt-3 max-w-xl text-[0.875rem] leading-relaxed text-muted">
          Under GDPR a member may have their record deleted on request, without giving a reason and
          without undue delay. Enter the address the request came from. This cannot be undone, and
          the address itself is not written to the audit log.
        </p>
      </div>

      <form action={formAction} className="flex flex-wrap items-end gap-3">
        <label className="flex min-w-64 flex-col gap-1.5">
          <span className="eyebrow text-muted">Email address</span>
          <input
            type="email"
            name="email"
            required
            autoComplete="off"
            className="border border-rule bg-surface px-3 py-2 text-[0.875rem] text-ink focus:border-gold focus:outline-none"
          />
        </label>
        <button
          type="submit"
          disabled={pending}
          className="border border-burgundy/60 px-5 py-2 text-[0.875rem] text-burgundy transition-colors hover:bg-burgundy/10 disabled:opacity-60"
        >
          {pending ? "Erasing…" : "Erase this record"}
        </button>
      </form>

      {state.message ? (
        <p
          role="status"
          className={`border-l-2 py-1 pl-4 text-[0.875rem] ${
            state.status === "erased" ? "border-gold/65 text-ink" : "border-burgundy text-muted"
          }`}
        >
          {state.message}
        </p>
      ) : null}
    </section>
  );
}
