import type { Metadata } from "next";
import { Fraunces, DM_Sans, Fredoka } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import StickyBar from "@/components/StickyBar";
import Footer from "@/components/Footer";
import CookieConsent from "@/components/CookieConsent";
import ErrorBoundary from "@/components/ErrorBoundary";
import CustomCursor from "@/components/CustomCursor";
import { AccessibilityProvider } from "@/components/AccessibilityProvider";
import PerformanceMonitor from "@/components/PerformanceMonitor";
import AnalyticsProvider from "@/components/AnalyticsProvider";
import UserBehaviorTracker from "@/components/UserBehaviorTracker";
import AnalyticsDashboard from "@/components/AnalyticsDashboard";
import PerformanceOptimizer from "@/components/PerformanceOptimizer";
import LaunchDashboard from "@/components/LaunchDashboard";
// Removed next-i18next import

// Display (Retrips-like) — using Fraunces as premium optical-serif stand-in
const display = Fraunces({
  variable: "--font-display",
  subsets: ["latin"],
  style: ["normal", "italic"],
});

// Body
const sans = DM_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
});

// Rounded subhead
const round = Fredoka({
  variable: "--font-round",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://foundingpaws.de'),
  title: "Founding Paws — Wissenschaft mit Herz",
  description:
    "Premium-Ergänzungen für Hunde – evidenzbasiert entwickelt und mit Herz gemacht.",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
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
  return (
    <html lang="de">
      <body
        className={`${display.variable} ${sans.variable} ${round.variable} antialiased`}
      >
        <ErrorBoundary>
          <AccessibilityProvider>
            <Header />
            {children}
            <StickyBar />
            <Footer />
            <CookieConsent />
          </AccessibilityProvider>
        </ErrorBoundary>
      </body>
    </html>
  );
}
