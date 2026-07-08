# ZenixUI Design Language

This document is the North Star for all visual decisions within the ZenixUI ecosystem. Every block, editor, and UI component must adhere to these principles.

## Core Tenets

1. **Minimal**: Strip away the unnecessary. Do not decorate without purpose.
2. **Elegant**: Use harmonious spacing, typography, and color. Interfaces should feel effortless.
3. **Professional**: Establish immediate trust. ZenixUI is for businesses shipping real products.
4. **Confident**: Rely on bold typography and distinct hierarchy rather than visual noise.
5. **Calm**: Do not overwhelm the user with dense information, flashy effects, or competing colors.
6. **Content-first**: The design exists to elevate the content, not to compete with it.
7. **Animation supports content**: Use motion to communicate state, not to dazzle.
8. **Whitespace is intentional**: Treat empty space as an active design element that creates focus.
9. **Accessibility is mandatory**: Never compromise contrast, keyboard navigation, or semantic HTML for aesthetics.

## Experience Quality Checklist

Every block must pass this checklist before being considered "done":

### Visual
- [ ] Excellent typography (scale, line-height, weight)
- [ ] Consistent spacing (adhering to an 8px/4px grid)
- [ ] Premium color harmony
- [ ] Balanced white space
- [ ] Professional iconography

### Responsive
- [ ] Mobile (320px+)
- [ ] Tablet (768px+)
- [ ] Desktop (1024px+)
- [ ] Ultra-wide (1440px+)

### Accessibility
- [ ] Keyboard accessible (Tab navigation works naturally)
- [ ] Visible focus states (Never `outline: none` without a custom focus ring)
- [ ] Color contrast AA (WCAG compliant)
- [ ] Semantic HTML (`<nav>`, `<main>`, `<section>`, `<article>`, `<button>` vs `<a>`)

### Performance
- [ ] No layout shift (CLS)
- [ ] Optimized images (lazy loading where appropriate)
- [ ] Smooth animations (CSS transforms and opacity only)
- [ ] No unnecessary renders

### Editing
- [ ] Every important property editable
- [ ] No hardcoded copy
- [ ] No hardcoded assets

### Export
- [ ] No runtime errors
- [ ] Clean configuration

### Reusability
- [ ] Generic (not tied to a specific industry like "Agency")
- [ ] Experience agnostic
- [ ] Variant driven

## The "Premium" Standard

Premium does not mean flashy (particle backgrounds, 3D scenes, complex glass effects).
Premium comes from **spacing, hierarchy, typography, motion, and consistency**. Look to interfaces like Apple, Linear, Vercel, and Stripe for inspiration. Restraint is the ultimate sign of quality.
