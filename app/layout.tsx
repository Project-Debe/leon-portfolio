import type { Metadata } from "next";
import { Inter } from "next/font/google";

import { cn } from "@/lib/utils";
import "@/styles/global.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const title = "Leon Omondi | Independent digital designer";
const description =
  "Independent digital designer with 6+ years experience working on digital interfaces for start-ups. Currently based in Nairobi, Kenya.";
const url = "https://omondileon.com";
const locale = "en";

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
    locale,
  },
  twitter: {
    title,
    description,
    site: "@123manchild",
    creator: "@123manchild",
    card: "summary_large_image",
  },
  themeColor: "#0c0c0c",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang={locale}
      className={cn("text-screen-sm sm:text-screen", inter.variable)}
    >
      <body>{children}</body>
    </html>
  );
}
