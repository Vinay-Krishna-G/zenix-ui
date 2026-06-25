import Link from 'next/link';
import { Surface, Button } from '@zenixui/components';
import { FrameworkTabs } from './FrameworkTabs';

export default function DocsPage() {
  const workflowSteps = [
    { title: 'Browse Blueprints', desc: 'Find the perfect Landing Page, Dashboard, or Portfolio from 30+ production-ready options.' },
    { title: 'Copy Blueprint', desc: 'Grab the entire page code, not just individual components.' },
    { title: 'Paste Into Project', desc: 'Drop it into your Next.js, Vite, or Remix app instantly.' },
    { title: 'Customize Theme', desc: 'Swap between Zenix, Ocean, Night City, or Autumn with one prop.' },
    { title: 'Ship', desc: 'Deploy a premium, production-ready experience in minutes.' }
  ];

  return (
    <div style={{ maxWidth: '800px' }}>
      <h1 style={{ fontSize: '3rem', fontWeight: 700, margin: '0 0 2rem', letterSpacing: '-0.03em' }}>The Zenix Workflow</h1>
      <p style={{ fontSize: '1.25rem', opacity: 0.8, lineHeight: 1.6, marginBottom: '4rem' }}>
        ZenixUI fundamentally changes how you build web applications. Instead of assembling atomic components like Lego blocks, you install complete, production-ready <strong>Blueprints</strong> — entire pages with layouts, themes, and interactions — and customize them to fit your brand.
      </p>

      {/* VISUAL PIPELINE */}
      <div style={{ marginBottom: '5rem', position: 'relative' }}>
        <div style={{ position: 'absolute', left: '2rem', top: '2rem', bottom: '2rem', width: '2px', background: 'var(--zx-elevated)' }} />
        
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          {workflowSteps.map((step, i) => (
            <div key={i} style={{ display: 'flex', gap: '2rem', alignItems: 'flex-start', position: 'relative' }}>
              <div style={{ width: '4rem', height: '4rem', borderRadius: '50%', background: 'var(--zx-primary)', color: 'var(--zx-background)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.5rem', fontWeight: 700, flexShrink: 0, zIndex: 10, boxShadow: '0 0 0 8px var(--zx-background)' }}>
                {i + 1}
              </div>
              <Surface variant="card" style={{ padding: '1.5rem 2rem', flex: 1, border: '1px solid var(--zx-elevated)' }}>
                <h3 style={{ fontSize: '1.25rem', fontWeight: 700, margin: '0 0 0.5rem' }}>{step.title}</h3>
                <p style={{ opacity: 0.7, margin: 0, lineHeight: 1.5 }}>{step.desc}</p>
                {i === 0 && (
                  <div style={{ marginTop: '1.5rem' }}>
                    <Link href="/blueprints" style={{ textDecoration: 'none' }}>
                      <Button variant="default">Open Blueprint Gallery →</Button>
                    </Link>
                  </div>
                )}
              </Surface>
            </div>
          ))}
        </div>
      </div>

      <h2 style={{ fontSize: '2rem', fontWeight: 700, margin: '0 0 1rem', letterSpacing: '-0.02em' }}>Installation</h2>
      <p style={{ fontSize: '1.125rem', opacity: 0.8, lineHeight: 1.6, marginBottom: '1.5rem' }}>
        Before you can paste blueprints, you need the engine that powers them.
      </p>
      <pre style={{ margin: '0 0 4rem', padding: '1.5rem', background: 'var(--zx-elevated)', borderRadius: 'var(--zx-radius-sm)', overflowX: 'auto', fontSize: '0.875rem', fontFamily: 'monospace' }}>
        {`npm install @zenixui/react @zenixui/core @zenixui/components`}
      </pre>

      <FrameworkTabs />
    </div>
  );
}
