import Link from "next/link";

import {
  MEMBER_STATUSES,
  MEMBER_STATUS_LABEL,
  type MemberSort,
  type MemberStatus,
} from "@/lib/admin/member-status";
import type { SelectOption } from "@/components/forms/Field";

/**
 * Search, filter and sort controls for the membership roll.
 *
 * A plain `GET` form: the state lives in the URL, the server does the work, and
 * this ships no JavaScript. That is deliberate rather than merely tidy. The
 * alternative — fetching records into client state and filtering there — would
 * mean sending decrypted names and addresses to the browser and holding them in
 * memory for as long as the tab stayed open. Everything on this page came out of
 * an encrypted column; it should reach the screen and go no further.
 */
export function MemberSearchForm({
  countries,
  roles,
  query,
  country,
  role,
  status,
  sort,
}: {
  /** Value is the slug the `country` column holds; label is the English name. */
  readonly countries: readonly SelectOption[];
  readonly roles: readonly { readonly id: string; readonly title: string }[];
  readonly query?: string;
  readonly country?: string;
  readonly role?: string;
  readonly status?: MemberStatus | "open";
  readonly sort: MemberSort;
}) {
  const select =
    "border border-rule bg-surface px-3 py-2 text-[0.875rem] text-ink focus:border-gold focus:outline-none";

  return (
    <form
      method="get"
      action="/admin/members"
      className="flex flex-wrap items-end gap-4 border border-hairline p-5"
    >
      <label className="flex min-w-56 flex-1 flex-col gap-1.5">
        <span className="eyebrow text-muted">Search name or email</span>
        <input
          type="search"
          name="q"
          defaultValue={query ?? ""}
          placeholder="Part of a name or address"
          autoComplete="off"
          className={select}
        />
      </label>

      <label className="flex flex-col gap-1.5">
        <span className="eyebrow text-muted">Country</span>
        <select name="country" defaultValue={country ?? ""} className={select}>
          <option value="">All countries</option>
          {countries.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </label>

      <label className="flex flex-col gap-1.5">
        <span className="eyebrow text-muted">Applied as</span>
        <select name="role" defaultValue={role ?? ""} className={select}>
          <option value="">Either</option>
          {roles.map((option) => (
            <option key={option.id} value={option.id}>
              {option.title}
            </option>
          ))}
        </select>
      </label>

      <label className="flex flex-col gap-1.5">
        <span className="eyebrow text-muted">Status</span>
        <select name="status" defaultValue={status ?? ""} className={select}>
          <option value="">Any</option>
          <option value="open">Awaiting a decision</option>
          {MEMBER_STATUSES.map((value) => (
            <option key={value} value={value}>
              {MEMBER_STATUS_LABEL[value]}
            </option>
          ))}
        </select>
      </label>

      <label className="flex flex-col gap-1.5">
        <span className="eyebrow text-muted">Sort by</span>
        <select name="sort" defaultValue={sort} className={select}>
          <option value="country">Country</option>
          <option value="name">Name</option>
          <option value="recent">Most recent</option>
          <option value="waiting">Waiting longest</option>
        </select>
      </label>

      <button
        type="submit"
        className="border border-gold/70 bg-gold/10 px-5 py-2 text-[0.875rem] text-ink transition-colors hover:bg-gold/20"
      >
        Apply
      </button>

      <Link
        href="/admin/members"
        className="px-2 py-2 text-[0.875rem] text-muted underline underline-offset-4 hover:text-ink"
      >
        Reset
      </Link>
    </form>
  );
}
