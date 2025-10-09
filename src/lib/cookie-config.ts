// Advanced Cookie Configuration for Premium Website
export interface CookieCategory {
  id: string;
  name: string;
  description: string;
  required: boolean;
  enabled: boolean;
  cookies: string[];
  purpose: string;
  retention: string;
}

export interface CookiePreferences {
  necessary: boolean;
  analytics: boolean;
  marketing: boolean;
  personalization: boolean;
  functional: boolean;
}

export const COOKIE_CATEGORIES: CookieCategory[] = [
  {
    id: 'necessary',
    name: 'Notwendige Cookies',
    description: 'Diese Cookies sind für die Grundfunktionen der Website erforderlich und können nicht deaktiviert werden.',
    required: true,
    enabled: true,
    cookies: ['fp-consent', 'session-id', 'csrf-token'],
    purpose: 'Sicherheit, Grundfunktionalität, Session-Management',
    retention: 'Session oder 1 Jahr'
  },
  {
    id: 'analytics',
    name: 'Analyse-Cookies',
    description: 'Helfen uns zu verstehen, wie Besucher mit der Website interagieren, indem sie Informationen anonym sammeln und melden.',
    required: false,
    enabled: false,
    cookies: ['_ga', '_ga_*', '_gid', '_gat', '_gcl_*'],
    purpose: 'Website-Analyse, Performance-Messung, Nutzerverhalten',
    retention: '2 Jahre'
  },
  {
    id: 'marketing',
    name: 'Marketing-Cookies',
    description: 'Werden verwendet, um Besuchern relevante Anzeigen und Marketingkampagnen bereitzustellen.',
    required: false,
    enabled: false,
    cookies: ['_fbp', '_gcl_au', 'IDE', 'test_cookie'],
    purpose: 'Anzeigen-Targeting, Conversion-Tracking, Remarketing',
    retention: '1 Jahr'
  },
  {
    id: 'personalization',
    name: 'Personalisierungs-Cookies',
    description: 'Ermöglichen es der Website, sich an Ihre Präferenzen zu erinnern und personalisierte Inhalte bereitzustellen.',
    required: false,
    enabled: false,
    cookies: ['user-preferences', 'language', 'theme', 'location'],
    purpose: 'Personalisierung, Benutzerpräferenzen, Lokalisierung',
    retention: '1 Jahr'
  },
  {
    id: 'functional',
    name: 'Funktionale Cookies',
    description: 'Ermöglichen erweiterte Funktionalitäten wie Chat-Widgets, Karten und Video-Player.',
    required: false,
    enabled: false,
    cookies: ['chat-session', 'video-preferences', 'map-settings'],
    purpose: 'Erweiterte Funktionalitäten, Drittanbieter-Services',
    retention: '6 Monate'
  }
];

export const DEFAULT_PREFERENCES: CookiePreferences = {
  necessary: true,
  analytics: false,
  marketing: false,
  personalization: false,
  functional: false
};

export const CONSENT_EXPIRY_DAYS = 365;
export const CONSENT_VERSION = '2.0';

export const getCookiePurpose = (cookieName: string): string => {
  const category = COOKIE_CATEGORIES.find(cat => 
    cat.cookies.some(cookie => 
      cookieName.includes(cookie.replace('*', ''))
    )
  );
  return category?.purpose || 'Unbekannt';
};

export const getCookieRetention = (cookieName: string): string => {
  const category = COOKIE_CATEGORIES.find(cat => 
    cat.cookies.some(cookie => 
      cookieName.includes(cookie.replace('*', ''))
    )
  );
  return category?.retention || 'Unbekannt';
};
