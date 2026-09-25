/**
 * Draws the movement's mark and writes every form of it the site needs.
 *
 * The mark is a cross potent — a Greek cross whose four arms end in crossbars —
 * with the four tips joined by a lozenge. It is the Jerusalem cross's principal
 * element, with connecting lines standing in for the four crosslets that
 * usually fill the quadrants.
 *
 * Geometry is stated once here and everything else is derived, so the favicon,
 * the home-screen icon, the crest on the link preview card and the masthead
 * glyph cannot drift apart. Output is deterministic: rerunning writes identical
 * bytes.
 *
 *   npm run brand
 */

import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");

/** The mark's own red, and the near-black the site is served on. */
const RED = "#950101";
const GROUND = "#0a0c0f";

/*
 * A 1024 grid with the figure centred on 512. The drawing supplied as reference
 * was a couple of pixels out of square — 947 across against 937 down — which is
 * invisible at logo size but would compound on every rescale, so the figure is
 * regularised here rather than traced.
 */
const BOX = 1024;
const C = BOX / 2;
/** Centre to the outer face of a crossbar, and so the figure's half-width. */
const REACH = 473;
/** Thickness of the four arms. */
const ARM = 106;
/** The crossbars that make the cross potent. */
const BAR_LENGTH = 314;
const BAR_DEPTH = 65;
/** Centre to the corner of the lozenge, measured along its own diagonal. */
const LOZENGE_REACH = 462;
/** Perpendicular thickness of the lozenge, which runs at 45°. */
const LOZENGE_DEPTH = 45;

const round = (n) => Number(n.toFixed(2));

/*
 * The lozenge as an outline rather than a stroke.
 *
 * Stroking it would be one line, but a 45° corner mitres to a spike reaching
 * `LOZENGE_DEPTH / √2` past the corner itself, which overshoots the crossbars
 * and puts paint outside the figure. The usual fix is a `clipPath`, and that
 * needs a DOM id — but the mark appears three times on every page, in the
 * masthead, the mobile index and the footer, so an id here would be three
 * duplicates in the document. Describing the outline directly avoids the
 * question: the outer edge is the lozenge truncated to the figure's bounds,
 * which makes it an octagon, and the inner edge is a plain lozenge.
 */
const SPIKE = LOZENGE_DEPTH / Math.SQRT2;
const OUTER = LOZENGE_REACH + SPIKE;
const INNER = LOZENGE_REACH - SPIKE;
/** Where the outer lozenge edge crosses the figure's bounds. */
const CUT = OUTER - REACH;

const near = round(C - REACH);
const far = round(C + REACH);
const cutLow = round(C - CUT);
const cutHigh = round(C + CUT);

const LOZENGE_PATH =
  `M${cutLow} ${near}H${cutHigh}L${far} ${cutLow}V${cutHigh}L${cutHigh} ${far}H${cutLow}` +
  `L${near} ${cutHigh}V${cutLow}Z` +
  `M${C} ${round(C - INNER)}L${round(C + INNER)} ${C}L${C} ${round(C + INNER)}L${round(C - INNER)} ${C}Z`;

const arm = C - ARM / 2;
const bar = C - BAR_LENGTH / 2;
const barFar = C + REACH - BAR_DEPTH;
const span = REACH * 2;

const RECTS = [
  { x: arm, y: near, width: ARM, height: span },
  { x: near, y: arm, width: span, height: ARM },
  { x: bar, y: near, width: BAR_LENGTH, height: BAR_DEPTH },
  { x: bar, y: barFar, width: BAR_LENGTH, height: BAR_DEPTH },
  { x: near, y: bar, width: BAR_DEPTH, height: BAR_LENGTH },
  { x: barFar, y: bar, width: BAR_DEPTH, height: BAR_LENGTH },
];

function mark(colour, ground) {
  const rects = RECTS.map(
    (r) => `    <rect x="${r.x}" y="${r.y}" width="${r.width}" height="${r.height}"/>`,
  ).join("\n");
  const backdrop = ground ? `  <rect width="${BOX}" height="${BOX}" fill="${ground}"/>\n` : "";
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${BOX} ${BOX}" width="${BOX}" height="${BOX}">
${backdrop}  <g fill="${colour}">
    <path fill-rule="evenodd" d="${LOZENGE_PATH}"/>
${rects}
  </g>
</svg>
`;
}

async function png(svg, size, file) {
  const out = join(ROOT, file);
  mkdirSync(dirname(out), { recursive: true });
  await sharp(Buffer.from(svg)).resize(size, size).png({ compressionLevel: 9 }).toFile(out);
  console.log(`  ${file} — ${size}×${size}`);
}

const onTransparent = mark(RED, null);
const onGround = mark(RED, GROUND);

mkdirSync(join(ROOT, "public/brand"), { recursive: true });
writeFileSync(join(ROOT, "public/brand/restore-europa-mark.svg"), onTransparent);
console.log("  public/brand/restore-europa-mark.svg");

/*
 * The preview card is composed by Satori, which does not rasterise SVG, so the
 * crest has to reach it as a PNG. Transparent, because the card paints its own
 * ground and a black square would show as a patch against it.
 */
await png(onTransparent, 512, "public/brand/restore-europa-mark.png");

/*
 * Tab and home-screen icons carry their ground with them. A transparent favicon
 * inherits whatever the browser puts behind it, and this red is too dark to
 * survive a light tab strip; iOS refuses transparency outright and composites
 * onto white.
 */
await png(onGround, 512, "app/icon.png");
await png(onGround, 180, "app/apple-icon.png");

/*
 * The figure once more as data, for the one place that wants it in the reader's
 * text colour rather than in brand red: the masthead, where it sits beside the
 * wordmark and has to read as one lockup with it. Emitted rather than copied by
 * hand so it cannot drift from the rasters above.
 */
const geometry = `/**
 * The mark's geometry, as \`components/brand/RestoreEuropaMark.tsx\` needs it.
 *
 * Generated by \`scripts/generate-brand.mjs\`. Change the constants there and
 * run \`npm run brand\`; editing this file only means the on-site mark and the
 * icons stop agreeing with each other.
 */

export const markViewBox = "0 0 ${BOX} ${BOX}";

export const markLozenge = "${LOZENGE_PATH}";

export const markRects = [
${RECTS.map((r) => `  { x: ${r.x}, y: ${r.y}, width: ${r.width}, height: ${r.height} },`).join("\n")}
] as const;
`;
writeFileSync(join(ROOT, "components/brand/mark-geometry.ts"), geometry);
console.log("  components/brand/mark-geometry.ts");
