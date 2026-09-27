"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

import { recordAudit } from "@/lib/admin/audit";
import { isGatheringVisibility } from "@/lib/admin/gathering-visibility";
import {
  type GatheringDraft,
  deleteGathering,
  saveGathering,
  setGatheringCancelled,
  validateGathering,
} from "@/lib/admin/gatherings";
import { clientContext } from "@/lib/admin/request";
import { isElevated, requireElevatedSession, requireSession } from "@/lib/admin/session";

/**
 * Gathering mutations.
 *
 * Every one resolves the session first. A Server Action is a POST endpoint with
 * a stable identifier, reachable by anything that knows the id, so the gated
 * layout around the page that renders the form is not what protects it.
 *
 * Which check they start with follows the rule the journal already uses:
 * **anything that changes what a reader outside this panel can see needs a
 * passkey touch from the last few minutes; recording a private plan does not.**
 *
 * Here that maps onto visibility rather than onto a publish button. Saving a
 * `private` meetup writes an encrypted address nobody outside can read, and
 * holding that behind an elevation prompt would mean an organiser meeting a
 * refusal while typing up a dinner. Saving a `public` one puts a place and a
 * time in front of strangers, which is the move worth a second factor — and the
 * one that cannot be undone by editing, because it may have been read already.
 *
 * The audit detail carries the id, the visibility and nothing else. Never the
 * city, never the venue: `admin_audit` is not encrypted, and a log listing
 * where the movement met each month would hand over exactly what encrypting
 * the column was meant to withhold.
 */

export interface GatheringFormState {
  readonly errors: readonly string[];
}

function draftFromForm(form: FormData): GatheringDraft {
  const text = (key: string) => String(form.get(key) ?? "").trim();
  const visibility = text("visibility");

  return {
    title: text("title"),
    wing: text("wing"),
    city: text("city"),
    startsAt: text("startsAt"),
    endsAt: text("endsAt"),
    /*
     * Anything unrecognised becomes `private`. The one direction this must fail
     * in is closed: a malformed value that fell through to `public` would
     * publish an address because a field was mistyped.
     */
    visibility: isGatheringVisibility(visibility) ? visibility : "private",
    summary: text("summary"),
    venue: text("venue"),
    notes: text("notes"),
  };
}

export async function saveGatheringAction(
  _previous: GatheringFormState,
  form: FormData,
): Promise<GatheringFormState> {
  const session = await requireSession();
  const { ipHash } = await clientContext();

  const id = String(form.get("id") ?? "").trim() || undefined;
  const draft = draftFromForm(form);

  const errors = validateGathering(draft);
  if (errors.length > 0) return { errors };

  /*
   * Returned rather than thrown, which is why this tests elevation by hand
   * instead of calling `requireElevatedSession`. A thrown refusal would take
   * the half-typed record with it; a returned one re-renders the form with
   * every field still holding what was entered.
   */
  if (draft.visibility === "public" && !isElevated(session)) {
    return {
      errors: [
        "Making a gathering public needs a fresh passkey touch — it puts a place and a time in front of strangers. Confirm your passkey on the security page, then save again; nothing typed here will be lost.",
      ],
    };
  }

  const savedId = await saveGathering(draft, id);

  await recordAudit({
    action: id ? "gathering.update" : "gathering.create",
    outcome: "success",
    actorId: session.user.id,
    actorLabel: session.user.username,
    detail: { id: savedId, visibility: draft.visibility, wing: draft.wing },
    ipHash,
  });

  revalidatePath("/admin/gatherings");
  redirect("/admin/gatherings?saved=1");
}

/**
 * Calling it off, and putting it back on.
 *
 * A session rather than a passkey in both directions. Cancelling is the
 * corrective move — somebody has just realised the wrong thing is arranged, or
 * that it is no longer safe to hold — and holding them at a prompt while it
 * stands is the wrong trade. Reinstating is not a disclosure either: the
 * record's visibility is unchanged and whoever could see it before still can.
 */
export async function setGatheringCancelledAction(form: FormData): Promise<void> {
  const session = await requireSession();
  const { ipHash } = await clientContext();

  const id = String(form.get("id") ?? "").trim();
  if (!id) return;
  const cancelled = form.get("cancelled") === "yes";

  await setGatheringCancelled(id, cancelled);

  await recordAudit({
    action: "gathering.update",
    outcome: "success",
    actorId: session.user.id,
    actorLabel: session.user.username,
    detail: { id, cancelled },
    ipHash,
  });

  revalidatePath("/admin/gatherings");
}

/** Elevated, and the only irreversible action here. */
export async function deleteGatheringAction(form: FormData): Promise<void> {
  const session = await requireElevatedSession();
  const { ipHash } = await clientContext();

  const id = String(form.get("id") ?? "").trim();
  /*
   * Typing the title back is what makes deleting the wrong one hard. A single
   * click would be enough to lose the only record of where people were told to
   * be, and there is no copy of it anywhere else.
   */
  const confirmation = String(form.get("confirm") ?? "").trim();
  const title = String(form.get("title") ?? "").trim();
  if (!id || !title || confirmation !== title) return;

  await deleteGathering(id);

  await recordAudit({
    action: "gathering.delete",
    outcome: "success",
    actorId: session.user.id,
    actorLabel: session.user.username,
    detail: { id },
    ipHash,
  });

  revalidatePath("/admin/gatherings");
}
