"use client";

import Link from "next/link";
import { useState, useSyncExternalStore, type ReactNode } from "react";
import { ArrowDownToLine } from "lucide-react";

import { MaterialPreview } from "@/components/materials/MaterialPreview";
import type { MaterialsEdition } from "@/content/materials";
import {
  isMaterialCategory,
  isMaterialSort,
  type MaterialCategoryId,
  type MaterialSortId,
} from "@/content/materials/structure";
import { fill, plural } from "@/lib/format";
import { localePath } from "@/lib/i18n";
import {
  groupMaterials,
  isNarrowed,
  materialCategoriesPresent,
  materialFormatsPresent,
  materialsQuery,
  selectMaterials,
  type MaterialSelection,
} from "@/lib/material-catalogue";
import {
  formatMaterialSize,
  isMaterialFormatId,
  materialFormatLabel,
  materialFormatOptions,
  type MaterialFormatId,
} from "@/lib/material-formats";
import type { Material } from "@/lib/materials";
import { routes } from "@/lib/site";
import { pad } from "@/lib/utils";

interface MaterialsCatalogueProps {
  readonly edition: MaterialsEdition;
  /**
   * The whole catalogue, always, whatever is selected. The server filters
   * nothing out before handing it over — if it did, a reader who narrowed the
   * view in the browser could not widen it again without a round trip.
   */
  readonly materials: readonly Material[];
  /** What the address asked for, already narrowed to values this page knows. */
  readonly selection: MaterialSelection;
}

/**
 * The browsable half of `/materials`: a grid of previews, with a filter and an
 * order.
 *
 * **The controls are an enhancement, and the page is complete without them.**
 * This component is rendered on the server like any other, with the selection
 * the address asked for — which, for the address in the navigation, is every
 * item newest first. So a reader with scripting switched off is served the
 * whole catalogue, and the controls still work for them, because they are an
 * ordinary `GET` form that reloads the page with a query string. What
 * JavaScript adds is that the answer arrives without the reload. Nothing here
 * decides whether an item exists on the page.
 *
 * That is also why the submit button disappears after hydration rather than
 * never being rendered: until the browser has run this code it is the only way
 * to apply a choice; from the moment it has, choosing applies it, and a button
 * that does nothing is worse than no button. See `useScripting` below for how
 * that one bit is arrived at without a hydration mismatch.
 *
 * No `Reveal`, deliberately. Items are added and removed by the filter, and a
 * reveal-on-scroll wrapper keyed to a list that reorders under it is how an
 * item ends up stuck at zero opacity. The page has never animated its list and
 * does not start now.
 */
