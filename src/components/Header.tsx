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

    if (isMobileMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      return () => document.removeEventListener('mousedown', handleClickOutside);
    }
  }, [isMobileMenuOpen]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  return (
    <>
      <header 
        ref={headerRef}
        className={`header-mobile fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
        }`}
        style={{
          paddingTop: 'env(safe-area-inset-top)',
          WebkitTransform: 'translateZ(0)',
          transform: 'translateZ(0)',
          WebkitBackfaceVisibility: 'hidden',
          backfaceVisibility: 'hidden'
        }}
      >
        <div className="container-wide">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <Link 
              href="/" 
              className="header-logo flex items-center space-x-3 ios-fix"
              onClick={closeMobileMenu}
            >
              <div className="relative w-8 h-8 lg:w-10 lg:h-10">
                <Image
                  src="/logo-header.png"
                  alt="Founding Paws Logo"
                  fill
                  className="object-contain"
                  priority
                  sizes="(max-width: 1024px) 32px, 40px"
                />
              </div>
              <span className={`font-heading text-lg lg:text-xl font-medium transition-colors ${
                isScrolled ? 'text-green' : 'text-cream'
              }`}>
                Founding Paws
              </span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              <Link 
                href="/produkte" 
                className={`font-medium transition-colors hover:text-copper ${
                  isScrolled ? 'text-green' : 'text-cream'
                }`}
              >
                Produkte
              </Link>
              <Link 
                href="/ratgeber" 
                className={`font-medium transition-colors hover:text-copper ${
                  isScrolled ? 'text-green' : 'text-cream'
                }`}
              >
                Ratgeber
              </Link>
              <Link 
                href="/team" 
                className={`font-medium transition-colors hover:text-copper ${
                  isScrolled ? 'text-green' : 'text-cream'
                }`}
              >
                Über uns
              </Link>
              <Link 
                href="/bedarfsfinder" 
                className="btn-copper pill text-cream px-6 py-2 text-sm font-medium shadow-lg hover:opacity-95 transition-all"
              >
                Bedarfsfinder
              </Link>
            </nav>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 touch-padding"
              aria-label="Menü öffnen"
              style={{
                WebkitTapHighlightColor: 'transparent',
                WebkitTouchCallout: 'none',
                WebkitUserSelect: 'none',
                userSelect: 'none'
              }}
            >
              <div className="w-6 h-6 flex flex-col justify-center space-y-1">
                <span className={`block h-0.5 w-6 transition-all duration-300 ${
                  isMobileMenuOpen ? 'rotate-45 translate-y-1.5' : ''
                } ${isScrolled ? 'bg-green' : 'bg-cream'}`}></span>
                <span className={`block h-0.5 w-6 transition-all duration-300 ${
                  isMobileMenuOpen ? 'opacity-0' : ''
                } ${isScrolled ? 'bg-green' : 'bg-cream'}`}></span>
                <span className={`block h-0.5 w-6 transition-all duration-300 ${
                  isMobileMenuOpen ? '-rotate-45 -translate-y-1.5' : ''
                } ${isScrolled ? 'bg-green' : 'bg-cream'}`}></span>
              </div>
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
          className="mobile-menu-backdrop absolute inset-0 bg-black/50"
          onClick={closeMobileMenu}
        />
        
        {/* Mobile Menu Panel - iOS Safe Area Support */}
        <div className={`mobile-menu-panel mobile-menu-slide absolute top-0 right-0 h-full w-80 max-w-[85vw] bg-white/95 border-l border-gray-200/50 shadow-2xl transform transition-transform duration-300 ${
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
          <div className="mobile-menu-content p-6 h-full overflow-y-auto">
            {/* Mobile Menu Header */}
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center space-x-3">
                <div className="relative w-8 h-8">
                  <Image
                    src="/logo-header.png"
                    alt="Founding Paws Logo"
                    fill
                    className="object-contain"
                    sizes="32px"
                  />
                </div>
                <span className="font-heading text-lg font-medium text-green">
                  Founding Paws
                </span>
              </div>
              <button
                onClick={closeMobileMenu}
                className="p-2 touch-padding"
                aria-label="Menü schließen"
                style={{
                  WebkitTapHighlightColor: 'transparent',
                  WebkitTouchCallout: 'none',
                  WebkitUserSelect: 'none',
                  userSelect: 'none'
                }}
              >
                <svg className="w-6 h-6 text-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Mobile Navigation */}
            <nav className="space-y-2">
              <Link 
                href="/produkte" 
                className="mobile-menu-link block w-full text-left text-green hover:bg-green/5 rounded-lg transition-colors"
                onClick={closeMobileMenu}
              >
                Produkte
              </Link>
              <Link 
                href="/ratgeber" 
                className="mobile-menu-link block w-full text-left text-green hover:bg-green/5 rounded-lg transition-colors"
                onClick={closeMobileMenu}
              >
                Ratgeber
              </Link>
              <Link 
                href="/team" 
                className="mobile-menu-link block w-full text-left text-green hover:bg-green/5 rounded-lg transition-colors"
                onClick={closeMobileMenu}
              >
                Über uns
              </Link>
              <Link 
                href="/bedarfsfinder" 
                className="mobile-menu-link block w-full text-left text-green hover:bg-green/5 rounded-lg transition-colors"
                onClick={closeMobileMenu}
              >
                Bedarfsfinder
              </Link>
            </nav>

            {/* Mobile CTA */}
            <div className="mt-8 pt-6 border-t border-gray-200">
              <Link 
                href="/bedarfsfinder" 
                className="btn-copper pill text-cream px-6 py-3 text-base font-medium shadow-lg hover:opacity-95 transition-all w-full text-center block"
                onClick={closeMobileMenu}
              >
                Bedarfsfinder starten
              </Link>
            </div>

            {/* Mobile Footer Links */}
            <div className="mt-8 pt-6 border-t border-gray-200 space-y-2">
              <Link 
                href="/impressum" 
                className="mobile-menu-link block text-sm text-gray-600 hover:text-green transition-colors"
                onClick={closeMobileMenu}
              >
                Impressum
              </Link>
              <Link 
                href="/datenschutz" 
                className="mobile-menu-link block text-sm text-gray-600 hover:text-green transition-colors"
                onClick={closeMobileMenu}
              >
                Datenschutz
              </Link>
              <Link 
                href="/agb" 
                className="mobile-menu-link block text-sm text-gray-600 hover:text-green transition-colors"
                onClick={closeMobileMenu}
              >
                AGB
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
