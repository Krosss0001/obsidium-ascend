import type { Metadata } from "next";
import type { ReactNode } from "react";
import { SmoothScroll } from "@/components/smooth-scroll";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "OBSIDIUM ASCEND — Creator Systems Agency",
    template: "%s",
  },
  description:
    "Premium creator systems agency for stream design, OBS setup, websites, advertising launches, AI production, automation and custom software.",
  applicationName: "OBSIDIUM ASCEND",
  keywords: [
    "OBSIDIUM ASCEND",
    "creator systems agency",
    "stream design",
    "OBS setup",
    "Twitch overlays",
    "Discord design",
    "custom software",
    "AI production",
    "automation",
  ],
  authors: [{ name: "OBSIDIUM ASCEND" }],
  creator: "OBSIDIUM ASCEND",
  metadataBase: new URL("https://obsidium-ascend.vercel.app"),
  openGraph: {
    title: "OBSIDIUM ASCEND — Creator Systems Agency",
    description:
      "Premium creator systems for stream design, OBS setup, websites, advertising launches, AI production, automation and custom software.",
    siteName: "OBSIDIUM ASCEND",
    type: "website",
    locale: "en_US",
    alternateLocale: ["uk_UA"],
  },
  twitter: {
    card: "summary_large_image",
    title: "OBSIDIUM ASCEND — Creator Systems Agency",
    description:
      "Premium creator systems agency for stream design, OBS setup, websites, AI production, automation and custom software.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html
      lang="en"
      className="h-full scroll-smooth antialiased"
      suppressHydrationWarning
    >
      <body className="min-h-full overflow-x-hidden bg-background text-foreground">
        <SmoothScroll />
        {children}
      </body>
    </html>
  );
}
