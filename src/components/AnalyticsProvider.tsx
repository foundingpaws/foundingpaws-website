'use client';

import { useEffect } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';
import Script from 'next/script';
import { initGA, trackPageView } from '@/lib/analytics';
import { performanceMonitor } from '@/lib/performance-monitor';

interface AnalyticsProviderProps {
  children: React.ReactNode;
  gaId?: string;
}

export default function AnalyticsProvider({ 
  children, 
  gaId = process.env.NEXT_PUBLIC_GA_ID 
}: AnalyticsProviderProps) {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  // Initialize Google Analytics
  useEffect(() => {
    if (gaId && gaId !== 'G-XXXXXXXXXX') {
      initGA();
    }
  }, [gaId]);

  // Track page views
  useEffect(() => {
    if (gaId && gaId !== 'G-XXXXXXXXXX') {
      const url = pathname + (searchParams?.toString() ? `?${searchParams.toString()}` : '');
      trackPageView(url);
    }
  }, [pathname, searchParams, gaId]);

  // Track performance metrics
  useEffect(() => {
    const handleLoad = () => {
      // Track page load time
      const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      if (navigation) {
        const loadTime = navigation.loadEventEnd - navigation.fetchStart;
        performanceMonitor.recordMetric('PageLoadTime', loadTime, 'good');
      }
    };

    if (document.readyState === 'complete') {
      handleLoad();
    } else {
      window.addEventListener('load', handleLoad);
      return () => window.removeEventListener('load', handleLoad);
    }
  }, []);

  // Track scroll depth
  useEffect(() => {
    let maxScrollDepth = 0;
    const trackScroll = () => {
      const scrollDepth = Math.round(
        (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100
      );
      
      if (scrollDepth > maxScrollDepth) {
        maxScrollDepth = scrollDepth;
        
        // Track milestone scroll depths
        if (scrollDepth >= 25 && maxScrollDepth < 25) {
          trackPageView(`${pathname}?scroll=25`);
        } else if (scrollDepth >= 50 && maxScrollDepth < 50) {
          trackPageView(`${pathname}?scroll=50`);
        } else if (scrollDepth >= 75 && maxScrollDepth < 75) {
          trackPageView(`${pathname}?scroll=75`);
        } else if (scrollDepth >= 90 && maxScrollDepth < 90) {
          trackPageView(`${pathname}?scroll=90`);
        }
      }
    };

    window.addEventListener('scroll', trackScroll, { passive: true });
    return () => window.removeEventListener('scroll', trackScroll);
  }, [pathname]);

  // Track time on page
  useEffect(() => {
    const startTime = Date.now();
    
    return () => {
      const timeOnPage = Math.round((Date.now() - startTime) / 1000);
      if (timeOnPage > 5) { // Only track if user spent more than 5 seconds
        trackPageView(`${pathname}?time=${timeOnPage}s`);
      }
    };
  }, [pathname]);

  return (
    <>
      {/* Google Analytics Script */}
      {gaId && gaId !== 'G-XXXXXXXXXX' && (
        <>
          <Script
            strategy="afterInteractive"
            src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
          />
          <Script
            id="google-analytics"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
              __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${gaId}', {
                  page_title: document.title,
                  page_location: window.location.href,
                  send_page_view: true,
                  anonymize_ip: true,
                  allow_google_signals: true,
                  allow_ad_personalization_signals: false,
                });
              `,
            }}
          />
        </>
      )}
      
      {children}
    </>
  );
}
