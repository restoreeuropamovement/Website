"use server";

import { revalidatePath } from "next/cache";
import { recordAudit } from "@/lib/admin/audit";
import {
  createMember,
  eraseMember,
  findMemberIdByEmail,
  isMemberStatus,
  setMemberNotes,
  setMemberStatus,
} from "@/lib/admin/members";
import { isMemberOffice, isWingScoped } from "@/lib/admin/member-offices";
import { grantOffice, isWingValue, revokeOffice } from "@/lib/admin/offices";
import { officeDigest } from "@/lib/admin/pii";
import { clientContext } from "@/lib/admin/request";
import { dropElevation, requireElevatedSession } from "@/lib/admin/session";
import {
  isCountryValue,
  isInterestArea,
  isInvolvementRole,
} from "@/content/involvement";
import type { AddMemberState, EraseState } from "@/app/admin/(dashboard)/members/state";

/**
 * Mutations against the membership roll.
 *
 * Every one requires an *elevated* session rather than merely an authenticated
 * one, on the same reasoning as reading: erasing a member is irreversible, and a
 * session left unattended should not be able to do it.
 */

/** RFC-5322 in full is not worth it; this rejects what is clearly not an address. */
const EMAIL = /^[^\s@]+@[^\s@.]+(\.[^\s@.]+)+$/;

/**
 * Adds a record from an application that arrived by some other channel.
 *
 * Validated here rather than trusted from the form, on the same reasoning as
 * anywhere else: the browser's checks are a convenience, and a Server Action is
 * an endpoint whoever holds a session can call directly.
 *
 * The audit detail names the country and the status but never the person. An
 * audit log that recorded who was added would, over time, become an unencrypted
 * copy of the roll it sits beside.
 */
export async function addMemberAction(
  _state: AddMemberState,
  form: FormData,
): Promise<AddMemberState> {
  const session = await requireElevatedSession();
  const { ipHash } = await clientContext();

  const read = (name: string) => String(form.get(name) ?? "").trim();
  const name = read("name");
  const email = read("email");
  const country = read("country");
  const involvementRole = read("role");
  const interestArea = read("interest");
  const statusField = read("status");
  const status = isMemberStatus(statusField) ? statusField : "new";

  const errors: string[] = [];
  if (name.length < 2 || name.length > 120) errors.push("Enter a name, up to 120 characters.");
  /*
   * One name field here, where the public intake asks for a given name and a
   * family name separately. The asymmetry is deliberate rather than an
   * omission to be tidied up.
   *
   * The public form insists on both because "Anna" is not something an
   * administrator can vet, and the person typing it is right there to add
   * the rest. This path is the opposite situation: somebody is transcribing an
   * application that arrived by post or in person, they have the evidence in
   * front of them, and the name on it may legitimately be one word. Refusing
   * to record a real person because their name is unusual would be the worse
   * failure of the two.
   */
  if (!EMAIL.test(email) || email.length > 180) errors.push("Enter a valid email address.");
  /*
   * Against ids, not labels: what these columns hold is the same value however
   * the roll is being read, and the public intake writes exactly the same set.
   */
  if (!isCountryValue(country)) errors.push("Choose a country from the list.");
  if (!isInvolvementRole(involvementRole)) errors.push("Choose a role.");
  if (!isInterestArea(interestArea)) errors.push("Choose an area of interest.");

  if (errors.length > 0) return { status: "invalid", errors };

  const outcome = await createMember({
    name,
    email,
    country,
    involvementRole,
    interestArea,
    status,
  });

  await recordAudit({
    action: "member.create",
    outcome: outcome.kind === "created" ? "success" : "failure",
    actorId: session.user.id,
    actorLabel: session.user.username,
    detail:
      outcome.kind === "created"
        ? { id: outcome.id, country, status }
        : { reason: "address already on the roll", country },
    ipHash,
  });

  revalidatePath("/admin/members");

  return outcome.kind === "created"
    ? { status: "added", errors: [], message: "Record added." }
    : {
        status: "duplicate",
        errors: [],
        message: "That address is already on the roll. Nothing was changed.",
      };
}

