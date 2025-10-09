"use client";

import React from 'react';
import LoadingSpinner from './LoadingSpinner';

interface LoadingButtonProps {
  children: React.ReactNode;
  loading?: boolean;
  disabled?: boolean;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
}

const LoadingButton: React.FC<LoadingButtonProps> = ({
  children,
  loading = false,
  disabled = false,
  variant = 'primary',
  size = 'md',
  className = '',
  onClick,
  type = 'button'
}) => {
  const baseClasses = 'inline-flex items-center justify-center font-medium rounded-full transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed';
  
  const variantClasses = {
    primary: 'bg-copper text-cream hover:bg-copper/90 focus:ring-copper shadow-lg hover:shadow-xl',
    secondary: 'bg-green text-cream hover:bg-green/90 focus:ring-green shadow-lg hover:shadow-xl',
    outline: 'border-2 border-copper text-copper hover:bg-copper hover:text-cream focus:ring-copper'
  };

  const sizeClasses = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg'
  };

  const spinnerSize = size === 'sm' ? 'sm' : size === 'lg' ? 'lg' : 'md';

  return (
    <button
      type={type}
      disabled={disabled || loading}
      onClick={onClick}
      className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`}
    >
      {loading && (
        <LoadingSpinner 
          size={spinnerSize} 
          color={variant === 'outline' ? 'copper' : 'cream'} 
          className="mr-2" 
        />
      )}
      {children}
    </button>
  );
};

export default LoadingButton;
