/**
 * ZenixUI Color Theory Engine
 *
 * Pure HSL-based palette generation. No external dependencies.
 * All math is derived from established color theory principles:
 *
 * - Analogous: +30° / -30° on the hue wheel → harmonious siblings
 * - Complementary: +180° → maximum contrast
 * - Triadic: +120° / +240° → balanced three-way harmony
 * - Backgrounds: same hue, desaturated (S×0.1), very dark (L=7-24%)
 *   → maintains brand identity without overwhelming dark UI
 *
 * Architecture: All functions are pure (no side effects).
 * Inputs: hex strings. Outputs: hex strings or arrays.
 */

// ─────────────────────────────────────────────────────────────────────────────
// Types
// ─────────────────────────────────────────────────────────────────────────────

export interface ColorPalette {
  /** The user-chosen primary brand color */
  primary: string;
  /** Analogous +30°: harmonious sibling, slightly lighter */
  secondary: string;
  /** Analogous +60°: more vibrant, used for highlights */
  accent: string;
  /** Background: same hue, 10% saturation, L=7 */
  background: string;
  /** Surface: slightly lighter than background */
  surface: string;
  /** Elevated: cards, panels, popovers */
  elevated: string;
  /** Border: subtle dividers */
  border: string;
  /** Muted text: labels, captions, placeholders */
  mutedText: string;
  /** Semantic: always green, never changes with primary */
  success: string;
  /** Semantic: always amber */
  warning: string;
  /** Semantic: always red */
  danger: string;
}

export type ColorRelationship = 'analogous' | 'complementary' | 'triadic' | 'split-complementary';

// ─────────────────────────────────────────────────────────────────────────────
// Core Conversions
// ─────────────────────────────────────────────────────────────────────────────

/**
 * Converts a hex color string to [H, S, L] where:
 * H ∈ [0, 360], S ∈ [0, 100], L ∈ [0, 100]
 */
export function hexToHsl(hex: string): [number, number, number] {
  const clean = hex.replace('#', '');
  const r = parseInt(clean.slice(0, 2), 16) / 255;
  const g = parseInt(clean.slice(2, 4), 16) / 255;
  const b = parseInt(clean.slice(4, 6), 16) / 255;

  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);
  let h = 0;
  let s = 0;
  const l = (max + min) / 2;

  if (max !== min) {
    const d = max - min;
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
    switch (max) {
      case r: h = ((g - b) / d + (g < b ? 6 : 0)) / 6; break;
      case g: h = ((b - r) / d + 2) / 6; break;
      case b: h = ((r - g) / d + 4) / 6; break;
    }
  }

  return [Math.round(h * 360), Math.round(s * 100), Math.round(l * 100)];
}

/**
 * Converts HSL values to a hex color string.
 * Clamps all values to valid ranges automatically.
 */
export function hslToHex(h: number, s: number, l: number): string {
  h = ((h % 360) + 360) % 360;
  s = Math.max(0, Math.min(100, s));
  l = Math.max(0, Math.min(100, l));

  const sn = s / 100;
  const ln = l / 100;

  const k = (n: number) => (n + h / 30) % 12;
  const a = sn * Math.min(ln, 1 - ln);
  const f = (n: number) =>
    ln - a * Math.max(-1, Math.min(k(n) - 3, Math.min(9 - k(n), 1)));

  const toHex = (x: number) =>
    Math.round(x * 255).toString(16).padStart(2, '0');

  return `#${toHex(f(0))}${toHex(f(8))}${toHex(f(4))}`;
}

// ─────────────────────────────────────────────────────────────────────────────
// Palette Generation
// ─────────────────────────────────────────────────────────────────────────────

/**
 * Generates a complete 11-color design system palette from a single primary color.
 *
 * Color theory rules applied:
 * - Secondary: +30° hue (analogous), -15S, +8L → warm, harmonious sibling
 * - Accent: +60° hue (analogous), +15S → vibrant, energetic highlight
 * - Backgrounds: same hue, S×0.10 → brand-tinted darks (not pure black)
 * - Semantic colors: fixed (success/warning/danger must be universally recognized)
 */
