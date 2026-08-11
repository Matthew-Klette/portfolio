import type { Metadata } from "next";
import { Space_Grotesk, Space_Mono } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const spaceMono = Space_Mono({
  variable: "--font-space-mono",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "[YOUR NAME] — MarTech Engineer",
  description:
    "Independent MarTech Engineer specializing in analytics infrastructure, server-side tracking, and workflow automation.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${spaceMono.variable} h-full scroll-smooth`}
    >
      <body className="min-h-full flex flex-col bg-bg text-fg antialiased selection:bg-accent selection:text-bg">
        {children}
      </body>
    </html>
  );
}
