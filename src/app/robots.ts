import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";

// Required for output: "export" so the file is emitted at build time.
export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}
