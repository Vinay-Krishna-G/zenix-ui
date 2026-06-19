'use client';

import { useState } from 'react';
import { Surface, Button } from '@zenixui/components';
import { getBlueprint, blueprints } from '@zenixui/blueprints';
import { Experience } from '@zenixui/react';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { track } from '@vercel/analytics/react';

export function BlueprintClientView({ id, sourceCode }: { id: string, sourceCode: string }) {
  const blueprint = getBlueprint(id);
  const [copyMode, setCopyMode] = useState<'blueprint' | 'source' | null>(null);
  
  if (!blueprint) {
    notFound();
  }

  const { component: Component } = blueprint;
  const blueprintCode = `<${blueprint.title.replace(/\s+/g, '')} />`;

  // Find similar experiences by category (excluding current)
  const similarExperiences = blueprints
    .filter(bp => bp.category === blueprint.category && bp.id !== blueprint.id)
    .slice(0, 3);

  return (
    <div style={{ padding: '0 0 10rem' }}>
      
      {/* FULL WIDTH LIVE PREVIEW */}
      <div style={{ width: '100%', height: '80vh', borderBottom: '1px solid var(--zx-elevated)', position: 'relative', background: 'var(--zx-elevated)', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: '1rem', left: '1rem', zIndex: 100 }}>
          <Link href="/experiences" style={{ fontSize: '0.875rem', fontWeight: 600, padding: '0.5rem 1rem', background: 'var(--zx-background)', color: 'var(--zx-primary)', borderRadius: 'var(--zx-radius-round)', textDecoration: 'none', boxShadow: 'var(--zx-shadow-sm)' }}>
            ← Back to Gallery
          </Link>
        </div>
        <div style={{ height: '100%', overflowY: 'auto', padding: '2rem' }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto', background: 'var(--zx-background)', borderRadius: 'var(--zx-radius-lg)', overflow: 'hidden', boxShadow: 'var(--zx-shadow-lg)', border: '1px solid var(--zx-elevated)' }}>
            <Experience preset={blueprint.theme}>
              <Component />
            </Experience>
          </div>
        </div>
      </div>

      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '4rem 2rem' }}>
        
        {/* METADATA & ACTIONS */}
        <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '4rem', marginBottom: '6rem' }}>
          <div>
            <h1 style={{ fontSize: '3.5rem', fontWeight: 700, margin: '0 0 1rem', letterSpacing: '-0.04em' }}>
              {blueprint.title}
            </h1>
            <p style={{ fontSize: '1.25rem', opacity: 0.6, margin: '0 0 2rem', lineHeight: 1.6 }}>
              {blueprint.description || `A complete, production-ready ${blueprint.category} experience powered by the ${blueprint.theme} theme ecosystem.`}
            </p>
            
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <div style={{ padding: '0.5rem 1rem', background: 'var(--zx-elevated)', borderRadius: 'var(--zx-radius-sm)' }}>
                <div style={{ fontSize: '0.75rem', opacity: 0.5, fontWeight: 600, textTransform: 'uppercase', marginBottom: '0.25rem' }}>Theme</div>
                <div style={{ fontWeight: 600, textTransform: 'capitalize' }}>{blueprint.theme.replace('-', ' ')}</div>
              </div>
              <div style={{ padding: '0.5rem 1rem', background: 'var(--zx-elevated)', borderRadius: 'var(--zx-radius-sm)' }}>
                <div style={{ fontSize: '0.75rem', opacity: 0.5, fontWeight: 600, textTransform: 'uppercase', marginBottom: '0.25rem' }}>Category</div>
                <div style={{ fontWeight: 600, textTransform: 'capitalize' }}>{blueprint.category}</div>
              </div>
              <div style={{ padding: '0.5rem 1rem', background: 'var(--zx-elevated)', borderRadius: 'var(--zx-radius-sm)' }}>
                <div style={{ fontSize: '0.75rem', opacity: 0.5, fontWeight: 600, textTransform: 'uppercase', marginBottom: '0.25rem' }}>Tags</div>
                <div style={{ display: 'flex', gap: '0.5rem' }}>
                  {blueprint.tags.map(tag => (
                    <span key={tag} style={{ fontWeight: 600 }}>#{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <Button size="lg" onClick={() => {
                setCopyMode(copyMode === 'blueprint' ? null : 'blueprint');
                if (copyMode !== 'blueprint') track('View Blueprint Code', { blueprintId: blueprint.id });
              }} style={{ justifyContent: 'center' }}>
                {copyMode === 'blueprint' ? 'Hide Code' : 'Copy Blueprint'}
              </Button>
              <Button size="lg" variant="glass" onClick={() => {
                setCopyMode(copyMode === 'source' ? null : 'source');
                if (copyMode !== 'source') track('View Source Code', { blueprintId: blueprint.id });
              }} style={{ justifyContent: 'center' }}>
                {copyMode === 'source' ? 'Hide Source' : 'Copy Source'}
              </Button>
            </div>

            <Surface variant="glass" style={{ padding: '1.25rem', border: '1px solid var(--zx-elevated)', fontSize: '0.875rem' }}>
              <div style={{ fontWeight: 600, marginBottom: '1rem', fontSize: '0.75rem', textTransform: 'uppercase', opacity: 0.7, letterSpacing: '0.05em' }}>How to adopt</div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <span style={{ width: '1.5rem', height: '1.5rem', borderRadius: '50%', background: 'var(--zx-elevated)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.75rem', fontWeight: 600 }}>1</span>
                  <span style={{ opacity: 0.9 }}>Copy Blueprint</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <span style={{ width: '1.5rem', height: '1.5rem', borderRadius: '50%', background: 'var(--zx-elevated)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.75rem', fontWeight: 600 }}>2</span>
                  <span style={{ opacity: 0.9 }}>Paste into your app</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <span style={{ width: '1.5rem', height: '1.5rem', borderRadius: '50%', background: 'var(--zx-primary)', color: 'var(--zx-background)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.75rem', fontWeight: 600 }}>3</span>
                  <span style={{ opacity: 0.9, fontWeight: 600 }}>Customize & Ship</span>
                </div>
              </div>
            </Surface>
          </div>
        </div>

        {/* CODE BLOCK EXPANDER */}
        {copyMode && (
          <Surface variant="card" style={{ marginBottom: '6rem', padding: 0, overflow: 'hidden', border: '1px solid var(--zx-elevated)' }}>
            <div style={{ padding: '1rem 1.5rem', background: 'var(--zx-elevated)', borderBottom: '1px solid var(--zx-elevated)', display: 'flex', justifyContent: 'space-between' }}>
              <div style={{ fontWeight: 600 }}>{copyMode === 'blueprint' ? 'Usage' : 'Full Source Code'}</div>
              <button onClick={() => {
                navigator.clipboard.writeText(copyMode === 'blueprint' ? blueprintCode : sourceCode);
                track('Copied to Clipboard', { type: copyMode, blueprintId: blueprint.id });
                alert('Copied to clipboard!');
              }} style={{ background: 'transparent', border: 'none', color: 'var(--zx-primary)', fontWeight: 600, cursor: 'pointer' }}>
                Copy to Clipboard
              </button>
            </div>
            <pre style={{ margin: 0, padding: '2rem', background: 'var(--zx-background)', overflowX: 'auto', fontSize: '0.875rem', fontFamily: 'monospace', lineHeight: 1.5, maxHeight: '600px', overflowY: 'auto' }}>
              {copyMode === 'blueprint' ? blueprintCode : sourceCode}
            </pre>
          </Surface>
        )}

        {/* SIMILAR EXPERIENCES */}
        {similarExperiences.length > 0 && (
          <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '2rem' }}>
              <h2 style={{ fontSize: '2rem', fontWeight: 700, margin: 0 }}>Similar Experiences</h2>
            </div>
            
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '2rem' }}>
              {similarExperiences.map(bp => (
                <Link key={bp.id} href={`/experiences/${bp.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                  <Surface variant="card" style={{ padding: 0, overflow: 'hidden', border: '1px solid var(--zx-elevated)', transition: 'transform 0.2s' }}>
                    <div style={{ height: '200px', background: 'var(--zx-elevated)', backgroundImage: `url(${bp.previewImage})`, backgroundSize: 'cover', backgroundPosition: 'top center' }} />
                    <div style={{ padding: '1.5rem' }}>
                      <h3 style={{ fontSize: '1.25rem', fontWeight: 600, margin: '0 0 0.5rem' }}>{bp.title}</h3>
                      <span style={{ fontSize: '0.75rem', padding: '0.2rem 0.5rem', background: 'var(--zx-elevated)', borderRadius: 'var(--zx-radius-sm)', textTransform: 'capitalize' }}>
                        {bp.theme.replace('-', ' ')}
                      </span>
                    </div>
                  </Surface>
                </Link>
              ))}
            </div>
          </div>
        )}
        
      </div>
    </div>
  );
}
