'use client';

import { useState } from 'react';
import { Surface, Button, Input, Badge } from '@zenixui/components';
import { Experience } from '@zenixui/react';
import type { ThemeConfig } from '@zenixui/core';
import { ZenixDashboard } from '@zenixui/blueprints';
import { track } from '@vercel/analytics/react';

const PRESETS: Record<string, ThemeConfig> = {
  Zenix: { name: 'Zenix', base: 'zenix', palette: { primary: '#6366f1' }, radius: 'md', motion: 'standard', density: 'comfortable', typography: { heading: 'inter', body: 'inter' } },
  Linear: { name: 'Linear', base: 'zenix', palette: { primary: '#5e6ad2' }, radius: 'sm', motion: 'minimal', density: 'compact', typography: { heading: 'inter', body: 'inter' } },
  Apple: { name: 'Apple', base: 'ocean', palette: { primary: '#0066cc' }, radius: 'xl', motion: 'expressive', density: 'spacious', typography: { heading: 'inter', body: 'system' } },
  Vercel: { name: 'Vercel', base: 'zenix', palette: { primary: '#000000' }, radius: 'sm', motion: 'minimal', density: 'comfortable', typography: { heading: 'geist', body: 'geist' } },
};

const PALETTES = [
  { name: 'Ocean Blue', color: '#0066cc' },
  { name: 'Arctic', color: '#0ea5e9' },
  { name: 'Emerald', color: '#10b981' },
  { name: 'Sunset', color: '#f97316' },
  { name: 'Terminal Green', color: '#4ade80' },
  { name: 'Dracula', color: '#bd93f9' },
  { name: 'Nord', color: '#88c0d0' },
  { name: 'Tokyo Night', color: '#7aa2f7' },
  { name: 'Catppuccin', color: '#cba6f7' },
  { name: 'Zenix Indigo', color: '#6366f1' },
];

