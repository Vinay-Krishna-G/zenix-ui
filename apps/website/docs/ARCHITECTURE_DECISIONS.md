# Architecture Decisions Record (ADR)

This document tracks all significant architectural and design decisions made in the ZenixUI repository. These records help future contributors understand *why* a certain path was chosen, the context at the time, and the tradeoffs involved.

---

## ADR-001: Live React Previews

**Status:** Accepted
**Date:** 2026-07-01

### Context & Reason
Initially, the preview architecture relied on static PNG screenshots stored in `/public/previews/` and mapped via a `preview-manifest.json`. This approach caused numerous issues:
- **404 Errors:** Missing or misnamed PNGs caused constant network errors (`GET /previews/... 404`).
- **Maintenance Burden:** Generating screenshots every time a component changed was tedious and prone to desynchronization.
- **Stale Previews:** Users often saw outdated designs that didn't match the live components they were installing.

### Decision
We completely removed the dependency on PNG preview images and replaced them with live React component rendering scaled to fit inside preview cards.

### Tradeoffs
- **Slightly higher CPU usage:** The browser must parse and render the actual React tree for each thumbnail instead of a simple raster image.
- **Always Accurate:** Previews can never be stale. They perfectly reflect the underlying code.
- **Zero 404s:** No external asset dependencies means no broken image links.
- **No Screenshots Required:** Saves significant developer time during blueprint creation.

---

## ADR-002: Experience-First Domain Model

**Status:** Accepted
**Date:** 2026-07-01

### Context & Reason
To build a true website marketplace, users shouldn't have to assemble primitive buttons and cards to see what a website looks like. They need a top-down approach where they select an industry or "experience" and work backward to the underlying code.

### Decision
We structured the core data model hierarchically, starting from high-level experiences down to exact blueprint components:
`Experience` → `Industry Payload` → `Identity (Brand)` → `Variant` → `Blueprint Component`.

### Tradeoffs
- **Scalability:** It's extremely easy to add a new "Experience" or map an existing blueprint to a new brand.
- **Reuse:** A single blueprint component can be reused across multiple variants and experiences, reducing code duplication.
- **Complexity:** The abstraction requires a resolution step (e.g., `PreviewResolver`) to map a combination of (Experience + Brand + Variant + Aesthetic) to a concrete React component.
