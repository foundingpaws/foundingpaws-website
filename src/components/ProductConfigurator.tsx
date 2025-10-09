"use client";

import React, { useState } from 'react';
import FadeIn from './FadeIn';
import Transform3D from './Transform3D';
import GlassmorphismCard from './GlassmorphismCard';

interface ProductConfiguratorProps {
  onClose: () => void;
}

const ProductConfigurator: React.FC<ProductConfiguratorProps> = ({ onClose }) => {
  const [selectedProduct, setSelectedProduct] = useState<string | null>(null);
  const [selectedSize, setSelectedSize] = useState<string>('medium');
  const [selectedFlavor, setSelectedFlavor] = useState<string>('original');
  const [isAnimating, setIsAnimating] = useState(false);

  const products = [
    {
      id: 'bright-mind',
      name: 'Bright Mind',
      description: 'Kognitive Unterstützung & Herzgesundheit',
      color: 'copper',
      image: '/products/bright-mind/product-3d.svg'
    },
    {
      id: 'gentle-calm',
      name: 'Gentle Calm',
      description: 'Stresslinderung & Emotionale Balance',
      color: 'green',
      image: '/products/gentle-calm/product-3d.svg'
    },
    {
      id: 'vital-joints',
      name: 'Vital Joints',
      description: 'Gelenkgesundheit & Mobilität',
      color: 'taupe',
      image: '/products/vital-joints/product-3d.svg'
    }
  ];

  const sizes = [
    { id: 'small', name: 'Klein (5kg)', price: '29€' },
    { id: 'medium', name: 'Mittel (15kg)', price: '49€' },
    { id: 'large', name: 'Groß (30kg)', price: '79€' }
  ];

  const flavors = [
    { id: 'original', name: 'Original', description: 'Neutraler Geschmack' },
    { id: 'chicken', name: 'Huhn', description: 'Mild & lecker' },
    { id: 'beef', name: 'Rind', description: 'Kräftig & aromatisch' }
  ];

  const handleProductSelect = (productId: string) => {
    setIsAnimating(true);
    setTimeout(() => {
      setSelectedProduct(productId);
      setIsAnimating(false);
    }, 300);
  };

  const selectedProductData = products.find(p => p.id === selectedProduct);

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <FadeIn>
        <GlassmorphismCard 
          variant="strong" 
          className="w-full max-w-4xl max-h-[90vh] overflow-y-auto"
        >
          <div className="p-8">
            {/* Header */}
            <div className="flex justify-between items-center mb-8">
              <div>
                <h2 className="wv-h2 text-green">Produkt-Konfigurator</h2>
                <p className="text-green/70 mt-2">Stelle dein perfektes Supplement zusammen</p>
              </div>
              <button
                onClick={onClose}
                className="w-10 h-10 rounded-full bg-taupe/20 hover:bg-taupe/30 flex items-center justify-center transition-colors"
              >
                ✕
              </button>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              {/* Product Selection */}
              <div>
                <h3 className="wv-h3 text-green mb-6">1. Produkt wählen</h3>
                <div className="space-y-4">
                  {products.map((product) => (
                    <Transform3D 
                      key={product.id}
                      hoverEffect="lift"
                      className="cursor-pointer"
                    >
                      <div
                        onClick={() => handleProductSelect(product.id)}
                        className={`p-6 rounded-2xl border-2 transition-all duration-300 ${
                          selectedProduct === product.id
                            ? 'border-copper bg-copper/10'
                            : 'border-taupe/20 hover:border-copper/50'
                        }`}
                      >
                        <div className="flex items-center gap-4">
                          <div className="w-16 h-16 rounded-xl overflow-hidden bg-gradient-to-br from-cream to-taupe/20">
                            <img 
                              src={product.image} 
                              alt={product.name}
                              className="w-full h-full object-contain"
                            />
                          </div>
                          <div className="flex-1">
                            <h4 className="wv-h4 text-green">{product.name}</h4>
                            <p className="text-green/70 text-sm">{product.description}</p>
                          </div>
                          {selectedProduct === product.id && (
                            <div className="w-6 h-6 rounded-full bg-copper flex items-center justify-center">
                              <span className="text-cream text-sm">✓</span>
                            </div>
                          )}
                        </div>
                      </div>
                    </Transform3D>
                  ))}
                </div>
              </div>

              {/* Configuration */}
              <div>
                {selectedProduct ? (
                  <FadeIn>
                    <div className="space-y-6">
                      <h3 className="wv-h3 text-green">2. Konfiguration</h3>
                      
                      {/* Size Selection */}
                      <div>
                        <h4 className="text-lg font-semibold text-green mb-3">Hundegröße</h4>
                        <div className="grid grid-cols-1 gap-3">
                          {sizes.map((size) => (
                            <label
                              key={size.id}
                              className={`p-4 rounded-xl border-2 cursor-pointer transition-all ${
                                selectedSize === size.id
                                  ? 'border-copper bg-copper/10'
                                  : 'border-taupe/20 hover:border-copper/50'
                              }`}
                            >
                              <input
                                type="radio"
                                name="size"
                                value={size.id}
                                checked={selectedSize === size.id}
                                onChange={(e) => setSelectedSize(e.target.value)}
                                className="sr-only"
                              />
                              <div className="flex justify-between items-center">
                                <span className="text-green font-medium">{size.name}</span>
                                <span className="text-copper font-bold">{size.price}</span>
                              </div>
                            </label>
                          ))}
                        </div>
                      </div>

                      {/* Flavor Selection */}
                      <div>
                        <h4 className="text-lg font-semibold text-green mb-3">Geschmack</h4>
                        <div className="grid grid-cols-1 gap-3">
                          {flavors.map((flavor) => (
                            <label
                              key={flavor.id}
                              className={`p-4 rounded-xl border-2 cursor-pointer transition-all ${
                                selectedFlavor === flavor.id
                                  ? 'border-copper bg-copper/10'
                                  : 'border-taupe/20 hover:border-copper/50'
                              }`}
                            >
                              <input
                                type="radio"
                                name="flavor"
                                value={flavor.id}
                                checked={selectedFlavor === flavor.id}
                                onChange={(e) => setSelectedFlavor(e.target.value)}
                                className="sr-only"
                              />
                              <div>
                                <div className="text-green font-medium">{flavor.name}</div>
                                <div className="text-green/70 text-sm">{flavor.description}</div>
                              </div>
                            </label>
                          ))}
                        </div>
                      </div>

                      {/* Summary */}
                      <div className="bg-green/5 border border-green/20 rounded-xl p-6">
                        <h4 className="text-lg font-semibold text-green mb-4">Zusammenfassung</h4>
                        <div className="space-y-2 text-sm">
                          <div className="flex justify-between">
                            <span className="text-green/70">Produkt:</span>
                            <span className="text-green font-medium">{selectedProductData?.name}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-green/70">Größe:</span>
                            <span className="text-green font-medium">
                              {sizes.find(s => s.id === selectedSize)?.name}
                            </span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-green/70">Geschmack:</span>
                            <span className="text-green font-medium">
                              {flavors.find(f => f.id === selectedFlavor)?.name}
                            </span>
                          </div>
                          <div className="border-t border-green/20 pt-2 mt-4">
                            <div className="flex justify-between text-lg font-bold">
                              <span className="text-green">Gesamtpreis:</span>
                              <span className="text-copper">
                                {sizes.find(s => s.id === selectedSize)?.price}
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Action Buttons */}
                      <div className="flex gap-4">
                        <button className="btn-primary pill text-cream px-8 py-4 flex-1">
                          In den Warenkorb
                        </button>
                        <button className="btn-secondary pill text-cream px-8 py-4">
                          Merken
                        </button>
                      </div>
                    </div>
                  </FadeIn>
                ) : (
                  <div className="text-center py-12">
                    <div className="w-24 h-24 rounded-full bg-taupe/20 flex items-center justify-center mx-auto mb-4">
                      <span className="text-4xl">🐕</span>
                    </div>
                    <p className="text-green/70">Wähle ein Produkt aus, um mit der Konfiguration zu beginnen</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </GlassmorphismCard>
      </FadeIn>
    </div>
  );
};

export default ProductConfigurator;
