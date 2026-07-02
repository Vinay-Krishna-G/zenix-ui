'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { EXPERIENCES, IDENTITIES, AESTHETICS, Experience, Identity, Aesthetic } from '../../../../lib/experiences';
import { LivePreview } from '../../../../components/preview/LivePreview';

export function StudioClient({ experience }: { experience: Experience }) {
  const [activeBrand, setActiveBrand] = useState<Identity>(IDENTITIES.find(b => b.id === 'emerald') || IDENTITIES[0]);
  const [activeAesthetic, setActiveAesthetic] = useState<Aesthetic>(AESTHETICS.find(a => a.id === 'glass') || AESTHETICS[0]);
  const [activeVariant, setActiveVariant] = useState(experience.variants[0]);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100vh', width: '100vw', background: '#09090B', overflow: 'hidden', fontFamily: 'Inter, system-ui, sans-serif' }}>
      
      {/* Studio Application Header */}
      <header style={{ 
        height: '64px', 
        borderBottom: '1px solid rgba(255,255,255,0.05)', 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'space-between',
        padding: '0 1.5rem',
        background: '#111113'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '2rem' }}>
          <Link href={`/experiences/${experience.id}`} style={{ color: 'var(--zx-muted, #A1A1AA)', textDecoration: 'none', fontSize: '0.875rem', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <span>←</span> Back to Experiences
          </Link>
          <div style={{ color: '#FFF', fontSize: '0.875rem', fontWeight: 700 }}>
            {experience.name} <span style={{ opacity: 0.5, fontWeight: 500 }}>/ Editing</span>
          </div>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '2rem' }}>
          {/* Action Tools */}
          <div style={{ display: 'flex', gap: '1rem', color: '#A1A1AA', fontSize: '0.875rem', fontWeight: 600 }}>
            <button style={{ background: 'none', border: 'none', color: 'inherit', cursor: 'pointer' }}>Undo</button>
            <button style={{ background: 'none', border: 'none', color: 'inherit', cursor: 'pointer', opacity: 0.5 }}>Redo</button>
          </div>
          
          <div style={{ width: '1px', height: '24px', background: 'rgba(255,255,255,0.1)' }} />

          {/* Responsive Controls */}
          <div style={{ display: 'flex', gap: '0.5rem', background: 'rgba(255,255,255,0.05)', padding: '0.25rem', borderRadius: '0.5rem' }}>
            <button style={{ background: 'rgba(255,255,255,0.1)', color: '#FFF', border: 'none', padding: '0.25rem 0.75rem', borderRadius: '0.25rem', fontSize: '0.75rem', fontWeight: 600, cursor: 'pointer' }}>Desktop</button>
            <button style={{ background: 'transparent', color: '#A1A1AA', border: 'none', padding: '0.25rem 0.75rem', borderRadius: '0.25rem', fontSize: '0.75rem', fontWeight: 600, cursor: 'pointer' }}>Tablet</button>
            <button style={{ background: 'transparent', color: '#A1A1AA', border: 'none', padding: '0.25rem 0.75rem', borderRadius: '0.25rem', fontSize: '0.75rem', fontWeight: 600, cursor: 'pointer' }}>Mobile</button>
          </div>

          <div style={{ width: '1px', height: '24px', background: 'rgba(255,255,255,0.1)' }} />

          {/* Primary Actions */}
          <div style={{ display: 'flex', gap: '1rem' }}>
            <button style={{ background: 'transparent', color: '#FFF', border: '1px solid rgba(255,255,255,0.2)', padding: '0.5rem 1rem', borderRadius: '0.5rem', fontSize: '0.875rem', fontWeight: 600, cursor: 'pointer' }}>Preview</button>
            <button style={{ background: 'var(--zx-primary, #FFF)', color: '#000', border: 'none', padding: '0.5rem 1rem', borderRadius: '0.5rem', fontSize: '0.875rem', fontWeight: 700, cursor: 'pointer' }}>Export Code</button>
          </div>
        </div>
      </header>

      {/* Main Studio Area (Focus Layout) */}
      <div style={{ display: 'flex', flex: 1, overflow: 'hidden' }}>
        
        {/* Canvas (75-80%) */}
        <main style={{ 
          flex: 1, 
          background: activeBrand.colors.background,
          position: 'relative',
          overflowY: 'auto',
          transition: 'background 0.5s ease'
        }}>
          <LivePreview 
            experienceId={experience.id}
            brandId={activeBrand.id}
            variantId={activeVariant.id}
            aestheticId={activeAesthetic.id}
            style={{ minHeight: '100%', width: '100%' }}
          />
        </main>

        {/* Focus Sidebar (20-25%) */}
        <aside style={{ 
          width: '340px', 
          background: '#111113', 
          borderLeft: '1px solid rgba(255,255,255,0.05)',
          display: 'flex',
          flexDirection: 'column',
          overflowY: 'auto'
        }}>
          <div style={{ padding: '1.5rem', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
            <h2 style={{ fontSize: '1rem', fontWeight: 700, color: '#FFF', margin: '0 0 1rem 0' }}>Appearance</h2>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '0.5rem' }}>
              {IDENTITIES.map(brand => (
                <button
                  key={brand.id}
                  onClick={() => setActiveBrand(brand)}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '1rem',
                    padding: '0.75rem',
                    background: activeBrand.id === brand.id ? 'rgba(255,255,255,0.05)' : 'transparent',
                    border: '1px solid',
                    borderColor: activeBrand.id === brand.id ? 'rgba(255,255,255,0.1)' : 'transparent',
                    borderRadius: '0.5rem',
                    color: activeBrand.id === brand.id ? '#FFF' : '#A1A1AA',
                    cursor: 'pointer',
                    textAlign: 'left',
                    transition: 'all 0.2s ease'
                  }}
                >
                  <div style={{ width: '20px', height: '20px', borderRadius: '50%', background: brand.colors.primary }} />
                  <span style={{ fontSize: '0.875rem', fontWeight: 600 }}>{brand.name}</span>
                </button>
              ))}
            </div>
          </div>

          <div style={{ padding: '1.5rem', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
            <h2 style={{ fontSize: '1rem', fontWeight: 700, color: '#FFF', margin: '0 0 1rem 0' }}>Layout</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              {AESTHETICS.map(a => (
                <button
                  key={a.id}
                  onClick={() => setActiveAesthetic(a)}
                  style={{
                    padding: '0.75rem',
                    background: activeAesthetic.id === a.id ? 'rgba(255,255,255,0.05)' : 'transparent',
                    border: '1px solid',
                    borderColor: activeAesthetic.id === a.id ? 'rgba(255,255,255,0.1)' : 'transparent',
                    borderRadius: '0.5rem',
                    color: activeAesthetic.id === a.id ? '#FFF' : '#A1A1AA',
                    cursor: 'pointer',
                    textAlign: 'left',
                    fontSize: '0.875rem',
                    fontWeight: 600,
                    transition: 'all 0.2s ease'
                  }}
                >
                  {a.name}
                </button>
              ))}
            </div>
          </div>

          <div style={{ padding: '1.5rem', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
             <h2 style={{ fontSize: '1rem', fontWeight: 700, color: '#FFF', margin: '0 0 1rem 0' }}>Typography</h2>
             <select style={{ width: '100%', padding: '0.75rem', background: '#09090B', border: '1px solid rgba(255,255,255,0.1)', color: '#FFF', borderRadius: '0.5rem', fontSize: '0.875rem', outline: 'none' }}>
               <option>Modern Sans (Inter)</option>
               <option>Editorial Serif (Playfair)</option>
               <option>Tech Mono (JetBrains)</option>
             </select>
          </div>

        </aside>
      </div>

    </div>
  );
}
