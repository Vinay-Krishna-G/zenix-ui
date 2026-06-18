'use client';

import { useState } from 'react';
import { Surface, Features, Input, Button } from '@zenixui/components';

export function AutumnNewsletter() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setTimeout(() => setStatus('success'), 1200);
  };

  return (
    <Features.Root padded>
      <Features.Content align="center" style={{ maxWidth: '500px', margin: '0 auto' }}>
        <Surface variant="card" style={{ padding: 0, background: 'transparent', border: 'none', textAlign: 'center' }}>
          <h2 style={{ fontSize: '2rem', fontFamily: 'Georgia, serif', fontStyle: 'italic', margin: '0 0 1rem', color: 'var(--zx-primary)' }}>
            Letters from the journey
          </h2>
          <p style={{ opacity: 0.7, margin: '0 0 3rem', fontSize: '1rem', lineHeight: 1.6 }}>
            Sign up to receive occasional thoughts, stories, and photographs from our travels.
          </p>

          {status === 'success' ? (
            <div style={{ padding: '2rem', borderTop: '1px solid var(--zx-elevated)', borderBottom: '1px solid var(--zx-elevated)' }}>
              <p style={{ margin: 0, fontFamily: 'Georgia, serif', fontStyle: 'italic', fontSize: '1.25rem' }}>
                Thank you. The next letter is yours.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
              <div style={{ position: 'relative' }}>
                <Input 
                  type="email" 
                  variant="organic"
                  placeholder=" " 
                  required
                  className="autumn-newsletter-input"
                  id="autumn-email"
                  style={{ textAlign: 'center' }} 
                />
                <label 
                  htmlFor="autumn-email"
                  style={{
                    position: 'absolute',
                    top: '0.5rem',
                    left: 0,
                    right: 0,
                    fontSize: '1.1rem',
                    opacity: 0.5,
                    transition: 'all 0.3s ease',
                    pointerEvents: 'none',
                    zIndex: 1,
                    textAlign: 'center'
                  }}
                >
                  Your email address
                </label>
              </div>

              <div style={{ margin: '0 auto' }}>
                <Button 
                  type="submit"
                  variant="organic"
                  isLoading={status === 'loading'}
                >
                  Subscribe to letters
                </Button>
              </div>
            </form>
          )}
        </Surface>

        {/* CSS snippet for the floating label effect */}
        <style dangerouslySetInnerHTML={{__html: `
          .autumn-newsletter-input:focus + label,
          .autumn-newsletter-input:not(:placeholder-shown) + label {
            transform: translateY(-25px) scale(0.85);
            opacity: 0.4;
          }
        `}} />
      </Features.Content>
    </Features.Root>
  );
}
