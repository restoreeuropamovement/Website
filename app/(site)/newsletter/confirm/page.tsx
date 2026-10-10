import type { Metadata } from "next";

import { ConfirmDocument } from "@/components/newsletter/ConfirmDocument";
import { englishNewsletter } from "@/content/newsletter";

/**
 * Reached only from a link in a message, and kept out of the index.
 *
 * `noindex` and no entry in `app/sitemap.ts`, for a reason stronger than
 * tidiness: the address carries a one-time token, and a crawler that found one
 * in a leaked message or a referrer header and fetched it would be a machine
 * confirming subscriptions. `nofollow` likewise — there is nothing here worth
 * following and the page is not part of the site's shape.
 */
export const metadata: Metadata = {
  title: englishNewsletter.confirm.metaTitle,
  robots: { index: false, follow: false },
};

export default async function ConfirmSubscriptionPage(props: {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
}) {
  const { token } = await props.searchParams;

  return <ConfirmDocument edition={englishNewsletter} token={token} />;
}
