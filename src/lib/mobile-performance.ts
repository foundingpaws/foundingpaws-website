// Mobile performance optimization and testing
interface MobilePerformanceMetrics {
  viewport: {
    width: number;
    height: number;
    devicePixelRatio: number;
    orientation: 'portrait' | 'landscape';
  };
  network: {
    connectionType: string;
    effectiveType: string;
    downlink: number;
    rtt: number;
  };
  touch: {
    maxTouchPoints: number;
    touchSupport: boolean;
  };
  battery: {
    level: number;
    charging: boolean;
  };
  memory: {
    usedJSHeapSize: number;
    totalJSHeapSize: number;
    jsHeapSizeLimit: number;
  };
  performance: {
    isSlowConnection: boolean;
    isLowEndDevice: boolean;
    recommendedQuality: 'high' | 'medium' | 'low';
  };
}

interface MobileOptimization {
  imageQuality: 'high' | 'medium' | 'low';
  videoQuality: 'high' | 'medium' | 'low';
  enableAnimations: boolean;
  enableParallax: boolean;
  enableWebGL: boolean;
  preloadImages: boolean;
  lazyLoadImages: boolean;
  enableServiceWorker: boolean;
  enableOfflineSupport: boolean;
}

class MobilePerformanceManager {
  private metrics: MobilePerformanceMetrics | null = null;
  private optimization: MobileOptimization | null = null;

  constructor() {
    if (typeof window !== 'undefined') {
      this.initializeMobileDetection();
    }
  }

  private initializeMobileDetection(): void {
    // Detect mobile device
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    
    if (isMobile) {
      this.measureMobilePerformance();
    }
  }

  private async measureMobilePerformance(): Promise<void> {
    const viewport = this.getViewportInfo();
    const network = await this.getNetworkInfo();
    const touch = this.getTouchInfo();
    const battery = await this.getBatteryInfo();
    const memory = this.getMemoryInfo();
    
    const performance = this.analyzePerformance(viewport, network, touch, battery, memory);
    
    this.metrics = {
      viewport,
      network,
      touch,
      battery,
      memory,
      performance,
    };

    this.optimization = this.generateOptimization(performance);
    
    this.applyOptimizations();
  }

  private getViewportInfo() {
    return {
      width: window.innerWidth,
      height: window.innerHeight,
      devicePixelRatio: window.devicePixelRatio || 1,
      orientation: (window.innerWidth > window.innerHeight ? 'landscape' : 'portrait') as 'portrait' | 'landscape',
    };
  }

  private async getNetworkInfo() {
    const connection = (navigator as any).connection || (navigator as any).mozConnection || (navigator as any).webkitConnection;
    
    return {
      connectionType: connection?.type || 'unknown',
      effectiveType: connection?.effectiveType || '4g',
      downlink: connection?.downlink || 10,
      rtt: connection?.rtt || 50,
    };
  }

  private getTouchInfo() {
    return {
      maxTouchPoints: navigator.maxTouchPoints || 0,
      touchSupport: 'ontouchstart' in window,
    };
  }

  private async getBatteryInfo() {
    try {
      const battery = await (navigator as any).getBattery();
      return {
        level: battery.level,
        charging: battery.charging,
      };
    } catch {
      return {
        level: 1,
        charging: true,
      };
    }
  }

  private getMemoryInfo() {
    const memory = (performance as any).memory;
    
    return {
      usedJSHeapSize: memory?.usedJSHeapSize || 0,
      totalJSHeapSize: memory?.totalJSHeapSize || 0,
      jsHeapSizeLimit: memory?.jsHeapSizeLimit || 0,
    };
  }

  private analyzePerformance(viewport: any, network: any, touch: any, battery: any, memory: any) {
    const isSlowConnection = network.effectiveType === '2g' || network.effectiveType === '3g' || network.downlink < 1;
    const isLowEndDevice = viewport.devicePixelRatio < 2 || memory.usedJSHeapSize > memory.jsHeapSizeLimit * 0.8;
    
    let recommendedQuality: 'high' | 'medium' | 'low' = 'high';
    
    if (isSlowConnection && isLowEndDevice) {
      recommendedQuality = 'low';
    } else if (isSlowConnection || isLowEndDevice) {
      recommendedQuality = 'medium';
    }

    return {
      isSlowConnection,
      isLowEndDevice,
      recommendedQuality,
    };
  }

  private generateOptimization(performance: any): MobileOptimization {
    return {
      imageQuality: performance.recommendedQuality,
      videoQuality: performance.recommendedQuality,
      enableAnimations: !performance.isLowEndDevice,
      enableParallax: !performance.isSlowConnection && !performance.isLowEndDevice,
      enableWebGL: !performance.isLowEndDevice,
      preloadImages: !performance.isSlowConnection,
      lazyLoadImages: performance.isSlowConnection,
      enableServiceWorker: true,
      enableOfflineSupport: performance.isSlowConnection,
    };
  }

