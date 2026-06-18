'use client';

import { Surface, Features } from '@zenixui/components';
import { blueprints } from '@zenixui/blueprints';
import Link from 'next/link';

export default function BlueprintsGallery() {
  return (
    <div style={{ padding: '4rem 2rem', maxWidth: '1200px', margin: '0 auto' }}>
      <div style={{ marginBottom: '4rem' }}>
        <h1 style={{ fontSize: '3rem', fontWeight: 700, margin: '0 0 1rem', letterSpacing: '-0.03em' }}>
          Blueprints
        </h1>
        <p style={{ fontSize: '1.25rem', opacity: 0.6, margin: 0, maxWidth: '600px' }}>
          Production-ready experiences. Copy them directly into your project.
        </p>
      </div>

      <Features.Grid columns={2} spacing="xl">
        {blueprints.map(bp => (
          <Link href={`/blueprints/${bp.id}`} key={bp.id}>
            <Surface variant="card" style={{ padding: 0, overflow: 'hidden', cursor: 'pointer', transition: 'transform 0.2s', border: '1px solid var(--zx-elevated)' }}>
              {/* Fake Image Placeholder since we haven't generated real images in /public yet */}
              <div style={{ height: '300px', background: 'var(--zx-elevated)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <div style={{ fontSize: '1.5rem', fontWeight: 600, opacity: 0.3 }}>{bp.title} Preview</div>
              </div>
              <div style={{ padding: '1.5rem' }}>
                <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '1rem' }}>
                  <span style={{ fontSize: '0.75rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em', padding: '0.25rem 0.5rem', background: 'var(--zx-elevated)', borderRadius: 'var(--zx-radius-sm)' }}>
                    {bp.theme}
                  </span>
                  <span style={{ fontSize: '0.75rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em', padding: '0.25rem 0.5rem', background: 'var(--zx-elevated)', borderRadius: 'var(--zx-radius-sm)' }}>
                    {bp.category}
                  </span>
                </div>
                <h2 style={{ fontSize: '1.25rem', fontWeight: 600, margin: 0 }}>{bp.title}</h2>
              </div>
            </Surface>
          </Link>
        ))}
      </Features.Grid>
    </div>
  );
}
