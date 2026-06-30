import { Launchpad } from '../../components/home/Launchpad';

export const metadata = {
  title: 'Launchpad - ZenixUI',
  description: 'Design and generate complete digital experiences.',
};

export default function LaunchpadPage() {
  return (
    <div style={{ minHeight: '100vh', background: '#09090B', color: '#FFF' }}>
      <nav style={{ padding: '1.5rem 2rem', borderBottom: '1px solid rgba(255,255,255,0.1)', display: 'flex', justifyContent: 'space-between' }}>
        <div style={{ fontWeight: 800, fontSize: '1.25rem', letterSpacing: '-0.02em' }}>ZenixUI</div>
        <div style={{ display: 'flex', gap: '2rem', fontSize: '0.875rem', fontWeight: 500, opacity: 0.7 }}>
          <span>Documentation</span>
          <span style={{ color: 'var(--zx-primary)' }}>Launchpad</span>
          <span>GitHub</span>
        </div>
      </nav>
      
      <Launchpad />
    </div>
  );
}
