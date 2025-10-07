// Advanced search functionality
interface SearchResult {
  id: string;
  title: string;
  description: string;
  type: 'product' | 'blog' | 'faq' | 'page';
  url: string;
  score: number;
  highlights: string[];
  tags?: string[];
  category?: string;
  metadata?: Record<string, any>;
}

interface SearchFilters {
  type?: string[];
  category?: string[];
  tags?: string[];
  dateRange?: {
    start: Date;
    end: Date;
  };
}

interface SearchOptions {
  limit?: number;
  offset?: number;
  sortBy?: 'relevance' | 'date' | 'title';
  sortOrder?: 'asc' | 'desc';
  fuzzy?: boolean;
  includeMetadata?: boolean;
}

class SearchEngine {
  private index: Map<string, SearchResult> = new Map();
  private stopWords = new Set([
    'der', 'die', 'das', 'und', 'oder', 'aber', 'mit', 'von', 'zu', 'in', 'auf', 'für', 'an', 'bei',
    'the', 'and', 'or', 'but', 'with', 'from', 'to', 'in', 'on', 'for', 'at', 'by'
  ]);

  constructor() {
    this.initializeIndex();
  }

  private initializeIndex(): void {
    // Product data
    const products = [
      {
        id: 'bright-mind',
        title: 'Bright Mind - Kognitions- & Herz-Support',
        description: 'Natürliche Ergänzung für geistige Klarheit und Herzgesundheit Ihres Hundes. Mit Omega-3, L-Theanin und Coenzym Q10.',
        type: 'product' as const,
        url: '/products/bright-mind',
        category: 'kognition-herz',
        tags: ['omega-3', 'l-theanin', 'coenzym-q10', 'kognition', 'herz', 'gehirn'],
      },
      {
        id: 'gentle-calm',
        title: 'Gentle Calm - Stress & Angst-Linderung',
        description: 'Beruhigende Formel für gestresste und ängstliche Hunde. Mit L-Theanin, Kamille und Baldrian.',
        type: 'product' as const,
        url: '/products/gentle-calm',
        category: 'stress-angst',
        tags: ['l-theanin', 'kamille', 'baldrian', 'stress', 'angst', 'beruhigung'],
      },
      {
        id: 'vital-joints',
        title: 'Vital Joints - Gelenke & Mobilität',
        description: 'Stärkt Gelenke und fördert Beweglichkeit. Mit Glucosamin, Chondroitin und MSM.',
        type: 'product' as const,
        url: '/products/vital-joints',
        category: 'gelenke-mobilität',
        tags: ['glucosamin', 'chondroitin', 'msm', 'gelenke', 'mobilität', 'beweglichkeit'],
      },
    ];

    // Blog data
    const blogPosts = [
      {
        id: 'joint-problems',
        title: 'Gelenkprobleme bei Hunden: Ursachen und Vorbeugung',
        description: 'Erfahren Sie, wie Sie Gelenkprobleme bei Ihrem Hund erkennen und vorbeugen können.',
        type: 'blog' as const,
        url: '/blog/joint-problems',
        category: 'gesundheit',
        tags: ['gelenke', 'gesundheit', 'vorbeugung', 'beweglichkeit'],
      },
      {
        id: 'omega3-guide',
        title: 'Omega-3 für Hunde: Der ultimative Guide',
        description: 'Alles über Omega-3-Fettsäuren und deren Vorteile für die Hundegesundheit.',
        type: 'blog' as const,
        url: '/blog/omega3-guide',
        category: 'ernährung',
        tags: ['omega-3', 'ernährung', 'gesundheit', 'fettsäuren'],
      },
      {
        id: 'dog-stress',
        title: 'Stress bei Hunden: Anzeichen und Lösungen',
        description: 'Wie Sie Stress bei Ihrem Hund erkennen und mit natürlichen Mitteln lindern können.',
        type: 'blog' as const,
        url: '/blog/dog-stress',
        category: 'verhalten',
        tags: ['stress', 'verhalten', 'beruhigung', 'wohlbefinden'],
      },
    ];

    // FAQ data
    const faqs = [
      {
        id: 'dosierung',
        title: 'Wie dosiere ich die Ergänzungen richtig?',
        description: 'Die richtige Dosierung hängt vom Gewicht und Alter Ihres Hundes ab. Folgen Sie unseren Dosierungsempfehlungen.',
        type: 'faq' as const,
        url: '/faq#dosierung',
        category: 'anwendung',
        tags: ['dosierung', 'anwendung', 'gewicht', 'alter'],
      },
      {
        id: 'sicherheit',
        title: 'Sind die Ergänzungen sicher für meinen Hund?',
        description: 'Alle unsere Produkte sind von Tierärzten entwickelt und getestet. Sie enthalten nur natürliche, sichere Inhaltsstoffe.',
        type: 'faq' as const,
        url: '/faq#sicherheit',
        category: 'sicherheit',
        tags: ['sicherheit', 'tierarzt', 'natürlich', 'inhaltsstoffe'],
      },
    ];

    // Index all content
    [...products, ...blogPosts, ...faqs].forEach(item => {
      this.index.set(item.id, {
        ...item,
        score: 0,
        highlights: [],
      });
    });
  }