/**
 * Moves one application along the pipeline.
 *
 * Every transition is allowed, in both directions. A vetting process that can
 * only go forwards is one where a mis-click is permanent, and the alternative —
 * a table of legal transitions — buys nothing here, because the states describe
 * somebody's judgement and judgements are revised.
 *
 * The audit detail carries the id and the new state, never the person.
 */
export async function setMemberStatusAction(form: FormData): Promise<void> {
  const session = await requireElevatedSession();
  const { ipHash } = await clientContext();

  const id = String(form.get("id") ?? "").trim();
  const requested = String(form.get("status") ?? "").trim();
  if (!id || !isMemberStatus(requested)) return;

  const changed = await setMemberStatus(id, requested);

  await recordAudit({
    action: "member.update",
    outcome: changed ? "success" : "failure",
    actorId: session.user.id,
    actorLabel: session.user.username,
    detail: { id, status: requested },
    ipHash,
  });

  revalidatePath("/admin/members");
}

/**
 * Writes or clears the vetting notes on one application.
 *
 * The note is encrypted before it is stored and never reaches the audit log:
 * this is the one field holding an administrator's opinion of a named person,
 * so logging it would put in the clear exactly what the column encrypts. The
 * audit records that a note changed and whether it now exists, which is what an
 * investigation needs and all it needs.
 */
export async function setMemberNotesAction(form: FormData): Promise<void> {
  const session = await requireElevatedSession();
  const { ipHash } = await clientContext();

  const id = String(form.get("id") ?? "").trim();
  if (!id) return;

  const notes = String(form.get("notes") ?? "").slice(0, 2000);
  const changed = await setMemberNotes(id, notes);

  await recordAudit({
    action: "member.note",
    outcome: changed ? "success" : "failure",
    actorId: session.user.id,
    actorLabel: session.user.username,
    detail: { id, cleared: notes.trim().length === 0 },
    ipHash,
  });

  revalidatePath("/admin/members");
}

/**
 * Grants one office to one member.
 *
 * Elevated, like every other mutation in this file, and here the reason is not
 * only that it writes. The form that calls this sits on a member's row inside
 * the revealed roll, so it is reached by somebody who has already been shown a
 * name — and a grant form that worked without elevation would be a way to take
 * the step-up's own answer apart: "which record is the German wing's leader"
 * is most of what the roll is protecting, and somebody able to grant an office
 * without a passkey could find out by granting one and reading the board.
 *
 * Returns nothing, like the status and note actions beside it: the page is
 * revalidated and the offices it then prints are the answer. The one thing a
 * person can get wrong through the interface is asking for a wing-scoped
 * office without choosing a wing, which the wing select cannot prevent without
 * also forbidding the movement-wide offices that legitimately have none. That
 * is refused here and nothing appears, so the form's own line says a wing must
 * be chosen. A submission naming an office or a wing the lists do not contain
 * is not a mistake available through the interface at all; it is somebody
 * calling the endpoint, and it is recorded as a failure and dropped.
 *
 * The audit detail carries the member's id and a keyed digest of the office
 * and its wing. Never the office in words — see `officeDigest`.
 */
export async function grantOfficeAction(form: FormData): Promise<void> {
  const session = await requireElevatedSession();
  const { ipHash } = await clientContext();

  const memberId = String(form.get("member") ?? "").trim();
  const office = String(form.get("office") ?? "").trim();
  const wing = String(form.get("wing") ?? "").trim();

  const audit = async (outcome: "success" | "failure", detail: Record<string, unknown>) => {
    await recordAudit({
      action: "member.office.grant",
      outcome,
      actorId: session.user.id,
      actorLabel: session.user.username,
      detail,
      ipHash,
    });
  };

  if (!memberId || !isMemberOffice(office)) {
    await audit("failure", { reason: "no such office" });
    return;
  }

  /*
   * A wing-scoped office with no usable wing is refused rather than defaulted
   * to the member's own country. The two are not the same fact — somebody in
   * France may organise the Belgian wing — and a silent default would record
   * a guess as though a person had decided it.
   */
  const scoped = isWingScoped(office);
  if (scoped && !isWingValue(wing)) {
    await audit("failure", { memberId, reason: "no such wing" });
    return;
  }

  const held = scoped ? wing : null;
  const outcome = await grantOffice(memberId, office, held);

  await audit(outcome.kind === "granted" ? "success" : "failure", {
    memberId,
    officeDigest: await officeDigest(memberId, office, held),
    ...(outcome.kind === "granted"
      ? { id: outcome.id }
      : { reason: "already held by this member" }),
  });

  revalidatePath("/admin/members");
}

