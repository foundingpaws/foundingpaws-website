/**
 * Theme System Example Component
 * 
 * Demonstrates the usage of the centralized theme system
 * across different component patterns.
 */

import React from 'react';
import { theme, colors, spacing, typography, borderRadius, shadows } from '@/styles/theme';

interface ThemeExampleProps {
  variant?: 'card' | 'button' | 'text' | 'form';
  children?: React.ReactNode;
}

export const ThemeExample: React.FC<ThemeExampleProps> = ({ 
  variant = 'card', 
  children 
}) => {
  const getVariantStyles = () => {
    switch (variant) {
      case 'card':
        return {
          backgroundColor: colors.backgroundAlt,
          color: colors.text,
          padding: spacing[6],
          borderRadius: borderRadius.card,
          boxShadow: shadows.card,
          border: `1px solid ${colors.taupe}20`,
        };
      
      case 'button':
        return {
          backgroundColor: colors.accent,
          color: colors.secondary,
          padding: `${spacing[3]} ${spacing[6]}`,
          borderRadius: borderRadius.button,
          boxShadow: shadows.accent,
          border: 'none',
          cursor: 'pointer',
          transition: 'all 0.3s ease',
        };
      
      case 'text':
        return {
          fontFamily: typography.fontHeading,
          fontSize: typography.fontSize['2xl'],
          color: colors.primary,
          lineHeight: typography.lineHeight.tight,
          letterSpacing: typography.letterSpacing.tight,
        };
      
      case 'form':
        return {
          backgroundColor: colors.background,
          border: `1px solid ${colors.taupe}40`,
          borderRadius: borderRadius.input,
          padding: spacing[4],
          color: colors.text,
          fontFamily: typography.fontBody,
          fontSize: typography.fontSize.base,
        };
      
      default:
        return {};
    }
  };

  return (
    <div style={getVariantStyles()}>
      {children || `Theme Example - ${variant}`}
    </div>
  );
};

// ========================================
// THEME DEMONSTRATION COMPONENTS
// ========================================

