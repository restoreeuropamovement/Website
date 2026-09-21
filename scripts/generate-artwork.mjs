/* eslint-disable @typescript-eslint/no-unused-vars -- see the note below */
/**
 * Generates tonal vector artwork for `public/images`.
 *
 * **Currently dormant.** Every slot in `content/images.ts` now holds a
 * photograph, so this script writes nothing by default and the generators below
 * are unreferenced. It is kept, rather than deleted, as the fallback it was
 * written to be: if a photograph has to come down — a licence question, a
 * subject that turns out to be wrong — a slot can go back to artwork without
 * anybody having to reconstruct several hundred lines of seeded drawing code.
 *
 * To put a slot back: add a `write()` call at the bottom for it, point the slot
 * in `content/images.ts` at the `.svg`, and restore its `placeholder: true` so
 * the page says what it is rather than implying a photograph.
 *
 * Output is deterministic (seeded), so regenerating produces identical files.
 *
 *   node scripts/generate-artwork.mjs
 */

import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");
const OUT = join(ROOT, "public", "images");

/* ---------------------------------------------------------------- palette */

/*
 * A moonlit register, so the artwork sits on the site's near-black ground
 * without reading as a bright hole in the page. Only the values changed: the
 * drawing code depends on the ordering of the ramp rather than on absolute
 * lightness, so `skyHigh` is still above `skyLow` and `L5` still recedes to
 * `ink`, and every composition reads as it did on parchment. The ramp stops
 * well short of pure black — collapsing it onto the page colour would flatten
 * the aerial perspective these scenes are built from.
 */
const P = {
  skyHigh: "#151B24",
  skyLow: "#232C38",
  haze: "#1C242E",
  L5: "#39434F",
  L4: "#303945",
  L3: "#28303A",
  L2: "#212831",
  L1: "#1A2028",
  L0: "#141920",
  ink: "#0D1117",
  stone: "#333C48",
  stoneMid: "#2A323D",
  stoneDeep: "#222932",
  gold: "#C9AD78",
};

/* ------------------------------------------------------------------ maths */

