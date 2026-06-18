'use client';

import { useState } from 'react';
import { Surface, Hero, Features } from '@zenixui/components';
import { Experience } from '@zenixui/react';

// For the live preview
import { ZenixLanding } from '@zenixui/blueprints';

export default function Home() {
  const [previewTheme, setPreviewTheme] = useState('zenix');

  return (
    <div style={{ padding: '6rem 2rem 10rem', maxWidth: '1400px', margin: '0 auto' }}>
      
      {/* MARKETING HERO */}
      <div style={{ textAlign: 'center', marginBottom: '6rem' }}>
        <h1 style={{ fontSize: 'clamp(3rem, 6vw, 5rem)', fontWeight: 700, letterSpacing: '-0.04em', lineHeight: 1.1, margin: '0 0 1.5rem' }}>
          Build Entire Experiences,<br />
          Not Just Components.
        </h1>
        <p style={{ fontSize: '1.25rem', opacity: 0.6, maxWidth: '600px', margin: '0 auto 2rem', lineHeight: 1.6 }}>
          Ocean. Night City. Autumn. Zenix.<br />
          Copy beautiful experiences or customize them with your own brand.
        </p>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem' }}>
          <a href="/blueprints" style={{ padding: '1rem 2rem', background: 'var(--zx-primary)', color: 'var(--zx-background)', borderRadius: 'var(--zx-radius-sm)', fontWeight: 600 }}>
            Browse Blueprints
          </a>
          <a href="https://github.com/zenixui" style={{ padding: '1rem 2rem', background: 'transparent', color: 'var(--zx-primary)', border: '1px solid var(--zx-elevated)', borderRadius: 'var(--zx-radius-sm)', fontWeight: 600 }}>
            GitHub
          </a>
        </div>
      </div>

      {/* LIVE THEME SWITCHER */}
      <div style={{ marginBottom: '2rem', display: 'flex', justifyContent: 'center', gap: '0.5rem' }}>
        {['zenix', 'ocean', 'night-city', 'autumn'].map(t => (
          <button 
            key={t}
            onClick={() => setPreviewTheme(t)}
            style={{
              padding: '0.75rem 1.5rem',
              borderRadius: 'var(--zx-radius-round)',
              border: previewTheme === t ? '1px solid var(--zx-primary)' : '1px solid var(--zx-elevated)',
              background: previewTheme === t ? 'var(--zx-primary)' : 'transparent',
              color: previewTheme === t ? 'var(--zx-background)' : 'var(--zx-primary)',
              fontWeight: 600,
              cursor: 'pointer',
              transition: 'all 0.2s'
            }}
          >
            {t.charAt(0).toUpperCase() + t.slice(1).replace('-', ' ')}
          </button>
        ))}
      </div>

      {/* INTERACTIVE PREVIEW WINDOW */}
      <Surface variant="card" style={{ 
        padding: 0, 
        overflow: 'hidden', 
        borderRadius: 'var(--zx-radius-lg)', 
        border: '1px solid var(--zx-elevated)',
        boxShadow: 'var(--zx-shadow-lg)',
        height: '800px',
        position: 'relative'
      }}>
        {/* Fake Browser Chrome */}
        <div style={{ 
          height: '48px', 
          borderBottom: '1px solid var(--zx-elevated)', 
          background: 'var(--zx-surface)', 
          display: 'flex', 
          alignItems: 'center', 
          padding: '0 1.5rem', 
          gap: '0.5rem',
          position: 'relative',
          zIndex: 50
        }}>
          <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#ff5f56' }} />
          <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#ffbd2e' }} />
          <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#27c93f' }} />
          
          <div style={{ margin: '0 auto', fontSize: '0.85rem', opacity: 0.5, fontFamily: 'monospace' }}>
            preview.zenixui.com/landing
          </div>
        </div>

        {/* The Nested Experience */}
        <div style={{ height: 'calc(100% - 48px)', overflowY: 'auto' }}>
          <Experience preset={previewTheme}>
            <ZenixLanding />
          </Experience>
        </div>
      </Surface>

    </div>
  );
}
