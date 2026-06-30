'use client';

/**
 * ╔══════════════════════════════════════════════════════════╗
 * ║  ZenixUI Section — SaaS Header                          ║
 * ║  Install: npx zenix-ui add header/saas                  ║
 * ║  Themes: Zenix · Night City · Ocean                     ║
 * ║                                                          ║
 * ║  Safe to edit:                                           ║
 * ║    • LOGO — brand name or swap for an <img> tag          ║
 * ║    • MAIN_NAV — primary navigation items                 ║
 * ║    • PRODUCT_NAV — secondary/product navigation          ║
 * ║    • USER_AVATAR_SRC — replace with actual user image    ║
 * ║    • NOTIFICATION_COUNT — set to 0 to hide badge         ║
 * ║                                                          ║
 * ║  Avoid changing:                                         ║
 * ║    • CSS variable references (break theme engine)        ║
 * ║    • z-index (breaks stacking with modals/dropdowns)     ║
 * ╚══════════════════════════════════════════════════════════╝
 */

import { useState } from 'react';
import type { SectionMetadata, SectionProps } from '../types';

// ======================================
// SAFE TO EDIT
// ======================================

const content = {
  logo: 'YourApp',
  mainNav: [
    { label: 'Dashboard',  href: '/dashboard' },
    { label: 'Analytics',  href: '/analytics' },
    { label: 'Projects',   href: '/projects' },
    { label: 'Team',       href: '/team' },
  ],
  productNav: [
    { label: 'Upgrade',    href: '/upgrade' },
    { label: 'Docs',       href: '/docs' },
  ],
  user: {
    avatarSrc: null as string | null,
    displayName: 'Alex Johnson',
    initials: 'AJ'
  },
  settings: {
    notificationCount: 3
  }
};

// ======================================

export const sectionMeta: SectionMetadata = {
  name: 'SaaS Header',
  installPath: 'header/saas',
  category: 'header',
  style: 'saas',
  description: 'Full-featured SaaS application header with primary nav, notification bell, and user avatar/menu. Built for logged-in app shells.',
  editable: ['logo', 'mainNav', 'productNav', 'userAvatarSrc', 'userDisplayName', 'notificationCount'],
  compatibleStyles: ['saas', 'dashboard', 'minimal'],
  recommendedThemes: ['zenix', 'midnight'],
  difficulty: 'medium',
  responsive: true,
  tags: ['SaaS', 'Dashboard', 'Sticky', 'User Avatar', 'Notifications', 'Enterprise'],
};

