'use client';

import { useEffect, useRef, useState } from 'react';

interface ScrollAnimationProps {
  children: React.ReactNode;
  animation?: 'fade-in' | 'slide-up' | 'scale-in';
  delay?: number;
  threshold?: number;
  className?: string;
}

export default function ScrollAnimation({ 
  children, 
  animation = 'fade-in', 
  delay = 0,
  threshold = 0.1,
  className = ''
}: ScrollAnimationProps) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setIsVisible(true);
          }, delay);
        }
      },
      { threshold }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [delay, threshold]);

  const animationClass = isVisible ? `animate-${animation}` : 'opacity-0';

  return (
    <div 
      ref={ref} 
      className={`transition-all duration-700 ease-out ${animationClass} ${className}`}
    >
      {children}
    </div>
  );
}
