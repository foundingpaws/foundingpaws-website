// SEO optimization and meta tag management
interface SEOData {
  title: string;
  description: string;
  keywords: string[];
  canonicalUrl: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  ogType?: string;
  twitterCard?: string;
  twitterTitle?: string;
  twitterDescription?: string;
  twitterImage?: string;
  structuredData?: any;
  robots?: string;
  language?: string;
  author?: string;
  publishedTime?: string;
  modifiedTime?: string;
  section?: string;
  tags?: string[];
}

interface SEOReport {
  score: number;
  issues: {
    type: 'error' | 'warning' | 'info';
    category: 'title' | 'description' | 'meta' | 'structured' | 'technical';
    message: string;
    fix: string;
    severity: 'high' | 'medium' | 'low';
  }[];
  recommendations: string[];
  metrics: {
    titleLength: number;
    descriptionLength: number;
    keywordDensity: number;
    headingStructure: string[];
    imageAltText: number;
    internalLinks: number;
    externalLinks: number;
  };
}

class SEOOptimizer {
  private currentPage: string;
  private baseUrl: string;

  constructor() {
    this.currentPage = typeof window !== 'undefined' ? window.location.pathname : '';
    this.baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://foundingpaws.de';
  }

  public optimizePage(seoData: SEOData): void {
    // Update title
    if (seoData.title) {
      document.title = seoData.title;
    }

    // Update meta description
    this.updateMetaTag('description', seoData.description);

    // Update keywords
    if (seoData.keywords.length > 0) {
      this.updateMetaTag('keywords', seoData.keywords.join(', '));
    }

    // Update canonical URL
    this.updateCanonicalUrl(seoData.canonicalUrl);

    // Update Open Graph tags
    this.updateOpenGraphTags(seoData);

    // Update Twitter Card tags
    this.updateTwitterCardTags(seoData);

    // Update structured data
    if (seoData.structuredData) {
      this.updateStructuredData(seoData.structuredData);
    }

    // Update robots meta
    if (seoData.robots) {
      this.updateMetaTag('robots', seoData.robots);
    }

    // Update language
    if (seoData.language) {
      document.documentElement.lang = seoData.language;
    }
  }

  public auditPage(): SEOReport {
    const issues: SEOReport['issues'] = [];
    const recommendations: string[] = [];
    
    // Check title
    const title = document.title;
    if (!title) {
      issues.push({
        type: 'error',
        category: 'title',
        message: 'Missing page title',
        fix: 'Add a descriptive title tag',
        severity: 'high',
      });
    } else if (title.length < 30) {
      issues.push({
        type: 'warning',
        category: 'title',
        message: 'Title too short (less than 30 characters)',
        fix: 'Expand title to 30-60 characters',
        severity: 'medium',
      });
    } else if (title.length > 60) {
      issues.push({
        type: 'warning',
        category: 'title',
        message: 'Title too long (more than 60 characters)',
        fix: 'Shorten title to 30-60 characters',
        severity: 'medium',
      });
    }

    // Check meta description
    const description = this.getMetaContent('description');
    if (!description) {
      issues.push({
        type: 'error',
        category: 'description',
        message: 'Missing meta description',
        fix: 'Add a compelling meta description',
        severity: 'high',
      });
    } else if (description.length < 120) {
      issues.push({
        type: 'warning',
        category: 'description',
        message: 'Meta description too short (less than 120 characters)',
        fix: 'Expand description to 120-160 characters',
        severity: 'medium',
      });
    } else if (description.length > 160) {
      issues.push({
        type: 'warning',
        category: 'description',
        message: 'Meta description too long (more than 160 characters)',
        fix: 'Shorten description to 120-160 characters',
        severity: 'medium',
      });
    }

    // Check heading structure
    const headings = this.analyzeHeadingStructure();
    if (headings.length === 0) {
      issues.push({
        type: 'error',
        category: 'technical',
        message: 'No heading elements found',
        fix: 'Add h1, h2, h3 elements to structure content',
        severity: 'high',
      });
    } else if (!headings.includes('h1')) {
      issues.push({
        type: 'error',
        category: 'technical',
        message: 'No h1 element found',
        fix: 'Add a single h1 element per page',
        severity: 'high',
      });
    }

    // Check image alt text
    const images = document.querySelectorAll('img');
    const imagesWithoutAlt = Array.from(images).filter(img => !img.alt);
    if (imagesWithoutAlt.length > 0) {
      issues.push({
        type: 'warning',
        category: 'technical',
        message: `${imagesWithoutAlt.length} images missing alt text`,
        fix: 'Add descriptive alt text to all images',
        severity: 'medium',
      });
    }

    // Check internal links
    const internalLinks = this.countInternalLinks();
    if (internalLinks === 0) {
      issues.push({
        type: 'info',
        category: 'technical',
        message: 'No internal links found',
        fix: 'Add internal links to improve site structure',
        severity: 'low',
      });
    }

    // Check canonical URL
    const canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      issues.push({
        type: 'warning',
        category: 'meta',
        message: 'Missing canonical URL',
        fix: 'Add canonical link to prevent duplicate content',
        severity: 'medium',
      });
    }

    // Check Open Graph tags
    const ogTitle = this.getMetaContent('og:title');
    if (!ogTitle) {
      issues.push({
        type: 'warning',
        category: 'meta',
        message: 'Missing Open Graph title',
        fix: 'Add og:title meta tag for social sharing',
        severity: 'medium',
      });
    }

