import type { Metadata } from "next";
import PrivacyPage from "@/app/(site)/privacy/page";
import { localeAlternates, resolveLocale } from "@/lib/locale-metadata";
import { routes } from "@/lib/site";

export async function generateMetadata(props: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const locale = resolveLocale((await props.params).locale);
  return {
    title: "Privacy",
    alternates: localeAlternates(locale, routes.privacy),
  };
}

export default PrivacyPage;
