import { Surface, Button, Input, Textarea, Badge } from '@zenixui/components';
import Link from 'next/link';

export default function ComponentsPage() {
  return (
    <div style={{ padding: '6rem 2rem 10rem', maxWidth: '1000px', margin: '0 auto' }}>
      <div style={{ marginBottom: '4rem' }}>
        <h1 style={{ fontSize: '3rem', fontWeight: 700, margin: '0 0 1rem', letterSpacing: '-0.03em' }}>
          Atomic Components
        </h1>
        <p style={{ fontSize: '1.25rem', opacity: 0.6, lineHeight: 1.6 }}>
          The foundation of ZenixUI. These primitive building blocks automatically adapt to the overarching <Link href="/themes" style={{ color: 'var(--zx-primary)' }}>Theme</Link> context they are placed in.
        </p>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '4rem' }}>
        
        {/* BUTTON */}
        <section>
          <h2 style={{ fontSize: '2rem', fontWeight: 600, margin: '0 0 1.5rem', borderBottom: '1px solid var(--zx-elevated)', paddingBottom: '1rem' }}>Button</h2>
          <p style={{ opacity: 0.7, marginBottom: '2rem' }}>A fundamental interactive element. Buttons map to the primary accent of the active theme.</p>
          <Surface variant="card" style={{ padding: '2rem', display: 'flex', gap: '1rem', flexWrap: 'wrap', marginBottom: '2rem', border: '1px solid var(--zx-elevated)' }}>
            <Button variant="default">Default</Button>
            <Button variant="glass">Glass</Button>
            <Button variant="cyber">Cyber</Button>
            <Button variant="organic">Organic</Button>
            <Button isLoading>Loading</Button>
            <Button disabled>Disabled</Button>
          </Surface>
          <pre style={{ margin: 0, padding: '1.5rem', background: 'var(--zx-elevated)', borderRadius: 'var(--zx-radius-sm)', overflowX: 'auto', fontSize: '0.875rem', fontFamily: 'monospace' }}>
            {`import { Button } from '@zenixui/components';

<Button variant="default">Click Me</Button>
<Button variant="glass">Glass Button</Button>
<Button isLoading>Uploading...</Button>`}
          </pre>
        </section>

        {/* INPUT */}
        <section>
          <h2 style={{ fontSize: '2rem', fontWeight: 600, margin: '0 0 1.5rem', borderBottom: '1px solid var(--zx-elevated)', paddingBottom: '1rem' }}>Input</h2>
          <p style={{ opacity: 0.7, marginBottom: '2rem' }}>A standard text input field. Adjusts borders and backgrounds to match the theme density.</p>
          <Surface variant="card" style={{ padding: '2rem', display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '2rem', border: '1px solid var(--zx-elevated)', maxWidth: '400px' }}>
            <Input variant="default" placeholder="Default variant" />
            <Input variant="glass" placeholder="Glass variant" />
            <Input variant="terminal" placeholder="Terminal variant" />
            <Input variant="organic" placeholder="Organic variant" />
            <Input disabled placeholder="Disabled" />
          </Surface>
          <pre style={{ margin: 0, padding: '1.5rem', background: 'var(--zx-elevated)', borderRadius: 'var(--zx-radius-sm)', overflowX: 'auto', fontSize: '0.875rem', fontFamily: 'monospace' }}>
            {`import { Input } from '@zenixui/components';

<Input placeholder="Enter your email" />
<Input variant="glass" placeholder="Search..." />`}
          </pre>
        </section>

        {/* TEXTAREA */}
        <section>
          <h2 style={{ fontSize: '2rem', fontWeight: 600, margin: '0 0 1.5rem', borderBottom: '1px solid var(--zx-elevated)', paddingBottom: '1rem' }}>Textarea</h2>
          <p style={{ opacity: 0.7, marginBottom: '2rem' }}>A multi-line text input. Shares styling primitives with Input.</p>
          <Surface variant="card" style={{ padding: '2rem', display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '2rem', border: '1px solid var(--zx-elevated)', maxWidth: '500px' }}>
            <Textarea variant="default" placeholder="Default variant..." rows={3} />
            <Textarea variant="glass" placeholder="Glass variant..." rows={3} />
          </Surface>
          <pre style={{ margin: 0, padding: '1.5rem', background: 'var(--zx-elevated)', borderRadius: 'var(--zx-radius-sm)', overflowX: 'auto', fontSize: '0.875rem', fontFamily: 'monospace' }}>
            {`import { Textarea } from '@zenixui/components';

<Textarea rows={4} placeholder="Type your message here..." />`}
          </pre>
        </section>

        {/* BADGE */}
        <section>
          <h2 style={{ fontSize: '2rem', fontWeight: 600, margin: '0 0 1.5rem', borderBottom: '1px solid var(--zx-elevated)', paddingBottom: '1rem' }}>Badge</h2>
          <p style={{ opacity: 0.7, marginBottom: '2rem' }}>A small visual indicator for statuses, tags, or categories.</p>
          <Surface variant="card" style={{ padding: '2rem', display: 'flex', gap: '1rem', flexWrap: 'wrap', marginBottom: '2rem', border: '1px solid var(--zx-elevated)' }}>
            <Badge variant="solid" tone="neutral">Solid</Badge>
            <Badge variant="glass" tone="neutral">Glass</Badge>
            <Badge variant="terminal" tone="neutral">Terminal</Badge>
            <Badge variant="organic" tone="neutral">Organic</Badge>
            <Badge variant="solid" tone="critical">Error</Badge>
          </Surface>
          <pre style={{ margin: 0, padding: '1.5rem', background: 'var(--zx-elevated)', borderRadius: 'var(--zx-radius-sm)', overflowX: 'auto', fontSize: '0.875rem', fontFamily: 'monospace' }}>
            {`import { Badge } from '@zenixui/components';

<Badge variant="solid" tone="neutral">New</Badge>
<Badge variant="glass" tone="critical">Failed</Badge>`}
          </pre>
        </section>

      </div>
    </div>
  );
}
