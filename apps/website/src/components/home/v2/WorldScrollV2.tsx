'use client';

import React from 'react';
import { EXPERIENCES } from '../../../lib/launchpad';
import { blueprints } from '@zenixui/blueprints';
import Link from 'next/link';

export function WorldScrollV2() {
  const exps = EXPERIENCES.slice(0, 6);

  return (
    <section style={{ padding: '96px 40px', background: '#09090B', borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
      <div style={{ maxWidth: '1440px', margin: '0 auto' }}>
        
        <div style={{ textAlign: 'center', marginBottom: '80px' }}>
          <h2 style={{ fontSize: '56px', fontWeight: 800, letterSpacing: '-0.04em', marginBottom: '16px', color: '#FAFAFA' }}>Six unique worlds.</h2>
          <p style={{ fontSize: '20px', color: '#A1A1AA' }}>Every identity is handcrafted. Scroll to explore.</p>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '96px' }}>
          {exps.map((exp, idx) => {
            const activeAestheticMap = exp.variants[0]?.blueprintIdMap || {};
            const activeBlueprintId = Object.values(activeAestheticMap)[0] || 'zenix-portfolio';
            const ActiveComp = blueprints.find(b => b.id === activeBlueprintId)?.component;

            return (
              <div key={exp.id} style={{ display: 'flex', flexDirection: idx % 2 === 0 ? 'row' : 'row-reverse', gap: '64px', alignItems: 'center' }}>
                
                {/* Marketing / Emotion Side */}
                <div style={{ flex: 1 }}>
                  <div style={{ display: 'inline-block', padding: '8px 16px', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '16px', fontSize: '14px', fontWeight: 600, marginBottom: '24px', color: '#A1A1AA' }}>
                    {exp.personality}
                  </div>
                  <h3 style={{ fontSize: '40px', fontWeight: 800, color: '#FAFAFA', marginBottom: '24px', letterSpacing: '-0.02em', lineHeight: 1.2 }}>
                    {exp.name}
                  </h3>
                  <p style={{ fontSize: '16px', color: '#A1A1AA', marginBottom: '40px', lineHeight: 1.6, maxWidth: '480px' }}>
                    {exp.marketingCopy}
                  </p>
                  
                  <Link href="/launchpad" style={{ textDecoration: 'none' }}>
                    <button style={{ 
                      padding: '16px 32px', background: '#111113', color: '#FAFAFA', 
                      border: '1px solid rgba(255,255,255,0.08)', borderRadius: '16px', fontSize: '16px', fontWeight: 600, 
                      cursor: 'pointer', transition: 'all 150ms ease',
                      display: 'flex', alignItems: 'center', gap: '8px'
                    }}
                    onMouseOver={(e) => { e.currentTarget.style.background = '#FAFAFA'; e.currentTarget.style.color = '#09090B'; }}
                    onMouseOut={(e) => { e.currentTarget.style.background = '#111113'; e.currentTarget.style.color = '#FAFAFA'; }}
                    >
                      Explore {exp.personality} →
                    </button>
                  </Link>
                </div>

                {/* Live Framer-style Browser Side */}
                <div style={{ flex: 1.5, position: 'relative', height: '600px' }}>
                  <div style={{ 
                    width: '100%', height: '100%', 
                    background: '#111113', 
                    borderRadius: '28px', 
                    border: '1px solid rgba(255,255,255,0.08)', 
                    overflow: 'hidden',
                    boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)',
                    display: 'flex', flexDirection: 'column',
                    transition: 'transform 400ms cubic-bezier(0.4, 0, 0.2, 1)'
                  }}
                  onMouseOver={(e) => e.currentTarget.style.transform = 'translateY(-16px) scale(1.02)'}
                  onMouseOut={(e) => e.currentTarget.style.transform = 'translateY(0) scale(1)'}
                  >
                    <div style={{ padding: '16px', background: '#09090B', borderBottom: '1px solid rgba(255,255,255,0.08)', display: 'flex', gap: '8px', alignItems: 'center' }}>
                      <div style={{ width: 12, height: 12, borderRadius: '50%', background: '#EF4444' }} />
                      <div style={{ width: 12, height: 12, borderRadius: '50%', background: '#F59E0B' }} />
                      <div style={{ width: 12, height: 12, borderRadius: '50%', background: '#22C55E' }} />
                    </div>
                    <div style={{ flex: 1, position: 'relative', overflow: 'hidden', background: '#09090B', pointerEvents: 'none' }}>
                      <div style={{ transform: 'scale(0.85)', transformOrigin: 'top center', width: '117%', height: '117%' }}>
                         {ActiveComp ? <ActiveComp /> : null}
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
