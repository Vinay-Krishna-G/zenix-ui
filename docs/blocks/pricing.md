# Pricing Block

## Purpose
To outline subscription tiers and costs. Should immediately communicate **Enterprise Software (Trust & Clarity)**.

## Variants
- `cards`: Side-by-side cards with a highlight for the most popular plan.

## Editable Fields
- `title` (text)
- `subtitle` (textarea)
- `plans` (array)
  - `name` (text)
  - `description` (textarea)
  - `price` (text)
  - `isPopular` (boolean)
  - `buttonText` (text)

## Responsive Notes
- Grids adapt gracefully from 1 column on mobile to 3 columns on desktop.
- Hover states (`hover:-translate-y-2`) enhance interactivity on desktop but degrade gracefully on touch devices.

## Accessibility
- Distinct visual highlight for the primary (popular) plan.
- High contrast pricing numbers and text.

## Block Scores
```text
Pricing v1

Visual        9/10
Responsive    9/10
Accessibility 9/10
Editing       9/10
Performance  10/10
Reuse         9/10
```