    // Check structured data
    const structuredData = document.querySelector('script[type="application/ld+json"]');
    if (!structuredData) {
      issues.push({
        type: 'info',
        category: 'structured',
        message: 'No structured data found',
        fix: 'Add JSON-LD structured data for better search results',
        severity: 'low',
      });
    }

    // Generate recommendations
    if (issues.filter(i => i.type === 'error').length > 0) {
      recommendations.push('Fix critical SEO errors for better search visibility');
    }
    if (issues.filter(i => i.category === 'technical').length > 0) {
      recommendations.push('Improve technical SEO elements');
    }
    if (issues.filter(i => i.category === 'meta').length > 0) {
      recommendations.push('Enhance meta tags for social sharing');
    }

    // Calculate score
    const score = this.calculateSEOScore(issues);

    // Generate metrics
    const metrics = this.generateMetrics();

    return {
      score,
      issues,
      recommendations,
      metrics,
    };
  }

  private updateMetaTag(name: string, content: string): void {
    let meta = document.querySelector(`meta[name="${name}"]`);
    if (!meta) {
      meta = document.createElement('meta');
      meta.setAttribute('name', name);
      document.head.appendChild(meta);
    }
    meta.setAttribute('content', content);
  }

  private updateCanonicalUrl(url: string): void {
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', url);
  }

  private updateOpenGraphTags(seoData: SEOData): void {
    const ogTags = [
      { property: 'og:title', content: seoData.ogTitle || seoData.title },
      { property: 'og:description', content: seoData.ogDescription || seoData.description },
      { property: 'og:image', content: seoData.ogImage },
      { property: 'og:url', content: seoData.canonicalUrl },
      { property: 'og:type', content: seoData.ogType || 'website' },
    ];

    ogTags.forEach(tag => {
      if (tag.content) {
        this.updateMetaProperty(tag.property, tag.content);
      }
    });
  }

  private updateTwitterCardTags(seoData: SEOData): void {
    const twitterTags = [
      { name: 'twitter:card', content: seoData.twitterCard || 'summary_large_image' },
      { name: 'twitter:title', content: seoData.twitterTitle || seoData.title },
      { name: 'twitter:description', content: seoData.twitterDescription || seoData.description },
      { name: 'twitter:image', content: seoData.twitterImage || seoData.ogImage },
    ];

    twitterTags.forEach(tag => {
      if (tag.content) {
        this.updateMetaTag(tag.name, tag.content);
      }
    });
  }

  private updateMetaProperty(property: string, content: string): void {
    let meta = document.querySelector(`meta[property="${property}"]`);
    if (!meta) {
      meta = document.createElement('meta');
      meta.setAttribute('property', property);
      document.head.appendChild(meta);
    }
    meta.setAttribute('content', content);
  }

  private updateStructuredData(data: any): void {
    // Remove existing structured data
    const existing = document.querySelector('script[type="application/ld+json"]');
    if (existing) {
      existing.remove();
    }

    // Add new structured data
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.textContent = JSON.stringify(data);
    document.head.appendChild(script);
  }

  private getMetaContent(name: string): string | null {
    const meta = document.querySelector(`meta[name="${name}"]`);
    return meta ? meta.getAttribute('content') : null;
  }

  private analyzeHeadingStructure(): string[] {
    const headings = document.querySelectorAll('h1, h2, h3, h4, h5, h6');
    return Array.from(headings).map(h => h.tagName.toLowerCase());
  }

  private countInternalLinks(): number {
    const links = document.querySelectorAll('a[href]');
    return Array.from(links).filter(link => {
      const href = link.getAttribute('href');
      return href && (href.startsWith('/') || href.includes(this.baseUrl));
    }).length;
  }

  private calculateSEOScore(issues: SEOReport['issues']): number {
    const totalIssues = issues.length;
    const errorCount = issues.filter(i => i.type === 'error').length;
    const warningCount = issues.filter(i => i.type === 'warning').length;
    
    if (totalIssues === 0) return 100;
    
    const errorPenalty = errorCount * 15;
    const warningPenalty = warningCount * 5;
    
    return Math.max(0, 100 - errorPenalty - warningPenalty);
  }

  private generateMetrics() {
    const title = document.title;
    const description = this.getMetaContent('description') || '';
    const headings = this.analyzeHeadingStructure();
    const images = document.querySelectorAll('img');
    const imagesWithAlt = Array.from(images).filter(img => img.alt).length;
    const internalLinks = this.countInternalLinks();
    const externalLinks = document.querySelectorAll('a[href^="http"]').length;

    return {
      titleLength: title.length,
      descriptionLength: description.length,
      keywordDensity: 0, // Would need to analyze content
      headingStructure: headings,
      imageAltText: imagesWithAlt,
      internalLinks,
      externalLinks,
    };
  }

  public generateSitemap(): string {
    // This would generate a sitemap.xml
    // In production, this would be more comprehensive
    return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>${this.baseUrl}</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>
</urlset>`;
  }

  public generateRobotsTxt(): string {
    return `User-agent: *
Allow: /

Sitemap: ${this.baseUrl}/sitemap.xml`;
  }
}

// Create global instance
export const seoOptimizer = new SEOOptimizer();

// Export convenience functions
export const optimizePageSEO = (seoData: SEOData) => seoOptimizer.optimizePage(seoData);
export const auditPageSEO = () => seoOptimizer.auditPage();
export const generateSitemap = () => seoOptimizer.generateSitemap();
export const generateRobotsTxt = () => seoOptimizer.generateRobotsTxt();
