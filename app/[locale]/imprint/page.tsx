import type { Metadata } from "next";
import ImprintPage from "@/app/(site)/imprint/page";
import { localeAlternates, resolveLocale } from "@/lib/locale-metadata";
import { routes } from "@/lib/site";

export async function generateMetadata(props: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const locale = resolveLocale((await props.params).locale);
  return {
    title: "Imprint",
    alternates: localeAlternates(locale, routes.imprint),
  };
}

export default ImprintPage;
