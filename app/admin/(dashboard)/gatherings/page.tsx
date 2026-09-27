import { Lock, ShieldAlert } from "lucide-react";

import { GatheringForm } from "@/components/admin/GatheringForm";
import { PasskeyElevation } from "@/components/admin/PasskeyElevation";
import { recordAudit } from "@/lib/admin/audit";
import { hasMemberEncryptionKey } from "@/lib/admin/env";
import { VISIBILITY_LABEL } from "@/lib/admin/gathering-visibility";
import { type Gathering, listGatherings, splitGatheringsByWhen } from "@/lib/admin/gatherings";
import { clientContext } from "@/lib/admin/request";
import { isElevated, requireSession } from "@/lib/admin/session";
import { lockMembersAction } from "@/app/admin/(dashboard)/members/actions";
import {
  deleteGatheringAction,
  setGatheringCancelledAction,
} from "@/app/admin/(dashboard)/gatherings/actions";
import { englishInvolvement } from "@/content/involvement";
import type { SelectOption } from "@/components/forms/Field";
import { cn } from "@/lib/utils";

/**
 * Meetups, dinners and open events.
 *
 * Two tiers, the same ones the membership roll uses. Signed in shows what is
 * arranged and where in the world; the addresses need a passkey touch from the
 * last few minutes, because a list of places people will be is the thing worth
 * a second factor here. The reveal is audited for the same reason a member
 * reveal is — reading is the sensitive act, not writing.
 *
 * **Nothing on this page is published.** There is no public events route yet,
 * deliberately: there are no gatherings to show, and a page reading "no events
 * scheduled" says something worse about a movement than having no page. What a
 * public route would be allowed to render is already decided, in one place, by
 * `publishedGatherings` in `lib/admin/gatherings.ts`.
 */

const WHEN = new Intl.DateTimeFormat("en-GB", {
  weekday: "short",
  day: "numeric",
  month: "long",
  year: "numeric",
  hour: "2-digit",
  minute: "2-digit",
});

const TIME = new Intl.DateTimeFormat("en-GB", { hour: "2-digit", minute: "2-digit" });

const VISIBILITY_TONE = {
  public: "text-burgundy",
  invitation: "text-gold",
  private: "text-muted",
} as const;

export default async function AdminGatheringsPage() {
  const session = await requireSession();

  if (!hasMemberEncryptionKey()) {
    return (
      <div className="flex flex-col gap-6">
        <header>
          <p className="eyebrow mb-4 text-burgundy">Organising</p>
          <h1 className="font-serif text-display-2 font-normal text-ink">Gatherings</h1>
        </header>
        <p className="border-l-2 border-burgundy py-1 pl-5 text-reading text-muted">
          <code className="text-ink">MEMBER_ENCRYPTION_KEY</code> is not set, so an address for
          anything that is not an open event cannot be encrypted — and this page will not record one
          in the clear instead.
        </p>
      </div>
    );
  }

  const elevated = isElevated(session);
  const gatherings = await listGatherings(elevated);
  const wings = englishInvolvement.countries;

  /*
   * Audited only when something was actually decrypted. An empty list means
   * nothing was read, and a log entry saying otherwise would make the real
   * reads harder to find later.
   */
  if (elevated && gatherings.some((one) => one.hasVenue || one.hasNotes)) {
    const { ipHash } = await clientContext();
    await recordAudit({
      action: "gathering.reveal",
      outcome: "success",
      actorId: session.user.id,
      actorLabel: session.user.username,
      /* A count. Never a city, never a venue — this log is not encrypted. */
      detail: { gatherings: gatherings.length },
      ipHash,
    });
  }

  const { ahead, behind } = splitGatheringsByWhen(gatherings);

  return (
    <div className="flex flex-col gap-12">
      <header className="flex flex-wrap items-end justify-between gap-6">
        <div>
          <p className="eyebrow mb-4 text-burgundy">Organising</p>
          <h1 className="font-serif text-display-2 font-normal text-ink">Gatherings</h1>
          <p className="mt-3 max-w-2xl text-[0.9375rem] leading-relaxed text-muted">
            {ahead.length === 0
              ? "Nothing arranged."
              : `${ahead.length} ${ahead.length === 1 ? "gathering" : "gatherings"} ahead.`}{" "}
            Nothing here appears on the public site.
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

      <SafetyNote />

      {/*
        Offered, not imposed. Arranging a private dinner writes an address
        nobody outside this panel can read, so the prompt sits beside the work
        rather than in front of it — an organiser typing up an evening should not
        meet an authentication wall. Reading back an address that is already
        stored is the act that costs a passkey touch.
      */}
      {elevated ? null : (
        <PasskeyElevation reason="Addresses for anything that is not an open event are held encrypted. Reading one back needs a fresh passkey touch, so a signed-in session left unattended cannot be used to collect a list of places people will be. You can arrange and edit gatherings without it." />
      )}

      <section className="flex flex-col gap-6">
        <h2 className="eyebrow border-b border-hairline pb-3 text-muted">Ahead</h2>
        <GatheringList
          gatherings={ahead}
          wings={wings}
          revealed={elevated}
          empty="Nothing is arranged. Anything you add below stays on this screen."
        />
      </section>

      {behind.length > 0 ? (
        <section className="flex flex-col gap-6">
          <h2 className="eyebrow border-b border-hairline pb-3 text-muted">
            Past and cancelled
          </h2>
          <GatheringList gatherings={behind} wings={wings} revealed={elevated} empty="" />
        </section>
      ) : null}

      <GatheringForm wings={wings} revealed={elevated} />
    </div>
  );
}

