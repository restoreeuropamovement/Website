import type { Metadata } from "next";

import { MaterialsDocument } from "@/components/materials/MaterialsDocument";
import { englishMaterials } from "@/content/materials";
import { alternateLanguages } from "@/lib/i18n";
import { groupMaterials, publishedMaterials } from "@/lib/materials";
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

export default async function MaterialsPage() {
  const materials = await publishedMaterials();

  return (
    <MaterialsDocument
      edition={englishMaterials}
      groups={materials === null ? null : groupMaterials(materials)}
    />
  );
}
