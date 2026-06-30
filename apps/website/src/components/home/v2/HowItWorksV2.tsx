'use client';

import React from 'react';
import Link from 'next/link';

export function HowItWorksV2() {
  return (
    <section style={{ padding: '10rem 2rem', borderBottom: '1px solid rgba(255,255,255,0.05)', background: '#09090B' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <h2 style={{ fontSize: '4rem', fontWeight: 800, textAlign: 'center', marginBottom: '8rem', letterSpacing: '-0.04em' }}>
          From zero to production in minutes.
        </h2>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '6rem', position: 'relative' }}>
          {/* Connecting line */}
          <div style={{ position: 'absolute', top: 0, bottom: 0, left: '40px', width: '2px', background: 'linear-gradient(to bottom, var(--zx-primary), rgba(255,255,255,0.05))', zIndex: 0 }} />

          {/* STEP 1 */}
          <div style={{ display: 'flex', gap: '4rem', alignItems: 'flex-start', position: 'relative', zIndex: 1 }}>
            <div style={{ width: '80px', height: '80px', borderRadius: '50%', background: '#000', border: '2px solid var(--zx-primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '2rem', fontWeight: 800, color: 'var(--zx-primary)', flexShrink: 0, boxShadow: '0 0 30px rgba(33,241,168,0.2)' }}>
              1
            </div>
            <div>
              <h3 style={{ fontSize: '3rem', fontWeight: 800, marginBottom: '1rem', letterSpacing: '-0.03em' }}>Choose your business.</h3>
              <p style={{ fontSize: '1.5rem', opacity: 0.6, maxWidth: '600px', lineHeight: 1.5 }}>
                Browse our gallery of handcrafted experiences. Whether you're a Michelin star restaurant or a Series A startup, we have your foundation ready.
              </p>
            </div>
          </div>

          {/* STEP 2 */}
          <div style={{ display: 'flex', gap: '4rem', alignItems: 'flex-start', position: 'relative', zIndex: 1 }}>
            <div style={{ width: '80px', height: '80px', borderRadius: '50%', background: '#000', border: '2px solid rgba(255,255,255,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '2rem', fontWeight: 800, flexShrink: 0 }}>
              2
            </div>
            <div>
              <h3 style={{ fontSize: '3rem', fontWeight: 800, marginBottom: '1rem', letterSpacing: '-0.03em' }}>Inject your identity.</h3>
              <p style={{ fontSize: '1.5rem', opacity: 0.6, maxWidth: '600px', lineHeight: 1.5 }}>
                No CSS required. Open the Studio Editor and click to instantly inject premium Brand Packs and Aesthetics. Watch the entire website transform in real-time.
              </p>
            </div>
          </div>

          {/* STEP 3 */}
          <div style={{ display: 'flex', gap: '4rem', alignItems: 'flex-start', position: 'relative', zIndex: 1 }}>
            <div style={{ width: '80px', height: '80px', borderRadius: '50%', background: '#FFF', color: '#000', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '2rem', fontWeight: 800, flexShrink: 0 }}>
              3
            </div>
            <div>
              <h3 style={{ fontSize: '3rem', fontWeight: 800, marginBottom: '1rem', letterSpacing: '-0.03em' }}>Launch.</h3>
              <p style={{ fontSize: '1.5rem', opacity: 0.6, maxWidth: '600px', lineHeight: 1.5, marginBottom: '2rem' }}>
                Run the ZenixUI installer in your terminal. Get the complete source code, fully typed, animated, and ready to deploy to Vercel.
              </p>
              <Link href="/launchpad" style={{ textDecoration: 'none' }}>
                <button style={{ padding: '1rem 2.5rem', background: '#FFF', color: '#000', border: 'none', borderRadius: '3rem', fontSize: '1.1rem', fontWeight: 800, cursor: 'pointer' }}>
                  Start Building →
                </button>
              </Link>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
