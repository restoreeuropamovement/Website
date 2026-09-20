import type { Metadata } from "next";
import { ContentBlocks } from "@/components/content/ContentBlocks";
import { Container } from "@/components/ui/Container";
import { privacy } from "@/content/legal";

export const metadata: Metadata = {
  title: "Privacy",
  description:
    "This site collects nothing: no analytics, no cookies, no tracking, and no form submissions. A short and honest privacy note.",
  alternates: { canonical: "/privacy" },
};

export default function PrivacyPage() {
  return (
    <>
      <header className="border-b border-hairline bg-canvas-deep pt-16 pb-12 lg:pt-24 lg:pb-16">
        <Container size="narrow">
          <p className="eyebrow mb-6 text-burgundy">{privacy.eyebrow}</p>
          <h1 className="font-serif text-display-2 font-normal text-ink">{privacy.title}</h1>
          <p className="mt-6 text-lede text-muted">{privacy.lede}</p>
        </Container>
      </header>

      <Container size="narrow" className="py-14 lg:py-20">
        <div className="flex max-w-(--container-reading) flex-col gap-12">
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
