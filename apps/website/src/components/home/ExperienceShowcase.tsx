'use client';

import React from 'react';
import { EXPERIENCES, Experience } from '../../lib/launchpad';
import Image from 'next/image';
import Link from 'next/link';

// Group experiences roughly for Netflix-style rows
const CATEGORIES = [
  { title: 'Trending Now', filter: (e: Experience) => e.rating >= 4.9 },
  { title: 'Built for Creators', filter: (e: Experience) => ['creator', 'personal'].includes(e.industryId) },
  { title: 'AI & Business', filter: (e: Experience) => ['ai', 'business'].includes(e.industryId) },
  { title: 'Local & Healthcare', filter: (e: Experience) => ['healthcare'].includes(e.industryId) || e.name.includes('Restaurant') }
];

export function ExperienceShowcase() {
  return (
    <section style={{ marginBottom: '8rem' }}>
      <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
        <h2 style={{ fontSize: '3rem', fontWeight: 800, marginBottom: '1rem', letterSpacing: '-0.03em' }}>Infinite possibilities.</h2>
        <p style={{ fontSize: '1.25rem', opacity: 0.7, maxWidth: '600px', margin: '0 auto' }}>
          Stop starting from scratch. Select a complete, production-ready website and customize it to fit your brand.
        </p>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '4rem' }}>
        {CATEGORIES.map(category => {
          const rowExps = EXPERIENCES.filter(category.filter);
          if (rowExps.length === 0) return null;

          return (
            <div key={category.title}>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '1.5rem', paddingLeft: '2rem', display: 'flex', alignItems: 'center', gap: '1rem' }}>
                {category.title}
                <span style={{ fontSize: '0.75rem', padding: '0.25rem 0.75rem', background: 'rgba(255,255,255,0.1)', borderRadius: '2rem', fontWeight: 600 }}>Production Ready</span>
              </h3>
              
              {/* Horizontal Scroll Container (Netflix Style) */}
              <div style={{ 
                display: 'flex', 
                overflowX: 'auto', 
                gap: '2rem', 
                padding: '0 2rem 2rem',
                scrollSnapType: 'x mandatory',
                scrollbarWidth: 'none', // Firefox
                msOverflowStyle: 'none',  // IE
              }}>
                {rowExps.map(exp => (
                  <Link key={exp.id} href="/launchpad" style={{ textDecoration: 'none', color: 'inherit', flexShrink: 0, width: '400px', scrollSnapAlign: 'start' }}>
                    <div style={{ 
                      background: '#09090B', 
                      borderRadius: '1rem', 
                      border: '1px solid rgba(255,255,255,0.1)',
                      overflow: 'hidden',
                      cursor: 'pointer',
                      transition: 'transform 0.2s ease, border-color 0.2s ease',
                      display: 'flex',
                      flexDirection: 'column',
                      height: '100%'
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
                        
                        <div style={{ position: 'absolute', top: '1rem', left: '1rem', display: 'flex', gap: '0.5rem' }}>
                          <span style={{ padding: '0.25rem 0.75rem', background: 'rgba(255,255,255,0.2)', borderRadius: '2rem', fontSize: '0.75rem', backdropFilter: 'blur(4px)', color: '#FFF', fontWeight: 600 }}>
                            {exp.personality}
                          </span>
                        </div>
                        
                        <h4 style={{ position: 'absolute', bottom: '1.5rem', left: '1.5rem', fontSize: '1.75rem', fontWeight: 800 }}>
                          {exp.name}
                        </h4>
                      </div>
                      <div style={{ padding: '1.5rem', flex: 1, display: 'flex', flexDirection: 'column' }}>
                        <p style={{ fontSize: '0.875rem', opacity: 0.7, marginBottom: '1.5rem' }}>{exp.promise}</p>
                        
                        <div style={{ marginTop: 'auto' }}>
                          <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '1rem', flexWrap: 'wrap' }}>
                             <span style={{ fontSize: '0.7rem', padding: '0.2rem 0.5rem', background: 'rgba(33,241,168,0.1)', color: 'var(--zx-primary)', borderRadius: '0.25rem', fontWeight: 600 }}>Deploy Ready</span>
                             <span style={{ fontSize: '0.7rem', padding: '0.2rem 0.5rem', background: 'rgba(255,255,255,0.05)', borderRadius: '0.25rem' }}>SEO Ready</span>
                             <span style={{ fontSize: '0.7rem', padding: '0.2rem 0.5rem', background: 'rgba(255,255,255,0.05)', borderRadius: '0.25rem' }}>Dark Mode</span>
                          </div>
                          <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.5rem' }}>
                            {exp.includes.outcomes.slice(0, 4).map(outcome => (
                              <li key={outcome} style={{ fontSize: '0.875rem', display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: 600 }}>
                                <span style={{ color: 'var(--zx-primary)' }}>✔</span> {outcome}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          );
        })}
      </div>
      
      <div style={{ textAlign: 'center', marginTop: '4rem' }}>
        <Link href="/launchpad" style={{ textDecoration: 'none' }}>
           <button style={{ padding: '1rem 2.5rem', background: '#FFF', color: '#000', border: 'none', borderRadius: '2rem', fontSize: '1.1rem', fontWeight: 800, cursor: 'pointer' }}>
             Browse Entire Gallery
           </button>
        </Link>
      </div>
    </section>
  );
}
