'use client';

import React, { useState } from 'react';
import { EXPERIENCES } from '../../../lib/launchpad';
import { blueprints } from '@zenixui/blueprints';
import Link from 'next/link';

export function LiveCarousel() {
  const exps = EXPERIENCES.slice(0, 6);
  const [activeIdx, setActiveIdx] = useState(0);

  const activeExp = exps[activeIdx];
  const activeAestheticMap = activeExp?.variants[0]?.blueprintIdMap || {};
  const activeBlueprintId = Object.values(activeAestheticMap)[0] || 'zenix-portfolio';
  const ActiveComp = blueprints.find(b => b.id === activeBlueprintId)?.component;

  return (
    <section style={{ padding: '8rem 2rem', background: '#000', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
      <div style={{ maxWidth: '1440px', margin: '0 auto' }}>
        
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <h2 style={{ fontSize: '4rem', fontWeight: 800, letterSpacing: '-0.04em', marginBottom: '1rem' }}>Six unique worlds.</h2>
          <p style={{ fontSize: '1.5rem', opacity: 0.6 }}>Every identity is handcrafted. No generic layouts.</p>
        </div>

        {/* Buttons */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', marginBottom: '4rem', flexWrap: 'wrap' }}>
          {exps.map((exp, i) => (
            <button
              key={exp.id}
              onClick={() => setActiveIdx(i)}
              style={{
                padding: '1rem 2rem',
                background: activeIdx === i ? '#FFF' : 'transparent',
                color: activeIdx === i ? '#000' : '#FFF',
                border: activeIdx === i ? '1px solid transparent' : '1px solid rgba(255,255,255,0.2)',
                borderRadius: '3rem',
                fontSize: '1rem',
                fontWeight: 700,
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                boxShadow: activeIdx === i ? '0 10px 20px rgba(255,255,255,0.2)' : 'none'
              }}
            >
              {exp.name}
            </button>
          ))}
        </div>

        {/* Huge Live Browser */}
        <div style={{ position: 'relative', height: '800px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <div style={{ 
            width: '100%', height: '100%', 
            background: '#09090B', 
            borderRadius: '1.5rem', 
            border: '1px solid rgba(255,255,255,0.1)', 
            overflow: 'hidden',
            boxShadow: '0 50px 100px -20px rgba(0,0,0,0.5)',
            display: 'flex', flexDirection: 'column'
          }}>
            <div style={{ padding: '1rem', background: '#111', borderBottom: '1px solid rgba(255,255,255,0.05)', display: 'flex', gap: '0.5rem', alignItems: 'center', justifyContent: 'space-between' }}>
              <div style={{ display: 'flex', gap: '0.5rem' }}>
                <div style={{ width: 12, height: 12, borderRadius: '50%', background: '#FF5F56' }} />
                <div style={{ width: 12, height: 12, borderRadius: '50%', background: '#FFBD2E' }} />
                <div style={{ width: 12, height: 12, borderRadius: '50%', background: '#27C93F' }} />
              </div>
              <div style={{ fontSize: '0.875rem', opacity: 0.5, fontWeight: 600, padding: '0.25rem 2rem', background: '#000', borderRadius: '1rem' }}>
                https://{activeExp.name.toLowerCase().replace(/\s+/g, '-')}.com
              </div>
              <Link href="/launchpad" style={{ color: 'var(--zx-primary)', fontSize: '0.875rem', fontWeight: 700, textDecoration: 'none' }}>Launch this →</Link>
            </div>
            
            <div style={{ flex: 1, position: 'relative', overflowY: 'auto' }}>
               <div key={activeExp.id} style={{ position: 'absolute', inset: 0, animation: 'fadeIn 0.5s ease-out' }}>
                 {ActiveComp ? <ActiveComp /> : null}
               </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
