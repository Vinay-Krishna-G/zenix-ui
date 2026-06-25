# apps/website

The public product website for ZenixUI. Built with Next.js App Router.

**URL (production):** https://zenixui.com  
**URL (local):** http://localhost:3000

---

## What This App Is

This is the customer-facing surface of ZenixUI. It is NOT an internal tool.

Everything in `src/app/` is a public route that gets indexed by Google and seen by customers.

---

## Running Locally

```bash
# From the monorepo root
pnpm --filter website dev

# Or from this directory
pnpm dev
```

---

## Route Map

| Route | Purpose |
|---|---|
| `/` | Homepage — product positioning, how it works, featured blueprint |
| `/blueprints` | Blueprint Gallery — filterable grid of all 30+ blueprints |
| `/blueprints/[id]` | Blueprint Detail — live preview, CLI command, install guide |
| `/studio` | Theme Studio — customize palette/radius/motion, generate CLI command |
| `/themes` | Theme overview — Zenix, Ocean, Night City, Autumn |
| `/docs` | Docs index — The Zenix Workflow |
| `/docs/cli` | CLI documentation |
| `/docs/nextjs` | Next.js framework setup guide |
| `/docs/vite` | Vite React framework setup guide |
| `/docs/remix` | Remix framework setup guide |
| `/docs/astro` | Astro framework setup guide (Beta) |
| `/learn` | Learn Hub — SEO articles |
| `/learn/[slug]` | Individual article |
| `/nextjs-templates` | SEO page — Next.js template keywords |
| `/react-templates` | SEO page — React template keywords |
| `/vite-templates` | SEO page — Vite template keywords |
| `/templates/[slug]` | SEO template pages (react-dashboard-template, etc.) |
| `/roadmap` | Public roadmap |

---

## Key Files

```
src/
├── app/
│   ├── layout.tsx              ← Root layout: nav, metadata, Providers wrapper
│   ├── page.tsx                ← Homepage
│   ├── globals.css             ← Global CSS resets
│   ├── blueprints/
│   │   ├── page.tsx            ← Gallery (server component, passes data)
│   │   ├── ExperienceGalleryClient.tsx  ← Gallery UI (client component)
│   │   └── [id]/
│   │       ├── page.tsx        ← Blueprint detail (server component)
│   │       └── BlueprintClientView.tsx  ← Detail UI (client component)
│   ├── studio/
│   │   ├── page.tsx            ← Studio wrapper
│   │   └── ThemeStudioClient.tsx  ← Full studio UI (client component)
│   └── docs/
│       ├── layout.tsx          ← Docs sidebar layout
│       ├── page.tsx            ← Docs index
│       ├── FrameworkTabs.tsx   ← Interactive framework setup tabs
│       ├── nextjs/page.tsx     ← Next.js guide
│       ├── vite/page.tsx       ← Vite guide
│       ├── remix/page.tsx      ← Remix guide
│       └── astro/page.tsx      ← Astro guide
├── components/
│   ├── Providers.tsx           ← Experience provider wrapper
│   ├── FrameworkTemplatesView.tsx
│   └── articles/               ← Learn Hub article components
```

---

## Build

```bash
pnpm --filter website build
```

Must produce:
- Zero TypeScript errors
- Zero build errors
- All 46 static pages generated

---

## Vocabulary Rules

All customer-visible copy in this app must use the ZenixUI vocabulary system:

- **Blueprint** — the product noun (what gets installed)
- **Theme Studio** — the visual customizer at /studio
- **Experience Library** — company tagline only, not a product noun
- Never: "template", "component", "experience" as a product noun

See `.agents/AGENTS.md` in the monorepo root for the complete ruleset.
