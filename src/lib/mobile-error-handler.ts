// Mobile-specific error handling and crash prevention

export interface MobileErrorInfo {
  userAgent: string;
  isIOS: boolean;
  isAndroid: boolean;
  isMobile: boolean;
  timestamp: number;
  errorType: 'video' | 'memory' | 'network' | 'javascript' | 'unknown';
  errorMessage: string;
  stack?: string;
}

export class MobileErrorHandler {
  private static instance: MobileErrorHandler;
  private errorCount = 0;
  private maxErrors = 3;

  static getInstance(): MobileErrorHandler {
    if (!MobileErrorHandler.instance) {
      MobileErrorHandler.instance = new MobileErrorHandler();
    }
    return MobileErrorHandler.instance;
  }

  private constructor() {
    this.setupGlobalErrorHandlers();
  }

  private setupGlobalErrorHandlers() {
    // Only run on client side
    if (typeof window === 'undefined') return;
    
    // Handle unhandled promise rejections
    window.addEventListener('unhandledrejection', (event) => {
      console.error('Unhandled promise rejection:', event.reason);
      this.handleError({
        userAgent: navigator.userAgent,
        isIOS: /iPad|iPhone|iPod/.test(navigator.userAgent),
        isAndroid: /Android/.test(navigator.userAgent),
        isMobile: /Mobi|Android/i.test(navigator.userAgent),
        timestamp: Date.now(),
        errorType: 'javascript',
        errorMessage: event.reason?.message || 'Unhandled promise rejection',
        stack: event.reason?.stack
      });
    });

    // Handle JavaScript errors
    window.addEventListener('error', (event) => {
      console.error('JavaScript error:', event.error);
      this.handleError({
        userAgent: navigator.userAgent,
        isIOS: /iPad|iPhone|iPod/.test(navigator.userAgent),
        isAndroid: /Android/.test(navigator.userAgent),
        isMobile: /Mobi|Android/i.test(navigator.userAgent),
        timestamp: Date.now(),
        errorType: 'javascript',
        errorMessage: event.message || 'Unknown JavaScript error',
        stack: event.error?.stack
      });
    });

    // Handle video errors specifically
    document.addEventListener('error', (event) => {
      if (event.target instanceof HTMLVideoElement) {
        console.error('Video error:', event);
        this.handleError({
          userAgent: navigator.userAgent,
          isIOS: /iPad|iPhone|iPod/.test(navigator.userAgent),
          isAndroid: /Android/.test(navigator.userAgent),
          isMobile: /Mobi|Android/i.test(navigator.userAgent),
          timestamp: Date.now(),
          errorType: 'video',
          errorMessage: 'Video loading or playback error',
          stack: event.error?.stack
        });
      }
    }, true);
  }

  public handleError(errorInfo: MobileErrorInfo) {
    this.errorCount++;
    
    // Log error for debugging
    console.error('Mobile Error Handler:', errorInfo);
    
    // If too many errors, show user-friendly message
    if (this.errorCount >= this.maxErrors) {
      this.showErrorNotification();
    }

    // Send to analytics/monitoring (if available)
    this.reportError(errorInfo);
  }

  private showErrorNotification() {
    // Create a non-intrusive error notification
    const notification = document.createElement('div');
    notification.className = 'fixed top-4 right-4 bg-red-500 text-white px-4 py-2 rounded-lg shadow-lg z-50 max-w-sm';
    notification.innerHTML = `
      <div class="flex items-center">
        <span class="mr-2">⚠️</span>
        <div>
          <div class="font-medium">Technisches Problem</div>
          <div class="text-sm opacity-90">Bitte lade die Seite neu</div>
        </div>
        <button onclick="this.parentElement.parentElement.remove()" class="ml-2 text-white hover:text-gray-200">
          ✕
        </button>
      </div>
    `;
    
    document.body.appendChild(notification);
    
    // Auto-remove after 5 seconds
    setTimeout(() => {
      if (notification.parentElement) {
        notification.remove();
      }
    }, 5000);
  }

  private reportError(errorInfo: MobileErrorInfo) {
    // In a real app, you would send this to your error monitoring service
    // For now, we'll just log it
    console.log('Error reported:', errorInfo);
    
    // Example: Send to analytics
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'exception', {
        description: errorInfo.errorMessage,
        fatal: false,
        custom_map: {
          error_type: errorInfo.errorType,
          is_mobile: errorInfo.isMobile,
          is_ios: errorInfo.isIOS,
          is_android: errorInfo.isAndroid
        }
      });
    }
  }

  // Method to check if device is prone to crashes
  public isDeviceProneToCrashes(): boolean {
    const userAgent = navigator.userAgent;
    const isOldIOS = /iPad|iPhone|iPod/.test(userAgent) && 
      /OS [1-9]_[0-9]/.test(userAgent) && 
      !/OS 1[0-9]_/.test(userAgent);
    
    const isOldAndroid = /Android/.test(userAgent) && 
      /Android [1-6]\./.test(userAgent);
    
    return isOldIOS || isOldAndroid || this.errorCount > 1;
  }

  // Method to get device capabilities
  public getDeviceCapabilities() {
    return {
      hasWebGL: !!document.createElement('canvas').getContext('webgl'),
      hasWebGL2: !!document.createElement('canvas').getContext('webgl2'),
      hasWebRTC: !!(navigator.mediaDevices && navigator.mediaDevices.getUserMedia),
      hasServiceWorker: 'serviceWorker' in navigator,
      hasPushNotifications: 'PushManager' in window,
      memoryInfo: (performance as any).memory ? {
        used: (performance as any).memory.usedJSHeapSize,
        total: (performance as any).memory.totalJSHeapSize,
        limit: (performance as any).memory.jsHeapSizeLimit
      } : null
    };
  }
}

// Export singleton instance
export const mobileErrorHandler = MobileErrorHandler.getInstance();
