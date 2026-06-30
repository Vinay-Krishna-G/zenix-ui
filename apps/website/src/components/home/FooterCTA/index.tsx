import React from 'react';
import Link from 'next/link';
import { Surface, Button, PageSection } from '@zenixui/components';

export function FooterCTA() {
  return (
    <PageSection>
      <Surface variant="card" style={{ padding: '6rem 4rem', textAlign: 'center', border: '1px solid var(--zx-border)', borderRadius: 'var(--zx-radius-overlay, 24px)', background: 'var(--zx-surface)' }}>
        <h2 style={{ fontSize: '3.5rem', fontWeight: 800, margin: '0 0 1.5rem', letterSpacing: '-0.04em', lineHeight: 1.1 }}>
          Ready to ship something real?
        </h2>
        <p style={{ opacity: 0.7, margin: '0 auto 3rem', maxWidth: '576px', fontSize: '1.25rem', lineHeight: 1.6 }}>
          Pick a section, customize it in the studio, get the CLI command. Ship in minutes.
        </p>
        <div style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '3rem' }}>
          <Link href="/blueprints" style={{ textDecoration: 'none' }}>
            <Button size="lg" style={{ fontWeight: 600 }}>Browse Gallery</Button>
          </Link>
          <Link href="/docs" style={{ textDecoration: 'none' }}>
            <Button variant="glass" size="lg" style={{ fontWeight: 600, border: '1px solid var(--zx-border)', color: 'var(--zx-primary)' }}>Read the Docs</Button>
          </Link>
        </div>
        <code style={{ fontSize: '1rem', opacity: 0.6, fontFamily: 'monospace', background: 'var(--zx-elevated)', padding: '0.5rem 1rem', borderRadius: '4px' }}>
          npx zenix-ui add dashboard/header
        </code>
      </Surface>
    </PageSection>
  );
}
