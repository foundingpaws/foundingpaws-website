"use client";

import React from 'react';

interface SkeletonLoaderProps {
  variant?: 'text' | 'rectangular' | 'circular' | 'card' | 'product';
  width?: string | number;
  height?: string | number;
  className?: string;
  lines?: number;
}

const SkeletonLoader: React.FC<SkeletonLoaderProps> = ({
  variant = 'rectangular',
  width = '100%',
  height = '20px',
  className = '',
  lines = 1
}) => {
  const baseClasses = 'animate-skeleton rounded';
  
  const variantClasses = {
    text: 'h-4',
    rectangular: 'rounded-lg',
    circular: 'rounded-full',
    card: 'rounded-2xl p-6',
    product: 'rounded-2xl p-8'
  };

  const style = {
    width: typeof width === 'number' ? `${width}px` : width,
    height: typeof height === 'number' ? `${height}px` : height,
  };

  if (variant === 'text' && lines > 1) {
    return (
      <div className={`space-y-2 ${className}`}>
        {Array.from({ length: lines }).map((_, index) => (
          <div
            key={index}
            className={`${baseClasses} ${variantClasses[variant]}`}
            style={{
              ...style,
              width: index === lines - 1 ? '75%' : '100%'
            }}
          />
        ))}
      </div>
    );
  }

  if (variant === 'card') {
    return (
      <div className={`${baseClasses} ${variantClasses[variant]} ${className}`} style={style}>
        <div className="space-y-4">
          <div className="h-4 bg-taupe/30 rounded w-3/4"></div>
          <div className="h-3 bg-taupe/20 rounded w-1/2"></div>
          <div className="h-3 bg-taupe/20 rounded w-2/3"></div>
          <div className="h-8 bg-taupe/20 rounded w-1/4"></div>
        </div>
      </div>
    );
  }

  if (variant === 'product') {
    return (
      <div className={`${baseClasses} ${variantClasses[variant]} ${className}`} style={style}>
        <div className="space-y-6">
          {/* Product Image Skeleton */}
          <div className="h-24 w-24 bg-taupe/30 rounded-2xl mx-auto"></div>
          
          {/* Content Skeleton */}
          <div className="space-y-3">
            <div className="h-6 bg-taupe/30 rounded w-3/4 mx-auto"></div>
            <div className="h-4 bg-taupe/20 rounded w-full"></div>
            <div className="h-4 bg-taupe/20 rounded w-5/6"></div>
            <div className="h-4 bg-taupe/20 rounded w-4/6"></div>
          </div>
          
          {/* Benefits Skeleton */}
          <div className="flex flex-wrap gap-2 justify-center">
            <div className="h-6 bg-taupe/20 rounded-full w-20"></div>
            <div className="h-6 bg-taupe/20 rounded-full w-24"></div>
            <div className="h-6 bg-taupe/20 rounded-full w-18"></div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div
      className={`${baseClasses} ${variantClasses[variant]} ${className}`}
      style={style}
    />
  );
};

export default SkeletonLoader;
