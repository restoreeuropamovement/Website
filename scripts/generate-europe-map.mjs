/**
 * Generates the projected outline of Europe used by `/wings`.
 *
 * The map is real geography, not a drawing. Country outlines come from Natural
 * Earth (public domain, no attribution required — see CREDITS.md), fetched as
 * TopoJSON, clipped to a window over Europe, and projected with the Lambert
 * azimuthal equal-area parameters the EU's own statistical maps use
 * (EPSG:3035 — lat_0 52, lon_0 10). An approximated Europe was not an option:
 * a movement organised by nation cannot print a map whose borders are invented.
 *
 * Output is a generated TypeScript module rather than an `.svg` file, because
 * the page needs the outlines as separate paths keyed by wing slug: the
 * countries that have a wing are drawn in a different register from the land
 * around them, and that distinction has to survive into the markup.
 *
 * Deterministic: same input data, byte-identical output.
 *
 *   node scripts/generate-europe-map.mjs
 */

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");
const CACHE = join(ROOT, "node_modules", ".cache", "natural-earth");
const CACHE_FILE = join(CACHE, "countries-50m.json");
const SOURCE = "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-50m.json";

/* ------------------------------------------------------------------ window */

/*
 * Two boxes, and the distinction between them is the whole trick.
 *
 * WINDOW is where geometry is cut, and it is deliberately far larger than the
 * map. Cutting a continuous landmass leaves a visible edge — a straight line
 * where a coast should be — and on an azimuthal projection that edge is a
 * noticeable curve. Russia and North Africa have to be cut somewhere, so they
 * are cut a long way outside the picture, where nobody sees the seam.
 *
 * FRAMING is what the picture is fitted to: the land that has to be inside it,
 * expressed as bounds rather than as a chosen aspect ratio. Only rings that lie
 * wholly within it are allowed to influence the frame, which is how Svalbard,
 * the Azores, Madeira and the Canaries are kept from dragging the map out over
 * an ocean without having to name them. They are then simply outside the
 * finished frame and get dropped with everything else beyond it.
 */
const WINDOW = { west: -45, east: 80, south: 20, north: 83 };
const FRAMING = { west: -26, east: 42, south: 34, north: 72 };

/* -------------------------------------------------------------- projection */

const RADIUS = 6371;
const LAT0 = (52 * Math.PI) / 180;
const LON0 = (10 * Math.PI) / 180;

/**
 * Lambert azimuthal equal-area. Equal-area matters here: the map is read as a
 * claim about how much of the continent is organised, so a projection that
 * inflates the north would overstate Scandinavia and flatter the movement.
 */
function project([lon, lat]) {
  const phi = (lat * Math.PI) / 180;
  const lambda = (lon * Math.PI) / 180 - LON0;
  const cosPhi = Math.cos(phi);
  const sinPhi = Math.sin(phi);
  const cosLambda = Math.cos(lambda);
  const k = Math.sqrt(2 / (1 + Math.sin(LAT0) * sinPhi + Math.cos(LAT0) * cosPhi * cosLambda));
  const x = RADIUS * k * cosPhi * Math.sin(lambda);
  const y = RADIUS * k * (Math.cos(LAT0) * sinPhi - Math.sin(LAT0) * cosPhi * cosLambda);
  // SVG y grows downward; north should be up.
  return [x, -y];
}

/* ---------------------------------------------------------------- clipping */

/*
 * Sutherland–Hodgman against the four sides of the window, in degrees. Clipping
 * before projecting keeps the projection away from the antipode, where the
 * equal-area formula degenerates — Russia's eastern coast is on the far side of
 * the globe from the map's centre.
 */
function clipEdge(ring, inside, intersect) {
  if (ring.length === 0) return ring;
  const out = [];
  let previous = ring[ring.length - 1];
  let previousInside = inside(previous);
  for (const point of ring) {
    const pointInside = inside(point);
    if (pointInside !== previousInside) out.push(intersect(previous, point));
    if (pointInside) out.push(point);
    previous = point;
    previousInside = pointInside;
  }
  return out;
}

