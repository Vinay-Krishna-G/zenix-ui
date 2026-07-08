# Block Justification: Stats

## Purpose
Highlights key performance indicators (KPIs), milestones, or usage metrics to establish credibility and scale.

## Problem it solves
While the `Features` block can hold numbers, its visual hierarchy prioritizes a balanced title and description. A `Stats` block flips this hierarchy, making the numeric value massive and the description secondary.

## Why existing blocks cannot solve it
Shoehorning stats into `Features` results in poor typography scaling for numbers and incorrect structural semantics.

## Reusable in which experiences?
- Business Landing: Medium
- SaaS: High
- AI Startup: Medium
- Finance: High
- Healthcare: High
- Agency: High
- Portfolio: Medium
- Restaurant: Low

**Expected reuse:** High

## Variants
- `grid`: A horizontal or grid layout of metrics (implemented).

## Responsive behavior
- Grids wrap from 1 column to 2 to 4 on large screens.
- Clean dividers (border-left or border-t) based on orientation.

## Accessibility notes
- Numbers should be read logically before descriptions.

## Editable fields
- `title` (text)
- `subtitle` (textarea)
- `stats` (array)
  - `value` (text)
  - `label` (text)
  - `description` (textarea)
  - `icon` (text)

## Future roadmap
- Add animation to count up from zero on scroll intersection.
