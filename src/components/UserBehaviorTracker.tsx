'use client';

import { useEffect, useRef } from 'react';
import { trackEvent, trackEngagement, trackButtonClick, trackFormSubmission } from '@/lib/analytics';

interface UserBehaviorTrackerProps {
  children: React.ReactNode;
}

export default function UserBehaviorTracker({ children }: UserBehaviorTrackerProps) {
  const sessionStartTime = useRef(Date.now());
  const interactionCount = useRef(0);
  const scrollDepth = useRef(0);
  const lastActivity = useRef(Date.now());

  useEffect(() => {
    // Track session start
    trackEvent('session_start', 'engagement', 'page_load');

    // Track page visibility changes
    const handleVisibilityChange = () => {
      if (document.hidden) {
        trackEvent('page_hidden', 'engagement', 'visibility_change');
      } else {
        trackEvent('page_visible', 'engagement', 'visibility_change');
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);

    // Track user interactions
    const handleInteraction = (event: Event) => {
      interactionCount.current++;
      lastActivity.current = Date.now();

      const target = event.target as HTMLElement;
      const tagName = target.tagName.toLowerCase();
      const className = target.className || '';
      const id = target.id || '';

      // Track button clicks
      if (tagName === 'button' || className.includes('btn') || className.includes('button')) {
        const buttonText = target.textContent?.trim() || 'unknown';
        const buttonLocation = id || className || 'unknown';
        trackButtonClick(buttonText, buttonLocation);
      }

      // Track link clicks
      if (tagName === 'a') {
        const href = target.getAttribute('href') || 'unknown';
        const linkText = target.textContent?.trim() || 'unknown';
        trackEvent('link_click', 'engagement', `${linkText}_${href}`);
      }

      // Track form interactions
      if (tagName === 'form' || target.closest('form')) {
        const form = target.closest('form');
        if (form) {
          const formName = form.getAttribute('name') || form.id || 'unknown';
          trackEngagement('form_interaction', formName);
        }
      }

      // Track input focus
      if (['input', 'textarea', 'select'].includes(tagName)) {
        const inputType = target.getAttribute('type') || tagName;
        const inputName = target.getAttribute('name') || target.id || 'unknown';
        trackEngagement('input_focus', `${inputType}_${inputName}`);
      }
    };

    // Track scroll depth
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = Math.round((scrollTop / docHeight) * 100);
      
      if (scrollPercent > scrollDepth.current) {
        scrollDepth.current = scrollPercent;
        
        // Track milestone scroll depths
        if (scrollPercent >= 25 && scrollDepth.current < 25) {
          trackEvent('scroll_depth', 'engagement', '25%');
        } else if (scrollPercent >= 50 && scrollDepth.current < 50) {
          trackEvent('scroll_depth', 'engagement', '50%');
        } else if (scrollPercent >= 75 && scrollDepth.current < 75) {
          trackEvent('scroll_depth', 'engagement', '75%');
        } else if (scrollPercent >= 90 && scrollDepth.current < 90) {
          trackEvent('scroll_depth', 'engagement', '90%');
        }
      }
    };

    // Track mouse movements (heatmap data)
    const handleMouseMove = (event: MouseEvent) => {
      // Only track every 100th mouse move to avoid spam
      if (Math.random() < 0.01) {
        trackEvent('mouse_move', 'engagement', `x:${event.clientX}_y:${event.clientY}`);
      }
    };

    // Track keyboard usage
    const handleKeyPress = (event: KeyboardEvent) => {
      // Track specific key combinations
      if (event.ctrlKey || event.metaKey) {
        trackEvent('keyboard_shortcut', 'engagement', event.key);
      }
    };

    // Track window resize
    const handleResize = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      trackEvent('window_resize', 'engagement', `${width}x${height}`);
    };

    // Track beforeunload (user leaving)
    const handleBeforeUnload = () => {
      const sessionDuration = Math.round((Date.now() - sessionStartTime.current) / 1000);
      const timeSinceLastActivity = Math.round((Date.now() - lastActivity.current) / 1000);
      
      trackEvent('session_end', 'engagement', 'page_unload', sessionDuration);
      trackEvent('interaction_count', 'engagement', 'session_summary', interactionCount.current);
      trackEvent('max_scroll_depth', 'engagement', 'session_summary', scrollDepth.current);
      trackEvent('time_since_activity', 'engagement', 'session_summary', timeSinceLastActivity);
    };

    // Add event listeners
    document.addEventListener('click', handleInteraction, { passive: true });
    document.addEventListener('focus', handleInteraction, { passive: true });
    document.addEventListener('scroll', handleScroll, { passive: true });
    document.addEventListener('mousemove', handleMouseMove, { passive: true });
    document.addEventListener('keydown', handleKeyPress, { passive: true });
    window.addEventListener('resize', handleResize, { passive: true });
    window.addEventListener('beforeunload', handleBeforeUnload);

    // Track time on page
    const timeOnPageInterval = setInterval(() => {
      const timeOnPage = Math.round((Date.now() - sessionStartTime.current) / 1000);
      
      // Track every 30 seconds
      if (timeOnPage % 30 === 0 && timeOnPage > 0) {
        trackEvent('time_on_page', 'engagement', `${timeOnPage}s`);
      }
    }, 1000);

    // Track idle time
    const idleInterval = setInterval(() => {
      const timeSinceLastActivity = Date.now() - lastActivity.current;
      const idleMinutes = Math.round(timeSinceLastActivity / 60000);
      
      if (idleMinutes >= 5 && idleMinutes % 5 === 0) {
        trackEvent('user_idle', 'engagement', `${idleMinutes}min`);
      }
    }, 60000); // Check every minute

    // Cleanup
    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      document.removeEventListener('click', handleInteraction);
      document.removeEventListener('focus', handleInteraction);
      document.removeEventListener('scroll', handleScroll);
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('keydown', handleKeyPress);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('beforeunload', handleBeforeUnload);
      clearInterval(timeOnPageInterval);
      clearInterval(idleInterval);
    };
  }, []);

  // Track component-specific events
  useEffect(() => {
    // Track form submissions
    const handleFormSubmit = (event: Event) => {
      const form = event.target as HTMLFormElement;
      const formName = form.getAttribute('name') || form.id || 'unknown';
      const formData = new FormData(form);
      const formFields = Array.from(formData.keys()).join(',');
      
      trackFormSubmission(formName, true);
      trackEvent('form_submit', 'conversion', `${formName}_${formFields}`);
    };

    // Track newsletter signups
    const handleNewsletterSignup = (event: Event) => {
      const target = event.target as HTMLElement;
      if (target.closest('[data-newsletter]')) {
        trackEvent('newsletter_signup', 'conversion', 'form_submission');
      }
    };

    // Track waitlist signups
    const handleWaitlistSignup = (event: Event) => {
      const target = event.target as HTMLElement;
      if (target.closest('[data-waitlist]')) {
        trackEvent('waitlist_signup', 'conversion', 'form_submission');
      }
    };

    // Track product interactions
    const handleProductInteraction = (event: Event) => {
      const target = event.target as HTMLElement;
      const productCard = target.closest('[data-product]');
      
      if (productCard) {
        const productId = productCard.getAttribute('data-product');
        const action = target.getAttribute('data-action') || 'interaction';
        trackEvent('product_interaction', 'ecommerce', `${action}_${productId}`);
      }
    };

    document.addEventListener('submit', handleFormSubmit);
    document.addEventListener('click', handleNewsletterSignup);
    document.addEventListener('click', handleWaitlistSignup);
    document.addEventListener('click', handleProductInteraction);

    return () => {
      document.removeEventListener('submit', handleFormSubmit);
      document.removeEventListener('click', handleNewsletterSignup);
      document.removeEventListener('click', handleWaitlistSignup);
      document.removeEventListener('click', handleProductInteraction);
    };
  }, []);

  return <>{children}</>;
}
