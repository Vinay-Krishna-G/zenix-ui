import { Surface, Button, Input, Textarea, Badge } from '@zenixui/components';
import { Experience } from '@zenixui/react';
import Link from 'next/link';

export default function ComponentsPage() {
  const renderComparisonGrid = (content: React.ReactNode) => (
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1px', background: 'var(--zx-elevated)', border: '1px solid var(--zx-elevated)', borderRadius: 'var(--zx-radius-surface)', overflow: 'hidden' }}>
      <Experience preset="zenix">
        <div style={{ background: 'var(--zx-background)', padding: '2rem', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '160px' }}>
          <div style={{ fontSize: '0.75rem', fontWeight: 600, opacity: 0.5, marginBottom: '1rem', textTransform: 'uppercase' }}>Zenix</div>
          {content}
        </div>
      </Experience>
      <Experience preset="ocean">
        <div style={{ background: 'var(--zx-background)', padding: '2rem', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '160px' }}>
          <div style={{ fontSize: '0.75rem', fontWeight: 600, opacity: 0.5, marginBottom: '1rem', textTransform: 'uppercase' }}>Ocean</div>
          {content}
        </div>
      </Experience>
      <Experience preset="midnight">
        <div style={{ background: 'var(--zx-background)', padding: '2rem', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '160px' }}>
          <div style={{ fontSize: '0.75rem', fontWeight: 600, opacity: 0.5, marginBottom: '1rem', textTransform: 'uppercase' }}>Night City</div>
          {content}
        </div>
      </Experience>
      <Experience preset="autumn">
        <div style={{ background: 'var(--zx-background)', padding: '2rem', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '160px' }}>
          <div style={{ fontSize: '0.75rem', fontWeight: 600, opacity: 0.5, marginBottom: '1rem', textTransform: 'uppercase' }}>Autumn</div>
          {content}
        </div>
      </Experience>
    </div>
  );

  return (
    <div style={{ padding: '0 0 10rem', maxWidth: '1000px' }}>
      <div style={{ marginBottom: '4rem' }}>
        <h1 style={{ fontSize: '3rem', fontWeight: 700, margin: '0 0 1rem', letterSpacing: '-0.03em' }}>
          Atomic Components
        </h1>
        <p style={{ fontSize: '1.25rem', opacity: 0.6, lineHeight: 1.6 }}>
          The foundation of ZenixUI. These primitive building blocks automatically adapt to the overarching <Link href="/themes" style={{ color: 'var(--zx-primary)' }}>Theme</Link> context they are placed in.
        </p>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '6rem' }}>
        
        {/* BUTTON */}
        <section>
          <div style={{ marginBottom: '2rem' }}>
            <h2 style={{ fontSize: '2rem', fontWeight: 600, margin: '0 0 0.5rem' }}>Button</h2>
            <p style={{ opacity: 0.7, margin: 0 }}>A fundamental interactive element. Buttons naturally map to the active theme's styling.</p>
          </div>
          <div style={{ marginBottom: '2rem' }}>
            {renderComparisonGrid(<Button>Primary Action</Button>)}
          </div>
          <pre style={{ margin: 0, padding: '1.5rem', background: 'var(--zx-elevated)', borderRadius: 'var(--zx-radius-surface)', overflowX: 'auto', fontSize: '0.875rem', fontFamily: 'monospace' }}>
            {`import { Button } from '@zenixui/components';\n\n<Button>Primary Action</Button>`}
          </pre>
        </section>

        {/* INPUT */}
        <section>
          <div style={{ marginBottom: '2rem' }}>
            <h2 style={{ fontSize: '2rem', fontWeight: 600, margin: '0 0 0.5rem' }}>Input</h2>
            <p style={{ opacity: 0.7, margin: 0 }}>A standard text input field. Adjusts borders and backgrounds to match the theme density.</p>
          </div>
          <div style={{ marginBottom: '2rem' }}>
            {renderComparisonGrid(<div style={{ width: '100%', maxWidth: '240px' }}><Input placeholder="Placeholder..." /></div>)}
          </div>
          <pre style={{ margin: 0, padding: '1.5rem', background: 'var(--zx-elevated)', borderRadius: 'var(--zx-radius-surface)', overflowX: 'auto', fontSize: '0.875rem', fontFamily: 'monospace' }}>
            {`import { Input } from '@zenixui/components';\n\n<Input placeholder="Placeholder..." />`}
          </pre>
        </section>

        {/* TEXTAREA */}
        <section>
          <div style={{ marginBottom: '2rem' }}>
            <h2 style={{ fontSize: '2rem', fontWeight: 600, margin: '0 0 0.5rem' }}>Textarea</h2>
            <p style={{ opacity: 0.7, margin: 0 }}>A multi-line text input. Shares styling primitives with Input.</p>
          </div>
          <div style={{ marginBottom: '2rem' }}>
            {renderComparisonGrid(<div style={{ width: '100%', maxWidth: '240px' }}><Textarea rows={3} placeholder="Type a message..." /></div>)}
          </div>
          <pre style={{ margin: 0, padding: '1.5rem', background: 'var(--zx-elevated)', borderRadius: 'var(--zx-radius-surface)', overflowX: 'auto', fontSize: '0.875rem', fontFamily: 'monospace' }}>
            {`import { Textarea } from '@zenixui/components';\n\n<Textarea rows={3} placeholder="Type a message..." />`}
          </pre>
        </section>

        {/* BADGE */}
        <section>
          <div style={{ marginBottom: '2rem' }}>
            <h2 style={{ fontSize: '2rem', fontWeight: 600, margin: '0 0 0.5rem' }}>Badge</h2>
            <p style={{ opacity: 0.7, margin: 0 }}>A small visual indicator for statuses, tags, or categories.</p>
          </div>
          <div style={{ marginBottom: '2rem' }}>
            {renderComparisonGrid(<Badge tone="neutral">Active Status</Badge>)}
          </div>
          <pre style={{ margin: 0, padding: '1.5rem', background: 'var(--zx-elevated)', borderRadius: 'var(--zx-radius-surface)', overflowX: 'auto', fontSize: '0.875rem', fontFamily: 'monospace' }}>
            {`import { Badge } from '@zenixui/components';\n\n<Badge tone="neutral">Active Status</Badge>`}
          </pre>
        </section>

      </div>
    </div>
  );
}
