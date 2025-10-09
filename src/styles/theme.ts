/**
 * Founding Paws Theme System
 * 
 * TypeScript definitions and utilities for the centralized theme system.
 * This file provides type-safe access to design tokens and theme utilities.
 */

// ========================================
// COLOR TOKENS
// ========================================

export const colors = {
  // Primary Brand Colors
  primary: 'var(--color-primary)',
  primaryLight: 'var(--color-primary-light)',
  primaryDark: 'var(--color-primary-dark)',
  
  // Secondary Brand Colors
  secondary: 'var(--color-secondary)',
  secondaryLight: 'var(--color-secondary-light)',
  secondaryDark: 'var(--color-secondary-dark)',
  
  // Accent Colors
  accent: 'var(--color-accent)',
  accentLight: 'var(--color-accent-light)',
  accentDark: 'var(--color-accent-dark)',
  
  // Neutral Colors
  charcoal: 'var(--color-charcoal)',
  taupe: 'var(--color-taupe)',
  taupeLight: 'var(--color-taupe-light)',
  taupeDark: 'var(--color-taupe-dark)',
  
  // Semantic Colors
  background: 'var(--color-background)',
  backgroundAlt: 'var(--color-background-alt)',
  text: 'var(--color-text)',
  textLight: 'var(--color-text-light)',
  textMuted: 'var(--color-text-muted)',
  
  // Status Colors
  success: 'var(--color-success)',
  warning: 'var(--color-warning)',
  error: 'var(--color-error)',
  info: 'var(--color-info)',
} as const;

// ========================================
// TYPOGRAPHY TOKENS
// ========================================

export const typography = {
  // Font Families
  fontHeading: 'var(--font-heading)',
  fontBody: 'var(--font-body)',
  fontDisplay: 'var(--font-display)',
  fontSans: 'var(--font-sans)',
  fontRound: 'var(--font-round)',
  
  // Font Weights
  fontWeight: {
    light: 'var(--font-weight-light)',
    normal: 'var(--font-weight-normal)',
    medium: 'var(--font-weight-medium)',
    semibold: 'var(--font-weight-semibold)',
    bold: 'var(--font-weight-bold)',
    extrabold: 'var(--font-weight-extrabold)',
  },
  
  // Font Sizes
  fontSize: {
    xs: 'var(--font-size-xs)',
    sm: 'var(--font-size-sm)',
    base: 'var(--font-size-base)',
    lg: 'var(--font-size-lg)',
    xl: 'var(--font-size-xl)',
    '2xl': 'var(--font-size-2xl)',
    '3xl': 'var(--font-size-3xl)',
    '4xl': 'var(--font-size-4xl)',
    '5xl': 'var(--font-size-5xl)',
  },
  
  // Line Heights
  lineHeight: {
    tight: 'var(--line-height-tight)',
    snug: 'var(--line-height-snug)',
    normal: 'var(--line-height-normal)',
    relaxed: 'var(--line-height-relaxed)',
    loose: 'var(--line-height-loose)',
  },
  
  // Letter Spacing
  letterSpacing: {
    tight: 'var(--letter-spacing-tight)',
    normal: 'var(--letter-spacing-normal)',
    wide: 'var(--letter-spacing-wide)',
    wider: 'var(--letter-spacing-wider)',
    widest: 'var(--letter-spacing-widest)',
  },
} as const;

// ========================================
// SPACING TOKENS
// ========================================

export const spacing = {
  0: 'var(--space-0)',
  1: 'var(--space-1)',
  2: 'var(--space-2)',
  3: 'var(--space-3)',
  4: 'var(--space-4)',
  5: 'var(--space-5)',
  6: 'var(--space-6)',
  8: 'var(--space-8)',
  10: 'var(--space-10)',
  12: 'var(--space-12)',
  16: 'var(--space-16)',
  20: 'var(--space-20)',
  24: 'var(--space-24)',
  32: 'var(--space-32)',
  40: 'var(--space-40)',
  48: 'var(--space-48)',
  56: 'var(--space-56)',
  64: 'var(--space-64)',
  
  // Fluid spacing
  section: 'var(--space-section)',
  sectionSm: 'var(--space-section-sm)',
  sectionLg: 'var(--space-section-lg)',
} as const;

// ========================================
// BORDER RADIUS TOKENS
// ========================================

export const borderRadius = {
  none: 'var(--radius-none)',
  sm: 'var(--radius-sm)',
  base: 'var(--radius-base)',
  md: 'var(--radius-md)',
  lg: 'var(--radius-lg)',
  xl: 'var(--radius-xl)',
  '2xl': 'var(--radius-2xl)',
  '3xl': 'var(--radius-3xl)',
  full: 'var(--radius-full)',
  
  // Semantic radius
  card: 'var(--radius-card)',
  button: 'var(--radius-button)',
  input: 'var(--radius-input)',
  badge: 'var(--radius-badge)',
} as const;

// ========================================
// SHADOW TOKENS
// ========================================

export const shadows = {
  xs: 'var(--shadow-xs)',
  sm: 'var(--shadow-sm)',
  base: 'var(--shadow-base)',
  md: 'var(--shadow-md)',
  lg: 'var(--shadow-lg)',
  xl: 'var(--shadow-xl)',
  '2xl': 'var(--shadow-2xl)',
  inner: 'var(--shadow-inner)',
  
  // Brand-specific shadows
  primary: 'var(--shadow-primary)',
  accent: 'var(--shadow-accent)',
  card: 'var(--shadow-card)',
  floating: 'var(--shadow-floating)',
} as const;

// ========================================
// Z-INDEX TOKENS
// ========================================

