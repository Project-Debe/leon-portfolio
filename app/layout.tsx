import type { Metadata } from "next";
import type { WebSite, WithContext } from "schema-dts";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";

import { cn } from "@/lib/utils";
import "@/styles/global.css";
import Credits from "./credits";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const title = "Leon Omondi | Independent digital designer";
const description =
  "Independent digital designer with 6+ years experience working on digital interfaces for start-ups. Currently based in Nairobi, Kenya.";
const url = "https://omondileon.com/";

export const metadata: Metadata = {
  title,
  description,
  metadataBase: new URL(url),
  alternates: {
    canonical: "/",
  },
  authors: [{ name: "Sam Kasyoki", url: "https://github.com/sam10105" }],
  openGraph: {
    title,
    description,
    url,
    siteName: "Leon Omondi",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    title,
    description,
    site: "@123manchild",
    card: "summary_large_image",
  },
};

export const viewport = {
  themeColor: "#0c0c0c",
};

const jsonLd: WithContext<WebSite> = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Leon Omondi",
  alternateName: "Leono",
  url,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={cn("text-screen-sm landscape:text-screen", inter.variable)}
      suppressHydrationWarning
    >
      <body className="overflow-x-hidden" suppressHydrationWarning>
        <Credits>{children}</Credits>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Analytics />
      </body>
    </html>
  );
}
