# ZenixUI — Agent Rules
# Applied to every session in this workspace.

---

## Workspace Guidelines

This repository has strict, specialized guidelines. You MUST read the relevant guidelines for your current task before writing any code.

1. **Architecture & Roadmap**: Read `docs/guidelines/architecture.md`
   *When to read: At the beginning of any session or when planning new engines, components, or folders.*

2. **UI & Design Premium Standards**: Read `docs/guidelines/ui.md`
   *When to read: When modifying `apps/website`, `packages/components`, or any visual interface.*

3. **SEO & Copywriting**: Read `docs/guidelines/seo.md`
   *When to read: When creating marketing pages, documentation, or funnel adjustments.*

4. **Reporting & Coding Standards**: Read `docs/guidelines/reporting.md`
   *When to read: ALWAYS. This governs how you output your code and terminal logs. Contains the Non-Negotiable Rule 14 for API changes.*

---

## Layout Rules

**Never fix layout bugs by adding more CSS.**
Find the element that owns the layout. Fix it there.
- No nested overflow hacks.
- No translateY hacks.
- No negative margins.
- No arbitrary heights.

---

## UI Verification Rules

Every UI task ends like this:
1. Build
2. Run locally
3. Capture screenshots
4. Human review screenshots
5. Fix regressions
6. Repeat until visually approved

Never declare UI complete without screenshot evidence. Never claim "PASS" based solely on automated checks. Every UI verification must include a visual review. If text is unreadable, spacing is broken, scrolling is awkward, or layouts collapse—even without console errors—the result is FAIL. Feature work must stop until all visual regressions are resolved.

---

# 1. Architecture Freeze

The architecture is frozen.

Do NOT:

- rename routes
- move folders
- redesign layouts
- introduce new abstractions
- split components
- merge components
- rewrite components
- change package structure
- rename exported APIs
- change navigation structure

Unless explicitly instructed.

---

# 2. Product Freeze

Do NOT change product decisions unless requested.

Examples:

- CTA copy
- page copy
- branding
- icons
- navigation items
- menu structure
- colors
- spacing
- typography
- animations

Fix bugs. Do not redesign.

---

# 3. Surgical Edits

Prefer the smallest possible change.

Target: < 30 changed lines

Good:
- fix import
- fix overflow
- fix hydration
- fix state bug

Bad:
- rewrite entire component
- replace file
- reorganize JSX

---

# 4. Rewrite Guard

Before replacing an entire file ask yourself:

"Can this be solved with a smaller edit?"

If YES — do NOT rewrite.

If NO — explain why before proceeding.

---

# 5. Preserve Existing Structure

Never duplicate:
- imports
- JSX
- styles
- hooks
- exports

Never leave:
- dead code
- commented legacy code
- duplicate branches

---

# 6. One Objective

Each task has ONE objective.

Examples: Fix sticky navbar. Fix hydration. Improve accessibility.

Never mix unrelated improvements.

---

# 7. No Opportunistic Refactoring

If you notice another improvement — do NOT implement it.

Mention it under **Next Recommendation** only.

---

# 8. Verification Required

Every task must finish with:
- Build
- TypeScript
- Visual verification (if UI)
- Console verification

Stop immediately if verification fails.

---

# 9. Response Format

Return only:

## Root Cause
## Files Changed
## Verification
## Next Recommendation

No reasoning. No diary. No chain of thought. No implementation narrative.

---

# 10. Self Review

Before responding verify:

- [ ] No duplicate imports
- [ ] No duplicate JSX
- [ ] No duplicate CSS
- [ ] No dead code
- [ ] Build passes
- [ ] TypeScript passes
- [ ] No architecture drift
- [ ] No product drift

If any check fails — fix it before responding.

---

# 11. Escalation Rules

Stop immediately if the task requires:
- architecture decision
- UX redesign
- product decision
- API redesign
- routing redesign

Ask for confirmation instead.

---

# 12. Definition of Done

A task is complete only when:

- ✓ Objective solved
- ✓ Minimal code changes
- ✓ Build succeeds
- ✓ No regressions
- ✓ Existing product preserved

---

# 13. Diff Budget

Default maximum diff:

- 1 file preferred
- 3 files maximum
- 50 changed lines preferred
- 150 changed lines absolute maximum

If more changes are required:

STOP. Explain why. Wait for approval.
