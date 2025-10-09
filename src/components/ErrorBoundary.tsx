"use client";

import React, { Component, ErrorInfo, ReactNode } from 'react';
import FadeIn from './FadeIn';
import Transform3D from './Transform3D';
// import { captureException } from '@/lib/error-monitoring';

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
  onError?: (error: Error, errorInfo: ErrorInfo) => void;
}

interface State {
  hasError: boolean;
  error?: Error;
  errorId?: string;
}

class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error): State {
    return { 
      hasError: true, 
      error,
      errorId: `error_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`
    };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('ErrorBoundary caught an error:', error, errorInfo);
    
    // Capture error with our monitoring system
    // captureException(error, {
    //   componentStack: errorInfo.componentStack,
    //   errorBoundary: true,
    //   errorId: this.state.errorId,
    // });

    // Call custom error handler if provided
    if (this.props.onError) {
      this.props.onError(error, errorInfo);
    }
  }

  render() {
    if (this.state.hasError) {
      if (this.props.fallback) {
        return this.props.fallback;
      }

      return (
        <div className="min-h-screen bg-gradient-to-br from-cream via-taupe/5 to-green/5 flex items-center justify-center p-4">
          <div className="container-wide py-16">
            <div className="text-center max-w-2xl mx-auto">
              <FadeIn>
                <Transform3D hoverEffect="lift" className="inline-block mb-8">
                  <div className="w-24 h-24 rounded-full bg-copper/20 flex items-center justify-center mx-auto">
                    <span className="text-4xl">⚠️</span>
                  </div>
                </Transform3D>
              </FadeIn>

              <FadeIn delay={0.2}>
                <h1 className="wv-h1 text-green mb-6">
                  Ups! Etwas ist schiefgelaufen
                </h1>
              </FadeIn>

              <FadeIn delay={0.3}>
                <p className="wv-lead text-green/70 mb-8">
                  Wie ein Hund, der sich in einem unerwarteten Gebüsch verirrt hat – 
                  etwas ist nicht ganz nach Plan gelaufen. Aber keine Sorge, wir kümmern uns darum!
                </p>
                {this.state.errorId && (
                  <p className="text-xs text-green/50 mb-4">
                    Fehler-ID: {this.state.errorId}
                  </p>
                )}
              </FadeIn>

              <FadeIn delay={0.4}>
                <div className="space-y-4">
                  <button
                    onClick={() => window.location.reload()}
                    className="btn-primary pill text-cream px-8 py-4 text-base font-medium hover-glow mr-4"
                  >
                    Seite neu laden
                  </button>
                  <button
                    onClick={() => window.history.back()}
                    className="btn-secondary pill text-cream px-8 py-4 text-base font-medium"
                  >
                    Zurück gehen
                  </button>
                </div>
              </FadeIn>

              <FadeIn delay={0.5}>
                <div className="mt-12 bg-white/60 backdrop-blur-sm border border-taupe/20 rounded-2xl p-6">
                  <h2 className="wv-h3 text-green mb-4">
                    Was du tun kannst:
                  </h2>
                  <div className="text-left space-y-2 text-sm text-green/70">
                    <p>• Die Seite neu laden</p>
                    <p>• Zur vorherigen Seite zurückgehen</p>
                    <p>• Zur Startseite navigieren</p>
                    <p>• Den Fehler an uns melden</p>
                  </div>
                </div>
              </FadeIn>

              <FadeIn delay={0.6}>
                <div className="mt-8 text-center">
                  <p className="text-green/60 text-sm">
                    Fehler aufgetreten • Founding Paws • Wir arbeiten daran
                  </p>
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
