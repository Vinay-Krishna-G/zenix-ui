'use client';

import { useState } from 'react';
import { Surface, Features } from '@zenixui/components';

export function OceanContact() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success'>('idle');
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setTimeout(() => setStatus('success'), 1500);
  };

  return (
    <Features.Root padded>
      <Features.Content spacing="xl" align="center" style={{ maxWidth: '700px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <h2 style={{ fontSize: '3rem', fontWeight: 300, margin: '0 0 1rem', letterSpacing: '-0.02em' }}>Let's connect</h2>
          <p style={{ opacity: 0.7, fontSize: '1.25rem', margin: 0, fontWeight: 300 }}>Reach out to our deep sea explorers.</p>
        </div>

        <Surface variant="glass" style={{ padding: '4rem', borderRadius: 'var(--zx-radius-lg)', background: 'var(--zx-glass-bg)', backdropFilter: 'var(--zx-glass-blur)', border: '1px solid var(--zx-glass-border)', boxShadow: 'var(--zx-glass-shadow)' }}>
          {status === 'success' ? (
            <div style={{ textAlign: 'center', padding: '3rem 0', animation: 'fadeIn 0.5s ease-out' }}>
              <div style={{ fontSize: '4rem', marginBottom: '1.5rem', opacity: 0.8 }}>🌊</div>
              <h3 style={{ fontSize: '1.75rem', fontWeight: 400, margin: '0 0 1rem' }}>Message received.</h3>
              <p style={{ opacity: 0.7, fontWeight: 300 }}>Our team will navigate back to you shortly.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
              <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap' }}>
                <div style={{ flex: '1 1 200px', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                  <label style={{ fontSize: '0.875rem', fontWeight: 500, opacity: 0.8, paddingLeft: '1rem' }}>Name</label>
                  <input required style={inputStyle} type="text" placeholder="Your name" />
                </div>
                <div style={{ flex: '1 1 200px', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                  <label style={{ fontSize: '0.875rem', fontWeight: 500, opacity: 0.8, paddingLeft: '1rem' }}>Email</label>
                  <input required style={inputStyle} type="email" placeholder="your@email.com" />
                </div>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                <label style={{ fontSize: '0.875rem', fontWeight: 500, opacity: 0.8, paddingLeft: '1rem' }}>Message</label>
                <textarea required style={{ ...inputStyle, minHeight: '150px', resize: 'vertical' }} placeholder="What's on your mind?" />
              </div>

              <button 
                type="submit" 
                disabled={status === 'loading'}
                style={{
                  padding: '1.25rem',
                  background: 'rgba(255, 255, 255, 0.1)',
                  color: 'var(--zx-primary)',
                  border: '1px solid var(--zx-glass-border)',
                  borderRadius: 'var(--zx-radius-round)',
                  fontWeight: 400,
                  fontSize: '1.1rem',
                  cursor: status === 'loading' ? 'wait' : 'pointer',
                  opacity: status === 'loading' ? 0.5 : 1,
                  marginTop: '1rem',
                  transition: 'all 0.3s ease',
                  backdropFilter: 'var(--zx-glass-blur)'
                }}
              >
                {status === 'loading' ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          )}
        </Surface>
      </Features.Content>
    </Features.Root>
  );
}

const inputStyle: React.CSSProperties = {
  padding: '1rem 1.5rem',
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
