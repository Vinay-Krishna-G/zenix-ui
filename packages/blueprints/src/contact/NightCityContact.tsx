'use client';

import { useState } from 'react';
import { Surface, Features, Input, Button, Textarea } from '@zenixui/components';

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
      <Features.Content gap="xl" align="flex-start" style={{ maxWidth: '800px', margin: '0 auto', fontFamily: 'var(--zx-font-mono)' }}>
        <div style={{ marginBottom: '2rem', borderBottom: '1px solid var(--zx-primary)', paddingBottom: '1rem', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
          <h2 style={{ fontSize: '2rem', fontWeight: 600, margin: 0, textTransform: 'uppercase' }}>SYS.CONTACT_PROTO</h2>
          <span style={{ opacity: 0.5, fontSize: '0.875rem' }}>STATUS: ONLINE</span>
        </div>

        <Surface variant="card" style={{ padding: '2rem', borderRadius: 0, background: 'transparent', border: '1px solid var(--zx-elevated)', position: 'relative' }}>
          {/* Cyberpunk corner accents */}
          <div style={{ position: 'absolute', top: -1, left: -1, width: '10px', height: '10px', borderTop: '2px solid var(--zx-primary)', borderLeft: '2px solid var(--zx-primary)' }} />
          <div style={{ position: 'absolute', bottom: -1, right: -1, width: '10px', height: '10px', borderBottom: '2px solid var(--zx-primary)', borderRight: '2px solid var(--zx-primary)' }} />

          {status === 'success' ? (
            <div style={{ padding: '2rem', borderLeft: '2px solid var(--zx-accent)' }}>
              <div style={{ fontSize: '1.25rem', marginBottom: '1rem', color: 'var(--zx-accent)' }}>[PACKET_DELIVERED]</div>
              <p style={{ opacity: 0.7, margin: 0 }}>Transmission successful. Awaiting operator response.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                <label style={{ fontSize: '0.875rem', fontWeight: 600, textTransform: 'uppercase', opacity: 0.7 }}>{'>'} IDENTIFIER</label>
                <Input required variant="terminal" type="text" placeholder="HANDLE" />
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                <label style={{ fontSize: '0.875rem', fontWeight: 600, textTransform: 'uppercase', opacity: 0.7 }}>{'>'} ROUTING_ADDR</label>
                <Input 
                  required 
                  variant="terminal"
                  status={error ? 'error' : 'idle'}
                  type="email" 
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  placeholder="USER@NODE.NET" 
                />
                {error && <div style={{ color: 'var(--zx-primary)', fontSize: '0.875rem', marginTop: '0.25rem' }}>{error}</div>}
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                <label style={{ fontSize: '0.875rem', fontWeight: 600, textTransform: 'uppercase', opacity: 0.7 }}>{'>'} PAYLOAD</label>
                <Textarea required variant="terminal" placeholder="ENTER SECURE TRANSMISSION..." rows={4} />
              </div>

              <Button 
                type="submit" 
                variant="cyber"
                fullWidth
                isLoading={status === 'loading'}
                style={{ marginTop: '1rem' }}
              >
                EXECUTE_SEND
              </Button>
            </form>
          )}
        </Surface>
      </Features.Content>
    </Features.Root>
  );
}
