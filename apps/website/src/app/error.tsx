'use client';

import { useEffect } from 'react';

export default function ErrorBoundary({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // We would normally log this to an error tracking service like Sentry here
    console.error('ZenixUI Runtime Error:', error);
  }, [error]);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '80vh', textAlign: 'center', padding: '2rem' }}>
      <div style={{ width: '4rem', height: '4rem', borderRadius: '50%', background: 'rgba(255, 50, 50, 0.1)', color: '#ff4444', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '2rem', marginBottom: '2rem' }}>
        !
      </div>
      <h2 style={{ fontSize: '2rem', fontWeight: 600, margin: '0 0 1rem', letterSpacing: '-0.02em' }}>
        System Failure
      </h2>
      <p style={{ fontSize: '1.125rem', opacity: 0.7, maxWidth: '500px', margin: '0 auto 3rem', lineHeight: 1.6 }}>
        An unexpected error occurred while rendering this experience.
      </p>
      <div style={{ display: 'flex', gap: '1rem' }}>
        <button
          onClick={() => reset()}
          style={{ padding: '0.75rem 1.5rem', background: 'var(--zx-primary)', color: 'var(--zx-background)', border: 'none', cursor: 'pointer', borderRadius: 'var(--zx-radius-surface)', fontWeight: 600 }}
        >
          Attempt Recovery
        </button>
      </div>
    </div>
  );
}
