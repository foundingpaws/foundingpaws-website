"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useRef } from "react";
import { trackEvent } from "@/lib/analytics";

interface ProductCardProps {
  product: {
    key: string;
    title: string;
    subtitle: string;
    description: string;
    category: string;
    accent: string;
    comingSoon: boolean;
    productImage: string;
    benefits: string[];
    ingredients: string[];
    dosage: string;
    targetGroup: string;
    isNew?: boolean;
    isBestseller?: boolean;
  };
  index?: number;
}

export default function ProductCard({ product, index = 0 }: ProductCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);


  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const getBadgeContent = () => {
    if (product.isBestseller) return "Bestseller";
    if (product.isNew) return "Neu";
    if (product.comingSoon) return "Coming Soon";
    return null;
  };

  const getBadgeColor = () => {
    if (product.isBestseller) return "bg-accent text-white";
    if (product.isNew) return "bg-green text-white";
    if (product.comingSoon) return "bg-copper/15 text-copper border border-copper/25";
    return "";
  };


  return (
    <div
      ref={cardRef}
      className="group relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
    >
      <div className="product-card relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden h-full flex flex-col">
        {/* Badge */}
        {getBadgeContent() && (
          <div className={`absolute top-4 right-4 z-10 px-3 py-1 rounded-full text-xs font-medium ${getBadgeColor()}`}>
            {getBadgeContent()}
          </div>
        )}

        {/* Product Image - 4:5 Format */}
        <div className="relative aspect-[4/5] overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100">
          <Image
            src={product.productImage}
            alt={`${product.title} Produktbild`}
            fill
            className={`object-contain transition-all duration-500 ${
              isHovered ? "scale-110" : "scale-100"
            }`}
            quality={100}
            priority={index < 3}
          />
          
          {/* Overlay on hover */}
          <div className={`absolute inset-0 bg-black/5 transition-opacity duration-300 ${
            isHovered ? "opacity-100" : "opacity-0"
          }`} />
        </div>

        {/* Content */}
        <div className="product-content p-6 flex-1 flex flex-col">
          {/* Category */}
          <div className="inline-block w-fit">
            <span className="px-3 py-1 rounded-full text-xs font-medium bg-green/10 text-green border border-green/20">
              {product.category}
            </span>
          </div>

          {/* Title & Subtitle */}
          <div className="mt-4">
            <h3 className="product-title text-xl font-bold text-gray-900 mb-1 group-hover:text-accent transition-colors duration-300">
              {product.title}
            </h3>
            <p className="text-sm text-accent font-medium">
              {product.subtitle}
            </p>
          </div>

          {/* Description */}
          <p className="text-gray-600 text-sm mt-3 line-clamp-2">
            {product.description}
          </p>

          {/* Benefits */}
          <div className="product-benefits mt-4 flex-1">
            <h4 className="text-sm font-semibold text-gray-900 mb-2">Wirkung:</h4>
            <ul className="space-y-1">
              {product.benefits.slice(0, 3).map((benefit, idx) => (
                <li key={idx} className="flex items-start gap-2 text-sm text-gray-600">
                  <span className="text-accent text-xs mt-1 flex-shrink-0">•</span>
                  <span className="line-clamp-1">{benefit}</span>
                </li>
              ))}
              {product.benefits.length > 3 && (
                <li className="text-xs text-gray-500">
                  +{product.benefits.length - 3} weitere
                </li>
              )}
            </ul>
          </div>


          {/* CTA Buttons */}
          <div className="product-cta-section mt-6 flex flex-col gap-2">
            <Link
              href={`/produkte/${product.key}`}
              className={`product-cta block w-full text-center px-6 py-3 rounded-full font-medium transition-all duration-300 relative overflow-hidden ${
                isHovered
                  ? "bg-accent text-white shadow-lg transform scale-105"
                  : "bg-gray-100 text-gray-900 hover:bg-gray-200"
              }`}
              style={{
                WebkitTapHighlightColor: 'transparent',
                WebkitTouchCallout: 'none',
                WebkitUserSelect: 'none',
                userSelect: 'none'
              }}
              onClick={() => trackEvent('card_cta_click', 'listing', product.key)}
            >
              <span className="relative z-10">
                {product.comingSoon ? "Mehr erfahren" : "Jetzt bestellen"}
              </span>
            </Link>
            {product.comingSoon && (
              <Link
                href={`/produkte/${product.key}#waitlist`}
                className="block w-full text-center px-6 py-3 rounded-full font-medium transition-all duration-300 bg-copper/10 text-copper hover:bg-copper/15"
                style={{
                  WebkitTapHighlightColor: 'transparent',
                  WebkitTouchCallout: 'none',
                  WebkitUserSelect: 'none',
                  userSelect: 'none'
                }}
                onClick={() => trackEvent('waitlist_cta_click', 'listing', product.key)}
              >
                Warteliste sichern
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
