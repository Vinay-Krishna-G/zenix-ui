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
  Variant,
  Industry
} from '../../../lib/launchpad';
import Image from 'next/image';
import { blueprints } from '@zenixui/blueprints';

export function Launchpad() {
  const [view, setView] = useState<'browse' | 'details' | 'compose' | 'compare'>('browse');
  const [activeExperience, setActiveExperience] = useState<Experience>(EXPERIENCES[0]);
  const [activeVariant, setActiveVariant] = useState<Variant>(EXPERIENCES[0].variants[0]);
  const [activeBrand, setActiveBrand] = useState<BrandPack>(BRAND_PACKS.find(b => b.id === 'tiffany') || BRAND_PACKS[0]);
  const [activeAesthetic, setActiveAesthetic] = useState<Aesthetic>(AESTHETICS.find(a => a.id === 'glass') || AESTHETICS[0]);
  
  const [showCli, setShowCli] = useState(false);
  const [showTechnicalDetails, setShowTechnicalDetails] = useState(false);
  const [installLevel, setInstallLevel] = useState<'cli' | 'compose' | 'manual'>('cli');

  const handleSelectExperience = (exp: Experience) => {
    setActiveExperience(exp);
    setActiveVariant(exp.variants[0]);
    setShowCli(false);
    setShowTechnicalDetails(false);
    setView('details');
  };

  const activeBlueprintId = activeVariant.blueprintIdMap[activeAesthetic.id] || 'zenix-portfolio';
  const ActiveBlueprintComponent = blueprints.find(b => b.id === activeBlueprintId)?.component;

  // ─────────────────────────────────────────────────────────────────────────────
  // 1. BROWSE VIEW
  // ─────────────────────────────────────────────────────────────────────────────
  if (view === 'browse') {
    return (
      <div style={{ maxWidth: '1440px', margin: '0 auto', padding: '4rem 2rem', fontFamily: 'Inter, system-ui, sans-serif' }}>
        <h1 style={{ fontSize: '3.5rem', fontWeight: 800, marginBottom: '1rem', letterSpacing: '-0.03em' }}>Launchpad</h1>
        <p style={{ fontSize: '1.25rem', opacity: 0.7, marginBottom: '4rem', maxWidth: '600px', lineHeight: 1.6 }}>
          Launch your entire startup, portfolio, SaaS, or ecommerce store in one afternoon. Start with a complete digital product.
        </p>

        {INDUSTRIES.map(industry => {
          const exps = EXPERIENCES.filter(e => e.industryId === industry.id);
          if (exps.length === 0) return null;
          return (
            <div key={industry.id} style={{ marginBottom: '5rem' }}>
              <h2 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '2rem', display: 'flex', alignItems: 'center', gap: '1rem', textTransform: 'uppercase', letterSpacing: '0.1em', opacity: 0.8 }}>
                {industry.name} <div style={{ height: '1px', background: 'rgba(255,255,255,0.1)', flex: 1 }} />
              </h2>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(380px, 1fr))', gap: '2.5rem' }}>
                {exps.map(exp => (
                  <div 
                    key={exp.id} 
                    onClick={() => handleSelectExperience(exp)}
                    style={{ cursor: 'pointer', transition: 'transform 0.2s ease', position: 'relative' }}
                    onMouseOver={(e) => e.currentTarget.style.transform = 'translateY(-4px)'}
                    onMouseOut={(e) => e.currentTarget.style.transform = 'translateY(0)'}
                  >
                    <div style={{ 
                      width: '100%', aspectRatio: '16/10', background: '#171717',
                      borderRadius: '1rem', marginBottom: '1.25rem', border: '1px solid rgba(255,255,255,0.1)',
                      position: 'relative', overflow: 'hidden'
                    }}>
                      <Image src={exp.coverImage} alt={exp.name} fill style={{ objectFit: 'cover' }} />
                      <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.8) 0%, transparent 100%)' }} />
                      
                      <h3 style={{ position: 'absolute', bottom: '3.5rem', left: '1.5rem', fontSize: '2rem', fontWeight: 800, zIndex: 10, color: '#FFF' }}>
                        {exp.name}
                      </h3>
                      
                      <div style={{ position: 'absolute', bottom: '1.5rem', left: '1.5rem', display: 'flex', gap: '0.5rem', zIndex: 10 }}>
                        <span style={{ padding: '0.25rem 0.75rem', background: 'rgba(255,255,255,0.2)', borderRadius: '2rem', fontSize: '0.75rem', backdropFilter: 'blur(4px)', color: '#FFF', display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                          <span style={{ color: '#FFB800' }}>★</span> {exp.rating}
                        </span>
                        <span style={{ padding: '0.25rem 0.75rem', background: 'rgba(255,255,255,0.2)', borderRadius: '2rem', fontSize: '0.75rem', backdropFilter: 'blur(4px)', color: '#FFF' }}>
                          {exp.variants.length} Variants
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    );
  }

  // ─────────────────────────────────────────────────────────────────────────────
  // 2. DETAILS VIEW
  // ─────────────────────────────────────────────────────────────────────────────
  if (view === 'details') {
    return (
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '4rem 2rem', fontFamily: 'Inter, system-ui, sans-serif' }}>
        <button onClick={() => setView('browse')} style={{ background: 'none', border: 'none', color: 'var(--zx-primary)', cursor: 'pointer', fontWeight: 600, marginBottom: '2rem' }}>
          ← Back to Launchpad
        </button>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 400px', gap: '4rem' }}>
          {/* Left Column: Outcomes */}
          <div>
            <h1 style={{ fontSize: '3.5rem', fontWeight: 800, marginBottom: '1rem', letterSpacing: '-0.03em' }}>{activeExperience.name}</h1>
            <p style={{ fontSize: '1.25rem', opacity: 0.7, marginBottom: '3rem', lineHeight: 1.6 }}>{activeExperience.description}</p>

            <div style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '1rem', padding: '2rem', marginBottom: '3rem' }}>
              <h2 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '1.5rem' }}>What's Included</h2>
              <ul style={{ listStyle: 'none', padding: 0, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                {activeExperience.includes.outcomes.map(out => (
                  <li key={out} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontSize: '1rem' }}>
                    <span style={{ color: 'var(--zx-primary)' }}>✔</span> {out}
                  </li>
                ))}
              </ul>
              
              <button 
                onClick={() => setShowTechnicalDetails(!showTechnicalDetails)}
                style={{ marginTop: '2rem', background: 'none', border: 'none', color: 'rgba(255,255,255,0.5)', cursor: 'pointer', fontSize: '0.875rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}
              >
                {showTechnicalDetails ? 'Hide' : 'Show'} Technical Details
              </button>
              
              {showTechnicalDetails && (
                <div style={{ marginTop: '1rem', paddingTop: '1rem', borderTop: '1px solid rgba(255,255,255,0.1)', display: 'flex', gap: '2rem', fontSize: '0.875rem', opacity: 0.7 }}>
                  <div>{activeExperience.includes.technicalDetails.files} files</div>
                  <div>{activeExperience.includes.technicalDetails.components} components</div>
                  <div>{activeExperience.includes.technicalDetails.sections} sections</div>
                </div>
              )}
            </div>
            
            {/* Similar Experiences */}
            <div>
              <h2 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '1.5rem' }}>You might also like</h2>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
                {activeExperience.similarExperiences.map(simId => {
                  const simExp = EXPERIENCES.find(e => e.id === simId);
                  if (!simExp) return null;
                  return (
                    <div key={simId} onClick={() => handleSelectExperience(simExp)} style={{ display: 'flex', gap: '1rem', cursor: 'pointer', alignItems: 'center', background: 'rgba(255,255,255,0.02)', padding: '1rem', borderRadius: '0.75rem', border: '1px solid rgba(255,255,255,0.05)' }}>
                      <div style={{ width: '80px', height: '60px', position: 'relative', borderRadius: '0.5rem', overflow: 'hidden' }}>
                         <Image src={simExp.coverImage} alt={simExp.name} fill style={{ objectFit: 'cover' }} />
                      </div>
                      <div>
                        <div style={{ fontWeight: 600 }}>{simExp.name}</div>
                        <div style={{ fontSize: '0.75rem', opacity: 0.5 }}>{INDUSTRIES.find(i => i.id === simExp.industryId)?.name}</div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Right Column: Call to Action */}
          <div>
            <div style={{ background: '#000', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '1rem', padding: '2rem', position: 'sticky', top: '2rem' }}>
              <div style={{ fontSize: '0.875rem', opacity: 0.6, marginBottom: '0.5rem' }}>Average Setup</div>
              <div style={{ fontSize: '2rem', fontWeight: 800, color: 'var(--zx-primary)', marginBottom: '2rem' }}>{activeExperience.averageSetupTime}</div>

              <h4 style={{ fontSize: '0.875rem', marginBottom: '1rem' }}>Select Layout Variant</h4>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', marginBottom: '2rem' }}>
                {activeExperience.variants.map(v => (
                  <button
                    key={v.id}
                    onClick={() => setActiveVariant(v)}
                    style={{
                      padding: '1rem',
                      textAlign: 'left',
                      background: activeVariant.id === v.id ? 'rgba(255,255,255,0.1)' : 'transparent',
                      border: '1px solid',
                      borderColor: activeVariant.id === v.id ? 'var(--zx-primary)' : 'rgba(255,255,255,0.1)',
                      borderRadius: '0.5rem',
                      color: '#FFF',
                      cursor: 'pointer'
                    }}
                  >
                    <div style={{ fontWeight: 600 }}>{v.name}</div>
                  </button>
                ))}
              </div>

              <button 
                onClick={() => setView('compose')}
                style={{ width: '100%', padding: '1rem', background: 'var(--zx-primary)', color: '#000', fontWeight: 800, fontSize: '1rem', border: 'none', borderRadius: '0.5rem', cursor: 'pointer' }}>
                Compose Experience →
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // ─────────────────────────────────────────────────────────────────────────────
  // 3. COMPOSE VIEW (Real Engine Rendering)
  // ─────────────────────────────────────────────────────────────────────────────
  if (view === 'compose') {
    return (
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 360px', gap: '0', height: 'calc(100vh - 80px)', boxSizing: 'border-box' }}>
        
        {/* Center: Live Engine Canvas */}
        <main style={{ 
          background: activeBrand.colors.background,
          color: activeBrand.colors.surface,
          overflowY: 'auto',
          position: 'relative',
          display: 'flex',
          flexDirection: 'column',
          transition: 'background 0.3s ease, color 0.3s ease'
        }}>
          {/* Header Controls */}
          <div style={{ position: 'sticky', top: 0, zIndex: 100, padding: '1.5rem 2rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: `linear-gradient(to bottom, ${activeBrand.colors.background} 50%, transparent)` }}>
            <button onClick={() => setView('details')} style={{ background: 'rgba(0,0,0,0.5)', border: '1px solid rgba(255,255,255,0.1)', color: '#FFF', padding: '0.5rem 1rem', borderRadius: '2rem', cursor: 'pointer', backdropFilter: 'blur(10px)' }}>
              ← Back
            </button>
            <button onClick={() => setView('compare')} style={{ background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.2)', color: '#FFF', padding: '0.5rem 1rem', borderRadius: '2rem', cursor: 'pointer', backdropFilter: 'blur(10px)' }}>
              ◫ Compare Modes
            </button>
          </div>

          {/* Actual Engine Blueprint Rendering */}
          <div style={{ flex: 1, position: 'relative' }}>
             {ActiveBlueprintComponent ? (
               <ActiveBlueprintComponent />
             ) : (
               <div style={{ height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', opacity: 0.5 }}>
                 Blueprint '{activeBlueprintId}' mapping not found.
               </div>
             )}
          </div>
        </main>

        {/* Right Sidebar: Aesthetics & Brand Packs & Install */}
        <aside style={{ borderLeft: '1px solid rgba(255,255,255,0.1)', background: '#09090B', padding: '2rem', overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: '3rem' }}>
          
          <div>
            <h3 style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.1em', opacity: 0.5, marginBottom: '1rem' }}>Aesthetic</h3>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
              {AESTHETICS.map(a => (
                <button
                  key={a.id}
                  onClick={() => setActiveAesthetic(a)}
                  style={{
                    padding: '0.5rem 1rem',
                    borderRadius: '2rem',
                    border: '1px solid',
                    borderColor: activeAesthetic.id === a.id ? 'var(--zx-primary)' : 'rgba(255,255,255,0.1)',
                    background: activeAesthetic.id === a.id ? 'rgba(33,241,168,0.1)' : 'transparent',
                    color: activeAesthetic.id === a.id ? 'var(--zx-primary)' : 'var(--zx-text)',
                    cursor: 'pointer',
                    fontSize: '0.875rem',
                    fontWeight: 600
                  }}
                >
                  {a.name}
                </button>
              ))}
            </div>
            <div style={{ fontSize: '0.75rem', opacity: 0.5, marginTop: '1rem', fontStyle: 'italic' }}>
              "{activeAesthetic.description}"
            </div>
          </div>

          <div>
            <h3 style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.1em', opacity: 0.5, marginBottom: '1rem' }}>Brand Packs</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {BRAND_PACKS.map(brand => (
                <div
                  key={brand.id}
                  onClick={() => setActiveBrand(brand)}
                  style={{
                    borderRadius: '0.75rem',
                    border: '2px solid',
                    borderColor: activeBrand.id === brand.id ? brand.colors.primary : 'transparent',
                    background: 'rgba(255,255,255,0.03)',
                    cursor: 'pointer',
                    overflow: 'hidden'
                  }}
                >
                  <div style={{ width: '100%', height: '140px', position: 'relative' }}>
                    <Image src={brand.image} alt={brand.name} fill style={{ objectFit: 'cover' }} />
                  </div>
                  <div style={{ padding: '1rem' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.25rem' }}>
                      <div style={{ fontSize: '1rem', fontWeight: 800 }}>{brand.name}</div>
                      <div style={{ width: 16, height: 16, borderRadius: '50%', background: brand.colors.primary }} />
                    </div>
                    <div style={{ fontSize: '0.75rem', color: brand.colors.primary, fontWeight: 600, marginBottom: '0.5rem' }}>{brand.mood}</div>
                    <div style={{ fontSize: '0.7rem', opacity: 0.5 }}>Used for: {brand.usedFor.slice(0,2).join(', ')}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div style={{ marginTop: 'auto', paddingTop: '2rem' }}>
            {!showCli ? (
              <button 
                onClick={() => setShowCli(true)}
                style={{ width: '100%', padding: '1rem', background: 'var(--zx-primary)', color: '#000', fontWeight: 800, border: 'none', borderRadius: '0.5rem', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem' }}>
                <span style={{ fontSize: '1.25rem' }}>🚀</span> Launch Experience
              </button>
            ) : (
              <div style={{ background: 'rgba(255,255,255,0.05)', borderRadius: '0.5rem', padding: '1.5rem', border: '1px solid rgba(255,255,255,0.1)' }}>
                <div style={{ fontSize: '0.75rem', opacity: 0.5, marginBottom: '1rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Choose Workflow</div>
                
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', marginBottom: '1.5rem' }}>
                  {[
                    { id: 'cli', label: 'ZenixUI CLI' },
                    { id: 'compose', label: 'Compose File' },
                    { id: 'manual', label: 'Manual Install' }
                  ].map(opt => (
                    <label key={opt.id} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', cursor: 'pointer' }}>
                      <input type="radio" name="installLevel" checked={installLevel === opt.id} onChange={() => setInstallLevel(opt.id as any)} style={{ accentColor: 'var(--zx-primary)' }} />
                      <span style={{ fontSize: '0.875rem' }}>{opt.label}</span>
                    </label>
                  ))}
                </div>

                <div style={{ padding: '1rem', background: '#000', borderRadius: '0.25rem', fontFamily: 'monospace', color: 'var(--zx-primary)', fontSize: '0.875rem', wordBreak: 'break-all' }}>
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
    const compareAesthetics = AESTHETICS.slice(0, 4); // Take first 4

    return (
      <div style={{ padding: '2rem', fontFamily: 'Inter, system-ui, sans-serif', height: 'calc(100vh - 80px)', display: 'flex', flexDirection: 'column' }}>
        <button onClick={() => setView('compose')} style={{ background: 'none', border: 'none', color: 'var(--zx-primary)', cursor: 'pointer', fontWeight: 600, marginBottom: '2rem', alignSelf: 'flex-start' }}>
          ← Exit Compare Mode
        </button>
        <h1 style={{ fontSize: '2rem', fontWeight: 800, marginBottom: '2rem' }}>Comparing {activeVariant.name} Layout</h1>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1.5rem', flex: 1, minHeight: 0 }}>
          {compareAesthetics.map(aes => {
            const mappedId = activeVariant.blueprintIdMap[aes.id] || 'zenix-portfolio';
            const Comp = blueprints.find(b => b.id === mappedId)?.component;
            return (
              <div key={aes.id} style={{ background: '#000', borderRadius: '1rem', border: '1px solid rgba(255,255,255,0.1)', display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
                <div style={{ padding: '1rem', borderBottom: '1px solid rgba(255,255,255,0.1)', fontWeight: 600, textAlign: 'center', background: '#111' }}>{aes.name}</div>
                <div style={{ flex: 1, overflowY: 'auto', position: 'relative', transform: 'scale(0.8)', transformOrigin: 'top center', width: '125%', height: '125%' }}>
                  {Comp ? <Comp /> : <div style={{ padding: '2rem', opacity: 0.5 }}>Preview not found for {aes.name}</div>}
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
