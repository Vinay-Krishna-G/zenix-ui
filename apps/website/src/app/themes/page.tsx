import { Metadata } from 'next';
import Link from 'next/link';
import { ThemeWheelClient } from './ThemeWheelClient';
import { ColorTheoryClient } from './ColorTheoryClient';

export const metadata: Metadata = {
  title: 'Design Languages | ZenixUI',
  description:
    'ZenixUI provides 4 distinct design languages — not just color themes. Each one is engineered for a specific emotional identity: professional, calm, warm, or technical.',
};

// ─────────────────────────────────────────────────────────────────────────────
// Theme card data (richer than the old THEMES array)
// ─────────────────────────────────────────────────────────────────────────────

const DESIGN_SYSTEMS = [
  {
    id: 'zenix',
    name: 'Zenix',
    tagline: 'Premium SaaS',
    description:
      'Clean, structured, and professional. Zenix is built for B2B applications where trust is the conversion driver. High contrast, precise spacing, and a controlled indigo palette signal competence without shouting.',
    primary: '#6366f1',
    palette: [
      { role: 'Primary', color: '#6366f1' },
      { role: 'Secondary', color: '#818cf8' },
      { role: 'Accent', color: '#a78bfa' },
      { role: 'Background', color: '#09090b' },
      { role: 'Surface', color: '#18181b' },
      { role: 'Border', color: '#27272a' },
    ],
    emotions: ['Professional', 'Trustworthy', 'Scalable'],
    useCases: ['B2B SaaS', 'Admin Panel', 'Analytics Dashboard', 'Enterprise'],
    typography: { heading: 'Inter', body: 'Inter', code: 'JetBrains Mono' },
    radius: '8px',
    motion: 'Standard',
  },
  {
    id: 'ocean',
    name: 'Ocean',
    tagline: 'Deep & Fluid',
    description:
      'Immersive, calm, and creative. Ocean uses glassmorphism and deep blues to create an atmosphere of depth. Ideal for consumer apps where the emotional experience matters as much as the function.',
    primary: '#0ea5e9',
    palette: [
      { role: 'Primary', color: '#0ea5e9' },
      { role: 'Secondary', color: '#38bdf8' },
      { role: 'Accent', color: '#7dd3fc' },
      { role: 'Background', color: '#030712' },
      { role: 'Surface', color: '#0c1929' },
      { role: 'Border', color: '#1e3a5f' },
    ],
    emotions: ['Calm', 'Trustworthy', 'Creative'],
    useCases: ['Fintech', 'Creative Portfolio', 'Agency', 'Consumer App'],
    typography: { heading: 'Outfit', body: 'Outfit', code: 'Fira Code' },
    radius: '24px',
    motion: 'Expressive',
  },
  {
    id: 'autumn',
    name: 'Autumn',
    tagline: 'Warm & Organic',
    description:
      'Elegant, warm, and approachable. Autumn uses rich ambers and paper-inspired surfaces to create a reading experience that feels human. Perfectly suited for long-form content and publishing.',
    primary: '#d97706',
    palette: [
      { role: 'Primary', color: '#d97706' },
      { role: 'Secondary', color: '#f59e0b' },
      { role: 'Accent', color: '#fcd34d' },
      { role: 'Background', color: '#0c0a09' },
      { role: 'Surface', color: '#1c1917' },
      { role: 'Border', color: '#292524' },
    ],
    emotions: ['Warm', 'Inviting', 'Authentic'],
    useCases: ['Blog', 'Publishing', 'Journal', 'Lifestyle Brand'],
    typography: { heading: 'Georgia', body: 'Georgia', code: 'Courier New' },
    radius: '12px',
    motion: 'Minimal',
  },
  {
    id: 'midnight',
    name: 'Night City',
    tagline: 'Terminal Hacker',
    description:
      'High contrast, zero border radius, neon accents on pure black. Night City is for developer tools, CLI landing pages, and AI products where technical precision is the aesthetic. No softness. No compromise.',
    primary: '#22c55e',
    palette: [
      { role: 'Primary', color: '#22c55e' },
      { role: 'Secondary', color: '#4ade80' },
      { role: 'Accent', color: '#86efac' },
      { role: 'Background', color: '#000000' },
      { role: 'Surface', color: '#0a0a0a' },
      { role: 'Border', color: '#1a1a1a' },
    ],
    emotions: ['Focused', 'Powerful', 'Technical'],
    useCases: ['Dev Tools', 'CLI Product Site', 'AI Platform', 'Open Source'],
    typography: { heading: 'Fira Code', body: 'Fira Code', code: 'Fira Code' },
    radius: '0px',
    motion: 'Minimal',
  },
];

// ─────────────────────────────────────────────────────────────────────────────
// Page
// ─────────────────────────────────────────────────────────────────────────────

