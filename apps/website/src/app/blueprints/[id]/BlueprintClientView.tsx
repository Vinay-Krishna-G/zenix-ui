'use client';

import { useState, useCallback } from 'react';
import { Surface, Button } from '@zenixui/components';
import { getBlueprint, blueprints } from '@zenixui/blueprints';
import { Experience } from '@zenixui/react';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { track } from '@vercel/analytics/react';
import { BlueprintThumbnail } from '../../../components/preview/BlueprintThumbnail';

export function BlueprintClientView({ id, sourceCode }: { id: string, sourceCode: string }) {
  const blueprint = getBlueprint(id);
  const [copyMode, setCopyMode] = useState<'blueprint' | 'source' | null>(null);
  const [cliCopied, setCliCopied] = useState(false);
  
  if (!blueprint) {
    notFound();
  }

  const { component: Component } = blueprint;
  const blueprintCode = `<${blueprint.title.replace(/\s+/g, '')} />`;
  const installCmd = `pnpm dlx zenix-ui add ${blueprint.id} --config ./zenix-theme.json`;

  const copyCliCmd = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(installCmd);
      setCliCopied(true);
      track('Copied CLI Command', { blueprintId: blueprint.id });
      setTimeout(() => setCliCopied(false), 2000);
    } catch {}
  }, [installCmd, blueprint.id]);

  // Find more blueprints in same category (excluding current)
  const moreBlueprints = blueprints
    .filter(bp => bp.category === blueprint.category && bp.id !== blueprint.id)
    .slice(0, 3);

  return (
    <div style={{ padding: '0 0 10rem' }}>
      
      {/* FULL WIDTH LIVE PREVIEW */}
      <div style={{ width: '100%', height: '80vh', borderBottom: '1px solid var(--zx-elevated)', position: 'relative', background: 'var(--zx-elevated)', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: '1rem', left: '1rem', zIndex: 100 }}>
          <Link href="/blueprints" style={{ fontSize: '0.875rem', fontWeight: 600, padding: '0.5rem 1rem', background: 'var(--zx-background)', color: 'var(--zx-primary)', borderRadius: 'var(--zx-radius-pill)', textDecoration: 'none', boxShadow: 'var(--zx-shadow-sm)' }}>
            ← Back to Blueprints
          </Link>
        </div>
        <div style={{ height: '100%', overflowY: 'auto', padding: '2rem' }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto', background: 'var(--zx-background)', borderRadius: 'var(--zx-radius-overlay)', overflow: 'hidden', boxShadow: 'var(--zx-shadow-lg)', border: '1px solid var(--zx-elevated)' }}>
            <Experience preset={blueprint.theme as any}>
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
              <div style={{ padding: '0.5rem 1rem', background: 'var(--zx-elevated)', borderRadius: 'var(--zx-radius-surface)' }}>
                <div style={{ fontSize: '0.75rem', opacity: 0.5, fontWeight: 600, textTransform: 'uppercase', marginBottom: '0.25rem' }}>Theme</div>
                <div style={{ fontWeight: 600, textTransform: 'capitalize' }}>{blueprint.theme.replace('-', ' ')}</div>
              </div>
              <div style={{ padding: '0.5rem 1rem', background: 'var(--zx-elevated)', borderRadius: 'var(--zx-radius-surface)' }}>
                <div style={{ fontSize: '0.75rem', opacity: 0.5, fontWeight: 600, textTransform: 'uppercase', marginBottom: '0.25rem' }}>Category</div>
                <div style={{ fontWeight: 600, textTransform: 'capitalize' }}>{blueprint.category}</div>
              </div>
              <div style={{ padding: '0.5rem 1rem', background: 'var(--zx-elevated)', borderRadius: 'var(--zx-radius-surface)' }}>
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
            {/* Primary actions */}
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
                {copyMode === 'source' ? 'Hide Source' : 'View Full Source'}
              </Button>
            </div>

            {/* Install via CLI */}
            <Surface variant="glass" style={{ padding: '1.25rem', border: '1px solid var(--zx-elevated)', fontSize: '0.875rem' }}>
              <div style={{ fontWeight: 700, marginBottom: '0.75rem', fontSize: '0.7rem', textTransform: 'uppercase', opacity: 0.5, letterSpacing: '0.07em' }}>Install via CLI</div>
              <div style={{ position: 'relative', marginBottom: '1rem' }}>
                <code style={{
                  display: 'block', padding: '0.75rem 3rem 0.75rem 0.75rem',
                  background: 'var(--zx-background)', borderRadius: 'var(--zx-radius-surface)',
                  fontSize: '0.75rem', fontFamily: 'monospace', lineHeight: 1.5,
                  border: '1px solid var(--zx-border)', color: 'var(--zx-primary)',
                  wordBreak: 'break-all',
                }}>
                  {installCmd}
                </code>
                <button
                  onClick={copyCliCmd}
                  style={{
                    position: 'absolute', top: '50%', right: '0.5rem', transform: 'translateY(-50%)',
                    padding: '0.25rem 0.5rem', fontSize: '0.65rem', fontWeight: 700,
                    borderRadius: '4px', border: '1px solid var(--zx-elevated)',
                    background: 'var(--zx-surface)', cursor: 'pointer',
                    color: cliCopied ? '#22c55e' : 'inherit',
                    transition: 'all 0.15s ease',
                  }}
                >
                  {cliCopied ? '✓' : 'Copy'}
                </button>
              </div>

              {/* 3-step guide with links */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <span style={{ width: '1.5rem', height: '1.5rem', borderRadius: '50%', background: 'var(--zx-primary)', color: 'var(--zx-background)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.7rem', fontWeight: 700, flexShrink: 0 }}>1</span>
                  <span style={{ opacity: 0.85, fontSize: '0.85rem' }}>Copy the command above</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <span style={{ width: '1.5rem', height: '1.5rem', borderRadius: '50%', background: 'var(--zx-elevated)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.7rem', fontWeight: 700, flexShrink: 0 }}>2</span>
                  <span style={{ opacity: 0.85, fontSize: '0.85rem' }}>
                    <Link href="/studio" style={{ color: 'var(--zx-primary)', textDecoration: 'none', fontWeight: 600 }}>Customize in Studio</Link> → download config
                  </span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <span style={{ width: '1.5rem', height: '1.5rem', borderRadius: '50%', background: 'var(--zx-elevated)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.7rem', fontWeight: 700, flexShrink: 0 }}>3</span>
                  <span style={{ opacity: 0.85, fontSize: '0.85rem' }}>
                    Follow <Link href="/docs/nextjs" style={{ color: 'var(--zx-primary)', textDecoration: 'none', fontWeight: 600 }}>framework setup docs</Link>
                  </span>
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

        {/* MORE BLUEPRINTS */}
        {moreBlueprints.length > 0 && (
          <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '2rem' }}>
              <h2 style={{ fontSize: '2rem', fontWeight: 700, margin: 0 }}>More {blueprint.category} Blueprints</h2>
              <Link href={`/blueprints?category=${blueprint.category}`} style={{ fontWeight: 600, color: 'var(--zx-primary)', textDecoration: 'none', opacity: 0.8 }}>View all →</Link>
            </div>
            
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '2rem' }}>
              {moreBlueprints.map(bp => (
                <Link key={bp.id} href={`/blueprints/${bp.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                  <Surface variant="card" style={{
                    padding: 0, overflow: 'hidden',
                    border: '1px solid var(--zx-elevated)',
                    transition: 'border-color 0.2s ease, transform 0.2s ease',
                  }}
                    onMouseEnter={e => {
                      (e.currentTarget as HTMLElement).style.borderColor = 'var(--zx-primary)';
                      (e.currentTarget as HTMLElement).style.transform   = 'translateY(-2px)';
                    }}
                    onMouseLeave={e => {
                      (e.currentTarget as HTMLElement).style.borderColor = 'var(--zx-elevated)';
                      (e.currentTarget as HTMLElement).style.transform   = 'translateY(0)';
                    }}
                  >
                    {/* Live preview thumbnail — never stale, zero 404s */}
                    <BlueprintThumbnail
                      Component={bp.component}
                      theme={bp.theme}
                      previewHeight={200}
                      cardWidth={320}
                    />
                    <div style={{ padding: '1.25rem 1.5rem' }}>
                      <h3 style={{ fontSize: '1rem', fontWeight: 700, margin: '0 0 0.375rem' }}>{bp.title}</h3>
                      <span style={{
                        fontSize: '0.7rem', padding: '0.15rem 0.5rem',
                        background: 'var(--zx-elevated)',
                        borderRadius: 'var(--zx-radius-surface)',
                        textTransform: 'capitalize', fontWeight: 600,
                      }}>
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
