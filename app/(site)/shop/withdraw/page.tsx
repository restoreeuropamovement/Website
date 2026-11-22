import type { Metadata } from "next";

import { WithdrawalDocument } from "@/components/shop/WithdrawalDocument";
import { getShop } from "@/content/shop";
import { initialReference, loadWithdrawPage, withdrawRobots } from "@/lib/shop/withdraw-page";

export const dynamic = "force-dynamic";

export async function generateMetadata(): Promise<Metadata> {
  const { text } = await getShop("en");
  return { title: text.withdrawal.metaTitle, robots: withdrawRobots };
}

export default async function WithdrawPage(props: {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
}) {
  const edition = await loadWithdrawPage("en");
  return <WithdrawalDocument edition={edition} initialReference={initialReference(await props.searchParams)} />;
}
