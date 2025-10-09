"use client";

import React, { useEffect, useState } from 'react';

interface CustomCursorProps {
  children: React.ReactNode;
}

const CustomCursor: React.FC<CustomCursorProps> = ({ children }) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      setIsVisible(true);
    };

    const handleMouseEnter = () => setIsHovering(true);
    const handleMouseLeave = () => setIsHovering(false);
    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);

    // Add event listeners
    window.addEventListener('mousemove', updateMousePosition);
    document.addEventListener('mouseenter', handleMouseEnter);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mousedown', handleMouseDown);
    document.addEventListener('mouseup', handleMouseUp);

    // Hide cursor when mouse leaves window
    const handleMouseLeaveWindow = () => setIsVisible(false);
    document.addEventListener('mouseleave', handleMouseLeaveWindow);

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
      document.removeEventListener('mouseenter', handleMouseEnter);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mousedown', handleMouseDown);
      document.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('mouseleave', handleMouseLeaveWindow);
    };
  }, []);

  return (
    <>
      {children}
      <div
        className={`fixed pointer-events-none z-[9999] transition-all duration-150 ease-out ${
          isVisible ? 'opacity-100' : 'opacity-0'
        }`}
        style={{
          left: mousePosition.x,
          top: mousePosition.y,
          transform: 'translate(-50%, -50%)',
        }}
      >
        {/* Main Cursor */}
        <div
          className={`w-6 h-6 rounded-full border-2 transition-all duration-200 ${
            isHovering
              ? 'bg-copper/20 border-copper scale-150'
              : 'bg-green/20 border-green scale-100'
          } ${
            isClicking ? 'scale-75' : 'scale-100'
          }`}
        />
        
        {/* Outer Ring */}
        <div
          className={`absolute inset-0 rounded-full border transition-all duration-300 ${
            isHovering
              ? 'border-copper/40 scale-200'
              : 'border-green/20 scale-150'
          } ${
            isClicking ? 'scale-100' : 'scale-150'
          }`}
        />
        
        {/* Click Ripple Effect */}
        {isClicking && (
          <div className="absolute inset-0 rounded-full border-2 border-copper animate-ping" />
        )}
      </div>
    </>
  );
};

export default CustomCursor;
