import { Lock } from "lucide-react";
import { recordAudit } from "@/lib/admin/audit";
import { PasskeyElevation } from "@/components/admin/PasskeyElevation";
import { hasMemberEncryptionKey } from "@/lib/admin/env";
import {
  isMemberStatus,
  membershipOverview,
  searchMembersRevealed,
  MEMBER_STATUSES,
  MEMBER_STATUS_LABEL,
  MEMBER_STATUS_TAB,
  type MemberSearch,
  type MemberStatus,
  type RevealedMember,
} from "@/lib/admin/members";
import { cn } from "@/lib/utils";
import { queryDigest } from "@/lib/admin/pii";
import { clientContext } from "@/lib/admin/request";
import { isElevated, requireSession } from "@/lib/admin/session";
import {
  europeanCountries,
  interestAreas,
  involvementRoleTitle,
  involvementRoles,
} from "@/content/involvement";
import { formatDate } from "@/lib/utils";
import { MemberSearchForm } from "@/components/admin/MemberSearchForm";
import { AddMember } from "@/components/admin/AddMember";
import {
  eraseMemberAction,
  lockMembersAction,
  setMemberNotesAction,
  setMemberStatusAction,
} from "./actions";
import { EraseByEmail } from "@/components/admin/EraseByEmail";

/**
 * The membership roll.
 *
 * Records are entered here by an administrator, from applications that reach the
 * movement by other means; nothing on the public site writes to this table.
 *
 * Two states, and the difference between them is the point of this page:
 *
 *   * **Signed in.** Totals and a per-country breakdown. These are aggregated in
 *     SQL over the one column held in the clear, so rendering this decrypts
 *     nothing and identifies nobody.
 *   * **Signed in and freshly re-authenticated.** Names and email addresses,
 *     searchable and sortable, plus the form for adding more. Every render of
 *     this state writes an audit row.
 *
 * Which means an attacker holding a stolen session cookie gets the first state
 * and stops there.
 */

function single(value: string | string[] | undefined): string | undefined {
  const candidate = Array.isArray(value) ? value[0] : value;
  const trimmed = candidate?.trim();
  return trimmed ? trimmed : undefined;
}

export default async function AdminMembersPage(props: {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
}) {
  const session = await requireSession();
  const searchParams = await props.searchParams;

  if (!hasMemberEncryptionKey()) {
    return (
      <div className="flex flex-col gap-6">
        <header>
          <p className="eyebrow mb-4 text-burgundy">Membership</p>
          <h1 className="font-serif text-display-2 font-normal text-ink">Members</h1>
        </header>
        <p className="border-l-2 border-burgundy py-1 pl-5 text-reading text-muted">
          <code className="text-ink">MEMBER_ENCRYPTION_KEY</code> is not set, so membership records
          cannot be read or written on this deployment. The public application form declines
          submissions rather than storing details it cannot encrypt.
        </p>
      </div>
    );
  }

  const overview = await membershipOverview();
  const elevated = isElevated(session);

  return (
    <div className="flex flex-col gap-10">
      <header className="flex flex-wrap items-end justify-between gap-6">
        <div>
          <p className="eyebrow mb-4 text-burgundy">Membership</p>
          <h1 className="font-serif text-display-2 font-normal text-ink">Members</h1>
          <p className="mt-3 text-[0.9375rem] text-muted">
            {overview.confirmed} {overview.confirmed === 1 ? "member" : "members"}
            {overview.open > 0 ? `, ${overview.open} awaiting a decision` : ""} across{" "}
            {overview.countries.length}{" "}
            {overview.countries.length === 1 ? "country" : "countries"}.
          </p>
        </div>

        {elevated ? (
          <form action={lockMembersAction}>
            <button
              type="submit"
              className="flex items-center gap-2 border border-rule px-4 py-2 text-[0.875rem] text-muted transition-colors hover:border-burgundy hover:text-burgundy"
            >
              <Lock className="size-3.5" strokeWidth={1.75} aria-hidden="true" />
              Lock again
            </button>
          </form>
        ) : null}
      </header>

      <Tabs overview={overview} active={single(searchParams.status)} />

      {elevated ? (
        <RevealedList session={session} searchParams={searchParams} />
      ) : (
        <PasskeyElevation />
      )}

      <CountryBreakdown overview={overview} />
    </div>
  );
}

/**
 * The pipeline as tabs, each carrying its count.
 *
 * Rendered above the passkey wall on purpose. That eleven applications are
 * unread is the most useful fact on this page and the one thing an
 * administrator needs on every visit; it is also a count over the unencrypted
 * status column, so it discloses nobody and need not cost a passkey assertion.
 * Who those eleven are still does.
 *
 * Plain links rather than a client component. The selected tab lives in the
 * URL, which means it can be bookmarked, opened in a second tab and shared
 * between administrators, and it ships no JavaScript to a surface that should
 * run as little as possible.
 */
