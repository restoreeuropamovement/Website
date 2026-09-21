import type { Metadata } from "next";
import ContactPage from "@/app/(site)/contact/page";
import { localeAlternates, resolveLocale } from "@/lib/locale-metadata";
import { routes } from "@/lib/site";

export async function generateMetadata(props: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const locale = resolveLocale((await props.params).locale);
  return {
    title: "Contact",
    alternates: localeAlternates(locale, routes.contact),
  };
}

export default ContactPage;
