"use client";

import React from 'react';

interface GlassmorphismCardProps {
  children: React.ReactNode;
  variant?: 'premium' | 'strong' | 'subtle';
  className?: string;
  particleEffect?: boolean;
}

const GlassmorphismCard: React.FC<GlassmorphismCardProps> = ({
  children,
  variant = 'premium',
  className = '',
  particleEffect = false,
}) => {
  const variantClass = {
    premium: 'glassmorphism-premium',
    strong: 'glassmorphism-strong',
    subtle: 'glassmorphism-subtle',
  };

  return (
    <div
      className={`${variantClass[variant]} ${particleEffect ? 'particle-container' : ''} ${className}`}
    >
      {children}
    </div>
  );
};

export default GlassmorphismCard;
