# ZenixUI — Agent Rules
# Applied to every session in this workspace.

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
Show ONLY the final code as it exists now.
Do NOT show git diffs.
Do NOT show before/after.
Do NOT show removed code.
Show only the final state.

Architecture Review:
- Why this implementation was chosen
- Alternatives considered
- Tradeoffs
- Future implications
```

---

## Verification: Mandatory After Every Session

Always run the build and show the actual output.

```
Command Run:
pnpm --filter website build

Terminal Output:
<exact text — never summarized>
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
2. Framework Docs
3. Studio Command Generator completeness
4. Palette Library
5. Framework SEO Pages (700+ words each)
6. Blueprint Category Hubs
7. Learn Hub expansion (articles to 1500+ words)
8. Community Themes
9. Marketplace

Marketplace is NOT current priority.
