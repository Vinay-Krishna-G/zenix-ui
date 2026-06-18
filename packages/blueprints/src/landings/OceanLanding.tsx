import { Surface, Hero, Features, CTA, Footer } from '@zenixui/components';

export function OceanLanding() {
  return (
    <div style={{ paddingBottom: '4rem' }}>
      {/* HERO SECTION */}
      <Hero.Root padded={false} style={{ paddingTop: '8rem', paddingBottom: '6rem' }}>
        <Surface variant="hero" style={{ padding: '4rem 2rem', textAlign: 'center', borderRadius: '2rem', overflow: 'hidden', position: 'relative' }}>
          <Hero.Content style={{ position: 'relative', zIndex: 10 }}>
            <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 4.5rem)', margin: '0 0 1rem', fontWeight: 800, letterSpacing: '-0.02em', lineHeight: 1.1 }}>
              Deep, Fluid Experiences
            </h1>
            <p style={{ fontSize: '1.25rem', opacity: 0.8, maxWidth: '600px', margin: '0 auto 2.5rem', lineHeight: 1.6 }}>
              Dive into a tranquil, performance-focused framework that adapts to your needs like water. Build premium websites instantly.
            </p>
            
            <Hero.Actions justify="center">
              <Surface variant="glass" style={{ padding: '0.75rem 2rem', borderRadius: '2rem', cursor: 'pointer', fontWeight: 600, border: '1px solid rgba(255,255,255,0.3)' }}>
                Start Building
              </Surface>
              <Surface variant="transparent" style={{ padding: '0.75rem 2rem', borderRadius: '2rem', cursor: 'pointer', fontWeight: 600, opacity: 0.8 }}>
                View Documentation
              </Surface>
            </Hero.Actions>
          </Hero.Content>
          
          <Hero.Visual>
            {/* Floating decorative elements */}
            <div style={{ position: 'absolute', top: '10%', left: '5%', width: '100px', height: '100px', borderRadius: '50%', background: 'var(--zx-accent)', filter: 'blur(60px)', opacity: 0.3 }} />
            <div style={{ position: 'absolute', bottom: '10%', right: '5%', width: '150px', height: '150px', borderRadius: '50%', background: 'var(--zx-primary)', filter: 'blur(80px)', opacity: 0.2 }} />
          </Hero.Visual>
        </Surface>
      </Hero.Root>

      {/* FEATURES SECTION */}
      <Features.Root>
        <Features.Content>
          <div style={{ textAlign: 'center' }}>
            <h2 style={{ fontSize: '2.5rem', margin: '0 0 1rem' }}>Engineered for Depth</h2>
            <p style={{ opacity: 0.7, maxWidth: '500px', margin: '0 auto' }}>Every surface and animation is designed to feel cohesive, atmospheric, and highly polished.</p>
          </div>

          <Features.Grid columns={3}>
            <Surface variant="glass" style={{ padding: '2rem', display: 'flex', flexDirection: 'column', gap: '1rem', height: '100%' }}>
              <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: 'var(--zx-elevated)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>🌊</div>
              <h3 style={{ margin: 0, fontSize: '1.25rem' }}>Fluid Experiences</h3>
              <p style={{ margin: 0, opacity: 0.7, lineHeight: 1.5 }}>Smooth transitions and continuous animations create an unbroken, immersive feel.</p>
            </Surface>

            <Surface variant="glass" style={{ padding: '2rem', display: 'flex', flexDirection: 'column', gap: '1rem', height: '100%' }}>
              <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: 'var(--zx-elevated)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>✨</div>
              <h3 style={{ margin: 0, fontSize: '1.25rem' }}>Adaptive Themes</h3>
              <p style={{ margin: 0, opacity: 0.7, lineHeight: 1.5 }}>Tokens seamlessly map across deep blue gradients to vibrant neon cityscapes.</p>
            </Surface>

            <Surface variant="glass" style={{ padding: '2rem', display: 'flex', flexDirection: 'column', gap: '1rem', height: '100%' }}>
              <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: 'var(--zx-elevated)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>🫧</div>
              <h3 style={{ margin: 0, fontSize: '1.25rem' }}>Atmospheric Effects</h3>
              <p style={{ margin: 0, opacity: 0.7, lineHeight: 1.5 }}>Built-in particle systems and light shafts elevate your design beyond flat CSS.</p>
            </Surface>
          </Features.Grid>
        </Features.Content>
      </Features.Root>

      {/* CTA SECTION */}
      <CTA.Root containerSize="md">
        <Surface variant="glass" style={{ padding: '4rem 2rem', textAlign: 'center', borderRadius: '2rem' }}>
          <h2 style={{ fontSize: '2.5rem', margin: '0 0 1.5rem' }}>Ready to dive in?</h2>
          <Surface variant="card" style={{ display: 'inline-block', padding: '1rem 3rem', cursor: 'pointer', fontWeight: 'bold' }}>
            Download ZenixUI
          </Surface>
        </Surface>
      </CTA.Root>

      {/* FOOTER */}
      <Footer.Root padded={false}>
        <Surface variant="footer" style={{ padding: '2rem 0', display: 'flex', justifyContent: 'space-between', opacity: 0.6, fontSize: '0.875rem' }}>
          <Footer.Brand>© 2026 ZenixUI Experience Engine.</Footer.Brand>
          <Footer.Links>
            <span>Twitter</span>
            <span>GitHub</span>
          </Footer.Links>
        </Surface>
      </Footer.Root>
    </div>
  );
}
