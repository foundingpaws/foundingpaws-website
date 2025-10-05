"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 4);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all ${
        isScrolled
          ? "bg-green/95 backdrop-blur-xl border-b border-cream/10"
          : "bg-green"
      }`}
    >
      <div className="container-wide flex items-center justify-between h-28 py-2">
        <Link href="/" className="group inline-flex items-center gap-3" aria-label="Startseite">
          {/* Transparent header logo, tuned size */}
          <Image src="/logo-header.png" alt="Founding Paws Logo" width={520} height={130} className="h-20 sm:h-24 w-auto" priority />
        </Link>
        <nav className="hidden md:flex items-center gap-8 text-sm">
          <div className="group relative">
            <button className="flex items-center gap-1 hover:opacity-80 text-cream">
              Gut für
              <span className="text-xs">▼</span>
            </button>
            {/* Improved dropdown with better spacing and visual hierarchy */}
            <div className="invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-all duration-200 absolute left-0 mt-2 bg-green/98 backdrop-blur-sm border border-cream/20 rounded-2xl shadow-2xl p-6 w-[400px]">
              <div className="text-xs text-cream/60 mb-3 font-medium">WÄHLE EINE KATEGORIE</div>
              <div className="space-y-2">
                <Link href="/kognition-herz" className="block p-3 rounded-xl hover:bg-cream/10 text-cream/90 hover:text-cream transition-all">
                  <div className="font-medium">🧠 Kognition & Herz</div>
                  <div className="text-xs text-cream/60">Geistige Klarheit & Herzgesundheit</div>
                </Link>
                <Link href="/stress-angst" className="block p-3 rounded-xl hover:bg-cream/10 text-cream/90 hover:text-cream transition-all">
                  <div className="font-medium">😌 Stress & Angst</div>
                  <div className="text-xs text-cream/60">Entspannung & emotionale Balance</div>
                </Link>
                <Link href="/gelenke-mobilität" className="block p-3 rounded-xl hover:bg-cream/10 text-cream/90 hover:text-cream transition-all">
                  <div className="font-medium">🦴 Gelenke & Mobilität</div>
                  <div className="text-xs text-cream/60">Beweglichkeit & Schmerzlinderung</div>
                </Link>
                <Link href="#products" className="block p-3 rounded-xl hover:bg-cream/10 text-cream/90 hover:text-cream transition-all">
                  <div className="font-medium">✨ Haut & Fell</div>
                  <div className="text-xs text-cream/60">Glänzendes Fell & gesunde Haut</div>
                </Link>
                <Link href="#products" className="block p-3 rounded-xl hover:bg-cream/10 text-cream/90 hover:text-cream transition-all">
                  <div className="font-medium">🛡️ Immunsystem</div>
                  <div className="text-xs text-cream/60">Abwehrkräfte & Vitalität</div>
                </Link>
              </div>
            </div>
          </div>
          <Link href="#finder" className="hover:opacity-80 text-cream">Bedarfsfinder</Link>
          <Link href="#story" className="hover:opacity-80 text-cream">Marke</Link>
          <Link href="#values" className="hover:opacity-80 text-cream">Werte</Link>
        </nav>
        <div className="flex items-center gap-3">
          <Link href="#products" className="pill bg-copper text-cream px-5 py-2 text-sm font-medium shadow-[0_10px_24px_-12px_rgba(180,106,52,0.5)] hover:opacity-95">Jetzt einkaufen</Link>
          <Link href="#finder" className="pill bg-cream/10 border border-cream/30 text-cream px-5 py-2 text-sm font-medium backdrop-blur-sm hover:bg-cream/15">Finder</Link>
        </div>
      </div>
    </header>
  );
}


