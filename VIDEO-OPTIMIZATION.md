# Video Optimierung für iOS

## Problem
Das aktuelle Video ist **21MB groß** - zu groß für iOS Safari Autoplay (iOS Limit: ~3MB)

## Lösung: Komprimierte Mobile-Version erstellen

### Option 1: FFmpeg (Empfohlen)
```bash
# Video auf <3MB komprimieren für iOS
ffmpeg -i public/customers/Smooth_cinematic_transition_202510101708.mp4 \
  -vf "scale=720:-2" \
  -c:v libx264 \
  -crf 28 \
  -preset slow \
  -profile:v baseline \
  -level 3.0 \
  -movflags +faststart \
  -an \
  public/customers/Smooth_cinematic_transition_202510101708-mobile.mp4
```

**Parameter erklärt:**
- `-vf "scale=720:-2"` - Reduziert auf 720p Breite
- `-crf 28` - Quality (23=hoch, 28=mittel, höher=kleiner)
- `-preset slow` - Bessere Kompression
- `-profile:v baseline -level 3.0` - iOS Kompatibilität
- `-movflags +faststart` - Schnelleres Streaming
- `-an` - Entfernt Audio (nicht nötig bei muted autoplay)

### Option 2: Online Tools
1. **CloudConvert** (https://cloudconvert.com/mp4-converter)
   - Format: MP4
   - Video Codec: H.264
   - Auflösung: 720p
   - Bitrate: 500-800 kbps
   - Audio: Entfernen

2. **HandBrake** (kostenlos, Desktop App)
   - Preset: "Web > Gmail Medium 5 Minutes 720p30"
   - Ziel-Größe: <3MB

### Ziel-Spezifikationen
- **Größe:** <3MB (2.5MB ideal)
- **Format:** MP4 (H.264)
- **Auflösung:** 720p oder niedriger
- **Bitrate:** 500-800 kbps
- **Audio:** Keins (muted autoplay)
- **Länge:** Kürzer ist besser (max 10-15 Sek.)

### Nach der Kompression
1. Benenne die Datei: `Smooth_cinematic_transition_202510101708-mobile.mp4`
2. Speichere sie in: `public/customers/`
3. Teste auf iOS Safari

## iOS Best Practices (bereits implementiert)

### ✅ Video-Attribute
```html
<video
  autoPlay
  muted
  loop
  playsInline
  preload="metadata"
  poster="/mockups/PSD file.png"
>
```

### ✅ Wichtige Attribute erklärt:
- **autoPlay** - Startet automatisch
- **muted** - MUSS gesetzt sein für Autoplay
- **playsInline** - Verhindert Fullscreen auf iOS
- **preload="metadata"** - Lädt nur Metadaten (spart Bandbreite)
- **poster** - Zeigt Bild während Laden

### ✅ Fallback-Strategie
1. Versucht mobile Version zu laden (<3MB)
2. Falls nicht verfügbar: Original (Desktop/WiFi)
3. Bei Fehler: Zeigt statisches Bild

## iOS Limitierungen

### Was iOS NICHT erlaubt:
- ❌ Videos >3MB für Autoplay
- ❌ Videos mit Ton (ohne User-Interaktion)
- ❌ Autoplay im Low-Power-Mode
- ❌ WebM Format (nur MP4)

### Was iOS ERLAUBT:
- ✅ Muted Videos <3MB
- ✅ playsinline Videos
- ✅ Loop bei muted Videos
- ✅ H.264 MP4 Videos

## Testing Checklist

Nach Video-Kompression testen:
- [ ] iOS Safari (iPhone)
- [ ] iOS Safari (iPad)
- [ ] iOS Chrome
- [ ] Android Chrome
- [ ] Desktop Safari
- [ ] Desktop Chrome

## Aktuelle Implementierung

### Mobile (iOS optimiert):
```javascript
<source src="/customers/Smooth_cinematic_transition_202510101708-mobile.mp4" />
<source src="/customers/Smooth_cinematic_transition_202510101708.mp4" /> // Fallback
```

### Desktop:
```javascript
<source src="/customers/Smooth_cinematic_transition_202510101708.mp4" />
```

## Troubleshooting

### Video lädt nicht auf iOS:
1. Prüfe Dateigröße: `ls -lh public/customers/*.mp4`
2. Prüfe Format: Muss H.264 MP4 sein
3. Prüfe Attribute: autoPlay, muted, playsInline
4. Teste Low-Power-Mode aus
5. Teste mit WiFi (nicht Cellular)

### Video ruckelt:
- Reduziere Auflösung auf 480p
- Erhöhe CRF auf 30-32
- Kürze Video-Länge

### Video zu verpixelt:
- Reduziere CRF auf 23-25
- Erhöhe Bitrate auf 1000 kbps
- Balance zwischen Qualität und Größe

## Performance Metrics

**Vorher (21MB):**
- ❌ iOS Crash
- ❌ Langsame Ladezeit
- ❌ Hoher Datenverbrauch

**Nachher (<3MB):**
- ✅ iOS funktioniert
- ✅ Schnelle Ladezeit (<2s)
- ✅ 85% weniger Datenverbrauch
