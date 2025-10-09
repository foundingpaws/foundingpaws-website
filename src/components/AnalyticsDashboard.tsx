'use client';

import { useState, useEffect } from 'react';
import { getCoreWebVitals, getPerformanceMetrics, getMetricsByRating } from '@/lib/performance-monitor';
import { getSessionId } from '@/lib/error-monitoring';

interface DashboardData {
  coreWebVitals: {
    LCP?: number;
    FID?: number;
    CLS?: number;
    FCP?: number;
    TTFB?: number;
  };
  performanceMetrics: Array<{
    name: string;
    value: number;
    rating: 'good' | 'needs-improvement' | 'poor';
    timestamp: number;
  }>;
  sessionId: string;
  errorCount: number;
  userInteractions: number;
}

export default function AnalyticsDashboard() {
  const [data, setData] = useState<DashboardData | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Only show in development or for admin users
    if (process.env.NODE_ENV === 'development' || window.location.search.includes('debug=true')) {
      setIsVisible(true);
      updateDashboardData();
      
      // Update every 5 seconds
      const interval = setInterval(updateDashboardData, 5000);
      return () => clearInterval(interval);
    }
  }, []);

  const updateDashboardData = () => {
    const coreWebVitals = getCoreWebVitals();
    const performanceMetrics = getPerformanceMetrics();
    const sessionId = getSessionId();
    
    // Mock data for demonstration
    const errorCount = Math.floor(Math.random() * 5);
    const userInteractions = Math.floor(Math.random() * 50) + 10;

    setData({
      coreWebVitals,
      performanceMetrics,
      sessionId,
      errorCount,
      userInteractions,
    });
  };

  const getRatingColor = (rating: 'good' | 'needs-improvement' | 'poor') => {
    switch (rating) {
      case 'good': return 'text-green-600 bg-green-100';
      case 'needs-improvement': return 'text-yellow-600 bg-yellow-100';
      case 'poor': return 'text-red-600 bg-red-100';
    }
  };

  const formatMetricValue = (value: number, unit: string = 'ms') => {
    if (value >= 1000) {
      return `${(value / 1000).toFixed(1)}s`;
    }
    return `${Math.round(value)}${unit}`;
  };

  if (!isVisible || !data) return null;

  return (
    <div className="fixed bottom-4 right-4 z-50 max-w-sm">
      <div className="bg-white/95 backdrop-blur-sm border border-gray-200 rounded-lg shadow-lg p-4">
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-sm font-semibold text-gray-800">Analytics Dashboard</h3>
          <button
            onClick={() => setIsVisible(false)}
            className="text-gray-400 hover:text-gray-600 text-xs"
          >
            ✕
          </button>
        </div>

        <div className="space-y-3 text-xs">
          {/* Session Info */}
          <div className="bg-gray-50 rounded p-2">
            <div className="font-medium text-gray-700 mb-1">Session Info</div>
            <div className="text-gray-600">ID: {data.sessionId.slice(-8)}</div>
            <div className="text-gray-600">Interactions: {data.userInteractions}</div>
            <div className="text-gray-600">Errors: {data.errorCount}</div>
          </div>

          {/* Core Web Vitals */}
          <div className="bg-gray-50 rounded p-2">
            <div className="font-medium text-gray-700 mb-1">Core Web Vitals</div>
            {Object.entries(data.coreWebVitals).map(([metric, value]) => {
              if (!value) return null;
              
              let rating: 'good' | 'needs-improvement' | 'poor' = 'good';
              if (metric === 'LCP') rating = value <= 2500 ? 'good' : value <= 4000 ? 'needs-improvement' : 'poor';
              if (metric === 'FID') rating = value <= 100 ? 'good' : value <= 300 ? 'needs-improvement' : 'poor';
              if (metric === 'CLS') rating = value <= 0.1 ? 'good' : value <= 0.25 ? 'needs-improvement' : 'poor';
              if (metric === 'FCP') rating = value <= 1800 ? 'good' : value <= 3000 ? 'needs-improvement' : 'poor';
              if (metric === 'TTFB') rating = value <= 800 ? 'good' : value <= 1800 ? 'needs-improvement' : 'poor';

              return (
                <div key={metric} className="flex justify-between items-center">
                  <span className="text-gray-600">{metric}:</span>
                  <div className="flex items-center gap-2">
                    <span className="font-mono">{formatMetricValue(value)}</span>
                    <span className={`px-1.5 py-0.5 rounded text-xs ${getRatingColor(rating)}`}>
                      {rating}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Performance Metrics */}
          <div className="bg-gray-50 rounded p-2">
            <div className="font-medium text-gray-700 mb-1">Recent Metrics</div>
            {data.performanceMetrics.slice(-3).map((metric, index) => (
              <div key={index} className="flex justify-between items-center">
                <span className="text-gray-600 truncate">{metric.name}:</span>
                <div className="flex items-center gap-2">
                  <span className="font-mono">{formatMetricValue(metric.value)}</span>
                  <span className={`px-1.5 py-0.5 rounded text-xs ${getRatingColor(metric.rating)}`}>
                    {metric.rating}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Quick Actions */}
          <div className="flex gap-2">
            <button
              onClick={updateDashboardData}
              className="flex-1 bg-blue-500 text-white px-2 py-1 rounded text-xs hover:bg-blue-600"
            >
              Refresh
            </button>
            <button
              onClick={() => {
                console.log('Analytics Data:', data);
                alert('Data logged to console');
              }}
              className="flex-1 bg-gray-500 text-white px-2 py-1 rounded text-xs hover:bg-gray-600"
            >
              Log Data
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
