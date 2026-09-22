import type { Metadata } from "next";
import Link from "next/link";
import { ContentBlocks } from "@/components/content/ContentBlocks";
import { Container } from "@/components/ui/Container";
import { PageHeader } from "@/components/layout/PageHeader";
import { aboutMeta, aboutSections, leadershipSlots } from "@/content/about";

export const metadata: Metadata = {
  title: "About",
  description:
    "Who Restore Europa Movement is, why we describe our politics as restoration, how we organise, and our commitment to peaceful, constitutional and democratic political participation.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <>
      <PageHeader kicker={aboutMeta.eyebrow} title={aboutMeta.title} lede={aboutMeta.lede} />

      <Container className="py-12 lg:py-16">
        <div className="grid gap-16 lg:grid-cols-[15rem_minmax(0,1fr)] lg:gap-16 xl:grid-cols-[17rem_minmax(0,1fr)] xl:gap-24">
          <nav aria-label="On this page" className="hidden lg:block">
            <div className="sticky top-24">
              <h2 className="mb-4 font-serif text-[0.9375rem] text-muted">On this page</h2>
              <ol className="flex flex-col border-l border-hairline">
                {aboutSections.map((section) => (
                  <li key={section.id}>
                    <a
                      href={`#${section.id}`}
                      className="-ml-px block border-l border-transparent py-2 pl-4 text-[0.8125rem] leading-snug text-muted hover:border-rule hover:text-ink"
                    >
                      {section.title}
                    </a>
                  </li>
                ))}
              </ol>
            </div>
          </nav>

          <div className="flex max-w-(--container-reading) flex-col gap-12 lg:gap-16">
            {aboutSections.map((section) => (
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

            <section aria-labelledby="people-heading" className="border-t border-hairline pt-8">
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

              <ul className="flex flex-col">
                {leadershipSlots.map((slot) => (
                  <li key={slot.role} className="border-t border-hairline py-5">
                    <h3 className="font-serif text-[1.25rem] text-ink">{slot.role}</h3>
                    <p className="mt-2 text-[0.9375rem] leading-relaxed text-muted">{slot.remit}</p>
                  </li>
                ))}
              </ul>
            </section>

            <p className="flex flex-wrap items-baseline gap-x-4 gap-y-2 border-t border-hairline pt-8 text-[0.9375rem]">
              <Link
                href="/join"
                className="text-ink underline decoration-rule underline-offset-[0.28em] hover:text-burgundy hover:decoration-burgundy"
              >
                Get involved
              </Link>
              <span className="text-faint" aria-hidden="true">
                ·
              </span>
              <Link
                href="/contact"
                className="text-ink underline decoration-rule underline-offset-[0.28em] hover:text-burgundy hover:decoration-burgundy"
              >
                Contact
              </Link>
            </p>
          </div>
        </div>
      </Container>
    </>
  );
}
