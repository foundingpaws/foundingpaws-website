// Google Analytics 4 Integration
declare global {
  interface Window {
    gtag: (...args: any[]) => void;
    dataLayer: any[];
  }
}

export const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_ID || 'G-XXXXXXXXXX';

// Initialize Google Analytics
export const initGA = () => {
  if (typeof window === 'undefined') return;
  
  // Load Google Analytics script
  const script = document.createElement('script');
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`;
  document.head.appendChild(script);

  // Initialize dataLayer
  window.dataLayer = window.dataLayer || [];
  window.gtag = function() {
    window.dataLayer.push(arguments);
  };

  // Configure GA4
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
