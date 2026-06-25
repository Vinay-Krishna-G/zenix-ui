'use client';

/**
 * Note: This page is a Client Component because it renders interactive
 * section previews (glass header with backdrop-filter, newsletter form
 * with form state, SaaS header with dropdown menus).
 *
 * SEO metadata is handled by the parent layout.tsx.
 */

import Link from 'next/link';
import type { SectionMetadata } from '@/components/sections/types';

// ─────────────────────────────────────────────────────────────────────────────
// NOTE: Headers are 'use client' (interactive). We import them dynamically
// so they render on the client without breaking server-side static generation.
// ─────────────────────────────────────────────────────────────────────────────
import dynamic from 'next/dynamic';

const GlassHeader    = dynamic(() => import('@/components/sections/headers/GlassHeader').then(m => ({ default: m.GlassHeader })), { ssr: false });
const MinimalHeader  = dynamic(() => import('@/components/sections/headers/MinimalHeader').then(m => ({ default: m.MinimalHeader })), { ssr: false });
const SaaSHeader     = dynamic(() => import('@/components/sections/headers/SaaSHeader').then(m => ({ default: m.SaaSHeader })), { ssr: false });
const NewsletterFooter = dynamic(() => import('@/components/sections/footers/NewsletterFooter').then(m => ({ default: m.NewsletterFooter })), { ssr: false });
// These are server-safe (no state):
import { MinimalFooter } from '@/components/sections/footers/MinimalFooter';
import { ColumnsFooter } from '@/components/sections/footers/ColumnsFooter';

// ─────────────────────────────────────────────────────────────────────────────
// Inline metadata for each section (avoids collision with Next.js's reserved
// `metadata` export when using namespace imports from client component files)
// ─────────────────────────────────────────────────────────────────────────────

const SECTION_REGISTRY: Array<{
  meta: SectionMetadata;
  isHeader: boolean;
  anchor: string;
}> = [
  {
    isHeader: true,
    anchor: 'header-glass',
    meta: {
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
    },
  },
  {
    isHeader: true,
    anchor: 'header-minimal',
    meta: {
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
    },
  },
  {
    isHeader: true,
    anchor: 'header-saas',
    meta: {
      name: 'SaaS Header',
      installPath: 'header/saas',
      category: 'header',
      style: 'saas',
      description: 'Full-featured SaaS application header with primary nav, notification bell, and user avatar/menu. Built for logged-in app shells.',
      editable: ['logo', 'mainNav', 'productNav', 'userAvatarSrc', 'userDisplayName', 'notificationCount'],
      compatibleStyles: ['saas', 'dashboard', 'minimal'],
      recommendedThemes: ['zenix', 'night-city'],
      difficulty: 'medium',
      responsive: true,
      tags: ['SaaS', 'Dashboard', 'Sticky', 'User Avatar', 'Notifications', 'Enterprise'],
    },
  },
  {
    isHeader: false,
    anchor: 'footer-minimal',
    meta: {
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
    },
  },
  {
    isHeader: false,
    anchor: 'footer-newsletter',
    meta: {
      name: 'Newsletter Footer',
      installPath: 'footer/newsletter',
      category: 'footer',
      style: 'startup',
      description: 'Two-part footer with brand identity on the left and email newsletter signup on the right. Social links and legal below.',
      editable: ['brandName', 'brandTagline', 'newsletterHeading', 'newsletterSubheading', 'socialLinks', 'footerLinks', 'onSubscribe'],
      compatibleStyles: ['startup', 'saas', 'agency', 'minimal'],
      recommendedThemes: ['zenix', 'ocean'],
      difficulty: 'medium',
      responsive: true,
      tags: ['Newsletter', 'Email', 'Social Links', 'Two-Column', 'Startup'],
    },
  },
  {
    isHeader: false,
    anchor: 'footer-columns',
    meta: {
      name: 'Columns Footer',
      installPath: 'footer/columns',
      category: 'footer',
      style: 'columns',
      description: 'Multi-column footer with brand identity, link columns, social icons, and copyright bar. The standard choice for product websites and SaaS apps.',
      editable: ['brandName', 'brandTagline', 'columns', 'socialLinks', 'companyName', 'copyrightYear'],
      compatibleStyles: ['minimal', 'saas', 'startup', 'agency', 'blog'],
      recommendedThemes: ['zenix', 'ocean', 'autumn', 'night-city'],
      difficulty: 'easy',
      responsive: true,
      tags: ['Multi-Column', 'Links', 'Social', 'Standard', 'SaaS', 'Product'],
    },
  },
];

