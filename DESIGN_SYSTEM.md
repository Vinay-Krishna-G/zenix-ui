# ZenixUI Design System

**Read and strictly follow this document. Do not invent new colors, spacing, typography, shadows, or border radii. Every UI must conform to this design system.**

## Taste Profile
ZenixUI is premium, invisible, and confident. It does not shout with random glows or massive shadows. It uses contrast, precise spacing, and minimal color to guide the eye. Think Apple, Framer, Linear, Vercel, Raycast.

## 1. Color Palette (Strictly 10 Tokens)
Do not use `rgba(255,255,255,...)` arbitrarily. Stick to these exact hex codes.

- **Background:** `#09090B` (Base page background)
- **Surface:** `#111113` (Cards, modals, large containers)
- **Elevated:** `#18181B` (Hover states, secondary surfaces)
- **Border:** `rgba(255,255,255,0.08)` (All borders, dividers, outlines)
- **Text Primary:** `#FAFAFA` (Headings, primary buttons, high emphasis text)
- **Text Secondary:** `#A1A1AA` (Body text, descriptions, low emphasis)
- **Accent:** `#5E6AD2` (Primary brand color, buttons, active states)
- **Accent Hover:** `#7C89FF` (Hover state for accent elements)
- **Success:** `#22C55E` (Positive outcomes, deploy ready)
- **Danger:** `#EF4444` (Errors, destruction)

**Rule:** Never use more than ONE accent color on a page. Never use a color outside this palette. Never use green glows with blue buttons.

## 2. Typography Scale
Apple uses rhythm. We use rhythm. Do not invent font sizes.

- **80px:** Massive heroic statements.
- **56px:** Primary section headers.
- **40px:** Secondary section headers.
- **28px:** Card titles, prominent subheadings.
- **20px:** Emphasized body, large buttons.
- **16px:** Standard body text, standard buttons.
- **14px:** Metadata, tags, small UI elements.

**Rule:** Never use font opacity below 70% (Use `#A1A1AA` instead). Never use text smaller than 14px.

## 3. Spacing Scale (8pt Grid)
Do not use `10px`, `15px`, `20px`, `30px`, `50px`. Stick strictly to the 8pt scale.

- **8px:** Element internal spacing (icon to text).
- **16px:** Standard padding (small buttons, tight lists).
- **24px:** Standard margin (paragraph separation).
- **32px:** Medium padding (cards).
- **40px:** Large padding (hero text).
- **48px:** Section internal spacing.
- **64px:** Section external spacing.
- **80px:** Major section separation.
- **96px:** Massive separation (between completely different page areas).

## 4. Border Radius (Strictly 3 Tokens)
Do not use arbitrary border radii. 

- **Buttons:** `16px` (pill-like but structured).
- **Cards:** `24px` (soft, approachable content containers).
- **Browser/Large Frame:** `28px` (massive structural elements like live previews).

## 5. Shadows (Strictly 2 Tokens)
Shadows must be barely visible, providing structure, not decoration. No colored shadows. No neon glows.

- **Soft Shadow (Cards):** `0 4px 6px -1px rgba(0, 0, 0, 0.2), 0 2px 4px -1px rgba(0, 0, 0, 0.1)`
- **Deep Shadow (Floating Browsers/Modals):** `0 25px 50px -12px rgba(0, 0, 0, 0.5)`

## 6. Motion & Interaction
Motion should feel crisp and expensive.

- **Fast (Hover states, clicks):** `150ms ease`
- **Medium (Opening menus, small enters):** `250ms cubic-bezier(0.4, 0, 0.2, 1)`
- **Slow (Page transitions, large elements entering):** `400ms cubic-bezier(0.4, 0, 0.2, 1)`

## Do's and Don'ts
- **DO** fill the screen. Never waste vertical space with huge empty black areas.
- **DO** show, don't tell. Visual mockups of code/terminals beat bullet points.
- **DO** ensure every text/background pair passes WCAG AA contrast.
- **DON'T** invent gradients.
- **DON'T** invent glows.
- **DON'T** mix different border radii randomly.
