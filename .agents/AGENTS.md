# ZenixUI — Agent Rules
# Applied to every session in this workspace.

---

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

## Platform Roadmap (Phases — never skip ahead)

```
Phase 1 — Foundation (current)
  Blueprint Engine
  Section Library (headers, footers, heroes)
  CLI (section install path syntax)
  Theme Studio

Phase 2 — Design Theory Engine
  Theme Wheel (interactive, live preview)
  Theme Recipes (Colors + Typography + Spacing + Motion + Effects)
  Color Theory Engine
  Typography Studio (Apple, Linear, Stripe presets)

Phase 3 — AI Layer
  Mood-based palette generation
  Industry Presets (Healthcare, Finance, Gaming, Education)
  Section Marketplace
  Community Recipes

Phase 4 — Experience Builder
  Visual Editor (no-code section mixing)
  Live inline editing (click Logo → upload logo)
  Cloud Sync
  Marketplace
```

Do NOT skip phases. Do NOT build Phase 3 features while Phase 1 is incomplete.

---

## Reporting: Mandatory Format for Every Modified File

You are not allowed to say "Edited file", "Implemented feature", "Added support", "Integrated analytics",
or "Build passed" without showing proof.

For EVERY modified file, use this exact structure:

```
File:
<absolute path>

Purpose:
Why this file changed. One paragraph.

Updated Code:
Show ONLY the modified section as it exists in the final file.
Do NOT show git diffs.
Do NOT show before/after.
Do NOT show removed code.
Show the final state of the changed code block.
If the file is large, show only the relevant modified section — never omit it entirely.

Architecture Review:
- Why this implementation was chosen
- Alternatives considered
- Tradeoffs
- Future implications
```

For files containing customer-visible copy (homepage, OG metadata, studio headers, gallery headings):

```
Conversion Hypothesis:
- What behavior change this copy is expected to produce
- Why this framing was chosen over alternatives
- What metric would confirm or refute the hypothesis
```

---

## Verification: Mandatory After Every Session

Always run the build and show the COMPLETE output — never truncated.

```
Command Run:
pnpm --filter website build

Terminal Output:
<exact text — never summarized, never truncated>
```

Always label terminal output:

🟢 SUCCESS TERMINAL OUTPUT

or

🔴 ERROR TERMINAL OUTPUT

Never mix them. Never replace output with "build passed" or "compiled successfully".

---

## Error Reporting Format

If a build fails, show:

```
File: <path>
Line: <number>
Column: <number>
Error: <exact TypeScript / Next.js / Runtime error text>

Root Cause: <exact explanation>
Fix Applied: <exact change>
Terminal Output After Fix: <full output>
```

---

## Implementation Quality Rules

Do not implement placeholder UX.

Every user-facing page must answer within the first viewport:
1. What is this?
2. Why should I care?
3. How do I use it?
4. What happens next?

Never create empty SEO pages.
Never create thin pages.
Never create pages that are only: Title + Grid + CTA.

Every SEO page must contain:
- H1 with target keyword
- 100–150 word intro paragraph
- Benefits of using ZenixUI for this use case
- Usage / code examples
- Featured blueprints
- FAQ section (minimum 3 questions)
- Studio CTA
- Minimum 700 words

---

## Funnel Rule: Audit Before Creating

Before creating any new page, audit the existing funnel:

```
Homepage
↓
Blueprint Gallery (/blueprints)
↓
Blueprint Detail (/blueprints/[id])
↓
Studio (/studio)
↓
Framework Docs (/docs/[framework])
↓
CLI Install
↓
Installed Project
```

Every step must push the user to the next step.
A page that doesn't link forward in the funnel is incomplete.
Do not add SEO pages or articles until the core funnel is tight.

---

## Product Positioning Rules

ZenixUI must be understood within 10 seconds.

Homepage must communicate:
> Build Entire Experiences. Not Components.

Studio must communicate:
> Customize → Generate → Install

Blueprint pages must communicate:
> Preview → Copy → Install

Docs must communicate:
> Choose Framework → Follow Steps → Done

No ambiguity.
No internal terminology leaks.
No engineering-only concepts visible to customers.

Target customer mental model:
> "This is like Tailwind UI meets Vercel templates, but with full theme generation and a CLI."

If a random React developer shown the site for 15 seconds says
"Looks like another template gallery" — the positioning is failing.

---

