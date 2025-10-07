// Accessibility audit and compliance checking
interface AccessibilityIssue {
  type: 'error' | 'warning' | 'info';
  category: 'color' | 'contrast' | 'keyboard' | 'screen-reader' | 'semantic' | 'focus' | 'aria';
  element: string;
  message: string;
  wcagLevel: 'A' | 'AA' | 'AAA';
  fix: string;
  severity: 'high' | 'medium' | 'low';
}

interface AccessibilityReport {
  score: number;
  issues: AccessibilityIssue[];
  summary: {
    errors: number;
    warnings: number;
    info: number;
    wcagAA: number;
    wcagAAA: number;
  };
  recommendations: string[];
}

class AccessibilityAuditor {
  private issues: AccessibilityIssue[] = [];

  public audit(): AccessibilityReport {
    this.issues = [];
    
    // Run all audit checks
    this.checkColorContrast();
    this.checkKeyboardNavigation();
    this.checkScreenReaderSupport();
    this.checkSemanticHTML();
    this.checkFocusManagement();
    this.checkARIALabels();
    this.checkFormLabels();
    this.checkImageAltText();
    this.checkHeadingStructure();
    this.checkLinkText();
    this.checkButtonLabels();
    this.checkTableHeaders();
    this.checkListStructure();
    this.checkLanguageAttributes();
    this.checkSkipLinks();

    // Calculate score
    const score = this.calculateScore();
    
    // Generate summary
    const summary = this.generateSummary();
    
    // Generate recommendations
    const recommendations = this.generateRecommendations();

    return {
      score,
      issues: this.issues,
      summary,
      recommendations,
    };
  }

  private checkColorContrast(): void {
    const elements = document.querySelectorAll('*');
    
    elements.forEach(element => {
      const styles = window.getComputedStyle(element);
      const color = styles.color;
      const backgroundColor = styles.backgroundColor;
      
      if (color && backgroundColor && backgroundColor !== 'rgba(0, 0, 0, 0)') {
        const contrast = this.calculateContrast(color, backgroundColor);
        
        if (contrast < 4.5) {
          this.addIssue({
            type: 'error',
            category: 'contrast',
            element: element.tagName.toLowerCase(),
            message: `Insufficient color contrast: ${contrast.toFixed(2)}:1`,
            wcagLevel: 'AA',
            fix: 'Increase color contrast to at least 4.5:1 for normal text',
            severity: 'high',
          });
        } else if (contrast < 7) {
          this.addIssue({
            type: 'warning',
            category: 'contrast',
            element: element.tagName.toLowerCase(),
            message: `Color contrast could be improved: ${contrast.toFixed(2)}:1`,
            wcagLevel: 'AAA',
            fix: 'Consider increasing color contrast to 7:1 for better accessibility',
            severity: 'medium',
          });
        }
      }
    });
  }

