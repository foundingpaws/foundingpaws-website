"use client";

import React, { useState, useEffect } from 'react';
import FadeIn from './FadeIn';
import Transform3D from './Transform3D';

interface FilterOption {
  id: string;
  label: string;
  count: number;
  color?: string;
}

interface ProductFilterProps {
  onFilterChange: (filters: FilterState) => void;
  className?: string;
}

interface FilterState {
  categories: string[];
  ageGroups: string[];
  healthFocus: string[];
  priceRange: [number, number];
  sortBy: string;
}

const ProductFilter: React.FC<ProductFilterProps> = ({ onFilterChange, className = '' }) => {
  const [filters, setFilters] = useState<FilterState>({
    categories: [],
    ageGroups: [],
    healthFocus: [],
    priceRange: [0, 100],
    sortBy: 'popularity'
  });

  const [isExpanded, setIsExpanded] = useState(false);

  const categories: FilterOption[] = [
    { id: 'kognition', label: 'Kognition & Herz', count: 1, color: 'copper' },
    { id: 'stress', label: 'Stress & Angst', count: 1, color: 'green' },
    { id: 'gelenke', label: 'Gelenke & Mobilität', count: 1, color: 'taupe' },
    { id: 'immunsystem', label: 'Immunsystem', count: 0, color: 'copper' },
    { id: 'haut', label: 'Haut & Fell', count: 0, color: 'green' }
  ];

  const ageGroups: FilterOption[] = [
    { id: 'welpe', label: 'Welpe (2-12 Monate)', count: 2 },
    { id: 'erwachsen', label: 'Erwachsen (1-7 Jahre)', count: 3 },
    { id: 'senior', label: 'Senior (7+ Jahre)', count: 2 }
  ];

  const healthFocus: FilterOption[] = [
    { id: 'gehirn', label: 'Gehirn & Gedächtnis', count: 1 },
    { id: 'herz', label: 'Herz & Kreislauf', count: 1 },
    { id: 'gelenke', label: 'Gelenke & Knochen', count: 1 },
    { id: 'stress', label: 'Stress & Angst', count: 1 },
    { id: 'immunsystem', label: 'Immunsystem', count: 0 },
    { id: 'haut', label: 'Haut & Fell', count: 0 }
  ];

  const sortOptions = [
    { id: 'popularity', label: 'Beliebtheit' },
    { id: 'price-low', label: 'Preis: Niedrig → Hoch' },
    { id: 'price-high', label: 'Preis: Hoch → Niedrig' },
    { id: 'name', label: 'Name A-Z' },
    { id: 'newest', label: 'Neueste zuerst' }
  ];

  const updateFilter = (type: keyof FilterState, value: any) => {
    setFilters(prev => ({
      ...prev,
      [type]: value
    }));
  };

  const toggleArrayFilter = (type: 'categories' | 'ageGroups' | 'healthFocus', value: string) => {
    setFilters(prev => ({
      ...prev,
      [type]: prev[type].includes(value)
        ? prev[type].filter(item => item !== value)
        : [...prev[type], value]
    }));
  };

  const clearAllFilters = () => {
    setFilters({
      categories: [],
      ageGroups: [],
      healthFocus: [],
      priceRange: [0, 100],
      sortBy: 'popularity'
    });
  };

  useEffect(() => {
    onFilterChange(filters);
  }, [filters, onFilterChange]);

  const activeFiltersCount = filters.categories.length + filters.ageGroups.length + filters.healthFocus.length;

  return (
    <div className={`bg-white/60 backdrop-blur-sm border border-taupe/20 rounded-2xl p-6 ${className}`}>
      {/* Filter Header */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <h3 className="wv-h3 text-green">Filter & Sortierung</h3>
          {activeFiltersCount > 0 && (
            <span className="px-3 py-1 bg-copper/20 text-copper text-sm font-medium rounded-full">
              {activeFiltersCount} aktiv
            </span>
          )}
        </div>
        <div className="flex items-center gap-2">
          {activeFiltersCount > 0 && (
            <button
              onClick={clearAllFilters}
              className="text-sm text-green/70 hover:text-green transition-colors"
            >
              Alle zurücksetzen
            </button>
          )}
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="lg:hidden p-2 rounded-lg bg-taupe/20 hover:bg-taupe/30 transition-colors"
          >
            {isExpanded ? '✕' : '☰'}
          </button>
        </div>
      </div>

      <div className={`space-y-6 ${isExpanded ? 'block' : 'hidden lg:block'}`}>
        {/* Sort By */}
        <div>
          <h4 className="text-lg font-semibold text-green mb-3">Sortieren nach</h4>
          <select
            value={filters.sortBy}
            onChange={(e) => updateFilter('sortBy', e.target.value)}
            className="w-full p-3 rounded-xl border border-taupe/20 bg-white/80 text-green focus:border-copper focus:outline-none"
          >
            {sortOptions.map(option => (
              <option key={option.id} value={option.id}>
                {option.label}
              </option>
            ))}
          </select>
        </div>

        {/* Categories */}
        <div>
          <h4 className="text-lg font-semibold text-green mb-3">Kategorien</h4>
          <div className="space-y-2">
            {categories.map(category => (
              <Transform3D key={category.id} hoverEffect="lift">
                <label className="flex items-center justify-between p-3 rounded-xl border border-taupe/20 hover:border-copper/50 cursor-pointer transition-all group">
                  <div className="flex items-center gap-3">
                    <input
                      type="checkbox"
                      checked={filters.categories.includes(category.id)}
                      onChange={() => toggleArrayFilter('categories', category.id)}
                      className="sr-only"
                    />
                    <div className={`w-4 h-4 rounded border-2 flex items-center justify-center transition-all ${
                      filters.categories.includes(category.id)
                        ? 'bg-copper border-copper'
                        : 'border-taupe/40 group-hover:border-copper/60'
                    }`}>
                      {filters.categories.includes(category.id) && (
                        <span className="text-cream text-xs">✓</span>
                      )}
                    </div>
                    <span className="text-green font-medium">{category.label}</span>
                  </div>
                  <span className="text-green/60 text-sm">{category.count}</span>
                </label>
              </Transform3D>
            ))}
          </div>
        </div>

        {/* Age Groups */}
        <div>
          <h4 className="text-lg font-semibold text-green mb-3">Altersgruppe</h4>
          <div className="space-y-2">
            {ageGroups.map(ageGroup => (
              <Transform3D key={ageGroup.id} hoverEffect="lift">
                <label className="flex items-center justify-between p-3 rounded-xl border border-taupe/20 hover:border-copper/50 cursor-pointer transition-all group">
                  <div className="flex items-center gap-3">
                    <input
                      type="checkbox"
                      checked={filters.ageGroups.includes(ageGroup.id)}
                      onChange={() => toggleArrayFilter('ageGroups', ageGroup.id)}
                      className="sr-only"
                    />
                    <div className={`w-4 h-4 rounded border-2 flex items-center justify-center transition-all ${
                      filters.ageGroups.includes(ageGroup.id)
                        ? 'bg-copper border-copper'
                        : 'border-taupe/40 group-hover:border-copper/60'
                    }`}>
                      {filters.ageGroups.includes(ageGroup.id) && (
                        <span className="text-cream text-xs">✓</span>
                      )}
                    </div>
                    <span className="text-green font-medium">{ageGroup.label}</span>
                  </div>
                  <span className="text-green/60 text-sm">{ageGroup.count}</span>
                </label>
              </Transform3D>
            ))}
          </div>
        </div>

        {/* Health Focus */}
        <div>
          <h4 className="text-lg font-semibold text-green mb-3">Gesundheitsfokus</h4>
          <div className="space-y-2">
            {healthFocus.map(focus => (
              <Transform3D key={focus.id} hoverEffect="lift">
                <label className="flex items-center justify-between p-3 rounded-xl border border-taupe/20 hover:border-copper/50 cursor-pointer transition-all group">
                  <div className="flex items-center gap-3">
                    <input
                      type="checkbox"
                      checked={filters.healthFocus.includes(focus.id)}
                      onChange={() => toggleArrayFilter('healthFocus', focus.id)}
                      className="sr-only"
                    />
                    <div className={`w-4 h-4 rounded border-2 flex items-center justify-center transition-all ${
                      filters.healthFocus.includes(focus.id)
                        ? 'bg-copper border-copper'
                        : 'border-taupe/40 group-hover:border-copper/60'
                    }`}>
                      {filters.healthFocus.includes(focus.id) && (
                        <span className="text-cream text-xs">✓</span>
                      )}
                    </div>
                    <span className="text-green font-medium">{focus.label}</span>
                  </div>
                  <span className="text-green/60 text-sm">{focus.count}</span>
                </label>
              </Transform3D>
            ))}
          </div>
        </div>

        {/* Price Range */}
        <div>
          <h4 className="text-lg font-semibold text-green mb-3">
            Preisbereich: {filters.priceRange[0]}€ - {filters.priceRange[1]}€
          </h4>
          <div className="px-2">
            <input
              type="range"
              min="0"
              max="100"
              value={filters.priceRange[1]}
              onChange={(e) => updateFilter('priceRange', [filters.priceRange[0], parseInt(e.target.value)])}
              className="w-full h-2 bg-taupe/20 rounded-lg appearance-none cursor-pointer slider"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductFilter;
