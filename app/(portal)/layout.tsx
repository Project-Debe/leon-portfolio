import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "./portal.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const title = "Welcome to the portal";
const description = "The coolest portal ever!";

export const metadata: Metadata = {
  title,
  description,
  authors: [{ name: "Sam Kasyoki", url: "https://github.com/sam10105" }],
  themeColor: "#0c0c0c",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body>{children}</body>
    </html>
  );
}
