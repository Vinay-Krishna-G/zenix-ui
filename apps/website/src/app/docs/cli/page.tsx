export default function CliDocsPage() {
  return (
    <div style={{ maxWidth: '800px' }}>
      <h1 style={{ fontSize: '3rem', fontWeight: 700, margin: '0 0 2rem', letterSpacing: '-0.03em' }}>CLI Reference</h1>
      <p style={{ fontSize: '1.25rem', opacity: 0.8, lineHeight: 1.6, marginBottom: '4rem' }}>
        The ZenixUI CLI distributes complete, interactive experiences directly into your codebase. You do not install atomic components individually.
      </p>

      <h2 style={{ fontSize: '2rem', fontWeight: 700, margin: '0 0 1rem', letterSpacing: '-0.02em' }}>Initialization</h2>
      <p style={{ fontSize: '1.125rem', opacity: 0.8, lineHeight: 1.6, marginBottom: '1.5rem' }}>
        Run the `init` command to set up your project, configure `zenix.json`, and automatically install the core dependencies.
      </p>
      <pre style={{ margin: '0 0 4rem', padding: '1.5rem', background: 'var(--zx-elevated)', borderRadius: 'var(--zx-radius-sm)', overflowX: 'auto', fontSize: '0.875rem', fontFamily: 'monospace' }}>
        {`npx zenix-ui init`}
      </pre>

      <h2 style={{ fontSize: '2rem', fontWeight: 700, margin: '0 0 1rem', letterSpacing: '-0.02em' }}>Add an Experience</h2>
      <p style={{ fontSize: '1.125rem', opacity: 0.8, lineHeight: 1.6, marginBottom: '1.5rem' }}>
        Use the `add` command to download a complete blueprint from the Blueprint Gallery directly into your application.
      </p>
      <pre style={{ margin: '0 0 2rem', padding: '1.5rem', background: 'var(--zx-elevated)', borderRadius: 'var(--zx-radius-sm)', overflowX: 'auto', fontSize: '0.875rem', fontFamily: 'monospace' }}>
        {`npx zenix-ui add midnight-portfolio`}
      </pre>

      <div style={{ padding: '1.5rem', background: 'var(--zx-surface)', border: '1px solid var(--zx-elevated)', borderRadius: 'var(--zx-radius-sm)', marginBottom: '4rem' }}>
        <h4 style={{ margin: '0 0 0.5rem', fontWeight: 700 }}>What happens under the hood?</h4>
        <p style={{ margin: 0, opacity: 0.8, lineHeight: 1.5 }}>
          The CLI resolves the requested blueprint, determines any missing component dependencies, and injects the complete source code directly into your configured `src/experiences` directory so you can customize it completely.
        </p>
      </div>

    </div>
  );
}
