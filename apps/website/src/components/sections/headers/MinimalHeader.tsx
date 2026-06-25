'use client';

/**
 * ╔══════════════════════════════════════════════════════════╗
 * ║  ZenixUI Section — Minimal Header                       ║
 * ║  Install: npx zenix-ui add header/minimal               ║
 * ║  Themes: Any — designed to be theme-neutral             ║
 * ║                                                          ║
 * ║  Safe to edit:                                           ║
 * ║    • LOGO — brand name or swap for an <img> tag          ║
 * ║    • NAV_LINKS — add/remove navigation items             ║
 * ║    • CTA — button label and destination href             ║
 * ║    • SHOW_DIVIDER — show/hide bottom border              ║
 * ║                                                          ║
 * ║  Avoid changing:                                         ║
 * ║    • CSS variable references (break theme engine)        ║
 * ║    • The sticky positioning wrapper                      ║
 * ╚══════════════════════════════════════════════════════════╝
 */

import { useState } from 'react';
import type { SectionMetadata, SectionProps } from '../types';

// ── START CUSTOMIZATION ───────────────────────────────────────

const LOGO = 'YourBrand';

const NAV_LINKS = [
  { label: 'Product',  href: '#product' },
  { label: 'Pricing',  href: '#pricing' },
  { label: 'About',    href: '/about' },
];

const CTA = { label: 'Sign in', href: '/login', secondary: true };
const CTA_PRIMARY = { label: 'Start free', href: '/signup' };

/** Show a subtle bottom border to separate from content */
const SHOW_DIVIDER = true;

// ── END CUSTOMIZATION ─────────────────────────────────────────

export const sectionMeta: SectionMetadata = {
  name: 'Minimal Header',
  installPath: 'header/minimal',
  category: 'header',
  style: 'minimal',
  description: 'Clean, no-decoration header with maximum whitespace. Works with any design system and any content below it.',
  editable: ['logo', 'navigationLinks', 'primaryCta', 'secondaryCta', 'showDivider'],
  compatibleStyles: ['minimal', 'glass', 'blog', 'docs'],
  recommendedThemes: ['zenix', 'autumn', 'ocean', 'night-city'],
  difficulty: 'easy',
  responsive: true,
  tags: ['Minimal', 'Sticky', 'Two CTAs', 'Responsive', 'Universal'],
};

export function MinimalHeader({ className }: SectionProps) {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header
      className={className}
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 100,
        background: 'var(--zx-background)',
        borderBottom: SHOW_DIVIDER ? '1px solid var(--zx-elevated)' : 'none',
        width: '100%',
      }}
    >
      <div style={{
        maxWidth: '1280px',
        margin: '0 auto',
        padding: '0 2rem',
        height: '60px',
        display: 'flex',
        alignItems: 'center',
        gap: '2rem',
      }}>

        {/* ── Logo ── */}
        <a
          href="/"
          style={{
            fontSize: '1.05rem',
            fontWeight: 800,
            letterSpacing: '-0.03em',
            textDecoration: 'none',
            color: 'inherit',
            flexShrink: 0,
            fontFamily: 'Inter, system-ui, sans-serif',
          }}
        >
          {LOGO}
        </a>

        {/* ── Desktop Navigation (centered) ── */}
        <nav
          aria-label="Main navigation"
          style={{
            display: 'flex',
            gap: '0rem',
            alignItems: 'center',
            flex: 1,
            justifyContent: 'center',
          }}
        >
          {NAV_LINKS.map(link => (
            <a
              key={link.label}
              href={link.href}
              style={{
                padding: '0.4rem 0.75rem',
                fontSize: '0.875rem',
                fontWeight: 500,
                color: 'inherit',
                textDecoration: 'none',
                opacity: 0.65,
                fontFamily: 'Inter, system-ui, sans-serif',
                transition: 'opacity 0.12s',
              }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.opacity = '1'; }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.opacity = '0.65'; }}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* ── CTAs ── */}
        <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center', flexShrink: 0 }}>
          <a
            href={CTA.href}
            style={{
              padding: '0.4rem 0.875rem',
              fontSize: '0.875rem',
              fontWeight: 600,
              color: 'inherit',
              textDecoration: 'none',
              opacity: 0.7,
              fontFamily: 'Inter, system-ui, sans-serif',
              transition: 'opacity 0.12s',
            }}
            onMouseEnter={e => { (e.currentTarget as HTMLElement).style.opacity = '1'; }}
            onMouseLeave={e => { (e.currentTarget as HTMLElement).style.opacity = '0.7'; }}
          >
            {CTA.label}
          </a>
          <a
            href={CTA_PRIMARY.href}
            style={{
              padding: '0.4rem 1rem',
              borderRadius: '6px',
              border: '1px solid rgba(255,255,255,0.15)',
              fontSize: '0.875rem',
              fontWeight: 600,
              color: 'inherit',
              textDecoration: 'none',
              fontFamily: 'Inter, system-ui, sans-serif',
              transition: 'border-color 0.12s, background 0.12s',
            }}
            onMouseEnter={e => {
              const el = e.currentTarget as HTMLElement;
              el.style.borderColor = 'rgba(255,255,255,0.3)';
              el.style.background = 'rgba(255,255,255,0.05)';
            }}
            onMouseLeave={e => {
              const el = e.currentTarget as HTMLElement;
              el.style.borderColor = 'rgba(255,255,255,0.15)';
              el.style.background = 'transparent';
            }}
          >
            {CTA_PRIMARY.label}
          </a>
        </div>
      </div>
    </header>
  );
}
