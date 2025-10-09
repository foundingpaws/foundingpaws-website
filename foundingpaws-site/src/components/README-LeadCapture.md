# Lead Capture Komponente

Eine stilvolle und konvertierungsoptimierte Lead-Capture-Komponente für die FoundingPaws-Website.

## Features

- 🎨 **Elegantes Design** - Passend zum CI mit abgerundeten Kanten und modernen Animationen
- 📧 **Double-Opt-In** - Automatische E-Mail-Bestätigung für höhere Lead-Qualität
- 🎯 **Exit Intent** - Intelligente Erkennung des Verlassens der Seite
- ⏰ **Verzögerte Anzeige** - Erscheint erst nach einigen Sekunden für bessere UX
- 📱 **Responsive** - Optimiert für alle Geräte und Bildschirmgrößen
- 🎭 **Verschiedene Varianten** - Popup, Slide-in, Banner
- 🔄 **Animationen** - Smooth Ein- und Ausblendungen

## Verwendung

### Grundlegende Verwendung

```tsx
import LeadCapture from '@/components/LeadCapture';

export default function MyPage() {
  return (
    <div>
      {/* Deine Seite */}
      <LeadCapture
        variant="popup"
        trigger="exit-intent"
        delay={3000}
      />
    </div>
  );
}
```

### Manuelle Steuerung

```tsx
import { useState } from 'react';
import LeadCapture from '@/components/LeadCapture';

export default function MyPage() {
  const [showLeadCapture, setShowLeadCapture] = useState(false);

  return (
    <div>
      <button onClick={() => setShowLeadCapture(true)}>
        Lead Capture anzeigen
      </button>
      
      <LeadCapture
        variant="popup"
        trigger="manual"
        isVisible={showLeadCapture}
        onClose={() => setShowLeadCapture(false)}
      />
    </div>
  );
}
```

## Props

| Prop | Typ | Standard | Beschreibung |
|------|-----|----------|--------------|
| `variant` | `'popup' \| 'slide-in' \| 'banner'` | `'popup'` | Art der Anzeige |
| `trigger` | `'exit-intent' \| 'delay' \| 'scroll' \| 'manual'` | `'exit-intent'` | Auslöser für die Anzeige |
| `delay` | `number` | `3000` | Verzögerung in Millisekunden (nur bei delay-Trigger) |
| `className` | `string` | `''` | Zusätzliche CSS-Klassen |
| `onClose` | `() => void` | - | Callback beim Schließen |
| `showCloseButton` | `boolean` | `true` | Schließen-Button anzeigen |
| `isVisible` | `boolean` | - | Manuelle Sichtbarkeitskontrolle |

## Varianten

### Popup
Zentriertes Modal mit Overlay
```tsx
<LeadCapture variant="popup" />
```

### Slide-in
Gleitet von der rechten Seite ein
```tsx
<LeadCapture variant="slide-in" />
```

### Banner
Erscheint als Banner am oberen Rand
```tsx
<LeadCapture variant="banner" />
```

## Trigger

### Exit Intent
Erscheint beim Verlassen der Seite
```tsx
<LeadCapture trigger="exit-intent" />
```

### Delay
Erscheint nach einer bestimmten Zeit
```tsx
<LeadCapture trigger="delay" delay={5000} />
```

### Scroll
Erscheint beim Scrollen (50% der Seite)
```tsx
<LeadCapture trigger="scroll" />
```

### Manual
Manuelle Steuerung über `isVisible` prop
```tsx
<LeadCapture trigger="manual" isVisible={show} />
```

## Integration in bestehende Komponenten

### Hero-Bereich
```tsx
import HeroWithLeadCapture from '@/components/HeroWithLeadCapture';

export default function HomePage() {
  return <HeroWithLeadCapture />;
}
```

### Footer
```tsx
import FooterWithLeadCapture from '@/components/FooterWithLeadCapture';

export default function Layout() {
  return (
    <div>
      {/* Content */}
      <FooterWithLeadCapture />
    </div>
  );
}
```

### Blog-Sidebar
```tsx
import BlogSidebar from '@/components/BlogSidebar';

export default function BlogPage() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
      <div className="lg:col-span-3">
        {/* Blog Content */}
      </div>
      <div className="lg:col-span-1">
        <BlogSidebar />
      </div>
    </div>
  );
}
```

## Styling

Die Komponente verwendet das bestehende Design-System:

- **Farben**: Primary (#004225), Accent (#B46A34), Secondary (#F5EFE7)
- **Typografie**: Font-Headings und Font-Body
- **Abstände**: Konsistente Spacing-Tokens
- **Animationen**: Smooth Transitions und Keyframes

## Anpassungen

### Eigene Stile
```tsx
<LeadCapture
  className="custom-lead-capture"
  // ... andere props
/>
```

### CSS-Anpassungen
```css
.custom-lead-capture {
  /* Deine Anpassungen */
}
```

## Best Practices

1. **Nicht zu aggressiv** - Verwende Exit Intent oder Verzögerung
2. **Relevanter Content** - Passe den Text an den Kontext an
3. **Mobile Optimierung** - Teste auf verschiedenen Geräten
4. **A/B Testing** - Teste verschiedene Varianten
5. **Performance** - Lade die Komponente nur bei Bedarf

## Troubleshooting

### Komponente erscheint nicht
- Prüfe, ob `trigger` korrekt gesetzt ist
- Bei `manual` trigger: `isVisible` prop setzen
- Prüfe, ob bereits gezeigt wurde (localStorage)

### Styling-Probleme
- Prüfe, ob Theme-CSS geladen ist
- Verwende Browser-DevTools für Debugging
- Prüfe CSS-Spezifität

### Performance-Probleme
- Verwende `React.memo` für Optimierung
- Lade Komponente lazy bei Bedarf
- Prüfe Bundle-Größe

## Support

Bei Fragen oder Problemen wende dich an das Entwicklungsteam oder erstelle ein Issue im Repository.
