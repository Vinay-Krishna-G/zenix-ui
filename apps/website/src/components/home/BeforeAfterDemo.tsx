'use client';

import React, { useState, useEffect } from 'react';
import { blueprints } from '@zenixui/blueprints';

export function BeforeAfterDemo() {
  const [showAfter, setShowAfter] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setShowAfter(prev => !prev);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const ActiveBlueprintComponent = blueprints.find(b => b.id === 'midnight-portfolio')?.component;

  return (
    <section style={{ marginBottom: '10rem' }}>
      <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
        <h2 style={{ fontSize: '2.5rem', fontWeight: 800, marginBottom: '1rem', letterSpacing: '-0.02em' }}>The Difference</h2>
        <p style={{ fontSize: '1.25rem', opacity: 0.7, maxWidth: '600px', margin: '0 auto' }}>
          Stop staring at blank white screens. 
        </p>
      </div>

      <div style={{ 
        maxWidth: '1200px', margin: '0 auto', 
        position: 'relative', 
        height: '600px',
        borderRadius: '1.5rem',
        overflow: 'hidden',
        border: '1px solid rgba(255,255,255,0.1)'
      }}>
        
        {/* Before: Blank Next.js App */}
        <div style={{
          position: 'absolute', inset: 0,
          background: '#FFF', color: '#000',
          padding: '4rem',
          fontFamily: 'system-ui, sans-serif',
          opacity: showAfter ? 0 : 1,
          transition: 'opacity 1s ease',
          zIndex: showAfter ? 1 : 2
        }}>
          <h1 style={{ fontSize: '2rem', fontWeight: 800 }}>Welcome to Next.js!</h1>
          <p style={{ marginTop: '1rem', color: '#666' }}>Get started by editing <code>app/page.tsx</code></p>
          
          <div style={{ marginTop: '4rem', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
            <div style={{ border: '1px solid #EAEAEA', padding: '2rem', borderRadius: '0.5rem' }}>
              <h2 style={{ fontSize: '1.25rem', fontWeight: 600 }}>Documentation &rarr;</h2>
              <p style={{ marginTop: '0.5rem', color: '#666' }}>Find in-depth information about Next.js features and API.</p>
            </div>
            <div style={{ border: '1px solid #EAEAEA', padding: '2rem', borderRadius: '0.5rem' }}>
              <h2 style={{ fontSize: '1.25rem', fontWeight: 600 }}>Learn &rarr;</h2>
              <p style={{ marginTop: '0.5rem', color: '#666' }}>Learn about Next.js in an interactive course with quizzes!</p>
            </div>
          </div>
          
          {/* Badge overlays to explain what this is */}
          <div style={{ position: 'absolute', top: '2rem', right: '2rem', padding: '0.5rem 1.5rem', background: '#000', color: '#FFF', borderRadius: '2rem', fontWeight: 800 }}>
            Before
          </div>
        </div>

        {/* After: ZenixUI Production Website */}
        <div style={{
          position: 'absolute', inset: 0,
          background: '#09090B',
          opacity: showAfter ? 1 : 0,
          transition: 'opacity 1s ease',
          zIndex: showAfter ? 2 : 1,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          overflow: 'hidden'
        }}>
          <div style={{ 
            position: 'absolute', inset: 0, 
            transform: 'scale(0.8)', transformOrigin: 'top center',
            width: '125%', height: '125%',
            pointerEvents: 'none'
          }}>
            {ActiveBlueprintComponent ? <ActiveBlueprintComponent /> : null}
          </div>

          <div style={{ position: 'absolute', top: '2rem', right: '2rem', padding: '0.5rem 1.5rem', background: 'var(--zx-primary)', color: '#000', borderRadius: '2rem', fontWeight: 800 }}>
            After (2 minutes later)
          </div>
        </div>

      </div>
    </section>
  );
}