function Tabs({
  overview,
  active,
}: {
  readonly overview: Awaited<ReturnType<typeof membershipOverview>>;
  readonly active?: string;
}) {
  /*
   * Everything defaults to the waiting-longest ordering except the roll, where
   * "who has been a member longest" is not a queue and country is the useful
   * grouping.
   */
  const tabs = [
    ...MEMBER_STATUSES.map((status) => ({
      key: status as string,
      label: MEMBER_STATUS_TAB[status],
      count: overview[status],
      href: `/admin/members?status=${status}&sort=${status === "confirmed" ? "country" : "waiting"}`,
      urgent: status === "new" && overview.new > 0,
    })),
    {
      key: "all",
      label: "Everything",
      count: overview.total,
      href: "/admin/members",
      urgent: false,
    },
  ];

  const selected = active && tabs.some((tab) => tab.key === active) ? active : "all";

  return (
    <nav aria-label="Application pipeline" className="flex flex-wrap gap-px bg-hairline">
      {tabs.map((tab) => {
        const current = tab.key === selected;
        return (
          <a
            key={tab.key}
            href={tab.href}
            aria-current={current ? "page" : undefined}
            className={cn(
              "flex min-w-32 flex-1 flex-col gap-1 border-b-2 px-5 py-4 transition-colors",
              current
                ? "border-burgundy bg-canvas"
                : "border-transparent bg-canvas hover:bg-hairline/40",
            )}
          >
            <span
              className={cn(
                "text-[1.75rem] leading-none tabular-nums",
                tab.urgent ? "text-burgundy" : "text-ink",
              )}
            >
              {tab.count}
            </span>
            <span className={cn("eyebrow", current ? "text-ink" : "text-muted")}>{tab.label}</span>
          </a>
        );
      })}
    </nav>
  );
}

function CountryBreakdown({
  overview,
}: {
  readonly overview: Awaited<ReturnType<typeof membershipOverview>>;
}) {
  if (overview.countries.length === 0) {
    return (
      <p className="border-l-2 border-gold/65 py-1 pl-5 text-reading text-muted">
        No records yet. Once applications are entered they appear here, counted by country.
      </p>
    );
  }

  const highest = Math.max(...overview.countries.map((row) => row.confirmed), 1);

  return (
    <section className="flex flex-col gap-4">
      <h2 className="eyebrow text-muted">By country</h2>
      <ul className="flex flex-col border-t border-hairline">
        {overview.countries.map((row) => (
          <li
            key={row.country}
            className="flex items-center gap-4 border-b border-hairline py-3"
          >
            <span className="w-44 shrink-0 text-[0.9375rem] text-ink">{row.country}</span>
            <span aria-hidden="true" className="h-1.5 flex-1 bg-hairline">
              <span
                className="block h-full bg-burgundy/60"
                style={{ width: `${Math.round((row.confirmed / highest) * 100)}%` }}
              />
            </span>
            <span className="w-24 shrink-0 text-right text-[0.9375rem] tabular-nums text-ink">
              {row.confirmed}
            </span>
            <span className="w-32 shrink-0 text-right text-micro tabular-nums text-faint">
              {row.new + row.reviewing > 0 ? `${row.new + row.reviewing} open` : ""}
            </span>
          </li>
        ))}
      </ul>
    </section>
  );
}