/**
 * Withdraws one office.
 *
 * The row is deleted, so the digest has to be computed from what came back out
 * of it rather than from the id in the form — which is also what makes the log
 * able to pair a withdrawal with the grant that preceded it, since both carry
 * the same digest.
 */
export async function revokeOfficeAction(form: FormData): Promise<void> {
  const session = await requireElevatedSession();
  const { ipHash } = await clientContext();

  const id = String(form.get("id") ?? "").trim();
  if (!id) return;

  const withdrawn = await revokeOffice(id);

  await recordAudit({
    action: "member.office.revoke",
    outcome: withdrawn ? "success" : "failure",
    actorId: session.user.id,
    actorLabel: session.user.username,
    detail: withdrawn
      ? {
          id,
          memberId: withdrawn.memberId,
          officeDigest: await officeDigest(
            withdrawn.memberId,
            withdrawn.office,
            withdrawn.wing,
          ),
        }
      : { id, reason: "no such office held" },
    ipHash,
  });

  revalidatePath("/admin/members");
}

/**
 * Erases one record by id, from the list.
 *
 * The audit detail records the id and the country, never the name or address —
 * writing the person's details into the audit log to record that we deleted the
 * person's details would defeat the erasure it documents.
 */
export async function eraseMemberAction(form: FormData): Promise<void> {
  const session = await requireElevatedSession();
  const { ipHash } = await clientContext();

  const id = String(form.get("id") ?? "").trim();
  const country = String(form.get("country") ?? "").trim();
  if (!id) return;

  const erased = await eraseMember(id);

  await recordAudit({
    action: "member.erase",
    outcome: erased ? "success" : "failure",
    actorId: session.user.id,
    actorLabel: session.user.username,
    detail: { id, country, reason: "erased from members list" },
    ipHash,
  });

  revalidatePath("/admin/members");
}

/**
 * Erases by email address, for a request that arrives by post or email.
 *
 * Goes through the keyed digest rather than a search over decrypted rows, so
 * honouring "delete my data" does not require reading everybody else's. The
 * address itself is never written to the audit log.
 */
export async function eraseByEmailAction(
  _state: EraseState,
  form: FormData,
): Promise<EraseState> {
  const session = await requireElevatedSession();
  const { ipHash } = await clientContext();

  const email = String(form.get("email") ?? "").trim();
  if (!email || !email.includes("@")) {
    return { status: "invalid", message: "Enter the email address from the request." };
  }

  const id = await findMemberIdByEmail(email);
  if (!id) {
    await recordAudit({
      action: "member.erase",
      outcome: "failure",
      actorId: session.user.id,
      actorLabel: session.user.username,
      detail: { reason: "no record for the address given" },
      ipHash,
    });
    return {
      status: "not-found",
      message: "No record matches that address. Nothing was changed.",
    };
  }

  await eraseMember(id);

  await recordAudit({
    action: "member.erase",
    outcome: "success",
    actorId: session.user.id,
    actorLabel: session.user.username,
    detail: { id, reason: "erasure request by email" },
    ipHash,
  });

  revalidatePath("/admin/members");
  return { status: "erased", message: "That record has been erased." };
}

/** Ends the elevated window early, for leaving a shared machine. */
export async function lockMembersAction(): Promise<void> {
  const session = await requireElevatedSession();
  await dropElevation(session);
  revalidatePath("/admin/members");
}
