'use client';

import { useState } from 'react';
import { Surface, Features } from '@zenixui/components';

export function NightCityContact() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success'>('idle');
  const [error, setError] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.includes('@')) {
      setError('[ERR_INVALID_SYS_ADDR]');
      return;
    }
    setStatus('loading');
    setError('');
    setTimeout(() => setStatus('success'), 800);
  };

  return (
    <Features.Root padded>
      <Features.Content spacing="xl" align="flex-start" style={{ maxWidth: '800px', margin: '0 auto', fontFamily: 'var(--zx-font-mono)' }}>
        <div style={{ marginBottom: '2rem', borderBottom: '1px solid var(--zx-primary)', paddingBottom: '1rem', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
          <h2 style={{ fontSize: '2rem', fontWeight: 600, margin: 0, textTransform: 'uppercase' }}>SYS.CONTACT_PROTO</h2>
          <span style={{ opacity: 0.5, fontSize: '0.875rem' }}>STATUS: ONLINE</span>
        </div>

        <Surface variant="card" style={{ padding: '2rem', borderRadius: 0, background: 'transparent', border: '1px solid var(--zx-elevated)', position: 'relative' }}>
          {/* Cyberpunk corner accents */}
          <div style={{ position: 'absolute', top: -1, left: -1, width: '10px', height: '10px', borderTop: '2px solid var(--zx-primary)', borderLeft: '2px solid var(--zx-primary)' }} />
          <div style={{ position: 'absolute', bottom: -1, right: -1, width: '10px', height: '10px', borderBottom: '2px solid var(--zx-primary)', borderRight: '2px solid var(--zx-primary)' }} />

          {status === 'success' ? (
            <div style={{ padding: '2rem', borderLeft: '2px solid #00ff00' }}>
              <div style={{ fontSize: '1.25rem', marginBottom: '1rem', color: '#00ff00' }}>[PACKET_DELIVERED]</div>
              <p style={{ opacity: 0.7, margin: 0 }}>Transmission successful. Awaiting operator response.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                <label style={{ fontSize: '0.875rem', fontWeight: 600, textTransform: 'uppercase', opacity: 0.7 }}>{'>'} IDENTIFIER</label>
                <input required style={inputStyle} type="text" placeholder="HANDLE" />
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                <label style={{ fontSize: '0.875rem', fontWeight: 600, textTransform: 'uppercase', opacity: 0.7 }}>{'>'} ROUTING_ADDR</label>
                <input 
                  required 
                  style={{...inputStyle, borderColor: error ? '#ff003c' : 'var(--zx-elevated)'}} 
                  type="email" 
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  placeholder="USER@NODE.NET" 
                />
                {error && <div style={{ color: '#ff003c', fontSize: '0.875rem', marginTop: '0.25rem' }}>{error}</div>}
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                <label style={{ fontSize: '0.875rem', fontWeight: 600, textTransform: 'uppercase', opacity: 0.7 }}>{'>'} PAYLOAD</label>
                <textarea required style={{ ...inputStyle, minHeight: '120px', resize: 'vertical' }} placeholder="ENTER SECURE TRANSMISSION..." />
              </div>

              <button 
                type="submit" 
                disabled={status === 'loading'}
                style={{
                  padding: '1rem',
                  background: status === 'loading' ? 'transparent' : 'var(--zx-primary)',
                  color: status === 'loading' ? 'var(--zx-primary)' : 'var(--zx-background)',
                  border: '1px solid var(--zx-primary)',
                  borderRadius: 0,
                  fontWeight: 600,
                  fontSize: '1rem',
                  cursor: status === 'loading' ? 'wait' : 'pointer',
                  textTransform: 'uppercase',
                  marginTop: '1rem',
                  fontFamily: 'inherit'
                }}
              >
                {status === 'loading' ? '[ENCRYPTING...]' : '[EXECUTE_SEND]'}
              </button>
            </form>
          )}
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
  fontSize: '1rem',
  fontFamily: 'inherit',
  outline: 'none',
  transition: 'border-color 0.2s',
  textTransform: 'uppercase'
};