  private checkKeyboardNavigation(): void {
    // Check for focusable elements
    const focusableElements = document.querySelectorAll(
      'a[href], button, input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );
    
    focusableElements.forEach(element => {
      const tabIndex = element.getAttribute('tabindex');
      if (tabIndex && parseInt(tabIndex) > 0) {
        this.addIssue({
          type: 'warning',
          category: 'keyboard',
          element: element.tagName.toLowerCase(),
          message: 'Positive tabindex can disrupt keyboard navigation',
          wcagLevel: 'A',
          fix: 'Use tabindex="0" or remove tabindex attribute',
          severity: 'medium',
        });
      }
    });

    // Check for keyboard traps
    const modals = document.querySelectorAll('[role="dialog"], [role="alertdialog"]');
    modals.forEach(modal => {
      const focusableInModal = modal.querySelectorAll(
        'a[href], button, input, select, textarea, [tabindex]:not([tabindex="-1"])'
      );
      if (focusableInModal.length === 0) {
        this.addIssue({
          type: 'error',
          category: 'keyboard',
          element: 'modal',
          message: 'Modal dialog has no focusable elements',
          wcagLevel: 'A',
          fix: 'Add focusable elements or ensure proper focus management',
          severity: 'high',
        });
      }
    });
  }

  private checkScreenReaderSupport(): void {
    // Check for missing alt text
    const images = document.querySelectorAll('img');
    images.forEach(img => {
      if (!img.alt && !img.getAttribute('aria-label')) {
        this.addIssue({
          type: 'error',
          category: 'screen-reader',
          element: 'img',
          message: 'Image missing alt text',
          wcagLevel: 'A',
          fix: 'Add alt attribute or aria-label to describe the image',
          severity: 'high',
        });
      }
    });

    // Check for decorative images
    images.forEach(img => {
      if (img.alt === '' && !img.getAttribute('aria-hidden')) {
        this.addIssue({
          type: 'info',
          category: 'screen-reader',
          element: 'img',
          message: 'Decorative image should have aria-hidden="true"',
          wcagLevel: 'A',
          fix: 'Add aria-hidden="true" for decorative images',
          severity: 'low',
        });
      }
    });
  }

  private checkSemanticHTML(): void {
    // Check for proper heading hierarchy
    const headings = document.querySelectorAll('h1, h2, h3, h4, h5, h6');
    let previousLevel = 0;
    
    headings.forEach(heading => {
      const level = parseInt(heading.tagName.charAt(1));
      if (level > previousLevel + 1) {
        this.addIssue({
          type: 'warning',
          category: 'semantic',
          element: heading.tagName.toLowerCase(),
          message: `Heading level skipped: ${heading.tagName} after h${previousLevel}`,
          wcagLevel: 'A',
          fix: 'Use proper heading hierarchy (h1, h2, h3, etc.)',
          severity: 'medium',
        });
      }
      previousLevel = level;
    });

    // Check for multiple h1 elements
    const h1Elements = document.querySelectorAll('h1');
    if (h1Elements.length > 1) {
      this.addIssue({
        type: 'warning',
        category: 'semantic',
        element: 'h1',
        message: 'Multiple h1 elements found',
        wcagLevel: 'A',
        fix: 'Use only one h1 per page',
        severity: 'medium',
      });
    }
  }

  private checkFocusManagement(): void {
    // Check for visible focus indicators
    const focusableElements = document.querySelectorAll(
      'a[href], button, input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );
    
    focusableElements.forEach(element => {
      const styles = window.getComputedStyle(element, ':focus');
      const outline = styles.outline;
      const boxShadow = styles.boxShadow;
      
      if (outline === 'none' && !boxShadow) {
        this.addIssue({
          type: 'error',
          category: 'focus',
          element: element.tagName.toLowerCase(),
          message: 'No visible focus indicator',
          wcagLevel: 'AA',
          fix: 'Add visible focus indicator (outline, box-shadow, etc.)',
          severity: 'high',
        });
      }
    });
  }

  private checkARIALabels(): void {
    // Check for missing aria-labels on interactive elements
    const interactiveElements = document.querySelectorAll(
      'button, input, select, textarea, [role="button"], [role="link"]'
    );
    
    interactiveElements.forEach(element => {
      const hasLabel = element.getAttribute('aria-label') || 
                      element.getAttribute('aria-labelledby') ||
                      element.textContent?.trim() ||
                      element.querySelector('img[alt]');
      
      if (!hasLabel) {
        this.addIssue({
          type: 'error',
          category: 'aria',
          element: element.tagName.toLowerCase(),
          message: 'Interactive element missing accessible name',
          wcagLevel: 'A',
          fix: 'Add aria-label, aria-labelledby, or visible text',
          severity: 'high',
        });
      }
    });
  }

  private checkFormLabels(): void {
    const inputs = document.querySelectorAll('input, select, textarea');
    
    inputs.forEach(input => {
      const id = input.getAttribute('id');
      const ariaLabel = input.getAttribute('aria-label');
      const ariaLabelledBy = input.getAttribute('aria-labelledby');
      
      if (!ariaLabel && !ariaLabelledBy) {
        if (id) {
          const label = document.querySelector(`label[for="${id}"]`);
          if (!label) {
            this.addIssue({
              type: 'error',
              category: 'semantic',
              element: 'input',
              message: 'Form input missing label',
              wcagLevel: 'A',
              fix: 'Add label element with for attribute or aria-label',
              severity: 'high',
            });
          }
        } else {
          this.addIssue({
            type: 'error',
            category: 'semantic',
            element: 'input',
            message: 'Form input missing id and accessible name',
            wcagLevel: 'A',
            fix: 'Add id and label or aria-label',
            severity: 'high',
          });
        }
      }
    });
  }

  private checkImageAltText(): void {
    const images = document.querySelectorAll('img');
    
    images.forEach(img => {
      const alt = img.getAttribute('alt');
      const src = img.getAttribute('src');
      
      if (alt === null) {
        this.addIssue({
          type: 'error',
          category: 'screen-reader',
          element: 'img',
          message: 'Image missing alt attribute',
          wcagLevel: 'A',
          fix: 'Add alt attribute to all images',
          severity: 'high',
        });
      } else if (alt === '' && !img.getAttribute('aria-hidden')) {
        // Check if image is decorative
        const isDecorative = this.isDecorativeImage(img);
        if (!isDecorative) {
          this.addIssue({
            type: 'warning',
            category: 'screen-reader',
            element: 'img',
            message: 'Image with empty alt may need description',
            wcagLevel: 'A',
            fix: 'Add descriptive alt text or aria-hidden="true"',
            severity: 'medium',
          });
        }
      }
    });
  }

  private checkHeadingStructure(): void {
    const headings = document.querySelectorAll('h1, h2, h3, h4, h5, h6');
    const headingLevels = Array.from(headings).map(h => parseInt(h.tagName.charAt(1)));
    
    if (headingLevels.length === 0) {
      this.addIssue({
        type: 'warning',
        category: 'semantic',
        element: 'page',
        message: 'No heading elements found',
        wcagLevel: 'A',
        fix: 'Add heading elements to structure content',
        severity: 'medium',
      });
    }
  }

  private checkLinkText(): void {
    const links = document.querySelectorAll('a[href]');
    
    links.forEach(link => {
      const text = link.textContent?.trim();
      const ariaLabel = link.getAttribute('aria-label');
      
      if (!text && !ariaLabel) {
        this.addIssue({
          type: 'error',
          category: 'screen-reader',
          element: 'a',
          message: 'Link missing accessible text',
          wcagLevel: 'A',
          fix: 'Add visible text or aria-label to link',
          severity: 'high',
        });
      } else if (text && (text === 'click here' || text === 'read more' || text === 'here')) {
        this.addIssue({
          type: 'warning',
          category: 'screen-reader',
          element: 'a',
          message: 'Link text is not descriptive',
          wcagLevel: 'A',
          fix: 'Use descriptive link text that explains the destination',
          severity: 'medium',
        });
      }
    });
  }

  private checkButtonLabels(): void {
    const buttons = document.querySelectorAll('button, [role="button"]');
    
    buttons.forEach(button => {
      const text = button.textContent?.trim();
      const ariaLabel = button.getAttribute('aria-label');
      const ariaLabelledBy = button.getAttribute('aria-labelledby');
      
      if (!text && !ariaLabel && !ariaLabelledBy) {
        this.addIssue({
          type: 'error',
          category: 'aria',
          element: 'button',
          message: 'Button missing accessible name',
          wcagLevel: 'A',
          fix: 'Add text content or aria-label to button',
          severity: 'high',
        });
      }
    });
  }

  private checkTableHeaders(): void {
    const tables = document.querySelectorAll('table');
    
    tables.forEach(table => {
      const headers = table.querySelectorAll('th');
      if (headers.length === 0) {
        this.addIssue({
          type: 'error',
          category: 'semantic',
          element: 'table',
          message: 'Table missing header cells',
          wcagLevel: 'A',
          fix: 'Add th elements for table headers',
          severity: 'high',
        });
      }
    });
  }

  private checkListStructure(): void {
    const lists = document.querySelectorAll('ul, ol');
    
    lists.forEach(list => {
      const items = list.querySelectorAll('li');
      if (items.length === 0) {
        this.addIssue({
          type: 'warning',
          category: 'semantic',
          element: list.tagName.toLowerCase(),
          message: 'Empty list element',
          wcagLevel: 'A',
          fix: 'Add list items or remove empty list',
          severity: 'low',
        });
      }
    });
  }

  private checkLanguageAttributes(): void {
    const html = document.documentElement;
    const lang = html.getAttribute('lang');
    
    if (!lang) {
      this.addIssue({
        type: 'error',
        category: 'semantic',
        element: 'html',
        message: 'Missing language attribute',
        wcagLevel: 'A',
        fix: 'Add lang attribute to html element',
        severity: 'high',
      });
    }
  }

  private checkSkipLinks(): void {
    const skipLinks = document.querySelectorAll('a[href="#main"], a[href="#content"]');
    
    if (skipLinks.length === 0) {
      this.addIssue({
        type: 'info',
        category: 'keyboard',
        element: 'page',
        message: 'No skip links found',
        wcagLevel: 'A',
        fix: 'Consider adding skip links for keyboard navigation',
        severity: 'low',
      });
    }
  }

  private calculateContrast(color1: string, color2: string): number {
    // Simplified contrast calculation
    // In production, use a proper color contrast library
    return 4.5; // Mock value
  }

  private isDecorativeImage(img: HTMLImageElement): boolean {
    // Check if image is decorative based on context
    const parent = img.parentElement;
    if (parent?.classList.contains('decorative')) return true;
    if (img.getAttribute('role') === 'presentation') return true;
    return false;
  }

  private addIssue(issue: AccessibilityIssue): void {
    this.issues.push(issue);
  }

  private calculateScore(): number {
    const totalIssues = this.issues.length;
    const errorCount = this.issues.filter(i => i.type === 'error').length;
    const warningCount = this.issues.filter(i => i.type === 'warning').length;
    
    if (totalIssues === 0) return 100;
    
    const errorPenalty = errorCount * 10;
    const warningPenalty = warningCount * 5;
    
    return Math.max(0, 100 - errorPenalty - warningPenalty);
  }

  private generateSummary() {
    return {
      errors: this.issues.filter(i => i.type === 'error').length,
      warnings: this.issues.filter(i => i.type === 'warning').length,
      info: this.issues.filter(i => i.type === 'info').length,
      wcagAA: this.issues.filter(i => i.wcagLevel === 'AA').length,
      wcagAAA: this.issues.filter(i => i.wcagLevel === 'AAA').length,
    };
  }

  private generateRecommendations(): string[] {
    const recommendations: string[] = [];
    
    const errorCount = this.issues.filter(i => i.type === 'error').length;
    if (errorCount > 0) {
      recommendations.push(`Fix ${errorCount} accessibility errors for WCAG AA compliance`);
    }
    
    const warningCount = this.issues.filter(i => i.type === 'warning').length;
    if (warningCount > 0) {
      recommendations.push(`Address ${warningCount} accessibility warnings for better user experience`);
    }
    
    const contrastIssues = this.issues.filter(i => i.category === 'contrast').length;
    if (contrastIssues > 0) {
      recommendations.push('Improve color contrast for better readability');
    }
    
    const keyboardIssues = this.issues.filter(i => i.category === 'keyboard').length;
    if (keyboardIssues > 0) {
      recommendations.push('Enhance keyboard navigation support');
    }
    
    const screenReaderIssues = this.issues.filter(i => i.category === 'screen-reader').length;
    if (screenReaderIssues > 0) {
      recommendations.push('Improve screen reader compatibility');
    }
    
    return recommendations;
  }
}

// Create global instance
export const accessibilityAuditor = new AccessibilityAuditor();

// Export convenience functions
export const runAccessibilityAudit = () => accessibilityAuditor.audit();
export const checkAccessibility = () => accessibilityAuditor.audit();
