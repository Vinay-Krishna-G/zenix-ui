'use client';

import { useState } from 'react';
import { Surface, Features } from '@zenixui/components';

export function ZenixContact() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success'>('idle');
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setError('');
    
    // Simulate network
    setTimeout(() => {
      setStatus('success');
    }, 1000);
  };

  return (
    <Features.Root padded>
      <Features.Content spacing="xl" align="center" style={{ maxWidth: '600px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
          <h2 style={{ fontSize: '2.5rem', fontWeight: 700, margin: '0 0 1rem', letterSpacing: '-0.03em' }}>Contact Sales</h2>
          <p style={{ opacity: 0.6, fontSize: '1.25rem', margin: 0 }}>We'll get back to you within 24 hours.</p>
        </div>

        <Surface variant="card" style={{ padding: '3rem', borderRadius: 'var(--zx-radius-lg)', background: 'var(--zx-surface)', border: '1px solid var(--zx-elevated)', boxShadow: 'var(--zx-shadow-lg)' }}>
          {status === 'success' ? (
            <div style={{ textAlign: 'center', padding: '2rem 0' }}>
              <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>✓</div>
              <h3 style={{ fontSize: '1.5rem', fontWeight: 600, margin: '0 0 0.5rem' }}>Message Sent</h3>
              <p style={{ opacity: 0.6 }}>Thank you for reaching out. We will be in touch shortly.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  <label style={{ fontSize: '0.875rem', fontWeight: 600 }}>First Name</label>
                  <input required style={inputStyle} type="text" placeholder="Jane" />
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  <label style={{ fontSize: '0.875rem', fontWeight: 600 }}>Last Name</label>
                  <input required style={inputStyle} type="text" placeholder="Doe" />
                </div>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                <label style={{ fontSize: '0.875rem', fontWeight: 600 }}>Email Address</label>
                <input required style={inputStyle} type="email" placeholder="jane@company.com" />
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                <label style={{ fontSize: '0.875rem', fontWeight: 600 }}>Message</label>
                <textarea required style={{ ...inputStyle, minHeight: '120px', resize: 'vertical' }} placeholder="How can we help you?" />
              </div>

              {error && <div style={{ color: 'red', fontSize: '0.875rem', fontWeight: 500 }}>{error}</div>}

              <button 
                type="submit" 
                disabled={status === 'loading'}
                style={{
                  padding: '1rem',
                  background: 'var(--zx-primary)',
                  color: 'var(--zx-background)',
                  border: 'none',
                  borderRadius: 'var(--zx-radius-sm)',
                  fontWeight: 600,
                  fontSize: '1rem',
                  cursor: status === 'loading' ? 'wait' : 'pointer',
                  opacity: status === 'loading' ? 0.7 : 1,
                  marginTop: '1rem',
                  transition: 'opacity 0.2s'
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
  padding: '0.75rem 1rem',
  borderRadius: 'var(--zx-radius-sm)',
  border: '1px solid var(--zx-elevated)',
  background: 'var(--zx-background)',
  color: 'var(--zx-primary)',
  fontSize: '1rem',
  fontFamily: 'inherit',
  outline: 'none',
  transition: 'border-color 0.2s'
};
