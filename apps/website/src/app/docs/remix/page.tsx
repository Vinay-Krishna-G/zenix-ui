import { Metadata } from 'next';
import Link from 'next/link';
import { Surface, Button } from '@zenixui/components';
import { getBlueprintsByCategory } from '@zenixui/blueprints';

export const metadata: Metadata = {
  title: 'ZenixUI with Remix — Installation & Setup Guide',
  description: 'Install and configure ZenixUI blueprints in a Remix application. Covers root.tsx setup, theme config, the Experience provider, and CLI usage.',
};

export default function RemixDocsPage() {
  const landingBlueprints = getBlueprintsByCategory('landing').filter(bp => bp.supportedFrameworks.includes('remix'));
  const dashboardBlueprints = getBlueprintsByCategory('dashboard').filter(bp => bp.supportedFrameworks.includes('remix'));

  return (
    <div style={{ maxWidth: '800px' }}>
      <div style={{ marginBottom: '1rem', display: 'flex', gap: '0.5rem', alignItems: 'center', fontSize: '0.875rem', opacity: 0.6 }}>
        <Link href="/docs" style={{ color: 'inherit', textDecoration: 'none' }}>Docs</Link>
        <span>→</span>
        <span>Remix</span>
      </div>

      <h1 style={{ fontSize: '3rem', fontWeight: 800, margin: '0 0 1rem', letterSpacing: '-0.04em', lineHeight: 1.1 }}>
        ZenixUI with Remix
      </h1>
      <p style={{ fontSize: '1.25rem', opacity: 0.7, lineHeight: 1.7, marginBottom: '3rem' }}>
        Remix brings a progressive enhancement model with nested routing, loader-based data fetching, and full-stack React. ZenixUI integrates at the root level via <code style={{ background: 'var(--zx-elevated)', padding: '0.15rem 0.4rem', borderRadius: '4px' }}>app/root.tsx</code> — the Remix equivalent of a root layout. From there, every route and blueprint inherits your theme system automatically.
      </p>

      <h2 style={{ fontSize: '2rem', fontWeight: 700, margin: '0 0 1rem', letterSpacing: '-0.02em' }}>1. Install Dependencies</h2>
      <pre style={{ margin: '0 0 3rem', padding: '1.5rem', background: 'var(--zx-elevated)', borderRadius: 'var(--zx-radius-surface)', overflowX: 'auto', fontSize: '0.875rem', fontFamily: 'monospace', border: '1px solid var(--zx-border)' }}>
{`npm install @zenixui/react @zenixui/core @zenixui/components`}
      </pre>

      <h2 style={{ fontSize: '2rem', fontWeight: 700, margin: '0 0 1rem', letterSpacing: '-0.02em' }}>2. Update app/root.tsx</h2>
      <p style={{ opacity: 0.8, lineHeight: 1.7, marginBottom: '1rem' }}>
        In Remix, <code style={{ background: 'var(--zx-elevated)', padding: '0.15rem 0.4rem', borderRadius: '4px' }}>app/root.tsx</code> renders the full HTML document and contains the <code style={{ background: 'var(--zx-elevated)', padding: '0.15rem 0.4rem', borderRadius: '4px' }}>{'<Outlet />'}</code> where nested routes render. Wrap <code style={{ background: 'var(--zx-elevated)', padding: '0.15rem 0.4rem', borderRadius: '4px' }}>{'<Outlet />'}</code> — not the entire document — with <code style={{ background: 'var(--zx-elevated)', padding: '0.15rem 0.4rem', borderRadius: '4px' }}>Experience</code>:
      </p>
      <pre style={{ margin: '0 0 3rem', padding: '1.5rem', background: 'var(--zx-elevated)', borderRadius: 'var(--zx-radius-surface)', overflowX: 'auto', fontSize: '0.875rem', fontFamily: 'monospace', border: '1px solid var(--zx-border)', lineHeight: 1.7 }}>
{`// app/root.tsx
import {
  Links, Meta, Outlet, Scripts, ScrollRestoration,
} from '@remix-run/react';
import { Experience } from '@zenixui/react';
import { themeConfig } from './theme/zenix';
import zenixStyles from '@zenixui/core/dist/index.css?url';

export const links = () => [{ rel: 'stylesheet', href: zenixStyles }];

export default function App() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <Experience theme={themeConfig}>
          <Outlet />
        </Experience>
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}`}
      </pre>

      <h2 style={{ fontSize: '2rem', fontWeight: 700, margin: '0 0 1rem', letterSpacing: '-0.02em' }}>3. CSS Import in Remix</h2>
      <p style={{ opacity: 0.8, lineHeight: 1.7, marginBottom: '1rem' }}>
        Remix handles CSS differently from Next.js. Use the <code style={{ background: 'var(--zx-elevated)', padding: '0.15rem 0.4rem', borderRadius: '4px' }}>links</code> export to include the ZenixUI stylesheet — this ensures it's included in the document head with correct SSR support:
      </p>
      <pre style={{ margin: '0 0 3rem', padding: '1.5rem', background: 'var(--zx-elevated)', borderRadius: 'var(--zx-radius-surface)', overflowX: 'auto', fontSize: '0.875rem', fontFamily: 'monospace', border: '1px solid var(--zx-border)' }}>
{`// Import with ?url to get the resolved path
import zenixStyles from '@zenixui/core/dist/index.css?url';

export const links = () => [
  { rel: 'stylesheet', href: zenixStyles },
];`}
      </pre>

      <h2 style={{ fontSize: '2rem', fontWeight: 700, margin: '0 0 1rem', letterSpacing: '-0.02em' }}>4. Theme Config</h2>
      <pre style={{ margin: '0 0 3rem', padding: '1.5rem', background: 'var(--zx-elevated)', borderRadius: 'var(--zx-radius-surface)', overflowX: 'auto', fontSize: '0.875rem', fontFamily: 'monospace', border: '1px solid var(--zx-border)', lineHeight: 1.7 }}>
{`// app/theme/zenix.ts
import type { ThemeConfig } from '@zenixui/core';

export const themeConfig = {
  name: 'My App',
  base: 'zenix',
  radius: 'md',
  motion: 'standard',
  density: 'comfortable',
  typography: { heading: 'inter', body: 'inter' },
  palette: {
    primary: '#6366f1',
    background: '#09090b',
    surface: '#18181b',
    textPrimary: '#fafafa',
  },
} satisfies ThemeConfig;`}
      </pre>

      <h2 style={{ fontSize: '2rem', fontWeight: 700, margin: '0 0 1rem', letterSpacing: '-0.02em' }}>5. Install a Blueprint</h2>
      <pre style={{ margin: '0 0 1rem', padding: '1.5rem', background: 'var(--zx-elevated)', borderRadius: 'var(--zx-radius-surface)', overflowX: 'auto', fontSize: '0.875rem', fontFamily: 'monospace', border: '1px solid var(--zx-border)' }}>
{`pnpm dlx zenix-ui add zenix-landing --config ./zenix-theme.json`}
      </pre>
      <pre style={{ margin: '0 0 3rem', padding: '1.5rem', background: 'var(--zx-elevated)', borderRadius: 'var(--zx-radius-surface)', overflowX: 'auto', fontSize: '0.875rem', fontFamily: 'monospace', border: '1px solid var(--zx-border)', lineHeight: 1.7 }}>
{`// app/routes/_index.tsx
import { ZenixLanding } from '~/blueprints/zenix-landing';

export default function Index() {
  return <ZenixLanding />;
}`}
      </pre>

      <h2 style={{ fontSize: '2rem', fontWeight: 700, margin: '0 0 1rem', letterSpacing: '-0.02em' }}>Common Mistakes to Avoid</h2>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '3rem' }}>
        {[
          { mistake: 'Importing CSS directly with import statement instead of ?url', fix: 'Remix requires CSS to be served via the links() export. Use import styles from "...css?url" and return it from links().' },
          { mistake: 'Wrapping the entire <html> in Experience', fix: 'Wrap only the <Outlet /> (body content). Wrapping <html> can cause hydration issues with Remix Meta/Links.' },
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

      {/* Featured Blueprints */}
      <h2 style={{ fontSize: '2rem', fontWeight: 700, margin: '0 0 1rem', letterSpacing: '-0.02em' }}>Popular Remix Blueprints</h2>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1rem', marginBottom: '3rem' }}>
        {[...landingBlueprints.slice(0, 2), ...dashboardBlueprints.slice(0, 2)].map(bp => (
          <Link key={bp.id} href={`/blueprints/${bp.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
            <Surface variant="card" style={{ padding: 0, overflow: 'hidden', border: '1px solid var(--zx-elevated)', transition: 'transform 0.2s' }}>
              <div style={{ height: '120px', background: 'var(--zx-elevated)', backgroundImage: `url(${bp.previewImage})`, backgroundSize: 'cover', backgroundPosition: 'top center' }} />
              <div style={{ padding: '1rem' }}>
                <div style={{ fontSize: '0.7rem', fontWeight: 600, textTransform: 'uppercase', opacity: 0.4, marginBottom: '0.25rem' }}>{bp.category}</div>
                <div style={{ fontWeight: 600, fontSize: '0.95rem' }}>{bp.title}</div>
              </div>
            </Surface>
          </Link>
        ))}
      </div>

      <Surface variant="card" style={{ padding: '3rem', border: '1px solid var(--zx-elevated)', textAlign: 'center', borderRadius: 'var(--zx-radius-overlay)' }}>
        <h2 style={{ fontSize: '1.75rem', fontWeight: 700, margin: '0 0 1rem' }}>Ship your Remix app faster</h2>
        <p style={{ opacity: 0.7, margin: '0 auto 2rem', maxWidth: '500px', lineHeight: 1.6 }}>
          Customize your theme visually, get the CLI command, and drop the blueprint into your route.
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
