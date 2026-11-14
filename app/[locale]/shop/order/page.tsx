import type { Metadata } from "next";

import { OrderStatusDocument } from "@/components/shop/OrderStatusDocument";
import { getShop } from "@/content/shop";
import { resolveLocale } from "@/lib/locale-metadata";
import { loadOrderPage } from "@/lib/shop/page";

export const dynamic = "force-dynamic";

export async function generateMetadata(props: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { text } = await getShop(resolveLocale((await props.params).locale));
  return { title: text.order.metaTitle, robots: { index: false, follow: false } };
}

export default async function TranslatedOrderPage(props: {
  params: Promise<{ locale: string }>;
  searchParams: Promise<Record<string, string | string[] | undefined>>;
}) {
  const locale = resolveLocale((await props.params).locale);
  const { session } = await props.searchParams;
  const page = await loadOrderPage(locale, session);
  return <OrderStatusDocument edition={page.edition} order={page.order} tracking={page.tracking} />;
}
