'use client';

import React, { useState, useEffect } from 'react';

const STEPS = [
  { label: 'Choose Experience', value: 'Student Portfolio' },
  { label: 'Choose Style', value: 'Glass' },
  { label: 'Choose Brand', value: 'Tiffany' },
  { label: 'Launch', value: '🚀' }
];

export function LaunchFlowDemo() {
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % STEPS.length);
    }, 2000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section style={{ marginBottom: '8rem', paddingTop: '4rem' }}>
      <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
        <h2 style={{ fontSize: '2.5rem', fontWeight: 800, marginBottom: '1rem', letterSpacing: '-0.02em' }}>How it works</h2>
        <p style={{ fontSize: '1.25rem', opacity: 0.7, maxWidth: '600px', margin: '0 auto' }}>
          No more copy-pasting components. Just decide what you want.
        </p>
      </div>

      <div style={{
        maxWidth: '800px',
        margin: '0 auto',
        background: '#111',
        border: '1px solid rgba(255,255,255,0.1)',
        borderRadius: '1.5rem',
        padding: '4rem 2rem',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '2rem'
      }}>
        {STEPS.map((step, idx) => (
          <div key={step.label} style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            opacity: idx <= activeStep ? 1 : 0.2,
            transform: idx <= activeStep ? 'translateY(0)' : 'translateY(20px)',
            transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)'
          }}>
            <div style={{ fontSize: '0.875rem', textTransform: 'uppercase', letterSpacing: '0.1em', opacity: 0.5, marginBottom: '0.5rem' }}>
              {step.label}
            </div>
            <div style={{ 
              fontSize: '2rem', 
              fontWeight: 800, 
              color: idx === activeStep ? 'var(--zx-primary)' : '#FFF' 
            }}>
              {step.value}
            </div>
            {idx < STEPS.length - 1 && (
              <div style={{ 
                height: '40px', 
                width: '2px', 
                background: idx < activeStep ? 'var(--zx-primary)' : 'rgba(255,255,255,0.1)', 
                marginTop: '1rem' 
              }} />
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
