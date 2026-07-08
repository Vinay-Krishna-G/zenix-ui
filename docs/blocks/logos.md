# Block Justification: Logo Cloud

## Purpose
Establishes immediate social proof by displaying trusted customers, partners, or integration brands.

## Problem it solves
Visitors need to quickly understand if a product is trusted by companies similar to theirs. While `Features` blocks can hold images, they emphasize descriptive text. A Logo Cloud requires dense, structured image presentation without descriptions.

## Why existing blocks cannot solve it
The `Features` block forces a structural layout (Title, Subtitle, Icon) that breaks the visual rhythm of a dense logo grid or ticker.

## Reusable in which experiences?
- Business Landing: High
- SaaS: High
- AI Startup: High
- Finance: High
- Healthcare: High
- Agency: High
- Portfolio: Low
- Restaurant: Low

**Expected reuse:** High

## Variants
- `grid`: A static grid of logos (implemented).

## Responsive behavior
- Grids wrap gracefully (2 columns on mobile, expanding to 4-6 on desktop).
- Opacity shifts on hover to draw attention.

## Accessibility notes
- Requires meaningful `alt` text for each logo image for screen readers.

## Editable fields
- `label` (text)
- `logos` (array)
  - `name` (text)
  - `image` (text - URL)
  - `alt` (text)

## Future roadmap
- Add `ticker` variant for infinite scrolling logos.
- Add grayscale toggle for uniform visual presentation.
