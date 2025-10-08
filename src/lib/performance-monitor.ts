// Performance Monitoring and Core Web Vitals tracking
interface PerformanceMetric {
  name: string;
  value: number;
  rating: 'good' | 'needs-improvement' | 'poor';
  timestamp: number;
  url: string;
  userAgent: string;
}

interface CoreWebVitals {
  LCP?: number; // Largest Contentful Paint
  FID?: number; // First Input Delay
  CLS?: number; // Cumulative Layout Shift
  FCP?: number; // First Contentful Paint
  TTFB?: number; // Time to First Byte
  INP?: number; // Interaction to Next Paint
}

class PerformanceMonitor {
  private metrics: PerformanceMetric[] = [];
  private coreWebVitals: CoreWebVitals = {};
  private observer?: PerformanceObserver;
  private isInitialized = false;

  constructor() {
    this.initializeMonitoring();
  }

  private initializeMonitoring(): void {
    if (typeof window === 'undefined' || this.isInitialized) return;

    // Wait for page load
    if (document.readyState === 'loading') {
      window.addEventListener('load', () => this.startMonitoring());
    } else {
      this.startMonitoring();
    }

    this.isInitialized = true;
  }

  private startMonitoring(): void {
    this.measureCoreWebVitals();
    this.measureCustomMetrics();
    this.setupPerformanceObserver();
    this.measurePageLoadTime();
    this.measureResourceTiming();
  }

  private measureCoreWebVitals(): void {
    // Largest Contentful Paint (LCP)
    this.measureLCP();
    
    // First Input Delay (FID)
    this.measureFID();
    
    // Cumulative Layout Shift (CLS)
    this.measureCLS();
    
    // First Contentful Paint (FCP)
    this.measureFCP();
    
    // Time to First Byte (TTFB)
    this.measureTTFB();
  }

  private measureLCP(): void {
    if ('PerformanceObserver' in window) {
      const observer = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        const lastEntry = entries[entries.length - 1] as PerformanceEntry & { size: number };
        
        this.coreWebVitals.LCP = lastEntry.startTime;
        this.recordMetric('LCP', lastEntry.startTime, this.getLCPRating(lastEntry.startTime));
      });

