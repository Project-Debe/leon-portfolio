import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

import { cn } from '@/lib/utils';
import '@/styles/global.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

const title = 'Leon Omondi | Independent digital designer';
const description = 'Independent Kenyan-based digital designer with 6+ years experience.';
const url = 'https://omondileon.com';

export const metadata: Metadata = {
  title,
  description,
  // metadataBase: new URL(url),
  openGraph: {
    title,
    description,
    url,
    siteName: 'Leon Omondi',
    type: 'website',
  },
  twitter: {
    title,
    description,
    site: '@123manchild',
    card: 'summary_large_image',
  },
  themeColor: '#0c0c0c',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={cn('text-screen-sm sm:text-screen', inter.variable)}>
      <body>{children}</body>
    </html>
  );
}
