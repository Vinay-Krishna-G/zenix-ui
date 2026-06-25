# ZenixUI

**An Experience Library for React.**

ZenixUI is not a component library. It's a complete ecosystem:

- **Blueprint Registry** — 30+ complete, production-ready page experiences
- **Theme Engine** — CSS variable system with 4 design languages (Zenix, Ocean, Night City, Autumn)
- **Theme Studio** — visual customization interface, generates your CLI install command
- **CLI** — `npx zenix-ui` / `pnpm dlx zenix-ui` installs blueprints directly into your project

Core philosophy: **Build Entire Experiences. Not Components.**

---

## Workspace Structure

This is a `pnpm` monorepo. Root: `/Users/vinnu/zenix-ui`.

```
zenix-ui/
├── apps/
│   ├── website/          ← Public product site (Next.js)
│   └── playground/       ← Internal engineering workbench (Vite)
├── packages/
│   ├── blueprints/       ← Blueprint registry + all blueprint components
│   ├── cli/              ← npx zenix-ui CLI tool
│   ├── components/       ← Primitive UI components (Button, Surface, Badge, Input)
│   └── core/             ← Theme engine: CSS variables, Experience provider, ThemeConfig type
```

---

## Two Apps — Why?

### `apps/website` — Next.js (App Router)

**Purpose:** The public product website. Customer-facing.

Contains:
- Blueprint Gallery (`/blueprints`)
- Blueprint Detail pages (`/blueprints/[id]`)
- Theme Studio (`/studio`)
- Framework Docs (`/docs/nextjs`, `/docs/vite`, `/docs/remix`, `/docs/astro`)
- CLI Docs (`/docs/cli`)
- Learn Hub (`/learn`)
- SEO template pages (`/nextjs-templates`, `/react-templates`, `/vite-templates`)

**Run:**
```bash
pnpm --filter website dev
```
**URL:** `http://localhost:3000`

---

### `apps/playground` — Vite React

**Purpose:** Internal engineering workbench. Not customer-facing. Not deployed.

Used by ZenixUI developers to:
- Compare blueprint components side-by-side across all 4 themes
- Test primitive components in isolation
- Validate CSS variable changes without touching the website
- Rapid prototype new blueprints before registering them

**Run:**
```bash
pnpm --filter playground dev
```
**URL:** `http://localhost:5173`

> **Note:** If you are contributing a new blueprint, develop it in `apps/playground` first, then register it in `packages/blueprints/src/registry.ts`.

---

## Package Overview

### `packages/blueprints`

The source of truth for all blueprints. Key files:

- `src/registry.ts` — exports `blueprints: BlueprintMetadata[]` and the `Framework` union type
- `src/[category]/[ThemeName][Category].tsx` — each blueprint component

Adding a blueprint: create the component file, then add an entry to `blueprints` in `registry.ts`.

### `packages/cli`

The `npx zenix-ui` CLI. Entry: `src/index.ts`. Commands:
- `init` — scaffold project, install dependencies, prompt for framework and theme
- `add [id]` — copy a blueprint into the project at `src/blueprints/`

### `packages/core`

The theme engine. Key exports:
- `Experience` — React provider, resolves `ThemeConfig` → CSS custom properties
- `ThemeConfig` — TypeScript type for theme configuration
- `index.css` — CSS variable definitions (must be imported once at root)

### `packages/components`

Optional primitive components: `Button`, `Surface`, `Badge`, `Input`. Used inside blueprint components and on the website. Do not expose internal state — they are purely presentational.

---

## Development Commands

```bash
# Install all dependencies
pnpm install

# Run website (public site)
pnpm --filter website dev

# Run playground (internal workbench)
pnpm --filter playground dev

# Build website (production check)
pnpm --filter website build

# Build CLI
pnpm --filter cli build

# Build all packages
pnpm build
```

---

## Blueprint Taxonomy

| Term | Definition |
|---|---|
| **Blueprint** | A complete page experience. Install via CLI. You own the source. |
| **Theme** | A design language: Zenix, Ocean, Night City, or Autumn |
| **Theme Engine** | The CSS variable system in `packages/core` |
| **Theme Studio** | The visual customization interface at `/studio` |
| **Framework** | `'react' \| 'nextjs' \| 'vite' \| 'remix' \| 'astro'` |

Never use these terms interchangeably. The vocabulary is enforced by the `Framework` union type and the `AGENTS.md` workspace rules.

---

## Vocabulary Rules

ZenixUI has a vocabulary system that must be consistent across all customer-facing copy:

```
ZenixUI is an Experience Library.
Experiences are delivered as Blueprints.
Blueprints are customized in Theme Studio.
Blueprints are installed via CLI.
```

- Product noun: **Blueprint** (not "experience", not "template", not "component")
- Company tagline: **Experience Library** (used at company level only, not as product noun)
- SEO exception: "template" is used in article titles and `/templates/*` routes as an intentional SEO keyword — this is a controlled exception, not a vocabulary leak

---

## Contributing

See `AGENTS.md` in `.agents/` for workspace rules, reporting format, and implementation quality requirements.
