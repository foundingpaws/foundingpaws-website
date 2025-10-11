"use client";

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

interface QuickNavItem {
  id: string;
  label: string;
  icon: string;
  section?: string;
  href?: string;
}

// Fokus auf 3 Kern-Links passend zur CI
const quickPageItems: QuickNavItem[] = [
  { id: 'produkte', label: 'Produkte', icon: '🐾', href: '/produkte' },
  { id: 'bedarfsfinder', label: 'Bedarfsfinder', icon: '✨', href: '/bedarfsfinder' },
  { id: 'ratgeber', label: 'Ratgeber', icon: '📖', href: '/ratgeber' },
];

const quickSectionItems: QuickNavItem[] = [
  { id: 'products', label: 'Produkte (Seite)', icon: '↧', section: '#products' },
  { id: 'faq', label: 'FAQ (Seite)', icon: '↧', section: '#faq' },
];

export default function MobileQuickNav() {
  const router = useRouter();
  const [isVisible, setIsVisible] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const [isExpanded, setIsExpanded] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Simple mobile detection
    const checkMobile = () => {
      const mobile = window.innerWidth <= 768;
      setIsMobile(mobile);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    if (!isMobile) return;

    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      
      // Show after scrolling past hero section
      setIsVisible(scrollY > windowHeight * 0.3);
      
      // Update active section based on scroll position
      const sections = quickSectionItems.map(item => {
        const el = item.section ? document.querySelector(item.section) : null;
        let offset = 0;
        if (el) {
          const rect = (el as HTMLElement).getBoundingClientRect();
          offset = rect.top + window.scrollY;
        }
        return { id: item.id, element: el, offset };
      });
      
      const currentSection = sections.find(section => 
        section.element && scrollY >= section.offset - 100
      );
      
      if (currentSection) {
        setActiveSection(currentSection.id);
      }
    };

    // Initial call
    handleScroll();
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isMobile]);

  const scrollToSection = (sectionId: string) => {
    const cleanId = sectionId.replace('#', '');
    // Ask target section to expand
    try {
      window.dispatchEvent(new CustomEvent('fp:expandSection', { detail: { id: cleanId } }));
    } catch {}

    const element = document.querySelector(sectionId) as HTMLElement | null;
    if (element) {
      const headerHeight = 80; // Account for fixed header
      const elementPosition = Math.max(0, element.offsetTop - headerHeight);
      window.scrollTo({ top: elementPosition, behavior: 'smooth' });
      // Update hash without jumping
      try {
        history.replaceState(null, '', `#${cleanId}`);
      } catch {}
    }
    setIsExpanded(false);
  };

  const goToPage = (href: string) => {
    try {
      router.push(href);
    } catch {
      // fallback
      location.href = href;
    }
    setIsExpanded(false);
  };

  if (!isMobile || !isVisible) return null;

  return (
    <div className="fixed bottom-20 right-4 z-[2000] mobile-quick-nav">
      {/* Main Toggle Button */}
      <div className="relative">
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="bg-green text-cream w-14 h-14 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center group"
          style={{
            WebkitTapHighlightColor: 'transparent',
            WebkitTouchCallout: 'none',
            WebkitUserSelect: 'none',
            userSelect: 'none',
            transform: isExpanded ? 'scale(1.1)' : 'scale(1)',
          }}
          aria-label="Schnellnavigation öffnen"
        >
          {/* CI-konformes Paw-Icon */}
          <span className={`text-2xl transition-transform duration-300 ${isExpanded ? 'rotate-12' : ''}`}>🐾</span>
        </button>

        {/* Quick Navigation Items */}
        <div className={`absolute bottom-16 right-0 transition-all duration-300 ${
          isExpanded ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}>
          <div className="flex flex-col gap-3 mb-2 min-w-[220px]">
            {quickPageItems.map((item, index) => (
              <button
                key={item.id}
                onClick={() => item.href && goToPage(item.href)}
                className={`bg-white/95 backdrop-blur-sm text-green px-4 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-3 whitespace-nowrap group`}
                style={{
                  WebkitTapHighlightColor: 'transparent',
                  WebkitTouchCallout: 'none',
                  WebkitUserSelect: 'none',
                  userSelect: 'none',
                  transform: `translateY(${isExpanded ? 0 : (index + 1) * 8}px)`,
                  transitionDelay: isExpanded ? `${index * 35}ms` : '0ms',
                }}
                aria-label={`Gehe zu ${item.label}`}
              >
                <span className="text-lg">{item.icon}</span>
                <span className="font-medium text-sm">{item.label}</span>
              </button>
            ))}

            {/* Section Links (reduziert) */}
            {quickSectionItems.map((item, index) => (
              <button
                key={item.id}
                onClick={() => item.section && scrollToSection(item.section)}
                className={`bg-white/95 backdrop-blur-sm text-green px-4 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-3 whitespace-nowrap group ${
                  activeSection === item.id ? 'ring-2 ring-copper bg-copper/10' : ''
                }`}
                style={{
                  WebkitTapHighlightColor: 'transparent',
                  WebkitTouchCallout: 'none',
                  WebkitUserSelect: 'none',
                  userSelect: 'none',
                  transform: `translateY(${isExpanded ? 0 : (index + 1) * 8}px)`,
                  transitionDelay: isExpanded ? `${(quickPageItems.length + index) * 35}ms` : '0ms',
                }}
                aria-label={`Zu ${item.label} springen`}
              >
                <span className="text-lg">{item.icon}</span>
                <span className="font-medium text-sm">{item.label}</span>
                {activeSection === item.id && (
                  <div className="w-2 h-2 bg-copper rounded-full"></div>
                )}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Progress Indicator */}
      <div className="absolute -left-2 top-0 w-1 h-14 bg-gray-200 rounded-full overflow-hidden">
        <div 
          className="bg-copper transition-all duration-300 ease-out"
          style={{
            height: `${Math.min((window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100, 100)}%`
          }}
        />
      </div>
    </div>
  );
}
