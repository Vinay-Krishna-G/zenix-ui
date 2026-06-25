# ZenixUI Design Principles

Every PR and UI implementation in ZenixUI must satisfy these core principles before being merged.

## 1. 10 Seconds to Understand, 30 Seconds to Install
The product must explain itself visually almost instantly. If a user has to read documentation before understanding what a Section or a Blueprint is, the interface has failed. Installation should be a single, conversational CLI command.

## 2. Never Require Documentation
Everything should be self-explanatory. From the CLI interactive prompts to the visual controls in the Theme Studio (using Figma-level live previews rather than text dropdowns), the UI itself should be the documentation.

## 3. Apple-Level Polish
We obsess over spacing, alignment, and visual hierarchy. We use a strict 8-point spacing system and standardized radius/shadow recipes. If an element feels "off," it is a bug.

## 4. Readable Hierarchy
Every layout must communicate its intent immediately. Inputs must be distinctly visible against the background. Headers must draw attention properly. Call-to-actions must have the highest contrast in the viewport.

## 5. Motion is Subtle
Animations are for providing context, not for decoration. Motion should be precise and purposeful (e.g., Apple, Linear, Raycast). Avoid heavy, bouncy, or slow transitions. The default feeling should be snappy and professional.

## 6. No Visual Noise
Avoid unnecessary borders, gradients, or heavy shadows unless explicitly defined by an Effects Recipe (e.g., Glass). Default to clean layouts and ample negative space to let the content breathe.

## 7. Accessibility First
Accessibility is a built-in Foundation Engine, not an afterthought. Contrast ratios must pass WCAG guidelines. Focus rings must be obvious. Keyboard navigation must be flawless out-of-the-box. 

## 8. Mobile First
Responsiveness is handled by the Layout and Density engines. Every component must look perfect and function smoothly on touch devices without requiring manual media-query soup from the user.
