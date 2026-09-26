import { getPolicy } from "../content/policy";
import type { Locale } from "../lib/i18n";
import { runPolicyQuery } from "../lib/policy";

const probes: Record<string, string[]> = {
  en: [
    "abortoin",
    "euthanaisa",
    "subsidarity",
    "immigration",
    "gay marriage",
    "tax",
    "taxes",
    "nukes",
    "global warming",
    "illegal immigration",
    "the pill",
    "sunday shopping",
    "nuclear weapons",
    "guns",
    "prison",
    "cost of living",
    "transgender",
    "xylophone",
    "abortion xylophone",
    "same sex marraige",
    "climate",
    "family",
  ],
  de: [
    "Abtreibung",
    "Abtreibungen",
    "Abtriebung",
    "Steuern",
    "Atomkraft",
    "Wehrpflicht",
    "Sterbehilfe",
    "Bargeld",
  ],
  pl: [
    "aborcja",
    "aborcji",
    "aborcaj",
    "podatki",
    "kara smierci",
    "energia jadrowa",
    "eutanazja",
    "mieszkania",
  ],
};

async function main() {
  for (const [locale, queries] of Object.entries(probes)) {
    const edition = await getPolicy(locale as Locale);
    console.log(`\n===== ${locale} =====`);
    for (const q of queries) {
      const started = performance.now();
      const { entries, suggestions } = runPolicyQuery(edition, { q });
      const ms = (performance.now() - started).toFixed(1);
      console.log(
        `${q.padEnd(22)} ${String(entries.length).padStart(3)} ${ms.padStart(6)}ms  ${entries
          .slice(0, 4)
          .map((e) => e.slug)
          .join(", ")}${suggestions.length ? `   ~ ${suggestions.map((e) => e.slug).join(", ")}` : ""}`,
      );
    }
  }
}

void main();