const LON_CENTRE = 10;

/**
 * Makes a ring's longitudes continuous, then shifts it back over the window.
 *
 * Russia's outline crosses the antimeridian, so in the source data its ring
 * steps from +180° to -180° in a single segment. Clipped naively, that segment
 * sweeps back across the whole northern hemisphere and lands in the middle of
 * the map as a band of "land" arcing over Scandinavia.
 *
 * The walk is incremental rather than a fixed threshold: each point is moved by
 * whatever multiple of 360° puts it nearest its predecessor. A fixed cutoff
 * leaves behind exactly the points that sit just inside it — Chukotka reaches
 * -169°, so a "below -170°" test unwraps most of the ring and not the rest,
 * which reproduces the artefact in a subtler form. The result is then shifted
 * as a whole so it overlaps the window, since the walk is only continuous
 * relative to wherever the ring happens to start.
 */
function unwrap(ring) {
  const out = [ring[0].slice()];
  for (let i = 1; i < ring.length; i += 1) {
    const previous = out[i - 1][0];
    let lon = ring[i][0];
    while (lon - previous > 180) lon -= 360;
    while (lon - previous < -180) lon += 360;
    out.push([lon, ring[i][1]]);
  }
  const lons = out.map((p) => p[0]);
  const middle = (Math.min(...lons) + Math.max(...lons)) / 2;
  const shift = Math.round((LON_CENTRE - middle) / 360) * 360;
  return shift === 0 ? out : out.map(([lon, lat]) => [lon + shift, lat]);
}

function clipRing(ring) {
  const { west, east, south, north } = WINDOW;
  const lerp = (a, b, t) => [a[0] + (b[0] - a[0]) * t, a[1] + (b[1] - a[1]) * t];
  let out = unwrap(ring);
  out = clipEdge(
    out,
    (p) => p[0] >= west,
    (a, b) => lerp(a, b, (west - a[0]) / (b[0] - a[0])),
  );
  out = clipEdge(
    out,
    (p) => p[0] <= east,
    (a, b) => lerp(a, b, (east - a[0]) / (b[0] - a[0])),
  );
  out = clipEdge(
    out,
    (p) => p[1] >= south,
    (a, b) => lerp(a, b, (south - a[1]) / (b[1] - a[1])),
  );
  out = clipEdge(
    out,
    (p) => p[1] <= north,
    (a, b) => lerp(a, b, (north - a[1]) / (b[1] - a[1])),
  );
  return out;
}

/**
 * Splits segments longer than `step` degrees. The clip above introduces edges
 * that run along a parallel or a meridian; those are curves once projected, and
 * without intermediate points they would be drawn as chords cutting into the
 * land.
 */
function densify(ring, step = 0.6) {
  if (ring.length < 2) return ring;
  const out = [];
  for (let i = 0; i < ring.length; i += 1) {
    const a = ring[i];
    const b = ring[(i + 1) % ring.length];
    out.push(a);
    const span = Math.max(Math.abs(b[0] - a[0]), Math.abs(b[1] - a[1]));
    const pieces = Math.floor(span / step);
    for (let j = 1; j < pieces; j += 1) {
      const t = j / pieces;
      out.push([a[0] + (b[0] - a[0]) * t, a[1] + (b[1] - a[1]) * t]);
    }
  }
  return out;
}

/* ----------------------------------------------------------- topojson decode */

/*
 * Decoding by hand rather than depending on `topojson-client`. The format is
 * small: arcs are quantised delta pairs, and a geometry references them by
 * index, where ~i means "arc i, reversed".
 */
function decodeArcs(topology) {
  const { scale, translate } = topology.transform;
  return topology.arcs.map((arc) => {
    let x = 0;
    let y = 0;
    return arc.map(([dx, dy]) => {
      x += dx;
      y += dy;
      return [x * scale[0] + translate[0], y * scale[1] + translate[1]];
    });
  });
}

