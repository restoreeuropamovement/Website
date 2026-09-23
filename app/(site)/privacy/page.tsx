import type { Metadata } from "next";
import { ContentBlocks } from "@/components/content/ContentBlocks";
import { Container } from "@/components/ui/Container";
import { PageHeader } from "@/components/layout/PageHeader";
import { privacy } from "@/content/legal";

export const metadata: Metadata = {
  title: "Privacy",
  description:
    "Reading this site collects nothing: no analytics, no cookies, no tracking. Two pages ask for something, and only if you choose to give it. What is held, what is encrypted, and how to have it erased.",
  alternates: { canonical: "/privacy" },
};

export default function PrivacyPage() {
  return (
    <>
      <PageHeader
        kicker={privacy.eyebrow}
        title={privacy.title}
        lede={privacy.lede}
        size="narrow"
      />

      <Container size="narrow" className="py-14 lg:py-20">
        <div className="flex flex-col gap-12">
          {privacy.sections.map((section) => (
            <section
              key={section.id}
              id={section.id}
              aria-labelledby={`${section.id}-heading`}
              className="border-t border-hairline pt-8 first:border-t-0 first:pt-0"
            >
              <h2
                id={`${section.id}-heading`}
                className="mb-6 font-serif text-display-3 font-normal text-ink"
              >
                {section.title}
              </h2>
              <ContentBlocks blocks={section.body} />
            </section>
          ))}
        </div>
      </Container>
    </>
  );
}
