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
import { clientContext } from "@/lib/admin/request";
import { dropElevation, requireElevatedSession } from "@/lib/admin/session";
import { europeanCountries, interestAreas, involvementRoles } from "@/content/involvement";
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
  if (!EMAIL.test(email) || email.length > 180) errors.push("Enter a valid email address.");
  if (!europeanCountries.includes(country)) errors.push("Choose a country from the list.");
  if (!involvementRoles.some((role) => role.id === involvementRole)) {
    errors.push("Choose a role.");
  }
  if (!interestAreas.includes(interestArea)) errors.push("Choose an area of interest.");

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