export const zIndex = {
  hide: 'var(--z-index-hide)',
  auto: 'var(--z-index-auto)',
  base: 'var(--z-index-base)',
  docked: 'var(--z-index-docked)',
  dropdown: 'var(--z-index-dropdown)',
  sticky: 'var(--z-index-sticky)',
  banner: 'var(--z-index-banner)',
  overlay: 'var(--z-index-overlay)',
  modal: 'var(--z-index-modal)',
  popover: 'var(--z-index-popover)',
  skipLink: 'var(--z-index-skipLink)',
  toast: 'var(--z-index-toast)',
  tooltip: 'var(--z-index-tooltip)',
} as const;

// ========================================
// TRANSITION TOKENS
// ========================================

export const transitions = {
  // Duration
  duration: {
    75: 'var(--duration-75)',
    100: 'var(--duration-100)',
    150: 'var(--duration-150)',
    200: 'var(--duration-200)',
    300: 'var(--duration-300)',
    500: 'var(--duration-500)',
    700: 'var(--duration-700)',
    1000: 'var(--duration-1000)',
  },
  
  // Easing
  easing: {
    linear: 'var(--ease-linear)',
    in: 'var(--ease-in)',
    out: 'var(--ease-out)',
    inOut: 'var(--ease-in-out)',
    bounce: 'var(--ease-bounce)',
    spring: 'var(--ease-spring)',
  },
  
  // Common transitions
  fast: 'var(--transition-fast)',
  base: 'var(--transition-base)',
  slow: 'var(--transition-slow)',
  bounce: 'var(--transition-bounce)',
  spring: 'var(--transition-spring)',
} as const;

// ========================================
// BREAKPOINT TOKENS
// ========================================

export const breakpoints = {
  xs: 'var(--breakpoint-xs)',
  sm: 'var(--breakpoint-sm)',
  md: 'var(--breakpoint-md)',
  lg: 'var(--breakpoint-lg)',
  xl: 'var(--breakpoint-xl)',
  '2xl': 'var(--breakpoint-2xl)',
} as const;

// ========================================
// CONTAINER TOKENS
// ========================================

export const containers = {
  xs: 'var(--container-xs)',
  sm: 'var(--container-sm)',
  md: 'var(--container-md)',
  lg: 'var(--container-lg)',
  xl: 'var(--container-xl)',
  '2xl': 'var(--container-2xl)',
  full: 'var(--container-full)',
} as const;

// ========================================
// COMPONENT TOKENS
// ========================================

export const components = {
  // Button tokens
  button: {
    height: {
      sm: 'var(--button-height-sm)',
      base: 'var(--button-height-base)',
      lg: 'var(--button-height-lg)',
      xl: 'var(--button-height-xl)',
    },
    padding: {
      sm: 'var(--button-padding-sm)',
      base: 'var(--button-padding-base)',
      lg: 'var(--button-padding-lg)',
      xl: 'var(--button-padding-xl)',
    },
  },
  
  // Input tokens
  input: {
    height: {
      sm: 'var(--input-height-sm)',
      base: 'var(--input-height-base)',
      lg: 'var(--input-height-lg)',
      xl: 'var(--input-height-xl)',
    },
    padding: {
      sm: 'var(--input-padding-sm)',
      base: 'var(--input-padding-base)',
      lg: 'var(--input-padding-lg)',
      xl: 'var(--input-padding-xl)',
    },
  },
  
  // Card tokens
  card: {
    padding: {
      sm: 'var(--card-padding-sm)',
      base: 'var(--card-padding-base)',
      lg: 'var(--card-padding-lg)',
      xl: 'var(--card-padding-xl)',
    },
  },
} as const;

// ========================================
// THEME OBJECT
// ========================================

export const theme = {
  colors,
  typography,
  spacing,
  borderRadius,
  shadows,
  zIndex,
  transitions,
  breakpoints,
  containers,
  components,
} as const;

// ========================================
// TYPE DEFINITIONS
// ========================================

export type ColorToken = keyof typeof colors;
export type TypographyToken = keyof typeof typography;
export type SpacingToken = keyof typeof spacing;
export type BorderRadiusToken = keyof typeof borderRadius;
export type ShadowToken = keyof typeof shadows;
export type ZIndexToken = keyof typeof zIndex;
export type TransitionToken = keyof typeof transitions;
export type BreakpointToken = keyof typeof breakpoints;
export type ContainerToken = keyof typeof containers;

export type Theme = typeof theme;

// ========================================
// UTILITY FUNCTIONS
// ========================================

/**
 * Get a CSS custom property value
 */
export function getCSSVar(property: string): string {
  if (typeof window === 'undefined') return '';
  return getComputedStyle(document.documentElement).getPropertyValue(property);
}

/**
 * Set a CSS custom property value
 */
export function setCSSVar(property: string, value: string): void {
  if (typeof window === 'undefined') return;
  document.documentElement.style.setProperty(property, value);
}

/**
 * Get a theme token value
 */
export function getThemeToken(category: keyof Theme, token: string): string {
  const categoryObj = theme[category] as Record<string, string>;
  return categoryObj[token] || '';
}

/**
 * Create a responsive value using clamp()
 */
export function createFluidValue(min: number, max: number, minVw = 20, maxVw = 80): string {
  const minRem = min / 16;
  const maxRem = max / 16;
  const minVwRem = minVw / 16;
  const maxVwRem = maxVw / 16;
  
  return `clamp(${minRem}rem, ${minVwRem}rem + ${(maxRem - minRem) * 100 / (maxVw - minVw)}vw, ${maxRem}rem)`;
}

/**
 * Create a color mix for better color manipulation
 */
export function createColorMix(color: string, percentage: number, mixColor = 'white'): string {
  return `color-mix(in oklab, ${color} ${percentage}%, ${mixColor})`;
}

// ========================================
// DEFAULT EXPORT
// ========================================

export default theme;
