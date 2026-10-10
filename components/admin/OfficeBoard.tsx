import { countryLabel } from "@/content/involvement";
import {
  MEMBER_OFFICES,
  MEMBER_OFFICE_LABEL,
  isWingScoped,
  type MemberOffice,
} from "@/lib/admin/member-offices";
import { MEMBER_STATUS_LABEL } from "@/lib/admin/member-status";
import type { CountryCount } from "@/lib/admin/members";
import type { OfficeHolder } from "@/lib/admin/offices";
import { heldIn } from "@/components/admin/MemberGeography";
import { cn } from "@/lib/utils";

/**
 * The movement's own shape: who answers for each wing, and who answers across
 * them.
 *
 * The same records as the roll, read the other way round. The roll is a list of
 * people with their offices attached, which is what you want when the question
 * is about a person; this is a list of offices with their people attached,
 * which is what you want when the question is "who runs Poland" — and that
 * question cannot be answered by scrolling a roll sorted by country until a
 * chip appears.
 *
 * Entirely behind the passkey, and that is not a decision this component gets
 * to make — it receives names. Which is also the argument for encrypting the
 * columns behind it: there is no aggregate view of leadership that is not a
 * list of people, so there was never a non-identifying use for the data to be
 * read in the clear.
 *
 * Nothing here can be copied out in one gesture. There is no roster, no print
 * view and no "all leaders" list, for the same reason there is no export of the
 * roll.
 */
export function OfficeBoard({
  holders,
  countries,
}: {
  readonly holders: readonly OfficeHolder[];
  /**
   * The per-country counts the page already holds.
   *
   * Used only to decide which wings are worth saying nothing has been recorded
   * for. Naming all forty-seven would bury the four that matter; naming the
   * ones with people in them is a list of places where somebody could be asked.
   */
  readonly countries: readonly CountryCount[];
}) {
  const wingScoped = holders.filter((holder) => holder.wing !== null);
  const movementWide = holders.filter((holder) => holder.wing === null);

  /** Wings with somebody recorded, in the order the offices are listed. */
  const wings = [...new Set(wingScoped.map((holder) => holder.wing as string))].sort((a, b) =>
    countryLabel(a).localeCompare(countryLabel(b), "en"),
  );

  /*
   * A wing is "unled" when records exist in that country and no leader has
   * been recorded for it. Deputies and chapter organisers do not count: the
   * question this answers is who is answerable for the wing, and a wing with
   * three chapter organisers and no leader is precisely the case worth
   * showing. "other" is excluded because it is not a wing — it is the public
   * form's answer for anywhere outside the forty-seven, and there is no
   * national wing of elsewhere to lead.
   */
  const led = new Set(
    wingScoped.filter((holder) => holder.office === "wing-lead").map((holder) => holder.wing),
  );
  const unled = countries
    .filter((row) => row.country !== "other" && heldIn(row) > 0 && !led.has(row.country))
    .map((row) => row.country);

  return (
    <section className="flex flex-col gap-6">
      <div className="flex flex-wrap items-baseline justify-between gap-x-8 gap-y-2 border-b border-rule pb-3">
        <h2 className="font-serif text-display-4 font-normal text-ink">Who answers for what</h2>
        <p className="max-w-md text-micro text-faint">
          {holders.length === 0
            ? "Nothing recorded yet. Roles are given on a record in the roll below."
            : `${holders.length} ${holders.length === 1 ? "role" : "roles"} recorded. Encrypted like a name, and this view is in the audit log.`}
        </p>
      </div>

      {holders.length === 0 ? (
        <p className="border-l-2 border-gold/65 py-1 pl-5 text-reading text-muted">
          Nobody has been given a role. Open <em className="not-italic text-ink">Give them a role</em>{" "}
          on a record in the roll below to record who leads a wing.
        </p>
      ) : (
        <div className="grid items-start gap-10 lg:grid-cols-[1.4fr_1fr]">
          <ul className="flex flex-col border-t border-hairline">
            {wings.map((wing) => (
              <li key={wing} className="flex flex-col gap-2 border-b border-hairline py-4">
                <p className="eyebrow text-muted">{countryLabel(wing)}</p>
                <ul className="flex flex-col gap-1.5">
                  {ordered(wingScoped.filter((holder) => holder.wing === wing)).map((holder) => (
                    <li key={holder.id}>
                      <Holder holder={holder} />
                    </li>
                  ))}
                </ul>
              </li>
            ))}

            {movementWide.length > 0 ? (
              <li className="flex flex-col gap-2 border-b border-hairline py-4">
                <p className="eyebrow text-muted">Across the movement</p>
                <ul className="flex flex-col gap-1.5">
                  {ordered(movementWide).map((holder) => (
                    <li key={holder.id}>
                      <Holder holder={holder} />
                    </li>
                  ))}
                </ul>
              </li>
            ) : null}
          </ul>

          <div className="flex flex-col gap-6">
            <Tally holders={holders} />
            {unled.length > 0 ? <Unled wings={unled} /> : null}
          </div>
        </div>
      )}
    </section>
  );
}