function ringFrom(arcIndices, arcs) {
  const ring = [];
  for (const index of arcIndices) {
    const reversed = index < 0;
    const arc = arcs[reversed ? ~index : index];
    const points = reversed ? arc.slice().reverse() : arc;
    // The shared endpoint between consecutive arcs would otherwise repeat.
    for (const point of ring.length === 0 ? points : points.slice(1)) ring.push(point);
  }
  return ring;
}

function ringsFrom(geometry, arcs) {
  if (geometry.type === "Polygon") return geometry.arcs.map((r) => ringFrom(r, arcs));
  if (geometry.type === "MultiPolygon") {
    return geometry.arcs.flatMap((polygon) => polygon.map((r) => ringFrom(r, arcs)));
  }
  return [];
}

/* ------------------------------------------------------------------ geometry */

function ringArea(ring) {
  let sum = 0;
  for (let i = 0; i < ring.length; i += 1) {
    const [x1, y1] = ring[i];
    const [x2, y2] = ring[(i + 1) % ring.length];
    sum += x1 * y2 - x2 * y1;
  }
  return sum / 2;
}

/** Area-weighted centroid of a ring, for the marker dot. */
function ringCentroid(ring) {
  let cx = 0;
  let cy = 0;
  let area = 0;
  for (let i = 0; i < ring.length; i += 1) {
    const [x1, y1] = ring[i];
    const [x2, y2] = ring[(i + 1) % ring.length];
    const cross = x1 * y2 - x2 * y1;
    area += cross;
    cx += (x1 + x2) * cross;
    cy += (y1 + y2) * cross;
  }
  area /= 2;
  if (area === 0) return ring[0];
  return [cx / (6 * area), cy / (6 * area)];
}

/* ---------------------------------------------------------- simplification */

/*
 * Ramer–Douglas–Peucker, in projected kilometres.
 *
 * The 1:50m source carries roughly forty times the detail this map renders.
 * Unsimplified it is a 230 kB module, and because the page is a Server
 * Component that is 230 kB of markup on every request — more than the rest of
 * the site's HTML put together. The tolerance is set against the rendered size
 * rather than by eye: the map is at most about 1,100 px wide for a 6,000-unit
 * viewBox, so one pixel is a little over five kilometres and anything below
 * that cannot be seen.
 */
const TOLERANCE = 6;

function segmentDistance([px, py], [ax, ay], [bx, by]) {
  const dx = bx - ax;
  const dy = by - ay;
  const lengthSquared = dx * dx + dy * dy;
  if (lengthSquared === 0) return Math.hypot(px - ax, py - ay);
  let t = ((px - ax) * dx + (py - ay) * dy) / lengthSquared;
  t = Math.max(0, Math.min(1, t));
  return Math.hypot(px - (ax + t * dx), py - (ay + t * dy));
}

function simplifyOpen(points, tolerance) {
  if (points.length < 3) return points;
  let worst = 0;
  let index = 0;
  for (let i = 1; i < points.length - 1; i += 1) {
    const distance = segmentDistance(points[i], points[0], points[points.length - 1]);
    if (distance > worst) {
      worst = distance;
      index = i;
    }
  }
  if (worst <= tolerance) return [points[0], points[points.length - 1]];
  return [
    ...simplifyOpen(points.slice(0, index + 1), tolerance).slice(0, -1),
    ...simplifyOpen(points.slice(index), tolerance),
  ];
}

/**
 * A closed ring has no natural endpoints to anchor the recursion, so it is cut
 * at the point furthest from the first and simplified as two open chains. Rings
 * that would collapse below a triangle are returned whole: losing a microstate
 * to a rounding tolerance would be worse than carrying a few extra points.
 */
function simplifyRing(ring, tolerance) {
  if (ring.length < 5) return ring;
  let furthest = 1;
  let worst = -1;
  for (let i = 1; i < ring.length; i += 1) {
    const distance = Math.hypot(ring[i][0] - ring[0][0], ring[i][1] - ring[0][1]);
    if (distance > worst) {
      worst = distance;
      furthest = i;
    }
  }
  const head = simplifyOpen(ring.slice(0, furthest + 1), tolerance);
  const tail = simplifyOpen([...ring.slice(furthest), ring[0]], tolerance);
  const out = [...head.slice(0, -1), ...tail.slice(0, -1)];
  return out.length >= 3 ? out : ring;
}

