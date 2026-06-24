'use client';

import { useState, useCallback } from 'react';
import { Surface, Button, Input } from '@zenixui/components';
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

const PACKAGE_MANAGERS = [
  { id: 'npm', exec: 'npx' },
  { id: 'pnpm', exec: 'pnpm dlx' },
  { id: 'yarn', exec: 'yarn dlx' },
  { id: 'bun', exec: 'bunx' },
];

type OutputTab = 'install' | 'setup' | 'config';

export default function ThemeStudioClient() {
  const [config, setConfig] = useState<ThemeConfig>(PRESETS['Linear']);
  const [generated, setGenerated] = useState(false);
  const [activeTab, setActiveTab] = useState<OutputTab>('install');
  const [selectedFramework, setSelectedFramework] = useState(FRAMEWORKS[0].id);
  const [selectedBlueprintId, setSelectedBlueprintId] = useState(blueprints[0].id);
  const [selectedPM, setSelectedPM] = useState('pnpm');
  const [copied, setCopied] = useState<string | null>(null);

  const selectedBlueprint = blueprints.find(bp => bp.id === selectedBlueprintId)!;
  const ActiveComponent = selectedBlueprint.component;

  // Derived values
  const pmExec = PACKAGE_MANAGERS.find(pm => pm.id === selectedPM)?.exec ?? 'npx';
  const installCmd = `${pmExec} zenix-ui add ${selectedBlueprintId} --config ./zenix-theme.json`;
  const themeJson = JSON.stringify(config, null, 2);
  const themeTs = `import type { ThemeConfig } from '@zenixui/core';\n\nexport const themeConfig = ${JSON.stringify(config, null, 2)} satisfies ThemeConfig;\n`;

  const getSetupCode = () => {
    switch (selectedFramework) {
      case 'nextjs':
        return `// app/layout.tsx
import { Experience } from '@zenixui/react';
import { themeConfig } from '@/theme/zenix';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Experience theme={themeConfig}>
          {children}
        </Experience>
      </body>
    </html>
  );
}`;
      case 'vite':
        return `// src/main.tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import { Experience } from '@zenixui/react';
import { themeConfig } from './theme/zenix';
import App from './App';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Experience theme={themeConfig}>
      <App />
    </Experience>
  </React.StrictMode>
);`;
      case 'remix':
        return `// app/root.tsx
import { Experience } from '@zenixui/react';
import { themeConfig } from './theme/zenix';
import { Outlet } from '@remix-run/react';

export default function App() {
  return (
    <html lang="en">
      <body>
        <Experience theme={themeConfig}>
          <Outlet />
        </Experience>
      </body>
    </html>
  );
}`;
      case 'astro':
        return `// src/layouts/Layout.astro
---
import { Experience } from '@zenixui/react';
import { themeConfig } from '../theme/zenix';
---

<html lang="en">
  <body>
    <Experience client:load theme={themeConfig}>
      <slot />
    </Experience>
  </body>
</html>`;
      default:
        return '';
    }
  };

  const copyToClipboard = useCallback(async (text: string, key: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(key);
      track('Studio Copy', { key, blueprint: selectedBlueprintId, pm: selectedPM });
      setTimeout(() => setCopied(null), 2000);
    } catch {
      // fallback for non-https
    }
  }, [selectedBlueprintId, selectedPM]);

  const handleCopyAll = () => {
    const setupCode = getSetupCode();
    const all = `# 1. Install Blueprint\n${installCmd}\n\n# 2. Theme Config (zenix-theme.json)\n${themeJson}\n\n# 3. ${FRAMEWORKS.find(f => f.id === selectedFramework)?.name} Setup\n${setupCode}`;
    copyToClipboard(all, 'all');
  };

  const handleDownloadJSON = () => {
    track('Download Theme JSON', { themeName: config.name });
    const dataStr = 'data:application/json;charset=utf-8,' + encodeURIComponent(themeJson);
    const a = document.createElement('a');
    a.setAttribute('href', dataStr);
    a.setAttribute('download', 'zenix-theme.json');
    document.body.appendChild(a);
    a.click();
    a.remove();
  };

  const handleDownloadTS = () => {
    track('Download Theme TS', { themeName: config.name });
    const dataStr = 'data:text/typescript;charset=utf-8,' + encodeURIComponent(themeTs);
    const a = document.createElement('a');
    a.setAttribute('href', dataStr);
    a.setAttribute('download', 'zenix.ts');
    document.body.appendChild(a);
    a.click();
    a.remove();
  };

  const TAB_CONTENT: Record<OutputTab, { label: string; code: string; copyKey: string }> = {
    install: { label: 'Install', code: installCmd, copyKey: 'install' },
    setup: { label: `${FRAMEWORKS.find(f => f.id === selectedFramework)?.name} Setup`, code: getSetupCode(), copyKey: 'setup' },
    config: { label: 'Theme Config', code: themeJson, copyKey: 'config' },
  };

  const btnBase: React.CSSProperties = {
    padding: '0.3rem 0.75rem',
    fontSize: '0.75rem',
    fontWeight: 600,
    borderRadius: 'var(--zx-radius-sm)',
    border: '1px solid var(--zx-elevated)',
    background: 'transparent',
    color: 'inherit',
    cursor: 'pointer',
    transition: 'all 0.15s ease',
  };

  const tabBtn = (id: OutputTab): React.CSSProperties => ({
    ...btnBase,
    background: activeTab === id ? 'var(--zx-elevated)' : 'transparent',
    color: activeTab === id ? 'var(--zx-primary)' : 'inherit',
    borderColor: activeTab === id ? 'var(--zx-primary)' : 'var(--zx-elevated)',
    opacity: activeTab === id ? 1 : 0.6,
  });

  return (
    <div style={{ display: 'flex', height: '100vh', overflow: 'hidden' }}>
      
      {/* LEFT PANE: THEME STUDIO */}
      <div style={{ width: '400px', borderRight: '1px solid var(--zx-elevated)', display: 'flex', flexDirection: 'column', background: 'var(--zx-background)', position: 'relative', zIndex: 100 }}>
        <div style={{ padding: '1.5rem', borderBottom: '1px solid var(--zx-elevated)' }}>
          <h1 style={{ fontSize: '1.5rem', fontWeight: 600, margin: '0 0 0.5rem' }}>Theme Studio</h1>
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
                    color: 'var(--zx-text-primary)', cursor: 'pointer', transition: 'all 0.15s ease',
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
                    transform: config.palette?.primary === p.colors.primary ? 'scale(1.15)' : 'scale(1)',
                    transition: 'all 0.15s ease',
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

          {/* Quick Presets */}
          <div style={{ paddingTop: '1rem', borderTop: '1px dashed var(--zx-elevated)' }}>
            <label style={{ display: 'block', fontSize: '0.75rem', fontWeight: 600, textTransform: 'uppercase', opacity: 0.5, marginBottom: '0.75rem' }}>Quick Presets</label>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
              {Object.keys(PRESETS).map(key => (
                <button 
                  key={key}
                  onClick={() => setConfig(PRESETS[key])}
                  style={{ ...btnBase }}
                >
                  {key}
                </button>
              ))}
            </div>
          </div>

        </div>

        {/* BOTTOM: COMMAND GENERATOR */}
        <div style={{ borderTop: '1px solid var(--zx-elevated)', background: 'var(--zx-surface)' }}>
          {!generated ? (
            <div style={{ padding: '1.5rem' }}>
              <Button fullWidth onClick={() => { setGenerated(true); track('Studio Generate', { blueprint: selectedBlueprintId }); }} size="lg">
                Generate Install Command
              </Button>
            </div>
          ) : (
            <div style={{ display: 'flex', flexDirection: 'column' }}>

              {/* Package Manager selector */}
              <div style={{ padding: '1rem 1.5rem', borderBottom: '1px solid var(--zx-elevated)', display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
                <span style={{ fontSize: '0.7rem', fontWeight: 600, textTransform: 'uppercase', opacity: 0.4, marginRight: '0.5rem' }}>via</span>
                {PACKAGE_MANAGERS.map(pm => (
                  <button
                    key={pm.id}
                    onClick={() => setSelectedPM(pm.id)}
                    style={{
                      ...btnBase,
                      background: selectedPM === pm.id ? 'var(--zx-elevated)' : 'transparent',
                      color: selectedPM === pm.id ? 'var(--zx-primary)' : 'inherit',
                      borderColor: selectedPM === pm.id ? 'var(--zx-primary)' : 'var(--zx-elevated)',
                      opacity: selectedPM === pm.id ? 1 : 0.5,
                    }}
                  >
                    {pm.id}
                  </button>
                ))}
              </div>

              {/* Output tabs */}
              <div style={{ padding: '0.75rem 1.5rem', borderBottom: '1px solid var(--zx-elevated)', display: 'flex', gap: '0.5rem' }}>
                {(['install', 'setup', 'config'] as OutputTab[]).map(tab => (
                  <button key={tab} onClick={() => setActiveTab(tab)} style={tabBtn(tab)}>
                    {TAB_CONTENT[tab].label}
                  </button>
                ))}
              </div>

              {/* Code output */}
              <div style={{ position: 'relative', margin: '0.75rem 1rem' }}>
                <pre style={{
                  margin: 0, padding: '1rem', paddingRight: '4rem',
                  background: 'var(--zx-background)', borderRadius: 'var(--zx-radius-sm)',
                  overflowX: 'auto', overflowY: 'auto', maxHeight: '160px',
                  fontSize: '0.75rem', fontFamily: 'monospace', lineHeight: 1.6,
                  border: '1px solid var(--zx-border)', color: 'var(--zx-primary)',
                  whiteSpace: 'pre-wrap', wordBreak: 'break-all',
                }}>
                  {TAB_CONTENT[activeTab].code}
                </pre>
                <button
                  onClick={() => copyToClipboard(TAB_CONTENT[activeTab].code, activeTab)}
                  style={{
                    position: 'absolute', top: '0.5rem', right: '0.5rem',
                    padding: '0.25rem 0.5rem', fontSize: '0.65rem', fontWeight: 700,
                    borderRadius: 'var(--zx-radius-sm)', border: '1px solid var(--zx-elevated)',
                    background: 'var(--zx-surface)', color: copied === activeTab ? '#22c55e' : 'inherit',
                    cursor: 'pointer', transition: 'all 0.15s ease',
                  }}
                >
                  {copied === activeTab ? '✓ Copied' : 'Copy'}
                </button>
              </div>

              {/* Action row */}
              <div style={{ padding: '0.75rem 1rem 0', display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                <button
                  onClick={handleCopyAll}
                  style={{
                    flex: 1, padding: '0.6rem', fontSize: '0.8rem', fontWeight: 700,
                    borderRadius: 'var(--zx-radius-sm)', border: '1px solid var(--zx-primary)',
                    background: copied === 'all' ? 'var(--zx-primary)' : 'transparent',
                    color: copied === 'all' ? 'var(--zx-background)' : 'var(--zx-primary)',
                    cursor: 'pointer', transition: 'all 0.15s ease',
                  }}
                >
                  {copied === 'all' ? '✓ Copied All' : 'Copy All'}
                </button>
                <button
                  onClick={handleDownloadJSON}
                  style={{ ...btnBase, padding: '0.6rem 0.75rem', fontSize: '0.75rem' }}
                  title="Download zenix-theme.json"
                >
                  .json
                </button>
                <button
                  onClick={handleDownloadTS}
                  style={{ ...btnBase, padding: '0.6rem 0.75rem', fontSize: '0.75rem' }}
                  title="Download zenix.ts"
                >
                  .ts
                </button>
              </div>

              {/* Next step: framework docs */}
              <div style={{ padding: '0.75rem 1rem 1rem', borderTop: '1px dashed var(--zx-elevated)', marginTop: '0.75rem' }}>
                <a
                  href={`/docs/${selectedFramework}`}
                  style={{
                    display: 'flex', alignItems: 'center', gap: '0.5rem',
                    fontSize: '0.75rem', fontWeight: 600, color: 'var(--zx-primary)',
                    textDecoration: 'none', opacity: 0.8,
                  }}
                >
                  <span>Next: {FRAMEWORKS.find(f => f.id === selectedFramework)?.name} setup guide →</span>
                </a>
              </div>

            </div>
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
