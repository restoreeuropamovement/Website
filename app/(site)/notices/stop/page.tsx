import type { Metadata } from "next";

import { PageHeader } from "@/components/layout/PageHeader";
import { StopPanel } from "@/components/notices/StopPanel";
import { Container } from "@/components/ui/Container";
import { noticesStop } from "@/content/notices/en";

/**
 * Unlisted, for the same reason the newsletter's unsubscribe page is: it is
 * reachable only from a message, means nothing without the token in the link,
 * and a search result for it would be a page inviting strangers to guess at
 * stopping somebody else's mail. Not in `routes`, and so not in the sitemap.
 */
export const metadata: Metadata = {
  title: noticesStop.metaTitle,
  robots: { index: false, follow: false },
};

export default async function StopNoticesPage(props: {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
}) {
  const { token } = await props.searchParams;
  const value = (Array.isArray(token) ? token[0] : token) ?? "";

  return (
    <>
      <PageHeader
        kicker={noticesStop.eyebrow}
        title={noticesStop.title}
        lede={noticesStop.lede}
        size="narrow"
      />
      <Container size="narrow" className="py-12 lg:py-16">
        <StopPanel token={value} />
      </Container>
    </>
  );
}
