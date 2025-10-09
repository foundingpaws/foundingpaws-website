import { NextRequest, NextResponse } from 'next/server';

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

interface ErrorReport {
  errors: ErrorInfo[];
  sessionId: string;
  userId?: string;
  url: string;
  timestamp: number;
}

export async function POST(request: NextRequest) {
  try {
    const body: ErrorReport = await request.json();
    
    // Validate the request
    if (!body.errors || !Array.isArray(body.errors)) {
      return NextResponse.json(
        { error: 'Invalid error data' },
        { status: 400 }
      );
    }

    // Process each error
    const processedErrors = body.errors.map((error: ErrorInfo) => ({
      ...error,
      id: generateErrorId(),
      processedAt: new Date().toISOString(),
      environment: process.env.NODE_ENV || 'development',
      version: process.env.npm_package_version || '1.0.0',
    }));

    // Log errors (in production, you'd send to Sentry, LogRocket, etc.)
    console.log('Error Report:', {
      sessionId: body.sessionId,
      userId: body.userId,
      errorCount: processedErrors.length,
      errors: processedErrors.map(e => ({
        message: e.message,
        severity: e.severity,
        url: e.url,
        timestamp: e.timestamp,
      })),
    });

    // In production, you would:
    // 1. Send to Sentry
    // 2. Store in database
    // 3. Send alerts for critical errors
    // 4. Aggregate metrics

    // For now, we'll just return success
    return NextResponse.json({
      success: true,
      processedCount: processedErrors.length,
      sessionId: body.sessionId,
    });

  } catch (error) {
    console.error('Error processing error report:', error);
    
    return NextResponse.json(
      { error: 'Failed to process error report' },
      { status: 500 }
    );
  }
}

function generateErrorId(): string {
  return `err_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
}

// Optional: GET endpoint to retrieve error statistics
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const sessionId = searchParams.get('sessionId');
    
    // In production, you'd query your database
    // For now, return mock data
    return NextResponse.json({
      sessionId,
      errorCount: 0,
      lastError: null,
      errors: [],
    });
  } catch {
    return NextResponse.json(
      { error: 'Failed to retrieve error data' },
      { status: 500 }
    );
  }
}
