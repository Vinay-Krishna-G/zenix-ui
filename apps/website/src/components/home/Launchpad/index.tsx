'use client';

import React, { useState } from 'react';
import { 
  EXPERIENCES, 
  BRAND_PACKS, 
  AESTHETICS, 
  INDUSTRIES,
  Experience, 
  BrandPack, 
  Aesthetic, 
  Variant
} from '../../../lib/launchpad';
import Image from 'next/image';
import { blueprints } from '@zenixui/blueprints';
import Link from 'next/link';

export function Launchpad() {
  const [view, setView] = useState<'browse' | 'details' | 'compose' | 'compare'>('browse');
  const [activeExperience, setActiveExperience] = useState<Experience>(EXPERIENCES[0]);
  const [activeVariant, setActiveVariant] = useState<Variant>(EXPERIENCES[0].variants[0]);
  const [activeBrand, setActiveBrand] = useState<BrandPack>(BRAND_PACKS.find(b => b.id === 'tiffany') || BRAND_PACKS[0]);
  const [activeAesthetic, setActiveAesthetic] = useState<Aesthetic>(AESTHETICS.find(a => a.id === 'glass') || AESTHETICS[0]);
  
  const [showCli, setShowCli] = useState(false);
  const [installLevel, setInstallLevel] = useState<'cli' | 'compose' | 'manual'>('cli');

  const handleSelectExperience = (exp: Experience) => {
    setActiveExperience(exp);
    setActiveVariant(exp.variants[0]);
    setShowCli(false);
    setView('details');
  };

  const activeBlueprintId = activeVariant.blueprintIdMap[activeAesthetic.id] || 'zenix-portfolio';
  const ActiveBlueprintComponent = blueprints.find(b => b.id === activeBlueprintId)?.component;

  // ─────────────────────────────────────────────────────────────────────────────
  // 1. BROWSE VIEW (Redirected to the Homepage in V4 vision usually, but we'll keep the grid here for full gallery)
  // ─────────────────────────────────────────────────────────────────────────────
  if (view === 'browse') {
    return (
      <div style={{ maxWidth: '1440px', margin: '0 auto', padding: '4rem 2rem', fontFamily: 'Inter, system-ui, sans-serif' }}>
        <h1 style={{ fontSize: '4rem', fontWeight: 800, marginBottom: '1rem', letterSpacing: '-0.04em' }}>Launchpad Gallery</h1>
        <p style={{ fontSize: '1.5rem', opacity: 0.7, marginBottom: '4rem', maxWidth: '600px', lineHeight: 1.6 }}>
          Explore the complete collection of production-ready experiences.
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(380px, 1fr))', gap: '3rem' }}>
          {EXPERIENCES.map(exp => (
            <div 
              key={exp.id} 
              onClick={() => handleSelectExperience(exp)}
              style={{ 
                cursor: 'pointer', transition: 'all 0.4s ease', position: 'relative',
                background: 'var(--zx-surface)', borderRadius: '1.5rem', border: '1px solid rgba(255,255,255,0.05)',
                display: 'flex', flexDirection: 'column', overflow: 'hidden'
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.transform = 'translateY(-8px) scale(1.01)';
                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.2)';
                e.currentTarget.style.boxShadow = '0 25px 50px -12px rgba(0, 0, 0, 0.5)';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = 'translateY(0) scale(1)';
                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.05)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              <div style={{ width: '100%', aspectRatio: '16/10', position: 'relative' }}>
                <Image src={exp.coverImage} alt={exp.name} fill style={{ objectFit: 'cover' }} loading="lazy" />
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.8) 0%, transparent 100%)' }} />
                
                <div style={{ position: 'absolute', top: '1.5rem', left: '1.5rem' }}>
                  <span style={{ padding: '0.4rem 1rem', background: 'rgba(255,255,255,0.1)', backdropFilter: 'blur(8px)', borderRadius: '2rem', fontSize: '0.75rem', color: '#FFF', fontWeight: 800, letterSpacing: '0.1em', textTransform: 'uppercase' }}>
                    {exp.personality}
                  </span>
                </div>
                
                <h3 style={{ position: 'absolute', bottom: '1.5rem', left: '1.5rem', fontSize: '2rem', fontWeight: 800, zIndex: 10, color: '#FFF' }}>
                  {exp.name}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  // ─────────────────────────────────────────────────────────────────────────────
  // 2. DETAILS VIEW (The Premium Product Page)
  // ─────────────────────────────────────────────────────────────────────────────
  if (view === 'details') {
    return (
      <div style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
        
        {/* Fixed Navigation Header */}
        <div style={{ position: 'sticky', top: 0, zIndex: 100, background: 'rgba(9,9,11,0.8)', backdropFilter: 'blur(20px)', borderBottom: '1px solid rgba(255,255,255,0.1)', padding: '1rem 2rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <button onClick={() => setView('browse')} style={{ background: 'none', border: 'none', color: 'var(--zx-text)', cursor: 'pointer', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            ← Gallery
          </button>
          <div style={{ fontWeight: 800 }}>{activeExperience.personality}</div>
          <button onClick={() => setView('compose')} style={{ padding: '0.5rem 1.5rem', background: 'var(--zx-primary)', color: '#000', border: 'none', borderRadius: '2rem', fontWeight: 700, cursor: 'pointer' }}>
            Customize & Launch
          </button>
        </div>

        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '4rem 2rem 10rem' }}>
          
          {/* Header Section */}
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <div style={{ display: 'inline-flex', gap: '1rem', marginBottom: '2rem' }}>
              <span style={{ padding: '0.4rem 1rem', background: 'rgba(33,241,168,0.1)', color: 'var(--zx-primary)', borderRadius: '2rem', fontSize: '0.875rem', fontWeight: 700 }}>
                Deploy Ready
              </span>
              <span style={{ padding: '0.4rem 1rem', background: 'rgba(255,255,255,0.05)', borderRadius: '2rem', fontSize: '0.875rem', fontWeight: 600 }}>
                ★★★★★ {activeExperience.rating}
              </span>
            </div>
            <h1 style={{ fontSize: '5rem', fontWeight: 800, letterSpacing: '-0.04em', marginBottom: '1.5rem', lineHeight: 1 }}>
              {activeExperience.name}
            </h1>
            <p style={{ fontSize: '1.5rem', opacity: 0.6, maxWidth: '600px', margin: '0 auto 3rem' }}>
              {activeExperience.promise}
            </p>
            <button onClick={() => setView('compose')} style={{ padding: '1.25rem 3rem', background: 'var(--zx-text)', color: 'var(--zx-background)', border: 'none', borderRadius: '3rem', fontSize: '1.1rem', fontWeight: 800, cursor: 'pointer' }}>
              Customize Experience
            </button>
          </div>

          {/* Massive Hero Preview */}
          <div style={{ 
            width: '100%', height: '700px', position: 'relative', borderRadius: '1.5rem', overflow: 'hidden',
            border: '1px solid rgba(255,255,255,0.1)', boxShadow: '0 25px 50px -12px rgba(0,0,0,0.5)',
            marginBottom: '8rem'
          }}>
            <Image src={activeExperience.coverImage} alt={activeExperience.name} fill style={{ objectFit: 'cover' }} priority />
          </div>

          {/* Features & Pages Grid */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '6rem', marginBottom: '8rem' }}>
            <div>
              <h3 style={{ fontSize: '2rem', fontWeight: 800, marginBottom: '2rem', letterSpacing: '-0.02em' }}>Pages & Outcomes</h3>
              <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                {activeExperience.includes.outcomes.map(out => (
                  <li key={out} style={{ display: 'flex', alignItems: 'center', gap: '1rem', fontSize: '1.1rem', fontWeight: 500 }}>
                    <span style={{ color: 'var(--zx-primary)' }}>✔</span> {out}
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h3 style={{ fontSize: '2rem', fontWeight: 800, marginBottom: '2rem', letterSpacing: '-0.02em' }}>Perfect For</h3>
              <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                {activeExperience.perfectFor.map(pf => (
                  <li key={pf} style={{ display: 'flex', alignItems: 'center', gap: '1rem', fontSize: '1.1rem', fontWeight: 500 }}>
                    <span style={{ color: 'var(--zx-text)', opacity: 0.5 }}>→</span> {pf}
                  </li>
                ))}
              </ul>

              <div style={{ marginTop: '4rem', padding: '2rem', background: 'rgba(255,255,255,0.02)', borderRadius: '1rem', border: '1px solid rgba(255,255,255,0.05)' }}>
                <h4 style={{ fontSize: '0.875rem', textTransform: 'uppercase', letterSpacing: '0.1em', opacity: 0.5, marginBottom: '1rem' }}>Technical Specs</h4>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                  <div>
                    <div style={{ fontSize: '2rem', fontWeight: 800 }}>{activeExperience.includes.technicalDetails.files}</div>
                    <div style={{ fontSize: '0.875rem', opacity: 0.5 }}>Files</div>
                  </div>
                  <div>
                    <div style={{ fontSize: '2rem', fontWeight: 800 }}>{activeExperience.includes.technicalDetails.components}</div>
                    <div style={{ fontSize: '0.875rem', opacity: 0.5 }}>Components</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div style={{ textAlign: 'center', padding: '6rem 2rem', background: '#111', borderRadius: '1.5rem', border: '1px solid rgba(255,255,255,0.05)' }}>
            <h2 style={{ fontSize: '3rem', fontWeight: 800, marginBottom: '1rem', letterSpacing: '-0.03em' }}>Ready to launch?</h2>
            <p style={{ fontSize: '1.25rem', opacity: 0.6, marginBottom: '3rem' }}>Open the studio to customize your aesthetic and brand pack.</p>
            <button onClick={() => setView('compose')} style={{ padding: '1.25rem 3rem', background: 'var(--zx-primary)', color: '#000', border: 'none', borderRadius: '3rem', fontSize: '1.1rem', fontWeight: 800, cursor: 'pointer' }}>
              Launch {activeExperience.personality}
            </button>
          </div>

        </div>
      </div>
    );
  }

  // ─────────────────────────────────────────────────────────────────────────────
  // 3. COMPOSE VIEW (Real Engine Rendering + Premium Motion)
  // ─────────────────────────────────────────────────────────────────────────────
  if (view === 'compose') {
    return (
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 400px', gap: '0', height: '100vh', boxSizing: 'border-box' }}>
        
        {/* Center: Live Engine Canvas */}
        <main style={{ 
          background: activeBrand.colors.background,
          color: activeBrand.colors.surface,
          overflowY: 'auto',
          position: 'relative',
          display: 'flex',
          flexDirection: 'column',
          transition: 'background 0.8s cubic-bezier(0.4, 0, 0.2, 1), color 0.8s cubic-bezier(0.4, 0, 0.2, 1)'
        }}>
          {/* Header Controls */}
          <div style={{ position: 'sticky', top: 0, zIndex: 100, padding: '1.5rem 2rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: `linear-gradient(to bottom, ${activeBrand.colors.background} 50%, transparent)` }}>
            <button onClick={() => setView('details')} style={{ background: 'rgba(0,0,0,0.5)', border: '1px solid rgba(255,255,255,0.1)', color: '#FFF', padding: '0.75rem 1.5rem', borderRadius: '2rem', cursor: 'pointer', backdropFilter: 'blur(10px)', fontWeight: 600 }}>
              ← Overview
            </button>
            <button onClick={() => setView('compare')} style={{ background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.2)', color: '#FFF', padding: '0.75rem 1.5rem', borderRadius: '2rem', cursor: 'pointer', backdropFilter: 'blur(10px)', fontWeight: 600 }}>
              ◫ Compare
            </button>
          </div>

          {/* Actual Engine Blueprint Rendering (Live Brand Injection) */}
          <div style={{ flex: 1, position: 'relative' }}>
             {ActiveBlueprintComponent ? (
               <div style={{
                 '--zx-primary': activeBrand.colors.primary,
                 '--zx-background': activeBrand.colors.background,
                 '--zx-surface': activeBrand.colors.surface,
                 transition: 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1)',
                 height: '100%',
                 animation: 'fadeIn 0.5s ease-out'
               } as React.CSSProperties}>
                 <ActiveBlueprintComponent />
               </div>
             ) : (
               <div style={{ height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', opacity: 0.5 }}>
                 Blueprint '{activeBlueprintId}' mapping not found.
               </div>
             )}
          </div>
        </main>

        {/* Right Sidebar: Configuration Panel */}
        <aside style={{ borderLeft: '1px solid rgba(255,255,255,0.05)', background: '#09090B', padding: '3rem 2rem', overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: '4rem' }}>
          
          <div>
            <h3 style={{ fontSize: '0.875rem', textTransform: 'uppercase', letterSpacing: '0.1em', opacity: 0.5, marginBottom: '1.5rem', fontWeight: 800 }}>Aesthetic</h3>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem' }}>
              {AESTHETICS.map(a => (
                <button
                  key={a.id}
                  onClick={() => setActiveAesthetic(a)}
                  style={{
                    padding: '1rem',
                    borderRadius: '0.75rem',
                    border: '1px solid',
                    borderColor: activeAesthetic.id === a.id ? 'var(--zx-primary)' : 'rgba(255,255,255,0.1)',
                    background: activeAesthetic.id === a.id ? 'rgba(33,241,168,0.05)' : 'transparent',
                    color: activeAesthetic.id === a.id ? 'var(--zx-primary)' : 'var(--zx-text)',
                    cursor: 'pointer',
                    fontSize: '0.875rem',
                    fontWeight: 600,
                    transition: 'all 0.2s ease',
                    textAlign: 'center'
                  }}
                  onMouseOver={(e) => {
                     if (activeAesthetic.id !== a.id) {
                       e.currentTarget.style.background = 'rgba(255,255,255,0.02)';
                     }
                  }}
                  onMouseOut={(e) => {
                     if (activeAesthetic.id !== a.id) {
                       e.currentTarget.style.background = 'transparent';
                     }
                  }}
                >
                  {a.name}
                </button>
              ))}
            </div>
            <div style={{ fontSize: '0.875rem', opacity: 0.5, marginTop: '1.5rem', fontStyle: 'italic', lineHeight: 1.5 }}>
              "{activeAesthetic.description}"
            </div>
          </div>

          <div>
            <h3 style={{ fontSize: '0.875rem', textTransform: 'uppercase', letterSpacing: '0.1em', opacity: 0.5, marginBottom: '1.5rem', fontWeight: 800 }}>Brand Pack</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {BRAND_PACKS.map(brand => (
                <div
                  key={brand.id}
                  onClick={() => setActiveBrand(brand)}
                  style={{
                    borderRadius: '1rem',
                    border: '2px solid',
                    borderColor: activeBrand.id === brand.id ? brand.colors.primary : 'rgba(255,255,255,0.05)',
                    background: 'rgba(255,255,255,0.02)',
                    cursor: 'pointer',
                    overflow: 'hidden',
                    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                    transform: activeBrand.id === brand.id ? 'scale(1.02)' : 'scale(1)'
                  }}
                >
                  <div style={{ width: '100%', height: '100px', position: 'relative' }}>
                    <Image src={brand.image} alt={brand.name} fill style={{ objectFit: 'cover' }} />
                  </div>
                  <div style={{ padding: '1.25rem' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
                      <div style={{ fontSize: '1.1rem', fontWeight: 800 }}>{brand.name}</div>
                      <div style={{ width: 16, height: 16, borderRadius: '50%', background: brand.colors.primary, boxShadow: `0 0 10px ${brand.colors.primary}55` }} />
                    </div>
                    <div style={{ fontSize: '0.875rem', color: brand.colors.primary, fontWeight: 600, marginBottom: '0.5rem' }}>{brand.mood}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div style={{ marginTop: 'auto', paddingTop: '2rem' }}>
            {!showCli ? (
              <button 
                onClick={() => setShowCli(true)}
                style={{ 
                  width: '100%', padding: '1.25rem', background: 'var(--zx-primary)', 
                  color: '#000', fontWeight: 800, border: 'none', borderRadius: '1rem', 
                  cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem',
                  transition: 'transform 0.2s ease, box-shadow 0.2s ease',
                  boxShadow: '0 10px 25px -5px rgba(33,241,168,0.3)'
                }}
                onMouseOver={(e) => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 15px 30px -5px rgba(33,241,168,0.4)'; }}
                onMouseOut={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 10px 25px -5px rgba(33,241,168,0.3)'; }}
              >
                <span style={{ fontSize: '1.25rem' }}>🚀</span> Launch {activeExperience.personality}
              </button>
            ) : (
              <div style={{ background: 'rgba(255,255,255,0.02)', borderRadius: '1rem', padding: '2rem', border: '1px solid rgba(255,255,255,0.1)', animation: 'fadeIn 0.3s ease-out' }}>
                <div style={{ fontSize: '0.75rem', opacity: 0.5, marginBottom: '1.5rem', textTransform: 'uppercase', letterSpacing: '0.1em', fontWeight: 800 }}>Choose Workflow</div>
                
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '2rem' }}>
                  {[
                    { id: 'cli', label: 'ZenixUI CLI' },
                    { id: 'compose', label: 'Compose File' },
                    { id: 'manual', label: 'Manual Install' }
                  ].map(opt => (
                    <label key={opt.id} style={{ display: 'flex', alignItems: 'center', gap: '1rem', cursor: 'pointer' }}>
                      <div style={{ 
                        width: '20px', height: '20px', borderRadius: '50%', border: '2px solid',
                        borderColor: installLevel === opt.id ? 'var(--zx-primary)' : 'rgba(255,255,255,0.2)',
                        display: 'flex', alignItems: 'center', justifyContent: 'center'
                      }}>
                         {installLevel === opt.id && <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: 'var(--zx-primary)' }} />}
                      </div>
                      <span style={{ fontSize: '1rem', fontWeight: installLevel === opt.id ? 700 : 500, color: installLevel === opt.id ? '#FFF' : 'rgba(255,255,255,0.7)' }}>{opt.label}</span>
                    </label>
                  ))}
                </div>

                <div style={{ padding: '1.5rem', background: '#000', borderRadius: '0.75rem', fontFamily: 'monospace', color: 'var(--zx-primary)', fontSize: '0.875rem', wordBreak: 'break-all', border: '1px solid rgba(33,241,168,0.2)' }}>
                  {installLevel === 'cli' && `npx zenix-ui new ${activeExperience.id} -v ${activeVariant.id} -b ${activeBrand.id} -a ${activeAesthetic.id}`}
                  {installLevel === 'compose' && `npx zenix-ui compose up ./launch.yaml`}
                  {installLevel === 'manual' && `git clone https://...`}
                </div>
              </div>
            )}
          </div>
        </aside>
      </div>
    );
  }

  // ─────────────────────────────────────────────────────────────────────────────
  // 4. COMPARE VIEW (Real Blueprint side-by-side)
  // ─────────────────────────────────────────────────────────────────────────────
  if (view === 'compare') {
    const compareAesthetics = AESTHETICS.slice(0, 4);

    return (
      <div style={{ padding: '4rem', fontFamily: 'Inter, system-ui, sans-serif', height: '100vh', display: 'flex', flexDirection: 'column', boxSizing: 'border-box' }}>
        <button onClick={() => setView('compose')} style={{ background: 'none', border: 'none', color: 'var(--zx-text)', cursor: 'pointer', fontWeight: 600, marginBottom: '2rem', alignSelf: 'flex-start', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          ← Exit Compare Mode
        </button>
        <h1 style={{ fontSize: '3rem', fontWeight: 800, marginBottom: '3rem', letterSpacing: '-0.03em' }}>Comparing Aesthetics</h1>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '2rem', flex: 1, minHeight: 0 }}>
          {compareAesthetics.map(aes => {
            const mappedId = activeVariant.blueprintIdMap[aes.id] || 'zenix-portfolio';
            const Comp = blueprints.find(b => b.id === mappedId)?.component;
            return (
              <div key={aes.id} style={{ background: '#09090B', borderRadius: '1.5rem', border: '1px solid rgba(255,255,255,0.05)', display: 'flex', flexDirection: 'column', overflow: 'hidden', boxShadow: '0 25px 50px -12px rgba(0,0,0,0.5)' }}>
                <div style={{ padding: '1.5rem', borderBottom: '1px solid rgba(255,255,255,0.05)', fontWeight: 800, textAlign: 'center', background: '#111', fontSize: '1.25rem' }}>{aes.name}</div>
                <div style={{ flex: 1, overflowY: 'auto', position: 'relative', transform: 'scale(0.8)', transformOrigin: 'top center', width: '125%', height: '125%' }}>
                  {Comp ? (
                    <div style={{
                      '--zx-primary': activeBrand.colors.primary,
                      '--zx-background': activeBrand.colors.background,
                      '--zx-surface': activeBrand.colors.surface,
                      transition: 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1)',
                      height: '100%'
                    } as React.CSSProperties}>
                      <Comp />
                    </div>
                  ) : (
                    <div style={{ padding: '2rem', opacity: 0.5, textAlign: 'center' }}>Preview not found for {aes.name}</div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }

  return null;
}