/* ------------------------------------------------------------------- output */

/*
 * Whole kilometres. One unit is a fifth of a pixel at the size the map is
 * drawn, so a decimal place would cost a fifth of the file for nothing.
 */
const PRECISION = 0;

function pathFrom(rings) {
  return rings
    .map(
      (ring) =>
        `M${ring
          .map(([x, y]) => `${x.toFixed(PRECISION)} ${y.toFixed(PRECISION)}`)
          .join("L")}Z`,
    )
    .join("");
}

/* --------------------------------------------------------------------- data */

/*
 * Natural Earth's names where they differ from the site's. The site says
 * "Czechia" and "United Kingdom"; the dataset says "Czechia" and "United
 * Kingdom" too at 50m, but the Balkans and the Baltics have historically moved
 * around between releases, so every wing is asserted explicitly and a missing
 * match is a hard error rather than a country quietly vanishing from the map.
 */
const NAME_OVERRIDES = {
  "bosnia-and-herzegovina": "Bosnia and Herz.",
  czechia: "Czechia",
  "north-macedonia": "Macedonia",
  russia: "Russia",
  "united-kingdom": "United Kingdom",
};

/*
 * Land that has no wing but has to be drawn, or the continent would appear to
 * have holes punched in it. Belarus and Turkey are the conspicuous ones; the
 * North African and Levantine coasts are there because the Mediterranean needs
 * a far shore to read as a sea rather than as the edge of the image.
 */
const CONTEXT = [
  "Belarus",
  "Turkey",
  "Morocco",
  "Algeria",
  "Tunisia",
  "Libya",
  "Egypt",
  "Syria",
  "Lebanon",
  "Israel",
  "Palestine",
  "Jordan",
  "Iraq",
  "Iran",
  "Georgia",
  "Armenia",
  "Azerbaijan",
  "Kazakhstan",
  "Turkmenistan",
  "Saudi Arabia",
  "Vatican",
  "Gibraltar",
  "W. Sahara",
  "Faeroe Is.",
  "Isle of Man",
  "Jersey",
  "Guernsey",
  "Åland",
];

/*
 * Russia is a wing, but its extent cannot be allowed to set the frame. The
 * eastern edge of its outline is not a coast — it is wherever the clip window
 * happens to fall — so framing to it would centre the map on an arbitrary line
 * through Siberia and leave Europe small in the corner. The frame is set by
 * every other wing, and Russia runs off the edge, which is what it does on any
 * map of Europe ever drawn.
 */
const FRAME_EXCLUDE = new Set(["russia"]);

/*
 * Rings smaller than this in projected square kilometres are invisible at any
 * size the page renders, and there are thousands of them in the Aegean and the
 * Adriatic. Dropping them is most of the difference between a 200 kB module and
 * a 40 kB one. A country's largest ring is always kept regardless, or the
 * microstates — Monaco is two square kilometres — would fall out of the map
 * entirely.
 */
const SLIVER = 4;

/*
 * Countries below this many square kilometres are flagged so the page can put a
 * marker on them. At the size the map is drawn a country is about
 * `sqrt(area) / 5` pixels across, so anything under fifteen hundred square
 * kilometres is a speck — Monaco, San Marino, Liechtenstein, Andorra and Malta.
 * They are wings like any other and cannot be left looking like empty sea.
 */
const MARKED = 1500;

const biggest = (rings) =>
  rings.reduce((a, b) => (Math.abs(ringArea(b.points)) > Math.abs(ringArea(a.points)) ? b : a));

function significant(rings) {
  const kept = rings.filter((ring) => Math.abs(ringArea(ring.points)) > SLIVER);
  return kept.length > 0 ? kept : [biggest(rings)];
}

/** Whether a ring lies wholly inside FRAMING, and so may set the frame. */
function withinFraming(ring) {
  return ring.every(
    ([lon, lat]) =>
      lon >= FRAMING.west && lon <= FRAMING.east && lat >= FRAMING.south && lat <= FRAMING.north,
  );
}