## ZenixUI Is NOT:
- A component library
- A Tailwind UI clone
- A shadcn/ui clone
- A page builder
- A visual builder

## ZenixUI IS:
- Theme Engine
- Experience Library
- Blueprint Registry
- CLI Distribution Platform

Core philosophy: Build Entire Experiences. Not Components.

---

## Taxonomy (use consistently, never deviate)

- **Blueprint** — a complete page experience (not "template", not "experience" in nav)
- **Theme Studio** or **Experience Studio** — never "Visual Builder"
- **Theme Engine** — the CSS variable system
- **CLI** — `npx zenix-ui` / `pnpm dlx zenix-ui`
- **Framework** — Next.js | Vite | Remix | Astro (typed union, never raw strings)

---

## Code Quality Rules

Before implementing anything:
1. Audit existing code in the affected files
2. Verify assumptions (grep for references, check types)
3. Show files inspected
4. Explain architecture impact
5. Then implement

Never blindly modify files.

---

## SEO Philosophy

Target high-intent keywords:
- react dashboard template
- nextjs dashboard template
- portfolio template react
- admin dashboard ui
- vite portfolio template
- dracula palette
- tokyo night theme
- catppuccin colors

Do NOT chase "ZenixUI" branded searches.

---

## Priority Order (current)

1. Funnel integrity (every page connects to next)
2. Theme Wheel + Color Theory Engine
3. Framework Docs completeness
4. Studio Command Generator completeness
5. Section Library architecture
6. Framework SEO Pages (700+ words each)
7. Blueprint Category Hubs
8. Learn Hub expansion (articles to 1500+ words)
9. Community Themes
10. Marketplace

Marketplace is NOT current priority.
New themes are NOT the priority — the engine is the priority.

---

## Execution Rule: Never Stop After a Plan

Unless the user explicitly says "just give me a plan," implement immediately after writing the plan.

Do not write:
> "Ready to implement when you approve."

Do write:
> "Here is the plan. Implementing now."

Then implement.

---

## End-of-Session Summary (Mandatory)

End every session with this exact block:

```
## Session Summary

### Files Modified
- path/to/file — what changed

### Files Created
- path/to/file — what it does

### Files Deleted
- (none) or list

### Verification
Command: <exact command>
Result: 🟢 SUCCESS / 🔴 ERROR
Pages generated: N
TypeScript errors: 0

### Remaining Technical Debt
- List of known issues not fixed this session

### Recommended Next Step
One sentence. The single most important next action.
```

Never omit this block. Never summarize it as "session complete."

---

## UI Change Justification (Mandatory)

For every UI change, explain:

1. **UX improvement** — How does this make the interface easier or more intuitive for a user?
2. **Developer Experience improvement** — How does this reduce friction for a developer adopting ZenixUI?
3. **Conversion impact** — What user behavior change is this expected to produce? What metric confirms or refutes it?
4. **Future scalability** — Does this architecture scale to 10x content (30 → 300 blueprints, 4 → 40 themes)?

If you cannot answer all four, the change is incomplete.

---

## Architecture Direction: Design Platform (Not Component Library)

ZenixUI long-term architecture:

```
ZenixUI
├── Experience Library      ← company identity
├── Blueprint Library       ← complete pages
├── Section Library         ← installable sections (header, footer, hero)
├── Pattern Library         ← reusable layout patterns
├── Theme Studio            ← visual customizer
├── Theme Wheel             ← emotion-first design language selector
├── Color Theory Engine     ← HSL palette generation from primary color
├── Typography Engine       ← preset type systems (Apple, Linear, Stripe)
├── Theme Recipes           ← composable (Colors: Ocean + Typography: Apple)
├── CLI                     ← npx zenix-ui add dashboard/header
└── Marketplace             ← future
```

Key architectural shifts approved by product owner:

1. **Blueprint = Collection of Sections** (not a monolithic file)
2. **CLI path syntax**: `npx zenix-ui add dashboard/header`
3. **Per-section theming**: each section receives its own `theme=` prop
4. **AI-friendly comments** inside all generated code
5. **Component metadata**: every section exports `metadata: SectionMetadata`

These are NOT yet implemented. See `architecture.md` for the approved design.

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

NOT like this:
```
Docs
↓
Understand
↓
Use
```

