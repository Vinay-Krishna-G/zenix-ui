'use client';

/**
 * ╔══════════════════════════════════════════════════════════╗
 * ║  ZenixUI Section — Newsletter Footer                    ║
 * ║  Install: npx zenix-ui add footer/newsletter            ║
 * ║  Themes: Zenix · Ocean · Any                            ║
 * ║                                                          ║
 * ║  Safe to edit:                                           ║
 * ║    • BRAND_NAME / BRAND_TAGLINE — your brand copy       ║
 * ║    • NEWSLETTER_HEADING / SUBHEADING                     ║
 * ║    • SOCIAL_LINKS — add/remove social platforms          ║
 * ║    • FOOTER_LINKS — legal/utility links                  ║
 * ║    • onSubscribe — wire up to your email API             ║
 * ║                                                          ║
 * ║  Avoid changing:                                         ║
 * ║    • CSS variable references (break theme engine)        ║
 * ╚══════════════════════════════════════════════════════════╝
 */

import { useState } from 'react';
import type { SectionMetadata, SectionProps } from '../types';

// ── START CUSTOMIZATION ───────────────────────────────────────

const BRAND_NAME = 'YourBrand';
const BRAND_TAGLINE = 'Building better experiences for developers.';
const COMPANY_NAME = 'Your Company, Inc.';
const COPYRIGHT_YEAR = new Date().getFullYear();

const NEWSLETTER_HEADING = 'Stay in the loop.';
const NEWSLETTER_SUBHEADING = 'No spam. Just product updates, new sections, and design tips.';
const NEWSLETTER_PLACEHOLDER = 'your@email.com';
const NEWSLETTER_BUTTON = 'Subscribe →';

const SOCIAL_LINKS = [
  { platform: 'Twitter', href: 'https://twitter.com', icon: 'X' },
  { platform: 'GitHub',  href: 'https://github.com',  icon: 'GH' },
  { platform: 'Discord', href: 'https://discord.com', icon: 'DS' },
];

const FOOTER_LINKS = [
  { label: 'Privacy', href: '/privacy' },
  { label: 'Terms',   href: '/terms' },
  { label: 'Status',  href: '/status' },
];

// ── END CUSTOMIZATION ─────────────────────────────────────────

export const sectionMeta: SectionMetadata = {
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
};

