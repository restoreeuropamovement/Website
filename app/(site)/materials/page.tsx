import type { Metadata } from "next";

import { MaterialsDocument } from "@/components/materials/MaterialsDocument";
import { englishMaterials } from "@/content/materials";
import { alternateLanguages } from "@/lib/i18n";
import { parseMaterialSelection } from "@/lib/material-catalogue";
import { publishedMaterials } from "@/lib/materials";
import { routes } from "@/lib/site";

/**
 * Rendered per request rather than prerendered, which is the one thing about
 * this page that differs from every other public page here.
 *
 * The catalogue is a database read, and `next build` runs on a machine with no
 * `DATABASE_URL` — deliberately, because CI must not be able to reach the
 * membership roll. A prerender would therefore bake "nothing published" into
 * the deployment and serve it until something happened to revalidate. The
 * alternative is `revalidate` plus an on-demand invalidation of six locale
 * paths from the upload action, which is bookkeeping that rots the first time
 * somebody adds a seventh language and forgets this file exists.
 *
 * Six server-rendered pages against nine hundred prerendered ones is a cost
 * worth paying to have a page that is true the moment a poster is uploaded.
 */
export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: englishMaterials.meta.metaTitle,
  description: englishMaterials.meta.description,
  alternates: {
    canonical: routes.materials,
    languages: alternateLanguages(routes.materials),
  },
};

/**
 * The filter and the order arrive in the query string, so that a view of the
 * catalogue is an address: linkable, bookmarkable, and applied by the server for
 * a reader whose browser is running none of this page's JavaScript. Reading them
 * costs nothing that has not already been paid, because this route is rendered
 * per request either way.
 */
export default async function MaterialsPage(props: {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
}) {
  const materials = await publishedMaterials();

  return (
    <MaterialsDocument
      edition={englishMaterials}
      materials={materials}
      selection={parseMaterialSelection(await props.searchParams)}
    />
  );
}
