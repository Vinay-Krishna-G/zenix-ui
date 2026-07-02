import { Metadata } from 'next';
import Link from 'next/link';
import { Surface, Button } from '@zenixui/components';
import { getBlueprintsByCategory } from '@zenixui/blueprints';
import { DocsBlueprintCard } from '../../../../components/DocsBlueprintCard';

export const metadata: Metadata = {
  title: 'ZenixUI with Astro — Installation & Setup Guide',
  description: 'Install ZenixUI blueprints in an Astro project using React islands. Covers Layout.astro setup, the Experience provider, CSS import, and CLI usage for static-first sites.',
};

export default function AstroDocsPage() {
  const landingBlueprints = getBlueprintsByCategory('landing').filter(bp => bp.supportedFrameworks.includes('astro'));
  const blogBlueprints = getBlueprintsByCategory('blog').filter(bp => bp.supportedFrameworks.includes('astro'));

  return (
    <div style={{ maxWidth: '800px' }}>
      <div style={{ marginBottom: '1rem', display: 'flex', gap: '0.5rem', alignItems: 'center', fontSize: '0.875rem', opacity: 0.6 }}>
        <Link href="/docs" style={{ color: 'inherit', textDecoration: 'none' }}>Docs</Link>
        <span>→</span>
        <span>Astro</span>
      </div>

      <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', marginBottom: '1rem' }}>
        <h1 style={{ fontSize: '3rem', fontWeight: 800, margin: 0, letterSpacing: '-0.04em', lineHeight: 1.1 }}>
          ZenixUI with Astro
        </h1>
        <span style={{ padding: '0.25rem 0.75rem', background: 'var(--zx-warning, #f59e0b)', color: '#000', borderRadius: 'var(--zx-radius-pill)', fontSize: '0.7rem', fontWeight: 700, flexShrink: 0 }}>
          Beta
        </span>
      </div>
      <p style={{ fontSize: '1.25rem', opacity: 0.7, lineHeight: 1.7, marginBottom: '3rem' }}>
        Astro is a static-first framework that ships zero JavaScript by default. ZenixUI blueprints work in Astro via React islands — components that hydrate only when needed. This is the ideal architecture for content-heavy marketing sites, blogs, and documentation where you want maximum performance with selective interactivity.
      </p>

      <h2 style={{ fontSize: '2rem', fontWeight: 700, margin: '0 0 1rem', letterSpacing: '-0.02em' }}>Astro Integration Model</h2>
      <p style={{ opacity: 0.8, lineHeight: 1.7, marginBottom: '1rem' }}>
        Unlike Next.js or Vite where everything is React, Astro treats React as a UI framework "island." Blueprint components are React components — they render inside Astro's <code style={{ background: 'var(--zx-elevated)', padding: '0.15rem 0.4rem', borderRadius: '4px' }}>{'<Component client:load />'}</code> directive, which hydrates them in the browser. The ZenixUI CSS variables are injected globally via a stylesheet link.
      </p>
      <p style={{ opacity: 0.8, lineHeight: 1.7, marginBottom: '3rem' }}>
        For static content pages, ZenixUI blueprint components can also be rendered as non-interactive HTML — omit <code style={{ background: 'var(--zx-elevated)', padding: '0.15rem 0.4rem', borderRadius: '4px' }}>client:load</code> and they become server-rendered HTML with ZenixUI's CSS variable styling intact.
      </p>

      <h2 style={{ fontSize: '2rem', fontWeight: 700, margin: '0 0 1rem', letterSpacing: '-0.02em' }}>1. Install Dependencies</h2>
      <pre style={{ margin: '0 0 1rem', padding: '1.5rem', background: 'var(--zx-elevated)', borderRadius: 'var(--zx-radius-surface)', overflowX: 'auto', fontSize: '0.875rem', fontFamily: 'monospace', border: '1px solid var(--zx-border)' }}>
{`# Add the React integration to Astro first
npx astro add react

# Install ZenixUI
npm install @zenixui/react @zenixui/core @zenixui/components`}
      </pre>

      <h2 style={{ fontSize: '2rem', fontWeight: 700, margin: '0 0 1rem', letterSpacing: '-0.02em' }}>2. Update Your Layout</h2>
      <p style={{ opacity: 0.8, lineHeight: 1.7, marginBottom: '1rem' }}>
        Import the ZenixUI CSS globally in your base layout file. The <code style={{ background: 'var(--zx-elevated)', padding: '0.15rem 0.4rem', borderRadius: '4px' }}>Experience</code> provider wraps the React island, not the entire Astro document:
      </p>
      <pre style={{ margin: '0 0 3rem', padding: '1.5rem', background: 'var(--zx-elevated)', borderRadius: 'var(--zx-radius-surface)', overflowX: 'auto', fontSize: '0.875rem', fontFamily: 'monospace', border: '1px solid var(--zx-border)', lineHeight: 1.7 }}>
{`---
// src/layouts/Layout.astro
import '@zenixui/core/dist/index.css';
---

<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width" />
    <title><slot name="title">My Site</slot></title>
  </head>
  <body>
    <slot />
  </body>
</html>`}
      </pre>

      <h2 style={{ fontSize: '2rem', fontWeight: 700, margin: '0 0 1rem', letterSpacing: '-0.02em' }}>3. Wrap Blueprints with Experience</h2>
      <p style={{ opacity: 0.8, lineHeight: 1.7, marginBottom: '1rem' }}>
        Create a wrapper React component that applies the Experience provider, then use it as an island:
      </p>
      <pre style={{ margin: '0 0 1rem', padding: '1.5rem', background: 'var(--zx-elevated)', borderRadius: 'var(--zx-radius-surface)', overflowX: 'auto', fontSize: '0.875rem', fontFamily: 'monospace', border: '1px solid var(--zx-border)', lineHeight: 1.7 }}>
{`// src/components/BlueprintWrapper.tsx
import { Experience } from '@zenixui/react';
import { themeConfig } from '../theme/zenix';
import { ZenixLanding } from '../blueprints/zenix-landing';

export function BlueprintWrapper() {
  return (
    <Experience theme={themeConfig}>
      <ZenixLanding />
    </Experience>
  );
}`}
      </pre>
      <pre style={{ margin: '0 0 3rem', padding: '1.5rem', background: 'var(--zx-elevated)', borderRadius: 'var(--zx-radius-surface)', overflowX: 'auto', fontSize: '0.875rem', fontFamily: 'monospace', border: '1px solid var(--zx-border)', lineHeight: 1.7 }}>
{`---
// src/pages/index.astro
import Layout from '../layouts/Layout.astro';
import { BlueprintWrapper } from '../components/BlueprintWrapper';
---

<Layout>
  <BlueprintWrapper client:load />
</Layout>`}
      </pre>

      <h2 style={{ fontSize: '2rem', fontWeight: 700, margin: '0 0 1rem', letterSpacing: '-0.02em' }}>4. Install a Blueprint</h2>
      <pre style={{ margin: '0 0 3rem', padding: '1.5rem', background: 'var(--zx-elevated)', borderRadius: 'var(--zx-radius-surface)', overflowX: 'auto', fontSize: '0.875rem', fontFamily: 'monospace', border: '1px solid var(--zx-border)' }}>
{`pnpm dlx zenix-ui add zenix-landing --config ./zenix-theme.json`}
      </pre>

      <h2 style={{ fontSize: '2rem', fontWeight: 700, margin: '0 0 1rem', letterSpacing: '-0.02em' }}>Hydration Directives</h2>
      <p style={{ opacity: 0.8, lineHeight: 1.7, marginBottom: '1rem' }}>
        Astro lets you control exactly when a React island hydrates. Choose the right directive for your blueprint:
      </p>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', marginBottom: '3rem' }}>
        {[
          { directive: 'client:load', desc: 'Hydrates immediately on page load. Use for interactive blueprints (auth forms, contact forms, dashboards).' },
          { directive: 'client:visible', desc: 'Hydrates when the component enters the viewport. Great for below-the-fold blueprints like newsletter sections.' },
          { directive: 'client:idle', desc: 'Hydrates when the browser is idle. Good for lower-priority sections that don\'t need immediate interactivity.' },
          { directive: 'none (omit)', desc: 'Server-renders to static HTML with ZenixUI CSS variables applied. Works for purely visual, non-interactive blueprint sections.' },
        ].map(({ directive, desc }) => (
          <Surface key={directive} variant="card" style={{ padding: '1.25rem', border: '1px solid var(--zx-elevated)', display: 'grid', gridTemplateColumns: '180px 1fr', gap: '1.5rem', alignItems: 'center' }}>
            <code style={{ background: 'var(--zx-elevated)', padding: '0.3rem 0.6rem', borderRadius: '4px', fontSize: '0.8rem', fontFamily: 'monospace', color: 'var(--zx-primary)' }}>{directive}</code>
            <p style={{ margin: 0, opacity: 0.8, lineHeight: 1.5, fontSize: '0.9rem' }}>{desc}</p>
          </Surface>
        ))}
      </div>

      <h2 style={{ fontSize: '2rem', fontWeight: 700, margin: '0 0 1rem', letterSpacing: '-0.02em' }}>Common Mistakes to Avoid</h2>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '3rem' }}>
        {[
          { mistake: 'Using Experience provider in an .astro file', fix: 'Experience must be inside a .tsx React component. Astro components cannot use React hooks or context.' },
          { mistake: 'Forgetting client:load on interactive blueprints', fix: 'Without a client directive, React hooks (useState, useEffect) won\'t run. Auth forms and interactive blueprints must use client:load.' },
        ].map(({ mistake, fix }) => (
          <Surface key={mistake} variant="card" style={{ padding: '1.5rem', border: '1px solid var(--zx-elevated)', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
            <div>
              <div style={{ fontSize: '0.7rem', fontWeight: 700, textTransform: 'uppercase', opacity: 0.4, marginBottom: '0.5rem' }}>❌ Mistake</div>
              <p style={{ margin: 0, opacity: 0.8, lineHeight: 1.5, fontSize: '0.9rem' }}>{mistake}</p>
            </div>
            <div>
              <div style={{ fontSize: '0.7rem', fontWeight: 700, textTransform: 'uppercase', color: 'var(--zx-primary)', marginBottom: '0.5rem' }}>✅ Fix</div>
              <p style={{ margin: 0, opacity: 0.8, lineHeight: 1.5, fontSize: '0.9rem' }}>{fix}</p>
            </div>
          </Surface>
        ))}
      </div>

      <h2 style={{ fontSize: '2rem', fontWeight: 700, margin: '0 0 1rem', letterSpacing: '-0.02em' }}>Great Astro Blueprints</h2>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1rem', marginBottom: '3rem' }}>
        {[...landingBlueprints.slice(0, 2), ...blogBlueprints.slice(0, 2)].map(bp => (
          <DocsBlueprintCard
            key={bp.id}
            id={bp.id}
            title={bp.title}
            category={bp.category}
          />
        ))}
      </div>

      <Surface variant="card" style={{ padding: '3rem', border: '1px solid var(--zx-elevated)', textAlign: 'center', borderRadius: 'var(--zx-radius-overlay)' }}>
        <h2 style={{ fontSize: '1.75rem', fontWeight: 700, margin: '0 0 1rem' }}>Build blazing fast Astro sites</h2>
        <p style={{ opacity: 0.7, margin: '0 auto 2rem', maxWidth: '500px', lineHeight: 1.6 }}>
          Combine Astro's zero-JS approach with ZenixUI's complete blueprint architecture.
        </p>
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link href="/studio" style={{ textDecoration: 'none' }}>
            <Button size="lg">Open Theme Studio</Button>
          </Link>
          <Link href="/blueprints" style={{ textDecoration: 'none' }}>
            <Button size="lg" variant="glass">Browse Blueprints</Button>
          </Link>
        </div>
      </Surface>
    </div>
  );
}