### Homepage funnel (approved direction):
```
Hero (interactive)
↓
Interactive Demo
↓
Theme Wheel (live preview)
↓
Section Library
↓
Blueprint Gallery
↓
Studio
↓
Install (CLI)
↓
Docs
```

Every step is interactive. Users learn by playing.

---

## Mandatory Response Format (Before AND After Code Changes)

### Before modifying ANY file:
1. Audit the affected files (show paths inspected)
2. Explain why the change improves: UX, DX, SEO, conversion, accessibility, or scalability
3. Explain alternatives and why they were rejected

### After modifying ANY file, ALWAYS include:

**Modified Files:**
- Full relative path
- One paragraph: why this file changed

**Updated Code:**
- Show the actual modified code or the relevant changed section
- Never omit code with "edited" or "updated" summaries
- Never show diffs — show final state only

**Terminal Output — label with exactly one of:**

🟢 SUCCESS
```
<exact terminal output>
```

🔴 ERROR
```
<exact terminal output>
```

🟡 WARNING
```
<exact terminal output>
```

**If a build fails:**
- Explain the exact root cause
- Show the fix applied
- Re-run the build
- Include the successful terminal output in full

**Never:**
- Stop after presenting only an implementation plan when implementation was requested
- Fabricate build results or terminal logs
- Truncate terminal output
- Use "build passed" or "compiled successfully" without showing the actual output

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

## ZenixUI Is NOT:
- A component library
- A Tailwind UI clone
- A shadcn/ui clone
- A page builder
- A visual builder

## ZenixUI IS:
- Theme Engine
- Experience Library
- Blueprint Registry
- CLI Distribution Platform

Core philosophy: Build Entire Experiences. Not Components.

---

## Taxonomy (use consistently, never deviate)

- **Blueprint** — a complete page experience (not "template", not "experience" in nav)
- **Theme Studio** or **Experience Studio** — never "Visual Builder"
- **Theme Engine** — the CSS variable system
- **CLI** — `npx zenix-ui` / `pnpm dlx zenix-ui`
- **Framework** — Next.js | Vite | Remix | Astro (typed union, never raw strings)
- **Section** — an independently installable UI block (header, footer, hero, etc.)

---

## SEO Philosophy

Target high-intent keywords:
- react dashboard template
- nextjs dashboard template
- portfolio template react
- admin dashboard ui
- vite portfolio template
- dracula palette
- tokyo night theme
- catppuccin colors
- react footer component
- glassmorphism navbar react
- nextjs hero section

Do NOT chase "ZenixUI" branded searches.

---

## Priority Order (current)

1. Funnel integrity (every page connects to next)
2. Section Library (headers, footers, heroes — each independently installable)
3. Night City / theme aesthetic polish
4. Theme Wheel + Color Theory Engine
5. Framework Docs completeness
6. Studio Command Generator completeness
7. Framework SEO Pages (700+ words each)
8. Blueprint Category Hubs

Marketplace is NOT current priority.
New themes are NOT the priority — the engine and the sections are the priority.

---

## Execution Rule: Never Stop After a Plan

Unless the user explicitly says "just give me a plan," implement immediately after writing the plan.

Do not write:
> "Ready to implement when you approve."

Do write:
> "Here is the plan. Implementing now."

Then implement.

---

## End-of-Session Summary (Mandatory)

End every session with this exact block:

```
## Session Summary

### Files Modified
- path/to/file — what changed

### Files Created
- path/to/file — what it does

### Files Deleted
- (none) or list

### Verification
Command: <exact command>
Result: 🟢 SUCCESS / 🔴 ERROR
Pages generated: N
TypeScript errors: 0

### Remaining Technical Debt
- List of known issues not fixed this session

### Recommended Next Step
One sentence. The single most important next action.
```

Never omit this block. Never summarize it as "session complete."

---

## UI Change Justification (Mandatory)

For every UI change, explain:

1. **UX improvement** — How does this make the interface easier or more intuitive for a user?
2. **Developer Experience improvement** — How does this reduce friction for a developer adopting ZenixUI?
3. **Conversion impact** — What user behavior change is this expected to produce? What metric confirms or refutes it?
4. **Future scalability** — Does this architecture scale to 10x content (30 → 300 blueprints, 4 → 40 themes)?

If you cannot answer all four, the change is incomplete.

---

## Architecture Freeze (Mandatory)

**Architecture is frozen.** If a proposed implementation requires changing the architecture, stop implementation and explain exactly why the current architecture cannot support the feature. Do not redesign by default.

