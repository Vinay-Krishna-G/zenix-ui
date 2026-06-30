'use client';

import { useState } from 'react';
import { Surface, Features, Input, Button, Textarea } from '@zenixui/components';

export function OceanContact() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success'>('idle');


  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setTimeout(() => setStatus('success'), 1500);
  };

  return (
    <Features.Root padded>
      <Features.Content gap="xl" align="center" style={{ maxWidth: '700px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <h2 style={{ fontSize: '3rem', fontWeight: 300, margin: '0 0 1rem', letterSpacing: '-0.02em' }}>Let's connect</h2>
          <p style={{ opacity: 0.7, fontSize: '1.25rem', margin: 0, fontWeight: 300 }}>Reach out to our deep sea explorers.</p>
        </div>

        <Surface variant="glass" style={{ padding: '4rem', borderRadius: 'var(--zx-radius-overlay)', background: 'var(--zx-glass-bg)', backdropFilter: 'var(--zx-glass-blur)', border: '1px solid var(--zx-glass-border)', boxShadow: 'var(--zx-glass-shadow)' }}>
          {status === 'success' ? (
            <div style={{ textAlign: 'center', padding: '3rem 0', animation: 'fadeIn 0.5s ease-out' }}>
              <div style={{ fontSize: '4rem', marginBottom: '1.5rem', opacity: 0.8 }}>🌊</div>
              <h3 style={{ fontSize: '1.75rem', fontWeight: 400, margin: '0 0 1rem' }}>Message received.</h3>
              <p style={{ opacity: 0.7, fontWeight: 300 }}>Our team will navigate back to you shortly.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
                <Input variant="glass" placeholder="First Name" />
                <Input variant="glass" placeholder="Last Name" />
              </div>
              <Input variant="glass" type="email" placeholder="Work Email" />
              <Input variant="glass" placeholder="Company Name" />
              <Textarea variant="glass" placeholder="How can we help you?" rows={4} />
              <Button variant="glass" fullWidth size="lg" style={{ marginTop: '1rem', fontWeight: 500, letterSpacing: '0.05em', color: '#fff' }}>
                {status === 'loading' ? 'Sending...' : 'Send Message'}
              </Button>
            </form>
          )}
        </Surface>
      </Features.Content>
    </Features.Root>
  );
}
