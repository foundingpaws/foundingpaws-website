"use client";

import { useState, useEffect } from 'react';

interface LeadCaptureConfig {
  variant?: 'popup' | 'slide-in' | 'banner';
  trigger?: 'exit-intent' | 'delay' | 'scroll' | 'manual';
  delay?: number;
  showOnce?: boolean;
  storageKey?: string;
}

const defaultConfig: LeadCaptureConfig = {
  variant: 'popup',
  trigger: 'exit-intent',
  delay: 3000,
  showOnce: true,
  storageKey: 'lead-capture-shown'
};

export function useLeadCapture(config: LeadCaptureConfig = {}) {
  const [isVisible, setIsVisible] = useState(false);
  const [hasShown, setHasShown] = useState(false);
  
  const finalConfig = { ...defaultConfig, ...config };

  useEffect(() => {
    // Check if already shown (if showOnce is enabled)
    if (finalConfig.showOnce) {
      const hasShownBefore = localStorage.getItem(finalConfig.storageKey!) === 'true';
      const cookieMatch = document.cookie.match(/(?:^|; )fp_subscribed=([^;]+)/);
      const isSubscribed = cookieMatch && cookieMatch[1] === '1';
      if (hasShownBefore) {
        setHasShown(true);
        return;
      }
      if (isSubscribed) {
        setHasShown(true);
        return;
      }
    }

    // Set up trigger based on config
    if (finalConfig.trigger === 'delay') {
      const timer = setTimeout(() => {
        showLeadCapture();
      }, finalConfig.delay);
      return () => clearTimeout(timer);
    }
  }, [finalConfig]);

  const showLeadCapture = () => {
    if (hasShown && finalConfig.showOnce) return;
    
    setIsVisible(true);
    setHasShown(true);
    
    if (finalConfig.showOnce) {
      localStorage.setItem(finalConfig.storageKey!, 'true');
    }
  };

  const hideLeadCapture = () => {
    setIsVisible(false);
  };

  const resetLeadCapture = () => {
    if (finalConfig.showOnce) {
      localStorage.removeItem(finalConfig.storageKey!);
    }
    setHasShown(false);
    setIsVisible(false);
  };

  return {
    isVisible,
    hasShown,
    showLeadCapture,
    hideLeadCapture,
    resetLeadCapture
  };
}
