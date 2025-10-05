import type { Metadata } from "next";
import { Fraunces, DM_Sans, Fredoka } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import StickyBar from "@/components/StickyBar";
import Footer from "@/components/Footer";

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
  title: "Founding Paws — Wissenschaft mit Herz",
  description:
    "Premium-Ergänzungen für Hunde – evidenzbasiert entwickelt und mit Herz gemacht.",
  icons: {
    icon: "/brand/paw-green.jpg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${display.variable} ${sans.variable} ${round.variable} antialiased`}
      >
        <Header />
        {children}
        <StickyBar />
        <Footer />
      </body>
    </html>
  );
}