// ─────────────────────────────────────────────────────────────────────────────
// Categories
// ─────────────────────────────────────────────────────────────────────────────

const CATEGORIES = [
  { label: 'Headers', count: 3, available: true,  anchor: '#headers' },
  { label: 'Footers', count: 3, available: true,  anchor: '#footers' },
  { label: 'Heroes',  count: 0, available: false, anchor: '#heroes'  },
  { label: 'Pricing', count: 0, available: false, anchor: '#pricing' },
  { label: 'FAQ',     count: 0, available: false, anchor: '#faq'     },
  { label: 'CTA',     count: 0, available: false, anchor: '#cta'     },
  { label: 'Stats',   count: 0, available: false, anchor: '#stats'   },
  { label: 'Cards',   count: 0, available: false, anchor: '#cards'   },
];

// ─────────────────────────────────────────────────────────────────────────────
// Subcomponents
// ─────────────────────────────────────────────────────────────────────────────

function DifficultyBadge({ level }: { level: SectionMetadata['difficulty'] }) {
  const colors = {
    easy:     { bg: 'rgba(34,197,94,0.12)',  text: '#22c55e' },
    medium:   { bg: 'rgba(245,158,11,0.12)', text: '#f59e0b' },
    advanced: { bg: 'rgba(239,68,68,0.12)',  text: '#ef4444' },
  };
  const { bg, text } = colors[level];
  return (
    <span style={{
      fontSize: '0.65rem', fontWeight: 700,
      padding: '0.15rem 0.5rem',
      borderRadius: '100px',
      background: bg, color: text,
      fontFamily: 'Inter, system-ui, sans-serif',
    }}>
      {level}
    </span>
  );
}

function InstallCommand({ path }: { path: string }) {
  return (
    <div style={{
      display: 'flex', alignItems: 'center', gap: '0.75rem',
      padding: '0.6rem 1rem', borderRadius: '8px',
      background: 'var(--zx-elevated)', border: '1px solid rgba(255,255,255,0.05)',
    }}>
      <span style={{ fontSize: '0.72rem', opacity: 0.4, fontWeight: 600, flexShrink: 0 }}>$</span>
      <code style={{
        fontSize: '0.82rem',
        fontFamily: 'ui-monospace, "Cascadia Code", monospace',
        flex: 1, color: 'var(--zx-primary)',
        whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis',
      }}>
        npx zenix-ui add {path}
      </code>
    </div>
  );
}

