'use client';

import { useState } from 'react';
import { Surface, Features, Input, Button } from '@zenixui/components';

export function AutumnAuth() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setTimeout(() => setStatus('success'), 1200);
  };

  return (
    <Features.Root padded>
      <Features.Content align="center" style={{ maxWidth: '450px', margin: '0 auto' }}>
        <Surface variant="card" style={{ padding: '4rem 3rem', background: 'var(--zx-surface)', border: '1px solid var(--zx-elevated)', borderRadius: 'var(--zx-radius-card)' }}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <h2 style={{ fontSize: '2.5rem', fontFamily: 'Georgia, serif', fontStyle: 'italic', margin: '0 0 1rem', color: 'var(--zx-primary)' }}>
              Sign In
            </h2>
            <p style={{ opacity: 0.7, margin: 0, fontSize: '1rem', lineHeight: 1.6 }}>
              Continue your story with us.
            </p>
          </div>

          {status === 'success' ? (
            <div style={{ padding: '2rem', textAlign: 'center' }}>
              <p style={{ margin: 0, fontFamily: 'Georgia, serif', fontStyle: 'italic', fontSize: '1.25rem' }}>
                Welcome back.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
              <div style={{ position: 'relative' }}>
                <Input 
                  type="email" 
                  variant="organic"
                  placeholder=" " 
                  required
                  className="autumn-auth-input"
                  id="autumn-auth-email"
                />
                <label htmlFor="autumn-auth-email" style={labelStyle}>Email address</label>
              </div>

              <div style={{ position: 'relative' }}>
                <Input 
                  type="password" 
                  variant="organic"
                  placeholder=" " 
                  required
                  className="autumn-auth-input"
                  id="autumn-auth-password"
                />
                <label htmlFor="autumn-auth-password" style={labelStyle}>Password</label>
              </div>

              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <input type="checkbox" id="autumn-remember" style={{ cursor: 'pointer', accentColor: 'var(--zx-primary)' }} />
                  <label htmlFor="autumn-remember" style={{ fontSize: '0.9rem', cursor: 'pointer', opacity: 0.7 }}>Remember me</label>
                </div>
                <a href="#" style={{ fontSize: '0.9rem', color: 'var(--zx-primary)', textDecoration: 'none', borderBottom: '1px solid var(--zx-elevated)' }}>Forgot?</a>
              </div>

              <Button 
                type="submit"
                variant="organic"
                fullWidth
                isLoading={status === 'loading'}
                style={{
                  marginTop: '1rem',
                  padding: '1rem',
                  background: 'var(--zx-primary)',
                  color: 'var(--zx-background)',
                  border: 'none'
                }}
              >
                Sign in
              </Button>

              <Button 
                type="button"
                variant="organic"
                fullWidth
                style={{
                  padding: '1rem',
                  background: 'transparent',
                  border: '1px solid var(--zx-elevated)'
                }}
              >
                Sign in with Google
              </Button>
            </form>
          )}

          <p style={{ textAlign: 'center', marginTop: '3rem', fontSize: '0.9rem', opacity: 0.7 }}>
            Don't have an account? <a href="#" style={{ color: 'var(--zx-primary)', textDecoration: 'none', fontStyle: 'italic', fontFamily: 'Georgia, serif' }}>Sign up</a>
          </p>
        </Surface>

        {/* CSS snippet for floating labels */}
        <style dangerouslySetInnerHTML={{__html: `
          .autumn-auth-input:focus + label,
          .autumn-auth-input:not(:placeholder-shown) + label {
            transform: translateY(-20px) scale(0.85);
            opacity: 0.5;
          }
        `}} />
      </Features.Content>
    </Features.Root>
  );
}
const labelStyle: React.CSSProperties = {
  position: 'absolute',
  top: '0.5rem',
  left: 0,
  fontSize: '1.1rem',
  opacity: 0.5,
  transition: 'all 0.3s ease',
  pointerEvents: 'none',
  zIndex: 1,
  transformOrigin: 'left top'
};
