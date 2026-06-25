/**
 * ╔══════════════════════════════════════════════════════════╗
 * ║  ZenixUI Section — Columns Footer                       ║
 * ║  Install: npx zenix-ui add footer/columns               ║
 * ║  Themes: Any                                             ║
 * ║                                                          ║
 * ║  Safe to edit:                                           ║
 * ║    • BRAND_NAME / BRAND_TAGLINE                          ║
 * ║    • COLUMNS — add/remove columns and links              ║
 * ║    • SOCIAL_LINKS — add/remove platforms and icons       ║
 * ║    • COPYRIGHT_YEAR / COMPANY_NAME                       ║
 * ║                                                          ║
 * ║  Avoid changing:                                         ║
 * ║    • CSS variable references (break theme engine)        ║
 * ║    • The responsive grid — edit the breakpoint values    ║
 * ║      in COLUMN_COUNT instead of removing the grid        ║
 * ╚══════════════════════════════════════════════════════════╝
 */

import type { SectionMetadata, SectionProps } from '../types';

// ── START CUSTOMIZATION ───────────────────────────────────────

const BRAND_NAME = 'YourBrand';
const BRAND_TAGLINE = 'Design systems for modern teams.';
const COMPANY_NAME = 'Your Company, Inc.';
const COPYRIGHT_YEAR = new Date().getFullYear();

/** Number of link columns shown in the footer */
const COLUMNS = [
  {
    heading: 'Product',
    links: [
      { label: 'Blueprints',  href: '/blueprints' },
      { label: 'Sections',    href: '/sections' },
      { label: 'Theme Studio',href: '/studio' },
      { label: 'CLI',         href: '/docs/cli' },
      { label: 'Changelog',   href: '/changelog' },
    ],
  },
  {
    heading: 'Developers',
    links: [
      { label: 'Documentation', href: '/docs' },
      { label: 'Next.js Guide', href: '/docs/nextjs' },
      { label: 'Vite Guide',    href: '/docs/vite' },
      { label: 'API Reference', href: '/docs/api' },
      { label: 'GitHub',        href: 'https://github.com' },
    ],
  },
  {
    heading: 'Company',
    links: [
      { label: 'About',   href: '/about' },
      { label: 'Blog',    href: '/blog' },
      { label: 'Careers', href: '/careers' },
      { label: 'Contact', href: '/contact' },
    ],
  },
  {
    heading: 'Legal',
    links: [
      { label: 'Privacy Policy', href: '/privacy' },
      { label: 'Terms of Use',   href: '/terms' },
      { label: 'Cookie Policy',  href: '/cookies' },
    ],
  },
];

/** Social platform icons — use emoji or replace with SVG components */
const SOCIAL_LINKS = [
  { platform: 'X (Twitter)', href: 'https://twitter.com', label: '𝕏' },
  { platform: 'GitHub',      href: 'https://github.com',  label: '⌥' },
  { platform: 'Discord',     href: 'https://discord.com', label: '◉' },
  { platform: 'LinkedIn',    href: 'https://linkedin.com',label: 'in' },
];

// ── END CUSTOMIZATION ─────────────────────────────────────────

export const sectionMeta: SectionMetadata = {
  name: 'Columns Footer',
  installPath: 'footer/columns',
  category: 'footer',
  style: 'columns',
  description: 'Multi-column footer with brand identity, link columns, social icons, and copyright bar. The standard choice for product websites and SaaS apps.',
  editable: ['brandName', 'brandTagline', 'columns', 'socialLinks', 'companyName', 'copyrightYear'],
  compatibleStyles: ['minimal', 'saas', 'startup', 'agency', 'blog'],
  recommendedThemes: ['zenix', 'ocean', 'autumn', 'midnight'],
  difficulty: 'easy',
  responsive: true,
  tags: ['Multi-Column', 'Links', 'Social', 'Standard', 'SaaS', 'Product'],
};

