# Phase A1: Premium UI Audit Punch List

This audit documents the visual and structural inconsistencies across the existing ZenixUI codebase that must be resolved in Phase A4/A5.

## 1. Atomic Components (`packages/components/src`)

### `Button.tsx`
- **Issue**: Hardcoded theme variants (`glass`, `cyber`, `organic`) leak recipe logic into the atomic component.
- **Issue**: Uses hardcoded padding (`0.75rem 1.5rem`) instead of mapping to a Layout/Density Engine (e.g. `--zx-space-inline`).
- **Issue**: Hardcoded animation timings (`transition: all 0.2s ease`) instead of using a Motion Engine token (e.g. `--zx-motion-interaction`).
- **Issue**: Uses direct `--zx-radius-sm` rather than a Purpose Token (`--zx-radius-control`).

### `Input.tsx`
- **Issue**: Contrast hierarchy is weak. Background colors and borders blend too heavily with the page background (`#111111`).
- **Issue**: Focus shadow is hardcoded to a specific RGB string (`rgba(var(--zx-primary-rgb, 99,102,241), 0.15)`).
- **Issue**: Radius is mathematically derived (`calc(var(--zx-radius-sm, 6px) + 2px)`) rather than mapped to `--zx-radius-control`.
- **Issue**: Lacks semantic variants. Like `Button`, it hardcodes `terminal` and `organic`.

### `Surface.tsx`
- **Issue**: Exposes structural variants (`navbar`, `footer`, `hero`) rather than elevation variants (`surface`, `floating`, `overlay`).
- **Issue**: Hardcodes px/rem values (`borderRadius: '1rem'`, `boxShadow: '0 8px 24px rgba(...)'`).
- **Issue**: Bypasses the Effects Engine by hardcoding `backdropFilter: 'blur(12px)'`.

### `Badge.tsx`
- **Issue**: Hardcodes padding and font sizes.
- **Issue**: Does not consume the Purpose Token `--zx-radius-pill`.

## 2. Marketing Site (`apps/website`)

### `page.tsx` (Homepage)
- **Issue**: The Hero section relies on absolute inline margin values (`margin: '0 auto 1.5rem'`) rather than `--zx-space-stack` logic.
- **Issue**: The "Install exactly what you need" section uses unmapped font sizes (`fontSize: '2.5rem'`) instead of the Typography Engine (`var(--zx-text-hero)`).
- **Issue**: The CTA buttons manually define their padding and radius instead of relying on the standard `<Button>` primitives.

### General Visual Balance
- **Form Fields**: Forms feel developer-first. Inputs lack depth and distinct background separation.
- **Elevation**: Cards and elevated surfaces feel flat because they lack multi-layered shadow definitions (e.g., Apple-style subtle ring + soft drop).
- **Typography**: Line heights and letter spacing are manually applied per element rather than scaling naturally across heading levels.

## Action Plan (For Phase A4/A5)
1. **Strip** all raw pixel/rem values from `components/src/atoms/*`.
2. **Remove** stylistic variants (`cyber`, `terminal`) from components, replacing them with pure structural props.
3. **Map** everything to Purpose Tokens.
4. **Refactor** the homepage to use these exact tokens, ensuring zero inline visual debt.
