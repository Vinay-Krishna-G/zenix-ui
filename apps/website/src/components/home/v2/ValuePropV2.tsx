'use client';

import React from 'react';

export function ValuePropV2() {
  return (
    <section style={{ padding: '10rem 2rem', background: '#000' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        
        <div style={{ textAlign: 'center', marginBottom: '6rem' }}>
          <h2 style={{ fontSize: '4rem', fontWeight: 800, letterSpacing: '-0.04em', marginBottom: '1.5rem' }}>
            The old way vs. The Zenix way
          </h2>
          <p style={{ fontSize: '1.5rem', opacity: 0.6, maxWidth: '600px', margin: '0 auto', lineHeight: 1.5 }}>
            Why spend three weeks assembling UI components when you can launch the finished product tonight?
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
          
          {/* Building Manually */}
          <div style={{ background: '#09090B', padding: '4rem', borderRadius: '2rem', border: '1px solid rgba(255,255,255,0.05)', opacity: 0.6 }}>
            <h3 style={{ fontSize: '2rem', fontWeight: 800, marginBottom: '2rem', color: '#FFF' }}>Building Manually</h3>
            <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '1.5rem', marginBottom: '4rem' }}>
              <li style={{ display: 'flex', alignItems: 'center', gap: '1rem', fontSize: '1.25rem' }}>
                <span style={{ color: '#FF5F56' }}>✕</span> Find a design system
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '1rem', fontSize: '1.25rem' }}>
                <span style={{ color: '#FF5F56' }}>✕</span> Copy-paste 40 components
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '1rem', fontSize: '1.25rem' }}>
                <span style={{ color: '#FF5F56' }}>✕</span> Wire up React context
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '1rem', fontSize: '1.25rem' }}>
                <span style={{ color: '#FF5F56' }}>✕</span> Struggle with CSS variables
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '1rem', fontSize: '1.25rem' }}>
                <span style={{ color: '#FF5F56' }}>✕</span> Spend 3 weeks tweaking spacing
              </li>
            </ul>
            <div style={{ fontSize: '2.5rem', fontWeight: 800, color: '#FF5F56' }}>150+ Hours</div>
          </div>

          {/* With ZenixUI */}
          <div style={{ background: 'linear-gradient(135deg, #111 0%, #000 100%)', padding: '4rem', borderRadius: '2rem', border: '1px solid rgba(33,241,168,0.3)', boxShadow: '0 50px 100px -20px rgba(33,241,168,0.1)', position: 'relative', overflow: 'hidden' }}>
            <div style={{ position: 'absolute', top: 0, right: 0, padding: '1rem 2rem', background: 'var(--zx-primary)', color: '#000', fontWeight: 800, borderBottomLeftRadius: '2rem' }}>
              The Smart Way
            </div>
            
            <h3 style={{ fontSize: '2rem', fontWeight: 800, marginBottom: '2rem', color: '#FFF' }}>ZenixUI</h3>
            <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '1.5rem', marginBottom: '4rem' }}>
              <li style={{ display: 'flex', alignItems: 'center', gap: '1rem', fontSize: '1.25rem', fontWeight: 600 }}>
                <span style={{ color: 'var(--zx-primary)' }}>✔</span> Pick your industry
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '1rem', fontSize: '1.25rem', fontWeight: 600 }}>
                <span style={{ color: 'var(--zx-primary)' }}>✔</span> Inject your brand visually
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '1rem', fontSize: '1.25rem', fontWeight: 600 }}>
                <span style={{ color: 'var(--zx-primary)' }}>✔</span> Get the full Next.js source code
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '1rem', fontSize: '1.25rem', fontWeight: 600 }}>
                <span style={{ color: 'var(--zx-primary)' }}>✔</span> SEO and animations built-in
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '1rem', fontSize: '1.25rem', fontWeight: 600 }}>
                <span style={{ color: 'var(--zx-primary)' }}>✔</span> Deploy immediately
              </li>
            </ul>
            <div style={{ fontSize: '3rem', fontWeight: 800, color: 'var(--zx-primary)' }}>3 Minutes</div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
