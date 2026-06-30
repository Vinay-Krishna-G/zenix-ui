'use client';

import React from 'react';
import { EXPERIENCES } from '../../lib/launchpad';
import Image from 'next/image';
import Link from 'next/link';

export function ExperienceShowcase() {
  return (
    <section style={{ marginBottom: '8rem' }}>
      <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
        <h2 style={{ fontSize: '2.5rem', fontWeight: 800, marginBottom: '1rem', letterSpacing: '-0.02em' }}>What will you launch today?</h2>
        <p style={{ fontSize: '1.25rem', opacity: 0.7, maxWidth: '600px', margin: '0 auto' }}>
          Stop starting from scratch. Select a complete, production-ready website and customize it to fit your brand.
        </p>
      </div>

      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))', 
        gap: '2rem' 
      }}>
        {EXPERIENCES.map(exp => (
          <Link key={exp.id} href="/launchpad" style={{ textDecoration: 'none', color: 'inherit' }}>
            <div style={{ 
              background: '#111', 
              borderRadius: '1rem', 
              border: '1px solid rgba(255,255,255,0.1)',
              overflow: 'hidden',
              cursor: 'pointer',
              transition: 'transform 0.2s ease, border-color 0.2s ease'
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.transform = 'translateY(-4px)';
              e.currentTarget.style.borderColor = 'rgba(255,255,255,0.3)';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)';
            }}
            >
              <div style={{ width: '100%', aspectRatio: '16/10', position: 'relative' }}>
                <Image src={exp.coverImage} alt={exp.name} fill style={{ objectFit: 'cover' }} />
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.9) 0%, transparent 100%)' }} />
                
                <h3 style={{ position: 'absolute', bottom: '1.5rem', left: '1.5rem', fontSize: '1.5rem', fontWeight: 800 }}>
                  {exp.name}
                </h3>
              </div>
              <div style={{ padding: '1.5rem' }}>
                <h4 style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.1em', opacity: 0.5, marginBottom: '1rem' }}>Outcomes Included</h4>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.5rem' }}>
                  {exp.includes.outcomes.slice(0, 6).map(outcome => (
                    <li key={outcome} style={{ fontSize: '0.875rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                      <span style={{ color: 'var(--zx-primary)' }}>✔</span> {outcome}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Link>
        ))}
      </div>
      
      <div style={{ textAlign: 'center', marginTop: '4rem' }}>
        <Link href="/launchpad" style={{ textDecoration: 'none' }}>
           <button style={{ padding: '1rem 2rem', background: '#FFF', color: '#000', border: 'none', borderRadius: '2rem', fontSize: '1rem', fontWeight: 700, cursor: 'pointer' }}>
             View All in Launchpad
           </button>
        </Link>
      </div>
    </section>
  );
}
