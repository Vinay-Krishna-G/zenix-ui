'use client';

import React from 'react';
import Link from 'next/link';

export function HowItWorksV2() {
  return (
    <section style={{ padding: '96px 40px', borderBottom: '1px solid rgba(255,255,255,0.08)', background: '#09090B' }}>
      <div style={{ maxWidth: '1440px', margin: '0 auto', textAlign: 'center' }}>
        <h2 style={{ fontSize: '56px', fontWeight: 800, marginBottom: '80px', letterSpacing: '-0.04em', color: '#FAFAFA' }}>
          From zero to production.
        </h2>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '32px', position: 'relative' }}>
          
          {/* Background Connecting Line */}
          <div style={{ position: 'absolute', top: '48px', left: '16%', right: '16%', height: '2px', background: 'rgba(255,255,255,0.08)', zIndex: 0 }} />

          {/* STEP 1 */}
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', position: 'relative', zIndex: 1 }}>
            <div style={{ width: '96px', height: '96px', borderRadius: '50%', background: '#111113', border: '1px solid rgba(255,255,255,0.08)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '28px', fontWeight: 800, color: '#A1A1AA', marginBottom: '32px' }}>
              1
            </div>
            <h3 style={{ fontSize: '28px', fontWeight: 800, marginBottom: '16px', letterSpacing: '-0.02em', color: '#FAFAFA' }}>Choose Experience</h3>
            <p style={{ fontSize: '16px', color: '#A1A1AA', lineHeight: 1.6, maxWidth: '320px' }}>
              Select a handcrafted business foundation. Restaurant, startup, or studio—we have it ready.
            </p>
          </div>

          {/* STEP 2 */}
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', position: 'relative', zIndex: 1 }}>
            <div style={{ width: '96px', height: '96px', borderRadius: '50%', background: '#111113', border: '1px solid rgba(255,255,255,0.08)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '28px', fontWeight: 800, color: '#A1A1AA', marginBottom: '32px' }}>
              2
            </div>
            <h3 style={{ fontSize: '28px', fontWeight: 800, marginBottom: '16px', letterSpacing: '-0.02em', color: '#FAFAFA' }}>Inject Identity</h3>
            <p style={{ fontSize: '16px', color: '#A1A1AA', lineHeight: 1.6, maxWidth: '320px' }}>
              Apply premium Brand Packs and Aesthetics. Watch the entire application adapt instantly.
            </p>
          </div>

          {/* STEP 3 */}
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', position: 'relative', zIndex: 1 }}>
            <div style={{ width: '96px', height: '96px', borderRadius: '50%', background: '#FAFAFA', border: '1px solid #FAFAFA', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '28px', fontWeight: 800, color: '#09090B', marginBottom: '32px', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.2)' }}>
              3
            </div>
            <h3 style={{ fontSize: '28px', fontWeight: 800, marginBottom: '16px', letterSpacing: '-0.02em', color: '#FAFAFA' }}>Launch Tonight</h3>
            <p style={{ fontSize: '16px', color: '#A1A1AA', lineHeight: 1.6, maxWidth: '320px', marginBottom: '32px' }}>
              Get the complete Next.js source code, fully typed and animated. Ready for Vercel.
            </p>
            <Link href="/launchpad" style={{ textDecoration: 'none' }}>
              <button style={{ 
                padding: '16px 32px', background: '#FAFAFA', color: '#09090B', 
                border: 'none', borderRadius: '16px', fontSize: '16px', fontWeight: 700, 
                cursor: 'pointer', transition: 'transform 150ms ease'
              }}
              onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
              onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
              >
                Start Building
              </button>
            </Link>
          </div>

        </div>

      </div>
    </section>
  );
}