export default function ThemesPage() {
  return (
    <div>
      {/* ── Hero ── */}
      <section style={{ padding: '6rem 2rem 2rem', textAlign: 'center', maxWidth: '700px', margin: '0 auto' }}>
        <div style={{ fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.12em', opacity: 0.4, marginBottom: '1rem' }}>
          Theme Engine
        </div>
        <h1 style={{ fontSize: '3.5rem', fontWeight: 800, margin: '0 0 1.25rem', letterSpacing: '-0.04em', lineHeight: 1.1 }}>
          Design<br />
          <span style={{ opacity: 0.35 }}>Languages</span>
        </h1>
        <p style={{ fontSize: '1.2rem', opacity: 0.6, lineHeight: 1.6, maxWidth: '560px', margin: '0 auto 3rem' }}>
          Not colors. <strong>Design languages.</strong> Each one is engineered for a specific emotional identity.
          Choose the feeling you want your product to convey — then let the engine do the rest.
        </p>
      </section>

      {/* ── Interactive Wheel ── */}
      <section style={{ padding: '0 2rem 4rem' }}>
        <ThemeWheelClient />
      </section>

      {/* ── Design System Cards ── */}
      <section style={{ padding: '4rem 2rem', maxWidth: '1000px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <h2 style={{ fontSize: '2rem', fontWeight: 700, margin: '0 0 0.75rem', letterSpacing: '-0.03em' }}>
            All Design Systems
          </h2>
          <p style={{ opacity: 0.5, maxWidth: '480px', margin: '0 auto', lineHeight: 1.6 }}>
            Each system ships with a complete palette, typography scale, border radius, and motion profile.
            Write your logic once and switch themes with one prop.
          </p>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          {DESIGN_SYSTEMS.map(ds => (
            <div
              key={ds.id}
              id={`theme-${ds.id}`}
              style={{
                borderRadius: '16px',
                border: '1px solid var(--zx-elevated)',
                overflow: 'hidden',
                background: 'var(--zx-surface)',
              }}
            >
              {/* Color bar */}
              <div style={{
                height: '6px',
                background: `linear-gradient(to right, ${ds.palette[0].color}, ${ds.palette[1].color}, ${ds.palette[2].color})`,
              }} />

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 280px', gap: '0', minHeight: '260px' }}>
                {/* Left — text content */}
                <div style={{ padding: '2.5rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.75rem' }}>
                    <div style={{
                      width: '28px', height: '28px',
                      borderRadius: '6px',
                      background: `linear-gradient(135deg, ${ds.palette[0].color}, ${ds.palette[2].color})`,
                    }} />
                    <h3 style={{ fontSize: '1.75rem', fontWeight: 800, margin: 0, letterSpacing: '-0.02em' }}>
                      {ds.name}
                    </h3>
                    <span style={{
                      fontSize: '0.75rem', fontWeight: 700,
                      padding: '0.2rem 0.6rem',
                      borderRadius: '100px',
                      background: `${ds.primary}20`,
                      color: ds.primary,
                    }}>
                      {ds.tagline}
                    </span>
                  </div>

                  <p style={{ opacity: 0.65, lineHeight: 1.65, marginBottom: '1.5rem', maxWidth: '480px' }}>
                    {ds.description}
                  </p>

                  {/* Emotions */}
                  <div style={{ display: 'flex', gap: '0.4rem', flexWrap: 'wrap', marginBottom: '1.25rem' }}>
                    {ds.emotions.map(e => (
                      <span key={e} style={{
                        fontSize: '0.72rem', fontWeight: 700,
                        padding: '0.2rem 0.6rem',
                        borderRadius: '100px',
                        border: `1px solid ${ds.primary}40`,
                        color: ds.primary,
                      }}>
                        {e}
                      </span>
                    ))}
                    {ds.useCases.map(u => (
                      <span key={u} style={{
                        fontSize: '0.72rem', fontWeight: 600,
                        padding: '0.2rem 0.6rem',
                        borderRadius: '100px',
                        background: 'var(--zx-elevated)',
                        opacity: 0.8,
                      }}>
                        {u}
                      </span>
                    ))}
                  </div>

                  {/* Typography + Radius + Motion */}
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1rem', marginBottom: '2rem', fontSize: '0.8rem' }}>
                    <div>
                      <div style={{ opacity: 0.4, marginBottom: '0.2rem', fontWeight: 600, textTransform: 'uppercase', fontSize: '0.65rem', letterSpacing: '0.06em' }}>Heading</div>
                      <div style={{ fontWeight: 700 }}>{ds.typography.heading}</div>
                    </div>
                    <div>
                      <div style={{ opacity: 0.4, marginBottom: '0.2rem', fontWeight: 600, textTransform: 'uppercase', fontSize: '0.65rem', letterSpacing: '0.06em' }}>Radius</div>
                      <div style={{ fontWeight: 700 }}>{ds.radius}</div>
                    </div>
                    <div>
                      <div style={{ opacity: 0.4, marginBottom: '0.2rem', fontWeight: 600, textTransform: 'uppercase', fontSize: '0.65rem', letterSpacing: '0.06em' }}>Motion</div>
                      <div style={{ fontWeight: 700 }}>{ds.motion}</div>
                    </div>
                  </div>

                  {/* CTAs */}
                  <div style={{ display: 'flex', gap: '0.75rem' }}>
                    <Link
                      href={`/studio?preset=${ds.id}`}
                      style={{
                        padding: '0.6rem 1.25rem',
                        borderRadius: '8px',
                        background: ds.primary,
                        color: '#09090b',
                        fontWeight: 700,
                        textDecoration: 'none',
                        fontSize: '0.85rem',
                      }}
                    >
                      Customize in Studio →
                    </Link>
                    <Link
                      href={`/blueprints?theme=${ds.id}`}
                      style={{
                        padding: '0.6rem 1.25rem',
                        borderRadius: '8px',
                        background: 'var(--zx-elevated)',
                        color: 'inherit',
                        fontWeight: 700,
                        textDecoration: 'none',
                        fontSize: '0.85rem',
                      }}
                    >
                      View Blueprints
                    </Link>
                  </div>
                </div>

                {/* Right — palette swatches */}
                <div style={{
                  display: 'flex',
                  flexDirection: 'column',
                  borderLeft: '1px solid var(--zx-elevated)',
                }}>
                  {ds.palette.map(p => (
                    <div
                      key={p.role}
                      style={{
                        flex: 1,
                        display: 'flex',
                        alignItems: 'center',
                        padding: '0.5rem 1rem',
                        gap: '0.75rem',
                        borderBottom: '1px solid rgba(255,255,255,0.04)',
                        minHeight: '0',
                      }}
                    >
                      <div style={{
                        width: '28px', height: '28px',
                        borderRadius: '6px',
                        background: p.color,
                        border: '2px solid rgba(255,255,255,0.08)',
                        flexShrink: 0,
                      }} />
                      <div style={{ flex: 1, minWidth: 0 }}>
                        <div style={{ fontSize: '0.72rem', fontWeight: 700, opacity: 0.6 }}>{p.role}</div>
                        <code style={{ fontSize: '0.72rem', fontFamily: 'ui-monospace, monospace', color: p.color, opacity: 0.85 }}>
                          {p.color}
                        </code>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── CLI install example ── */}
      <section style={{ padding: '3rem 2rem', textAlign: 'center', maxWidth: '700px', margin: '0 auto' }}>
        <h2 style={{ fontSize: '1.5rem', fontWeight: 700, margin: '0 0 0.75rem', letterSpacing: '-0.02em', opacity: 0.8 }}>
          One prop to switch everything.
        </h2>
        <p style={{ opacity: 0.5, marginBottom: '1.5rem', lineHeight: 1.6 }}>
          Write your page once. Switch between any design language with a single prop change.
        </p>
        <pre style={{
          background: 'var(--zx-elevated)',
          padding: '1.5rem',
          borderRadius: '10px',
          fontSize: '0.875rem',
          fontFamily: 'ui-monospace, monospace',
          textAlign: 'left',
          lineHeight: 1.7,
          overflowX: 'auto',
        }}>
          {`// Before
<Experience preset="zenix">
  <App />
</Experience>

// After — entire design language changes
<Experience preset="ocean">
  <App />
</Experience>`}
        </pre>
      </section>

      {/* ── Color Theory Engine ── */}
      <ColorTheoryClient />

      {/* ── Final CTA ── */}
      <section style={{
        padding: '5rem 2rem',
        textAlign: 'center',
        borderTop: '1px solid var(--zx-elevated)',
        marginTop: '4rem',
      }}>
        <h2 style={{ fontSize: '2rem', fontWeight: 700, margin: '0 0 1rem', letterSpacing: '-0.03em' }}>
          Found your language?
        </h2>
        <p style={{ opacity: 0.55, marginBottom: '2rem', maxWidth: '400px', margin: '0 auto 2rem', lineHeight: 1.6 }}>
          Open the Theme Studio. Customize palette, radius, and motion. Generate your install command.
        </p>
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
          <Link
            href="/studio"
            style={{
              padding: '0.875rem 2rem',
              borderRadius: 'var(--zx-radius-surface)',
              background: 'var(--zx-primary)',
              color: 'var(--zx-background)',
              fontWeight: 700,
              textDecoration: 'none',
              fontSize: '1rem',
            }}
          >
            Open Theme Studio →
          </Link>
          <Link
            href="/blueprints"
            style={{
              padding: '0.875rem 2rem',
              borderRadius: 'var(--zx-radius-surface)',
              background: 'var(--zx-elevated)',
              color: 'inherit',
              fontWeight: 700,
              textDecoration: 'none',
              fontSize: '1rem',
            }}
          >
            Browse Blueprints
          </Link>
        </div>
      </section>
    </div>
  );
}
