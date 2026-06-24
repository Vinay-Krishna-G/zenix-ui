'use client';

import { useState } from 'react';
import { Surface, Button, Input, Badge } from '@zenixui/components';
import { Experience } from '@zenixui/react';
import type { ThemeConfig } from '@zenixui/core';
import { blueprints } from '@zenixui/blueprints';
import { track } from '@vercel/analytics/react';

const PRESETS: Record<string, ThemeConfig> = {
  Zenix: { name: 'Zenix', base: 'zenix', palette: { primary: '#6366f1' }, radius: 'md', motion: 'standard', density: 'comfortable', typography: { heading: 'inter', body: 'inter' } },
  Linear: { name: 'Linear', base: 'zenix', palette: { primary: '#5e6ad2' }, radius: 'sm', motion: 'minimal', density: 'compact', typography: { heading: 'inter', body: 'inter' } },
  Apple: { name: 'Apple', base: 'ocean', palette: { primary: '#0066cc' }, radius: 'xl', motion: 'expressive', density: 'spacious', typography: { heading: 'inter', body: 'system' } },
  Vercel: { name: 'Vercel', base: 'zenix', palette: { primary: '#000000' }, radius: 'sm', motion: 'minimal', density: 'comfortable', typography: { heading: 'geist', body: 'geist' } },
};

const PALETTES = [
  { name: 'Ocean Blue', colors: { primary: '#0ea5e9', primaryHover: '#0284c7', primaryActive: '#0369a1', secondary: '#38bdf8', secondaryHover: '#7dd3fc', accent: '#3b82f6', background: '#0f172a', backgroundSecondary: '#1e293b', surface: '#1e293b', surfaceElevated: '#334155', textPrimary: '#f8fafc', textSecondary: '#94a3b8', textMuted: '#64748b', border: '#334155', borderHover: '#475569', focus: '#38bdf8' } },
  { name: 'Arctic', colors: { primary: '#2dd4bf', primaryHover: '#14b8a6', primaryActive: '#0f766e', secondary: '#5eead4', secondaryHover: '#99f6e4', accent: '#06b6d4', background: '#ffffff', backgroundSecondary: '#f8fafc', surface: '#ffffff', surfaceElevated: '#f1f5f9', textPrimary: '#0f172a', textSecondary: '#475569', textMuted: '#94a3b8', border: '#e2e8f0', borderHover: '#cbd5e1', focus: '#2dd4bf' } },
  { name: 'Emerald', colors: { primary: '#10b981', primaryHover: '#059669', primaryActive: '#047857', secondary: '#34d399', secondaryHover: '#6ee7b7', accent: '#059669', background: '#022c22', backgroundSecondary: '#064e3b', surface: '#064e3b', surfaceElevated: '#065f46', textPrimary: '#ecfdf5', textSecondary: '#a7f3d0', textMuted: '#6ee7b7', border: '#065f46', borderHover: '#047857', focus: '#10b981' } },
  { name: 'Sunset', colors: { primary: '#f97316', primaryHover: '#ea580c', primaryActive: '#c2410c', secondary: '#fb923c', secondaryHover: '#fdba74', accent: '#ef4444', background: '#fff7ed', backgroundSecondary: '#ffedd5', surface: '#ffffff', surfaceElevated: '#ffedd5', textPrimary: '#431407', textSecondary: '#9a3412', textMuted: '#c2410c', border: '#fed7aa', borderHover: '#fdba74', focus: '#f97316' } },
  { name: 'Terminal Green', colors: { primary: '#4ade80', primaryHover: '#22c55e', primaryActive: '#16a34a', secondary: '#86efac', secondaryHover: '#bbf7d0', accent: '#22c55e', background: '#000000', backgroundSecondary: '#0a0a0a', surface: '#0a0a0a', surfaceElevated: '#171717', textPrimary: '#4ade80', textSecondary: '#22c55e', textMuted: '#14532d', border: '#14532d', borderHover: '#166534', focus: '#4ade80' } },
  { name: 'Dracula', colors: { primary: '#bd93f9', primaryHover: '#ff79c6', primaryActive: '#ffb86c', secondary: '#8be9fd', secondaryHover: '#50fa7b', accent: '#ff79c6', background: '#282a36', backgroundSecondary: '#1e1f29', surface: '#44475a', surfaceElevated: '#6272a4', textPrimary: '#f8f8f2', textSecondary: '#bfbfbf', textMuted: '#6272a4', border: '#44475a', borderHover: '#6272a4', focus: '#bd93f9' } },
  { name: 'Nord', colors: { primary: '#88c0d0', primaryHover: '#81a1c1', primaryActive: '#5e81ac', secondary: '#8fbcbb', secondaryHover: '#88c0d0', accent: '#d08770', background: '#2e3440', backgroundSecondary: '#3b4252', surface: '#3b4252', surfaceElevated: '#434c5e', textPrimary: '#eceff4', textSecondary: '#e5e9f0', textMuted: '#d8dee9', border: '#4c566a', borderHover: '#434c5e', focus: '#88c0d0' } },
  { name: 'Tokyo Night', colors: { primary: '#7aa2f7', primaryHover: '#89ddff', primaryActive: '#2ac3de', secondary: '#bb9af7', secondaryHover: '#c0caf5', accent: '#f7768e', background: '#1a1b26', backgroundSecondary: '#16161e', surface: '#1f2335', surfaceElevated: '#292e42', textPrimary: '#a9b1d6', textSecondary: '#c0caf5', textMuted: '#565f89', border: '#292e42', borderHover: '#3b4261', focus: '#7aa2f7' } },
  { name: 'Catppuccin', colors: { primary: '#cba6f7', primaryHover: '#f5c2e7', primaryActive: '#f38ba8', secondary: '#89b4fa', secondaryHover: '#89dceb', accent: '#fab387', background: '#1e1e2e', backgroundSecondary: '#181825', surface: '#313244', surfaceElevated: '#45475a', textPrimary: '#cdd6f4', textSecondary: '#bac2de', textMuted: '#a6adc8', border: '#45475a', borderHover: '#585b70', focus: '#cba6f7' } },
];

