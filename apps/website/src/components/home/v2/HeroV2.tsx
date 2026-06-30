'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { EXPERIENCES } from '../../../lib/launchpad';
import { blueprints } from '@zenixui/blueprints';

export function HeroV2() {
  const [activeIdx, setActiveIdx] = useState(0);

  // Take the first 5 distinct experiences
  const rotatingExps = EXPERIENCES.slice(0, 5);
  const activeExp = rotatingExps[activeIdx];

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIdx(prev => (prev + 1) % rotatingExps.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [rotatingExps.length]);

  const activeAestheticMap = activeExp?.variants[0]?.blueprintIdMap || {};
  const activeBlueprintId = Object.values(activeAestheticMap)[0] || 'zenix-portfolio';
  const ActiveComp = blueprints.find(b => b.id === activeBlueprintId)?.component;

  return (
    <section style={{ 
      minHeight: '100vh', 
      display: 'flex', 
      alignItems: 'center', 
      padding: '0 2rem', 
      fontFamily: 'Inter, system-ui, sans-serif',
      boxSizing: 'border-box',
      borderBottom: '1px solid rgba(255,255,255,0.05)',
      background: 'radial-gradient(circle at top right, rgba(33,241,168,0.05) 0%, transparent 40%)'
    }}>
      <div style={{ 
        width: '100%', 
        maxWidth: '1600px', 
        margin: '0 auto', 
        display: 'grid', 
        gridTemplateColumns: '1fr 1fr', 
        gap: '4rem', 
        alignItems: 'center' 
      }}>
        
        {/* LEFT SIDE: Marketing */}
        <div>
          <div style={{ display: 'inline-block', padding: '0.4rem 1rem', background: 'rgba(33,241,168,0.1)', color: 'var(--zx-primary)', borderRadius: '2rem', fontSize: '0.875rem', fontWeight: 800, marginBottom: '2rem', border: '1px solid rgba(33,241,168,0.2)' }}>
            ZenixUI 2.0 is live
          </div>
          
          <h1 style={{ fontSize: 'clamp(4rem, 6vw, 6rem)', fontWeight: 800, letterSpacing: '-0.04em', lineHeight: 1, marginBottom: '2rem', color: '#FFF' }}>
            Stop building UI.<br />Launch businesses.
          </h1>
          
          <p style={{ fontSize: '1.5rem', opacity: 0.6, maxWidth: '600px', marginBottom: '3rem', lineHeight: 1.5 }}>
            An entire production-ready website for every industry. Don't start with components. Start with the finished product.
          </p>
          
          <div style={{ display: 'flex', gap: '1rem', marginBottom: '3rem' }}>
            <Link href="/launchpad" style={{ textDecoration: 'none' }}>
              <button style={{ 
                padding: '1.25rem 3rem', background: '#FFF', color: '#000', 
                border: 'none', borderRadius: '3rem', fontSize: '1.1rem', fontWeight: 800, 
                cursor: 'pointer', transition: 'all 0.2s ease',
                boxShadow: '0 10px 30px -10px rgba(255,255,255,0.3)'
              }}>
                Open Launchpad
              </button>
            </Link>
            <Link href="/docs" style={{ textDecoration: 'none' }}>
              <button style={{ 
                padding: '1.25rem 3rem', background: 'rgba(255,255,255,0.05)', color: '#FFF', 
                border: '1px solid rgba(255,255,255,0.1)', borderRadius: '3rem', fontSize: '1.1rem', fontWeight: 700, 
                cursor: 'pointer', transition: 'all 0.2s ease'
              }}>
                Read Docs
              </button>
            </Link>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <div style={{ display: 'flex' }}>
              {[1, 2, 3, 4, 5].map(i => (
                <div key={i} style={{ width: 32, height: 32, borderRadius: '50%', background: '#333', border: '2px solid #000', marginLeft: i > 1 ? -12 : 0 }} />
              ))}
            </div>
            <div style={{ fontSize: '0.875rem', opacity: 0.6 }}>
              <span style={{ color: '#FFB800', fontWeight: 800 }}>★★★★★</span> 12,492 businesses launched
            </div>
          </div>
        </div>

        {/* RIGHT SIDE: Live Browser Preview */}
        <div style={{ position: 'relative', height: '700px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <div style={{ 
            width: '100%', height: '100%', 
            background: '#09090B', 
            borderRadius: '1.5rem', 
            border: '1px solid rgba(255,255,255,0.1)', 
            overflow: 'hidden',
            boxShadow: '0 50px 100px -20px rgba(0,0,0,0.8), 0 0 50px rgba(33,241,168,0.1)',
            display: 'flex', flexDirection: 'column'
          }}>
            {/* Browser chrome */}
            <div style={{ padding: '1rem', background: '#111', borderBottom: '1px solid rgba(255,255,255,0.05)', display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
              <div style={{ width: 12, height: 12, borderRadius: '50%', background: '#FF5F56' }} />
              <div style={{ width: 12, height: 12, borderRadius: '50%', background: '#FFBD2E' }} />
              <div style={{ width: 12, height: 12, borderRadius: '50%', background: '#27C93F' }} />
              <div style={{ margin: '0 auto', fontSize: '0.75rem', opacity: 0.5, fontWeight: 600, padding: '0.25rem 2rem', background: '#000', borderRadius: '1rem' }}>
                {activeExp.name.toLowerCase().replace(/\s+/g, '-')}.com
              </div>
            </div>
            {/* Live component */}
            <div style={{ flex: 1, position: 'relative', overflow: 'hidden' }}>
               <div key={activeExp.id} style={{ position: 'absolute', inset: 0, animation: 'blurFadeIn 0.8s cubic-bezier(0.4, 0, 0.2, 1)' }}>
                 {ActiveComp ? <ActiveComp /> : null}
               </div>
            </div>
          </div>
          
          {/* Label over the browser */}
          <div style={{ position: 'absolute', bottom: '-1.5rem', right: '4rem', padding: '1rem 2rem', background: '#FFF', color: '#000', borderRadius: '2rem', fontWeight: 800, fontSize: '1.25rem', boxShadow: '0 20px 40px rgba(0,0,0,0.5)', zIndex: 10 }}>
            {activeExp.personality} Experience
          </div>
        </div>

      </div>

      <style dangerouslySetInnerHTML={{__html: `
        @keyframes blurFadeIn {
          0% { opacity: 0; filter: blur(10px); transform: scale(0.95); }
          100% { opacity: 1; filter: blur(0); transform: scale(1); }
        }
      `}} />
    </section>
  );
}
