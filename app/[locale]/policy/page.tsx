import type { Metadata } from "next";

import { PolicyDocument } from "@/components/policy/PolicyDocument";
import { getPolicy } from "@/content/policy";
import { localeAlternates, resolveLocale } from "@/lib/locale-metadata";
import { parsePolicyCategory, parseQueryText } from "@/lib/policy";
import { routes } from "@/lib/site";

export async function generateMetadata(props: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const locale = resolveLocale((await props.params).locale);
  const edition = await getPolicy(locale);

  return {
    title: edition.meta.metaTitle,
    description: edition.meta.description,
    alternates: localeAlternates(locale, routes.policy),
  };
}

export default async function TranslatedPolicyPage(props: {
  params: Promise<{ locale: string }>;
  searchParams: Promise<Record<string, string | string[] | undefined>>;
}) {
  const [{ locale: raw }, searchParams] = await Promise.all([props.params, props.searchParams]);
  const locale = resolveLocale(raw);

  return (
    <PolicyDocument
      edition={await getPolicy(locale)}
      query={{
        q: parseQueryText(searchParams.q),
        category: parsePolicyCategory(searchParams.category),
      }}
    />
  );
}