  private applyOptimizations(): void {
    if (!this.optimization) return;

    // Apply CSS optimizations
    this.applyCSSOptimizations();
    
    // Apply image optimizations
    this.applyImageOptimizations();
    
    // Apply animation optimizations
    this.applyAnimationOptimizations();
    
    // Apply network optimizations
    this.applyNetworkOptimizations();
  }

  private applyCSSOptimizations(): void {
    if (!this.optimization) return;

    const style = document.createElement('style');
    style.textContent = `
      /* Mobile performance optimizations */
      ${!this.optimization.enableAnimations ? `
        *, *::before, *::after {
          animation-duration: 0.01ms !important;
          animation-iteration-count: 1 !important;
          transition-duration: 0.01ms !important;
        }
      ` : ''}
      
      ${this.optimization.imageQuality === 'low' ? `
        img {
          image-rendering: -webkit-optimize-contrast;
          image-rendering: crisp-edges;
        }
      ` : ''}
      
      /* Reduce motion for low-end devices */
      @media (prefers-reduced-motion: reduce) {
        *, *::before, *::after {
          animation-duration: 0.01ms !important;
          animation-iteration-count: 1 !important;
          transition-duration: 0.01ms !important;
        }
      }
    `;
    document.head.appendChild(style);
  }

  private applyImageOptimizations(): void {
    if (!this.optimization) return;

    const images = document.querySelectorAll('img');
    
    images.forEach(img => {
      // Add loading attribute for lazy loading
      if (this.optimization!.lazyLoadImages) {
        img.setAttribute('loading', 'lazy');
      }
      
      // Add decoding attribute for better performance
      img.setAttribute('decoding', 'async');
      
      // Optimize image quality based on device
      if (this.optimization!.imageQuality === 'low') {
        img.style.imageRendering = 'crisp-edges';
      }
    });
  }

  private applyAnimationOptimizations(): void {
    if (!this.optimization) return;

    // Disable animations on low-end devices
    if (!this.optimization.enableAnimations) {
      document.body.classList.add('no-animations');
    }
    
    // Disable parallax on slow connections or low-end devices
    if (!this.optimization.enableParallax) {
      document.body.classList.add('no-parallax');
    }
  }

  private applyNetworkOptimizations(): void {
    if (!this.optimization) return;

    // Preload critical resources
    if (this.optimization.preloadImages) {
      this.preloadCriticalImages();
    }
    
    // Enable service worker for offline support
    if (this.optimization.enableServiceWorker) {
      this.registerServiceWorker();
    }
  }

  private preloadCriticalImages(): void {
    const criticalImages = [
      '/logo-header.png',
      '/brand/logo-main.jpg',
    ];
    
    criticalImages.forEach(src => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.as = 'image';
      link.href = src;
      document.head.appendChild(link);
    });
  }

  private registerServiceWorker(): void {
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.register('/sw.js')
        .then(registration => {
          console.log('Service Worker registered:', registration);
        })
        .catch(error => {
          console.log('Service Worker registration failed:', error);
        });
    }
  }

  public getMetrics(): MobilePerformanceMetrics | null {
    return this.metrics;
  }

  public getOptimization(): MobileOptimization | null {
    return this.optimization;
  }

  public isMobile(): boolean {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
  }

  public isSlowConnection(): boolean {
    return this.metrics?.performance.isSlowConnection || false;
  }

  public isLowEndDevice(): boolean {
    return this.metrics?.performance.isLowEndDevice || false;
  }

  public getRecommendedQuality(): 'high' | 'medium' | 'low' {
    return this.metrics?.performance.recommendedQuality || 'high';
  }

  public logMobileInfo(): void {
    if (this.metrics) {
      console.group('📱 Mobile Performance');
      console.log('Viewport:', this.metrics.viewport);
      console.log('Network:', this.metrics.network);
      console.log('Touch:', this.metrics.touch);
      console.log('Battery:', this.metrics.battery);
      console.log('Memory:', this.metrics.memory);
      console.log('Performance:', this.metrics.performance);
      console.log('Optimization:', this.optimization);
      console.groupEnd();
    }
  }
}

// Create global instance
export const mobilePerformanceManager = new MobilePerformanceManager();

// Export convenience functions
export const getMobileMetrics = () => mobilePerformanceManager.getMetrics();
export const getMobileOptimization = () => mobilePerformanceManager.getOptimization();
export const isMobile = () => mobilePerformanceManager.isMobile();
export const isSlowConnection = () => mobilePerformanceManager.isSlowConnection();
export const isLowEndDevice = () => mobilePerformanceManager.isLowEndDevice();
export const getRecommendedQuality = () => mobilePerformanceManager.getRecommendedQuality();
export const logMobileInfo = () => mobilePerformanceManager.logMobileInfo();
