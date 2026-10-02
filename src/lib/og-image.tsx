import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";
import { OG_IMAGE_SIZE } from "@/lib/site";


const COLORS = {
  bg: "#0d0d0c",
  fg: "#f5f2ef",
  muted: "#8a8a86",
  border: "#2a2a28",
};

const STACK = "sGTM · GA4 · Meta CAPI · Consent Mode v2 · BigQuery/Looker Studio";

function loadFont(file: string): Promise<Buffer> {
  return readFile(join(process.cwd(), "assets/fonts", file));
}

export async function renderOgImage(): Promise<ImageResponse> {
  const [bebas, mono] = await Promise.all([
    loadFont("BebasNeue-Regular.ttf"),
    loadFont("JetBrainsMono-Regular.ttf"),
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
          padding: "64px 72px",
          background: COLORS.bg,
          color: COLORS.fg,
          fontFamily: "JetBrains Mono",
          border: `2px solid ${COLORS.border}`,
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            fontSize: 22,
            letterSpacing: 4,
            color: COLORS.muted,
            textTransform: "uppercase",
          }}
        >
          <span>[ MBK Consulting Group · Independent ]</span>
          <span>since 2024</span>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              display: "flex",
              fontFamily: "Bebas Neue",
              fontSize: 168,
              lineHeight: 0.9,
            }}
          >
            MATTHEW KLETTE
          </div>
          <div
            style={{
              display: "flex",
              marginTop: 16,
              fontFamily: "Bebas Neue",
              fontSize: 64,
              lineHeight: 1,
              color: COLORS.muted,
            }}
          >
            Server-side tracking &amp; consent for e-commerce
          </div>
        </div>

        <div
          style={{
            display: "flex",
            borderTop: `2px solid ${COLORS.border}`,
            paddingTop: 28,
            fontSize: 24,
            color: COLORS.fg,
          }}
        >
          {STACK}
        </div>
      </div>
    ),
    {
      ...OG_IMAGE_SIZE,
      fonts: [
        { name: "Bebas Neue", data: bebas, style: "normal", weight: 400 },
        { name: "JetBrains Mono", data: mono, style: "normal", weight: 400 },
      ],
    }
  );
}
