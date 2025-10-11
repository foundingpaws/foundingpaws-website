"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import IconBrainHeart from "@/components/icons/IconBrainHeart";
import IconBone from "@/components/icons/IconBone";
import IconSparkles from "@/components/icons/IconSparkles";
import IconShield from "@/components/icons/IconShield";
import { mobilePerformanceManager } from "@/lib/mobile-performance";

export default function Header() {
  const router = useRouter();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const headerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const onScroll = () => {
      const currentScrollY = window.scrollY;
      setScrollY(currentScrollY);
      setIsScrolled(currentScrollY > 20);
    };
    
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Mobile performance optimization
  useEffect(() => {
    if (typeof window !== 'undefined' && mobilePerformanceManager.isMobile()) {
      const optimization = mobilePerformanceManager.getOptimization();
      if (optimization && !optimization.enableAnimations) {
        // Disable animations on low-end mobile devices
        document.body.classList.add('no-animations');
      }
    }
  }, []);

  // Close mobile menu when a link is clicked
  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  // Navigate and close helper (robust on iOS)
  const navigateAndClose = (href: string) => (e?: React.MouseEvent) => {
    if (e) e.preventDefault();
    setIsMobileMenuOpen(false);
    try {
      router.push(href);
    } catch {
      window.location.href = href;
    }
  };

  // Removed outside-click listener to avoid iOS event interference; backdrop close remains

  return (
    <>
      <header
        ref={headerRef}
        className={`fixed top-0 left-0 right-0 z-[1100] transition-all duration-500 ease-out ${
          isScrolled
            ? "backdrop-blur-xl border-b border-cream/20 shadow-lg"
            : "bg-green backdrop-blur-sm"
        }`}
        style={{
          backgroundColor: isScrolled ? 'rgba(0, 66, 37, 0.95)' : undefined,
          transform: `translateY(${Math.min(scrollY * 0.1, 10)}px)`,
        }}
      >
        {/* Background overlay for better contrast */}
        <div 
          className={`absolute inset-0 transition-all duration-500 ${
            isScrolled 
              ? "opacity-100" 
              : "opacity-0"
          }`}
          style={{
            background: isScrolled 
              ? "linear-gradient(135deg, rgba(0,66,37,0.95) 0%, rgba(0,66,37,0.9) 100%)"
              : "transparent"
          }}
        />
        
        {/* Header Content */}
        <div className="relative w-full px-4 sm:px-6 lg:px-8 overflow-visible">
                <div className={`flex items-center ${isScrolled ? 'justify-between' : 'justify-center lg:justify-between'} transition-all duration-300 ${
                  isScrolled ? "h-14 lg:h-20" : "h-16 lg:h-28"
                }`}>
            
            {/* Logo Container - Größer in Hero-Sektion */}
            <div className="flex-shrink-0 h-full flex items-center header-logo-container">
              <Link 
                href="/" 
                className={`group flex items-center z-10 transition-all duration-300 ${
                  isScrolled 
                    ? "h-full px-1 py-1" 
                    : "h-full py-1 lg:py-16"
                }`}
                aria-label="Startseite"
              >
                <div className={`relative flex items-center transition-all duration-300 ${
                  isScrolled ? "h-full overflow-hidden" : "h-full"
                }`}>
                  <div className={`transition-all duration-300 flex items-center ${
                    isScrolled ? "h-12" : "h-10 lg:h-10"
                  }`} style={{
                    marginTop: isScrolled ? '0' : '0px'
                  }}>
                    <Image 
                      src="/brand/9 LogoNew.jpg" 
                      alt="Founding Paws Logo" 
                      width={isScrolled ? 180 : 120} 
                      height={isScrolled ? 44 : 32} 
                      className={`h-full w-auto object-contain transition-all duration-300 ${
                        isScrolled 
                          ? "" 
                          : "brightness-125 contrast-125"
                      }`}
                      priority 
                      quality={100}
                      style={{
                        filter: isScrolled 
                          ? 'none' 
                          : 'brightness(1.25) contrast(1.25)',
                        maxHeight: isScrolled ? '100%' : 'none',
                        maxWidth: isScrolled ? '100%' : 'none'
                      }}
                    />
                  </div>
                </div>
              </Link>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center lg:gap-6 z-10 min-w-0 shrink">
              {/* Dropdown Menu */}
              <div className="group relative">
                <button className="flex items-center gap-2 px-3 py-2 rounded-lg transition-all duration-300 hover:bg-gray-100/50 group-hover:bg-gray-100/80">
                  <span className={`font-medium transition-colors duration-300 whitespace-nowrap ${
                    isScrolled ? "text-cream" : "text-white drop-shadow-lg"
                  }`}>
                    Gut für
                  </span>
                  <svg 
                    className={`w-4 h-4 transition-all duration-300 ${
                      isScrolled ? "text-cream/80" : "text-white drop-shadow-lg"
                    }`} 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                
                {/* Dropdown Content */}
                <div className="absolute left-0 mt-2 w-80 max-w-[calc(100vw-4rem)] backdrop-blur-xl border border-cream/30 rounded-2xl shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0" style={{backgroundColor: 'rgba(0,66,37,0.95)'}}>
                  <div className="p-6">
                    <div className="text-xs font-semibold text-cream/70 uppercase tracking-wider mb-4">
                      Wähle eine Kategorie
                    </div>
                    <div className="space-y-2">
                      {[
                        { href: "/kognition-herz", icon: IconBrainHeart, title: "Kognition & Herz", desc: "Geistige Klarheit & Herzgesundheit" },
                        { href: "/stress-angst", icon: IconSparkles, title: "Stress & Angst", desc: "Entspannung & emotionale Balance" },
                        { href: "/gelenke-mobilitaet", icon: IconBone, title: "Gelenke & Mobilität", desc: "Beweglichkeit & Schmerzlinderung" },
                        { href: "/haut-fell", icon: IconSparkles, title: "Haut & Fell", desc: "Glänzendes Fell & gesunde Haut" },
                        { href: "/immunsystem", icon: IconShield, title: "Immunsystem", desc: "Abwehrkräfte & Vitalität" },
                      ].map((item, index) => (
                        <Link
                          key={index}
                          href={item.href}
                          className="block p-4 rounded-xl hover:bg-gray-50 transition-all duration-200 group/item"
                        >
                          <div className="flex items-center gap-3">
                            <item.icon className="w-5 h-5 text-cream/80 group-hover/item:text-copper transition-colors" />
                            <div>
                              <div className="font-medium text-cream group-hover/item:text-copper transition-colors">
                                {item.title}
                              </div>
                              <div className="text-sm text-cream/70">
                                {item.desc}
                              </div>
                            </div>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Navigation Links */}
              {[
                { href: "/produkte", label: "Produkte" },
                { href: "/ratgeber", label: "Ratgeber" },
                { href: "/bedarfsfinder", label: "Bedarfsfinder" },
                { href: "/marke", label: "Marke" },
                { href: "/team", label: "Team" },
              ].map((link, index) => (
                <Link
                  key={index}
                  href={link.href}
                  className={`px-3 py-2 rounded-lg font-medium transition-all duration-300 hover:bg-cream/20 ${
                    isScrolled 
                      ? "text-cream hover:text-white" 
                      : "text-white drop-shadow-lg hover:bg-white/20"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* Desktop Action Buttons */}
            <div className="hidden lg:flex items-center gap-3 z-10">
              <Link 
                href="/bedarfsfinder"
                className={`px-6 py-2.5 rounded-full font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg ${
                  isScrolled
                    ? "bg-cream text-green hover:bg-white"
                    : "bg-white/90 text-gray-900 backdrop-blur-sm border border-white/50 hover:bg-white shadow-lg"
                }`}
              >
                Bedarfsfinder
              </Link>
              <Link 
                href="/shop"
                className="px-6 py-2.5 rounded-full font-medium text-white bg-accent hover:bg-accent-dark transition-all duration-300 hover:scale-105 hover:shadow-lg shadow-accent/25"
              >
                Jetzt einkaufen
              </Link>
            </div>

            {/* Mobile Navigation - Enhanced with Quick Sections */}
            <div className={`lg:hidden flex items-center gap-2 ${isScrolled ? '' : 'absolute right-4 top-1/2 -translate-y-1/2'}`}>
              {/* Quick Section Navigation - Only show when scrolled */}
              {isScrolled && (
                <div className="flex items-center gap-1 mr-2">
                  <button
                    onClick={() => document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' })}
                    className="px-3 py-2 text-xs font-medium text-cream/80 hover:text-cream hover:bg-cream/10 rounded-lg transition-all duration-200"
                    style={{
                      WebkitTapHighlightColor: 'transparent',
                      WebkitTouchCallout: 'none',
                      WebkitUserSelect: 'none',
                      userSelect: 'none',
                      minHeight: '36px',
                    }}
                  >
                    Produkte
                  </button>
                  <button
                    onClick={() => document.getElementById('faq')?.scrollIntoView({ behavior: 'smooth' })}
                    className="px-3 py-2 text-xs font-medium text-cream/80 hover:text-cream hover:bg-cream/10 rounded-lg transition-all duration-200"
                    style={{
                      WebkitTapHighlightColor: 'transparent',
                      WebkitTouchCallout: 'none',
                      WebkitUserSelect: 'none',
                      userSelect: 'none',
                      minHeight: '36px',
                    }}
                  >
                    FAQ
                  </button>
                </div>
              )}

              {/* Mobile Menu Button - iOS Optimized */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className={`p-3 rounded-lg transition-all duration-300 hover:bg-cream/20 z-10 min-h-[44px] min-w-[44px] flex items-center justify-center ${
                  isScrolled ? "text-cream" : "text-white drop-shadow-lg"
                }`}
                aria-label="Menü öffnen"
                style={{
                  WebkitTapHighlightColor: 'transparent',
                  WebkitTouchCallout: 'none',
                  WebkitUserSelect: 'none',
                  userSelect: 'none'
                }}
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
        </div>
      </header>

      {/* Mobile Menu Overlay - iOS Optimized */}
      {isMobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 z-[1300]" style={{
          WebkitOverflowScrolling: 'touch',
          overscrollBehavior: 'contain'
        }}>
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/50"
            onClick={closeMobileMenu}
            style={{
              WebkitBackdropFilter: 'blur(8px)',
              backdropFilter: 'blur(8px)'
            }}
          />
        
          {/* Mobile Menu Panel - iOS Safe Area Support */}
          <div className="fixed top-0 right-0 h-full w-80 max-w-[85vw] bg-green/95 border-l border-cream/20 shadow-2xl z-[1400]" style={{
            paddingTop: 'env(safe-area-inset-top)',
            paddingBottom: 'env(safe-area-inset-bottom)',
            paddingLeft: 'env(safe-area-inset-left)',
            paddingRight: 'env(safe-area-inset-right)',
            WebkitBackdropFilter: 'blur(20px)',
            backdropFilter: 'blur(20px)',
            WebkitTransform: 'translateZ(0)',
            transform: 'translateZ(0)',
            WebkitBackfaceVisibility: 'hidden',
            backfaceVisibility: 'hidden'
          }}>
          <div className="p-4 h-full overflow-y-auto" style={{
            WebkitOverflowScrolling: 'touch',
            overscrollBehavior: 'contain'
          }}>
            {/* Mobile Menu Header - Compact (no logo to save space) */}
            <div className="flex items-center justify-end mb-2">
              <button
                onClick={closeMobileMenu}
                className="p-2 rounded-lg hover:bg-cream/10 transition-colors min-h-[36px] min-w-[36px] flex items-center justify-center"
                style={{
                  WebkitTapHighlightColor: 'transparent',
                  WebkitTouchCallout: 'none',
                  WebkitUserSelect: 'none',
                  userSelect: 'none'
                }}
                aria-label="Menü schließen"
              >
                <svg className="w-5 h-5 text-cream" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Mobile Navigation - compact grouped accordions */}
            <nav className="space-y-4 text-[15px] leading-tight">
              {/* Group: Gut für */}
              <details className="rounded-xl border border-cream/15">
                <summary className="list-none px-4 py-3 flex items-center justify-between cursor-pointer select-none">
                  <span className="text-cream/90 font-medium flex items-center gap-2">
                    <span className="inline-block w-5 h-5 rounded-full bg-cream/10" />
                    Gut für
                  </span>
                  <svg className="w-4 h-4 text-cream/70" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7"/></svg>
                </summary>
                <div className="py-1">
                  {[
                    { href: "/kognition-herz", icon: IconBrainHeart, title: "Kognition & Herz" },
                    { href: "/stress-angst", icon: IconSparkles, title: "Stress & Angst" },
                    { href: "/gelenke-mobilitaet", icon: IconBone, title: "Gelenke & Mobilität" },
                    { href: "/haut-fell", icon: IconSparkles, title: "Haut & Fell" },
                    { href: "/immunsystem", icon: IconShield, title: "Immunsystem" },
                  ].map((item, index) => (
                    <a
                      key={index}
                      href={item.href}
                      onClick={navigateAndClose(item.href)}
                      className="flex items-center justify-between px-4 py-3 hover:bg-cream/10 transition-colors"
                      style={{ WebkitTapHighlightColor: 'transparent' }}
                    >
                      <span className="flex items-center gap-3 text-cream">
                        <item.icon className="w-5 h-5 text-cream/80" />
                        <span className="font-medium">{item.title}</span>
                      </span>
                      <svg className="w-4 h-4 text-cream/60" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7"/></svg>
                    </a>
                  ))}
                </div>
              </details>

              {/* Group: Seiten */}
              <details open className="rounded-xl border border-cream/15">
                <summary className="list-none px-4 py-3 flex items-center justify-between cursor-pointer select-none">
                  <span className="text-cream/90 font-medium flex items-center gap-2">
                    <span className="inline-block w-5 h-5 rounded-full bg-cream/10" />
                    Seiten
                  </span>
                  <svg className="w-4 h-4 text-cream/70" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7"/></svg>
                </summary>
                <div className="py-1">
                  {[
                    { href: "/produkte", label: "Produkte" },
                    { href: "/ratgeber", label: "Ratgeber" },
                    { href: "/marke", label: "Marke" },
                    { href: "/team", label: "Team" },
                  ].map((link, index) => (
                    <a
                      key={index}
                      href={link.href}
                      onClick={navigateAndClose(link.href)}
                      className="flex items-center justify-between px-4 py-3 hover:bg-cream/10 transition-colors text-cream"
                    >
                      <span className="font-medium">{link.label}</span>
                      <svg className="w-4 h-4 text-cream/60" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7"/></svg>
                    </a>
                  ))}
                </div>
              </details>

              {/* Mobile Action Buttons - iOS Optimized */}
              <div className="border-t border-cream/20 pt-6 space-y-3">
              <a
                href="/bedarfsfinder"
                onClick={navigateAndClose('/bedarfsfinder')}
                className="block w-full text-center px-6 py-4 rounded-full font-medium text-green bg-cream hover:bg-white transition-all duration-200 min-h-[48px] flex items-center justify-center"
                style={{
                  WebkitTapHighlightColor: 'transparent',
                  WebkitTouchCallout: 'none',
                  WebkitUserSelect: 'none',
                  userSelect: 'none'
                }}
              >
                Bedarfsfinder starten
              </a>
                <Link
                  href="/shop"
                  onClick={closeMobileMenu}
                  className="block w-full text-center px-6 py-4 rounded-full font-medium text-white bg-accent hover:bg-accent-dark transition-all duration-200 shadow-lg min-h-[48px] flex items-center justify-center"
                  style={{
                    WebkitTapHighlightColor: 'transparent',
                    WebkitTouchCallout: 'none',
                    WebkitUserSelect: 'none',
                    userSelect: 'none'
                  }}
                >
                  Jetzt einkaufen
                </Link>
              </div>
            </nav>
          </div>
        </div>
        </div>
      )}

      {/* Spacer to prevent content jumping - iOS Safe Area Support */}
      <div className="h-8 lg:h-20" style={{
        paddingTop: 'env(safe-area-inset-top)'
      }} />
    </>
  );
}


