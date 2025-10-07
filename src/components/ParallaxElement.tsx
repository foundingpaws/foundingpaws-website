"use client";

import React, { useEffect, useRef, useState } from 'react';

interface ParallaxElementProps {
  children: React.ReactNode;
  speed?: 'slow' | 'medium' | 'fast';
  className?: string;
  offset?: number;
}

const ParallaxElement: React.FC<ParallaxElementProps> = ({
  children,
  speed = 'medium',
  className = '',
  offset = 0,
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const [parallaxOffset, setParallaxOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!ref.current) return;

      const rect = ref.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const elementTop = rect.top;
      const elementHeight = rect.height;

      // Calculate parallax offset based on element position
      const scrolled = window.scrollY;
      const rate = scrolled * -0.5; // Base rate
      
      // Different speeds
      const speedMultiplier = {
        slow: 0.3,
        medium: 0.5,
        fast: 0.7,
      };

      const newOffset = (rate + offset) * speedMultiplier[speed];
      setParallaxOffset(newOffset);
    };

    // Initial calculation
    handleScroll();

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [speed, offset]);

  const speedClass = {
    slow: 'parallax-slow',
    medium: 'parallax-medium',
    fast: 'parallax-fast',
  };

  return (
    <div
      ref={ref}
      className={`parallax-element ${speedClass[speed]} ${className}`}
      style={{
        '--parallax-offset': `${parallaxOffset}px`,
      } as React.CSSProperties}
    >
      {children}
    </div>
  );
};

export default ParallaxElement;