export const ColorPalette: React.FC = () => {
  const colorGroups = [
    {
      title: 'Primary Colors',
      colors: [
        { name: 'Primary', token: colors.primary },
        { name: 'Primary Light', token: colors.primaryLight },
        { name: 'Primary Dark', token: colors.primaryDark },
      ]
    },
    {
      title: 'Secondary Colors',
      colors: [
        { name: 'Secondary', token: colors.secondary },
        { name: 'Secondary Light', token: colors.secondaryLight },
        { name: 'Secondary Dark', token: colors.secondaryDark },
      ]
    },
    {
      title: 'Accent Colors',
      colors: [
        { name: 'Accent', token: colors.accent },
        { name: 'Accent Light', token: colors.accentLight },
        { name: 'Accent Dark', token: colors.accentDark },
      ]
    },
    {
      title: 'Neutral Colors',
      colors: [
        { name: 'Charcoal', token: colors.charcoal },
        { name: 'Taupe', token: colors.taupe },
        { name: 'Taupe Light', token: colors.taupeLight },
        { name: 'Taupe Dark', token: colors.taupeDark },
      ]
    },
    {
      title: 'Status Colors',
      colors: [
        { name: 'Success', token: colors.success },
        { name: 'Warning', token: colors.warning },
        { name: 'Error', token: colors.error },
        { name: 'Info', token: colors.info },
      ]
    }
  ];

  return (
    <div style={{ padding: spacing[8] }}>
      <h2 style={{
        fontFamily: typography.fontHeading,
        fontSize: typography.fontSize['3xl'],
        color: colors.primary,
        marginBottom: spacing[8],
      }}>
        Color Palette
      </h2>
      
      {colorGroups.map((group, groupIndex) => (
        <div key={groupIndex} style={{ marginBottom: spacing[8] }}>
          <h3 style={{
            fontFamily: typography.fontBody,
            fontSize: typography.fontSize.lg,
            color: colors.text,
            marginBottom: spacing[4],
            fontWeight: '600',
          }}>
            {group.title}
          </h3>
          
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: spacing[4],
          }}>
            {group.colors.map((color, colorIndex) => (
              <div
                key={colorIndex}
                style={{
                  backgroundColor: color.token,
                  padding: spacing[4],
                  borderRadius: borderRadius.base,
                  boxShadow: shadows.sm,
                  color: color.name.includes('Light') || color.name.includes('Secondary') 
                    ? colors.charcoal 
                    : colors.secondary,
                  fontFamily: typography.fontBody,
                  fontSize: typography.fontSize.sm,
                  fontWeight: '500',
                }}
              >
                {color.name}
                <br />
                <code style={{ 
                  fontSize: typography.fontSize.xs,
                  opacity: 0.8,
                  fontFamily: 'monospace',
                }}>
                  {color.token}
                </code>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export const TypographyScale: React.FC = () => {
  const typographySamples = [
    { level: 'H1', size: typography.fontSize['5xl'], weight: '400' },
    { level: 'H2', size: typography.fontSize['4xl'], weight: '400' },
    { level: 'H3', size: typography.fontSize['3xl'], weight: '400' },
    { level: 'H4', size: typography.fontSize['2xl'], weight: '400' },
    { level: 'H5', size: typography.fontSize.xl, weight: '500' },
    { level: 'H6', size: typography.fontSize.lg, weight: '500' },
    { level: 'Body Large', size: typography.fontSize.lg, weight: '400' },
    { level: 'Body', size: typography.fontSize.base, weight: '400' },
    { level: 'Body Small', size: typography.fontSize.sm, weight: '400' },
    { level: 'Caption', size: typography.fontSize.xs, weight: '500' },
  ];

  return (
    <div style={{ padding: spacing[8] }}>
      <h2 style={{
        fontFamily: typography.fontHeading,
        fontSize: typography.fontSize['3xl'],
        color: colors.primary,
        marginBottom: spacing[8],
      }}>
        Typography Scale
      </h2>
      
      <div style={{ display: 'flex', flexDirection: 'column', gap: spacing[6] }}>
        {typographySamples.map((sample, index) => (
          <div key={index} style={{
            padding: spacing[4],
            backgroundColor: colors.backgroundAlt,
            borderRadius: borderRadius.base,
            boxShadow: shadows.sm,
          }}>
            <div style={{
              fontFamily: sample.level.startsWith('H') ? typography.fontHeading : typography.fontBody,
              fontSize: sample.size,
              fontWeight: sample.weight,
              color: colors.text,
              lineHeight: typography.lineHeight.relaxed,
              marginBottom: spacing[2],
            }}>
              {sample.level} - The quick brown fox jumps over the lazy dog
            </div>
            <code style={{
              fontFamily: 'monospace',
              fontSize: typography.fontSize.xs,
              color: colors.textMuted,
            }}>
              {sample.level}: {sample.size} | Weight: {sample.weight}
            </code>
          </div>
        ))}
      </div>
    </div>
  );
};

export const SpacingScale: React.FC = () => {
  const spacingSamples = [
    { name: 'XS', token: spacing[1], value: '4px' },
    { name: 'SM', token: spacing[2], value: '8px' },
    { name: 'MD', token: spacing[4], value: '16px' },
    { name: 'LG', token: spacing[6], value: '24px' },
    { name: 'XL', token: spacing[8], value: '32px' },
    { name: '2XL', token: spacing[12], value: '48px' },
    { name: '3XL', token: spacing[16], value: '64px' },
    { name: '4XL', token: spacing[24], value: '96px' },
  ];

  return (
    <div style={{ padding: spacing[8] }}>
      <h2 style={{
        fontFamily: typography.fontHeading,
        fontSize: typography.fontSize['3xl'],
        color: colors.primary,
        marginBottom: spacing[8],
      }}>
        Spacing Scale
      </h2>
      
      <div style={{ display: 'flex', flexDirection: 'column', gap: spacing[4] }}>
        {spacingSamples.map((sample, index) => (
          <div key={index} style={{
            display: 'flex',
            alignItems: 'center',
            gap: spacing[4],
            padding: spacing[4],
            backgroundColor: colors.backgroundAlt,
            borderRadius: borderRadius.base,
            boxShadow: shadows.sm,
          }}>
            <div style={{
              width: sample.token,
              height: '20px',
              backgroundColor: colors.accent,
              borderRadius: borderRadius.sm,
            }} />
            <div>
              <div style={{
                fontFamily: typography.fontBody,
                fontSize: typography.fontSize.base,
                fontWeight: '500',
                color: colors.text,
              }}>
                {sample.name}
              </div>
              <code style={{
                fontFamily: 'monospace',
                fontSize: typography.fontSize.sm,
                color: colors.textMuted,
              }}>
                {sample.token} ({sample.value})
              </code>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export const ComponentExamples: React.FC = () => {
  return (
    <div style={{ padding: spacing[8] }}>
      <h2 style={{
        fontFamily: typography.fontHeading,
        fontSize: typography.fontSize['3xl'],
        color: colors.primary,
        marginBottom: spacing[8],
      }}>
        Component Examples
      </h2>
      
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gap: spacing[6],
      }}>
        <ThemeExample variant="card">
          <h3 style={{
            fontFamily: typography.fontHeading,
            fontSize: typography.fontSize.xl,
            color: colors.primary,
            marginBottom: spacing[4],
          }}>
            Card Component
          </h3>
          <p style={{
            fontFamily: typography.fontBody,
            fontSize: typography.fontSize.base,
            color: colors.text,
            lineHeight: typography.lineHeight.relaxed,
          }}>
            This card demonstrates the theme system with consistent spacing, 
            typography, and color usage.
          </p>
        </ThemeExample>
        
        <ThemeExample variant="button">
          Button Component
        </ThemeExample>
        
        <ThemeExample variant="text">
          Heading Component
        </ThemeExample>
        
        <ThemeExample variant="form">
          <input
            type="text"
            placeholder="Form Input Component"
            style={{
              width: '100%',
              border: 'none',
              outline: 'none',
              backgroundColor: 'transparent',
              fontFamily: typography.fontBody,
              fontSize: typography.fontSize.base,
              color: colors.text,
            }}
          />
        </ThemeExample>
      </div>
    </div>
  );
};

export default ThemeExample;
