'use client';

import React from 'react';
import { IDENTITIES } from '../../../lib/launchpad';
import Image from 'next/image';
import Link from 'next/link';

export function ThemeGrid() {
  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(380px, 1fr))', gap: '3rem', paddingTop: '2rem' }}>
      {IDENTITIES.slice(0, 4).map(brand => (
        <Link key={brand.id} href="/studio" style={{ textDecoration: 'none', color: 'inherit', display: 'block' }}>
          <div style={{
            background: 'var(--zx-surface, #111)',
            borderRadius: '1.5rem',
            border: '1px solid rgba(255,255,255,0.05)',
            overflow: 'hidden',
            cursor: 'pointer',
            transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
            boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)'
          }}
          onMouseOver={(e) => {
            e.currentTarget.style.transform = 'translateY(-6px) scale(1.02)';
            e.currentTarget.style.borderColor = 'rgba(255,255,255,0.2)';
            e.currentTarget.style.boxShadow = '0 25px 50px -12px rgba(0, 0, 0, 0.5)';
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.transform = 'translateY(0) scale(1)';
            e.currentTarget.style.borderColor = 'rgba(255,255,255,0.05)';
            e.currentTarget.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)';
          }}
          >
            <div style={{ width: '100%', height: '160px', position: 'relative', background: '#09090B' }}>
              <Image src={brand.image} alt={brand.name} fill style={{ objectFit: 'cover' }} loading="lazy" />
              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.8) 0%, transparent 100%)' }} />
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