const FRAMEWORKS = [
  { id: 'nextjs', name: 'Next.js' },
  { id: 'vite', name: 'Vite React' },
  { id: 'remix', name: 'Remix' },
  { id: 'astro', name: 'Astro' },
];

export default function ThemeStudioClient() {
  const [config, setConfig] = useState<ThemeConfig>(PRESETS['Linear']);
  const [showCommand, setShowCommand] = useState(false);
  const [selectedFramework, setSelectedFramework] = useState(FRAMEWORKS[0].id);
  const [selectedBlueprintId, setSelectedBlueprintId] = useState(blueprints[0].id);

  const selectedBlueprint = blueprints.find(bp => bp.id === selectedBlueprintId)!;
  const ActiveComponent = selectedBlueprint.component;

  const handleDownloadTS = () => {
    track('Download Theme TS', { themeName: config.name });
    const content = `import type { ThemeConfig } from '@zenixui/core';\n\nexport const themeConfig = ${JSON.stringify(config, null, 2)} satisfies ThemeConfig;\n`;
    const dataStr = "data:text/typescript;charset=utf-8," + encodeURIComponent(content);
    const downloadAnchorNode = document.createElement('a');
    downloadAnchorNode.setAttribute("href", dataStr);
    downloadAnchorNode.setAttribute("download", `zenix.ts`);
    document.body.appendChild(downloadAnchorNode);
    downloadAnchorNode.click();
    downloadAnchorNode.remove();
  };

  const getFrameworkInstructions = () => {
    switch(selectedFramework) {
      case 'nextjs':
        return `// app/layout.tsx\nimport { Experience } from '@zenixui/react';\nimport { themeConfig } from '@/theme/zenix';\n\nexport default function RootLayout({ children }) {\n  return (\n    <html>\n      <body>\n        <Experience theme={themeConfig}>\n          {children}\n        </Experience>\n      </body>\n    </html>\n  );\n}`;
      case 'vite':
        return `// src/main.tsx\nimport { Experience } from '@zenixui/react';\nimport { themeConfig } from './theme/zenix';\n\nReactDOM.createRoot(document.getElementById('root')!).render(\n  <React.StrictMode>\n    <Experience theme={themeConfig}>\n      <App />\n    </Experience>\n  </React.StrictMode>\n);`;
      case 'astro':
        return `// src/layouts/Layout.astro\n---\nimport { Experience } from '@zenixui/react';\nimport { themeConfig } from '../theme/zenix';\n---\n\n<html>\n  <body>\n    <slot />\n  </body>\n</html>`;
      case 'remix':
        return `// app/root.tsx\nimport { Experience } from '@zenixui/react';\nimport { themeConfig } from './theme/zenix';\n\nexport default function App() {\n  return (\n    <html>\n      <body>\n        <Experience theme={themeConfig}>\n          <Outlet />\n        </Experience>\n      </body>\n    </html>\n  );\n}`;
      default:
        return '';
    }
  };

  return (
    <div style={{ display: 'flex', height: '100vh', overflow: 'hidden' }}>
      
      {/* LEFT PANE: VISUAL BUILDER */}
      <div style={{ width: '400px', borderRight: '1px solid var(--zx-elevated)', display: 'flex', flexDirection: 'column', background: 'var(--zx-background)', position: 'relative', zIndex: 100 }}>
        <div style={{ padding: '1.5rem', borderBottom: '1px solid var(--zx-elevated)' }}>
          <h1 style={{ fontSize: '1.5rem', fontWeight: 600, margin: '0 0 0.5rem' }}>Visual Builder</h1>
          <p style={{ opacity: 0.6, fontSize: '0.875rem', margin: 0 }}>Configure your experience pipeline.</p>
        </div>

        <div style={{ padding: '1.5rem', overflowY: 'auto', flex: 1, display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
          
          {/* 1. Framework */}
          <div>
            <label style={{ display: 'block', fontSize: '0.75rem', fontWeight: 600, textTransform: 'uppercase', opacity: 0.5, marginBottom: '0.75rem' }}>1. Framework</label>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
              {FRAMEWORKS.map(fw => (
                <button
                  key={fw.id}
                  onClick={() => setSelectedFramework(fw.id)}
                  style={{
                    padding: '0.5rem 0.75rem', fontSize: '0.875rem', fontWeight: 500, borderRadius: 'var(--zx-radius-sm)',
                    border: '1px solid', borderColor: selectedFramework === fw.id ? 'var(--zx-primary)' : 'var(--zx-elevated)',
                    background: selectedFramework === fw.id ? 'var(--zx-elevated)' : 'transparent',
                    color: 'var(--zx-text-primary)', cursor: 'pointer'
                  }}
                >
                  {fw.name}
                </button>
              ))}
            </div>
          </div>

          {/* 2. Blueprint */}
          <div>
            <label style={{ display: 'block', fontSize: '0.75rem', fontWeight: 600, textTransform: 'uppercase', opacity: 0.5, marginBottom: '0.75rem' }}>2. Blueprint</label>
            <select 
              value={selectedBlueprintId}
              onChange={e => setSelectedBlueprintId(e.target.value)}
              style={{ width: '100%', padding: '0.75rem', borderRadius: 'var(--zx-radius-sm)', border: '1px solid var(--zx-elevated)', background: 'var(--zx-surface)', color: 'inherit', fontSize: '0.875rem' }}
            >
              {blueprints.map(bp => (
                <option key={bp.id} value={bp.id}>{bp.title} ({bp.category})</option>
              ))}
            </select>
          </div>

          {/* 3. Theme Engine */}
          <div>
            <label style={{ display: 'block', fontSize: '0.75rem', fontWeight: 600, textTransform: 'uppercase', opacity: 0.5, marginBottom: '0.75rem' }}>3. Theme Engine</label>
            <select 
              value={config.base}
              onChange={e => setConfig({ ...config, base: e.target.value as any })}
              style={{ width: '100%', padding: '0.75rem', borderRadius: 'var(--zx-radius-sm)', border: '1px solid var(--zx-elevated)', background: 'var(--zx-surface)', color: 'inherit', fontSize: '0.875rem' }}
            >
              <option value="zenix">Zenix (Solid)</option>
              <option value="ocean">Ocean (Glass)</option>
              <option value="night-city">Night City (Cyber)</option>
              <option value="autumn">Autumn (Organic)</option>
            </select>
          </div>

          {/* 4. Palette System */}
          <div>
            <label style={{ display: 'block', fontSize: '0.75rem', fontWeight: 600, textTransform: 'uppercase', opacity: 0.5, marginBottom: '0.75rem' }}>4. Palette</label>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
              {PALETTES.map(p => (
                <button
                  key={p.name}
                  title={p.name}
                  onClick={() => setConfig({ ...config, palette: p.colors })}
                  style={{
                    width: '32px', height: '32px', borderRadius: '50%', background: p.colors.primary,
                    border: config.palette?.primary === p.colors.primary ? '2px solid var(--zx-text-primary)' : '1px solid var(--zx-border)',
                    cursor: 'pointer', padding: 0,
                    boxShadow: config.palette?.primary === p.colors.primary ? '0 0 0 2px var(--zx-background)' : 'none',
                    transform: config.palette?.primary === p.colors.primary ? 'scale(1.1)' : 'scale(1)',
                    transition: 'all 0.2s ease'
                  }}
                />
              ))}
            </div>
          </div>

          {/* 5. Radius */}
          <div>
            <label style={{ display: 'block', fontSize: '0.75rem', fontWeight: 600, textTransform: 'uppercase', opacity: 0.5, marginBottom: '0.75rem' }}>5. Radius</label>
            <select 
              value={config.radius || 'none'}
              onChange={e => setConfig({ ...config, radius: e.target.value as any })}
              style={{ width: '100%', padding: '0.75rem', borderRadius: 'var(--zx-radius-sm)', border: '1px solid var(--zx-elevated)', background: 'var(--zx-surface)', color: 'inherit', fontSize: '0.875rem' }}
            >
              <option value="none">None</option>
              <option value="sm">Small</option>
              <option value="md">Medium</option>
              <option value="lg">Large</option>
              <option value="xl">Extra Large</option>
              <option value="full">Full (Pill)</option>
            </select>
          </div>
          
          {/* 6. Motion Profile */}
          <div>
            <label style={{ display: 'block', fontSize: '0.75rem', fontWeight: 600, textTransform: 'uppercase', opacity: 0.5, marginBottom: '0.75rem' }}>6. Motion</label>
            <select 
              value={config.motion || 'standard'}
              onChange={e => setConfig({ ...config, motion: e.target.value as any })}
              style={{ width: '100%', padding: '0.75rem', borderRadius: 'var(--zx-radius-sm)', border: '1px solid var(--zx-elevated)', background: 'var(--zx-surface)', color: 'inherit', fontSize: '0.875rem' }}
            >
              <option value="none">None</option>
              <option value="minimal">Minimal</option>
              <option value="standard">Standard</option>
              <option value="expressive">Expressive</option>
            </select>
          </div>

          {/* Presets (Shortcut) */}
          <div style={{ paddingTop: '1rem', borderTop: '1px dashed var(--zx-elevated)' }}>
            <label style={{ display: 'block', fontSize: '0.75rem', fontWeight: 600, textTransform: 'uppercase', opacity: 0.5, marginBottom: '0.75rem' }}>Quick Presets</label>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
              {Object.keys(PRESETS).map(key => (
                <button 
                  key={key}
                  onClick={() => setConfig(PRESETS[key])}
                  style={{
                    padding: '0.3rem 0.6rem', fontSize: '0.75rem', borderRadius: 'var(--zx-radius-sm)',
                    border: '1px solid var(--zx-elevated)', background: 'transparent', color: 'inherit', cursor: 'pointer'
                  }}
                >
                  {key}
                </button>
              ))}
            </div>
          </div>

        </div>

        {/* 7. Generated Command */}
        <div style={{ padding: '1.5rem', borderTop: '1px solid var(--zx-elevated)', display: 'flex', flexDirection: 'column', gap: '1rem', background: 'var(--zx-surface)' }}>
          {showCommand ? (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <div>
                <div style={{ fontSize: '0.75rem', fontWeight: 600, textTransform: 'uppercase', opacity: 0.5, marginBottom: '0.5rem' }}>Install Command</div>
                <code style={{ display: 'block', padding: '0.75rem', background: 'var(--zx-background)', borderRadius: 'var(--zx-radius-sm)', fontSize: '0.8rem', color: 'var(--zx-primary)', border: '1px solid var(--zx-border)' }}>
                  npx zenix-ui add {selectedBlueprintId} --config ./zenix.ts
                </code>
              </div>
              
              <div>
                <div style={{ fontSize: '0.75rem', fontWeight: 600, textTransform: 'uppercase', opacity: 0.5, marginBottom: '0.5rem' }}>Setup ({FRAMEWORKS.find(f => f.id === selectedFramework)?.name})</div>
                <pre style={{ margin: 0, padding: '0.75rem', background: 'var(--zx-background)', borderRadius: 'var(--zx-radius-sm)', overflowX: 'auto', fontSize: '0.75rem', fontFamily: 'monospace', border: '1px solid var(--zx-border)' }}>
                  {getFrameworkInstructions()}
                </pre>
              </div>

              <Button fullWidth onClick={handleDownloadTS}>
                Download Theme File
              </Button>
            </div>
          ) : (
            <Button fullWidth onClick={() => setShowCommand(true)} size="lg">
              Generate Install Command
            </Button>
          )}
        </div>
      </div>

      {/* RIGHT PANE: LIVE PREVIEW */}
      <div style={{ flex: 1, position: 'relative', overflowY: 'auto' }}>
        <Experience theme={config}>
          <ActiveComponent />
        </Experience>
      </div>

    </div>
  );
}
