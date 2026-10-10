import type { Metadata } from "next";

import { UnsubscribeDocument } from "@/components/newsletter/UnsubscribeDocument";
import { getNewsletter } from "@/content/newsletter";
import { resolveLocale } from "@/lib/locale-metadata";

/**
 * The translated removal page. More load-bearing than the confirmation one:
 * the link at the foot of every issue points here, and a reader who meets an
 * English page when they want to leave is a reader who presses the provider's
 * "this is spam" button instead.
 */
export async function generateMetadata(props: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const edition = await getNewsletter(resolveLocale((await props.params).locale));

  return { title: edition.unsubscribe.metaTitle, robots: { index: false, follow: false } };
}

export default async function TranslatedUnsubscribePage(props: {
  params: Promise<{ locale: string }>;
  searchParams: Promise<Record<string, string | string[] | undefined>>;
}) {
  const locale = resolveLocale((await props.params).locale);
  const { token } = await props.searchParams;

  return <UnsubscribeDocument edition={await getNewsletter(locale)} token={token} />;
}
