import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";
import { loadGoogleFont } from "@/lib/og-font";
import { site } from "@/lib/site";

export const alt = `${site.formal} — ${site.tagline}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const HEADLINE = "Europe is worth inheriting.";

export default async function Image() {
  const glyphs = `${site.short}${site.name}${site.tagline}${HEADLINE}`;
  const [serif, sans, crest] = await Promise.all([
    loadGoogleFont("Source Serif 4", 400, glyphs),
    loadGoogleFont("Inter", 500, glyphs),
    readFile(join(process.cwd(), "public/brand/restore-europa-crest.png")),
  ]);

  const fonts = [
    serif ? { name: "Source Serif 4", data: serif, weight: 400 as const, style: "normal" as const } : undefined,
    sans ? { name: "Inter", data: sans, weight: 500 as const, style: "normal" as const } : undefined,
  ].filter((font) => font !== undefined);

  const crestSrc = `data:image/png;base64,${crest.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: "#0A0C0F",
          padding: "68px 76px",
          border: "1px solid #1E2329",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          {/* eslint-disable-next-line @next/next/no-img-element -- Satori renders
              this to a PNG at build time; next/image has no meaning here. */}
          <img src={crestSrc} width={56} height={80} alt="" />
          <span
            style={{
              fontFamily: "Source Serif 4",
              fontSize: 46,
              letterSpacing: 3,
              color: "#F4F1E8",
            }}
          >
            {site.short}
          </span>
          <span style={{ width: 1, height: 34, backgroundColor: "#2C323A", marginLeft: 8 }} />
          <span
            style={{
              fontFamily: "Inter",
              fontSize: 19,
              letterSpacing: 3.2,
              textTransform: "uppercase",
              color: "#8E8B84",
            }}
          >
            {site.name}
          </span>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              fontFamily: "Source Serif 4",
              fontSize: 96,
              lineHeight: 1.04,
              letterSpacing: -2.4,
              color: "#F4F1E8",
            }}
          >
            {HEADLINE}
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ display: "flex", height: 2, backgroundColor: "#C9AD78", width: 92 }} />
          <div
            style={{
              fontFamily: "Inter",
              fontSize: 27,
              marginTop: 26,
              color: "#8E8B84",
            }}
          >
            {site.tagline}
          </div>
        </div>
      </div>
    ),
    { ...size, fonts: fonts.length > 0 ? fonts : undefined },
  );
}