---

# Mandatory Implementation & Reporting Rules (Non-Negotiable)

From this point onward, architecture is frozen. Do not propose new architectures, naming systems, abstractions, engines, or implementation plans unless I explicitly request them.

Your responsibility is implementation.

## 1. Complete Code Output (Required)

For EVERY modified or newly created file:

* Show the COMPLETE file contents.
* Never show only snippets or diffs.
* Never omit files that were modified.
* Never summarize code changes.

If a file is too large to fit in one response:

* Create a file named `updated.md` in the artifacts directory.
* Include the complete contents of every modified or newly created file inside `updated.md`.
* Organize it like:

```
# File
apps/website/src/app/page.tsx

```tsx
<complete file>
```

# File
packages/core/src/foundations/layout.ts

```ts
<complete file>
```
```

Do NOT omit any file.

---

## 2. Every Modified File Must Be Listed

After implementation include exactly:

```
Modified Files

1.
path/to/file.tsx
Reason:
...

2.
path/to/file.ts
Reason:
...

Created Files

Deleted Files
```

No file may be skipped.

---

## 3. Terminal Output

Always include ALL terminal commands executed.

Separate them into:

🟢 Successful Commands
```
pnpm install
pnpm build
...
```

🟡 Warnings
```
...
```

🔴 Failed Commands
```
...
```

If a command failed:
- explain why
- show the fix
- rerun it

---

## 4. Build Verification

Always include:

```
Framework:
Next.js version

Pages generated:

TypeScript errors:

ESLint errors:

Warnings:

Build duration:

Bundle size (if available):

JS changes:

CSS changes:
```

Never simply say
"Build succeeded."

---

## 5. Evidence Rule

Never say
"Implemented"
unless all of the following exist:
✓ Code
✓ Build
✓ Verification
✓ Reachable UI
✓ No TypeScript errors

---

## 6. UI Verification

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

## 7. Premium UI Standard

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

## 8. No Placeholder Implementations

Never generate placeholder code.
Never fake an implementation.
Never create TODO implementations merely to satisfy a checklist.

If something cannot be completed:
Stop.
Explain why.
Provide the exact blocking issue.

---

## 9. Architecture Freeze

Architecture is frozen.

If implementation requires changing the architecture:
STOP.
Explain exactly:
- why the current architecture is insufficient
- what breaks
- what alternatives were considered

Do not redesign automatically.

---

## 10. Focus

Do not spend responses rewriting implementation plans.
Spend responses writing production-quality code.

The priority is:
1. Implementation
2. Bug fixes
3. UI polish
4. Documentation

Not architecture.

---

## 11. Response Format

Every implementation response must follow this order:

1. What is being implemented
2. Dependency impact analysis
3. Complete code for EVERY modified file (or `updated.md` if too large)
4. Complete code for EVERY newly created file
5. Terminal commands
6. Terminal output
7. Build verification
8. Manual verification
9. Remaining technical debt
10. Next recommended task

---

## 12. Complete File Accountability (Mandatory)

For every implementation response:

### Modified Files
List **every** modified file.
For **every file**, include one of the following:
1. The complete file contents inline.
OR
2. The complete file inside `updated.md`.

There must never be a modified file whose contents are omitted.

### Created Files
Apply the same rule.
Every created file must appear in full.

### Deleted Files
List every deleted file and explain why it was removed.

### Large Responses
If the response exceeds the model's output limit:
* Create `updated.md`.
* Include **all modified files**.
* Include **all created files**.
* Include **all deleted file names**.
* Continue writing into `updated.md` until every file has been included.

Never omit a file because of response length.

### No Partial Code
Never output:
* "..."
* "remaining code unchanged"
* "rest of file omitted"
* partial snippets

Every file must be complete.
If the response limit prevents this:
Use `updated.md`.

---

## 13. High-Volume Modification Rule

If more than 5 files are modified in a session:
Automatically create `updated.md` in the artifacts directory instead of trying to inline code.
Do not ask for permission.
Do it automatically.

## 14. API Change Justification (Mandatory)

Before changing any public component API:

1. List every existing usage.
2. State whether the API is:
   - Backward compatible
   - Soft deprecated
   - Breaking
3. If breaking:
   a. Explain why.
   b. Provide migration strategy.
   c. Update every usage.
   d. Verify zero regressions.

