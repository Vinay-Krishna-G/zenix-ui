# ZenixUI — Architecture Guidelines
# Extracted from AGENTS.md

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

## Taxonomy (use consistently, never deviate)

- **Blueprint** — a complete page experience (not "template", not "experience" in nav)
- **Theme Studio** or **Experience Studio** — never "Visual Builder"
- **Theme Engine** — the CSS variable system
- **CLI** — `npx zenix-ui` / `pnpm dlx zenix-ui`
- **Framework** — Next.js | Vite | Remix | Astro (typed union, never raw strings)
- **Section** — an independently installable UI block (header, footer, hero, etc.)

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

## Architecture Freeze (Mandatory)

**Architecture is frozen.** If a proposed implementation requires changing the architecture, stop implementation and explain exactly why the current architecture cannot support the feature. Do not redesign by default.

From this point onward, architecture is frozen. Do not propose new architectures, naming systems, abstractions, engines, or implementation plans unless explicitly requested.
