'use client';

/**
 * ThemeGrid — Displays brand identity cards on the homepage.
 *
 * Previously used <Image fill src={brand.image}> which pointed to
 * /previews/brand-packs/*.png files that don't exist.
 *
 * Now renders a CSS gradient swatch derived from the brand's actual colors.
 * This is semantically correct — an identity card should show the color
 * identity, not a broken image.
 */

import React from 'react';
import { IDENTITIES } from '../../../lib/launchpad';
import Link from 'next/link';

export function ThemeGrid() {
  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(380px, 1fr))', gap: '3rem', paddingTop: '2rem' }}>
      {IDENTITIES.slice(0, 4).map(brand => (
        <Link key={brand.id} href="/studio" style={{ textDecoration: 'none', color: 'inherit', display: 'block' }}>
          <div
            style={{
              background: 'var(--zx-surface, #111)',
              borderRadius: '1.5rem',
              border: '1px solid rgba(255,255,255,0.05)',
              overflow: 'hidden',
              cursor: 'pointer',
              transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
              boxShadow: '0 4px 6px -1px rgba(0,0,0,0.1)',
            }}
            onMouseOver={e => {
              e.currentTarget.style.transform = 'translateY(-6px) scale(1.02)';
              e.currentTarget.style.borderColor = 'rgba(255,255,255,0.2)';
              e.currentTarget.style.boxShadow = '0 25px 50px -12px rgba(0,0,0,0.5)';
            }}
            onMouseOut={e => {
              e.currentTarget.style.transform = 'translateY(0) scale(1)';
              e.currentTarget.style.borderColor = 'rgba(255,255,255,0.05)';
              e.currentTarget.style.boxShadow = '0 4px 6px -1px rgba(0,0,0,0.1)';
            }}
          >
            {/*
             * Brand identity swatch — shows the actual primary color as a
             * gradient panel. No PNG needed: the color IS the identity.
             */}
            <div style={{
              width: '100%',
              height: '160px',
              background: `linear-gradient(135deg, ${brand.colors.background} 0%, ${brand.colors.surface} 40%, ${brand.colors.primary}22 100%)`,
              position: 'relative',
              display: 'flex',
              alignItems: 'flex-end',
              padding: '1.5rem',
            }}>
              {/* Color accent orbs */}
              <div style={{
                position: 'absolute', top: '1.5rem', right: '1.5rem',
                display: 'flex', gap: '0.5rem',
              }}>
                <div style={{ width: 20, height: 20, borderRadius: '50%', background: brand.colors.primary, boxShadow: `0 0 16px ${brand.colors.primary}88` }} />
                <div style={{ width: 20, height: 20, borderRadius: '50%', background: brand.colors.surface, border: '1px solid rgba(255,255,255,0.15)' }} />
                <div style={{ width: 20, height: 20, borderRadius: '50%', background: brand.colors.background, border: '1px solid rgba(255,255,255,0.1)' }} />
              </div>
              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.7) 0%, transparent 100%)' }} />
            </div>

            <div style={{ padding: '2rem', display: 'flex', flexDirection: 'column' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
                <h3 style={{ fontSize: '1.5rem', fontWeight: 800, margin: 0, color: '#FFF' }}>{brand.name}</h3>
                <div style={{ display: 'flex', gap: '0.25rem' }}>
                  {Object.values(brand.colors).map((c, i) => (
                    <div key={i} style={{ width: 16, height: 16, borderRadius: '50%', background: c, border: '1px solid rgba(255,255,255,0.2)' }} />
                  ))}
                </div>
              </div>
              <p style={{ fontSize: '1rem', color: brand.colors.primary, margin: '0 0 1rem', fontWeight: 600 }}>{brand.mood}</p>

              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: '1.5rem', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
                <span style={{ fontSize: '0.875rem', opacity: 0.6 }}>Used in {brand.usedFor[0]}</span>
                <span style={{ fontSize: '0.875rem', fontWeight: 600, opacity: 0.8 }}>Try Brand Pack &rarr;</span>
              </div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}
