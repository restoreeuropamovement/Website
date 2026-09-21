"use client";

import Link from "next/link";
import { useActionState, useState } from "react";
import type { ArticleDraft } from "@/lib/admin/journal";
import { journalCategories } from "@/lib/journal-categories";
import type { JournalFormState } from "@/app/admin/(dashboard)/journal/actions";

const INITIAL: JournalFormState = { errors: [] };

const input =
  "w-full border border-rule bg-surface px-3 py-2 text-[0.9375rem] text-ink focus:border-gold focus:outline-none";
const area = `${input} font-mono text-[0.875rem] leading-relaxed`;

export function ArticleEditor({
  draft,
  mode,
  action,
  deleteAction,
  saved,
}: {
  draft: ArticleDraft;
  mode: "new" | "edit";
  action: (state: JournalFormState, form: FormData) => Promise<JournalFormState>;
  deleteAction?: (form: FormData) => Promise<void>;
  saved?: boolean;
}) {
  const [state, formAction, pending] = useActionState(action, INITIAL);
  // The action re-checks this; holding the button shut until the slug matches
  // just means a mismatch reads as "not yet" rather than as a dead button.
  const [confirmation, setConfirmation] = useState("");

  return (
    <div className="flex flex-col gap-10">
      <header className="flex flex-wrap items-end justify-between gap-6">
        <div>
          <p className="eyebrow mb-4 text-burgundy">Journal</p>
          <h1 className="font-serif text-display-2 font-normal text-ink">
            {mode === "new" ? "New essay" : "Edit essay"}
          </h1>
        </div>
        <Link
          href="/admin/journal"
          className="text-[0.875rem] text-muted underline underline-offset-4 hover:text-burgundy"
        >
          Back to all essays
        </Link>
      </header>

      {saved ? (
        <p className="border-l-2 border-gold/65 py-1 pl-5 text-[0.875rem] text-muted">Saved.</p>
      ) : null}

      {state.errors.length > 0 ? (
        <div role="alert" className="border-l-2 border-burgundy py-2 pl-5">
          <p className="mb-2 text-[0.875rem] font-medium text-ink">
            The essay was not saved. {state.errors.length}{" "}
            {state.errors.length === 1 ? "problem" : "problems"}:
          </p>
          <ul className="flex flex-col gap-1">
            {state.errors.map((error) => (
              <li key={error} className="text-[0.875rem] text-muted">
                {error}
              </li>
            ))}
          </ul>
        </div>
      ) : null}

      <form action={formAction} className="flex flex-col gap-8">
        {mode === "edit" ? <input type="hidden" name="originalSlug" value={draft.slug} /> : null}

        <fieldset className="flex flex-col gap-6 border border-hairline p-6">
          <legend className="eyebrow px-2 text-muted">Identity</legend>

          <Field label="Title" hint="Set in the serif display face on the essay page.">
            <input name="title" defaultValue={draft.title} required maxLength={200} className={input} />
          </Field>

          <Field label="Slug" hint="The URL: /journal/<slug>. Lowercase words separated by hyphens.">
            <input
              name="slug"
              defaultValue={draft.slug}
              required
              pattern="[a-z0-9]+(-[a-z0-9]+)*"
              maxLength={120}
              className={input}
            />
          </Field>

          <Field label="Subtitle" hint="One line beneath the title. Optional.">
            <input name="subtitle" defaultValue={draft.subtitle} maxLength={300} className={input} />
          </Field>

          <Field
            label="Standfirst"
            hint="The opening summary, also used as the meta description and in listings."
          >
            <textarea name="standfirst" defaultValue={draft.standfirst} required rows={3} className={area} />
          </Field>
        </fieldset>

        <fieldset className="grid gap-6 border border-hairline p-6 sm:grid-cols-2">
          <legend className="eyebrow px-2 text-muted">Attribution</legend>

          <Field label="Category" hint="One of the journal's nine sections.">
            <select name="category" defaultValue={draft.category} className={input}>
              {journalCategories.map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>
          </Field>

          <Field label="Author" hint="Shown on the essay and in structured data.">
            <input name="author" defaultValue={draft.author} required maxLength={120} className={input} />
          </Field>

          <Field label="Publication date" hint="Orders the journal index.">
            <input type="date" name="publishedOn" defaultValue={draft.publishedOn} required className={input} />
          </Field>

          <Field label="Reading time" hint="Whole minutes, 1 to 180.">
            <input
              type="number"
              name="readingMinutes"
              defaultValue={draft.readingMinutes}
              min={1}
              max={180}
              required
              className={input}
            />
          </Field>
        </fieldset>

        <fieldset className="grid gap-6 border border-hairline p-6 sm:grid-cols-2">
          <legend className="eyebrow px-2 text-muted">Hero artwork</legend>

          <Field
            label="Image path"
            hint="Must be a local path under /images/. Remote artwork is never served."
          >
            <input name="heroSrc" defaultValue={draft.heroSrc} required className={input} />
          </Field>

          <Field label="Alternative text" hint="Required. Describe the image, don't caption it.">
            <input name="heroAlt" defaultValue={draft.heroAlt} required maxLength={300} className={input} />
          </Field>

          <Field label="Width" hint="Intrinsic pixel width, to reserve layout space.">
            <input type="number" name="heroWidth" defaultValue={draft.heroWidth} min={1} required className={input} />
          </Field>

          <Field label="Height" hint="Intrinsic pixel height.">
            <input type="number" name="heroHeight" defaultValue={draft.heroHeight} min={1} required className={input} />
          </Field>

          <Field label="Caption" hint="Shown beneath the figure. Optional.">
            <input name="heroCaption" defaultValue={draft.heroCaption} maxLength={300} className={input} />
          </Field>

        </fieldset>

        <fieldset className="flex flex-col gap-6 border border-hairline p-6">
          <legend className="eyebrow px-2 text-muted">The essay</legend>

          <details className="border border-hairline bg-canvas-deep p-4">
            <summary className="cursor-pointer text-[0.875rem] text-muted">
              Body notation — blocks separated by blank lines
            </summary>
            <dl className="mt-4 grid gap-x-6 gap-y-2 text-micro sm:grid-cols-2">
              {[
                ["(no prefix)", "ordinary paragraph"],
                [":: text", "lead paragraph, set larger"],
                ["## text", "sub-heading"],
                ["!! text", "statement, large serif"],
                ['"" text', "pull quote"],
                ["~~ text", "aside on a tinted ground"],
                [">> text | source", "quotation with attribution"],
                ["- item", "bulleted list"],
                ["1. item", "numbered list"],
                ["| item", "unadorned list"],
                ["= item", "rule-separated list"],
                ["? term | meaning", "definition list"],
                ["---", "divider"],
              ].map(([syntax, meaning]) => (
                <div key={syntax} className="flex gap-3">
                  <dt className="w-36 shrink-0 font-mono text-faint">{syntax}</dt>
                  <dd className="text-muted">{meaning}</dd>
                </div>
              ))}
            </dl>
            <p className="mt-4 text-micro leading-relaxed text-faint">
              Inside any block, <code>**bold**</code>, <code>*italic*</code> and{" "}
              <code>[^1]</code> footnote markers are rendered as usual.
            </p>
          </details>

          <Field label="Body" hint="Converted to typed content blocks on save.">
            <textarea name="bodySource" defaultValue={draft.bodySource} rows={26} required className={area} />
          </Field>

          <Field label="Footnotes" hint="One per line: 1 | The note text. Referenced as [^1] in the body.">
            <textarea name="footnotesSource" defaultValue={draft.footnotesSource} rows={4} className={area} />
          </Field>

          <Field
            label="References"
            hint="One per line: Label | Detail. Real, checkable sources — a treaty article, a paragraph number, a document reference. Never one you have not read."
          >
            <textarea name="citationsSource" defaultValue={draft.citationsSource} rows={4} className={area} />
          </Field>

          <Field label="Related essays" hint="Comma-separated slugs. Falls back to the same category.">
            <input name="related" defaultValue={draft.related} className={input} />
          </Field>
        </fieldset>

        <fieldset className="flex flex-col gap-6 border border-hairline p-6">
          <legend className="eyebrow px-2 text-muted">Publication</legend>

          <Field label="Status" hint="Drafts are invisible to readers and excluded from the sitemap.">
            <select name="status" defaultValue={draft.status} className={input}>
              <option value="draft">Draft</option>
              <option value="published">Published</option>
            </select>
          </Field>

          <Checkbox
            name="featured"
            defaultChecked={draft.featured}
            label="Feature on the journal index"
            hint="At most one essay is featured; setting this clears the flag on any other."
          />
        </fieldset>

        <div className="flex items-center gap-4">
          <button
            type="submit"
            disabled={pending}
            className="border border-gold/70 bg-gold/10 px-6 py-3 text-[0.9375rem] text-ink transition-colors hover:bg-gold/20 disabled:opacity-60"
          >
            {pending ? "Saving…" : mode === "new" ? "Create essay" : "Save changes"}
          </button>
        </div>
      </form>

      {mode === "edit" && deleteAction ? (
        <form action={deleteAction} className="flex flex-col gap-4 border border-burgundy/40 p-6">
          <h2 className="eyebrow text-burgundy">Delete permanently</h2>
          <p className="text-[0.875rem] leading-relaxed text-muted">
            This cannot be undone. Type the slug <code className="text-ink">{draft.slug}</code> to
            confirm.
          </p>
          <input type="hidden" name="slug" value={draft.slug} />
          <input
            name="confirm"
            placeholder={draft.slug}
            autoComplete="off"
            value={confirmation}
            onChange={(event) => setConfirmation(event.target.value)}
            className={`${input} max-w-sm`}
          />
          <button
            type="submit"
            disabled={confirmation !== draft.slug}
            className="self-start border border-burgundy/60 px-5 py-2.5 text-[0.875rem] text-burgundy transition-colors hover:bg-burgundy/10 disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:bg-transparent"
          >
            Delete this essay
          </button>
        </form>
      ) : null}
    </div>
  );
}

function Field({
  label,
  hint,
  children,
}: {
  label: string;
  hint: string;
  children: React.ReactNode;
}) {
  return (
    <label className="flex flex-col gap-1.5">
      <span className="eyebrow text-muted">{label}</span>
      {children}
      <span className="text-micro leading-relaxed text-faint">{hint}</span>
    </label>
  );
}

function Checkbox({
  name,
  label,
  hint,
  defaultChecked,
}: {
  name: string;
  label: string;
  hint: string;
  defaultChecked: boolean;
}) {
  return (
    <label className="flex gap-3">
      <input
        type="checkbox"
        name={name}
        defaultChecked={defaultChecked}
        className="mt-1 size-4 shrink-0 accent-[color:var(--color-gold)]"
      />
      <span className="flex flex-col gap-1">
        <span className="text-[0.9375rem] text-ink">{label}</span>
        <span className="text-micro leading-relaxed text-faint">{hint}</span>
      </span>
    </label>
  );
}
