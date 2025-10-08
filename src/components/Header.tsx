"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import IconBrainHeart from "@/components/icons/IconBrainHeart";
import IconBone from "@/components/icons/IconBone";
import IconSparkles from "@/components/icons/IconSparkles";
import IconShield from "@/components/icons/IconShield";
// LanguageSwitcher removed

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 4);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile menu when a link is clicked
  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header
      className={`sticky top-0 z-50 transition-all ${
        isScrolled
          ? "bg-green/98 backdrop-blur-xl border-b border-cream/10"
          : "bg-green"
      }`}
      style={{ minHeight: '80px' }}
    >
      <div className="container-wide flex items-center justify-between min-h-[80px] sm:min-h-[96px] lg:min-h-[112px] py-4 sm:py-6 lg:py-8 relative">
        <Link href="/" className="group inline-flex items-center gap-2" aria-label="Startseite">
          {/* Transparent header logo, tuned size */}
          <Image src="/logo-header.png" alt="Founding Paws Logo" width={120} height={30} className="h-8 sm:h-10 lg:h-11 w-auto" priority sizes="(max-width: 640px) 80px, (max-width: 1024px) 100px, 110px" />
        </Link>
        <nav className="hidden lg:flex items-center gap-8 wv-body">
          <div className="group relative">
            <button className="flex items-center gap-1 hover:opacity-80 text-cream">
              Gut für
              <span className="text-xs">▼</span>
            </button>
            {/* Improved dropdown with better spacing and visual hierarchy */}
            <div className="invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-all duration-200 absolute left-0 mt-2 bg-green/98 backdrop-blur-sm border border-cream/20 rounded-2xl shadow-2xl p-6 w-[400px] max-w-[calc(100vw-2rem)]">
              <div className="wv-caption wv-spacing-xs font-medium" style={{color: 'rgba(255, 255, 255, 0.8)'}}>WÄHLE EINE KATEGORIE</div>
              <div className="space-y-2">
                <Link href="/kognition-herz" className="block p-3 rounded-xl hover:bg-cream/10 transition-all">
                  <div className="font-medium flex items-center gap-2" style={{color: 'white'}}><IconBrainHeart className="w-4 h-4"/> Kognition & Herz</div>
                  <div className="wv-caption" style={{color: 'rgba(255, 255, 255, 0.8)'}}>Geistige Klarheit & Herzgesundheit</div>
                </Link>
                <Link href="/stress-angst" className="block p-3 rounded-xl hover:bg-cream/10 transition-all">
                  <div className="font-medium flex items-center gap-2" style={{color: 'white'}}><IconSparkles className="w-4 h-4"/> Stress & Angst</div>
                  <div className="wv-caption" style={{color: 'rgba(255, 255, 255, 0.8)'}}>Entspannung & emotionale Balance</div>
                </Link>
                <Link href="/gelenke-mobilitaet" className="block p-3 rounded-xl hover:bg-cream/10 transition-all">
                  <div className="font-medium flex items-center gap-2" style={{color: 'white'}}><IconBone className="w-4 h-4"/> Gelenke & Mobilität</div>
                  <div className="wv-caption" style={{color: 'rgba(255, 255, 255, 0.8)'}}>Beweglichkeit & Schmerzlinderung</div>
                </Link>
                <Link href="/haut-fell" className="block p-3 rounded-xl hover:bg-cream/10 transition-all">
                  <div className="font-medium flex items-center gap-2" style={{color: 'white'}}><IconSparkles className="w-4 h-4"/> Haut & Fell</div>
                  <div className="wv-caption" style={{color: 'rgba(255, 255, 255, 0.8)'}}>Glänzendes Fell & gesunde Haut</div>
                </Link>
                <Link href="/immunsystem" className="block p-3 rounded-xl hover:bg-cream/10 transition-all">
                  <div className="font-medium flex items-center gap-2" style={{color: 'white'}}><IconShield className="w-4 h-4"/> Immunsystem</div>
                  <div className="wv-caption" style={{color: 'rgba(255, 255, 255, 0.8)'}}>Abwehrkräfte & Vitalität</div>
                </Link>
              </div>
            </div>
          </div>
              <Link href="/produkte" className="link-hover hover:opacity-80 text-cream">Produkte</Link>
          <Link href="/ratgeber" className="link-hover hover:opacity-80 text-cream">Ratgeber</Link>
          <Link href="/bedarfsfinder" className="link-hover hover:opacity-80 text-cream">Bedarfsfinder</Link>
          <Link href="/marke" className="link-hover hover:opacity-80 text-cream">Marke</Link>
          <Link href="/team" className="link-hover hover:opacity-80 text-cream">Team</Link>
        </nav>
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Mobile: Buttons zentriert, Desktop: normal */}
          <div className="flex items-center justify-center gap-2 sm:gap-3">
            <Link href="/shop" className="btn-primary pill bg-copper !text-white px-3 py-1.5 sm:px-5 sm:py-2 text-xs sm:text-sm font-medium shadow-[0_10px_24px_-12px_rgba(180,106,52,0.5)] touch-manipulation">Jetzt einkaufen</Link>
            <Link href="/bedarfsfinder" className="btn-secondary pill bg-cream/10 border border-cream/30 !text-white px-3 py-1.5 sm:px-5 sm:py-2 text-xs sm:text-sm font-medium backdrop-blur-sm touch-manipulation">Finder</Link>
          </div>
          
          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 text-cream hover:text-copper transition-colors ml-2"
            aria-label="Menü öffnen"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-green/98 backdrop-blur-xl border-t border-cream/10 mobile-menu-container relative z-50">
          <div className="container-wide py-6">
            <nav className="flex flex-col space-y-4 mobile-menu">
              <div className="space-y-2">
                <div className="text-cream/80 text-sm font-medium mb-3">Gut für</div>
                <Link href="/kognition-herz" onClick={closeMobileMenu} className="block p-3 rounded-xl hover:bg-cream/10 transition-all text-cream mobile-menu-link">
                  <div className="font-medium flex items-center gap-2"><IconBrainHeart className="w-4 h-4"/> Kognition & Herz</div>
                  <div className="text-sm text-cream/70">Geistige Klarheit & Herzgesundheit</div>
                </Link>
                <Link href="/stress-angst" onClick={closeMobileMenu} className="block p-3 rounded-xl hover:bg-cream/10 transition-all text-cream mobile-menu-link">
                  <div className="font-medium flex items-center gap-2"><IconSparkles className="w-4 h-4"/> Stress & Angst</div>
                  <div className="text-sm text-cream/70">Entspannung & emotionale Balance</div>
                </Link>
                <Link href="/gelenke-mobilitaet" onClick={closeMobileMenu} className="block p-3 rounded-xl hover:bg-cream/10 transition-all text-cream mobile-menu-link">
                  <div className="font-medium flex items-center gap-2"><IconBone className="w-4 h-4"/> Gelenke & Mobilität</div>
                  <div className="text-sm text-cream/70">Beweglichkeit & Schmerzlinderung</div>
                </Link>
                <Link href="/haut-fell" onClick={closeMobileMenu} className="block p-3 rounded-xl hover:bg-cream/10 transition-all text-cream mobile-menu-link">
                  <div className="font-medium flex items-center gap-2"><IconSparkles className="w-4 h-4"/> Haut & Fell</div>
                  <div className="text-sm text-cream/70">Glänzendes Fell & gesunde Haut</div>
                </Link>
                <Link href="/immunsystem" onClick={closeMobileMenu} className="block p-3 rounded-xl hover:bg-cream/10 transition-all text-cream mobile-menu-link">
                  <div className="font-medium flex items-center gap-2"><IconShield className="w-4 h-4"/> Immunsystem</div>
                  <div className="text-sm text-cream/70">Abwehrkräfte & Vitalität</div>
                </Link>
              </div>
              
              <div className="border-t border-cream/20 pt-4 space-y-3">
                <Link href="/produkte" onClick={closeMobileMenu} className="block text-cream hover:text-copper transition py-3 touch-manipulation mobile-menu-link">Produkte</Link>
                <Link href="/ratgeber" onClick={closeMobileMenu} className="block text-cream hover:text-copper transition py-3 touch-manipulation mobile-menu-link">Ratgeber</Link>
                <Link href="/bedarfsfinder" onClick={closeMobileMenu} className="block text-cream hover:text-copper transition py-3 touch-manipulation mobile-menu-link">Bedarfsfinder</Link>
                <Link href="/marke" onClick={closeMobileMenu} className="block text-cream hover:text-copper transition py-3 touch-manipulation mobile-menu-link">Marke</Link>
                <Link href="/team" onClick={closeMobileMenu} className="block text-cream hover:text-copper transition py-3 touch-manipulation mobile-menu-link">Team</Link>
              </div>
              
              {/* Mobile Action Buttons */}
              <div className="border-t border-cream/20 pt-4 space-y-3">
                <div className="flex flex-col sm:flex-row gap-3">
                  <Link href="/shop" onClick={closeMobileMenu} className="flex-1 text-center bg-copper text-white px-4 py-3 rounded-lg font-medium touch-manipulation mobile-menu-link">Jetzt einkaufen</Link>
                  <Link href="/bedarfsfinder" onClick={closeMobileMenu} className="flex-1 text-center bg-cream/10 border border-cream/30 text-cream px-4 py-3 rounded-lg font-medium touch-manipulation mobile-menu-link">Finder starten</Link>
                </div>
              </div>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}


