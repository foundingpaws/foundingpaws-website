'use client';

import { useState, useEffect, useRef } from 'react';
import { search, getSuggestions, getPopularSearches } from '@/lib/search';
import { trackEvent, trackSearch } from '@/lib/analytics';
import FadeIn from './FadeIn';
import Transform3D from './Transform3D';

interface SearchResult {
  id: string;
  title: string;
  description: string;
  type: 'product' | 'blog' | 'faq' | 'page';
  url: string;
  score: number;
  highlights: string[];
  metadata?: Record<string, any>;
}

interface AdvancedSearchProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function AdvancedSearch({ isOpen, onClose }: AdvancedSearchProps) {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<SearchResult[]>([]);
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const [popularSearches, setPopularSearches] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [selectedFilter, setSelectedFilter] = useState<string>('all');
  const [sortBy, setSortBy] = useState<'relevance' | 'date' | 'title'>('relevance');
  const [showFilters, setShowFilters] = useState(false);
  const [hasSearched, setHasSearched] = useState(false);
  
  const inputRef = useRef<HTMLInputElement>(null);
  const searchTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Focus input when opened
  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  // Load popular searches on mount
  useEffect(() => {
    if (isOpen) {
      setPopularSearches(getPopularSearches(8));
    }
  }, [isOpen]);

  // Handle search with debouncing
  useEffect(() => {
    if (searchTimeoutRef.current) {
      clearTimeout(searchTimeoutRef.current);
    }

    if (query.trim().length >= 2) {
      searchTimeoutRef.current = setTimeout(() => {
        performSearch();
      }, 300);
    } else if (query.trim().length === 0) {
      setResults([]);
      setHasSearched(false);
    }

    return () => {
      if (searchTimeoutRef.current) {
        clearTimeout(searchTimeoutRef.current);
      }
    };
  }, [query, selectedFilter, sortBy]);

  // Get suggestions
  useEffect(() => {
    if (query.trim().length >= 2) {
      setSuggestions(getSuggestions(query, 5));
    } else {
      setSuggestions([]);
    }
  }, [query]);

