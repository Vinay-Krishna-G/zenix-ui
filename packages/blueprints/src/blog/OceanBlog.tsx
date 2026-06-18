'use client';

import { useState } from 'react';
import { Surface, Features, Button, Badge } from '@zenixui/components';

export function OceanBlog() {
  const [view, setView] = useState<'list' | 'detail'>('list');

  if (view === 'detail') {
    return (
      <Features.Root padded>
        <Features.Content style={{ maxWidth: '1000px', margin: '2rem auto', display: 'flex', gap: '4rem' }}>
          
          <div style={{ flex: 1 }}>
            <Button 
              variant="glass"
              onClick={() => setView('list')} 
              style={{ background: 'transparent', border: 'none', color: 'var(--zx-primary)', opacity: 0.6, padding: 0, height: 'auto', marginBottom: '2rem' }}
            >
              ← Back
            </Button>
            
            <div style={{ marginBottom: '4rem' }}>
              <span style={{ fontSize: '0.875rem', fontWeight: 400, padding: '0.25rem 1rem', background: 'rgba(255,255,255,0.05)', border: '1px solid var(--zx-glass-border)', borderRadius: 'var(--zx-radius-round)', backdropFilter: 'var(--zx-glass-blur)' }}>
                Deep Dives
              </span>
              <h1 style={{ fontSize: '4rem', fontWeight: 300, margin: '1.5rem 0 1rem', letterSpacing: '-0.02em', lineHeight: 1.1 }}>
                Riding the glass waves.
              </h1>
              <div style={{ opacity: 0.6, fontSize: '1.125rem', fontWeight: 300 }}>
                Published on Oct 12 • 5 min read
              </div>
            </div>

            <div style={{ fontSize: '1.25rem', lineHeight: 1.8, fontWeight: 300, color: 'var(--zx-primary)' }}>
              <p style={{ marginBottom: '2rem' }}>
                Glassmorphism isn't just about blur. It's about light, depth, and layers. 
                When we designed the Ocean theme, we focused on how elements interact as they float over each other.
              </p>
              
              <h2 style={{ fontSize: '2rem', fontWeight: 400, margin: '3rem 0 1.5rem' }}>Fluid Typography</h2>
              <p style={{ marginBottom: '2rem' }}>
                We use clamped font sizes to ensure the reading experience is perfectly scaled on every device, much like water filling its container.
              </p>

              <Surface variant="glass" style={{ padding: '2rem', borderRadius: 'var(--zx-radius-lg)', margin: '3rem 0', background: 'rgba(255,255,255,0.03)', border: '1px solid var(--zx-glass-border)' }}>
                <p style={{ margin: 0, fontStyle: 'italic', fontSize: '1.5rem', lineHeight: 1.6, textAlign: 'center' }}>
                  "A good UI should feel like swimming in clear water. Effortless and transparent."
                </p>
              </Surface>
            </div>
          </div>

          {/* Table Of Contents Discovery */}
          <div style={{ width: '250px', display: 'none', '@media (min-width: 1024px)': { display: 'block' } } as any}>
            <div style={{ position: 'sticky', top: '2rem' }}>
              <h4 style={{ fontSize: '0.875rem', fontWeight: 500, textTransform: 'uppercase', letterSpacing: '0.1em', opacity: 0.5, marginBottom: '1.5rem' }}>Contents</h4>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <li style={{ fontSize: '1rem', fontWeight: 400, color: 'var(--zx-primary)' }}>Introduction</li>
                <li style={{ fontSize: '1rem', fontWeight: 300, opacity: 0.6 }}>Fluid Typography</li>
                <li style={{ fontSize: '1rem', fontWeight: 300, opacity: 0.6 }}>Glass Layers</li>
                <li style={{ fontSize: '1rem', fontWeight: 300, opacity: 0.6 }}>Conclusion</li>
              </ul>
            </div>
          </div>
        </Features.Content>
      </Features.Root>
    );
  }

  return (
    <Features.Root padded>
      <Features.Content style={{ maxWidth: '900px', margin: '0 auto' }}>
        <h1 style={{ fontSize: '3.5rem', fontWeight: 300, margin: '0 0 4rem', letterSpacing: '-0.02em', textAlign: 'center' }}>
          Currents.
        </h1>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))', gap: '2rem' }}>
          {[1,2,3,4].map(id => (
            <Surface 
              key={id}
              variant="glass" 
              onClick={() => setView('detail')}
              style={{ padding: '2.5rem', borderRadius: 'var(--zx-radius-lg)', cursor: 'pointer', transition: 'transform 0.3s ease, background 0.3s ease', background: 'var(--zx-glass-bg)', backdropFilter: 'var(--zx-glass-blur)', border: '1px solid var(--zx-glass-border)' }}
            >
              <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '2rem' }}>
                <Badge variant="glass" tone="neutral">
                  Design
                </Badge>
              </div>
              <h2 style={{ fontSize: '1.75rem', fontWeight: 300, margin: '0 0 1rem', lineHeight: 1.2 }}>Riding the glass waves in modern UI.</h2>
              <p style={{ opacity: 0.6, fontSize: '1rem', fontWeight: 300, margin: 0 }}>Oct 12 • 5 min read</p>
            </Surface>
          ))}
        </div>
      </Features.Content>
    </Features.Root>
  );
}