async function loadTopology() {
  try {
    return JSON.parse(readFileSync(CACHE_FILE, "utf8"));
  } catch {
    process.stdout.write(`fetching ${SOURCE}\n`);
    const response = await fetch(SOURCE);
    if (!response.ok) throw new Error(`${SOURCE} returned ${response.status}`);
    const text = await response.text();
    mkdirSync(CACHE, { recursive: true });
    writeFileSync(CACHE_FILE, text);
    return JSON.parse(text);
  }
}

async function main() {
  const { wings } = await import("../content/wings.ts");
  const topology = await loadTopology();
  const arcs = decodeArcs(topology);

  /** name -> [{ points: projected ring, framing: may set the frame }] */
  const byName = new Map();
  for (const geometry of topology.objects.countries.geometries) {
    const name = geometry.properties.name;
    const rings = ringsFrom(geometry, arcs)
      .map((ring) => clipRing(ring))
      .filter((ring) => ring.length >= 3)
      .map((ring) => ({
        framing: withinFraming(ring),
        points: simplifyRing(densify(ring).map(project), TOLERANCE),
      }));
    if (rings.length > 0) byName.set(name, significant(rings));
  }

  const missing = [];
  const entries = [];
  for (const wing of wings) {
    const name = NAME_OVERRIDES[wing.slug] ?? wing.country;
    const rings = byName.get(name);
    if (!rings) {
      missing.push(`${wing.country} (looked for "${name}")`);
      continue;
    }
    const [cx, cy] = ringCentroid(biggest(rings).points);
    const area = rings.reduce((total, ring) => total + Math.abs(ringArea(ring.points)), 0);
    entries.push({ slug: wing.slug, country: wing.country, rings, cx, cy, small: area < MARKED });
  }

  if (missing.length > 0) {
    throw new Error(
      `No outline for: ${missing.join(", ")}. ` +
        `Add the dataset's spelling to NAME_OVERRIDES in scripts/generate-europe-map.mjs.`,
    );
  }

  /*
   * The points allowed to set the frame: wing land, inside FRAMING, and not an
   * outlying islet of its own country.
   *
   * The last condition is the one that earns its place. FRAMING alone lets
   * through whichever piece of an archipelago happens to fall inside it, and
   * the Azores straddle the western edge — Santa Maria, ninety-seven square
   * kilometres of it, sat just inside and pulled the west of the map out by a
   * quarter of its width, all of it empty Atlantic. Requiring a ring to be at
   * least a hundredth of its country's largest keeps Sicily, Crete, Zealand,
   * Great Britain and Malta, and drops every Azorean island (the largest, São
   * Miguel, is eight thousandths of mainland Portugal).
   */
  const OUTLIER = 0.01;
  const framingPoints = [];
  for (const entry of entries) {
    if (FRAME_EXCLUDE.has(entry.slug)) continue;
    const largest = Math.max(...entry.rings.map((ring) => Math.abs(ringArea(ring.points))));
    for (const ring of entry.rings) {
      if (!ring.framing) continue;
      if (Math.abs(ringArea(ring.points)) < largest * OUTLIER) continue;
      for (const point of ring.points) framingPoints.push({ point, slug: entry.slug });
    }
  }

  let minX = Infinity;
  let minY = Infinity;
  let maxX = -Infinity;
  let maxY = -Infinity;
  for (const { point } of framingPoints) {
    const [x, y] = point;
    if (x < minX) minX = x;
    if (y < minY) minY = y;
    if (x > maxX) maxX = x;
    if (y > maxY) maxY = y;
  }

  if (process.env.MAP_DEBUG) {
    const at = (value, axis) =>
      framingPoints.find(({ point }) => point[axis] === value)?.slug ?? "?";
    process.stdout.write(
      `frame  west ${minX.toFixed(0)} (${at(minX, 0)})  east ${maxX.toFixed(0)} (${at(maxX, 0)})  ` +
        `north ${minY.toFixed(0)} (${at(minY, 1)})  south ${maxY.toFixed(0)} (${at(maxY, 1)})\n`,
    );
  }

  const pad = 90;
  const frame = {
    left: minX - pad,
    top: minY - pad,
    right: maxX + pad,
    bottom: maxY + pad,
  };
  const width = frame.right - frame.left;
  const height = frame.bottom - frame.top;

  /*
   * A second clip, now in projected space against the frame itself. Everything
   * outside it would be shipped in the markup and then drawn off-screen —
   * Russia past the Volga is most of the saving.
   */
  const toFrame = (rings) =>
    rings
      .map((ring) => {
        const lerp = (a, b, t) => [a[0] + (b[0] - a[0]) * t, a[1] + (b[1] - a[1]) * t];
        let out = ring.points;
        out = clipEdge(
          out,
          (p) => p[0] >= frame.left,
          (a, b) => lerp(a, b, (frame.left - a[0]) / (b[0] - a[0])),
        );
        out = clipEdge(
          out,
          (p) => p[0] <= frame.right,
          (a, b) => lerp(a, b, (frame.right - a[0]) / (b[0] - a[0])),
        );
        out = clipEdge(
          out,
          (p) => p[1] >= frame.top,
          (a, b) => lerp(a, b, (frame.top - a[1]) / (b[1] - a[1])),
        );
        out = clipEdge(
          out,
          (p) => p[1] <= frame.bottom,
          (a, b) => lerp(a, b, (frame.bottom - a[1]) / (b[1] - a[1])),
        );
        return out;
      })
      .filter((ring) => ring.length >= 3)
      .map((ring) => ring.map(([x, y]) => [x - frame.left, y - frame.top]));

  const context = [...new Set(CONTEXT)]
    .map((name) => byName.get(name))
    .filter((rings) => rings !== undefined)
    .flatMap((rings) => toFrame(rings));

  const lines = [
    "/**",
    " * Generated by `npm run map` — do not edit.",
    " *",
    " * Country outlines from Natural Earth (public domain) at 1:50m, clipped to a",
    " * window over Europe and projected with EPSG:3035 (Lambert azimuthal",
    " * equal-area, lat_0 52, lon_0 10). See scripts/generate-europe-map.mjs.",
    " */",
    "",
    "export interface MappedWing {",
    "  readonly slug: string;",
    "  readonly country: string;",
    "  /** SVG path in the `viewBox` below. */",
    "  readonly d: string;",
    "  /** Centroid of the country's largest landmass, for the marker. */",
    "  readonly cx: number;",
    "  readonly cy: number;",
    "  /** Too small to read at the size the map is drawn, so it needs a marker. */",
    "  readonly small: boolean;",
    "}",
    "",
    "export const europeViewBox = " +
      JSON.stringify(`0 0 ${width.toFixed(PRECISION)} ${height.toFixed(PRECISION)}`) +
      ";",
    "",
    "/** Land without a wing, drawn recessively so the sea reads as sea. */",
    "export const europeContext = " + JSON.stringify(pathFrom(context)) + ";",
    "",
    "export const europeWings: readonly MappedWing[] = [",
    ...entries.map((entry) => {
      const rings = toFrame(entry.rings);
      return (
        "  {" +
        ` slug: ${JSON.stringify(entry.slug)},` +
        ` country: ${JSON.stringify(entry.country)},` +
        ` cx: ${(entry.cx - frame.left).toFixed(PRECISION)},` +
        ` cy: ${(entry.cy - frame.top).toFixed(PRECISION)},` +
        ` small: ${entry.small},` +
        ` d: ${JSON.stringify(pathFrom(rings))} },`
      );
    }),
    "];",
    "",
  ];

  const target = join(ROOT, "content", "wings-map.ts");
  writeFileSync(target, lines.join("\n"));
  process.stdout.write(
    `wrote content/wings-map.ts — ${entries.length} wings, ` +
      `viewBox 0 0 ${width.toFixed(0)} ${height.toFixed(0)}\n`,
  );
}

await main();
