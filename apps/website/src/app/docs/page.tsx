export default function DocsPage() {
  return (
    <div>
      <h1 style={{ fontSize: '3rem', fontWeight: 700, margin: '0 0 2rem', letterSpacing: '-0.03em' }}>Getting Started</h1>
      <p style={{ fontSize: '1.125rem', opacity: 0.8, lineHeight: 1.6, marginBottom: '2rem' }}>
        ZenixUI is an unstyled, copying-first React component library that allows you to instantly adopt four complete, distinct design systems. Instead of distributing logic as NPM packages, we distribute <strong>Experiences</strong>.
      </p>

      <h2 style={{ fontSize: '1.5rem', fontWeight: 600, margin: '3rem 0 1rem' }}>Installation</h2>
      <pre style={{ margin: 0, padding: '1.5rem', background: 'var(--zx-elevated)', borderRadius: 'var(--zx-radius-sm)', overflowX: 'auto', fontSize: '0.875rem', fontFamily: 'monospace' }}>
        {`npm install @zenixui/react @zenixui/core @zenixui/components`}
      </pre>

      <h2 style={{ fontSize: '1.5rem', fontWeight: 600, margin: '3rem 0 1rem' }}>Usage</h2>
      <p style={{ fontSize: '1rem', opacity: 0.8, lineHeight: 1.6, marginBottom: '1.5rem' }}>
        Wrap your application or sections of it with the <code style={{ background: 'var(--zx-elevated)', padding: '0.2rem 0.4rem', borderRadius: '4px' }}>Experience</code> provider. Pass a preset name to inject all the CSS custom properties, scenes, and effect layers.
      </p>
      <pre style={{ margin: 0, padding: '1.5rem', background: 'var(--zx-elevated)', borderRadius: 'var(--zx-radius-sm)', overflowX: 'auto', fontSize: '0.875rem', fontFamily: 'monospace' }}>
        {`import { Experience } from '@zenixui/react';
import { Button } from '@zenixui/components';

export default function App() {
  return (
    <Experience preset="night-city">
      <Button variant="cyber">Initiate Hack</Button>
    </Experience>
  );
}`}
      </pre>

      <h2 style={{ fontSize: '1.5rem', fontWeight: 600, margin: '3rem 0 1rem' }}>Blueprints</h2>
      <p style={{ fontSize: '1rem', opacity: 0.8, lineHeight: 1.6, marginBottom: '1.5rem' }}>
        ZenixUI's real power comes from Blueprints. Instead of building a complex Hero section from scratch using our atomic components, simply navigate to the Blueprints tab, select a category like 'Landing', choose your theme, and copy the full page code directly into your app.
      </p>
    </div>
  );
}
