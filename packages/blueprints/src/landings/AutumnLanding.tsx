import { Surface, Hero, Features, CTA, Footer } from '@zenixui/components';

export function AutumnLanding() {
  return (
    <div style={{ paddingBottom: '0' }}>
      {/* HERO SECTION */}
      <Hero.Root padded style={{ paddingTop: '8rem', paddingBottom: '8rem' }}>
        <Hero.Content align="center" gap="lg" style={{ textAlign: 'center' }}>
          <Hero.Visual style={{ 
            width: '120px', 
            height: '120px', 
            borderRadius: '50%', 
            background: 'linear-gradient(135deg, var(--zx-accent), transparent)', 
            opacity: 0.5, 
            marginBottom: '1rem',
            filter: 'blur(20px)'
          }} />
          <h1 style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)', margin: 0, fontFamily: 'var(--zx-font-serif, serif)', fontWeight: 400, color: 'var(--zx-primary)' }}>
            Embrace the season.
          </h1>
          <p style={{ fontSize: '1.25rem', maxWidth: '600px', margin: 0, opacity: 0.8, lineHeight: 1.8 }}>
            Craft warm, inviting, and organic digital spaces that tell a story. ZenixUI brings natural motion and light to your web applications.
          </p>
        </Hero.Content>
      </Hero.Root>

      {/* STORY SECTION */}
      <Features.Root>
        <Features.Grid columns={2} style={{ alignItems: 'center' }}>
          <div style={{ padding: '2rem' }}>
            <h2 style={{ fontSize: '2.5rem', margin: '0 0 1.5rem', fontFamily: 'var(--zx-font-serif, serif)', fontWeight: 400 }}>A narrative approach to design.</h2>
            <p style={{ fontSize: '1.1rem', opacity: 0.8, lineHeight: 1.8, margin: '0 0 2rem' }}>
              Technology doesn't have to feel cold and geometric. By using soft shadows, rounded surfaces, and ambient motion, we create an atmosphere that feels handcrafted and deeply personal.
            </p>
            <Surface variant="glass" style={{ display: 'inline-block', padding: '0.75rem 2rem', borderRadius: '2rem', cursor: 'pointer', background: 'rgba(255,255,255,0.1)' }}>
              Read our story →
            </Surface>
          </div>
          
          <Surface variant="card" style={{ height: '400px', borderRadius: '3rem', background: 'linear-gradient(to top right, var(--zx-surface), var(--zx-elevated))', border: '1px solid rgba(255,255,255,0.2)', position: 'relative', overflow: 'hidden' }}>
            <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(circle at top right, var(--zx-accent), transparent 60%)', opacity: 0.15 }} />
          </Surface>
        </Features.Grid>
      </Features.Root>

      {/* FEATURE CARDS */}
      <Features.Root>
        <Features.Grid columns={3}>
          {[
            { title: 'Organic Motion', desc: 'Leaves drift gracefully, creating a sense of calm and passage of time.' },
            { title: 'Warm Lighting', desc: 'Radial gradients and diffused shadows mimic the golden hour.' },
            { title: 'Soft Surfaces', desc: 'Generous border radii and gentle borders remove harsh digital edges.' }
          ].map((feat, i) => (
            <Surface key={i} variant="card" style={{ padding: '3rem 2rem', borderRadius: '2rem', textAlign: 'center' }}>
              <div style={{ width: '64px', height: '64px', borderRadius: '50%', background: 'var(--zx-elevated)', margin: '0 auto 1.5rem' }} />
              <h3 style={{ margin: '0 0 1rem', fontSize: '1.5rem', fontFamily: 'var(--zx-font-serif, serif)', fontWeight: 400 }}>{feat.title}</h3>
              <p style={{ margin: 0, opacity: 0.7, lineHeight: 1.6 }}>{feat.desc}</p>
            </Surface>
          ))}
        </Features.Grid>
      </Features.Root>

      {/* CTA */}
      <CTA.Root containerSize="md">
        <CTA.Content>
          <Surface variant="card" style={{ padding: '5rem 3rem', borderRadius: '3rem', textAlign: 'center', background: 'var(--zx-accent)', color: 'var(--zx-background)' }}>
            <h2 style={{ fontSize: '3rem', fontFamily: 'var(--zx-font-serif, serif)', fontWeight: 400, margin: '0 0 1.5rem' }}>Start your journey</h2>
            <p style={{ fontSize: '1.25rem', opacity: 0.9, margin: '0 0 3rem' }}>Join thousands of creators building organic experiences.</p>
            <CTA.Actions justify="center">
              <button style={{ padding: '1rem 3rem', borderRadius: '2rem', border: 'none', background: 'var(--zx-primary)', color: 'var(--zx-accent)', fontSize: '1.1rem', fontWeight: 600, cursor: 'pointer' }}>
                Begin Now
              </button>
            </CTA.Actions>
          </Surface>
        </CTA.Content>
      </CTA.Root>

      {/* FOOTER */}
      <Footer.Root padded={false} style={{ padding: '4rem 0' }}>
        <Footer.Brand style={{ textAlign: 'center', opacity: 0.6 }}>
          <p style={{ fontFamily: 'var(--zx-font-serif, serif)', fontSize: '1.5rem', fontStyle: 'italic', margin: '0 0 1rem' }}>ZenixUI</p>
          <p style={{ margin: 0, fontSize: '0.875rem' }}>Handcrafted with care. © 2026</p>
        </Footer.Brand>
      </Footer.Root>
    </div>
  );
}