export function MaterialsCatalogue({ edition, materials, selection }: MaterialsCatalogueProps) {
  const { locale, catalogue } = edition;
  const [chosen, setChosen] = useState<MaterialSelection>(selection);
  const enhanced = useScripting();

  const path = localePath(locale, routes.materials);
  const visible = selectMaterials(materials, chosen);
  const groups = groupMaterials(visible);
  const shelves = new Map(edition.categories.map((one) => [one.id, one]));

  /*
   * A control is offered only when it can change the answer. With one kind of
   * material published there is nothing to filter by kind, and with one file
   * there is nothing to order — and a row of dropdowns over a single poster
   * makes a catalogue look emptier than it is rather than fuller. Thresholds
   * read off the data rather than a number somebody chose.
   */
  const kinds = materialCategoriesPresent(materials);
  const formats = materialFormatsPresent(materials);
  const narrowed = isNarrowed(chosen);
  const widened: MaterialSelection = { ...chosen, category: null, format: null };
  const showControls = kinds.length > 1 || formats.length > 1 || materials.length > 1;

  function choose(next: MaterialSelection): void {
    setChosen(next);
    /*
     * The address follows the view, so a filtered catalogue can be linked to,
     * bookmarked and reloaded. `history.replaceState` rather than a router
     * navigation: this route is rendered per request, so navigating would fetch
     * a page the browser has already worked out — and replace rather than push,
     * so Back leaves the page instead of walking the reader out through every
     * filter they tried on the way.
     */
    window.history.replaceState(null, "", `${path}${materialsQuery(next)}`);
  }

  return (
    <div className="mt-12 flex flex-col gap-8 lg:mt-14">
      {showControls ? (
        <form
          method="get"
          action={path}
          aria-label={catalogue.label}
          className="flex flex-col gap-4 border-y border-hairline py-5 sm:flex-row sm:flex-wrap sm:items-end"
        >
          {kinds.length > 1 ? (
            <Control id="materials-kind" label={catalogue.kindLabel}>
              <select
                id="materials-kind"
                name="category"
                value={chosen.category ?? ""}
                onChange={(event) => choose({ ...chosen, category: asCategory(event.target.value) })}
                className={field}
              >
                <option value="">{catalogue.kindAll}</option>
                {kinds.map((id) => (
                  <option key={id} value={id}>
                    {shelves.get(id)?.label ?? id}
                  </option>
                ))}
              </select>
            </Control>
          ) : null}

          {formats.length > 1 ? (
            <Control id="materials-format" label={catalogue.formatLabel}>
              <select
                id="materials-format"
                name="format"
                value={chosen.format ?? ""}
                onChange={(event) => choose({ ...chosen, format: asFormat(event.target.value) })}
                className={field}
              >
                <option value="">{catalogue.formatAll}</option>
                {formats.map((id) => (
                  <option key={id} value={id}>
                    {materialFormatOptions.find((option) => option.id === id)?.label ?? id}
                  </option>
                ))}
              </select>
            </Control>
          ) : null}

          {materials.length > 1 ? (
            <Control id="materials-sort" label={catalogue.sortLabel}>
              <select
                id="materials-sort"
                name="sort"
                value={chosen.sort}
                onChange={(event) => choose({ ...chosen, sort: asSort(event.target.value, chosen) })}
                className={field}
              >
                {edition.sorts.map((sort) => (
                  <option key={sort.id} value={sort.id}>
                    {sort.label}
                  </option>
                ))}
              </select>
            </Control>
          ) : null}

          {/*
            The attribute, not a class: `hidden` beside classes that already set
            `display` is the conflict `cn()` cannot resolve, and the attribute
            also takes the button out of the accessibility tree rather than
            merely out of sight.
          */}
          <button
            type="submit"
            hidden={enhanced}
            className="inline-flex h-12 items-center justify-center rounded-xs bg-ink px-6 text-[0.875rem] font-medium text-canvas transition-colors hover:bg-burgundy"
          >
            {catalogue.apply}
          </button>
        </form>
      ) : null}

      {showControls || narrowed ? (
        <p className="flex flex-wrap items-baseline gap-x-5 gap-y-1 text-[0.9375rem] text-muted">
          {/*
            Announced when it changes, because the consequence of changing a
            control is somewhere else entirely: a grid further down that a
            screen reader is not looking at.
          */}
          <span aria-live="polite">
            {narrowed
              ? plural(locale, visible.length, catalogue.showingSome, { total: materials.length })
              : plural(locale, visible.length, catalogue.showingAll)}
          </span>
          {narrowed ? (
            /*
             * The same destination whether the click is intercepted or followed,
             * which is what makes this one control rather than two behaviours
             * wearing one label. It widens the filters and leaves the order
             * alone: "show everything" is about what is being held back, and a
             * reader who asked for the list alphabetically has not asked twice.
             */
            <Link
              href={`${path}${materialsQuery(widened)}`}
              onClick={(event) => {
                event.preventDefault();
                choose(widened);
              }}
              className="text-[0.8125rem] text-muted underline decoration-rule underline-offset-[0.35em] transition-colors hover:text-burgundy hover:decoration-burgundy"
            >
              {catalogue.clear}
            </Link>
          ) : null}
        </p>
      ) : null}

      {groups.length === 0 ? (
        <p className="border-l-2 border-gold/60 py-1 pl-5 text-reading text-body/92">
          {catalogue.noMatch}
        </p>
      ) : (
        <div className="flex flex-col gap-14 lg:gap-16">
          {groups.map((group, position) => {
            const shelf = shelves.get(group.id);
            if (!shelf) return null;

            return (
              <section key={group.id} id={group.id} aria-labelledby={`${group.id}-heading`}>
                <div className="mb-6 flex flex-wrap items-baseline gap-x-4 gap-y-1 border-b border-hairline pb-3">
                  <span className="numerals-tabular text-[0.8125rem] text-muted">
                    {pad(position + 1)}
                  </span>
                  <h2
                    id={`${group.id}-heading`}
                    className="font-serif text-display-4 font-normal text-ink"
                  >
                    {shelf.label}
                  </h2>
                  <span className="text-[0.9375rem] text-faint">{shelf.note}</span>
                </div>

                {/*
                  The blank-field note, on the shelves that get printed and put
                  up in public. It sits above the files it applies to rather
                  than at the top of the page, because it is advice about a
                  poster and not about a wallpaper: a reader who came for a logo
                  should not have to work out that it is not addressed to them.
                  Which shelves carry it is `materialImprintCategoryIds` in
                  `content/materials/structure.ts`; `null` here means this one
                  does not.
                */}
                {shelf.imprintNote ? (
                  <p className="mb-6 max-w-(--container-reading) text-[0.9375rem] leading-relaxed text-muted">
                    {shelf.imprintNote}
                  </p>
                ) : null}

                <ul className="grid gap-x-6 gap-y-9 sm:grid-cols-2 lg:grid-cols-3">
                  {group.materials.map((material) => (
                    <MaterialCard key={material.id} material={material} edition={edition} />
                  ))}
                </ul>
              </section>
            );
          })}
        </div>
      )}
    </div>
  );
}

