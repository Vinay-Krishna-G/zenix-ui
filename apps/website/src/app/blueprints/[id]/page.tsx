'use client';

import { useState, use } from 'react';
import { Surface, Hero } from '@zenixui/components';
import { getBlueprint } from '@zenixui/blueprints';
import { Experience } from '@zenixui/react';
import { notFound } from 'next/navigation';
import Link from 'next/link';

export default function BlueprintDetail({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  const blueprint = getBlueprint(id);
  const [copyMode, setCopyMode] = useState<'blueprint' | 'source'>('blueprint');
  
  if (!blueprint) {
    notFound();
  }

  const { component: Component } = blueprint;

  const blueprintCode = `<${blueprint.title.replace(/\s+/g, '')} />`;
  const sourceCodePlaceholder = `// Normally, we'd read fs.readFileSync('${blueprint.sourcePath}')
// Since we are in a Client Component right now for demo purposes, here is the raw path:
// -> ${blueprint.sourcePath}

export function ${blueprint.title.replace(/\s+/g, '')}() {
  return (
    <Hero.Root>
      <Hero.Content>
        {/* ... */}
      </Hero.Content>
    </Hero.Root>
  );
}`;

  return (
    <div style={{ padding: '4rem 2rem', maxWidth: '1400px', margin: '0 auto' }}>
      <div style={{ marginBottom: '2rem' }}>
        <Link href="/blueprints" style={{ fontSize: '0.875rem', fontWeight: 600, opacity: 0.6, marginBottom: '2rem', display: 'inline-block' }}>
          ← Back to Blueprints
        </Link>
        <h1 style={{ fontSize: '3rem', fontWeight: 700, margin: '0 0 1rem', letterSpacing: '-0.03em' }}>
          {blueprint.title}
        </h1>
        <div style={{ display: 'flex', gap: '0.5rem' }}>
          {blueprint.tags.map(tag => (
            <span key={tag} style={{ fontSize: '0.75rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em', padding: '0.25rem 0.5rem', background: 'var(--zx-elevated)', borderRadius: 'var(--zx-radius-sm)' }}>
              {tag}
            </span>
          ))}
        </div>
      </div>

      <div style={{ display: 'flex', gap: '2rem', flexDirection: 'column' }}>
        {/* TOP: LIVE PREVIEW */}
        <Surface variant="card" style={{ padding: 0, overflow: 'hidden', height: '600px', position: 'relative', border: '1px solid var(--zx-elevated)' }}>
          <div style={{ position: 'absolute', top: '1rem', right: '1rem', zIndex: 100 }}>
            <span style={{ fontSize: '0.75rem', fontWeight: 600, padding: '0.25rem 0.75rem', background: 'var(--zx-primary)', color: 'var(--zx-background)', borderRadius: 'var(--zx-radius-round)' }}>Live Preview</span>
          </div>
          <div style={{ height: '100%', overflowY: 'auto' }}>
            <Experience preset={blueprint.theme}>
              <Component />
            </Experience>
          </div>
        </Surface>

        {/* BOTTOM: COPY CODE SYSTEM */}
        <Surface variant="card" style={{ padding: '2rem', border: '1px solid var(--zx-elevated)' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
            <h3 style={{ fontSize: '1.25rem', fontWeight: 600, margin: 0 }}>Implementation</h3>
            <div style={{ display: 'flex', gap: '0.5rem', background: 'var(--zx-elevated)', padding: '0.25rem', borderRadius: 'var(--zx-radius-sm)' }}>
              <button 
                onClick={() => setCopyMode('blueprint')}
                style={{ padding: '0.5rem 1rem', borderRadius: 'var(--zx-radius-sm)', border: 'none', background: copyMode === 'blueprint' ? 'var(--zx-surface)' : 'transparent', color: 'var(--zx-primary)', fontWeight: 600, cursor: 'pointer', boxShadow: copyMode === 'blueprint' ? 'var(--zx-shadow-sm)' : 'none' }}
              >
                Copy Blueprint
              </button>
              <button 
                onClick={() => setCopyMode('source')}
                style={{ padding: '0.5rem 1rem', borderRadius: 'var(--zx-radius-sm)', border: 'none', background: copyMode === 'source' ? 'var(--zx-surface)' : 'transparent', color: 'var(--zx-primary)', fontWeight: 600, cursor: 'pointer', boxShadow: copyMode === 'source' ? 'var(--zx-shadow-sm)' : 'none' }}
              >
                Copy Source
              </button>
            </div>
          </div>
          
          <pre style={{ margin: 0, padding: '1.5rem', background: 'var(--zx-elevated)', borderRadius: 'var(--zx-radius-sm)', overflowX: 'auto', fontSize: '0.875rem', fontFamily: 'monospace', lineHeight: 1.5 }}>
            {copyMode === 'blueprint' ? blueprintCode : sourceCodePlaceholder}
          </pre>
        </Surface>
      </div>
    </div>
  );
}