export default function ThemeStudioClient() {
  const [config, setConfig] = useState<ThemeConfig>(PRESETS['Linear']);
  const [showCommand, setShowCommand] = useState(false);

  const handleDownloadTS = () => {
    track('Download Theme TS', { themeName: config.name });
    const content = `import type { ThemeConfig } from '@zenixui/core';

export const themeConfig = ${JSON.stringify(config, null, 2)} satisfies ThemeConfig;
`;
    const dataStr = "data:text/typescript;charset=utf-8," + encodeURIComponent(content);
    const downloadAnchorNode = document.createElement('a');
    downloadAnchorNode.setAttribute("href", dataStr);
    downloadAnchorNode.setAttribute("download", `zenix.ts`);
    document.body.appendChild(downloadAnchorNode);
    downloadAnchorNode.click();
    downloadAnchorNode.remove();
  };

  return (
    <div style={{ display: 'flex', height: '100vh', overflow: 'hidden' }}>
      
      {/* LEFT PANE: CONTROLS */}
      <div style={{ width: '380px', borderRight: '1px solid var(--zx-elevated)', display: 'flex', flexDirection: 'column', background: 'var(--zx-background)', position: 'relative', zIndex: 100 }}>
        <div style={{ padding: '1.5rem', borderBottom: '1px solid var(--zx-elevated)' }}>
          <h1 style={{ fontSize: '1.5rem', fontWeight: 600, margin: '0 0 0.5rem' }}>Theme Studio</h1>
          <p style={{ opacity: 0.6, fontSize: '0.875rem', margin: 0 }}>Design your system and generate CLI commands.</p>
        </div>

        <div style={{ padding: '1.5rem', overflowY: 'auto', flex: 1, display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          
          {/* Presets */}
          <div>
            <label style={{ display: 'block', fontSize: '0.75rem', fontWeight: 600, textTransform: 'uppercase', opacity: 0.5, marginBottom: '0.75rem' }}>Start with a Preset</label>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
              {Object.keys(PRESETS).map(key => (
                <button 
                  key={key}
                  onClick={() => {
                    setConfig(PRESETS[key]);
                    track('Theme View', { preset: key });
                  }}
                  style={{
                    padding: '0.5rem 0.75rem',
                    fontSize: '0.875rem',
                    fontWeight: 500,
                    borderRadius: 'var(--zx-radius-sm)',
                    border: '1px solid',
                    borderColor: config.name === PRESETS[key].name ? 'var(--zx-primary)' : 'var(--zx-elevated)',
                    background: config.name === PRESETS[key].name ? 'var(--zx-elevated)' : 'transparent',
                    color: 'var(--zx-primary)',
                    cursor: 'pointer'
                  }}
                >
                  {key}
                </button>
              ))}
            </div>
          </div>

          {/* Palette System */}
          <div>
            <label style={{ display: 'block', fontSize: '0.75rem', fontWeight: 600, textTransform: 'uppercase', opacity: 0.5, marginBottom: '0.75rem' }}>Palette</label>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
              {PALETTES.map(p => (
                <button
                  key={p.name}
                  title={p.name}
                  onClick={() => setConfig({ ...config, palette: { ...config.palette, primary: p.color } })}
                  style={{
                    width: '32px',
                    height: '32px',
                    borderRadius: '50%',
                    background: p.color,
                    border: config.palette?.primary === p.color ? '2px solid var(--zx-text-primary)' : '1px solid var(--zx-border)',
                    cursor: 'pointer',
                    padding: 0,
                    boxShadow: config.palette?.primary === p.color ? '0 0 0 2px var(--zx-background)' : 'none',
                    transform: config.palette?.primary === p.color ? 'scale(1.1)' : 'scale(1)',
                    transition: 'all 0.2s ease'
                  }}
                />
              ))}
            </div>
          </div>

          {/* Configuration */}
          <div>
            <label style={{ display: 'block', fontSize: '0.75rem', fontWeight: 600, textTransform: 'uppercase', opacity: 0.5, marginBottom: '0.75rem' }}>Properties</label>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                <span style={{ fontSize: '0.875rem', fontWeight: 500 }}>Base Engine</span>
                <select 
                  value={config.base}
                  onChange={e => setConfig({ ...config, base: e.target.value as any })}
                  style={{ padding: '0.5rem', borderRadius: 'var(--zx-radius-sm)', border: '1px solid var(--zx-elevated)', background: 'var(--zx-surface)', color: 'inherit' }}
                >
                  <option value="zenix">Zenix (Solid)</option>
                  <option value="ocean">Ocean (Glass)</option>
                  <option value="night-city">Night City (Cyber)</option>
                  <option value="autumn">Autumn (Organic)</option>
                </select>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                <span style={{ fontSize: '0.875rem', fontWeight: 500 }}>Border Radius</span>
                <select 
                  value={config.radius || 'none'}
                  onChange={e => setConfig({ ...config, radius: e.target.value as any })}
                  style={{ padding: '0.5rem', borderRadius: 'var(--zx-radius-sm)', border: '1px solid var(--zx-elevated)', background: 'var(--zx-surface)', color: 'inherit' }}
                >
                  <option value="none">None</option>
                  <option value="sm">Small</option>
                  <option value="md">Medium</option>
                  <option value="lg">Large</option>
                  <option value="xl">Extra Large</option>
                  <option value="full">Full (Pill)</option>
                </select>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                <span style={{ fontSize: '0.875rem', fontWeight: 500 }}>Density Scale</span>
                <select 
                  value={config.density || 'comfortable'}
                  onChange={e => setConfig({ ...config, density: e.target.value as any })}
                  style={{ padding: '0.5rem', borderRadius: 'var(--zx-radius-sm)', border: '1px solid var(--zx-elevated)', background: 'var(--zx-surface)', color: 'inherit' }}
                >
                  <option value="compact">Compact</option>
                  <option value="comfortable">Comfortable</option>
                  <option value="spacious">Spacious</option>
                </select>
              </div>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                <span style={{ fontSize: '0.875rem', fontWeight: 500 }}>Motion Profile</span>
                <select 
                  value={config.motion || 'standard'}
                  onChange={e => setConfig({ ...config, motion: e.target.value as any })}
                  style={{ padding: '0.5rem', borderRadius: 'var(--zx-radius-sm)', border: '1px solid var(--zx-elevated)', background: 'var(--zx-surface)', color: 'inherit' }}
                >
                  <option value="none">None</option>
                  <option value="minimal">Minimal</option>
                  <option value="standard">Standard</option>
                  <option value="expressive">Expressive</option>
                </select>
              </div>

            </div>
          </div>

        </div>

        <div style={{ padding: '1.5rem', borderTop: '1px solid var(--zx-elevated)', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          {showCommand ? (
            <div style={{ background: 'var(--zx-elevated)', padding: '1rem', borderRadius: 'var(--zx-radius-sm)' }}>
              <div style={{ fontSize: '0.75rem', opacity: 0.6, marginBottom: '0.5rem' }}>Install with this theme:</div>
              <code style={{ fontSize: '0.8rem', color: 'var(--zx-primary)' }}>
                npx zenix-ui add zenix-dashboard --config ./zenix.ts
              </code>
              <Button style={{ marginTop: '1rem' }} fullWidth onClick={handleDownloadTS}>
                Download zenix.ts
              </Button>
            </div>
          ) : (
            <Button fullWidth onClick={() => setShowCommand(true)}>
              Generate Install Command
            </Button>
          )}
        </div>
      </div>

      {/* RIGHT PANE: LIVE PREVIEW */}
      <div style={{ flex: 1, position: 'relative', overflowY: 'auto' }}>
        <Experience theme={config}>
          <ZenixDashboard />
        </Experience>
      </div>

    </div>
  );
}
