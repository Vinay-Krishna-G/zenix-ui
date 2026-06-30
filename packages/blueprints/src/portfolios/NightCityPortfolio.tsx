import { Surface, Container, Stack, Grid, Pattern } from '@zenixui/components';

export function NightCityPortfolio() {
  return (
    <div style={{ paddingBottom: '4rem' }}>
      {/* HERO SECTION (TerminalCard) */}
      <Pattern.Root padded style={{ paddingTop: '8rem', paddingBottom: '4rem' }}>
        <Container size="md">
          <Surface variant="card" style={{ padding: 0, overflow: 'hidden', border: '1px solid var(--zx-accent)', boxShadow: '0 0 30px rgba(236,72,153,0.2)' }}>
            <div style={{ background: 'rgba(0,0,0,0.5)', padding: '0.75rem 1rem', borderBottom: '1px solid var(--zx-accent)', display: 'flex', gap: '0.5rem' }}>
              <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#ef4444' }} />
              <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#eab308' }} />
              <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#22c55e' }} />
            </div>
            <div style={{ padding: '3rem 2rem', fontFamily: 'monospace', fontSize: '1.2rem', lineHeight: 1.8 }}>
              <span style={{ color: 'var(--zx-accent)' }}>~ $</span> whoami<br />
              <br />
              <strong>&gt; SYSTEM ENGINEER // FULL STACK HACKER</strong><br />
              &gt; Specializing in high-performance computing, WebGL engines, and cyberpunk interfaces.<br />
              <br />
              <span style={{ color: 'var(--zx-accent)' }}>~ $</span> status<br />
              <span style={{ color: '#22c55e' }}>[ONLINE] READY FOR DEPLOYMENT</span><span style={{ animation: 'blink 1s step-end infinite' }}>_</span>
            </div>
          </Surface>
        </Container>
      </Pattern.Root>

      {/* TECH STACK (StatsGrid) */}
      <Pattern.Root padded>
        <Pattern.Content gap="xl">
          <h2 style={{ fontSize: '2.5rem', margin: 0, textTransform: 'uppercase', borderBottom: '2px solid var(--zx-accent)', paddingBottom: '0.5rem', display: 'inline-block' }}>Tech Stack</h2>
          <Grid columns={4} gap="md">
            {['React/Next.js', 'WebGL/Three', 'Rust/WASM', 'PostgreSQL', 'Redis', 'Docker', 'Kubernetes', 'GraphQL'].map(tech => (
              <Surface key={tech} variant="card" style={{ padding: '1.5rem', textAlign: 'center', border: '1px solid var(--zx-elevated)' }}>
                <span style={{ fontFamily: 'monospace', fontWeight: 'bold' }}>{tech}</span>
              </Surface>
            ))}
          </Grid>
        </Pattern.Content>
      </Pattern.Root>

      {/* TIMELINE */}
      <Pattern.Root padded>
        <Pattern.Content gap="xl">
          <h2 style={{ fontSize: '2.5rem', margin: 0, textTransform: 'uppercase', borderBottom: '2px solid #3b82f6', paddingBottom: '0.5rem', display: 'inline-block' }}>System Logs // Timeline</h2>
          <Stack gap="xl" style={{ borderLeft: '2px solid var(--zx-elevated)', marginLeft: '1rem', paddingLeft: '2rem' }}>
            {[
              { year: '2026', title: 'Lead Architect @ NeonCorp', desc: 'Designed the global neural-net UI infrastructure.' },
              { year: '2024', title: 'Senior Dev @ DataGrid', desc: 'Optimized real-time trading terminals in WebGL.' },
              { year: '2022', title: 'Hacker @ UnderCity', desc: 'Built open-source decentralized encrypted chats.' }
            ].map(item => (
              <div key={item.year} style={{ position: 'relative' }}>
                <div style={{ position: 'absolute', left: '-2.4rem', top: '0.25rem', width: '12px', height: '12px', borderRadius: '50%', background: 'var(--zx-accent)', boxShadow: '0 0 10px var(--zx-accent)' }} />
                <span style={{ fontFamily: 'monospace', color: 'var(--zx-accent)', fontWeight: 'bold' }}>[{item.year}]</span>
                <h3 style={{ margin: '0.5rem 0', fontSize: '1.5rem', textTransform: 'uppercase' }}>{item.title}</h3>
                <p style={{ margin: 0, opacity: 0.7 }}>{item.desc}</p>
              </div>
            ))}
          </Stack>
        </Pattern.Content>
      </Pattern.Root>

      {/* CONTACT */}
      <Pattern.Root padded>
        <Container size="sm">
          <Surface variant="glass" style={{ padding: '4rem', textAlign: 'center', border: '1px dashed var(--zx-accent)' }}>
            <h2 style={{ fontSize: '2.5rem', margin: '0 0 1rem', textTransform: 'uppercase' }}>Initiate Connection</h2>
            <button style={{ 
              background: 'transparent', 
              color: 'var(--zx-accent)', 
              border: '2px solid var(--zx-accent)', 
              padding: '1rem 3rem', 
              fontSize: '1.25rem', 
              fontWeight: 900, 
              textTransform: 'uppercase', 
              cursor: 'pointer',
              marginTop: '2rem',
              boxShadow: 'inset 0 0 10px rgba(236,72,153,0.3)'
            }}>
              Open Channel
            </button>
          </Surface>
        </Container>
      </Pattern.Root>

      <style>{`
        @keyframes blink { 0%, 100% { opacity: 1; } 50% { opacity: 0; } }
      `}</style>
    </div>
  );
}
