"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import IconBrainHeart from "@/components/icons/IconBrainHeart";
import IconBone from "@/components/icons/IconBone";
import IconSparkles from "@/components/icons/IconSparkles";
import IconShield from "@/components/icons/IconShield";
import { mobilePerformanceManager } from "@/lib/mobile-performance";

export default function Header() {
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
    if (mobilePerformanceManager.isMobile()) {
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

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (isMobileMenuOpen && headerRef.current && !headerRef.current.contains(event.target as Node)) {
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isMobileMenuOpen]);

  return (
    <>
      <header
        ref={headerRef}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out ${
          isScrolled
            ? "bg-white/95 backdrop-blur-xl border-b border-gray-200/50 shadow-lg"
            : "bg-green backdrop-blur-sm"
        }`}
        style={{
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
              ? "linear-gradient(135deg, rgba(255,255,255,0.95) 0%, rgba(245,239,231,0.9) 100%)"
              : "transparent"
          }}
        />
        
        {/* Header Content */}
        <div className="relative w-full px-4 sm:px-6 lg:px-8">
                <div className={`flex items-center justify-between transition-all duration-300 ${
                  isScrolled ? "h-16 lg:h-20" : "h-32 lg:h-36"
                }`}>
            
            {/* Logo Container - Größer in Hero-Sektion */}
            <div className="flex-shrink-0 h-full flex items-center header-logo-container">
              <Link 
                href="/" 
                className={`group flex items-center z-10 transition-all duration-300 ${
                  isScrolled 
                    ? "h-full px-1 py-2" 
                    : "h-full px-20 py-16"
                }`}
                aria-label="Startseite"
              >
                <div className={`relative flex items-center transition-all duration-300 ${
                  isScrolled ? "h-full overflow-hidden" : "h-full"
                }`}>
                  <div className={`transition-all duration-300 flex items-center ${
                    isScrolled ? "h-14" : "h-10"
                  }`} style={{
                    marginTop: isScrolled ? '0' : '32px'
                  }}>
                    <Image 
                      src="/brand/9 LogoNew.jpg" 
                      alt="Founding Paws Logo" 
                      width={isScrolled ? 200 : 127.5} 
                      height={isScrolled ? 50 : 31.2} 
                      className={`h-full w-auto object-contain transition-all duration-300 ${
                        isScrolled 
                          ? "drop-shadow-md" 
                          : "drop-shadow-lg brightness-125 contrast-125"
                      }`}
                      priority 
                      quality={100}
                      style={{
                        filter: isScrolled 
                          ? 'drop-shadow(0 2px 4px rgba(0,0,0,0.3))' 
                          : 'drop-shadow(0 4px 8px rgba(0,0,0,0.3)) brightness(1.25) contrast(1.25)',
                        maxHeight: isScrolled ? '100%' : 'none',
                        maxWidth: isScrolled ? '100%' : 'none'
                      }}
                    />
                  </div>
                </div>
              </Link>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8 z-10">
              {/* Dropdown Menu */}
              <div className="group relative">
                <button className="flex items-center gap-2 px-3 py-2 rounded-lg transition-all duration-300 hover:bg-gray-100/50 group-hover:bg-gray-100/80">
                  <span className={`font-medium transition-colors duration-300 ${
                    isScrolled ? "text-gray-900" : "text-white drop-shadow-lg"
                  }`}>
                    Gut für
                  </span>
                  <svg 
                    className={`w-4 h-4 transition-all duration-300 ${
                      isScrolled ? "text-gray-600" : "text-white drop-shadow-lg"
                    }`} 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                
                {/* Dropdown Content */}
                <div className="absolute left-0 mt-2 w-96 bg-white/95 backdrop-blur-xl border border-gray-200/50 rounded-2xl shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                  <div className="p-6">
                    <div className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-4">
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
                            <item.icon className="w-5 h-5 text-gray-600 group-hover/item:text-accent transition-colors" />
                            <div>
                              <div className="font-medium text-gray-900 group-hover/item:text-accent transition-colors">
                                {item.title}
                              </div>
                              <div className="text-sm text-gray-600">
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
                  className={`px-3 py-2 rounded-lg font-medium transition-all duration-300 hover:bg-gray-100/50 ${
                    isScrolled 
                      ? "text-gray-700 hover:text-gray-900" 
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
                    ? "bg-gray-100 text-gray-900 hover:bg-gray-200"
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

            {/* Mobile Menu Button - iOS Optimized */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`lg:hidden p-3 rounded-lg transition-all duration-300 hover:bg-gray-100/50 z-10 min-h-[44px] min-w-[44px] flex items-center justify-center ${
                isScrolled ? "text-gray-700" : "text-white drop-shadow-lg"
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
      </header>

      {/* Mobile Menu Overlay - iOS Optimized */}
      <div className={`lg:hidden fixed inset-0 z-40 transition-opacity duration-300 ${
        isMobileMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
      }`} style={{
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
        <div className={`absolute top-0 right-0 h-full w-80 max-w-[85vw] bg-white/95 border-l border-gray-200/50 shadow-2xl transform transition-transform duration-300 ${
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`} style={{
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
          <div className="p-6 h-full overflow-y-auto" style={{
            WebkitOverflowScrolling: 'touch',
            overscrollBehavior: 'contain'
          }}>
            {/* Mobile Menu Header - iOS Optimized */}
            <div className="flex items-center justify-between mb-8">
              <Image 
                src="/brand/9 LogoNew.jpg" 
                alt="Founding Paws Logo" 
                width={140} 
                height={35} 
                className="h-10 w-auto" 
                quality={100}
              />
              <button
                onClick={closeMobileMenu}
                className="p-3 rounded-lg hover:bg-gray-100 transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center"
                style={{
                  WebkitTapHighlightColor: 'transparent',
                  WebkitTouchCallout: 'none',
                  WebkitUserSelect: 'none',
                  userSelect: 'none'
                }}
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Mobile Navigation */}
            <nav className="space-y-6">
              {/* Categories Section */}
              <div>
                <div className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-4">
                  Gut für
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
                      onClick={closeMobileMenu}
                      className="block p-4 rounded-xl hover:bg-gray-50 transition-all duration-200 group min-h-[60px]"
                      style={{
                        WebkitTapHighlightColor: 'transparent',
                        WebkitTouchCallout: 'none',
                        WebkitUserSelect: 'none',
                        userSelect: 'none'
                      }}
                    >
                      <div className="flex items-center gap-3">
                        <item.icon className="w-5 h-5 text-gray-600 group-hover:text-accent transition-colors flex-shrink-0" />
                        <div className="flex-1">
                          <div className="font-medium text-gray-900 group-hover:text-accent transition-colors">
                            {item.title}
                          </div>
                          <div className="text-sm text-gray-600">
                            {item.desc}
                          </div>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Main Navigation */}
              <div className="border-t border-gray-200 pt-6">
                <div className="space-y-2">
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
                      onClick={closeMobileMenu}
                      className="block px-4 py-4 rounded-lg text-gray-700 hover:bg-gray-50 hover:text-gray-900 transition-all duration-200 min-h-[48px] flex items-center"
                      style={{
                        WebkitTapHighlightColor: 'transparent',
                        WebkitTouchCallout: 'none',
                        WebkitUserSelect: 'none',
                        userSelect: 'none'
                      }}
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              </div>

              {/* Mobile Action Buttons - iOS Optimized */}
              <div className="border-t border-gray-200 pt-6 space-y-3">
                <Link
                  href="/bedarfsfinder"
                  onClick={closeMobileMenu}
                  className="block w-full text-center px-6 py-4 rounded-full font-medium text-gray-700 bg-gray-100 hover:bg-gray-200 transition-all duration-200 min-h-[48px] flex items-center justify-center"
                  style={{
                    WebkitTapHighlightColor: 'transparent',
                    WebkitTouchCallout: 'none',
                    WebkitUserSelect: 'none',
                    userSelect: 'none'
                  }}
                >
                  Bedarfsfinder starten
                </Link>
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

      {/* Spacer to prevent content jumping - iOS Safe Area Support */}
      <div className="h-16 lg:h-20" style={{
        paddingTop: 'env(safe-area-inset-top)'
      }} />
    </>
  );
}


