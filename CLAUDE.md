# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Founding Paws is a premium dog supplement e-commerce website built with Next.js 15, featuring a comprehensive content marketing system, newsletter functionality, and conversion-optimized product pages. The site is German-language focused and mobile-first, with iOS-specific optimizations.

## Development Commands

### Local Development
```bash
npm run dev          # Start dev server on localhost:3000
npm run build        # Production build
npm start            # Start production server
npm run lint         # Run ESLint
```

### Testing Newsletter System
```bash
# Send test welcome email
curl -X POST http://localhost:3000/api/email/welcome \
  -H "Content-Type: application/json" \
  -d '{"email": "test@example.com", "name": "Test User"}'

# Test newsletter subscription
curl -X POST http://localhost:3000/api/newsletter-simple \
  -H "Content-Type: application/json" \
  -d '{"email": "test@example.com", "source": "website"}'
```

## Architecture

### Next.js App Router Structure

- **App Router**: Uses Next.js 15 App Router with file-based routing
- **Client/Server Components**: Most components are client-side (`"use client"`) for interactivity
- **API Routes**: Located in `src/app/api/` following Next.js 15 route handler conventions

### Key Directories

```
src/
├── app/                    # Next.js 15 App Router pages and layouts
│   ├── api/               # API route handlers (newsletter, email, waitlist, errors)
│   ├── produkte/          # Product pages with dynamic [slug] routes
│   ├── ratgeber/          # Blog/guide content pages
│   └── layout.tsx         # Root layout with Header, Footer, providers
├── components/            # Reusable React components
│   ├── icons/            # Custom SVG icon components
│   ├── Header.tsx        # Complex header with mobile menu & iOS optimizations
│   ├── Footer.tsx        # Footer with newsletter signup
│   └── [feature].tsx     # Feature-specific components
├── lib/                   # Utility libraries and services
│   ├── email-service.ts  # Resend email integration
│   ├── supabase.ts       # Supabase client configuration
│   ├── analytics.ts      # Custom analytics tracking
│   └── [utility].ts      # Various utility modules
├── styles/                # CSS files and theme system
│   ├── theme.css         # CSS custom properties for design system
│   ├── theme.ts          # TypeScript theme token exports
│   └── ios-optimizations.css  # iOS-specific fixes
└── hooks/                 # Custom React hooks
```

### Design System

The project uses a centralized theme system with CSS custom properties:

- **Colors**: Primary (green), Secondary (brown/terracotta), Accent (gold)
- **Fonts**:
  - Display: Fraunces (optical serif)
  - Body: DM Sans
  - Rounded: Fredoka
- **Theme Tokens**: All defined in `src/styles/theme.css` and exported via `src/styles/theme.ts`
- **Path Alias**: Use `@/` for `src/` imports (configured in tsconfig.json)

### Mobile Optimization

The site is heavily optimized for iOS devices:

- **iOS Safe Areas**: Uses `env(safe-area-inset-*)` throughout
- **Touch Targets**: Minimum 44px × 44px hit areas
- **Performance**: `mobilePerformanceManager` in `src/lib/mobile-performance.ts`
- **Tap Highlights**: `-webkit-tap-highlight-color: transparent` on interactive elements
- **Scrolling**: `-webkit-overflow-scrolling: touch` for smooth scrolling

### Email System (Resend)

Email functionality uses Resend with templates for:
- Welcome emails (automatic on newsletter signup)
- Newsletter campaigns
- Product launches
- Abandoned cart recovery

**Email Service**: `src/lib/email-service.ts` (EmailService class)
**Templates**: Inline HTML in `src/lib/email-templates.tsx`
**API Endpoints**:
- `/api/newsletter-simple` - Newsletter subscription
- `/api/email/welcome` - Welcome email trigger
- `/api/email/newsletter` - Newsletter sending

### Database (Supabase)

- **Client**: `src/lib/supabase.ts` exports both public and admin clients
- **Table**: `newsletter_subscribers` (schema in `supabase-setup.sql`)
- **RLS Policies**: Anonymous insert, authenticated read, service_role full access
- **Note**: Current implementation uses in-memory storage in `src/app/api/newsletter-simple/route.ts` as temporary solution

### Component Patterns

1. **Layout Components**: Root layout in `src/app/layout.tsx` wraps all pages with:
   - ErrorBoundary
   - AccessibilityProvider
   - AnalyticsProvider
   - Header/Footer
   - CookieConsent

2. **Page Composition**: Pages (e.g., `src/app/page.tsx`) compose section components:
   - Hero
   - TrustStrip
   - ProductTeasers
   - FAQ
   - CTA

3. **Icons**: Custom icon components in `src/components/icons/` follow naming convention `Icon[Name].tsx`

## Environment Variables

