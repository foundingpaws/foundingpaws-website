"use client";

import { useState, useEffect } from "react";

interface Product {
  key: string;
  title: string;
  price: string;
  currency: string;
  comingSoon: boolean;
}

interface StickyCTAProps {
  product: Product;
  isVisible: boolean;
}

export default function StickyCTA({ product, isVisible }: StickyCTAProps) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  if (!isMobile || !isVisible) {
    return null;
  }

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 lg:hidden">
      <div className="bg-white border-t border-gray-200 shadow-lg">
        <div className="container-wide px-4 py-4">
          <div className="flex items-center justify-between gap-4">
            {/* Product Info */}
            <div className="flex-1 min-w-0">
              <div className="text-sm font-medium text-gray-900 truncate">
                {product.title}
              </div>
              <div className="text-lg font-bold text-accent">
                {product.price} {product.currency}
              </div>
            </div>

            {/* CTA Button */}
            <button
              className={`px-6 py-3 rounded-full font-medium text-white transition-all duration-300 ${
                product.comingSoon
                  ? "bg-copper hover:bg-copper-dark"
                  : "bg-accent hover:bg-accent-dark"
              } shadow-lg hover:shadow-xl transform hover:scale-105 flex-shrink-0`}
              style={{
                WebkitTapHighlightColor: 'transparent',
                WebkitTouchCallout: 'none',
                WebkitUserSelect: 'none',
                userSelect: 'none'
              }}
            >
              {product.comingSoon ? "Pre-Order" : "In den Warenkorb"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
