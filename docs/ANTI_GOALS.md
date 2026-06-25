# ZenixUI Anti-Goals

This document defines what ZenixUI is **NOT**. By explicitly stating what we will not build, we prevent feature creep, protect the developer experience, and maintain a sharp product focus.

## We are NOT another Component Library
We do not exist to provide you with 50 different variations of a dropdown or a raw button component. There are plenty of great raw component libraries (Radix, HeadlessUI). ZenixUI is an **Experience OS** focused on composition (Sections and Blueprints), not low-level primitives.

## We are NOT a Tailwind UI clone
Tailwind UI provides static blocks of code that you copy, paste, and manually adapt. ZenixUI provides a conversational CLI that acts as a dependency bundler and an Adaptation Engine that morphs the code to fit your project natively before it even reaches your filesystem.

## We are NOT a Theme Pack
We do not sell pre-configured "Dark Mode" templates. We sell **Recipes**. A Recipe is a highly scalable set of instructions applied to our semantic Foundation Engines (Typography, Spacing, Radius, Motion, Effects, Accessibility) that can radically alter the feel of any structural Variant without touching the code.

## We are NOT a "No-Code" Visual Builder
While we have a visual Theme Studio and an Inspiration Lab, ZenixUI is fundamentally built for developers. We will never hide the underlying code, and we will never introduce proprietary rendering runtimes that lock users into our platform.

## We are NOT a monolithic CSS framework
We will not build a monolithic utility class system. ZenixUI is fundamentally token-driven, relying on purpose-based CSS variables (`--zx-radius-control`) that map dynamically depending on the active Recipe.

## We are NOT going to break user code
The Adaptation Engine and the CLI will operate under a strict policy: **Never directly modify user code or configurations without explicit preview and consent.** We generate compatible code blocks rather than silently mutating existing project structures.
