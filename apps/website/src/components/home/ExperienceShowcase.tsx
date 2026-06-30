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
    <section style={{ marginBottom: '10rem', marginTop: '6rem' }}>
      <div style={{ textAlign: 'center', marginBottom: '6rem', padding: '0 2rem' }}>
        <h2 style={{ fontSize: '3.5rem', fontWeight: 800, marginBottom: '1.5rem', letterSpacing: '-0.04em' }}>
          Infinite possibilities.
        </h2>
        <p style={{ fontSize: '1.5rem', opacity: 0.6, maxWidth: '600px', margin: '0 auto', lineHeight: 1.5 }}>
          Stop starting from scratch. Select a complete, production-ready website and customize it to fit your brand.
        </p>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '6rem' }}>
        {CATEGORIES.map(category => {
          const rowExps = EXPERIENCES.filter(category.filter);
          if (rowExps.length === 0) return null;

          return (
            <div key={category.title}>
              <h3 style={{ 
                fontSize: '1.5rem', 
                fontWeight: 700, 
                marginBottom: '2rem', 
                paddingLeft: 'max(2rem, calc((100vw - 1440px) / 2 + 2rem))', 
                display: 'flex', 
                alignItems: 'center', 
                gap: '1rem',
                letterSpacing: '-0.02em'
              }}>
                {category.title}
                <span style={{ fontSize: '0.75rem', padding: '0.25rem 0.75rem', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '2rem', fontWeight: 600, color: 'var(--zx-primary)' }}>
                  Production Ready
                </span>
              </h3>
              
              {/* Horizontal Scroll Container (Netflix Style) */}
              <div style={{ 
                display: 'flex', 
                overflowX: 'auto', 
                gap: '2.5rem', 
                padding: '1rem max(2rem, calc((100vw - 1440px) / 2 + 2rem)) 4rem',
                scrollSnapType: 'x mandatory',
                scrollbarWidth: 'none', // Firefox
                msOverflowStyle: 'none',  // IE
              }}>
                {rowExps.map(exp => (
                  <Link key={exp.id} href="/launchpad" style={{ textDecoration: 'none', color: 'inherit', flexShrink: 0, width: '420px', scrollSnapAlign: 'start' }}>
                    <div style={{ 
                      background: 'var(--zx-surface)', 
                      borderRadius: '1.5rem', 
                      border: '1px solid rgba(255,255,255,0.05)',
                      overflow: 'hidden',
                      cursor: 'pointer',
                      transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                      display: 'flex',
                      flexDirection: 'column',
                      height: '100%',
                      boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)'
                    }}
                    onMouseOver={(e) => {
                      e.currentTarget.style.transform = 'translateY(-8px) scale(1.01)';
                      e.currentTarget.style.borderColor = 'rgba(255,255,255,0.2)';
                      e.currentTarget.style.boxShadow = '0 25px 50px -12px rgba(0, 0, 0, 0.5)';
                    }}
                    onMouseOut={(e) => {
                      e.currentTarget.style.transform = 'translateY(0) scale(1)';
                      e.currentTarget.style.borderColor = 'rgba(255,255,255,0.05)';
                      e.currentTarget.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)';
                    }}
                    >
                      <div style={{ width: '100%', aspectRatio: '16/10', position: 'relative', background: '#09090B' }}>
                        <Image src={exp.coverImage} alt={exp.name} fill style={{ objectFit: 'cover' }} loading="lazy" />
                        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.8) 0%, transparent 100%)' }} />
                        
                        <div style={{ position: 'absolute', top: '1.5rem', left: '1.5rem', display: 'flex', gap: '0.5rem' }}>
                          <span style={{ padding: '0.4rem 1rem', background: 'rgba(255,255,255,0.1)', backdropFilter: 'blur(8px)', borderRadius: '2rem', fontSize: '0.75rem', color: '#FFF', fontWeight: 800, letterSpacing: '0.1em', textTransform: 'uppercase' }}>
                            {exp.personality}
                          </span>
                        </div>
                        
                        <div style={{ position: 'absolute', bottom: '1.5rem', left: '1.5rem', right: '1.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
                          <h4 style={{ fontSize: '2rem', fontWeight: 800, margin: 0, color: '#FFF', textShadow: '0 2px 4px rgba(0,0,0,0.5)' }}>
                            {exp.name}
                          </h4>
                          <div style={{ display: 'flex', alignItems: 'center', gap: '0.25rem', color: '#FFB800', fontSize: '0.875rem', fontWeight: 700 }}>
                            ★★★★★
                          </div>
                        </div>
                      </div>
                      
                      <div style={{ padding: '2rem', flex: 1, display: 'flex', flexDirection: 'column' }}>
                        <p style={{ fontSize: '1.1rem', opacity: 0.8, marginBottom: '2rem', fontWeight: 500, lineHeight: 1.5 }}>{exp.promise}</p>
                        
                        <div style={{ marginTop: 'auto' }}>
                          <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '1.5rem', flexWrap: 'wrap' }}>
                             <span style={{ fontSize: '0.75rem', padding: '0.3rem 0.75rem', background: 'rgba(33,241,168,0.1)', color: 'var(--zx-primary)', borderRadius: '0.5rem', fontWeight: 700 }}>Deploy Ready</span>
                             <span style={{ fontSize: '0.75rem', padding: '0.3rem 0.75rem', background: 'rgba(255,255,255,0.05)', borderRadius: '0.5rem', fontWeight: 600 }}>{exp.averageSetupTime} setup</span>
                          </div>
                          
                          <div style={{ height: '1px', background: 'rgba(255,255,255,0.05)', margin: '0 -2rem 1.5rem' }} />
                          
                          <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem' }}>
                            {exp.includes.outcomes.slice(0, 4).map(outcome => (
                              <li key={outcome} style={{ fontSize: '0.875rem', display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: 500, opacity: 0.7 }}>
                                <span style={{ color: 'var(--zx-primary)', opacity: 1 }}>✔</span> {outcome}
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
           <button style={{ 
             padding: '1.25rem 3rem', 
             background: 'var(--zx-text)', 
             color: 'var(--zx-background)', 
             border: 'none', 
             borderRadius: '3rem', 
             fontSize: '1.1rem', 
             fontWeight: 800, 
             cursor: 'pointer',
             transition: 'transform 0.2s ease, opacity 0.2s ease'
           }}
           onMouseOver={(e) => { e.currentTarget.style.transform = 'scale(1.05)'; e.currentTarget.style.opacity = '0.9'; }}
           onMouseOut={(e) => { e.currentTarget.style.transform = 'scale(1)'; e.currentTarget.style.opacity = '1'; }}
           >
             Browse Entire Gallery
           </button>
        </Link>
      </div>
    </section>
  );
}
