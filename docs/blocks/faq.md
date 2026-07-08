# Block Justification: FAQ

## Purpose
Handles common objections, pricing queries, or support questions before the final call to action.

## Problem it solves
Visitors need a way to scan questions quickly without being overwhelmed by a wall of text. The accordion interaction pattern allows them to expand only the information relevant to their concerns.

## Why existing blocks cannot solve it
No existing block supports collapsible UI state (accordions).

## Reusable in which experiences?
- Business Landing: High
- SaaS: High
- AI Startup: High
- Finance: High
- Healthcare: High
- Agency: High
- Portfolio: Medium
- Restaurant: Low

**Expected reuse:** High (Almost every marketing funnel)

## Variants
- `accordion`: A vertical list of questions that expand on click (implemented).

## Responsive behavior
- Stays single-column on mobile.
- Constrained max-width on desktop to prevent uncomfortable reading lengths.

## Accessibility notes
- Keyboard navigable (Tab, Space/Enter to toggle).
- Appropriate `aria-expanded` and `aria-controls` attributes required for screen readers.

## Editable fields
- `title` (text)
- `subtitle` (textarea)
- `faqs` (array)
  - `question` (text)
  - `answer` (textarea)

## Future roadmap
- Add `minimal` variant without borders.
- Add `two-column` variant for dense FAQ sections.
