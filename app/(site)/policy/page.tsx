import type { Metadata } from "next";

import { PolicyDocument } from "@/components/policy/PolicyDocument";
import { englishPolicy } from "@/content/policy";
import { parsePolicyCategory, parseQueryText } from "@/lib/policy";

export const metadata: Metadata = {
  title: englishPolicy.meta.metaTitle,
  description: englishPolicy.meta.description,
  alternates: { canonical: "/policy" },
};

export default async function PolicyPage(props: {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
}) {
  const searchParams = await props.searchParams;

  return (
    <PolicyDocument
      edition={englishPolicy}
      query={{
        q: parseQueryText(searchParams.q),
        category: parsePolicyCategory(searchParams.category),
      }}
    />
  );
}
