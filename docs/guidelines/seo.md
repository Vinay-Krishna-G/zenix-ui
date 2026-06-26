# ZenixUI — SEO Guidelines
# Extracted from AGENTS.md

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
