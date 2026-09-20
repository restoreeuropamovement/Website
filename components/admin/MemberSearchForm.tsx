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
  query,
  country,
  status,
  sort,
}: {
  readonly countries: readonly string[];
  readonly query?: string;
  readonly country?: string;
  readonly status?: "pending" | "confirmed";
  readonly sort: "country" | "name" | "recent";
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
          {countries.map((name) => (
            <option key={name} value={name}>
              {name}
            </option>
          ))}
        </select>
      </label>

      <label className="flex flex-col gap-1.5">
        <span className="eyebrow text-muted">Status</span>
        <select name="status" defaultValue={status ?? ""} className={select}>
          <option value="">Any</option>
          <option value="confirmed">Members</option>
          <option value="pending">Awaiting review</option>
        </select>
      </label>

      <label className="flex flex-col gap-1.5">
        <span className="eyebrow text-muted">Sort by</span>
        <select name="sort" defaultValue={sort} className={select}>
          <option value="country">Country</option>
          <option value="name">Name</option>
          <option value="recent">Most recent</option>
        </select>
      </label>

      <button
        type="submit"
        className="border border-gold/70 bg-gold/10 px-5 py-2 text-[0.875rem] text-ink transition-colors hover:bg-gold/20"
      >
        Apply
      </button>

      <a
        href="/admin/members"
        className="px-2 py-2 text-[0.875rem] text-muted underline underline-offset-4 hover:text-ink"
      >
        Reset
      </a>
    </form>
  );
}
