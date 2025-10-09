# 🚀 Vercel Deployment Guide

## Environment Variables Required

Set these in your Vercel dashboard under Settings > Environment Variables:

### Supabase Configuration
```
NEXT_PUBLIC_SUPABASE_URL=https://rzpbfipopehqkhyrhpgy.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJ6cGJmaXBvcGVocWtoeXJocGd5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTk1OTA0NTUsImV4cCI6MjA3NTE2NjQ1NX0.mjIrfCxE6xFRbYTvQ3ydcOqIyptR4agNdBWPPQ_kS9c
SUPABASE_SERVICE_ROLE_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJ6cGJmaXBvcGVocWtoeXJocGd5Iiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc1OTU5MDQ1NSwiZXhwIjoyMDc1MTY2NDU1fQ.MdxrYD7LjeXih0OZfVTS1Y1DLwEJlgakSDxTafxbVXc
```

### Resend Email Configuration
```
RESEND_API_KEY=re_FX3Hp2tM_MNYDGTopxwMjDBy7WcStVrkd
```

### Site Configuration
```
NEXT_PUBLIC_SITE_URL=https://foundingpaws.vercel.app
```

## Database Setup

1. Run the SQL script in `supabase-setup.sql` in your Supabase dashboard
2. This creates the `newsletter_subscribers` table with proper policies

## Email Domain Verification

1. Go to [resend.com/domains](https://resend.com/domains)
2. Add and verify `foundingpaws.de` domain
3. Update `FROM_EMAIL` in `src/lib/email-service.ts` to use your domain

## Features Included

✅ **Complete Website**
- Mobile iOS optimized
- Newsletter system with Supabase + Resend
- Product pages with conversion optimization
- Blog/Ratgeber section
- Team page
- Legal pages (Impressum, Datenschutz, AGB)
- Brand page
- Admin dashboard

✅ **Technical Stack**
- Next.js 15 + React 19
- TypeScript
- Tailwind CSS
- Framer Motion
- Supabase
- Resend

✅ **Performance**
- Mobile-first responsive design
- SEO optimized
- Accessibility compliant
- Error boundaries
- Loading states

## Deployment Steps

1. Connect your GitHub repository to Vercel
2. Set environment variables in Vercel dashboard
3. Deploy automatically on push to main branch
4. Verify all features work correctly

## Post-Deployment Checklist

- [ ] Test newsletter signup
- [ ] Verify email sending works
- [ ] Check mobile responsiveness
- [ ] Test all pages load correctly
- [ ] Verify contact forms work
- [ ] Check SEO meta tags
- [ ] Test performance scores

## Support

For any issues, check the console logs in Vercel dashboard or contact the development team.
