import type { Metadata } from "next";

import { ConfirmDocument } from "@/components/newsletter/ConfirmDocument";
import { getNewsletter } from "@/content/newsletter";
import { resolveLocale } from "@/lib/locale-metadata";

/**
 * The translated confirmation page.
 *
 * It exists because the confirmation message is written in the language its
 * reader subscribed in, and `content/emails` builds the link with
 * `localePath`. Without this file a German reader would be sent from a German
 * message to an English page to complete the one step that decides whether
 * they hear from the movement at all.
 *
 * `noindex` for the same reason as the English page; see the note there.
 */
export async function generateMetadata(props: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const edition = await getNewsletter(resolveLocale((await props.params).locale));

  return { title: edition.confirm.metaTitle, robots: { index: false, follow: false } };
}

export default async function TranslatedConfirmPage(props: {
  params: Promise<{ locale: string }>;
  searchParams: Promise<Record<string, string | string[] | undefined>>;
}) {
  const locale = resolveLocale((await props.params).locale);
  const { token } = await props.searchParams;

  return <ConfirmDocument edition={await getNewsletter(locale)} token={token} />;
}
