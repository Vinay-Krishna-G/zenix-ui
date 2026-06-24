'use client';

import { useState } from 'react';
import { Surface, Button, Input, Badge } from '@zenixui/components';
import { Experience } from '@zenixui/react';
import type { ThemeConfig } from '@zenixui/core';
import { ZenixDashboard } from '@zenixui/blueprints';
import { track } from '@vercel/analytics/react';

const PRESETS: Record<string, ThemeConfig> = {
  Zenix: { name: 'Zenix', base: 'zenix', accent: '#6366f1', radius: '8px', motion: 'normal', density: 'comfortable', typography: 'Inter' },
  Linear: { name: 'Linear', base: 'zenix', accent: '#5e6ad2', radius: '4px', motion: 'subtle', density: 'compact', typography: 'Inter' },
  Apple: { name: 'Apple', base: 'ocean', accent: '#0066cc', radius: '16px', motion: 'immersive', density: 'spacious', typography: 'San Francisco, sans-serif' },
  Vercel: { name: 'Vercel', base: 'zenix', accent: '#000000', radius: '6px', motion: 'subtle', density: 'comfortable', typography: 'Geist, sans-serif' },
  Stripe: { name: 'Stripe', base: 'ocean', accent: '#635bff', radius: '8px', motion: 'normal', density: 'comfortable', typography: 'Helvetica Neue' },
  Notion: { name: 'Notion', base: 'zenix', accent: '#000000', radius: '4px', motion: 'none', density: 'comfortable', typography: 'ui-sans-serif, system-ui' },
  Raycast: { name: 'Raycast', base: 'ocean', accent: '#ff6363', radius: '12px', motion: 'subtle', density: 'compact', typography: 'Inter' },
};

export default function ThemeStudioClient() {
  const [config, setConfig] = useState<ThemeConfig>(PRESETS['Linear']);

  const handleExport = () => {
    track('Export Theme', { themeName: config.name });
    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(config, null, 2));
    const downloadAnchorNode = document.createElement('a');
    downloadAnchorNode.setAttribute("href", dataStr);
    downloadAnchorNode.setAttribute("download", `${config.name.toLowerCase().replace(/\s+/g, '-')}-theme.json`);
    document.body.appendChild(downloadAnchorNode);
    downloadAnchorNode.click();
    downloadAnchorNode.remove();
  };

  return (
    <div style={{ display: 'flex', height: '100vh', overflow: 'hidden' }}>
      
      {/* LEFT PANE: CONTROLS */}
      <div style={{ width: '350px', borderRight: '1px solid var(--zx-elevated)', display: 'flex', flexDirection: 'column', background: 'var(--zx-background)', position: 'relative', zIndex: 100 }}>
        <div style={{ padding: '1.5rem', borderBottom: '1px solid var(--zx-elevated)' }}>
          <h1 style={{ fontSize: '1.5rem', fontWeight: 600, margin: '0 0 0.5rem' }}>Theme Studio</h1>
          <p style={{ opacity: 0.6, fontSize: '0.875rem', margin: 0 }}>Design your system and export.</p>
        </div>

        <div style={{ padding: '1.5rem', overflowY: 'auto', flex: 1, display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          
          {/* Presets */}
          <div>
            <label style={{ display: 'block', fontSize: '0.75rem', fontWeight: 600, textTransform: 'uppercase', opacity: 0.5, marginBottom: '0.75rem' }}>Presets</label>
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

          {/* Configuration */}
          <div>
            <label style={{ display: 'block', fontSize: '0.75rem', fontWeight: 600, textTransform: 'uppercase', opacity: 0.5, marginBottom: '0.75rem' }}>Configuration</label>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                <span style={{ fontSize: '0.875rem', fontWeight: 500 }}>Base Engine</span>
                <select 
                  value={config.base}
                  onChange={e => setConfig({ ...config, base: e.target.value })}
                  style={{ padding: '0.5rem', borderRadius: 'var(--zx-radius-sm)', border: '1px solid var(--zx-elevated)', background: 'var(--zx-surface)', color: 'inherit' }}
                >
                  <option value="zenix">Zenix (Solid)</option>
                  <option value="ocean">Ocean (Glass)</option>
                  <option value="night-city">Night City (Cyber)</option>
                  <option value="autumn">Autumn (Organic)</option>
                </select>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                <span style={{ fontSize: '0.875rem', fontWeight: 500 }}>Accent Color</span>
                <div style={{ display: 'flex', gap: '0.5rem' }}>
                  <input type="color" value={config.accent || '#000000'} onChange={e => setConfig({ ...config, accent: e.target.value })} style={{ width: '40px', height: '40px', padding: 0, border: 'none', borderRadius: '4px', cursor: 'pointer' }} />
                  <Input value={config.accent} onChange={e => setConfig({ ...config, accent: e.target.value })} style={{ flex: 1 }} />
                </div>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                <span style={{ fontSize: '0.875rem', fontWeight: 500 }}>Border Radius</span>
                <Input value={config.radius} onChange={e => setConfig({ ...config, radius: e.target.value })} />
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                <span style={{ fontSize: '0.875rem', fontWeight: 500 }}>Typography Font Family</span>
                <Input value={config.typography} onChange={e => setConfig({ ...config, typography: e.target.value })} />
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                <span style={{ fontSize: '0.875rem', fontWeight: 500 }}>Density Scale</span>
                <select 
                  value={config.density}
                  onChange={e => setConfig({ ...config, density: e.target.value as any })}
                  style={{ padding: '0.5rem', borderRadius: 'var(--zx-radius-sm)', border: '1px solid var(--zx-elevated)', background: 'var(--zx-surface)', color: 'inherit' }}
                >
                  <option value="compact">Compact</option>
                  <option value="comfortable">Comfortable</option>
                  <option value="spacious">Spacious</option>
                </select>
              </div>

            </div>
          </div>

        </div>

        <div style={{ padding: '1.5rem', borderTop: '1px solid var(--zx-elevated)' }}>
          <Button fullWidth onClick={handleExport}>
            Export Theme JSON
          </Button>
        </div>
      </div>

      {/* RIGHT PANE: LIVE PREVIEW */}
      <div style={{ flex: 1, position: 'relative', overflowY: 'auto' }}>
        <Experience config={config}>
          <ZenixDashboard />
        </Experience>
      </div>

    </div>
  );
}
