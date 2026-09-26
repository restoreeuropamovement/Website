import Link from "next/link";
import { ContactForm } from "@/components/forms/ContactForm";
import { SocialLinks } from "@/components/layout/SocialLinks";
import { Container } from "@/components/ui/Container";
import { PageHeader } from "@/components/layout/PageHeader";
import type { InvolvementEdition } from "@/content/involvement";
import { localePath } from "@/lib/i18n";
import { routes } from "@/lib/site";

/**
 * The functions correspondence is handled by, and the form that reaches them.
 *
 * No email addresses are printed: each is published when the function exists
 * and someone is answerable for reading it. The form is the working route in
 * the meantime — it stores what you write, encrypted, where an administrator
 * reads it.
 */
export function ContactDocument({ edition }: { readonly edition: InvolvementEdition }) {
  const { locale } = edition;
  const text = edition.contact;
  const link =
    "text-ink underline decoration-rule underline-offset-[0.28em] hover:text-burgundy hover:decoration-burgundy";

  return (
    <>
      <PageHeader kicker={text.eyebrow} title={text.title} lede={text.lede} size="narrow" />

      <Container size="narrow" className="py-12 lg:py-16">
        <section aria-labelledby="channels-heading">
          <h2 id="channels-heading" className="mb-4 font-serif text-[0.9375rem] text-muted">
            {text.channelsHeading}
          </h2>
          <ul className="flex flex-col border-t border-hairline">
            {edition.channels.map((channel) => (
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
          {/* Alongside the channels, because a reader on this page is looking
              for a way to reach the movement and this is the only one that
              does not involve waiting for a reply. */}
          <SocialLinks locale={locale} className="mt-10" />
        </section>

        <section aria-labelledby="write-heading" className="mt-16 lg:mt-24">
          <h2 id="write-heading" className="font-serif text-display-3 font-normal text-ink">
            {text.writeHeading}
          </h2>
          <p className="mt-4 text-reading leading-relaxed text-body/92">{text.writeBody}</p>
          <div className="mt-10">
            <ContactForm edition={edition} />
          </div>
          <p className="mt-10 text-[0.9375rem] leading-relaxed text-muted">
            {text.ratherTakePart.before}{" "}
            <Link href={localePath(locale, routes.join)} className={link}>
              {text.ratherTakePart.joinLink}
            </Link>
            {text.ratherTakePart.between}{" "}
            <Link href={localePath(locale, routes.imprint)} className={link}>
              {text.ratherTakePart.imprintLink}
            </Link>
            {text.ratherTakePart.after}
          </p>
        </section>
      </Container>
    </>
  );
}
