import type { Metadata } from "next";
import VisionPage from "@/app/(site)/vision/page";
import { localeAlternates, resolveLocale } from "@/lib/locale-metadata";
import { routes } from "@/lib/site";

export async function generateMetadata(props: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const locale = resolveLocale((await props.params).locale);
  return {
    title: "Vision",
    alternates: localeAlternates(locale, routes.vision),
  };
}

export default VisionPage;
