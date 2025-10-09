# 🔧 Git Repository Setup für Vercel

## Schritt 1: GitHub Repository erstellen

1. Gehe zu [GitHub.com](https://github.com)
2. Klicke auf "New repository"
3. Repository Name: `foundingpaws-website`
4. Beschreibung: `Founding Paws - Premium Dog Supplements Website`
5. Wähle "Public" oder "Private"
6. **WICHTIG:** Füge KEINE README, .gitignore oder License hinzu (da wir bereits ein lokales Repository haben)
7. Klicke "Create repository"

## Schritt 2: Lokales Repository mit GitHub verbinden

Führe diese Befehle in deinem Terminal aus:

```bash
cd /Users/alicamadeline/Desktop/foundingpaws/foundingpaws-site

# Entferne das alte Remote (falls vorhanden)
git remote remove origin

# Füge dein neues GitHub Repository hinzu
git remote add origin https://github.com/DEIN-USERNAME/foundingpaws-website.git

# Pushe den Code zu GitHub
git push -u origin main
```

## Schritt 3: Vercel mit GitHub verbinden

1. Gehe zu [vercel.com](https://vercel.com)
2. Melde dich mit deinem GitHub Account an
3. Klicke "New Project"
4. Wähle dein `foundingpaws-website` Repository
5. Vercel erkennt automatisch Next.js

## Schritt 4: Environment Variables in Vercel setzen

In Vercel Dashboard > Settings > Environment Variables:

```
NEXT_PUBLIC_SUPABASE_URL=https://rzpbfipopehqkhyrhpgy.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJ6cGJmaXBvcGVocWtoeXJocGd5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTk1OTA0NTUsImV4cCI6MjA3NTE2NjQ1NX0.mjIrfCxE6xFRbYTvQ3ydcOqIyptR4agNdBWPPQ_kS9c
SUPABASE_SERVICE_ROLE_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJ6cGJmaXBvcGVocWtoeXJocGd5Iiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc1OTU5MDQ1NSwiZXhwIjoyMDc1MTY2NDU1fQ.MdxrYD7LjeXih0OZfVTS1Y1DLwEJlgakSDxTafxbVXc
RESEND_API_KEY=re_FX3Hp2tM_MNYDGTopxwMjDBy7WcStVrkd
NEXT_PUBLIC_SITE_URL=https://foundingpaws.vercel.app
```

## Schritt 5: Supabase Database Setup

1. Gehe zu deinem Supabase Dashboard
2. Öffne den SQL Editor
3. Kopiere und führe den Inhalt von `supabase-setup.sql` aus

## Schritt 6: Deploy!

1. Klicke "Deploy" in Vercel
2. Warte bis der Build fertig ist
3. Deine Website ist live! 🎉

## Nach dem Deploy

- [ ] Teste die Website auf verschiedenen Geräten
- [ ] Teste Newsletter-Anmeldung
- [ ] Überprüfe alle Seiten
- [ ] Teste Mobile-Responsiveness

## Support

Bei Problemen:
1. Überprüfe Vercel Build Logs
2. Überprüfe Environment Variables
3. Teste lokal mit `npm run dev`

**Viel Erfolg! 🚀**
