import { Surface } from '@zenixui/components';

const ROADMAP = {
  current: [
    { title: 'Atomic Components', status: 'Stable', description: 'Extracted foundation (Input, Button, Textarea, Badge).' },
    { title: 'Theme Switching', status: 'Stable', description: 'React Context API for dynamic theme swapping.' },
    { title: 'Blueprint Registry', status: 'Stable', description: '28 high-fidelity templates across 4 themes.' },
    { title: 'Product Hardening', status: 'In Progress', description: 'Comprehensive documentation, previews, and theme customization.' }
  ],
  upcoming: [
    { title: 'Theme Studio', status: 'Planned', description: 'Interactive playground to customize accents, radii, and fonts with JSON export.' },
    { title: 'CLI Tooling', status: 'Planned', description: 'npx zenix-ui add <blueprint> to seamlessly copy code into projects.' },
    { title: 'Theme Marketplace', status: 'Planned', description: 'Ecosystem for developers to package and share custom ZenixUI themes.' },
    { title: 'Advanced Blueprints', status: 'Planned', description: 'E-commerce, Kanban boards, and multi-step forms.' }
  ],
  experimental: [
    { title: 'Figma to Zenix', status: 'Research', description: 'Plugin to map Figma tokens directly to ZenixUI ThemeConfig.' },
    { title: 'Native View Transitions', status: 'Research', description: 'Deep integration with the View Transitions API for theme morphing.' }
  ]
};

export default function RoadmapPage() {
  return (
    <div style={{ padding: '6rem 2rem 10rem', maxWidth: '800px', margin: '0 auto' }}>
      <div style={{ textAlign: 'center', marginBottom: '6rem' }}>
        <h1 style={{ fontSize: '3rem', fontWeight: 700, margin: '0 0 1rem', letterSpacing: '-0.03em' }}>
          Roadmap
        </h1>
        <p style={{ fontSize: '1.25rem', opacity: 0.6, margin: '0 auto', lineHeight: 1.6 }}>
          Building ZenixUI in public. See what we're working on and where we're heading.
        </p>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '4rem' }}>
        
        <section>
          <h2 style={{ fontSize: '2rem', fontWeight: 600, margin: '0 0 2rem', color: 'var(--zx-primary)' }}>Current</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {ROADMAP.current.map(item => (
              <Surface variant="card" key={item.title} style={{ padding: '1.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', border: '1px solid var(--zx-elevated)' }}>
                <div>
                  <h3 style={{ fontSize: '1.125rem', fontWeight: 600, margin: '0 0 0.5rem' }}>{item.title}</h3>
                  <p style={{ opacity: 0.7, margin: 0, fontSize: '0.875rem' }}>{item.description}</p>
                </div>
                <div style={{ fontSize: '0.75rem', fontWeight: 600, textTransform: 'uppercase', padding: '0.25rem 0.75rem', background: 'var(--zx-primary)', color: 'var(--zx-background)', borderRadius: 'var(--zx-radius-round)' }}>
                  {item.status}
                </div>
              </Surface>
            ))}
          </div>
        </section>

        <section>
          <h2 style={{ fontSize: '2rem', fontWeight: 600, margin: '0 0 2rem', opacity: 0.8 }}>Upcoming</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {ROADMAP.upcoming.map(item => (
              <Surface variant="card" key={item.title} style={{ padding: '1.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', border: '1px dashed var(--zx-elevated)', background: 'transparent' }}>
                <div>
                  <h3 style={{ fontSize: '1.125rem', fontWeight: 600, margin: '0 0 0.5rem', opacity: 0.8 }}>{item.title}</h3>
                  <p style={{ opacity: 0.5, margin: 0, fontSize: '0.875rem' }}>{item.description}</p>
                </div>
              </Surface>
            ))}
          </div>
        </section>

        <section>
          <h2 style={{ fontSize: '2rem', fontWeight: 600, margin: '0 0 2rem', opacity: 0.6 }}>Experimental</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {ROADMAP.experimental.map(item => (
              <Surface variant="card" key={item.title} style={{ padding: '1.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', border: '1px solid transparent', background: 'var(--zx-elevated)' }}>
                <div>
                  <h3 style={{ fontSize: '1.125rem', fontWeight: 600, margin: '0 0 0.5rem', opacity: 0.6 }}>{item.title}</h3>
                  <p style={{ opacity: 0.4, margin: 0, fontSize: '0.875rem' }}>{item.description}</p>
                </div>
                <div style={{ fontSize: '0.75rem', fontWeight: 600, textTransform: 'uppercase', opacity: 0.5 }}>
                  {item.status}
                </div>
              </Surface>
            ))}
          </div>
        </section>

      </div>
    </div>
  );
}
