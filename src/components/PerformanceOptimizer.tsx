'use client';

import { useEffect, useState } from 'react';
import { detectBrowser, getRecommendedSettings, logBrowserInfo } from '@/lib/browser-detection';
import { runAccessibilityAudit } from '@/lib/accessibility-audit';
import { auditPageSEO } from '@/lib/seo-optimizer';

interface PerformanceReport {
  browser: {
    name: string;
    version: string;
    isSupported: boolean;
    performanceLevel: 'high' | 'medium' | 'low';
  };
  settings: {
    enableAnimations: boolean;
    enableParallax: boolean;
    enableWebGL: boolean;
    imageQuality: 'high' | 'medium' | 'low';
    videoQuality: 'high' | 'medium' | 'low';
  };
  accessibility: {
    score: number;
    issues: number;
    recommendations: string[];
  };
  seo: {
    score: number;
    issues: number;
    recommendations: string[];
  };
  performance: {
    coreWebVitals: {
      LCP?: number;
      FID?: number;
      CLS?: number;
      FCP?: number;
      TTFB?: number;
    };
    recommendations: string[];
  };
}

export default function PerformanceOptimizer() {
  const [report, setReport] = useState<PerformanceReport | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    // Only show in development or for admin users
    if (typeof window !== 'undefined' && (process.env.NODE_ENV === 'development' || window.location.search.includes('debug=true'))) {
      setIsVisible(true);
      generateReport();
    }
  }, []);

  const generateReport = async () => {
    setIsLoading(true);
    
    try {
      // Browser detection
      const browserInfo = detectBrowser();
      const settings = getRecommendedSettings();
      
      // Accessibility audit
      const accessibilityReport = runAccessibilityAudit();
      
      // SEO audit
      const seoReport = auditPageSEO();
      
      // Performance metrics (mock data for now)
      const coreWebVitals = {
        LCP: 2500,
        FID: 100,
        CLS: 0.1,
        FCP: 1800,
        TTFB: 800,
      };

      const performanceRecommendations = generatePerformanceRecommendations(coreWebVitals);

      const fullReport: PerformanceReport = {
        browser: {
          name: browserInfo.name,
          version: browserInfo.version,
          isSupported: browserInfo.isSupported,
          performanceLevel: browserInfo.features.webgl ? 'high' : 'medium',
        },
        settings,
        accessibility: {
          score: accessibilityReport.score,
          issues: accessibilityReport.issues.length,
          recommendations: accessibilityReport.recommendations,
        },
        seo: {
          score: seoReport.score,
          issues: seoReport.issues.length,
          recommendations: seoReport.recommendations,
        },
        performance: {
          coreWebVitals,
          recommendations: performanceRecommendations,
        },
      };

      setReport(fullReport);
    } catch (error) {
      console.error('Error generating performance report:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const generatePerformanceRecommendations = (coreWebVitals: any): string[] => {
    const recommendations: string[] = [];
    
    if (coreWebVitals.LCP > 2500) {
      recommendations.push('Optimize Largest Contentful Paint (LCP) - consider image optimization and critical CSS');
    }
    if (coreWebVitals.FID > 100) {
      recommendations.push('Improve First Input Delay (FID) - reduce JavaScript execution time');
    }
    if (coreWebVitals.CLS > 0.1) {
      recommendations.push('Reduce Cumulative Layout Shift (CLS) - reserve space for dynamic content');
    }
    if (coreWebVitals.FCP > 1800) {
      recommendations.push('Optimize First Contentful Paint (FCP) - improve server response time');
    }
    if (coreWebVitals.TTFB > 800) {
      recommendations.push('Improve Time to First Byte (TTFB) - optimize server performance');
    }
    
    return recommendations;
  };

  const getScoreColor = (score: number) => {
    if (score >= 90) return 'text-green-600';
    if (score >= 70) return 'text-yellow-600';
    return 'text-red-600';
  };

  const getScoreBg = (score: number) => {
    if (score >= 90) return 'bg-green-100';
    if (score >= 70) return 'bg-yellow-100';
    return 'bg-red-100';
  };

  if (!isVisible || !report) return null;

  return (
    <div className="fixed top-4 left-4 z-50 max-w-md">
      <div className="bg-white/95 backdrop-blur-sm border border-gray-200 rounded-lg shadow-lg p-4">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold text-gray-800">Performance Report</h3>
          <div className="flex gap-2">
            <button
              onClick={generateReport}
              disabled={isLoading}
              className="px-3 py-1 bg-blue-500 text-white rounded text-sm hover:bg-blue-600 disabled:opacity-50"
            >
              {isLoading ? 'Loading...' : 'Refresh'}
            </button>
            <button
              onClick={() => setIsVisible(false)}
              className="px-3 py-1 bg-gray-500 text-white rounded text-sm hover:bg-gray-600"
            >
              ✕
            </button>
          </div>
        </div>

        <div className="space-y-4 text-sm">
          {/* Browser Info */}
          <div className="bg-gray-50 rounded p-3">
            <div className="font-medium text-gray-700 mb-2">Browser</div>
            <div className="text-gray-600">
              {report.browser.name} {report.browser.version}
              <span className={`ml-2 px-2 py-1 rounded text-xs ${
                report.browser.isSupported ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
              }`}>
                {report.browser.isSupported ? 'Supported' : 'Not Supported'}
              </span>
            </div>
            <div className="text-gray-600">
              Performance: <span className="font-medium">{report.browser.performanceLevel}</span>
            </div>
          </div>

          {/* Scores */}
          <div className="grid grid-cols-2 gap-3">
            <div className="bg-gray-50 rounded p-3">
              <div className="font-medium text-gray-700 mb-1">Accessibility</div>
              <div className={`text-2xl font-bold ${getScoreColor(report.accessibility.score)}`}>
                {report.accessibility.score}
              </div>
              <div className="text-xs text-gray-600">
                {report.accessibility.issues} issues
              </div>
            </div>
            
            <div className="bg-gray-50 rounded p-3">
              <div className="font-medium text-gray-700 mb-1">SEO</div>
              <div className={`text-2xl font-bold ${getScoreColor(report.seo.score)}`}>
                {report.seo.score}
              </div>
              <div className="text-xs text-gray-600">
                {report.seo.issues} issues
              </div>
            </div>
          </div>

          {/* Core Web Vitals */}
          <div className="bg-gray-50 rounded p-3">
            <div className="font-medium text-gray-700 mb-2">Core Web Vitals</div>
            <div className="space-y-1 text-xs">
              {Object.entries(report.performance.coreWebVitals).map(([metric, value]) => (
                <div key={metric} className="flex justify-between">
                  <span className="text-gray-600">{metric}:</span>
                  <span className="font-mono">{value}ms</span>
                </div>
              ))}
            </div>
          </div>

          {/* Recommendations */}
          <div className="bg-gray-50 rounded p-3">
            <div className="font-medium text-gray-700 mb-2">Top Recommendations</div>
            <div className="space-y-1 text-xs text-gray-600">
              {[
                ...report.accessibility.recommendations.slice(0, 2),
                ...report.seo.recommendations.slice(0, 2),
                ...report.performance.recommendations.slice(0, 2),
              ].slice(0, 3).map((rec, index) => (
                <div key={index} className="flex items-start gap-2">
                  <span className="text-blue-500">•</span>
                  <span>{rec}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Actions */}
          <div className="flex gap-2">
            <button
              onClick={() => {
                console.log('Full Performance Report:', report);
                logBrowserInfo();
              }}
              className="flex-1 bg-green-500 text-white px-3 py-2 rounded text-sm hover:bg-green-600"
            >
              Log Details
            </button>
            <button
              onClick={() => {
                // In production, this would open a detailed report
                alert('Detailed report would open here');
              }}
              className="flex-1 bg-blue-500 text-white px-3 py-2 rounded text-sm hover:bg-blue-600"
            >
              Full Report
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