/** Offices in the order the list declares them, so a wing reads top-down. */
function ordered(holders: readonly OfficeHolder[]): readonly OfficeHolder[] {
  const rank = (office: MemberOffice) => MEMBER_OFFICES.indexOf(office);
  return [...holders].sort(
    (a, b) => rank(a.office) - rank(b.office) || a.name.localeCompare(b.name, "en"),
  );
}

function Holder({ holder }: { readonly holder: OfficeHolder }) {
  return (
    <span className="flex flex-wrap items-baseline gap-x-3 gap-y-0.5">
      <span className="text-[0.9375rem] text-gold">{MEMBER_OFFICE_LABEL[holder.office]}</span>
      <span className="font-serif text-[1.0625rem] text-ink">{holder.name}</span>
      {holder.status === "confirmed" ? null : (
        /*
         * An office held by a record nobody accepted. Said rather than
         * hidden: it is either an acceptance somebody forgot to record or an
         * office that should have gone with the decision, and neither fixes
         * itself.
         */
        <span className="text-micro text-burgundy">
          {MEMBER_STATUS_LABEL[holder.status].toLowerCase()}
        </span>
      )}
      {holder.wing && holder.wing !== holder.country ? (
        <span className="text-micro text-faint">in {countryLabel(holder.country)}</span>
      ) : null}
    </span>
  );
}

/** How many of each office are held, as a count rather than a list of names. */
function Tally({ holders }: { readonly holders: readonly OfficeHolder[] }) {
  return (
    <ul className="flex flex-col border-t border-hairline">
      {MEMBER_OFFICES.map((office) => {
        const count = holders.filter((holder) => holder.office === office).length;
        return (
          <li
            key={office}
            className="flex items-baseline justify-between gap-4 border-b border-hairline py-2.5"
          >
            <span
              className={cn("text-[0.9375rem]", count > 0 ? "text-ink" : "text-faint")}
            >
              {MEMBER_OFFICE_LABEL[office]}
              {isWingScoped(office) ? (
                <span className="ml-2 text-micro text-faint">per wing</span>
              ) : null}
            </span>
            <span
              className={cn(
                "shrink-0 text-[0.9375rem] tabular-nums",
                count > 0 ? "text-ink" : "text-faint",
              )}
            >
              {count}
            </span>
          </li>
        );
      })}
    </ul>
  );
}

function Unled({ wings }: { readonly wings: readonly string[] }) {
  return (
    <div className="border-l-2 border-burgundy py-1 pl-5">
      <p className="text-[0.875rem] text-muted">
        {wings.length === 1 ? "One country has" : `${wings.length} countries have`} records and no
        leader recorded.
      </p>
      <p className="mt-1.5 text-micro text-faint">
        {wings.map((wing) => countryLabel(wing)).join(" · ")}
      </p>
    </div>
  );
}
