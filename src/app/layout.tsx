import type { Metadata } from "next";
import type { ReactNode } from "react";
import { SmoothScroll } from "@/components/smooth-scroll";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "OBSIDIUM ASCEND — Black-Label Motion & Creator Systems Studio",
    template: "%s",
  },
  description:
    "Premium black-label creator systems studio for stream identity, motion assets, websites, campaigns, automation and custom software.",
  applicationName: "OBSIDIUM ASCEND",
  keywords: [
    "OBSIDIUM ASCEND",
    "black-label motion studio",
    "creator systems studio",
    "stream identity",
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
    title: "OBSIDIUM ASCEND — Black-Label Motion & Creator Systems Studio",
    description:
      "Premium creator systems for stream identity, motion assets, websites, campaigns, automation and custom software.",
    siteName: "OBSIDIUM ASCEND",
    type: "website",
    locale: "en_US",
    alternateLocale: ["uk_UA"],
  },
  twitter: {
    card: "summary_large_image",
    title: "OBSIDIUM ASCEND — Black-Label Motion & Creator Systems Studio",
    description:
      "Premium creator systems studio for stream identity, motion assets, websites, automation and custom software.",
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
