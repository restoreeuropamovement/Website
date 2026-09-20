"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { recordAudit } from "@/lib/admin/audit";
import {
  type ArticleDraft,
  deleteArticle,
  loadDraft,
  saveDraft,
  setFeatured,
  setStatus,
  validateDraft,
} from "@/lib/admin/journal";
import { clientContext } from "@/lib/admin/request";
import { requireSession } from "@/lib/admin/session";

/**
 * Journal mutations.
 *
 * Every one of these begins with `requireSession()`. A Server Action compiles to
 * a POST endpoint with a stable identifier, so it can be invoked directly by
 * anything that knows the id — it is not protected by the fact that the form
 * rendering it sits behind a gated layout. The enclosing layout's check and this
 * one guard different things, and omitting this one is how an "internal" action
 * becomes a public write endpoint.
 */

export interface JournalFormState {
  readonly errors: readonly string[];
  readonly saved?: boolean;
}

function draftFromForm(form: FormData): ArticleDraft {
  const text = (key: string) => String(form.get(key) ?? "").trim();
  const integer = (key: string, fallback: number) => {
    const parsed = Number.parseInt(String(form.get(key) ?? ""), 10);
    return Number.isFinite(parsed) ? parsed : fallback;
  };

  return {
    slug: text("slug").toLowerCase(),
    title: text("title"),
    subtitle: text("subtitle"),
    standfirst: text("standfirst"),
    category: text("category"),
    publishedOn: text("publishedOn"),
    author: text("author"),
    readingMinutes: integer("readingMinutes", 0),
    heroSrc: text("heroSrc"),
    heroAlt: text("heroAlt"),
    heroWidth: integer("heroWidth", 0),
    heroHeight: integer("heroHeight", 0),
    heroCaption: text("heroCaption"),
    heroPlaceholder: form.get("heroPlaceholder") === "on",
    featured: form.get("featured") === "on",
    status: form.get("status") === "published" ? "published" : "draft",
    // Preserved verbatim: the body is the one field where leading whitespace and
    // blank lines are structural.
    bodySource: String(form.get("bodySource") ?? ""),
    footnotesSource: String(form.get("footnotesSource") ?? ""),
    citationsSource: String(form.get("citationsSource") ?? ""),
    related: text("related"),
  };
}

/** Publishing or unpublishing changes what the public pages must show. */
function revalidateJournal(slug: string): void {
  revalidatePath("/journal");
  revalidatePath(`/journal/${slug}`);
  revalidatePath("/sitemap.xml");
}

export async function saveArticleAction(
  _previous: JournalFormState,
  form: FormData,
): Promise<JournalFormState> {
  const session = await requireSession();
  const { ipHash } = await clientContext();

  const draft = draftFromForm(form);
  const originalSlug = String(form.get("originalSlug") ?? "").trim() || undefined;

  const { errors } = validateDraft(draft);
  if (errors.length > 0) return { errors };

  // A new essay must not silently overwrite an existing one that happens to
  // share a slug.
  if (!originalSlug && (await loadDraft(draft.slug))) {
    return { errors: [`An essay with the slug "${draft.slug}" already exists.`] };
  }

  await saveDraft(draft, originalSlug);

  if (draft.featured && draft.status === "published") {
    await setFeatured(draft.slug);
  }

  await recordAudit({
    action: originalSlug ? "journal.update" : "journal.create",
    outcome: "success",
    actorId: session.user.id,
    actorLabel: session.user.username,
    detail: { slug: draft.slug, status: draft.status, renamedFrom: originalSlug ?? null },
    ipHash,
  });

  revalidateJournal(draft.slug);
  if (originalSlug && originalSlug !== draft.slug) revalidateJournal(originalSlug);

  redirect(`/admin/journal/${draft.slug}?saved=1`);
}

export async function setStatusAction(form: FormData): Promise<void> {
  const session = await requireSession();
  const { ipHash } = await clientContext();

  const slug = String(form.get("slug") ?? "").trim();
  const status = form.get("status") === "published" ? "published" : "draft";
  if (!slug) return;

  await setStatus(slug, status);

  await recordAudit({
    action: status === "published" ? "journal.publish" : "journal.unpublish",
    outcome: "success",
    actorId: session.user.id,
    actorLabel: session.user.username,
    detail: { slug },
    ipHash,
  });

  revalidateJournal(slug);
  revalidatePath("/admin/journal");
}

export async function featureArticleAction(form: FormData): Promise<void> {
  const session = await requireSession();
  const { ipHash } = await clientContext();

  const slug = String(form.get("slug") ?? "").trim();
  if (!slug) return;

  await setFeatured(slug);

  await recordAudit({
    action: "journal.update",
    outcome: "success",
    actorId: session.user.id,
    actorLabel: session.user.username,
    detail: { slug, featured: true },
    ipHash,
  });

  revalidateJournal(slug);
  revalidatePath("/admin/journal");
}

export async function deleteArticleAction(form: FormData): Promise<void> {
  const session = await requireSession();
  const { ipHash } = await clientContext();

  const slug = String(form.get("slug") ?? "").trim();
  // Typing the slug to confirm makes an accidental deletion of the wrong essay
  // considerably harder than a single click would.
  const confirmation = String(form.get("confirm") ?? "").trim();
  if (!slug || confirmation !== slug) return;

  await deleteArticle(slug);

  await recordAudit({
    action: "journal.delete",
    outcome: "success",
    actorId: session.user.id,
    actorLabel: session.user.username,
    detail: { slug },
    ipHash,
  });

  revalidateJournal(slug);
  revalidatePath("/admin/journal");
  redirect("/admin/journal");
}