  public search(
    query: string,
    filters: SearchFilters = {},
    options: SearchOptions = {}
  ): SearchResult[] {
    if (!query.trim()) return [];

    const {
      limit = 10,
      offset = 0,
      sortBy = 'relevance',
      sortOrder = 'desc',
      fuzzy = true,
      includeMetadata = true,
    } = options;

    const searchTerms = this.tokenize(query);
    const results: SearchResult[] = [];

    // Search through index
    for (const [id, item] of this.index) {
      if (this.matchesFilters(item, filters)) {
        const score = this.calculateScore(item, searchTerms, fuzzy);
        if (score > 0) {
          const highlights = this.generateHighlights(item, searchTerms);
          results.push({
            ...item,
            score,
            highlights,
            metadata: includeMetadata ? this.extractMetadata(item) : undefined,
          });
        }
      }
    }

    // Sort results
    results.sort((a, b) => {
      let comparison = 0;
      
      switch (sortBy) {
        case 'relevance':
          comparison = b.score - a.score;
          break;
        case 'date':
          comparison = (b.metadata?.date || 0) - (a.metadata?.date || 0);
          break;
        case 'title':
          comparison = a.title.localeCompare(b.title);
          break;
      }

      return sortOrder === 'asc' ? -comparison : comparison;
    });

    // Apply pagination
    return results.slice(offset, offset + limit);
  }

  private tokenize(text: string): string[] {
    return text
      .toLowerCase()
      .replace(/[^\w\s]/g, ' ')
      .split(/\s+/)
      .filter(token => token.length > 2 && !this.stopWords.has(token));
  }

  private calculateScore(item: SearchResult, searchTerms: string[], fuzzy: boolean): number {
    let score = 0;
    const text = `${item.title} ${item.description} ${item.tags?.join(' ') || ''}`.toLowerCase();

    for (const term of searchTerms) {
      // Exact match in title (highest score)
      if (item.title.toLowerCase().includes(term)) {
        score += 10;
      }

      // Exact match in description
      if (item.description.toLowerCase().includes(term)) {
        score += 5;
      }

      // Exact match in tags
      if (item.tags?.some(tag => tag.toLowerCase().includes(term))) {
        score += 8;
      }

      // Fuzzy matching
      if (fuzzy) {
        const fuzzyScore = this.calculateFuzzyScore(text, term);
        score += fuzzyScore * 2;
      }
    }

    return score;
  }

  private calculateFuzzyScore(text: string, term: string): number {
    // Simple Levenshtein distance-based fuzzy matching
    const distance = this.levenshteinDistance(text, term);
    const maxLength = Math.max(text.length, term.length);
    return maxLength === 0 ? 0 : (maxLength - distance) / maxLength;
  }

  private levenshteinDistance(str1: string, str2: string): number {
    const matrix = Array(str2.length + 1).fill(null).map(() => Array(str1.length + 1).fill(null));

    for (let i = 0; i <= str1.length; i++) matrix[0][i] = i;
    for (let j = 0; j <= str2.length; j++) matrix[j][0] = j;

    for (let j = 1; j <= str2.length; j++) {
      for (let i = 1; i <= str1.length; i++) {
        const indicator = str1[i - 1] === str2[j - 1] ? 0 : 1;
        matrix[j][i] = Math.min(
          matrix[j][i - 1] + 1,
          matrix[j - 1][i] + 1,
          matrix[j - 1][i - 1] + indicator
        );
      }
    }

    return matrix[str2.length][str1.length];
  }

  private generateHighlights(item: SearchResult, searchTerms: string[]): string[] {
    const highlights: string[] = [];
    const text = `${item.title} ${item.description}`;

    for (const term of searchTerms) {
      const regex = new RegExp(`(${term})`, 'gi');
      const matches = text.match(regex);
      if (matches) {
        highlights.push(...matches);
      }
    }

    return [...new Set(highlights)]; // Remove duplicates
  }

  private matchesFilters(item: SearchResult, filters: SearchFilters): boolean {
    if (filters.type && !filters.type.includes(item.type)) return false;
    if (filters.category && !filters.category.includes(item.category || '')) return false;
    if (filters.tags && !filters.tags.some(tag => item.tags?.includes(tag))) return false;
    if (filters.dateRange) {
      const itemDate = item.metadata?.date || 0;
      if (itemDate < filters.dateRange.start.getTime() || itemDate > filters.dateRange.end.getTime()) {
        return false;
      }
    }
    return true;
  }

  private extractMetadata(item: SearchResult): Record<string, any> {
    return {
      type: item.type,
      category: item.category,
      tags: item.tags,
      date: Date.now(), // Mock date
      wordCount: item.description.split(' ').length,
    };
  }

  public getSuggestions(query: string, limit: number = 5): string[] {
    if (!query.trim()) return [];

    const suggestions = new Set<string>();
    const searchTerms = this.tokenize(query);

    for (const [id, item] of this.index) {
      const text = `${item.title} ${item.description} ${item.tags?.join(' ') || ''}`.toLowerCase();
      
      for (const term of searchTerms) {
        const words = text.split(/\s+/);
        words.forEach(word => {
          if (word.startsWith(term) && word.length > term.length) {
            suggestions.add(word);
          }
        });
      }
    }

    return Array.from(suggestions).slice(0, limit);
  }

  public getPopularSearches(limit: number = 10): string[] {
    // Mock popular searches - in production, this would come from analytics
    return [
      'omega-3',
      'gelenke',
      'stress',
      'kognition',
      'herz',
      'beweglichkeit',
      'angst',
      'ernährung',
      'gesundheit',
      'natürlich',
    ].slice(0, limit);
  }
}

// Create global instance
export const searchEngine = new SearchEngine();

// Export convenience functions
export const search = (query: string, filters?: SearchFilters, options?: SearchOptions) => 
  searchEngine.search(query, filters, options);
export const getSuggestions = (query: string, limit?: number) => 
  searchEngine.getSuggestions(query, limit);
export const getPopularSearches = (limit?: number) => 
  searchEngine.getPopularSearches(limit);
