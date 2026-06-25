'use client';

/**
 * ╔══════════════════════════════════════════════════════════╗
 * ║  ZenixUI Section — Glass Header                         ║
 * ║  Install: npx zenix-ui add header/glass                 ║
 * ║  Themes: Ocean · Zenix · Any dark theme                 ║
 * ║                                                          ║
 * ║  Safe to edit:                                           ║
 * ║    • LOGO — brand name or swap for an <img> tag          ║
 * ║    • NAV_LINKS — add/remove navigation items             ║
 * ║    • CTA — button label and destination href             ║
 * ║    • BLUR_AMOUNT — backdrop blur intensity (4px–40px)    ║
 * ║                                                          ║
 * ║  Avoid changing:                                         ║
 * ║    • backdrop-filter / WebkitBackdropFilter              ║
 * ║      (removing these breaks the glass effect)            ║
 * ║    • CSS variable references like var(--zx-primary)      ║
 * ║      (these are resolved by the ZenixUI theme engine)    ║
 * ╚══════════════════════════════════════════════════════════╝
 */

import { useState } from 'react';
import type { SectionMetadata, SectionProps } from '../types';

// ── START CUSTOMIZATION ───────────────────────────────────────

/** Your brand name or replace with an <img> element */
const LOGO = 'YourBrand';

/** Primary navigation items */
const NAV_LINKS = [
  { label: 'Features',  href: '#features' },
  { label: 'Pricing',   href: '#pricing' },
  { label: 'Docs',      href: '/docs' },
  { label: 'Blog',      href: '/blog' },
];

/** Call-to-action button */
const CTA = { label: 'Get Started →', href: '/signup' };

/** Backdrop blur intensity. Increase for more frosted glass effect. */
const BLUR_AMOUNT = '20px';

// ── END CUSTOMIZATION ─────────────────────────────────────────

// ─────────────────────────────────────────────────────────────────────────────
// Metadata — consumed by Studio, CLI, and AI tools
// ─────────────────────────────────────────────────────────────────────────────

export const sectionMeta: SectionMetadata = {
  name: 'Glass Header',
  installPath: 'header/glass',
  category: 'header',
  style: 'glass',
  description: 'Frosted glass navbar with backdrop blur. Ideal over hero images, gradients, or any high-visual background.',
  editable: ['logo', 'navigationLinks', 'ctaLabel', 'ctaHref', 'blurAmount'],
  compatibleStyles: ['glass', 'minimal', 'startup'],
  recommendedThemes: ['ocean', 'zenix'],
  difficulty: 'easy',
  responsive: true,
  tags: ['Glass', 'Sticky', 'Blur', 'Responsive', 'Dark'],
};

// ─────────────────────────────────────────────────────────────────────────────
// Component
// ─────────────────────────────────────────────────────────────────────────────

export function GlassHeader({ className }: SectionProps) {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header
      className={className}
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 100,
        backdropFilter: `blur(${BLUR_AMOUNT})`,
        WebkitBackdropFilter: `blur(${BLUR_AMOUNT})`,
        background: 'rgba(9,9,11,0.65)',
        borderBottom: '1px solid rgba(255,255,255,0.08)',
        width: '100%',
      }}
    >
      <div style={{
        maxWidth: '1280px',
        margin: '0 auto',
        padding: '0 2rem',
        height: '64px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: '1.5rem',
      }}>

        {/* ── Logo ── */}
        <a
          href="/"
          style={{
            fontSize: '1.1rem',
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

        {/* ── Desktop Navigation ── */}
        <nav
          aria-label="Main navigation"
          style={{
            display: 'flex',
            gap: '0.125rem',
            alignItems: 'center',
          }}
        >
          {NAV_LINKS.map(link => (
            <a
              key={link.label}
              href={link.href}
              style={{
                padding: '0.5rem 0.875rem',
                borderRadius: '8px',
                fontSize: '0.875rem',
                fontWeight: 500,
                color: 'rgba(255,255,255,0.7)',
                textDecoration: 'none',
                fontFamily: 'Inter, system-ui, sans-serif',
                transition: 'color 0.15s, background 0.15s',
              }}
              onMouseEnter={e => {
                const el = e.currentTarget as HTMLAnchorElement;
                el.style.color = 'rgba(255,255,255,1)';
                el.style.background = 'rgba(255,255,255,0.07)';
              }}
              onMouseLeave={e => {
                const el = e.currentTarget as HTMLAnchorElement;
                el.style.color = 'rgba(255,255,255,0.7)';
                el.style.background = 'transparent';
              }}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* ── CTA ── */}
        <a
          href={CTA.href}
          style={{
            padding: '0.5rem 1.125rem',
            borderRadius: '8px',
            background: 'var(--zx-primary)',
            color: 'var(--zx-background, #09090b)',
            fontWeight: 700,
            fontSize: '0.875rem',
            textDecoration: 'none',
            flexShrink: 0,
            fontFamily: 'Inter, system-ui, sans-serif',
            letterSpacing: '-0.01em',
          }}
        >
          {CTA.label}
        </a>

        {/* ── Mobile menu toggle ── */}
        <button
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen(prev => !prev)}
          style={{
            display: 'none', // shown via @media in real usage; kept simple here
            padding: '0.5rem',
            borderRadius: '6px',
            border: '1px solid rgba(255,255,255,0.12)',
            background: 'transparent',
            cursor: 'pointer',
            color: 'inherit',
            flexShrink: 0,
          }}
        >
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
            {mobileOpen ? (
              <>
                <line x1="3" y1="3" x2="15" y2="15" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                <line x1="15" y1="3" x2="3" y2="15" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              </>
            ) : (
              <>
                <line x1="3" y1="5" x2="15" y2="5" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                <line x1="3" y1="9" x2="15" y2="9" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                <line x1="3" y1="13" x2="15" y2="13" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              </>
            )}
          </svg>
        </button>
      </div>
    </header>
  );
}
