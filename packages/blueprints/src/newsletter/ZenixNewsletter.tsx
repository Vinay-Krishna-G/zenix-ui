'use client';

import { useState } from 'react';
import { Surface, Features } from '@zenixui/components';

export function ZenixNewsletter() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success'>('idle');
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setStatus('loading');
    setTimeout(() => setStatus('success'), 1000);
  };

  return (
    <Features.Root padded>
      <Features.Content align="center" style={{ maxWidth: '600px', margin: '0 auto' }}>
        <Surface variant="card" style={{ padding: '3rem', borderRadius: 'var(--zx-radius-lg)', textAlign: 'center', border: '1px solid var(--zx-elevated)', boxShadow: 'var(--zx-shadow-md)' }}>
          <h2 style={{ fontSize: '1.5rem', fontWeight: 600, margin: '0 0 0.5rem', letterSpacing: '-0.02em' }}>
            Join our newsletter
          </h2>
          <p style={{ opacity: 0.6, margin: '0 0 2rem', fontSize: '0.875rem' }}>
            Get weekly updates on our latest products and features. No spam.
          </p>

          {status === 'success' ? (
            <div style={{ padding: '0.75rem', background: 'var(--zx-elevated)', borderRadius: 'var(--zx-radius-sm)', color: 'var(--zx-primary)', fontWeight: 500, fontSize: '0.875rem' }}>
              ✓ You've been subscribed successfully.
            </div>
          ) : (
            <form onSubmit={handleSubmit} style={{ display: 'flex', gap: '0.5rem', justifyContent: 'center' }}>
              <input 
                type="email" 
                placeholder="jane@example.com" 
                required
                value={email}
                onChange={e => setEmail(e.target.value)}
                style={{
                  padding: '0.75rem 1rem',
                  borderRadius: 'var(--zx-radius-sm)',
                  border: '1px solid var(--zx-elevated)',
                  background: 'var(--zx-background)',
                  color: 'var(--zx-primary)',
                  fontSize: '0.875rem',
                  flex: 1,
                  maxWidth: '300px',
                  outline: 'none'
                }} 
              />
              <button 
                type="submit"
                disabled={status === 'loading'}
                style={{
                  padding: '0.75rem 1.5rem',
                  borderRadius: 'var(--zx-radius-sm)',
                  background: 'var(--zx-primary)',
                  color: 'var(--zx-background)',
                  border: 'none',
                  fontWeight: 600,
                  fontSize: '0.875rem',
                  cursor: status === 'loading' ? 'wait' : 'pointer',
                  opacity: status === 'loading' ? 0.8 : 1,
                  transition: 'opacity 0.2s'
                }}
              >
                {status === 'loading' ? 'Subscribing...' : 'Subscribe'}
              </button>
            </form>
          )}
        </Surface>
      </Features.Content>
    </Features.Root>
  );
}