  const performSearch = async () => {
    if (!query.trim()) return;

    setIsLoading(true);
    setHasSearched(true);

    try {
      const searchResults = search(query, {
        type: selectedFilter === 'all' ? undefined : [selectedFilter as any],
      }, {
        sortBy,
        limit: 20,
      });

      setResults(searchResults);
      
      // Track search
      trackSearch(query, searchResults.length);
    } catch (error) {
      console.error('Search error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSearch = (searchQuery: string) => {
    setQuery(searchQuery);
    setHasSearched(true);
  };

  const handleSuggestionClick = (suggestion: string) => {
    setQuery(suggestion);
    setHasSearched(true);
  };

  const handlePopularSearchClick = (popularSearch: string) => {
    setQuery(popularSearch);
    setHasSearched(true);
  };

  const handleResultClick = (result: SearchResult) => {
    trackEvent('search_result_click', 'engagement', result.type);
    window.location.href = result.url;
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'product': return '🛍️';
      case 'blog': return '📝';
      case 'faq': return '❓';
      case 'page': return '📄';
      default: return '🔍';
    }
  };

  const getTypeLabel = (type: string) => {
    switch (type) {
      case 'product': return 'Produkt';
      case 'blog': return 'Artikel';
      case 'faq': return 'FAQ';
      case 'page': return 'Seite';
      default: return 'Ergebnis';
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex items-start justify-center pt-20">
      <div className="w-full max-w-4xl mx-4">
        <FadeIn>
          <Transform3D hoverEffect="lift" className="bg-white rounded-2xl shadow-2xl overflow-hidden">
            {/* Header */}
            <div className="bg-gradient-to-r from-green to-copper p-6">
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-bold text-cream">Erweiterte Suche</h2>
                <button
                  onClick={onClose}
                  className="text-cream/80 hover:text-cream text-2xl transition-colors"
                >
                  ✕
                </button>
              </div>
            </div>

            {/* Search Input */}
            <div className="p-6 border-b border-gray-200">
              <div className="relative">
                <input
                  ref={inputRef}
                  type="text"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Suchen Sie nach Produkten, Artikeln, FAQs..."
                  className="w-full px-4 py-3 pr-12 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green focus:border-transparent text-lg"
                />
                <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                  {isLoading ? (
                    <div className="animate-spin w-6 h-6 border-2 border-green border-t-transparent rounded-full"></div>
                  ) : (
                    <span className="text-gray-400">🔍</span>
                  )}
                </div>
              </div>

              {/* Filters */}
              <div className="mt-4 flex flex-wrap gap-2">
                <button
                  onClick={() => setShowFilters(!showFilters)}
                  className="px-3 py-1 bg-gray-100 hover:bg-gray-200 rounded-full text-sm transition-colors"
                >
                  {showFilters ? 'Filter verstecken' : 'Filter anzeigen'}
                </button>
                
                {showFilters && (
                  <div className="flex flex-wrap gap-2 mt-2">
                    <select
                      value={selectedFilter}
                      onChange={(e) => setSelectedFilter(e.target.value)}
                      className="px-3 py-1 border border-gray-300 rounded-full text-sm"
                    >
                      <option value="all">Alle Typen</option>
                      <option value="product">Produkte</option>
                      <option value="blog">Artikel</option>
                      <option value="faq">FAQ</option>
                      <option value="page">Seiten</option>
                    </select>
                    
                    <select
                      value={sortBy}
                      onChange={(e) => setSortBy(e.target.value as any)}
                      className="px-3 py-1 border border-gray-300 rounded-full text-sm"
                    >
                      <option value="relevance">Relevanz</option>
                      <option value="date">Datum</option>
                      <option value="title">Titel</option>
                    </select>
                  </div>
                )}
              </div>
            </div>

            {/* Content */}
            <div className="max-h-96 overflow-y-auto">
              {!hasSearched ? (
                /* Popular Searches */
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-gray-800 mb-4">Beliebte Suchbegriffe</h3>
                  <div className="flex flex-wrap gap-2">
                    {popularSearches.map((search, index) => (
                      <button
                        key={index}
                        onClick={() => handlePopularSearchClick(search)}
                        className="px-3 py-1 bg-green/10 text-green hover:bg-green/20 rounded-full text-sm transition-colors"
                      >
                        {search}
                      </button>
                    ))}
                  </div>
                </div>
              ) : results.length > 0 ? (
                /* Search Results */
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-semibold text-gray-800">
                      {results.length} Ergebnis{results.length !== 1 ? 'se' : ''} für "{query}"
                    </h3>
                  </div>
                  
                  <div className="space-y-4">
                    {results.map((result, index) => (
                      <div
                        key={result.id}
                        onClick={() => handleResultClick(result)}
                        className="p-4 border border-gray-200 rounded-lg hover:border-green hover:shadow-md cursor-pointer transition-all"
                      >
                        <div className="flex items-start gap-3">
                          <span className="text-2xl">{getTypeIcon(result.type)}</span>
                          <div className="flex-1">
                            <div className="flex items-center gap-2 mb-1">
                              <h4 className="font-semibold text-gray-800">{result.title}</h4>
                              <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full">
                                {getTypeLabel(result.type)}
                              </span>
                            </div>
                            <p className="text-gray-600 text-sm mb-2">{result.description}</p>
                            {result.highlights.length > 0 && (
                              <div className="flex flex-wrap gap-1">
                                {result.highlights.slice(0, 3).map((highlight, i) => (
                                  <span
                                    key={i}
                                    className="px-2 py-1 bg-yellow-100 text-yellow-800 text-xs rounded"
                                  >
                                    {highlight}
                                  </span>
                                ))}
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ) : (
                /* No Results */
                <div className="p-6 text-center">
                  <div className="text-6xl mb-4">🔍</div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">Keine Ergebnisse gefunden</h3>
                  <p className="text-gray-600 mb-4">
                    Versuchen Sie es mit anderen Suchbegriffen oder filtern Sie die Ergebnisse.
                  </p>
                  <button
                    onClick={() => setQuery('')}
                    className="px-4 py-2 bg-green text-cream rounded-lg hover:bg-green/90 transition-colors"
                  >
                    Neue Suche starten
                  </button>
                </div>
              )}

              {/* Suggestions */}
              {suggestions.length > 0 && query.trim().length >= 2 && (
                <div className="p-6 border-t border-gray-200">
                  <h3 className="text-sm font-semibold text-gray-600 mb-2">Vorschläge</h3>
                  <div className="flex flex-wrap gap-2">
                    {suggestions.map((suggestion, index) => (
                      <button
                        key={index}
                        onClick={() => handleSuggestionClick(suggestion)}
                        className="px-3 py-1 bg-gray-100 hover:bg-gray-200 rounded-full text-sm transition-colors"
                      >
                        {suggestion}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </Transform3D>
        </FadeIn>
      </div>
    </div>
  );
}
