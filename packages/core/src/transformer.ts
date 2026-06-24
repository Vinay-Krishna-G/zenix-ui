import type { ThemeConfig } from './types';

export function transformThemeToCSSVariables(theme: Partial<ThemeConfig>): Record<string, string> {
  const vars: Record<string, string> = {};

  // Radius
  if (theme.radius) {
    const radiusMap: Record<string, string> = {
      none: '0px',
      sm: '4px',
      md: '8px',
      lg: '12px',
      xl: '16px',
      full: '9999px'
    };
    vars['--zx-radius'] = radiusMap[theme.radius] || theme.radius;
  }

  // Density
  if (theme.density) {
    const densityMap: Record<string, string> = {
      compact: '0.8',
      comfortable: '1',
      spacious: '1.2'
    };
    vars['--zx-density-scale'] = densityMap[theme.density] || '1';
  }

  // Typography
  if (theme.typography) {
    if (theme.typography.heading) vars['--zx-font-heading'] = theme.typography.heading;
    if (theme.typography.body) vars['--zx-font-body'] = theme.typography.body;
    if (theme.typography.mono) vars['--zx-font-mono'] = theme.typography.mono;
  }

  // Effects
  if (theme.effects) {
    if (theme.effects.shadow) vars['--zx-shadow-base'] = theme.effects.shadow;
    if (theme.effects.glass) vars['--zx-glass-base'] = theme.effects.glass;
    if (theme.effects.blur) vars['--zx-blur-base'] = theme.effects.blur;
  }

  // Palette
  if (theme.palette) {
    Object.entries(theme.palette).forEach(([key, value]) => {
      // camelCase to kebab-case
      const cssVar = '--zx-' + key.replace(/([A-Z])/g, "-$1").toLowerCase();
      if (value) vars[cssVar] = value;
    });
  }

  return vars;
}
