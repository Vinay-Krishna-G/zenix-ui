
import { ThemeTokens, RenderMode, Viewport, BlueprintProps } from '@zenixui/core';

export const fallbackTheme: ThemeTokens = {
  primary: '#3b82f6',
  secondary: '#8b5cf6',
  accent: '#f43f5e',
  background: '#09090b',
  surface: '#18181b',
  text: '#fafafa',
  muted: '#a1a1aa',
  border: '#27272a'
};

export function buildBlueprintProps(brand: any, mode: RenderMode, viewport: Viewport = Viewport.Desktop): BlueprintProps {
  const theme: ThemeTokens = brand ? {
    primary: brand.colors?.primary || fallbackTheme.primary,
    secondary: brand.colors?.secondary || fallbackTheme.secondary,
    accent: brand.colors?.accent || fallbackTheme.accent,
    background: brand.colors?.background || fallbackTheme.background,
    surface: brand.colors?.surface || fallbackTheme.surface,
    text: brand.colors?.text || fallbackTheme.text,
    muted: brand.colors?.muted || fallbackTheme.muted,
    border: brand.colors?.border || fallbackTheme.border,
  } : fallbackTheme;

  return {
    theme,
    content: null,
    mode,
    viewport
  };
}