export function NewsletterFooter({ className }: SectionProps) {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email) return;
    setLoading(true);

    // ── Replace this with your email service (Resend, Mailchimp, ConvertKit) ──
    await new Promise(r => setTimeout(r, 800)); // placeholder delay
    // ─────────────────────────────────────────────────────────────────────────

    setLoading(false);
    setSubmitted(true);
  }

  return (
    <footer
      className={className}
      style={{
        borderTop: '1px solid var(--zx-elevated)',
        background: 'var(--zx-background)',
        width: '100%',
      }}
    >
      {/* ── Top section ── */}
      <div style={{
        maxWidth: '1280px',
        margin: '0 auto',
        padding: '3.5rem 2rem',
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '4rem',
        alignItems: 'start',
      }}>

        {/* Left: Brand */}
        <div>
          <div style={{
            fontSize: '1.1rem',
            fontWeight: 800,
            letterSpacing: '-0.03em',
            marginBottom: '0.75rem',
            fontFamily: 'Inter, system-ui, sans-serif',
          }}>
            {BRAND_NAME}
          </div>
          <p style={{
            fontSize: '0.875rem',
            opacity: 0.55,
            lineHeight: 1.6,
            maxWidth: '340px',
            margin: '0 0 1.5rem',
            fontFamily: 'Inter, system-ui, sans-serif',
          }}>
            {BRAND_TAGLINE}
          </p>

          {/* Social icons */}
          <div style={{ display: 'flex', gap: '0.5rem' }}>
            {SOCIAL_LINKS.map(s => (
              <a
                key={s.platform}
                href={s.href}
                aria-label={s.platform}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  width: '34px',
                  height: '34px',
                  borderRadius: '8px',
                  border: '1px solid var(--zx-elevated)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '0.65rem',
                  fontWeight: 800,
                  color: 'inherit',
                  textDecoration: 'none',
                  opacity: 0.6,
                  fontFamily: 'Inter, system-ui, sans-serif',
                  transition: 'opacity 0.12s, border-color 0.12s',
                }}
                onMouseEnter={e => {
                  const el = e.currentTarget;
                  el.style.opacity = '1';
                  el.style.borderColor = 'var(--zx-primary)';
                }}
                onMouseLeave={e => {
                  const el = e.currentTarget;
                  el.style.opacity = '0.6';
                  el.style.borderColor = 'var(--zx-elevated)';
                }}
              >
                {s.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Right: Newsletter */}
        <div>
          <h3 style={{
            fontSize: '1.1rem',
            fontWeight: 700,
            margin: '0 0 0.5rem',
            letterSpacing: '-0.02em',
            fontFamily: 'Inter, system-ui, sans-serif',
          }}>
            {NEWSLETTER_HEADING}
          </h3>
          <p style={{
            fontSize: '0.875rem',
            opacity: 0.55,
            margin: '0 0 1.25rem',
            lineHeight: 1.5,
            fontFamily: 'Inter, system-ui, sans-serif',
          }}>
            {NEWSLETTER_SUBHEADING}
          </p>

          {submitted ? (
            <div style={{
              padding: '0.875rem 1.25rem',
              borderRadius: '10px',
              background: 'rgba(34,197,94,0.1)',
              border: '1px solid rgba(34,197,94,0.25)',
              fontSize: '0.875rem',
              color: '#22c55e',
              fontWeight: 600,
              fontFamily: 'Inter, system-ui, sans-serif',
            }}>
              ✓ You're in! Thanks for subscribing.
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              style={{ display: 'flex', gap: '0.5rem' }}
            >
              <input
                type="email"
                placeholder={NEWSLETTER_PLACEHOLDER}
                value={email}
                onChange={e => setEmail(e.target.value)}
                required
                aria-label="Email address for newsletter"
                style={{
                  flex: 1,
                  padding: '0.625rem 1rem',
                  borderRadius: '8px',
                  border: '1px solid var(--zx-elevated)',
                  background: 'var(--zx-surface)',
                  color: 'inherit',
                  fontSize: '0.875rem',
                  fontFamily: 'Inter, system-ui, sans-serif',
                  outline: 'none',
                  minWidth: 0,
                }}
                onFocus={e => { (e.currentTarget as HTMLElement).style.borderColor = 'var(--zx-primary)'; }}
                onBlur={e => { (e.currentTarget as HTMLElement).style.borderColor = 'var(--zx-elevated)'; }}
              />
              <button
                type="submit"
                disabled={loading}
                style={{
                  padding: '0.625rem 1.125rem',
                  borderRadius: '8px',
                  border: 'none',
                  background: 'var(--zx-primary)',
                  color: 'var(--zx-background)',
                  fontWeight: 700,
                  fontSize: '0.875rem',
                  cursor: loading ? 'not-allowed' : 'pointer',
                  opacity: loading ? 0.7 : 1,
                  flexShrink: 0,
                  fontFamily: 'Inter, system-ui, sans-serif',
                  whiteSpace: 'nowrap',
                  transition: 'opacity 0.15s',
                }}
              >
                {loading ? '...' : NEWSLETTER_BUTTON}
              </button>
            </form>
          )}
        </div>
      </div>

      {/* ── Bottom bar ── */}
      <div style={{
        maxWidth: '1280px',
        margin: '0 auto',
        padding: '1.25rem 2rem',
        borderTop: '1px solid var(--zx-elevated)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        gap: '1rem',
      }}>
        <span style={{ fontSize: '0.78rem', opacity: 0.4, fontFamily: 'Inter, system-ui, sans-serif' }}>
          © {COPYRIGHT_YEAR} {COMPANY_NAME}. All rights reserved.
        </span>
        <nav aria-label="Footer legal navigation" style={{ display: 'flex', gap: '1.25rem' }}>
          {FOOTER_LINKS.map(link => (
            <a
              key={link.label}
              href={link.href}
              style={{
                fontSize: '0.78rem',
                color: 'inherit',
                textDecoration: 'none',
                opacity: 0.4,
                fontFamily: 'Inter, system-ui, sans-serif',
                transition: 'opacity 0.12s',
              }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.opacity = '0.8'; }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.opacity = '0.4'; }}
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </footer>
  );
}
