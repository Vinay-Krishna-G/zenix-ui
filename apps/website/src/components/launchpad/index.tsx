'use client';

import React, { useState } from 'react';
import {
  EXPERIENCES,
  IDENTITIES,
  AESTHETICS,
  Experience,
  Identity,
  Aesthetic,
  Variant
} from '../../lib/launchpad';
import { ExperienceThumbnail } from '../preview/ExperienceThumbnail';
import { LivePreview } from '../preview/LivePreview';
import { blueprints } from '@zenixui/blueprints';
import Link from 'next/link';

export function Launchpad() {
  const [view, setView] = useState<'browse' | 'details' | 'compose' | 'compare'>('browse');
  const [activeExperience, setActiveExperience] = useState<Experience>(EXPERIENCES[0]);
  const [activeVariant, setActiveVariant] = useState<Variant>(EXPERIENCES[0].variants[0]);
  const [activeBrand, setActiveBrand] = useState<Identity>(IDENTITIES.find(b => b.id === 'tiffany') || IDENTITIES[0]);
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
  // 1. BROWSE VIEW
  // ─────────────────────────────────────────────────────────────────────────────
  if (view === 'browse') {
    return (
      <div style={{ maxWidth: '1440px', margin: '0 auto', padding: '4rem 2rem', fontFamily: 'Inter, system-ui, sans-serif' }}>
        <h1 style={{ fontSize: '4rem', fontWeight: 800, marginBottom: '1rem', letterSpacing: '-0.04em' }}>Explore the Worlds.</h1>
        <p style={{ fontSize: '1.5rem', opacity: 0.7, marginBottom: '4rem', maxWidth: '600px', lineHeight: 1.6 }}>
          Choose your industry. Launch your empire.
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(400px, 1fr))', gap: '4rem' }}>
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
                e.currentTarget.style.transform = 'translateY(-10px) scale(1.02)';
                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.2)';
                e.currentTarget.style.boxShadow = '0 30px 60px -15px rgba(0, 0, 0, 0.6)';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = 'translateY(0) scale(1)';
                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.05)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              <div style={{ width: '100%', aspectRatio: '16/10', position: 'relative' }}>
                <ExperienceThumbnail 
                  experienceId={exp.id} 
                  brandId={activeBrand.id} 
                  variantId={exp.variants[0]?.id}
                  aestheticId={activeAesthetic.id}
                  style={{ width: '100%', height: '100%' }} 
                />
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.2) 100%)' }} />
                
                <div style={{ position: 'absolute', top: '1.5rem', left: '1.5rem', display: 'flex', gap: '0.5rem' }}>
                  <span style={{ padding: '0.4rem 1rem', background: 'rgba(255,255,255,0.1)', backdropFilter: 'blur(10px)', borderRadius: '2rem', fontSize: '0.75rem', color: '#FFF', fontWeight: 800, letterSpacing: '0.1em', textTransform: 'uppercase' }}>
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
  // 2. DETAILS VIEW (The Framer Product Page)
  // ─────────────────────────────────────────────────────────────────────────────
  if (view === 'details') {
    return (
      <div style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
        
        {/* Fixed Navigation Header */}
        <div style={{ position: 'sticky', top: 0, zIndex: 100, background: 'rgba(9,9,11,0.8)', backdropFilter: 'blur(20px)', borderBottom: '1px solid rgba(255,255,255,0.05)', padding: '1rem 2rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <button onClick={() => setView('browse')} style={{ background: 'none', border: 'none', color: 'var(--zx-text)', cursor: 'pointer', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '1rem' }}>
            ← Back to Gallery
          </button>
          <div style={{ fontWeight: 800, letterSpacing: '0.1em' }}>{activeExperience.personality}</div>
          <button onClick={() => setView('compose')} style={{ padding: '0.75rem 2rem', background: 'var(--zx-primary)', color: '#000', border: 'none', borderRadius: '2rem', fontWeight: 800, cursor: 'pointer', boxShadow: '0 0 20px rgba(33,241,168,0.2)' }}>
            Get {activeExperience.personality}
          </button>
        </div>

        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '6rem 2rem 10rem' }}>
          
          {/* Header Section */}
          <div style={{ textAlign: 'center', marginBottom: '6rem' }}>
            <div style={{ display: 'inline-flex', gap: '1rem', marginBottom: '2rem' }}>
              <span style={{ padding: '0.5rem 1.25rem', background: 'rgba(33,241,168,0.1)', color: 'var(--zx-primary)', borderRadius: '2rem', fontSize: '0.875rem', fontWeight: 800 }}>
                Deploy Ready
              </span>
              <span style={{ padding: '0.5rem 1.25rem', background: 'rgba(255,255,255,0.05)', borderRadius: '2rem', fontSize: '0.875rem', fontWeight: 700, border: '1px solid rgba(255,255,255,0.1)' }}>
                <span style={{ color: '#FFB800' }}>★★★★★</span> 5.0 ({activeExperience.launches} launches)
              </span>
            </div>
            <h1 style={{ fontSize: '6rem', fontWeight: 800, letterSpacing: '-0.05em', marginBottom: '2rem', lineHeight: 1 }}>
              {activeExperience.name}
            </h1>
            <p style={{ fontSize: '1.5rem', opacity: 0.7, maxWidth: '800px', margin: '0 auto 4rem', lineHeight: 1.5 }}>
              {activeExperience.marketingCopy}
            </p>
            <button onClick={() => setView('compose')} style={{ padding: '1.25rem 4rem', background: '#FFF', color: '#000', border: 'none', borderRadius: '3rem', fontSize: '1.25rem', fontWeight: 800, cursor: 'pointer', boxShadow: '0 20px 40px -10px rgba(255,255,255,0.2)' }}>
              Open Studio Editor
            </button>
          </div>

          {/* Massive Hero Preview */}
          <div style={{ 
            width: '100%', height: '800px', position: 'relative', borderRadius: '1.5rem', overflow: 'hidden',
            border: '1px solid rgba(255,255,255,0.1)', boxShadow: '0 50px 100px -20px rgba(0,0,0,0.5)',
            marginBottom: '10rem', background: '#09090B'
          }}>
              <LivePreview 
                experienceId={activeExperience.id} 
                brandId={activeBrand.id} 
                variantId={activeVariant.id}
                aestheticId={activeAesthetic.id}
              />
          </div>

          {/* Marketing Features Grid */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8rem', marginBottom: '10rem' }}>
            <div>
              <h3 style={{ fontSize: '2.5rem', fontWeight: 800, marginBottom: '2.5rem', letterSpacing: '-0.03em' }}>Everything you need.</h3>
              <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                {activeExperience.includes.outcomes.map(out => (
                  <li key={out} style={{ display: 'flex', alignItems: 'center', gap: '1rem', fontSize: '1.25rem', fontWeight: 600 }}>
                    <div style={{ width: '32px', height: '32px', borderRadius: '50%', background: 'rgba(33,241,168,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--zx-primary)' }}>✔</div>
                    {out}
                  </li>
                ))}
              </ul>
            </div>
            
            <div style={{ padding: '4rem', background: 'rgba(255,255,255,0.02)', borderRadius: '2rem', border: '1px solid rgba(255,255,255,0.05)' }}>
              <div style={{ marginBottom: '3rem' }}>
                <h3 style={{ fontSize: '1.5rem', fontWeight: 800, marginBottom: '1.5rem' }}>Perfect For</h3>
                <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  {activeExperience.perfectFor.map(pf => (
                    <li key={pf} style={{ display: 'flex', alignItems: 'center', gap: '1rem', fontSize: '1.1rem', fontWeight: 500, color: 'rgba(255,255,255,0.7)' }}>
                      <span style={{ color: '#FFF' }}>→</span> {pf}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 style={{ fontSize: '1.5rem', fontWeight: 800, marginBottom: '1.5rem' }}>Technical Specs</h3>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
                  <div>
                    <div style={{ fontSize: '3rem', fontWeight: 800, color: '#FFF' }}>{activeExperience.includes.technicalDetails.files}</div>
                    <div style={{ fontSize: '1rem', opacity: 0.5, fontWeight: 600 }}>Files</div>
                  </div>
                  <div>
                    <div style={{ fontSize: '3rem', fontWeight: 800, color: '#FFF' }}>{activeExperience.averageSetupTime}</div>
                    <div style={{ fontSize: '1rem', opacity: 0.5, fontWeight: 600 }}>Setup Time</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Social Proof */}
          <div style={{ textAlign: 'center', marginBottom: '10rem' }}>
            <h2 style={{ fontSize: '3rem', fontWeight: 800, marginBottom: '4rem', letterSpacing: '-0.03em' }}>Trusted by {activeExperience.launches} launches.</h2>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem' }}>
               {[1, 2, 3].map(i => (
                 <div key={i} style={{ width: '300px', padding: '2rem', background: '#111', borderRadius: '1rem', border: '1px solid rgba(255,255,255,0.05)', textAlign: 'left' }}>
                   <div style={{ color: '#FFB800', marginBottom: '1rem' }}>★★★★★</div>
                   <p style={{ opacity: 0.8, lineHeight: 1.5, marginBottom: '1.5rem' }}>"I deployed {activeExperience.personality} on Friday and had my first customer by Sunday. The code quality is insane."</p>
                   <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                     <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'rgba(255,255,255,0.1)' }} />
                     <div>
                       <div style={{ fontWeight: 800, fontSize: '0.875rem' }}>Founder {i}</div>
                       <div style={{ fontSize: '0.75rem', opacity: 0.5 }}>Startup Inc.</div>
                     </div>
                   </div>
                 </div>
               ))}
            </div>
          </div>

          {/* CTA */}
          <div style={{ textAlign: 'center', padding: '8rem 2rem', background: 'linear-gradient(135deg, #111 0%, #000 100%)', borderRadius: '2rem', border: '1px solid rgba(255,255,255,0.05)', boxShadow: '0 50px 100px -20px rgba(0,0,0,0.5)' }}>
            <h2 style={{ fontSize: '4rem', fontWeight: 800, marginBottom: '1rem', letterSpacing: '-0.04em' }}>Make it yours.</h2>
            <p style={{ fontSize: '1.5rem', opacity: 0.6, marginBottom: '4rem' }}>Enter the studio to inject your brand and launch.</p>
            <button onClick={() => setView('compose')} style={{ padding: '1.5rem 4rem', background: 'var(--zx-primary)', color: '#000', border: 'none', borderRadius: '4rem', fontSize: '1.25rem', fontWeight: 800, cursor: 'pointer', transition: 'transform 0.2s ease', boxShadow: '0 0 40px rgba(33,241,168,0.3)' }}
              onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
              onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
            >
              Open Studio Editor
            </button>
          </div>

        </div>
      </div>
    );
  }

  // ─────────────────────────────────────────────────────────────────────────────
  // 3. COMPOSE VIEW (The Studio - Magical Customization)
  // ─────────────────────────────────────────────────────────────────────────────
  if (view === 'compose') {
    return (
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 480px', gap: '0', height: '100vh', boxSizing: 'border-box' }}>
        
        {/* Center: Live Engine Canvas */}
        <main style={{ 
          background: activeBrand.colors.background,
          overflowY: 'auto',
          position: 'relative',
          display: 'flex',
          flexDirection: 'column',
          transition: 'background 0.8s cubic-bezier(0.4, 0, 0.2, 1)'
        }}>
          {/* Header Controls */}
          <div style={{ position: 'sticky', top: 0, zIndex: 100, padding: '1.5rem 2rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: `linear-gradient(to bottom, ${activeBrand.colors.background} 90%, transparent)` }}>
            <button onClick={() => setView('details')} style={{ background: 'rgba(0,0,0,0.5)', border: '1px solid rgba(255,255,255,0.1)', color: '#FFF', padding: '0.75rem 1.5rem', borderRadius: '2rem', cursor: 'pointer', backdropFilter: 'blur(10px)', fontWeight: 600 }}>
              ← Exit Studio
            </button>
            <div style={{ fontSize: '0.875rem', fontWeight: 700, opacity: 0.5 }}>Studio Editor</div>
          </div>

          {/* Actual Engine Blueprint Rendering (Live Brand Injection) */}
          <div style={{ flex: 1, position: 'relative' }}>
             {ActiveBlueprintComponent ? (
                <LivePreview 
                  experienceId={activeExperience.id}
                  brandId={activeBrand.id}
                  variantId={activeVariant.id}
                  aestheticId={activeAesthetic.id}
                  style={{ animation: 'fadeIn 0.5s ease-out' }}
                />
             ) : (
               <div style={{ height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', opacity: 0.5 }}>
                 Blueprint '{activeBlueprintId}' mapping not found.
               </div>
             )}
          </div>
        </main>

        {/* Right Sidebar: Giant Beautiful Cards (Not Radio Buttons) */}
        <aside style={{ borderLeft: '1px solid rgba(255,255,255,0.05)', background: '#09090B', padding: '0', overflowY: 'auto', display: 'flex', flexDirection: 'column' }}>
          
          <div style={{ padding: '3rem 2.5rem' }}>
            <h2 style={{ fontSize: '2rem', fontWeight: 800, marginBottom: '0.5rem', letterSpacing: '-0.02em' }}>Brand & Aesthetics</h2>
            <p style={{ opacity: 0.6, fontSize: '1rem', marginBottom: '3rem' }}>Click to instantly mutate the entire website.</p>

            <div style={{ marginBottom: '4rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
                <h3 style={{ fontSize: '1.25rem', fontWeight: 800 }}>Select Brand Identity</h3>
                <span style={{ fontSize: '0.75rem', background: 'rgba(255,255,255,0.1)', padding: '0.25rem 0.75rem', borderRadius: '1rem' }}>Global</span>
              </div>
              
              <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '1.5rem' }}>
                {IDENTITIES.map(brand => (
                  <div
                    key={brand.id}
                    onClick={() => setActiveBrand(brand)}
                    style={{
                      borderRadius: '1.5rem',
                      border: '2px solid',
                      borderColor: activeBrand.id === brand.id ? brand.colors.primary : 'rgba(255,255,255,0.05)',
                      background: 'rgba(255,255,255,0.02)',
                      cursor: 'pointer',
                      overflow: 'hidden',
                      transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                      transform: activeBrand.id === brand.id ? 'scale(1.02)' : 'scale(1)',
                      boxShadow: activeBrand.id === brand.id ? `0 20px 40px -10px ${brand.colors.primary}44` : 'none'
                    }}
                    onMouseOver={(e) => {
                      if (activeBrand.id !== brand.id) e.currentTarget.style.borderColor = 'rgba(255,255,255,0.2)';
                    }}
                    onMouseOut={(e) => {
                      if (activeBrand.id !== brand.id) e.currentTarget.style.borderColor = 'rgba(255,255,255,0.05)';
                    }}
                  >
                    <div style={{ width: '100%', height: '140px', position: 'relative' }}>
                      {/* Brand identity swatch — color is the identity, no PNG needed */}
                      <div style={{
                        width: '100%', height: '100%',
                        background: `linear-gradient(135deg, ${brand.colors.background} 0%, ${brand.colors.surface} 50%, ${brand.colors.primary}33 100%)`,
                        position: 'relative',
                      }}>
                        {/* Accent orb */}
                        <div style={{
                          position: 'absolute', top: '50%', right: '1.5rem',
                          transform: 'translateY(-50%)',
                          width: 32, height: 32, borderRadius: '50%',
                          background: brand.colors.primary,
                          boxShadow: `0 0 24px ${brand.colors.primary}99`,
                        }} />
                      </div>
                      <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.8) 0%, transparent 100%)' }} />
                      
                      <div style={{ position: 'absolute', bottom: '1.5rem', left: '1.5rem', right: '1.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <div>
                          <div style={{ fontSize: '1.5rem', fontWeight: 800, color: '#FFF', marginBottom: '0.25rem' }}>{brand.name}</div>
                          <div style={{ fontSize: '0.875rem', color: brand.colors.primary, fontWeight: 700 }}>{brand.mood}</div>
                        </div>
                        <div style={{ width: 24, height: 24, borderRadius: '50%', background: brand.colors.primary, boxShadow: `0 0 20px ${brand.colors.primary}` }} />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
                <h3 style={{ fontSize: '1.25rem', fontWeight: 800 }}>Select UI Layout</h3>
                <span style={{ fontSize: '0.75rem', background: 'rgba(255,255,255,0.1)', padding: '0.25rem 0.75rem', borderRadius: '1rem' }}>Structure</span>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {AESTHETICS.map(a => (
                  <button
                    key={a.id}
                    onClick={() => setActiveAesthetic(a)}
                    style={{
                      padding: '1.5rem',
                      borderRadius: '1rem',
                      border: '1px solid',
                      borderColor: activeAesthetic.id === a.id ? 'var(--zx-primary)' : 'rgba(255,255,255,0.05)',
                      background: activeAesthetic.id === a.id ? 'rgba(33,241,168,0.05)' : 'rgba(255,255,255,0.02)',
                      color: activeAesthetic.id === a.id ? 'var(--zx-primary)' : 'var(--zx-text)',
                      cursor: 'pointer',
                      fontSize: '1rem',
                      fontWeight: 700,
                      transition: 'all 0.3s ease',
                      textAlign: 'left',
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '0.5rem'
                    }}
                  >
                    <div>{a.name}</div>
                    <div style={{ fontSize: '0.75rem', opacity: 0.6, fontWeight: 500 }}>{a.description}</div>
                  </button>
                ))}
              </div>
            </div>

          </div>

          <div style={{ marginTop: 'auto', background: '#000', padding: '3rem 2.5rem', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
            {!showCli ? (
              <button 
                onClick={() => setShowCli(true)}
                style={{ 
                  width: '100%', padding: '1.5rem', background: 'var(--zx-primary)', 
                  color: '#000', fontWeight: 800, border: 'none', borderRadius: '1rem', 
                  cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.75rem',
                  fontSize: '1.25rem',
                  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                  boxShadow: '0 10px 30px -5px rgba(33,241,168,0.4)'
                }}
              >
                <span style={{ fontSize: '1.5rem' }}>🚀</span> Launch {activeExperience.personality}
              </button>
            ) : (
              <div style={{ animation: 'fadeIn 0.3s ease-out' }}>
                <div style={{ fontSize: '0.875rem', opacity: 0.5, marginBottom: '1.5rem', textTransform: 'uppercase', letterSpacing: '0.1em', fontWeight: 800 }}>Launch Workflow</div>
                
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '2rem' }}>
                  {[
                    { id: 'cli', label: 'ZenixUI Installer' },
                    { id: 'compose', label: 'Compose File' }
                  ].map(opt => (
                    <label key={opt.id} style={{ display: 'flex', alignItems: 'center', gap: '1rem', cursor: 'pointer', padding: '1rem', border: '1px solid', borderColor: installLevel === opt.id ? 'var(--zx-primary)' : 'rgba(255,255,255,0.1)', borderRadius: '0.75rem', background: installLevel === opt.id ? 'rgba(33,241,168,0.05)' : 'transparent' }}>
                      <div style={{ width: '20px', height: '20px', borderRadius: '50%', border: '2px solid', borderColor: installLevel === opt.id ? 'var(--zx-primary)' : 'rgba(255,255,255,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                         {installLevel === opt.id && <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: 'var(--zx-primary)' }} />}
                      </div>
                      <span style={{ fontSize: '1rem', fontWeight: installLevel === opt.id ? 700 : 500, color: installLevel === opt.id ? '#FFF' : 'rgba(255,255,255,0.7)' }}>{opt.label}</span>
                    </label>
                  ))}
                </div>

                <div style={{ position: 'relative' }}>
                  <div style={{ padding: '1.5rem', background: '#050505', borderRadius: '0.75rem', fontFamily: 'monospace', color: 'var(--zx-primary)', fontSize: '0.875rem', wordBreak: 'break-all', border: '1px solid rgba(33,241,168,0.2)' }}>
                    {installLevel === 'cli' && `npx zenix-ui new ${activeExperience.id} -v ${activeVariant.id} -b ${activeBrand.id} -a ${activeAesthetic.id}`}
                    {installLevel === 'compose' && `npx zenix-ui compose up ./launch.yaml`}
                  </div>
                  <button style={{ position: 'absolute', top: '1rem', right: '1rem', background: 'rgba(255,255,255,0.1)', border: 'none', color: '#FFF', padding: '0.5rem 1rem', borderRadius: '0.5rem', fontSize: '0.75rem', cursor: 'pointer', fontWeight: 700 }}>
                    Copy
                  </button>
                </div>
              </div>
            )}
          </div>
        </aside>
      </div>
    );
  }

  return null;
}
