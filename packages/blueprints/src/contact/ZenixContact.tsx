'use client';

import { useState } from 'react';
import { Surface, Features, Input, Button, Textarea } from '@zenixui/components';

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
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  <label style={{ fontSize: '0.875rem', fontWeight: 500 }}>First Name</label>
                  <Input required variant="default" placeholder="Jane" />
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  <label style={{ fontSize: '0.875rem', fontWeight: 500 }}>Last Name</label>
                  <Input required variant="default" placeholder="Doe" />
                </div>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                <label style={{ fontSize: '0.875rem', fontWeight: 500 }}>Email Address</label>
                <Input required variant="default" type="email" placeholder="jane@company.com" />
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                <label style={{ fontSize: '0.875rem', fontWeight: 500 }}>Message</label>
                <Textarea required variant="default" placeholder="How can we help you?" rows={4} />
              </div>

              {error && <div style={{ color: 'red', fontSize: '0.875rem', fontWeight: 500 }}>{error}</div>}

              <Button 
                type="submit" 
                variant="default"
                isLoading={status === 'loading'}
                style={{ marginTop: '1rem' }}
              >
                Send Message
              </Button>
            </form>
          )}
        </Surface>
      </Features.Content>
    </Features.Root>
  );
}

