import { ProjectDNA } from './scanner';

export type AdaptationMode = 'native' | 'recipe' | 'isolated';

export function adaptComponent(content: string, dna: ProjectDNA, mode: AdaptationMode): string {
  if (mode === 'isolated') {
    // Isolated mode: leave exact Zenix tokens and structures alone.
    return content;
  }

  let adapted = content;

  if (mode === 'native') {
    // Native Mode maps ZenixUI internal CSS variables to standard Tailwind classes or the host's CSS variables.
    
    // Example 1: Replace radius variables with host radius
    // ZenixUI typically uses var(--zx-radius-md) etc.
    // If we have a tailwind project with a standard --radius, we map to it.
    if (dna.radius) {
      adapted = adapted.replace(/var\(--zx-radius-[a-z]+\)/g, 'var(--radius)');
    } else if (dna.tailwind) {
      // If we know tailwind is used, convert inline border-radius to classes if we can
      // For simplicity in Native mode without an AST, we swap the var for standard tailwind variables.
      adapted = adapted.replace(/var\(--zx-radius-[a-z]+\)/g, 'var(--radius, 0.5rem)');
    }

    // Example 2: Replace primary color variables with host primary
    if (dna.colors.primary) {
      adapted = adapted.replace(/var\(--zx-primary\)/g, 'var(--primary)');
      // If we see backgrounds mapped directly:
      // background: 'var(--zx-primary)' -> this will now be 'var(--primary)'
    }

    // Example 3: Surface color mapping
    if (dna.colors.surface) {
      adapted = adapted.replace(/var\(--zx-surface\)/g, 'var(--background, #fff)');
    }

    // Example 4: Font mapping. 
    // ZenixUI hardcodes Inter fallback: fontFamily: 'Inter, system-ui, sans-serif'
    // In native mode, if the project has a font, we strip it out so it inherits.
    adapted = adapted.replace(/fontFamily:\s*['"]Inter,\s*system-ui,\s*sans-serif['"],?/g, '');
  }

  if (mode === 'recipe') {
    // Recipe mode retains ZenixUI structure but forces a specific theme token.
    // We expect the recipe to provide a css file, but for the component itself,
    // we just ensure it uses --zx-* tokens.
    // This is basically a no-op at the component level because recipes just change the CSS definitions,
    // but we can ensure everything uses strictly semantic tokens.
    return content;
  }

  return adapted;
}
