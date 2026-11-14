"use client";

import { useActionState } from "react";
import { Upload } from "lucide-react";

import { type ShopDesignFormState, uploadShopDesignAction } from "@/app/admin/(dashboard)/shop/actions";
import { stickerFormat } from "@/content/shop/structure";
import { designLimits, designPreviewAccept, designPrintAccept } from "@/lib/shop/design-formats";

/**
 * Adding a design to the shop: a preview for customers and a master for the
 * printer, uploaded together. A new design starts switched off, so it can be
 * looked at here before anyone can buy it.
 */
export function ShopDesignUpload() {
  const [state, formAction, pending] = useActionState<ShopDesignFormState, FormData>(
    uploadShopDesignAction,
    { errors: [] },
  );

  const field =
    "border border-rule bg-surface px-3 py-2 text-[0.875rem] text-ink focus:border-gold focus:outline-none";
  const file =
    "border border-rule bg-surface px-3 py-2 text-[0.875rem] text-muted file:mr-3 file:border-0 file:bg-transparent file:text-[0.875rem] file:text-ink";
  const kb = (bytes: number) => `${Math.round(bytes / 1024).toLocaleString("en-GB")} KB`;
  const masterMm = stickerFormat.finishedMm + 2 * stickerFormat.bleedMm;

  return (
    <section className="flex flex-col gap-5 border border-hairline p-6">
      <div className="flex items-start gap-3">
        <Upload className="mt-0.5 size-4 shrink-0 text-gold" strokeWidth={1.75} aria-hidden="true" />
        <div>
          <h2 className="eyebrow text-muted">Add a design</h2>
          <p className="mt-2 max-w-xl text-[0.875rem] leading-relaxed text-muted">
            The master goes to the printer unchanged, so it must be the print-ready file: {masterMm} ×{" "}
            {masterMm} mm including {stickerFormat.bleedMm} mm bleed on each side for a{" "}
            {stickerFormat.finishedMm} × {stickerFormat.finishedMm} mm sticker, CMYK, with the
            imprint on it and nothing important near the cut — the printer&rsquo;s data sheet says
            how near. It starts switched off.
          </p>
        </div>
      </div>

      {/* The reset is refused for the reason given in MaterialUpload: a file input cannot be refilled. */}
      <form action={formAction} onReset={(event) => event.preventDefault()} className="flex flex-col gap-4">
        <div className="grid gap-4 sm:grid-cols-2">
          <label className="flex flex-col gap-1.5 sm:col-span-2">
            <span className="eyebrow text-muted">Title</span>
            <input name="title" required maxLength={designLimits.title} className={field} />
          </label>

          <label className="flex flex-col gap-1.5">
            <span className="eyebrow text-muted">Preview — PNG, JPEG or WebP, up to {kb(designLimits.previewBytes)}</span>
            <input name="preview" type="file" required accept={designPreviewAccept} className={file} />
          </label>

          <label className="flex flex-col gap-1.5">
            <span className="eyebrow text-muted">Print master — PDF, PNG or JPEG, up to {kb(designLimits.printBytes)}</span>
            <input name="print" type="file" required accept={designPrintAccept} className={file} />
          </label>

          <label className="flex flex-col gap-1.5 sm:col-span-2">
            <span className="eyebrow text-muted">Description — optional, shown under the title</span>
            <textarea name="description" rows={2} maxLength={designLimits.description} className={field} />
          </label>
        </div>

        <div className="flex flex-wrap items-center gap-4">
          <button
            type="submit"
            disabled={pending}
            className="border border-gold/70 bg-gold/10 px-5 py-2 text-[0.875rem] text-ink transition-colors hover:bg-gold/20 disabled:opacity-60"
          >
            {pending ? "Uploading…" : "Add it"}
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
