import { Surface, Hero, Features, CTA, Footer } from '@zenixui/components';

export function ZenixLanding() {
  return (
    <div style={{ paddingBottom: '0' }}>
      {/* HERO SECTION */}
      <Hero.Root padded style={{ paddingTop: '10rem', paddingBottom: '6rem' }}>
        <Hero.Content align="center" spacing="xl" style={{ textAlign: 'center' }}>
          <Surface variant="glass" style={{ padding: '0.5rem 1rem', borderRadius: 'var(--zx-radius-round)', fontSize: '0.875rem', fontWeight: 600, border: '1px solid var(--zx-glass-border)' }}>
            ZenixUI 2.0 is now available →
          </Surface>
          <h1 style={{ fontSize: 'clamp(3rem, 8vw, 6rem)', margin: 0, fontWeight: 700, letterSpacing: '-0.04em', lineHeight: 1 }}>
            Build better.<br />Build faster.
          </h1>
          <p style={{ fontSize: '1.25rem', opacity: 0.6, maxWidth: '600px', margin: '0 auto', lineHeight: 1.6 }}>
            The component library that doesn't feel like a library. Give your users a premium, handcrafted experience out of the box.
          </p>
          <Hero.Actions justify="center">
            <button style={{ padding: '1rem 2rem', borderRadius: 'var(--zx-radius-sm)', background: 'var(--zx-primary)', color: 'var(--zx-background)', border: 'none', fontSize: '1rem', fontWeight: 600, cursor: 'pointer', boxShadow: 'var(--zx-shadow-md)' }}>
              Start Building
            </button>
            <button style={{ padding: '1rem 2rem', borderRadius: 'var(--zx-radius-sm)', background: 'transparent', color: 'var(--zx-primary)', border: '1px solid var(--zx-elevated)', fontSize: '1rem', fontWeight: 600, cursor: 'pointer' }}>
              Read the Docs
            </button>
          </Hero.Actions>
        </Hero.Content>
      </Hero.Root>

      {/* DASHBOARD PREVIEW */}
      <Features.Root padded>
        <Surface variant="card" style={{ height: '600px', borderRadius: 'var(--zx-radius-lg)', background: 'var(--zx-surface)', boxShadow: 'var(--zx-shadow-lg)', border: '1px solid var(--zx-elevated)', position: 'relative', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '60px', borderBottom: '1px solid var(--zx-elevated)', display: 'flex', alignItems: 'center', padding: '0 2rem', gap: '0.5rem' }}>
            <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: 'var(--zx-elevated)' }} />
            <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: 'var(--zx-elevated)' }} />
            <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: 'var(--zx-elevated)' }} />
          </div>
        </Surface>
      </Features.Root>

      {/* FEATURES GRID */}
      <Features.Root padded>
        <Features.Content spacing="xl" style={{ textAlign: 'center' }}>
          <h2 style={{ fontSize: '2.5rem', margin: 0, fontWeight: 700, letterSpacing: '-0.02em' }}>Everything you need.</h2>
          <Features.Grid columns={3}>
            {[
              { icon: '⌘', title: 'Keyboard First', desc: 'Every component is fully accessible and optimized for power users.' },
              { icon: '⚡️', title: 'Zero Runtime', desc: 'Extracts to static CSS at build time for unparalleled performance.' },
              { icon: '🎨', title: 'Themeable', desc: 'Easily match your brand with our powerful token system.' }
            ].map((f, i) => (
              <Surface key={i} variant="card" style={{ padding: '3rem 2rem', textAlign: 'left', background: 'var(--zx-surface)', border: '1px solid var(--zx-elevated)', borderRadius: 'var(--zx-radius)' }}>
                <div style={{ fontSize: '2rem', marginBottom: '1.5rem', width: '48px', height: '48px', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'var(--zx-background)', borderRadius: 'var(--zx-radius-sm)', border: '1px solid var(--zx-elevated)', boxShadow: 'var(--zx-shadow-sm)' }}>
                  {f.icon}
                </div>
                <h3 style={{ fontSize: '1.25rem', fontWeight: 600, margin: '0 0 0.5rem' }}>{f.title}</h3>
                <p style={{ margin: 0, opacity: 0.6, lineHeight: 1.6 }}>{f.desc}</p>
              </Surface>
            ))}
          </Features.Grid>
        </Features.Content>
      </Features.Root>

      {/* FOOTER */}
      <Footer.Root padded={false} style={{ marginTop: '4rem', padding: '4rem 0', borderTop: '1px solid var(--zx-elevated)' }}>
        <Features.Grid columns={2}>
          <Footer.Brand>
            <h3 style={{ margin: '0 0 1rem', fontSize: '1.25rem', fontWeight: 700 }}>ZenixUI</h3>
            <p style={{ opacity: 0.5, margin: 0, fontSize: '0.875rem' }}>Designed with precision.</p>
          </Footer.Brand>
          <Footer.Links justify="flex-end" spacing="lg" style={{ opacity: 0.6, fontSize: '0.875rem', fontWeight: 500 }}>
            <span>Documentation</span>
            <span>Components</span>
            <span>GitHub</span>
          </Footer.Links>
        </Features.Grid>
      </Footer.Root>
    </div>
  );
}
