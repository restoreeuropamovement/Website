import type { Metadata } from "next";

import { TermsDocument } from "@/components/shop/TermsDocument";
import { getShop } from "@/content/shop";
import { resolveLocale } from "@/lib/locale-metadata";
import { shopRobots } from "@/lib/shop/page";
import { loadWithdrawPage } from "@/lib/shop/withdraw-page";

export const dynamic = "force-dynamic";

export async function generateMetadata(props: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { text } = await getShop(resolveLocale((await props.params).locale));
  return { title: text.terms.metaTitle, robots: shopRobots() };
}

export default async function TranslatedTermsPage(props: { params: Promise<{ locale: string }> }) {
  return <TermsDocument edition={await loadWithdrawPage(resolveLocale((await props.params).locale))} />;
}
