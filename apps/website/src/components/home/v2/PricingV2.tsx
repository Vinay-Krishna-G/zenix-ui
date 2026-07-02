'use client';

import React from 'react';
import Link from 'next/link';

export function PricingV2() {
  return (
    <section style={{ padding: '10rem 2rem', background: '#000', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        
        <div style={{ textAlign: 'center', marginBottom: '6rem' }}>
          <h2 style={{ fontSize: '4rem', fontWeight: 800, letterSpacing: '-0.04em', marginBottom: '1.5rem' }}>
            Simple, transparent pricing.
          </h2>
          <p style={{ fontSize: '1.5rem', opacity: 0.6, maxWidth: '600px', margin: '0 auto', lineHeight: 1.5 }}>
            No subscriptions. No limits. Pay once, build forever.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr', maxWidth: '600px', margin: '0 auto', gap: '2rem' }}>
          
          <div style={{ background: '#09090B', padding: '4rem', borderRadius: '2rem', border: '1px solid rgba(33,241,168,0.3)', boxShadow: '0 50px 100px -20px rgba(33,241,168,0.1)', textAlign: 'center' }}>
            <h3 style={{ fontSize: '2.5rem', fontWeight: 800, marginBottom: '1rem', color: '#FFF' }}>Lifetime Access</h3>
            <div style={{ fontSize: '4rem', fontWeight: 800, color: '#FFF', marginBottom: '1rem', letterSpacing: '-0.05em' }}>
              $149 <span style={{ fontSize: '1.5rem', opacity: 0.5, fontWeight: 500, letterSpacing: 'normal' }}>USD</span>
            </div>
            <p style={{ fontSize: '1.25rem', opacity: 0.6, marginBottom: '3rem' }}>Everything you need to launch unlimited startups, agencies, and portfolios.</p>
            
            <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '1.5rem', marginBottom: '4rem', textAlign: 'left' }}>
              <li style={{ display: 'flex', alignItems: 'center', gap: '1rem', fontSize: '1.25rem', fontWeight: 600 }}>
                <span style={{ color: 'var(--zx-primary)' }}>✔</span> All 15+ Production Experiences
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '1rem', fontSize: '1.25rem', fontWeight: 600 }}>
                <span style={{ color: 'var(--zx-primary)' }}>✔</span> All Premium Brand Packs
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '1rem', fontSize: '1.25rem', fontWeight: 600 }}>
                <span style={{ color: 'var(--zx-primary)' }}>✔</span> Unlimited commercial projects
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '1rem', fontSize: '1.25rem', fontWeight: 600 }}>
                <span style={{ color: 'var(--zx-primary)' }}>✔</span> Lifetime updates
              </li>
            </ul>

            <Link href="/experiences" style={{ textDecoration: 'none' }}>
              <button style={{ 
                width: '100%', padding: '1.5rem', background: 'var(--zx-primary)', 
                color: '#000', border: 'none', borderRadius: '3rem', fontSize: '1.25rem', fontWeight: 800, 
                cursor: 'pointer', transition: 'transform 0.2s ease',
                boxShadow: '0 20px 40px -10px rgba(33,241,168,0.4)'
              }}
              onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.02)'}
              onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
              >
                Get ZenixUI
              </button>
            </Link>
          </div>
          
        </div>

      </div>
    </section>
  );
}
