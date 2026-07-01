# ZenixUI Design Foundations

## 1. Typography
Zenix uses a highly legible, premium geometric sans-serif stack.
We will default to system fonts that simulate a premium experience (San Francisco on Mac, Inter/Helvetica on others).

**Scale:**
- Display: 72px / -3% Tracking / 800 Weight
- H1: 56px / -2% Tracking / 800 Weight
- H2: 40px / -2% Tracking / 700 Weight
- H3: 32px / -1% Tracking / 700 Weight
- H4: 24px / 0% Tracking / 600 Weight
- H5: 20px / 0% Tracking / 600 Weight
- H6: 16px / 0% Tracking / 600 Weight
- Body Large: 18px / 0% Tracking / 400 Weight / 160% Line-height
- Body: 16px / 0% Tracking / 400 Weight / 150% Line-height
- Caption: 13px / +1% Tracking / 500 Weight / 140% Line-height

## 2. Spacing
An 8-point grid is strictly enforced.
- 4px (0.5x)
- 8px (1x)
- 16px (2x)
- 24px (3x)
- 32px (4x)
- 48px (6x)
- 64px (8x)
- 96px (12x)
- 128px (16x)

## 3. Border Radius
- `sm`: 4px
- `md`: 8px
- `lg`: 12px
- `xl`: 24px
- `full`: 9999px

## 4. Shadows
Designed to mimic physical elevation and diffuse light, not hard drops.
- `soft`: `0 4px 20px rgba(0,0,0,0.04)`
- `medium`: `0 12px 32px rgba(0,0,0,0.06), 0 2px 8px rgba(0,0,0,0.04)`
- `large`: `0 32px 64px rgba(0,0,0,0.08), 0 8px 16px rgba(0,0,0,0.04)`

## 5. Colors (Dark Mode Default)
Zenix is dark-first because the marketplace previews pop better on dark backgrounds.
- Background: `#09090B` (Rich Black)
- Surface: `#111113` (Elevated Black)
- Surface Hover: `#18181B`
- Primary (Text): `#FAFAFA`
- Secondary (Text): `#A1A1AA`
- Accent: `#FFFFFF`
- Border: `rgba(255, 255, 255, 0.08)`
- Glass: `rgba(17, 17, 19, 0.6)` with `blur(24px)`

## 6. Motion
No bouncy animations. Strictly smooth, expensive, and grounded.
- Hover: 400ms `cubic-bezier(0.16, 1, 0.3, 1)`
- Click: 150ms `ease-out`
- Transitions: 300ms `ease-in-out`
