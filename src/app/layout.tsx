import type { Metadata } from "next";
import { Bebas_Neue, JetBrains_Mono } from "next/font/google";
import JsonLd from "@/components/JsonLd";
import {
  OG_IMAGE_ALT,
  OG_IMAGE_PATH,
  OG_IMAGE_SIZE,
  SITE_DESCRIPTION,
  SITE_NAME,
  SITE_TITLE,
  SITE_URL,
} from "@/lib/site";
import "./globals.css";

const bebasNeue = Bebas_Neue({
  variable: "--font-bebas-neue",
  subsets: ["latin"],
  weight: ["400"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

// favicon.ico in this folder is picked up by Next's file convention.
// The OG image is served from the static og.png route (see app/og.png).
const OG_IMAGE = {
  url: OG_IMAGE_PATH,
  ...OG_IMAGE_SIZE,
  alt: OG_IMAGE_ALT,
  type: "image/png",
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: SITE_TITLE,
  description: SITE_DESCRIPTION,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: "/",
    siteName: SITE_NAME,
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    locale: "en_US",
    images: [OG_IMAGE],
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    images: [OG_IMAGE],
  },
  icons: {
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${bebasNeue.variable} ${jetbrainsMono.variable} h-full scroll-smooth`}
    >
      <body className="min-h-full flex flex-col bg-bg text-fg antialiased selection:bg-fg selection:text-bg">
        <JsonLd />
        {children}
      </body>
    </html>
  );
}
