import type { Metadata } from 'next';
import { Providers } from '../components/Providers';
import './globals.css';

export const metadata: Metadata = {
  title: 'ZenixUI',
  description: 'Build Entire Experiences, Not Just Components.',
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
                <a href="/components" style={{ color: 'inherit', textDecoration: 'none', opacity: 0.8 }}>Components</a>
              </div>
            </nav>
            <main style={{ flex: 1, position: 'relative' }}>
              {children}
            </main>
          </div>
        </Providers>
      </body>
    </html>
  );
}
