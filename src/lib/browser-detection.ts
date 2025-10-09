// Browser detection and compatibility utilities
interface BrowserInfo {
  name: string;
  version: string;
  isSupported: boolean;
  features: {
    webp: boolean;
    avif: boolean;
    webgl: boolean;
    webp2: boolean;
    cssGrid: boolean;
    flexbox: boolean;
    customProperties: boolean;
    intersectionObserver: boolean;
    resizeObserver: boolean;
    performanceObserver: boolean;
  };
  userAgent: string;
}

class BrowserDetector {
  private userAgent: string;
  private browserInfo: BrowserInfo | null = null;

  constructor() {
    this.userAgent = typeof window !== 'undefined' ? navigator.userAgent : '';
  }

  public detect(): BrowserInfo {
    if (this.browserInfo) return this.browserInfo;

    const ua = this.userAgent.toLowerCase();
    let name = 'Unknown';
    let version = '0';
    let isSupported = true;

    // Detect browser
    if (ua.includes('chrome') && !ua.includes('edg')) {
      name = 'Chrome';
      const match = ua.match(/chrome\/(\d+)/);
      version = match ? match[1] : '0';
    } else if (ua.includes('firefox')) {
      name = 'Firefox';
      const match = ua.match(/firefox\/(\d+)/);
      version = match ? match[1] : '0';
    } else if (ua.includes('safari') && !ua.includes('chrome')) {
      name = 'Safari';
      const match = ua.match(/version\/(\d+)/);
      version = match ? match[1] : '0';
    } else if (ua.includes('edg')) {
      name = 'Edge';
      const match = ua.match(/edg\/(\d+)/);
      version = match ? match[1] : '0';
    } else if (ua.includes('opera') || ua.includes('opr')) {
      name = 'Opera';
      const match = ua.match(/(?:opera|opr)\/(\d+)/);
      version = match ? match[1] : '0';
    }

    // Check support based on version
    const versionNum = parseInt(version, 10);
    isSupported = this.checkBrowserSupport(name, versionNum);

    // Detect features
    const features = this.detectFeatures();

    this.browserInfo = {
      name,
      version,
      isSupported,
      features,
      userAgent: this.userAgent,
    };

    return this.browserInfo;
  }

  private checkBrowserSupport(name: string, version: number): boolean {
    const minVersions: Record<string, number> = {
      Chrome: 90,
      Firefox: 88,
      Safari: 14,
      Edge: 90,
      Opera: 76,
    };

    const minVersion = minVersions[name] || 0;
    return version >= minVersion;
  }

  private detectFeatures(): BrowserInfo['features'] {
    if (typeof window === 'undefined') {
      return {
        webp: false,
        avif: false,
        webgl: false,
        webp2: false,
        cssGrid: false,
        flexbox: false,
        customProperties: false,
        intersectionObserver: false,
        resizeObserver: false,
        performanceObserver: false,
      };
    }

    return {
      webp: this.supportsWebP(),
      avif: this.supportsAVIF(),
      webgl: this.supportsWebGL(),
      webp2: this.supportsWebP2(),
      cssGrid: this.supportsCSSGrid(),
      flexbox: this.supportsFlexbox(),
      customProperties: this.supportsCustomProperties(),
      intersectionObserver: 'IntersectionObserver' in window,
      resizeObserver: 'ResizeObserver' in window,
      performanceObserver: 'PerformanceObserver' in window,
    };
  }

  private supportsWebP(): boolean {
    const canvas = document.createElement('canvas');
    canvas.width = 1;
    canvas.height = 1;
    return canvas.toDataURL('image/webp').indexOf('data:image/webp') === 0;
  }

  private supportsAVIF(): boolean {
    const canvas = document.createElement('canvas');
    canvas.width = 1;
    canvas.height = 1;
    return canvas.toDataURL('image/avif').indexOf('data:image/avif') === 0;
  }

  private supportsWebP2(): boolean {
    const canvas = document.createElement('canvas');
    canvas.width = 1;
    canvas.height = 1;
    return canvas.toDataURL('image/webp2').indexOf('data:image/webp2') === 0;
  }

  private supportsWebGL(): boolean {
    try {
      const canvas = document.createElement('canvas');
      return !!(canvas.getContext('webgl') || canvas.getContext('experimental-webgl'));
    } catch {
      return false;
    }
  }

  private supportsCSSGrid(): boolean {
    return CSS.supports('display', 'grid');
  }

  private supportsFlexbox(): boolean {
    return CSS.supports('display', 'flex');
  }

  private supportsCustomProperties(): boolean {
    return CSS.supports('--custom-property', 'value');
  }

  public getOptimalImageFormat(): 'avif' | 'webp' | 'webp2' | 'jpeg' {
    const features = this.detect().features;
    
    if (features.avif) return 'avif';
    if (features.webp2) return 'webp2';
    if (features.webp) return 'webp';
    return 'jpeg';
  }

  public getOptimalVideoFormat(): 'mp4' | 'webm' | 'ogg' {
    const video = document.createElement('video');
    
    if (video.canPlayType('video/mp4')) return 'mp4';
    if (video.canPlayType('video/webm')) return 'webm';
    if (video.canPlayType('video/ogg')) return 'ogg';
    return 'mp4';
  }

  public getPerformanceLevel(): 'high' | 'medium' | 'low' {
    const info = this.detect();
    const features = info.features;
    
    let score = 0;
    if (features.webgl) score += 2;
    if (features.intersectionObserver) score += 1;
    if (features.resizeObserver) score += 1;
    if (features.performanceObserver) score += 1;
    if (features.avif) score += 2;
    if (features.webp) score += 1;
    if (features.cssGrid) score += 1;
    if (features.flexbox) score += 1;
    if (features.customProperties) score += 1;
    
    if (score >= 8) return 'high';
    if (score >= 5) return 'medium';
    return 'low';
  }

  public getRecommendedSettings(): {
    enableAnimations: boolean;
    enableParallax: boolean;
    enableWebGL: boolean;
    imageQuality: 'high' | 'medium' | 'low';
    videoQuality: 'high' | 'medium' | 'low';
  } {
    const performanceLevel = this.getPerformanceLevel();
    const features = this.detect().features;
    
    return {
      enableAnimations: performanceLevel !== 'low',
      enableParallax: performanceLevel === 'high' && features.webgl,
      enableWebGL: features.webgl,
      imageQuality: performanceLevel === 'high' ? 'high' : performanceLevel === 'medium' ? 'medium' : 'low',
      videoQuality: performanceLevel === 'high' ? 'high' : 'medium',
    };
  }

  public logBrowserInfo(): void {
    const info = this.detect();
    const settings = this.getRecommendedSettings();
    
    console.group('🌐 Browser Detection');
    console.log('Browser:', `${info.name} ${info.version}`);
    console.log('Supported:', info.isSupported ? '✅' : '❌');
    console.log('Performance Level:', this.getPerformanceLevel());
    console.log('Features:', info.features);
    console.log('Recommended Settings:', settings);
    console.groupEnd();
  }
}

// Create global instance
export const browserDetector = new BrowserDetector();

// Export convenience functions
export const detectBrowser = () => browserDetector.detect();
export const getOptimalImageFormat = () => browserDetector.getOptimalImageFormat();
export const getOptimalVideoFormat = () => browserDetector.getOptimalVideoFormat();
export const getPerformanceLevel = () => browserDetector.getPerformanceLevel();
export const getRecommendedSettings = () => browserDetector.getRecommendedSettings();
export const logBrowserInfo = () => browserDetector.logBrowserInfo();
