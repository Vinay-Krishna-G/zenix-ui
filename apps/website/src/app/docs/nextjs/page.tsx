import { Metadata } from 'next';
import Link from 'next/link';
import { Surface, Button } from '@zenixui/components';
import { getBlueprintsByCategory } from '@zenixui/blueprints';

export const metadata: Metadata = {
  title: 'ZenixUI with Next.js — Installation & Setup Guide',
  description: 'Step-by-step guide to installing ZenixUI blueprints in a Next.js App Router project. Covers layout setup, theme config, the Experience provider, and CLI usage.',
};

export default function NextjsDocsPage() {
  const dashboardBlueprints = getBlueprintsByCategory('dashboard').filter(bp => bp.supportedFrameworks.includes('nextjs'));
  const landingBlueprints = getBlueprintsByCategory('landing').filter(bp => bp.supportedFrameworks.includes('nextjs'));

  return (
    <div style={{ maxWidth: '800px' }}>
      <div style={{ marginBottom: '1rem', display: 'flex', gap: '0.5rem', alignItems: 'center', fontSize: '0.875rem', opacity: 0.6 }}>
        <Link href="/docs" style={{ color: 'inherit', textDecoration: 'none' }}>Docs</Link>
        <span>→</span>
        <span>Next.js</span>
      </div>

      <h1 style={{ fontSize: '3rem', fontWeight: 800, margin: '0 0 1rem', letterSpacing: '-0.04em', lineHeight: 1.1 }}>
        ZenixUI with Next.js
      </h1>
      <p style={{ fontSize: '1.25rem', opacity: 0.7, lineHeight: 1.7, marginBottom: '3rem' }}>
        Next.js App Router is the recommended framework for ZenixUI. Server Components, route groups for auth boundaries, and Suspense streaming all integrate cleanly with the ZenixUI blueprint architecture. This guide covers everything from installation to deploying your first themed blueprint.
      </p>

      {/* Why Next.js */}
      <h2 style={{ fontSize: '2rem', fontWeight: 700, margin: '0 0 1rem', letterSpacing: '-0.02em' }}>Why Next.js + ZenixUI?</h2>
      <p style={{ opacity: 0.8, lineHeight: 1.7, marginBottom: '1rem' }}>
        ZenixUI blueprints are designed as complete page experiences — not atomic components. Next.js App Router is the natural host because of how route groups let you separate auth layouts from dashboard layouts without URL pollution. The <code style={{ background: 'var(--zx-elevated)', padding: '0.15rem 0.4rem', borderRadius: '4px' }}>Experience</code> provider wraps the entire app at the root layout level, applying your theme system via CSS custom properties — which means zero hydration mismatch and zero flash of unstyled content.
      </p>
      <p style={{ opacity: 0.8, lineHeight: 1.7, marginBottom: '3rem' }}>
        React Server Components handle data fetching close to the source. The ZenixUI blueprint components are pure presentational — they receive props and render. This makes them trivially composable with RSC data fetching at any nesting depth.
      </p>

      {/* Installation */}
      <h2 style={{ fontSize: '2rem', fontWeight: 700, margin: '0 0 1rem', letterSpacing: '-0.02em' }}>1. Install Dependencies</h2>
      <p style={{ opacity: 0.8, lineHeight: 1.7, marginBottom: '1rem' }}>
        Start with a fresh Next.js project or use an existing one. Install the ZenixUI packages:
      </p>
      <pre style={{ margin: '0 0 1rem', padding: '1.5rem', background: 'var(--zx-elevated)', borderRadius: 'var(--zx-radius-surface)', overflowX: 'auto', fontSize: '0.875rem', fontFamily: 'monospace', border: '1px solid var(--zx-border)' }}>
{`# npm
npm install @zenixui/react @zenixui/core @zenixui/components

# pnpm
pnpm add @zenixui/react @zenixui/core @zenixui/components

# yarn
yarn add @zenixui/react @zenixui/core @zenixui/components`}
      </pre>
      <p style={{ opacity: 0.7, lineHeight: 1.7, marginBottom: '3rem', fontSize: '0.9rem' }}>
        <strong>@zenixui/core</strong> — the theme engine and CSS variables. <strong>@zenixui/react</strong> — the Experience provider. <strong>@zenixui/components</strong> — optional primitive components (Button, Surface, Input, Badge).
      </p>

      {/* Root Layout Setup */}
      <h2 style={{ fontSize: '2rem', fontWeight: 700, margin: '0 0 1rem', letterSpacing: '-0.02em' }}>2. Wrap Your Root Layout</h2>
      <p style={{ opacity: 0.8, lineHeight: 1.7, marginBottom: '1rem' }}>
        The <code style={{ background: 'var(--zx-elevated)', padding: '0.15rem 0.4rem', borderRadius: '4px' }}>Experience</code> provider must sit at the root of your component tree, inside <code style={{ background: 'var(--zx-elevated)', padding: '0.15rem 0.4rem', borderRadius: '4px' }}>{'<body>'}</code>. It resolves the theme config and injects CSS variables — every blueprint component downstream reads from those variables.
      </p>
      <pre style={{ margin: '0 0 1rem', padding: '1.5rem', background: 'var(--zx-elevated)', borderRadius: 'var(--zx-radius-surface)', overflowX: 'auto', fontSize: '0.875rem', fontFamily: 'monospace', border: '1px solid var(--zx-border)', lineHeight: 1.7 }}>
{`// app/layout.tsx
import type { Metadata } from 'next';
import { Experience } from '@zenixui/react';
import { themeConfig } from '@/theme/zenix';
import '@zenixui/core/dist/index.css';

export const metadata: Metadata = {
  title: 'My App',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Experience theme={themeConfig}>
          {children}
        </Experience>
      </body>
    </html>
  );
}`}
      </pre>
      <p style={{ opacity: 0.7, lineHeight: 1.7, marginBottom: '3rem', fontSize: '0.9rem' }}>
        Note: <code style={{ background: 'var(--zx-elevated)', padding: '0.15rem 0.4rem', borderRadius: '4px' }}>{'@zenixui/core/dist/index.css'}</code> must be imported exactly once at the root. It defines all CSS custom property namespaces.
      </p>

      {/* Theme Config */}
      <h2 style={{ fontSize: '2rem', fontWeight: 700, margin: '0 0 1rem', letterSpacing: '-0.02em' }}>3. Create Your Theme Config</h2>
      <p style={{ opacity: 0.8, lineHeight: 1.7, marginBottom: '1rem' }}>
        Create a <code style={{ background: 'var(--zx-elevated)', padding: '0.15rem 0.4rem', borderRadius: '4px' }}>theme/zenix.ts</code> file in your project root. You can generate this file using the{' '}
        <Link href="/studio" style={{ color: 'var(--zx-primary)', textDecoration: 'none', fontWeight: 600 }}>Theme Studio</Link> — configure your palette, radius, and motion, then click Download .ts.
      </p>
      <pre style={{ margin: '0 0 1rem', padding: '1.5rem', background: 'var(--zx-elevated)', borderRadius: 'var(--zx-radius-surface)', overflowX: 'auto', fontSize: '0.875rem', fontFamily: 'monospace', border: '1px solid var(--zx-border)', lineHeight: 1.7 }}>
{`// theme/zenix.ts
import type { ThemeConfig } from '@zenixui/core';

export const themeConfig = {
  name: 'My Theme',
  base: 'zenix',         // 'zenix' | 'ocean' | 'midnight' | 'autumn'
  radius: 'md',          // 'none' | 'sm' | 'md' | 'lg' | 'xl' | 'full'
  motion: 'standard',    // 'none' | 'minimal' | 'standard' | 'expressive'
  density: 'comfortable',// 'compact' | 'comfortable' | 'spacious'
  typography: {
    heading: 'inter',
    body: 'inter',
  },
  palette: {
    primary: '#6366f1',
    primaryHover: '#4f46e5',
    background: '#09090b',
    surface: '#18181b',
    textPrimary: '#fafafa',
    // ... full palette from Theme Studio
  },
} satisfies ThemeConfig;`}
      </pre>
      <p style={{ opacity: 0.7, lineHeight: 1.7, marginBottom: '3rem', fontSize: '0.9rem' }}>
        The <code style={{ background: 'var(--zx-elevated)', padding: '0.15rem 0.4rem', borderRadius: '4px' }}>satisfies ThemeConfig</code> keyword validates your config against the full schema at build time — you get a TypeScript error immediately if any required key is missing.
      </p>

      {/* Install a Blueprint */}
      <h2 style={{ fontSize: '2rem', fontWeight: 700, margin: '0 0 1rem', letterSpacing: '-0.02em' }}>4. Install a Blueprint via CLI</h2>
      <p style={{ opacity: 0.8, lineHeight: 1.7, marginBottom: '1rem' }}>
        Blueprints are complete page templates that copy directly into your project. The CLI places the source code in your repo — you own it completely. Run from your project root:
      </p>
      <pre style={{ margin: '0 0 1rem', padding: '1.5rem', background: 'var(--zx-elevated)', borderRadius: 'var(--zx-radius-surface)', overflowX: 'auto', fontSize: '0.875rem', fontFamily: 'monospace', border: '1px solid var(--zx-border)' }}>
{`# Install the Zenix Dashboard blueprint
pnpm dlx zenix-ui add zenix-dashboard --config ./zenix-theme.json

# Or target a different blueprint
pnpm dlx zenix-ui add midnight-portfolio --config ./zenix-theme.json`}
      </pre>
      <p style={{ opacity: 0.7, lineHeight: 1.7, marginBottom: '1rem', fontSize: '0.9rem' }}>
        The CLI will scaffold the blueprint into <code style={{ background: 'var(--zx-elevated)', padding: '0.15rem 0.4rem', borderRadius: '4px' }}>src/blueprints/</code> and print the import path. Then import and render it anywhere in your Next.js app:
      </p>
      <pre style={{ margin: '0 0 3rem', padding: '1.5rem', background: 'var(--zx-elevated)', borderRadius: 'var(--zx-radius-surface)', overflowX: 'auto', fontSize: '0.875rem', fontFamily: 'monospace', border: '1px solid var(--zx-border)', lineHeight: 1.7 }}>
{`// app/dashboard/page.tsx
import { ZenixDashboard } from '@/blueprints/zenix-dashboard';

export default function DashboardPage() {
  return <ZenixDashboard />;
}`}
      </pre>

      {/* Route Groups */}
      <h2 style={{ fontSize: '2rem', fontWeight: 700, margin: '0 0 1rem', letterSpacing: '-0.02em' }}>5. Route Groups for Auth Boundaries</h2>
      <p style={{ opacity: 0.8, lineHeight: 1.7, marginBottom: '1rem' }}>
        ZenixUI dashboard blueprints include a shell layout — sidebar, header, content area. The recommended approach is to use a Next.js App Router route group to apply that shell only to authenticated routes:
      </p>
      <pre style={{ margin: '0 0 1rem', padding: '1.5rem', background: 'var(--zx-elevated)', borderRadius: 'var(--zx-radius-surface)', overflowX: 'auto', fontSize: '0.875rem', fontFamily: 'monospace', border: '1px solid var(--zx-border)', lineHeight: 1.7 }}>
{`app/
  (auth)/
    layout.tsx          // Minimal layout, no sidebar
    login/page.tsx
    register/page.tsx
  (dashboard)/
    layout.tsx          // DashboardShell, session check
    page.tsx            // Overview
    settings/page.tsx`}
      </pre>
      <pre style={{ margin: '0 0 3rem', padding: '1.5rem', background: 'var(--zx-elevated)', borderRadius: 'var(--zx-radius-surface)', overflowX: 'auto', fontSize: '0.875rem', fontFamily: 'monospace', border: '1px solid var(--zx-border)', lineHeight: 1.7 }}>
{`// app/(dashboard)/layout.tsx
import { redirect } from 'next/navigation';
import { getSession } from '@/lib/auth';

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getSession();
  if (!session) redirect('/login');

  return <>{children}</>;
}`}
      </pre>

      {/* Common Mistakes */}
      <h2 style={{ fontSize: '2rem', fontWeight: 700, margin: '0 0 1rem', letterSpacing: '-0.02em' }}>Common Mistakes to Avoid</h2>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '3rem' }}>
        {[
          { mistake: 'Importing CSS inside a Server Component', fix: 'Import @zenixui/core/dist/index.css only in app/layout.tsx (the root layout).' },
          { mistake: 'Adding "use client" to a blueprint just to use theme hooks', fix: 'Theme variables are CSS — no client JS needed. Use var(--zx-primary) directly in style props.' },
          { mistake: 'Installing multiple blueprint themes in separate providers', fix: 'One Experience provider per app. Swap the theme config to change the full design system.' },
          { mistake: 'Hardcoding colors inside blueprint components', fix: 'Always reference CSS variables (var(--zx-primary), etc.) so themes work correctly.' },
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
      <h2 style={{ fontSize: '2rem', fontWeight: 700, margin: '0 0 1rem', letterSpacing: '-0.02em' }}>Featured Next.js Blueprints</h2>
      <p style={{ opacity: 0.7, lineHeight: 1.7, marginBottom: '1.5rem' }}>All blueprints below support Next.js App Router out of the box:</p>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1rem', marginBottom: '3rem' }}>
        {[...dashboardBlueprints.slice(0, 2), ...landingBlueprints.slice(0, 2)].map(bp => (
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
      <Surface variant="card" style={{ padding: '3rem', border: '1px solid var(--zx-elevated)', textAlign: 'center', borderRadius: 'var(--zx-radius-overlay)' }}>
        <h2 style={{ fontSize: '1.75rem', fontWeight: 700, margin: '0 0 1rem' }}>Ready to install your first blueprint?</h2>
        <p style={{ opacity: 0.7, margin: '0 auto 2rem', maxWidth: '500px', lineHeight: 1.6 }}>
          Open the Theme Studio, customize your palette and motion profile, then copy the generated install command.
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