      observer.observe({ entryTypes: ['largest-contentful-paint'] });
    }
  }

  private measureFID(): void {
    if ('PerformanceObserver' in window) {
      const observer = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        entries.forEach((entry: any) => {
          this.coreWebVitals.FID = entry.processingStart - entry.startTime;
          this.recordMetric('FID', this.coreWebVitals.FID, this.getFIDRating(this.coreWebVitals.FID));
        });
      });

      observer.observe({ entryTypes: ['first-input'] });
    }
  }

  private measureCLS(): void {
    if ('PerformanceObserver' in window) {
      let clsValue = 0;
      const observer = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        entries.forEach((entry: any) => {
          if (!entry.hadRecentInput) {
            clsValue += entry.value;
          }
        });
        
        this.coreWebVitals.CLS = clsValue;
        this.recordMetric('CLS', clsValue, this.getCLSRating(clsValue));
      });

      observer.observe({ entryTypes: ['layout-shift'] });
    }
  }

  private measureFCP(): void {
    if ('PerformanceObserver' in window) {
      const observer = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        entries.forEach((entry) => {
          this.coreWebVitals.FCP = entry.startTime;
          this.recordMetric('FCP', entry.startTime, this.getFCPRating(entry.startTime));
        });
      });

      observer.observe({ entryTypes: ['paint'] });
    }
  }

  private measureTTFB(): void {
    if ('PerformanceObserver' in window) {
      const observer = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        entries.forEach((entry: any) => {
          if (entry.entryType === 'navigation') {
            this.coreWebVitals.TTFB = entry.responseStart - entry.requestStart;
            this.recordMetric('TTFB', this.coreWebVitals.TTFB, this.getTTFBRating(this.coreWebVitals.TTFB));
          }
        });
      });

      observer.observe({ entryTypes: ['navigation'] });
    }
  }

  private measureCustomMetrics(): void {
    // Skip in development to improve performance
    if (process.env.NODE_ENV === 'development') {
      return;
    }
    
    // Time to Interactive (TTI) approximation
    this.measureTTI();
    
    // Total Blocking Time (TBT) approximation
    this.measureTBT();
    
    // Speed Index approximation
    this.measureSpeedIndex();
  }

  private measureTTI(): void {
    // Simplified TTI measurement
    const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
    if (navigation) {
      const tti = navigation.loadEventEnd - navigation.fetchStart;
      this.recordMetric('TTI', tti, this.getTTIRating(tti));
    }
  }

  private measureTBT(): void {
    // Measure long tasks as proxy for TBT
    if ('PerformanceObserver' in window) {
      let totalBlockingTime = 0;
      const observer = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        entries.forEach((entry: any) => {
          totalBlockingTime += entry.duration - 50; // Tasks over 50ms contribute to TBT
        });
        
        this.recordMetric('TBT', totalBlockingTime, this.getTBTRating(totalBlockingTime));
      });

      observer.observe({ entryTypes: ['longtask'] });
    }
  }

  private measureSpeedIndex(): void {
    // Simplified Speed Index using paint timing
    const paintEntries = performance.getEntriesByType('paint');
    const fcp = paintEntries.find(entry => entry.name === 'first-contentful-paint');
    const lcp = paintEntries.find(entry => entry.name === 'first-paint');
    
    if (fcp && lcp) {
      const speedIndex = (fcp.startTime + lcp.startTime) / 2;
      this.recordMetric('SpeedIndex', speedIndex, this.getSpeedIndexRating(speedIndex));
    }
  }

  private measurePageLoadTime(): void {
    window.addEventListener('load', () => {
      const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      if (navigation) {
        const loadTime = navigation.loadEventEnd - navigation.fetchStart;
        this.recordMetric('PageLoadTime', loadTime, this.getLoadTimeRating(loadTime));
      }
    });
  }

  private measureResourceTiming(): void {
    if ('PerformanceObserver' in window) {
      const observer = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        entries.forEach((entry: any) => {
          if (entry.entryType === 'resource') {
            const loadTime = entry.responseEnd - entry.requestStart;
            this.recordMetric(`Resource_${entry.name}`, loadTime, this.getResourceRating(loadTime));
          }
        });
      });

      observer.observe({ entryTypes: ['resource'] });
    }
  }

  private setupPerformanceObserver(): void {
    if ('PerformanceObserver' in window) {
      this.observer = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        entries.forEach((entry) => {
          this.recordMetric(entry.name, entry.duration, this.getGenericRating(entry.duration));
        });
      });

      this.observer.observe({ entryTypes: ['measure', 'navigation', 'resource'] });
    }
  }

  public recordMetric(name: string, value: number, rating: 'good' | 'needs-improvement' | 'poor'): void {
    // Skip in development to improve performance
    if (process.env.NODE_ENV === 'development') {
      return;
    }
    
    const metric: PerformanceMetric = {
      name,
      value: Math.round(value * 100) / 100, // Round to 2 decimal places
      rating,
      timestamp: Date.now(),
      url: window.location.href,
      userAgent: navigator.userAgent,
    };

    this.metrics.push(metric);

    // Send to analytics
    this.sendToAnalytics(metric);
  }

  private sendToAnalytics(metric: PerformanceMetric): void {
    // Send to Google Analytics
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'timing_complete', {
        name: metric.name,
        value: Math.round(metric.value),
        event_category: 'performance',
        event_label: metric.rating,
      });
    }

    // Send to custom analytics endpoint
    this.sendToCustomEndpoint(metric);
  }

  private async sendToCustomEndpoint(metric: PerformanceMetric): Promise<void> {
    // Disable in development to improve performance
    if (process.env.NODE_ENV === 'development') {
      return;
    }
    
    try {
      await fetch('/api/performance', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(metric),
      });
    } catch (error) {
      console.warn('Failed to send performance metric:', error);
    }
  }

  // Rating functions
  private getLCPRating(value: number): 'good' | 'needs-improvement' | 'poor' {
    if (value <= 2500) return 'good';
    if (value <= 4000) return 'needs-improvement';
    return 'poor';
  }

  private getFIDRating(value: number): 'good' | 'needs-improvement' | 'poor' {
    if (value <= 100) return 'good';
    if (value <= 300) return 'needs-improvement';
    return 'poor';
  }

  private getCLSRating(value: number): 'good' | 'needs-improvement' | 'poor' {
    if (value <= 0.1) return 'good';
    if (value <= 0.25) return 'needs-improvement';
    return 'poor';
  }

  private getFCPRating(value: number): 'good' | 'needs-improvement' | 'poor' {
    if (value <= 1800) return 'good';
    if (value <= 3000) return 'needs-improvement';
    return 'poor';
  }

  private getTTFBRating(value: number): 'good' | 'needs-improvement' | 'poor' {
    if (value <= 800) return 'good';
    if (value <= 1800) return 'needs-improvement';
    return 'poor';
  }

  private getTTIRating(value: number): 'good' | 'needs-improvement' | 'poor' {
    if (value <= 3800) return 'good';
    if (value <= 7300) return 'needs-improvement';
    return 'poor';
  }

  private getTBTRating(value: number): 'good' | 'needs-improvement' | 'poor' {
    if (value <= 200) return 'good';
    if (value <= 600) return 'needs-improvement';
    return 'poor';
  }

  private getSpeedIndexRating(value: number): 'good' | 'needs-improvement' | 'poor' {
    if (value <= 3400) return 'good';
    if (value <= 5800) return 'needs-improvement';
    return 'poor';
  }

  private getLoadTimeRating(value: number): 'good' | 'needs-improvement' | 'poor' {
    if (value <= 2000) return 'good';
    if (value <= 4000) return 'needs-improvement';
    return 'poor';
  }

  private getResourceRating(value: number): 'good' | 'needs-improvement' | 'poor' {
    if (value <= 1000) return 'good';
    if (value <= 3000) return 'needs-improvement';
    return 'poor';
  }

  private getGenericRating(value: number): 'good' | 'needs-improvement' | 'poor' {
    if (value <= 1000) return 'good';
    if (value <= 3000) return 'needs-improvement';
    return 'poor';
  }

  public getCoreWebVitals(): CoreWebVitals {
    return { ...this.coreWebVitals };
  }

  public getMetrics(): PerformanceMetric[] {
    return [...this.metrics];
  }

  public getMetricsByRating(rating: 'good' | 'needs-improvement' | 'poor'): PerformanceMetric[] {
    return this.metrics.filter(metric => metric.rating === rating);
  }

  public getAverageMetric(name: string): number {
    const metricValues = this.metrics
      .filter(metric => metric.name === name)
      .map(metric => metric.value);
    
    if (metricValues.length === 0) return 0;
    
    return metricValues.reduce((sum, value) => sum + value, 0) / metricValues.length;
  }

  public cleanup(): void {
    if (this.observer) {
      this.observer.disconnect();
    }
  }
}

// Create global instance
export const performanceMonitor = new PerformanceMonitor();

// Export convenience functions
export const getCoreWebVitals = () => performanceMonitor.getCoreWebVitals();
export const getPerformanceMetrics = () => performanceMonitor.getMetrics();
export const getMetricsByRating = (rating: 'good' | 'needs-improvement' | 'poor') => 
  performanceMonitor.getMetricsByRating(rating);
export const getAverageMetric = (name: string) => performanceMonitor.getAverageMetric(name);
