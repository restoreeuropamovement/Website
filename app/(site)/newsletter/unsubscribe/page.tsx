import type { Metadata } from "next";

import { UnsubscribeDocument } from "@/components/newsletter/UnsubscribeDocument";
import { englishNewsletter } from "@/content/newsletter";

/** Unlisted for the same reason as `confirm`; see the note there. */
export const metadata: Metadata = {
  title: englishNewsletter.unsubscribe.metaTitle,
  robots: { index: false, follow: false },
};

export default async function UnsubscribePage(props: {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
}) {
  const { token } = await props.searchParams;

  return <UnsubscribeDocument edition={englishNewsletter} token={token} />;
}
