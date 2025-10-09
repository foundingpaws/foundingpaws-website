"use client";

import React, { useEffect, useState } from 'react';

interface PerformanceMetrics {
  fcp: number | null; // First Contentful Paint
  lcp: number | null; // Largest Contentful Paint
  fid: number | null; // First Input Delay
  cls: number | null; // Cumulative Layout Shift
  ttfb: number | null; // Time to First Byte
  loadTime: number | null;
  memoryUsage: number | null;
}

interface PerformanceMonitorProps {
  onMetricsUpdate?: (metrics: PerformanceMetrics) => void;
  enabled?: boolean;
}

const PerformanceMonitor: React.FC<PerformanceMonitorProps> = ({ 
  onMetricsUpdate, 
  enabled = true 
}) => {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    fcp: null,
    lcp: null,
    fid: null,
    cls: null,
    ttfb: null,
    loadTime: null,
    memoryUsage: null
  });

  useEffect(() => {
    if (!enabled || typeof window === 'undefined') return;

    const measurePerformance = () => {
      const newMetrics: PerformanceMetrics = { ...metrics };

      // Measure load time
      if (performance.timing) {
        newMetrics.loadTime = performance.timing.loadEventEnd - performance.timing.navigationStart;
        newMetrics.ttfb = performance.timing.responseStart - performance.timing.navigationStart;
      }

      // Measure memory usage (if available)
      if ('memory' in performance) {
        const memory = (performance as any).memory;
        newMetrics.memoryUsage = memory.usedJSHeapSize / 1024 / 1024; // MB
      }

      // Measure Core Web Vitals
      if ('PerformanceObserver' in window) {
        // First Contentful Paint
        const fcpObserver = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          const fcpEntry = entries.find(entry => entry.name === 'first-contentful-paint');
          if (fcpEntry) {
            newMetrics.fcp = fcpEntry.startTime;
          }
        });
        fcpObserver.observe({ entryTypes: ['paint'] });

        // Largest Contentful Paint
        const lcpObserver = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          const lastEntry = entries[entries.length - 1];
          newMetrics.lcp = lastEntry.startTime;
        });
        lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });

        // First Input Delay
        const fidObserver = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          entries.forEach((entry: any) => {
            newMetrics.fid = entry.processingStart - entry.startTime;
          });
        });
        fidObserver.observe({ entryTypes: ['first-input'] });

        // Cumulative Layout Shift
        let clsValue = 0;
        const clsObserver = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          entries.forEach((entry: any) => {
            if (!entry.hadRecentInput) {
              clsValue += entry.value;
            }
          });
          newMetrics.cls = clsValue;
        });
        clsObserver.observe({ entryTypes: ['layout-shift'] });

        // Cleanup observers after 10 seconds
        setTimeout(() => {
          fcpObserver.disconnect();
          lcpObserver.disconnect();
          fidObserver.disconnect();
          clsObserver.disconnect();
        }, 10000);
      }

      setMetrics(newMetrics);
      onMetricsUpdate?.(newMetrics);
    };

    // Measure performance after page load
    if (document.readyState === 'complete') {
      measurePerformance();
    } else {
      window.addEventListener('load', measurePerformance);
    }

    // Measure performance periodically
    const interval = setInterval(measurePerformance, 5000);

    return () => {
      window.removeEventListener('load', measurePerformance);
      clearInterval(interval);
    };
  }, [enabled, onMetricsUpdate]);

  // Performance optimization suggestions
  const getPerformanceSuggestions = (): string[] => {
    const suggestions: string[] = [];

    if (metrics.fcp && metrics.fcp > 1800) {
      suggestions.push('First Contentful Paint ist langsam (>1.8s). Optimieren Sie Bilder und CSS.');
    }

    if (metrics.lcp && metrics.lcp > 2500) {
      suggestions.push('Largest Contentful Paint ist langsam (>2.5s). Optimieren Sie das größte Element.');
    }

    if (metrics.fid && metrics.fid > 100) {
      suggestions.push('First Input Delay ist hoch (>100ms). Reduzieren Sie JavaScript-Ausführungszeit.');
    }

    if (metrics.cls && metrics.cls > 0.1) {
      suggestions.push('Cumulative Layout Shift ist hoch (>0.1). Stabilisieren Sie Layout-Änderungen.');
    }

    if (metrics.memoryUsage && metrics.memoryUsage > 50) {
      suggestions.push('Hoher Speicherverbrauch (>50MB). Überprüfen Sie Memory Leaks.');
    }

    return suggestions;
  };

  const suggestions = getPerformanceSuggestions();

  if (!enabled || suggestions.length === 0) {
    return null;
  }

  return (
    <div className="fixed bottom-4 right-4 bg-yellow-100 border border-yellow-300 rounded-lg p-4 max-w-sm z-50">
      <div className="flex items-start gap-2">
        <div className="text-yellow-600 text-lg">⚠️</div>
        <div className="flex-1">
          <h3 className="font-semibold text-yellow-800 mb-2">Performance-Optimierungen</h3>
          <ul className="text-sm text-yellow-700 space-y-1">
            {suggestions.map((suggestion, index) => (
              <li key={index}>• {suggestion}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

// Performance Debug Component
export const PerformanceDebug: React.FC<{ enabled?: boolean }> = ({ enabled = false }) => {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    fcp: null,
    lcp: null,
    fid: null,
    cls: null,
    ttfb: null,
    loadTime: null,
    memoryUsage: null
  });

  if (!enabled) return null;

  return (
    <div className="fixed top-4 left-4 bg-black/80 text-white p-4 rounded-lg font-mono text-xs z-50">
      <h3 className="font-bold mb-2">Performance Metrics</h3>
      <div className="space-y-1">
        <div>FCP: {metrics.fcp ? `${metrics.fcp.toFixed(0)}ms` : 'N/A'}</div>
        <div>LCP: {metrics.lcp ? `${metrics.lcp.toFixed(0)}ms` : 'N/A'}</div>
        <div>FID: {metrics.fid ? `${metrics.fid.toFixed(0)}ms` : 'N/A'}</div>
        <div>CLS: {metrics.cls ? metrics.cls.toFixed(3) : 'N/A'}</div>
        <div>TTFB: {metrics.ttfb ? `${metrics.ttfb.toFixed(0)}ms` : 'N/A'}</div>
        <div>Load: {metrics.loadTime ? `${metrics.loadTime.toFixed(0)}ms` : 'N/A'}</div>
        <div>Memory: {metrics.memoryUsage ? `${metrics.memoryUsage.toFixed(1)}MB` : 'N/A'}</div>
      </div>
    </div>
  );
};

export default PerformanceMonitor;
