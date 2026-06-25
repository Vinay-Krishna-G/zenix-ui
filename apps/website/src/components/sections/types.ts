/**
 * ZenixUI Section Library — Type Definitions
 *
 * Every section in the Section Library exports a `metadata` object
 * of type `SectionMetadata`. This is consumed by:
 *
 *  - The Website /sections gallery page (display + filtering)
 *  - The CLI (install path resolution, compatibility warnings)
 *  - The Studio (section picker, compatibility checks)
 *  - Future AI tools (safe-edit zones, dependency detection)
 */

// ─────────────────────────────────────────────────────────────────────────────
// Category: what role the section plays in a page layout
// ─────────────────────────────────────────────────────────────────────────────

export type SectionCategory =
  | 'header'
  | 'footer'
  | 'hero'
  | 'pricing'
  | 'faq'
  | 'cta'
  | 'stats'
  | 'testimonials'
  | 'cards'
  | 'table'
  | 'sidebar'
  | 'form';

// ─────────────────────────────────────────────────────────────────────────────
// Style: the visual identity of the section
// Used in Recommended Mode to suggest compatible combinations.
// ─────────────────────────────────────────────────────────────────────────────

export type SectionStyle =
  | 'glass'      // backdrop-blur, translucent layers
  | 'minimal'    // maximum whitespace, no decoration
  | 'saas'       // enterprise-grade, structured nav
  | 'agency'     // bold typography, large visuals
  | 'startup'    // energetic, gradient-heavy
  | 'dashboard'  // information-dense, utility-first
  | 'blog'       // editorial, serif-friendly
  | 'docs'       // technical, navigation-heavy
  | 'store'      // product-focused, grid-heavy
  | 'columns';   // multi-column content layout

// ─────────────────────────────────────────────────────────────────────────────
// Difficulty: how complex the customization is for a developer
// ─────────────────────────────────────────────────────────────────────────────

export type SectionDifficulty =
  | 'easy'      // change text + colors only
  | 'medium'    // add/remove items, modify layout
  | 'advanced'; // custom logic, data-fetching, complex state

// ─────────────────────────────────────────────────────────────────────────────
// Main metadata interface
// ─────────────────────────────────────────────────────────────────────────────

export interface SectionMetadata {
  /** Display name shown in the Section Library and Studio */
  name: string;

  /**
   * CLI install path.
   * Format: `{category}/{variant}`
   * Example: 'header/glass', 'footer/newsletter', 'pricing/startup'
   * Usage: `npx zenix-ui add header/glass`
   */
  installPath: string;

  /** What role this section plays in a layout */
  category: SectionCategory;

  /** Visual identity of this section (used for Recommended Mode compatibility) */
  style: SectionStyle;

  /** One-line description for the gallery card */
  description: string;

  /**
   * Fields that are safe to customize.
   * These correspond to exported constants at the top of the file
   * (within the START/END CUSTOMIZATION markers).
   *
   * Used by: Studio inline editing, AI tools, documentation generation.
   */
  editable: string[];

  /**
   * Styles that pair well with this section in Recommended Mode.
   * Example: a glass header pairs well with glass heroes and minimal footers.
   */
  compatibleStyles: SectionStyle[];

  /**
   * Design systems this section was designed and tested with.
   * May work with others, but these are validated.
   */
  recommendedThemes: string[];

  /** How much customization effort is required to make it production-ready */
  difficulty: SectionDifficulty;

  /** True if the section has responsive mobile behavior */
  responsive: boolean;

  /**
   * Tags for filtering and discovery in the Section Library.
   * Keep them user-facing: 'Sticky', 'Glass', 'Dark', 'Newsletter', etc.
   */
  tags: string[];
}

// ─────────────────────────────────────────────────────────────────────────────
// Component props shared by all sections
// ─────────────────────────────────────────────────────────────────────────────

export interface SectionProps {
  /**
   * Optional per-section theme override.
   * If provided, the section wraps itself in its own <Experience> provider.
   * If omitted, inherits from the parent <Experience> context.
   *
   * Example: <GlassHeader theme="ocean" /> (ocean glass header inside a zenix page)
   *
   * NOTE: Per-section theming is a Phase 2 feature.
   * This prop is typed here for future compatibility but not yet wired up.
   */
  theme?: string;

  /** Optional CSS class name for additional styling */
  className?: string;
}

// ─────────────────────────────────────────────────────────────────────────────
// Compatibility matrix for Recommended Mode
// ─────────────────────────────────────────────────────────────────────────────

/**
 * Returns true if sectionStyleA and sectionStyleB are visually compatible.
 * Used by the Studio to filter section suggestions.
 */
export function areStylesCompatible(a: SectionStyle, b: SectionStyle): boolean {
  const COMPATIBLE: Record<SectionStyle, SectionStyle[]> = {
    glass:     ['glass', 'minimal', 'startup'],
    minimal:   ['minimal', 'glass', 'blog', 'docs'],
    saas:      ['saas', 'dashboard', 'minimal'],
    agency:    ['agency', 'startup', 'glass'],
    startup:   ['startup', 'glass', 'agency'],
    dashboard: ['dashboard', 'saas', 'minimal'],
    blog:      ['blog', 'minimal', 'docs'],
    docs:      ['docs', 'minimal', 'blog'],
    store:     ['store', 'startup', 'minimal'],
    columns:   ['columns', 'minimal', 'blog'],
  };
  return COMPATIBLE[a]?.includes(b) ?? false;
}
