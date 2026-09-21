import type { Metadata } from "next";
import JoinPage from "@/app/(site)/join/page";
import { localeAlternates, resolveLocale } from "@/lib/locale-metadata";
import { routes } from "@/lib/site";

export async function generateMetadata(props: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const locale = resolveLocale((await props.params).locale);
  return {
    title: "Join",
    alternates: localeAlternates(locale, routes.join),
  };
}

export default JoinPage;
