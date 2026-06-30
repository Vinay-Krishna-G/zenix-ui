import { Surface, Hero, Features, Footer } from '@zenixui/components';

export function ZenixPortfolio() {
  return (
    <div style={{ paddingBottom: '4rem' }}>
      {/* HERO SECTION */}
      <Hero.Root padded style={{ paddingTop: '10rem', paddingBottom: '4rem' }}>
        <Hero.Content align="flex-start" spacing="lg">
          <h1 style={{ fontSize: 'clamp(2.5rem, 6vw, 4rem)', margin: 0, fontWeight: 700, letterSpacing: '-0.03em', lineHeight: 1.1, maxWidth: '800px' }}>
            Designing interfaces that feel like tools, not toys.
          </h1>
          <p style={{ fontSize: '1.25rem', opacity: 0.6, maxWidth: '600px', margin: 0, lineHeight: 1.6 }}>
            I'm a product designer and frontend engineer focused on high-density data applications and developer tooling.
          </p>
          <Hero.Actions style={{ marginTop: '2rem' }}>
            <button style={{ padding: '0.75rem 1.5rem', borderRadius: 'var(--zx-radius-surface)', background: 'var(--zx-primary)', color: 'var(--zx-background)', border: 'none', fontSize: '0.875rem', fontWeight: 600, cursor: 'pointer' }}>
              View Resume
            </button>
            <button style={{ padding: '0.75rem 1.5rem', borderRadius: 'var(--zx-radius-surface)', background: 'var(--zx-elevated)', color: 'var(--zx-primary)', border: 'none', fontSize: '0.875rem', fontWeight: 600, cursor: 'pointer' }}>
              Email Me
            </button>
          </Hero.Actions>
        </Hero.Content>
      </Hero.Root>

      {/* SELECTED WORK (ProjectCard variant) */}
      <Features.Root padded>
        <Features.Content spacing="xl">
          <h2 style={{ fontSize: '1.5rem', fontWeight: 600, margin: 0, paddingBottom: '1rem', borderBottom: '1px solid var(--zx-elevated)' }}>Selected Work</h2>
          <Features.Grid columns={2} spacing="xl">
            {[1, 2, 3, 4].map((i) => (
              <Surface key={i} variant="card" style={{ padding: 0, overflow: 'hidden', background: 'transparent', border: 'none' }}>
                <div style={{ height: '300px', background: 'var(--zx-elevated)', borderRadius: 'var(--zx-radius-overlay)', marginBottom: '1.5rem', border: '1px solid var(--zx-elevated)' }} />
                <h3 style={{ fontSize: '1.25rem', fontWeight: 600, margin: '0 0 0.5rem' }}>Datagrid Infrastructure</h3>
                <p style={{ margin: 0, opacity: 0.6, lineHeight: 1.5 }}>A high-performance table engine for viewing billions of rows instantly.</p>
              </Surface>
            ))}
          </Features.Grid>
        </Features.Content>
      </Features.Root>

      {/* EXPERIENCE TIMELINE */}
      <Features.Root padded>
        <Features.Content spacing="xl">
          <h2 style={{ fontSize: '1.5rem', fontWeight: 600, margin: 0, paddingBottom: '1rem', borderBottom: '1px solid var(--zx-elevated)' }}>Experience</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            {[
              { role: 'Senior Designer', company: 'Linear', date: '2023 - Present' },
              { role: 'Frontend Engineer', company: 'Vercel', date: '2021 - 2023' },
              { role: 'Product Designer', company: 'Stripe', date: '2019 - 2021' }
            ].map((job, i) => (
              <div key={i} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
                <div>
                  <h3 style={{ fontSize: '1.1rem', fontWeight: 600, margin: '0 0 0.25rem' }}>{job.role}</h3>
                  <div style={{ opacity: 0.6, fontSize: '0.9rem' }}>{job.company}</div>
                </div>
                <div style={{ opacity: 0.5, fontSize: '0.875rem', fontFamily: 'var(--zx-font-mono)' }}>{job.date}</div>
              </div>
            ))}
          </div>
        </Features.Content>
      </Features.Root>

      {/* FOOTER */}
      <Footer.Root padded={false} style={{ marginTop: '6rem', paddingBottom: '2rem' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', opacity: 0.5, fontSize: '0.875rem' }}>
          <span>© 2026. All rights reserved.</span>
          <span>SF / NY / LDN</span>
        </div>
      </Footer.Root>
    </div>
  );
}
