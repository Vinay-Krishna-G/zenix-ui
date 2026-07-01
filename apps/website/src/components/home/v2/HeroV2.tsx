'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { EXPERIENCES } from '../../../lib/launchpad';
import { LivePreview } from '../../preview/LivePreview';

export function HeroV2() {
  const [activeIdx, setActiveIdx] = useState(0);

  const rotatingExps = EXPERIENCES.filter(e => ['ai-startup', 'dental-clinic', 'agency', 'architecture', 'fine-dining'].includes(e.id));
  const activeExp = rotatingExps[activeIdx];

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIdx(prev => (prev + 1) % rotatingExps.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [rotatingExps.length]);

  const activeAestheticMap = activeExp?.variants[0]?.blueprintIdMap || {};
  const activeAestheticId = Object.keys(activeAestheticMap)[0] || 'glass';

  return (
    <section style={{ 
      minHeight: '100vh', 
      display: 'flex', 
      alignItems: 'center', 
      padding: '0 40px', 
      fontFamily: 'Inter, system-ui, sans-serif',
      boxSizing: 'border-box',
      borderBottom: '1px solid rgba(255,255,255,0.08)',
      background: '#09090B'
    }}>
      <div style={{ 
        width: '100%', 
        maxWidth: '1600px', 
        margin: '0 auto', 
        display: 'grid', 
        gridTemplateColumns: '1fr 1fr', 
        gap: '64px', 
        alignItems: 'center' 
      }}>
        
        {/* LEFT SIDE: Marketing */}
        <div>
          <div style={{ display: 'inline-block', padding: '8px 16px', background: 'transparent', color: '#FAFAFA', borderRadius: '16px', fontSize: '14px', fontWeight: 600, marginBottom: '32px', border: '1px solid rgba(255,255,255,0.08)' }}>
            ZenixUI 2.0 is live
          </div>
          
          <h1 style={{ fontSize: '80px', fontWeight: 800, letterSpacing: '-0.04em', lineHeight: 1, marginBottom: '24px', color: '#FAFAFA' }}>
            Stop building UI.<br />Launch businesses.
          </h1>
          
          <p style={{ fontSize: '20px', color: '#A1A1AA', maxWidth: '600px', marginBottom: '48px', lineHeight: 1.5 }}>
            An entire production-ready website for every industry. Don't start with components. Start with the finished product.
          </p>
          
          <div style={{ display: 'flex', gap: '16px', marginBottom: '48px' }}>
            <Link href="/launchpad" style={{ textDecoration: 'none' }}>
              <button style={{ 
                padding: '16px 32px', background: '#FAFAFA', color: '#09090B', 
                border: 'none', borderRadius: '16px', fontSize: '16px', fontWeight: 700, 
                cursor: 'pointer', transition: 'all 150ms ease'
              }}
              onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.02)'}
              onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
              >
                Open Launchpad
              </button>
            </Link>
            <Link href="/docs" style={{ textDecoration: 'none' }}>
              <button style={{ 
                padding: '16px 32px', background: '#111113', color: '#FAFAFA', 
                border: '1px solid rgba(255,255,255,0.08)', borderRadius: '16px', fontSize: '16px', fontWeight: 600, 
                cursor: 'pointer', transition: 'all 150ms ease'
              }}
              onMouseOver={(e) => e.currentTarget.style.background = '#18181B'}
              onMouseOut={(e) => e.currentTarget.style.background = '#111113'}
              >
                Read Docs
              </button>
            </Link>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <div style={{ display: 'flex' }}>
              {[1, 2, 3, 4, 5].map(i => (
                <div key={i} style={{ width: 32, height: 32, borderRadius: '50%', background: '#18181B', border: '1px solid rgba(255,255,255,0.08)', marginLeft: i > 1 ? -12 : 0 }} />
              ))}
            </div>
            <div style={{ fontSize: '14px', color: '#A1A1AA' }}>
              12,492 businesses launched
            </div>
          </div>
        </div>

        {/* RIGHT SIDE: Live Browser Preview (Framer Style 3D Perspective) */}
        <div style={{ position: 'relative', height: '800px', display: 'flex', alignItems: 'center', justifyContent: 'center', perspective: '2000px' }}>
          
          <div style={{ 
            width: '100%', height: '100%', 
            background: '#111113', 
            borderRadius: '28px', 
            border: '1px solid rgba(255,255,255,0.08)', 
            overflow: 'hidden',
            boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)',
            display: 'flex', flexDirection: 'column',
            transform: 'rotateY(-15deg) rotateX(5deg) scale(0.95)',
            transformOrigin: 'right center',
            transition: 'transform 400ms cubic-bezier(0.4, 0, 0.2, 1)'
          }}
          onMouseOver={(e) => { e.currentTarget.style.transform = 'rotateY(-5deg) rotateX(2deg) scale(1.02)'; }}
          onMouseOut={(e) => { e.currentTarget.style.transform = 'rotateY(-15deg) rotateX(5deg) scale(0.95)'; }}
          >
            {/* Glass Reflection */}
            <div style={{ position: 'absolute', top: 0, left: '-100%', width: '50%', height: '200%', background: 'linear-gradient(to right, rgba(255,255,255,0) 0%, rgba(255,255,255,0.03) 50%, rgba(255,255,255,0) 100%)', transform: 'rotate(45deg)', animation: 'glassShine 6s infinite', zIndex: 10, pointerEvents: 'none' }} />

            {/* Browser chrome */}
            <div style={{ padding: '16px', background: '#09090B', borderBottom: '1px solid rgba(255,255,255,0.08)', display: 'flex', gap: '8px', alignItems: 'center' }}>
              <div style={{ width: 12, height: 12, borderRadius: '50%', background: '#EF4444' }} />
              <div style={{ width: 12, height: 12, borderRadius: '50%', background: '#F59E0B' }} />
              <div style={{ width: 12, height: 12, borderRadius: '50%', background: '#22C55E' }} />
              <div style={{ margin: '0 auto', fontSize: '14px', color: '#A1A1AA', fontWeight: 500, padding: '4px 32px', background: '#111113', borderRadius: '16px', border: '1px solid rgba(255,255,255,0.08)' }}>
                {activeExp.name.toLowerCase().replace(/\s+/g, '-')}.com
              </div>
            </div>

            {/* Live component */}
            <div style={{ flex: 1, position: 'relative', overflow: 'hidden', background: '#09090B' }}>
               <div key={activeExp.id} style={{ position: 'absolute', inset: 0, animation: 'blurFadeIn 400ms cubic-bezier(0.4, 0, 0.2, 1)' }}>
                 <LivePreview 
                   experienceId={activeExp.id} 
                   brandId="tiffany" 
                   variantId={activeExp.variants[0].id}
                   aestheticId={activeAestheticId}
                 />
               </div>
            </div>
          </div>
          
        </div>

      </div>

      <style dangerouslySetInnerHTML={{__html: `
        @keyframes blurFadeIn {
          0% { opacity: 0; filter: blur(10px); }
          100% { opacity: 1; filter: blur(0); }
        }
        @keyframes glassShine {
          0% { left: -100%; }
          20% { left: 200%; }
          100% { left: 200%; }
        }
      `}} />
    </section>
  );
}