/**
 * Whether this code is running in a browser that ran it — `false` on the server
 * and through hydration, `true` from the commit after.
 *
 * `useSyncExternalStore` rather than a flag set in an effect. The two arrive at
 * the same answer, but this is the one the framework provides for it: the server
 * snapshot is what React renders *and* what it hydrates with, so the markup the
 * browser receives and the markup it first produces are identical and hydration
 * has nothing to reconcile. Setting state in an effect to learn the same bit is
 * a cascading render, and the lint rules in this project reject it.
 *
 * The store never changes, so there is nothing to subscribe to. Both callbacks
 * are module constants because a new function identity each render would have
 * React tear down and re-establish a subscription to nothing on every pass.
 */
const noChanges = () => () => {};
const running = () => true;
const notYet = () => false;

function useScripting(): boolean {
  return useSyncExternalStore(noChanges, running, notYet);
}

const field =
  "w-full rounded-xs border border-field bg-surface px-4 py-3 text-[0.9375rem] text-body transition-colors hover:border-ink focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-1 focus-visible:outline-burgundy";

/**
 * A visible label tied to its control by id, rather than a placeholder or a
 * title attribute. Three unlabelled dropdowns are three questions a screen
 * reader cannot answer, and this is a public page.
 */
function Control({
  id,
  label,
  children,
}: {
  readonly id: string;
  readonly label: string;
  readonly children: ReactNode;
}) {
  return (
    <div className="flex flex-col sm:min-w-52 sm:flex-1">
      <label htmlFor={id} className="eyebrow mb-2 text-muted">
        {label}
      </label>
      {children}
    </div>
  );
}

/*
 * The three controls narrow their own value rather than trusting the element.
 * A `<select>` is not a promise: an extension, an edit in devtools or a form
 * restored by the browser after a crash can each hand back something that was
 * never an option, and the guards are already written for the query string.
 */
function asCategory(value: string): MaterialCategoryId | null {
  return isMaterialCategory(value) ? value : null;
}

function asFormat(value: string): MaterialFormatId | null {
  return isMaterialFormatId(value) ? value : null;
}

function asSort(value: string, current: MaterialSelection): MaterialSortId {
  return isMaterialSort(value) ? value : current.sort;
}

/**
 * One item: a preview, what it is, and the download.
 *
 * The whole card is a single link rather than a preview beside a button. It is
 * one tab stop instead of two for one destination, and the picture becomes the
 * affordance it already looks like.
 *
 * The accessible name is the file's own — "Download A2 poster" rather than the
 * twentieth "Download" on the page — and because an `aria-label` replaces
 * everything inside the link, the format and the size are attached with
 * `aria-describedby` instead of being left inside to be swallowed. They are
 * what somebody decides on before clicking, an SVG or a PDF and whether it is
 * worth it on a telephone, so a screen reader has to reach them; the visible
 * "Download" beside them is hidden precisely because it is the one part the
 * name already says.
 *
 * A plain anchor, not `next/link`: the address is on the storage host rather
 * than on this site, so there is no route to prefetch and no client-side
 * navigation to be had. `download` is deliberately absent — browsers ignore it
 * across origins, and the stored download address already carries whatever the
 * provider needs to make a browser save the file instead of displaying it.
 */
function MaterialCard({
  material,
  edition,
}: {
  readonly material: Material;
  readonly edition: MaterialsEdition;
}) {
  const factsId = `material-${material.id}-facts`;
  const aboutId = `material-${material.id}-about`;

  return (
    <li>
      <a
        href={material.downloadUrl}
        aria-label={fill(edition.file.downloadLabel, { title: material.title })}
        aria-describedby={material.description ? `${aboutId} ${factsId}` : factsId}
        className="group flex h-full flex-col gap-4"
      >
        <div className="relative aspect-[4/3] overflow-hidden border border-hairline bg-surface transition-colors group-hover:border-rule-strong">
          <MaterialPreview
            material={material}
            alt={fill(edition.preview.alt, { title: material.title })}
            noPreview={edition.preview.none}
            sizes="(min-width: 1024px) 30vw, (min-width: 640px) 45vw, 92vw"
          />
        </div>

        <div className="flex flex-1 flex-col">
          <p className="font-serif text-[1.1875rem] leading-snug text-ink transition-colors group-hover:text-burgundy">
            {material.title}
          </p>

          {material.description ? (
            <p id={aboutId} className="mt-1 text-[0.9375rem] leading-relaxed text-muted">
              {material.description}
            </p>
          ) : null}

          <p
            id={factsId}
            className="eyebrow mt-2 flex flex-wrap items-center gap-x-3 gap-y-1 text-faint"
          >
            <span>{materialFormatLabel(material.contentType)}</span>
            <span aria-hidden="true" className="size-1 rotate-45 bg-gold/70" />
            <span>{formatMaterialSize(edition.locale, material.bytes)}</span>
          </p>

          <p
            aria-hidden="true"
            className="mt-3 flex items-center gap-2 text-[0.875rem] text-muted transition-colors group-hover:text-burgundy"
          >
            <ArrowDownToLine className="size-3.5" strokeWidth={1.75} />
            {edition.file.download}
          </p>
        </div>
      </a>
    </li>
  );
}
