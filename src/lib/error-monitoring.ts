// Error Monitoring with Sentry-like functionality
interface ErrorInfo {
  message: string;
  stack?: string;
  url: string;
  line?: number;
  column?: number;
  timestamp: number;
  userAgent: string;
  userId?: string;
  sessionId: string;
  severity: 'low' | 'medium' | 'high' | 'critical';
  context?: Record<string, unknown>;
}

class ErrorMonitor {
  private apiEndpoint: string;
  private sessionId: string;
  private userId?: string;
  private errorQueue: ErrorInfo[] = [];
  private maxQueueSize = 50;
  private flushInterval = 30000; // 30 seconds
  private isOnline = true;

  constructor(apiEndpoint: string = '/api/errors') {
    this.apiEndpoint = apiEndpoint;
    this.sessionId = this.generateSessionId();
    this.initializeErrorHandlers();
    this.setupOnlineStatus();
    this.startFlushInterval();
  }

  private generateSessionId(): string {
    return `session_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
  }

  private initializeErrorHandlers(): void {
    // Global error handler
    window.addEventListener('error', (event) => {
      this.captureError({
        message: event.message,
        stack: event.error?.stack,
        url: event.filename,
        line: event.lineno,
        column: event.colno,
        severity: 'high',
        context: {
          type: 'javascript_error',
          filename: event.filename,
          lineno: event.lineno,
          colno: event.colno,
        },
      });
    });

    // Unhandled promise rejection handler
    window.addEventListener('unhandledrejection', (event) => {
      this.captureError({
        message: `Unhandled Promise Rejection: ${event.reason}`,
        stack: event.reason?.stack,
        url: window.location.href,
        severity: 'high',
        context: {
          type: 'unhandled_promise_rejection',
          reason: event.reason,
        },
      });
    });

    // React Error Boundary integration
    this.setupReactErrorBoundary();
  }

  private setupReactErrorBoundary(): void {
    // This will be used by our ErrorBoundary component
    (window as unknown as { __errorMonitor: ErrorMonitor }).__errorMonitor = this;
  }

  private setupOnlineStatus(): void {
    window.addEventListener('online', () => {
      this.isOnline = true;
      this.flushErrors();
    });

    window.addEventListener('offline', () => {
      this.isOnline = false;
    });
  }

  private startFlushInterval(): void {
    setInterval(() => {
      if (this.isOnline && this.errorQueue.length > 0) {
        this.flushErrors();
      }
    }, this.flushInterval);
  }

  public setUserId(userId: string): void {
    this.userId = userId;
  }

  public captureError(errorInfo: Omit<ErrorInfo, 'timestamp' | 'userAgent' | 'sessionId'>): void {
    const fullErrorInfo: ErrorInfo = {
      ...errorInfo,
      timestamp: Date.now(),
      userAgent: navigator.userAgent,
      sessionId: this.sessionId,
    };

    // Add to queue
    this.errorQueue.push(fullErrorInfo);

    // Prevent queue from growing too large
    if (this.errorQueue.length > this.maxQueueSize) {
      this.errorQueue = this.errorQueue.slice(-this.maxQueueSize);
    }

    // Try to flush immediately if online
    if (this.isOnline) {
      this.flushErrors();
    }

    // Log to console in development
    if (process.env.NODE_ENV === 'development') {
      console.error('Error captured:', fullErrorInfo);
    }
  }

  public captureException(error: Error, context?: Record<string, unknown>): void {
    this.captureError({
      message: error.message,
      stack: error.stack,
      url: window.location.href,
      severity: 'high',
      context: {
        type: 'exception',
        name: error.name,
        ...context,
      },
    });
  }

  public captureMessage(message: string, severity: ErrorInfo['severity'] = 'medium', context?: Record<string, unknown>): void {
    this.captureError({
      message,
      url: window.location.href,
      severity,
      context: {
        type: 'message',
        ...context,
      },
    });
  }

  private async flushErrors(): Promise<void> {
    if (this.errorQueue.length === 0 || !this.isOnline) return;

    const errorsToSend = [...this.errorQueue];
    this.errorQueue = [];

    try {
      const response = await fetch(this.apiEndpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          errors: errorsToSend,
          sessionId: this.sessionId,
          userId: this.userId,
          url: window.location.href,
          timestamp: Date.now(),
        }),
      });

      if (!response.ok) {
        throw new Error(`Failed to send errors: ${response.status}`);
      }
    } catch (error) {
      // Re-add errors to queue if sending failed
      this.errorQueue.unshift(...errorsToSend);
      console.error('Failed to send error reports:', error);
    }
  }

  public getSessionId(): string {
    return this.sessionId;
  }

  public getErrorCount(): number {
    return this.errorQueue.length;
  }
}

// Create global instance
export const errorMonitor = new ErrorMonitor();

// Export convenience functions
export const captureError = (errorInfo: Omit<ErrorInfo, 'timestamp' | 'userAgent' | 'sessionId'>) => {
  errorMonitor.captureError(errorInfo);
};

export const captureException = (error: Error, context?: Record<string, unknown>) => {
  errorMonitor.captureException(error, context);
};

export const captureMessage = (message: string, severity: ErrorInfo['severity'] = 'medium', context?: Record<string, unknown>) => {
  errorMonitor.captureMessage(message, severity, context);
};

export const setUserId = (userId: string) => {
  errorMonitor.setUserId(userId);
};

export const getSessionId = () => {
  return errorMonitor.getSessionId();
};
