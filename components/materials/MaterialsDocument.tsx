import Link from "next/link";
import { ArrowDownToLine } from "lucide-react";

import { PageHeader } from "@/components/layout/PageHeader";
import { Container } from "@/components/ui/Container";
import type { MaterialsEdition } from "@/content/materials";
import { fill } from "@/lib/format";
import { localePath } from "@/lib/i18n";
import {
  formatMaterialSize,
  materialFormatLabel,
  type Material,
  type MaterialGroup,
} from "@/lib/materials";
import { routes } from "@/lib/site";
import { pad } from "@/lib/utils";

/**
 * `/materials`, in one language.
 *
 * Two things are worth knowing before changing it.
 *
 * **Nothing here is an image.** Every item is a line of text with a link, and
 * there are no thumbnails, because a thumbnail would have to be fetched from
 * `*.public.blob.vercel-storage.com` and that means admitting a remote host
 * into `img-src` in the site's content security policy. The README's claim
 * that this site makes no third-party requests is worth more than a preview
 * grid: a download is a navigation the reader chooses, which the policy does
 * not govern and which happens only when somebody clicks.
 *
 * **The groups arrive already ordered and already filtered.** `groupMaterials`
 * decides which shelves exist and in what order, from the id list in
 * `content/materials/structure.ts`. Nothing about the shape of this page is
 * decided by which language it is being rendered in.
 *
 * The item titles and descriptions are English in all six editions. They are
 * rows an administrator wrote, not copy anybody commissioned — the same
 * exception the journal makes — so a German reader gets a German heading over
 * an English poster title.
 */
export function MaterialsDocument({
  edition,
  groups,
}: {
  readonly edition: MaterialsEdition;
  /** `null` means the catalogue could not be read at all, which is not "empty". */
  readonly groups: readonly MaterialGroup[] | null;
}) {
  const { locale, meta } = edition;
  const label = new Map(edition.categories.map((category) => [category.id, category]));

  return (
    <>
      <PageHeader kicker={meta.eyebrow} title={meta.title} lede={meta.lede} />

      <Container className="py-12 lg:py-16">
        <UsageNote edition={edition} />

        {groups === null ? (
          <Notice title={edition.unavailable.title} body={edition.unavailable.body} />
        ) : groups.length === 0 ? (
          <Notice title={edition.empty.title} body={edition.empty.body} />
        ) : (
          <div className="mt-14 flex flex-col gap-14 lg:gap-16">
            {groups.map((group, position) => {
              const category = label.get(group.id);
              if (!category) return null;

              return (
                <section
                  key={group.id}
                  id={group.id}
                  aria-labelledby={`${group.id}-heading`}
                >
                  <div className="mb-6 flex flex-wrap items-baseline gap-x-4 gap-y-1 border-b border-hairline pb-3">
                    <span className="numerals-tabular text-[0.8125rem] text-muted">
                      {pad(position + 1)}
                    </span>
                    <h2
                      id={`${group.id}-heading`}
                      className="font-serif text-display-4 font-normal text-ink"
                    >
                      {category.label}
                    </h2>
                    <span className="text-[0.9375rem] text-faint">{category.note}</span>
                  </div>

                  {/*
                    The blank-field note, on the shelves that get printed and
                    put up in public. It sits above the files it applies to
                    rather than at the top of the page, because it is advice
                    about a poster and not about a wallpaper: a reader who came
                    for a logo should not have to work out that it is not
                    addressed to them. Which shelves carry it is
                    `materialImprintCategoryIds` in
                    `content/materials/structure.ts`; `null` here means this one
                    does not.
                  */}
                  {category.imprintNote ? (
                    <p className="mb-6 max-w-(--container-reading) text-[0.9375rem] leading-relaxed text-muted">
                      {category.imprintNote}
                    </p>
                  ) : null}

                  <ul className="flex flex-col border-t border-hairline">
                    {group.materials.map((material) => (
                      <MaterialItem key={material.id} material={material} edition={edition} />
                    ))}
                  </ul>
                </section>
              );
            })}
          </div>
        )}

        <p className="mt-16 border-t border-hairline pt-6 text-[0.9375rem]">
          <Link
            href={localePath(locale, routes.imprint)}
            className="text-ink underline decoration-rule underline-offset-[0.28em] hover:text-burgundy hover:decoration-burgundy"
          >
            {edition.usage.imprintLink}
          </Link>
        </p>
      </Container>
    </>
  );
}

/**
 * The one paragraph on the page that is not a description of a file.
 *
 * It states what the files carry and that no terms of use exist, and it stops
 * there. It does not say what may or may not be done with them, because
 * nobody has decided that: the movement is not registered, there is no
 * published licence and no code of conduct, and a page that invented one would
 * be asserting policy on behalf of people who never agreed to it. Saying
 * plainly that the rules are not written is more use to somebody about to
 * print two hundred of something than a plausible rule would be.
 */
function UsageNote({ edition }: { readonly edition: MaterialsEdition }) {
  return (
    <div className="max-w-(--container-reading) border-l-2 border-gold/60 py-1 pl-5">
      <h2 className="eyebrow mb-2 text-muted">{edition.usage.title}</h2>
      <p className="text-reading leading-relaxed text-body/92">{edition.usage.body}</p>
    </div>
  );
}

function Notice({ title, body }: { readonly title: string; readonly body: string }) {
  return (
    <div className="mt-14 border-t border-hairline pt-10">
      <h2 className="font-serif text-display-3 font-normal text-ink text-balance">{title}</h2>
      <p className="mt-4 max-w-2xl text-reading text-body/92">{body}</p>
    </div>
  );
}

function MaterialItem({
  material,
  edition,
}: {
  readonly material: Material;
  readonly edition: MaterialsEdition;
}) {
  return (
    <li className="flex flex-wrap items-start gap-x-8 gap-y-3 border-b border-hairline py-5">
      <div className="min-w-0 flex-1">
        <p className="font-serif text-[1.1875rem] leading-snug text-ink">{material.title}</p>
        {material.description ? (
          <p className="mt-1 max-w-prose text-[0.9375rem] leading-relaxed text-muted">
            {material.description}
          </p>
        ) : null}
        {/*
          The format and the size are set apart from the link rather than
          folded into its label. They are what somebody decides on before
          clicking — an SVG or a PDF, and whether it is worth it on a phone —
          and a screen reader should reach them as facts about the item rather
          than as part of a twentieth "Download".
        */}
        <p className="eyebrow mt-2 flex flex-wrap items-center gap-x-3 gap-y-1 text-faint">
          <span>{materialFormatLabel(material.contentType)}</span>
          <span aria-hidden="true" className="size-1 rotate-45 bg-gold/70" />
          <span>{formatMaterialSize(edition.locale, material.bytes)}</span>
        </p>
      </div>

      {/*
        A plain anchor, not `next/link`: the address is on the storage host
        rather than on this site, so there is no route to prefetch and no
        client-side navigation to be had. `download` is deliberately absent —
        browsers ignore it across origins, and the stored download address
        already carries whatever the provider needs to make a browser save the
        file instead of displaying it.
      */}
      <a
        href={material.downloadUrl}
        aria-label={fill(edition.file.downloadLabel, { title: material.title })}
        className="flex items-center gap-2 border border-rule px-4 py-2 text-[0.875rem] text-ink transition-colors hover:border-burgundy hover:text-burgundy"
      >
        <ArrowDownToLine className="size-3.5" strokeWidth={1.75} aria-hidden="true" />
        {edition.file.download}
      </a>
    </li>
  );
}
