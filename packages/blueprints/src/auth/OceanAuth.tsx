'use client';

import { useState } from 'react';
import { Surface, Features } from '@zenixui/components';

export function OceanAuth() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setTimeout(() => setStatus('success'), 1500);
  };

  return (
    <Features.Root padded>
      <Features.Content align="center" style={{ maxWidth: '420px', margin: '0 auto' }}>
        <Surface variant="glass" style={{ padding: '3.5rem', borderRadius: 'var(--zx-radius-lg)', background: 'var(--zx-glass-bg)', backdropFilter: 'var(--zx-glass-blur)', border: '1px solid var(--zx-glass-border)' }}>
          <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
            <div style={{ width: '48px', height: '48px', background: 'var(--zx-primary)', borderRadius: '50%', margin: '0 auto 1.5rem', opacity: 0.1 }} />
            <h2 style={{ fontSize: '2rem', fontWeight: 300, margin: '0 0 0.5rem', letterSpacing: '-0.02em' }}>
              Welcome back
            </h2>
            <p style={{ opacity: 0.7, margin: 0, fontSize: '1rem', fontWeight: 300 }}>
              Log in to continue your journey
            </p>
          </div>

          {status === 'success' ? (
            <div style={{ padding: '2rem', textAlign: 'center', animation: 'fadeIn 0.5s ease-out' }}>
              <p style={{ fontSize: '1.25rem', fontWeight: 300 }}>Authenticating...</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                <input 
                  type="email" 
                  placeholder="Email address" 
                  required
                  style={inputStyle} 
                />
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                <input 
                  type="password" 
                  placeholder="Password" 
                  required
                  style={inputStyle} 
                />
              </div>

              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '0.5rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <input type="checkbox" id="ocean-remember" style={{ cursor: 'pointer', opacity: 0.5 }} />
                  <label htmlFor="ocean-remember" style={{ fontSize: '0.875rem', fontWeight: 300, cursor: 'pointer', opacity: 0.8 }}>Remember me</label>
                </div>
                <a href="#" style={{ fontSize: '0.875rem', fontWeight: 400, color: 'var(--zx-primary)', textDecoration: 'none' }}>Recovery</a>
              </div>

              <button 
                type="submit"
                disabled={status === 'loading'}
                style={{
                  padding: '1.25rem',
                  borderRadius: 'var(--zx-radius-round)',
                  background: 'rgba(255, 255, 255, 0.15)',
                  color: 'var(--zx-primary)',
                  border: '1px solid var(--zx-glass-border)',
                  fontWeight: 400,
                  fontSize: '1rem',
                  cursor: status === 'loading' ? 'wait' : 'pointer',
                  opacity: status === 'loading' ? 0.7 : 1,
                  marginTop: '1rem',
                  transition: 'all 0.3s ease',
                  backdropFilter: 'var(--zx-glass-blur)'
                }}
              >
                {status === 'loading' ? 'Logging in...' : 'Log in'}
              </button>
            </form>
          )}

          <p style={{ textAlign: 'center', marginTop: '3rem', fontSize: '0.875rem', fontWeight: 300, opacity: 0.7 }}>
            New here? <a href="#" style={{ fontWeight: 500, color: 'var(--zx-primary)', textDecoration: 'none', borderBottom: '1px solid currentColor' }}>Create an account</a>
          </p>
        </Surface>
      </Features.Content>
    </Features.Root>
  );
}

const inputStyle: React.CSSProperties = {
  padding: '1rem 1.25rem',
  borderRadius: 'var(--zx-radius-round)',
  border: '1px solid var(--zx-glass-border)',
  background: 'rgba(255, 255, 255, 0.05)',
  color: 'var(--zx-primary)',
  fontSize: '1rem',
  fontWeight: 300,
  fontFamily: 'inherit',
  outline: 'none',
  transition: 'all 0.3s ease',
  boxShadow: 'inset 0 2px 10px rgba(0,0,0,0.02)'
};
