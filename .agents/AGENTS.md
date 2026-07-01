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

## Core Operational Rules

1. **Architecture Freeze**: Unless the user explicitly says "just give me a plan," implement immediately after writing the plan. Do not stop and ask for permission if the architecture is frozen. Your responsibility is implementation.
2. **The 5+ Files Rule (Mandatory)**: When more than 5 files are modified, automatically generate `updated.md` containing the complete contents of every modified and newly created file instead of trying to inline them. Never omit a file because of response length.

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
