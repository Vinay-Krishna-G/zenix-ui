import { Identity } from '../../lib/launchpad';

export function createPreviewTheme(brand: Identity | undefined) {
  if (!brand) {
    return {
      '--zx-primary': '#FFFFFF',
      '--zx-background': '#09090B',
      '--zx-surface': '#111113',
      '--zx-text': '#FAFAFA',
      background: '#09090B',
      color: '#FAFAFA',
    } as React.CSSProperties;
  }
  
  return {
    '--zx-primary': brand.colors.primary,
    '--zx-background': brand.colors.background,
    '--zx-surface': brand.colors.surface,
    '--zx-text': '#FAFAFA', // Text is default white unless overridden by brand specifically
    background: brand.colors.background,
    color: '#FAFAFA',
  } as React.CSSProperties;
}
