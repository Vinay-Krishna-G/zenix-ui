import { Surface, Container, Stack, Grid, Pattern } from '@zenixui/components';

export function OceanPortfolio() {
  return (
    <div style={{ paddingBottom: '4rem' }}>
      {/* HERO SECTION */}
      <Pattern.Root padded style={{ paddingTop: '8rem', paddingBottom: '4rem' }}>
        <Pattern.Content align="center" gap="xl" style={{ textAlign: 'center' }}>
          <Surface variant="glass" style={{ padding: '0.5rem 1rem', borderRadius: '2rem', fontSize: '0.875rem', fontWeight: 600 }}>
            Fluid Interaction Designer
          </Surface>
          <h1 style={{ fontSize: 'clamp(3rem, 6vw, 5.5rem)', margin: 0, fontWeight: 800, letterSpacing: '-0.02em', lineHeight: 1.1 }}>
            Crafting Digital Depth
          </h1>
          <p style={{ fontSize: '1.25rem', opacity: 0.8, maxWidth: '600px', margin: '0 auto', lineHeight: 1.6 }}>
            I build immersive, atmospheric web experiences that feel alive, combining robust engineering with deep visual storytelling.
          </p>
        </Pattern.Content>
      </Pattern.Root>

      {/* SHOWCASE SECTION */}
      <Pattern.Root padded>
        <Container size="full" style={{ padding: 0 }}>
          <Surface variant="card" style={{ height: '60vh', minHeight: '500px', borderRadius: '0', background: 'linear-gradient(to bottom, transparent, rgba(0,0,0,0.4))', borderLeft: 'none', borderRight: 'none', position: 'relative', display: 'flex', alignItems: 'flex-end' }}>
            <div style={{ padding: '4rem 10%', width: '100%' }}>
              <h2 style={{ fontSize: '3rem', margin: '0 0 1rem', textShadow: '0 4px 20px rgba(0,0,0,0.5)' }}>The Mariana Trench Project</h2>
              <p style={{ fontSize: '1.25rem', opacity: 0.9, maxWidth: '600px', margin: '0 0 2rem' }}>A deep dive into experimental webGL rendering and fluid simulation interfaces.</p>
              <Surface variant="glass" style={{ display: 'inline-block', padding: '1rem 3rem', borderRadius: '2rem', cursor: 'pointer', fontWeight: 'bold' }}>
                View Case Study
              </Surface>
            </div>
          </Surface>
        </Container>
      </Pattern.Root>

      {/* PROJECT GRID */}
      <Pattern.Root padded>
        <Pattern.Content gap="xl">
          <h2 style={{ fontSize: '2.5rem', margin: 0 }}>Selected Works</h2>
          <Grid columns={2} gap="xl">
            {[1, 2, 3, 4].map((i) => (
              <Surface key={i} variant="card" style={{ overflow: 'hidden', cursor: 'pointer', display: 'flex', flexDirection: 'column' }}>
                <div style={{ height: '250px', background: 'var(--zx-elevated)', opacity: 0.5 }} />
                <div style={{ padding: '2rem' }}>
                  <h3 style={{ fontSize: '1.5rem', margin: '0 0 0.5rem' }}>Project Submersion {i}</h3>
                  <p style={{ margin: 0, opacity: 0.7, lineHeight: 1.5 }}>An exploration into fluid dynamics and continuous state transitions in React.</p>
                  <Stack direction="row" gap="sm" style={{ marginTop: '1.5rem' }}>
                    <Surface variant="glass" style={{ padding: '0.25rem 0.75rem', borderRadius: '1rem', fontSize: '0.75rem' }}>React</Surface>
                    <Surface variant="glass" style={{ padding: '0.25rem 0.75rem', borderRadius: '1rem', fontSize: '0.75rem' }}>WebGL</Surface>
                  </Stack>
                </div>
              </Surface>
            ))}
          </Grid>
        </Pattern.Content>
      </Pattern.Root>

      {/* TESTIMONIAL QUOTE */}
      <Pattern.Root padded>
        <Container size="md">
          <Surface variant="glass" style={{ padding: '4rem', borderRadius: '3rem', textAlign: 'center', position: 'relative' }}>
            <div style={{ fontSize: '6rem', position: 'absolute', top: '1rem', left: '2rem', opacity: 0.1, fontFamily: 'var(--zx-font-serif, serif)', lineHeight: 1 }}>"</div>
            <p style={{ fontSize: '1.5rem', fontStyle: 'italic', margin: '0 0 2rem', lineHeight: 1.6, position: 'relative', zIndex: 1 }}>
              "The most immersive and performant interface we've ever launched. It feels less like a website and more like an environment."
            </p>
            <div>
              <strong style={{ display: 'block', fontSize: '1.1rem' }}>Sarah Jenkins</strong>
              <span style={{ opacity: 0.7, fontSize: '0.9rem' }}>Director of Design, DeepBlue</span>
            </div>
          </Surface>
        </Container>
      </Pattern.Root>

      {/* CONTACT */}
      <Pattern.Root padded>
        <Container size="md">
          <Stack align="center" gap="lg" style={{ textAlign: 'center' }}>
            <h2 style={{ fontSize: '3rem', margin: 0 }}>Let's build something deep.</h2>
            <p style={{ opacity: 0.8, fontSize: '1.25rem', marginBottom: '1rem' }}>Available for freelance opportunities in Q4.</p>
            <Surface variant="card" style={{ padding: '1.5rem 4rem', borderRadius: '2rem', fontWeight: 'bold', cursor: 'pointer', background: 'var(--zx-primary)', color: 'var(--zx-background)' }}>
              hello@oceanportfolio.com
            </Surface>
          </Stack>
        </Container>
      </Pattern.Root>
    </div>
  );
}
