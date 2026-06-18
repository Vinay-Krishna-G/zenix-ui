'use client';

import { useState } from 'react';
import { Surface, Features } from '@zenixui/components';

export function OceanNewsletter() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setTimeout(() => setStatus('success'), 1500);
  };

  return (
    <Features.Root padded>
      <Features.Content align="center" style={{ maxWidth: '800px', margin: '0 auto' }}>
        <Surface variant="glass" style={{ padding: '4rem 2rem', borderRadius: 'var(--zx-radius-lg)', textAlign: 'center' }}>
          <h2 style={{ fontSize: '2.5rem', fontWeight: 300, margin: '0 0 1rem', letterSpacing: '-0.02em' }}>
            Dive into our weekly digest.
          </h2>
          <p style={{ opacity: 0.7, margin: '0 auto 3rem', fontSize: '1.125rem', fontWeight: 300, maxWidth: '400px' }}>
            Curated inspiration flowing directly to your inbox every Sunday.
          </p>

          <div style={{ position: 'relative', maxWidth: '450px', margin: '0 auto' }}>
            {status === 'success' ? (
              <div style={{ padding: '1rem', background: 'rgba(255,255,255,0.05)', borderRadius: 'var(--zx-radius-round)', color: 'var(--zx-primary)', fontWeight: 300, fontSize: '1rem', border: '1px solid var(--zx-glass-border)', animation: 'fadeIn 0.5s ease-out' }}>
                You are now riding the wave.
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ position: 'relative', display: 'flex', width: '100%' }}>
                <input 
                  type="email" 
                  placeholder="Your email address" 
                  required
                  style={{
                    width: '100%',
                    padding: '1rem 1.5rem',
                    paddingRight: '140px',
                    borderRadius: 'var(--zx-radius-round)',
                    border: '1px solid var(--zx-glass-border)',
                    background: 'rgba(255, 255, 255, 0.05)',
                    color: 'var(--zx-primary)',
                    fontSize: '1rem',
                    fontWeight: 300,
                    outline: 'none',
                    backdropFilter: 'var(--zx-glass-blur)',
                    boxShadow: 'inset 0 2px 10px rgba(0,0,0,0.02)'
                  }} 
                />
                <button 
                  type="submit"
                  disabled={status === 'loading'}
                  style={{
                    position: 'absolute',
                    right: '4px',
                    top: '4px',
                    bottom: '4px',
                    padding: '0 1.5rem',
                    borderRadius: 'var(--zx-radius-round)',
                    background: 'rgba(255, 255, 255, 0.15)',
                    color: 'var(--zx-primary)',
                    border: 'none',
                    fontWeight: 400,
                    fontSize: '0.875rem',
                    cursor: status === 'loading' ? 'wait' : 'pointer',
                    opacity: status === 'loading' ? 0.7 : 1,
                    transition: 'all 0.3s ease',
                  }}
                >
                  {status === 'loading' ? 'Submerging...' : 'Subscribe'}
                </button>
              </form>
            )}
          </div>
        </Surface>
      </Features.Content>
    </Features.Root>
  );
}
