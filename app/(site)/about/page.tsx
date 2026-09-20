import type { Metadata } from "next";
import { ContentBlocks } from "@/components/content/ContentBlocks";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { aboutMeta, aboutSections, leadershipSlots } from "@/content/about";

export const metadata: Metadata = {
  title: "About",
  description:
    "Who Restore Europe Movement is, why we describe our politics as restoration, how we organise, and our commitment to peaceful, constitutional and democratic political participation.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <>
      <header className="border-b border-hairline bg-canvas-deep pt-16 pb-14 lg:pt-24 lg:pb-20">
        <Container>
          <p className="eyebrow mb-6 flex items-center gap-3 text-burgundy">
            <span aria-hidden="true" className="h-px w-6 bg-burgundy/40" />
            {aboutMeta.eyebrow}
          </p>
          <h1 className="max-w-4xl font-serif text-display-2 font-normal text-ink">
            {aboutMeta.title}
          </h1>
          <p className="mt-6 max-w-(--container-reading) text-lede text-muted">{aboutMeta.lede}</p>
        </Container>
      </header>

      <Container className="py-16 lg:py-24">
        <div className="grid gap-16 lg:grid-cols-[15rem_minmax(0,1fr)] lg:gap-16 xl:grid-cols-[17rem_minmax(0,1fr)] xl:gap-24">
          <nav aria-label="On this page" className="hidden lg:block">
            <div className="sticky top-32">
              <h2 className="eyebrow mb-5 text-muted">On this page</h2>
              <ol className="flex flex-col border-l border-hairline">
                {aboutSections.map((section) => (
                  <li key={section.id}>
                    <a
                      href={`#${section.id}`}
                      className="-ml-px block border-l border-transparent py-2 pl-4 text-[0.8125rem] leading-snug text-muted transition-colors hover:border-rule hover:text-ink"
                    >
                      {section.title}
                    </a>
                  </li>
                ))}
              </ol>
            </div>
          </nav>

          <div className="flex max-w-(--container-reading) flex-col gap-14 lg:gap-20">
            {aboutSections.map((section) => (
              <Reveal key={section.id}>
                <section
                  id={section.id}
                  aria-labelledby={`${section.id}-heading`}
                  className="border-t border-hairline pt-10 first:border-t-0 first:pt-0"
                >
                  <h2
                    id={`${section.id}-heading`}
                    className="mb-8 font-serif text-display-3 font-normal text-ink"
                  >
                    {section.title}
                  </h2>
                  <ContentBlocks blocks={section.body} />
                </section>
              </Reveal>
            ))}

            <Reveal>
              <section aria-labelledby="people-heading" className="border-t border-hairline pt-10">
                <h2
                  id="people-heading"
                  className="mb-4 font-serif text-display-3 font-normal text-ink"
                >
                  People
                </h2>
                <p className="mb-8 text-reading text-body/92">
                  No officers have been appointed, and we will not publish biographies of people who
                  do not yet hold these posts. The roles below describe the structure a formed
                  organisation will fill, together with what each will be answerable for.
                </p>

                <ul className="grid gap-px border border-hairline bg-hairline sm:grid-cols-2">
                  {leadershipSlots.map((slot) => (
                    <li key={slot.role} className="flex flex-col gap-4 bg-canvas p-7">
                      <div
                        aria-hidden="true"
                        className="flex h-14 w-14 items-center justify-center border border-dashed border-rule text-[0.625rem] tracking-[0.12em] text-faint uppercase"
                      >
                        Vacant
                      </div>
                      <div className="flex flex-col gap-1.5">
                        <h3 className="font-serif text-[1.25rem] text-ink">{slot.role}</h3>
                        <p className="text-[0.9375rem] leading-relaxed text-muted">{slot.remit}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </section>
            </Reveal>

            <Reveal>
              <div className="flex flex-col gap-3 border-t border-hairline pt-10 sm:flex-row sm:gap-4">
                <Button href="/join" size="lg">
                  Get Involved
                </Button>
                <Button href="/contact" size="lg" variant="secondary">
                  Contact
                </Button>
              </div>
            </Reveal>
          </div>
        </div>
      </Container>
    </>
  );
}
