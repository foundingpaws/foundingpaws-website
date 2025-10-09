"use client";

import React, { useEffect, useRef, useState } from 'react';

interface Transform3DProps {
  children: React.ReactNode;
  className?: string;
  hoverEffect?: 'lift' | 'tilt' | 'morph';
  perspective?: number;
}

const Transform3D: React.FC<Transform3DProps> = ({
  children,
  className = '',
  hoverEffect = 'lift',
  perspective = 1000,
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!ref.current || !isHovered) return;

      const rect = ref.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      const x = (e.clientX - centerX) / (rect.width / 2);
      const y = (e.clientY - centerY) / (rect.height / 2);

      setMousePosition({ x, y });
    };

    if (isHovered) {
      window.addEventListener('mousemove', handleMouseMove);
      return () => window.removeEventListener('mousemove', handleMouseMove);
    }
  }, [isHovered]);

  const getTransformStyle = () => {
    if (!isHovered) return {};

    const { x, y } = mousePosition;
    const maxRotation = 15; // degrees

    switch (hoverEffect) {
      case 'lift':
        return {
          transform: `translateY(-8px) rotateX(${y * maxRotation * 0.3}deg) rotateY(${x * maxRotation * 0.3}deg) scale(1.02)`,
        };
      case 'tilt':
        return {
          transform: `rotateY(${x * maxRotation * 0.5}deg) rotateX(${y * maxRotation * 0.3}deg) scale(1.01)`,
        };
      case 'morph':
        return {
          transform: `translateY(-4px) rotateX(${y * maxRotation * 0.2}deg) rotateY(${x * maxRotation * 0.2}deg) scale(1.02)`,
        };
      default:
        return {};
    }
  };

  const hoverClass = {
    lift: 'hover-3d-lift',
    tilt: 'hover-3d-tilt',
    morph: 'hover-morph',
  };

  return (
    <div
      ref={ref}
      className={`transform-3d ${hoverClass[hoverEffect]} ${className}`}
      style={{
        perspective: `${perspective}px`,
        ...getTransformStyle(),
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false);
        setMousePosition({ x: 0, y: 0 });
      }}
    >
      {children}
    </div>
  );
};

export default Transform3D;