function mulberry32(seed) {
  let a = seed >>> 0;
  return () => {
    a = (a + 0x6d2b79f5) >>> 0;
    let t = a;
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

const n = (v) => Math.round(v * 10) / 10;

/** Smooth ridge line built from a few sine harmonics. */
function hillPoints(width, baseY, amplitude, rng, steps = 96) {
  const phase = rng() * Math.PI * 2;
  const f1 = 0.5 + rng() * 0.7;
  const f2 = 1.6 + rng() * 1.3;
  const f3 = 3.2 + rng() * 2.2;
  const points = [];
  for (let i = 0; i <= steps; i += 1) {
    const t = i / steps;
    const a = Math.sin(t * Math.PI * 2 * f1 + phase);
    const b = Math.sin(t * Math.PI * 2 * f2 + phase * 1.7);
    const c = Math.sin(t * Math.PI * 2 * f3 + phase * 2.6);
    points.push([t * width, baseY - amplitude * (0.58 * a + 0.27 * b + 0.15 * c)]);
  }
  return points;
}

/** Angular skyline for distant mountains. */
function mountainPoints(width, baseY, amplitude, rng, peaks = 7) {
  const points = [[0, baseY - amplitude * 0.15]];
  for (let i = 0; i < peaks; i += 1) {
    const t0 = (i + 0.12 + rng() * 0.18) / peaks;
    const t1 = (i + 0.55 + rng() * 0.2) / peaks;
    const t2 = (i + 1) / peaks;
    points.push([t0 * width, baseY - amplitude * (0.35 + rng() * 0.2)]);
    points.push([t1 * width, baseY - amplitude * (0.72 + rng() * 0.28)]);
    points.push([t2 * width, baseY - amplitude * (0.22 + rng() * 0.22)]);
  }
  points.push([width, baseY - amplitude * 0.2]);
  return points;
}

/** Catmull-Rom through the points, emitted as cubic beziers. */
function smoothPath(points) {
  let d = `M${n(points[0][0])},${n(points[0][1])}`;
  for (let i = 0; i < points.length - 1; i += 1) {
    const p0 = points[Math.max(0, i - 1)];
    const p1 = points[i];
    const p2 = points[i + 1];
    const p3 = points[Math.min(points.length - 1, i + 2)];
    const c1x = p1[0] + (p2[0] - p0[0]) / 6;
    const c1y = p1[1] + (p2[1] - p0[1]) / 6;
    const c2x = p2[0] - (p3[0] - p1[0]) / 6;
    const c2y = p2[1] - (p3[1] - p1[1]) / 6;
    d += `C${n(c1x)},${n(c1y)} ${n(c2x)},${n(c2y)} ${n(p2[0])},${n(p2[1])}`;
  }
  return d;
}

const linePath = (points) =>
  points.map(([x, y], i) => `${i === 0 ? "M" : "L"}${n(x)},${n(y)}`).join("");

const closeTo = (d, width, height) => `${d}L${n(width)},${n(height)}L0,${n(height)}Z`;

/* ------------------------------------------------------------- vocabulary */

/** Fine horizontal hatching — an engraver's sky. */
function hatch(width, top, bottom, colour, opacity, rows = 26) {
  let out = "";
  for (let i = 0; i < rows; i += 1) {
    const t = i / (rows - 1);
    const y = top + (bottom - top) * Math.pow(t, 0.55);
    const o = (opacity * (1 - t * 0.85)).toFixed(3);
    const inset = width * 0.02 * (1 - t);
    out += `<line x1="${n(inset)}" y1="${n(y)}" x2="${n(width - inset)}" y2="${n(y)}" stroke="${colour}" stroke-width="1.1" opacity="${o}"/>`;
  }
  return out;
}

function house(x, groundY, w, h, rng, pitch = 0.55) {
  const roof = h * pitch;
  const eave = groundY - h;
  const overhang = w * 0.07;
  let d = `M${n(x)},${n(groundY)}V${n(eave)}H${n(x + w)}V${n(groundY)}Z`;
  d += `M${n(x - overhang)},${n(eave)}L${n(x + w / 2)},${n(eave - roof)}L${n(x + w + overhang)},${n(eave)}Z`;
  if (rng() > 0.45) {
    const cx = x + w * (0.6 + rng() * 0.22);
    d += `M${n(cx)},${n(eave - roof * 0.55)}h${n(w * 0.1)}v${n(-h * 0.3)}h${n(-w * 0.1)}Z`;
  }
  return d;
}

function church(x, groundY, scale) {
  const navW = 34 * scale;
  const navH = 20 * scale;
  const towerW = 11 * scale;
  const towerH = 46 * scale;
  const spire = 20 * scale;
  let d = `M${n(x)},${n(groundY)}V${n(groundY - navH)}H${n(x + navW)}V${n(groundY)}Z`;
  d += `M${n(x - navW * 0.04)},${n(groundY - navH)}L${n(x + navW / 2)},${n(groundY - navH - navH * 0.5)}L${n(x + navW * 1.04)},${n(groundY - navH)}Z`;
  const tx = x + navW - towerW * 0.4;
  d += `M${n(tx)},${n(groundY)}V${n(groundY - towerH)}H${n(tx + towerW)}V${n(groundY)}Z`;
  d += `M${n(tx - towerW * 0.16)},${n(groundY - towerH)}L${n(tx + towerW / 2)},${n(groundY - towerH - spire)}L${n(tx + towerW * 1.16)},${n(groundY - towerH)}Z`;
  const cx = tx + towerW / 2;
  const cy = groundY - towerH - spire;
  d += `M${n(cx - 0.9 * scale)},${n(cy - 2.2 * scale)}h${n(1.8 * scale)}v${n(2.2 * scale)}h${n(-1.8 * scale)}Z`;
  d += `M${n(cx - 3 * scale)},${n(cy - 5.4 * scale)}h${n(6 * scale)}v${n(1.5 * scale)}h${n(-6 * scale)}Z`;
  d += `M${n(cx - 0.75 * scale)},${n(cy - 9 * scale)}h${n(1.5 * scale)}v${n(7 * scale)}h${n(-1.5 * scale)}Z`;
  return d;
}

function conifer(x, groundY, h) {
  const w = h * 0.42;
  let d = `M${n(x - w * 0.09)},${n(groundY)}h${n(w * 0.18)}v${n(-h * 0.22)}h${n(-w * 0.18)}Z`;
  for (let i = 0; i < 3; i += 1) {
    const top = groundY - h * (0.45 + i * 0.22);
    const base = groundY - h * (0.16 + i * 0.22);
    const spread = (w / 2) * (1 - i * 0.22);
    d += `M${n(x - spread)},${n(base)}L${n(x)},${n(top)}L${n(x + spread)},${n(base)}Z`;
  }
  return d;
}

function broadleaf(x, groundY, h, rng) {
  const r = h * 0.34;
  let d = `M${n(x - h * 0.028)},${n(groundY)}h${n(h * 0.056)}v${n(-h * 0.42)}h${n(-h * 0.056)}Z`;
  for (let i = 0; i < 4; i += 1) {
    const cx = x + (rng() - 0.5) * r * 1.15;
    const cy = groundY - h * 0.62 + (rng() - 0.5) * r * 0.7;
    const rr = r * (0.55 + rng() * 0.42);
    d += `M${n(cx - rr)},${n(cy)}a${n(rr)},${n(rr)} 0 1,0 ${n(rr * 2)},0a${n(rr)},${n(rr)} 0 1,0 ${n(-rr * 2)},0Z`;
  }
  return d;
}

function treeline(x0, x1, groundY, h, rng, density = 0.024) {
  let d = "";
  const count = Math.max(3, Math.round((x1 - x0) * density));
  for (let i = 0; i < count; i += 1) {
    const x = x0 + ((x1 - x0) * (i + rng() * 0.8)) / count;
    const hh = h * (0.7 + rng() * 0.6);
    d += rng() > 0.45 ? conifer(x, groundY, hh) : broadleaf(x, groundY, hh, rng);
  }
  return d;
}

/**
 * A continuous wood: overlapping crowns reading as one mass rather than as dots.
 * `undulate` varies the canopy height across the span so the stand does not read
 * as a clipped hedge.
 */
function forestMass(x0, x1, groundY, h, rng, step = 0.013, undulate = 0.3) {
  let d = `M${n(x0)},${n(groundY)}H${n(x1)}V${n(groundY + h * 0.2)}H${n(x0)}Z`;
  const count = Math.max(6, Math.round((x1 - x0) * step));
  const phase = rng() * Math.PI * 2;
  const freq = 0.8 + rng() * 1.4;
  for (let i = 0; i <= count; i += 1) {
    const t = i / count;
    const x = x0 + (x1 - x0) * t + (rng() - 0.5) * h * 0.3;
    const swell =
      1 + undulate * (0.7 * Math.sin(t * Math.PI * 2 * freq + phase) + 0.3 * Math.sin(t * Math.PI * 5.3 + phase));
    const hh = h * (0.6 + rng() * 0.6) * swell;
    d += rng() > 0.52 ? conifer(x, groundY + h * 0.1, hh) : broadleaf(x, groundY + h * 0.1, hh, rng);
  }
  return d;
}

/**
 * A row of gable-ended town houses with windows. Returns each material as a
 * separate path so the caller can fill them independently.
 */
function facadeRow({ x0, x1, groundY, minH, maxH, rng, pitch = 0.36, doors = true }) {
  let bodies = "";
  let roofs = "";
  let windows = "";
  let x = x0;

  while (x < x1) {
    const h = minH + rng() * (maxH - minH);
    const w = h * (0.42 + rng() * 0.3);
    const eave = groundY - h;
    const roof = w * pitch;

    bodies += `M${n(x)},${n(groundY)}V${n(eave)}H${n(x + w)}V${n(groundY)}Z`;
    roofs += `M${n(x - w * 0.045)},${n(eave)}L${n(x + w / 2)},${n(eave - roof)}L${n(x + w * 1.045)},${n(eave)}Z`;
    roofs += `M${n(x - w * 0.045)},${n(eave)}h${n(w * 1.09)}v${n(h * 0.022)}h${n(-w * 1.09)}Z`;

    const cols = Math.max(2, Math.round(w / (h * 0.26)));
    const rows = Math.max(2, Math.floor((h * 0.78) / (h * 0.24)));
    const ww = w / (cols * 2.15);
    const wh = ww * 1.5;
    for (let r = 0; r < rows; r += 1) {
      for (let c = 0; c < cols; c += 1) {
        const wx = x + (w * (c + 0.5)) / cols - ww / 2;
        const wy = eave + h * 0.1 + r * (h * 0.78) / rows;
        if (wy + wh > groundY - h * 0.05) continue;
        windows += `M${n(wx)},${n(wy)}h${n(ww)}v${n(wh)}h${n(-ww)}Z`;
      }
    }
    // A small opening in the gable, and a doorway at street level.
    windows += `M${n(x + w / 2 - ww * 0.4)},${n(eave - roof * 0.62)}h${n(ww * 0.8)}v${n(wh * 0.55)}h${n(-ww * 0.8)}Z`;
    if (doors) {
      const dw = ww * 1.25;
      windows += `M${n(x + w * (0.3 + rng() * 0.4) - dw / 2)},${n(groundY)}v${n(-wh * 1.35)}h${n(dw)}v${n(wh * 1.35)}Z`;
    }

    x += w * (1.015 + rng() * 0.05);
  }

  return { bodies, roofs, windows };
}

/** Semicircular arch as a closed outline of constant wall thickness. */
function archOutline(cx, springY, outerR, thickness, footY) {
  const innerR = outerR - thickness;
  return (
    `M${n(cx - outerR)},${n(footY)}V${n(springY)}` +
    `A${n(outerR)},${n(outerR)} 0 0 1 ${n(cx + outerR)},${n(springY)}` +
    `V${n(footY)}H${n(cx + innerR)}V${n(springY)}` +
    `A${n(innerR)},${n(innerR)} 0 0 0 ${n(cx - innerR)},${n(springY)}` +
    `V${n(footY)}Z`
  );
}

function svg(width, height, body, title) {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${width} ${height}" width="${width}" height="${height}" role="img" aria-label="${title}"><title>${title}</title>${body}</svg>\n`;
}

function write(name, contents) {
  const file = join(OUT, name);
  mkdirSync(dirname(file), { recursive: true });
  writeFileSync(file, contents, "utf8");
  console.log(`  ${name}  ${(contents.length / 1024).toFixed(1)} kB`);
}

/* ---------------------------------------------------------------- scenes */

/** A cultivated valley: mountains, a village around its church, terraced fields. */
/*
 * Currently unused: the two valley slots hold photographs. Kept rather than
 * deleted because a slot can go back to artwork — if a photograph turns out to
 * be wrong for a page, regenerating is one `write()` call away, whereas
 * recovering this from history is not obvious to whoever needs it.
 */
function valley({ width, height, seed, horizon = 0.5 }) {
  const rng = mulberry32(seed);
  const hz = height * horizon;
  let s = "";

  s += `<rect width="${width}" height="${height}" fill="${P.skyLow}"/>`;
  s += `<rect width="${width}" height="${n(hz * 1.02)}" fill="${P.skyHigh}"/>`;
  s += hatch(width, hz * 0.18, hz * 0.99, P.L4, 0.3, 30);

  // Far range
  s += `<path d="${closeTo(linePath(mountainPoints(width, hz, height * 0.3, rng, 6)), width, height)}" fill="${P.L5}"/>`;
  // Second range
  s += `<path d="${closeTo(linePath(mountainPoints(width, hz + height * 0.045, height * 0.21, rng, 9)), width, height)}" fill="${P.L4}"/>`;
  // Wooded hills
  const hillsY = hz + height * 0.115;
  s += `<path d="${closeTo(smoothPath(hillPoints(width, hillsY, height * 0.075, rng)), width, height)}" fill="${P.L3}"/>`;
  s += `<path d="${forestMass(-width * 0.02, width * 1.02, hillsY + height * 0.055, height * 0.05, rng, 0.016)}" fill="${P.L2}" opacity="0.7"/>`;

  // Settlement shelf
  const shelfY = hz + height * 0.26;
  s += `<path d="${closeTo(smoothPath(hillPoints(width, shelfY, height * 0.035, rng)), width, height)}" fill="${P.L2}"/>`;

  // Village, gathered around the church
  const vx = width * 0.5;
  const scale = height * 0.0042;
  let village = church(vx, shelfY + height * 0.012, scale);
  const houses = 16;
  for (let i = 0; i < houses; i += 1) {
    const side = i % 2 === 0 ? -1 : 1;
    const step = Math.floor(i / 2) + 1;
    const x = vx + side * step * width * (0.019 + rng() * 0.012);
    const w = width * (0.016 + rng() * 0.012);
    const h = height * (0.026 + rng() * 0.022);
    const g = shelfY + height * (0.012 + rng() * 0.016);
    village += house(x, g, w, h, rng);
  }
  s += `<path d="${village}" fill="${P.L1}"/>`;
  s += `<path d="${treeline(width * 0.06, width * 0.94, shelfY + height * 0.026, height * 0.03, rng, 0.012)}" fill="${P.L1}" opacity="0.9"/>`;

  // Terraced fields in the foreground
  const bands = 6;
  for (let i = 0; i < bands; i += 1) {
    const t = i / bands;
    const y = shelfY + height * 0.045 + (height - shelfY - height * 0.045) * Math.pow(t, 1.25);
    const amp = height * (0.014 + t * 0.026);
    const pts = smoothPath(hillPoints(width, y, amp, rng, 40));
    const shade = i % 2 === 0 ? P.L1 : P.L0;
    s += `<path d="${closeTo(pts, width, height)}" fill="${shade}" opacity="${(0.55 + t * 0.45).toFixed(2)}"/>`;
    if (i % 2 === 1) {
      s += `<path d="${pts}" fill="none" stroke="${P.L2}" stroke-width="${n(height * 0.0016)}" opacity="0.35"/>`;
      s += `<path d="${treeline(-width * 0.02, width * 1.02, y + height * 0.004, height * (0.018 + t * 0.035), rng, 0.0035)}" fill="${P.L0}" opacity="${(0.55 + t * 0.4).toFixed(2)}"/>`;
    }
  }

  // Hedgerow closing the foreground
  s += `<path d="${forestMass(-width * 0.02, width * 1.02, height * 0.94, height * 0.1, rng, 0.009)}" fill="${P.ink}"/>`;

  return s;
}

/** Managed woodland on rolling hills above open meadow. */
function woodland({ width, height, seed }) {
  const rng = mulberry32(seed);
  const hz = height * 0.3;
  let s = "";

  s += `<rect width="${width}" height="${height}" fill="${P.skyLow}"/>`;
  s += hatch(width, height * 0.03, hz * 0.99, P.L4, 0.3, 20);

  // Distant ranges
  s += `<path d="${closeTo(smoothPath(hillPoints(width, hz, height * 0.1, rng)), width, height)}" fill="${P.L5}"/>`;
  s += `<path d="${closeTo(smoothPath(hillPoints(width, hz + height * 0.09, height * 0.07, rng)), width, height)}" fill="${P.L4}"/>`;

  // Wooded slopes: each stand sits on its own hillside, so the canopy follows
  // the ground rather than forming a straight hedge.
  const slopes = [
    { y: hz + height * 0.16, amp: 0.05, tree: 0.075, ground: P.L4, wood: P.L3, step: 0.017 },
    { y: hz + height * 0.3, amp: 0.045, tree: 0.1, ground: P.L3, wood: P.L2, step: 0.013 },
  ];
  for (const slope of slopes) {
    const pts = hillPoints(width, slope.y, height * slope.amp, rng, 40);
    s += `<path d="${closeTo(smoothPath(pts), width, height)}" fill="${slope.ground}"/>`;
    let canopy = "";
    for (let i = 0; i < pts.length; i += 1) {
      const [x, y] = pts[i];
      if (i % 2 !== 0) continue;
      const hh = height * slope.tree * (0.65 + rng() * 0.7);
      canopy += rng() > 0.5 ? conifer(x, y + height * 0.012, hh) : broadleaf(x, y + height * 0.012, hh, rng);
    }
    s += `<path d="${canopy}" fill="${slope.wood}"/>`;
  }

  // A clearing of open meadow, with the field boundary that encloses it
  const meadow = hillPoints(width, height * 0.72, height * 0.022, rng, 30);
  s += `<path d="${closeTo(smoothPath(meadow), width, height)}" fill="${P.L3}" opacity="0.72"/>`;
  s += `<path d="${smoothPath(meadow)}" fill="none" stroke="${P.L1}" stroke-width="${n(height * 0.003)}" opacity="0.35"/>`;

  const lower = hillPoints(width, height * 0.83, height * 0.02, rng, 26);
  s += `<path d="${closeTo(smoothPath(lower), width, height)}" fill="${P.L1}" opacity="0.85"/>`;

  // Foreground: a copse on either side and standing timber at the very front
  s += `<path d="${forestMass(-width * 0.04, width * 0.24, height * 0.98, height * 0.28, rng, 0.016, 0.25)}" fill="${P.L0}"/>`;
  s += `<path d="${forestMass(width * 0.79, width * 1.04, height * 0.99, height * 0.3, rng, 0.016, 0.25)}" fill="${P.L0}"/>`;
  s += `<path d="${closeTo(smoothPath(hillPoints(width, height * 0.95, height * 0.018, rng, 18)), width, height)}" fill="${P.ink}"/>`;
  s += `<path d="${treeline(width * 0.28, width * 0.74, height * 0.955, height * 0.11, rng, 0.004)}" fill="${P.ink}"/>`;

  return s;
}

/** A Romanesque arcade drawn in elevation. */
function arcade({ width, height, seed, bays = 5 }) {
  const rng = mulberry32(seed);
  let s = `<rect width="${width}" height="${height}" fill="${P.stone}"/>`;

  const footY = height * 0.86;
  const bayW = width / bays;
  const outerR = bayW * 0.42;
  const springY = height * 0.46;
  const thickness = bayW * 0.1;

  // Recessed ground behind the arcade
  s += `<rect y="${n(springY - outerR)}" width="${width}" height="${n(footY - springY + outerR)}" fill="${P.stoneMid}"/>`;

  for (let i = 0; i < bays; i += 1) {
    const cx = bayW * (i + 0.5);
    // Shadowed opening
    s +=
      `<path d="M${n(cx - outerR + thickness)},${n(footY)}V${n(springY)}` +
      `A${n(outerR - thickness)},${n(outerR - thickness)} 0 0 1 ${n(cx + outerR - thickness)},${n(springY)}V${n(footY)}Z" fill="${P.stoneDeep}"/>`;
    s += `<path d="${archOutline(cx, springY, outerR, thickness, footY)}" fill="${P.L4}"/>`;
    // Impost block
    s += `<rect x="${n(cx - outerR - thickness * 0.35)}" y="${n(springY - thickness * 0.28)}" width="${n(thickness * 1.7)}" height="${n(thickness * 0.34)}" fill="${P.L3}"/>`;
    s += `<rect x="${n(cx + outerR - thickness * 1.35)}" y="${n(springY - thickness * 0.28)}" width="${n(thickness * 1.7)}" height="${n(thickness * 0.34)}" fill="${P.L3}"/>`;
  }

  // Entablature and plinth
  s += `<rect y="${n(springY - outerR - height * 0.1)}" width="${width}" height="${n(height * 0.062)}" fill="${P.L4}"/>`;
  s += `<rect y="${n(springY - outerR - height * 0.041)}" width="${width}" height="${n(height * 0.016)}" fill="${P.L3}"/>`;
  s += `<rect y="${n(footY)}" width="${width}" height="${n(height * 0.035)}" fill="${P.L2}"/>`;
  s += `<rect y="${n(footY + height * 0.035)}" width="${width}" height="${n(height * 0.11)}" fill="${P.L1}"/>`;

  // Ashlar joints on the entablature
  for (let i = 0; i < bays * 4; i += 1) {
    const x = (width / (bays * 4)) * (i + 0.5 + (rng() - 0.5) * 0.1);
    s += `<line x1="${n(x)}" y1="${n(springY - outerR - height * 0.1)}" x2="${n(x)}" y2="${n(springY - outerR - height * 0.041)}" stroke="${P.L3}" stroke-width="1.4" opacity="0.6"/>`;
  }

  return s;
}

/** A square in an old town: two ranks of facades and a church behind them. */
/* Unused for the same reason as `valley`: the old town slot holds a photograph. */
function oldTown({ width, height, seed }) {
  const rng = mulberry32(seed);
  const hz = height * 0.3;
  let s = `<rect width="${width}" height="${height}" fill="${P.skyLow}"/>`;
  s += hatch(width, height * 0.03, hz * 0.99, P.L4, 0.26, 18);
  s += `<path d="${closeTo(smoothPath(hillPoints(width, hz, height * 0.08, rng)), width, height)}" fill="${P.L5}"/>`;

  const streetY = height * 0.88;

  // The church rises behind the near side of the square.
  s += `<path d="${church(width * 0.62, streetY, height * 0.0075)}" fill="${P.L4}"/>`;

  // Rank set back from the square
  const back = facadeRow({
    x0: -width * 0.04,
    x1: width * 1.04,
    groundY: streetY - height * 0.01,
    minH: height * 0.3,
    maxH: height * 0.46,
    rng,
    pitch: 0.34,
    doors: false,
  });
  s += `<path d="${back.bodies}" fill="${P.L4}"/>`;
  s += `<path d="${back.roofs}" fill="${P.L3}"/>`;
  s += `<path d="${back.windows}" fill="${P.L2}" opacity="0.75"/>`;

  // Near rank, fronting the square
  const front = facadeRow({
    x0: -width * 0.05,
    x1: width * 1.05,
    groundY: streetY,
    minH: height * 0.36,
    maxH: height * 0.58,
    rng,
    pitch: 0.4,
  });
  s += `<path d="${front.bodies}" fill="${P.L2}"/>`;
  s += `<path d="${front.roofs}" fill="${P.L1}"/>`;
  s += `<path d="${front.windows}" fill="${P.stoneMid}" opacity="0.62"/>`;

  // Paving, and the shadow the facades throw across it
  s += `<rect y="${n(streetY)}" width="${width}" height="${n(height - streetY)}" fill="${P.L3}"/>`;
  s += `<rect y="${n(streetY)}" width="${width}" height="${n(height * 0.035)}" fill="${P.L1}" opacity="0.55"/>`;
  for (let i = 1; i < 7; i += 1) {
    const y = streetY + (height - streetY) * (i / 7);
    s += `<line x1="0" y1="${n(y)}" x2="${width}" y2="${n(y)}" stroke="${P.L2}" stroke-width="1.6" opacity="0.32"/>`;
  }

  return s;
}

/** A workshop: light falling through a tall window onto a bench. */
function workshop({ width, height, seed }) {
  const rng = mulberry32(seed);
  let s = `<rect width="${width}" height="${height}" fill="${P.L1}"/>`;

  const wx = width * 0.3;
  const ww = width * 0.4;
  const wy = height * 0.12;
  const springY = wy + ww * 0.5;
  const cx = wx + ww / 2;

  // Daylight spilling into the room
  s +=
    `<path d="M${n(wx)},${n(height * 0.72)}L${n(wx + ww)},${n(height * 0.72)}` +
    `L${n(width * 0.96)},${n(height)}L${n(width * 0.04)},${n(height)}Z" fill="${P.L0}" opacity="0.5"/>`;

  // Window reveal, then the bright opening
  s += `<path d="M${n(wx - ww * 0.06)},${n(height * 0.74)}V${n(springY)}A${n(ww * 0.56)},${n(ww * 0.56)} 0 0 1 ${n(wx + ww * 1.06)},${n(springY)}V${n(height * 0.74)}Z" fill="${P.L2}"/>`;
  s += `<path d="M${n(wx)},${n(height * 0.72)}V${n(springY)}A${n(ww * 0.5)},${n(ww * 0.5)} 0 0 1 ${n(wx + ww)},${n(springY)}V${n(height * 0.72)}Z" fill="${P.skyHigh}"/>`;

  // Glazing bars
  s += `<line x1="${n(cx)}" y1="${n(wy)}" x2="${n(cx)}" y2="${n(height * 0.72)}" stroke="${P.L2}" stroke-width="${n(width * 0.006)}"/>`;
  for (let i = 1; i < 4; i += 1) {
    const y = springY + ((height * 0.72 - springY) * i) / 4;
    s += `<line x1="${n(wx)}" y1="${n(y)}" x2="${n(wx + ww)}" y2="${n(y)}" stroke="${P.L2}" stroke-width="${n(width * 0.005)}"/>`;
  }

  // Bench and tools, in silhouette
  const benchY = height * 0.78;
  let bench = `M${n(width * 0.12)},${n(benchY)}h${n(width * 0.76)}v${n(height * 0.045)}h${n(-width * 0.76)}Z`;
  bench += `M${n(width * 0.17)},${n(benchY + height * 0.045)}h${n(width * 0.035)}v${n(height * 0.17)}h${n(-width * 0.035)}Z`;
  bench += `M${n(width * 0.795)},${n(benchY + height * 0.045)}h${n(width * 0.035)}v${n(height * 0.17)}h${n(-width * 0.035)}Z`;
  for (let i = 0; i < 5; i += 1) {
    const x = width * (0.24 + i * 0.12 + rng() * 0.02);
    const h = height * (0.05 + rng() * 0.07);
    const w = width * (0.012 + rng() * 0.02);
    bench += `M${n(x)},${n(benchY)}v${n(-h)}h${n(w)}v${n(h)}Z`;
  }
  s += `<path d="${bench}" fill="${P.ink}"/>`;

  return s;
}

/** Abstract architectural fragments for journal headers. */
function fragment({ width, height, seed, variant }) {
  const rng = mulberry32(seed);
  let s = `<rect width="${width}" height="${height}" fill="${P.stone}"/>`;

  if (variant === "vault") {
    // A ribbed vault seen from below: alternating cells, ribs, then the boss.
    const cx = width / 2;
    const cy = height * 1.04;
    const spokes = 8;
    const R = height * 1.2;
    for (let i = 0; i < spokes; i += 1) {
      const a0 = Math.PI + (Math.PI * i) / spokes;
      const a1 = Math.PI + (Math.PI * (i + 1)) / spokes;
      s +=
        `<path d="M${n(cx)},${n(cy)}L${n(cx + Math.cos(a0) * R)},${n(cy + Math.sin(a0) * R)}` +
        `A${n(R)},${n(R)} 0 0 1 ${n(cx + Math.cos(a1) * R)},${n(cy + Math.sin(a1) * R)}Z" ` +
        `fill="${i % 2 === 0 ? P.stoneMid : P.stoneDeep}" opacity="0.55"/>`;
    }
    for (let i = 0; i <= spokes; i += 1) {
      const a = Math.PI + (Math.PI * i) / spokes;
      s += `<line x1="${n(cx)}" y1="${n(cy)}" x2="${n(cx + Math.cos(a) * R)}" y2="${n(cy + Math.sin(a) * R)}" stroke="${P.L3}" stroke-width="${n(width * 0.009)}"/>`;
    }
    for (let i = 1; i <= 3; i += 1) {
      const r = height * 0.3 * i;
      s += `<path d="M${n(cx - r)},${n(cy)}A${n(r)},${n(r)} 0 0 1 ${n(cx + r)},${n(cy)}" fill="none" stroke="${P.L4}" stroke-width="${n(width * 0.006)}"/>`;
    }
    s += `<circle cx="${n(cx)}" cy="${n(cy)}" r="${n(height * 0.075)}" fill="${P.L2}"/>`;
    s += `<circle cx="${n(cx)}" cy="${n(cy)}" r="${n(height * 0.045)}" fill="${P.stoneMid}"/>`;
  } else if (variant === "colonnade") {
    const cols = 9;
    for (let i = 0; i < cols; i += 1) {
      const x = (width / cols) * (i + 0.5);
      const w = width * 0.028;
      const top = height * (0.18 + (i % 3) * 0.015);
      s += `<rect x="${n(x - w / 2)}" y="${n(top)}" width="${n(w)}" height="${n(height * 0.72 - top)}" fill="${P.L4}" opacity="${(0.55 + (i % 3) * 0.16).toFixed(2)}"/>`;
      s += `<rect x="${n(x - w * 0.85)}" y="${n(top - height * 0.035)}" width="${n(w * 1.7)}" height="${n(height * 0.035)}" fill="${P.L3}"/>`;
      s += `<rect x="${n(x - w * 0.85)}" y="${n(height * 0.72)}" width="${n(w * 1.7)}" height="${n(height * 0.03)}" fill="${P.L3}"/>`;
    }
    s += `<rect y="${n(height * 0.08)}" width="${width}" height="${n(height * 0.055)}" fill="${P.L4}"/>`;
    s += `<rect y="${n(height * 0.75)}" width="${width}" height="${n(height * 0.25)}" fill="${P.stoneMid}"/>`;
    s += `<rect y="${n(height * 0.75)}" width="${width}" height="${n(height * 0.02)}" fill="${P.L3}"/>`;
  } else if (variant === "tracery") {
    const cx = width / 2;
    const r = height * 0.34;
    const cy = height * 0.48;
    s += `<circle cx="${n(cx)}" cy="${n(cy)}" r="${n(r)}" fill="none" stroke="${P.L4}" stroke-width="${n(width * 0.005)}"/>`;
    s += `<circle cx="${n(cx)}" cy="${n(cy)}" r="${n(r * 0.62)}" fill="none" stroke="${P.L4}" stroke-width="${n(width * 0.004)}"/>`;
    for (let i = 0; i < 12; i += 1) {
      const a = (Math.PI * 2 * i) / 12;
      const px = cx + Math.cos(a) * r * 0.81;
      const py = cy + Math.sin(a) * r * 0.81;
      s += `<circle cx="${n(px)}" cy="${n(py)}" r="${n(r * 0.17)}" fill="none" stroke="${P.stoneDeep}" stroke-width="${n(width * 0.0035)}"/>`;
      s += `<line x1="${n(cx + Math.cos(a) * r * 0.62)}" y1="${n(cy + Math.sin(a) * r * 0.62)}" x2="${n(px)}" y2="${n(py)}" stroke="${P.stoneDeep}" stroke-width="${n(width * 0.003)}"/>`;
    }
    s += `<circle cx="${n(cx)}" cy="${n(cy)}" r="${n(r * 0.2)}" fill="${P.L4}" opacity="0.5"/>`;
  } else if (variant === "terraces") {
    // Cultivated ground stepping away from the viewer, divided by hedgerows.
    s += `<rect width="${width}" height="${n(height * 0.2)}" fill="${P.skyHigh}"/>`;
    s += hatch(width, height * 0.02, height * 0.2, P.L4, 0.3, 12);
    s += `<path d="${closeTo(smoothPath(hillPoints(width, height * 0.2, height * 0.05, rng)), width, height)}" fill="${P.L5}"/>`;
    s += `<path d="${forestMass(-width * 0.03, width * 1.03, height * 0.27, height * 0.09, rng, 0.018)}" fill="${P.L4}"/>`;

    const rows = 6;
    for (let i = 0; i < rows; i += 1) {
      const t = i / (rows - 1);
      const y = height * (0.32 + t * 0.66);
      const pts = smoothPath(hillPoints(width, y, height * (0.012 + t * 0.028), rng, 34));
      s += `<path d="${closeTo(pts, width, height)}" fill="${P.L3}" opacity="${(0.3 + t * 0.65).toFixed(2)}"/>`;
      if (i > 0 && i < rows - 1) {
        s += `<path d="${pts}" fill="none" stroke="${P.L1}" stroke-width="${n(height * 0.0035)}" opacity="0.4"/>`;
        s += `<path d="${treeline(-width * 0.02, width * 1.02, y + height * 0.006, height * (0.04 + t * 0.05), rng, 0.004 + t * 0.002)}" fill="${P.L1}" opacity="${(0.5 + t * 0.45).toFixed(2)}"/>`;
      }
    }
    // A single farmstead, for scale
    s += `<path d="${house(width * 0.2, height * 0.66, width * 0.05, height * 0.075, rng, 0.45)}" fill="${P.L0}"/>`;
    s += `<path d="${forestMass(-width * 0.02, width * 1.02, height * 1.01, height * 0.16, rng, 0.012)}" fill="${P.ink}"/>`;
  } else {
    // "portal"
    const cx = width / 2;
    const outerR = height * 0.38;
    for (let i = 4; i >= 1; i -= 1) {
      const r = outerR * (0.55 + i * 0.13);
      s += `<path d="${archOutline(cx, height * 0.56, r, height * 0.035, height * 0.9)}" fill="${P.L4}" opacity="${(0.28 + i * 0.13).toFixed(2)}"/>`;
    }
    s += `<rect y="${n(height * 0.9)}" width="${width}" height="${n(height * 0.1)}" fill="${P.L3}"/>`;
  }

  return s;
}

/* ------------------------------------------------------------------ build */

mkdirSync(OUT, { recursive: true });

/*
 * Nothing is generated. Every slot in content/images.ts holds a photograph, so
 * emitting SVGs here would only scatter unreferenced files through
 * public/images — which is exactly what happened the first time these calls
 * were left in place after a slot was filled.
 *
 * To bring a slot back, add its call here. The generators above are intact and
 * the seeds that produced the original artwork are recorded in git history.
 */
console.log(
  "Nothing to generate: every image slot holds a photograph.\n" +
    "See content/images.ts, and the note at the top of this file to revert a slot."
);
