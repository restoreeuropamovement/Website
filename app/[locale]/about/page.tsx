import type { Metadata } from "next";
import AboutPage from "@/app/(site)/about/page";
import { localeAlternates, resolveLocale } from "@/lib/locale-metadata";
import { routes } from "@/lib/site";

export async function generateMetadata(props: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const locale = resolveLocale((await props.params).locale);
  return {
    title: "About",
    alternates: localeAlternates(locale, routes.about),
  };
}

export default AboutPage;
