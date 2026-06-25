/**
 * ╔══════════════════════════════════════════════════════════╗
 * ║  ZenixUI Section — Minimal Footer                       ║
 * ║  Install: npx zenix-ui add footer/minimal               ║
 * ║  Themes: Any — designed to be theme-neutral             ║
 * ║                                                          ║
 * ║  Safe to edit:                                           ║
 * ║    • BRAND_NAME — company/product name                   ║
 * ║    • LINKS — footer navigation links                     ║
 * ║    • COPYRIGHT_YEAR — update yearly or use dynamic year  ║
 * ║    • COMPANY_NAME — your company or product              ║
 * ║                                                          ║
 * ║  Avoid changing:                                         ║
 * ║    • CSS variable references (break theme engine)        ║
 * ╚══════════════════════════════════════════════════════════╝
 */

import type { SectionMetadata, SectionProps } from '../types';

// ── START CUSTOMIZATION ───────────────────────────────────────

const BRAND_NAME = 'YourBrand';
const COMPANY_NAME = 'Your Company, Inc.';
const COPYRIGHT_YEAR = new Date().getFullYear();

const LINKS = [
  { label: 'Privacy',      href: '/privacy' },
  { label: 'Terms',        href: '/terms' },
  { label: 'Contact',      href: '/contact' },
  { label: 'Status',       href: '/status' },
];

// ── END CUSTOMIZATION ─────────────────────────────────────────

export const sectionMeta: SectionMetadata = {
  name: 'Minimal Footer',
  installPath: 'footer/minimal',
  category: 'footer',
  style: 'minimal',
  description: 'Single-row footer with logo, copyright, and essential links. Works with every design system and page type.',
  editable: ['brandName', 'companyName', 'copyrightYear', 'links'],
  compatibleStyles: ['minimal', 'glass', 'blog', 'saas', 'docs'],
  recommendedThemes: ['zenix', 'autumn', 'ocean', 'night-city'],
  difficulty: 'easy',
  responsive: true,
  tags: ['Minimal', 'Single Row', 'Universal', 'Simple'],
};

export function MinimalFooter({ className }: SectionProps) {
  return (
    <footer
      className={className}
      style={{
        borderTop: '1px solid var(--zx-elevated)',
        background: 'var(--zx-background)',
        width: '100%',
      }}
    >
      <div style={{
        maxWidth: '1280px',
        margin: '0 auto',
        padding: '1.25rem 2rem',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        gap: '1rem',
      }}>

        {/* ── Left: Logo + copyright ── */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '0.75rem',
          fontSize: '0.82rem',
          opacity: 0.55,
          fontFamily: 'Inter, system-ui, sans-serif',
        }}>
          <span style={{ fontWeight: 700, opacity: 1, color: 'inherit' }}>{BRAND_NAME}</span>
          <span style={{ opacity: 0.4 }}>·</span>
          <span>© {COPYRIGHT_YEAR} {COMPANY_NAME}. All rights reserved.</span>
        </div>

        {/* ── Right: Footer links ── */}
        <nav aria-label="Footer navigation" style={{ display: 'flex', gap: '1.5rem' }}>
          {LINKS.map(link => (
            <a
              key={link.label}
              href={link.href}
              style={{
                fontSize: '0.82rem',
                color: 'inherit',
                textDecoration: 'none',
                opacity: 0.5,
                fontFamily: 'Inter, system-ui, sans-serif',
                transition: 'opacity 0.12s',
              }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.opacity = '0.9'; }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.opacity = '0.5'; }}
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </footer>
  );
}
