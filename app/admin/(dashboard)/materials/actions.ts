"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

import { recordAudit } from "@/lib/admin/audit";
import { hasBlobStorage } from "@/lib/admin/env";
import {
  type MaterialDraft,
  removeMaterial,
  storeMaterial,
  validateMaterial,
} from "@/lib/admin/materials";
import { clientContext } from "@/lib/admin/request";
import { requireSession } from "@/lib/admin/session";

/**
 * Material mutations.
 *
 * Both resolve the session before doing anything else. A Server Action is a
 * POST endpoint with a stable identifier, reachable by anything that knows the
 * id, so the gated layout around the page holding the form is not what is
 * protecting these — the first line of each function is.
 *
 * **A session is enough, and elevation would be wrong here.** Reading the
 * membership roll costs a fresh passkey touch because the harm in that table
 * is disclosure; making a gathering public costs one because it puts a place
 * and a time in front of strangers and cannot be taken back. Neither argument
 * reaches a poster. The file is meant to be public, the worst an attacker with
 * a stolen cookie achieves is adding a picture to a page that is checked, and
 * it can be withdrawn in one click. Holding routine work to the same bar as
 * the membership roll is how a second factor becomes a reflex instead of a
 * signal.
 *
 * Nothing is encrypted, for the same reason. Every field here is published
 * within the minute.
 *
 * The audit detail carries an id, a category, and for an upload the file's
 * type and size. Never the title, never the filename: both are free text
 * somebody typed, and `admin_audit` is the one table in this schema that must
 * not quietly accumulate prose.
 */

export interface MaterialFormState {
  readonly errors: readonly string[];
}

function draftFromForm(form: FormData): MaterialDraft {
  const text = (key: string) => String(form.get(key) ?? "").trim();
  const file = form.get("file");

  return {
    title: text("title"),
    description: text("description"),
    /*
     * Left as the raw string. `validateMaterial` narrows it against
     * `materialCategoryIds` and refuses anything else, rather than a default
     * here quietly filing a mistyped value under "logo" — a wrong shelf is a
     * poster nobody finds, and an error message is cheaper than that.
     */
    category: text("category"),
    file: file instanceof File ? file : null,
  };
}

export async function uploadMaterialAction(
  _previous: MaterialFormState,
  form: FormData,
): Promise<MaterialFormState> {
  const session = await requireSession();
  const { ipHash } = await clientContext();

  /*
   * Returned rather than thrown, and checked before the file is looked at.
   * `blobToken()` throws by design, which here would meet the administrator as
   * a crashed page after they had already waited for a four-megabyte upload;
   * this says what is missing while the form still holds what they typed.
   */
  if (!hasBlobStorage()) {
    return {
      errors: [
        "BLOB_READ_WRITE_TOKEN is not set, so there is nowhere to put the file. Create a Blob store in the Vercel project, copy the token into the environment, and redeploy.",
      ],
    };
  }

  const draft = draftFromForm(form);
  const errors = validateMaterial(draft);
  if (errors.length > 0) return { errors };

  const stored = await storeMaterial(draft);

  await recordAudit({
    action: "material.create",
    outcome: "success",
    actorId: session.user.id,
    actorLabel: session.user.username,
    detail: {
      id: stored.id,
      category: draft.category,
      contentType: stored.contentType,
      bytes: stored.bytes,
    },
    ipHash,
  });

  revalidatePath("/admin/materials");
  redirect("/admin/materials?saved=1");
}

/**
 * Withdraws one material, file and row together.
 *
 * No typed confirmation, unlike deleting a gathering. That page asks for the
 * title back because the record is the only copy of where people were told to
 * be and there is nothing anywhere to rebuild it from. A material is a file
 * that exists on the designer's machine and can be uploaded again in a minute,
 * so the cost of a misfire is a minute, and the disclosure that makes deletion
 * frightening elsewhere has already happened on purpose here. The form is
 * behind a disclosure so it takes two deliberate clicks, which is the weight
 * the action actually has.
 */
export async function deleteMaterialAction(form: FormData): Promise<void> {
  const session = await requireSession();
  const { ipHash } = await clientContext();

  const id = String(form.get("id") ?? "").trim();
  if (!id) return;

  if (!hasBlobStorage()) {
    /*
     * Refused rather than half-done. Without the token the object cannot be
     * removed from the store, and dropping the row alone would leave a public
     * URL that still serves the file with nothing left in the database
     * pointing at it — unlistable, unfindable, and still being downloaded.
     */
    return;
  }

  const removed = await removeMaterial(id);
  if (!removed) return;

  await recordAudit({
    action: "material.delete",
    outcome: "success",
    actorId: session.user.id,
    actorLabel: session.user.username,
    detail: { id, category: removed.category },
    ipHash,
  });

  revalidatePath("/admin/materials");
}
