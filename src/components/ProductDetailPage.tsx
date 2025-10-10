"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import ProductHero from "./ProductHero";
import ProductSections from "./ProductSections";
import TestimonialsSlider from "./TestimonialsSlider";
import TrustBadges from "./TrustBadges";
import StickyCTA from "./StickyCTA";

interface Product {
  key: string;
  title: string;
  subtitle: string;
  description: string;
  category: string;
  accent: string;
  comingSoon: boolean;
  price: string;
  currency: string;
  productImage: string;
  heroImage: string;
  benefits: string[];
  ingredients: Array<{
    name: string;
    amount: string;
    benefit: string;
    icon: string;
  }>;
  dosage: string;
  targetGroup: string;
  application: string;
  science: Array<{
    title: string;
    description: string;
    link: string;
    source: string;
  }>;
  faqs: Array<{
    question: string;
    answer: string;
  }>;
  testimonials: Array<{
    name: string;
    role: string;
    content: string;
    rating: number;
  }>;
}

interface ProductDetailPageProps {
  product: Product;
}

export default function ProductDetailPage({ product }: ProductDetailPageProps) {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <main className="bg-cream text-green">
      {/* Hero Section */}
      <ProductHero product={product} />

      {/* Main Content */}
      <div className="container-wide py-12">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Content Sections */}
          <div className="lg:col-span-2">
            <ProductSections product={product} />
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-8 space-y-8">
              {/* Product Info Card */}
              <div className="bg-white rounded-2xl shadow-lg p-6">
                <div className="text-center mb-6">
                  <Image
                    src={product.productImage}
                    alt={product.title}
                    width={200}
                    height={200}
                    className="mx-auto mb-4"
                    quality={100}
                  />
                  <h2 className="text-2xl font-bold text-gray-900 mb-2">
                    {product.title}
                  </h2>
                  <p className="text-accent font-medium mb-4">
                    {product.subtitle}
                  </p>
                  <div className="text-3xl font-bold text-gray-900 mb-6">
                    {product.price} {product.currency}
                  </div>
                </div>

                {/* CTA Button */}
                <button
                  className={`w-full py-4 px-6 rounded-full font-medium text-white transition-all duration-300 ${
                    product.comingSoon
                      ? "bg-copper hover:bg-copper-dark"
                      : "bg-accent hover:bg-accent-dark"
                  } shadow-lg hover:shadow-xl transform hover:scale-105`}
                  style={{
                    WebkitTapHighlightColor: 'transparent',
                    WebkitTouchCallout: 'none',
                    WebkitUserSelect: 'none',
                    userSelect: 'none'
                  }}
                >
                  {product.comingSoon ? "Pre-Order" : "In den Warenkorb"}
                </button>

                {/* Trust Badges */}
                <TrustBadges />
              </div>

              {/* Quick Info */}
              <div className="bg-white rounded-2xl shadow-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  Schnellinfo
                </h3>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Kategorie:</span>
                    <span className="font-medium">{product.category}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Dosierung:</span>
                    <span className="font-medium">{product.dosage}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Status:</span>
                    <span className="font-medium text-copper">
                      {product.comingSoon ? "Coming Soon" : "Verfügbar"}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonials */}
      <section className="bg-gradient-to-r from-gray-50 to-gray-100 py-16">
        <div className="container-wide">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Was Experten und Kunden sagen
            </h2>
            <div className="w-16 h-1 bg-accent mx-auto rounded-full"></div>
          </div>
          <TestimonialsSlider testimonials={product.testimonials} />
        </div>
      </section>

      {/* Sticky CTA for Mobile */}
      <StickyCTA />
    </main>
  );
}
