# Founding Paws Theme System

Ein zentrales Design-System für konsistente Gestaltung across alle Komponenten und Seiten.

## Übersicht

Das Theme-System besteht aus drei Hauptdateien:

- `theme.css` - CSS-Variablen und Utility-Klassen
- `theme.ts` - TypeScript-Definitionen und Utility-Funktionen
- `ios-optimizations.css` - iOS-spezifische Optimierungen

## Verwendung

### CSS-Variablen

```css
/* Direkte Verwendung in CSS */
.my-component {
  background-color: var(--color-primary);
  color: var(--color-text);
  padding: var(--space-4);
  border-radius: var(--radius-card);
  box-shadow: var(--shadow-card);
}
```

### TypeScript/React

```tsx
import { theme, colors, spacing, getThemeToken } from '@/styles/theme';

// Direkte Verwendung
const MyComponent = () => (
  <div style={{
    backgroundColor: colors.primary,
    color: colors.text,
    padding: spacing[4],
  }}>
    Content
  </div>
);

// Mit Utility-Funktionen
const dynamicColor = getThemeToken('colors', 'primary');
```

### Tailwind CSS

Das Theme ist vollständig in Tailwind integriert:

```tsx
<div className="bg-primary text-text p-4 rounded-card shadow-card">
  Content
</div>
```

## Design Tokens

### Farben

#### Primärfarben
- `--color-primary` - Racing Green (#004225)
- `--color-primary-light` - Helleres Grün für Hover-States
- `--color-primary-dark` - Dunkleres Grün für Pressed-States

#### Sekundärfarben
- `--color-secondary` - Cream Beige (#F5EFE7)
- `--color-secondary-light` - Helleres Beige
- `--color-secondary-dark` - Dunkleres Beige

#### Akzentfarben
- `--color-accent` - Copper Accent (#B46A34)
- `--color-accent-light` - Helleres Kupfer
- `--color-accent-dark` - Dunkleres Kupfer

#### Neutrale Farben
- `--color-charcoal` - Charcoal Ink (#2A2E2F)
- `--color-taupe` - Warm Taupe (#8E7F74)

#### Status-Farben
- `--color-success` - Grün für Erfolg
- `--color-warning` - Amber für Warnungen
- `--color-error` - Rot für Fehler
- `--color-info` - Blau für Informationen

### Typografie

#### Schriftarten
- `--font-heading` - Retrips/Playfair Display für Überschriften
- `--font-body` - DM Sans/Inter für Fließtext
- `--font-round` - Fredoka für runde Elemente

#### Schriftgrößen (Fluid)
- `--font-size-xs` bis `--font-size-5xl` - Responsive Schriftgrößen
- Automatische Anpassung basierend auf Viewport-Größe

#### Zeilenhöhen
- `--line-height-tight` - 1.1
- `--line-height-normal` - 1.5
- `--line-height-relaxed` - 1.6
- `--line-height-loose` - 1.8

### Spacing

#### Basis-Spacing (4px-Scale)
- `--space-0` bis `--space-64` - 0px bis 256px
- `--space-section` - Fluid Spacing für Sektionen (56-120px)

### Border Radius

- `--radius-sm` bis `--radius-3xl` - 4px bis 48px
- `--radius-full` - Vollständig abgerundet
- `--radius-card` - Standard für Karten (24px)
- `--radius-button` - Standard für Buttons (vollständig abgerundet)

### Schatten

- `--shadow-xs` bis `--shadow-2xl` - Standard-Schatten
- `--shadow-primary` - Brand-spezifischer Schatten
- `--shadow-card` - Schatten für Karten
- `--shadow-floating` - Schwebender Schatten

### Übergänge

- `--transition-fast` - 150ms
- `--transition-base` - 300ms
- `--transition-slow` - 500ms
- `--transition-bounce` - Mit Bounce-Effekt
- `--transition-spring` - Mit Spring-Effekt

## Utility-Klassen

### Farben
```css
.text-primary { color: var(--color-primary); }
.bg-primary { background-color: var(--color-primary); }
```

### Spacing
```css
.p-md { padding: var(--space-4); }
.m-lg { margin: var(--space-6); }
```

### Typografie
```css
.font-heading { font-family: var(--font-heading); }
.text-xl { font-size: var(--font-size-xl); }
```

### Schatten
```css
.shadow-card { box-shadow: var(--shadow-card); }
.shadow-primary { box-shadow: var(--shadow-primary); }
```

## Responsive Design

Das Theme unterstützt vollständig responsive Design:

```css
/* Fluid Typography */
font-size: var(--font-size-xl); /* Automatisch responsive */

/* Fluid Spacing */
padding: var(--space-section); /* Responsive Sektions-Abstände */
```

## Dark Mode

Automatische Dark Mode-Unterstützung:

```css
@media (prefers-color-scheme: dark) {
  :root {
    --color-background: var(--color-primary);
    --color-text: var(--color-secondary);
  }
}
```

## Accessibility

- Hoher Kontrast-Modus unterstützt
- Reduced Motion für Animationen
- Fokus-Indikatoren
- Screen Reader-freundlich

## Performance

- CSS-Variablen für bessere Performance
- Hardware-Beschleunigung für Animationen
- Optimierte Schriftarten mit `font-display: swap`

## Migration

### Von bestehenden Styles

1. Ersetze direkte Farbwerte durch CSS-Variablen:
   ```css
   /* Vorher */
   color: #004225;
   
   /* Nachher */
   color: var(--color-primary);
   ```

2. Verwende Spacing-Tokens:
   ```css
   /* Vorher */
   padding: 16px;
   
   /* Nachher */
   padding: var(--space-4);
   ```

3. Nutze Typography-Tokens:
   ```css
   /* Vorher */
   font-family: "DM Sans", sans-serif;
   
   /* Nachher */
   font-family: var(--font-body);
   ```

## Best Practices

1. **Konsistenz**: Verwende immer die Theme-Tokens statt direkte Werte
2. **Responsive**: Nutze fluid Typography und Spacing
3. **Accessibility**: Teste mit verschiedenen Kontrast-Einstellungen
4. **Performance**: Vermeide unnötige CSS-Overrides
5. **Wartbarkeit**: Dokumentiere neue Tokens im Theme-System

## Erweiterung

### Neue Farben hinzufügen

1. Füge die CSS-Variable in `theme.css` hinzu:
   ```css
   --color-new: #123456;
   ```

2. Füge den TypeScript-Token in `theme.ts` hinzu:
   ```typescript
   new: 'var(--color-new)',
   ```

3. Aktualisiere die Tailwind-Integration in `globals.css`

### Neue Komponenten-Tokens

1. Definiere die Tokens in `theme.css`
2. Füge sie zu den entsprechenden Kategorien in `theme.ts` hinzu
3. Erstelle Utility-Klassen falls nötig

## Support

Bei Fragen oder Problemen mit dem Theme-System:

1. Überprüfe die CSS-Variablen im Browser DevTools
2. Teste die TypeScript-Typen
3. Konsultiere diese Dokumentation
4. Erstelle ein Issue im Repository
