import { Surface, Section, Container, Stack, Grid, Pattern } from '@zenixui/components';

export function AutumnPortfolio() {
  return (
    <div style={{ paddingBottom: '4rem' }}>
      {/* HERO SECTION (Story Intro) */}
      <Pattern.Root padded style={{ paddingTop: '10rem', paddingBottom: '6rem' }}>
        <Container size="md">
          <Pattern.Content spacing="xl">
            <h1 style={{ fontSize: 'clamp(3rem, 6vw, 4.5rem)', margin: 0, fontFamily: 'serif', fontWeight: 400, color: 'var(--zx-primary)', lineHeight: 1.1 }}>
              Hi, I'm Elena.<br />I weave stories through code.
            </h1>
            <p style={{ fontSize: '1.5rem', opacity: 0.8, lineHeight: 1.8, maxWidth: '650px', margin: 0 }}>
              A creative developer and writer exploring the intersection of digital environments and human emotion.
            </p>
          </Pattern.Content>
        </Container>
      </Pattern.Root>

      {/* ABOUT ME (StorySection) */}
      <Pattern.Root padded>
        <Grid columns={2} spacing="xl" style={{ alignItems: 'center' }}>
          <Surface variant="card" style={{ height: '500px', borderRadius: '4rem 1rem 4rem 1rem', background: 'var(--zx-elevated)', overflow: 'hidden', position: 'relative' }}>
            <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(circle at 30% 70%, var(--zx-accent), transparent 50%)', opacity: 0.2 }} />
          </Surface>
          <div style={{ padding: '2rem' }}>
            <h2 style={{ fontSize: '2.5rem', fontFamily: 'serif', fontWeight: 400, margin: '0 0 1.5rem' }}>My Journey</h2>
            <p style={{ fontSize: '1.2rem', opacity: 0.8, lineHeight: 1.8, marginBottom: '1.5rem' }}>
              I started my career as a traditional graphic designer before discovering the endless possibilities of the web. 
              I realized that the browser isn't just a document viewer—it's a canvas for interactive storytelling.
            </p>
            <p style={{ fontSize: '1.2rem', opacity: 0.8, lineHeight: 1.8 }}>
              Today, I focus on building digital spaces that feel warm, organic, and deeply personal, moving away from harsh rectangles into something more human.
            </p>
          </div>
        </Grid>
      </Pattern.Root>

      {/* WRITING / ESSAYS (ArticleCard) */}
      <Pattern.Root padded>
        <Pattern.Content spacing="xl">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', borderBottom: '1px solid var(--zx-elevated)', paddingBottom: '1rem' }}>
            <h2 style={{ fontSize: '2.5rem', fontFamily: 'serif', fontWeight: 400, margin: 0 }}>Recent Essays</h2>
            <span style={{ opacity: 0.7, cursor: 'pointer' }}>View All →</span>
          </div>
          
          <Stack spacing="lg">
            {[
              { date: 'Oct 12, 2026', title: 'The Death of the Rectangle', desc: 'Why modern web design must embrace organic shapes and natural flows.' },
              { date: 'Sep 04, 2026', title: 'Atmosphere in UI', desc: 'Using light, shadow, and motion to create emotional resonance.' },
              { date: 'Aug 22, 2026', title: 'Designing for Comfort', desc: 'A case study on building interfaces that reduce cognitive load and anxiety.' }
            ].map((article, i) => (
              <Surface key={i} variant="card" style={{ padding: '2.5rem', borderRadius: '2rem', display: 'flex', gap: '2rem', alignItems: 'center', transition: 'transform 0.2s', cursor: 'pointer' }}>
                <div style={{ width: '100px', opacity: 0.5, fontSize: '0.9rem', flexShrink: 0 }}>{article.date}</div>
                <div>
                  <h3 style={{ fontSize: '1.5rem', fontFamily: 'serif', fontWeight: 400, margin: '0 0 0.5rem' }}>{article.title}</h3>
                  <p style={{ margin: 0, opacity: 0.7, lineHeight: 1.6 }}>{article.desc}</p>
                </div>
              </Surface>
            ))}
          </Stack>
        </Pattern.Content>
      </Pattern.Root>

      {/* CONTACT */}
      <Pattern.Root padded>
        <Container size="md">
          <Surface variant="glass" style={{ padding: '5rem 4rem', borderRadius: '4rem', textAlign: 'center', background: 'var(--zx-elevated)' }}>
            <h2 style={{ fontSize: '3rem', fontFamily: 'serif', fontWeight: 400, margin: '0 0 1.5rem' }}>Let's talk.</h2>
            <p style={{ fontSize: '1.25rem', opacity: 0.8, marginBottom: '3rem' }}>I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.</p>
            <button style={{ padding: '1.25rem 3.5rem', borderRadius: '3rem', border: 'none', background: 'var(--zx-accent)', color: '#fff', fontSize: '1.1rem', cursor: 'pointer' }}>
              Say Hello
            </button>
          </Surface>
        </Container>
      </Pattern.Root>
    </div>
  );
}
