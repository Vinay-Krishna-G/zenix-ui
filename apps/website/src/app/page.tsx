import { Metadata } from 'next';
import { Surface } from '@zenixui/components';
import { Experience } from '@zenixui/react';
import Link from 'next/link';
import { blueprints } from '@zenixui/blueprints';

export const metadata: Metadata = {
  title: 'ZenixUI | Build Entire Experiences, Not Components',
  description: 'ZenixUI is a complete experience ecosystem for React. Browse production-ready blueprints, customize themes visually, and install via CLI. Not a component library.',
};

export default function Home() {
  const featuredBlueprint = blueprints.find(bp => bp.id === 'night-city-portfolio');
  const FeaturedComponent = featuredBlueprint?.component;
  const featuredThemes = [
    { id: 'zenix', name: 'Zenix', tagline: 'Premium SaaS', color: '#6366f1' },
    { id: 'ocean', name: 'Ocean', tagline: 'Creative & Fluid', color: '#0ea5e9' },
    { id: 'night-city', name: 'Night City', tagline: 'Cyberpunk Developer', color: '#22c55e' },
    { id: 'autumn', name: 'Autumn', tagline: 'Warm Storytelling', color: '#d97706' }
  ];

  const HOW_IT_WORKS = [
    {
      step: '01',
      title: 'Browse Blueprints',
      desc: 'Choose from 30+ complete page experiences — dashboards, portfolios, landing pages, auth flows, and more.',
      href: '/blueprints',
      cta: 'Open Gallery →',
    },
    {
      step: '02',
      title: 'Customize in Studio',
      desc: 'Pick a palette, set radius and motion, choose your framework. The live preview updates instantly.',
      href: '/studio',
      cta: 'Open Studio →',
    },
    {
      step: '03',
      title: 'Generate Command',
      desc: 'Select your package manager. One click generates your exact CLI install command and framework setup code.',
      href: '/studio',
      cta: 'Generate →',
    },
    {
      step: '04',
      title: 'Install & Ship',
      desc: 'Run the command. The complete source code lands in your project. You own it. Customize freely.',
      href: '/docs',
      cta: 'Read Docs →',
    },
  ];

  return (
    <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '6rem 2rem 10rem' }}>
      
      {/* HERO */}
      <section style={{ textAlign: 'center', marginBottom: '6rem' }}>
        {/* Positioning badge */}
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', padding: '0.4rem 1rem', background: 'var(--zx-elevated)', borderRadius: 'var(--zx-radius-round)', fontSize: '0.8rem', fontWeight: 600, marginBottom: '2rem', border: '1px solid var(--zx-border)' }}>
          <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--zx-primary)', display: 'inline-block' }} />
          Theme Engine · Experience Library · Blueprint Registry · CLI
        </div>

        <h1 style={{ fontSize: '4.5rem', fontWeight: 800, letterSpacing: '-0.04em', lineHeight: 1.1, marginBottom: '1.5rem', marginInline: 'auto', maxWidth: '800px' }}>
          Build Entire Experiences.<br/>
          <span style={{ opacity: 0.4 }}>Not Components.</span>
        </h1>
        <p style={{ fontSize: '1.375rem', opacity: 0.65, margin: '0 auto 1.5rem', maxWidth: '580px', lineHeight: 1.6 }}>
          ZenixUI is not a component library. It's a complete ecosystem — production-ready blueprints, a visual theme engine, and a CLI that installs entire page experiences directly into your React project.
        </p>

        {/* Positioning differentiator */}
        <p style={{ fontSize: '1rem', opacity: 0.45, margin: '0 auto 3rem', maxWidth: '500px', fontStyle: 'italic' }}>
          Like Tailwind UI meets Vercel templates — but with full theme generation and a CLI installer.
        </p>

        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link href="/blueprints" style={{ padding: '1rem 2rem', background: 'var(--zx-primary)', color: 'var(--zx-background)', borderRadius: 'var(--zx-radius-sm)', fontWeight: 700, textDecoration: 'none', fontSize: '1.125rem' }}>
            Browse Blueprints
          </Link>
          <Link href="/studio" style={{ padding: '1rem 2rem', background: 'var(--zx-elevated)', color: 'var(--zx-primary)', borderRadius: 'var(--zx-radius-sm)', fontWeight: 700, textDecoration: 'none', fontSize: '1.125rem', border: '1px solid var(--zx-border)' }}>
            Open Theme Studio
          </Link>
        </div>
      </section>

      {/* HOW IT WORKS PIPELINE */}
      <section style={{ marginBottom: '8rem' }}>
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <h2 style={{ fontSize: '2rem', fontWeight: 700, margin: '0 0 0.75rem', letterSpacing: '-0.03em' }}>
            From zero to shipped in 4 steps
          </h2>
          <p style={{ opacity: 0.55, fontSize: '1.125rem', margin: 0 }}>
            No assembly required. No component archaeology.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '0', position: 'relative' }}>
          {/* Connector line */}
          <div style={{ position: 'absolute', top: '2rem', left: 'calc(12.5%)', right: 'calc(12.5%)', height: '1px', background: 'linear-gradient(90deg, var(--zx-primary), var(--zx-elevated))', zIndex: 0 }} />

          {HOW_IT_WORKS.map((item, i) => (
            <div key={item.step} style={{ padding: '0 1.5rem', textAlign: 'center', position: 'relative', zIndex: 1 }}>
              <div style={{
                width: '4rem', height: '4rem', borderRadius: '50%',
                background: i === 0 ? 'var(--zx-primary)' : 'var(--zx-elevated)',
                color: i === 0 ? 'var(--zx-background)' : 'var(--zx-primary)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: '1rem', fontWeight: 800, margin: '0 auto 1.5rem',
                border: '3px solid var(--zx-background)',
                boxShadow: i === 0 ? '0 0 0 1px var(--zx-primary)' : '0 0 0 1px var(--zx-elevated)',
              }}>
                {item.step}
              </div>
              <h3 style={{ fontSize: '1.125rem', fontWeight: 700, margin: '0 0 0.75rem' }}>{item.title}</h3>
              <p style={{ opacity: 0.6, fontSize: '0.9rem', lineHeight: 1.6, margin: '0 0 1rem' }}>{item.desc}</p>
              <Link href={item.href} style={{ fontSize: '0.875rem', fontWeight: 600, color: 'var(--zx-primary)', textDecoration: 'none', opacity: 0.8 }}>
                {item.cta}
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* FEATURED BLUEPRINT */}
      <section style={{ marginBottom: '8rem' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '2rem' }}>
          <div>
            <h2 style={{ fontSize: '2rem', fontWeight: 700, margin: '0 0 0.5rem' }}>Featured Blueprint</h2>
            <p style={{ opacity: 0.6, margin: 0 }}>Night City Portfolio — live and interactive below.</p>
          </div>
          <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
            <Link href="/studio" style={{ fontSize: '0.9rem', fontWeight: 600, color: 'var(--zx-primary)', textDecoration: 'none', opacity: 0.8 }}>
              Customize Theme →
            </Link>
            <Link href={`/blueprints/${featuredBlueprint?.id}`} style={{ padding: '0.6rem 1.25rem', background: 'var(--zx-primary)', color: 'var(--zx-background)', borderRadius: 'var(--zx-radius-sm)', fontWeight: 600, textDecoration: 'none', fontSize: '0.9rem' }}>
              Install Blueprint
            </Link>
          </div>
        </div>
        <div style={{ 
          position: 'relative',
          width: '100%', 
          height: '600px', 
          background: 'var(--zx-elevated)', 
          borderRadius: 'var(--zx-radius-lg)', 
          overflow: 'hidden',
          border: '1px solid var(--zx-elevated)'
        }}>
          <div style={{ position: 'absolute', top: '1rem', left: '1rem', zIndex: 10, display: 'flex', gap: '0.5rem' }}>
            <span style={{ fontSize: '0.75rem', fontWeight: 600, padding: '0.25rem 0.75rem', background: 'var(--zx-primary)', color: 'var(--zx-background)', borderRadius: 'var(--zx-radius-round)' }}>
              Live Preview
            </span>
            <span style={{ fontSize: '0.75rem', fontWeight: 600, padding: '0.25rem 0.75rem', background: 'var(--zx-surface)', color: 'var(--zx-primary)', borderRadius: 'var(--zx-radius-round)', border: '1px solid var(--zx-elevated)' }}>
              Interactive
            </span>
          </div>
          {/* CLI hint overlaid bottom */}
          <div style={{ position: 'absolute', bottom: '1rem', left: '50%', transform: 'translateX(-50%)', zIndex: 10 }}>
            <code style={{ fontSize: '0.8rem', padding: '0.5rem 1.25rem', background: 'rgba(0,0,0,0.8)', color: 'var(--zx-primary)', borderRadius: 'var(--zx-radius-round)', fontFamily: 'monospace', border: '1px solid var(--zx-border)', backdropFilter: 'blur(8px)', whiteSpace: 'nowrap' }}>
              pnpm dlx zenix-ui add night-city-portfolio
            </code>
          </div>
          <div style={{ width: '100%', height: '100%', overflowY: 'auto' }}>
            {FeaturedComponent && featuredBlueprint ? (
              <Experience preset={featuredBlueprint.theme as any}>
                <FeaturedComponent />
              </Experience>
            ) : null}
          </div>
        </div>
      </section>

      {/* BROWSE BY CATEGORY */}
      <section style={{ marginBottom: '8rem' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '2rem' }}>
          <div>
            <h2 style={{ fontSize: '2.5rem', fontWeight: 700, margin: '0 0 0.5rem', letterSpacing: '-0.03em' }}>
              Complete Experiences, Every Category
            </h2>
            <p style={{ opacity: 0.6, fontSize: '1.125rem', margin: 0 }}>
              Not building blocks. Full, production-ready pages you can install today.
            </p>
          </div>
          <Link href="/blueprints" style={{ fontWeight: 600, color: 'var(--zx-primary)', textDecoration: 'none', opacity: 0.8, whiteSpace: 'nowrap' }}>
            View all 30+ →
          </Link>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1.5rem' }}>
          {['Landing Pages', 'Portfolios', 'Dashboards', 'Blogs'].map((category) => {
            const idMap: Record<string, string> = { 'Landing Pages': 'landing', 'Portfolios': 'portfolio', 'Dashboards': 'dashboard', 'Blogs': 'blog' };
            const topBp = blueprints.find(bp => bp.category === idMap[category]);
            const count = blueprints.filter(bp => bp.category === idMap[category]).length;
            return (
              <Link key={category} href={`/blueprints?category=${idMap[category]}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                <Surface variant="card" style={{ padding: '1rem', border: '1px solid var(--zx-elevated)', height: '100%', transition: 'transform 0.15s ease' }}>
                  <div style={{ width: '100%', height: '160px', background: 'var(--zx-elevated)', borderRadius: 'var(--zx-radius-sm)', marginBottom: '1rem', backgroundImage: `url(${topBp?.previewImage})`, backgroundSize: 'cover', backgroundPosition: 'top center' }} />
                  <h3 style={{ fontSize: '1.125rem', fontWeight: 600, margin: '0 0 0.25rem' }}>{category}</h3>
                  <p style={{ opacity: 0.5, fontSize: '0.875rem', margin: 0 }}>{count} blueprints →</p>
                </Surface>
              </Link>
            );
          })}
        </div>
      </section>

      {/* THEME ECOSYSTEMS */}
      <section style={{ marginBottom: '8rem' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '3rem' }}>
          <div>
            <h2 style={{ fontSize: '2.5rem', fontWeight: 700, margin: '0 0 0.5rem', letterSpacing: '-0.03em' }}>4 Distinct Design Systems</h2>
            <p style={{ opacity: 0.6, margin: 0, fontSize: '1.125rem' }}>One blueprint, infinite design languages. Swap theme in one line.</p>
          </div>
          <Link href="/themes" style={{ fontWeight: 600, color: 'var(--zx-primary)', textDecoration: 'none', opacity: 0.8 }}>
            Explore All Themes →
          </Link>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1.5rem' }}>
          {featuredThemes.map(theme => (
            <Link key={theme.id} href={`/studio`} style={{ textDecoration: 'none', color: 'inherit' }}>
              <Surface variant="card" style={{ padding: '2rem', display: 'flex', alignItems: 'center', gap: '2rem', border: '1px solid var(--zx-elevated)', transition: 'transform 0.15s ease' }}>
                <div style={{ width: '72px', height: '72px', borderRadius: theme.id === 'night-city' ? '0px' : theme.id === 'ocean' ? '50%' : '16px', background: theme.color, flexShrink: 0 }} />
                <div>
                  <h3 style={{ fontSize: '1.375rem', fontWeight: 700, margin: '0 0 0.25rem' }}>{theme.name}</h3>
                  <p style={{ opacity: 0.55, margin: '0 0 0.75rem', fontSize: '0.95rem' }}>{theme.tagline}</p>
                  <span style={{ fontSize: '0.875rem', fontWeight: 600, color: theme.color }}>
                    Try in Studio →
                  </span>
                </div>
              </Surface>
            </Link>
          ))}
        </div>
      </section>

      {/* BOTTOM CTA */}
      <section>
        <Surface variant="card" style={{ padding: '5rem 4rem', textAlign: 'center', border: '1px solid var(--zx-elevated)', borderRadius: 'var(--zx-radius-lg)', background: 'var(--zx-surface)' }}>
          <h2 style={{ fontSize: '3rem', fontWeight: 800, margin: '0 0 1rem', letterSpacing: '-0.04em', lineHeight: 1.1 }}>
            Ready to ship something real?
          </h2>
          <p style={{ opacity: 0.6, margin: '0 auto 2.5rem', maxWidth: '500px', fontSize: '1.25rem', lineHeight: 1.6 }}>
            Pick a blueprint, customize it in the studio, get the CLI command. Ship in minutes.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '2rem' }}>
            <Link href="/blueprints" style={{ padding: '1rem 2rem', background: 'var(--zx-primary)', color: 'var(--zx-background)', borderRadius: 'var(--zx-radius-sm)', fontWeight: 700, textDecoration: 'none', fontSize: '1.125rem' }}>
              Browse Blueprints
            </Link>
            <Link href="/docs" style={{ padding: '1rem 2rem', background: 'var(--zx-elevated)', color: 'inherit', borderRadius: 'var(--zx-radius-sm)', fontWeight: 600, textDecoration: 'none', fontSize: '1.125rem', border: '1px solid var(--zx-border)' }}>
              Read the Docs
            </Link>
          </div>
          <code style={{ fontSize: '0.875rem', opacity: 0.5, fontFamily: 'monospace' }}>
            pnpm dlx zenix-ui add zenix-dashboard
          </code>
        </Surface>
      </section>

    </div>
  );
}
