import type { Metadata } from 'next';
import { Inter, JetBrains_Mono } from 'next/font/google';
import '../src/index.css';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-jetbrains',
});

export const metadata: Metadata = {
  title: 'Uplink Enterprises — IT Services & Software Automation',
  description:
    'Premium 360° IT products, secure infrastructure, and custom software automation for modern enterprises. Build, scale, and secure your business with Uplink.',
  robots: 'index, follow',
  alternates: {
    canonical: 'https://uplink-enterprises.vercel.app',
  },
  openGraph: {
    title: 'Uplink Enterprises — IT Services & Software Automation',
    description:
      'Premium 360° IT products, secure infrastructure, and custom software automation for modern enterprises. Build, scale, and secure your business with Uplink.',
    url: 'https://uplink-enterprises.vercel.app',
    siteName: 'Uplink Enterprises',
    images: [
      {
        url: 'https://uplink-enterprises.vercel.app/og-preview.png',
        width: 1200,
        height: 630,
        alt: 'Uplink Enterprises — IT Services & Software Automation',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Uplink Enterprises — IT Services & Software Automation',
    description:
      'Premium 360° IT products, secure infrastructure, and custom software automation for modern enterprises. Build, scale, and secure your business with Uplink.',
    images: ['https://uplink-enterprises.vercel.app/og-preview.png'],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable} scroll-smooth`}>
      <head>
        <link rel="canonical" href="https://uplink-enterprises.vercel.app" />
      </head>
      <body className="bg-[#F8FAFC] text-[#0F172A] antialiased selection:bg-[#14B8A6]/20 selection:text-[#0A1128]">
        {children}
      </body>
    </html>
  );
}