/**
 * Said on the page rather than left in a comment, because the person arranging
 * a meetup is the one who needs to know it — and because the honest limit of
 * what encryption buys here is easy to overestimate.
 */
function SafetyNote() {
  return (
    <div className="flex items-start gap-3 border border-hairline p-6">
      <ShieldAlert
        className="mt-0.5 size-4 shrink-0 text-gold"
        strokeWidth={1.75}
        aria-hidden="true"
      />
      <div className="max-w-2xl text-[0.875rem] leading-relaxed text-muted">
        <p>
          An address stored here is encrypted unless the gathering is an open event, so a stolen
          copy of the database does not yield a list of places to turn up at.
        </p>
        <p className="mt-3">
          That is the smaller of the two risks. The likelier one is that somebody who was told where
          to go passes it on — deliberately, or by mentioning it in a group chat. Nothing technical
          helps with that, which is why{" "}
          <em className="not-italic text-ink">by invitation</em> exists: the site can say a
          gathering is happening while a person decides who learns where it is, close to the day.
        </p>
      </div>
    </div>
  );
}

function GatheringList({
  gatherings,
  wings,
  revealed,
  empty,
}: {
  readonly gatherings: readonly Gathering[];
  readonly wings: readonly SelectOption[];
  readonly revealed: boolean;
  readonly empty: string;
}) {
  if (gatherings.length === 0) {
    return empty ? (
      <p className="border-l-2 border-gold/65 py-1 pl-5 text-reading text-muted">{empty}</p>
    ) : null;
  }

  return (
    <ul className="flex flex-col border-t border-hairline">
      {gatherings.map((one) => (
        <li key={one.id} className="flex flex-wrap items-start gap-x-6 gap-y-3 border-b border-hairline py-4">
          <div className="min-w-0 flex-1">
            <p className="eyebrow mb-1.5 flex flex-wrap items-center gap-x-3 gap-y-1 text-muted">
              <span className={VISIBILITY_TONE[one.visibility]}>
                {VISIBILITY_LABEL[one.visibility]}
              </span>
              <span aria-hidden="true" className="size-1 rotate-45 bg-gold/70" />
              <span>{one.wingLabel}</span>
              {one.cancelledAt ? (
                <>
                  <span aria-hidden="true" className="size-1 rotate-45 bg-gold/70" />
                  <span className="text-burgundy">Cancelled</span>
                </>
              ) : null}
            </p>

            <p
              className={cn(
                "font-serif text-[1.1875rem] leading-snug",
                one.cancelledAt ? "text-faint line-through" : "text-ink",
              )}
            >
              {one.title}
            </p>

            <p className="mt-0.5 text-[0.875rem] text-muted">
              <time dateTime={one.startsAt.toISOString()}>{WHEN.format(one.startsAt)}</time>
              {one.endsAt ? <> – {TIME.format(one.endsAt)}</> : null} · {one.city}
            </p>

            <Venue gathering={one} revealed={revealed} />

            {one.summary ? (
              <p className="mt-2 max-w-prose border-l-2 border-gold/50 py-1 pl-4 text-[0.875rem] leading-relaxed whitespace-pre-line text-muted">
                {one.summary}
              </p>
            ) : null}

            {one.notes ? (
              <p className="mt-2 max-w-prose text-[0.875rem] leading-relaxed whitespace-pre-line text-faint">
                {one.notes}
              </p>
            ) : null}
          </div>

          <div className="flex flex-wrap items-start gap-2">
            <form action={setGatheringCancelledAction}>
              <input type="hidden" name="id" value={one.id} />
              <input type="hidden" name="cancelled" value={one.cancelledAt ? "no" : "yes"} />
              <button
                type="submit"
                className="border border-rule px-3 py-1.5 text-micro text-muted transition-colors hover:border-gold hover:text-gold"
              >
                {one.cancelledAt ? "Reinstate" : "Cancel"}
              </button>
            </form>

            {/*
              Typing the title back, for the same reason deleting an essay asks
              for its slug: this is the only record of where people were told to
              be, and there is no copy of it anywhere else.
            */}
            <details>
              <summary className="cursor-pointer list-none border border-rule px-3 py-1.5 text-micro text-muted transition-colors hover:border-burgundy hover:text-burgundy">
                Delete
              </summary>
              <form action={deleteGatheringAction} className="mt-2 flex flex-col gap-2">
                <input type="hidden" name="id" value={one.id} />
                <input type="hidden" name="title" value={one.title} />
                <label className="flex flex-col gap-1 text-micro text-faint">
                  Type the title to confirm
                  <input
                    name="confirm"
                    autoComplete="off"
                    className="border border-rule bg-surface px-2 py-1 text-[0.875rem] text-ink focus:border-burgundy focus:outline-none"
                  />
                </label>
                <button
                  type="submit"
                  className="self-start border border-burgundy/60 px-3 py-1.5 text-micro text-burgundy transition-colors hover:bg-burgundy/10"
                >
                  Delete for good
                </button>
              </form>
            </details>
          </div>

          {/*
            Edited in place rather than on a page of its own. The whole record is
            already on screen and the action takes an id, so a route would add a
            second database read and a second screen an address can appear on.
          */}
          <details className="basis-full">
            <summary className="cursor-pointer list-none text-micro text-faint transition-colors hover:text-gold">
              Edit this gathering
            </summary>
            <div className="mt-3">
              <GatheringForm wings={wings} gathering={one} revealed={revealed} />
            </div>
          </details>
        </li>
      ))}
    </ul>
  );
}

/**
 * The three things the address line can say, which must not look alike.
 *
 * "None recorded" is a job to do before anybody travels. "Hidden" is a passkey
 * prompt. An address is an address. Flattening the first two into one line is
 * how a gathering ends up with a city and no venue on the day.
 */
function Venue({
  gathering,
  revealed,
}: {
  readonly gathering: Gathering;
  readonly revealed: boolean;
}) {
  if (gathering.venue) {
    return <p className="mt-0.5 text-[0.875rem] text-ink">{gathering.venue}</p>;
  }
  if (!gathering.hasVenue) {
    return <p className="mt-0.5 text-micro text-faint">No address recorded yet.</p>;
  }
  return (
    <p className="mt-0.5 text-micro text-faint">
      {revealed
        ? "An address is stored but could not be decrypted — the encryption key may have changed."
        : "Address encrypted. Confirm your passkey to read it."}
    </p>
  );
}
