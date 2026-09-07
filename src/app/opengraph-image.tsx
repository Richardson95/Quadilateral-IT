import { ImageResponse } from "next/og";
import { site } from "@/lib/site";

export const alt = `${site.name} — software, AI and data consultancy`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

/** Generated at build time so every share card stays in sync with site.ts. */
export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 72,
          background:
            "linear-gradient(135deg, #05060d 0%, #0d1030 45%, #1a1350 75%, #06283c 100%)",
          color: "#f2f4fb",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
          <div
            style={{
              width: 56,
              height: 56,
              borderRadius: 16,
              background: "linear-gradient(135deg,#5c8bff,#a855f7,#22d3ee)",
            }}
          />
          <div style={{ fontSize: 30, fontWeight: 700, letterSpacing: -0.5 }}>
            {site.name}
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <div
            style={{
              fontSize: 74,
              fontWeight: 700,
              lineHeight: 1.05,
              letterSpacing: -2,
              maxWidth: 940,
            }}
          >
            We build the software your vision deserves.
          </div>
          <div style={{ fontSize: 30, color: "#a2a9c2", maxWidth: 880 }}>
            Engineering · AI automation · Data · Design · Maintenance · Academy
          </div>
        </div>

        <div style={{ display: "flex", gap: 16, fontSize: 24, color: "#767d99" }}>
          <span>{site.url.replace("https://", "")}</span>
          <span>·</span>
          <span>Lagos, working worldwide</span>
        </div>
      </div>
    ),
    size,
  );
}
