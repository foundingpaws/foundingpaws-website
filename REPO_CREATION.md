# 🆕 Neues Repository erstellen für Vercel Deploy

## Schritt 1: Neues Repository auf GitHub erstellen

1. **Gehe zu [GitHub.com](https://github.com)**
2. **Klicke auf "New repository"** (grüner Button)
3. **Repository Details:**
   - **Owner:** `foundingpaws` (Organisation auswählen)
   - **Repository name:** `foundingpaws-website`
   - **Description:** `Founding Paws - Premium Dog Supplements Website`
   - **Visibility:** `Public` (empfohlen für Vercel)
   - **WICHTIG:** Füge KEINE README, .gitignore oder License hinzu!

4. **Klicke "Create repository"**

## Schritt 2: Code hochladen

Nach der Repository-Erstellung führe diese Befehle aus:

```bash
cd /Users/alicamadeline/Desktop/foundingpaws/foundingpaws-site

# Entferne das alte Remote
git remote remove origin

# Füge das neue Repository hinzu
git remote add origin https://github.com/foundingpaws/foundingpaws-website.git

# Pushe den Code
git push -u origin main
```

## Schritt 3: Vercel Deploy

1. **Gehe zu [vercel.com](https://vercel.com)**
2. **Melde dich mit GitHub an**
3. **Klicke "New Project"**
4. **Wähle `foundingpaws/foundingpaws-website`**
5. **Vercel erkennt automatisch Next.js**

## Schritt 4: Environment Variables setzen

In Vercel Dashboard > Settings > Environment Variables:

```
NEXT_PUBLIC_SUPABASE_URL=https://rzpbfipopehqkhyrhpgy.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJ6cGJmaXBvcGVocWtoeXJocGd5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTk1OTA0NTUsImV4cCI6MjA3NTE2NjQ1NX0.mjIrfCxE6xFRbYTvQ3ydcOqIyptR4agNdBWPPQ_kS9c
SUPABASE_SERVICE_ROLE_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJ6cGJmaXBvcGVocWtoeXJocGd5Iiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc1OTU5MDQ1NSwiZXhwIjoyMDc1MTY2NDU1fQ.MdxrYD7LjeXih0OZfVTS1Y1DLwEJlgakSDxTafxbVXc
RESEND_API_KEY=re_FX3Hp2tM_MNYDGTopxwMjDBy7WcStVrkd
NEXT_PUBLIC_SITE_URL=https://foundingpaws.vercel.app
```

## Schritt 5: Deploy! 🚀

1. **Klicke "Deploy"**
2. **Warte bis der Build fertig ist**
3. **Deine Website ist live!**

## Nach dem Deploy

- [ ] Teste die Website
- [ ] Teste Newsletter-Anmeldung
- [ ] Überprüfe Mobile-Responsiveness
- [ ] Teste alle Seiten

**Viel Erfolg! 🎉**