async function RevealedList({
  session,
  searchParams,
}: {
  readonly session: Awaited<ReturnType<typeof requireSession>>;
  readonly searchParams: Record<string, string | string[] | undefined>;
}) {
  const query = single(searchParams.q);
  const country = single(searchParams.country);
  const statusFilter = single(searchParams.status);
  const roleFilter = single(searchParams.role);
  const sortParam = single(searchParams.sort);
  const pageParam = Number(single(searchParams.page) ?? "1");

  const options: MemberSearch = {
    query,
    country: country && europeanCountries.includes(country) ? country : undefined,
    role: involvementRoles.some((role) => role.id === roleFilter) ? roleFilter : undefined,
    status:
      statusFilter === "open" || (statusFilter && isMemberStatus(statusFilter))
        ? statusFilter
        : undefined,
    sort:
      sortParam === "name" || sortParam === "recent" || sortParam === "waiting"
        ? sortParam
        : "country",
    page: Number.isFinite(pageParam) ? pageParam : 1,
  };

  const result = await searchMembersRevealed(options);
  const { ipHash } = await clientContext();

  /*
   * Audited on render, because here the read *is* the sensitive event.
   *
   * No result is recorded — logging the roll in order to note that somebody read
   * the roll would just copy it into a second table. Nor is the search term,
   * which is usually a member's name: it is stored as a keyed digest, so "did
   * anyone look this person up?" stays answerable while "list the names that
   * have been looked up" does not. The audit log is not encrypted, and must not
   * become the plaintext leak beside the encrypted column.
   */
  await recordAudit({
    action: "member.reveal",
    outcome: "success",
    actorId: session.user.id,
    actorLabel: session.user.username,
    detail: {
      searched: Boolean(query),
      queryDigest: query ? await queryDigest(query) : null,
      country: options.country ?? null,
      status: options.status ?? null,
      role: options.role ?? null,
      returned: result.members.length,
      matched: result.total,
    },
    ipHash,
  });

  return (
    <section className="flex flex-col gap-6">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <h2 className="eyebrow text-muted">
          {options.status && options.status !== "open"
            ? MEMBER_STATUS_TAB[options.status]
            : "Everything"}
          {" · "}
          {result.total} {result.total === 1 ? "record" : "records"}
          {query ? ` matching “${query}”` : ""}
        </h2>
        <p className="text-micro text-faint">
          This view is being recorded in the audit log.
        </p>
      </div>

      <AddMember
        countries={europeanCountries}
        roles={involvementRoles}
        interests={interestAreas}
      />

      <MemberSearchForm
        countries={europeanCountries}
        roles={involvementRoles}
        query={query}
        country={options.country}
        role={options.role}
        status={options.status}
        sort={options.sort ?? "country"}
      />

      {result.truncated ? (
        <p className="border-l-2 border-burgundy py-1 pl-5 text-[0.875rem] text-muted">
          There are more records than one search reads at a time. Narrow by country for exact
          counts.
        </p>
      ) : null}

      {result.members.length === 0 ? (
        <p className="border-l-2 border-gold/65 py-1 pl-5 text-reading text-muted">
          No records match.
        </p>
      ) : (
        <ul className="flex flex-col border-t border-hairline">
          {result.members.map((member) => (
            <li
              key={member.id}
              className="flex flex-wrap items-baseline gap-x-6 gap-y-3 border-b border-hairline py-4"
            >
              <div className="min-w-0 flex-1">
                <p className="eyebrow mb-1.5 flex flex-wrap items-center gap-x-3 gap-y-1 text-muted">
                  <span className={STATUS_TONE[member.status]}>
                    {MEMBER_STATUS_LABEL[member.status]}
                  </span>
                  <span aria-hidden="true" className="size-1 rotate-45 bg-gold/70" />
                  <span>{member.country}</span>
                  <span aria-hidden="true" className="size-1 rotate-45 bg-gold/70" />
                  <span>{involvementRoleTitle(member.involvementRole)}</span>
                  <span aria-hidden="true" className="size-1 rotate-45 bg-gold/70" />
                  <time dateTime={member.createdAt.toISOString()}>
                    {formatDate(member.createdAt.toISOString().slice(0, 10))}
                  </time>
                </p>
                <p className="font-serif text-[1.1875rem] leading-snug text-ink">{member.name}</p>
                <p className="mt-0.5 text-[0.875rem] text-muted">{member.email}</p>
                <p className="mt-0.5 text-micro text-faint">
                  {member.interestArea}
                  {member.region ? ` · ${member.region}` : ""}
                </p>
                {member.message ? (
                  <p className="mt-2 max-w-prose border-l-2 border-gold/50 py-1 pl-4 text-[0.875rem] leading-relaxed whitespace-pre-line text-muted">
                    {member.message}
                  </p>
                ) : null}

                <VettingNotes member={member} />
              </div>

              <div className="flex flex-wrap items-center gap-2">
                {NEXT_STATES[member.status].map(([status, label]) => (
                  <form key={status} action={setMemberStatusAction}>
                    <input type="hidden" name="id" value={member.id} />
                    <input type="hidden" name="status" value={status} />
                    <button
                      type="submit"
                      className="border border-rule px-3 py-1.5 text-micro text-muted transition-colors hover:border-gold hover:text-gold"
                    >
                      {label}
                    </button>
                  </form>
                ))}

                <form action={eraseMemberAction}>
                  <input type="hidden" name="id" value={member.id} />
                  <input type="hidden" name="country" value={member.country} />
                  <button
                    type="submit"
                    className="border border-rule px-3 py-1.5 text-micro text-muted transition-colors hover:border-burgundy hover:text-burgundy"
                  >
                    Erase
                  </button>
                </form>
              </div>
            </li>
          ))}
        </ul>
      )}

      {result.pageCount > 1 ? (
        <Pagination page={result.page} pageCount={result.pageCount} params={searchParams} />
      ) : null}

      <EraseByEmail />
    </section>
  );
}

