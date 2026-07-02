/**
 * Design Foundation Tokens
 * These export the CSS variables defined in responsive.css.
 * 
 * By using these variables, the component remains completely unaware
 * of the actual breakpoint pixel logic. CSS automatically updates
 * the variable value based on the viewport.
 */

export const typography = {
  displayXL: 'var(--zx-text-display-xl)',
  headingXL: 'var(--zx-text-heading-xl)',
  headingLG: 'var(--zx-text-heading-lg)',
  bodyLG: 'var(--zx-text-body-lg)',
  bodyMD: 'var(--zx-text-body-md)',
  bodySM: 'var(--zx-text-body-sm)',
  caption: 'var(--zx-text-caption)',
} as const;

export const spacing = {
  sectionY: 'var(--zx-space-section-y)',
  sectionX: 'var(--zx-space-section-x)',
  container: 'var(--zx-space-container)',
  content: 'var(--zx-space-content)',
  element: 'var(--zx-space-element)',
  inline: 'var(--zx-space-inline)',
  stack: 'var(--zx-space-stack)',
  gapXL: 'var(--zx-space-gap-xl)',
  gapLG: 'var(--zx-space-gap-lg)',
  gapMD: 'var(--zx-space-gap-md)',
} as const;

export const preview = {
  height: 'var(--zx-preview-height)',
  radius: 'var(--zx-preview-radius)',
  padding: 'var(--zx-preview-padding)',
} as const;
