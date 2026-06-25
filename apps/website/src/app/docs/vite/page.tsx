import { Metadata } from 'next';
import Link from 'next/link';
import { Surface, Button } from '@zenixui/components';
import { getBlueprintsByCategory } from '@zenixui/blueprints';

export const metadata: Metadata = {
  title: 'ZenixUI with Vite React — Installation & Setup Guide',
  description: 'How to install and configure ZenixUI blueprints in a Vite React project. Covers main.tsx setup, theme config, the Experience provider, and CLI usage for fast portfolio and SPA projects.',
};

export default function ViteDocsPage() {
  const portfolioBlueprints = getBlueprintsByCategory('portfolio').filter(bp => bp.supportedFrameworks.includes('vite'));
  const landingBlueprints = getBlueprintsByCategory('landing').filter(bp => bp.supportedFrameworks.includes('vite'));

  return (
    <div style={{ maxWidth: '800px' }}>
      <div style={{ marginBottom: '1rem', display: 'flex', gap: '0.5rem', alignItems: 'center', fontSize: '0.875rem', opacity: 0.6 }}>
        <Link href="/docs" style={{ color: 'inherit', textDecoration: 'none' }}>Docs</Link>
        <span>→</span>
        <span>Vite</span>
      </div>

      <h1 style={{ fontSize: '3rem', fontWeight: 800, margin: '0 0 1rem', letterSpacing: '-0.04em', lineHeight: 1.1 }}>
        ZenixUI with Vite React
      </h1>
      <p style={{ fontSize: '1.25rem', opacity: 0.7, lineHeight: 1.7, marginBottom: '3rem' }}>
        Vite is the fastest option for portfolios, SPAs, and client-heavy applications. Sub-50ms HMR, native ESM, and zero configuration make it the best choice when you don't need SSR. ZenixUI blueprints integrate with Vite through a single provider in <code style={{ background: 'var(--zx-elevated)', padding: '0.15rem 0.4rem', borderRadius: '4px' }}>main.tsx</code>.
      </p>

      {/* When to Choose Vite */}
      <h2 style={{ fontSize: '2rem', fontWeight: 700, margin: '0 0 1rem', letterSpacing: '-0.02em' }}>When to Choose Vite over Next.js</h2>
      <p style={{ opacity: 0.8, lineHeight: 1.7, marginBottom: '1rem' }}>
        Vite is a pure SPA bundler — it doesn't generate server-side HTML. For SEO-critical pages (landing pages, blogs, marketing), this is a limitation. But for applications behind a login (dashboards, admin panels, tools) or for developer portfolios that lean on client-side animations, Vite is the better choice because:
      </p>
      <ul style={{ opacity: 0.8, lineHeight: 1.9, marginBottom: '3rem', paddingLeft: '1.5rem' }}>
        <li>Instant dev server startup regardless of project size</li>
        <li>No server runtime cost — deploy as a static site to Netlify, Vercel, Cloudflare Pages, or GitHub Pages</li>
        <li>Superior support for heavy client-side animation libraries (Framer Motion, GSAP, Three.js)</li>
        <li>Simpler mental model — one HTML shell, React handles all routing and rendering</li>
      </ul>

      {/* Installation */}
      <h2 style={{ fontSize: '2rem', fontWeight: 700, margin: '0 0 1rem', letterSpacing: '-0.02em' }}>1. Install Dependencies</h2>
      <p style={{ opacity: 0.8, lineHeight: 1.7, marginBottom: '1rem' }}>
        Start from a fresh Vite React TypeScript project or add to an existing one:
      </p>
      <pre style={{ margin: '0 0 1rem', padding: '1.5rem', background: 'var(--zx-elevated)', borderRadius: 'var(--zx-radius-sm)', overflowX: 'auto', fontSize: '0.875rem', fontFamily: 'monospace', border: '1px solid var(--zx-border)' }}>
{`# Create a new Vite project
npm create vite@latest my-portfolio -- --template react-ts
cd my-portfolio

# Add ZenixUI
npm install @zenixui/react @zenixui/core @zenixui/components`}
      </pre>

      {/* main.tsx Setup */}
      <h2 style={{ fontSize: '2rem', fontWeight: 700, margin: '0 0 1rem', letterSpacing: '-0.02em' }}>2. Wrap Root in main.tsx</h2>
      <p style={{ opacity: 0.8, lineHeight: 1.7, marginBottom: '1rem' }}>
        In Vite projects, <code style={{ background: 'var(--zx-elevated)', padding: '0.15rem 0.4rem', borderRadius: '4px' }}>src/main.tsx</code> is the entry point. Wrap your app with the <code style={{ background: 'var(--zx-elevated)', padding: '0.15rem 0.4rem', borderRadius: '4px' }}>Experience</code> provider here:
      </p>
      <pre style={{ margin: '0 0 1rem', padding: '1.5rem', background: 'var(--zx-elevated)', borderRadius: 'var(--zx-radius-sm)', overflowX: 'auto', fontSize: '0.875rem', fontFamily: 'monospace', border: '1px solid var(--zx-border)', lineHeight: 1.7 }}>
{`// src/main.tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import { Experience } from '@zenixui/react';
import { themeConfig } from './theme/zenix';
import '@zenixui/core/dist/index.css';
import App from './App';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Experience theme={themeConfig}>
      <App />
    </Experience>
  </React.StrictMode>
);`}
      </pre>

      {/* Theme Config */}
      <h2 style={{ fontSize: '2rem', fontWeight: 700, margin: '0 0 1rem', letterSpacing: '-0.02em' }}>3. Create Your Theme Config</h2>
      <p style={{ opacity: 0.8, lineHeight: 1.7, marginBottom: '1rem' }}>
        Create <code style={{ background: 'var(--zx-elevated)', padding: '0.15rem 0.4rem', borderRadius: '4px' }}>src/theme/zenix.ts</code>. Use the{' '}
        <Link href="/studio" style={{ color: 'var(--zx-primary)', textDecoration: 'none', fontWeight: 600 }}>Theme Studio</Link> to generate it visually, or write it manually:
      </p>
      <pre style={{ margin: '0 0 3rem', padding: '1.5rem', background: 'var(--zx-elevated)', borderRadius: 'var(--zx-radius-sm)', overflowX: 'auto', fontSize: '0.875rem', fontFamily: 'monospace', border: '1px solid var(--zx-border)', lineHeight: 1.7 }}>
{`// src/theme/zenix.ts
import type { ThemeConfig } from '@zenixui/core';

export const themeConfig = {
  name: 'Portfolio',
  base: 'midnight',   // Great for developer portfolios
  radius: 'none',        // Sharp edges = terminal aesthetic
  motion: 'standard',
  density: 'comfortable',
  typography: {
    heading: 'fira-code',
    body: 'inter',
  },
  palette: {
    primary: '#4ade80',
    background: '#000000',
    surface: '#0a0a0a',
    textPrimary: '#4ade80',
    // full palette from Theme Studio
  },
} satisfies ThemeConfig;`}
      </pre>

      {/* Install a Blueprint */}
      <h2 style={{ fontSize: '2rem', fontWeight: 700, margin: '0 0 1rem', letterSpacing: '-0.02em' }}>4. Install a Blueprint</h2>
      <pre style={{ margin: '0 0 1rem', padding: '1.5rem', background: 'var(--zx-elevated)', borderRadius: 'var(--zx-radius-sm)', overflowX: 'auto', fontSize: '0.875rem', fontFamily: 'monospace', border: '1px solid var(--zx-border)' }}>
{`pnpm dlx zenix-ui add midnight-portfolio --config ./zenix-theme.json`}
      </pre>
      <pre style={{ margin: '0 0 3rem', padding: '1.5rem', background: 'var(--zx-elevated)', borderRadius: 'var(--zx-radius-sm)', overflowX: 'auto', fontSize: '0.875rem', fontFamily: 'monospace', border: '1px solid var(--zx-border)', lineHeight: 1.7 }}>
{`// src/App.tsx
import { NightCityPortfolio } from './blueprints/midnight-portfolio';

export default function App() {
  return <NightCityPortfolio />;
}`}
      </pre>

      {/* React Router */}
      <h2 style={{ fontSize: '2rem', fontWeight: 700, margin: '0 0 1rem', letterSpacing: '-0.02em' }}>5. Adding Client-Side Routing</h2>
      <p style={{ opacity: 0.8, lineHeight: 1.7, marginBottom: '1rem' }}>
        For multi-page Vite apps, use React Router. The <code style={{ background: 'var(--zx-elevated)', padding: '0.15rem 0.4rem', borderRadius: '4px' }}>Experience</code> provider sits outside the router so the theme applies to every route:
      </p>
      <pre style={{ margin: '0 0 3rem', padding: '1.5rem', background: 'var(--zx-elevated)', borderRadius: 'var(--zx-radius-sm)', overflowX: 'auto', fontSize: '0.875rem', fontFamily: 'monospace', border: '1px solid var(--zx-border)', lineHeight: 1.7 }}>
{`// src/main.tsx
import { BrowserRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Experience theme={themeConfig}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Experience>
  </React.StrictMode>
);`}
      </pre>

      {/* Common Mistakes */}
      <h2 style={{ fontSize: '2rem', fontWeight: 700, margin: '0 0 1rem', letterSpacing: '-0.02em' }}>Common Mistakes to Avoid</h2>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '3rem' }}>
        {[
          { mistake: 'Forgetting to import @zenixui/core/dist/index.css', fix: 'Without the CSS import, all --zx-* variables are undefined and the UI breaks silently.' },
          { mistake: 'Placing the Experience provider inside a lazy-loaded route', fix: 'Always place Experience at the top of main.tsx, not inside a route component, to avoid context loss on remount.' },
          { mistake: 'Using Vite for an SEO-critical landing page', fix: 'Consider Astro or Next.js for pages that need Google indexing. Vite SPAs are not crawlable without prerendering.' },
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
      <h2 style={{ fontSize: '2rem', fontWeight: 700, margin: '0 0 1rem', letterSpacing: '-0.02em' }}>Popular Vite Blueprints</h2>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1rem', marginBottom: '3rem' }}>
        {[...portfolioBlueprints.slice(0, 2), ...landingBlueprints.slice(0, 2)].map(bp => (
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

      {/* CTA */}
      <Surface variant="card" style={{ padding: '3rem', border: '1px solid var(--zx-elevated)', textAlign: 'center', borderRadius: 'var(--zx-radius-lg)' }}>
        <h2 style={{ fontSize: '1.75rem', fontWeight: 700, margin: '0 0 1rem' }}>Build your portfolio in minutes</h2>
        <p style={{ opacity: 0.7, margin: '0 auto 2rem', maxWidth: '500px', lineHeight: 1.6 }}>
          Pick a blueprint, configure your theme in the Studio, and get the exact CLI command for Vite.
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
