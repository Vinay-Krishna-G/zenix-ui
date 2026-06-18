import { Surface, Hero, Features, CTA, Footer } from '@zenixui/components';

export function NightCityLanding() {
  return (
    <div style={{ paddingBottom: '0' }}>
      {/* HERO SECTION */}
      <Hero.Root padded={false} style={{ paddingTop: '10rem', paddingBottom: '4rem' }}>
        <Hero.Content align="center" spacing="xl">
          <h1 style={{ 
            fontSize: 'clamp(3rem, 8vw, 7rem)', 
            margin: 0, 
            textTransform: 'uppercase', 
            fontWeight: 900, 
            lineHeight: 0.9, 
            letterSpacing: '-0.05em',
            textAlign: 'center',
            textShadow: '0 0 40px var(--zx-accent)'
          }}>
            BUILD THE FUTURE
          </h1>
          <p style={{ fontSize: '1.5rem', textAlign: 'center', maxWidth: '700px', opacity: 0.8, fontWeight: 500 }}>
            Create immersive, high-speed, neon-drenched web experiences with ZenixUI.
          </p>
          <Hero.Actions justify="center">
            <Surface variant="glass" style={{ 
              padding: '1rem 3rem', 
              fontSize: '1.25rem', 
              textTransform: 'uppercase', 
              fontWeight: 'bold', 
              border: '2px solid var(--zx-accent)',
              boxShadow: '0 0 20px var(--zx-accent), inset 0 0 10px var(--zx-accent)',
              cursor: 'pointer',
              color: 'var(--zx-primary)'
            }}>
              Initialize System
            </Surface>
          </Hero.Actions>
        </Hero.Content>
      </Hero.Root>

      {/* STATS SECTION (Uses Features Grid) */}
      <Features.Root>
        <Features.Grid columns={3}>
          <Surface variant="card" style={{ padding: '3rem 2rem', textAlign: 'center', borderTop: '2px solid var(--zx-accent)', background: 'linear-gradient(to bottom, rgba(236,72,153,0.1), transparent)' }}>
            <h2 style={{ fontSize: '4rem', margin: 0, lineHeight: 1, color: 'var(--zx-accent)' }}>100+</h2>
            <p style={{ margin: '1rem 0 0', textTransform: 'uppercase', letterSpacing: '0.1em', opacity: 0.7 }}>Experiences</p>
          </Surface>
          <Surface variant="card" style={{ padding: '3rem 2rem', textAlign: 'center', borderTop: '2px solid #3b82f6', background: 'linear-gradient(to bottom, rgba(59,130,246,0.1), transparent)' }}>
            <h2 style={{ fontSize: '4rem', margin: 0, lineHeight: 1, color: '#3b82f6' }}>50+</h2>
            <p style={{ margin: '1rem 0 0', textTransform: 'uppercase', letterSpacing: '0.1em', opacity: 0.7 }}>Effects</p>
          </Surface>
          <Surface variant="card" style={{ padding: '3rem 2rem', textAlign: 'center', borderTop: '2px solid #eab308', background: 'linear-gradient(to bottom, rgba(234,179,8,0.1), transparent)' }}>
            <h2 style={{ fontSize: '4rem', margin: 0, lineHeight: 1, color: '#eab308' }}>∞</h2 >
            <p style={{ margin: '1rem 0 0', textTransform: 'uppercase', letterSpacing: '0.1em', opacity: 0.7 }}>Themes</p>
          </Surface>
        </Features.Grid>
      </Features.Root>

      {/* FEATURES SECTION */}
      <Features.Root containerSize="md">
        <Features.Content>
          <Surface variant="card" style={{ display: 'flex', flexDirection: 'column', gap: '1rem', padding: '3rem', borderLeft: '4px solid var(--zx-accent)' }}>
            <h3 style={{ margin: 0, fontSize: '2rem', textTransform: 'uppercase' }}>Cybernetic Precision</h3>
            <p style={{ opacity: 0.7, margin: 0, fontSize: '1.1rem' }}>Built on a robust, highly optimized engine delivering 60fps animations and flawless visual fidelity across all viewports.</p>
          </Surface>
          <Surface variant="card" style={{ display: 'flex', flexDirection: 'column', gap: '1rem', padding: '3rem', borderRight: '4px solid #3b82f6', textAlign: 'right' }}>
            <h3 style={{ margin: 0, fontSize: '2rem', textTransform: 'uppercase' }}>Neon Overdrive</h3>
            <p style={{ opacity: 0.7, margin: 0, fontSize: '1.1rem' }}>Automatic glow handling, fast streaks, and integrated bloom layers give your UI that authentic late-night metropolis vibe.</p>
          </Surface>
        </Features.Content>
      </Features.Root>

      {/* AGGRESSIVE CTA */}
      <CTA.Root containerSize="full">
        <CTA.Content style={{ background: 'var(--zx-elevated)', padding: '6rem 2rem', textAlign: 'center', borderTop: '1px solid rgba(255,255,255,0.1)', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
          <h2 style={{ fontSize: '3rem', textTransform: 'uppercase', margin: '0 0 2rem' }}>Ready to hack the mainframe?</h2>
          <CTA.Actions justify="center">
            <button style={{ 
              background: 'var(--zx-accent)', 
              color: '#000', 
              border: 'none', 
              padding: '1.5rem 4rem', 
              fontSize: '1.5rem', 
              fontWeight: 900, 
              textTransform: 'uppercase', 
              cursor: 'pointer',
              clipPath: 'polygon(10% 0, 100% 0, 90% 100%, 0 100%)'
            }}>
              Deploy Now
            </button>
          </CTA.Actions>
        </CTA.Content>
      </CTA.Root>

      {/* FOOTER */}
      <Footer.Root padded={false} style={{ marginTop: '4rem', padding: '4rem 0 2rem', position: 'relative' }}>
        <Surface variant="footer">
          <Features.Grid columns={2}>
            <Footer.Brand>
              <h3 style={{ margin: '0 0 1rem', fontSize: '1.5rem', textTransform: 'uppercase' }}>ZenixUI</h3>
              <p style={{ opacity: 0.5, margin: 0 }}>The visual experience engine for the modern web.</p>
            </Footer.Brand>
            <Footer.Links justify="flex-end" direction="column" spacing="sm" style={{ opacity: 0.7, textAlign: 'right' }}>
              <span>Docs</span>
              <span>GitHub</span>
              <span>Discord</span>
            </Footer.Links>
          </Features.Grid>
          <div style={{ marginTop: '4rem', textAlign: 'center', opacity: 0.3, fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.2em' }}>
            System V.2026 // Connection Secure
          </div>
        </Surface>
      </Footer.Root>
    </div>
  );
}
