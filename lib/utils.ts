type ClassValue = string | number | false | null | undefined;

/**
 * Join conditional class names. Deliberately minimal — the project has no
 * conflicting-utility problems that would justify a `tailwind-merge` dependency.
 */
export function cn(...values: ClassValue[]): string {
  return values.filter(Boolean).join(" ");
}

/** Convert a title into a stable URL fragment. */
export function slugify(value: string): string {
  return value
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

/** Format an ISO date as e.g. "14 March 2026". */
export function formatDate(iso: string, locale = "en-GB"): string {
  return new Date(`${iso}T00:00:00Z`).toLocaleDateString(locale, {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  });
}

/** Roman numerals, for manifesto section numbering. */
export function toRoman(value: number): string {
  const table: ReadonlyArray<readonly [number, string]> = [
    [1000, "M"],
    [900, "CM"],
    [500, "D"],
    [400, "CD"],
    [100, "C"],
    [90, "XC"],
    [50, "L"],
    [40, "XL"],
    [10, "X"],
    [9, "IX"],
    [5, "V"],
    [4, "IV"],
    [1, "I"],
  ];

  let remainder = value;
  let out = "";
  for (const [amount, numeral] of table) {
    while (remainder >= amount) {
      out += numeral;
      remainder -= amount;
    }
  }
  return out;
}

/** Zero-padded index, e.g. 3 → "03". */
export function pad(value: number, length = 2): string {
  return String(value).padStart(length, "0");
}
