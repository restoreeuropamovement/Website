import type { Metadata } from "next";

import { WithdrawalDocument } from "@/components/shop/WithdrawalDocument";
import { getShop } from "@/content/shop";
import { resolveLocale } from "@/lib/locale-metadata";
import { initialReference, loadWithdrawPage, withdrawRobots } from "@/lib/shop/withdraw-page";

export const dynamic = "force-dynamic";

export async function generateMetadata(props: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { text } = await getShop(resolveLocale((await props.params).locale));
  return { title: text.withdrawal.metaTitle, robots: withdrawRobots };
}

export default async function TranslatedWithdrawPage(props: {
  params: Promise<{ locale: string }>;
  searchParams: Promise<Record<string, string | string[] | undefined>>;
}) {
  const edition = await loadWithdrawPage(resolveLocale((await props.params).locale));
  return <WithdrawalDocument edition={edition} initialReference={initialReference(await props.searchParams)} />;
}
