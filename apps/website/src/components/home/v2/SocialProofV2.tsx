'use client';

import React from 'react';

export function SocialProofV2() {
  return (
    <section style={{ padding: '64px 40px', background: '#09090B', borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
      <div style={{ maxWidth: '1440px', margin: '0 auto', textAlign: 'center' }}>
        
        <p style={{ fontSize: '16px', color: '#A1A1AA', fontWeight: 600, marginBottom: '40px', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
          Trusted by 12,000+ Founders, Studios, and Creators
        </p>

        <div style={{ display: 'flex', justifyContent: 'center', gap: '64px', flexWrap: 'wrap', opacity: 0.6 }}>
          {/* Placeholder logos that look premium and abstract */}
          <div style={{ fontSize: '24px', fontWeight: 800, color: '#FAFAFA', letterSpacing: '-0.04em' }}>▲ Vercel</div>
          <div style={{ fontSize: '24px', fontWeight: 800, color: '#FAFAFA', letterSpacing: '-0.04em' }}>● Raycast</div>
          <div style={{ fontSize: '24px', fontWeight: 800, color: '#FAFAFA', letterSpacing: '-0.04em' }}>✦ Linear</div>
          <div style={{ fontSize: '24px', fontWeight: 800, color: '#FAFAFA', letterSpacing: '-0.04em' }}>■ Framer</div>
          <div style={{ fontSize: '24px', fontWeight: 800, color: '#FAFAFA', letterSpacing: '-0.04em' }}>◆ Stripe</div>
        </div>

      </div>
    </section>
  );
}