const STATUS_TONE: Record<MemberStatus, string> = {
  new: "text-burgundy",
  reviewing: "text-gold",
  awaiting: "text-gold",
  confirmed: "text-ink",
  declined: "text-faint",
};

/**
 * Where an application can go from where it is, and what the move is called.
 *
 * Every state offers a way back, including `declined`, because these record a
 * judgement rather than a workflow and judgements get revised. What no state
 * offers is a button to its own value: a transition that changes nothing would
 * still write an audit row and reset the waiting clock.
 *
 * "Wrote to them" is the move that matters most here. It is what moves a
 * record out of the pile somebody is thinking about and into the pile that is
 * waiting on the applicant, which is the distinction the whole tab strip
 * exists to make visible.
 */
const NEXT_STATES: Record<MemberStatus, readonly (readonly [MemberStatus, string])[]> = {
  new: [
    ["reviewing", "Start review"],
    ["awaiting", "Wrote to them"],
    ["confirmed", "Accept"],
    ["declined", "Decline"],
  ],
  reviewing: [
    ["awaiting", "Wrote to them"],
    ["confirmed", "Accept"],
    ["declined", "Decline"],
    ["new", "Back to unread"],
  ],
  awaiting: [
    ["confirmed", "Accept"],
    ["declined", "Decline"],
    ["reviewing", "They replied"],
  ],
  confirmed: [
    ["reviewing", "Return to review"],
    ["declined", "Decline"],
  ],
  declined: [["reviewing", "Reopen"]],
};

/**
 * The vetting note, collapsed until asked for.
 *
 * A `<details>` rather than a toggle with state, so it works before hydration
 * and without JavaScript like the rest of this surface. Collapsed by default
 * because a note is a private remark about a named person and should not be
 * sitting open on a screen somebody walks past — the summary says whether one
 * exists, not what it says.
 */
function VettingNotes({ member }: { readonly member: RevealedMember }) {
  return (
    <details className="group mt-2">
      <summary className="cursor-pointer list-none text-micro text-faint transition-colors hover:text-muted">
        {member.notes ? "Note written" : "Add a note"}
        <span aria-hidden="true" className="ml-2 group-open:hidden">
          +
        </span>
        <span aria-hidden="true" className="ml-2 hidden group-open:inline">
          −
        </span>
      </summary>

      <form action={setMemberNotesAction} className="mt-2 flex max-w-prose flex-col gap-2">
        <input type="hidden" name="id" value={member.id} />
        <label htmlFor={`notes-${member.id}`} className="sr-only">
          Vetting notes
        </label>
        <textarea
          id={`notes-${member.id}`}
          name="notes"
          rows={3}
          maxLength={2000}
          defaultValue={member.notes}
          placeholder="Spoke to them on the 14th. Wants to help with the Polish wing."
          className="w-full border border-rule bg-transparent px-3 py-2 text-[0.875rem] leading-relaxed text-ink placeholder:text-faint focus:border-gold focus:outline-none"
        />
        <div className="flex items-center gap-3">
          <button
            type="submit"
            className="self-start border border-rule px-3 py-1.5 text-micro text-muted transition-colors hover:border-gold hover:text-gold"
          >
            Save note
          </button>
          <span className="text-micro text-faint">
            Encrypted, and never written to the audit log. Clear the box to delete it.
          </span>
        </div>
      </form>
    </details>
  );
}

function Pagination({
  page,
  pageCount,
  params,
}: {
  readonly page: number;
  readonly pageCount: number;
  readonly params: Record<string, string | string[] | undefined>;
}) {
  const href = (target: number) => {
    const next = new URLSearchParams();
    for (const [key, value] of Object.entries(params)) {
      const flat = Array.isArray(value) ? value[0] : value;
      if (flat && key !== "page") next.set(key, flat);
    }
    next.set("page", String(target));
    return `/admin/members?${next.toString()}`;
  };

  return (
    <nav aria-label="Pages" className="flex items-center gap-4 text-[0.875rem]">
      {page > 1 ? (
        <a href={href(page - 1)} className="text-muted underline underline-offset-4 hover:text-ink">
          Previous
        </a>
      ) : null}
      <span className="text-faint">
        Page {page} of {pageCount}
      </span>
      {page < pageCount ? (
        <a href={href(page + 1)} className="text-muted underline underline-offset-4 hover:text-ink">
          Next
        </a>
      ) : null}
    </nav>
  );
}
