import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";
import { OG_IMAGE_SIZE } from "@/lib/site";

// Same tokens as src/styles/tokens.css (Resend's dark register)
const COLORS = {
  canvas: "#000000",
  ink: "#fcfdff",
  charcoal: "rgba(252,253,255,0.7)",
  mute: "#a1a4a5",
  hairline: "rgba(255,255,255,0.14)",
  green: "#11ff99",
};

const STACK = "sGTM · GA4 · Meta CAPI · Consent Mode v2 · BigQuery · React · three.js";

function loadFont(file: string): Promise<Buffer> {
  return readFile(join(process.cwd(), "assets/fonts", file));
}

function Door({ index, label, lead, accent }: { index: string; label: string; lead: string; accent: string }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", flex: 1, padding: "0 56px", gap: 18 }}>
      <div style={{ display: "flex", fontFamily: "Geist Mono", fontSize: 20, letterSpacing: 2, color: COLORS.mute }}>
        {`${index} · ${label.toUpperCase()}`}
      </div>
      <div style={{ display: "flex", flexDirection: "column", fontFamily: "Instrument Serif", fontSize: 92, lineHeight: 0.98 }}>
        <span>{lead}</span>
        <span style={{ fontStyle: "italic", color: COLORS.charcoal }}>{accent}</span>
      </div>
    </div>
  );
}

export async function renderOgImage(): Promise<ImageResponse> {
  const [serif, serifItalic, sans, mono] = await Promise.all([
    loadFont("instrument-serif-latin-400-normal.woff"),
    loadFont("instrument-serif-latin-400-italic.woff"),
    loadFont("geist-latin-400-normal.woff"),
    loadFont("geist-mono-latin-400-normal.woff"),
  ]);

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "52px 0 44px",
          background: COLORS.canvas,
          backgroundImage:
            "radial-gradient(circle at 22% 0%, rgba(0,117,255,0.30), transparent 42%), radial-gradient(circle at 80% 0%, rgba(255,89,0,0.26), transparent 42%)",
          color: COLORS.ink,
          fontFamily: "Geist",
        }}
      >
        <div style={{ display: "flex", justifyContent: "space-between", padding: "0 56px", fontSize: 24 }}>
          <span>Matthew Klette</span>
          <span style={{ display: "flex", alignItems: "center", gap: 10, fontFamily: "Geist Mono", fontSize: 20, color: COLORS.mute }}>
            <span style={{ width: 10, height: 10, borderRadius: 10, background: COLORS.green }} />
            MBK Consulting Group
          </span>
        </div>

        <div style={{ display: "flex" }}>
          <Door index="01" label="Analytics engineering" lead="Numbers that" accent="agree." />
          <div style={{ display: "flex", width: 2, background: COLORS.hairline }} />
          <Door index="02" label="Frontend builds" lead="Sites you can" accent="step inside." />
        </div>

        <div
          style={{
            display: "flex",
            margin: "0 56px",
            paddingTop: 24,
            borderTop: `2px solid ${COLORS.hairline}`,
            fontFamily: "Geist Mono",
            fontSize: 21,
            color: COLORS.mute,
          }}
        >
          {STACK}
        </div>
      </div>
    ),
    {
      ...OG_IMAGE_SIZE,
      fonts: [
        { name: "Instrument Serif", data: serif, style: "normal", weight: 400 },
        { name: "Instrument Serif", data: serifItalic, style: "italic", weight: 400 },
        { name: "Geist", data: sans, style: "normal", weight: 400 },
        { name: "Geist Mono", data: mono, style: "normal", weight: 400 },
      ],
    },
  );
}
