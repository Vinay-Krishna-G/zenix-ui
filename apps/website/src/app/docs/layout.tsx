import Link from 'next/link';

export default function DocsLayout({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ display: 'flex', minHeight: '100vh', maxWidth: '1400px', margin: '0 auto' }}>
      {/* Sidebar */}
      <aside style={{ width: '250px', borderRight: '1px solid var(--zx-elevated)', padding: '3rem 2rem' }}>
        <h3 style={{ fontSize: '0.875rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em', opacity: 0.5, marginBottom: '1.5rem' }}>
          Overview
        </h3>
        <nav style={{ display: 'flex', flexDirection: 'column', gap: '1rem', fontSize: '1rem', fontWeight: 500, marginBottom: '3rem' }}>
          <Link href="/docs" style={{ color: 'var(--zx-primary)', textDecoration: 'none', opacity: 0.8 }}>Getting Started</Link>
          <Link href="/docs/cli" style={{ color: 'var(--zx-primary)', textDecoration: 'none', opacity: 0.8 }}>CLI (npx zenix-ui)</Link>
          <Link href="/docs/customization" style={{ color: 'var(--zx-primary)', textDecoration: 'none', opacity: 0.8 }}>Customization</Link>
        </nav>

        <h3 style={{ fontSize: '0.875rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em', opacity: 0.5, marginBottom: '1.5rem' }}>
          Reference
        </h3>
        <nav style={{ display: 'flex', flexDirection: 'column', gap: '1rem', fontSize: '1rem', fontWeight: 500 }}>
          <Link href="/themes" style={{ color: 'var(--zx-primary)', textDecoration: 'none', opacity: 0.8 }}>Themes</Link>
          <Link href="/experiences" style={{ color: 'var(--zx-primary)', textDecoration: 'none', opacity: 0.8 }}>Experiences</Link>
          <Link href="/docs/components" style={{ color: 'var(--zx-primary)', textDecoration: 'none', opacity: 0.8 }}>Components</Link>
        </nav>
      </aside>

      {/* Main Content */}
      <main style={{ flex: 1, padding: '3rem 4rem', maxWidth: '800px' }}>
        {children}
      </main>
    </div>
  );
}
