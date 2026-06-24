import Link from 'next/link';

export default function NotFound() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '80vh', textAlign: 'center', padding: '2rem' }}>
      <h1 style={{ fontSize: '6rem', fontWeight: 800, margin: '0 0 1rem', letterSpacing: '-0.05em', background: 'linear-gradient(to right, var(--zx-primary), var(--zx-primary-light))', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
        404
      </h1>
      <h2 style={{ fontSize: '2rem', fontWeight: 600, margin: '0 0 1.5rem', letterSpacing: '-0.02em' }}>
        Experience Not Found
      </h2>
      <p style={{ fontSize: '1.125rem', opacity: 0.7, maxWidth: '500px', margin: '0 auto 3rem', lineHeight: 1.6 }}>
        We couldn't find the page or blueprint you were looking for. It might have been moved or removed from the registry.
      </p>
      <div style={{ display: 'flex', gap: '1rem' }}>
        <Link href="/" style={{ padding: '0.75rem 1.5rem', background: 'var(--zx-primary)', color: 'var(--zx-background)', textDecoration: 'none', borderRadius: 'var(--zx-radius-sm)', fontWeight: 600 }}>
          Return Home
        </Link>
        <Link href="/blueprints" style={{ padding: '0.75rem 1.5rem', background: 'var(--zx-elevated)', color: 'inherit', textDecoration: 'none', borderRadius: 'var(--zx-radius-sm)', fontWeight: 600 }}>
          Browse Experiences
        </Link>
      </div>
    </div>
  );
}
