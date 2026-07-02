'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { EXPERIENCES, AESTHETICS } from '../../lib/experiences';

export function Navbar() {
  const [showExplore, setShowExplore] = useState(false);

  return (
    <nav style={{ 
      padding: '1.25rem 2rem', 
      display: 'flex', 
      justifyContent: 'space-between',
      alignItems: 'center',
      borderBottom: '1px solid var(--zx-elevated)', 
      position: 'relative', 
      zIndex: 100, 
      background: 'var(--zx-background)' 
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '3rem' }}>
        <div style={{ fontWeight: 800, fontSize: '1.25rem', letterSpacing: '-0.03em' }}>
          <Link href="/" style={{ color: 'inherit', textDecoration: 'none' }}>ZenixUI</Link>
        </div>
        
        <div style={{ display: 'flex', gap: '2rem', fontSize: '0.875rem', fontWeight: 600 }}>
          <div 
            style={{ position: 'relative' }}
            onMouseEnter={() => setShowExplore(true)}
            onMouseLeave={() => setShowExplore(false)}
          >
            <Link href="/experiences" style={{ color: 'inherit', textDecoration: 'none', opacity: showExplore ? 1 : 0.8, transition: 'opacity 0.2s' }}>
              Experiences
            </Link>
            
            {/* Mega Menu Dropdown */}
            {showExplore && (
              <div style={{ 
                position: 'absolute', 
                top: '100%', 
                left: '-2rem', 
                paddingTop: '1.5rem',
                animation: 'fadeIn 0.2s ease-out'
              }}>
                <div style={{ 
                  background: 'rgba(9, 9, 11, 0.95)',
                  backdropFilter: 'blur(20px)',
                  border: '1px solid var(--zx-elevated)',
                  borderRadius: '1rem',
                  padding: '2.5rem',
                  display: 'flex',
                  gap: '4rem',
                  width: '800px',
                  boxShadow: '0 30px 60px -10px rgba(0,0,0,0.5)'
                }}>
                  {/* Goals */}
                  <div style={{ flex: 1 }}>
                    <div style={{ fontSize: '0.75rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.1em', opacity: 0.5, marginBottom: '1.5rem' }}>
                      🚀 Start a Business
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                      {EXPERIENCES.slice(0, 5).map(exp => (
                        <Link key={exp.id} href={`/experiences/${exp.id}`} style={{ color: 'inherit', textDecoration: 'none', fontWeight: 500, fontSize: '1rem', opacity: 0.8 }}>
                          {exp.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                  
                  {/* Collections */}
                  <div style={{ flex: 1 }}>
                    <div style={{ fontSize: '0.75rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.1em', opacity: 0.5, marginBottom: '1.5rem' }}>
                      ✨ Collections
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                      {AESTHETICS.slice(0, 5).map(a => (
                        <Link key={a.id} href="/experiences" style={{ color: 'inherit', textDecoration: 'none', fontWeight: 500, fontSize: '1rem', opacity: 0.8 }}>
                          {a.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                  
                  {/* Popular */}
                  <div style={{ flex: 1 }}>
                    <div style={{ fontSize: '0.75rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.1em', opacity: 0.5, marginBottom: '1.5rem' }}>
                      ⭐ Popular
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                      <Link href="/experiences" style={{ color: 'inherit', textDecoration: 'none', fontWeight: 500, fontSize: '1rem', opacity: 0.8 }}>New</Link>
                      <Link href="/experiences" style={{ color: 'inherit', textDecoration: 'none', fontWeight: 500, fontSize: '1rem', opacity: 0.8 }}>Featured</Link>
                      <Link href="/experiences" style={{ color: 'inherit', textDecoration: 'none', fontWeight: 500, fontSize: '1rem', opacity: 0.8 }}>Community</Link>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          <Link href="/docs" style={{ color: 'inherit', textDecoration: 'none', opacity: 0.8 }}>Docs</Link>
          <Link href="/pricing" style={{ color: 'inherit', textDecoration: 'none', opacity: 0.8 }}>Pricing</Link>
          <Link href="/enterprise" style={{ color: 'inherit', textDecoration: 'none', opacity: 0.8 }}>Enterprise</Link>
        </div>
      </div>
      
      <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
        <div style={{ 
          display: 'flex', alignItems: 'center', gap: '0.5rem', 
          background: 'rgba(255,255,255,0.05)', padding: '0.5rem 1rem', 
          borderRadius: '2rem', fontSize: '0.875rem', opacity: 0.7, cursor: 'text'
        }}>
          <span>Search experiences...</span>
          <span style={{ background: 'rgba(255,255,255,0.1)', padding: '0.1rem 0.4rem', borderRadius: '0.25rem', fontSize: '0.75rem', fontWeight: 600 }}>⌘K</span>
        </div>
        
        <Link href="/experiences" style={{ 
          background: 'var(--zx-primary)', color: 'var(--zx-background)', 
          padding: '0.6rem 1.25rem', borderRadius: '2rem', 
          fontWeight: 700, fontSize: '0.875rem', textDecoration: 'none'
        }}>
          Launch
        </Link>
      </div>
    </nav>
  );
}