export function SaaSHeader({ className }: SectionProps) {
  const [userMenuOpen, setUserMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState(content.mainNav[0]?.href ?? '');

  return (
    <header
      className={className}
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 100,
        background: 'var(--zx-background)',
        borderBottom: '1px solid var(--zx-elevated)',
        width: '100%',
      }}
    >
      <div style={{
        maxWidth: '1400px',
        margin: '0 auto',
        padding: '0 1.5rem',
        height: '56px',
        display: 'flex',
        alignItems: 'center',
        gap: '1.5rem',
      }}>

        {/* ── Logo ── */}
        <a
          href="/"
          style={{
            fontSize: '1rem',
            fontWeight: 800,
            letterSpacing: '-0.03em',
            textDecoration: 'none',
            color: 'var(--zx-primary)',
            flexShrink: 0,
            fontFamily: 'Inter, system-ui, sans-serif',
          }}
        >
          {content.logo}
        </a>

        {/* ── Divider ── */}
        <div style={{ width: '1px', height: '20px', background: 'var(--zx-elevated)', flexShrink: 0 }} />

        {/* ── Primary Navigation ── */}
        <nav
          aria-label="App navigation"
          style={{ display: 'flex', gap: '0.125rem', flex: 1, alignItems: 'center' }}
        >
          {content.mainNav.map(link => {
            const isActive = activeLink === link.href;
            return (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setActiveLink(link.href)}
                aria-current={isActive ? 'page' : undefined}
                style={{
                  padding: '0.375rem 0.75rem',
                  borderRadius: '6px',
                  fontSize: '0.82rem',
                  fontWeight: isActive ? 600 : 500,
                  color: isActive ? 'inherit' : 'inherit',
                  textDecoration: 'none',
                  opacity: isActive ? 1 : 0.55,
                  background: isActive ? 'var(--zx-elevated)' : 'transparent',
                  fontFamily: 'Inter, system-ui, sans-serif',
                  transition: 'opacity 0.12s, background 0.12s',
                  whiteSpace: 'nowrap',
                }}
                onMouseEnter={e => {
                  if (!isActive) (e.currentTarget as HTMLElement).style.opacity = '0.85';
                }}
                onMouseLeave={e => {
                  if (!isActive) (e.currentTarget as HTMLElement).style.opacity = '0.55';
                }}
              >
                {link.label}
              </a>
            );
          })}
        </nav>

        {/* ── Right side utility icons ── */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.25rem', flexShrink: 0 }}>

          {/* Secondary nav links */}
          {content.productNav.map(link => (
            <a
              key={link.label}
              href={link.href}
              style={{
                padding: '0.35rem 0.65rem',
                borderRadius: '6px',
                fontSize: '0.78rem',
                fontWeight: 600,
                color: 'inherit',
                textDecoration: 'none',
                opacity: 0.5,
                fontFamily: 'Inter, system-ui, sans-serif',
                transition: 'opacity 0.12s',
              }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.opacity = '1'; }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.opacity = '0.5'; }}
            >
              {link.label}
            </a>
          ))}

          {/* Notification bell */}
          <button
            aria-label={`${content.settings.notificationCount} unread notifications`}
            style={{
              position: 'relative',
              width: '34px',
              height: '34px',
              borderRadius: '8px',
              border: 'none',
              background: 'transparent',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'inherit',
              opacity: 0.6,
              transition: 'opacity 0.12s, background 0.12s',
            }}
            onMouseEnter={e => {
              const el = e.currentTarget;
              el.style.opacity = '1';
              el.style.background = 'var(--zx-elevated)';
            }}
            onMouseLeave={e => {
              const el = e.currentTarget;
              el.style.opacity = '0.6';
              el.style.background = 'transparent';
            }}
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <path d="M8 1a5 5 0 0 1 5 5v3l1 2H2l1-2V6a5 5 0 0 1 5-5Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
              <path d="M6 13a2 2 0 0 0 4 0" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
            {content.settings.notificationCount > 0 && (
              <span style={{
                position: 'absolute',
                top: '5px',
                right: '5px',
                width: '8px',
                height: '8px',
                borderRadius: '50%',
                background: 'var(--zx-primary)',
                border: '1.5px solid var(--zx-background)',
              }} />
            )}
          </button>

          {/* User avatar / menu */}
          <div style={{ position: 'relative' }}>
            <button
              aria-label="User menu"
              aria-expanded={userMenuOpen}
              onClick={() => setUserMenuOpen(prev => !prev)}
              style={{
                width: '32px',
                height: '32px',
                borderRadius: '50%',
                border: '2px solid var(--zx-elevated)',
                background: content.user.avatarSrc ? 'transparent' : 'var(--zx-primary)',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                overflow: 'hidden',
                padding: 0,
                fontSize: '0.7rem',
                fontWeight: 700,
                color: 'var(--zx-background)',
                fontFamily: 'Inter, system-ui, sans-serif',
                transition: 'border-color 0.12s',
              }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = 'var(--zx-primary)'; }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = 'var(--zx-elevated)'; }}
            >
              {content.user.avatarSrc ? (
                /* eslint-disable-next-line @next/next/no-img-element */
                <img src={content.user.avatarSrc} alt={content.user.displayName} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              ) : (
                content.user.initials
              )}
            </button>

            {/* User dropdown */}
            {userMenuOpen && (
              <div style={{
                position: 'absolute',
                right: 0,
                top: 'calc(100% + 8px)',
                width: '200px',
                borderRadius: '10px',
                border: '1px solid var(--zx-elevated)',
                background: 'var(--zx-surface)',
                boxShadow: '0 8px 32px rgba(0,0,0,0.4)',
                overflow: 'hidden',
                zIndex: 200,
              }}>
                <div style={{ padding: '0.75rem 1rem', borderBottom: '1px solid var(--zx-elevated)' }}>
                  <div style={{ fontSize: '0.82rem', fontWeight: 700 }}>{content.user.displayName}</div>
                  <div style={{ fontSize: '0.72rem', opacity: 0.5, marginTop: '0.1rem' }}>Free Plan</div>
                </div>
                {['Profile', 'Settings', 'Billing', 'Sign out'].map(item => (
                  <a
                    key={item}
                    href={`/${item.toLowerCase().replace(' ', '-')}`}
                    style={{
                      display: 'block',
                      padding: '0.6rem 1rem',
                      fontSize: '0.82rem',
                      color: 'inherit',
                      textDecoration: 'none',
                      opacity: item === 'Sign out' ? 0.6 : 0.85,
                      fontFamily: 'Inter, system-ui, sans-serif',
                      transition: 'background 0.1s',
                    }}
                    onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = 'var(--zx-elevated)'; }}
                    onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = 'transparent'; }}
                  >
                    {item}
                  </a>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}
