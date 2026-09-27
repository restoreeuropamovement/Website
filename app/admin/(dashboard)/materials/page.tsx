import { ExternalLink } from "lucide-react";

import { deleteMaterialAction } from "@/app/admin/(dashboard)/materials/actions";
import { MaterialUpload } from "@/components/admin/MaterialUpload";
import type { SelectOption } from "@/components/forms/Field";
import { englishMaterials } from "@/content/materials";
import { hasBlobStorage } from "@/lib/admin/env";
import { listMaterials } from "@/lib/admin/materials";
import { requireSession } from "@/lib/admin/session";
import {
  formatMaterialSize,
  materialFormatLabel,
  type Material,
} from "@/lib/materials";
import { DEFAULT_LOCALE } from "@/lib/i18n";

/**
 * Logos, posters, stickers, wallpapers and images for the accounts.
 *
 * The one screen in this panel with no tiers, no elevation prompt and no
 * decryption, and that absence is the design rather than a shortcut. Every
 * other table here exists to hold something back — a name, an address, a
 * venue — and the controls are proportionate to what is being held back. This
 * table exists to give things away. Guarding a poster with the machinery built
 * for the membership roll would say the two are alike, and they are not.
 *
 * Titles and descriptions are English only, like a journal essay. They are
 * operator-entered data rather than site copy: a poster uploaded on Tuesday
 * cannot wait for five translations before it is downloadable, and a language
 * file that grew an entry per upload would stop being a document and become a
 * queue. A German reader gets a German heading over an English poster title,
 * and that is the trade being made knowingly.
 */

const ADDED = new Intl.DateTimeFormat("en-GB", {
  day: "numeric",
  month: "long",
  year: "numeric",
});

export default async function AdminMaterialsPage() {
  await requireSession();

  const configured = hasBlobStorage();
  const materials = await listMaterials();

  /*
   * The English labels, because this panel is not translated. The values are
   * the ids from `content/materials/structure.ts`, so what is written to the
   * database never depends on what a translator called a shelf.
   */
  const categories: readonly SelectOption[] = englishMaterials.categories.map((category) => ({
    value: category.id,
    label: category.label,
  }));

  const label = new Map(categories.map((category) => [category.value, category.label]));

  return (
    <div className="flex flex-col gap-12">
      <header>
        <p className="eyebrow mb-4 text-burgundy">Identity</p>
        <h1 className="font-serif text-display-2 font-normal text-ink">Materials</h1>
        <p className="mt-3 max-w-2xl text-[0.9375rem] leading-relaxed text-muted">
          {materials.length === 0
            ? "Nothing published."
            : `${materials.length} ${materials.length === 1 ? "file" : "files"} published.`}{" "}
          Everything on this page is downloadable by anyone, without signing in, at{" "}
          <code className="text-ink">/materials</code>.
        </p>
      </header>

      {configured ? null : <NotConfigured />}

      <section className="flex flex-col gap-6">
        <h2 className="eyebrow border-b border-hairline pb-3 text-muted">Published</h2>
        {materials.length === 0 ? (
          <p className="border-l-2 border-gold/65 py-1 pl-5 text-reading text-muted">
            Nothing yet. The public page says so rather than showing an empty list.
          </p>
        ) : (
          <ul className="flex flex-col border-t border-hairline">
            {materials.map((material) => (
              <PublishedRow
                key={material.id}
                material={material}
                categoryLabel={label.get(material.category) ?? material.category}
                deletable={configured}
              />
            ))}
          </ul>
        )}
      </section>

      {configured ? <MaterialUpload categories={categories} /> : null}
    </div>
  );
}

/**
 * Said plainly, and only where it is true.
 *
 * The files already published keep working without the token — they are rows
 * and public addresses, and neither needs a credential to be read — so this
 * notice sits above a list that still works rather than in place of the page.
 * What it takes away is uploading and withdrawing, and it says which.
 */
function NotConfigured() {
  return (
    <div className="flex flex-col gap-3 border-l-2 border-burgundy py-1 pl-5">
      <p className="text-reading text-muted">
        <code className="text-ink">BLOB_READ_WRITE_TOKEN</code> is not set, so nothing can be
        uploaded or withdrawn on this deployment. Anything already published is unaffected: the
        files are served by the store and listed from the database, and neither needs this token to
        be read.
      </p>
      <p className="text-[0.875rem] leading-relaxed text-faint">
        Vercel → the project → Storage → create a Blob store, then copy the token it issues into the
        environment and redeploy. Locally it goes in <code className="text-muted">.env.local</code>.
      </p>
    </div>
  );
}

function PublishedRow({
  material,
  categoryLabel,
  deletable,
}: {
  readonly material: Material;
  readonly categoryLabel: string;
  readonly deletable: boolean;
}) {
  return (
    <li className="flex flex-wrap items-start gap-x-6 gap-y-3 border-b border-hairline py-4">
      <div className="min-w-0 flex-1">
        <p className="eyebrow mb-1.5 flex flex-wrap items-center gap-x-3 gap-y-1 text-muted">
          <span className="text-gold">{categoryLabel}</span>
          <span aria-hidden="true" className="size-1 rotate-45 bg-gold/70" />
          <span>{materialFormatLabel(material.contentType)}</span>
          <span aria-hidden="true" className="size-1 rotate-45 bg-gold/70" />
          <span>{formatMaterialSize(DEFAULT_LOCALE, material.bytes)}</span>
        </p>

        <p className="font-serif text-[1.1875rem] leading-snug text-ink">{material.title}</p>

        {material.description ? (
          <p className="mt-1 max-w-prose text-[0.875rem] leading-relaxed text-muted">
            {material.description}
          </p>
        ) : null}

        <p className="mt-1 text-micro text-faint">
          Added <time dateTime={material.createdAt.toISOString()}>{ADDED.format(material.createdAt)}</time>{" "}
          · <span className="break-all">{material.pathname}</span>
        </p>
      </div>

      <div className="flex flex-wrap items-start gap-2">
        {/*
          A link rather than a preview. Rendering the image here would mean
          admitting the store's host into `img-src` — in the public policy in
          next.config.ts and again in the nonce policy proxy.ts writes for
          /admin — and widening two content security policies to save a click
          is the wrong way round. The store's own address is also the only
          honest check that the file is really there.
        */}
        <a
          href={material.url}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 border border-rule px-3 py-1.5 text-micro text-muted transition-colors hover:border-gold hover:text-gold"
        >
          <ExternalLink className="size-3" strokeWidth={1.75} aria-hidden="true" />
          Open
        </a>

        {deletable ? (
          /*
            A disclosure rather than a typed confirmation. Deleting a gathering
            asks for its title back because that record is the only copy of
            where people were told to be; a material exists on the designer's
            machine and can be republished in a minute, so two deliberate
            clicks is the weight this actually has.
          */
          <details>
            <summary className="cursor-pointer list-none border border-rule px-3 py-1.5 text-micro text-muted transition-colors hover:border-burgundy hover:text-burgundy">
              Withdraw
            </summary>
            <form action={deleteMaterialAction} className="mt-2 flex flex-col gap-2">
              <input type="hidden" name="id" value={material.id} />
              <p className="max-w-56 text-micro leading-relaxed text-faint">
                The file is deleted from the store as well, so the address stops answering. Anyone
                who already downloaded it still has it.
              </p>
              <button
                type="submit"
                className="self-start border border-burgundy/60 px-3 py-1.5 text-micro text-burgundy transition-colors hover:bg-burgundy/10"
              >
                Withdraw it
              </button>
            </form>
          </details>
        ) : null}
      </div>
    </li>
  );
}
