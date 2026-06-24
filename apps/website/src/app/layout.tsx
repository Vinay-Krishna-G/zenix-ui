import type { Metadata } from 'next';
import { Analytics } from '@vercel/analytics/react';
import { Providers } from '../components/Providers';
import './globals.css';

export const metadata: Metadata = {
  title: 'ZenixUI',
  description: 'Build Entire Experiences, Not Just Components.',
  metadataBase: new URL('https://zenixui.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    url: 'https://zenixui.com',
    title: 'ZenixUI | The Experience Ecosystem',
    description: 'Instantly adopt complete, beautiful React design systems. Distribute full experiences, not atomic components.',
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
