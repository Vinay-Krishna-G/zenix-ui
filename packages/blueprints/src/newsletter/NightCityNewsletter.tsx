'use client';

import { useState } from 'react';
import { Surface, Features } from '@zenixui/components';

export function NightCityNewsletter() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setTimeout(() => setStatus('success'), 800);
  };

  return (
    <Features.Root padded>
      <Features.Content align="center" style={{ maxWidth: '600px', margin: '0 auto', fontFamily: 'var(--zx-font-mono)' }}>
        <Surface variant="card" style={{ padding: '2rem', borderRadius: 0, border: '1px solid var(--zx-elevated)', position: 'relative', background: 'transparent' }}>
          {/* Cyberpunk corner accents */}
          <div style={{ position: 'absolute', top: -1, left: -1, width: '10px', height: '10px', borderTop: '2px solid var(--zx-primary)', borderLeft: '2px solid var(--zx-primary)' }} />
          <div style={{ position: 'absolute', bottom: -1, right: -1, width: '10px', height: '10px', borderBottom: '2px solid var(--zx-primary)', borderRight: '2px solid var(--zx-primary)' }} />
          
          <div style={{ marginBottom: '2rem', textAlign: 'left' }}>
            <h2 style={{ fontSize: '1.25rem', fontWeight: 600, margin: '0 0 0.25rem', textTransform: 'uppercase' }}>
              SYS.NEWS_FEED
            </h2>
            <p style={{ opacity: 0.6, margin: 0, fontSize: '0.875rem' }}>
              {'//'} ESTABLISH SECURE CONNECTION TO WEEKLY DEADDROPS
            </p>
          </div>

          {status === 'success' ? (
            <div style={{ padding: '1rem', borderLeft: '2px solid #00ff00', textAlign: 'left' }}>
              <div style={{ fontSize: '1rem', color: '#00ff00', fontWeight: 600 }}>[CONNECTION_ESTABLISHED]</div>
              <p style={{ opacity: 0.7, margin: '0.5rem 0 0', fontSize: '0.875rem' }}>Awaiting first payload transmission.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem', textAlign: 'left' }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                <label style={{ fontSize: '0.75rem', fontWeight: 600, textTransform: 'uppercase', opacity: 0.7 }}>{'>'} ROUTING_ADDR</label>
                <div style={{ display: 'flex', gap: '0.5rem' }}>
                  <input 
                    type="email" 
                    placeholder="USER@NODE.NET" 
                    required
                    style={{
                      padding: '0.75rem 1rem',
                      borderRadius: 0,
                      border: '1px solid var(--zx-elevated)',
                      background: 'rgba(0,0,0,0.2)',
                      color: 'var(--zx-primary)',
                      fontSize: '0.875rem',
                      fontFamily: 'inherit',
                      flex: 1,
                      outline: 'none',
                      textTransform: 'uppercase'
                    }} 
                  />
                  <button 
                    type="submit"
                    disabled={status === 'loading'}
                    style={{
                      padding: '0.75rem 1.5rem',
                      borderRadius: 0,
                      background: status === 'loading' ? 'transparent' : 'var(--zx-primary)',
                      color: status === 'loading' ? 'var(--zx-primary)' : 'var(--zx-background)',
                      border: '1px solid var(--zx-primary)',
                      fontWeight: 600,
                      fontSize: '0.875rem',
                      fontFamily: 'inherit',
                      cursor: status === 'loading' ? 'wait' : 'pointer',
                      textTransform: 'uppercase'
                    }}
                  >
                    {status === 'loading' ? '[SYNCING...]' : '[LINK]'}
                  </button>
                </div>
              </div>
            </form>
          )}
        </Surface>
      </Features.Content>
    </Features.Root>
  );
}
