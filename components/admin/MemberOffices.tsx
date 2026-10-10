import {
  MEMBER_OFFICES,
  MEMBER_OFFICE_LABEL,
  WING_SCOPED_OFFICES,
} from "@/lib/admin/member-offices";
import type { HeldOffice } from "@/lib/admin/offices";
import {
  grantOfficeAction,
  revokeOfficeAction,
} from "@/app/admin/(dashboard)/members/actions";
import type { SelectOption } from "@/components/forms/Field";

/**
 * What one member answers for, and the controls for changing it.
 *
 * A `<details>` rather than a toggle with state, like the vetting note beside
 * it, so it works before hydration and with scripting off — the whole of this
 * surface is built that way. Collapsed by default, and for a reason stronger
 * than tidiness: most records hold no office, so an open form on every row
 * would be twenty-five grant forms down a page whose subject is the handful of
 * people who do hold one.
 *
 * What the offices held are is *not* inside the collapsed part. They are
 * printed on the row, because they belong with the name the way the country
 * does; it is only the granting and the withdrawing that fold away.
 */
export function MemberOffices({
  member,
  country,
  wings,
}: {
  readonly member: { readonly id: string; readonly offices: readonly HeldOffice[] };
  /**
   * The member's own country, which the wing select opens on where it is a
   * wing. It is not always: "elsewhere" is an answer the public form offers.
   */
  readonly country: string;
  /** Wing slugs and their English names. Never "elsewhere": wings are nations. */
  readonly wings: readonly SelectOption[];
}) {
  const select =
    "border border-rule bg-transparent px-2 py-1.5 text-[0.875rem] text-ink focus:border-gold focus:outline-none";

  const opensOn = wings.some((wing) => wing.value === country) ? country : "";

  return (
    <details className="group mt-2">
      <summary className="cursor-pointer list-none text-micro text-faint transition-colors hover:text-muted">
        {member.offices.length === 0
          ? "Give them a role"
          : `${member.offices.length === 1 ? "One role" : `${member.offices.length} roles`} — change`}
        <span aria-hidden="true" className="ml-2 group-open:hidden">
          +
        </span>
        <span aria-hidden="true" className="ml-2 hidden group-open:inline">
          −
        </span>
      </summary>

      <div className="mt-2 flex max-w-prose flex-col gap-3 border-l-2 border-gold/50 py-1 pl-4">
        {member.offices.length > 0 ? (
          <ul className="flex flex-col gap-1.5">
            {member.offices.map((held) => (
              <li key={held.id} className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                <span className="text-[0.875rem] text-ink">
                  {MEMBER_OFFICE_LABEL[held.office]}
                  {held.wingLabel ? ` — ${held.wingLabel}` : ""}
                </span>
                <form action={revokeOfficeAction}>
                  <input type="hidden" name="id" value={held.id} />
                  <button
                    type="submit"
                    className="text-micro text-faint underline underline-offset-4 transition-colors hover:text-burgundy"
                  >
                    Withdraw
                  </button>
                </form>
              </li>
            ))}
          </ul>
        ) : null}

        <form action={grantOfficeAction} className="flex flex-wrap items-end gap-2">
          <input type="hidden" name="member" value={member.id} />

          <label className="flex flex-col gap-1">
            <span className="eyebrow text-muted">Role</span>
            <select name="office" defaultValue={MEMBER_OFFICES[0]} className={select}>
              {MEMBER_OFFICES.map((office) => (
                <option key={office} value={office}>
                  {MEMBER_OFFICE_LABEL[office]}
                </option>
              ))}
            </select>
          </label>

          {/*
            Opened on the member's own country, where that is a wing. Usually
            it is, and a select already showing the likely answer is one fewer
            thing to get wrong — but "elsewhere" is a real answer on the public
            form and there is no wing of elsewhere to lead. For those records
            the placeholder stays selected, so the first nation on the list
            cannot quietly become the answer to a question nobody answered.

            Not `required`, deliberately. It would read as the stricter choice
            and is the weaker one: the movement-wide roles need no wing, so
            requiring one would make them ungrantable for exactly the records
            whose country is not a wing. The action decides instead, which it
            has to do regardless — a select is a convenience and not a check.
          */}
          <label className="flex flex-col gap-1">
            <span className="eyebrow text-muted">Wing</span>
            <select name="wing" defaultValue={opensOn} className={select}>
              <option value="" disabled>
                Which wing…
              </option>
              {wings.map((wing) => (
                <option key={wing.value} value={wing.value}>
                  {wing.label}
                </option>
              ))}
            </select>
          </label>

          <button
            type="submit"
            className="border border-rule px-3 py-1.5 text-micro text-muted transition-colors hover:border-gold hover:text-gold"
          >
            Give the role
          </button>
        </form>

        <p className="text-micro text-faint">
          The wing applies to{" "}
          {WING_SCOPED_OFFICES.map((office) => MEMBER_OFFICE_LABEL[office].toLowerCase()).join(
            ", ",
          )}
          , which need one chosen; the rest are movement-wide and ignore it. A role is encrypted
          like the name above it, and the audit log records that one changed without recording
          which.
        </p>
      </div>
    </details>
  );
}
