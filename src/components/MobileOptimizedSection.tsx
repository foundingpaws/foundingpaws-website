"use client";

import { useState, useEffect } from 'react';
import { mobilePerformanceManager } from '@/lib/mobile-performance';

interface MobileOptimizedSectionProps {
  children: React.ReactNode;
  title: string;
  id: string;
  defaultExpanded?: boolean;
  compactView?: React.ReactNode;
  className?: string;
}

export default function MobileOptimizedSection({ 
  children, 
  title, 
  id, 
  defaultExpanded = false,
  compactView,
  className = ""
}: MobileOptimizedSectionProps) {
  const [isExpanded, setIsExpanded] = useState(defaultExpanded);
  const [isMobile, setIsMobile] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      const mobile = mobilePerformanceManager.isMobile();
      setIsMobile(mobile);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    if (!isMobile) return;

    const handleScroll = () => {
      const element = document.getElementById(id);
      if (element) {
        const rect = element.getBoundingClientRect();
        const isInView = rect.top < window.innerHeight && rect.bottom > 0;
        setHasScrolled(isInView);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isMobile, id]);

  // Expand when receiving custom expand event or matching hash
  useEffect(() => {
    if (!isMobile) return;

    const onExpand = (e: Event) => {
      try {
        const detail = (e as CustomEvent).detail as { id?: string } | undefined;
        if (detail?.id === id) {
          setIsExpanded(true);
          // focus heading for a11y
          const heading = document.getElementById(`${id}-heading`);
          if (heading) heading.focus();
        }
      } catch {}
    };

    const onHashChange = () => {
      if (location.hash.replace('#', '') === id) {
        setIsExpanded(true);
      }
    };

    window.addEventListener('fp:expandSection', onExpand as EventListener);
    window.addEventListener('hashchange', onHashChange);
    // initial check
    onHashChange();
    return () => {
      window.removeEventListener('fp:expandSection', onExpand as EventListener);
      window.removeEventListener('hashchange', onHashChange);
    };
  }, [isMobile, id]);

  if (!isMobile) {
    return <div className={className}>{children}</div>;
  }

  return (
    <section id={id} className={`${className} transition-all duration-300 mobile-optimized-section`}>
      {/* Section Header - Always Visible */}
      <div className="sticky top-16 z-30 bg-white/95 backdrop-blur-sm border-b border-gray-100 py-4 sticky-header">
        <div className="container-wide">
          <div className="flex items-center justify-between">
            <h2 id={`${id}-heading`} tabIndex={-1} className="text-xl font-bold text-green">{title}</h2>
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="flex items-center gap-2 text-copper hover:text-copper/80 transition-colors"
              style={{
                WebkitTapHighlightColor: 'transparent',
                WebkitTouchCallout: 'none',
                WebkitUserSelect: 'none',
                userSelect: 'none',
                minHeight: '44px',
                minWidth: '44px',
              }}
              aria-label={`${isExpanded ? 'Zusammenklappen' : 'Aufklappen'}`}
            >
              <span className="text-sm font-medium">
                {isExpanded ? 'Weniger anzeigen' : 'Mehr anzeigen'}
              </span>
              <svg 
                className={`w-5 h-5 transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`} 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Section Content */}
      <div className={`transition-all duration-500 overflow-hidden ${
        isExpanded ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
      }`}>
        <div className="py-6">
          {isExpanded ? children : (compactView || children)}
        </div>
      </div>

      {/* Compact Preview when collapsed */}
      {!isExpanded && compactView && (
        <div className="py-4 bg-gray-50/50">
          <div className="container-wide">
            {compactView}
          </div>
        </div>
      )}
    </section>
  );
}
