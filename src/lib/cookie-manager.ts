// Advanced Cookie Management for Premium Website
import { COOKIE_CATEGORIES, DEFAULT_PREFERENCES, CONSENT_EXPIRY_DAYS, CONSENT_VERSION, CookiePreferences } from './cookie-config';

export type { CookiePreferences };

export interface ConsentData {
  version: string;
  timestamp: number;
  preferences: CookiePreferences;
  ipAddress?: string;
  userAgent?: string;
}

export class CookieManager {
  private static instance: CookieManager;
  private consentData: ConsentData | null = null;

  private constructor() {
    this.loadConsentData();
  }

  public static getInstance(): CookieManager {
    if (!CookieManager.instance) {
      CookieManager.instance = new CookieManager();
    }
    return CookieManager.instance;
  }

  private loadConsentData(): void {
    if (typeof window === 'undefined') return;

    try {
      const stored = localStorage.getItem('fp-consent');
      if (stored) {
        this.consentData = JSON.parse(stored);
        
        // Check if consent is expired
        if (this.isConsentExpired()) {
          this.clearConsent();
        }
      }
    } catch (error) {
      console.warn('Failed to load consent data:', error);
      this.clearConsent();
    }
  }

  private isConsentExpired(): boolean {
    if (!this.consentData) return true;
    
    const expiryTime = this.consentData.timestamp + (CONSENT_EXPIRY_DAYS * 24 * 60 * 60 * 1000);
    return Date.now() > expiryTime;
  }

  public hasConsent(): boolean {
    return this.consentData !== null && !this.isConsentExpired();
  }

  public getConsentData(): ConsentData | null {
    return this.consentData;
  }

  public getPreferences(): CookiePreferences {
    return this.consentData?.preferences || DEFAULT_PREFERENCES;
  }

  public saveConsent(preferences: CookiePreferences, additionalData?: Partial<ConsentData>): void {
    if (typeof window === 'undefined') return;

    this.consentData = {
      version: CONSENT_VERSION,
      timestamp: Date.now(),
      preferences,
      ipAddress: additionalData?.ipAddress,
      userAgent: additionalData?.userAgent || navigator.userAgent
    };

    localStorage.setItem('fp-consent', JSON.stringify(this.consentData));
    
    // Trigger consent update event
    this.triggerConsentUpdate();
  }

  public updatePreferences(preferences: Partial<CookiePreferences>): void {
    if (!this.consentData) return;

    this.consentData.preferences = {
      ...this.consentData.preferences,
      ...preferences
    };

    localStorage.setItem('fp-consent', JSON.stringify(this.consentData));
    this.triggerConsentUpdate();
  }

  public clearConsent(): void {
    if (typeof window === 'undefined') return;

    this.consentData = null;
    localStorage.removeItem('fp-consent');
    this.triggerConsentUpdate();
  }

  public isCategoryEnabled(categoryId: string): boolean {
    const preferences = this.getPreferences();
    return (preferences as any)[categoryId] || false;
  }

  public getEnabledCategories(): string[] {
    const preferences = this.getPreferences();
    return Object.entries(preferences)
      .filter(([_, enabled]) => enabled)
      .map(([category, _]) => category);
  }

  public getCookieDetails(): Array<{name: string, purpose: string, retention: string, category: string}> {
    const enabledCategories = this.getEnabledCategories();
    const details: Array<{name: string, purpose: string, retention: string, category: string}> = [];

    COOKIE_CATEGORIES.forEach(category => {
      if (enabledCategories.includes(category.id)) {
        category.cookies.forEach(cookie => {
          details.push({
            name: cookie,
            purpose: category.purpose,
            retention: category.retention,
            category: category.name
          });
        });
      }
    });

    return details;
  }

  public exportConsentData(): string {
    return JSON.stringify(this.consentData, null, 2);
  }

  public importConsentData(data: string): boolean {
    try {
      const parsed = JSON.parse(data);
      if (parsed.version && parsed.timestamp && parsed.preferences) {
        this.consentData = parsed;
        localStorage.setItem('fp-consent', data);
        this.triggerConsentUpdate();
        return true;
      }
    } catch (error) {
      console.error('Failed to import consent data:', error);
    }
    return false;
  }

  private triggerConsentUpdate(): void {
    if (typeof window !== 'undefined') {
      window.dispatchEvent(new CustomEvent('consent-updated', {
        detail: this.consentData
      }));
    }
  }

  public getConsentSummary(): {
    hasConsent: boolean;
    categories: Array<{id: string, name: string, enabled: boolean}>;
    expiryDate?: Date;
  } {
    const preferences = this.getPreferences();
    
    return {
      hasConsent: this.hasConsent(),
      categories: COOKIE_CATEGORIES.map(cat => ({
        id: cat.id,
        name: cat.name,
        enabled: (preferences as any)[cat.id] || false
      })),
      expiryDate: this.consentData ? new Date(this.consentData.timestamp + (CONSENT_EXPIRY_DAYS * 24 * 60 * 60 * 1000)) : undefined
    };
  }
}

export const cookieManager = CookieManager.getInstance();
