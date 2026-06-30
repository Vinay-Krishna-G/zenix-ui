# ZenixUI — UI Guidelines
# Extracted from AGENTS.md

## Product Quality Rules (Mandatory Before Any Implementation)

Every implementation must improve at least one of:
- User onboarding
- Discoverability
- Developer experience
- Accessibility
- Documentation
- Performance
- Conversion
- Reusability

Do not add features simply because they are interesting.

Before implementing any feature, answer:
1. Why do users need it? (Problem solved)
2. Why does it fit the long-term architecture? (Platform fit)
3. How does it affect SEO? (Discoverability impact)
4. How does it affect conversion? (Funnel impact)
5. How does it scale to 1000+ blueprints and sections? (Scalability)

When implementing UI:
- Prefer reducing user decisions over adding more options.
- Keep navigation shallow and predictable.
- Ensure every page has a clear next action (CTA).

---

## Recommended vs Advanced Mode Rule

ZenixUI must support two interaction modes:

**Recommended Mode (default):** The system suggests visually and structurally compatible section combinations. New users get excellent results immediately without knowing what looks good together.

**Advanced Mode:** Developers can mix any sections, themes, typography, and recipes freely with no restrictions.

This principle applies to: Section Library, Theme Recipes, Studio, CLI.

Implementation rule: always ship Recommended Mode first. Advanced Mode is additive — never gate it, never remove Recommended.

---

## UI Premium Standard (Mandatory for All Components)

Inputs must feel like Apple:
- Visible background distinction from page background
- Focused border with color (not just outline)
- Smooth transition on focus (0.15s ease)
- Appropriate padding (at minimum 0.625rem 1rem)
- Shadow on focus or elevated state

Hierarchy must be readable in 1 second:
- Form fields must NOT blend into the background
- Cards must be visually distinct from the page background
- Buttons must have clear affordance (not match opacity of surrounding text)

If a form occupies less than 40% of its container horizontally, the layout is wrong.
If negative space exceeds 60% of the viewport on a form page, the layout is wrong.

---

## Night City Aesthetic Direction (Approved)

The "Night City" theme must NOT look like:
- Cyberpunk / RGB / Neon / Gaming / Hacker

It MUST feel like:
- Apple · Linear · Raycast · Notion · Vercel · Arc
- Calm · Professional · Timeless
- "Premium workspace" NOT "RGB gaming keyboard"

Dark themes = calm, not loud.
Shadows should feel like depth, not drama.
Animations should feel like precision, not performance.

Consider renaming to: Midnight | Slate | Eclipse | Nocturne | Obsidian

---

## UI Change Justification (Mandatory)

For every UI change, explain:

1. **UX improvement** — How does this make the interface easier or more intuitive for a user?
2. **Developer Experience improvement** — How does this reduce friction for a developer adopting ZenixUI?
3. **Conversion impact** — What user behavior change is this expected to produce? What metric confirms or refutes it?
4. **Future scalability** — Does this architecture scale to 10x content (30 → 300 blueprints, 4 → 40 themes)?

If you cannot answer all four, the change is incomplete.

---

## UI Verification

For every UI change verify:

□ Desktop
□ Tablet
□ Mobile
□ Dark mode
□ Light mode
□ Keyboard navigation
□ Hover states
□ Focus states
□ Empty states
□ Error states
□ Loading states
□ Visual hierarchy
□ Typography
□ Spacing
□ Accessibility

---

## Premium UI Standard

Every UI should target the quality of:
- Apple
- Linear
- Vercel
- Raycast
- Stripe

Never settle for average layouts.

Always improve:
- spacing
- hierarchy
- typography
- alignment
- animations
- responsiveness
- accessibility

---

## Core Design Principle (Non-negotiable)

> **If the user has to read documentation before understanding the product, the interface has failed.**

This changes everything about how pages are designed.

### The product must flow like this:
```
Open website
↓
Understand in 15 seconds
↓
Play
↓
Generate
↓
Install
```

## Visual Accessibility Requirements (Mandatory)

Every generated template must pass visual contrast validation.

### Requirements

- Never allow foreground and background colors to have insufficient contrast.
- Validate every text color against its background.
- Validate buttons, badges, cards, links, and inputs separately.
- Hover and active states must also pass contrast checks.
- Light and dark themes must both be validated independently.
- Do not rely only on inherited colors.
- Automatically adjust foreground colors if a generated palette creates unreadable combinations.
- Decorative gradients may never reduce text readability.
- Borders must remain distinguishable from their backgrounds.
- Focus rings must remain visible in every theme.
- Before considering a template complete, run an accessibility audit for:
  • Normal text
  • Large text
  • Buttons
  • Inputs
  • Cards
  • Navigation
  • Disabled states
  • Hover states
  • Dark mode
  • Light mode

A visually beautiful template that is difficult to read is considered a failed generation and must be corrected automatically before completion.

## Visual Consistency Requirements (Mandatory)

Every generated experience must feel intentionally designed.

Requirements

- Use a consistent spacing rhythm throughout.
- Radius values must come from the selected Brand Pack.
- Shadow language must be consistent.
- Motion timing must be consistent.
- Border thickness must be consistent.
- Typography scale must remain consistent.
- Section spacing must follow a defined vertical rhythm.
- Cards within the same layout must share the same elevation.
- Icon sizes must remain consistent.
- Primary and secondary buttons must be visually distinguishable.
- Interactive elements must have consistent hover, focus, active, and disabled states.

A page should look like it was designed by one designer, not assembled from unrelated sections.
