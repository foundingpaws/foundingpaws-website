// Google Analytics 4 Integration with Consent Mode
declare global {
  interface Window {
    gtag: (...args: any[]) => void;
    dataLayer: any[];
  }
}

export const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_ID || 'G-W1DWJZHQB1';

// Consent Mode Configuration
export const CONSENT_DEFAULTS = {
  'ad_storage': 'denied',
  'analytics_storage': 'denied',
  'functionality_storage': 'denied',
  'personalization_storage': 'denied',
  'security_storage': 'granted',
  'wait_for_update': 2000,
};

// Initialize Google Analytics with Consent Mode
export const initGA = () => {
  if (typeof window === 'undefined') return;
  
  // Initialize dataLayer first
  window.dataLayer = window.dataLayer || [];
  window.gtag = function() {
    window.dataLayer.push(arguments);
  };

  // Set default consent state (denied for all)
  window.gtag('consent', 'default', CONSENT_DEFAULTS);

  // Load Google Analytics script
  const script = document.createElement('script');
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`;
  document.head.appendChild(script);

  // Configure GA4 with consent mode
  window.gtag('js', new Date());
  window.gtag('config', GA_TRACKING_ID, {
    page_title: document.title,
    page_location: window.location.href,
    send_page_view: true,
    anonymize_ip: true,
    allow_google_signals: true,
    allow_ad_personalization_signals: false,
  });
};

// Update consent based on user choice
export const updateConsent = (analytics: boolean, adPersonalization: boolean = false) => {
  if (typeof window === 'undefined' || !window.gtag) return;
  
  window.gtag('consent', 'update', {
    'analytics_storage': analytics ? 'granted' : 'denied',
    'ad_storage': adPersonalization ? 'granted' : 'denied',
    'personalization_storage': adPersonalization ? 'granted' : 'denied',
  });
};

// Advanced consent update with all categories
export const updateAdvancedConsent = (preferences: {
  necessary: boolean;
  analytics: boolean;
  marketing: boolean;
  personalization: boolean;
  functional: boolean;
}) => {
  if (typeof window === 'undefined' || !window.gtag) return;
  
  window.gtag('consent', 'update', {
    'analytics_storage': preferences.analytics ? 'granted' : 'denied',
    'ad_storage': preferences.marketing ? 'granted' : 'denied',
    'personalization_storage': preferences.personalization ? 'granted' : 'denied',
    'functionality_storage': preferences.functional ? 'granted' : 'denied',
    'security_storage': preferences.necessary ? 'granted' : 'denied',
  });
};

// Get current consent state
export const getConsentState = () => {
  if (typeof window === 'undefined') return null;
  
  try {
    const stored = localStorage.getItem('fp-consent');
    return stored ? JSON.parse(stored) : null;
  } catch {
    return null;
  }
};

// Track page views
export const trackPageView = (url: string, title?: string) => {
  if (typeof window === 'undefined' || !window.gtag) return;
  
  window.gtag('config', GA_TRACKING_ID, {
    page_path: url,
    page_title: title || document.title,
  });
};

// Track custom events
export const trackEvent = (action: string, category: string, label?: string, value?: number) => {
  if (typeof window === 'undefined' || !window.gtag) return;
  
  window.gtag('event', action, {
    event_category: category,
    event_label: label,
    value: value,
  });
};

// Track e-commerce events
export const trackPurchase = (transactionId: string, value: number, currency: string = 'EUR') => {
  if (typeof window === 'undefined' || !window.gtag) return;
  
  window.gtag('event', 'purchase', {
    transaction_id: transactionId,
    value: value,
    currency: currency,
  });
};

// Track form submissions
export const trackFormSubmission = (formName: string, success: boolean = true) => {
  trackEvent('form_submit', 'engagement', `${formName}_${success ? 'success' : 'error'}`);
};

// Track button clicks
export const trackButtonClick = (buttonName: string, location: string) => {
  trackEvent('click', 'engagement', `${buttonName}_${location}`);
};

// Track scroll depth
export const trackScrollDepth = (depth: number) => {
  trackEvent('scroll', 'engagement', `scroll_depth_${depth}%`);
};

// Track time on page
export const trackTimeOnPage = (timeInSeconds: number) => {
  trackEvent('timing_complete', 'engagement', 'time_on_page', timeInSeconds);
};

// Track search queries
export const trackSearch = (searchTerm: string, resultsCount: number) => {
  trackEvent('search', 'engagement', searchTerm, resultsCount);
};

// Track video interactions
export const trackVideoInteraction = (action: string, videoTitle: string) => {
  trackEvent('video_interaction', 'engagement', `${action}_${videoTitle}`);
};

// Track file downloads
export const trackDownload = (fileName: string, fileType: string) => {
  trackEvent('file_download', 'engagement', `${fileName}_${fileType}`);
};

// Track newsletter signups
export const trackNewsletterSignup = (source: string) => {
  trackEvent('newsletter_signup', 'conversion', source);
};

// Track product interactions
export const trackProductView = (productId: string, productName: string) => {
  trackEvent('view_item', 'ecommerce', productName, 1);
};

export const trackAddToWishlist = (productId: string, productName: string) => {
  trackEvent('add_to_wishlist', 'ecommerce', productName, 1);
};

export const trackRemoveFromWishlist = (productId: string, productName: string) => {
  trackEvent('remove_from_wishlist', 'ecommerce', productName, 1);
};

// Track user engagement
export const trackEngagement = (action: string, element: string) => {
  trackEvent(action, 'engagement', element);
};

// Track errors
export const trackError = (error: string, fatal: boolean = false) => {
  trackEvent('exception', 'error', error, fatal ? 1 : 0);
};

// Track performance metrics
export const trackPerformance = (metric: string, value: number) => {
  trackEvent('timing_complete', 'performance', metric, Math.round(value));
};
