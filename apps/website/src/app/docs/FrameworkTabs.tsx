'use client';

import { useState } from 'react';
import { Surface, Badge } from '@zenixui/components';

interface Framework {
  id: string;
  name: string;
  time: string;
  recommended?: boolean;
  experimental?: boolean;
  code: string;
}

const FRAMEWORKS: Framework[] = [
  {
    id: 'nextjs',
    name: 'Next.js App Router',
    time: '2 min',
    recommended: true,
    code: `// src/app/layout.tsx
import { Experience } from '@zenixui/react';
import { themeConfig } from '@/theme/zenix';
import '@zenixui/core/dist/index.css';

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
}`
  },
  {
    id: 'vite',
    name: 'Vite React',
    time: '1 min',
    code: `// src/main.tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import { Experience } from '@zenixui/react';
import { themeConfig } from './theme/zenix';
import '@zenixui/core/dist/index.css';
import App from './App';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Experience theme={themeConfig}>
      <App />
    </Experience>
  </React.StrictMode>,
);`
  },
  {
    id: 'remix',
    name: 'Remix',
    time: '2 min',
    code: `// app/root.tsx
import { Experience } from '@zenixui/react';
import { themeConfig } from './theme/zenix';
import '@zenixui/core/dist/index.css';
import { Links, Meta, Outlet, Scripts, ScrollRestoration } from "@remix-run/react";

export default function App() {
  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
      </head>
      <body>
        <Experience theme={themeConfig}>
          <Outlet />
        </Experience>
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}`
  },
  {
    id: 'astro',
    name: 'Astro React',
    time: '3 min',
    experimental: true,
    code: `// src/layouts/Layout.astro
---
import { Experience } from '@zenixui/react';
import { themeConfig } from '../theme/zenix';
import '@zenixui/core/dist/index.css';
---

<!doctype html>
<html lang="en">
	<head>
		<meta charset="UTF-8" />
		<meta name="viewport" content="width=device-width" />
	</head>
	<body>
    {/* Ensure the Experience provider is used in a React wrapper or island */}
		<slot />
	</body>
</html>`
  }
];

export function FrameworkTabs() {
  const [activeTab, setActiveTab] = useState(FRAMEWORKS[0].id);

  const activeFramework = FRAMEWORKS.find(f => f.id === activeTab)!;

  return (
    <div style={{ marginTop: '2rem' }}>
      <div style={{ display: 'flex', gap: '0.5rem', overflowX: 'auto', paddingBottom: '1rem', borderBottom: '1px solid var(--zx-elevated)' }}>
        {FRAMEWORKS.map(fw => (
          <button
            key={fw.id}
            onClick={() => setActiveTab(fw.id)}
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-start',
              gap: '0.5rem',
              padding: '1rem',
              background: activeTab === fw.id ? 'var(--zx-elevated)' : 'transparent',
              border: '1px solid',
              borderColor: activeTab === fw.id ? 'var(--zx-border-hover, var(--zx-elevated))' : 'transparent',
              borderRadius: 'var(--zx-radius-md, 8px)',
              cursor: 'pointer',
              minWidth: '200px',
              transition: 'all 0.2s ease',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%', gap: '1rem' }}>
              <span style={{ fontWeight: 600, color: activeTab === fw.id ? 'var(--zx-text-primary)' : 'var(--zx-text-secondary)' }}>
                {fw.name}
              </span>
              {fw.recommended && <Badge variant="solid" style={{ fontSize: '0.7rem', background: 'var(--zx-primary)', color: 'var(--zx-background)' }}>⭐ Recommended</Badge>}
              {fw.experimental && <Badge variant="solid" style={{ fontSize: '0.7rem', background: 'var(--zx-warning)', color: 'var(--zx-background)' }}>Experimental</Badge>}
            </div>
            <div style={{ fontSize: '0.875rem', opacity: 0.7, color: 'var(--zx-text-muted)' }}>
              ⏱ Setup Time: {fw.time}
            </div>
          </button>
        ))}
      </div>

      <div style={{ marginTop: '2rem' }}>
        <h3 style={{ fontSize: '1.25rem', fontWeight: 600, marginBottom: '1rem' }}>Setup inside {activeFramework.name}</h3>
        <p style={{ opacity: 0.8, marginBottom: '1rem' }}>
          Wrap your root layout with the <code style={{ background: 'var(--zx-elevated)', padding: '0.2rem 0.4rem', borderRadius: '4px' }}>&lt;Experience&gt;</code> provider and pass your generated <code style={{ background: 'var(--zx-elevated)', padding: '0.2rem 0.4rem', borderRadius: '4px' }}>themeConfig</code>.
        </p>
        <pre style={{ margin: 0, padding: '1.5rem', background: 'var(--zx-elevated)', borderRadius: 'var(--zx-radius-md, 8px)', overflowX: 'auto', fontSize: '0.875rem', fontFamily: 'var(--zx-font-mono, monospace)', border: '1px solid var(--zx-border)' }}>
          {activeFramework.code}
        </pre>
      </div>
    </div>
  );
}
