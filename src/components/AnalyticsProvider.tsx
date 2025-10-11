'use client';

import { useEffect, Suspense } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';
import Script from 'next/script';
import { initGA, trackPageView, updateConsent, updateAdvancedConsent, getConsentState } from '@/lib/analytics';
import { cookieManager } from '@/lib/cookie-manager';
// import { performanceMonitor } from '@/lib/performance-monitor'; // Disabled for development performance

interface AnalyticsProviderProps {
  children: React.ReactNode;
  gaId?: string;
}

function AnalyticsProviderInner({ 
  children, 
  gaId = process.env.NEXT_PUBLIC_GA_ID || 'G-W1DWJZHQB1' 
}: AnalyticsProviderProps) {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  // Check for existing consent and update accordingly
  useEffect(() => {
    if (gaId && gaId !== 'G-XXXXXXXXXX') {
      const preferences = cookieManager.getPreferences();
      updateAdvancedConsent(preferences);
    }
  }, [gaId]);

  // Listen for consent changes
  useEffect(() => {
    const handleConsentChange = () => {
      const preferences = cookieManager.getPreferences();
      updateAdvancedConsent(preferences);
    };

    // Listen for custom consent update events
    window.addEventListener('consent-updated', handleConsentChange);
    
    // Also check on mount
    handleConsentChange();

    return () => {
      window.removeEventListener('consent-updated', handleConsentChange);
    };
  }, []);

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
      // Track page load time - disabled in development
      if (process.env.NODE_ENV === 'production') {
        const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
        if (navigation) {
          const loadTime = navigation.loadEventEnd - navigation.fetchStart;
          // performanceMonitor.recordMetric('PageLoadTime', loadTime, 'good');
        }
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
      {/* Google Analytics Script with Consent Mode */}
      {gaId && gaId !== 'G-XXXXXXXXXX' && (
        <>
          {/* Define dataLayer/gtag right after interactive to avoid race with config */}
          <Script
            id="gtag-init"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
              __html: `
                window.dataLayer = window.dataLayer || [];
                window.gtag = window.gtag || function(){ window.dataLayer.push(arguments); };
                // Set default consent state (denied for all)
                window.gtag('consent', 'default', {
                  'ad_storage': 'denied',
                  'analytics_storage': 'denied',
                  'functionality_storage': 'denied',
                  'personalization_storage': 'denied',
                  'security_storage': 'granted',
                  'wait_for_update': 2000,
                });
              `,
            }}
          />
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
                window.gtag = window.gtag || function(){ window.dataLayer.push(arguments); };
                window.gtag('js', new Date());
                window.gtag('config', '${gaId}', {
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

export default function AnalyticsProvider(props: AnalyticsProviderProps) {
  return (
    <Suspense fallback={<div>{props.children}</div>}>
      <AnalyticsProviderInner {...props} />
    </Suspense>
  );
}