export function ColumnsFooter({ className }: SectionProps) {
  return (
    <footer
      className={className}
      style={{
        borderTop: '1px solid var(--zx-elevated)',
        background: 'var(--zx-background)',
        width: '100%',
      }}
    >
      {/* ── Main columns ── */}
      <div style={{
        maxWidth: '1280px',
        margin: '0 auto',
        padding: '4rem 2rem 3rem',
        display: 'grid',
        gridTemplateColumns: `280px repeat(${COLUMNS.length}, 1fr)`,
        gap: '3rem',
        alignItems: 'start',
      }}>

        {/* Brand column */}
        <div>
          <div style={{
            fontSize: '1.05rem',
            fontWeight: 800,
            letterSpacing: '-0.03em',
            marginBottom: '0.75rem',
            fontFamily: 'Inter, system-ui, sans-serif',
          }}>
            {BRAND_NAME}
          </div>
          <p style={{
            fontSize: '0.82rem',
            opacity: 0.5,
            lineHeight: 1.65,
            margin: '0 0 1.5rem',
            maxWidth: '220px',
            fontFamily: 'Inter, system-ui, sans-serif',
          }}>
            {BRAND_TAGLINE}
          </p>

          {/* Social icons */}
          <div style={{ display: 'flex', gap: '0.4rem', flexWrap: 'wrap' }}>
            {SOCIAL_LINKS.map(s => (
              <a
                key={s.platform}
                href={s.href}
                aria-label={s.platform}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  width: '32px',
                  height: '32px',
                  borderRadius: '7px',
                  border: '1px solid var(--zx-elevated)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '0.7rem',
                  fontWeight: 700,
                  color: 'inherit',
                  textDecoration: 'none',
                  opacity: 0.5,
                  fontFamily: 'Inter, system-ui, sans-serif',
                  transition: 'opacity 0.12s, border-color 0.12s',
                }}
                onMouseEnter={e => {
                  const el = e.currentTarget;
                  el.style.opacity = '1';
                  el.style.borderColor = 'rgba(255,255,255,0.25)';
                }}
                onMouseLeave={e => {
                  const el = e.currentTarget;
                  el.style.opacity = '0.5';
                  el.style.borderColor = 'var(--zx-elevated)';
                }}
              >
                {s.label}
              </a>
            ))}
          </div>
        </div>

        {/* Link columns */}
        {COLUMNS.map(col => (
          <div key={col.heading}>
            <h4 style={{
              fontSize: '0.72rem',
              fontWeight: 700,
              textTransform: 'uppercase',
              letterSpacing: '0.08em',
              opacity: 0.4,
              margin: '0 0 1rem',
              fontFamily: 'Inter, system-ui, sans-serif',
            }}>
              {col.heading}
            </h4>
            <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
              {col.links.map(link => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    style={{
                      fontSize: '0.82rem',
                      color: 'inherit',
                      textDecoration: 'none',
                      opacity: 0.55,
                      fontFamily: 'Inter, system-ui, sans-serif',
                      transition: 'opacity 0.12s',
                    }}
                    onMouseEnter={e => { (e.currentTarget as HTMLElement).style.opacity = '1'; }}
                    onMouseLeave={e => { (e.currentTarget as HTMLElement).style.opacity = '0.55'; }}
                    target={link.href.startsWith('http') ? '_blank' : undefined}
                    rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* ── Bottom bar ── */}
      <div style={{
        maxWidth: '1280px',
        margin: '0 auto',
        padding: '1.125rem 2rem',
        borderTop: '1px solid var(--zx-elevated)',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexWrap: 'wrap',
        gap: '0.75rem',
      }}>
        <span style={{
          fontSize: '0.75rem',
          opacity: 0.35,
          fontFamily: 'Inter, system-ui, sans-serif',
        }}>
          © {COPYRIGHT_YEAR} {COMPANY_NAME}. All rights reserved.
        </span>
        <span style={{
          fontSize: '0.75rem',
          opacity: 0.3,
          fontFamily: 'Inter, system-ui, sans-serif',
        }}>
          Built with ZenixUI
        </span>
      </div>
    </footer>
  );
}
