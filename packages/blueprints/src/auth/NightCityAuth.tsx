'use client';

import { useState } from 'react';
import { Surface, Features } from '@zenixui/components';

export function NightCityAuth() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setTimeout(() => setStatus('success'), 800);
  };

  return (
    <Features.Root padded>
      <Features.Content align="center" style={{ maxWidth: '400px', margin: '0 auto', fontFamily: 'var(--zx-font-mono)' }}>
        <Surface variant="card" style={{ padding: '2rem', borderRadius: 0, border: '1px solid var(--zx-elevated)', position: 'relative', background: 'transparent' }}>
          {/* Cyberpunk corner accents */}
          <div style={{ position: 'absolute', top: -1, left: -1, width: '10px', height: '10px', borderTop: '2px solid var(--zx-primary)', borderLeft: '2px solid var(--zx-primary)' }} />
          <div style={{ position: 'absolute', bottom: -1, right: -1, width: '10px', height: '10px', borderBottom: '2px solid var(--zx-primary)', borderRight: '2px solid var(--zx-primary)' }} />
          
          <div style={{ marginBottom: '2rem', textAlign: 'left', borderBottom: '1px solid var(--zx-elevated)', paddingBottom: '1rem' }}>
            <h2 style={{ fontSize: '1.25rem', fontWeight: 600, margin: '0 0 0.25rem', textTransform: 'uppercase' }}>
              SYS.AUTH_REQ
            </h2>
            <p style={{ opacity: 0.6, margin: 0, fontSize: '0.75rem', textTransform: 'uppercase' }}>
              {'//'} IDENTIFICATION REQUIRED
            </p>
          </div>

          {status === 'success' ? (
            <div style={{ padding: '1rem', borderLeft: '2px solid #00ff00', textAlign: 'left' }}>
              <div style={{ fontSize: '1rem', color: '#00ff00', fontWeight: 600 }}>[ACCESS_GRANTED]</div>
              <p style={{ opacity: 0.7, margin: '0.5rem 0 0', fontSize: '0.875rem' }}>Decryption successful. Welcome back, OPERATIVE.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', textAlign: 'left' }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                <label style={{ fontSize: '0.75rem', fontWeight: 600, textTransform: 'uppercase', opacity: 0.7 }}>{'>'} HANDLE</label>
                <input 
                  type="text" 
                  placeholder="OPERATIVE_ID" 
                  required
                  style={inputStyle} 
                />
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                <label style={{ fontSize: '0.75rem', fontWeight: 600, textTransform: 'uppercase', opacity: 0.7 }}>{'>'} PASSPHRASE</label>
                <input 
                  type="password" 
                  placeholder="********" 
                  required
                  style={inputStyle} 
                />
              </div>

              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '0.5rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <input type="checkbox" id="nc-persist" style={{ cursor: 'pointer', appearance: 'none', width: '16px', height: '16px', border: '1px solid var(--zx-primary)', background: 'transparent' }} />
                  <label htmlFor="nc-persist" style={{ fontSize: '0.75rem', fontWeight: 600, textTransform: 'uppercase', cursor: 'pointer', opacity: 0.8 }}>PERSIST_SESSION</label>
                </div>
                <a href="#" style={{ fontSize: '0.75rem', fontWeight: 600, color: 'var(--zx-primary)', textDecoration: 'underline', textTransform: 'uppercase' }}>RESET_KEY</a>
              </div>

              <button 
                type="submit"
                disabled={status === 'loading'}
                style={{
                  padding: '1rem',
                  borderRadius: 0,
                  background: status === 'loading' ? 'transparent' : 'var(--zx-primary)',
                  color: status === 'loading' ? 'var(--zx-primary)' : 'var(--zx-background)',
                  border: '1px solid var(--zx-primary)',
                  fontWeight: 600,
                  fontSize: '0.875rem',
                  fontFamily: 'inherit',
                  cursor: status === 'loading' ? 'wait' : 'pointer',
                  textTransform: 'uppercase',
                  marginTop: '1rem'
                }}
              >
                {status === 'loading' ? '[DECRYPTING...]' : '[AUTHENTICATE]'}
              </button>
            </form>
          )}

          <div style={{ textAlign: 'center', marginTop: '2rem', fontSize: '0.75rem', textTransform: 'uppercase', opacity: 0.5 }}>
            NO_HANDLE_FOUND? <a href="#" style={{ color: 'var(--zx-primary)', textDecoration: 'underline' }}>INITIALIZE_OPERATIVE</a>
          </div>
        </Surface>
      </Features.Content>
    </Features.Root>
  );
}

const inputStyle: React.CSSProperties = {
  padding: '0.75rem 1rem',
  borderRadius: 0,
  border: '1px solid var(--zx-elevated)',
  background: 'rgba(0,0,0,0.2)',
  color: 'var(--zx-primary)',
  fontSize: '0.875rem',
  fontFamily: 'inherit',
  outline: 'none',
  textTransform: 'uppercase'
};
