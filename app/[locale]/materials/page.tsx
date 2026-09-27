import type { Metadata } from "next";

import { MaterialsDocument } from "@/components/materials/MaterialsDocument";
import { getMaterials } from "@/content/materials";
import { localeAlternates, resolveLocale } from "@/lib/locale-metadata";
import { groupMaterials, publishedMaterials } from "@/lib/materials";
import { routes } from "@/lib/site";

/** Per request, for the reason given in `app/(site)/materials/page.tsx`. */
export const dynamic = "force-dynamic";

export async function generateMetadata(props: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const locale = resolveLocale((await props.params).locale);
  const edition = await getMaterials(locale);

  return {
    title: edition.meta.metaTitle,
    description: edition.meta.description,
    alternates: localeAlternates(locale, routes.materials),
  };
}

export default async function TranslatedMaterialsPage(props: {
  params: Promise<{ locale: string }>;
}) {
  const locale = resolveLocale((await props.params).locale);
  const materials = await publishedMaterials();

  return (
    <MaterialsDocument
      edition={await getMaterials(locale)}
      groups={materials === null ? null : groupMaterials(materials)}
    />
  );
}
