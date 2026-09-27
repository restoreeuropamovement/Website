"use client";

import { useActionState } from "react";
import { Upload } from "lucide-react";

import {
  type MaterialFormState,
  uploadMaterialAction,
} from "@/app/admin/(dashboard)/materials/actions";
import type { SelectOption } from "@/components/forms/Field";
import {
  materialAccept,
  materialFormatLabels,
  materialLimitMegabytes,
} from "@/lib/material-formats";

/**
 * Publishing a file.
 *
 * Client-side only because `useActionState` is: the upload can take several
 * seconds on a poster and a form with no pending state gets pressed twice.
 *
 * The categories arrive as props rather than being read here. They are the
 * English labels from `content/materials/en.ts` — this panel is not
 * translated, and the ids it submits are the ones `structure.ts` fixed, so the
 * value written to the database cannot depend on what a translator called a
 * shelf.
 */
export function MaterialUpload({ categories }: { readonly categories: readonly SelectOption[] }) {
  const [state, formAction, pending] = useActionState<MaterialFormState, FormData>(
    uploadMaterialAction,
    { errors: [] },
  );

  const field =
    "border border-rule bg-surface px-3 py-2 text-[0.875rem] text-ink focus:border-gold focus:outline-none";

  return (
    <section className="flex flex-col gap-5 border border-hairline p-6">
      <div className="flex items-start gap-3">
        <Upload className="mt-0.5 size-4 shrink-0 text-gold" strokeWidth={1.75} aria-hidden="true" />
        <div>
          <h2 className="eyebrow text-muted">Publish a file</h2>
          <p className="mt-2 max-w-xl text-[0.875rem] leading-relaxed text-muted">
            It appears on the public page as soon as it is uploaded — there is no draft state,
            because a file nobody can download is not a material. The title and description are
            shown to readers in English in every language edition.
          </p>
        </div>
      </div>

      {/*
        React empties an uncontrolled form once the action returns. On the
        refusal path that would throw away the chosen file along with the
        typing, and a file input cannot be repopulated from code — the browser
        will not let a page decide what is attached to it — so the reset is
        refused rather than compensated for. A successful upload redirects, so
        there is nothing left behind to clear. The same fix the gathering form
        and the public join form carry, for a related reason.
      */}
      <form
        action={formAction}
        onReset={(event) => event.preventDefault()}
        className="flex flex-col gap-4"
      >
        <div className="grid gap-4 sm:grid-cols-2">
          <label className="flex flex-col gap-1.5 sm:col-span-2">
            <span className="eyebrow text-muted">Title</span>
            <input
              name="title"
              required
              maxLength={120}
              placeholder="Wordmark, light ground"
              className={field}
            />
          </label>

          <label className="flex flex-col gap-1.5">
            <span className="eyebrow text-muted">Kind</span>
            <select name="category" required defaultValue="" className={field}>
              <option value="" disabled>
                Select…
              </option>
              {categories.map((category) => (
                <option key={category.value} value={category.value}>
                  {category.label}
                </option>
              ))}
            </select>
          </label>

          <label className="flex flex-col gap-1.5">
            <span className="eyebrow text-muted">File</span>
            {/*
              `accept` narrows the picker and controls nothing. The action
              checks the type and the size against the same closed list,
              because a Server Action is a public endpoint and this attribute
              is a courtesy to whoever is using the page.
            */}
            <input
              name="file"
              type="file"
              required
              accept={materialAccept}
              className="border border-rule bg-surface px-3 py-2 text-[0.875rem] text-muted file:mr-3 file:border-0 file:bg-transparent file:text-[0.875rem] file:text-ink"
            />
          </label>

          <label className="flex flex-col gap-1.5 sm:col-span-2">
            <span className="eyebrow text-muted">Description — optional</span>
            <textarea
              name="description"
              rows={2}
              maxLength={300}
              placeholder="One line saying what it is for."
              className={field}
            />
          </label>
        </div>

        <p className="text-micro leading-relaxed text-faint">
          {materialFormatLabels.join(", ")}, up to {materialLimitMegabytes} MB. The ceiling is a
          limit the platform sets on the size of a request, not a preference — a larger poster has
          to reach the store another way.
        </p>

        <div className="flex flex-wrap items-center gap-4">
          <button
            type="submit"
            disabled={pending}
            className="border border-gold/70 bg-gold/10 px-5 py-2 text-[0.875rem] text-ink transition-colors hover:bg-gold/20 disabled:opacity-60"
          >
            {pending ? "Uploading…" : "Publish it"}
          </button>
        </div>

        {state.errors.length > 0 ? (
          <ul role="alert" className="flex flex-col gap-1 border-l-2 border-burgundy py-1 pl-4">
            {state.errors.map((error) => (
              <li key={error} className="text-[0.875rem] text-muted">
                {error}
              </li>
            ))}
          </ul>
        ) : null}
      </form>
    </section>
  );
}
