'use client';

import React, { useState, useEffect } from 'react';

const STEPS = [
  { label: 'Select Outcome', value: 'ATLAS Portfolio' },
  { label: 'Choose Aesthetic', value: 'Glass' },
  { label: 'Inject Brand', value: 'Tiffany' },
  { label: 'Launch', value: '🚀 Deploy Ready' }
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
    <section style={{ marginBottom: '10rem', paddingTop: '6rem' }}>
      <div style={{ textAlign: 'center', marginBottom: '6rem' }}>
        <h2 style={{ fontSize: '3.5rem', fontWeight: 800, marginBottom: '1.5rem', letterSpacing: '-0.04em' }}>
          No assembly required.
        </h2>
        <p style={{ fontSize: '1.5rem', opacity: 0.6, maxWidth: '600px', margin: '0 auto', lineHeight: 1.5 }}>
          Just decide what you want. ZenixUI handles the rest.
        </p>
      </div>

      <div style={{
        maxWidth: '800px',
        margin: '0 auto',
        background: 'var(--zx-surface)',
        border: '1px solid rgba(255,255,255,0.05)',
        borderRadius: '1.5rem',
        padding: '5rem 3rem',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '2.5rem',
        boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)'
      }}>
        {STEPS.map((step, idx) => (
          <div key={step.label} style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            opacity: idx <= activeStep ? 1 : 0.2,
            transform: idx <= activeStep ? 'translateY(0) scale(1.05)' : 'translateY(20px) scale(1)',
            transition: 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)'
          }}>
            <div style={{ fontSize: '0.875rem', textTransform: 'uppercase', letterSpacing: '0.15em', opacity: 0.5, marginBottom: '0.75rem', fontWeight: 700 }}>
              {step.label}
            </div>
            <div style={{ 
              fontSize: '2.5rem', 
              fontWeight: 800, 
              color: idx === activeStep ? 'var(--zx-primary)' : 'var(--zx-text)',
              textShadow: idx === activeStep ? '0 0 20px rgba(33,241,168,0.3)' : 'none',
              transition: 'all 0.6s ease'
            }}>
              {step.value}
            </div>
            {idx < STEPS.length - 1 && (
              <div style={{ 
                height: '50px', 
                width: '2px', 
                background: idx < activeStep ? 'var(--zx-primary)' : 'rgba(255,255,255,0.05)', 
                marginTop: '1.5rem',
                transition: 'background 0.6s ease'
              }} />
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
