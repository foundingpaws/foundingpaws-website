# 📧 E-Mail-System Setup - Founding Paws

## 🎯 Übersicht
Vollständiges E-Mail-Marketing-System mit 200k Website-Qualität und CI-konformen Templates.

## 🚀 Resend Setup (Empfohlen)

### 1. Resend Account erstellen
- Gehe zu [resend.com](https://resend.com)
- Erstelle einen kostenlosen Account
- Verifiziere deine E-Mail-Adresse

### 2. Domain verifizieren
- Gehe zu "Domains" im Dashboard
- Füge `foundingpaws.de` hinzu
- Folge den DNS-Anweisungen
- Warte auf Verifizierung (kann 24h dauern)

### 3. API Key generieren
- Gehe zu "API Keys"
- Erstelle einen neuen API Key
- Kopiere den Key

### 4. Umgebungsvariablen setzen
Erstelle eine `.env.local` Datei:
```bash
# Resend Configuration
RESEND_API_KEY=re_xxxxxxxxxxxxx

# Supabase Configuration (bereits vorhanden)
NEXT_PUBLIC_SUPABASE_URL=https://rzpbfipopehqkhyrhpgy.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
SUPABASE_SERVICE_ROLE_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
```

## 📊 E-Mail-Templates

### ✅ Verfügbare Templates:
1. **Willkommens-E-Mail** - Automatisch bei Newsletter-Anmeldung
2. **Newsletter** - Regelmäßige Updates
3. **Produkt-Launch** - Bei neuen Produkten
4. **Abandoned Cart** - Bei unvollständigen Käufen

### 🎨 Design-Features:
- ✅ **CI-konform** - Founding Paws Farben & Fonts
- ✅ **Responsive** - Funktioniert auf allen Geräten
- ✅ **Premium-Look** - 200k Website-Qualität
- ✅ **Branding** - Logo, Social Links, Footer
- ✅ **Call-to-Actions** - Optimierte Buttons

## 🛠️ Verwendung

### Newsletter senden:
```bash
# Test-E-Mail senden
curl -X POST http://localhost:3001/api/email/newsletter \
  -H "Content-Type: application/json" \
  -d '{
    "subject": "Test Newsletter",
    "content": "<p>Hallo liebe Hundefreunde!</p>",
    "testEmail": "test@example.com"
  }'
```

### Willkommens-E-Mail senden:
```bash
curl -X POST http://localhost:3001/api/email/welcome \
  -H "Content-Type: application/json" \
  -d '{
    "email": "test@example.com",
    "name": "Max Mustermann"
  }'
```

## 📈 E-Mail-Dashboard

### Zugriff:
- URL: `http://localhost:3001/admin/email-dashboard`
- Features:
  - ✅ Test-E-Mails senden
  - ✅ Newsletter erstellen
  - ✅ Template-Vorschau
  - ✅ E-Mail-Statistiken

## 🔧 Alternative E-Mail-Services

### 1. SendGrid (Mailgun Alternative)
```bash
npm install @sendgrid/mail
```

### 2. Mailgun
```bash
npm install mailgun-js
```

### 3. AWS SES
```bash
npm install @aws-sdk/client-ses
```

## 📊 E-Mail-Analytics

### Resend Pro Features:
- ✅ Öffnungsraten
- ✅ Klickraten
- ✅ Bounce-Tracking
- ✅ Unsubscribe-Management
- ✅ A/B Testing

### Kosten:
- **Resend Free**: 3.000 E-Mails/Monat
- **Resend Pro**: $20/Monat für 50.000 E-Mails
- **Resend Business**: $80/Monat für 200.000 E-Mails

## 🚨 Wichtige Hinweise

### 1. Domain-Verifizierung
- **MUSS** vor Live-Betrieb erfolgen
- Ohne Verifizierung landen E-Mails im Spam
- DNS-Einträge können 24-48h dauern

### 2. E-Mail-Limits
- Resend Free: 100 E-Mails/Tag
- Resend Pro: 50.000 E-Mails/Monat
- Rate Limits beachten

### 3. DSGVO-Compliance
- ✅ Opt-in bei Anmeldung
- ✅ Unsubscribe-Link in jeder E-Mail
- ✅ Datenschutz-Link im Footer
- ✅ Keine E-Mail ohne Einverständnis

## 🎯 Nächste Schritte

1. **Resend Account erstellen** ✅
2. **Domain verifizieren** ⏳
3. **API Key setzen** ⏳
4. **Test-E-Mails senden** ⏳
5. **Newsletter-Liste aufbauen** ⏳

## 📞 Support

Bei Fragen:
- Resend Docs: [resend.com/docs](https://resend.com/docs)
- Founding Paws Support: foundingpaws@gmail.com

---

**Das E-Mail-System ist bereit für den 200k Website-Standard!** 🚀✨
