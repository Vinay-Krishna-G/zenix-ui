'use client';

import React from 'react';

export function ValuePropV2() {
  return (
    <section style={{ padding: '96px 40px', background: '#09090B' }}>
      <div style={{ maxWidth: '1440px', margin: '0 auto' }}>
        
        <div style={{ textAlign: 'center', marginBottom: '80px' }}>
          <h2 style={{ fontSize: '56px', fontWeight: 800, letterSpacing: '-0.04em', marginBottom: '24px', color: '#FAFAFA' }}>
            The old way vs. The Zenix way
          </h2>
          <p style={{ fontSize: '20px', color: '#A1A1AA', maxWidth: '600px', margin: '0 auto', lineHeight: 1.5 }}>
            Why spend three weeks assembling UI components when you can launch the finished product tonight?
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '40px' }}>
          
          {/* Building Manually (Visual Mess) */}
          <div style={{ background: '#111113', padding: '48px', borderRadius: '24px', border: '1px solid rgba(255,255,255,0.08)', position: 'relative', overflow: 'hidden' }}>
            <h3 style={{ fontSize: '28px', fontWeight: 800, marginBottom: '32px', color: '#FAFAFA' }}>Building Manually</h3>
            
            {/* Fake VS Code Error Terminal */}
            <div style={{ background: '#09090B', borderRadius: '16px', border: '1px solid rgba(255,255,255,0.08)', padding: '16px', fontFamily: 'monospace', fontSize: '14px', lineHeight: 1.6, marginBottom: '40px' }}>
              <div style={{ color: '#A1A1AA' }}>$ npm install @ui/components</div>
              <div style={{ color: '#EF4444', marginTop: '8px' }}>npm ERR! code ERESOLVE</div>
              <div style={{ color: '#EF4444' }}>npm ERR! ERESOLVE unable to resolve dependency tree</div>
              <div style={{ color: '#A1A1AA', marginTop: '8px' }}>...</div>
              <div style={{ color: '#A1A1AA', marginTop: '8px' }}>$ npm run dev</div>
              <div style={{ color: '#EF4444', marginTop: '8px' }}>Module not found: Error: Can't resolve '../context/ThemeProvider'</div>
            </div>

            <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '16px', marginBottom: '48px' }}>
              <li style={{ display: 'flex', alignItems: 'center', gap: '16px', fontSize: '16px', color: '#A1A1AA' }}>
                <span style={{ color: '#EF4444' }}>✕</span> Connect 40 fragmented components
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '16px', fontSize: '16px', color: '#A1A1AA' }}>
                <span style={{ color: '#EF4444' }}>✕</span> Debug hydration errors
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '16px', fontSize: '16px', color: '#A1A1AA' }}>
                <span style={{ color: '#EF4444' }}>✕</span> Spend days tweaking CSS spacing
              </li>
            </ul>
            <div style={{ fontSize: '40px', fontWeight: 800, color: '#A1A1AA' }}>150+ Hours</div>
          </div>

          {/* With ZenixUI (Visual Clarity) */}
          <div style={{ background: '#111113', padding: '48px', borderRadius: '24px', border: '1px solid rgba(255,255,255,0.08)', position: 'relative', overflow: 'hidden' }}>
            <h3 style={{ fontSize: '28px', fontWeight: 800, marginBottom: '32px', color: '#FAFAFA' }}>The Zenix Way</h3>
            
            {/* Fake Perfect Result */}
            <div style={{ background: '#09090B', borderRadius: '16px', border: '1px solid rgba(255,255,255,0.08)', padding: '16px', height: '160px', marginBottom: '40px', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative', overflow: 'hidden' }}>
              <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '4px', background: '#5E6AD2' }} />
              <div style={{ textAlign: 'center' }}>
                <div style={{ width: '48px', height: '48px', borderRadius: '50%', background: '#22C55E', color: '#09090B', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '24px', fontWeight: 800, margin: '0 auto 16px', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.2)' }}>
                  ✔
                </div>
                <div style={{ color: '#FAFAFA', fontWeight: 600, fontSize: '16px' }}>Deployed to Production</div>
                <div style={{ color: '#A1A1AA', fontSize: '14px', marginTop: '4px' }}>https://your-startup.com</div>
              </div>
            </div>

            <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '16px', marginBottom: '48px' }}>
              <li style={{ display: 'flex', alignItems: 'center', gap: '16px', fontSize: '16px', color: '#A1A1AA' }}>
                <span style={{ color: '#5E6AD2' }}>✔</span> Fully composed Next.js pages
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '16px', fontSize: '16px', color: '#A1A1AA' }}>
                <span style={{ color: '#5E6AD2' }}>✔</span> Global state & context wired
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '16px', fontSize: '16px', color: '#A1A1AA' }}>
                <span style={{ color: '#5E6AD2' }}>✔</span> Perfect design system out of the box
              </li>
            </ul>
            <div style={{ fontSize: '40px', fontWeight: 800, color: '#FAFAFA' }}>3 Minutes</div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
