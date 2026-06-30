'use client';

import React, { useState, useEffect } from 'react';
import { blueprints } from '@zenixui/blueprints';
import Image from 'next/image';

const STAGES = [
  { day: 'Monday', title: 'The Idea', desc: 'Blank Next.js canvas.', duration: 3000 },
  { day: 'Tuesday', title: 'The Launch', desc: 'ZenixUI injected. Startup live.', duration: 3000 },
  { day: 'Friday', title: 'The Result', desc: '10,000 active users.', duration: 4000 }
];

export function BeforeAfterDemo() {
  const [stage, setStage] = useState(0);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    
    const advanceStage = () => {
      setStage(s => {
        const next = (s + 1) % STAGES.length;
        timer = setTimeout(advanceStage, STAGES[next].duration);
        return next;
      });
    };

    timer = setTimeout(advanceStage, STAGES[0].duration);
    return () => clearTimeout(timer);
  }, []);

  const ActiveBlueprintComponent = blueprints.find(b => b.id === 'ocean-portfolio')?.component;

  return (
    <section style={{ marginBottom: '10rem', padding: '0 2rem' }}>
      <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
        <h2 style={{ fontSize: '3.5rem', fontWeight: 800, marginBottom: '1.5rem', letterSpacing: '-0.04em' }}>
          Launch Stories
        </h2>
        <p style={{ fontSize: '1.5rem', opacity: 0.6, maxWidth: '600px', margin: '0 auto', lineHeight: 1.5 }}>
          From idea to scale in one week.
        </p>
      </div>

      <div style={{ 
        maxWidth: '1200px', margin: '0 auto', 
        position: 'relative', 
        height: '600px',
        borderRadius: '1.5rem',
        overflow: 'hidden',
        border: '1px solid rgba(255,255,255,0.05)',
        boxShadow: '0 25px 50px -12px rgba(0,0,0,0.5)'
      }}>
        
        {/* Stage Header Overlay */}
        <div style={{ position: 'absolute', top: '2rem', left: '2rem', zIndex: 10, display: 'flex', gap: '1rem', alignItems: 'center' }}>
          {STAGES.map((s, idx) => (
            <div key={s.day} style={{ 
              padding: '0.75rem 1.5rem', 
              background: stage === idx ? 'var(--zx-primary)' : 'rgba(0,0,0,0.5)', 
              color: stage === idx ? '#000' : '#FFF',
              border: '1px solid',
              borderColor: stage === idx ? 'transparent' : 'rgba(255,255,255,0.1)',
              borderRadius: '2rem', 
              fontWeight: 800,
              backdropFilter: 'blur(10px)',
              transition: 'all 0.5s ease',
              transform: stage === idx ? 'scale(1.05)' : 'scale(1)',
              boxShadow: stage === idx ? '0 0 20px rgba(33,241,168,0.3)' : 'none'
            }}>
              {s.day}
            </div>
          ))}
        </div>

        {/* MONDAY: Blank Next.js App */}
        <div style={{
          position: 'absolute', inset: 0,
          background: '#FFF', color: '#000',
          padding: '8rem 4rem 4rem',
          fontFamily: 'system-ui, sans-serif',
          opacity: stage === 0 ? 1 : 0,
          visibility: stage === 0 ? 'visible' : 'hidden',
          transition: 'opacity 0.8s ease, visibility 0.8s',
          zIndex: 1
        }}>
          <h1 style={{ fontSize: '3rem', fontWeight: 800, letterSpacing: '-0.02em' }}>Welcome to Next.js!</h1>
          <p style={{ marginTop: '1rem', color: '#666', fontSize: '1.25rem' }}>Get started by editing <code style={{ background: '#F5F5F5', padding: '0.25rem 0.5rem', borderRadius: '0.25rem' }}>app/page.tsx</code></p>
          
          <div style={{ marginTop: '6rem', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
            <div style={{ border: '1px solid #EAEAEA', padding: '2.5rem', borderRadius: '0.5rem', transition: 'border-color 0.2s ease', cursor: 'pointer' }}>
              <h2 style={{ fontSize: '1.5rem', fontWeight: 600, marginBottom: '1rem' }}>Documentation &rarr;</h2>
              <p style={{ color: '#666', lineHeight: 1.5 }}>Find in-depth information about Next.js features and API.</p>
            </div>
          </div>
        </div>

        {/* TUESDAY: ZenixUI Production Website */}
        <div style={{
          position: 'absolute', inset: 0,
          background: '#09090B',
          opacity: stage === 1 ? 1 : 0,
          visibility: stage === 1 ? 'visible' : 'hidden',
          transition: 'opacity 0.8s ease, visibility 0.8s',
          zIndex: 2,
          overflow: 'hidden'
        }}>
          <div style={{ 
            position: 'absolute', inset: 0, 
            transform: 'scale(0.85)', transformOrigin: 'top center',
            width: '117%', height: '117%',
            pointerEvents: 'none'
          }}>
            {ActiveBlueprintComponent ? <ActiveBlueprintComponent /> : null}
          </div>
        </div>

        {/* FRIDAY: Scale (Dashboard / Stripe mock) */}
        <div style={{
          position: 'absolute', inset: 0,
          background: '#000',
          opacity: stage === 2 ? 1 : 0,
          visibility: stage === 2 ? 'visible' : 'hidden',
          transition: 'opacity 0.8s ease, visibility 0.8s',
          zIndex: 3,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          flexDirection: 'column'
        }}>
          {/* Abstract success UI */}
          <div style={{ width: '80%', maxWidth: '800px', background: '#111', borderRadius: '1.5rem', border: '1px solid rgba(255,255,255,0.05)', padding: '4rem', textAlign: 'center', boxShadow: '0 0 100px rgba(33,241,168,0.1)' }}>
            <div style={{ fontSize: '1rem', textTransform: 'uppercase', letterSpacing: '0.2em', opacity: 0.5, marginBottom: '1rem', fontWeight: 800 }}>Stripe Dashboard</div>
            <div style={{ fontSize: '5rem', fontWeight: 800, color: 'var(--zx-primary)', textShadow: '0 0 40px rgba(33,241,168,0.3)', marginBottom: '2rem' }}>$12,490.00</div>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem' }}>
              <div>
                <div style={{ fontSize: '2rem', fontWeight: 800 }}>10,492</div>
                <div style={{ opacity: 0.5, fontSize: '0.875rem' }}>Active Users</div>
              </div>
              <div style={{ width: '1px', background: 'rgba(255,255,255,0.1)' }} />
              <div>
                <div style={{ fontSize: '2rem', fontWeight: 800, color: 'var(--zx-primary)' }}>+342%</div>
                <div style={{ opacity: 0.5, fontSize: '0.875rem' }}>Growth</div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
