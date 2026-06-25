import type { Metadata } from 'next';
import { Analytics } from '@vercel/analytics/react';
import { Providers } from '../components/Providers';
import './globals.css';

export const metadata: Metadata = {
  title: 'ZenixUI',
  description: '30+ complete, production-ready page experiences for React. Customize visually in the Theme Studio. Install with one CLI command. Not a component library.',
  metadataBase: new URL('https://zenixui.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    url: 'https://zenixui.com',
    title: 'ZenixUI — Build Entire Experiences, Not Components',
    description: '30+ production-ready React blueprints. Customize theme visually. Install via CLI. Like Tailwind UI meets Vercel templates — but with full theme generation.',
    siteName: 'ZenixUI',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@zenixui',
    creator: '@zenixui',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body style={{ margin: 0, padding: 0 }}>
        <Providers>
          <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
            {/* Minimal Global Nav */}
            <nav style={{ padding: '1.5rem 2rem', display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid var(--zx-elevated)', position: 'relative', zIndex: 100, background: 'var(--zx-background)' }}>
              <div style={{ fontWeight: 700, fontSize: '1.25rem', letterSpacing: '-0.02em' }}>
                ZenixUI
              </div>
              <div style={{ display: 'flex', gap: '2rem', fontSize: '0.875rem', fontWeight: 600 }}>
                <a href="/themes" style={{ color: 'inherit', textDecoration: 'none', opacity: 0.8 }}>Themes</a>
                <a href="/blueprints" style={{ color: 'inherit', textDecoration: 'none', opacity: 0.8 }}>Blueprints</a>
                <a href="/studio" style={{ color: 'inherit', textDecoration: 'none', opacity: 0.8 }}>Studio</a>
                <a href="/learn" style={{ color: 'inherit', textDecoration: 'none', opacity: 0.8 }}>Learn</a>
                <a href="/docs" style={{ color: 'inherit', textDecoration: 'none', opacity: 0.8 }}>Docs</a>
                <a href="/roadmap" style={{ color: 'inherit', textDecoration: 'none', opacity: 0.8 }}>Roadmap</a>
              </div>
            </nav>
            <main style={{ flex: 1, position: 'relative' }}>
              {children}
            </main>
          </div>
        </Providers>
        <Analytics />
      </body>
    </html>
  );
}
