import type { Metadata } from "next";
import PolicyPage from "@/app/(site)/policy/page";
import { localeAlternates, resolveLocale } from "@/lib/locale-metadata";
import { routes } from "@/lib/site";

export async function generateMetadata(props: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const locale = resolveLocale((await props.params).locale);
  return {
    title: "Policy Catalogue",
    alternates: localeAlternates(locale, routes.policy),
  };
}

export default PolicyPage;
