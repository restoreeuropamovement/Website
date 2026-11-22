import type { Metadata } from "next";

import { TermsDocument } from "@/components/shop/TermsDocument";
import { getShop } from "@/content/shop";
import { shopRobots } from "@/lib/shop/page";
import { loadWithdrawPage } from "@/lib/shop/withdraw-page";

export const dynamic = "force-dynamic";

export async function generateMetadata(): Promise<Metadata> {
  const { text } = await getShop("en");
  return { title: text.terms.metaTitle, robots: shopRobots() };
}

export default async function TermsPage() {
  return <TermsDocument edition={await loadWithdrawPage("en")} />;
}
