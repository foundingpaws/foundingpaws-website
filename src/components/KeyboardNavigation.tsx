"use client";

import React, { useEffect, useRef, useState } from 'react';

interface KeyboardNavigationProps {
  children: React.ReactNode;
  className?: string;
}

export const KeyboardNavigation: React.FC<KeyboardNavigationProps> = ({ 
  children, 
  className = '' 
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [focusedIndex, setFocusedIndex] = useState(0);
  const [isNavigating, setIsNavigating] = useState(false);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const focusableElements = container.querySelectorAll(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    ) as NodeListOf<HTMLElement>;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isNavigating) return;

      switch (e.key) {
        case 'ArrowDown':
        case 'ArrowRight':
          e.preventDefault();
          setFocusedIndex(prev => 
            prev < focusableElements.length - 1 ? prev + 1 : 0
          );
          break;
        case 'ArrowUp':
        case 'ArrowLeft':
          e.preventDefault();
          setFocusedIndex(prev => 
            prev > 0 ? prev - 1 : focusableElements.length - 1
          );
          break;
        case 'Home':
          e.preventDefault();
          setFocusedIndex(0);
          break;
        case 'End':
          e.preventDefault();
          setFocusedIndex(focusableElements.length - 1);
          break;
        case 'Escape':
          setIsNavigating(false);
          (document.activeElement as HTMLElement)?.blur();
          break;
      }
    };

    const handleFocus = () => setIsNavigating(true);
    const handleBlur = () => setIsNavigating(false);

    container.addEventListener('keydown', handleKeyDown);
    container.addEventListener('focusin', handleFocus);
    container.addEventListener('focusout', handleBlur);

    return () => {
      container.removeEventListener('keydown', handleKeyDown);
      container.removeEventListener('focusin', handleFocus);
      container.removeEventListener('focusout', handleBlur);
    };
  }, [isNavigating]);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const focusableElements = container.querySelectorAll(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    ) as NodeListOf<HTMLElement>;

    if (focusableElements[focusedIndex]) {
      focusableElements[focusedIndex].focus();
    }
  }, [focusedIndex]);

  return (
    <div
      ref={containerRef}
      className={`focus-within:ring-2 focus-within:ring-copper focus-within:ring-offset-2 ${className}`}
      role="region"
      aria-label="Navigierbarer Bereich"
    >
      {children}
    </div>
  );
};

// Focus Trap Component
export const FocusTrap: React.FC<{
  children: React.ReactNode;
  isActive: boolean;
  className?: string;
}> = ({ children, isActive, className = '' }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isActive) return;

    const container = containerRef.current;
    if (!container) return;

    const focusableElements = container.querySelectorAll(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    ) as NodeListOf<HTMLElement>;

    const firstElement = focusableElements[0];
    const lastElement = focusableElements[focusableElements.length - 1];

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Tab') {
        if (e.shiftKey) {
          // Shift + Tab
          if (document.activeElement === firstElement) {
            e.preventDefault();
            lastElement?.focus();
          }
        } else {
          // Tab
          if (document.activeElement === lastElement) {
            e.preventDefault();
            firstElement?.focus();
          }
        }
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    firstElement?.focus();

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isActive]);

  if (!isActive) return <>{children}</>;

  return (
    <div
      ref={containerRef}
      className={className}
      role="dialog"
      aria-modal="true"
    >
      {children}
    </div>
  );
};

// Keyboard Shortcuts Hook
export const useKeyboardShortcuts = (shortcuts: Record<string, () => void>) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      const key = e.key.toLowerCase();
      const modifier = e.ctrlKey || e.metaKey;
      
      // Check for modifier + key combinations
      if (modifier) {
        const shortcut = `ctrl+${key}`;
        if (shortcuts[shortcut]) {
          e.preventDefault();
          shortcuts[shortcut]();
        }
      }
      
      // Check for single key shortcuts
      if (shortcuts[key]) {
        e.preventDefault();
        shortcuts[key]();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [shortcuts]);
};

// Accessible Modal Component
export const AccessibleModal: React.FC<{
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
  className?: string;
}> = ({ isOpen, onClose, title, children, className = '' }) => {
  const modalRef = useRef<HTMLDivElement>(null);

  useKeyboardShortcuts({
    'escape': onClose,
    'ctrl+m': onClose
  });

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      modalRef.current?.focus();
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <FocusTrap isActive={isOpen}>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-black/50 backdrop-blur-sm"
          onClick={onClose}
          aria-hidden="true"
        />
        
        {/* Modal */}
        <div
          ref={modalRef}
          className={`relative bg-white rounded-2xl shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto ${className}`}
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-title"
        >
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-taupe/20">
            <h2 id="modal-title" className="text-xl font-semibold text-green">
              {title}
            </h2>
            <button
              onClick={onClose}
              className="w-8 h-8 rounded-full bg-taupe/20 hover:bg-taupe/30 flex items-center justify-center transition-colors"
              aria-label="Modal schließen"
            >
              ✕
            </button>
          </div>
          
          {/* Content */}
          <div className="p-6">
            {children}
          </div>
        </div>
      </div>
    </FocusTrap>
  );
};
