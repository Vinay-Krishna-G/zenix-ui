import { Metadata } from 'next';
import { Surface, Button } from '@zenixui/components';
import Link from 'next/link';
import { blueprints } from '@zenixui/blueprints';
import { InteractiveCliDemo } from '@/components/home/InteractiveCliDemo';

export const metadata: Metadata = {
  title: 'ZenixUI | Build Entire Experiences, Not Components',
  description: 'ZenixUI is a complete experience ecosystem for React. Browse production-ready blueprints, customize themes visually, and install via CLI. Not a component library.',
};

export default function Home() {
  const featuredThemes = [
    { id: 'zenix', name: 'Zenix', tagline: 'Premium SaaS', color: '#6366f1' },
    { id: 'ocean', name: 'Ocean', tagline: 'Creative & Fluid', color: '#0ea5e9' },
    { id: 'midnight', name: 'Midnight', tagline: 'Calm Dark Mode', color: '#22c55e' },
    { id: 'autumn', name: 'Autumn', tagline: 'Warm Storytelling', color: '#d97706' }
  ];

  return (
    <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '8rem 2rem 10rem' }}>
      
      {/* 1. HERO - What is this? */}
      <section style={{ textAlign: 'center', marginBottom: '8rem' }}>
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', padding: '0.5rem 1rem', background: 'var(--zx-elevated)', borderRadius: 'var(--zx-radius-round)', fontSize: '0.875rem', fontWeight: 600, marginBottom: '2rem', border: '1px solid var(--zx-border)' }}>
          <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'var(--zx-primary)', display: 'inline-block' }} />
          Theme Engine · Experience Library · Blueprint Registry · CLI
        </div>

        <h1 style={{ fontSize: '5rem', fontWeight: 800, letterSpacing: '-0.02em', lineHeight: 1.05, marginBottom: '2rem', margin: '0 auto', maxWidth: '896px' }}>
          Build Entire Experiences.<br/>
          <span style={{ opacity: 0.3 }}>Not Components.</span>
        </h1>
        <p style={{ fontSize: '1.5rem', opacity: 0.8, margin: '2rem auto 2.5rem', maxWidth: '640px', lineHeight: 1.5, letterSpacing: '-0.01em' }}>
          An experience ecosystem for React. Install independent sections or complete pages via CLI. You own the source code.
        </p>

        <p style={{ fontSize: '1.125rem', opacity: 0.5, margin: '0 auto 3rem', maxWidth: '576px', fontStyle: 'italic', lineHeight: 1.6 }}>
          Like Tailwind UI meets Vercel templates — but with full theme generation and a CLI installer.
        </p>

        <div style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link href="/blueprints" style={{ textDecoration: 'none' }}>
            <Button size="lg" style={{ fontWeight: 600 }}>Browse Gallery</Button>
          </Link>
          <Link href="/studio" style={{ textDecoration: 'none' }}>
            <Button variant="glass" size="lg" style={{ fontWeight: 600 }}>Open Theme Studio</Button>
          </Link>
        </div>
      </section>

      {/* 2. INTERACTIVE CLI DEMO - How does it work? */}
      <section style={{ marginBottom: '10rem' }}>
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <h2 style={{ fontSize: '3rem', fontWeight: 700, margin: '0 0 1rem', letterSpacing: '-0.03em' }}>
            Install exactly what you need.
          </h2>
          <p style={{ opacity: 0.6, fontSize: '1.25rem', margin: 0 }}>
            Pick a section, pick a design language, generate the command.
          </p>
        </div>
        
        <InteractiveCliDemo />
      </section>

      {/* 3. SECTION LIBRARY - What do I get? (Sections) */}
      <section style={{ marginBottom: '10rem' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '2.5rem' }}>
          <div>
            <h2 style={{ fontSize: '2.5rem', fontWeight: 700, margin: '0 0 0.5rem', letterSpacing: '-0.03em' }}>
              Section Library
            </h2>
            <p style={{ opacity: 0.6, fontSize: '1.25rem', margin: 0 }}>
              Independently installable architectural blocks.
            </p>
          </div>
          <Link href="/sections" style={{ fontWeight: 600, color: 'var(--zx-primary)', textDecoration: 'none', opacity: 0.8, whiteSpace: 'nowrap', transition: 'opacity 0.2s ease' }}>
            Browse All Sections →
          </Link>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '2rem' }}>
          {[
            { title: 'Headers', count: 4 },
            { title: 'Footers', count: 4 },
            { title: 'Heroes', count: 0 },
            { title: 'Pricing', count: 0 }
          ].map((cat) => (
            <Link key={cat.title} href="/sections" style={{ textDecoration: 'none', color: 'inherit' }}>
              <Surface variant="card" style={{ padding: '2.5rem 1.5rem', border: '1px solid var(--zx-border)', transition: 'transform 0.15s ease, border-color 0.15s ease', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
                <h3 style={{ fontSize: '1.25rem', fontWeight: 700, margin: '0 0 0.5rem' }}>{cat.title}</h3>
                <p style={{ opacity: 0.6, fontSize: '1rem', margin: 0, fontWeight: 500 }}>{cat.count} available</p>
              </Surface>
            </Link>
          ))}
        </div>
      </section>

      {/* 4. BLUEPRINT GALLERY - What do I get? (Complete Pages) */}
      <section style={{ marginBottom: '10rem' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '2.5rem' }}>
          <div>
            <h2 style={{ fontSize: '2.5rem', fontWeight: 700, margin: '0 0 0.5rem', letterSpacing: '-0.03em' }}>
              Blueprint Gallery
            </h2>
            <p style={{ opacity: 0.6, fontSize: '1.25rem', margin: 0 }}>
              Complete page experiences ready to ship.
            </p>
          </div>
          <Link href="/blueprints" style={{ fontWeight: 600, color: 'var(--zx-primary)', textDecoration: 'none', opacity: 0.8, whiteSpace: 'nowrap', transition: 'opacity 0.2s ease' }}>
            View all Blueprints →
          </Link>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '2rem' }}>
          {['Landing Pages', 'Portfolios', 'Dashboards', 'Blogs'].map((category) => {
            const idMap: Record<string, string> = { 'Landing Pages': 'landing', 'Portfolios': 'portfolio', 'Dashboards': 'dashboard', 'Blogs': 'blog' };
            const topBp = blueprints.find(bp => bp.category === idMap[category]);
            const count = blueprints.filter(bp => bp.category === idMap[category]).length;
            return (
              <Link key={category} href={`/blueprints?category=${idMap[category]}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                <Surface variant="card" style={{ padding: '1rem', border: '1px solid var(--zx-border)', height: '100%', transition: 'transform 0.15s ease, border-color 0.15s ease' }}>
                  <div style={{ width: '100%', height: '160px', background: 'var(--zx-surface)', borderRadius: 'calc(var(--zx-radius-sm) - 2px)', marginBottom: '1.5rem', backgroundImage: `url(${topBp?.previewImage})`, backgroundSize: 'cover', backgroundPosition: 'top center' }} />
                  <h3 style={{ fontSize: '1.25rem', fontWeight: 600, margin: '0 0 0.5rem', padding: '0 0.5rem' }}>{category}</h3>
                  <p style={{ opacity: 0.6, fontSize: '1rem', margin: 0, padding: '0 0.5rem' }}>{count} blueprints →</p>
                </Surface>
              </Link>
            );
          })}
        </div>
      </section>

      {/* 5. DESIGN LANGUAGES & STUDIO - Can I customize? */}
      <section style={{ marginBottom: '10rem' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '3.5rem' }}>
          <div>
            <h2 style={{ fontSize: '2.5rem', fontWeight: 700, margin: '0 0 0.5rem', letterSpacing: '-0.03em' }}>Design Languages</h2>
            <p style={{ opacity: 0.6, margin: 0, fontSize: '1.25rem' }}>Switch complete aesthetic recipes in one line.</p>
          </div>
          <Link href="/themes" style={{ fontWeight: 600, color: 'var(--zx-primary)', textDecoration: 'none', opacity: 0.8, transition: 'opacity 0.2s ease' }}>
            Explore All Languages →
          </Link>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '2rem' }}>
          {featuredThemes.map(theme => (
            <Link key={theme.id} href={`/studio`} style={{ textDecoration: 'none', color: 'inherit' }}>
              <Surface variant="card" style={{ padding: '2.5rem', display: 'flex', alignItems: 'center', gap: '2.5rem', border: '1px solid var(--zx-border)', transition: 'transform 0.15s ease, border-color 0.15s ease' }}>
                <div style={{ width: '80px', height: '80px', borderRadius: theme.id === 'midnight' ? '0px' : theme.id === 'ocean' ? '50%' : '16px', background: theme.color, flexShrink: 0 }} />
                <div>
                  <h3 style={{ fontSize: '1.5rem', fontWeight: 700, margin: '0 0 0.5rem' }}>{theme.name}</h3>
                  <p style={{ opacity: 0.6, margin: '0 0 1rem', fontSize: '1rem' }}>{theme.tagline}</p>
                  <span style={{ fontSize: '1rem', fontWeight: 600, color: theme.color }}>
                    Try in Theme Studio →
                  </span>
                </div>
              </Surface>
            </Link>
          ))}
        </div>
      </section>

      {/* BOTTOM CTA */}
      <section>
        <Surface variant="card" style={{ padding: '6rem 4rem', textAlign: 'center', border: '1px solid var(--zx-border)', borderRadius: 'var(--zx-radius-lg)', background: 'var(--zx-surface)' }}>
          <h2 style={{ fontSize: '3.5rem', fontWeight: 800, margin: '0 0 1.5rem', letterSpacing: '-0.04em', lineHeight: 1.1 }}>
            Ready to ship something real?
          </h2>
          <p style={{ opacity: 0.7, margin: '0 auto 3rem', maxWidth: '576px', fontSize: '1.25rem', lineHeight: 1.6 }}>
            Pick a section, customize it in the studio, get the CLI command. Ship in minutes.
          </p>
          <div style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '3rem' }}>
            <Link href="/blueprints" style={{ textDecoration: 'none' }}>
              <Button size="lg" style={{ fontWeight: 600 }}>Browse Gallery</Button>
            </Link>
            <Link href="/docs" style={{ textDecoration: 'none' }}>
              <Button variant="glass" size="lg" style={{ fontWeight: 600, border: '1px solid var(--zx-border)', color: 'var(--zx-primary)' }}>Read the Docs</Button>
            </Link>
          </div>
          <code style={{ fontSize: '1rem', opacity: 0.6, fontFamily: 'monospace', background: 'var(--zx-elevated)', padding: '0.5rem 1rem', borderRadius: '4px' }}>
            npx zenix-ui add dashboard/header
          </code>
        </Surface>
      </section>

    </div>
  );
}