Required environment variables (set in `.env.local` or Vercel):

```bash
# Supabase
NEXT_PUBLIC_SUPABASE_URL=https://rzpbfipopehqkhyrhpgy.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=<anon-key>
SUPABASE_SERVICE_ROLE_KEY=<service-role-key>

# Resend Email
RESEND_API_KEY=<resend-api-key>

# Site Configuration
NEXT_PUBLIC_SITE_URL=https://www.foundingpaws.de
```

**Security Note**: Current implementation has credentials hardcoded in `src/lib/supabase.ts`. These should be moved to environment variables before production deployment.

## Deployment

- **Platform**: Vercel
- **Configuration**: `vercel.json` contains build settings, headers, and redirects
- **API Function Timeout**: 30 seconds for API routes
- **Framework**: Next.js with automatic detection

### Deployment Checklist

Before deploying (see `DEPLOYMENT.md` for full details):
1. Set all environment variables in Vercel dashboard
2. Run SQL script `supabase-setup.sql` in Supabase
3. Verify Resend domain at `foundingpaws.de`
4. Update `FROM_EMAIL` in `src/lib/email-service.ts` to use verified domain
5. Test newsletter signup and email sending

## Important Implementation Details

### Hydration and SSR

Recent fixes address hydration mismatches (commits e402115, 1ae4c24):
- Ensure client-only state doesn't render on server
- Use `useEffect` for browser-only logic
- Avoid `localStorage` access during SSR

### Header Component

`src/components/Header.tsx` is complex with:
- Dynamic logo sizing based on scroll position
- Mobile menu with iOS touch optimizations
- Dropdown navigation for "Gut für" categories
- Performance optimizations for mobile devices

### Analytics

Custom analytics system in `src/lib/analytics.ts`:
- Tracks page views, events, and user behavior
- `AnalyticsProvider` wraps app in root layout
- Performance monitoring via `src/lib/performance-monitor.ts`

### Error Handling

- **ErrorBoundary**: Catches React errors globally
- **Error Monitoring**: `src/lib/error-monitoring.ts` for tracking
- **API Error Endpoint**: `/api/errors/route.ts` for client-side error reporting

## Product Structure

Products are defined in multiple places:
1. **Static Pages**: Individual product pages in `src/app/produkte/[product-name]/page.tsx`
2. **Dynamic Route**: `src/app/produkte/[slug]/page.tsx` for dynamic product rendering
3. **Category Pages**: `src/app/[category]/page.tsx` for health categories (e.g., `/stress-angst`, `/gelenke-mobilitaet`)

## Content Pages

- **Blog/Guides**: `src/app/ratgeber/` contains health guides about specific conditions
- **Legal Pages**: `src/app/impressum/`, `src/app/datenschutz/`, `src/app/agb/`, `src/app/widerruf/`
- **Brand Pages**: `src/app/marke/`, `src/app/team/`

## Common Tasks

### Adding a New Product
1. Create page in `src/app/produkte/[product-slug]/page.tsx`
2. Add product data to relevant category pages
3. Update `ProductTeasers.tsx` if featuring on homepage
4. Add product images to `/public/` directory

### Adding a New Blog Post
1. Create page in `src/app/ratgeber/[post-slug]/page.tsx`
2. Follow existing structure with Hero, content sections, and CTA
3. Update `src/app/ratgeber/page.tsx` to list new post
4. Update sitemap if needed (`src/app/sitemap.ts`)

### Updating Styles
1. Prefer editing CSS custom properties in `src/styles/theme.css`
2. Use theme tokens from `src/styles/theme.ts` in components
3. Add mobile-specific styles to `src/styles/ios-optimizations.css`

### Email Template Changes
1. Edit templates in `src/lib/email-templates.tsx`
2. Test with `/admin/email-dashboard` page
3. Use brand colors: Primary (#2d5a27), Accent (#b46a34)

## Git Workflow

The repository is connected to Vercel for automatic deployments:
- **Main Branch**: Deploys to production automatically
- **Commit Style**: Recent commits show descriptive messages with context
- **Force Push**: Avoid force pushing to main branch

## SEO and Metadata

- **Metadata**: Defined in page-level `metadata` exports (Next.js 15 convention)
- **Sitemap**: Generated dynamically in `src/app/sitemap.ts`
- **Robots.txt**: Generated in `src/app/robots.ts`
- **Locale**: German (de_DE) is primary language

## Performance Considerations

- **Image Optimization**: Use Next.js `<Image>` component with WebP/AVIF formats
- **Bundle Optimization**: `experimental.optimizePackageImports` enabled for components
- **Mobile Performance**: `mobilePerformanceManager` detects device capabilities
- **Loading States**: `LoadingSpinner`, `LoadingButton`, `SkeletonLoader` components available
