'use client';

import React, { useState, useEffect } from 'react';
import { PageSection } from '@zenixui/components';
import { HeroTitle } from './HeroTitle';
import { HeroDescription } from './HeroDescription';
import Link from 'next/link';
import { blueprints } from '@zenixui/blueprints';
import { EXPERIENCES } from '../../../lib/experiences';

export function Hero() {
  const [activeIdx, setActiveIdx] = useState(0);

  // We rotate through the experiences every 4 seconds to create magic
  const rotatingExperiences = EXPERIENCES.slice(0, 8);
  const activeExperience = rotatingExperiences[activeIdx];

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIdx((prev) => (prev + 1) % rotatingExperiences.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [rotatingExperiences.length]);

  // Safely resolve the blueprint
  const aestheticMap = activeExperience?.variants?.[0]?.blueprintIdMap || {};
  const activeBlueprintId = Object.values(aestheticMap)[0] || 'zenix-portfolio';
  const ActiveBlueprintComponent = blueprints.find(b => b.id === activeBlueprintId)?.component;

  if (!activeExperience) return null;

  return (
    <PageSection style={{ textAlign: 'center', marginBottom: '10rem', paddingTop: '4rem' }}>
      <HeroTitle />
      <HeroDescription />

      {/* The Magical Hero Box (V5) */}
      <div style={{
        marginTop: '5rem',
        maxWidth: '1200px',
        margin: '5rem auto 0',
        background: '#09090B',
        border: '1px solid rgba(255,255,255,0.05)',
        borderRadius: '1.5rem',
        overflow: 'hidden',
        boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5), 0 0 100px -20px rgba(255,255,255,0.1)',
        display: 'flex',
        flexDirection: 'column',
      }}>
        <div style={{ padding: '1.5rem 2rem', borderBottom: '1px solid rgba(255,255,255,0.05)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <span style={{ fontSize: '1rem', fontWeight: 800, padding: '0.4rem 1rem', background: 'rgba(255,255,255,0.1)', borderRadius: '2rem', letterSpacing: '0.05em' }}>
              {activeExperience.personality}
            </span>
            <h2 style={{ fontSize: '1.5rem', fontWeight: 800, color: '#FFF' }}>{activeExperience.name}</h2>
          </div>
          <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
             <span style={{ color: '#FFB800', fontWeight: 700, fontSize: '0.875rem' }}>★★★★★</span>
             <span style={{ fontSize: '0.875rem', fontWeight: 600, opacity: 0.6 }}>{activeExperience.launches} launches</span>
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '2.5fr 1fr', minHeight: '550px' }}>
          {/* Beautiful Live Preview Area */}
          <div style={{ 
            background: 'linear-gradient(135deg, #1A0B1E 0%, #09090B 100%)',
            position: 'relative',
            overflow: 'hidden'
          }}>
             <div style={{ 
               position: 'absolute', inset: 0, 
               transform: 'scale(0.85)', transformOrigin: 'top center',
               width: '117%', height: '117%',
               pointerEvents: 'none',
               animation: 'fadeInUp 0.8s cubic-bezier(0.4, 0, 0.2, 1)'
             }} key={activeExperience.id}>
               {ActiveBlueprintComponent ? <ActiveBlueprintComponent /> : null}
             </div>
          </div>

          {/* Marketing Copy Area */}
          <div style={{ background: '#09090B', padding: '3rem', display: 'flex', flexDirection: 'column', borderLeft: '1px solid rgba(255,255,255,0.05)', position: 'relative' }}>
            <div key={activeExperience.id} style={{ animation: 'fadeIn 0.8s ease-out' }}>
              <h3 style={{ fontSize: '1.75rem', fontWeight: 800, marginBottom: '1rem', color: '#FFF', lineHeight: 1.2 }}>{activeExperience.promise}</h3>
              <p style={{ fontSize: '1rem', opacity: 0.7, marginBottom: '2rem', lineHeight: 1.6 }}>{activeExperience.marketingCopy}</p>
              
              <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '3rem' }}>
                {activeExperience.includes.outcomes.slice(0, 6).map(item => (
                  <li key={item} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontSize: '0.875rem', fontWeight: 600 }}>
                    <span style={{ color: 'var(--zx-primary)' }}>✔</span> {item}
                  </li>
                ))}
              </ul>
            </div>

            <Link href="/experiences" style={{ textDecoration: 'none', marginTop: 'auto' }}>
              <button style={{ 
                width: '100%', padding: '1.25rem', background: 'var(--zx-text)', 
                color: 'var(--zx-background)', fontWeight: 800, fontSize: '1.1rem', border: 'none', 
                borderRadius: '3rem', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem',
                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                boxShadow: '0 10px 20px -5px rgba(255,255,255,0.1)'
              }}
              onMouseOver={(e) => { e.currentTarget.style.transform = 'scale(1.05)'; e.currentTarget.style.background = '#FFF'; }}
              onMouseOut={(e) => { e.currentTarget.style.transform = 'scale(1)'; e.currentTarget.style.background = 'var(--zx-text)'; }}
              >
                Launch {activeExperience.personality}
              </button>
            </Link>
          </div>
        </div>
      </div>
      
      {/* Global styles for animations */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes fadeInUp {
          from { opacity: 0; transform: scale(0.85) translateY(20px); }
          to { opacity: 1; transform: scale(0.85) translateY(0); }
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
      `}} />
    </PageSection>
  );
}
