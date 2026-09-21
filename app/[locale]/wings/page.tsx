import type { Metadata } from "next";
import WingsPage from "@/app/(site)/wings/page";
import { localeAlternates, resolveLocale } from "@/lib/locale-metadata";
import { routes } from "@/lib/site";

export async function generateMetadata(props: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const locale = resolveLocale((await props.params).locale);
  return {
    title: "National Wings",
    alternates: localeAlternates(locale, routes.wings),
  };
}

export default WingsPage;
