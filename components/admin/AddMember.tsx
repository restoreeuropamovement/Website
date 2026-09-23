"use client";

import { useActionState } from "react";
import { UserPlus } from "lucide-react";
import { addMemberAction } from "@/app/admin/(dashboard)/members/actions";
import { ADD_MEMBER_INITIAL, type AddMemberState } from "@/app/admin/(dashboard)/members/state";
import { MEMBER_STATUSES, MEMBER_STATUS_LABEL } from "@/lib/admin/member-status";
import type { SelectOption } from "@/components/forms/Field";

/**
 * Records an application that reached the movement by some other channel.
 *
 * The public form at /join is the usual way in; this is for the ones that
 * arrive by conversation, at an event or forwarded by somebody else. The
 * name and address are encrypted by the action before they are stored; they exist
 * in the clear only in this form, on this screen, for as long as it takes to
 * submit — which is why the fields are uncontrolled and nothing is kept in
 * component state after the action returns.
 */
export function AddMember({
  countries,
  roles,
  interests,
}: {
  /*
   * Ids and labels, because the values these selects submit are what the
   * unencrypted columns store. The roll is English-only; the labels here are
   * the English ones for ids the public form may have written in any language.
   */
  readonly countries: readonly SelectOption[];
  readonly roles: readonly { readonly id: string; readonly title: string }[];
  readonly interests: readonly SelectOption[];
}) {
  const [state, formAction, pending] = useActionState<AddMemberState, FormData>(
    addMemberAction,
    ADD_MEMBER_INITIAL,
  );

  const field =
    "border border-rule bg-surface px-3 py-2 text-[0.875rem] text-ink focus:border-gold focus:outline-none";

  return (
    <section className="flex flex-col gap-5 border border-hairline p-6">
      <div className="flex items-start gap-3">
        <UserPlus className="mt-0.5 size-4 shrink-0 text-gold" strokeWidth={1.75} aria-hidden="true" />
        <div>
          <h2 className="eyebrow text-muted">Add a record</h2>
          <p className="mt-2 max-w-xl text-[0.875rem] leading-relaxed text-muted">
            For an application that arrived by post, email or in person. The name and address are
            encrypted before they are written down. Add it as{" "}
            <em className="not-italic text-ink">awaiting review</em> if you have not yet vetted it.
          </p>
        </div>
      </div>

      {/*
        `key` remounts the form once a record is added, which clears the fields.
        Leaving somebody's name and address sitting in the inputs after a
        successful submit is how the next person to walk past the screen reads it.
      */}
      <form key={state.status === "added" ? "cleared" : "entry"} action={formAction} className="flex flex-col gap-4">
        <div className="grid gap-4 sm:grid-cols-2">
          <label className="flex flex-col gap-1.5">
            <span className="eyebrow text-muted">Name</span>
            <input name="name" required maxLength={120} autoComplete="off" className={field} />
          </label>
          <label className="flex flex-col gap-1.5">
            <span className="eyebrow text-muted">Email</span>
            <input
              name="email"
              type="email"
              required
              maxLength={180}
              autoComplete="off"
              className={field}
            />
          </label>
          <label className="flex flex-col gap-1.5">
            <span className="eyebrow text-muted">Country</span>
            <select name="country" required defaultValue="" className={field}>
              <option value="" disabled>
                Select…
              </option>
              {countries.map((country) => (
                <option key={country.value} value={country.value}>
                  {country.label}
                </option>
              ))}
            </select>
          </label>
          <label className="flex flex-col gap-1.5">
            <span className="eyebrow text-muted">Role</span>
            <select name="role" required defaultValue="" className={field}>
              <option value="" disabled>
                Select…
              </option>
              {roles.map((role) => (
                <option key={role.id} value={role.id}>
                  {role.title}
                </option>
              ))}
            </select>
          </label>
          <label className="flex flex-col gap-1.5">
            <span className="eyebrow text-muted">Area of interest</span>
            <select name="interest" required defaultValue="" className={field}>
              <option value="" disabled>
                Select…
              </option>
              {interests.map((area) => (
                <option key={area.value} value={area.value}>
                  {area.label}
                </option>
              ))}
            </select>
          </label>
          <label className="flex flex-col gap-1.5">
            <span className="eyebrow text-muted">Status</span>
            <select name="status" defaultValue="new" className={field}>
              {MEMBER_STATUSES.map((value) => (
                <option key={value} value={value}>
                  {MEMBER_STATUS_LABEL[value]}
                </option>
              ))}
            </select>
          </label>
        </div>

        <div className="flex flex-wrap items-center gap-4">
          <button
            type="submit"
            disabled={pending}
            className="border border-gold/70 bg-gold/10 px-5 py-2 text-[0.875rem] text-ink transition-colors hover:bg-gold/20 disabled:opacity-60"
          >
            {pending ? "Saving…" : "Add record"}
          </button>

          {state.message ? (
            <p
              role="status"
              className={`border-l-2 py-1 pl-4 text-[0.875rem] ${
                state.status === "added" ? "border-gold/65 text-ink" : "border-burgundy text-muted"
              }`}
            >
              {state.message}
            </p>
          ) : null}
        </div>

        {state.errors.length > 0 ? (
          <ul role="alert" className="flex flex-col gap-1 border-l-2 border-burgundy py-1 pl-4">
            {state.errors.map((error) => (
              <li key={error} className="text-[0.875rem] text-muted">
                {error}
              </li>
            ))}
          </ul>
        ) : null}
      </form>
    </section>
  );
}
