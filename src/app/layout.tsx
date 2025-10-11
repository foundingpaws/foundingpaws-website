import type { Metadata } from "next";
import { Fraunces, DM_Sans, Fredoka } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CookieConsent from "@/components/CookieConsent";
import ErrorBoundary from "@/components/ErrorBoundary";
import CustomCursor from "@/components/CustomCursor";
import { AccessibilityProvider } from "@/components/AccessibilityProvider";
import AnalyticsProvider from "@/components/AnalyticsProvider";
import JsonLd from "@/components/JsonLd";
// Removed next-i18next import

// Display (Retrips-like) — using Fraunces as premium optical-serif stand-in
const display = Fraunces({
  variable: "--font-display",
  subsets: ["latin"],
  style: ["normal", "italic"],
  display: "swap",
  preload: true,
});

// Body - Optimized for German text
const sans = DM_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  preload: true,
});

// Rounded subhead - Optimized for German text
const round = Fredoka({
  variable: "--font-round",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  preload: true,
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://foundingpaws.de'),
  title: "Founding Paws — Wissenschaft mit Herz",
  description:
    "Premium-Ergänzungen für Hunde – evidenzbasiert entwickelt und mit Herz gemacht.",
  alternates: {
    canonical: '/',
    languages: {
      'de-DE': '/',
      'en': '/en',
      'x-default': '/',
    },
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "16x16 32x32 48x48", type: "image/x-icon" },
      { url: "/favicon.png", sizes: "32x32", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/manifest.webmanifest",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-snippet': -1,
      'max-image-preview': 'large',
      'max-video-preview': -1,
    },
  },
  openGraph: {
    title: "Founding Paws — Wissenschaft mit Herz",
    description:
      "Premium-Ergänzungen für Hunde – evidenzbasiert entwickelt und mit Herz gemacht.",
    url: "/",
    siteName: "Founding Paws",
    images: [
      { url: "/logo-header.png", width: 1200, height: 630, alt: "Founding Paws" },
    ],
    locale: "de_DE",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Founding Paws — Wissenschaft mit Herz",
    description:
      "Premium-Ergänzungen für Hunde – evidenzbasiert entwickelt und mit Herz gemacht.",
    images: ["/logo-header.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.foundingpaws.de';
  return (
    <html lang="de">
      <body
        className={`${display.variable} ${sans.variable} ${round.variable} antialiased`}
      >
        <JsonLd schema={{
          '@context': 'https://schema.org',
          '@type': 'Organization',
          name: 'Founding Paws',
          url: siteUrl,
          logo: `${siteUrl}/logo-header.png`,
        }} />
        <JsonLd schema={{
          '@context': 'https://schema.org',
          '@type': 'WebSite',
          name: 'Founding Paws',
          url: siteUrl,
          inLanguage: 'de-DE',
        }} />
        <JsonLd schema={{
          '@context': 'https://schema.org',
          '@type': 'BreadcrumbList',
          itemListElement: [
            {
              '@type': 'ListItem',
              position: 1,
              name: 'Startseite',
              item: siteUrl,
            },
          ],
        }} />
        <ErrorBoundary>
          <AccessibilityProvider>
            <AnalyticsProvider>
              <Header />
              {children}
              <Footer />
              <CookieConsent />
            </AnalyticsProvider>
          </AccessibilityProvider>
        </ErrorBoundary>
      </body>
    </html>
  );
}