function SectionMeta({ meta }: { meta: SectionMetadata }) {
  return (
    <div style={{ padding: '1.5rem' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.5rem', flexWrap: 'wrap' }}>
        <h3 style={{ fontSize: '1rem', fontWeight: 700, margin: 0, letterSpacing: '-0.02em', fontFamily: 'Inter, system-ui, sans-serif' }}>
          {meta.name}
        </h3>
        <DifficultyBadge level={meta.difficulty} />
        {meta.responsive && (
          <span style={{ fontSize: '0.65rem', fontWeight: 700, padding: '0.15rem 0.5rem', borderRadius: '100px', background: 'rgba(99,102,241,0.12)', color: '#818cf8', fontFamily: 'Inter, system-ui, sans-serif' }}>
            Responsive
          </span>
        )}
      </div>
      <p style={{ fontSize: '0.82rem', opacity: 0.55, margin: '0 0 1rem', lineHeight: 1.55, fontFamily: 'Inter, system-ui, sans-serif' }}>
        {meta.description}
      </p>
      <div style={{ display: 'flex', gap: '0.35rem', flexWrap: 'wrap', marginBottom: '1.25rem' }}>
        {meta.tags.map(tag => (
          <span key={tag} style={{ fontSize: '0.65rem', fontWeight: 600, padding: '0.15rem 0.5rem', borderRadius: '100px', background: 'var(--zx-elevated)', opacity: 0.8, fontFamily: 'Inter, system-ui, sans-serif' }}>
            {tag}
          </span>
        ))}
      </div>
      <InstallCommand path={meta.installPath} />
      <div style={{ marginTop: '0.875rem', fontSize: '0.72rem', opacity: 0.4, fontFamily: 'Inter, system-ui, sans-serif' }}>
        Tested with:&nbsp;
        {meta.recommendedThemes.map((t, i) => (
          <span key={t}>
            <Link href={`/themes#theme-${t}`} style={{ color: 'inherit', textDecoration: 'underline', textUnderlineOffset: '2px' }}>
              {t}
            </Link>
            {i < meta.recommendedThemes.length - 1 ? ', ' : ''}
          </span>
        ))}
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// Page
// ─────────────────────────────────────────────────────────────────────────────

export default function SectionsPage() {
  const CARD_STYLE = {
    borderRadius: '16px', border: '1px solid var(--zx-elevated)',
    overflow: 'hidden', background: 'var(--zx-surface)',
  } as const;

  const HEADER_PREVIEW = {
    position: 'relative' as const, overflow: 'hidden',
    background: 'var(--zx-background)',
    height: '64px', minHeight: '64px',
    borderBottom: '1px solid var(--zx-elevated)',
  };

  const FOOTER_PREVIEW = {
    position: 'relative' as const, overflow: 'hidden',
    background: 'var(--zx-background)',
    borderBottom: '1px solid var(--zx-elevated)',
  };

  const SECTION_HEADING = {
    display: 'flex', alignItems: 'baseline', gap: '0.75rem',
    marginBottom: '2.5rem', paddingTop: '1rem',
    borderTop: '1px solid var(--zx-elevated)',
  };

  const [g, m, s, mf, nf, cf] = SECTION_REGISTRY;

  return (
    <div>
      {/* ── Hero ── */}
      <section style={{ padding: '6rem 2rem 4rem', textAlign: 'center', maxWidth: '700px', margin: '0 auto' }}>
        <div style={{ fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.12em', opacity: 0.4, marginBottom: '1rem', fontFamily: 'Inter, system-ui, sans-serif' }}>
          Section Library
        </div>
        <h1 style={{ fontSize: '3.25rem', fontWeight: 800, margin: '0 0 1.25rem', letterSpacing: '-0.04em', lineHeight: 1.1, fontFamily: 'Inter, system-ui, sans-serif' }}>
          Install Any Section.<br />
          <span style={{ opacity: 0.35 }}>Not the Whole Blueprint.</span>
        </h1>
        <p style={{ fontSize: '1.125rem', opacity: 0.6, lineHeight: 1.65, maxWidth: '540px', margin: '0 auto 2.5rem', fontFamily: 'Inter, system-ui, sans-serif' }}>
          Every header, footer, and hero section is independently installable via CLI.
          Need just a footer? Install just a footer. No extra code. No unused components.
        </p>
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.75rem', padding: '0.75rem 1.25rem', borderRadius: '10px', background: 'var(--zx-elevated)', border: '1px solid rgba(255,255,255,0.06)' }}>
          <span style={{ fontSize: '0.78rem', opacity: 0.4, fontWeight: 600 }}>$</span>
          <code style={{ fontSize: '0.9rem', fontFamily: 'ui-monospace, monospace', color: 'var(--zx-primary)' }}>
            npx zenix-ui add footer/minimal
          </code>
        </div>
        <div style={{ marginTop: '1.25rem' }}>
          <Link href="/blueprints" style={{ fontSize: '0.875rem', color: 'inherit', textDecoration: 'none', opacity: 0.5 }}>
            Or install a complete Blueprint →
          </Link>
        </div>
      </section>

      {/* ── Category Grid ── */}
      <section style={{ padding: '0 2rem', marginBottom: '5rem' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '0.75rem', maxWidth: '900px', margin: '0 auto' }}>
          {CATEGORIES.map(cat => (
            <a key={cat.label} href={cat.available ? cat.anchor : undefined}
              aria-disabled={!cat.available}
              style={{ padding: '1rem', borderRadius: '10px', border: '1px solid var(--zx-elevated)', background: cat.available ? 'var(--zx-surface)' : 'var(--zx-background)', textDecoration: 'none', color: 'inherit', opacity: cat.available ? 1 : 0.45, cursor: cat.available ? 'pointer' : 'default' }}
            >
              <div style={{ fontSize: '0.875rem', fontWeight: 700, marginBottom: '0.25rem', fontFamily: 'Inter, system-ui, sans-serif' }}>{cat.label}</div>
              <div style={{ fontSize: '0.72rem', opacity: 0.5, fontFamily: 'Inter, system-ui, sans-serif' }}>
                {cat.available ? `${cat.count} sections` : 'Coming soon'}
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* ── Headers ── */}
      <section id="headers" style={{ padding: '3rem 2rem 5rem', maxWidth: '1100px', margin: '0 auto' }}>
        <div style={SECTION_HEADING}>
          <h2 style={{ fontSize: '1.75rem', fontWeight: 700, margin: 0, letterSpacing: '-0.03em', fontFamily: 'Inter, system-ui, sans-serif' }}>Headers</h2>
          <span style={{ fontSize: '0.875rem', opacity: 0.4 }}>3 sections</span>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>

          <div id="header-glass" style={CARD_STYLE}>
            <div style={HEADER_PREVIEW}><GlassHeader /></div>
            <SectionMeta meta={g.meta} />
          </div>

          <div id="header-minimal" style={CARD_STYLE}>
            <div style={HEADER_PREVIEW}><MinimalHeader /></div>
            <SectionMeta meta={m.meta} />
          </div>

          <div id="header-saas" style={CARD_STYLE}>
            <div style={HEADER_PREVIEW}><SaaSHeader /></div>
            <SectionMeta meta={s.meta} />
          </div>
        </div>
      </section>

      {/* ── Footers ── */}
      <section id="footers" style={{ padding: '3rem 2rem 5rem', maxWidth: '1100px', margin: '0 auto' }}>
        <div style={SECTION_HEADING}>
          <h2 style={{ fontSize: '1.75rem', fontWeight: 700, margin: 0, letterSpacing: '-0.03em', fontFamily: 'Inter, system-ui, sans-serif' }}>Footers</h2>
          <span style={{ fontSize: '0.875rem', opacity: 0.4 }}>3 sections</span>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>

          <div id="footer-minimal" style={CARD_STYLE}>
            <div style={FOOTER_PREVIEW}><MinimalFooter /></div>
            <SectionMeta meta={mf.meta} />
          </div>

          <div id="footer-newsletter" style={CARD_STYLE}>
            <div style={FOOTER_PREVIEW}><NewsletterFooter /></div>
            <SectionMeta meta={nf.meta} />
          </div>

          <div id="footer-columns" style={CARD_STYLE}>
            <div style={FOOTER_PREVIEW}><ColumnsFooter /></div>
            <SectionMeta meta={cf.meta} />
          </div>
        </div>
      </section>

      {/* ── Coming Soon CTA ── */}
      <section style={{ padding: '5rem 2rem', textAlign: 'center', maxWidth: '700px', margin: '0 auto', borderTop: '1px solid var(--zx-elevated)' }}>
        <h2 style={{ fontSize: '1.75rem', fontWeight: 700, margin: '0 0 0.75rem', letterSpacing: '-0.03em', fontFamily: 'Inter, system-ui, sans-serif' }}>
          More sections shipping weekly.
        </h2>
        <p style={{ opacity: 0.5, lineHeight: 1.65, margin: '0 auto 2rem', maxWidth: '480px', fontFamily: 'Inter, system-ui, sans-serif' }}>
          Heroes, Pricing, FAQ, Testimonials, Stats, and Cards are next.
          Each one independently installable. Each one with AI-friendly comments.
        </p>
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
          <Link href="/blueprints" style={{ padding: '0.75rem 1.5rem', borderRadius: '8px', background: 'var(--zx-primary)', color: 'var(--zx-background)', fontWeight: 700, textDecoration: 'none', fontSize: '0.9rem', fontFamily: 'Inter, system-ui, sans-serif' }}>
            Browse Full Blueprints →
          </Link>
          <Link href="/studio" style={{ padding: '0.75rem 1.5rem', borderRadius: '8px', background: 'var(--zx-elevated)', color: 'inherit', fontWeight: 700, textDecoration: 'none', fontSize: '0.9rem', fontFamily: 'Inter, system-ui, sans-serif' }}>
            Open Theme Studio
          </Link>
        </div>
      </section>
    </div>
  );
}
