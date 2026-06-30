'use client';

import React, { useState, useEffect } from 'react';
import { PageSection } from '@zenixui/components';
import { HeroTitle } from './HeroTitle';
import { HeroDescription } from './HeroDescription';
import Link from 'next/link';
import { blueprints } from '@zenixui/blueprints';
import { EXPERIENCES } from '../../../lib/launchpad';

export function Hero() {
  const [activeIdx, setActiveIdx] = useState(0);

  // We rotate through the first 4 experiences every 5 seconds
  const rotatingExperiences = EXPERIENCES.slice(0, 4);
  const activeExperience = rotatingExperiences[activeIdx];

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIdx((prev) => (prev + 1) % rotatingExperiences.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [rotatingExperiences.length]);

  // Safely resolve the blueprint
  const aestheticMap = activeExperience?.variants?.[0]?.blueprintIdMap || {};
  const activeBlueprintId = Object.values(aestheticMap)[0] || 'zenix-portfolio';
  const ActiveBlueprintComponent = blueprints.find(b => b.id === activeBlueprintId)?.component;

  if (!activeExperience) return null;

  return (
    <PageSection style={{ textAlign: 'center', marginBottom: '8rem', paddingTop: '4rem' }}>
      <HeroTitle />
      <HeroDescription />

      {/* The Actual Product Outcome Hero Box (The Living Hero) */}
      <div style={{
        marginTop: '4rem',
        maxWidth: '1200px',
        margin: '4rem auto 0',
        background: '#09090B',
        border: '1px solid rgba(255,255,255,0.1)',
        borderRadius: '1.5rem',
        overflow: 'hidden',
        boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)',
        display: 'flex',
        flexDirection: 'column',
        transition: 'all 0.5s ease'
      }}>
        <div style={{ padding: '1.5rem 2rem', borderBottom: '1px solid rgba(255,255,255,0.1)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <h2 style={{ fontSize: '1.5rem', fontWeight: 800 }}>Launch {activeExperience.name}</h2>
          <div style={{ display: 'flex', gap: '0.5rem' }}>
             <span style={{ padding: '0.25rem 0.75rem', background: 'rgba(255,255,255,0.1)', borderRadius: '2rem', fontSize: '0.75rem', fontWeight: 600 }}>
               Average setup: {activeExperience.averageSetupTime}
             </span>
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '2.5fr 1fr', minHeight: '500px' }}>
          {/* Beautiful Preview Area (Actual Engine Rendering) */}
          <div style={{ 
            background: 'linear-gradient(135deg, #1A0B1E 0%, #09090B 100%)',
            position: 'relative',
            overflow: 'hidden'
          }}>
             {/* We scale the actual blueprint so it acts as a gorgeous preview window */}
             <div style={{ 
               position: 'absolute', inset: 0, 
               transform: 'scale(0.8)', transformOrigin: 'top center',
               width: '125%', height: '125%',
               pointerEvents: 'none'
             }}>
               {ActiveBlueprintComponent ? <ActiveBlueprintComponent /> : null}
             </div>
          </div>

          {/* Checklist Area (The Promise) */}
          <div style={{ background: '#111', padding: '2.5rem', display: 'flex', flexDirection: 'column', borderLeft: '1px solid rgba(255,255,255,0.1)' }}>
            <h3 style={{ fontSize: '1.25rem', fontWeight: 800, marginBottom: '0.5rem', color: '#FFF' }}>{activeExperience.promise}</h3>
            <p style={{ fontSize: '0.875rem', opacity: 0.7, marginBottom: '2rem' }}>{activeExperience.description}</p>
            
            <h4 style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.1em', opacity: 0.5, marginBottom: '1rem' }}>Includes</h4>
            
            <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '1rem', flex: 1, margin: 0 }}>
              {activeExperience.includes.outcomes.slice(0, 8).map(item => (
                <li key={item} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontSize: '0.875rem', fontWeight: 600 }}>
                  <span style={{ color: 'var(--zx-primary)' }}>✔</span> {item}
                </li>
              ))}
            </ul>

            <Link href="/launchpad" style={{ textDecoration: 'none', marginTop: '2rem' }}>
              <button style={{ 
                width: '100%', padding: '1.25rem', background: 'var(--zx-primary)', 
                color: '#000', fontWeight: 800, fontSize: '1rem', border: 'none', 
                borderRadius: '0.75rem', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem',
                transition: 'transform 0.2s ease'
              }}
              onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.02)'}
              onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
              >
                <span style={{ fontSize: '1.25rem' }}>🚀</span> Launch Experience
              </button>
            </Link>
          </div>
        </div>
      </div>
    </PageSection>
  );
}
