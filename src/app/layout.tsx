import type { Metadata } from "next";
import type { ReactNode } from "react";
import { SmoothScroll } from "@/components/smooth-scroll";
import "./globals.css";

const title =
  "OBSIDIUM ASCEND — Black-Label Motion, Stream Design & Creator Systems";
const description =
  "Premium black-label studio for motion, stream design, creator systems, websites, campaigns, automation and custom software.";
const ogImage = "/assets/og/og-image.svg";

export const metadata: Metadata = {
  title: {
    default: title,
    template: "%s",
  },
  description,
  applicationName: "OBSIDIUM ASCEND",
  keywords: [
    "OBSIDIUM ASCEND",
    "black-label motion studio",
    "creator systems studio",
    "stream design",
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
    title,
    description:
      "Premium black-label systems for stream design, motion assets, websites, campaigns, automation and custom software.",
    siteName: "OBSIDIUM ASCEND",
    type: "website",
    locale: "en_US",
    alternateLocale: ["uk_UA"],
    images: [
      {
        url: ogImage,
        width: 1200,
        height: 630,
        alt: "OBSIDIUM ASCEND black-label motion and creator systems studio preview.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description:
      "Premium black-label creator systems studio for stream design, motion assets, websites, automation and custom software.",
    images: [ogImage],
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
      data-scroll-behavior="smooth"
      suppressHydrationWarning
    >
      <body className="min-h-full overflow-x-hidden bg-background text-foreground">
        <SmoothScroll />
        {children}
      </body>
    </html>
  );
}
