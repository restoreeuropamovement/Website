import type { Metadata } from "next";
import Link from "next/link";
import { ContactForm } from "@/components/forms/ContactForm";
import { Container } from "@/components/ui/Container";
import { PageHeader } from "@/components/layout/PageHeader";
import { contactChannels, contactMeta } from "@/content/involvement";
import { alternateLanguages } from "@/lib/i18n";
import { routes } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "How to reach Restore Europe Movement: general enquiries, press, research, organisation and local chapters.",
  alternates: {
    canonical: routes.contact,
    languages: alternateLanguages(routes.contact),
  },
};

/**
 * The functions correspondence is handled by, and the form that reaches them.
 *
 * No email addresses are printed: each is published when the function exists
 * and someone is answerable for reading it. The form is the working route in
 * the meantime — it stores what you write, encrypted, where an administrator
 * reads it.
 */
export default function ContactPage() {
  return (
    <>
      <PageHeader kicker={contactMeta.eyebrow} title={contactMeta.title} lede={contactMeta.lede} />

      <Container className="py-12 lg:py-16">
        <section aria-labelledby="channels-heading">
          <h2 id="channels-heading" className="mb-4 font-serif text-[0.9375rem] text-muted">
            Channels
          </h2>
          <ul className="flex flex-col border-t border-hairline">
            {contactChannels.map((channel) => (
              <li
                key={channel.id}
                id={channel.id}
                className="scroll-mt-32 grid gap-2 border-b border-hairline py-5 sm:grid-cols-[14rem_minmax(0,1fr)] sm:gap-8"
              >
                <h3 className="font-serif text-[1.125rem] text-ink">{channel.title}</h3>
                <p className="text-[0.9375rem] leading-relaxed text-muted">{channel.description}</p>
              </li>
            ))}
          </ul>
        </section>

        <section aria-labelledby="write-heading" className="mt-16 lg:mt-24">
          <h2 id="write-heading" className="font-serif text-display-3 font-normal text-ink">
            Write to us
          </h2>
          <p className="mt-4 max-w-(--container-reading) text-reading leading-relaxed text-body/92">
            No email addresses are printed above, because each is published when the function it
            belongs to exists and someone is answerable for reading it. This form reaches the same
            people in the meantime.
          </p>
          <div className="mt-10 max-w-(--container-narrow)">
            <ContactForm />
          </div>
          <p className="mt-10 max-w-(--container-reading) text-[0.9375rem] leading-relaxed text-muted">
            If you would rather take part than ask a question,{" "}
            <Link
              href={routes.join}
              className="text-ink underline decoration-rule underline-offset-[0.28em] hover:text-burgundy hover:decoration-burgundy"
            >
              join the movement
            </Link>
            . Publisher information is on the{" "}
            <Link
              href={routes.imprint}
              className="text-ink underline decoration-rule underline-offset-[0.28em] hover:text-burgundy hover:decoration-burgundy"
            >
              imprint
            </Link>
            .
          </p>
        </section>
      </Container>
    </>
  );
}