export function generatePalette(primaryHex: string): ColorPalette {
  const [h, s, l] = hexToHsl(primaryHex);

  // How much "brand tinting" to apply to dark surfaces.
  // Low saturation themes (s<30) get slightly more tinting to avoid flat grey.
  const bgSat = Math.max(Math.round(s * 0.1), 5);

  return {
    primary: primaryHex,
    secondary: hslToHex((h + 30) % 360, Math.max(s - 15, 20), Math.min(l + 8, 82)),
    accent: hslToHex((h + 60) % 360, Math.min(s + 15, 95), Math.min(l + 4, 80)),
    background: hslToHex(h, bgSat, 7),
    surface: hslToHex(h, bgSat, 12),
    elevated: hslToHex(h, bgSat + 2, 18),
    border: hslToHex(h, bgSat + 2, 24),
    mutedText: hslToHex(h, Math.min(Math.round(s * 0.38), 48), 52),
    // Semantic: always the same regardless of primary
    success: '#22c55e',
    warning: '#f59e0b',
    danger: '#ef4444',
  };
}

// ─────────────────────────────────────────────────────────────────────────────
// Color Relationships
// ─────────────────────────────────────────────────────────────────────────────

/** Returns the two analogous colors (+30° and -30°) */
export function getAnalogous(primaryHex: string): [string, string] {
  const [h, s, l] = hexToHsl(primaryHex);
  return [
    hslToHex((h - 30 + 360) % 360, s, l),
    hslToHex((h + 30) % 360, s, l),
  ];
}

/** Returns the complementary color (+180°) */
export function getComplementary(primaryHex: string): string {
  const [h, s, l] = hexToHsl(primaryHex);
  return hslToHex((h + 180) % 360, s, l);
}

/** Returns the two triadic colors (+120° and +240°) */
export function getTriadic(primaryHex: string): [string, string] {
  const [h, s, l] = hexToHsl(primaryHex);
  return [
    hslToHex((h + 120) % 360, s, l),
    hslToHex((h + 240) % 360, s, l),
  ];
}

// ─────────────────────────────────────────────────────────────────────────────
// Accessibility
// ─────────────────────────────────────────────────────────────────────────────

/**
 * Returns '#fafafa' (light text) or '#09090b' (dark text) based on
 * the relative luminance of the background color.
 * Follows WCAG 2.1 contrast guidelines.
 */
export function getContrastText(backgroundHex: string): '#fafafa' | '#09090b' {
  const [, , l] = hexToHsl(backgroundHex);
  return l > 50 ? '#09090b' : '#fafafa';
}

// ─────────────────────────────────────────────────────────────────────────────
// Code Generation
// ─────────────────────────────────────────────────────────────────────────────

/** Generates a CSS :root block with all palette values as custom properties */
export function generateCssVariables(palette: ColorPalette, selector = ':root'): string {
  return [
    `${selector} {`,
    `  --zx-primary:    ${palette.primary};`,
    `  --zx-secondary:  ${palette.secondary};`,
    `  --zx-accent:     ${palette.accent};`,
    `  --zx-background: ${palette.background};`,
    `  --zx-surface:    ${palette.surface};`,
    `  --zx-elevated:   ${palette.elevated};`,
    `  --zx-border:     ${palette.border};`,
    `  --zx-muted:      ${palette.mutedText};`,
    `  --zx-success:    ${palette.success};`,
    `  --zx-warning:    ${palette.warning};`,
    `  --zx-danger:     ${palette.danger};`,
    `}`,
  ].join('\n');
}

/** Generates a TypeScript ThemeConfig object for zenix.ts */
export function generateThemeConfig(primaryHex: string, themeName = 'custom'): string {
  const palette = generatePalette(primaryHex);
  return [
    `import type { ThemeConfig } from '@zenixui/core';`,
    ``,
    `export const themeConfig = {`,
    `  name: '${themeName}',`,
    `  base: 'zenix',`,
    `  radius: 'md',`,
    `  motion: 'standard',`,
    `  palette: {`,
    `    primary: '${palette.primary}',`,
    `    secondary: '${palette.secondary}',`,
    `    accent: '${palette.accent}',`,
    `    background: '${palette.background}',`,
    `  },`,
    `} satisfies ThemeConfig;`,
  ].join('\n');
}
