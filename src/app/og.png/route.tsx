import { renderOgImage } from "@/lib/og-image";

// A route handler (not the opengraph-image convention) so output: "export"
// writes out/og.png with a .png extension and the right content type on a
// static host. Rendered once at build time.
export const dynamic = "force-static";

export function GET() {
  return renderOgImage();
}
