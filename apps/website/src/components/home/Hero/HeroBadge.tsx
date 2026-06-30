import React from 'react';

export function HeroBadge() {
  return (
    <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', padding: '0.5rem 1rem', background: 'var(--zx-elevated)', borderRadius: 'var(--zx-radius-round, 9999px)', fontSize: '0.875rem', fontWeight: 600, marginBottom: '2rem', border: '1px solid var(--zx-border)' }}>
      <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'var(--zx-primary)', display: 'inline-block' }} />
      Theme Engine · Experience Library · Blueprint Registry · CLI
    </div>
  );
}
