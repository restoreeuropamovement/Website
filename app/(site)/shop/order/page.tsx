import type { Metadata } from "next";

import { OrderStatusDocument } from "@/components/shop/OrderStatusDocument";
import { getShop } from "@/content/shop";
import { loadOrderPage } from "@/lib/shop/page";

export const dynamic = "force-dynamic";

/** Never indexed: the address carries the session id that is this page's only credential. */
export async function generateMetadata(): Promise<Metadata> {
  const { text } = await getShop("en");
  return { title: text.order.metaTitle, robots: { index: false, follow: false } };
}

export default async function OrderPage(props: {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
}) {
  const { session } = await props.searchParams;
  const page = await loadOrderPage("en", session);
  return <OrderStatusDocument edition={page.edition} order={page.order} tracking={page.tracking} />;
}
