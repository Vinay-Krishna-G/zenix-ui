'use client';

import { useState } from 'react';
import { Surface, Features, Input, Button } from '@zenixui/components';

export function ZenixAuth() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success'>('idle');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [remember, setRemember] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !password) return;
    setStatus('loading');
    setTimeout(() => setStatus('success'), 1000);
  };

  return (
    <Features.Root padded>
      <Features.Content align="center" style={{ maxWidth: '400px', margin: '0 auto' }}>
        <Surface variant="card" style={{ padding: '3rem 2.5rem', borderRadius: 'var(--zx-radius-lg)', border: '1px solid var(--zx-elevated)', boxShadow: 'var(--zx-shadow-lg)', background: 'var(--zx-surface)' }}>
          <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
            <h2 style={{ fontSize: '1.75rem', fontWeight: 600, margin: '0 0 0.5rem', letterSpacing: '-0.02em' }}>
              Welcome back
            </h2>
            <p style={{ opacity: 0.6, margin: 0, fontSize: '0.875rem' }}>
              Enter your details to sign in to your account
            </p>
          </div>

          {status === 'success' ? (
            <div style={{ padding: '1rem', background: 'var(--zx-elevated)', borderRadius: 'var(--zx-radius-sm)', color: 'var(--zx-primary)', fontWeight: 500, fontSize: '0.875rem', textAlign: 'center' }}>
              ✓ Authenticated. Redirecting...
            </div>
          ) : (
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                <label style={{ fontSize: '0.875rem', fontWeight: 500 }}>Email</label>
                <Input 
                  type="email" 
                  variant="default"
                  placeholder="name@company.com" 
                  required
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                />
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <label style={{ fontSize: '0.875rem', fontWeight: 500 }}>Password</label>
                  <a href="#" style={{ fontSize: '0.75rem', fontWeight: 500, opacity: 0.6, textDecoration: 'none' }}>Forgot password?</a>
                </div>
                <Input 
                  type="password" 
                  variant="default"
                  placeholder="••••••••" 
                  required
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                />
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginTop: '0.25rem' }}>
                <input 
                  type="checkbox" 
                  id="remember-zenix"
                  checked={remember}
                  onChange={e => setRemember(e.target.checked)}
                  style={{ accentColor: 'var(--zx-primary)', width: '16px', height: '16px', cursor: 'pointer' }}
                />
                <label htmlFor="remember-zenix" style={{ fontSize: '0.875rem', cursor: 'pointer', opacity: 0.8 }}>Remember for 30 days</label>
              </div>

              <Button 
                type="submit"
                variant="default"
                fullWidth
                isLoading={status === 'loading'}
                style={{ marginTop: '0.5rem' }}
              >
                Sign in
              </Button>
            </form>
          )}

          <div style={{ display: 'flex', alignItems: 'center', margin: '1.5rem 0', opacity: 0.3 }}>
            <div style={{ flex: 1, height: '1px', background: 'var(--zx-primary)' }} />
            <div style={{ padding: '0 0.5rem', fontSize: '0.75rem', fontWeight: 600 }}>OR</div>
            <div style={{ flex: 1, height: '1px', background: 'var(--zx-primary)' }} />
          </div>

          <Button 
            type="button"
            variant="default"
            fullWidth
            style={{
              background: 'transparent',
              color: 'var(--zx-primary)',
              border: '1px solid var(--zx-elevated)'
            }}
          >
            Sign in with Google
          </Button>

          <p style={{ textAlign: 'center', marginTop: '2rem', fontSize: '0.875rem', opacity: 0.6 }}>
            Don't have an account? <a href="#" style={{ fontWeight: 600, color: 'var(--zx-primary)', textDecoration: 'none', opacity: 1 }}>Sign up</a>
          </p>
        </Surface>
      </Features.Content>
    </Features.Root>
  );
}
