import { NextRequest, NextResponse } from 'next/server';

interface PerformanceMetric {
  name: string;
  value: number;
  rating: 'good' | 'needs-improvement' | 'poor';
  timestamp: number;
  url: string;
  userAgent: string;
}

export async function POST(request: NextRequest) {
  try {
    const metric: PerformanceMetric = await request.json();
    
    // Validate the request
    if (!metric.name || typeof metric.value !== 'number') {
      return NextResponse.json(
        { error: 'Invalid performance metric data' },
        { status: 400 }
      );
    }

    // Process the metric
    const processedMetric = {
      ...metric,
      id: generateMetricId(),
      processedAt: new Date().toISOString(),
      environment: process.env.NODE_ENV || 'development',
      version: process.env.npm_package_version || '1.0.0',
    };

    // Log performance metric
    console.log('Performance Metric:', {
      name: processedMetric.name,
      value: processedMetric.value,
      rating: processedMetric.rating,
      url: processedMetric.url,
      timestamp: processedMetric.timestamp,
    });

    // In production, you would:
    // 1. Send to Google Analytics
    // 2. Store in time-series database (InfluxDB, TimescaleDB)
    // 3. Send to monitoring service (DataDog, New Relic)
    // 4. Trigger alerts for poor performance

    // For Core Web Vitals, you might want to send to Google Analytics
    if (['LCP', 'FID', 'CLS', 'FCP', 'TTFB'].includes(metric.name)) {
      // This would be handled by the client-side analytics
      console.log(`Core Web Vital ${metric.name}: ${metric.value} (${metric.rating})`);
    }

    return NextResponse.json({
      success: true,
      metricId: processedMetric.id,
    });

  } catch {
    console.error('Error processing performance metric');
    
    return NextResponse.json(
      { error: 'Failed to process performance metric' },
      { status: 500 }
    );
  }
}

function generateMetricId(): string {
  return `perf_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
}

// Optional: GET endpoint to retrieve performance statistics
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const metricName = searchParams.get('name');
    const timeRange = searchParams.get('timeRange') || '24h';
    
    // In production, you'd query your time-series database
    // For now, return mock data
    return NextResponse.json({
      metricName,
      timeRange,
      average: 0,
      p95: 0,
      p99: 0,
      count: 0,
      trends: [],
    });
  } catch {
    return NextResponse.json(
      { error: 'Failed to retrieve performance data' },
      { status: 500 }
    );
  }
}
