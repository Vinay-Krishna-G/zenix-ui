# Zenix UI - Full Project Source

## .gitignore

```text
node_modules
```

## apps/playground/.gitignore

```text
# Logs
logs
*.log
npm-debug.log*
yarn-debug.log*
yarn-error.log*
pnpm-debug.log*
lerna-debug.log*

node_modules
dist
dist-ssr
*.local

# Editor directories and files
.vscode/*
!.vscode/extensions.json
.idea
.DS_Store
*.suo
*.ntvs*
*.njsproj
*.sln
*.sw?
```

## apps/playground/README.md

```text
# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
```

## apps/playground/eslint.config.js

```javascript
import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import tseslint from 'typescript-eslint'
import { defineConfig, globalIgnores } from 'eslint/config'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      js.configs.recommended,
      tseslint.configs.recommended,
      reactHooks.configs.flat.recommended,
      reactRefresh.configs.vite,
    ],
    languageOptions: {
      globals: globals.browser,
    },
  },
])
```

## apps/playground/index.html

```text
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>playground</title>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.tsx"></script>
  </body>
</html>
```

## apps/playground/package.json

```json
{
  "name": "playground",
  "private": true,
  "version": "0.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "tsc -b && vite build",
    "lint": "eslint .",
    "preview": "vite preview"
  },
  "dependencies": {
    "@zenixui/blueprints": "workspace:*",
    "@zenixui/components": "workspace:*",
    "@zenixui/pack-autumn": "workspace:*",
    "@zenixui/pack-night-city": "workspace:*",
    "@zenixui/pack-ocean": "workspace:*",
    "@zenixui/pack-zenix": "workspace:*",
    "@zenixui/react": "workspace:*",
    "react": "^19.2.6",
    "react-dom": "^19.2.6"
  },
  "devDependencies": {
    "@eslint/js": "^10.0.1",
    "@types/node": "^24.12.3",
    "@types/react": "^19.2.14",
    "@types/react-dom": "^19.2.3",
    "@vitejs/plugin-react": "^6.0.1",
    "eslint": "^10.3.0",
    "eslint-plugin-react-hooks": "^7.1.1",
    "eslint-plugin-react-refresh": "^0.5.2",
    "globals": "^17.6.0",
    "typescript": "~6.0.2",
    "typescript-eslint": "^8.59.2",
    "vite": "^8.0.12"
  }
}
```

## apps/playground/src/App.css

```text
.counter {
  font-size: 16px;
  padding: 5px 10px;
  border-radius: 5px;
  color: var(--accent);
  background: var(--accent-bg);
  border: 2px solid transparent;
  transition: border-color 0.3s;
  margin-bottom: 24px;

  &:hover {
    border-color: var(--accent-border);
  }
  &:focus-visible {
    outline: 2px solid var(--accent);
    outline-offset: 2px;
  }
}

.hero {
  position: relative;

  .base,
  .framework,
  .vite {
    inset-inline: 0;
    margin: 0 auto;
  }

  .base {
    width: 170px;
    position: relative;
    z-index: 0;
  }

  .framework,
  .vite {
    position: absolute;
  }

  .framework {
    z-index: 1;
    top: 34px;
    height: 28px;
    transform: perspective(2000px) rotateZ(300deg) rotateX(44deg) rotateY(39deg)
      scale(1.4);
  }

  .vite {
    z-index: 0;
    top: 107px;
    height: 26px;
    width: auto;
    transform: perspective(2000px) rotateZ(300deg) rotateX(40deg) rotateY(39deg)
      scale(0.8);
  }
}

#center {
  display: flex;
  flex-direction: column;
  gap: 25px;
  place-content: center;
  place-items: center;
  flex-grow: 1;

  @media (max-width: 1024px) {
    padding: 32px 20px 24px;
    gap: 18px;
  }
}

#next-steps {
  display: flex;
  border-top: 1px solid var(--border);
  text-align: left;

  & > div {
    flex: 1 1 0;
    padding: 32px;
    @media (max-width: 1024px) {
      padding: 24px 20px;
    }
  }

  .icon {
    margin-bottom: 16px;
    width: 22px;
    height: 22px;
  }

  @media (max-width: 1024px) {
    flex-direction: column;
    text-align: center;
  }
}

#docs {
  border-right: 1px solid var(--border);

  @media (max-width: 1024px) {
    border-right: none;
    border-bottom: 1px solid var(--border);
  }
}

#next-steps ul {
  list-style: none;
  padding: 0;
  display: flex;
  gap: 8px;
  margin: 32px 0 0;

  .logo {
    height: 18px;
  }

  a {
    color: var(--text-h);
    font-size: 16px;
    border-radius: 6px;
    background: var(--social-bg);
    display: flex;
    padding: 6px 12px;
    align-items: center;
    gap: 8px;
    text-decoration: none;
    transition: box-shadow 0.3s;

    &:hover {
      box-shadow: var(--shadow);
    }
    .button-icon {
      height: 18px;
      width: 18px;
    }
  }

  @media (max-width: 1024px) {
    margin-top: 20px;
    flex-wrap: wrap;
    justify-content: center;

    li {
      flex: 1 1 calc(50% - 8px);
    }

    a {
      width: 100%;
      justify-content: center;
      box-sizing: border-box;
    }
  }
}

#spacer {
  height: 88px;
  border-top: 1px solid var(--border);
  @media (max-width: 1024px) {
    height: 48px;
  }
}

.ticks {
  position: relative;
  width: 100%;

  &::before,
  &::after {
    content: '';
    position: absolute;
    top: -4.5px;
    border: 5px solid transparent;
  }

  &::before {
    left: 0;
    border-left-color: var(--border);
  }
  &::after {
    right: 0;
    border-right-color: var(--border);
  }
}
```

## apps/playground/src/App.tsx

```tsx
import { useState } from 'react';
import { Experience } from '@zenixui/react';
import '@zenixui/react/styles.css';
import '@zenixui/pack-zenix';
import '@zenixui/pack-ocean';
import '@zenixui/pack-night-city';
import '@zenixui/pack-autumn';

import {
  ZenixLanding,
  OceanLanding,
  NightCityLanding,
  AutumnLanding,
  ZenixPortfolio,
  OceanPortfolio,
  NightCityPortfolio,
  AutumnPortfolio
} from '@zenixui/blueprints';

import { CompareView } from './compare/CompareView';

function CustomBackground() {
  return (
    <div style={{ width: '100%', height: '100%', background: 'repeating-linear-gradient(45deg, #000 0, #000 10px, #111 10px, #111 20px)', opacity: 0.5 }} />
  );
}

function App() {
  const [theme, setTheme] = useState('zenix');
  const [pageType, setPageType] = useState<'landing' | 'portfolio' | 'compare'>('compare');
  const [bgType] = useState<'default' | 'none' | 'custom'>('default');
  
  // Theme Playground Options
  const [accent, setAccent] = useState<string>('');
  const [radius, setRadius] = useState<string>('');

  const resolvedBg = bgType === 'custom' ? <CustomBackground /> : bgType;

  if (pageType === 'compare') {
    return (
      <>
        <div style={{ position: 'fixed', bottom: '1rem', right: '1rem', zIndex: 100 }}>
          <button onClick={() => setPageType('landing')} style={debugBtn(false)}>Back to Blueprints</button>
        </div>
        <CompareView />
      </>
    );
  }

  return (
    <Experience preset={theme} background={resolvedBg}>
      
      {/* THEME DEBUG PANEL */}
      <div style={{ 
        position: 'fixed', 
        top: '1rem', 
        left: '1rem', 
        zIndex: 50,
        background: 'rgba(0,0,0,0.8)',
        color: 'white',
        padding: '1.5rem',
        borderRadius: '0.5rem',
        border: '1px solid rgba(255,255,255,0.2)',
        fontFamily: 'monospace',
        fontSize: '0.85rem',
        maxWidth: '300px',
        display: 'flex',
        flexDirection: 'column',
        gap: '1rem',
        maxHeight: '90vh',
        overflowY: 'auto'
      }}>
        <div>
          <strong>Page Type:</strong>
          <div style={{ display: 'flex', gap: '0.5rem', marginTop: '0.5rem', flexWrap: 'wrap' }}>
            {['landing', 'portfolio', 'compare'].map(p => (
              <button key={p} onClick={() => setPageType(p as any)} style={debugBtn(pageType === p)}>{p}</button>
            ))}
          </div>
        </div>

        <div>
          <strong>Preset:</strong>
          <div style={{ display: 'flex', gap: '0.5rem', marginTop: '0.5rem', flexWrap: 'wrap' }}>
            {['zenix', 'ocean', 'night-city', 'autumn'].map(t => (
              <button key={t} onClick={() => {
                setTheme(t);
                // Reset custom overrides when changing themes for best experience
                setAccent('');
                setRadius('');
              }} style={debugBtn(theme === t)}>{t}</button>
            ))}
          </div>
        </div>
        
        <div style={{ borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '1rem' }}>
          <strong>Brand Overrides:</strong>
          <div style={{ marginTop: '0.5rem' }}>
            <label style={{ display: 'block', fontSize: '0.75rem', marginBottom: '0.25rem' }}>Accent Color</label>
            <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
              {['', '#0A84FF', '#FF2D55', '#32D74B', '#FF9F0A'].map(a => (
                <button key={a} onClick={() => setAccent(a)} style={{...debugBtn(accent === a), background: a || '#374151', width: '24px', height: '24px', borderRadius: '50%'}} />
              ))}
            </div>
          </div>
          <div style={{ marginTop: '0.5rem' }}>
            <label style={{ display: 'block', fontSize: '0.75rem', marginBottom: '0.25rem' }}>Radius</label>
            <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
              {['', '0px', '8px', '20px', '32px'].map(r => (
                <button key={r} onClick={() => setRadius(r)} style={debugBtn(radius === r)}>{r || 'auto'}</button>
              ))}
            </div>
          </div>
        </div>


      </div>

      <div style={{ position: 'relative', zIndex: 10, width: '100%', height: '100%', overflowY: 'auto' }}>
        {pageType === 'landing' && theme === 'zenix' && <ZenixLanding />}
        {pageType === 'landing' && theme === 'ocean' && <OceanLanding />}
        {pageType === 'landing' && theme === 'night-city' && <NightCityLanding />}
        {pageType === 'landing' && theme === 'autumn' && <AutumnLanding />}
        
        {pageType === 'portfolio' && theme === 'zenix' && <ZenixPortfolio />}
        {pageType === 'portfolio' && theme === 'ocean' && <OceanPortfolio />}
        {pageType === 'portfolio' && theme === 'night-city' && <NightCityPortfolio />}
        {pageType === 'portfolio' && theme === 'autumn' && <AutumnPortfolio />}
      </div>
      
    </Experience>
  );
}

function debugBtn(active: boolean) {
  return {
    background: active ? '#3b82f6' : '#374151',
    color: 'white',
    border: 'none',
    padding: '0.25rem 0.5rem',
    borderRadius: '0.25rem',
    cursor: 'pointer',
    fontSize: '0.75rem'
  };
}

export default App;
```

## apps/playground/src/compare/CompareView.tsx

```tsx
import React from 'react';
import { Experience } from '@zenixui/react';
import { Input, Button, Textarea, Badge } from '@zenixui/components';

export function CompareView() {
  return (
    <div style={{ padding: '3rem', minHeight: '100vh', background: '#0a0a0a', color: '#fff', fontFamily: 'system-ui, sans-serif' }}>
      <h1 style={{ marginBottom: '3rem', fontWeight: 300 }}>ZenixUI Component Comparison</h1>
      
      <div style={{ display: 'flex', flexDirection: 'column', gap: '4rem' }}>
        
        {/* INPUT */}
        <section>
          <h2 style={{ borderBottom: '1px solid #333', paddingBottom: '1rem', marginBottom: '2rem', fontWeight: 400 }}>Input</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1px', background: '#333', border: '1px solid #333' }}>
            <ThemeCell preset="zenix">
              <Input variant="default" placeholder="Zenix Default" />
            </ThemeCell>
            <ThemeCell preset="ocean">
              <Input variant="glass" placeholder="Ocean Glass" />
            </ThemeCell>
            <ThemeCell preset="night-city">
              <Input variant="terminal" placeholder="Night City Terminal" />
            </ThemeCell>
            <ThemeCell preset="autumn">
              <Input variant="organic" placeholder="Autumn Organic" />
            </ThemeCell>
          </div>
        </section>

        {/* BUTTON */}
        <section>
          <h2 style={{ borderBottom: '1px solid #333', paddingBottom: '1rem', marginBottom: '2rem', fontWeight: 400 }}>Button</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1px', background: '#333', border: '1px solid #333' }}>
            <ThemeCell preset="zenix">
              <Button variant="default">Submit</Button>
            </ThemeCell>
            <ThemeCell preset="ocean">
              <Button variant="glass">Dive In</Button>
            </ThemeCell>
            <ThemeCell preset="night-city">
              <Button variant="cyber">Execute</Button>
            </ThemeCell>
            <ThemeCell preset="autumn">
              <Button variant="organic">Read More</Button>
            </ThemeCell>
          </div>
        </section>

        {/* TEXTAREA */}
        <section>
          <h2 style={{ borderBottom: '1px solid #333', paddingBottom: '1rem', marginBottom: '2rem', fontWeight: 400 }}>Textarea</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1px', background: '#333', border: '1px solid #333' }}>
            <ThemeCell preset="zenix">
              <Textarea variant="default" placeholder="Write a message..." rows={3} />
            </ThemeCell>
            <ThemeCell preset="ocean">
              <Textarea variant="glass" placeholder="Share your thoughts..." rows={3} />
            </ThemeCell>
            <ThemeCell preset="night-city">
              <Textarea variant="terminal" placeholder="ENTER LOG..." rows={3} />
            </ThemeCell>
            <ThemeCell preset="autumn">
              <Textarea variant="organic" placeholder="Dear friend..." rows={3} />
            </ThemeCell>
          </div>
        </section>

        {/* BADGE */}
        <section>
          <h2 style={{ borderBottom: '1px solid #333', paddingBottom: '1rem', marginBottom: '2rem', fontWeight: 400 }}>Badge</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1px', background: '#333', border: '1px solid #333' }}>
            <ThemeCell preset="zenix">
              <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                <Badge variant="solid" tone="neutral">Neutral</Badge>
                <Badge variant="solid" tone="success">Success</Badge>
              </div>
            </ThemeCell>
            <ThemeCell preset="ocean">
              <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                <Badge variant="glass" tone="neutral">Neutral</Badge>
                <Badge variant="glass" tone="success">Success</Badge>
              </div>
            </ThemeCell>
            <ThemeCell preset="night-city">
              <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                <Badge variant="terminal" tone="neutral">Neutral</Badge>
                <Badge variant="terminal" tone="error">Error</Badge>
              </div>
            </ThemeCell>
            <ThemeCell preset="autumn">
              <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                <Badge variant="organic" tone="neutral">Neutral</Badge>
                <Badge variant="organic" tone="primary">Primary</Badge>
              </div>
            </ThemeCell>
          </div>
        </section>

      </div>
    </div>
  );
}

function ThemeCell({ preset, children }: { preset: string, children: React.ReactNode }) {
  return (
    <Experience preset={preset} background="none">
      <div style={{ 
        padding: '2rem', 
        height: '100%', 
        display: 'flex', 
        flexDirection: 'column', 
        gap: '1.5rem', 
        background: 'var(--zx-background)',
        position: 'relative'
      }}>
        <div style={{ 
          position: 'absolute', 
          top: 0, left: 0, 
          padding: '0.25rem 0.5rem', 
          background: 'var(--zx-elevated)', 
          color: 'var(--zx-primary)', 
          fontSize: '0.65rem', 
          textTransform: 'uppercase', 
          letterSpacing: '0.05em',
          fontWeight: 600,
          opacity: 0.7
        }}>
          {preset}
        </div>
        <div style={{ marginTop: '1rem', width: '100%' }}>
          {children}
        </div>
      </div>
    </Experience>
  );
}
```

## apps/playground/src/index.css

```text
:root {
  --text: #6b6375;
  --text-h: #08060d;
  --bg: #fff;
  --border: #e5e4e7;
  --code-bg: #f4f3ec;
  --accent: #aa3bff;
  --accent-bg: rgba(170, 59, 255, 0.1);
  --accent-border: rgba(170, 59, 255, 0.5);
  --social-bg: rgba(244, 243, 236, 0.5);
  --shadow:
    rgba(0, 0, 0, 0.1) 0 10px 15px -3px, rgba(0, 0, 0, 0.05) 0 4px 6px -2px;

  --sans: system-ui, 'Segoe UI', Roboto, sans-serif;
  --heading: system-ui, 'Segoe UI', Roboto, sans-serif;
  --mono: ui-monospace, Consolas, monospace;

  font: 18px/145% var(--sans);
  letter-spacing: 0.18px;
  color-scheme: light dark;
  color: var(--text);
  background: var(--bg);
  font-synthesis: none;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  @media (max-width: 1024px) {
    font-size: 16px;
  }
}

@media (prefers-color-scheme: dark) {
  :root {
    --text: #9ca3af;
    --text-h: #f3f4f6;
    --bg: #16171d;
    --border: #2e303a;
    --code-bg: #1f2028;
    --accent: #c084fc;
    --accent-bg: rgba(192, 132, 252, 0.15);
    --accent-border: rgba(192, 132, 252, 0.5);
    --social-bg: rgba(47, 48, 58, 0.5);
    --shadow:
      rgba(0, 0, 0, 0.4) 0 10px 15px -3px, rgba(0, 0, 0, 0.25) 0 4px 6px -2px;
  }

  #social .button-icon {
    filter: invert(1) brightness(2);
  }
}

#root {
  width: 1126px;
  max-width: 100%;
  margin: 0 auto;
  text-align: center;
  border-inline: 1px solid var(--border);
  min-height: 100svh;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
}

body {
  margin: 0;
}

h1,
h2 {
  font-family: var(--heading);
  font-weight: 500;
  color: var(--text-h);
}

h1 {
  font-size: 56px;
  letter-spacing: -1.68px;
  margin: 32px 0;
  @media (max-width: 1024px) {
    font-size: 36px;
    margin: 20px 0;
  }
}
h2 {
  font-size: 24px;
  line-height: 118%;
  letter-spacing: -0.24px;
  margin: 0 0 8px;
  @media (max-width: 1024px) {
    font-size: 20px;
  }
}
p {
  margin: 0;
}

code,
.counter {
  font-family: var(--mono);
  display: inline-flex;
  border-radius: 4px;
  color: var(--text-h);
}

code {
  font-size: 15px;
  line-height: 135%;
  padding: 4px 8px;
  background: var(--code-bg);
}
```

## apps/playground/src/main.tsx

```tsx
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
```

## apps/playground/tsconfig.app.json

```json
{
  "compilerOptions": {
    "tsBuildInfoFile": "./node_modules/.tmp/tsconfig.app.tsbuildinfo",
    "target": "es2023",
    "lib": ["ES2023", "DOM"],
    "module": "esnext",
    "types": ["vite/client"],
    "skipLibCheck": true,

    /* Bundler mode */
    "moduleResolution": "bundler",
    "allowImportingTsExtensions": true,
    "verbatimModuleSyntax": true,
    "moduleDetection": "force",
    "noEmit": true,
    "jsx": "react-jsx",

    /* Linting */
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "erasableSyntaxOnly": true,
    "noFallthroughCasesInSwitch": true
  },
  "include": ["src"]
}
```

## apps/playground/tsconfig.json

```json
{
  "files": [],
  "references": [
    { "path": "./tsconfig.app.json" },
    { "path": "./tsconfig.node.json" }
  ]
}
```

## apps/playground/tsconfig.node.json

```json
{
  "compilerOptions": {
    "tsBuildInfoFile": "./node_modules/.tmp/tsconfig.node.tsbuildinfo",
    "target": "es2023",
    "lib": ["ES2023"],
    "module": "esnext",
    "types": ["node"],
    "skipLibCheck": true,

    /* Bundler mode */
    "moduleResolution": "bundler",
    "allowImportingTsExtensions": true,
    "verbatimModuleSyntax": true,
    "moduleDetection": "force",
    "noEmit": true,

    /* Linting */
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "erasableSyntaxOnly": true,
    "noFallthroughCasesInSwitch": true
  },
  "include": ["vite.config.ts"]
}
```

## apps/playground/vite.config.ts

```typescript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
})
```

## apps/website/.gitignore

```text
# See https://help.github.com/articles/ignoring-files/ for more about ignoring files.

# dependencies
/node_modules
/.pnp
.pnp.*
.yarn/*
!.yarn/patches
!.yarn/plugins
!.yarn/releases
!.yarn/versions

# testing
/coverage

# next.js
/.next/
/out/

# production
/build

# misc
.DS_Store
*.pem

# debug
npm-debug.log*
yarn-debug.log*
yarn-error.log*
.pnpm-debug.log*

# env files (can opt-in for committing if needed)
.env*

# vercel
.vercel

# typescript
*.tsbuildinfo
next-env.d.ts
```

## apps/website/README.md

```text
This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
```

## apps/website/eslint.config.mjs

```text
import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  // Override default ignores of eslint-config-next.
  globalIgnores([
    // Default ignores of eslint-config-next:
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
  ]),
]);

export default eslintConfig;
```

## apps/website/next-env.d.ts

```typescript
/// <reference types="next" />
/// <reference types="next/image-types/global" />
import "./.next/dev/types/routes.d.ts";

// NOTE: This file should not be edited
// see https://nextjs.org/docs/app/api-reference/config/typescript for more information.
```

## apps/website/next.config.ts

```typescript
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  transpilePackages: [
    '@zenixui/core',
    '@zenixui/react',
    '@zenixui/components',
    '@zenixui/blueprints',
    '@zenixui/pack-zenix',
    '@zenixui/pack-ocean',
    '@zenixui/pack-night-city',
    '@zenixui/pack-autumn',
  ]
};

export default nextConfig;
```

## apps/website/package.json

```json
{
  "name": "website",
  "version": "0.1.0",
  "private": true,
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "eslint",
    "generate:previews": "playwright test"
  },
  "dependencies": {
    "@vercel/analytics": "^1.3.1",
    "@zenixui/blueprints": "workspace:*",
    "@zenixui/components": "workspace:*",
    "@zenixui/pack-autumn": "workspace:*",
    "@zenixui/pack-night-city": "workspace:*",
    "@zenixui/pack-ocean": "workspace:*",
    "@zenixui/pack-zenix": "workspace:*",
    "@zenixui/react": "workspace:*",
    "next": "16.2.9",
    "react": "19.2.4",
    "react-dom": "19.2.4"
  },
  "devDependencies": {
    "@playwright/test": "^1.61.0",
    "@tailwindcss/postcss": "^4",
    "@types/node": "^20.19.43",
    "@types/react": "^19",
    "@types/react-dom": "^19",
    "eslint": "^9",
    "eslint-config-next": "16.2.9",
    "playwright": "^1.61.0",
    "tailwindcss": "^4",
    "typescript": "^5"
  }
}
```

## apps/website/playwright-report/index.html

```text
<!DOCTYPE html>
<html style='scrollbar-gutter: stable both-edges;'>
  <head>
    <meta charset='UTF-8'>
    <meta name='color-scheme' content='dark light'>
    <meta name='viewport' content='width=device-width, initial-scale=1.0'>
    <title>Playwright Test Report</title>
    <script type="module">(function(){const u=document.createElement("link").relList;if(u&&u.supports&&u.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))f(r);new MutationObserver(r=>{for(const o of r)if(o.type==="childList")for(const h of o.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&f(h)}).observe(document,{childList:!0,subtree:!0});function c(r){const o={};return r.integrity&&(o.integrity=r.integrity),r.referrerPolicy&&(o.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?o.credentials="include":r.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function f(r){if(r.ep)return;r.ep=!0;const o=c(r);fetch(r.href,o)}})();function EA(i){return i&&i.__esModule&&Object.prototype.hasOwnProperty.call(i,"default")?i.default:i}var Of={exports:{}},vi={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var y1;function pA(){if(y1)return vi;y1=1;var i=Symbol.for("react.transitional.element"),u=Symbol.for("react.fragment");function c(f,r,o){var h=null;if(o!==void 0&&(h=""+o),r.key!==void 0&&(h=""+r.key),"key"in r){o={};for(var v in r)v!=="key"&&(o[v]=r[v])}else o=r;return r=o.ref,{$$typeof:i,type:f,key:h,ref:r!==void 0?r:null,props:o}}return vi.Fragment=u,vi.jsx=c,vi.jsxs=c,vi}var E1;function xA(){return E1||(E1=1,Of.exports=pA()),Of.exports}var m=xA();const bA=15,bt=0,En=1,SA=2,ye=-2,Ut=-3,p1=-4,pn=-5,Me=[0,1,3,7,15,31,63,127,255,511,1023,2047,4095,8191,16383,32767,65535],w2=1440,TA=0,CA=4,OA=9,DA=5,RA=[96,7,256,0,8,80,0,8,16,84,8,115,82,7,31,0,8,112,0,8,48,0,9,192,80,7,10,0,8,96,0,8,32,0,9,160,0,8,0,0,8,128,0,8,64,0,9,224,80,7,6,0,8,88,0,8,24,0,9,144,83,7,59,0,8,120,0,8,56,0,9,208,81,7,17,0,8,104,0,8,40,0,9,176,0,8,8,0,8,136,0,8,72,0,9,240,80,7,4,0,8,84,0,8,20,85,8,227,83,7,43,0,8,116,0,8,52,0,9,200,81,7,13,0,8,100,0,8,36,0,9,168,0,8,4,0,8,132,0,8,68,0,9,232,80,7,8,0,8,92,0,8,28,0,9,152,84,7,83,0,8,124,0,8,60,0,9,216,82,7,23,0,8,108,0,8,44,0,9,184,0,8,12,0,8,140,0,8,76,0,9,248,80,7,3,0,8,82,0,8,18,85,8,163,83,7,35,0,8,114,0,8,50,0,9,196,81,7,11,0,8,98,0,8,34,0,9,164,0,8,2,0,8,130,0,8,66,0,9,228,80,7,7,0,8,90,0,8,26,0,9,148,84,7,67,0,8,122,0,8,58,0,9,212,82,7,19,0,8,106,0,8,42,0,9,180,0,8,10,0,8,138,0,8,74,0,9,244,80,7,5,0,8,86,0,8,22,192,8,0,83,7,51,0,8,118,0,8,54,0,9,204,81,7,15,0,8,102,0,8,38,0,9,172,0,8,6,0,8,134,0,8,70,0,9,236,80,7,9,0,8,94,0,8,30,0,9,156,84,7,99,0,8,126,0,8,62,0,9,220,82,7,27,0,8,110,0,8,46,0,9,188,0,8,14,0,8,142,0,8,78,0,9,252,96,7,256,0,8,81,0,8,17,85,8,131,82,7,31,0,8,113,0,8,49,0,9,194,80,7,10,0,8,97,0,8,33,0,9,162,0,8,1,0,8,129,0,8,65,0,9,226,80,7,6,0,8,89,0,8,25,0,9,146,83,7,59,0,8,121,0,8,57,0,9,210,81,7,17,0,8,105,0,8,41,0,9,178,0,8,9,0,8,137,0,8,73,0,9,242,80,7,4,0,8,85,0,8,21,80,8,258,83,7,43,0,8,117,0,8,53,0,9,202,81,7,13,0,8,101,0,8,37,0,9,170,0,8,5,0,8,133,0,8,69,0,9,234,80,7,8,0,8,93,0,8,29,0,9,154,84,7,83,0,8,125,0,8,61,0,9,218,82,7,23,0,8,109,0,8,45,0,9,186,0,8,13,0,8,141,0,8,77,0,9,250,80,7,3,0,8,83,0,8,19,85,8,195,83,7,35,0,8,115,0,8,51,0,9,198,81,7,11,0,8,99,0,8,35,0,9,166,0,8,3,0,8,131,0,8,67,0,9,230,80,7,7,0,8,91,0,8,27,0,9,150,84,7,67,0,8,123,0,8,59,0,9,214,82,7,19,0,8,107,0,8,43,0,9,182,0,8,11,0,8,139,0,8,75,0,9,246,80,7,5,0,8,87,0,8,23,192,8,0,83,7,51,0,8,119,0,8,55,0,9,206,81,7,15,0,8,103,0,8,39,0,9,174,0,8,7,0,8,135,0,8,71,0,9,238,80,7,9,0,8,95,0,8,31,0,9,158,84,7,99,0,8,127,0,8,63,0,9,222,82,7,27,0,8,111,0,8,47,0,9,190,0,8,15,0,8,143,0,8,79,0,9,254,96,7,256,0,8,80,0,8,16,84,8,115,82,7,31,0,8,112,0,8,48,0,9,193,80,7,10,0,8,96,0,8,32,0,9,161,0,8,0,0,8,128,0,8,64,0,9,225,80,7,6,0,8,88,0,8,24,0,9,145,83,7,59,0,8,120,0,8,56,0,9,209,81,7,17,0,8,104,0,8,40,0,9,177,0,8,8,0,8,136,0,8,72,0,9,241,80,7,4,0,8,84,0,8,20,85,8,227,83,7,43,0,8,116,0,8,52,0,9,201,81,7,13,0,8,100,0,8,36,0,9,169,0,8,4,0,8,132,0,8,68,0,9,233,80,7,8,0,8,92,0,8,28,0,9,153,84,7,83,0,8,124,0,8,60,0,9,217,82,7,23,0,8,108,0,8,44,0,9,185,0,8,12,0,8,140,0,8,76,0,9,249,80,7,3,0,8,82,0,8,18,85,8,163,83,7,35,0,8,114,0,8,50,0,9,197,81,7,11,0,8,98,0,8,34,0,9,165,0,8,2,0,8,130,0,8,66,0,9,229,80,7,7,0,8,90,0,8,26,0,9,149,84,7,67,0,8,122,0,8,58,0,9,213,82,7,19,0,8,106,0,8,42,0,9,181,0,8,10,0,8,138,0,8,74,0,9,245,80,7,5,0,8,86,0,8,22,192,8,0,83,7,51,0,8,118,0,8,54,0,9,205,81,7,15,0,8,102,0,8,38,0,9,173,0,8,6,0,8,134,0,8,70,0,9,237,80,7,9,0,8,94,0,8,30,0,9,157,84,7,99,0,8,126,0,8,62,0,9,221,82,7,27,0,8,110,0,8,46,0,9,189,0,8,14,0,8,142,0,8,78,0,9,253,96,7,256,0,8,81,0,8,17,85,8,131,82,7,31,0,8,113,0,8,49,0,9,195,80,7,10,0,8,97,0,8,33,0,9,163,0,8,1,0,8,129,0,8,65,0,9,227,80,7,6,0,8,89,0,8,25,0,9,147,83,7,59,0,8,121,0,8,57,0,9,211,81,7,17,0,8,105,0,8,41,0,9,179,0,8,9,0,8,137,0,8,73,0,9,243,80,7,4,0,8,85,0,8,21,80,8,258,83,7,43,0,8,117,0,8,53,0,9,203,81,7,13,0,8,101,0,8,37,0,9,171,0,8,5,0,8,133,0,8,69,0,9,235,80,7,8,0,8,93,0,8,29,0,9,155,84,7,83,0,8,125,0,8,61,0,9,219,82,7,23,0,8,109,0,8,45,0,9,187,0,8,13,0,8,141,0,8,77,0,9,251,80,7,3,0,8,83,0,8,19,85,8,195,83,7,35,0,8,115,0,8,51,0,9,199,81,7,11,0,8,99,0,8,35,0,9,167,0,8,3,0,8,131,0,8,67,0,9,231,80,7,7,0,8,91,0,8,27,0,9,151,84,7,67,0,8,123,0,8,59,0,9,215,82,7,19,0,8,107,0,8,43,0,9,183,0,8,11,0,8,139,0,8,75,0,9,247,80,7,5,0,8,87,0,8,23,192,8,0,83,7,51,0,8,119,0,8,55,0,9,207,81,7,15,0,8,103,0,8,39,0,9,175,0,8,7,0,8,135,0,8,71,0,9,239,80,7,9,0,8,95,0,8,31,0,9,159,84,7,99,0,8,127,0,8,63,0,9,223,82,7,27,0,8,111,0,8,47,0,9,191,0,8,15,0,8,143,0,8,79,0,9,255],wA=[80,5,1,87,5,257,83,5,17,91,5,4097,81,5,5,89,5,1025,85,5,65,93,5,16385,80,5,3,88,5,513,84,5,33,92,5,8193,82,5,9,90,5,2049,86,5,129,192,5,24577,80,5,2,87,5,385,83,5,25,91,5,6145,81,5,7,89,5,1537,85,5,97,93,5,24577,80,5,4,88,5,769,84,5,49,92,5,12289,82,5,13,90,5,3073,86,5,193,192,5,24577],MA=[3,4,5,6,7,8,9,10,11,13,15,17,19,23,27,31,35,43,51,59,67,83,99,115,131,163,195,227,258,0,0],jA=[0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,112,112],NA=[1,2,3,4,5,7,9,13,17,25,33,49,65,97,129,193,257,385,513,769,1025,1537,2049,3073,4097,6145,8193,12289,16385,24577],HA=[0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13],_n=15;function qf(){const i=this;let u,c,f,r,o,h;function v(A,x,T,D,X,q,p,E,b,R,N){let V,F,H,j,Y,z,I,k,nt,P,st,ut,M,_,$;P=0,Y=T;do f[A[x+P]]++,P++,Y--;while(Y!==0);if(f[0]==T)return p[0]=-1,E[0]=0,bt;for(k=E[0],z=1;z<=_n&&f[z]===0;z++);for(I=z,k<z&&(k=z),Y=_n;Y!==0&&f[Y]===0;Y--);for(H=Y,k>Y&&(k=Y),E[0]=k,_=1<<z;z<Y;z++,_<<=1)if((_-=f[z])<0)return Ut;if((_-=f[Y])<0)return Ut;for(f[Y]+=_,h[1]=z=0,P=1,M=2;--Y!==0;)h[M]=z+=f[P],M++,P++;Y=0,P=0;do(z=A[x+P])!==0&&(N[h[z]++]=Y),P++;while(++Y<T);for(T=h[H],h[0]=Y=0,P=0,j=-1,ut=-k,o[0]=0,st=0,$=0;I<=H;I++)for(V=f[I];V--!==0;){for(;I>ut+k;){if(j++,ut+=k,$=H-ut,$=$>k?k:$,(F=1<<(z=I-ut))>V+1&&(F-=V+1,M=I,z<$))for(;++z<$&&!((F<<=1)<=f[++M]);)F-=f[M];if($=1<<z,R[0]+$>w2)return Ut;o[j]=st=R[0],R[0]+=$,j!==0?(h[j]=Y,r[0]=z,r[1]=k,z=Y>>>ut-k,r[2]=st-o[j-1]-z,b.set(r,(o[j-1]+z)*3)):p[0]=st}for(r[1]=I-ut,P>=T?r[0]=192:N[P]<D?(r[0]=N[P]<256?0:96,r[2]=N[P++]):(r[0]=q[N[P]-D]+16+64,r[2]=X[N[P++]-D]),F=1<<I-ut,z=Y>>>ut;z<$;z+=F)b.set(r,(st+z)*3);for(z=1<<I-1;(Y&z)!==0;z>>>=1)Y^=z;for(Y^=z,nt=(1<<ut)-1;(Y&nt)!=h[j];)j--,ut-=k,nt=(1<<ut)-1}return _!==0&&H!=1?pn:bt}function y(A){let x;for(u||(u=[],c=[],f=new Int32Array(_n+1),r=[],o=new Int32Array(_n),h=new Int32Array(_n+1)),c.length<A&&(c=[]),x=0;x<A;x++)c[x]=0;for(x=0;x<_n+1;x++)f[x]=0;for(x=0;x<3;x++)r[x]=0;o.set(f.subarray(0,_n),0),h.set(f.subarray(0,_n+1),0)}i.inflate_trees_bits=function(A,x,T,D,X){let q;return y(19),u[0]=0,q=v(A,0,19,19,null,null,T,x,D,u,c),q==Ut?X.msg="oversubscribed dynamic bit lengths tree":(q==pn||x[0]===0)&&(X.msg="incomplete dynamic bit lengths tree",q=Ut),q},i.inflate_trees_dynamic=function(A,x,T,D,X,q,p,E,b){let R;return y(288),u[0]=0,R=v(T,0,A,257,MA,jA,q,D,E,u,c),R!=bt||D[0]===0?(R==Ut?b.msg="oversubscribed literal/length tree":R!=p1&&(b.msg="incomplete literal/length tree",R=Ut),R):(y(288),R=v(T,A,x,0,NA,HA,p,X,E,u,c),R!=bt||X[0]===0&&A>257?(R==Ut?b.msg="oversubscribed distance tree":R==pn?(b.msg="incomplete distance tree",R=Ut):R!=p1&&(b.msg="empty distance tree with lengths",R=Ut),R):bt)}}qf.inflate_trees_fixed=function(i,u,c,f){return i[0]=OA,u[0]=DA,c[0]=RA,f[0]=wA,bt};const Fu=0,x1=1,b1=2,S1=3,T1=4,C1=5,O1=6,Df=7,D1=8,Wu=9;function BA(){const i=this;let u,c=0,f,r=0,o=0,h=0,v=0,y=0,A=0,x=0,T,D=0,X,q=0;function p(E,b,R,N,V,F,H,j){let Y,z,I,k,nt,P,st,ut,M,_,$,ht,tt,C,L,W;st=j.next_in_index,ut=j.avail_in,nt=H.bitb,P=H.bitk,M=H.write,_=M<H.read?H.read-M-1:H.end-M,$=Me[E],ht=Me[b];do{for(;P<20;)ut--,nt|=(j.read_byte(st++)&255)<<P,P+=8;if(Y=nt&$,z=R,I=N,W=(I+Y)*3,(k=z[W])===0){nt>>=z[W+1],P-=z[W+1],H.win[M++]=z[W+2],_--;continue}do{if(nt>>=z[W+1],P-=z[W+1],(k&16)!==0){for(k&=15,tt=z[W+2]+(nt&Me[k]),nt>>=k,P-=k;P<15;)ut--,nt|=(j.read_byte(st++)&255)<<P,P+=8;Y=nt&ht,z=V,I=F,W=(I+Y)*3,k=z[W];do if(nt>>=z[W+1],P-=z[W+1],(k&16)!==0){for(k&=15;P<k;)ut--,nt|=(j.read_byte(st++)&255)<<P,P+=8;if(C=z[W+2]+(nt&Me[k]),nt>>=k,P-=k,_-=tt,M>=C)L=M-C,M-L>0&&2>M-L?(H.win[M++]=H.win[L++],H.win[M++]=H.win[L++],tt-=2):(H.win.set(H.win.subarray(L,L+2),M),M+=2,L+=2,tt-=2);else{L=M-C;do L+=H.end;while(L<0);if(k=H.end-L,tt>k){if(tt-=k,M-L>0&&k>M-L)do H.win[M++]=H.win[L++];while(--k!==0);else H.win.set(H.win.subarray(L,L+k),M),M+=k,L+=k,k=0;L=0}}if(M-L>0&&tt>M-L)do H.win[M++]=H.win[L++];while(--tt!==0);else H.win.set(H.win.subarray(L,L+tt),M),M+=tt,L+=tt,tt=0;break}else if((k&64)===0)Y+=z[W+2],Y+=nt&Me[k],W=(I+Y)*3,k=z[W];else return j.msg="invalid distance code",tt=j.avail_in-ut,tt=P>>3<tt?P>>3:tt,ut+=tt,st-=tt,P-=tt<<3,H.bitb=nt,H.bitk=P,j.avail_in=ut,j.total_in+=st-j.next_in_index,j.next_in_index=st,H.write=M,Ut;while(!0);break}if((k&64)===0){if(Y+=z[W+2],Y+=nt&Me[k],W=(I+Y)*3,(k=z[W])===0){nt>>=z[W+1],P-=z[W+1],H.win[M++]=z[W+2],_--;break}}else return(k&32)!==0?(tt=j.avail_in-ut,tt=P>>3<tt?P>>3:tt,ut+=tt,st-=tt,P-=tt<<3,H.bitb=nt,H.bitk=P,j.avail_in=ut,j.total_in+=st-j.next_in_index,j.next_in_index=st,H.write=M,En):(j.msg="invalid literal/length code",tt=j.avail_in-ut,tt=P>>3<tt?P>>3:tt,ut+=tt,st-=tt,P-=tt<<3,H.bitb=nt,H.bitk=P,j.avail_in=ut,j.total_in+=st-j.next_in_index,j.next_in_index=st,H.write=M,Ut)}while(!0)}while(_>=258&&ut>=10);return tt=j.avail_in-ut,tt=P>>3<tt?P>>3:tt,ut+=tt,st-=tt,P-=tt<<3,H.bitb=nt,H.bitk=P,j.avail_in=ut,j.total_in+=st-j.next_in_index,j.next_in_index=st,H.write=M,bt}i.init=function(E,b,R,N,V,F){u=Fu,A=E,x=b,T=R,D=N,X=V,q=F,f=null},i.proc=function(E,b,R){let N,V,F,H=0,j=0,Y=0,z,I,k,nt;for(Y=b.next_in_index,z=b.avail_in,H=E.bitb,j=E.bitk,I=E.write,k=I<E.read?E.read-I-1:E.end-I;;)switch(u){case Fu:if(k>=258&&z>=10&&(E.bitb=H,E.bitk=j,b.avail_in=z,b.total_in+=Y-b.next_in_index,b.next_in_index=Y,E.write=I,R=p(A,x,T,D,X,q,E,b),Y=b.next_in_index,z=b.avail_in,H=E.bitb,j=E.bitk,I=E.write,k=I<E.read?E.read-I-1:E.end-I,R!=bt)){u=R==En?Df:Wu;break}o=A,f=T,r=D,u=x1;case x1:for(N=o;j<N;){if(z!==0)R=bt;else return E.bitb=H,E.bitk=j,b.avail_in=z,b.total_in+=Y-b.next_in_index,b.next_in_index=Y,E.write=I,E.inflate_flush(b,R);z--,H|=(b.read_byte(Y++)&255)<<j,j+=8}if(V=(r+(H&Me[N]))*3,H>>>=f[V+1],j-=f[V+1],F=f[V],F===0){h=f[V+2],u=O1;break}if((F&16)!==0){v=F&15,c=f[V+2],u=b1;break}if((F&64)===0){o=F,r=V/3+f[V+2];break}if((F&32)!==0){u=Df;break}return u=Wu,b.msg="invalid literal/length code",R=Ut,E.bitb=H,E.bitk=j,b.avail_in=z,b.total_in+=Y-b.next_in_index,b.next_in_index=Y,E.write=I,E.inflate_flush(b,R);case b1:for(N=v;j<N;){if(z!==0)R=bt;else return E.bitb=H,E.bitk=j,b.avail_in=z,b.total_in+=Y-b.next_in_index,b.next_in_index=Y,E.write=I,E.inflate_flush(b,R);z--,H|=(b.read_byte(Y++)&255)<<j,j+=8}c+=H&Me[N],H>>=N,j-=N,o=x,f=X,r=q,u=S1;case S1:for(N=o;j<N;){if(z!==0)R=bt;else return E.bitb=H,E.bitk=j,b.avail_in=z,b.total_in+=Y-b.next_in_index,b.next_in_index=Y,E.write=I,E.inflate_flush(b,R);z--,H|=(b.read_byte(Y++)&255)<<j,j+=8}if(V=(r+(H&Me[N]))*3,H>>=f[V+1],j-=f[V+1],F=f[V],(F&16)!==0){v=F&15,y=f[V+2],u=T1;break}if((F&64)===0){o=F,r=V/3+f[V+2];break}return u=Wu,b.msg="invalid distance code",R=Ut,E.bitb=H,E.bitk=j,b.avail_in=z,b.total_in+=Y-b.next_in_index,b.next_in_index=Y,E.write=I,E.inflate_flush(b,R);case T1:for(N=v;j<N;){if(z!==0)R=bt;else return E.bitb=H,E.bitk=j,b.avail_in=z,b.total_in+=Y-b.next_in_index,b.next_in_index=Y,E.write=I,E.inflate_flush(b,R);z--,H|=(b.read_byte(Y++)&255)<<j,j+=8}y+=H&Me[N],H>>=N,j-=N,u=C1;case C1:for(nt=I-y;nt<0;)nt+=E.end;for(;c!==0;){if(k===0&&(I==E.end&&E.read!==0&&(I=0,k=I<E.read?E.read-I-1:E.end-I),k===0&&(E.write=I,R=E.inflate_flush(b,R),I=E.write,k=I<E.read?E.read-I-1:E.end-I,I==E.end&&E.read!==0&&(I=0,k=I<E.read?E.read-I-1:E.end-I),k===0)))return E.bitb=H,E.bitk=j,b.avail_in=z,b.total_in+=Y-b.next_in_index,b.next_in_index=Y,E.write=I,E.inflate_flush(b,R);E.win[I++]=E.win[nt++],k--,nt==E.end&&(nt=0),c--}u=Fu;break;case O1:if(k===0&&(I==E.end&&E.read!==0&&(I=0,k=I<E.read?E.read-I-1:E.end-I),k===0&&(E.write=I,R=E.inflate_flush(b,R),I=E.write,k=I<E.read?E.read-I-1:E.end-I,I==E.end&&E.read!==0&&(I=0,k=I<E.read?E.read-I-1:E.end-I),k===0)))return E.bitb=H,E.bitk=j,b.avail_in=z,b.total_in+=Y-b.next_in_index,b.next_in_index=Y,E.write=I,E.inflate_flush(b,R);R=bt,E.win[I++]=h,k--,u=Fu;break;case Df:if(j>7&&(j-=8,z++,Y--),E.write=I,R=E.inflate_flush(b,R),I=E.write,k=I<E.read?E.read-I-1:E.end-I,E.read!=E.write)return E.bitb=H,E.bitk=j,b.avail_in=z,b.total_in+=Y-b.next_in_index,b.next_in_index=Y,E.write=I,E.inflate_flush(b,R);u=D1;case D1:return R=En,E.bitb=H,E.bitk=j,b.avail_in=z,b.total_in+=Y-b.next_in_index,b.next_in_index=Y,E.write=I,E.inflate_flush(b,R);case Wu:return R=Ut,E.bitb=H,E.bitk=j,b.avail_in=z,b.total_in+=Y-b.next_in_index,b.next_in_index=Y,E.write=I,E.inflate_flush(b,R);default:return R=ye,E.bitb=H,E.bitk=j,b.avail_in=z,b.total_in+=Y-b.next_in_index,b.next_in_index=Y,E.write=I,E.inflate_flush(b,R)}},i.free=function(){}}const R1=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15],ya=0,Rf=1,w1=2,M1=3,j1=4,N1=5,_u=6,Pu=7,H1=8,Cl=9;function UA(i,u){const c=this;let f=ya,r=0,o=0,h=0,v;const y=[0],A=[0],x=new BA;let T=0,D=new Int32Array(w2*3);const X=0,q=new qf;c.bitk=0,c.bitb=0,c.win=new Uint8Array(u),c.end=u,c.read=0,c.write=0,c.reset=function(p,E){E&&(E[0]=X),f==_u&&x.free(p),f=ya,c.bitk=0,c.bitb=0,c.read=c.write=0},c.reset(i,null),c.inflate_flush=function(p,E){let b,R,N;return R=p.next_out_index,N=c.read,b=(N<=c.write?c.write:c.end)-N,b>p.avail_out&&(b=p.avail_out),b!==0&&E==pn&&(E=bt),p.avail_out-=b,p.total_out+=b,p.next_out.set(c.win.subarray(N,N+b),R),R+=b,N+=b,N==c.end&&(N=0,c.write==c.end&&(c.write=0),b=c.write-N,b>p.avail_out&&(b=p.avail_out),b!==0&&E==pn&&(E=bt),p.avail_out-=b,p.total_out+=b,p.next_out.set(c.win.subarray(N,N+b),R),R+=b,N+=b),p.next_out_index=R,c.read=N,E},c.proc=function(p,E){let b,R,N,V,F,H,j,Y;for(V=p.next_in_index,F=p.avail_in,R=c.bitb,N=c.bitk,H=c.write,j=H<c.read?c.read-H-1:c.end-H;;){let z,I,k,nt,P,st,ut,M;switch(f){case ya:for(;N<3;){if(F!==0)E=bt;else return c.bitb=R,c.bitk=N,p.avail_in=F,p.total_in+=V-p.next_in_index,p.next_in_index=V,c.write=H,c.inflate_flush(p,E);F--,R|=(p.read_byte(V++)&255)<<N,N+=8}switch(b=R&7,T=b&1,b>>>1){case 0:R>>>=3,N-=3,b=N&7,R>>>=b,N-=b,f=Rf;break;case 1:z=[],I=[],k=[[]],nt=[[]],qf.inflate_trees_fixed(z,I,k,nt),x.init(z[0],I[0],k[0],0,nt[0],0),R>>>=3,N-=3,f=_u;break;case 2:R>>>=3,N-=3,f=M1;break;case 3:return R>>>=3,N-=3,f=Cl,p.msg="invalid block type",E=Ut,c.bitb=R,c.bitk=N,p.avail_in=F,p.total_in+=V-p.next_in_index,p.next_in_index=V,c.write=H,c.inflate_flush(p,E)}break;case Rf:for(;N<32;){if(F!==0)E=bt;else return c.bitb=R,c.bitk=N,p.avail_in=F,p.total_in+=V-p.next_in_index,p.next_in_index=V,c.write=H,c.inflate_flush(p,E);F--,R|=(p.read_byte(V++)&255)<<N,N+=8}if((~R>>>16&65535)!=(R&65535))return f=Cl,p.msg="invalid stored block lengths",E=Ut,c.bitb=R,c.bitk=N,p.avail_in=F,p.total_in+=V-p.next_in_index,p.next_in_index=V,c.write=H,c.inflate_flush(p,E);r=R&65535,R=N=0,f=r!==0?w1:T!==0?Pu:ya;break;case w1:if(F===0||j===0&&(H==c.end&&c.read!==0&&(H=0,j=H<c.read?c.read-H-1:c.end-H),j===0&&(c.write=H,E=c.inflate_flush(p,E),H=c.write,j=H<c.read?c.read-H-1:c.end-H,H==c.end&&c.read!==0&&(H=0,j=H<c.read?c.read-H-1:c.end-H),j===0)))return c.bitb=R,c.bitk=N,p.avail_in=F,p.total_in+=V-p.next_in_index,p.next_in_index=V,c.write=H,c.inflate_flush(p,E);if(E=bt,b=r,b>F&&(b=F),b>j&&(b=j),c.win.set(p.read_buf(V,b),H),V+=b,F-=b,H+=b,j-=b,(r-=b)!==0)break;f=T!==0?Pu:ya;break;case M1:for(;N<14;){if(F!==0)E=bt;else return c.bitb=R,c.bitk=N,p.avail_in=F,p.total_in+=V-p.next_in_index,p.next_in_index=V,c.write=H,c.inflate_flush(p,E);F--,R|=(p.read_byte(V++)&255)<<N,N+=8}if(o=b=R&16383,(b&31)>29||(b>>5&31)>29)return f=Cl,p.msg="too many length or distance symbols",E=Ut,c.bitb=R,c.bitk=N,p.avail_in=F,p.total_in+=V-p.next_in_index,p.next_in_index=V,c.write=H,c.inflate_flush(p,E);if(b=258+(b&31)+(b>>5&31),!v||v.length<b)v=[];else for(Y=0;Y<b;Y++)v[Y]=0;R>>>=14,N-=14,h=0,f=j1;case j1:for(;h<4+(o>>>10);){for(;N<3;){if(F!==0)E=bt;else return c.bitb=R,c.bitk=N,p.avail_in=F,p.total_in+=V-p.next_in_index,p.next_in_index=V,c.write=H,c.inflate_flush(p,E);F--,R|=(p.read_byte(V++)&255)<<N,N+=8}v[R1[h++]]=R&7,R>>>=3,N-=3}for(;h<19;)v[R1[h++]]=0;if(y[0]=7,b=q.inflate_trees_bits(v,y,A,D,p),b!=bt)return E=b,E==Ut&&(v=null,f=Cl),c.bitb=R,c.bitk=N,p.avail_in=F,p.total_in+=V-p.next_in_index,p.next_in_index=V,c.write=H,c.inflate_flush(p,E);h=0,f=N1;case N1:for(;b=o,!(h>=258+(b&31)+(b>>5&31));){let _,$;for(b=y[0];N<b;){if(F!==0)E=bt;else return c.bitb=R,c.bitk=N,p.avail_in=F,p.total_in+=V-p.next_in_index,p.next_in_index=V,c.write=H,c.inflate_flush(p,E);F--,R|=(p.read_byte(V++)&255)<<N,N+=8}if(b=D[(A[0]+(R&Me[b]))*3+1],$=D[(A[0]+(R&Me[b]))*3+2],$<16)R>>>=b,N-=b,v[h++]=$;else{for(Y=$==18?7:$-14,_=$==18?11:3;N<b+Y;){if(F!==0)E=bt;else return c.bitb=R,c.bitk=N,p.avail_in=F,p.total_in+=V-p.next_in_index,p.next_in_index=V,c.write=H,c.inflate_flush(p,E);F--,R|=(p.read_byte(V++)&255)<<N,N+=8}if(R>>>=b,N-=b,_+=R&Me[Y],R>>>=Y,N-=Y,Y=h,b=o,Y+_>258+(b&31)+(b>>5&31)||$==16&&Y<1)return v=null,f=Cl,p.msg="invalid bit length repeat",E=Ut,c.bitb=R,c.bitk=N,p.avail_in=F,p.total_in+=V-p.next_in_index,p.next_in_index=V,c.write=H,c.inflate_flush(p,E);$=$==16?v[Y-1]:0;do v[Y++]=$;while(--_!==0);h=Y}}if(A[0]=-1,P=[],st=[],ut=[],M=[],P[0]=9,st[0]=6,b=o,b=q.inflate_trees_dynamic(257+(b&31),1+(b>>5&31),v,P,st,ut,M,D,p),b!=bt)return b==Ut&&(v=null,f=Cl),E=b,c.bitb=R,c.bitk=N,p.avail_in=F,p.total_in+=V-p.next_in_index,p.next_in_index=V,c.write=H,c.inflate_flush(p,E);x.init(P[0],st[0],D,ut[0],D,M[0]),f=_u;case _u:if(c.bitb=R,c.bitk=N,p.avail_in=F,p.total_in+=V-p.next_in_index,p.next_in_index=V,c.write=H,(E=x.proc(c,p,E))!=En)return c.inflate_flush(p,E);if(E=bt,x.free(p),V=p.next_in_index,F=p.avail_in,R=c.bitb,N=c.bitk,H=c.write,j=H<c.read?c.read-H-1:c.end-H,T===0){f=ya;break}f=Pu;case Pu:if(c.write=H,E=c.inflate_flush(p,E),H=c.write,j=H<c.read?c.read-H-1:c.end-H,c.read!=c.write)return c.bitb=R,c.bitk=N,p.avail_in=F,p.total_in+=V-p.next_in_index,p.next_in_index=V,c.write=H,c.inflate_flush(p,E);f=H1;case H1:return E=En,c.bitb=R,c.bitk=N,p.avail_in=F,p.total_in+=V-p.next_in_index,p.next_in_index=V,c.write=H,c.inflate_flush(p,E);case Cl:return E=Ut,c.bitb=R,c.bitk=N,p.avail_in=F,p.total_in+=V-p.next_in_index,p.next_in_index=V,c.write=H,c.inflate_flush(p,E);default:return E=ye,c.bitb=R,c.bitk=N,p.avail_in=F,p.total_in+=V-p.next_in_index,p.next_in_index=V,c.write=H,c.inflate_flush(p,E)}}},c.free=function(p){c.reset(p,null),c.win=null,D=null},c.set_dictionary=function(p,E,b){c.win.set(p.subarray(E,E+b),0),c.read=c.write=b},c.sync_point=function(){return f==Rf?1:0}}const QA=32,zA=8,YA=0,B1=1,U1=2,Q1=3,z1=4,Y1=5,wf=6,yi=7,L1=12,Pn=13,LA=[0,0,255,255];function GA(){const i=this;i.mode=0,i.method=0,i.was=[0],i.need=0,i.marker=0,i.wbits=0;function u(c){return!c||!c.istate?ye:(c.total_in=c.total_out=0,c.msg=null,c.istate.mode=yi,c.istate.blocks.reset(c,null),bt)}i.inflateEnd=function(c){return i.blocks&&i.blocks.free(c),i.blocks=null,bt},i.inflateInit=function(c,f){return c.msg=null,i.blocks=null,f<8||f>15?(i.inflateEnd(c),ye):(i.wbits=f,c.istate.blocks=new UA(c,1<<f),u(c),bt)},i.inflate=function(c,f){let r,o;if(!c||!c.istate||!c.next_in)return ye;const h=c.istate;for(f=f==CA?pn:bt,r=pn;;)switch(h.mode){case YA:if(c.avail_in===0)return r;if(r=f,c.avail_in--,c.total_in++,((h.method=c.read_byte(c.next_in_index++))&15)!=zA){h.mode=Pn,c.msg="unknown compression method",h.marker=5;break}if((h.method>>4)+8>h.wbits){h.mode=Pn,c.msg="invalid win size",h.marker=5;break}h.mode=B1;case B1:if(c.avail_in===0)return r;if(r=f,c.avail_in--,c.total_in++,o=c.read_byte(c.next_in_index++)&255,((h.method<<8)+o)%31!==0){h.mode=Pn,c.msg="incorrect header check",h.marker=5;break}if((o&QA)===0){h.mode=yi;break}h.mode=U1;case U1:if(c.avail_in===0)return r;r=f,c.avail_in--,c.total_in++,h.need=(c.read_byte(c.next_in_index++)&255)<<24&4278190080,h.mode=Q1;case Q1:if(c.avail_in===0)return r;r=f,c.avail_in--,c.total_in++,h.need+=(c.read_byte(c.next_in_index++)&255)<<16&16711680,h.mode=z1;case z1:if(c.avail_in===0)return r;r=f,c.avail_in--,c.total_in++,h.need+=(c.read_byte(c.next_in_index++)&255)<<8&65280,h.mode=Y1;case Y1:return c.avail_in===0?r:(r=f,c.avail_in--,c.total_in++,h.need+=c.read_byte(c.next_in_index++)&255,h.mode=wf,SA);case wf:return h.mode=Pn,c.msg="need dictionary",h.marker=0,ye;case yi:if(r=h.blocks.proc(c,r),r==Ut){h.mode=Pn,h.marker=0;break}if(r==bt&&(r=f),r!=En)return r;r=f,h.blocks.reset(c,h.was),h.mode=L1;case L1:return c.avail_in=0,En;case Pn:return Ut;default:return ye}},i.inflateSetDictionary=function(c,f,r){let o=0,h=r;if(!c||!c.istate||c.istate.mode!=wf)return ye;const v=c.istate;return h>=1<<v.wbits&&(h=(1<<v.wbits)-1,o=r-h),v.blocks.set_dictionary(f,o,h),v.mode=yi,bt},i.inflateSync=function(c){let f,r,o,h,v;if(!c||!c.istate)return ye;const y=c.istate;if(y.mode!=Pn&&(y.mode=Pn,y.marker=0),(f=c.avail_in)===0)return pn;for(r=c.next_in_index,o=y.marker;f!==0&&o<4;)c.read_byte(r)==LA[o]?o++:c.read_byte(r)!==0?o=0:o=4-o,r++,f--;return c.total_in+=r-c.next_in_index,c.next_in_index=r,c.avail_in=f,y.marker=o,o!=4?Ut:(h=c.total_in,v=c.total_out,u(c),c.total_in=h,c.total_out=v,y.mode=yi,bt)},i.inflateSyncPoint=function(c){return!c||!c.istate||!c.istate.blocks?ye:c.istate.blocks.sync_point()}}function M2(){}M2.prototype={inflateInit(i){const u=this;return u.istate=new GA,i||(i=bA),u.istate.inflateInit(u,i)},inflate(i){const u=this;return u.istate?u.istate.inflate(u,i):ye},inflateEnd(){const i=this;if(!i.istate)return ye;const u=i.istate.inflateEnd(i);return i.istate=null,u},inflateSync(){const i=this;return i.istate?i.istate.inflateSync(i):ye},inflateSetDictionary(i,u){const c=this;return c.istate?c.istate.inflateSetDictionary(c,i,u):ye},read_byte(i){return this.next_in[i]},read_buf(i,u){return this.next_in.subarray(i,i+u)}};function XA(i){const u=this,c=new M2,f=i&&i.chunkSize?Math.floor(i.chunkSize*2):128*1024,r=TA,o=new Uint8Array(f);let h=!1;c.inflateInit(),c.next_out=o,u.append=function(v,y){const A=[];let x,T,D=0,X=0,q=0;if(v.length!==0){c.next_in_index=0,c.next_in=v,c.avail_in=v.length;do{if(c.next_out_index=0,c.avail_out=f,c.avail_in===0&&!h&&(c.next_in_index=0,h=!0),x=c.inflate(r),h&&x===pn){if(c.avail_in!==0)throw new Error("inflating: bad input")}else if(x!==bt&&x!==En)throw new Error("inflating: "+c.msg);if((h||x===En)&&c.avail_in===v.length)throw new Error("inflating: bad input");c.next_out_index&&(c.next_out_index===f?A.push(new Uint8Array(o)):A.push(o.subarray(0,c.next_out_index))),q+=c.next_out_index,y&&c.next_in_index>0&&c.next_in_index!=D&&(y(c.next_in_index),D=c.next_in_index)}while(c.avail_in>0||c.avail_out===0);return A.length>1?(T=new Uint8Array(q),A.forEach(function(p){T.set(p,X),X+=p.length})):T=A[0]?new Uint8Array(A[0]):new Uint8Array,T}},u.flush=function(){c.inflateEnd()}}const Rl=4294967295,el=65535,VA=8,ZA=0,IA=99,qA=67324752,j2=134695760,KA=j2,G1=33639248,kA=101010256,X1=101075792,JA=117853008,Ea=22,Mf=20,jf=56,FA=12,WA=20,V1=4,_A=1,PA=39169,$A=10,t5=1,e5=21589,n5=28789,l5=25461,a5=6534,Z1=1,i5=6,I1=8,q1=2048,K1=16,u5=61440,c5=16384,s5=73,k1="/",Nf=30,f5=10,r5=14,o5=18,$t=void 0,al="undefined",Ri="function";class J1{constructor(u){return class extends TransformStream{constructor(c,f){const r=new u(f);super({transform(o,h){h.enqueue(r.append(o))},flush(o){const h=r.flush();h&&o.enqueue(h)}})}}}}const d5=64;let N2=2;try{typeof navigator!=al&&navigator.hardwareConcurrency&&(N2=navigator.hardwareConcurrency)}catch{}const h5={chunkSize:512*1024,maxWorkers:N2,terminateWorkerTimeout:5e3,useWebWorkers:!0,useCompressionStream:!0,workerScripts:$t,CompressionStreamNative:typeof CompressionStream!=al&&CompressionStream,DecompressionStreamNative:typeof DecompressionStream!=al&&DecompressionStream},nl=Object.assign({},h5);function m5(){return nl}function g5(i){return Math.max(i.chunkSize,d5)}function H2(i){const{baseURL:u,chunkSize:c,maxWorkers:f,terminateWorkerTimeout:r,useCompressionStream:o,useWebWorkers:h,Deflate:v,Inflate:y,CompressionStream:A,DecompressionStream:x,workerScripts:T}=i;if($n("baseURL",u),$n("chunkSize",c),$n("maxWorkers",f),$n("terminateWorkerTimeout",r),$n("useCompressionStream",o),$n("useWebWorkers",h),v&&(nl.CompressionStream=new J1(v)),y&&(nl.DecompressionStream=new J1(y)),$n("CompressionStream",A),$n("DecompressionStream",x),T!==$t){const{deflate:D,inflate:X}=T;if((D||X)&&(nl.workerScripts||(nl.workerScripts={})),D){if(!Array.isArray(D))throw new Error("workerScripts.deflate must be an array");nl.workerScripts.deflate=D}if(X){if(!Array.isArray(X))throw new Error("workerScripts.inflate must be an array");nl.workerScripts.inflate=X}}}function $n(i,u){u!==$t&&(nl[i]=u)}const B2=[];for(let i=0;i<256;i++){let u=i;for(let c=0;c<8;c++)u&1?u=u>>>1^3988292384:u=u>>>1;B2[i]=u}class ac{constructor(u){this.crc=u||-1}append(u){let c=this.crc|0;for(let f=0,r=u.length|0;f<r;f++)c=c>>>8^B2[(c^u[f])&255];this.crc=c}get(){return~this.crc}}class U2 extends TransformStream{constructor(){let u;const c=new ac;super({transform(f,r){c.append(f),r.enqueue(f)},flush(){const f=new Uint8Array(4);new DataView(f.buffer).setUint32(0,c.get()),u.value=f}}),u=this}}function A5(i){if(typeof TextEncoder==al){i=unescape(encodeURIComponent(i));const u=new Uint8Array(i.length);for(let c=0;c<u.length;c++)u[c]=i.charCodeAt(c);return u}else return new TextEncoder().encode(i)}const re={concat(i,u){if(i.length===0||u.length===0)return i.concat(u);const c=i[i.length-1],f=re.getPartial(c);return f===32?i.concat(u):re._shiftRight(u,f,c|0,i.slice(0,i.length-1))},bitLength(i){const u=i.length;if(u===0)return 0;const c=i[u-1];return(u-1)*32+re.getPartial(c)},clamp(i,u){if(i.length*32<u)return i;i=i.slice(0,Math.ceil(u/32));const c=i.length;return u=u&31,c>0&&u&&(i[c-1]=re.partial(u,i[c-1]&2147483648>>u-1,1)),i},partial(i,u,c){return i===32?u:(c?u|0:u<<32-i)+i*1099511627776},getPartial(i){return Math.round(i/1099511627776)||32},_shiftRight(i,u,c,f){for(f===void 0&&(f=[]);u>=32;u-=32)f.push(c),c=0;if(u===0)return f.concat(i);for(let h=0;h<i.length;h++)f.push(c|i[h]>>>u),c=i[h]<<32-u;const r=i.length?i[i.length-1]:0,o=re.getPartial(r);return f.push(re.partial(u+o&31,u+o>32?c:f.pop(),1)),f}},ic={bytes:{fromBits(i){const c=re.bitLength(i)/8,f=new Uint8Array(c);let r;for(let o=0;o<c;o++)(o&3)===0&&(r=i[o/4]),f[o]=r>>>24,r<<=8;return f},toBits(i){const u=[];let c,f=0;for(c=0;c<i.length;c++)f=f<<8|i[c],(c&3)===3&&(u.push(f),f=0);return c&3&&u.push(re.partial(8*(c&3),f)),u}}},Q2={};Q2.sha1=class{constructor(i){const u=this;u.blockSize=512,u._init=[1732584193,4023233417,2562383102,271733878,3285377520],u._key=[1518500249,1859775393,2400959708,3395469782],i?(u._h=i._h.slice(0),u._buffer=i._buffer.slice(0),u._length=i._length):u.reset()}reset(){const i=this;return i._h=i._init.slice(0),i._buffer=[],i._length=0,i}update(i){const u=this;typeof i=="string"&&(i=ic.utf8String.toBits(i));const c=u._buffer=re.concat(u._buffer,i),f=u._length,r=u._length=f+re.bitLength(i);if(r>9007199254740991)throw new Error("Cannot hash more than 2^53 - 1 bits");const o=new Uint32Array(c);let h=0;for(let v=u.blockSize+f-(u.blockSize+f&u.blockSize-1);v<=r;v+=u.blockSize)u._block(o.subarray(16*h,16*(h+1))),h+=1;return c.splice(0,16*h),u}finalize(){const i=this;let u=i._buffer;const c=i._h;u=re.concat(u,[re.partial(1,1)]);for(let f=u.length+2;f&15;f++)u.push(0);for(u.push(Math.floor(i._length/4294967296)),u.push(i._length|0);u.length;)i._block(u.splice(0,16));return i.reset(),c}_f(i,u,c,f){if(i<=19)return u&c|~u&f;if(i<=39)return u^c^f;if(i<=59)return u&c|u&f|c&f;if(i<=79)return u^c^f}_S(i,u){return u<<i|u>>>32-i}_block(i){const u=this,c=u._h,f=Array(80);for(let A=0;A<16;A++)f[A]=i[A];let r=c[0],o=c[1],h=c[2],v=c[3],y=c[4];for(let A=0;A<=79;A++){A>=16&&(f[A]=u._S(1,f[A-3]^f[A-8]^f[A-14]^f[A-16]));const x=u._S(5,r)+u._f(A,o,h,v)+y+f[A]+u._key[Math.floor(A/20)]|0;y=v,v=h,h=u._S(30,o),o=r,r=x}c[0]=c[0]+r|0,c[1]=c[1]+o|0,c[2]=c[2]+h|0,c[3]=c[3]+v|0,c[4]=c[4]+y|0}};const z2={};z2.aes=class{constructor(i){const u=this;u._tables=[[[],[],[],[],[]],[[],[],[],[],[]]],u._tables[0][0][0]||u._precompute();const c=u._tables[0][4],f=u._tables[1],r=i.length;let o,h,v,y=1;if(r!==4&&r!==6&&r!==8)throw new Error("invalid aes key size");for(u._key=[h=i.slice(0),v=[]],o=r;o<4*r+28;o++){let A=h[o-1];(o%r===0||r===8&&o%r===4)&&(A=c[A>>>24]<<24^c[A>>16&255]<<16^c[A>>8&255]<<8^c[A&255],o%r===0&&(A=A<<8^A>>>24^y<<24,y=y<<1^(y>>7)*283)),h[o]=h[o-r]^A}for(let A=0;o;A++,o--){const x=h[A&3?o:o-4];o<=4||A<4?v[A]=x:v[A]=f[0][c[x>>>24]]^f[1][c[x>>16&255]]^f[2][c[x>>8&255]]^f[3][c[x&255]]}}encrypt(i){return this._crypt(i,0)}decrypt(i){return this._crypt(i,1)}_precompute(){const i=this._tables[0],u=this._tables[1],c=i[4],f=u[4],r=[],o=[];let h,v,y,A;for(let x=0;x<256;x++)o[(r[x]=x<<1^(x>>7)*283)^x]=x;for(let x=h=0;!c[x];x^=v||1,h=o[h]||1){let T=h^h<<1^h<<2^h<<3^h<<4;T=T>>8^T&255^99,c[x]=T,f[T]=x,A=r[y=r[v=r[x]]];let D=A*16843009^y*65537^v*257^x*16843008,X=r[T]*257^T*16843008;for(let q=0;q<4;q++)i[q][x]=X=X<<24^X>>>8,u[q][T]=D=D<<24^D>>>8}for(let x=0;x<5;x++)i[x]=i[x].slice(0),u[x]=u[x].slice(0)}_crypt(i,u){if(i.length!==4)throw new Error("invalid aes block size");const c=this._key[u],f=c.length/4-2,r=[0,0,0,0],o=this._tables[u],h=o[0],v=o[1],y=o[2],A=o[3],x=o[4];let T=i[0]^c[0],D=i[u?3:1]^c[1],X=i[2]^c[2],q=i[u?1:3]^c[3],p=4,E,b,R;for(let N=0;N<f;N++)E=h[T>>>24]^v[D>>16&255]^y[X>>8&255]^A[q&255]^c[p],b=h[D>>>24]^v[X>>16&255]^y[q>>8&255]^A[T&255]^c[p+1],R=h[X>>>24]^v[q>>16&255]^y[T>>8&255]^A[D&255]^c[p+2],q=h[q>>>24]^v[T>>16&255]^y[D>>8&255]^A[X&255]^c[p+3],p+=4,T=E,D=b,X=R;for(let N=0;N<4;N++)r[u?3&-N:N]=x[T>>>24]<<24^x[D>>16&255]<<16^x[X>>8&255]<<8^x[q&255]^c[p++],E=T,T=D,D=X,X=q,q=E;return r}};const v5={getRandomValues(i){const u=new Uint32Array(i.buffer),c=f=>{let r=987654321;const o=4294967295;return function(){return r=36969*(r&65535)+(r>>16)&o,f=18e3*(f&65535)+(f>>16)&o,(((r<<16)+f&o)/4294967296+.5)*(Math.random()>.5?1:-1)}};for(let f=0,r;f<i.length;f+=4){const o=c((r||Math.random())*4294967296);r=o()*987654071,u[f/4]=o()*4294967296|0}return i}},Y2={};Y2.ctrGladman=class{constructor(i,u){this._prf=i,this._initIv=u,this._iv=u}reset(){this._iv=this._initIv}update(i){return this.calculate(this._prf,i,this._iv)}incWord(i){if((i>>24&255)===255){let u=i>>16&255,c=i>>8&255,f=i&255;u===255?(u=0,c===255?(c=0,f===255?f=0:++f):++c):++u,i=0,i+=u<<16,i+=c<<8,i+=f}else i+=1<<24;return i}incCounter(i){(i[0]=this.incWord(i[0]))===0&&(i[1]=this.incWord(i[1]))}calculate(i,u,c){let f;if(!(f=u.length))return[];const r=re.bitLength(u);for(let o=0;o<f;o+=4){this.incCounter(c);const h=i.encrypt(c);u[o]^=h[0],u[o+1]^=h[1],u[o+2]^=h[2],u[o+3]^=h[3]}return re.clamp(u,r)}};const wl={importKey(i){return new wl.hmacSha1(ic.bytes.toBits(i))},pbkdf2(i,u,c,f){if(c=c||1e4,f<0||c<0)throw new Error("invalid params to pbkdf2");const r=(f>>5)+1<<2;let o,h,v,y,A;const x=new ArrayBuffer(r),T=new DataView(x);let D=0;const X=re;for(u=ic.bytes.toBits(u),A=1;D<(r||1);A++){for(o=h=i.encrypt(X.concat(u,[A])),v=1;v<c;v++)for(h=i.encrypt(h),y=0;y<h.length;y++)o[y]^=h[y];for(v=0;D<(r||1)&&v<o.length;v++)T.setInt32(D,o[v]),D+=4}return x.slice(0,f/8)}};wl.hmacSha1=class{constructor(i){const u=this,c=u._hash=Q2.sha1,f=[[],[]];u._baseHash=[new c,new c];const r=u._baseHash[0].blockSize/32;i.length>r&&(i=new c().update(i).finalize());for(let o=0;o<r;o++)f[0][o]=i[o]^909522486,f[1][o]=i[o]^1549556828;u._baseHash[0].update(f[0]),u._baseHash[1].update(f[1]),u._resultHash=new c(u._baseHash[0])}reset(){const i=this;i._resultHash=new i._hash(i._baseHash[0]),i._updated=!1}update(i){const u=this;u._updated=!0,u._resultHash.update(i)}digest(){const i=this,u=i._resultHash.finalize(),c=new i._hash(i._baseHash[1]).update(u).finalize();return i.reset(),c}encrypt(i){if(this._updated)throw new Error("encrypt on already updated hmac called!");return this.update(i),this.digest(i)}};const y5=typeof crypto!=al&&typeof crypto.getRandomValues==Ri,lr="Invalid password",ar="Invalid signature",ir="zipjs-abort-check-password";function L2(i){return y5?crypto.getRandomValues(i):v5.getRandomValues(i)}const pa=16,E5="raw",G2={name:"PBKDF2"},p5={name:"HMAC"},x5="SHA-1",b5=Object.assign({hash:p5},G2),Kf=Object.assign({iterations:1e3,hash:{name:x5}},G2),S5=["deriveBits"],Si=[8,12,16],Ei=[16,24,32],tl=10,T5=[0,0,0,0],cc=typeof crypto!=al,wi=cc&&crypto.subtle,X2=cc&&typeof wi!=al,Pe=ic.bytes,C5=z2.aes,O5=Y2.ctrGladman,D5=wl.hmacSha1;let F1=cc&&X2&&typeof wi.importKey==Ri,W1=cc&&X2&&typeof wi.deriveBits==Ri;class R5 extends TransformStream{constructor({password:u,rawPassword:c,signed:f,encryptionStrength:r,checkPasswordOnly:o}){super({start(){Object.assign(this,{ready:new Promise(h=>this.resolveReady=h),password:I2(u,c),signed:f,strength:r-1,pending:new Uint8Array})},async transform(h,v){const y=this,{password:A,strength:x,resolveReady:T,ready:D}=y;A?(await M5(y,x,A,Xe(h,0,Si[x]+2)),h=Xe(h,Si[x]+2),o?v.error(new Error(ir)):T()):await D;const X=new Uint8Array(h.length-tl-(h.length-tl)%pa);v.enqueue(V2(y,h,X,0,tl,!0))},async flush(h){const{signed:v,ctr:y,hmac:A,pending:x,ready:T}=this;if(A&&y){await T;const D=Xe(x,0,x.length-tl),X=Xe(x,x.length-tl);let q=new Uint8Array;if(D.length){const p=Ci(Pe,D);A.update(p);const E=y.update(p);q=Ti(Pe,E)}if(v){const p=Xe(Ti(Pe,A.digest()),0,tl);for(let E=0;E<tl;E++)if(p[E]!=X[E])throw new Error(ar)}h.enqueue(q)}}})}}class w5 extends TransformStream{constructor({password:u,rawPassword:c,encryptionStrength:f}){let r;super({start(){Object.assign(this,{ready:new Promise(o=>this.resolveReady=o),password:I2(u,c),strength:f-1,pending:new Uint8Array})},async transform(o,h){const v=this,{password:y,strength:A,resolveReady:x,ready:T}=v;let D=new Uint8Array;y?(D=await j5(v,A,y),x()):await T;const X=new Uint8Array(D.length+o.length-o.length%pa);X.set(D,0),h.enqueue(V2(v,o,X,D.length,0))},async flush(o){const{ctr:h,hmac:v,pending:y,ready:A}=this;if(v&&h){await A;let x=new Uint8Array;if(y.length){const T=h.update(Ci(Pe,y));v.update(T),x=Ti(Pe,T)}r.signature=Ti(Pe,v.digest()).slice(0,tl),o.enqueue(ur(x,r.signature))}}}),r=this}}function V2(i,u,c,f,r,o){const{ctr:h,hmac:v,pending:y}=i,A=u.length-r;y.length&&(u=ur(y,u),c=B5(c,A-A%pa));let x;for(x=0;x<=A-pa;x+=pa){const T=Ci(Pe,Xe(u,x,x+pa));o&&v.update(T);const D=h.update(T);o||v.update(D),c.set(Ti(Pe,D),x+f)}return i.pending=Xe(u,x),c}async function M5(i,u,c,f){const r=await Z2(i,u,c,Xe(f,0,Si[u])),o=Xe(f,Si[u]);if(r[0]!=o[0]||r[1]!=o[1])throw new Error(lr)}async function j5(i,u,c){const f=L2(new Uint8Array(Si[u])),r=await Z2(i,u,c,f);return ur(f,r)}async function Z2(i,u,c,f){i.password=null;const r=await N5(E5,c,b5,!1,S5),o=await H5(Object.assign({salt:f},Kf),r,8*(Ei[u]*2+2)),h=new Uint8Array(o),v=Ci(Pe,Xe(h,0,Ei[u])),y=Ci(Pe,Xe(h,Ei[u],Ei[u]*2)),A=Xe(h,Ei[u]*2);return Object.assign(i,{keys:{key:v,authentication:y,passwordVerification:A},ctr:new O5(new C5(v),Array.from(T5)),hmac:new D5(y)}),A}async function N5(i,u,c,f,r){if(F1)try{return await wi.importKey(i,u,c,f,r)}catch{return F1=!1,wl.importKey(u)}else return wl.importKey(u)}async function H5(i,u,c){if(W1)try{return await wi.deriveBits(i,u,c)}catch{return W1=!1,wl.pbkdf2(u,i.salt,Kf.iterations,c)}else return wl.pbkdf2(u,i.salt,Kf.iterations,c)}function I2(i,u){return u===$t?A5(i):u}function ur(i,u){let c=i;return i.length+u.length&&(c=new Uint8Array(i.length+u.length),c.set(i,0),c.set(u,i.length)),c}function B5(i,u){if(u&&u>i.length){const c=i;i=new Uint8Array(u),i.set(c,0)}return i}function Xe(i,u,c){return i.subarray(u,c)}function Ti(i,u){return i.fromBits(u)}function Ci(i,u){return i.toBits(u)}const bi=12;class U5 extends TransformStream{constructor({password:u,passwordVerification:c,checkPasswordOnly:f}){super({start(){Object.assign(this,{password:u,passwordVerification:c}),q2(this,u)},transform(r,o){const h=this;if(h.password){const v=_1(h,r.subarray(0,bi));if(h.password=null,v.at(-1)!=h.passwordVerification)throw new Error(lr);r=r.subarray(bi)}f?o.error(new Error(ir)):o.enqueue(_1(h,r))}})}}class Q5 extends TransformStream{constructor({password:u,passwordVerification:c}){super({start(){Object.assign(this,{password:u,passwordVerification:c}),q2(this,u)},transform(f,r){const o=this;let h,v;if(o.password){o.password=null;const y=L2(new Uint8Array(bi));y[bi-1]=o.passwordVerification,h=new Uint8Array(f.length+y.length),h.set(P1(o,y),0),v=bi}else h=new Uint8Array(f.length),v=0;h.set(P1(o,f),v),r.enqueue(h)}})}}function _1(i,u){const c=new Uint8Array(u.length);for(let f=0;f<u.length;f++)c[f]=K2(i)^u[f],cr(i,c[f]);return c}function P1(i,u){const c=new Uint8Array(u.length);for(let f=0;f<u.length;f++)c[f]=K2(i)^u[f],cr(i,u[f]);return c}function q2(i,u){const c=[305419896,591751049,878082192];Object.assign(i,{keys:c,crcKey0:new ac(c[0]),crcKey2:new ac(c[2])});for(let f=0;f<u.length;f++)cr(i,u.charCodeAt(f))}function cr(i,u){let[c,f,r]=i.keys;i.crcKey0.append([u]),c=~i.crcKey0.get(),f=$1(Math.imul($1(f+k2(c)),134775813)+1),i.crcKey2.append([f>>>24]),r=~i.crcKey2.get(),i.keys=[c,f,r]}function K2(i){const u=i.keys[2]|2;return k2(Math.imul(u,u^1)>>>8)}function k2(i){return i&255}function $1(i){return i&4294967295}const sr="Invalid uncompressed size",t2="deflate-raw";class z5 extends TransformStream{constructor(u,{chunkSize:c,CompressionStream:f,CompressionStreamNative:r}){super({});const{compressed:o,encrypted:h,useCompressionStream:v,zipCrypto:y,signed:A,level:x}=u,T=this;let D,X,q=super.readable;(!h||y)&&A&&(D=new U2,q=xn(q,D)),o&&(q=F2(q,v,{level:x,chunkSize:c},r,f)),h&&(y?q=xn(q,new Q5(u)):(X=new w5(u),q=xn(q,X))),J2(T,q,()=>{let p;h&&!y&&(p=X.signature),(!h||y)&&A&&(p=new DataView(D.value.buffer).getUint32(0)),T.signature=p})}}class Y5 extends TransformStream{constructor(u,{chunkSize:c,DecompressionStream:f,DecompressionStreamNative:r}){super({});const{zipCrypto:o,encrypted:h,signed:v,signature:y,compressed:A,useCompressionStream:x}=u;let T,D,X=super.readable;h&&(o?X=xn(X,new U5(u)):(D=new R5(u),X=xn(X,D))),A&&(X=F2(X,x,{chunkSize:c},r,f)),(!h||o)&&v&&(T=new U2,X=xn(X,T)),J2(this,X,()=>{if((!h||o)&&v){const q=new DataView(T.value.buffer);if(y!=q.getUint32(0,!1))throw new Error(ar)}})}}function J2(i,u,c){u=xn(u,new TransformStream({flush:c})),Object.defineProperty(i,"readable",{get(){return u}})}function F2(i,u,c,f,r){try{const o=u&&f?f:r;i=xn(i,new o(t2,c))}catch(o){if(u)i=xn(i,new r(t2,c));else throw o}return i}function xn(i,u){return i.pipeThrough(u)}const L5="message",G5="start",X5="pull",e2="data",V5="ack",n2="close",Z5="deflate",W2="inflate";class I5 extends TransformStream{constructor(u,c){super({});const f=this,{codecType:r}=u;let o;r.startsWith(Z5)?o=z5:r.startsWith(W2)&&(o=Y5),f.outputSize=0;let h=0;const v=new o(u,c),y=super.readable,A=new TransformStream({transform(T,D){T&&T.length&&(h+=T.length,D.enqueue(T))},flush(){Object.assign(f,{inputSize:h})}}),x=new TransformStream({transform(T,D){if(T&&T.length&&(D.enqueue(T),f.outputSize+=T.length,u.outputSize&&f.outputSize>u.outputSize))throw new Error(sr)},flush(){const{signature:T}=v;Object.assign(f,{signature:T,inputSize:h})}});Object.defineProperty(f,"readable",{get(){return y.pipeThrough(A).pipeThrough(v).pipeThrough(x)}})}}class q5 extends TransformStream{constructor(u){let c;super({transform:f,flush(r){c&&c.length&&r.enqueue(c)}});function f(r,o){if(c){const h=new Uint8Array(c.length+r.length);h.set(c),h.set(r,c.length),r=h,c=null}r.length>u?(o.enqueue(r.slice(0,u)),f(r.slice(u),o)):c=r}}}let _2=typeof Worker!=al;class Hf{constructor(u,{readable:c,writable:f},{options:r,config:o,streamOptions:h,useWebWorkers:v,transferStreams:y,scripts:A},x){const{signal:T}=h;return Object.assign(u,{busy:!0,readable:c.pipeThrough(new q5(o.chunkSize)).pipeThrough(new K5(h),{signal:T}),writable:f,options:Object.assign({},r),scripts:A,transferStreams:y,terminate(){return new Promise(D=>{const{worker:X,busy:q}=u;X?(q?u.resolveTerminated=D:(X.terminate(),D()),u.interface=null):D()})},onTaskFinished(){const{resolveTerminated:D}=u;D&&(u.resolveTerminated=null,u.terminated=!0,u.worker.terminate(),D()),u.busy=!1,x(u)}}),(v&&_2?k5:P2)(u,o)}}class K5 extends TransformStream{constructor({onstart:u,onprogress:c,size:f,onend:r}){let o=0;super({async start(){u&&await Bf(u,f)},async transform(h,v){o+=h.length,c&&await Bf(c,o,f),v.enqueue(h)},async flush(){r&&await Bf(r,o)}})}}async function Bf(i,...u){try{await i(...u)}catch{}}function P2(i,u){return{run:()=>J5(i,u)}}function k5(i,u){const{baseURL:c,chunkSize:f}=u;if(!i.interface){let r;try{r=_5(i.scripts[0],c,i)}catch{return _2=!1,P2(i,u)}Object.assign(i,{worker:r,interface:{run:()=>F5(i,{chunkSize:f})}})}return i.interface}async function J5({options:i,readable:u,writable:c,onTaskFinished:f},r){let o;try{o=new I5(i,r),await u.pipeThrough(o).pipeTo(c,{preventClose:!0,preventAbort:!0});const{signature:h,inputSize:v,outputSize:y}=o;return{signature:h,inputSize:v,outputSize:y}}catch(h){throw o&&(h.outputSize=o.outputSize),h}finally{f()}}async function F5(i,u){let c,f;const r=new Promise((D,X)=>{c=D,f=X});Object.assign(i,{reader:null,writer:null,resolveResult:c,rejectResult:f,result:r});const{readable:o,options:h,scripts:v}=i,{writable:y,closed:A}=W5(i.writable),x=ec({type:G5,scripts:v.slice(1),options:h,config:u,readable:o,writable:y},i);x||Object.assign(i,{reader:o.getReader(),writer:y.getWriter()});const T=await r;return x||await y.getWriter().close(),await A,T}function W5(i){let u;const c=new Promise(r=>u=r);return{writable:new WritableStream({async write(r){const o=i.getWriter();await o.ready,await o.write(r),o.releaseLock()},close(){u()},abort(r){return i.getWriter().abort(r)}}),closed:c}}let l2=!0,a2=!0;function _5(i,u,c){const f={type:"module"};let r,o;typeof i==Ri&&(i=i());try{r=new URL(i,u)}catch{r=i}if(l2)try{o=new Worker(r)}catch{l2=!1,o=new Worker(r,f)}else o=new Worker(r,f);return o.addEventListener(L5,h=>P5(h,c)),o}function ec(i,{worker:u,writer:c,onTaskFinished:f,transferStreams:r}){try{const{value:o,readable:h,writable:v}=i,y=[];if(o&&(o.byteLength<o.buffer.byteLength?i.value=o.buffer.slice(0,o.byteLength):i.value=o.buffer,y.push(i.value)),r&&a2?(h&&y.push(h),v&&y.push(v)):i.readable=i.writable=null,y.length)try{return u.postMessage(i,y),!0}catch{a2=!1,i.readable=i.writable=null,u.postMessage(i)}else u.postMessage(i)}catch(o){throw c&&c.releaseLock(),f(),o}}async function P5({data:i},u){const{type:c,value:f,messageId:r,result:o,error:h}=i,{reader:v,writer:y,resolveResult:A,rejectResult:x,onTaskFinished:T}=u;try{if(h){const{message:X,stack:q,code:p,name:E,outputSize:b}=h,R=new Error(X);Object.assign(R,{stack:q,code:p,name:E,outputSize:b}),D(R)}else{if(c==X5){const{value:X,done:q}=await v.read();ec({type:e2,value:X,done:q,messageId:r},u)}c==e2&&(await y.ready,await y.write(new Uint8Array(f)),ec({type:V5,messageId:r},u)),c==n2&&D(null,o)}}catch(X){ec({type:n2,messageId:r},u),D(X)}function D(X,q){X?x(X):A(q),y&&y.releaseLock(),T()}}let Ol=[];const Uf=[];let i2=0;async function $5(i,u){const{options:c,config:f}=u,{transferStreams:r,useWebWorkers:o,useCompressionStream:h,codecType:v,compressed:y,signed:A,encrypted:x}=c,{workerScripts:T,maxWorkers:D}=f;u.transferStreams=r||r===$t;const X=!y&&!A&&!x&&!u.transferStreams;return u.useWebWorkers=!X&&(o||o===$t&&f.useWebWorkers),u.scripts=u.useWebWorkers&&T?T[v]:[],c.useCompressionStream=h||h===$t&&f.useCompressionStream,(await q()).run();async function q(){const E=Ol.find(b=>!b.busy);if(E)return u2(E),new Hf(E,i,u,p);if(Ol.length<D){const b={indexWorker:i2};return i2++,Ol.push(b),new Hf(b,i,u,p)}else return new Promise(b=>Uf.push({resolve:b,stream:i,workerOptions:u}))}function p(E){if(Uf.length){const[{resolve:b,stream:R,workerOptions:N}]=Uf.splice(0,1);b(new Hf(E,R,N,p))}else E.worker?(u2(E),t8(E,u)):Ol=Ol.filter(b=>b!=E)}}function t8(i,u){const{config:c}=u,{terminateWorkerTimeout:f}=c;Number.isFinite(f)&&f>=0&&(i.terminated?i.terminated=!1:i.terminateTimeout=setTimeout(async()=>{Ol=Ol.filter(r=>r!=i);try{await i.terminate()}catch{}},f))}function u2(i){const{terminateTimeout:u}=i;u&&(clearTimeout(u),i.terminateTimeout=null)}const $2="Writer iterator completed too soon",e8="Content-Type",n8=64*1024,th="writable";class fr{constructor(){this.size=0}init(){this.initialized=!0}}class sc extends fr{get readable(){const u=this,{chunkSize:c=n8}=u,f=new ReadableStream({start(){this.chunkOffset=0},async pull(r){const{offset:o=0,size:h,diskNumberStart:v}=f,{chunkOffset:y}=this,A=h===$t?c:Math.min(c,h-y),x=await _t(u,o+y,A,v);r.enqueue(x),y+c>h||h===$t&&!x.length&&A?r.close():this.chunkOffset+=c}});return f}}class l8 extends sc{constructor(u){super();let c=u.length;for(;u.charAt(c-1)=="=";)c--;const f=u.indexOf(",")+1;Object.assign(this,{dataURI:u,dataStart:f,size:Math.floor((c-f)*.75)})}readUint8Array(u,c){const{dataStart:f,dataURI:r}=this,o=new Uint8Array(c),h=Math.floor(u/3)*4,v=atob(r.substring(h+f,Math.ceil((u+c)/3)*4+f)),y=u-Math.floor(h/4)*3;let A=0;for(let x=y;x<y+c&&x<v.length;x++)o[x-y]=v.charCodeAt(x),A++;return A<o.length?o.subarray(0,A):o}}class eh extends sc{constructor(u){super(),Object.assign(this,{blob:u,size:u.size})}async readUint8Array(u,c){const f=this,r=u+c;let h=await(u||r<f.size?f.blob.slice(u,r):f.blob).arrayBuffer();return h.byteLength>c&&(h=h.slice(u,r)),new Uint8Array(h)}}class nh extends fr{constructor(u){super();const c=this,f=new TransformStream,r=[];u&&r.push([e8,u]),Object.defineProperty(c,th,{get(){return f.writable}}),c.blob=new Response(f.readable,{headers:r}).blob()}getData(){return this.blob}}class a8 extends nh{constructor(u){super(u),Object.assign(this,{encoding:u,utf8:!u||u.toLowerCase()=="utf-8"})}async getData(){const{encoding:u,utf8:c}=this,f=await super.getData();if(f.text&&c)return f.text();{const r=new FileReader;return new Promise((o,h)=>{Object.assign(r,{onload:({target:v})=>o(v.result),onerror:()=>h(r.error)}),r.readAsText(f,u)})}}}class lh extends sc{constructor(u){super(),this.readers=u}async init(){const u=this,{readers:c}=u;u.lastDiskNumber=0,u.lastDiskOffset=0,await Promise.all(c.map(async(f,r)=>{await f.init(),r!=c.length-1&&(u.lastDiskOffset+=f.size),u.size+=f.size})),super.init()}async readUint8Array(u,c,f=0){const r=this,{readers:o}=this;let h,v=f;v==-1&&(v=o.length-1);let y=u;for(;o[v]&&y>=o[v].size;)y-=o[v].size,v++;const A=o[v];if(A){const x=A.size;if(y+c<=x)h=await _t(A,y,c);else{const T=x-y;h=new Uint8Array(c);const D=await _t(A,y,T);h.set(D,0);const X=await r.readUint8Array(u+T,c-T,f);h.set(X,T),D.length+X.length<c&&(h=h.subarray(0,D.length+X.length))}}else h=new Uint8Array;return r.lastDiskNumber=Math.max(v,r.lastDiskNumber),h}}class kf extends fr{constructor(u,c=4294967295){super();const f=this;Object.assign(f,{diskNumber:0,diskOffset:0,size:0,maxSize:c,availableSize:c});let r,o,h;const v=new WritableStream({async write(x){const{availableSize:T}=f;if(h)x.length>=T?(await y(x.subarray(0,T)),await A(),f.diskOffset+=r.size,f.diskNumber++,h=null,await this.write(x.subarray(T))):await y(x);else{const{value:D,done:X}=await u.next();if(X&&!D)throw new Error($2);r=D,r.size=0,r.maxSize&&(f.maxSize=r.maxSize),f.availableSize=f.maxSize,await Oi(r),o=D.writable,h=o.getWriter(),await this.write(x)}},async close(){await h.ready,await A()}});Object.defineProperty(f,th,{get(){return v}});async function y(x){const T=x.length;T&&(await h.ready,await h.write(x),r.size+=T,f.size+=T,f.availableSize-=T)}async function A(){await h.close()}}}class ah{constructor(u){return Array.isArray(u)&&(u=new lh(u)),u instanceof ReadableStream&&(u={readable:u}),u}}class ih{constructor(u){return u.writable===$t&&typeof u.next==Ri&&(u=new kf(u)),u instanceof WritableStream&&(u={writable:u}),u.size===$t&&(u.size=0),u instanceof kf||Object.assign(u,{diskNumber:0,diskOffset:0,availableSize:1/0,maxSize:1/0}),u}}async function Oi(i,u){if(i.init&&!i.initialized)await i.init(u);else return Promise.resolve()}function _t(i,u,c,f){return i.readUint8Array(u,c,f)}const uh="\0☺☻♥♦♣♠•◘○◙♂♀♪♫☼►◄↕‼¶§▬↨↑↓→←∟↔▲▼ !\"#$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstuvwxyz{|}~⌂ÇüéâäàåçêëèïîìÄÅÉæÆôöòûùÿÖÜ¢£¥₧ƒáíóúñÑªº¿⌐¬½¼¡«»░▒▓│┤╡╢╖╕╣║╗╝╜╛┐└┴┬├─┼╞╟╚╔╩╦╠═╬╧╨╤╥╙╘╒╓╫╪┘┌█▄▌▐▀αßΓπΣσµτΦΘΩδ∞φε∩≡±≥≤⌠⌡÷≈°∙·√ⁿ²■ ".split(""),i8=uh.length==256;function u8(i){if(i8){let u="";for(let c=0;c<i.length;c++)u+=uh[i[c]];return u}else return new TextDecoder().decode(i)}function nc(i,u){return u&&u.trim().toLowerCase()=="cp437"?u8(i):new TextDecoder(u).decode(i)}const ch="filename",sh="rawFilename",fh="comment",rh="rawComment",oh="uncompressedSize",dh="compressedSize",hh="offset",Jf="diskNumberStart",Ff="lastModDate",Wf="rawLastModDate",mh="lastAccessDate",c8="rawLastAccessDate",gh="creationDate",s8="rawCreationDate",f8="internalFileAttribute",r8="internalFileAttributes",o8="externalFileAttribute",d8="externalFileAttributes",h8="msDosCompatible",m8="zip64",g8="encrypted",A8="version",v8="versionMadeBy",y8="zipCrypto",E8="directory",p8="executable",x8="compressionMethod",b8="signature",S8="extraField",T8=[ch,sh,dh,oh,Ff,Wf,fh,rh,mh,gh,hh,Jf,Jf,f8,r8,o8,d8,h8,m8,g8,A8,v8,y8,E8,p8,x8,b8,S8,"bitFlag","filenameUTF8","commentUTF8","rawExtraField","extraFieldZip64","extraFieldUnicodePath","extraFieldUnicodeComment","extraFieldAES","extraFieldNTFS","extraFieldExtendedTimestamp"];class c2{constructor(u){T8.forEach(c=>this[c]=u[c])}}const C8="filenameEncoding",O8="commentEncoding",D8="decodeText",R8="extractPrependedData",w8="extractAppendedData",M8="password",j8="rawPassword",N8="passThrough",H8="signal",B8="checkPasswordOnly",U8="checkOverlappingEntryOnly",Q8="checkOverlappingEntry",z8="checkSignature",Y8="useWebWorkers",L8="useCompressionStream",G8="transferStreams",X8="preventClose",lc="File format is not recognized",Ah="End of central directory not found",vh="End of Zip64 central directory locator not found",yh="Central directory header not found",Eh="Local file header not found",ph="Zip64 extra field not found",xh="File contains encrypted entry",bh="Encryption method not supported",_f="Compression method not supported",Pf="Split zip file",Sh="Overlapping entry found",s2="utf-8",f2="cp437",V8=[[oh,Rl],[dh,Rl],[hh,Rl],[Jf,el]],Z8={[el]:{getValue:Bt,bytes:4},[Rl]:{getValue:ba,bytes:8}};class I8{constructor(u,c={}){Object.assign(this,{reader:new ah(u),options:c,config:m5(),readRanges:[]})}async*getEntriesGenerator(u={}){const c=this;let{reader:f}=c;const{config:r}=c;if(await Oi(f),(f.size===$t||!f.readUint8Array)&&(f=new eh(await new Response(f.readable).blob()),await Oi(f)),f.size<Ea)throw new Error(lc);f.chunkSize=g5(r);const o=await _8(f,kA,f.size,Ea,el*16);if(!o){const I=await _t(f,0,4),k=Yt(I);throw Bt(k)==j2?new Error(Pf):new Error(Ah)}const h=Yt(o);let v=Bt(h,12),y=Bt(h,16);const A=o.offset,x=Pt(h,20),T=A+Ea+x;let D=Pt(h,4);const X=f.lastDiskNumber||0;let q=Pt(h,6),p=Pt(h,8),E=0,b=0;if(y==Rl||v==Rl||p==el||q==el){const I=await _t(f,o.offset-Mf,Mf),k=Yt(I);if(Bt(k,0)==JA){y=ba(k,8);let nt=await _t(f,y,jf,-1),P=Yt(nt);const st=o.offset-Mf-jf;if(Bt(P,0)!=X1&&y!=st){const ut=y;y=st,y>ut&&(E=y-ut),nt=await _t(f,y,jf,-1),P=Yt(nt)}if(Bt(P,0)!=X1)throw new Error(vh);D==el&&(D=Bt(P,16)),q==el&&(q=Bt(P,20)),p==el&&(p=ba(P,32)),v==Rl&&(v=ba(P,40)),y-=v}}if(y>=f.size&&(E=f.size-y-v-Ea,y=f.size-v-Ea),X!=D)throw new Error(Pf);if(y<0)throw new Error(lc);let R=0,N=await _t(f,y,v,q),V=Yt(N);if(v){const I=o.offset-v;if(Bt(V,R)!=G1&&y!=I){const k=y;y=I,y>k&&(E+=y-k),N=await _t(f,y,v,q),V=Yt(N)}}const F=o.offset-y-(f.lastDiskOffset||0);if(v!=F&&F>=0&&(v=F,N=await _t(f,y,v,q),V=Yt(N)),y<0||y>=f.size)throw new Error(lc);const H=ie(c,u,C8),j=ie(c,u,O8);for(let I=0;I<p;I++){const k=new q8(f,r,c.options);if(Bt(V,R)!=G1)throw new Error(yh);Th(k,V,R+6);const nt=!!k.bitFlag.languageEncodingFlag,P=R+46,st=P+k.filenameLength,ut=st+k.extraFieldLength,M=Pt(V,R+4),_=M>>8==0,$=M>>8==3,ht=N.subarray(P,st),tt=Pt(V,R+32),C=ut+tt,L=N.subarray(ut,C),W=nt,et=nt,rt=Bt(V,R+38),ot=_&&(xa(V,R+38)&K1)==K1||$&&(rt>>16&u5)==c5||ht.length&&ht.at(-1)==k1.charCodeAt(0),gt=$&&(rt>>16&s5)!=0,Jt=Bt(V,R+42)+E;Object.assign(k,{versionMadeBy:M,msDosCompatible:_,compressedSize:0,uncompressedSize:0,commentLength:tt,directory:ot,offset:Jt,diskNumberStart:Pt(V,R+34),internalFileAttributes:Pt(V,R+36),externalFileAttributes:rt,rawFilename:ht,filenameUTF8:W,commentUTF8:et,rawExtraField:N.subarray(st,ut),executable:gt}),k.internalFileAttribute=k.internalFileAttributes,k.externalFileAttribute=k.externalFileAttributes;const Qt=ie(c,u,D8)||nc,Sn=W?s2:H||f2,ul=et?s2:j||f2;let Tn=Qt(ht,Sn);Tn===$t&&(Tn=nc(ht,Sn));let jl=Qt(L,ul);jl===$t&&(jl=nc(L,ul)),Object.assign(k,{rawComment:L,filename:Tn,comment:jl,directory:ot||Tn.endsWith(k1)}),b=Math.max(Jt,b),Ch(k,k,V,R+6),k.zipCrypto=k.encrypted&&!k.extraFieldAES;const Ee=new c2(k);Ee.getData=(Cn,Hl)=>k.getData(Cn,Ee,c.readRanges,Hl),Ee.arrayBuffer=async Cn=>{const Hl=new TransformStream,[ji]=await Promise.all([new Response(Hl.readable).arrayBuffer(),k.getData(Hl,Ee,c.readRanges,Cn)]);return ji},R=C;const{onprogress:Nl}=u;if(Nl)try{await Nl(I+1,p,new c2(k))}catch{}yield Ee}const Y=ie(c,u,R8),z=ie(c,u,w8);return Y&&(c.prependedData=b>0?await _t(f,0,b):new Uint8Array),c.comment=x?await _t(f,A+Ea,x):new Uint8Array,z&&(c.appendedData=T<f.size?await _t(f,T,f.size-T):new Uint8Array),!0}async getEntries(u={}){const c=[];for await(const f of this.getEntriesGenerator(u))c.push(f);return c}async close(){}}class q8{constructor(u,c,f){Object.assign(this,{reader:u,config:c,options:f})}async getData(u,c,f,r={}){const o=this,{reader:h,offset:v,diskNumberStart:y,extraFieldAES:A,extraFieldZip64:x,compressionMethod:T,config:D,bitFlag:X,signature:q,rawLastModDate:p,uncompressedSize:E,compressedSize:b}=o,{dataDescriptor:R}=X,N=c.localDirectory={},V=await _t(h,v,Nf,y),F=Yt(V);let H=ie(o,r,M8),j=ie(o,r,j8);const Y=ie(o,r,N8);if(H=H&&H.length&&H,j=j&&j.length&&j,A&&A.originalCompressionMethod!=IA)throw new Error(_f);if(T!=ZA&&T!=VA&&!Y)throw new Error(_f);if(Bt(F,0)!=qA)throw new Error(Eh);Th(N,F,4);const{extraFieldLength:z,filenameLength:I,lastAccessDate:k,creationDate:nt}=N;N.rawExtraField=z?await _t(h,v+Nf+I,z,y):new Uint8Array,Ch(o,N,F,4,!0),Object.assign(c,{lastAccessDate:k,creationDate:nt});const P=o.encrypted&&N.encrypted&&!Y,st=P&&!A;if(Y||(c.zipCrypto=st),P){if(!st&&A.strength===$t)throw new Error(bh);if(!H&&!j)throw new Error(xh)}const ut=v+Nf+I+z,M=b,_=h.readable;Object.assign(_,{diskNumberStart:y,offset:ut,size:M});const $=ie(o,r,H8),ht=ie(o,r,B8);let tt=ie(o,r,Q8);const C=ie(o,r,U8);C&&(tt=!0);const{onstart:L,onprogress:W,onend:et}=r,rt={options:{codecType:W2,password:H,rawPassword:j,zipCrypto:st,encryptionStrength:A&&A.strength,signed:ie(o,r,z8)&&!Y,passwordVerification:st&&(R?p>>>8&255:q>>>24&255),outputSize:E,signature:q,compressed:T!=0&&!Y,encrypted:o.encrypted&&!Y,useWebWorkers:ie(o,r,Y8),useCompressionStream:ie(o,r,L8),transferStreams:ie(o,r,G8),checkPasswordOnly:ht},config:D,streamOptions:{signal:$,size:M,onstart:L,onprogress:W,onend:et}};tt&&await W8({reader:h,fileEntry:c,offset:v,diskNumberStart:y,signature:q,compressedSize:b,uncompressedSize:E,dataOffset:ut,dataDescriptor:R||N.bitFlag.dataDescriptor,extraFieldZip64:x||N.extraFieldZip64,readRanges:f});let ot;try{if(!C){ht&&(u=new WritableStream),u=new ih(u),await Oi(u,Y?b:E),{writable:ot}=u;const{outputSize:gt}=await $5({readable:_,writable:ot},rt);if(u.size+=gt,gt!=(Y?b:E))throw new Error(sr)}}catch(gt){if(gt.outputSize!==$t&&(u.size+=gt.outputSize),!ht||gt.message!=ir)throw gt}finally{!ie(o,r,X8)&&ot&&!ot.locked&&await ot.getWriter().close()}return ht||C?$t:u.getData?u.getData():ot}}function Th(i,u,c){const f=i.rawBitFlag=Pt(u,c+2),r=(f&Z1)==Z1,o=Bt(u,c+6);Object.assign(i,{encrypted:r,version:Pt(u,c),bitFlag:{level:(f&i5)>>1,dataDescriptor:(f&I1)==I1,languageEncodingFlag:(f&q1)==q1},rawLastModDate:o,lastModDate:P8(o),filenameLength:Pt(u,c+22),extraFieldLength:Pt(u,c+24)})}function Ch(i,u,c,f,r){const{rawExtraField:o}=u,h=u.extraField=new Map,v=Yt(new Uint8Array(o));let y=0;try{for(;y<o.length;){const b=Pt(v,y),R=Pt(v,y+2);h.set(b,{type:b,data:o.slice(y+4,y+4+R)}),y+=4+R}}catch{}const A=Pt(c,f+4);Object.assign(u,{signature:Bt(c,f+f5),compressedSize:Bt(c,f+r5),uncompressedSize:Bt(c,f+o5)});const x=h.get(_A);x&&(K8(x,u),u.extraFieldZip64=x);const T=h.get(n5);T&&(r2(T,ch,sh,u,i),u.extraFieldUnicodePath=T);const D=h.get(l5);D&&(r2(D,fh,rh,u,i),u.extraFieldUnicodeComment=D);const X=h.get(PA);X?(k8(X,u,A),u.extraFieldAES=X):u.compressionMethod=A;const q=h.get($A);q&&(J8(q,u),u.extraFieldNTFS=q);const p=h.get(e5);p&&(F8(p,u,r),u.extraFieldExtendedTimestamp=p);const E=h.get(a5);E&&(u.extraFieldUSDZ=E)}function K8(i,u){u.zip64=!0;const c=Yt(i.data),f=V8.filter(([r,o])=>u[r]==o);for(let r=0,o=0;r<f.length;r++){const[h,v]=f[r];if(u[h]==v){const y=Z8[v];u[h]=i[h]=y.getValue(c,o),o+=y.bytes}else if(i[h])throw new Error(ph)}}function r2(i,u,c,f,r){const o=Yt(i.data),h=new ac;h.append(r[c]);const v=Yt(new Uint8Array(4));v.setUint32(0,h.get(),!0);const y=Bt(o,1);Object.assign(i,{version:xa(o,0),[u]:nc(i.data.subarray(5)),valid:!r.bitFlag.languageEncodingFlag&&y==Bt(v,0)}),i.valid&&(f[u]=i[u],f[u+"UTF8"]=!0)}function k8(i,u,c){const f=Yt(i.data),r=xa(f,4);Object.assign(i,{vendorVersion:xa(f,0),vendorId:xa(f,2),strength:r,originalCompressionMethod:c,compressionMethod:Pt(f,5)}),u.compressionMethod=i.compressionMethod}function J8(i,u){const c=Yt(i.data);let f=4,r;try{for(;f<i.data.length&&!r;){const o=Pt(c,f),h=Pt(c,f+2);o==t5&&(r=i.data.slice(f+4,f+4+h)),f+=4+h}}catch{}try{if(r&&r.length==24){const o=Yt(r),h=o.getBigUint64(0,!0),v=o.getBigUint64(8,!0),y=o.getBigUint64(16,!0);Object.assign(i,{rawLastModDate:h,rawLastAccessDate:v,rawCreationDate:y});const A=Qf(h),x=Qf(v),T=Qf(y),D={lastModDate:A,lastAccessDate:x,creationDate:T};Object.assign(i,D),Object.assign(u,D)}}catch{}}function F8(i,u,c){const f=Yt(i.data),r=xa(f,0),o=[],h=[];c?((r&1)==1&&(o.push(Ff),h.push(Wf)),(r&2)==2&&(o.push(mh),h.push(c8)),(r&4)==4&&(o.push(gh),h.push(s8))):i.data.length>=5&&(o.push(Ff),h.push(Wf));let v=1;o.forEach((y,A)=>{if(i.data.length>=v+4){const x=Bt(f,v);u[y]=i[y]=new Date(x*1e3);const T=h[A];i[T]=x}v+=4})}async function W8({reader:i,fileEntry:u,offset:c,diskNumberStart:f,signature:r,compressedSize:o,uncompressedSize:h,dataOffset:v,dataDescriptor:y,extraFieldZip64:A,readRanges:x}){let T=0;if(f)for(let q=0;q<f;q++){const p=i.readers[q];T+=p.size}let D=0;if(y&&(A?D=WA:D=FA),D){const q=await _t(i,v+o,D+V1,f);if(Bt(Yt(q),0)==KA){const E=Bt(Yt(q),4);let b,R;A?(b=ba(Yt(q),8),R=ba(Yt(q),16)):(b=Bt(Yt(q),8),R=Bt(Yt(q),12)),(u.encrypted&&!u.zipCrypto||E==r)&&b==o&&R==h&&(D+=V1)}}const X={start:T+c,end:T+v+o+D,fileEntry:u};for(const q of x)if(q.fileEntry!=u&&X.start>=q.start&&X.start<q.end){const p=new Error(Sh);throw p.overlappingEntry=q.fileEntry,p}x.push(X)}async function _8(i,u,c,f,r){const o=new Uint8Array(4),h=Yt(o);$8(h,0,u);const v=f+r;return await y(f)||await y(Math.min(v,c));async function y(A){const x=c-A,T=await _t(i,x,A);for(let D=T.length-f;D>=0;D--)if(T[D]==o[0]&&T[D+1]==o[1]&&T[D+2]==o[2]&&T[D+3]==o[3])return{offset:x+D,buffer:T.slice(D,D+f).buffer}}}function ie(i,u,c){return u[c]===$t?i.options[c]:u[c]}function P8(i){const u=(i&4294901760)>>16,c=i&65535;try{return new Date(1980+((u&65024)>>9),((u&480)>>5)-1,u&31,(c&63488)>>11,(c&2016)>>5,(c&31)*2,0)}catch{}}function Qf(i){return new Date(Number(i/BigInt(1e4)-BigInt(116444736e5)))}function xa(i,u){return i.getUint8(u)}function Pt(i,u){return i.getUint16(u,!0)}function Bt(i,u){return i.getUint32(u,!0)}function ba(i,u){return Number(i.getBigUint64(u,!0))}function $8(i,u,c){i.setUint32(u,c,!0)}function Yt(i){return new DataView(i.buffer)}H2({Inflate:XA});const t3=Object.freeze(Object.defineProperty({__proto__:null,BlobReader:eh,BlobWriter:nh,Data64URIReader:l8,ERR_BAD_FORMAT:lc,ERR_CENTRAL_DIRECTORY_NOT_FOUND:yh,ERR_ENCRYPTED:xh,ERR_EOCDR_LOCATOR_ZIP64_NOT_FOUND:vh,ERR_EOCDR_NOT_FOUND:Ah,ERR_EXTRAFIELD_ZIP64_NOT_FOUND:ph,ERR_INVALID_PASSWORD:lr,ERR_INVALID_SIGNATURE:ar,ERR_INVALID_UNCOMPRESSED_SIZE:sr,ERR_ITERATOR_COMPLETED_TOO_SOON:$2,ERR_LOCAL_FILE_HEADER_NOT_FOUND:Eh,ERR_OVERLAPPING_ENTRY:Sh,ERR_SPLIT_ZIP_FILE:Pf,ERR_UNSUPPORTED_COMPRESSION:_f,ERR_UNSUPPORTED_ENCRYPTION:bh,GenericReader:ah,GenericWriter:ih,Reader:sc,SplitDataReader:lh,SplitDataWriter:kf,TextWriter:a8,ZipReader:I8,configure:H2,initStream:Oi,readUint8Array:_t},Symbol.toStringTag,{value:"Module"}));var zf={exports:{}},dt={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var o2;function e3(){if(o2)return dt;o2=1;var i=Symbol.for("react.transitional.element"),u=Symbol.for("react.portal"),c=Symbol.for("react.fragment"),f=Symbol.for("react.strict_mode"),r=Symbol.for("react.profiler"),o=Symbol.for("react.consumer"),h=Symbol.for("react.context"),v=Symbol.for("react.forward_ref"),y=Symbol.for("react.suspense"),A=Symbol.for("react.memo"),x=Symbol.for("react.lazy"),T=Symbol.for("react.activity"),D=Symbol.iterator;function X(C){return C===null||typeof C!="object"?null:(C=D&&C[D]||C["@@iterator"],typeof C=="function"?C:null)}var q={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},p=Object.assign,E={};function b(C,L,W){this.props=C,this.context=L,this.refs=E,this.updater=W||q}b.prototype.isReactComponent={},b.prototype.setState=function(C,L){if(typeof C!="object"&&typeof C!="function"&&C!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,C,L,"setState")},b.prototype.forceUpdate=function(C){this.updater.enqueueForceUpdate(this,C,"forceUpdate")};function R(){}R.prototype=b.prototype;function N(C,L,W){this.props=C,this.context=L,this.refs=E,this.updater=W||q}var V=N.prototype=new R;V.constructor=N,p(V,b.prototype),V.isPureReactComponent=!0;var F=Array.isArray;function H(){}var j={H:null,A:null,T:null,S:null},Y=Object.prototype.hasOwnProperty;function z(C,L,W){var et=W.ref;return{$$typeof:i,type:C,key:L,ref:et!==void 0?et:null,props:W}}function I(C,L){return z(C.type,L,C.props)}function k(C){return typeof C=="object"&&C!==null&&C.$$typeof===i}function nt(C){var L={"=":"=0",":":"=2"};return"$"+C.replace(/[=:]/g,function(W){return L[W]})}var P=/\/+/g;function st(C,L){return typeof C=="object"&&C!==null&&C.key!=null?nt(""+C.key):L.toString(36)}function ut(C){switch(C.status){case"fulfilled":return C.value;case"rejected":throw C.reason;default:switch(typeof C.status=="string"?C.then(H,H):(C.status="pending",C.then(function(L){C.status==="pending"&&(C.status="fulfilled",C.value=L)},function(L){C.status==="pending"&&(C.status="rejected",C.reason=L)})),C.status){case"fulfilled":return C.value;case"rejected":throw C.reason}}throw C}function M(C,L,W,et,rt){var ot=typeof C;(ot==="undefined"||ot==="boolean")&&(C=null);var gt=!1;if(C===null)gt=!0;else switch(ot){case"bigint":case"string":case"number":gt=!0;break;case"object":switch(C.$$typeof){case i:case u:gt=!0;break;case x:return gt=C._init,M(gt(C._payload),L,W,et,rt)}}if(gt)return rt=rt(C),gt=et===""?"."+st(C,0):et,F(rt)?(W="",gt!=null&&(W=gt.replace(P,"$&/")+"/"),M(rt,L,W,"",function(Sn){return Sn})):rt!=null&&(k(rt)&&(rt=I(rt,W+(rt.key==null||C&&C.key===rt.key?"":(""+rt.key).replace(P,"$&/")+"/")+gt)),L.push(rt)),1;gt=0;var Jt=et===""?".":et+":";if(F(C))for(var Qt=0;Qt<C.length;Qt++)et=C[Qt],ot=Jt+st(et,Qt),gt+=M(et,L,W,ot,rt);else if(Qt=X(C),typeof Qt=="function")for(C=Qt.call(C),Qt=0;!(et=C.next()).done;)et=et.value,ot=Jt+st(et,Qt++),gt+=M(et,L,W,ot,rt);else if(ot==="object"){if(typeof C.then=="function")return M(ut(C),L,W,et,rt);throw L=String(C),Error("Objects are not valid as a React child (found: "+(L==="[object Object]"?"object with keys {"+Object.keys(C).join(", ")+"}":L)+"). If you meant to render a collection of children, use an array instead.")}return gt}function _(C,L,W){if(C==null)return C;var et=[],rt=0;return M(C,et,"","",function(ot){return L.call(W,ot,rt++)}),et}function $(C){if(C._status===-1){var L=C._result;L=L(),L.then(function(W){(C._status===0||C._status===-1)&&(C._status=1,C._result=W)},function(W){(C._status===0||C._status===-1)&&(C._status=2,C._result=W)}),C._status===-1&&(C._status=0,C._result=L)}if(C._status===1)return C._result.default;throw C._result}var ht=typeof reportError=="function"?reportError:function(C){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var L=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof C=="object"&&C!==null&&typeof C.message=="string"?String(C.message):String(C),error:C});if(!window.dispatchEvent(L))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",C);return}console.error(C)},tt={map:_,forEach:function(C,L,W){_(C,function(){L.apply(this,arguments)},W)},count:function(C){var L=0;return _(C,function(){L++}),L},toArray:function(C){return _(C,function(L){return L})||[]},only:function(C){if(!k(C))throw Error("React.Children.only expected to receive a single React element child.");return C}};return dt.Activity=T,dt.Children=tt,dt.Component=b,dt.Fragment=c,dt.Profiler=r,dt.PureComponent=N,dt.StrictMode=f,dt.Suspense=y,dt.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=j,dt.__COMPILER_RUNTIME={__proto__:null,c:function(C){return j.H.useMemoCache(C)}},dt.cache=function(C){return function(){return C.apply(null,arguments)}},dt.cacheSignal=function(){return null},dt.cloneElement=function(C,L,W){if(C==null)throw Error("The argument must be a React element, but you passed "+C+".");var et=p({},C.props),rt=C.key;if(L!=null)for(ot in L.key!==void 0&&(rt=""+L.key),L)!Y.call(L,ot)||ot==="key"||ot==="__self"||ot==="__source"||ot==="ref"&&L.ref===void 0||(et[ot]=L[ot]);var ot=arguments.length-2;if(ot===1)et.children=W;else if(1<ot){for(var gt=Array(ot),Jt=0;Jt<ot;Jt++)gt[Jt]=arguments[Jt+2];et.children=gt}return z(C.type,rt,et)},dt.createContext=function(C){return C={$$typeof:h,_currentValue:C,_currentValue2:C,_threadCount:0,Provider:null,Consumer:null},C.Provider=C,C.Consumer={$$typeof:o,_context:C},C},dt.createElement=function(C,L,W){var et,rt={},ot=null;if(L!=null)for(et in L.key!==void 0&&(ot=""+L.key),L)Y.call(L,et)&&et!=="key"&&et!=="__self"&&et!=="__source"&&(rt[et]=L[et]);var gt=arguments.length-2;if(gt===1)rt.children=W;else if(1<gt){for(var Jt=Array(gt),Qt=0;Qt<gt;Qt++)Jt[Qt]=arguments[Qt+2];rt.children=Jt}if(C&&C.defaultProps)for(et in gt=C.defaultProps,gt)rt[et]===void 0&&(rt[et]=gt[et]);return z(C,ot,rt)},dt.createRef=function(){return{current:null}},dt.forwardRef=function(C){return{$$typeof:v,render:C}},dt.isValidElement=k,dt.lazy=function(C){return{$$typeof:x,_payload:{_status:-1,_result:C},_init:$}},dt.memo=function(C,L){return{$$typeof:A,type:C,compare:L===void 0?null:L}},dt.startTransition=function(C){var L=j.T,W={};j.T=W;try{var et=C(),rt=j.S;rt!==null&&rt(W,et),typeof et=="object"&&et!==null&&typeof et.then=="function"&&et.then(H,ht)}catch(ot){ht(ot)}finally{L!==null&&W.types!==null&&(L.types=W.types),j.T=L}},dt.unstable_useCacheRefresh=function(){return j.H.useCacheRefresh()},dt.use=function(C){return j.H.use(C)},dt.useActionState=function(C,L,W){return j.H.useActionState(C,L,W)},dt.useCallback=function(C,L){return j.H.useCallback(C,L)},dt.useContext=function(C){return j.H.useContext(C)},dt.useDebugValue=function(){},dt.useDeferredValue=function(C,L){return j.H.useDeferredValue(C,L)},dt.useEffect=function(C,L){return j.H.useEffect(C,L)},dt.useEffectEvent=function(C){return j.H.useEffectEvent(C)},dt.useId=function(){return j.H.useId()},dt.useImperativeHandle=function(C,L,W){return j.H.useImperativeHandle(C,L,W)},dt.useInsertionEffect=function(C,L){return j.H.useInsertionEffect(C,L)},dt.useLayoutEffect=function(C,L){return j.H.useLayoutEffect(C,L)},dt.useMemo=function(C,L){return j.H.useMemo(C,L)},dt.useOptimistic=function(C,L){return j.H.useOptimistic(C,L)},dt.useReducer=function(C,L,W){return j.H.useReducer(C,L,W)},dt.useRef=function(C){return j.H.useRef(C)},dt.useState=function(C){return j.H.useState(C)},dt.useSyncExternalStore=function(C,L,W){return j.H.useSyncExternalStore(C,L,W)},dt.useTransition=function(){return j.H.useTransition()},dt.version="19.2.1",dt}var d2;function rr(){return d2||(d2=1,zf.exports=e3()),zf.exports}var it=rr();const ue=EA(it);var Yf={exports:{}},pi={},Lf={exports:{}},Gf={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var h2;function n3(){return h2||(h2=1,(function(i){function u(M,_){var $=M.length;M.push(_);t:for(;0<$;){var ht=$-1>>>1,tt=M[ht];if(0<r(tt,_))M[ht]=_,M[$]=tt,$=ht;else break t}}function c(M){return M.length===0?null:M[0]}function f(M){if(M.length===0)return null;var _=M[0],$=M.pop();if($!==_){M[0]=$;t:for(var ht=0,tt=M.length,C=tt>>>1;ht<C;){var L=2*(ht+1)-1,W=M[L],et=L+1,rt=M[et];if(0>r(W,$))et<tt&&0>r(rt,W)?(M[ht]=rt,M[et]=$,ht=et):(M[ht]=W,M[L]=$,ht=L);else if(et<tt&&0>r(rt,$))M[ht]=rt,M[et]=$,ht=et;else break t}}return _}function r(M,_){var $=M.sortIndex-_.sortIndex;return $!==0?$:M.id-_.id}if(i.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var o=performance;i.unstable_now=function(){return o.now()}}else{var h=Date,v=h.now();i.unstable_now=function(){return h.now()-v}}var y=[],A=[],x=1,T=null,D=3,X=!1,q=!1,p=!1,E=!1,b=typeof setTimeout=="function"?setTimeout:null,R=typeof clearTimeout=="function"?clearTimeout:null,N=typeof setImmediate<"u"?setImmediate:null;function V(M){for(var _=c(A);_!==null;){if(_.callback===null)f(A);else if(_.startTime<=M)f(A),_.sortIndex=_.expirationTime,u(y,_);else break;_=c(A)}}function F(M){if(p=!1,V(M),!q)if(c(y)!==null)q=!0,H||(H=!0,nt());else{var _=c(A);_!==null&&ut(F,_.startTime-M)}}var H=!1,j=-1,Y=5,z=-1;function I(){return E?!0:!(i.unstable_now()-z<Y)}function k(){if(E=!1,H){var M=i.unstable_now();z=M;var _=!0;try{t:{q=!1,p&&(p=!1,R(j),j=-1),X=!0;var $=D;try{e:{for(V(M),T=c(y);T!==null&&!(T.expirationTime>M&&I());){var ht=T.callback;if(typeof ht=="function"){T.callback=null,D=T.priorityLevel;var tt=ht(T.expirationTime<=M);if(M=i.unstable_now(),typeof tt=="function"){T.callback=tt,V(M),_=!0;break e}T===c(y)&&f(y),V(M)}else f(y);T=c(y)}if(T!==null)_=!0;else{var C=c(A);C!==null&&ut(F,C.startTime-M),_=!1}}break t}finally{T=null,D=$,X=!1}_=void 0}}finally{_?nt():H=!1}}}var nt;if(typeof N=="function")nt=function(){N(k)};else if(typeof MessageChannel<"u"){var P=new MessageChannel,st=P.port2;P.port1.onmessage=k,nt=function(){st.postMessage(null)}}else nt=function(){b(k,0)};function ut(M,_){j=b(function(){M(i.unstable_now())},_)}i.unstable_IdlePriority=5,i.unstable_ImmediatePriority=1,i.unstable_LowPriority=4,i.unstable_NormalPriority=3,i.unstable_Profiling=null,i.unstable_UserBlockingPriority=2,i.unstable_cancelCallback=function(M){M.callback=null},i.unstable_forceFrameRate=function(M){0>M||125<M?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Y=0<M?Math.floor(1e3/M):5},i.unstable_getCurrentPriorityLevel=function(){return D},i.unstable_next=function(M){switch(D){case 1:case 2:case 3:var _=3;break;default:_=D}var $=D;D=_;try{return M()}finally{D=$}},i.unstable_requestPaint=function(){E=!0},i.unstable_runWithPriority=function(M,_){switch(M){case 1:case 2:case 3:case 4:case 5:break;default:M=3}var $=D;D=M;try{return _()}finally{D=$}},i.unstable_scheduleCallback=function(M,_,$){var ht=i.unstable_now();switch(typeof $=="object"&&$!==null?($=$.delay,$=typeof $=="number"&&0<$?ht+$:ht):$=ht,M){case 1:var tt=-1;break;case 2:tt=250;break;case 5:tt=1073741823;break;case 4:tt=1e4;break;default:tt=5e3}return tt=$+tt,M={id:x++,callback:_,priorityLevel:M,startTime:$,expirationTime:tt,sortIndex:-1},$>ht?(M.sortIndex=$,u(A,M),c(y)===null&&M===c(A)&&(p?(R(j),j=-1):p=!0,ut(F,$-ht))):(M.sortIndex=tt,u(y,M),q||X||(q=!0,H||(H=!0,nt()))),M},i.unstable_shouldYield=I,i.unstable_wrapCallback=function(M){var _=D;return function(){var $=D;D=_;try{return M.apply(this,arguments)}finally{D=$}}}})(Gf)),Gf}var m2;function l3(){return m2||(m2=1,Lf.exports=n3()),Lf.exports}var Xf={exports:{}},ce={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var g2;function a3(){if(g2)return ce;g2=1;var i=rr();function u(y){var A="https://react.dev/errors/"+y;if(1<arguments.length){A+="?args[]="+encodeURIComponent(arguments[1]);for(var x=2;x<arguments.length;x++)A+="&args[]="+encodeURIComponent(arguments[x])}return"Minified React error #"+y+"; visit "+A+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function c(){}var f={d:{f:c,r:function(){throw Error(u(522))},D:c,C:c,L:c,m:c,X:c,S:c,M:c},p:0,findDOMNode:null},r=Symbol.for("react.portal");function o(y,A,x){var T=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:r,key:T==null?null:""+T,children:y,containerInfo:A,implementation:x}}var h=i.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function v(y,A){if(y==="font")return"";if(typeof A=="string")return A==="use-credentials"?A:""}return ce.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=f,ce.createPortal=function(y,A){var x=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!A||A.nodeType!==1&&A.nodeType!==9&&A.nodeType!==11)throw Error(u(299));return o(y,A,null,x)},ce.flushSync=function(y){var A=h.T,x=f.p;try{if(h.T=null,f.p=2,y)return y()}finally{h.T=A,f.p=x,f.d.f()}},ce.preconnect=function(y,A){typeof y=="string"&&(A?(A=A.crossOrigin,A=typeof A=="string"?A==="use-credentials"?A:"":void 0):A=null,f.d.C(y,A))},ce.prefetchDNS=function(y){typeof y=="string"&&f.d.D(y)},ce.preinit=function(y,A){if(typeof y=="string"&&A&&typeof A.as=="string"){var x=A.as,T=v(x,A.crossOrigin),D=typeof A.integrity=="string"?A.integrity:void 0,X=typeof A.fetchPriority=="string"?A.fetchPriority:void 0;x==="style"?f.d.S(y,typeof A.precedence=="string"?A.precedence:void 0,{crossOrigin:T,integrity:D,fetchPriority:X}):x==="script"&&f.d.X(y,{crossOrigin:T,integrity:D,fetchPriority:X,nonce:typeof A.nonce=="string"?A.nonce:void 0})}},ce.preinitModule=function(y,A){if(typeof y=="string")if(typeof A=="object"&&A!==null){if(A.as==null||A.as==="script"){var x=v(A.as,A.crossOrigin);f.d.M(y,{crossOrigin:x,integrity:typeof A.integrity=="string"?A.integrity:void 0,nonce:typeof A.nonce=="string"?A.nonce:void 0})}}else A==null&&f.d.M(y)},ce.preload=function(y,A){if(typeof y=="string"&&typeof A=="object"&&A!==null&&typeof A.as=="string"){var x=A.as,T=v(x,A.crossOrigin);f.d.L(y,x,{crossOrigin:T,integrity:typeof A.integrity=="string"?A.integrity:void 0,nonce:typeof A.nonce=="string"?A.nonce:void 0,type:typeof A.type=="string"?A.type:void 0,fetchPriority:typeof A.fetchPriority=="string"?A.fetchPriority:void 0,referrerPolicy:typeof A.referrerPolicy=="string"?A.referrerPolicy:void 0,imageSrcSet:typeof A.imageSrcSet=="string"?A.imageSrcSet:void 0,imageSizes:typeof A.imageSizes=="string"?A.imageSizes:void 0,media:typeof A.media=="string"?A.media:void 0})}},ce.preloadModule=function(y,A){if(typeof y=="string")if(A){var x=v(A.as,A.crossOrigin);f.d.m(y,{as:typeof A.as=="string"&&A.as!=="script"?A.as:void 0,crossOrigin:x,integrity:typeof A.integrity=="string"?A.integrity:void 0})}else f.d.m(y)},ce.requestFormReset=function(y){f.d.r(y)},ce.unstable_batchedUpdates=function(y,A){return y(A)},ce.useFormState=function(y,A,x){return h.H.useFormState(y,A,x)},ce.useFormStatus=function(){return h.H.useHostTransitionStatus()},ce.version="19.2.1",ce}var A2;function i3(){if(A2)return Xf.exports;A2=1;function i(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(i)}catch(u){console.error(u)}}return i(),Xf.exports=a3(),Xf.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var v2;function u3(){if(v2)return pi;v2=1;var i=l3(),u=rr(),c=i3();function f(t){var e="https://react.dev/errors/"+t;if(1<arguments.length){e+="?args[]="+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n])}return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function r(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function o(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,(e.flags&4098)!==0&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function h(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function v(t){if(t.tag===31){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function y(t){if(o(t)!==t)throw Error(f(188))}function A(t){var e=t.alternate;if(!e){if(e=o(t),e===null)throw Error(f(188));return e!==t?null:t}for(var n=t,l=e;;){var a=n.return;if(a===null)break;var s=a.alternate;if(s===null){if(l=a.return,l!==null){n=l;continue}break}if(a.child===s.child){for(s=a.child;s;){if(s===n)return y(a),t;if(s===l)return y(a),e;s=s.sibling}throw Error(f(188))}if(n.return!==l.return)n=a,l=s;else{for(var d=!1,g=a.child;g;){if(g===n){d=!0,n=a,l=s;break}if(g===l){d=!0,l=a,n=s;break}g=g.sibling}if(!d){for(g=s.child;g;){if(g===n){d=!0,n=s,l=a;break}if(g===l){d=!0,l=s,n=a;break}g=g.sibling}if(!d)throw Error(f(189))}}if(n.alternate!==l)throw Error(f(190))}if(n.tag!==3)throw Error(f(188));return n.stateNode.current===n?t:e}function x(t){var e=t.tag;if(e===5||e===26||e===27||e===6)return t;for(t=t.child;t!==null;){if(e=x(t),e!==null)return e;t=t.sibling}return null}var T=Object.assign,D=Symbol.for("react.element"),X=Symbol.for("react.transitional.element"),q=Symbol.for("react.portal"),p=Symbol.for("react.fragment"),E=Symbol.for("react.strict_mode"),b=Symbol.for("react.profiler"),R=Symbol.for("react.consumer"),N=Symbol.for("react.context"),V=Symbol.for("react.forward_ref"),F=Symbol.for("react.suspense"),H=Symbol.for("react.suspense_list"),j=Symbol.for("react.memo"),Y=Symbol.for("react.lazy"),z=Symbol.for("react.activity"),I=Symbol.for("react.memo_cache_sentinel"),k=Symbol.iterator;function nt(t){return t===null||typeof t!="object"?null:(t=k&&t[k]||t["@@iterator"],typeof t=="function"?t:null)}var P=Symbol.for("react.client.reference");function st(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===P?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case p:return"Fragment";case b:return"Profiler";case E:return"StrictMode";case F:return"Suspense";case H:return"SuspenseList";case z:return"Activity"}if(typeof t=="object")switch(t.$$typeof){case q:return"Portal";case N:return t.displayName||"Context";case R:return(t._context.displayName||"Context")+".Consumer";case V:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case j:return e=t.displayName||null,e!==null?e:st(t.type)||"Memo";case Y:e=t._payload,t=t._init;try{return st(t(e))}catch{}}return null}var ut=Array.isArray,M=u.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,_=c.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,$={pending:!1,data:null,method:null,action:null},ht=[],tt=-1;function C(t){return{current:t}}function L(t){0>tt||(t.current=ht[tt],ht[tt]=null,tt--)}function W(t,e){tt++,ht[tt]=t.current,t.current=e}var et=C(null),rt=C(null),ot=C(null),gt=C(null);function Jt(t,e){switch(W(ot,e),W(rt,t),W(et,null),e.nodeType){case 9:case 11:t=(t=e.documentElement)&&(t=t.namespaceURI)?Xd(t):0;break;default:if(t=e.tagName,e=e.namespaceURI)e=Xd(e),t=Vd(e,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}L(et),W(et,t)}function Qt(){L(et),L(rt),L(ot)}function Sn(t){t.memoizedState!==null&&W(gt,t);var e=et.current,n=Vd(e,t.type);e!==n&&(W(rt,t),W(et,n))}function ul(t){rt.current===t&&(L(et),L(rt)),gt.current===t&&(L(gt),hi._currentValue=$)}var Tn,jl;function Ee(t){if(Tn===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Tn=e&&e[1]||"",jl=-1<n.stack.indexOf(`
    at`)?" (<anonymous>)":-1<n.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Tn+t+jl}var Nl=!1;function Cn(t,e){if(!t||Nl)return"";Nl=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var l={DetermineComponentFrameRoot:function(){try{if(e){var J=function(){throw Error()};if(Object.defineProperty(J.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(J,[])}catch(G){var Q=G}Reflect.construct(t,[],J)}else{try{J.call()}catch(G){Q=G}t.call(J.prototype)}}else{try{throw Error()}catch(G){Q=G}(J=t())&&typeof J.catch=="function"&&J.catch(function(){})}}catch(G){if(G&&Q&&typeof G.stack=="string")return[G.stack,Q.stack]}return[null,null]}};l.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var a=Object.getOwnPropertyDescriptor(l.DetermineComponentFrameRoot,"name");a&&a.configurable&&Object.defineProperty(l.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var s=l.DetermineComponentFrameRoot(),d=s[0],g=s[1];if(d&&g){var S=d.split(`
`),U=g.split(`
`);for(a=l=0;l<S.length&&!S[l].includes("DetermineComponentFrameRoot");)l++;for(;a<U.length&&!U[a].includes("DetermineComponentFrameRoot");)a++;if(l===S.length||a===U.length)for(l=S.length-1,a=U.length-1;1<=l&&0<=a&&S[l]!==U[a];)a--;for(;1<=l&&0<=a;l--,a--)if(S[l]!==U[a]){if(l!==1||a!==1)do if(l--,a--,0>a||S[l]!==U[a]){var Z=`
`+S[l].replace(" at new "," at ");return t.displayName&&Z.includes("<anonymous>")&&(Z=Z.replace("<anonymous>",t.displayName)),Z}while(1<=l&&0<=a);break}}}finally{Nl=!1,Error.prepareStackTrace=n}return(n=t?t.displayName||t.name:"")?Ee(n):""}function Hl(t,e){switch(t.tag){case 26:case 27:case 5:return Ee(t.type);case 16:return Ee("Lazy");case 13:return t.child!==e&&e!==null?Ee("Suspense Fallback"):Ee("Suspense");case 19:return Ee("SuspenseList");case 0:case 15:return Cn(t.type,!1);case 11:return Cn(t.type.render,!1);case 1:return Cn(t.type,!0);case 31:return Ee("Activity");default:return""}}function ji(t){try{var e="",n=null;do e+=Hl(t,n),n=t,t=t.return;while(t);return e}catch(l){return`
Error generating stack: `+l.message+`
`+l.stack}}var rc=Object.prototype.hasOwnProperty,oc=i.unstable_scheduleCallback,dc=i.unstable_cancelCallback,_h=i.unstable_shouldYield,Ph=i.unstable_requestPaint,pe=i.unstable_now,$h=i.unstable_getCurrentPriorityLevel,yr=i.unstable_ImmediatePriority,Er=i.unstable_UserBlockingPriority,Ni=i.unstable_NormalPriority,tm=i.unstable_LowPriority,pr=i.unstable_IdlePriority,em=i.log,nm=i.unstable_setDisableYieldValue,Ca=null,xe=null;function On(t){if(typeof em=="function"&&nm(t),xe&&typeof xe.setStrictMode=="function")try{xe.setStrictMode(Ca,t)}catch{}}var be=Math.clz32?Math.clz32:im,lm=Math.log,am=Math.LN2;function im(t){return t>>>=0,t===0?32:31-(lm(t)/am|0)|0}var Hi=256,Bi=262144,Ui=4194304;function cl(t){var e=t&42;if(e!==0)return e;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return t&261888;case 262144:case 524288:case 1048576:case 2097152:return t&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function Qi(t,e,n){var l=t.pendingLanes;if(l===0)return 0;var a=0,s=t.suspendedLanes,d=t.pingedLanes;t=t.warmLanes;var g=l&134217727;return g!==0?(l=g&~s,l!==0?a=cl(l):(d&=g,d!==0?a=cl(d):n||(n=g&~t,n!==0&&(a=cl(n))))):(g=l&~s,g!==0?a=cl(g):d!==0?a=cl(d):n||(n=l&~t,n!==0&&(a=cl(n)))),a===0?0:e!==0&&e!==a&&(e&s)===0&&(s=a&-a,n=e&-e,s>=n||s===32&&(n&4194048)!==0)?e:a}function Oa(t,e){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&e)===0}function um(t,e){switch(t){case 1:case 2:case 4:case 8:case 64:return e+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function xr(){var t=Ui;return Ui<<=1,(Ui&62914560)===0&&(Ui=4194304),t}function hc(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Da(t,e){t.pendingLanes|=e,e!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function cm(t,e,n,l,a,s){var d=t.pendingLanes;t.pendingLanes=n,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=n,t.entangledLanes&=n,t.errorRecoveryDisabledLanes&=n,t.shellSuspendCounter=0;var g=t.entanglements,S=t.expirationTimes,U=t.hiddenUpdates;for(n=d&~n;0<n;){var Z=31-be(n),J=1<<Z;g[Z]=0,S[Z]=-1;var Q=U[Z];if(Q!==null)for(U[Z]=null,Z=0;Z<Q.length;Z++){var G=Q[Z];G!==null&&(G.lane&=-536870913)}n&=~J}l!==0&&br(t,l,0),s!==0&&a===0&&t.tag!==0&&(t.suspendedLanes|=s&~(d&~e))}function br(t,e,n){t.pendingLanes|=e,t.suspendedLanes&=~e;var l=31-be(e);t.entangledLanes|=e,t.entanglements[l]=t.entanglements[l]|1073741824|n&261930}function Sr(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var l=31-be(n),a=1<<l;a&e|t[l]&e&&(t[l]|=e),n&=~a}}function Tr(t,e){var n=e&-e;return n=(n&42)!==0?1:mc(n),(n&(t.suspendedLanes|e))!==0?0:n}function mc(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function gc(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function Cr(){var t=_.p;return t!==0?t:(t=window.event,t===void 0?32:o1(t.type))}function Or(t,e){var n=_.p;try{return _.p=t,e()}finally{_.p=n}}var Dn=Math.random().toString(36).slice(2),te="__reactFiber$"+Dn,oe="__reactProps$"+Dn,Bl="__reactContainer$"+Dn,Ac="__reactEvents$"+Dn,sm="__reactListeners$"+Dn,fm="__reactHandles$"+Dn,Dr="__reactResources$"+Dn,Ra="__reactMarker$"+Dn;function vc(t){delete t[te],delete t[oe],delete t[Ac],delete t[sm],delete t[fm]}function Ul(t){var e=t[te];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Bl]||n[te]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=Fd(t);t!==null;){if(n=t[te])return n;t=Fd(t)}return e}t=n,n=t.parentNode}return null}function Ql(t){if(t=t[te]||t[Bl]){var e=t.tag;if(e===5||e===6||e===13||e===31||e===26||e===27||e===3)return t}return null}function wa(t){var e=t.tag;if(e===5||e===26||e===27||e===6)return t.stateNode;throw Error(f(33))}function zl(t){var e=t[Dr];return e||(e=t[Dr]={hoistableStyles:new Map,hoistableScripts:new Map}),e}function Ft(t){t[Ra]=!0}var Rr=new Set,wr={};function sl(t,e){Yl(t,e),Yl(t+"Capture",e)}function Yl(t,e){for(wr[t]=e,t=0;t<e.length;t++)Rr.add(e[t])}var rm=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Mr={},jr={};function om(t){return rc.call(jr,t)?!0:rc.call(Mr,t)?!1:rm.test(t)?jr[t]=!0:(Mr[t]=!0,!1)}function zi(t,e,n){if(om(e))if(n===null)t.removeAttribute(e);else{switch(typeof n){case"undefined":case"function":case"symbol":t.removeAttribute(e);return;case"boolean":var l=e.toLowerCase().slice(0,5);if(l!=="data-"&&l!=="aria-"){t.removeAttribute(e);return}}t.setAttribute(e,""+n)}}function Yi(t,e,n){if(n===null)t.removeAttribute(e);else{switch(typeof n){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(e);return}t.setAttribute(e,""+n)}}function $e(t,e,n,l){if(l===null)t.removeAttribute(n);else{switch(typeof l){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(n);return}t.setAttributeNS(e,n,""+l)}}function je(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Nr(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function dm(t,e,n){var l=Object.getOwnPropertyDescriptor(t.constructor.prototype,e);if(!t.hasOwnProperty(e)&&typeof l<"u"&&typeof l.get=="function"&&typeof l.set=="function"){var a=l.get,s=l.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return a.call(this)},set:function(d){n=""+d,s.call(this,d)}}),Object.defineProperty(t,e,{enumerable:l.enumerable}),{getValue:function(){return n},setValue:function(d){n=""+d},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function yc(t){if(!t._valueTracker){var e=Nr(t)?"checked":"value";t._valueTracker=dm(t,e,""+t[e])}}function Hr(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),l="";return t&&(l=Nr(t)?t.checked?"true":"false":t.value),t=l,t!==n?(e.setValue(t),!0):!1}function Li(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}var hm=/[\n"\\]/g;function Ne(t){return t.replace(hm,function(e){return"\\"+e.charCodeAt(0).toString(16)+" "})}function Ec(t,e,n,l,a,s,d,g){t.name="",d!=null&&typeof d!="function"&&typeof d!="symbol"&&typeof d!="boolean"?t.type=d:t.removeAttribute("type"),e!=null?d==="number"?(e===0&&t.value===""||t.value!=e)&&(t.value=""+je(e)):t.value!==""+je(e)&&(t.value=""+je(e)):d!=="submit"&&d!=="reset"||t.removeAttribute("value"),e!=null?pc(t,d,je(e)):n!=null?pc(t,d,je(n)):l!=null&&t.removeAttribute("value"),a==null&&s!=null&&(t.defaultChecked=!!s),a!=null&&(t.checked=a&&typeof a!="function"&&typeof a!="symbol"),g!=null&&typeof g!="function"&&typeof g!="symbol"&&typeof g!="boolean"?t.name=""+je(g):t.removeAttribute("name")}function Br(t,e,n,l,a,s,d,g){if(s!=null&&typeof s!="function"&&typeof s!="symbol"&&typeof s!="boolean"&&(t.type=s),e!=null||n!=null){if(!(s!=="submit"&&s!=="reset"||e!=null)){yc(t);return}n=n!=null?""+je(n):"",e=e!=null?""+je(e):n,g||e===t.value||(t.value=e),t.defaultValue=e}l=l??a,l=typeof l!="function"&&typeof l!="symbol"&&!!l,t.checked=g?t.checked:!!l,t.defaultChecked=!!l,d!=null&&typeof d!="function"&&typeof d!="symbol"&&typeof d!="boolean"&&(t.name=d),yc(t)}function pc(t,e,n){e==="number"&&Li(t.ownerDocument)===t||t.defaultValue===""+n||(t.defaultValue=""+n)}function Ll(t,e,n,l){if(t=t.options,e){e={};for(var a=0;a<n.length;a++)e["$"+n[a]]=!0;for(n=0;n<t.length;n++)a=e.hasOwnProperty("$"+t[n].value),t[n].selected!==a&&(t[n].selected=a),a&&l&&(t[n].defaultSelected=!0)}else{for(n=""+je(n),e=null,a=0;a<t.length;a++){if(t[a].value===n){t[a].selected=!0,l&&(t[a].defaultSelected=!0);return}e!==null||t[a].disabled||(e=t[a])}e!==null&&(e.selected=!0)}}function Ur(t,e,n){if(e!=null&&(e=""+je(e),e!==t.value&&(t.value=e),n==null)){t.defaultValue!==e&&(t.defaultValue=e);return}t.defaultValue=n!=null?""+je(n):""}function Qr(t,e,n,l){if(e==null){if(l!=null){if(n!=null)throw Error(f(92));if(ut(l)){if(1<l.length)throw Error(f(93));l=l[0]}n=l}n==null&&(n=""),e=n}n=je(e),t.defaultValue=n,l=t.textContent,l===n&&l!==""&&l!==null&&(t.value=l),yc(t)}function Gl(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var mm=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function zr(t,e,n){var l=e.indexOf("--")===0;n==null||typeof n=="boolean"||n===""?l?t.setProperty(e,""):e==="float"?t.cssFloat="":t[e]="":l?t.setProperty(e,n):typeof n!="number"||n===0||mm.has(e)?e==="float"?t.cssFloat=n:t[e]=(""+n).trim():t[e]=n+"px"}function Yr(t,e,n){if(e!=null&&typeof e!="object")throw Error(f(62));if(t=t.style,n!=null){for(var l in n)!n.hasOwnProperty(l)||e!=null&&e.hasOwnProperty(l)||(l.indexOf("--")===0?t.setProperty(l,""):l==="float"?t.cssFloat="":t[l]="");for(var a in e)l=e[a],e.hasOwnProperty(a)&&n[a]!==l&&zr(t,a,l)}else for(var s in e)e.hasOwnProperty(s)&&zr(t,s,e[s])}function xc(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var gm=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Am=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Gi(t){return Am.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}function tn(){}var bc=null;function Sc(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Xl=null,Vl=null;function Lr(t){var e=Ql(t);if(e&&(t=e.stateNode)){var n=t[oe]||null;t:switch(t=e.stateNode,e.type){case"input":if(Ec(t,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll('input[name="'+Ne(""+e)+'"][type="radio"]'),e=0;e<n.length;e++){var l=n[e];if(l!==t&&l.form===t.form){var a=l[oe]||null;if(!a)throw Error(f(90));Ec(l,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name)}}for(e=0;e<n.length;e++)l=n[e],l.form===t.form&&Hr(l)}break t;case"textarea":Ur(t,n.value,n.defaultValue);break t;case"select":e=n.value,e!=null&&Ll(t,!!n.multiple,e,!1)}}}var Tc=!1;function Gr(t,e,n){if(Tc)return t(e,n);Tc=!0;try{var l=t(e);return l}finally{if(Tc=!1,(Xl!==null||Vl!==null)&&(Du(),Xl&&(e=Xl,t=Vl,Vl=Xl=null,Lr(e),t)))for(e=0;e<t.length;e++)Lr(t[e])}}function Ma(t,e){var n=t.stateNode;if(n===null)return null;var l=n[oe]||null;if(l===null)return null;n=l[e];t:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(t=t.type,l=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!l;break t;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(f(231,e,typeof n));return n}var en=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Cc=!1;if(en)try{var ja={};Object.defineProperty(ja,"passive",{get:function(){Cc=!0}}),window.addEventListener("test",ja,ja),window.removeEventListener("test",ja,ja)}catch{Cc=!1}var Rn=null,Oc=null,Xi=null;function Xr(){if(Xi)return Xi;var t,e=Oc,n=e.length,l,a="value"in Rn?Rn.value:Rn.textContent,s=a.length;for(t=0;t<n&&e[t]===a[t];t++);var d=n-t;for(l=1;l<=d&&e[n-l]===a[s-l];l++);return Xi=a.slice(t,1<l?1-l:void 0)}function Vi(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Zi(){return!0}function Vr(){return!1}function de(t){function e(n,l,a,s,d){this._reactName=n,this._targetInst=a,this.type=l,this.nativeEvent=s,this.target=d,this.currentTarget=null;for(var g in t)t.hasOwnProperty(g)&&(n=t[g],this[g]=n?n(s):s[g]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Zi:Vr,this.isPropagationStopped=Vr,this}return T(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Zi)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Zi)},persist:function(){},isPersistent:Zi}),e}var fl={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ii=de(fl),Na=T({},fl,{view:0,detail:0}),vm=de(Na),Dc,Rc,Ha,qi=T({},Na,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Mc,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Ha&&(Ha&&t.type==="mousemove"?(Dc=t.screenX-Ha.screenX,Rc=t.screenY-Ha.screenY):Rc=Dc=0,Ha=t),Dc)},movementY:function(t){return"movementY"in t?t.movementY:Rc}}),Zr=de(qi),ym=T({},qi,{dataTransfer:0}),Em=de(ym),pm=T({},Na,{relatedTarget:0}),wc=de(pm),xm=T({},fl,{animationName:0,elapsedTime:0,pseudoElement:0}),bm=de(xm),Sm=T({},fl,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),Tm=de(Sm),Cm=T({},fl,{data:0}),Ir=de(Cm),Om={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Dm={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Rm={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function wm(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=Rm[t])?!!e[t]:!1}function Mc(){return wm}var Mm=T({},Na,{key:function(t){if(t.key){var e=Om[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Vi(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?Dm[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Mc,charCode:function(t){return t.type==="keypress"?Vi(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Vi(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),jm=de(Mm),Nm=T({},qi,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),qr=de(Nm),Hm=T({},Na,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Mc}),Bm=de(Hm),Um=T({},fl,{propertyName:0,elapsedTime:0,pseudoElement:0}),Qm=de(Um),zm=T({},qi,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),Ym=de(zm),Lm=T({},fl,{newState:0,oldState:0}),Gm=de(Lm),Xm=[9,13,27,32],jc=en&&"CompositionEvent"in window,Ba=null;en&&"documentMode"in document&&(Ba=document.documentMode);var Vm=en&&"TextEvent"in window&&!Ba,Kr=en&&(!jc||Ba&&8<Ba&&11>=Ba),kr=" ",Jr=!1;function Fr(t,e){switch(t){case"keyup":return Xm.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Wr(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Zl=!1;function Zm(t,e){switch(t){case"compositionend":return Wr(e);case"keypress":return e.which!==32?null:(Jr=!0,kr);case"textInput":return t=e.data,t===kr&&Jr?null:t;default:return null}}function Im(t,e){if(Zl)return t==="compositionend"||!jc&&Fr(t,e)?(t=Xr(),Xi=Oc=Rn=null,Zl=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Kr&&e.locale!=="ko"?null:e.data;default:return null}}var qm={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function _r(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!qm[t.type]:e==="textarea"}function Pr(t,e,n,l){Xl?Vl?Vl.push(l):Vl=[l]:Xl=l,e=Bu(e,"onChange"),0<e.length&&(n=new Ii("onChange","change",null,n,l),t.push({event:n,listeners:e}))}var Ua=null,Qa=null;function Km(t){Ud(t,0)}function Ki(t){var e=wa(t);if(Hr(e))return t}function $r(t,e){if(t==="change")return e}var t0=!1;if(en){var Nc;if(en){var Hc="oninput"in document;if(!Hc){var e0=document.createElement("div");e0.setAttribute("oninput","return;"),Hc=typeof e0.oninput=="function"}Nc=Hc}else Nc=!1;t0=Nc&&(!document.documentMode||9<document.documentMode)}function n0(){Ua&&(Ua.detachEvent("onpropertychange",l0),Qa=Ua=null)}function l0(t){if(t.propertyName==="value"&&Ki(Qa)){var e=[];Pr(e,Qa,t,Sc(t)),Gr(Km,e)}}function km(t,e,n){t==="focusin"?(n0(),Ua=e,Qa=n,Ua.attachEvent("onpropertychange",l0)):t==="focusout"&&n0()}function Jm(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Ki(Qa)}function Fm(t,e){if(t==="click")return Ki(e)}function Wm(t,e){if(t==="input"||t==="change")return Ki(e)}function _m(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Se=typeof Object.is=="function"?Object.is:_m;function za(t,e){if(Se(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),l=Object.keys(e);if(n.length!==l.length)return!1;for(l=0;l<n.length;l++){var a=n[l];if(!rc.call(e,a)||!Se(t[a],e[a]))return!1}return!0}function a0(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function i0(t,e){var n=a0(t);t=0;for(var l;n;){if(n.nodeType===3){if(l=t+n.textContent.length,t<=e&&l>=e)return{node:n,offset:e-t};t=l}t:{for(;n;){if(n.nextSibling){n=n.nextSibling;break t}n=n.parentNode}n=void 0}n=a0(n)}}function u0(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?u0(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function c0(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var e=Li(t.document);e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Li(t.document)}return e}function Bc(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}var Pm=en&&"documentMode"in document&&11>=document.documentMode,Il=null,Uc=null,Ya=null,Qc=!1;function s0(t,e,n){var l=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Qc||Il==null||Il!==Li(l)||(l=Il,"selectionStart"in l&&Bc(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),Ya&&za(Ya,l)||(Ya=l,l=Bu(Uc,"onSelect"),0<l.length&&(e=new Ii("onSelect","select",null,e,n),t.push({event:e,listeners:l}),e.target=Il)))}function rl(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var ql={animationend:rl("Animation","AnimationEnd"),animationiteration:rl("Animation","AnimationIteration"),animationstart:rl("Animation","AnimationStart"),transitionrun:rl("Transition","TransitionRun"),transitionstart:rl("Transition","TransitionStart"),transitioncancel:rl("Transition","TransitionCancel"),transitionend:rl("Transition","TransitionEnd")},zc={},f0={};en&&(f0=document.createElement("div").style,"AnimationEvent"in window||(delete ql.animationend.animation,delete ql.animationiteration.animation,delete ql.animationstart.animation),"TransitionEvent"in window||delete ql.transitionend.transition);function ol(t){if(zc[t])return zc[t];if(!ql[t])return t;var e=ql[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in f0)return zc[t]=e[n];return t}var r0=ol("animationend"),o0=ol("animationiteration"),d0=ol("animationstart"),$m=ol("transitionrun"),tg=ol("transitionstart"),eg=ol("transitioncancel"),h0=ol("transitionend"),m0=new Map,Yc="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Yc.push("scrollEnd");function Ie(t,e){m0.set(t,e),sl(e,[t])}var ki=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var e=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(e))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)},He=[],Kl=0,Lc=0;function Ji(){for(var t=Kl,e=Lc=Kl=0;e<t;){var n=He[e];He[e++]=null;var l=He[e];He[e++]=null;var a=He[e];He[e++]=null;var s=He[e];if(He[e++]=null,l!==null&&a!==null){var d=l.pending;d===null?a.next=a:(a.next=d.next,d.next=a),l.pending=a}s!==0&&g0(n,a,s)}}function Fi(t,e,n,l){He[Kl++]=t,He[Kl++]=e,He[Kl++]=n,He[Kl++]=l,Lc|=l,t.lanes|=l,t=t.alternate,t!==null&&(t.lanes|=l)}function Gc(t,e,n,l){return Fi(t,e,n,l),Wi(t)}function dl(t,e){return Fi(t,null,null,e),Wi(t)}function g0(t,e,n){t.lanes|=n;var l=t.alternate;l!==null&&(l.lanes|=n);for(var a=!1,s=t.return;s!==null;)s.childLanes|=n,l=s.alternate,l!==null&&(l.childLanes|=n),s.tag===22&&(t=s.stateNode,t===null||t._visibility&1||(a=!0)),t=s,s=s.return;return t.tag===3?(s=t.stateNode,a&&e!==null&&(a=31-be(n),t=s.hiddenUpdates,l=t[a],l===null?t[a]=[e]:l.push(e),e.lane=n|536870912),s):null}function Wi(t){if(50<ui)throw ui=0,Fs=null,Error(f(185));for(var e=t.return;e!==null;)t=e,e=t.return;return t.tag===3?t.stateNode:null}var kl={};function ng(t,e,n,l){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Te(t,e,n,l){return new ng(t,e,n,l)}function Xc(t){return t=t.prototype,!(!t||!t.isReactComponent)}function nn(t,e){var n=t.alternate;return n===null?(n=Te(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&65011712,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n.refCleanup=t.refCleanup,n}function A0(t,e){t.flags&=65011714;var n=t.alternate;return n===null?(t.childLanes=0,t.lanes=e,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=n.childLanes,t.lanes=n.lanes,t.child=n.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=n.memoizedProps,t.memoizedState=n.memoizedState,t.updateQueue=n.updateQueue,t.type=n.type,e=n.dependencies,t.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),t}function _i(t,e,n,l,a,s){var d=0;if(l=t,typeof t=="function")Xc(t)&&(d=1);else if(typeof t=="string")d=cA(t,n,et.current)?26:t==="html"||t==="head"||t==="body"?27:5;else t:switch(t){case z:return t=Te(31,n,e,a),t.elementType=z,t.lanes=s,t;case p:return hl(n.children,a,s,e);case E:d=8,a|=24;break;case b:return t=Te(12,n,e,a|2),t.elementType=b,t.lanes=s,t;case F:return t=Te(13,n,e,a),t.elementType=F,t.lanes=s,t;case H:return t=Te(19,n,e,a),t.elementType=H,t.lanes=s,t;default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case N:d=10;break t;case R:d=9;break t;case V:d=11;break t;case j:d=14;break t;case Y:d=16,l=null;break t}d=29,n=Error(f(130,t===null?"null":typeof t,"")),l=null}return e=Te(d,n,e,a),e.elementType=t,e.type=l,e.lanes=s,e}function hl(t,e,n,l){return t=Te(7,t,l,e),t.lanes=n,t}function Vc(t,e,n){return t=Te(6,t,null,e),t.lanes=n,t}function v0(t){var e=Te(18,null,null,0);return e.stateNode=t,e}function Zc(t,e,n){return e=Te(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}var y0=new WeakMap;function Be(t,e){if(typeof t=="object"&&t!==null){var n=y0.get(t);return n!==void 0?n:(e={value:t,source:e,stack:ji(e)},y0.set(t,e),e)}return{value:t,source:e,stack:ji(e)}}var Jl=[],Fl=0,Pi=null,La=0,Ue=[],Qe=0,wn=null,Je=1,Fe="";function ln(t,e){Jl[Fl++]=La,Jl[Fl++]=Pi,Pi=t,La=e}function E0(t,e,n){Ue[Qe++]=Je,Ue[Qe++]=Fe,Ue[Qe++]=wn,wn=t;var l=Je;t=Fe;var a=32-be(l)-1;l&=~(1<<a),n+=1;var s=32-be(e)+a;if(30<s){var d=a-a%5;s=(l&(1<<d)-1).toString(32),l>>=d,a-=d,Je=1<<32-be(e)+a|n<<a|l,Fe=s+t}else Je=1<<s|n<<a|l,Fe=t}function Ic(t){t.return!==null&&(ln(t,1),E0(t,1,0))}function qc(t){for(;t===Pi;)Pi=Jl[--Fl],Jl[Fl]=null,La=Jl[--Fl],Jl[Fl]=null;for(;t===wn;)wn=Ue[--Qe],Ue[Qe]=null,Fe=Ue[--Qe],Ue[Qe]=null,Je=Ue[--Qe],Ue[Qe]=null}function p0(t,e){Ue[Qe++]=Je,Ue[Qe++]=Fe,Ue[Qe++]=wn,Je=e.id,Fe=e.overflow,wn=t}var ee=null,Nt=null,xt=!1,Mn=null,ze=!1,Kc=Error(f(519));function jn(t){var e=Error(f(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw Ga(Be(e,t)),Kc}function x0(t){var e=t.stateNode,n=t.type,l=t.memoizedProps;switch(e[te]=t,e[oe]=l,n){case"dialog":yt("cancel",e),yt("close",e);break;case"iframe":case"object":case"embed":yt("load",e);break;case"video":case"audio":for(n=0;n<si.length;n++)yt(si[n],e);break;case"source":yt("error",e);break;case"img":case"image":case"link":yt("error",e),yt("load",e);break;case"details":yt("toggle",e);break;case"input":yt("invalid",e),Br(e,l.value,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name,!0);break;case"select":yt("invalid",e);break;case"textarea":yt("invalid",e),Qr(e,l.value,l.defaultValue,l.children)}n=l.children,typeof n!="string"&&typeof n!="number"&&typeof n!="bigint"||e.textContent===""+n||l.suppressHydrationWarning===!0||Ld(e.textContent,n)?(l.popover!=null&&(yt("beforetoggle",e),yt("toggle",e)),l.onScroll!=null&&yt("scroll",e),l.onScrollEnd!=null&&yt("scrollend",e),l.onClick!=null&&(e.onclick=tn),e=!0):e=!1,e||jn(t,!0)}function b0(t){for(ee=t.return;ee;)switch(ee.tag){case 5:case 31:case 13:ze=!1;return;case 27:case 3:ze=!0;return;default:ee=ee.return}}function Wl(t){if(t!==ee)return!1;if(!xt)return b0(t),xt=!0,!1;var e=t.tag,n;if((n=e!==3&&e!==27)&&((n=e===5)&&(n=t.type,n=!(n!=="form"&&n!=="button")||of(t.type,t.memoizedProps)),n=!n),n&&Nt&&jn(t),b0(t),e===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(f(317));Nt=Jd(t)}else if(e===31){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(f(317));Nt=Jd(t)}else e===27?(e=Nt,qn(t.type)?(t=Af,Af=null,Nt=t):Nt=e):Nt=ee?Le(t.stateNode.nextSibling):null;return!0}function ml(){Nt=ee=null,xt=!1}function kc(){var t=Mn;return t!==null&&(Ae===null?Ae=t:Ae.push.apply(Ae,t),Mn=null),t}function Ga(t){Mn===null?Mn=[t]:Mn.push(t)}var Jc=C(null),gl=null,an=null;function Nn(t,e,n){W(Jc,e._currentValue),e._currentValue=n}function un(t){t._currentValue=Jc.current,L(Jc)}function Fc(t,e,n){for(;t!==null;){var l=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,l!==null&&(l.childLanes|=e)):l!==null&&(l.childLanes&e)!==e&&(l.childLanes|=e),t===n)break;t=t.return}}function Wc(t,e,n,l){var a=t.child;for(a!==null&&(a.return=t);a!==null;){var s=a.dependencies;if(s!==null){var d=a.child;s=s.firstContext;t:for(;s!==null;){var g=s;s=a;for(var S=0;S<e.length;S++)if(g.context===e[S]){s.lanes|=n,g=s.alternate,g!==null&&(g.lanes|=n),Fc(s.return,n,t),l||(d=null);break t}s=g.next}}else if(a.tag===18){if(d=a.return,d===null)throw Error(f(341));d.lanes|=n,s=d.alternate,s!==null&&(s.lanes|=n),Fc(d,n,t),d=null}else d=a.child;if(d!==null)d.return=a;else for(d=a;d!==null;){if(d===t){d=null;break}if(a=d.sibling,a!==null){a.return=d.return,d=a;break}d=d.return}a=d}}function _l(t,e,n,l){t=null;for(var a=e,s=!1;a!==null;){if(!s){if((a.flags&524288)!==0)s=!0;else if((a.flags&262144)!==0)break}if(a.tag===10){var d=a.alternate;if(d===null)throw Error(f(387));if(d=d.memoizedProps,d!==null){var g=a.type;Se(a.pendingProps.value,d.value)||(t!==null?t.push(g):t=[g])}}else if(a===gt.current){if(d=a.alternate,d===null)throw Error(f(387));d.memoizedState.memoizedState!==a.memoizedState.memoizedState&&(t!==null?t.push(hi):t=[hi])}a=a.return}t!==null&&Wc(e,t,n,l),e.flags|=262144}function $i(t){for(t=t.firstContext;t!==null;){if(!Se(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function Al(t){gl=t,an=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function ne(t){return S0(gl,t)}function tu(t,e){return gl===null&&Al(t),S0(t,e)}function S0(t,e){var n=e._currentValue;if(e={context:e,memoizedValue:n,next:null},an===null){if(t===null)throw Error(f(308));an=e,t.dependencies={lanes:0,firstContext:e},t.flags|=524288}else an=an.next=e;return n}var lg=typeof AbortController<"u"?AbortController:function(){var t=[],e=this.signal={aborted:!1,addEventListener:function(n,l){t.push(l)}};this.abort=function(){e.aborted=!0,t.forEach(function(n){return n()})}},ag=i.unstable_scheduleCallback,ig=i.unstable_NormalPriority,Zt={$$typeof:N,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function _c(){return{controller:new lg,data:new Map,refCount:0}}function Xa(t){t.refCount--,t.refCount===0&&ag(ig,function(){t.controller.abort()})}var Va=null,Pc=0,Pl=0,$l=null;function ug(t,e){if(Va===null){var n=Va=[];Pc=0,Pl=ef(),$l={status:"pending",value:void 0,then:function(l){n.push(l)}}}return Pc++,e.then(T0,T0),e}function T0(){if(--Pc===0&&Va!==null){$l!==null&&($l.status="fulfilled");var t=Va;Va=null,Pl=0,$l=null;for(var e=0;e<t.length;e++)(0,t[e])()}}function cg(t,e){var n=[],l={status:"pending",value:null,reason:null,then:function(a){n.push(a)}};return t.then(function(){l.status="fulfilled",l.value=e;for(var a=0;a<n.length;a++)(0,n[a])(e)},function(a){for(l.status="rejected",l.reason=a,a=0;a<n.length;a++)(0,n[a])(void 0)}),l}var C0=M.S;M.S=function(t,e){fd=pe(),typeof e=="object"&&e!==null&&typeof e.then=="function"&&ug(t,e),C0!==null&&C0(t,e)};var vl=C(null);function $c(){var t=vl.current;return t!==null?t:jt.pooledCache}function eu(t,e){e===null?W(vl,vl.current):W(vl,e.pool)}function O0(){var t=$c();return t===null?null:{parent:Zt._currentValue,pool:t}}var ta=Error(f(460)),ts=Error(f(474)),nu=Error(f(542)),lu={then:function(){}};function D0(t){return t=t.status,t==="fulfilled"||t==="rejected"}function R0(t,e,n){switch(n=t[n],n===void 0?t.push(e):n!==e&&(e.then(tn,tn),e=n),e.status){case"fulfilled":return e.value;case"rejected":throw t=e.reason,M0(t),t;default:if(typeof e.status=="string")e.then(tn,tn);else{if(t=jt,t!==null&&100<t.shellSuspendCounter)throw Error(f(482));t=e,t.status="pending",t.then(function(l){if(e.status==="pending"){var a=e;a.status="fulfilled",a.value=l}},function(l){if(e.status==="pending"){var a=e;a.status="rejected",a.reason=l}})}switch(e.status){case"fulfilled":return e.value;case"rejected":throw t=e.reason,M0(t),t}throw El=e,ta}}function yl(t){try{var e=t._init;return e(t._payload)}catch(n){throw n!==null&&typeof n=="object"&&typeof n.then=="function"?(El=n,ta):n}}var El=null;function w0(){if(El===null)throw Error(f(459));var t=El;return El=null,t}function M0(t){if(t===ta||t===nu)throw Error(f(483))}var ea=null,Za=0;function au(t){var e=Za;return Za+=1,ea===null&&(ea=[]),R0(ea,t,e)}function Ia(t,e){e=e.props.ref,t.ref=e!==void 0?e:null}function iu(t,e){throw e.$$typeof===D?Error(f(525)):(t=Object.prototype.toString.call(e),Error(f(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)))}function j0(t){function e(w,O){if(t){var B=w.deletions;B===null?(w.deletions=[O],w.flags|=16):B.push(O)}}function n(w,O){if(!t)return null;for(;O!==null;)e(w,O),O=O.sibling;return null}function l(w){for(var O=new Map;w!==null;)w.key!==null?O.set(w.key,w):O.set(w.index,w),w=w.sibling;return O}function a(w,O){return w=nn(w,O),w.index=0,w.sibling=null,w}function s(w,O,B){return w.index=B,t?(B=w.alternate,B!==null?(B=B.index,B<O?(w.flags|=67108866,O):B):(w.flags|=67108866,O)):(w.flags|=1048576,O)}function d(w){return t&&w.alternate===null&&(w.flags|=67108866),w}function g(w,O,B,K){return O===null||O.tag!==6?(O=Vc(B,w.mode,K),O.return=w,O):(O=a(O,B),O.return=w,O)}function S(w,O,B,K){var ct=B.type;return ct===p?Z(w,O,B.props.children,K,B.key):O!==null&&(O.elementType===ct||typeof ct=="object"&&ct!==null&&ct.$$typeof===Y&&yl(ct)===O.type)?(O=a(O,B.props),Ia(O,B),O.return=w,O):(O=_i(B.type,B.key,B.props,null,w.mode,K),Ia(O,B),O.return=w,O)}function U(w,O,B,K){return O===null||O.tag!==4||O.stateNode.containerInfo!==B.containerInfo||O.stateNode.implementation!==B.implementation?(O=Zc(B,w.mode,K),O.return=w,O):(O=a(O,B.children||[]),O.return=w,O)}function Z(w,O,B,K,ct){return O===null||O.tag!==7?(O=hl(B,w.mode,K,ct),O.return=w,O):(O=a(O,B),O.return=w,O)}function J(w,O,B){if(typeof O=="string"&&O!==""||typeof O=="number"||typeof O=="bigint")return O=Vc(""+O,w.mode,B),O.return=w,O;if(typeof O=="object"&&O!==null){switch(O.$$typeof){case X:return B=_i(O.type,O.key,O.props,null,w.mode,B),Ia(B,O),B.return=w,B;case q:return O=Zc(O,w.mode,B),O.return=w,O;case Y:return O=yl(O),J(w,O,B)}if(ut(O)||nt(O))return O=hl(O,w.mode,B,null),O.return=w,O;if(typeof O.then=="function")return J(w,au(O),B);if(O.$$typeof===N)return J(w,tu(w,O),B);iu(w,O)}return null}function Q(w,O,B,K){var ct=O!==null?O.key:null;if(typeof B=="string"&&B!==""||typeof B=="number"||typeof B=="bigint")return ct!==null?null:g(w,O,""+B,K);if(typeof B=="object"&&B!==null){switch(B.$$typeof){case X:return B.key===ct?S(w,O,B,K):null;case q:return B.key===ct?U(w,O,B,K):null;case Y:return B=yl(B),Q(w,O,B,K)}if(ut(B)||nt(B))return ct!==null?null:Z(w,O,B,K,null);if(typeof B.then=="function")return Q(w,O,au(B),K);if(B.$$typeof===N)return Q(w,O,tu(w,B),K);iu(w,B)}return null}function G(w,O,B,K,ct){if(typeof K=="string"&&K!==""||typeof K=="number"||typeof K=="bigint")return w=w.get(B)||null,g(O,w,""+K,ct);if(typeof K=="object"&&K!==null){switch(K.$$typeof){case X:return w=w.get(K.key===null?B:K.key)||null,S(O,w,K,ct);case q:return w=w.get(K.key===null?B:K.key)||null,U(O,w,K,ct);case Y:return K=yl(K),G(w,O,B,K,ct)}if(ut(K)||nt(K))return w=w.get(B)||null,Z(O,w,K,ct,null);if(typeof K.then=="function")return G(w,O,B,au(K),ct);if(K.$$typeof===N)return G(w,O,B,tu(O,K),ct);iu(O,K)}return null}function lt(w,O,B,K){for(var ct=null,St=null,at=O,At=O=0,pt=null;at!==null&&At<B.length;At++){at.index>At?(pt=at,at=null):pt=at.sibling;var Tt=Q(w,at,B[At],K);if(Tt===null){at===null&&(at=pt);break}t&&at&&Tt.alternate===null&&e(w,at),O=s(Tt,O,At),St===null?ct=Tt:St.sibling=Tt,St=Tt,at=pt}if(At===B.length)return n(w,at),xt&&ln(w,At),ct;if(at===null){for(;At<B.length;At++)at=J(w,B[At],K),at!==null&&(O=s(at,O,At),St===null?ct=at:St.sibling=at,St=at);return xt&&ln(w,At),ct}for(at=l(at);At<B.length;At++)pt=G(at,w,At,B[At],K),pt!==null&&(t&&pt.alternate!==null&&at.delete(pt.key===null?At:pt.key),O=s(pt,O,At),St===null?ct=pt:St.sibling=pt,St=pt);return t&&at.forEach(function(Wn){return e(w,Wn)}),xt&&ln(w,At),ct}function ft(w,O,B,K){if(B==null)throw Error(f(151));for(var ct=null,St=null,at=O,At=O=0,pt=null,Tt=B.next();at!==null&&!Tt.done;At++,Tt=B.next()){at.index>At?(pt=at,at=null):pt=at.sibling;var Wn=Q(w,at,Tt.value,K);if(Wn===null){at===null&&(at=pt);break}t&&at&&Wn.alternate===null&&e(w,at),O=s(Wn,O,At),St===null?ct=Wn:St.sibling=Wn,St=Wn,at=pt}if(Tt.done)return n(w,at),xt&&ln(w,At),ct;if(at===null){for(;!Tt.done;At++,Tt=B.next())Tt=J(w,Tt.value,K),Tt!==null&&(O=s(Tt,O,At),St===null?ct=Tt:St.sibling=Tt,St=Tt);return xt&&ln(w,At),ct}for(at=l(at);!Tt.done;At++,Tt=B.next())Tt=G(at,w,At,Tt.value,K),Tt!==null&&(t&&Tt.alternate!==null&&at.delete(Tt.key===null?At:Tt.key),O=s(Tt,O,At),St===null?ct=Tt:St.sibling=Tt,St=Tt);return t&&at.forEach(function(yA){return e(w,yA)}),xt&&ln(w,At),ct}function Mt(w,O,B,K){if(typeof B=="object"&&B!==null&&B.type===p&&B.key===null&&(B=B.props.children),typeof B=="object"&&B!==null){switch(B.$$typeof){case X:t:{for(var ct=B.key;O!==null;){if(O.key===ct){if(ct=B.type,ct===p){if(O.tag===7){n(w,O.sibling),K=a(O,B.props.children),K.return=w,w=K;break t}}else if(O.elementType===ct||typeof ct=="object"&&ct!==null&&ct.$$typeof===Y&&yl(ct)===O.type){n(w,O.sibling),K=a(O,B.props),Ia(K,B),K.return=w,w=K;break t}n(w,O);break}else e(w,O);O=O.sibling}B.type===p?(K=hl(B.props.children,w.mode,K,B.key),K.return=w,w=K):(K=_i(B.type,B.key,B.props,null,w.mode,K),Ia(K,B),K.return=w,w=K)}return d(w);case q:t:{for(ct=B.key;O!==null;){if(O.key===ct)if(O.tag===4&&O.stateNode.containerInfo===B.containerInfo&&O.stateNode.implementation===B.implementation){n(w,O.sibling),K=a(O,B.children||[]),K.return=w,w=K;break t}else{n(w,O);break}else e(w,O);O=O.sibling}K=Zc(B,w.mode,K),K.return=w,w=K}return d(w);case Y:return B=yl(B),Mt(w,O,B,K)}if(ut(B))return lt(w,O,B,K);if(nt(B)){if(ct=nt(B),typeof ct!="function")throw Error(f(150));return B=ct.call(B),ft(w,O,B,K)}if(typeof B.then=="function")return Mt(w,O,au(B),K);if(B.$$typeof===N)return Mt(w,O,tu(w,B),K);iu(w,B)}return typeof B=="string"&&B!==""||typeof B=="number"||typeof B=="bigint"?(B=""+B,O!==null&&O.tag===6?(n(w,O.sibling),K=a(O,B),K.return=w,w=K):(n(w,O),K=Vc(B,w.mode,K),K.return=w,w=K),d(w)):n(w,O)}return function(w,O,B,K){try{Za=0;var ct=Mt(w,O,B,K);return ea=null,ct}catch(at){if(at===ta||at===nu)throw at;var St=Te(29,at,null,w.mode);return St.lanes=K,St.return=w,St}finally{}}}var pl=j0(!0),N0=j0(!1),Hn=!1;function es(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function ns(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function Bn(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function Un(t,e,n){var l=t.updateQueue;if(l===null)return null;if(l=l.shared,(Ct&2)!==0){var a=l.pending;return a===null?e.next=e:(e.next=a.next,a.next=e),l.pending=e,e=Wi(t),g0(t,null,n),e}return Fi(t,l,e,n),Wi(t)}function qa(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194048)!==0)){var l=e.lanes;l&=t.pendingLanes,n|=l,e.lanes=n,Sr(t,n)}}function ls(t,e){var n=t.updateQueue,l=t.alternate;if(l!==null&&(l=l.updateQueue,n===l)){var a=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var d={lane:n.lane,tag:n.tag,payload:n.payload,callback:null,next:null};s===null?a=s=d:s=s.next=d,n=n.next}while(n!==null);s===null?a=s=e:s=s.next=e}else a=s=e;n={baseState:l.baseState,firstBaseUpdate:a,lastBaseUpdate:s,shared:l.shared,callbacks:l.callbacks},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}var as=!1;function Ka(){if(as){var t=$l;if(t!==null)throw t}}function ka(t,e,n,l){as=!1;var a=t.updateQueue;Hn=!1;var s=a.firstBaseUpdate,d=a.lastBaseUpdate,g=a.shared.pending;if(g!==null){a.shared.pending=null;var S=g,U=S.next;S.next=null,d===null?s=U:d.next=U,d=S;var Z=t.alternate;Z!==null&&(Z=Z.updateQueue,g=Z.lastBaseUpdate,g!==d&&(g===null?Z.firstBaseUpdate=U:g.next=U,Z.lastBaseUpdate=S))}if(s!==null){var J=a.baseState;d=0,Z=U=S=null,g=s;do{var Q=g.lane&-536870913,G=Q!==g.lane;if(G?(Et&Q)===Q:(l&Q)===Q){Q!==0&&Q===Pl&&(as=!0),Z!==null&&(Z=Z.next={lane:0,tag:g.tag,payload:g.payload,callback:null,next:null});t:{var lt=t,ft=g;Q=e;var Mt=n;switch(ft.tag){case 1:if(lt=ft.payload,typeof lt=="function"){J=lt.call(Mt,J,Q);break t}J=lt;break t;case 3:lt.flags=lt.flags&-65537|128;case 0:if(lt=ft.payload,Q=typeof lt=="function"?lt.call(Mt,J,Q):lt,Q==null)break t;J=T({},J,Q);break t;case 2:Hn=!0}}Q=g.callback,Q!==null&&(t.flags|=64,G&&(t.flags|=8192),G=a.callbacks,G===null?a.callbacks=[Q]:G.push(Q))}else G={lane:Q,tag:g.tag,payload:g.payload,callback:g.callback,next:null},Z===null?(U=Z=G,S=J):Z=Z.next=G,d|=Q;if(g=g.next,g===null){if(g=a.shared.pending,g===null)break;G=g,g=G.next,G.next=null,a.lastBaseUpdate=G,a.shared.pending=null}}while(!0);Z===null&&(S=J),a.baseState=S,a.firstBaseUpdate=U,a.lastBaseUpdate=Z,s===null&&(a.shared.lanes=0),Gn|=d,t.lanes=d,t.memoizedState=J}}function H0(t,e){if(typeof t!="function")throw Error(f(191,t));t.call(e)}function B0(t,e){var n=t.callbacks;if(n!==null)for(t.callbacks=null,t=0;t<n.length;t++)H0(n[t],e)}var na=C(null),uu=C(0);function U0(t,e){t=gn,W(uu,t),W(na,e),gn=t|e.baseLanes}function is(){W(uu,gn),W(na,na.current)}function us(){gn=uu.current,L(na),L(uu)}var Ce=C(null),Ye=null;function Qn(t){var e=t.alternate;W(Xt,Xt.current&1),W(Ce,t),Ye===null&&(e===null||na.current!==null||e.memoizedState!==null)&&(Ye=t)}function cs(t){W(Xt,Xt.current),W(Ce,t),Ye===null&&(Ye=t)}function Q0(t){t.tag===22?(W(Xt,Xt.current),W(Ce,t),Ye===null&&(Ye=t)):zn()}function zn(){W(Xt,Xt.current),W(Ce,Ce.current)}function Oe(t){L(Ce),Ye===t&&(Ye=null),L(Xt)}var Xt=C(0);function cu(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||mf(n)||gf(n)))return e}else if(e.tag===19&&(e.memoizedProps.revealOrder==="forwards"||e.memoizedProps.revealOrder==="backwards"||e.memoizedProps.revealOrder==="unstable_legacy-backwards"||e.memoizedProps.revealOrder==="together")){if((e.flags&128)!==0)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var cn=0,mt=null,Rt=null,It=null,su=!1,la=!1,xl=!1,fu=0,Ja=0,aa=null,sg=0;function Lt(){throw Error(f(321))}function ss(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!Se(t[n],e[n]))return!1;return!0}function fs(t,e,n,l,a,s){return cn=s,mt=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,M.H=t===null||t.memoizedState===null?po:Ts,xl=!1,s=n(l,a),xl=!1,la&&(s=Y0(e,n,l,a)),z0(t),s}function z0(t){M.H=_a;var e=Rt!==null&&Rt.next!==null;if(cn=0,It=Rt=mt=null,su=!1,Ja=0,aa=null,e)throw Error(f(300));t===null||qt||(t=t.dependencies,t!==null&&$i(t)&&(qt=!0))}function Y0(t,e,n,l){mt=t;var a=0;do{if(la&&(aa=null),Ja=0,la=!1,25<=a)throw Error(f(301));if(a+=1,It=Rt=null,t.updateQueue!=null){var s=t.updateQueue;s.lastEffect=null,s.events=null,s.stores=null,s.memoCache!=null&&(s.memoCache.index=0)}M.H=xo,s=e(n,l)}while(la);return s}function fg(){var t=M.H,e=t.useState()[0];return e=typeof e.then=="function"?Fa(e):e,t=t.useState()[0],(Rt!==null?Rt.memoizedState:null)!==t&&(mt.flags|=1024),e}function rs(){var t=fu!==0;return fu=0,t}function os(t,e,n){e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~n}function ds(t){if(su){for(t=t.memoizedState;t!==null;){var e=t.queue;e!==null&&(e.pending=null),t=t.next}su=!1}cn=0,It=Rt=mt=null,la=!1,Ja=fu=0,aa=null}function fe(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return It===null?mt.memoizedState=It=t:It=It.next=t,It}function Vt(){if(Rt===null){var t=mt.alternate;t=t!==null?t.memoizedState:null}else t=Rt.next;var e=It===null?mt.memoizedState:It.next;if(e!==null)It=e,Rt=t;else{if(t===null)throw mt.alternate===null?Error(f(467)):Error(f(310));Rt=t,t={memoizedState:Rt.memoizedState,baseState:Rt.baseState,baseQueue:Rt.baseQueue,queue:Rt.queue,next:null},It===null?mt.memoizedState=It=t:It=It.next=t}return It}function ru(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Fa(t){var e=Ja;return Ja+=1,aa===null&&(aa=[]),t=R0(aa,t,e),e=mt,(It===null?e.memoizedState:It.next)===null&&(e=e.alternate,M.H=e===null||e.memoizedState===null?po:Ts),t}function ou(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return Fa(t);if(t.$$typeof===N)return ne(t)}throw Error(f(438,String(t)))}function hs(t){var e=null,n=mt.updateQueue;if(n!==null&&(e=n.memoCache),e==null){var l=mt.alternate;l!==null&&(l=l.updateQueue,l!==null&&(l=l.memoCache,l!=null&&(e={data:l.data.map(function(a){return a.slice()}),index:0})))}if(e==null&&(e={data:[],index:0}),n===null&&(n=ru(),mt.updateQueue=n),n.memoCache=e,n=e.data[e.index],n===void 0)for(n=e.data[e.index]=Array(t),l=0;l<t;l++)n[l]=I;return e.index++,n}function sn(t,e){return typeof e=="function"?e(t):e}function du(t){var e=Vt();return ms(e,Rt,t)}function ms(t,e,n){var l=t.queue;if(l===null)throw Error(f(311));l.lastRenderedReducer=n;var a=t.baseQueue,s=l.pending;if(s!==null){if(a!==null){var d=a.next;a.next=s.next,s.next=d}e.baseQueue=a=s,l.pending=null}if(s=t.baseState,a===null)t.memoizedState=s;else{e=a.next;var g=d=null,S=null,U=e,Z=!1;do{var J=U.lane&-536870913;if(J!==U.lane?(Et&J)===J:(cn&J)===J){var Q=U.revertLane;if(Q===0)S!==null&&(S=S.next={lane:0,revertLane:0,gesture:null,action:U.action,hasEagerState:U.hasEagerState,eagerState:U.eagerState,next:null}),J===Pl&&(Z=!0);else if((cn&Q)===Q){U=U.next,Q===Pl&&(Z=!0);continue}else J={lane:0,revertLane:U.revertLane,gesture:null,action:U.action,hasEagerState:U.hasEagerState,eagerState:U.eagerState,next:null},S===null?(g=S=J,d=s):S=S.next=J,mt.lanes|=Q,Gn|=Q;J=U.action,xl&&n(s,J),s=U.hasEagerState?U.eagerState:n(s,J)}else Q={lane:J,revertLane:U.revertLane,gesture:U.gesture,action:U.action,hasEagerState:U.hasEagerState,eagerState:U.eagerState,next:null},S===null?(g=S=Q,d=s):S=S.next=Q,mt.lanes|=J,Gn|=J;U=U.next}while(U!==null&&U!==e);if(S===null?d=s:S.next=g,!Se(s,t.memoizedState)&&(qt=!0,Z&&(n=$l,n!==null)))throw n;t.memoizedState=s,t.baseState=d,t.baseQueue=S,l.lastRenderedState=s}return a===null&&(l.lanes=0),[t.memoizedState,l.dispatch]}function gs(t){var e=Vt(),n=e.queue;if(n===null)throw Error(f(311));n.lastRenderedReducer=t;var l=n.dispatch,a=n.pending,s=e.memoizedState;if(a!==null){n.pending=null;var d=a=a.next;do s=t(s,d.action),d=d.next;while(d!==a);Se(s,e.memoizedState)||(qt=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,l]}function L0(t,e,n){var l=mt,a=Vt(),s=xt;if(s){if(n===void 0)throw Error(f(407));n=n()}else n=e();var d=!Se((Rt||a).memoizedState,n);if(d&&(a.memoizedState=n,qt=!0),a=a.queue,ys(V0.bind(null,l,a,t),[t]),a.getSnapshot!==e||d||It!==null&&It.memoizedState.tag&1){if(l.flags|=2048,ia(9,{destroy:void 0},X0.bind(null,l,a,n,e),null),jt===null)throw Error(f(349));s||(cn&127)!==0||G0(l,e,n)}return n}function G0(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=mt.updateQueue,e===null?(e=ru(),mt.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function X0(t,e,n,l){e.value=n,e.getSnapshot=l,Z0(e)&&I0(t)}function V0(t,e,n){return n(function(){Z0(e)&&I0(t)})}function Z0(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!Se(t,n)}catch{return!0}}function I0(t){var e=dl(t,2);e!==null&&ve(e,t,2)}function As(t){var e=fe();if(typeof t=="function"){var n=t;if(t=n(),xl){On(!0);try{n()}finally{On(!1)}}}return e.memoizedState=e.baseState=t,e.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:sn,lastRenderedState:t},e}function q0(t,e,n,l){return t.baseState=n,ms(t,Rt,typeof l=="function"?l:sn)}function rg(t,e,n,l,a){if(gu(t))throw Error(f(485));if(t=e.action,t!==null){var s={payload:a,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(d){s.listeners.push(d)}};M.T!==null?n(!0):s.isTransition=!1,l(s),n=e.pending,n===null?(s.next=e.pending=s,K0(e,s)):(s.next=n.next,e.pending=n.next=s)}}function K0(t,e){var n=e.action,l=e.payload,a=t.state;if(e.isTransition){var s=M.T,d={};M.T=d;try{var g=n(a,l),S=M.S;S!==null&&S(d,g),k0(t,e,g)}catch(U){vs(t,e,U)}finally{s!==null&&d.types!==null&&(s.types=d.types),M.T=s}}else try{s=n(a,l),k0(t,e,s)}catch(U){vs(t,e,U)}}function k0(t,e,n){n!==null&&typeof n=="object"&&typeof n.then=="function"?n.then(function(l){J0(t,e,l)},function(l){return vs(t,e,l)}):J0(t,e,n)}function J0(t,e,n){e.status="fulfilled",e.value=n,F0(e),t.state=n,e=t.pending,e!==null&&(n=e.next,n===e?t.pending=null:(n=n.next,e.next=n,K0(t,n)))}function vs(t,e,n){var l=t.pending;if(t.pending=null,l!==null){l=l.next;do e.status="rejected",e.reason=n,F0(e),e=e.next;while(e!==l)}t.action=null}function F0(t){t=t.listeners;for(var e=0;e<t.length;e++)(0,t[e])()}function W0(t,e){return e}function _0(t,e){if(xt){var n=jt.formState;if(n!==null){t:{var l=mt;if(xt){if(Nt){e:{for(var a=Nt,s=ze;a.nodeType!==8;){if(!s){a=null;break e}if(a=Le(a.nextSibling),a===null){a=null;break e}}s=a.data,a=s==="F!"||s==="F"?a:null}if(a){Nt=Le(a.nextSibling),l=a.data==="F!";break t}}jn(l)}l=!1}l&&(e=n[0])}}return n=fe(),n.memoizedState=n.baseState=e,l={pending:null,lanes:0,dispatch:null,lastRenderedReducer:W0,lastRenderedState:e},n.queue=l,n=vo.bind(null,mt,l),l.dispatch=n,l=As(!1),s=Ss.bind(null,mt,!1,l.queue),l=fe(),a={state:e,dispatch:null,action:t,pending:null},l.queue=a,n=rg.bind(null,mt,a,s,n),a.dispatch=n,l.memoizedState=t,[e,n,!1]}function P0(t){var e=Vt();return $0(e,Rt,t)}function $0(t,e,n){if(e=ms(t,e,W0)[0],t=du(sn)[0],typeof e=="object"&&e!==null&&typeof e.then=="function")try{var l=Fa(e)}catch(d){throw d===ta?nu:d}else l=e;e=Vt();var a=e.queue,s=a.dispatch;return n!==e.memoizedState&&(mt.flags|=2048,ia(9,{destroy:void 0},og.bind(null,a,n),null)),[l,s,t]}function og(t,e){t.action=e}function to(t){var e=Vt(),n=Rt;if(n!==null)return $0(e,n,t);Vt(),e=e.memoizedState,n=Vt();var l=n.queue.dispatch;return n.memoizedState=t,[e,l,!1]}function ia(t,e,n,l){return t={tag:t,create:n,deps:l,inst:e,next:null},e=mt.updateQueue,e===null&&(e=ru(),mt.updateQueue=e),n=e.lastEffect,n===null?e.lastEffect=t.next=t:(l=n.next,n.next=t,t.next=l,e.lastEffect=t),t}function eo(){return Vt().memoizedState}function hu(t,e,n,l){var a=fe();mt.flags|=t,a.memoizedState=ia(1|e,{destroy:void 0},n,l===void 0?null:l)}function mu(t,e,n,l){var a=Vt();l=l===void 0?null:l;var s=a.memoizedState.inst;Rt!==null&&l!==null&&ss(l,Rt.memoizedState.deps)?a.memoizedState=ia(e,s,n,l):(mt.flags|=t,a.memoizedState=ia(1|e,s,n,l))}function no(t,e){hu(8390656,8,t,e)}function ys(t,e){mu(2048,8,t,e)}function dg(t){mt.flags|=4;var e=mt.updateQueue;if(e===null)e=ru(),mt.updateQueue=e,e.events=[t];else{var n=e.events;n===null?e.events=[t]:n.push(t)}}function lo(t){var e=Vt().memoizedState;return dg({ref:e,nextImpl:t}),function(){if((Ct&2)!==0)throw Error(f(440));return e.impl.apply(void 0,arguments)}}function ao(t,e){return mu(4,2,t,e)}function io(t,e){return mu(4,4,t,e)}function uo(t,e){if(typeof e=="function"){t=t();var n=e(t);return function(){typeof n=="function"?n():e(null)}}if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function co(t,e,n){n=n!=null?n.concat([t]):null,mu(4,4,uo.bind(null,e,t),n)}function Es(){}function so(t,e){var n=Vt();e=e===void 0?null:e;var l=n.memoizedState;return e!==null&&ss(e,l[1])?l[0]:(n.memoizedState=[t,e],t)}function fo(t,e){var n=Vt();e=e===void 0?null:e;var l=n.memoizedState;if(e!==null&&ss(e,l[1]))return l[0];if(l=t(),xl){On(!0);try{t()}finally{On(!1)}}return n.memoizedState=[l,e],l}function ps(t,e,n){return n===void 0||(cn&1073741824)!==0&&(Et&261930)===0?t.memoizedState=e:(t.memoizedState=n,t=od(),mt.lanes|=t,Gn|=t,n)}function ro(t,e,n,l){return Se(n,e)?n:na.current!==null?(t=ps(t,n,l),Se(t,e)||(qt=!0),t):(cn&42)===0||(cn&1073741824)!==0&&(Et&261930)===0?(qt=!0,t.memoizedState=n):(t=od(),mt.lanes|=t,Gn|=t,e)}function oo(t,e,n,l,a){var s=_.p;_.p=s!==0&&8>s?s:8;var d=M.T,g={};M.T=g,Ss(t,!1,e,n);try{var S=a(),U=M.S;if(U!==null&&U(g,S),S!==null&&typeof S=="object"&&typeof S.then=="function"){var Z=cg(S,l);Wa(t,e,Z,we(t))}else Wa(t,e,l,we(t))}catch(J){Wa(t,e,{then:function(){},status:"rejected",reason:J},we())}finally{_.p=s,d!==null&&g.types!==null&&(d.types=g.types),M.T=d}}function hg(){}function xs(t,e,n,l){if(t.tag!==5)throw Error(f(476));var a=ho(t).queue;oo(t,a,e,$,n===null?hg:function(){return mo(t),n(l)})}function ho(t){var e=t.memoizedState;if(e!==null)return e;e={memoizedState:$,baseState:$,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:sn,lastRenderedState:$},next:null};var n={};return e.next={memoizedState:n,baseState:n,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:sn,lastRenderedState:n},next:null},t.memoizedState=e,t=t.alternate,t!==null&&(t.memoizedState=e),e}function mo(t){var e=ho(t);e.next===null&&(e=t.alternate.memoizedState),Wa(t,e.next.queue,{},we())}function bs(){return ne(hi)}function go(){return Vt().memoizedState}function Ao(){return Vt().memoizedState}function mg(t){for(var e=t.return;e!==null;){switch(e.tag){case 24:case 3:var n=we();t=Bn(n);var l=Un(e,t,n);l!==null&&(ve(l,e,n),qa(l,e,n)),e={cache:_c()},t.payload=e;return}e=e.return}}function gg(t,e,n){var l=we();n={lane:l,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null},gu(t)?yo(e,n):(n=Gc(t,e,n,l),n!==null&&(ve(n,t,l),Eo(n,e,l)))}function vo(t,e,n){var l=we();Wa(t,e,n,l)}function Wa(t,e,n,l){var a={lane:l,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null};if(gu(t))yo(e,a);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var d=e.lastRenderedState,g=s(d,n);if(a.hasEagerState=!0,a.eagerState=g,Se(g,d))return Fi(t,e,a,0),jt===null&&Ji(),!1}catch{}finally{}if(n=Gc(t,e,a,l),n!==null)return ve(n,t,l),Eo(n,e,l),!0}return!1}function Ss(t,e,n,l){if(l={lane:2,revertLane:ef(),gesture:null,action:l,hasEagerState:!1,eagerState:null,next:null},gu(t)){if(e)throw Error(f(479))}else e=Gc(t,n,l,2),e!==null&&ve(e,t,2)}function gu(t){var e=t.alternate;return t===mt||e!==null&&e===mt}function yo(t,e){la=su=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function Eo(t,e,n){if((n&4194048)!==0){var l=e.lanes;l&=t.pendingLanes,n|=l,e.lanes=n,Sr(t,n)}}var _a={readContext:ne,use:ou,useCallback:Lt,useContext:Lt,useEffect:Lt,useImperativeHandle:Lt,useLayoutEffect:Lt,useInsertionEffect:Lt,useMemo:Lt,useReducer:Lt,useRef:Lt,useState:Lt,useDebugValue:Lt,useDeferredValue:Lt,useTransition:Lt,useSyncExternalStore:Lt,useId:Lt,useHostTransitionStatus:Lt,useFormState:Lt,useActionState:Lt,useOptimistic:Lt,useMemoCache:Lt,useCacheRefresh:Lt};_a.useEffectEvent=Lt;var po={readContext:ne,use:ou,useCallback:function(t,e){return fe().memoizedState=[t,e===void 0?null:e],t},useContext:ne,useEffect:no,useImperativeHandle:function(t,e,n){n=n!=null?n.concat([t]):null,hu(4194308,4,uo.bind(null,e,t),n)},useLayoutEffect:function(t,e){return hu(4194308,4,t,e)},useInsertionEffect:function(t,e){hu(4,2,t,e)},useMemo:function(t,e){var n=fe();e=e===void 0?null:e;var l=t();if(xl){On(!0);try{t()}finally{On(!1)}}return n.memoizedState=[l,e],l},useReducer:function(t,e,n){var l=fe();if(n!==void 0){var a=n(e);if(xl){On(!0);try{n(e)}finally{On(!1)}}}else a=e;return l.memoizedState=l.baseState=a,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:a},l.queue=t,t=t.dispatch=gg.bind(null,mt,t),[l.memoizedState,t]},useRef:function(t){var e=fe();return t={current:t},e.memoizedState=t},useState:function(t){t=As(t);var e=t.queue,n=vo.bind(null,mt,e);return e.dispatch=n,[t.memoizedState,n]},useDebugValue:Es,useDeferredValue:function(t,e){var n=fe();return ps(n,t,e)},useTransition:function(){var t=As(!1);return t=oo.bind(null,mt,t.queue,!0,!1),fe().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,e,n){var l=mt,a=fe();if(xt){if(n===void 0)throw Error(f(407));n=n()}else{if(n=e(),jt===null)throw Error(f(349));(Et&127)!==0||G0(l,e,n)}a.memoizedState=n;var s={value:n,getSnapshot:e};return a.queue=s,no(V0.bind(null,l,s,t),[t]),l.flags|=2048,ia(9,{destroy:void 0},X0.bind(null,l,s,n,e),null),n},useId:function(){var t=fe(),e=jt.identifierPrefix;if(xt){var n=Fe,l=Je;n=(l&~(1<<32-be(l)-1)).toString(32)+n,e="_"+e+"R_"+n,n=fu++,0<n&&(e+="H"+n.toString(32)),e+="_"}else n=sg++,e="_"+e+"r_"+n.toString(32)+"_";return t.memoizedState=e},useHostTransitionStatus:bs,useFormState:_0,useActionState:_0,useOptimistic:function(t){var e=fe();e.memoizedState=e.baseState=t;var n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return e.queue=n,e=Ss.bind(null,mt,!0,n),n.dispatch=e,[t,e]},useMemoCache:hs,useCacheRefresh:function(){return fe().memoizedState=mg.bind(null,mt)},useEffectEvent:function(t){var e=fe(),n={impl:t};return e.memoizedState=n,function(){if((Ct&2)!==0)throw Error(f(440));return n.impl.apply(void 0,arguments)}}},Ts={readContext:ne,use:ou,useCallback:so,useContext:ne,useEffect:ys,useImperativeHandle:co,useInsertionEffect:ao,useLayoutEffect:io,useMemo:fo,useReducer:du,useRef:eo,useState:function(){return du(sn)},useDebugValue:Es,useDeferredValue:function(t,e){var n=Vt();return ro(n,Rt.memoizedState,t,e)},useTransition:function(){var t=du(sn)[0],e=Vt().memoizedState;return[typeof t=="boolean"?t:Fa(t),e]},useSyncExternalStore:L0,useId:go,useHostTransitionStatus:bs,useFormState:P0,useActionState:P0,useOptimistic:function(t,e){var n=Vt();return q0(n,Rt,t,e)},useMemoCache:hs,useCacheRefresh:Ao};Ts.useEffectEvent=lo;var xo={readContext:ne,use:ou,useCallback:so,useContext:ne,useEffect:ys,useImperativeHandle:co,useInsertionEffect:ao,useLayoutEffect:io,useMemo:fo,useReducer:gs,useRef:eo,useState:function(){return gs(sn)},useDebugValue:Es,useDeferredValue:function(t,e){var n=Vt();return Rt===null?ps(n,t,e):ro(n,Rt.memoizedState,t,e)},useTransition:function(){var t=gs(sn)[0],e=Vt().memoizedState;return[typeof t=="boolean"?t:Fa(t),e]},useSyncExternalStore:L0,useId:go,useHostTransitionStatus:bs,useFormState:to,useActionState:to,useOptimistic:function(t,e){var n=Vt();return Rt!==null?q0(n,Rt,t,e):(n.baseState=t,[t,n.queue.dispatch])},useMemoCache:hs,useCacheRefresh:Ao};xo.useEffectEvent=lo;function Cs(t,e,n,l){e=t.memoizedState,n=n(l,e),n=n==null?e:T({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Os={enqueueSetState:function(t,e,n){t=t._reactInternals;var l=we(),a=Bn(l);a.payload=e,n!=null&&(a.callback=n),e=Un(t,a,l),e!==null&&(ve(e,t,l),qa(e,t,l))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var l=we(),a=Bn(l);a.tag=1,a.payload=e,n!=null&&(a.callback=n),e=Un(t,a,l),e!==null&&(ve(e,t,l),qa(e,t,l))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=we(),l=Bn(n);l.tag=2,e!=null&&(l.callback=e),e=Un(t,l,n),e!==null&&(ve(e,t,n),qa(e,t,n))}};function bo(t,e,n,l,a,s,d){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(l,s,d):e.prototype&&e.prototype.isPureReactComponent?!za(n,l)||!za(a,s):!0}function So(t,e,n,l){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,l),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,l),e.state!==t&&Os.enqueueReplaceState(e,e.state,null)}function bl(t,e){var n=e;if("ref"in e){n={};for(var l in e)l!=="ref"&&(n[l]=e[l])}if(t=t.defaultProps){n===e&&(n=T({},n));for(var a in t)n[a]===void 0&&(n[a]=t[a])}return n}function To(t){ki(t)}function Co(t){console.error(t)}function Oo(t){ki(t)}function Au(t,e){try{var n=t.onUncaughtError;n(e.value,{componentStack:e.stack})}catch(l){setTimeout(function(){throw l})}}function Do(t,e,n){try{var l=t.onCaughtError;l(n.value,{componentStack:n.stack,errorBoundary:e.tag===1?e.stateNode:null})}catch(a){setTimeout(function(){throw a})}}function Ds(t,e,n){return n=Bn(n),n.tag=3,n.payload={element:null},n.callback=function(){Au(t,e)},n}function Ro(t){return t=Bn(t),t.tag=3,t}function wo(t,e,n,l){var a=n.type.getDerivedStateFromError;if(typeof a=="function"){var s=l.value;t.payload=function(){return a(s)},t.callback=function(){Do(e,n,l)}}var d=n.stateNode;d!==null&&typeof d.componentDidCatch=="function"&&(t.callback=function(){Do(e,n,l),typeof a!="function"&&(Xn===null?Xn=new Set([this]):Xn.add(this));var g=l.stack;this.componentDidCatch(l.value,{componentStack:g!==null?g:""})})}function Ag(t,e,n,l,a){if(n.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){if(e=n.alternate,e!==null&&_l(e,n,a,!0),n=Ce.current,n!==null){switch(n.tag){case 31:case 13:return Ye===null?Ru():n.alternate===null&&Gt===0&&(Gt=3),n.flags&=-257,n.flags|=65536,n.lanes=a,l===lu?n.flags|=16384:(e=n.updateQueue,e===null?n.updateQueue=new Set([l]):e.add(l),Ps(t,l,a)),!1;case 22:return n.flags|=65536,l===lu?n.flags|=16384:(e=n.updateQueue,e===null?(e={transitions:null,markerInstances:null,retryQueue:new Set([l])},n.updateQueue=e):(n=e.retryQueue,n===null?e.retryQueue=new Set([l]):n.add(l)),Ps(t,l,a)),!1}throw Error(f(435,n.tag))}return Ps(t,l,a),Ru(),!1}if(xt)return e=Ce.current,e!==null?((e.flags&65536)===0&&(e.flags|=256),e.flags|=65536,e.lanes=a,l!==Kc&&(t=Error(f(422),{cause:l}),Ga(Be(t,n)))):(l!==Kc&&(e=Error(f(423),{cause:l}),Ga(Be(e,n))),t=t.current.alternate,t.flags|=65536,a&=-a,t.lanes|=a,l=Be(l,n),a=Ds(t.stateNode,l,a),ls(t,a),Gt!==4&&(Gt=2)),!1;var s=Error(f(520),{cause:l});if(s=Be(s,n),ii===null?ii=[s]:ii.push(s),Gt!==4&&(Gt=2),e===null)return!0;l=Be(l,n),n=e;do{switch(n.tag){case 3:return n.flags|=65536,t=a&-a,n.lanes|=t,t=Ds(n.stateNode,l,t),ls(n,t),!1;case 1:if(e=n.type,s=n.stateNode,(n.flags&128)===0&&(typeof e.getDerivedStateFromError=="function"||s!==null&&typeof s.componentDidCatch=="function"&&(Xn===null||!Xn.has(s))))return n.flags|=65536,a&=-a,n.lanes|=a,a=Ro(a),wo(a,t,n,l),ls(n,a),!1}n=n.return}while(n!==null);return!1}var Rs=Error(f(461)),qt=!1;function le(t,e,n,l){e.child=t===null?N0(e,null,n,l):pl(e,t.child,n,l)}function Mo(t,e,n,l,a){n=n.render;var s=e.ref;if("ref"in l){var d={};for(var g in l)g!=="ref"&&(d[g]=l[g])}else d=l;return Al(e),l=fs(t,e,n,d,s,a),g=rs(),t!==null&&!qt?(os(t,e,a),fn(t,e,a)):(xt&&g&&Ic(e),e.flags|=1,le(t,e,l,a),e.child)}function jo(t,e,n,l,a){if(t===null){var s=n.type;return typeof s=="function"&&!Xc(s)&&s.defaultProps===void 0&&n.compare===null?(e.tag=15,e.type=s,No(t,e,s,l,a)):(t=_i(n.type,null,l,e,e.mode,a),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!Qs(t,a)){var d=s.memoizedProps;if(n=n.compare,n=n!==null?n:za,n(d,l)&&t.ref===e.ref)return fn(t,e,a)}return e.flags|=1,t=nn(s,l),t.ref=e.ref,t.return=e,e.child=t}function No(t,e,n,l,a){if(t!==null){var s=t.memoizedProps;if(za(s,l)&&t.ref===e.ref)if(qt=!1,e.pendingProps=l=s,Qs(t,a))(t.flags&131072)!==0&&(qt=!0);else return e.lanes=t.lanes,fn(t,e,a)}return ws(t,e,n,l,a)}function Ho(t,e,n,l){var a=l.children,s=t!==null?t.memoizedState:null;if(t===null&&e.stateNode===null&&(e.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),l.mode==="hidden"){if((e.flags&128)!==0){if(s=s!==null?s.baseLanes|n:n,t!==null){for(l=e.child=t.child,a=0;l!==null;)a=a|l.lanes|l.childLanes,l=l.sibling;l=a&~s}else l=0,e.child=null;return Bo(t,e,s,n,l)}if((n&536870912)!==0)e.memoizedState={baseLanes:0,cachePool:null},t!==null&&eu(e,s!==null?s.cachePool:null),s!==null?U0(e,s):is(),Q0(e);else return l=e.lanes=536870912,Bo(t,e,s!==null?s.baseLanes|n:n,n,l)}else s!==null?(eu(e,s.cachePool),U0(e,s),zn(),e.memoizedState=null):(t!==null&&eu(e,null),is(),zn());return le(t,e,a,n),e.child}function Pa(t,e){return t!==null&&t.tag===22||e.stateNode!==null||(e.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),e.sibling}function Bo(t,e,n,l,a){var s=$c();return s=s===null?null:{parent:Zt._currentValue,pool:s},e.memoizedState={baseLanes:n,cachePool:s},t!==null&&eu(e,null),is(),Q0(e),t!==null&&_l(t,e,l,!0),e.childLanes=a,null}function vu(t,e){return e=Eu({mode:e.mode,children:e.children},t.mode),e.ref=t.ref,t.child=e,e.return=t,e}function Uo(t,e,n){return pl(e,t.child,null,n),t=vu(e,e.pendingProps),t.flags|=2,Oe(e),e.memoizedState=null,t}function vg(t,e,n){var l=e.pendingProps,a=(e.flags&128)!==0;if(e.flags&=-129,t===null){if(xt){if(l.mode==="hidden")return t=vu(e,l),e.lanes=536870912,Pa(null,t);if(cs(e),(t=Nt)?(t=kd(t,ze),t=t!==null&&t.data==="&"?t:null,t!==null&&(e.memoizedState={dehydrated:t,treeContext:wn!==null?{id:Je,overflow:Fe}:null,retryLane:536870912,hydrationErrors:null},n=v0(t),n.return=e,e.child=n,ee=e,Nt=null)):t=null,t===null)throw jn(e);return e.lanes=536870912,null}return vu(e,l)}var s=t.memoizedState;if(s!==null){var d=s.dehydrated;if(cs(e),a)if(e.flags&256)e.flags&=-257,e=Uo(t,e,n);else if(e.memoizedState!==null)e.child=t.child,e.flags|=128,e=null;else throw Error(f(558));else if(qt||_l(t,e,n,!1),a=(n&t.childLanes)!==0,qt||a){if(l=jt,l!==null&&(d=Tr(l,n),d!==0&&d!==s.retryLane))throw s.retryLane=d,dl(t,d),ve(l,t,d),Rs;Ru(),e=Uo(t,e,n)}else t=s.treeContext,Nt=Le(d.nextSibling),ee=e,xt=!0,Mn=null,ze=!1,t!==null&&p0(e,t),e=vu(e,l),e.flags|=4096;return e}return t=nn(t.child,{mode:l.mode,children:l.children}),t.ref=e.ref,e.child=t,t.return=e,t}function yu(t,e){var n=e.ref;if(n===null)t!==null&&t.ref!==null&&(e.flags|=4194816);else{if(typeof n!="function"&&typeof n!="object")throw Error(f(284));(t===null||t.ref!==n)&&(e.flags|=4194816)}}function ws(t,e,n,l,a){return Al(e),n=fs(t,e,n,l,void 0,a),l=rs(),t!==null&&!qt?(os(t,e,a),fn(t,e,a)):(xt&&l&&Ic(e),e.flags|=1,le(t,e,n,a),e.child)}function Qo(t,e,n,l,a,s){return Al(e),e.updateQueue=null,n=Y0(e,l,n,a),z0(t),l=rs(),t!==null&&!qt?(os(t,e,s),fn(t,e,s)):(xt&&l&&Ic(e),e.flags|=1,le(t,e,n,s),e.child)}function zo(t,e,n,l,a){if(Al(e),e.stateNode===null){var s=kl,d=n.contextType;typeof d=="object"&&d!==null&&(s=ne(d)),s=new n(l,s),e.memoizedState=s.state!==null&&s.state!==void 0?s.state:null,s.updater=Os,e.stateNode=s,s._reactInternals=e,s=e.stateNode,s.props=l,s.state=e.memoizedState,s.refs={},es(e),d=n.contextType,s.context=typeof d=="object"&&d!==null?ne(d):kl,s.state=e.memoizedState,d=n.getDerivedStateFromProps,typeof d=="function"&&(Cs(e,n,d,l),s.state=e.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof s.getSnapshotBeforeUpdate=="function"||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(d=s.state,typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount(),d!==s.state&&Os.enqueueReplaceState(s,s.state,null),ka(e,l,s,a),Ka(),s.state=e.memoizedState),typeof s.componentDidMount=="function"&&(e.flags|=4194308),l=!0}else if(t===null){s=e.stateNode;var g=e.memoizedProps,S=bl(n,g);s.props=S;var U=s.context,Z=n.contextType;d=kl,typeof Z=="object"&&Z!==null&&(d=ne(Z));var J=n.getDerivedStateFromProps;Z=typeof J=="function"||typeof s.getSnapshotBeforeUpdate=="function",g=e.pendingProps!==g,Z||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(g||U!==d)&&So(e,s,l,d),Hn=!1;var Q=e.memoizedState;s.state=Q,ka(e,l,s,a),Ka(),U=e.memoizedState,g||Q!==U||Hn?(typeof J=="function"&&(Cs(e,n,J,l),U=e.memoizedState),(S=Hn||bo(e,n,S,l,Q,U,d))?(Z||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount()),typeof s.componentDidMount=="function"&&(e.flags|=4194308)):(typeof s.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=l,e.memoizedState=U),s.props=l,s.state=U,s.context=d,l=S):(typeof s.componentDidMount=="function"&&(e.flags|=4194308),l=!1)}else{s=e.stateNode,ns(t,e),d=e.memoizedProps,Z=bl(n,d),s.props=Z,J=e.pendingProps,Q=s.context,U=n.contextType,S=kl,typeof U=="object"&&U!==null&&(S=ne(U)),g=n.getDerivedStateFromProps,(U=typeof g=="function"||typeof s.getSnapshotBeforeUpdate=="function")||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(d!==J||Q!==S)&&So(e,s,l,S),Hn=!1,Q=e.memoizedState,s.state=Q,ka(e,l,s,a),Ka();var G=e.memoizedState;d!==J||Q!==G||Hn||t!==null&&t.dependencies!==null&&$i(t.dependencies)?(typeof g=="function"&&(Cs(e,n,g,l),G=e.memoizedState),(Z=Hn||bo(e,n,Z,l,Q,G,S)||t!==null&&t.dependencies!==null&&$i(t.dependencies))?(U||typeof s.UNSAFE_componentWillUpdate!="function"&&typeof s.componentWillUpdate!="function"||(typeof s.componentWillUpdate=="function"&&s.componentWillUpdate(l,G,S),typeof s.UNSAFE_componentWillUpdate=="function"&&s.UNSAFE_componentWillUpdate(l,G,S)),typeof s.componentDidUpdate=="function"&&(e.flags|=4),typeof s.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof s.componentDidUpdate!="function"||d===t.memoizedProps&&Q===t.memoizedState||(e.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||d===t.memoizedProps&&Q===t.memoizedState||(e.flags|=1024),e.memoizedProps=l,e.memoizedState=G),s.props=l,s.state=G,s.context=S,l=Z):(typeof s.componentDidUpdate!="function"||d===t.memoizedProps&&Q===t.memoizedState||(e.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||d===t.memoizedProps&&Q===t.memoizedState||(e.flags|=1024),l=!1)}return s=l,yu(t,e),l=(e.flags&128)!==0,s||l?(s=e.stateNode,n=l&&typeof n.getDerivedStateFromError!="function"?null:s.render(),e.flags|=1,t!==null&&l?(e.child=pl(e,t.child,null,a),e.child=pl(e,null,n,a)):le(t,e,n,a),e.memoizedState=s.state,t=e.child):t=fn(t,e,a),t}function Yo(t,e,n,l){return ml(),e.flags|=256,le(t,e,n,l),e.child}var Ms={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function js(t){return{baseLanes:t,cachePool:O0()}}function Ns(t,e,n){return t=t!==null?t.childLanes&~n:0,e&&(t|=Re),t}function Lo(t,e,n){var l=e.pendingProps,a=!1,s=(e.flags&128)!==0,d;if((d=s)||(d=t!==null&&t.memoizedState===null?!1:(Xt.current&2)!==0),d&&(a=!0,e.flags&=-129),d=(e.flags&32)!==0,e.flags&=-33,t===null){if(xt){if(a?Qn(e):zn(),(t=Nt)?(t=kd(t,ze),t=t!==null&&t.data!=="&"?t:null,t!==null&&(e.memoizedState={dehydrated:t,treeContext:wn!==null?{id:Je,overflow:Fe}:null,retryLane:536870912,hydrationErrors:null},n=v0(t),n.return=e,e.child=n,ee=e,Nt=null)):t=null,t===null)throw jn(e);return gf(t)?e.lanes=32:e.lanes=536870912,null}var g=l.children;return l=l.fallback,a?(zn(),a=e.mode,g=Eu({mode:"hidden",children:g},a),l=hl(l,a,n,null),g.return=e,l.return=e,g.sibling=l,e.child=g,l=e.child,l.memoizedState=js(n),l.childLanes=Ns(t,d,n),e.memoizedState=Ms,Pa(null,l)):(Qn(e),Hs(e,g))}var S=t.memoizedState;if(S!==null&&(g=S.dehydrated,g!==null)){if(s)e.flags&256?(Qn(e),e.flags&=-257,e=Bs(t,e,n)):e.memoizedState!==null?(zn(),e.child=t.child,e.flags|=128,e=null):(zn(),g=l.fallback,a=e.mode,l=Eu({mode:"visible",children:l.children},a),g=hl(g,a,n,null),g.flags|=2,l.return=e,g.return=e,l.sibling=g,e.child=l,pl(e,t.child,null,n),l=e.child,l.memoizedState=js(n),l.childLanes=Ns(t,d,n),e.memoizedState=Ms,e=Pa(null,l));else if(Qn(e),gf(g)){if(d=g.nextSibling&&g.nextSibling.dataset,d)var U=d.dgst;d=U,l=Error(f(419)),l.stack="",l.digest=d,Ga({value:l,source:null,stack:null}),e=Bs(t,e,n)}else if(qt||_l(t,e,n,!1),d=(n&t.childLanes)!==0,qt||d){if(d=jt,d!==null&&(l=Tr(d,n),l!==0&&l!==S.retryLane))throw S.retryLane=l,dl(t,l),ve(d,t,l),Rs;mf(g)||Ru(),e=Bs(t,e,n)}else mf(g)?(e.flags|=192,e.child=t.child,e=null):(t=S.treeContext,Nt=Le(g.nextSibling),ee=e,xt=!0,Mn=null,ze=!1,t!==null&&p0(e,t),e=Hs(e,l.children),e.flags|=4096);return e}return a?(zn(),g=l.fallback,a=e.mode,S=t.child,U=S.sibling,l=nn(S,{mode:"hidden",children:l.children}),l.subtreeFlags=S.subtreeFlags&65011712,U!==null?g=nn(U,g):(g=hl(g,a,n,null),g.flags|=2),g.return=e,l.return=e,l.sibling=g,e.child=l,Pa(null,l),l=e.child,g=t.child.memoizedState,g===null?g=js(n):(a=g.cachePool,a!==null?(S=Zt._currentValue,a=a.parent!==S?{parent:S,pool:S}:a):a=O0(),g={baseLanes:g.baseLanes|n,cachePool:a}),l.memoizedState=g,l.childLanes=Ns(t,d,n),e.memoizedState=Ms,Pa(t.child,l)):(Qn(e),n=t.child,t=n.sibling,n=nn(n,{mode:"visible",children:l.children}),n.return=e,n.sibling=null,t!==null&&(d=e.deletions,d===null?(e.deletions=[t],e.flags|=16):d.push(t)),e.child=n,e.memoizedState=null,n)}function Hs(t,e){return e=Eu({mode:"visible",children:e},t.mode),e.return=t,t.child=e}function Eu(t,e){return t=Te(22,t,null,e),t.lanes=0,t}function Bs(t,e,n){return pl(e,t.child,null,n),t=Hs(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function Go(t,e,n){t.lanes|=e;var l=t.alternate;l!==null&&(l.lanes|=e),Fc(t.return,e,n)}function Us(t,e,n,l,a,s){var d=t.memoizedState;d===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:l,tail:n,tailMode:a,treeForkCount:s}:(d.isBackwards=e,d.rendering=null,d.renderingStartTime=0,d.last=l,d.tail=n,d.tailMode=a,d.treeForkCount=s)}function Xo(t,e,n){var l=e.pendingProps,a=l.revealOrder,s=l.tail;l=l.children;var d=Xt.current,g=(d&2)!==0;if(g?(d=d&1|2,e.flags|=128):d&=1,W(Xt,d),le(t,e,l,n),l=xt?La:0,!g&&t!==null&&(t.flags&128)!==0)t:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Go(t,n,e);else if(t.tag===19)Go(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break t;for(;t.sibling===null;){if(t.return===null||t.return===e)break t;t=t.return}t.sibling.return=t.return,t=t.sibling}switch(a){case"forwards":for(n=e.child,a=null;n!==null;)t=n.alternate,t!==null&&cu(t)===null&&(a=n),n=n.sibling;n=a,n===null?(a=e.child,e.child=null):(a=n.sibling,n.sibling=null),Us(e,!1,a,n,s,l);break;case"backwards":case"unstable_legacy-backwards":for(n=null,a=e.child,e.child=null;a!==null;){if(t=a.alternate,t!==null&&cu(t)===null){e.child=a;break}t=a.sibling,a.sibling=n,n=a,a=t}Us(e,!0,n,null,s,l);break;case"together":Us(e,!1,null,null,void 0,l);break;default:e.memoizedState=null}return e.child}function fn(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Gn|=e.lanes,(n&e.childLanes)===0)if(t!==null){if(_l(t,e,n,!1),(n&e.childLanes)===0)return null}else return null;if(t!==null&&e.child!==t.child)throw Error(f(153));if(e.child!==null){for(t=e.child,n=nn(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=nn(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function Qs(t,e){return(t.lanes&e)!==0?!0:(t=t.dependencies,!!(t!==null&&$i(t)))}function yg(t,e,n){switch(e.tag){case 3:Jt(e,e.stateNode.containerInfo),Nn(e,Zt,t.memoizedState.cache),ml();break;case 27:case 5:Sn(e);break;case 4:Jt(e,e.stateNode.containerInfo);break;case 10:Nn(e,e.type,e.memoizedProps.value);break;case 31:if(e.memoizedState!==null)return e.flags|=128,cs(e),null;break;case 13:var l=e.memoizedState;if(l!==null)return l.dehydrated!==null?(Qn(e),e.flags|=128,null):(n&e.child.childLanes)!==0?Lo(t,e,n):(Qn(e),t=fn(t,e,n),t!==null?t.sibling:null);Qn(e);break;case 19:var a=(t.flags&128)!==0;if(l=(n&e.childLanes)!==0,l||(_l(t,e,n,!1),l=(n&e.childLanes)!==0),a){if(l)return Xo(t,e,n);e.flags|=128}if(a=e.memoizedState,a!==null&&(a.rendering=null,a.tail=null,a.lastEffect=null),W(Xt,Xt.current),l)break;return null;case 22:return e.lanes=0,Ho(t,e,n,e.pendingProps);case 24:Nn(e,Zt,t.memoizedState.cache)}return fn(t,e,n)}function Vo(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps)qt=!0;else{if(!Qs(t,n)&&(e.flags&128)===0)return qt=!1,yg(t,e,n);qt=(t.flags&131072)!==0}else qt=!1,xt&&(e.flags&1048576)!==0&&E0(e,La,e.index);switch(e.lanes=0,e.tag){case 16:t:{var l=e.pendingProps;if(t=yl(e.elementType),e.type=t,typeof t=="function")Xc(t)?(l=bl(t,l),e.tag=1,e=zo(null,e,t,l,n)):(e.tag=0,e=ws(null,e,t,l,n));else{if(t!=null){var a=t.$$typeof;if(a===V){e.tag=11,e=Mo(null,e,t,l,n);break t}else if(a===j){e.tag=14,e=jo(null,e,t,l,n);break t}}throw e=st(t)||t,Error(f(306,e,""))}}return e;case 0:return ws(t,e,e.type,e.pendingProps,n);case 1:return l=e.type,a=bl(l,e.pendingProps),zo(t,e,l,a,n);case 3:t:{if(Jt(e,e.stateNode.containerInfo),t===null)throw Error(f(387));l=e.pendingProps;var s=e.memoizedState;a=s.element,ns(t,e),ka(e,l,null,n);var d=e.memoizedState;if(l=d.cache,Nn(e,Zt,l),l!==s.cache&&Wc(e,[Zt],n,!0),Ka(),l=d.element,s.isDehydrated)if(s={element:l,isDehydrated:!1,cache:d.cache},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){e=Yo(t,e,l,n);break t}else if(l!==a){a=Be(Error(f(424)),e),Ga(a),e=Yo(t,e,l,n);break t}else{switch(t=e.stateNode.containerInfo,t.nodeType){case 9:t=t.body;break;default:t=t.nodeName==="HTML"?t.ownerDocument.body:t}for(Nt=Le(t.firstChild),ee=e,xt=!0,Mn=null,ze=!0,n=N0(e,null,l,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling}else{if(ml(),l===a){e=fn(t,e,n);break t}le(t,e,l,n)}e=e.child}return e;case 26:return yu(t,e),t===null?(n=$d(e.type,null,e.pendingProps,null))?e.memoizedState=n:xt||(n=e.type,t=e.pendingProps,l=Uu(ot.current).createElement(n),l[te]=e,l[oe]=t,ae(l,n,t),Ft(l),e.stateNode=l):e.memoizedState=$d(e.type,t.memoizedProps,e.pendingProps,t.memoizedState),null;case 27:return Sn(e),t===null&&xt&&(l=e.stateNode=Wd(e.type,e.pendingProps,ot.current),ee=e,ze=!0,a=Nt,qn(e.type)?(Af=a,Nt=Le(l.firstChild)):Nt=a),le(t,e,e.pendingProps.children,n),yu(t,e),t===null&&(e.flags|=4194304),e.child;case 5:return t===null&&xt&&((a=l=Nt)&&(l=Jg(l,e.type,e.pendingProps,ze),l!==null?(e.stateNode=l,ee=e,Nt=Le(l.firstChild),ze=!1,a=!0):a=!1),a||jn(e)),Sn(e),a=e.type,s=e.pendingProps,d=t!==null?t.memoizedProps:null,l=s.children,of(a,s)?l=null:d!==null&&of(a,d)&&(e.flags|=32),e.memoizedState!==null&&(a=fs(t,e,fg,null,null,n),hi._currentValue=a),yu(t,e),le(t,e,l,n),e.child;case 6:return t===null&&xt&&((t=n=Nt)&&(n=Fg(n,e.pendingProps,ze),n!==null?(e.stateNode=n,ee=e,Nt=null,t=!0):t=!1),t||jn(e)),null;case 13:return Lo(t,e,n);case 4:return Jt(e,e.stateNode.containerInfo),l=e.pendingProps,t===null?e.child=pl(e,null,l,n):le(t,e,l,n),e.child;case 11:return Mo(t,e,e.type,e.pendingProps,n);case 7:return le(t,e,e.pendingProps,n),e.child;case 8:return le(t,e,e.pendingProps.children,n),e.child;case 12:return le(t,e,e.pendingProps.children,n),e.child;case 10:return l=e.pendingProps,Nn(e,e.type,l.value),le(t,e,l.children,n),e.child;case 9:return a=e.type._context,l=e.pendingProps.children,Al(e),a=ne(a),l=l(a),e.flags|=1,le(t,e,l,n),e.child;case 14:return jo(t,e,e.type,e.pendingProps,n);case 15:return No(t,e,e.type,e.pendingProps,n);case 19:return Xo(t,e,n);case 31:return vg(t,e,n);case 22:return Ho(t,e,n,e.pendingProps);case 24:return Al(e),l=ne(Zt),t===null?(a=$c(),a===null&&(a=jt,s=_c(),a.pooledCache=s,s.refCount++,s!==null&&(a.pooledCacheLanes|=n),a=s),e.memoizedState={parent:l,cache:a},es(e),Nn(e,Zt,a)):((t.lanes&n)!==0&&(ns(t,e),ka(e,null,null,n),Ka()),a=t.memoizedState,s=e.memoizedState,a.parent!==l?(a={parent:l,cache:l},e.memoizedState=a,e.lanes===0&&(e.memoizedState=e.updateQueue.baseState=a),Nn(e,Zt,l)):(l=s.cache,Nn(e,Zt,l),l!==a.cache&&Wc(e,[Zt],n,!0))),le(t,e,e.pendingProps.children,n),e.child;case 29:throw e.pendingProps}throw Error(f(156,e.tag))}function rn(t){t.flags|=4}function zs(t,e,n,l,a){if((e=(t.mode&32)!==0)&&(e=!1),e){if(t.flags|=16777216,(a&335544128)===a)if(t.stateNode.complete)t.flags|=8192;else if(gd())t.flags|=8192;else throw El=lu,ts}else t.flags&=-16777217}function Zo(t,e){if(e.type!=="stylesheet"||(e.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!a1(e))if(gd())t.flags|=8192;else throw El=lu,ts}function pu(t,e){e!==null&&(t.flags|=4),t.flags&16384&&(e=t.tag!==22?xr():536870912,t.lanes|=e,fa|=e)}function $a(t,e){if(!xt)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var l=null;n!==null;)n.alternate!==null&&(l=n),n=n.sibling;l===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:l.sibling=null}}function Ht(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,l=0;if(e)for(var a=t.child;a!==null;)n|=a.lanes|a.childLanes,l|=a.subtreeFlags&65011712,l|=a.flags&65011712,a.return=t,a=a.sibling;else for(a=t.child;a!==null;)n|=a.lanes|a.childLanes,l|=a.subtreeFlags,l|=a.flags,a.return=t,a=a.sibling;return t.subtreeFlags|=l,t.childLanes=n,e}function Eg(t,e,n){var l=e.pendingProps;switch(qc(e),e.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ht(e),null;case 1:return Ht(e),null;case 3:return n=e.stateNode,l=null,t!==null&&(l=t.memoizedState.cache),e.memoizedState.cache!==l&&(e.flags|=2048),un(Zt),Qt(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(t===null||t.child===null)&&(Wl(e)?rn(e):t===null||t.memoizedState.isDehydrated&&(e.flags&256)===0||(e.flags|=1024,kc())),Ht(e),null;case 26:var a=e.type,s=e.memoizedState;return t===null?(rn(e),s!==null?(Ht(e),Zo(e,s)):(Ht(e),zs(e,a,null,l,n))):s?s!==t.memoizedState?(rn(e),Ht(e),Zo(e,s)):(Ht(e),e.flags&=-16777217):(t=t.memoizedProps,t!==l&&rn(e),Ht(e),zs(e,a,t,l,n)),null;case 27:if(ul(e),n=ot.current,a=e.type,t!==null&&e.stateNode!=null)t.memoizedProps!==l&&rn(e);else{if(!l){if(e.stateNode===null)throw Error(f(166));return Ht(e),null}t=et.current,Wl(e)?x0(e):(t=Wd(a,l,n),e.stateNode=t,rn(e))}return Ht(e),null;case 5:if(ul(e),a=e.type,t!==null&&e.stateNode!=null)t.memoizedProps!==l&&rn(e);else{if(!l){if(e.stateNode===null)throw Error(f(166));return Ht(e),null}if(s=et.current,Wl(e))x0(e);else{var d=Uu(ot.current);switch(s){case 1:s=d.createElementNS("http://www.w3.org/2000/svg",a);break;case 2:s=d.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;default:switch(a){case"svg":s=d.createElementNS("http://www.w3.org/2000/svg",a);break;case"math":s=d.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;case"script":s=d.createElement("div"),s.innerHTML="<script><\/script>",s=s.removeChild(s.firstChild);break;case"select":s=typeof l.is=="string"?d.createElement("select",{is:l.is}):d.createElement("select"),l.multiple?s.multiple=!0:l.size&&(s.size=l.size);break;default:s=typeof l.is=="string"?d.createElement(a,{is:l.is}):d.createElement(a)}}s[te]=e,s[oe]=l;t:for(d=e.child;d!==null;){if(d.tag===5||d.tag===6)s.appendChild(d.stateNode);else if(d.tag!==4&&d.tag!==27&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===e)break t;for(;d.sibling===null;){if(d.return===null||d.return===e)break t;d=d.return}d.sibling.return=d.return,d=d.sibling}e.stateNode=s;t:switch(ae(s,a,l),a){case"button":case"input":case"select":case"textarea":l=!!l.autoFocus;break t;case"img":l=!0;break t;default:l=!1}l&&rn(e)}}return Ht(e),zs(e,e.type,t===null?null:t.memoizedProps,e.pendingProps,n),null;case 6:if(t&&e.stateNode!=null)t.memoizedProps!==l&&rn(e);else{if(typeof l!="string"&&e.stateNode===null)throw Error(f(166));if(t=ot.current,Wl(e)){if(t=e.stateNode,n=e.memoizedProps,l=null,a=ee,a!==null)switch(a.tag){case 27:case 5:l=a.memoizedProps}t[te]=e,t=!!(t.nodeValue===n||l!==null&&l.suppressHydrationWarning===!0||Ld(t.nodeValue,n)),t||jn(e,!0)}else t=Uu(t).createTextNode(l),t[te]=e,e.stateNode=t}return Ht(e),null;case 31:if(n=e.memoizedState,t===null||t.memoizedState!==null){if(l=Wl(e),n!==null){if(t===null){if(!l)throw Error(f(318));if(t=e.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(f(557));t[te]=e}else ml(),(e.flags&128)===0&&(e.memoizedState=null),e.flags|=4;Ht(e),t=!1}else n=kc(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=n),t=!0;if(!t)return e.flags&256?(Oe(e),e):(Oe(e),null);if((e.flags&128)!==0)throw Error(f(558))}return Ht(e),null;case 13:if(l=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(a=Wl(e),l!==null&&l.dehydrated!==null){if(t===null){if(!a)throw Error(f(318));if(a=e.memoizedState,a=a!==null?a.dehydrated:null,!a)throw Error(f(317));a[te]=e}else ml(),(e.flags&128)===0&&(e.memoizedState=null),e.flags|=4;Ht(e),a=!1}else a=kc(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=a),a=!0;if(!a)return e.flags&256?(Oe(e),e):(Oe(e),null)}return Oe(e),(e.flags&128)!==0?(e.lanes=n,e):(n=l!==null,t=t!==null&&t.memoizedState!==null,n&&(l=e.child,a=null,l.alternate!==null&&l.alternate.memoizedState!==null&&l.alternate.memoizedState.cachePool!==null&&(a=l.alternate.memoizedState.cachePool.pool),s=null,l.memoizedState!==null&&l.memoizedState.cachePool!==null&&(s=l.memoizedState.cachePool.pool),s!==a&&(l.flags|=2048)),n!==t&&n&&(e.child.flags|=8192),pu(e,e.updateQueue),Ht(e),null);case 4:return Qt(),t===null&&uf(e.stateNode.containerInfo),Ht(e),null;case 10:return un(e.type),Ht(e),null;case 19:if(L(Xt),l=e.memoizedState,l===null)return Ht(e),null;if(a=(e.flags&128)!==0,s=l.rendering,s===null)if(a)$a(l,!1);else{if(Gt!==0||t!==null&&(t.flags&128)!==0)for(t=e.child;t!==null;){if(s=cu(t),s!==null){for(e.flags|=128,$a(l,!1),t=s.updateQueue,e.updateQueue=t,pu(e,t),e.subtreeFlags=0,t=n,n=e.child;n!==null;)A0(n,t),n=n.sibling;return W(Xt,Xt.current&1|2),xt&&ln(e,l.treeForkCount),e.child}t=t.sibling}l.tail!==null&&pe()>Cu&&(e.flags|=128,a=!0,$a(l,!1),e.lanes=4194304)}else{if(!a)if(t=cu(s),t!==null){if(e.flags|=128,a=!0,t=t.updateQueue,e.updateQueue=t,pu(e,t),$a(l,!0),l.tail===null&&l.tailMode==="hidden"&&!s.alternate&&!xt)return Ht(e),null}else 2*pe()-l.renderingStartTime>Cu&&n!==536870912&&(e.flags|=128,a=!0,$a(l,!1),e.lanes=4194304);l.isBackwards?(s.sibling=e.child,e.child=s):(t=l.last,t!==null?t.sibling=s:e.child=s,l.last=s)}return l.tail!==null?(t=l.tail,l.rendering=t,l.tail=t.sibling,l.renderingStartTime=pe(),t.sibling=null,n=Xt.current,W(Xt,a?n&1|2:n&1),xt&&ln(e,l.treeForkCount),t):(Ht(e),null);case 22:case 23:return Oe(e),us(),l=e.memoizedState!==null,t!==null?t.memoizedState!==null!==l&&(e.flags|=8192):l&&(e.flags|=8192),l?(n&536870912)!==0&&(e.flags&128)===0&&(Ht(e),e.subtreeFlags&6&&(e.flags|=8192)):Ht(e),n=e.updateQueue,n!==null&&pu(e,n.retryQueue),n=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(n=t.memoizedState.cachePool.pool),l=null,e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(l=e.memoizedState.cachePool.pool),l!==n&&(e.flags|=2048),t!==null&&L(vl),null;case 24:return n=null,t!==null&&(n=t.memoizedState.cache),e.memoizedState.cache!==n&&(e.flags|=2048),un(Zt),Ht(e),null;case 25:return null;case 30:return null}throw Error(f(156,e.tag))}function pg(t,e){switch(qc(e),e.tag){case 1:return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return un(Zt),Qt(),t=e.flags,(t&65536)!==0&&(t&128)===0?(e.flags=t&-65537|128,e):null;case 26:case 27:case 5:return ul(e),null;case 31:if(e.memoizedState!==null){if(Oe(e),e.alternate===null)throw Error(f(340));ml()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 13:if(Oe(e),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(f(340));ml()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return L(Xt),null;case 4:return Qt(),null;case 10:return un(e.type),null;case 22:case 23:return Oe(e),us(),t!==null&&L(vl),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 24:return un(Zt),null;case 25:return null;default:return null}}function Io(t,e){switch(qc(e),e.tag){case 3:un(Zt),Qt();break;case 26:case 27:case 5:ul(e);break;case 4:Qt();break;case 31:e.memoizedState!==null&&Oe(e);break;case 13:Oe(e);break;case 19:L(Xt);break;case 10:un(e.type);break;case 22:case 23:Oe(e),us(),t!==null&&L(vl);break;case 24:un(Zt)}}function ti(t,e){try{var n=e.updateQueue,l=n!==null?n.lastEffect:null;if(l!==null){var a=l.next;n=a;do{if((n.tag&t)===t){l=void 0;var s=n.create,d=n.inst;l=s(),d.destroy=l}n=n.next}while(n!==a)}}catch(g){Dt(e,e.return,g)}}function Yn(t,e,n){try{var l=e.updateQueue,a=l!==null?l.lastEffect:null;if(a!==null){var s=a.next;l=s;do{if((l.tag&t)===t){var d=l.inst,g=d.destroy;if(g!==void 0){d.destroy=void 0,a=e;var S=n,U=g;try{U()}catch(Z){Dt(a,S,Z)}}}l=l.next}while(l!==s)}}catch(Z){Dt(e,e.return,Z)}}function qo(t){var e=t.updateQueue;if(e!==null){var n=t.stateNode;try{B0(e,n)}catch(l){Dt(t,t.return,l)}}}function Ko(t,e,n){n.props=bl(t.type,t.memoizedProps),n.state=t.memoizedState;try{n.componentWillUnmount()}catch(l){Dt(t,e,l)}}function ei(t,e){try{var n=t.ref;if(n!==null){switch(t.tag){case 26:case 27:case 5:var l=t.stateNode;break;case 30:l=t.stateNode;break;default:l=t.stateNode}typeof n=="function"?t.refCleanup=n(l):n.current=l}}catch(a){Dt(t,e,a)}}function We(t,e){var n=t.ref,l=t.refCleanup;if(n!==null)if(typeof l=="function")try{l()}catch(a){Dt(t,e,a)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof n=="function")try{n(null)}catch(a){Dt(t,e,a)}else n.current=null}function ko(t){var e=t.type,n=t.memoizedProps,l=t.stateNode;try{t:switch(e){case"button":case"input":case"select":case"textarea":n.autoFocus&&l.focus();break t;case"img":n.src?l.src=n.src:n.srcSet&&(l.srcset=n.srcSet)}}catch(a){Dt(t,t.return,a)}}function Ys(t,e,n){try{var l=t.stateNode;Vg(l,t.type,n,e),l[oe]=e}catch(a){Dt(t,t.return,a)}}function Jo(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&qn(t.type)||t.tag===4}function Ls(t){t:for(;;){for(;t.sibling===null;){if(t.return===null||Jo(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&qn(t.type)||t.flags&2||t.child===null||t.tag===4)continue t;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Gs(t,e,n){var l=t.tag;if(l===5||l===6)t=t.stateNode,e?(n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n).insertBefore(t,e):(e=n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n,e.appendChild(t),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=tn));else if(l!==4&&(l===27&&qn(t.type)&&(n=t.stateNode,e=null),t=t.child,t!==null))for(Gs(t,e,n),t=t.sibling;t!==null;)Gs(t,e,n),t=t.sibling}function xu(t,e,n){var l=t.tag;if(l===5||l===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(l!==4&&(l===27&&qn(t.type)&&(n=t.stateNode),t=t.child,t!==null))for(xu(t,e,n),t=t.sibling;t!==null;)xu(t,e,n),t=t.sibling}function Fo(t){var e=t.stateNode,n=t.memoizedProps;try{for(var l=t.type,a=e.attributes;a.length;)e.removeAttributeNode(a[0]);ae(e,l,n),e[te]=t,e[oe]=n}catch(s){Dt(t,t.return,s)}}var on=!1,Kt=!1,Xs=!1,Wo=typeof WeakSet=="function"?WeakSet:Set,Wt=null;function xg(t,e){if(t=t.containerInfo,ff=Vu,t=c0(t),Bc(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else t:{n=(n=t.ownerDocument)&&n.defaultView||window;var l=n.getSelection&&n.getSelection();if(l&&l.rangeCount!==0){n=l.anchorNode;var a=l.anchorOffset,s=l.focusNode;l=l.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break t}var d=0,g=-1,S=-1,U=0,Z=0,J=t,Q=null;e:for(;;){for(var G;J!==n||a!==0&&J.nodeType!==3||(g=d+a),J!==s||l!==0&&J.nodeType!==3||(S=d+l),J.nodeType===3&&(d+=J.nodeValue.length),(G=J.firstChild)!==null;)Q=J,J=G;for(;;){if(J===t)break e;if(Q===n&&++U===a&&(g=d),Q===s&&++Z===l&&(S=d),(G=J.nextSibling)!==null)break;J=Q,Q=J.parentNode}J=G}n=g===-1||S===-1?null:{start:g,end:S}}else n=null}n=n||{start:0,end:0}}else n=null;for(rf={focusedElem:t,selectionRange:n},Vu=!1,Wt=e;Wt!==null;)if(e=Wt,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,Wt=t;else for(;Wt!==null;){switch(e=Wt,s=e.alternate,t=e.flags,e.tag){case 0:if((t&4)!==0&&(t=e.updateQueue,t=t!==null?t.events:null,t!==null))for(n=0;n<t.length;n++)a=t[n],a.ref.impl=a.nextImpl;break;case 11:case 15:break;case 1:if((t&1024)!==0&&s!==null){t=void 0,n=e,a=s.memoizedProps,s=s.memoizedState,l=n.stateNode;try{var lt=bl(n.type,a);t=l.getSnapshotBeforeUpdate(lt,s),l.__reactInternalSnapshotBeforeUpdate=t}catch(ft){Dt(n,n.return,ft)}}break;case 3:if((t&1024)!==0){if(t=e.stateNode.containerInfo,n=t.nodeType,n===9)hf(t);else if(n===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":hf(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((t&1024)!==0)throw Error(f(163))}if(t=e.sibling,t!==null){t.return=e.return,Wt=t;break}Wt=e.return}}function _o(t,e,n){var l=n.flags;switch(n.tag){case 0:case 11:case 15:hn(t,n),l&4&&ti(5,n);break;case 1:if(hn(t,n),l&4)if(t=n.stateNode,e===null)try{t.componentDidMount()}catch(d){Dt(n,n.return,d)}else{var a=bl(n.type,e.memoizedProps);e=e.memoizedState;try{t.componentDidUpdate(a,e,t.__reactInternalSnapshotBeforeUpdate)}catch(d){Dt(n,n.return,d)}}l&64&&qo(n),l&512&&ei(n,n.return);break;case 3:if(hn(t,n),l&64&&(t=n.updateQueue,t!==null)){if(e=null,n.child!==null)switch(n.child.tag){case 27:case 5:e=n.child.stateNode;break;case 1:e=n.child.stateNode}try{B0(t,e)}catch(d){Dt(n,n.return,d)}}break;case 27:e===null&&l&4&&Fo(n);case 26:case 5:hn(t,n),e===null&&l&4&&ko(n),l&512&&ei(n,n.return);break;case 12:hn(t,n);break;case 31:hn(t,n),l&4&&td(t,n);break;case 13:hn(t,n),l&4&&ed(t,n),l&64&&(t=n.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(n=Mg.bind(null,n),Wg(t,n))));break;case 22:if(l=n.memoizedState!==null||on,!l){e=e!==null&&e.memoizedState!==null||Kt,a=on;var s=Kt;on=l,(Kt=e)&&!s?mn(t,n,(n.subtreeFlags&8772)!==0):hn(t,n),on=a,Kt=s}break;case 30:break;default:hn(t,n)}}function Po(t){var e=t.alternate;e!==null&&(t.alternate=null,Po(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&vc(e)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var zt=null,he=!1;function dn(t,e,n){for(n=n.child;n!==null;)$o(t,e,n),n=n.sibling}function $o(t,e,n){if(xe&&typeof xe.onCommitFiberUnmount=="function")try{xe.onCommitFiberUnmount(Ca,n)}catch{}switch(n.tag){case 26:Kt||We(n,e),dn(t,e,n),n.memoizedState?n.memoizedState.count--:n.stateNode&&(n=n.stateNode,n.parentNode.removeChild(n));break;case 27:Kt||We(n,e);var l=zt,a=he;qn(n.type)&&(zt=n.stateNode,he=!1),dn(t,e,n),ri(n.stateNode),zt=l,he=a;break;case 5:Kt||We(n,e);case 6:if(l=zt,a=he,zt=null,dn(t,e,n),zt=l,he=a,zt!==null)if(he)try{(zt.nodeType===9?zt.body:zt.nodeName==="HTML"?zt.ownerDocument.body:zt).removeChild(n.stateNode)}catch(s){Dt(n,e,s)}else try{zt.removeChild(n.stateNode)}catch(s){Dt(n,e,s)}break;case 18:zt!==null&&(he?(t=zt,qd(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,n.stateNode),va(t)):qd(zt,n.stateNode));break;case 4:l=zt,a=he,zt=n.stateNode.containerInfo,he=!0,dn(t,e,n),zt=l,he=a;break;case 0:case 11:case 14:case 15:Yn(2,n,e),Kt||Yn(4,n,e),dn(t,e,n);break;case 1:Kt||(We(n,e),l=n.stateNode,typeof l.componentWillUnmount=="function"&&Ko(n,e,l)),dn(t,e,n);break;case 21:dn(t,e,n);break;case 22:Kt=(l=Kt)||n.memoizedState!==null,dn(t,e,n),Kt=l;break;default:dn(t,e,n)}}function td(t,e){if(e.memoizedState===null&&(t=e.alternate,t!==null&&(t=t.memoizedState,t!==null))){t=t.dehydrated;try{va(t)}catch(n){Dt(e,e.return,n)}}}function ed(t,e){if(e.memoizedState===null&&(t=e.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{va(t)}catch(n){Dt(e,e.return,n)}}function bg(t){switch(t.tag){case 31:case 13:case 19:var e=t.stateNode;return e===null&&(e=t.stateNode=new Wo),e;case 22:return t=t.stateNode,e=t._retryCache,e===null&&(e=t._retryCache=new Wo),e;default:throw Error(f(435,t.tag))}}function bu(t,e){var n=bg(t);e.forEach(function(l){if(!n.has(l)){n.add(l);var a=jg.bind(null,t,l);l.then(a,a)}})}function me(t,e){var n=e.deletions;if(n!==null)for(var l=0;l<n.length;l++){var a=n[l],s=t,d=e,g=d;t:for(;g!==null;){switch(g.tag){case 27:if(qn(g.type)){zt=g.stateNode,he=!1;break t}break;case 5:zt=g.stateNode,he=!1;break t;case 3:case 4:zt=g.stateNode.containerInfo,he=!0;break t}g=g.return}if(zt===null)throw Error(f(160));$o(s,d,a),zt=null,he=!1,s=a.alternate,s!==null&&(s.return=null),a.return=null}if(e.subtreeFlags&13886)for(e=e.child;e!==null;)nd(e,t),e=e.sibling}var qe=null;function nd(t,e){var n=t.alternate,l=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:me(e,t),ge(t),l&4&&(Yn(3,t,t.return),ti(3,t),Yn(5,t,t.return));break;case 1:me(e,t),ge(t),l&512&&(Kt||n===null||We(n,n.return)),l&64&&on&&(t=t.updateQueue,t!==null&&(l=t.callbacks,l!==null&&(n=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=n===null?l:n.concat(l))));break;case 26:var a=qe;if(me(e,t),ge(t),l&512&&(Kt||n===null||We(n,n.return)),l&4){var s=n!==null?n.memoizedState:null;if(l=t.memoizedState,n===null)if(l===null)if(t.stateNode===null){t:{l=t.type,n=t.memoizedProps,a=a.ownerDocument||a;e:switch(l){case"title":s=a.getElementsByTagName("title")[0],(!s||s[Ra]||s[te]||s.namespaceURI==="http://www.w3.org/2000/svg"||s.hasAttribute("itemprop"))&&(s=a.createElement(l),a.head.insertBefore(s,a.querySelector("head > title"))),ae(s,l,n),s[te]=t,Ft(s),l=s;break t;case"link":var d=n1("link","href",a).get(l+(n.href||""));if(d){for(var g=0;g<d.length;g++)if(s=d[g],s.getAttribute("href")===(n.href==null||n.href===""?null:n.href)&&s.getAttribute("rel")===(n.rel==null?null:n.rel)&&s.getAttribute("title")===(n.title==null?null:n.title)&&s.getAttribute("crossorigin")===(n.crossOrigin==null?null:n.crossOrigin)){d.splice(g,1);break e}}s=a.createElement(l),ae(s,l,n),a.head.appendChild(s);break;case"meta":if(d=n1("meta","content",a).get(l+(n.content||""))){for(g=0;g<d.length;g++)if(s=d[g],s.getAttribute("content")===(n.content==null?null:""+n.content)&&s.getAttribute("name")===(n.name==null?null:n.name)&&s.getAttribute("property")===(n.property==null?null:n.property)&&s.getAttribute("http-equiv")===(n.httpEquiv==null?null:n.httpEquiv)&&s.getAttribute("charset")===(n.charSet==null?null:n.charSet)){d.splice(g,1);break e}}s=a.createElement(l),ae(s,l,n),a.head.appendChild(s);break;default:throw Error(f(468,l))}s[te]=t,Ft(s),l=s}t.stateNode=l}else l1(a,t.type,t.stateNode);else t.stateNode=e1(a,l,t.memoizedProps);else s!==l?(s===null?n.stateNode!==null&&(n=n.stateNode,n.parentNode.removeChild(n)):s.count--,l===null?l1(a,t.type,t.stateNode):e1(a,l,t.memoizedProps)):l===null&&t.stateNode!==null&&Ys(t,t.memoizedProps,n.memoizedProps)}break;case 27:me(e,t),ge(t),l&512&&(Kt||n===null||We(n,n.return)),n!==null&&l&4&&Ys(t,t.memoizedProps,n.memoizedProps);break;case 5:if(me(e,t),ge(t),l&512&&(Kt||n===null||We(n,n.return)),t.flags&32){a=t.stateNode;try{Gl(a,"")}catch(lt){Dt(t,t.return,lt)}}l&4&&t.stateNode!=null&&(a=t.memoizedProps,Ys(t,a,n!==null?n.memoizedProps:a)),l&1024&&(Xs=!0);break;case 6:if(me(e,t),ge(t),l&4){if(t.stateNode===null)throw Error(f(162));l=t.memoizedProps,n=t.stateNode;try{n.nodeValue=l}catch(lt){Dt(t,t.return,lt)}}break;case 3:if(Yu=null,a=qe,qe=Qu(e.containerInfo),me(e,t),qe=a,ge(t),l&4&&n!==null&&n.memoizedState.isDehydrated)try{va(e.containerInfo)}catch(lt){Dt(t,t.return,lt)}Xs&&(Xs=!1,ld(t));break;case 4:l=qe,qe=Qu(t.stateNode.containerInfo),me(e,t),ge(t),qe=l;break;case 12:me(e,t),ge(t);break;case 31:me(e,t),ge(t),l&4&&(l=t.updateQueue,l!==null&&(t.updateQueue=null,bu(t,l)));break;case 13:me(e,t),ge(t),t.child.flags&8192&&t.memoizedState!==null!=(n!==null&&n.memoizedState!==null)&&(Tu=pe()),l&4&&(l=t.updateQueue,l!==null&&(t.updateQueue=null,bu(t,l)));break;case 22:a=t.memoizedState!==null;var S=n!==null&&n.memoizedState!==null,U=on,Z=Kt;if(on=U||a,Kt=Z||S,me(e,t),Kt=Z,on=U,ge(t),l&8192)t:for(e=t.stateNode,e._visibility=a?e._visibility&-2:e._visibility|1,a&&(n===null||S||on||Kt||Sl(t)),n=null,e=t;;){if(e.tag===5||e.tag===26){if(n===null){S=n=e;try{if(s=S.stateNode,a)d=s.style,typeof d.setProperty=="function"?d.setProperty("display","none","important"):d.display="none";else{g=S.stateNode;var J=S.memoizedProps.style,Q=J!=null&&J.hasOwnProperty("display")?J.display:null;g.style.display=Q==null||typeof Q=="boolean"?"":(""+Q).trim()}}catch(lt){Dt(S,S.return,lt)}}}else if(e.tag===6){if(n===null){S=e;try{S.stateNode.nodeValue=a?"":S.memoizedProps}catch(lt){Dt(S,S.return,lt)}}}else if(e.tag===18){if(n===null){S=e;try{var G=S.stateNode;a?Kd(G,!0):Kd(S.stateNode,!1)}catch(lt){Dt(S,S.return,lt)}}}else if((e.tag!==22&&e.tag!==23||e.memoizedState===null||e===t)&&e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break t;for(;e.sibling===null;){if(e.return===null||e.return===t)break t;n===e&&(n=null),e=e.return}n===e&&(n=null),e.sibling.return=e.return,e=e.sibling}l&4&&(l=t.updateQueue,l!==null&&(n=l.retryQueue,n!==null&&(l.retryQueue=null,bu(t,n))));break;case 19:me(e,t),ge(t),l&4&&(l=t.updateQueue,l!==null&&(t.updateQueue=null,bu(t,l)));break;case 30:break;case 21:break;default:me(e,t),ge(t)}}function ge(t){var e=t.flags;if(e&2){try{for(var n,l=t.return;l!==null;){if(Jo(l)){n=l;break}l=l.return}if(n==null)throw Error(f(160));switch(n.tag){case 27:var a=n.stateNode,s=Ls(t);xu(t,s,a);break;case 5:var d=n.stateNode;n.flags&32&&(Gl(d,""),n.flags&=-33);var g=Ls(t);xu(t,g,d);break;case 3:case 4:var S=n.stateNode.containerInfo,U=Ls(t);Gs(t,U,S);break;default:throw Error(f(161))}}catch(Z){Dt(t,t.return,Z)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function ld(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var e=t;ld(e),e.tag===5&&e.flags&1024&&e.stateNode.reset(),t=t.sibling}}function hn(t,e){if(e.subtreeFlags&8772)for(e=e.child;e!==null;)_o(t,e.alternate,e),e=e.sibling}function Sl(t){for(t=t.child;t!==null;){var e=t;switch(e.tag){case 0:case 11:case 14:case 15:Yn(4,e,e.return),Sl(e);break;case 1:We(e,e.return);var n=e.stateNode;typeof n.componentWillUnmount=="function"&&Ko(e,e.return,n),Sl(e);break;case 27:ri(e.stateNode);case 26:case 5:We(e,e.return),Sl(e);break;case 22:e.memoizedState===null&&Sl(e);break;case 30:Sl(e);break;default:Sl(e)}t=t.sibling}}function mn(t,e,n){for(n=n&&(e.subtreeFlags&8772)!==0,e=e.child;e!==null;){var l=e.alternate,a=t,s=e,d=s.flags;switch(s.tag){case 0:case 11:case 15:mn(a,s,n),ti(4,s);break;case 1:if(mn(a,s,n),l=s,a=l.stateNode,typeof a.componentDidMount=="function")try{a.componentDidMount()}catch(U){Dt(l,l.return,U)}if(l=s,a=l.updateQueue,a!==null){var g=l.stateNode;try{var S=a.shared.hiddenCallbacks;if(S!==null)for(a.shared.hiddenCallbacks=null,a=0;a<S.length;a++)H0(S[a],g)}catch(U){Dt(l,l.return,U)}}n&&d&64&&qo(s),ei(s,s.return);break;case 27:Fo(s);case 26:case 5:mn(a,s,n),n&&l===null&&d&4&&ko(s),ei(s,s.return);break;case 12:mn(a,s,n);break;case 31:mn(a,s,n),n&&d&4&&td(a,s);break;case 13:mn(a,s,n),n&&d&4&&ed(a,s);break;case 22:s.memoizedState===null&&mn(a,s,n),ei(s,s.return);break;case 30:break;default:mn(a,s,n)}e=e.sibling}}function Vs(t,e){var n=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(n=t.memoizedState.cachePool.pool),t=null,e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(t=e.memoizedState.cachePool.pool),t!==n&&(t!=null&&t.refCount++,n!=null&&Xa(n))}function Zs(t,e){t=null,e.alternate!==null&&(t=e.alternate.memoizedState.cache),e=e.memoizedState.cache,e!==t&&(e.refCount++,t!=null&&Xa(t))}function Ke(t,e,n,l){if(e.subtreeFlags&10256)for(e=e.child;e!==null;)ad(t,e,n,l),e=e.sibling}function ad(t,e,n,l){var a=e.flags;switch(e.tag){case 0:case 11:case 15:Ke(t,e,n,l),a&2048&&ti(9,e);break;case 1:Ke(t,e,n,l);break;case 3:Ke(t,e,n,l),a&2048&&(t=null,e.alternate!==null&&(t=e.alternate.memoizedState.cache),e=e.memoizedState.cache,e!==t&&(e.refCount++,t!=null&&Xa(t)));break;case 12:if(a&2048){Ke(t,e,n,l),t=e.stateNode;try{var s=e.memoizedProps,d=s.id,g=s.onPostCommit;typeof g=="function"&&g(d,e.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(S){Dt(e,e.return,S)}}else Ke(t,e,n,l);break;case 31:Ke(t,e,n,l);break;case 13:Ke(t,e,n,l);break;case 23:break;case 22:s=e.stateNode,d=e.alternate,e.memoizedState!==null?s._visibility&2?Ke(t,e,n,l):ni(t,e):s._visibility&2?Ke(t,e,n,l):(s._visibility|=2,ua(t,e,n,l,(e.subtreeFlags&10256)!==0||!1)),a&2048&&Vs(d,e);break;case 24:Ke(t,e,n,l),a&2048&&Zs(e.alternate,e);break;default:Ke(t,e,n,l)}}function ua(t,e,n,l,a){for(a=a&&((e.subtreeFlags&10256)!==0||!1),e=e.child;e!==null;){var s=t,d=e,g=n,S=l,U=d.flags;switch(d.tag){case 0:case 11:case 15:ua(s,d,g,S,a),ti(8,d);break;case 23:break;case 22:var Z=d.stateNode;d.memoizedState!==null?Z._visibility&2?ua(s,d,g,S,a):ni(s,d):(Z._visibility|=2,ua(s,d,g,S,a)),a&&U&2048&&Vs(d.alternate,d);break;case 24:ua(s,d,g,S,a),a&&U&2048&&Zs(d.alternate,d);break;default:ua(s,d,g,S,a)}e=e.sibling}}function ni(t,e){if(e.subtreeFlags&10256)for(e=e.child;e!==null;){var n=t,l=e,a=l.flags;switch(l.tag){case 22:ni(n,l),a&2048&&Vs(l.alternate,l);break;case 24:ni(n,l),a&2048&&Zs(l.alternate,l);break;default:ni(n,l)}e=e.sibling}}var li=8192;function ca(t,e,n){if(t.subtreeFlags&li)for(t=t.child;t!==null;)id(t,e,n),t=t.sibling}function id(t,e,n){switch(t.tag){case 26:ca(t,e,n),t.flags&li&&t.memoizedState!==null&&sA(n,qe,t.memoizedState,t.memoizedProps);break;case 5:ca(t,e,n);break;case 3:case 4:var l=qe;qe=Qu(t.stateNode.containerInfo),ca(t,e,n),qe=l;break;case 22:t.memoizedState===null&&(l=t.alternate,l!==null&&l.memoizedState!==null?(l=li,li=16777216,ca(t,e,n),li=l):ca(t,e,n));break;default:ca(t,e,n)}}function ud(t){var e=t.alternate;if(e!==null&&(t=e.child,t!==null)){e.child=null;do e=t.sibling,t.sibling=null,t=e;while(t!==null)}}function ai(t){var e=t.deletions;if((t.flags&16)!==0){if(e!==null)for(var n=0;n<e.length;n++){var l=e[n];Wt=l,sd(l,t)}ud(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)cd(t),t=t.sibling}function cd(t){switch(t.tag){case 0:case 11:case 15:ai(t),t.flags&2048&&Yn(9,t,t.return);break;case 3:ai(t);break;case 12:ai(t);break;case 22:var e=t.stateNode;t.memoizedState!==null&&e._visibility&2&&(t.return===null||t.return.tag!==13)?(e._visibility&=-3,Su(t)):ai(t);break;default:ai(t)}}function Su(t){var e=t.deletions;if((t.flags&16)!==0){if(e!==null)for(var n=0;n<e.length;n++){var l=e[n];Wt=l,sd(l,t)}ud(t)}for(t=t.child;t!==null;){switch(e=t,e.tag){case 0:case 11:case 15:Yn(8,e,e.return),Su(e);break;case 22:n=e.stateNode,n._visibility&2&&(n._visibility&=-3,Su(e));break;default:Su(e)}t=t.sibling}}function sd(t,e){for(;Wt!==null;){var n=Wt;switch(n.tag){case 0:case 11:case 15:Yn(8,n,e);break;case 23:case 22:if(n.memoizedState!==null&&n.memoizedState.cachePool!==null){var l=n.memoizedState.cachePool.pool;l!=null&&l.refCount++}break;case 24:Xa(n.memoizedState.cache)}if(l=n.child,l!==null)l.return=n,Wt=l;else t:for(n=t;Wt!==null;){l=Wt;var a=l.sibling,s=l.return;if(Po(l),l===n){Wt=null;break t}if(a!==null){a.return=s,Wt=a;break t}Wt=s}}}var Sg={getCacheForType:function(t){var e=ne(Zt),n=e.data.get(t);return n===void 0&&(n=t(),e.data.set(t,n)),n},cacheSignal:function(){return ne(Zt).controller.signal}},Tg=typeof WeakMap=="function"?WeakMap:Map,Ct=0,jt=null,vt=null,Et=0,Ot=0,De=null,Ln=!1,sa=!1,Is=!1,gn=0,Gt=0,Gn=0,Tl=0,qs=0,Re=0,fa=0,ii=null,Ae=null,Ks=!1,Tu=0,fd=0,Cu=1/0,Ou=null,Xn=null,kt=0,Vn=null,ra=null,An=0,ks=0,Js=null,rd=null,ui=0,Fs=null;function we(){return(Ct&2)!==0&&Et!==0?Et&-Et:M.T!==null?ef():Cr()}function od(){if(Re===0)if((Et&536870912)===0||xt){var t=Bi;Bi<<=1,(Bi&3932160)===0&&(Bi=262144),Re=t}else Re=536870912;return t=Ce.current,t!==null&&(t.flags|=32),Re}function ve(t,e,n){(t===jt&&(Ot===2||Ot===9)||t.cancelPendingCommit!==null)&&(oa(t,0),Zn(t,Et,Re,!1)),Da(t,n),((Ct&2)===0||t!==jt)&&(t===jt&&((Ct&2)===0&&(Tl|=n),Gt===4&&Zn(t,Et,Re,!1)),_e(t))}function dd(t,e,n){if((Ct&6)!==0)throw Error(f(327));var l=!n&&(e&127)===0&&(e&t.expiredLanes)===0||Oa(t,e),a=l?Dg(t,e):_s(t,e,!0),s=l;do{if(a===0){sa&&!l&&Zn(t,e,0,!1);break}else{if(n=t.current.alternate,s&&!Cg(n)){a=_s(t,e,!1),s=!1;continue}if(a===2){if(s=e,t.errorRecoveryDisabledLanes&s)var d=0;else d=t.pendingLanes&-536870913,d=d!==0?d:d&536870912?536870912:0;if(d!==0){e=d;t:{var g=t;a=ii;var S=g.current.memoizedState.isDehydrated;if(S&&(oa(g,d).flags|=256),d=_s(g,d,!1),d!==2){if(Is&&!S){g.errorRecoveryDisabledLanes|=s,Tl|=s,a=4;break t}s=Ae,Ae=a,s!==null&&(Ae===null?Ae=s:Ae.push.apply(Ae,s))}a=d}if(s=!1,a!==2)continue}}if(a===1){oa(t,0),Zn(t,e,0,!0);break}t:{switch(l=t,s=a,s){case 0:case 1:throw Error(f(345));case 4:if((e&4194048)!==e)break;case 6:Zn(l,e,Re,!Ln);break t;case 2:Ae=null;break;case 3:case 5:break;default:throw Error(f(329))}if((e&62914560)===e&&(a=Tu+300-pe(),10<a)){if(Zn(l,e,Re,!Ln),Qi(l,0,!0)!==0)break t;An=e,l.timeoutHandle=Zd(hd.bind(null,l,n,Ae,Ou,Ks,e,Re,Tl,fa,Ln,s,"Throttled",-0,0),a);break t}hd(l,n,Ae,Ou,Ks,e,Re,Tl,fa,Ln,s,null,-0,0)}}break}while(!0);_e(t)}function hd(t,e,n,l,a,s,d,g,S,U,Z,J,Q,G){if(t.timeoutHandle=-1,J=e.subtreeFlags,J&8192||(J&16785408)===16785408){J={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:tn},id(e,s,J);var lt=(s&62914560)===s?Tu-pe():(s&4194048)===s?fd-pe():0;if(lt=fA(J,lt),lt!==null){An=s,t.cancelPendingCommit=lt(xd.bind(null,t,e,s,n,l,a,d,g,S,Z,J,null,Q,G)),Zn(t,s,d,!U);return}}xd(t,e,s,n,l,a,d,g,S)}function Cg(t){for(var e=t;;){var n=e.tag;if((n===0||n===11||n===15)&&e.flags&16384&&(n=e.updateQueue,n!==null&&(n=n.stores,n!==null)))for(var l=0;l<n.length;l++){var a=n[l],s=a.getSnapshot;a=a.value;try{if(!Se(s(),a))return!1}catch{return!1}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Zn(t,e,n,l){e&=~qs,e&=~Tl,t.suspendedLanes|=e,t.pingedLanes&=~e,l&&(t.warmLanes|=e),l=t.expirationTimes;for(var a=e;0<a;){var s=31-be(a),d=1<<s;l[s]=-1,a&=~d}n!==0&&br(t,n,e)}function Du(){return(Ct&6)===0?(ci(0),!1):!0}function Ws(){if(vt!==null){if(Ot===0)var t=vt.return;else t=vt,an=gl=null,ds(t),ea=null,Za=0,t=vt;for(;t!==null;)Io(t.alternate,t),t=t.return;vt=null}}function oa(t,e){var n=t.timeoutHandle;n!==-1&&(t.timeoutHandle=-1,qg(n)),n=t.cancelPendingCommit,n!==null&&(t.cancelPendingCommit=null,n()),An=0,Ws(),jt=t,vt=n=nn(t.current,null),Et=e,Ot=0,De=null,Ln=!1,sa=Oa(t,e),Is=!1,fa=Re=qs=Tl=Gn=Gt=0,Ae=ii=null,Ks=!1,(e&8)!==0&&(e|=e&32);var l=t.entangledLanes;if(l!==0)for(t=t.entanglements,l&=e;0<l;){var a=31-be(l),s=1<<a;e|=t[a],l&=~s}return gn=e,Ji(),n}function md(t,e){mt=null,M.H=_a,e===ta||e===nu?(e=w0(),Ot=3):e===ts?(e=w0(),Ot=4):Ot=e===Rs?8:e!==null&&typeof e=="object"&&typeof e.then=="function"?6:1,De=e,vt===null&&(Gt=1,Au(t,Be(e,t.current)))}function gd(){var t=Ce.current;return t===null?!0:(Et&4194048)===Et?Ye===null:(Et&62914560)===Et||(Et&536870912)!==0?t===Ye:!1}function Ad(){var t=M.H;return M.H=_a,t===null?_a:t}function vd(){var t=M.A;return M.A=Sg,t}function Ru(){Gt=4,Ln||(Et&4194048)!==Et&&Ce.current!==null||(sa=!0),(Gn&134217727)===0&&(Tl&134217727)===0||jt===null||Zn(jt,Et,Re,!1)}function _s(t,e,n){var l=Ct;Ct|=2;var a=Ad(),s=vd();(jt!==t||Et!==e)&&(Ou=null,oa(t,e)),e=!1;var d=Gt;t:do try{if(Ot!==0&&vt!==null){var g=vt,S=De;switch(Ot){case 8:Ws(),d=6;break t;case 3:case 2:case 9:case 6:Ce.current===null&&(e=!0);var U=Ot;if(Ot=0,De=null,da(t,g,S,U),n&&sa){d=0;break t}break;default:U=Ot,Ot=0,De=null,da(t,g,S,U)}}Og(),d=Gt;break}catch(Z){md(t,Z)}while(!0);return e&&t.shellSuspendCounter++,an=gl=null,Ct=l,M.H=a,M.A=s,vt===null&&(jt=null,Et=0,Ji()),d}function Og(){for(;vt!==null;)yd(vt)}function Dg(t,e){var n=Ct;Ct|=2;var l=Ad(),a=vd();jt!==t||Et!==e?(Ou=null,Cu=pe()+500,oa(t,e)):sa=Oa(t,e);t:do try{if(Ot!==0&&vt!==null){e=vt;var s=De;e:switch(Ot){case 1:Ot=0,De=null,da(t,e,s,1);break;case 2:case 9:if(D0(s)){Ot=0,De=null,Ed(e);break}e=function(){Ot!==2&&Ot!==9||jt!==t||(Ot=7),_e(t)},s.then(e,e);break t;case 3:Ot=7;break t;case 4:Ot=5;break t;case 7:D0(s)?(Ot=0,De=null,Ed(e)):(Ot=0,De=null,da(t,e,s,7));break;case 5:var d=null;switch(vt.tag){case 26:d=vt.memoizedState;case 5:case 27:var g=vt;if(d?a1(d):g.stateNode.complete){Ot=0,De=null;var S=g.sibling;if(S!==null)vt=S;else{var U=g.return;U!==null?(vt=U,wu(U)):vt=null}break e}}Ot=0,De=null,da(t,e,s,5);break;case 6:Ot=0,De=null,da(t,e,s,6);break;case 8:Ws(),Gt=6;break t;default:throw Error(f(462))}}Rg();break}catch(Z){md(t,Z)}while(!0);return an=gl=null,M.H=l,M.A=a,Ct=n,vt!==null?0:(jt=null,Et=0,Ji(),Gt)}function Rg(){for(;vt!==null&&!_h();)yd(vt)}function yd(t){var e=Vo(t.alternate,t,gn);t.memoizedProps=t.pendingProps,e===null?wu(t):vt=e}function Ed(t){var e=t,n=e.alternate;switch(e.tag){case 15:case 0:e=Qo(n,e,e.pendingProps,e.type,void 0,Et);break;case 11:e=Qo(n,e,e.pendingProps,e.type.render,e.ref,Et);break;case 5:ds(e);default:Io(n,e),e=vt=A0(e,gn),e=Vo(n,e,gn)}t.memoizedProps=t.pendingProps,e===null?wu(t):vt=e}function da(t,e,n,l){an=gl=null,ds(e),ea=null,Za=0;var a=e.return;try{if(Ag(t,a,e,n,Et)){Gt=1,Au(t,Be(n,t.current)),vt=null;return}}catch(s){if(a!==null)throw vt=a,s;Gt=1,Au(t,Be(n,t.current)),vt=null;return}e.flags&32768?(xt||l===1?t=!0:sa||(Et&536870912)!==0?t=!1:(Ln=t=!0,(l===2||l===9||l===3||l===6)&&(l=Ce.current,l!==null&&l.tag===13&&(l.flags|=16384))),pd(e,t)):wu(e)}function wu(t){var e=t;do{if((e.flags&32768)!==0){pd(e,Ln);return}t=e.return;var n=Eg(e.alternate,e,gn);if(n!==null){vt=n;return}if(e=e.sibling,e!==null){vt=e;return}vt=e=t}while(e!==null);Gt===0&&(Gt=5)}function pd(t,e){do{var n=pg(t.alternate,t);if(n!==null){n.flags&=32767,vt=n;return}if(n=t.return,n!==null&&(n.flags|=32768,n.subtreeFlags=0,n.deletions=null),!e&&(t=t.sibling,t!==null)){vt=t;return}vt=t=n}while(t!==null);Gt=6,vt=null}function xd(t,e,n,l,a,s,d,g,S){t.cancelPendingCommit=null;do Mu();while(kt!==0);if((Ct&6)!==0)throw Error(f(327));if(e!==null){if(e===t.current)throw Error(f(177));if(s=e.lanes|e.childLanes,s|=Lc,cm(t,n,s,d,g,S),t===jt&&(vt=jt=null,Et=0),ra=e,Vn=t,An=n,ks=s,Js=a,rd=l,(e.subtreeFlags&10256)!==0||(e.flags&10256)!==0?(t.callbackNode=null,t.callbackPriority=0,Ng(Ni,function(){return Od(),null})):(t.callbackNode=null,t.callbackPriority=0),l=(e.flags&13878)!==0,(e.subtreeFlags&13878)!==0||l){l=M.T,M.T=null,a=_.p,_.p=2,d=Ct,Ct|=4;try{xg(t,e,n)}finally{Ct=d,_.p=a,M.T=l}}kt=1,bd(),Sd(),Td()}}function bd(){if(kt===1){kt=0;var t=Vn,e=ra,n=(e.flags&13878)!==0;if((e.subtreeFlags&13878)!==0||n){n=M.T,M.T=null;var l=_.p;_.p=2;var a=Ct;Ct|=4;try{nd(e,t);var s=rf,d=c0(t.containerInfo),g=s.focusedElem,S=s.selectionRange;if(d!==g&&g&&g.ownerDocument&&u0(g.ownerDocument.documentElement,g)){if(S!==null&&Bc(g)){var U=S.start,Z=S.end;if(Z===void 0&&(Z=U),"selectionStart"in g)g.selectionStart=U,g.selectionEnd=Math.min(Z,g.value.length);else{var J=g.ownerDocument||document,Q=J&&J.defaultView||window;if(Q.getSelection){var G=Q.getSelection(),lt=g.textContent.length,ft=Math.min(S.start,lt),Mt=S.end===void 0?ft:Math.min(S.end,lt);!G.extend&&ft>Mt&&(d=Mt,Mt=ft,ft=d);var w=i0(g,ft),O=i0(g,Mt);if(w&&O&&(G.rangeCount!==1||G.anchorNode!==w.node||G.anchorOffset!==w.offset||G.focusNode!==O.node||G.focusOffset!==O.offset)){var B=J.createRange();B.setStart(w.node,w.offset),G.removeAllRanges(),ft>Mt?(G.addRange(B),G.extend(O.node,O.offset)):(B.setEnd(O.node,O.offset),G.addRange(B))}}}}for(J=[],G=g;G=G.parentNode;)G.nodeType===1&&J.push({element:G,left:G.scrollLeft,top:G.scrollTop});for(typeof g.focus=="function"&&g.focus(),g=0;g<J.length;g++){var K=J[g];K.element.scrollLeft=K.left,K.element.scrollTop=K.top}}Vu=!!ff,rf=ff=null}finally{Ct=a,_.p=l,M.T=n}}t.current=e,kt=2}}function Sd(){if(kt===2){kt=0;var t=Vn,e=ra,n=(e.flags&8772)!==0;if((e.subtreeFlags&8772)!==0||n){n=M.T,M.T=null;var l=_.p;_.p=2;var a=Ct;Ct|=4;try{_o(t,e.alternate,e)}finally{Ct=a,_.p=l,M.T=n}}kt=3}}function Td(){if(kt===4||kt===3){kt=0,Ph();var t=Vn,e=ra,n=An,l=rd;(e.subtreeFlags&10256)!==0||(e.flags&10256)!==0?kt=5:(kt=0,ra=Vn=null,Cd(t,t.pendingLanes));var a=t.pendingLanes;if(a===0&&(Xn=null),gc(n),e=e.stateNode,xe&&typeof xe.onCommitFiberRoot=="function")try{xe.onCommitFiberRoot(Ca,e,void 0,(e.current.flags&128)===128)}catch{}if(l!==null){e=M.T,a=_.p,_.p=2,M.T=null;try{for(var s=t.onRecoverableError,d=0;d<l.length;d++){var g=l[d];s(g.value,{componentStack:g.stack})}}finally{M.T=e,_.p=a}}(An&3)!==0&&Mu(),_e(t),a=t.pendingLanes,(n&261930)!==0&&(a&42)!==0?t===Fs?ui++:(ui=0,Fs=t):ui=0,ci(0)}}function Cd(t,e){(t.pooledCacheLanes&=e)===0&&(e=t.pooledCache,e!=null&&(t.pooledCache=null,Xa(e)))}function Mu(){return bd(),Sd(),Td(),Od()}function Od(){if(kt!==5)return!1;var t=Vn,e=ks;ks=0;var n=gc(An),l=M.T,a=_.p;try{_.p=32>n?32:n,M.T=null,n=Js,Js=null;var s=Vn,d=An;if(kt=0,ra=Vn=null,An=0,(Ct&6)!==0)throw Error(f(331));var g=Ct;if(Ct|=4,cd(s.current),ad(s,s.current,d,n),Ct=g,ci(0,!1),xe&&typeof xe.onPostCommitFiberRoot=="function")try{xe.onPostCommitFiberRoot(Ca,s)}catch{}return!0}finally{_.p=a,M.T=l,Cd(t,e)}}function Dd(t,e,n){e=Be(n,e),e=Ds(t.stateNode,e,2),t=Un(t,e,2),t!==null&&(Da(t,2),_e(t))}function Dt(t,e,n){if(t.tag===3)Dd(t,t,n);else for(;e!==null;){if(e.tag===3){Dd(e,t,n);break}else if(e.tag===1){var l=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&(Xn===null||!Xn.has(l))){t=Be(n,t),n=Ro(2),l=Un(e,n,2),l!==null&&(wo(n,l,e,t),Da(l,2),_e(l));break}}e=e.return}}function Ps(t,e,n){var l=t.pingCache;if(l===null){l=t.pingCache=new Tg;var a=new Set;l.set(e,a)}else a=l.get(e),a===void 0&&(a=new Set,l.set(e,a));a.has(n)||(Is=!0,a.add(n),t=wg.bind(null,t,e,n),e.then(t,t))}function wg(t,e,n){var l=t.pingCache;l!==null&&l.delete(e),t.pingedLanes|=t.suspendedLanes&n,t.warmLanes&=~n,jt===t&&(Et&n)===n&&(Gt===4||Gt===3&&(Et&62914560)===Et&&300>pe()-Tu?(Ct&2)===0&&oa(t,0):qs|=n,fa===Et&&(fa=0)),_e(t)}function Rd(t,e){e===0&&(e=xr()),t=dl(t,e),t!==null&&(Da(t,e),_e(t))}function Mg(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),Rd(t,n)}function jg(t,e){var n=0;switch(t.tag){case 31:case 13:var l=t.stateNode,a=t.memoizedState;a!==null&&(n=a.retryLane);break;case 19:l=t.stateNode;break;case 22:l=t.stateNode._retryCache;break;default:throw Error(f(314))}l!==null&&l.delete(e),Rd(t,n)}function Ng(t,e){return oc(t,e)}var ju=null,ha=null,$s=!1,Nu=!1,tf=!1,In=0;function _e(t){t!==ha&&t.next===null&&(ha===null?ju=ha=t:ha=ha.next=t),Nu=!0,$s||($s=!0,Bg())}function ci(t,e){if(!tf&&Nu){tf=!0;do for(var n=!1,l=ju;l!==null;){if(t!==0){var a=l.pendingLanes;if(a===0)var s=0;else{var d=l.suspendedLanes,g=l.pingedLanes;s=(1<<31-be(42|t)+1)-1,s&=a&~(d&~g),s=s&201326741?s&201326741|1:s?s|2:0}s!==0&&(n=!0,Nd(l,s))}else s=Et,s=Qi(l,l===jt?s:0,l.cancelPendingCommit!==null||l.timeoutHandle!==-1),(s&3)===0||Oa(l,s)||(n=!0,Nd(l,s));l=l.next}while(n);tf=!1}}function Hg(){wd()}function wd(){Nu=$s=!1;var t=0;In!==0&&Ig()&&(t=In);for(var e=pe(),n=null,l=ju;l!==null;){var a=l.next,s=Md(l,e);s===0?(l.next=null,n===null?ju=a:n.next=a,a===null&&(ha=n)):(n=l,(t!==0||(s&3)!==0)&&(Nu=!0)),l=a}kt!==0&&kt!==5||ci(t),In!==0&&(In=0)}function Md(t,e){for(var n=t.suspendedLanes,l=t.pingedLanes,a=t.expirationTimes,s=t.pendingLanes&-62914561;0<s;){var d=31-be(s),g=1<<d,S=a[d];S===-1?((g&n)===0||(g&l)!==0)&&(a[d]=um(g,e)):S<=e&&(t.expiredLanes|=g),s&=~g}if(e=jt,n=Et,n=Qi(t,t===e?n:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),l=t.callbackNode,n===0||t===e&&(Ot===2||Ot===9)||t.cancelPendingCommit!==null)return l!==null&&l!==null&&dc(l),t.callbackNode=null,t.callbackPriority=0;if((n&3)===0||Oa(t,n)){if(e=n&-n,e===t.callbackPriority)return e;switch(l!==null&&dc(l),gc(n)){case 2:case 8:n=Er;break;case 32:n=Ni;break;case 268435456:n=pr;break;default:n=Ni}return l=jd.bind(null,t),n=oc(n,l),t.callbackPriority=e,t.callbackNode=n,e}return l!==null&&l!==null&&dc(l),t.callbackPriority=2,t.callbackNode=null,2}function jd(t,e){if(kt!==0&&kt!==5)return t.callbackNode=null,t.callbackPriority=0,null;var n=t.callbackNode;if(Mu()&&t.callbackNode!==n)return null;var l=Et;return l=Qi(t,t===jt?l:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),l===0?null:(dd(t,l,e),Md(t,pe()),t.callbackNode!=null&&t.callbackNode===n?jd.bind(null,t):null)}function Nd(t,e){if(Mu())return null;dd(t,e,!0)}function Bg(){Kg(function(){(Ct&6)!==0?oc(yr,Hg):wd()})}function ef(){if(In===0){var t=Pl;t===0&&(t=Hi,Hi<<=1,(Hi&261888)===0&&(Hi=256)),In=t}return In}function Hd(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:Gi(""+t)}function Bd(t,e){var n=e.ownerDocument.createElement("input");return n.name=e.name,n.value=e.value,t.id&&n.setAttribute("form",t.id),e.parentNode.insertBefore(n,e),t=new FormData(t),n.parentNode.removeChild(n),t}function Ug(t,e,n,l,a){if(e==="submit"&&n&&n.stateNode===a){var s=Hd((a[oe]||null).action),d=l.submitter;d&&(e=(e=d[oe]||null)?Hd(e.formAction):d.getAttribute("formAction"),e!==null&&(s=e,d=null));var g=new Ii("action","action",null,l,a);t.push({event:g,listeners:[{instance:null,listener:function(){if(l.defaultPrevented){if(In!==0){var S=d?Bd(a,d):new FormData(a);xs(n,{pending:!0,data:S,method:a.method,action:s},null,S)}}else typeof s=="function"&&(g.preventDefault(),S=d?Bd(a,d):new FormData(a),xs(n,{pending:!0,data:S,method:a.method,action:s},s,S))},currentTarget:a}]})}}for(var nf=0;nf<Yc.length;nf++){var lf=Yc[nf],Qg=lf.toLowerCase(),zg=lf[0].toUpperCase()+lf.slice(1);Ie(Qg,"on"+zg)}Ie(r0,"onAnimationEnd"),Ie(o0,"onAnimationIteration"),Ie(d0,"onAnimationStart"),Ie("dblclick","onDoubleClick"),Ie("focusin","onFocus"),Ie("focusout","onBlur"),Ie($m,"onTransitionRun"),Ie(tg,"onTransitionStart"),Ie(eg,"onTransitionCancel"),Ie(h0,"onTransitionEnd"),Yl("onMouseEnter",["mouseout","mouseover"]),Yl("onMouseLeave",["mouseout","mouseover"]),Yl("onPointerEnter",["pointerout","pointerover"]),Yl("onPointerLeave",["pointerout","pointerover"]),sl("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),sl("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),sl("onBeforeInput",["compositionend","keypress","textInput","paste"]),sl("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),sl("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),sl("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var si="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Yg=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(si));function Ud(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var l=t[n],a=l.event;l=l.listeners;t:{var s=void 0;if(e)for(var d=l.length-1;0<=d;d--){var g=l[d],S=g.instance,U=g.currentTarget;if(g=g.listener,S!==s&&a.isPropagationStopped())break t;s=g,a.currentTarget=U;try{s(a)}catch(Z){ki(Z)}a.currentTarget=null,s=S}else for(d=0;d<l.length;d++){if(g=l[d],S=g.instance,U=g.currentTarget,g=g.listener,S!==s&&a.isPropagationStopped())break t;s=g,a.currentTarget=U;try{s(a)}catch(Z){ki(Z)}a.currentTarget=null,s=S}}}}function yt(t,e){var n=e[Ac];n===void 0&&(n=e[Ac]=new Set);var l=t+"__bubble";n.has(l)||(Qd(e,t,2,!1),n.add(l))}function af(t,e,n){var l=0;e&&(l|=4),Qd(n,t,l,e)}var Hu="_reactListening"+Math.random().toString(36).slice(2);function uf(t){if(!t[Hu]){t[Hu]=!0,Rr.forEach(function(n){n!=="selectionchange"&&(Yg.has(n)||af(n,!1,t),af(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Hu]||(e[Hu]=!0,af("selectionchange",!1,e))}}function Qd(t,e,n,l){switch(o1(e)){case 2:var a=dA;break;case 8:a=hA;break;default:a=xf}n=a.bind(null,e,n,t),a=void 0,!Cc||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(a=!0),l?a!==void 0?t.addEventListener(e,n,{capture:!0,passive:a}):t.addEventListener(e,n,!0):a!==void 0?t.addEventListener(e,n,{passive:a}):t.addEventListener(e,n,!1)}function cf(t,e,n,l,a){var s=l;if((e&1)===0&&(e&2)===0&&l!==null)t:for(;;){if(l===null)return;var d=l.tag;if(d===3||d===4){var g=l.stateNode.containerInfo;if(g===a)break;if(d===4)for(d=l.return;d!==null;){var S=d.tag;if((S===3||S===4)&&d.stateNode.containerInfo===a)return;d=d.return}for(;g!==null;){if(d=Ul(g),d===null)return;if(S=d.tag,S===5||S===6||S===26||S===27){l=s=d;continue t}g=g.parentNode}}l=l.return}Gr(function(){var U=s,Z=Sc(n),J=[];t:{var Q=m0.get(t);if(Q!==void 0){var G=Ii,lt=t;switch(t){case"keypress":if(Vi(n)===0)break t;case"keydown":case"keyup":G=jm;break;case"focusin":lt="focus",G=wc;break;case"focusout":lt="blur",G=wc;break;case"beforeblur":case"afterblur":G=wc;break;case"click":if(n.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":G=Zr;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":G=Em;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":G=Bm;break;case r0:case o0:case d0:G=bm;break;case h0:G=Qm;break;case"scroll":case"scrollend":G=vm;break;case"wheel":G=Ym;break;case"copy":case"cut":case"paste":G=Tm;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":G=qr;break;case"toggle":case"beforetoggle":G=Gm}var ft=(e&4)!==0,Mt=!ft&&(t==="scroll"||t==="scrollend"),w=ft?Q!==null?Q+"Capture":null:Q;ft=[];for(var O=U,B;O!==null;){var K=O;if(B=K.stateNode,K=K.tag,K!==5&&K!==26&&K!==27||B===null||w===null||(K=Ma(O,w),K!=null&&ft.push(fi(O,K,B))),Mt)break;O=O.return}0<ft.length&&(Q=new G(Q,lt,null,n,Z),J.push({event:Q,listeners:ft}))}}if((e&7)===0){t:{if(Q=t==="mouseover"||t==="pointerover",G=t==="mouseout"||t==="pointerout",Q&&n!==bc&&(lt=n.relatedTarget||n.fromElement)&&(Ul(lt)||lt[Bl]))break t;if((G||Q)&&(Q=Z.window===Z?Z:(Q=Z.ownerDocument)?Q.defaultView||Q.parentWindow:window,G?(lt=n.relatedTarget||n.toElement,G=U,lt=lt?Ul(lt):null,lt!==null&&(Mt=o(lt),ft=lt.tag,lt!==Mt||ft!==5&&ft!==27&&ft!==6)&&(lt=null)):(G=null,lt=U),G!==lt)){if(ft=Zr,K="onMouseLeave",w="onMouseEnter",O="mouse",(t==="pointerout"||t==="pointerover")&&(ft=qr,K="onPointerLeave",w="onPointerEnter",O="pointer"),Mt=G==null?Q:wa(G),B=lt==null?Q:wa(lt),Q=new ft(K,O+"leave",G,n,Z),Q.target=Mt,Q.relatedTarget=B,K=null,Ul(Z)===U&&(ft=new ft(w,O+"enter",lt,n,Z),ft.target=B,ft.relatedTarget=Mt,K=ft),Mt=K,G&&lt)e:{for(ft=Lg,w=G,O=lt,B=0,K=w;K;K=ft(K))B++;K=0;for(var ct=O;ct;ct=ft(ct))K++;for(;0<B-K;)w=ft(w),B--;for(;0<K-B;)O=ft(O),K--;for(;B--;){if(w===O||O!==null&&w===O.alternate){ft=w;break e}w=ft(w),O=ft(O)}ft=null}else ft=null;G!==null&&zd(J,Q,G,ft,!1),lt!==null&&Mt!==null&&zd(J,Mt,lt,ft,!0)}}t:{if(Q=U?wa(U):window,G=Q.nodeName&&Q.nodeName.toLowerCase(),G==="select"||G==="input"&&Q.type==="file")var St=$r;else if(_r(Q))if(t0)St=Wm;else{St=Jm;var at=km}else G=Q.nodeName,!G||G.toLowerCase()!=="input"||Q.type!=="checkbox"&&Q.type!=="radio"?U&&xc(U.elementType)&&(St=$r):St=Fm;if(St&&(St=St(t,U))){Pr(J,St,n,Z);break t}at&&at(t,Q,U),t==="focusout"&&U&&Q.type==="number"&&U.memoizedProps.value!=null&&pc(Q,"number",Q.value)}switch(at=U?wa(U):window,t){case"focusin":(_r(at)||at.contentEditable==="true")&&(Il=at,Uc=U,Ya=null);break;case"focusout":Ya=Uc=Il=null;break;case"mousedown":Qc=!0;break;case"contextmenu":case"mouseup":case"dragend":Qc=!1,s0(J,n,Z);break;case"selectionchange":if(Pm)break;case"keydown":case"keyup":s0(J,n,Z)}var At;if(jc)t:{switch(t){case"compositionstart":var pt="onCompositionStart";break t;case"compositionend":pt="onCompositionEnd";break t;case"compositionupdate":pt="onCompositionUpdate";break t}pt=void 0}else Zl?Fr(t,n)&&(pt="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(pt="onCompositionStart");pt&&(Kr&&n.locale!=="ko"&&(Zl||pt!=="onCompositionStart"?pt==="onCompositionEnd"&&Zl&&(At=Xr()):(Rn=Z,Oc="value"in Rn?Rn.value:Rn.textContent,Zl=!0)),at=Bu(U,pt),0<at.length&&(pt=new Ir(pt,t,null,n,Z),J.push({event:pt,listeners:at}),At?pt.data=At:(At=Wr(n),At!==null&&(pt.data=At)))),(At=Vm?Zm(t,n):Im(t,n))&&(pt=Bu(U,"onBeforeInput"),0<pt.length&&(at=new Ir("onBeforeInput","beforeinput",null,n,Z),J.push({event:at,listeners:pt}),at.data=At)),Ug(J,t,U,n,Z)}Ud(J,e)})}function fi(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Bu(t,e){for(var n=e+"Capture",l=[];t!==null;){var a=t,s=a.stateNode;if(a=a.tag,a!==5&&a!==26&&a!==27||s===null||(a=Ma(t,n),a!=null&&l.unshift(fi(t,a,s)),a=Ma(t,e),a!=null&&l.push(fi(t,a,s))),t.tag===3)return l;t=t.return}return[]}function Lg(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function zd(t,e,n,l,a){for(var s=e._reactName,d=[];n!==null&&n!==l;){var g=n,S=g.alternate,U=g.stateNode;if(g=g.tag,S!==null&&S===l)break;g!==5&&g!==26&&g!==27||U===null||(S=U,a?(U=Ma(n,s),U!=null&&d.unshift(fi(n,U,S))):a||(U=Ma(n,s),U!=null&&d.push(fi(n,U,S)))),n=n.return}d.length!==0&&t.push({event:e,listeners:d})}var Gg=/\r\n?/g,Xg=/\u0000|\uFFFD/g;function Yd(t){return(typeof t=="string"?t:""+t).replace(Gg,`
`).replace(Xg,"")}function Ld(t,e){return e=Yd(e),Yd(t)===e}function wt(t,e,n,l,a,s){switch(n){case"children":typeof l=="string"?e==="body"||e==="textarea"&&l===""||Gl(t,l):(typeof l=="number"||typeof l=="bigint")&&e!=="body"&&Gl(t,""+l);break;case"className":Yi(t,"class",l);break;case"tabIndex":Yi(t,"tabindex",l);break;case"dir":case"role":case"viewBox":case"width":case"height":Yi(t,n,l);break;case"style":Yr(t,l,s);break;case"data":if(e!=="object"){Yi(t,"data",l);break}case"src":case"href":if(l===""&&(e!=="a"||n!=="href")){t.removeAttribute(n);break}if(l==null||typeof l=="function"||typeof l=="symbol"||typeof l=="boolean"){t.removeAttribute(n);break}l=Gi(""+l),t.setAttribute(n,l);break;case"action":case"formAction":if(typeof l=="function"){t.setAttribute(n,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof s=="function"&&(n==="formAction"?(e!=="input"&&wt(t,e,"name",a.name,a,null),wt(t,e,"formEncType",a.formEncType,a,null),wt(t,e,"formMethod",a.formMethod,a,null),wt(t,e,"formTarget",a.formTarget,a,null)):(wt(t,e,"encType",a.encType,a,null),wt(t,e,"method",a.method,a,null),wt(t,e,"target",a.target,a,null)));if(l==null||typeof l=="symbol"||typeof l=="boolean"){t.removeAttribute(n);break}l=Gi(""+l),t.setAttribute(n,l);break;case"onClick":l!=null&&(t.onclick=tn);break;case"onScroll":l!=null&&yt("scroll",t);break;case"onScrollEnd":l!=null&&yt("scrollend",t);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(f(61));if(n=l.__html,n!=null){if(a.children!=null)throw Error(f(60));t.innerHTML=n}}break;case"multiple":t.multiple=l&&typeof l!="function"&&typeof l!="symbol";break;case"muted":t.muted=l&&typeof l!="function"&&typeof l!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(l==null||typeof l=="function"||typeof l=="boolean"||typeof l=="symbol"){t.removeAttribute("xlink:href");break}n=Gi(""+l),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",n);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":l!=null&&typeof l!="function"&&typeof l!="symbol"?t.setAttribute(n,""+l):t.removeAttribute(n);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":l&&typeof l!="function"&&typeof l!="symbol"?t.setAttribute(n,""):t.removeAttribute(n);break;case"capture":case"download":l===!0?t.setAttribute(n,""):l!==!1&&l!=null&&typeof l!="function"&&typeof l!="symbol"?t.setAttribute(n,l):t.removeAttribute(n);break;case"cols":case"rows":case"size":case"span":l!=null&&typeof l!="function"&&typeof l!="symbol"&&!isNaN(l)&&1<=l?t.setAttribute(n,l):t.removeAttribute(n);break;case"rowSpan":case"start":l==null||typeof l=="function"||typeof l=="symbol"||isNaN(l)?t.removeAttribute(n):t.setAttribute(n,l);break;case"popover":yt("beforetoggle",t),yt("toggle",t),zi(t,"popover",l);break;case"xlinkActuate":$e(t,"http://www.w3.org/1999/xlink","xlink:actuate",l);break;case"xlinkArcrole":$e(t,"http://www.w3.org/1999/xlink","xlink:arcrole",l);break;case"xlinkRole":$e(t,"http://www.w3.org/1999/xlink","xlink:role",l);break;case"xlinkShow":$e(t,"http://www.w3.org/1999/xlink","xlink:show",l);break;case"xlinkTitle":$e(t,"http://www.w3.org/1999/xlink","xlink:title",l);break;case"xlinkType":$e(t,"http://www.w3.org/1999/xlink","xlink:type",l);break;case"xmlBase":$e(t,"http://www.w3.org/XML/1998/namespace","xml:base",l);break;case"xmlLang":$e(t,"http://www.w3.org/XML/1998/namespace","xml:lang",l);break;case"xmlSpace":$e(t,"http://www.w3.org/XML/1998/namespace","xml:space",l);break;case"is":zi(t,"is",l);break;case"innerText":case"textContent":break;default:(!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(n=gm.get(n)||n,zi(t,n,l))}}function sf(t,e,n,l,a,s){switch(n){case"style":Yr(t,l,s);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(f(61));if(n=l.__html,n!=null){if(a.children!=null)throw Error(f(60));t.innerHTML=n}}break;case"children":typeof l=="string"?Gl(t,l):(typeof l=="number"||typeof l=="bigint")&&Gl(t,""+l);break;case"onScroll":l!=null&&yt("scroll",t);break;case"onScrollEnd":l!=null&&yt("scrollend",t);break;case"onClick":l!=null&&(t.onclick=tn);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!wr.hasOwnProperty(n))t:{if(n[0]==="o"&&n[1]==="n"&&(a=n.endsWith("Capture"),e=n.slice(2,a?n.length-7:void 0),s=t[oe]||null,s=s!=null?s[n]:null,typeof s=="function"&&t.removeEventListener(e,s,a),typeof l=="function")){typeof s!="function"&&s!==null&&(n in t?t[n]=null:t.hasAttribute(n)&&t.removeAttribute(n)),t.addEventListener(e,l,a);break t}n in t?t[n]=l:l===!0?t.setAttribute(n,""):zi(t,n,l)}}}function ae(t,e,n){switch(e){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":yt("error",t),yt("load",t);var l=!1,a=!1,s;for(s in n)if(n.hasOwnProperty(s)){var d=n[s];if(d!=null)switch(s){case"src":l=!0;break;case"srcSet":a=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(f(137,e));default:wt(t,e,s,d,n,null)}}a&&wt(t,e,"srcSet",n.srcSet,n,null),l&&wt(t,e,"src",n.src,n,null);return;case"input":yt("invalid",t);var g=s=d=a=null,S=null,U=null;for(l in n)if(n.hasOwnProperty(l)){var Z=n[l];if(Z!=null)switch(l){case"name":a=Z;break;case"type":d=Z;break;case"checked":S=Z;break;case"defaultChecked":U=Z;break;case"value":s=Z;break;case"defaultValue":g=Z;break;case"children":case"dangerouslySetInnerHTML":if(Z!=null)throw Error(f(137,e));break;default:wt(t,e,l,Z,n,null)}}Br(t,s,g,S,U,d,a,!1);return;case"select":yt("invalid",t),l=d=s=null;for(a in n)if(n.hasOwnProperty(a)&&(g=n[a],g!=null))switch(a){case"value":s=g;break;case"defaultValue":d=g;break;case"multiple":l=g;default:wt(t,e,a,g,n,null)}e=s,n=d,t.multiple=!!l,e!=null?Ll(t,!!l,e,!1):n!=null&&Ll(t,!!l,n,!0);return;case"textarea":yt("invalid",t),s=a=l=null;for(d in n)if(n.hasOwnProperty(d)&&(g=n[d],g!=null))switch(d){case"value":l=g;break;case"defaultValue":a=g;break;case"children":s=g;break;case"dangerouslySetInnerHTML":if(g!=null)throw Error(f(91));break;default:wt(t,e,d,g,n,null)}Qr(t,l,a,s);return;case"option":for(S in n)if(n.hasOwnProperty(S)&&(l=n[S],l!=null))switch(S){case"selected":t.selected=l&&typeof l!="function"&&typeof l!="symbol";break;default:wt(t,e,S,l,n,null)}return;case"dialog":yt("beforetoggle",t),yt("toggle",t),yt("cancel",t),yt("close",t);break;case"iframe":case"object":yt("load",t);break;case"video":case"audio":for(l=0;l<si.length;l++)yt(si[l],t);break;case"image":yt("error",t),yt("load",t);break;case"details":yt("toggle",t);break;case"embed":case"source":case"link":yt("error",t),yt("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(U in n)if(n.hasOwnProperty(U)&&(l=n[U],l!=null))switch(U){case"children":case"dangerouslySetInnerHTML":throw Error(f(137,e));default:wt(t,e,U,l,n,null)}return;default:if(xc(e)){for(Z in n)n.hasOwnProperty(Z)&&(l=n[Z],l!==void 0&&sf(t,e,Z,l,n,void 0));return}}for(g in n)n.hasOwnProperty(g)&&(l=n[g],l!=null&&wt(t,e,g,l,n,null))}function Vg(t,e,n,l){switch(e){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var a=null,s=null,d=null,g=null,S=null,U=null,Z=null;for(G in n){var J=n[G];if(n.hasOwnProperty(G)&&J!=null)switch(G){case"checked":break;case"value":break;case"defaultValue":S=J;default:l.hasOwnProperty(G)||wt(t,e,G,null,l,J)}}for(var Q in l){var G=l[Q];if(J=n[Q],l.hasOwnProperty(Q)&&(G!=null||J!=null))switch(Q){case"type":s=G;break;case"name":a=G;break;case"checked":U=G;break;case"defaultChecked":Z=G;break;case"value":d=G;break;case"defaultValue":g=G;break;case"children":case"dangerouslySetInnerHTML":if(G!=null)throw Error(f(137,e));break;default:G!==J&&wt(t,e,Q,G,l,J)}}Ec(t,d,g,S,U,Z,s,a);return;case"select":G=d=g=Q=null;for(s in n)if(S=n[s],n.hasOwnProperty(s)&&S!=null)switch(s){case"value":break;case"multiple":G=S;default:l.hasOwnProperty(s)||wt(t,e,s,null,l,S)}for(a in l)if(s=l[a],S=n[a],l.hasOwnProperty(a)&&(s!=null||S!=null))switch(a){case"value":Q=s;break;case"defaultValue":g=s;break;case"multiple":d=s;default:s!==S&&wt(t,e,a,s,l,S)}e=g,n=d,l=G,Q!=null?Ll(t,!!n,Q,!1):!!l!=!!n&&(e!=null?Ll(t,!!n,e,!0):Ll(t,!!n,n?[]:"",!1));return;case"textarea":G=Q=null;for(g in n)if(a=n[g],n.hasOwnProperty(g)&&a!=null&&!l.hasOwnProperty(g))switch(g){case"value":break;case"children":break;default:wt(t,e,g,null,l,a)}for(d in l)if(a=l[d],s=n[d],l.hasOwnProperty(d)&&(a!=null||s!=null))switch(d){case"value":Q=a;break;case"defaultValue":G=a;break;case"children":break;case"dangerouslySetInnerHTML":if(a!=null)throw Error(f(91));break;default:a!==s&&wt(t,e,d,a,l,s)}Ur(t,Q,G);return;case"option":for(var lt in n)if(Q=n[lt],n.hasOwnProperty(lt)&&Q!=null&&!l.hasOwnProperty(lt))switch(lt){case"selected":t.selected=!1;break;default:wt(t,e,lt,null,l,Q)}for(S in l)if(Q=l[S],G=n[S],l.hasOwnProperty(S)&&Q!==G&&(Q!=null||G!=null))switch(S){case"selected":t.selected=Q&&typeof Q!="function"&&typeof Q!="symbol";break;default:wt(t,e,S,Q,l,G)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var ft in n)Q=n[ft],n.hasOwnProperty(ft)&&Q!=null&&!l.hasOwnProperty(ft)&&wt(t,e,ft,null,l,Q);for(U in l)if(Q=l[U],G=n[U],l.hasOwnProperty(U)&&Q!==G&&(Q!=null||G!=null))switch(U){case"children":case"dangerouslySetInnerHTML":if(Q!=null)throw Error(f(137,e));break;default:wt(t,e,U,Q,l,G)}return;default:if(xc(e)){for(var Mt in n)Q=n[Mt],n.hasOwnProperty(Mt)&&Q!==void 0&&!l.hasOwnProperty(Mt)&&sf(t,e,Mt,void 0,l,Q);for(Z in l)Q=l[Z],G=n[Z],!l.hasOwnProperty(Z)||Q===G||Q===void 0&&G===void 0||sf(t,e,Z,Q,l,G);return}}for(var w in n)Q=n[w],n.hasOwnProperty(w)&&Q!=null&&!l.hasOwnProperty(w)&&wt(t,e,w,null,l,Q);for(J in l)Q=l[J],G=n[J],!l.hasOwnProperty(J)||Q===G||Q==null&&G==null||wt(t,e,J,Q,l,G)}function Gd(t){switch(t){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function Zg(){if(typeof performance.getEntriesByType=="function"){for(var t=0,e=0,n=performance.getEntriesByType("resource"),l=0;l<n.length;l++){var a=n[l],s=a.transferSize,d=a.initiatorType,g=a.duration;if(s&&g&&Gd(d)){for(d=0,g=a.responseEnd,l+=1;l<n.length;l++){var S=n[l],U=S.startTime;if(U>g)break;var Z=S.transferSize,J=S.initiatorType;Z&&Gd(J)&&(S=S.responseEnd,d+=Z*(S<g?1:(g-U)/(S-U)))}if(--l,e+=8*(s+d)/(a.duration/1e3),t++,10<t)break}}if(0<t)return e/t/1e6}return navigator.connection&&(t=navigator.connection.downlink,typeof t=="number")?t:5}var ff=null,rf=null;function Uu(t){return t.nodeType===9?t:t.ownerDocument}function Xd(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Vd(t,e){if(t===0)switch(e){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&e==="foreignObject"?0:t}function of(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.children=="bigint"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var df=null;function Ig(){var t=window.event;return t&&t.type==="popstate"?t===df?!1:(df=t,!0):(df=null,!1)}var Zd=typeof setTimeout=="function"?setTimeout:void 0,qg=typeof clearTimeout=="function"?clearTimeout:void 0,Id=typeof Promise=="function"?Promise:void 0,Kg=typeof queueMicrotask=="function"?queueMicrotask:typeof Id<"u"?function(t){return Id.resolve(null).then(t).catch(kg)}:Zd;function kg(t){setTimeout(function(){throw t})}function qn(t){return t==="head"}function qd(t,e){var n=e,l=0;do{var a=n.nextSibling;if(t.removeChild(n),a&&a.nodeType===8)if(n=a.data,n==="/$"||n==="/&"){if(l===0){t.removeChild(a),va(e);return}l--}else if(n==="$"||n==="$?"||n==="$~"||n==="$!"||n==="&")l++;else if(n==="html")ri(t.ownerDocument.documentElement);else if(n==="head"){n=t.ownerDocument.head,ri(n);for(var s=n.firstChild;s;){var d=s.nextSibling,g=s.nodeName;s[Ra]||g==="SCRIPT"||g==="STYLE"||g==="LINK"&&s.rel.toLowerCase()==="stylesheet"||n.removeChild(s),s=d}}else n==="body"&&ri(t.ownerDocument.body);n=a}while(n);va(e)}function Kd(t,e){var n=t;t=0;do{var l=n.nextSibling;if(n.nodeType===1?e?(n._stashedDisplay=n.style.display,n.style.display="none"):(n.style.display=n._stashedDisplay||"",n.getAttribute("style")===""&&n.removeAttribute("style")):n.nodeType===3&&(e?(n._stashedText=n.nodeValue,n.nodeValue=""):n.nodeValue=n._stashedText||""),l&&l.nodeType===8)if(n=l.data,n==="/$"){if(t===0)break;t--}else n!=="$"&&n!=="$?"&&n!=="$~"&&n!=="$!"||t++;n=l}while(n)}function hf(t){var e=t.firstChild;for(e&&e.nodeType===10&&(e=e.nextSibling);e;){var n=e;switch(e=e.nextSibling,n.nodeName){case"HTML":case"HEAD":case"BODY":hf(n),vc(n);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(n.rel.toLowerCase()==="stylesheet")continue}t.removeChild(n)}}function Jg(t,e,n,l){for(;t.nodeType===1;){var a=n;if(t.nodeName.toLowerCase()!==e.toLowerCase()){if(!l&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(l){if(!t[Ra])switch(e){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(s=t.getAttribute("rel"),s==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(s!==a.rel||t.getAttribute("href")!==(a.href==null||a.href===""?null:a.href)||t.getAttribute("crossorigin")!==(a.crossOrigin==null?null:a.crossOrigin)||t.getAttribute("title")!==(a.title==null?null:a.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(s=t.getAttribute("src"),(s!==(a.src==null?null:a.src)||t.getAttribute("type")!==(a.type==null?null:a.type)||t.getAttribute("crossorigin")!==(a.crossOrigin==null?null:a.crossOrigin))&&s&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(e==="input"&&t.type==="hidden"){var s=a.name==null?null:""+a.name;if(a.type==="hidden"&&t.getAttribute("name")===s)return t}else return t;if(t=Le(t.nextSibling),t===null)break}return null}function Fg(t,e,n){if(e==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!n||(t=Le(t.nextSibling),t===null))return null;return t}function kd(t,e){for(;t.nodeType!==8;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!e||(t=Le(t.nextSibling),t===null))return null;return t}function mf(t){return t.data==="$?"||t.data==="$~"}function gf(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState!=="loading"}function Wg(t,e){var n=t.ownerDocument;if(t.data==="$~")t._reactRetry=e;else if(t.data!=="$?"||n.readyState!=="loading")e();else{var l=function(){e(),n.removeEventListener("DOMContentLoaded",l)};n.addEventListener("DOMContentLoaded",l),t._reactRetry=l}}function Le(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?"||e==="$~"||e==="&"||e==="F!"||e==="F")break;if(e==="/$"||e==="/&")return null}}return t}var Af=null;function Jd(t){t=t.nextSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"||n==="/&"){if(e===0)return Le(t.nextSibling);e--}else n!=="$"&&n!=="$!"&&n!=="$?"&&n!=="$~"&&n!=="&"||e++}t=t.nextSibling}return null}function Fd(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"){if(e===0)return t;e--}else n!=="/$"&&n!=="/&"||e++}t=t.previousSibling}return null}function Wd(t,e,n){switch(e=Uu(n),t){case"html":if(t=e.documentElement,!t)throw Error(f(452));return t;case"head":if(t=e.head,!t)throw Error(f(453));return t;case"body":if(t=e.body,!t)throw Error(f(454));return t;default:throw Error(f(451))}}function ri(t){for(var e=t.attributes;e.length;)t.removeAttributeNode(e[0]);vc(t)}var Ge=new Map,_d=new Set;function Qu(t){return typeof t.getRootNode=="function"?t.getRootNode():t.nodeType===9?t:t.ownerDocument}var vn=_.d;_.d={f:_g,r:Pg,D:$g,C:tA,L:eA,m:nA,X:aA,S:lA,M:iA};function _g(){var t=vn.f(),e=Du();return t||e}function Pg(t){var e=Ql(t);e!==null&&e.tag===5&&e.type==="form"?mo(e):vn.r(t)}var ma=typeof document>"u"?null:document;function Pd(t,e,n){var l=ma;if(l&&typeof e=="string"&&e){var a=Ne(e);a='link[rel="'+t+'"][href="'+a+'"]',typeof n=="string"&&(a+='[crossorigin="'+n+'"]'),_d.has(a)||(_d.add(a),t={rel:t,crossOrigin:n,href:e},l.querySelector(a)===null&&(e=l.createElement("link"),ae(e,"link",t),Ft(e),l.head.appendChild(e)))}}function $g(t){vn.D(t),Pd("dns-prefetch",t,null)}function tA(t,e){vn.C(t,e),Pd("preconnect",t,e)}function eA(t,e,n){vn.L(t,e,n);var l=ma;if(l&&t&&e){var a='link[rel="preload"][as="'+Ne(e)+'"]';e==="image"&&n&&n.imageSrcSet?(a+='[imagesrcset="'+Ne(n.imageSrcSet)+'"]',typeof n.imageSizes=="string"&&(a+='[imagesizes="'+Ne(n.imageSizes)+'"]')):a+='[href="'+Ne(t)+'"]';var s=a;switch(e){case"style":s=ga(t);break;case"script":s=Aa(t)}Ge.has(s)||(t=T({rel:"preload",href:e==="image"&&n&&n.imageSrcSet?void 0:t,as:e},n),Ge.set(s,t),l.querySelector(a)!==null||e==="style"&&l.querySelector(oi(s))||e==="script"&&l.querySelector(di(s))||(e=l.createElement("link"),ae(e,"link",t),Ft(e),l.head.appendChild(e)))}}function nA(t,e){vn.m(t,e);var n=ma;if(n&&t){var l=e&&typeof e.as=="string"?e.as:"script",a='link[rel="modulepreload"][as="'+Ne(l)+'"][href="'+Ne(t)+'"]',s=a;switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":s=Aa(t)}if(!Ge.has(s)&&(t=T({rel:"modulepreload",href:t},e),Ge.set(s,t),n.querySelector(a)===null)){switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(n.querySelector(di(s)))return}l=n.createElement("link"),ae(l,"link",t),Ft(l),n.head.appendChild(l)}}}function lA(t,e,n){vn.S(t,e,n);var l=ma;if(l&&t){var a=zl(l).hoistableStyles,s=ga(t);e=e||"default";var d=a.get(s);if(!d){var g={loading:0,preload:null};if(d=l.querySelector(oi(s)))g.loading=5;else{t=T({rel:"stylesheet",href:t,"data-precedence":e},n),(n=Ge.get(s))&&vf(t,n);var S=d=l.createElement("link");Ft(S),ae(S,"link",t),S._p=new Promise(function(U,Z){S.onload=U,S.onerror=Z}),S.addEventListener("load",function(){g.loading|=1}),S.addEventListener("error",function(){g.loading|=2}),g.loading|=4,zu(d,e,l)}d={type:"stylesheet",instance:d,count:1,state:g},a.set(s,d)}}}function aA(t,e){vn.X(t,e);var n=ma;if(n&&t){var l=zl(n).hoistableScripts,a=Aa(t),s=l.get(a);s||(s=n.querySelector(di(a)),s||(t=T({src:t,async:!0},e),(e=Ge.get(a))&&yf(t,e),s=n.createElement("script"),Ft(s),ae(s,"link",t),n.head.appendChild(s)),s={type:"script",instance:s,count:1,state:null},l.set(a,s))}}function iA(t,e){vn.M(t,e);var n=ma;if(n&&t){var l=zl(n).hoistableScripts,a=Aa(t),s=l.get(a);s||(s=n.querySelector(di(a)),s||(t=T({src:t,async:!0,type:"module"},e),(e=Ge.get(a))&&yf(t,e),s=n.createElement("script"),Ft(s),ae(s,"link",t),n.head.appendChild(s)),s={type:"script",instance:s,count:1,state:null},l.set(a,s))}}function $d(t,e,n,l){var a=(a=ot.current)?Qu(a):null;if(!a)throw Error(f(446));switch(t){case"meta":case"title":return null;case"style":return typeof n.precedence=="string"&&typeof n.href=="string"?(e=ga(n.href),n=zl(a).hoistableStyles,l=n.get(e),l||(l={type:"style",instance:null,count:0,state:null},n.set(e,l)),l):{type:"void",instance:null,count:0,state:null};case"link":if(n.rel==="stylesheet"&&typeof n.href=="string"&&typeof n.precedence=="string"){t=ga(n.href);var s=zl(a).hoistableStyles,d=s.get(t);if(d||(a=a.ownerDocument||a,d={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},s.set(t,d),(s=a.querySelector(oi(t)))&&!s._p&&(d.instance=s,d.state.loading=5),Ge.has(t)||(n={rel:"preload",as:"style",href:n.href,crossOrigin:n.crossOrigin,integrity:n.integrity,media:n.media,hrefLang:n.hrefLang,referrerPolicy:n.referrerPolicy},Ge.set(t,n),s||uA(a,t,n,d.state))),e&&l===null)throw Error(f(528,""));return d}if(e&&l!==null)throw Error(f(529,""));return null;case"script":return e=n.async,n=n.src,typeof n=="string"&&e&&typeof e!="function"&&typeof e!="symbol"?(e=Aa(n),n=zl(a).hoistableScripts,l=n.get(e),l||(l={type:"script",instance:null,count:0,state:null},n.set(e,l)),l):{type:"void",instance:null,count:0,state:null};default:throw Error(f(444,t))}}function ga(t){return'href="'+Ne(t)+'"'}function oi(t){return'link[rel="stylesheet"]['+t+"]"}function t1(t){return T({},t,{"data-precedence":t.precedence,precedence:null})}function uA(t,e,n,l){t.querySelector('link[rel="preload"][as="style"]['+e+"]")?l.loading=1:(e=t.createElement("link"),l.preload=e,e.addEventListener("load",function(){return l.loading|=1}),e.addEventListener("error",function(){return l.loading|=2}),ae(e,"link",n),Ft(e),t.head.appendChild(e))}function Aa(t){return'[src="'+Ne(t)+'"]'}function di(t){return"script[async]"+t}function e1(t,e,n){if(e.count++,e.instance===null)switch(e.type){case"style":var l=t.querySelector('style[data-href~="'+Ne(n.href)+'"]');if(l)return e.instance=l,Ft(l),l;var a=T({},n,{"data-href":n.href,"data-precedence":n.precedence,href:null,precedence:null});return l=(t.ownerDocument||t).createElement("style"),Ft(l),ae(l,"style",a),zu(l,n.precedence,t),e.instance=l;case"stylesheet":a=ga(n.href);var s=t.querySelector(oi(a));if(s)return e.state.loading|=4,e.instance=s,Ft(s),s;l=t1(n),(a=Ge.get(a))&&vf(l,a),s=(t.ownerDocument||t).createElement("link"),Ft(s);var d=s;return d._p=new Promise(function(g,S){d.onload=g,d.onerror=S}),ae(s,"link",l),e.state.loading|=4,zu(s,n.precedence,t),e.instance=s;case"script":return s=Aa(n.src),(a=t.querySelector(di(s)))?(e.instance=a,Ft(a),a):(l=n,(a=Ge.get(s))&&(l=T({},n),yf(l,a)),t=t.ownerDocument||t,a=t.createElement("script"),Ft(a),ae(a,"link",l),t.head.appendChild(a),e.instance=a);case"void":return null;default:throw Error(f(443,e.type))}else e.type==="stylesheet"&&(e.state.loading&4)===0&&(l=e.instance,e.state.loading|=4,zu(l,n.precedence,t));return e.instance}function zu(t,e,n){for(var l=n.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),a=l.length?l[l.length-1]:null,s=a,d=0;d<l.length;d++){var g=l[d];if(g.dataset.precedence===e)s=g;else if(s!==a)break}s?s.parentNode.insertBefore(t,s.nextSibling):(e=n.nodeType===9?n.head:n,e.insertBefore(t,e.firstChild))}function vf(t,e){t.crossOrigin==null&&(t.crossOrigin=e.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=e.referrerPolicy),t.title==null&&(t.title=e.title)}function yf(t,e){t.crossOrigin==null&&(t.crossOrigin=e.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=e.referrerPolicy),t.integrity==null&&(t.integrity=e.integrity)}var Yu=null;function n1(t,e,n){if(Yu===null){var l=new Map,a=Yu=new Map;a.set(n,l)}else a=Yu,l=a.get(n),l||(l=new Map,a.set(n,l));if(l.has(t))return l;for(l.set(t,null),n=n.getElementsByTagName(t),a=0;a<n.length;a++){var s=n[a];if(!(s[Ra]||s[te]||t==="link"&&s.getAttribute("rel")==="stylesheet")&&s.namespaceURI!=="http://www.w3.org/2000/svg"){var d=s.getAttribute(e)||"";d=t+d;var g=l.get(d);g?g.push(s):l.set(d,[s])}}return l}function l1(t,e,n){t=t.ownerDocument||t,t.head.insertBefore(n,e==="title"?t.querySelector("head > title"):null)}function cA(t,e,n){if(n===1||e.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof e.precedence!="string"||typeof e.href!="string"||e.href==="")break;return!0;case"link":if(typeof e.rel!="string"||typeof e.href!="string"||e.href===""||e.onLoad||e.onError)break;switch(e.rel){case"stylesheet":return t=e.disabled,typeof e.precedence=="string"&&t==null;default:return!0}case"script":if(e.async&&typeof e.async!="function"&&typeof e.async!="symbol"&&!e.onLoad&&!e.onError&&e.src&&typeof e.src=="string")return!0}return!1}function a1(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}function sA(t,e,n,l){if(n.type==="stylesheet"&&(typeof l.media!="string"||matchMedia(l.media).matches!==!1)&&(n.state.loading&4)===0){if(n.instance===null){var a=ga(l.href),s=e.querySelector(oi(a));if(s){e=s._p,e!==null&&typeof e=="object"&&typeof e.then=="function"&&(t.count++,t=Lu.bind(t),e.then(t,t)),n.state.loading|=4,n.instance=s,Ft(s);return}s=e.ownerDocument||e,l=t1(l),(a=Ge.get(a))&&vf(l,a),s=s.createElement("link"),Ft(s);var d=s;d._p=new Promise(function(g,S){d.onload=g,d.onerror=S}),ae(s,"link",l),n.instance=s}t.stylesheets===null&&(t.stylesheets=new Map),t.stylesheets.set(n,e),(e=n.state.preload)&&(n.state.loading&3)===0&&(t.count++,n=Lu.bind(t),e.addEventListener("load",n),e.addEventListener("error",n))}}var Ef=0;function fA(t,e){return t.stylesheets&&t.count===0&&Xu(t,t.stylesheets),0<t.count||0<t.imgCount?function(n){var l=setTimeout(function(){if(t.stylesheets&&Xu(t,t.stylesheets),t.unsuspend){var s=t.unsuspend;t.unsuspend=null,s()}},6e4+e);0<t.imgBytes&&Ef===0&&(Ef=62500*Zg());var a=setTimeout(function(){if(t.waitingForImages=!1,t.count===0&&(t.stylesheets&&Xu(t,t.stylesheets),t.unsuspend)){var s=t.unsuspend;t.unsuspend=null,s()}},(t.imgBytes>Ef?50:800)+e);return t.unsuspend=n,function(){t.unsuspend=null,clearTimeout(l),clearTimeout(a)}}:null}function Lu(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Xu(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var Gu=null;function Xu(t,e){t.stylesheets=null,t.unsuspend!==null&&(t.count++,Gu=new Map,e.forEach(rA,t),Gu=null,Lu.call(t))}function rA(t,e){if(!(e.state.loading&4)){var n=Gu.get(t);if(n)var l=n.get(null);else{n=new Map,Gu.set(t,n);for(var a=t.querySelectorAll("link[data-precedence],style[data-precedence]"),s=0;s<a.length;s++){var d=a[s];(d.nodeName==="LINK"||d.getAttribute("media")!=="not all")&&(n.set(d.dataset.precedence,d),l=d)}l&&n.set(null,l)}a=e.instance,d=a.getAttribute("data-precedence"),s=n.get(d)||l,s===l&&n.set(null,a),n.set(d,a),this.count++,l=Lu.bind(this),a.addEventListener("load",l),a.addEventListener("error",l),s?s.parentNode.insertBefore(a,s.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(a,t.firstChild)),e.state.loading|=4}}var hi={$$typeof:N,Provider:null,Consumer:null,_currentValue:$,_currentValue2:$,_threadCount:0};function oA(t,e,n,l,a,s,d,g,S){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=hc(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=hc(0),this.hiddenUpdates=hc(null),this.identifierPrefix=l,this.onUncaughtError=a,this.onCaughtError=s,this.onRecoverableError=d,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=S,this.incompleteTransitions=new Map}function i1(t,e,n,l,a,s,d,g,S,U,Z,J){return t=new oA(t,e,n,d,S,U,Z,J,g),e=1,s===!0&&(e|=24),s=Te(3,null,null,e),t.current=s,s.stateNode=t,e=_c(),e.refCount++,t.pooledCache=e,e.refCount++,s.memoizedState={element:l,isDehydrated:n,cache:e},es(s),t}function u1(t){return t?(t=kl,t):kl}function c1(t,e,n,l,a,s){a=u1(a),l.context===null?l.context=a:l.pendingContext=a,l=Bn(e),l.payload={element:n},s=s===void 0?null:s,s!==null&&(l.callback=s),n=Un(t,l,e),n!==null&&(ve(n,t,e),qa(n,t,e))}function s1(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function pf(t,e){s1(t,e),(t=t.alternate)&&s1(t,e)}function f1(t){if(t.tag===13||t.tag===31){var e=dl(t,67108864);e!==null&&ve(e,t,67108864),pf(t,67108864)}}function r1(t){if(t.tag===13||t.tag===31){var e=we();e=mc(e);var n=dl(t,e);n!==null&&ve(n,t,e),pf(t,e)}}var Vu=!0;function dA(t,e,n,l){var a=M.T;M.T=null;var s=_.p;try{_.p=2,xf(t,e,n,l)}finally{_.p=s,M.T=a}}function hA(t,e,n,l){var a=M.T;M.T=null;var s=_.p;try{_.p=8,xf(t,e,n,l)}finally{_.p=s,M.T=a}}function xf(t,e,n,l){if(Vu){var a=bf(l);if(a===null)cf(t,e,l,Zu,n),d1(t,l);else if(gA(a,t,e,n,l))l.stopPropagation();else if(d1(t,l),e&4&&-1<mA.indexOf(t)){for(;a!==null;){var s=Ql(a);if(s!==null)switch(s.tag){case 3:if(s=s.stateNode,s.current.memoizedState.isDehydrated){var d=cl(s.pendingLanes);if(d!==0){var g=s;for(g.pendingLanes|=2,g.entangledLanes|=2;d;){var S=1<<31-be(d);g.entanglements[1]|=S,d&=~S}_e(s),(Ct&6)===0&&(Cu=pe()+500,ci(0))}}break;case 31:case 13:g=dl(s,2),g!==null&&ve(g,s,2),Du(),pf(s,2)}if(s=bf(l),s===null&&cf(t,e,l,Zu,n),s===a)break;a=s}a!==null&&l.stopPropagation()}else cf(t,e,l,null,n)}}function bf(t){return t=Sc(t),Sf(t)}var Zu=null;function Sf(t){if(Zu=null,t=Ul(t),t!==null){var e=o(t);if(e===null)t=null;else{var n=e.tag;if(n===13){if(t=h(e),t!==null)return t;t=null}else if(n===31){if(t=v(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null)}}return Zu=t,null}function o1(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch($h()){case yr:return 2;case Er:return 8;case Ni:case tm:return 32;case pr:return 268435456;default:return 32}default:return 32}}var Tf=!1,Kn=null,kn=null,Jn=null,mi=new Map,gi=new Map,Fn=[],mA="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function d1(t,e){switch(t){case"focusin":case"focusout":Kn=null;break;case"dragenter":case"dragleave":kn=null;break;case"mouseover":case"mouseout":Jn=null;break;case"pointerover":case"pointerout":mi.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":gi.delete(e.pointerId)}}function Ai(t,e,n,l,a,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:l,nativeEvent:s,targetContainers:[a]},e!==null&&(e=Ql(e),e!==null&&f1(e)),t):(t.eventSystemFlags|=l,e=t.targetContainers,a!==null&&e.indexOf(a)===-1&&e.push(a),t)}function gA(t,e,n,l,a){switch(e){case"focusin":return Kn=Ai(Kn,t,e,n,l,a),!0;case"dragenter":return kn=Ai(kn,t,e,n,l,a),!0;case"mouseover":return Jn=Ai(Jn,t,e,n,l,a),!0;case"pointerover":var s=a.pointerId;return mi.set(s,Ai(mi.get(s)||null,t,e,n,l,a)),!0;case"gotpointercapture":return s=a.pointerId,gi.set(s,Ai(gi.get(s)||null,t,e,n,l,a)),!0}return!1}function h1(t){var e=Ul(t.target);if(e!==null){var n=o(e);if(n!==null){if(e=n.tag,e===13){if(e=h(n),e!==null){t.blockedOn=e,Or(t.priority,function(){r1(n)});return}}else if(e===31){if(e=v(n),e!==null){t.blockedOn=e,Or(t.priority,function(){r1(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Iu(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=bf(t.nativeEvent);if(n===null){n=t.nativeEvent;var l=new n.constructor(n.type,n);bc=l,n.target.dispatchEvent(l),bc=null}else return e=Ql(n),e!==null&&f1(e),t.blockedOn=n,!1;e.shift()}return!0}function m1(t,e,n){Iu(t)&&n.delete(e)}function AA(){Tf=!1,Kn!==null&&Iu(Kn)&&(Kn=null),kn!==null&&Iu(kn)&&(kn=null),Jn!==null&&Iu(Jn)&&(Jn=null),mi.forEach(m1),gi.forEach(m1)}function qu(t,e){t.blockedOn===e&&(t.blockedOn=null,Tf||(Tf=!0,i.unstable_scheduleCallback(i.unstable_NormalPriority,AA)))}var Ku=null;function g1(t){Ku!==t&&(Ku=t,i.unstable_scheduleCallback(i.unstable_NormalPriority,function(){Ku===t&&(Ku=null);for(var e=0;e<t.length;e+=3){var n=t[e],l=t[e+1],a=t[e+2];if(typeof l!="function"){if(Sf(l||n)===null)continue;break}var s=Ql(n);s!==null&&(t.splice(e,3),e-=3,xs(s,{pending:!0,data:a,method:n.method,action:l},l,a))}}))}function va(t){function e(S){return qu(S,t)}Kn!==null&&qu(Kn,t),kn!==null&&qu(kn,t),Jn!==null&&qu(Jn,t),mi.forEach(e),gi.forEach(e);for(var n=0;n<Fn.length;n++){var l=Fn[n];l.blockedOn===t&&(l.blockedOn=null)}for(;0<Fn.length&&(n=Fn[0],n.blockedOn===null);)h1(n),n.blockedOn===null&&Fn.shift();if(n=(t.ownerDocument||t).$$reactFormReplay,n!=null)for(l=0;l<n.length;l+=3){var a=n[l],s=n[l+1],d=a[oe]||null;if(typeof s=="function")d||g1(n);else if(d){var g=null;if(s&&s.hasAttribute("formAction")){if(a=s,d=s[oe]||null)g=d.formAction;else if(Sf(a)!==null)continue}else g=d.action;typeof g=="function"?n[l+1]=g:(n.splice(l,3),l-=3),g1(n)}}}function A1(){function t(s){s.canIntercept&&s.info==="react-transition"&&s.intercept({handler:function(){return new Promise(function(d){return a=d})},focusReset:"manual",scroll:"manual"})}function e(){a!==null&&(a(),a=null),l||setTimeout(n,20)}function n(){if(!l&&!navigation.transition){var s=navigation.currentEntry;s&&s.url!=null&&navigation.navigate(s.url,{state:s.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var l=!1,a=null;return navigation.addEventListener("navigate",t),navigation.addEventListener("navigatesuccess",e),navigation.addEventListener("navigateerror",e),setTimeout(n,100),function(){l=!0,navigation.removeEventListener("navigate",t),navigation.removeEventListener("navigatesuccess",e),navigation.removeEventListener("navigateerror",e),a!==null&&(a(),a=null)}}}function Cf(t){this._internalRoot=t}ku.prototype.render=Cf.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(f(409));var n=e.current,l=we();c1(n,l,t,e,null,null)},ku.prototype.unmount=Cf.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;c1(t.current,2,null,t,null,null),Du(),e[Bl]=null}};function ku(t){this._internalRoot=t}ku.prototype.unstable_scheduleHydration=function(t){if(t){var e=Cr();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Fn.length&&e!==0&&e<Fn[n].priority;n++);Fn.splice(n,0,t),n===0&&h1(t)}};var v1=u.version;if(v1!=="19.2.1")throw Error(f(527,v1,"19.2.1"));_.findDOMNode=function(t){var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(f(188)):(t=Object.keys(t).join(","),Error(f(268,t)));return t=A(e),t=t!==null?x(t):null,t=t===null?null:t.stateNode,t};var vA={bundleType:0,version:"19.2.1",rendererPackageName:"react-dom",currentDispatcherRef:M,reconcilerVersion:"19.2.1"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ju=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ju.isDisabled&&Ju.supportsFiber)try{Ca=Ju.inject(vA),xe=Ju}catch{}}return pi.createRoot=function(t,e){if(!r(t))throw Error(f(299));var n=!1,l="",a=To,s=Co,d=Oo;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(l=e.identifierPrefix),e.onUncaughtError!==void 0&&(a=e.onUncaughtError),e.onCaughtError!==void 0&&(s=e.onCaughtError),e.onRecoverableError!==void 0&&(d=e.onRecoverableError)),e=i1(t,1,!1,null,null,n,l,null,a,s,d,A1),t[Bl]=e.current,uf(t),new Cf(e)},pi.hydrateRoot=function(t,e,n){if(!r(t))throw Error(f(299));var l=!1,a="",s=To,d=Co,g=Oo,S=null;return n!=null&&(n.unstable_strictMode===!0&&(l=!0),n.identifierPrefix!==void 0&&(a=n.identifierPrefix),n.onUncaughtError!==void 0&&(s=n.onUncaughtError),n.onCaughtError!==void 0&&(d=n.onCaughtError),n.onRecoverableError!==void 0&&(g=n.onRecoverableError),n.formState!==void 0&&(S=n.formState)),e=i1(t,1,!0,e,n??null,l,a,S,s,d,g,A1),e.context=u1(null),n=e.current,l=we(),l=mc(l),a=Bn(l),a.callback=null,Un(n,a,l),n=l,e.current.lanes=n,Da(e,n),_e(e),t[Bl]=e.current,uf(t),new ku(e)},pi.version="19.2.1",pi}var y2;function c3(){if(y2)return Yf.exports;y2=1;function i(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(i)}catch(u){console.error(u)}}return i(),Yf.exports=u3(),Yf.exports}var s3=c3();class uc{constructor(){this.project=[],this.status=[],this.text=[],this.labels=[],this.annotations=[]}empty(){return this.project.length+this.status.length+this.text.length+this.labels.length+this.annotations.length===0}static parse(u){const c=uc.tokenize(u),f=new Set,r=new Set,o=[],h=new Set,v=new Set;for(let A of c){const x=A.startsWith("!");if(x&&(A=A.slice(1)),A.startsWith("p:")){f.add({name:A.slice(2),not:x});continue}if(A.startsWith("s:")){r.add({name:A.slice(2),not:x});continue}if(A.startsWith("@")){h.add({name:A,not:x});continue}if(A.startsWith("annot:")){v.add({name:A.slice(6),not:x});continue}o.push({name:A.toLowerCase(),not:x})}const y=new uc;return y.text=o,y.project=[...f],y.status=[...r],y.labels=[...h],y.annotations=[...v],y}static tokenize(u){const c=[];let f,r=[];for(let o=0;o<u.length;++o){const h=u[o];if(f&&h==="\\"&&u[o+1]===f){r.push(f),++o;continue}if(h==='"'||h==="'"){f===h?(c.push(r.join("").toLowerCase()),r=[],f=void 0):f?r.push(h):f=h;continue}if(f){r.push(h);continue}if(h===" "){r.length&&(c.push(r.join("").toLowerCase()),r=[]);continue}r.push(h)}return r.length&&c.push(r.join("").toLowerCase()),c}matches(u){const c=f3(u);if(this.project.length&&!!!this.project.find(r=>{const o=c.project.includes(r.name);return r.not?!o:o}))return!1;if(this.status.length){if(!!!this.status.find(r=>{const o=c.status.includes(r.name);return r.not?!o:o}))return!1}else if(c.status==="skipped")return!1;return!(this.text.length&&!this.text.every(r=>{if(c.text.includes(r.name))return!r.not;const[o,h,v]=r.name.split(":");return c.file.includes(o)&&c.line===h&&(v===void 0||c.column===v)?!r.not:!!r.not})||this.labels.length&&!this.labels.every(r=>{const o=c.labels.includes(r.name);return r.not?!o:o})||this.annotations.length&&!this.annotations.every(r=>{const o=c.annotations.some(h=>h.includes(r.name));return r.not?!o:o}))}}const E2=Symbol("searchValues");function f3(i){const u=i[E2];if(u)return u;let c="passed";i.outcome==="unexpected"&&(c="failed"),i.outcome==="flaky"&&(c="flaky"),i.outcome==="skipped"&&(c="skipped");const f={text:(c+" "+i.projectName+" "+i.tags.join(" ")+" "+i.location.file+" "+i.path.join(" ")+" "+i.title).toLowerCase(),project:i.projectName.toLowerCase(),status:c,file:i.location.file,line:String(i.location.line),column:String(i.location.column),labels:i.tags.map(r=>r.toLowerCase()),annotations:i.annotations.map(r=>r.type.toLowerCase()+"="+(r.description??"").toLowerCase())};return i[E2]=f,f}const r3=/("[^"]*"|"[^"]*$|\S+)/g;function Ml(i,u,c){const f=new URLSearchParams(i),o=[...(i.get("q")??"").matchAll(r3)].map(y=>{const A=y[0];return A.startsWith('"')&&A.endsWith('"')&&A.length>1?A.slice(1,A.length-1):A});if(c)return f.set("q",p2(o.includes(u)?o.filter(y=>y!==u):[...o,u])),"#?"+f;let h;u.startsWith("s:")&&(h="s:"),u.startsWith("p:")&&(h="p:"),u.startsWith("@")&&(h="@");const v=o.filter(y=>!y.startsWith(h));return v.push(u),f.set("q",p2(v)),"#?"+f}function p2(i){return i.map(u=>/\s/.test(u)?`"${u}"`:u).join(" ").trim()}const o3=()=>m.jsx("span",{className:"octicon",style:{width:16,height:16}}),Oh=()=>m.jsx("svg",{"aria-hidden":"true",height:"16",viewBox:"0 0 16 16",version:"1.1",width:"16","data-view-component":"true",className:"octicon subnav-search-icon",children:m.jsx("path",{fillRule:"evenodd",d:"M11.5 7a4.499 4.499 0 11-8.998 0A4.499 4.499 0 0111.5 7zm-.82 4.74a6 6 0 111.06-1.06l3.04 3.04a.75.75 0 11-1.06 1.06l-3.04-3.04z"})}),Mi=()=>m.jsx("svg",{"aria-hidden":"true",height:"16",viewBox:"0 0 16 16",version:"1.1",width:"16",className:"octicon color-fg-muted",children:m.jsx("path",{fillRule:"evenodd",d:"M12.78 6.22a.75.75 0 010 1.06l-4.25 4.25a.75.75 0 01-1.06 0L3.22 7.28a.75.75 0 011.06-1.06L8 9.94l3.72-3.72a.75.75 0 011.06 0z"})}),Sa=()=>m.jsx("svg",{"aria-hidden":"true",height:"16",viewBox:"0 0 16 16",version:"1.1",width:"16","data-view-component":"true",className:"octicon color-fg-muted",children:m.jsx("path",{fillRule:"evenodd",d:"M6.22 3.22a.75.75 0 011.06 0l4.25 4.25a.75.75 0 010 1.06l-4.25 4.25a.75.75 0 01-1.06-1.06L9.94 8 6.22 4.28a.75.75 0 010-1.06z"})}),Dh=()=>m.jsx("svg",{"aria-hidden":"true",height:"16",viewBox:"0 0 16 16",version:"1.1",width:"16","data-view-component":"true",className:"octicon color-text-warning",children:m.jsx("path",{fillRule:"evenodd",d:"M8.22 1.754a.25.25 0 00-.44 0L1.698 13.132a.25.25 0 00.22.368h12.164a.25.25 0 00.22-.368L8.22 1.754zm-1.763-.707c.659-1.234 2.427-1.234 3.086 0l6.082 11.378A1.75 1.75 0 0114.082 15H1.918a1.75 1.75 0 01-1.543-2.575L6.457 1.047zM9 11a1 1 0 11-2 0 1 1 0 012 0zm-.25-5.25a.75.75 0 00-1.5 0v2.5a.75.75 0 001.5 0v-2.5z"})}),Rh=()=>m.jsx("svg",{"aria-hidden":"true",height:"16",viewBox:"0 0 16 16",version:"1.1",width:"16","data-view-component":"true",className:"octicon color-fg-muted",children:m.jsx("path",{fillRule:"evenodd",d:"M3.5 1.75a.25.25 0 01.25-.25h3a.75.75 0 000 1.5h.5a.75.75 0 000-1.5h2.086a.25.25 0 01.177.073l2.914 2.914a.25.25 0 01.073.177v8.586a.25.25 0 01-.25.25h-.5a.75.75 0 000 1.5h.5A1.75 1.75 0 0014 13.25V4.664c0-.464-.184-.909-.513-1.237L10.573.513A1.75 1.75 0 009.336 0H3.75A1.75 1.75 0 002 1.75v11.5c0 .649.353 1.214.874 1.515a.75.75 0 10.752-1.298.25.25 0 01-.126-.217V1.75zM8.75 3a.75.75 0 000 1.5h.5a.75.75 0 000-1.5h-.5zM6 5.25a.75.75 0 01.75-.75h.5a.75.75 0 010 1.5h-.5A.75.75 0 016 5.25zm2 1.5A.75.75 0 018.75 6h.5a.75.75 0 010 1.5h-.5A.75.75 0 018 6.75zm-1.25.75a.75.75 0 000 1.5h.5a.75.75 0 000-1.5h-.5zM8 9.75A.75.75 0 018.75 9h.5a.75.75 0 010 1.5h-.5A.75.75 0 018 9.75zm-.75.75a1.75 1.75 0 00-1.75 1.75v3c0 .414.336.75.75.75h2.5a.75.75 0 00.75-.75v-3a1.75 1.75 0 00-1.75-1.75h-.5zM7 12.25a.25.25 0 01.25-.25h.5a.25.25 0 01.25.25v2.25H7v-2.25z"})}),d3=()=>m.jsx("svg",{"aria-hidden":"true",height:"16",viewBox:"0 0 16 16",version:"1.1",width:"16","data-view-component":"true",className:"octicon color-fg-muted indirect-attachment-indicator",children:m.jsx("path",{fillRule:"evenodd",d:"M3.5 1.75a.25.25 0 01.25-.25h3a.75.75 0 000 1.5h.5a.75.75 0 000-1.5h2.086a.25.25 0 01.177.073l2.914 2.914a.25.25 0 01.073.177v8.586a.25.25 0 01-.25.25h-.5a.75.75 0 000 1.5h.5A1.75 1.75 0 0014 13.25V4.664c0-.464-.184-.909-.513-1.237L10.573.513A1.75 1.75 0 009.336 0H3.75A1.75 1.75 0 002 1.75v11.5c0 .649.353 1.214.874 1.515a.75.75 0 10.752-1.298.25.25 0 01-.126-.217V1.75zM8.75 3a.75.75 0 000 1.5h.5a.75.75 0 000-1.5h-.5zM6 5.25a.75.75 0 01.75-.75h.5a.75.75 0 010 1.5h-.5A.75.75 0 016 5.25zm2 1.5A.75.75 0 018.75 6h.5a.75.75 0 010 1.5h-.5A.75.75 0 018 6.75zm-1.25.75a.75.75 0 000 1.5h.5a.75.75 0 000-1.5h-.5zM8 9.75A.75.75 0 018.75 9h.5a.75.75 0 010 1.5h-.5A.75.75 0 018 9.75zm-.75.75a1.75 1.75 0 00-1.75 1.75v3c0 .414.336.75.75.75h2.5a.75.75 0 00.75-.75v-3a1.75 1.75 0 00-1.75-1.75h-.5zM7 12.25a.25.25 0 01.25-.25h.5a.25.25 0 01.25.25v2.25H7v-2.25z"})}),wh=()=>m.jsx("svg",{className:"octicon color-text-danger",viewBox:"0 0 16 16",version:"1.1",width:"16",height:"16","aria-hidden":"true",children:m.jsx("path",{fillRule:"evenodd",d:"M3.72 3.72a.75.75 0 011.06 0L8 6.94l3.22-3.22a.75.75 0 111.06 1.06L9.06 8l3.22 3.22a.75.75 0 11-1.06 1.06L8 9.06l-3.22 3.22a.75.75 0 01-1.06-1.06L6.94 8 3.72 4.78a.75.75 0 010-1.06z"})}),Mh=()=>m.jsx("svg",{"aria-hidden":"true",height:"16",viewBox:"0 0 16 16",version:"1.1",width:"16","data-view-component":"true",className:"octicon color-icon-success",children:m.jsx("path",{fillRule:"evenodd",d:"M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z"})}),jh=()=>m.jsx("svg",{"aria-hidden":"true",height:"16",viewBox:"0 0 16 16",version:"1.1",width:"16","data-view-component":"true",className:"octicon octicon-clock color-text-danger",children:m.jsx("path",{fillRule:"evenodd",d:"M5.75.75A.75.75 0 016.5 0h3a.75.75 0 010 1.5h-.75v1l-.001.041a6.718 6.718 0 013.464 1.435l.007-.006.75-.75a.75.75 0 111.06 1.06l-.75.75-.006.007a6.75 6.75 0 11-10.548 0L2.72 5.03l-.75-.75a.75.75 0 011.06-1.06l.75.75.007.006A6.718 6.718 0 017.25 2.541a.756.756 0 010-.041v-1H6.5a.75.75 0 01-.75-.75zM8 14.5A5.25 5.25 0 108 4a5.25 5.25 0 000 10.5zm.389-6.7l1.33-1.33a.75.75 0 111.061 1.06L9.45 8.861A1.502 1.502 0 018 10.75a1.5 1.5 0 11.389-2.95z"})}),h3=()=>m.jsx("svg",{"aria-hidden":"true",viewBox:"0 0 16 16",width:"16",height:"16","data-view-component":"true",className:"octicon color-fg-muted",children:m.jsx("path",{d:"M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0ZM1.5 8a6.5 6.5 0 1 0 13 0 6.5 6.5 0 0 0-13 0Zm9.78-2.22-5.5 5.5a.749.749 0 0 1-1.275-.326.749.749 0 0 1 .215-.734l5.5-5.5a.751.751 0 0 1 1.042.018.751.751 0 0 1 .018 1.042Z"})}),m3=()=>m.jsx("svg",{className:"octicon",viewBox:"0 0 48 48",version:"1.1",width:"20",height:"20","aria-hidden":"true",children:m.jsx("path",{xmlns:"http://www.w3.org/2000/svg",d:"M11.85 32H36.2l-7.35-9.95-6.55 8.7-4.6-6.45ZM7 40q-1.2 0-2.1-.9Q4 38.2 4 37V11q0-1.2.9-2.1Q5.8 8 7 8h34q1.2 0 2.1.9.9.9.9 2.1v26q0 1.2-.9 2.1-.9.9-2.1.9Zm0-29v26-26Zm34 26V11H7v26Z"})}),g3=()=>m.jsx("svg",{className:"octicon",viewBox:"0 0 48 48",version:"1.1",width:"20",height:"20","aria-hidden":"true",children:m.jsx("path",{xmlns:"http://www.w3.org/2000/svg",d:"m19.6 32.35 13-8.45-13-8.45ZM7 40q-1.2 0-2.1-.9Q4 38.2 4 37V11q0-1.2.9-2.1Q5.8 8 7 8h34q1.2 0 2.1.9.9.9.9 2.1v26q0 1.2-.9 2.1-.9.9-2.1.9Zm0-3h34V11H7v26Zm0 0V11v26Z"})}),A3=()=>m.jsx("svg",{className:"octicon",viewBox:"0 0 48 48",version:"1.1",width:"20",height:"20","aria-hidden":"true",children:m.jsx("path",{xmlns:"http://www.w3.org/2000/svg",d:"M7 37h9.35V11H7v26Zm12.35 0h9.3V11h-9.3v26Zm12.3 0H41V11h-9.35v26ZM7 40q-1.2 0-2.1-.9Q4 38.2 4 37V11q0-1.2.9-2.1Q5.8 8 7 8h34q1.2 0 2.1.9.9.9.9 2.1v26q0 1.2-.9 2.1-.9.9-2.1.9Z"})}),v3=()=>m.jsxs("svg",{className:"octicon",viewBox:"0 0 16 16",width:"16",height:"16","aria-hidden":"true",children:[m.jsx("path",{d:"M0 6.75C0 5.784.784 5 1.75 5h1.5a.75.75 0 0 1 0 1.5h-1.5a.25.25 0 0 0-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 0 0 .25-.25v-1.5a.75.75 0 0 1 1.5 0v1.5A1.75 1.75 0 0 1 9.25 16h-7.5A1.75 1.75 0 0 1 0 14.25Z"}),m.jsx("path",{d:"M5 1.75C5 .784 5.784 0 6.75 0h7.5C15.216 0 16 .784 16 1.75v7.5A1.75 1.75 0 0 1 14.25 11h-7.5A1.75 1.75 0 0 1 5 9.25Zm1.75-.25a.25.25 0 0 0-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 0 0 .25-.25v-7.5a.25.25 0 0 0-.25-.25Z"})]}),y3=()=>m.jsx("svg",{className:"octicon octicon-settings",viewBox:"0 0 16 16",width:"16",height:"16","aria-hidden":"true",children:m.jsx("path",{d:"M8 0a8.2 8.2 0 0 1 .701.031C9.444.095 9.99.645 10.16 1.29l.288 1.107c.018.066.079.158.212.224.231.114.454.243.668.386.123.082.233.09.299.071l1.103-.303c.644-.176 1.392.021 1.82.63.27.385.506.792.704 1.218.315.675.111 1.422-.364 1.891l-.814.806c-.049.048-.098.147-.088.294.016.257.016.515 0 .772-.01.147.038.246.088.294l.814.806c.475.469.679 1.216.364 1.891a7.977 7.977 0 0 1-.704 1.217c-.428.61-1.176.807-1.82.63l-1.102-.302c-.067-.019-.177-.011-.3.071a5.909 5.909 0 0 1-.668.386c-.133.066-.194.158-.211.224l-.29 1.106c-.168.646-.715 1.196-1.458 1.26a8.006 8.006 0 0 1-1.402 0c-.743-.064-1.289-.614-1.458-1.26l-.289-1.106c-.018-.066-.079-.158-.212-.224a5.738 5.738 0 0 1-.668-.386c-.123-.082-.233-.09-.299-.071l-1.103.303c-.644.176-1.392-.021-1.82-.63a8.12 8.12 0 0 1-.704-1.218c-.315-.675-.111-1.422.363-1.891l.815-.806c.05-.048.098-.147.088-.294a6.214 6.214 0 0 1 0-.772c.01-.147-.038-.246-.088-.294l-.815-.806C.635 6.045.431 5.298.746 4.623a7.92 7.92 0 0 1 .704-1.217c.428-.61 1.176-.807 1.82-.63l1.102.302c.067.019.177.011.3-.071.214-.143.437-.272.668-.386.133-.066.194-.158.211-.224l.29-1.106C6.009.645 6.556.095 7.299.03 7.53.01 7.764 0 8 0Zm-.571 1.525c-.036.003-.108.036-.137.146l-.289 1.105c-.147.561-.549.967-.998 1.189-.173.086-.34.183-.5.29-.417.278-.97.423-1.529.27l-1.103-.303c-.109-.03-.175.016-.195.045-.22.312-.412.644-.573.99-.014.031-.021.11.059.19l.815.806c.411.406.562.957.53 1.456a4.709 4.709 0 0 0 0 .582c.032.499-.119 1.05-.53 1.456l-.815.806c-.081.08-.073.159-.059.19.162.346.353.677.573.989.02.03.085.076.195.046l1.102-.303c.56-.153 1.113-.008 1.53.27.161.107.328.204.501.29.447.222.85.629.997 1.189l.289 1.105c.029.109.101.143.137.146a6.6 6.6 0 0 0 1.142 0c.036-.003.108-.036.137-.146l.289-1.105c.147-.561.549-.967.998-1.189.173-.086.34-.183.5-.29.417-.278.97-.423 1.529-.27l1.103.303c.109.029.175-.016.195-.045.22-.313.411-.644.573-.99.014-.031.021-.11-.059-.19l-.815-.806c-.411-.406-.562-.957-.53-1.456a4.709 4.709 0 0 0 0-.582c-.032-.499.119-1.05.53-1.456l.815-.806c.081-.08.073-.159.059-.19a6.464 6.464 0 0 0-.573-.989c-.02-.03-.085-.076-.195-.046l-1.102.303c-.56.153-1.113.008-1.53-.27a4.44 4.44 0 0 0-.501-.29c-.447-.222-.85-.629-.997-1.189l-.289-1.105c-.029-.11-.101-.143-.137-.146a6.6 6.6 0 0 0-1.142 0ZM11 8a3 3 0 1 1-6 0 3 3 0 0 1 6 0ZM9.5 8a1.5 1.5 0 1 0-3.001.001A1.5 1.5 0 0 0 9.5 8Z"})}),Nh=({value:i})=>{const[u,c]=it.useState("copy"),f=it.useCallback(()=>{navigator.clipboard.writeText(i).then(()=>{c("check"),setTimeout(()=>{c("copy")},3e3)},()=>{c("cross")})},[i]),r=u==="check"?Mh():u==="cross"?wh():v3();return m.jsx("button",{className:"copy-icon",title:"Copy to clipboard","aria-label":"Copy to clipboard",onClick:f,children:r})},or=({children:i,value:u})=>m.jsxs("span",{className:"copy-value-container",children:[i,m.jsx("span",{className:"copy-button-container",children:m.jsx(Nh,{value:u})})]});function E3(i,u,c,f){const[r,o]=ue.useState(c);return ue.useEffect(()=>{let h=!1;return i().then(v=>{h||o(v)}),()=>{h=!0}},u),r}function Hh(){const i=ue.useRef(null),[u]=$f(i);return[u,i]}function $f(i){const[u,c]=ue.useState(new DOMRect(0,0,10,10)),f=ue.useCallback(()=>{const r=i==null?void 0:i.current;r&&c(r.getBoundingClientRect())},[i]);return ue.useLayoutEffect(()=>{const r=i==null?void 0:i.current;if(!r)return;f();const o=new ResizeObserver(f);return o.observe(r),window.addEventListener("resize",f),()=>{o.disconnect(),window.removeEventListener("resize",f)}},[f,i]),[u,f]}function Bh(i,u){u=Dl.getObject(i,u);const[c,f]=ue.useState(u),r=ue.useCallback(o=>{Dl.setObject(i,o)},[i,f]);return ue.useEffect(()=>{{const o=()=>f(Dl.getObject(i,u));return Dl.onChangeEmitter.addEventListener(i,o),()=>Dl.onChangeEmitter.removeEventListener(i,o)}},[u,i]),[c,r]}class p3{constructor(){this.onChangeEmitter=new EventTarget}getString(u,c){return localStorage[u]||c}setString(u,c){var f;localStorage[u]=c,this.onChangeEmitter.dispatchEvent(new Event(u)),(f=window.saveSettings)==null||f.call(window)}getObject(u,c){if(!localStorage[u])return c;try{return JSON.parse(localStorage[u])}catch{return c}}setObject(u,c){var f;localStorage[u]=JSON.stringify(c),this.onChangeEmitter.dispatchEvent(new Event(u)),(f=window.saveSettings)==null||f.call(window)}}const Dl=new p3;function Ze(...i){return i.filter(Boolean).join(" ")}const x2="\\u0000-\\u0020\\u007f-\\u009f",x3=new RegExp("(?:[a-zA-Z][a-zA-Z0-9+.-]{2,}:\\/\\/|www\\.)[^\\s"+x2+'"]{2,}[^\\s'+x2+`"')}\\],:;.!?]`,"ug");function b3(){const[i,u]=ue.useState(!1),c=ue.useCallback(()=>{const f=[];return u(r=>(f.push(setTimeout(()=>u(!1),1e3)),r?(f.push(setTimeout(()=>u(!0),50)),!1):!0)),()=>f.forEach(clearTimeout)},[u]);return[i,c]}function Di(i){const u=[];let c=0,f;for(;(f=x3.exec(i))!==null;){const o=i.substring(c,f.index);o&&u.push(o);const h=f[0];u.push(S3(h)),c=f.index+h.length}const r=i.substring(c);return r&&u.push(r),u}function S3(i){let u=i;return u.startsWith("www.")&&(u="https://"+u),m.jsx("a",{href:u,target:"_blank",rel:"noopener noreferrer",children:i})}const T3=({summary:i,children:u,className:c,style:f})=>{const[r,o]=ue.useState(!1),h=v=>{o(v.currentTarget.open)};return m.jsxs("details",{style:f,className:c,onToggle:h,children:[m.jsxs("summary",{className:"expandable-summary",children:[r?Mi():Sa(),i]}),u]})};function C3(i){let u=0;for(let c=0;c<i.length;c++)u=i.charCodeAt(c)+((u<<8)-u);return Math.abs(u%6)}function Ve(i){if(!i)return i;try{const u=new URL(i,window.location.href);if(u.origin===window.location.origin){for(const[c,f]of new URLSearchParams(window.location.search))u.searchParams.set(c,f);return u.toString()}return i}catch{return i}}const Uh=({label:i,href:u,onClick:c,colorIndex:f,trimAtSymbolPrefix:r})=>{const o=m.jsx("span",{className:Ze("label","label-color-"+(f!==void 0?f:C3(i))),onClick:c?h=>c(h,i):void 0,children:r&&i.startsWith("@")?i.slice(1):i});return u?m.jsx("a",{className:"label-anchor",href:Ve(u),children:o}):o},Qh=({projectNames:i,activeProjectName:u,otherLabels:c,style:f})=>{const r=i.length>0&&!!u;return(r||c.length>0)&&m.jsxs("span",{className:"label-row",style:f,children:[r&&m.jsx(D3,{projectNames:i,projectName:u}),m.jsx(O3,{labels:c})]})},O3=({labels:i})=>{const u=se(),c=it.useCallback((f,r)=>{const o=new URLSearchParams(u);f.preventDefault(),o.has("testId")&&o.delete("speedboard"),o.delete("testId"),ll(Ml(o,r,f.metaKey||f.ctrlKey))},[u]);return m.jsx(m.Fragment,{children:i.map(f=>m.jsx(Uh,{label:f,trimAtSymbolPrefix:!0,onClick:c},f))})};function ll(i){window.history.pushState({},"",i);const u=new PopStateEvent("popstate");window.dispatchEvent(u)}const Vf=({predicate:i,children:u})=>i(se())?u:null,bn=({click:i,ctrlClick:u,children:c,...f})=>m.jsx("a",{...f,style:{textDecoration:"none",color:"var(--color-fg-default)",cursor:"pointer"},onClick:r=>{i&&(r.preventDefault(),ll(Ve((r.metaKey||r.ctrlKey)&&u||i)))},children:c}),dr=({className:i,...u})=>m.jsx(bn,{...u,className:Ze("link-badge",u.dim&&"link-badge-dim",i)}),D3=({projectNames:i,projectName:u})=>{const c=new URLSearchParams(se());return c.has("testId")&&c.delete("speedboard"),c.delete("testId"),m.jsx(bn,{click:Ml(c,`p:${u}`,!1),ctrlClick:Ml(c,`p:${u}`,!0),children:m.jsx(Uh,{label:u,colorIndex:i.indexOf(u)%6})})},$u=({attachment:i,result:u,href:c,linkName:f,openInNewTab:r})=>{const[o,h]=b3();hr("attachment-"+u.attachments.indexOf(i),h);const v=m.jsxs("span",{children:[i.contentType===M3?Dh():Rh(),i.path&&(r?m.jsx("a",{href:Ve(c||i.path),target:"_blank",rel:"noreferrer",children:f||i.name}):m.jsx("a",{href:Ve(c||i.path),download:w3(i),children:f||i.name})),!i.path&&(r?m.jsx("a",{href:URL.createObjectURL(new Blob([i.body],{type:i.contentType})),target:"_blank",rel:"noreferrer",onClick:y=>y.stopPropagation(),children:i.name}):m.jsx("span",{children:Di(i.name)}))]});return i.body?m.jsx(T3,{style:{lineHeight:"32px"},className:Ze(o&&"attachment-flash"),summary:v,children:m.jsxs("div",{className:"attachment-body",children:[m.jsx(Nh,{value:i.body}),Di(i.body)]})}):m.jsxs("div",{style:{lineHeight:"32px",whiteSpace:"nowrap",paddingLeft:4},className:Ze(o&&"attachment-flash"),children:[m.jsx("span",{style:{visibility:"hidden"},children:Sa()}),v]})},zh=({test:i,trailingSeparator:u,dim:c})=>{const f=i.results.map(r=>r.attachments.filter(o=>o.name==="trace")).filter(r=>r.length>0)[0];if(f)return m.jsxs(m.Fragment,{children:[m.jsxs(dr,{href:Ve(Lh(f)),title:"View Trace",className:"button trace-link",dim:c,children:[A3(),m.jsx("span",{children:"View Trace"})]}),u&&m.jsx("div",{className:"trace-link-separator",children:"|"})]})},Yh=it.createContext(new URLSearchParams(window.location.hash.slice(1)));function se(){return it.useContext(Yh)}const R3=({children:i})=>{const[u,c]=it.useState(new URLSearchParams(window.location.hash.slice(1)));return it.useEffect(()=>{const f=()=>c(new URLSearchParams(window.location.hash.slice(1)));return window.addEventListener("popstate",f),()=>window.removeEventListener("popstate",f)},[]),m.jsx(Yh.Provider,{value:u,children:i})};function w3(i){if(i.name.includes(".")||!i.path)return i.name;const u=i.path.indexOf(".");return u===-1?i.name:i.name+i.path.slice(u,i.path.length)}function Lh(i){return`trace/index.html?${i.map((u,c)=>`trace=${new URL(u.path,window.location.href)}`).join("&")}`}const M3="x-playwright/missing";function hr(i,u){const c=se(),f=j3(i);it.useEffect(()=>{if(f)return u()},[f,u,c])}function j3(i){const u=se().get("anchor");return u===null||typeof i>"u"?!1:typeof i=="string"?i===u:Array.isArray(i)?i.includes(u):i(u)}function xi({id:i,children:u}){const c=it.useRef(null),f=it.useCallback(()=>{var r;(r=c.current)==null||r.scrollIntoView({block:"start",inline:"start"})},[]);return hr(i,f),m.jsx("div",{ref:c,children:u})}function il({test:i,result:u,anchor:c},f){const r=new URLSearchParams(f);return i&&r.set("testId",i.testId),i&&u&&r.set("run",""+i.results.indexOf(u)),c&&r.set("anchor",c),"#?"+r}function fc(i){switch(i){case"failed":case"unexpected":return wh();case"passed":case"expected":return Mh();case"timedOut":return jh();case"flaky":return Dh();case"skipped":case"interrupted":return h3()}}const N3=({className:i,style:u,open:c,isModal:f,minWidth:r,verticalOffset:o,requestClose:h,anchor:v,dataTestId:y,children:A})=>{const x=it.useRef(null),[T,D]=it.useState(0),[X]=$f(x),[q,p]=$f(v),E=v?H3(X,q,o):void 0;return it.useEffect(()=>{const b=N=>{!x.current||!(N.target instanceof Node)||x.current.contains(N.target)||h==null||h()},R=N=>{N.key==="Escape"&&(h==null||h())};return c?(document.addEventListener("mousedown",b),document.addEventListener("keydown",R),()=>{document.removeEventListener("mousedown",b),document.removeEventListener("keydown",R)}):()=>{}},[c,h]),it.useLayoutEffect(()=>p(),[c,p]),it.useEffect(()=>{const b=()=>D(R=>R+1);return window.addEventListener("resize",b),()=>{window.removeEventListener("resize",b)}},[]),it.useLayoutEffect(()=>{x.current&&(c?f?x.current.showModal():x.current.show():x.current.close())},[c,f]),m.jsx("dialog",{ref:x,style:{position:"fixed",margin:E?0:void 0,zIndex:110,top:E==null?void 0:E.top,left:E==null?void 0:E.left,minWidth:r||0,...u},className:i,"data-testid":y,children:A})};function H3(i,u,c=4,f=4){let r=Math.max(f,u.left);r+i.width>window.innerWidth-f&&(r=window.innerWidth-i.width-f);let o=Math.max(0,u.bottom)+c;return o+i.height>window.innerHeight-c&&(Math.max(0,u.top)>i.height+c?o=Math.max(0,u.top)-i.height-c:o=window.innerHeight-c-i.height),{left:r,top:o}}const B3="system",Gh="theme",U3=[{label:"Dark mode",value:"dark-mode"},{label:"Light mode",value:"light-mode"},{label:"System",value:"system"}],Xh=window.matchMedia("(prefers-color-scheme: dark)");function Q3(){document.playwrightThemeInitialized||(document.playwrightThemeInitialized=!0,document.defaultView.addEventListener("focus",i=>{i.target.document.nodeType===Node.DOCUMENT_NODE&&document.body.classList.remove("inactive")},!1),document.defaultView.addEventListener("blur",i=>{document.body.classList.add("inactive")},!1),tr(er()),Xh.addEventListener("change",()=>{tr(er())}))}const z3=new Set;function tr(i){const u=Y3(),c=i==="system"?Xh.matches?"dark-mode":"light-mode":i;if(u!==c){u&&document.documentElement.classList.remove(u),document.documentElement.classList.add(c);for(const f of z3)f(c)}}function er(){return Dl.getString(Gh,B3)}function Y3(){return document.documentElement.classList.contains("dark-mode")?"dark-mode":document.documentElement.classList.contains("light-mode")?"light-mode":null}function L3(){const[i,u]=ue.useState(er());return ue.useEffect(()=>{Dl.setString(Gh,i),tr(i)},[i]),[i,u]}const mr=({title:i,leftSuperHeader:u,rightSuperHeader:c})=>m.jsxs("div",{className:"header-view",children:[m.jsxs("div",{className:"hbox header-superheader",children:[u,m.jsx("div",{style:{flex:"auto"}}),c]}),i&&m.jsx("div",{className:"header-title",children:Di(i)})]}),G3=({stats:i,filterText:u,setFilterText:c})=>{const f=se().get("q");return it.useEffect(()=>{c(f?`${f.trim()} `:"")},[f,c]),m.jsx(m.Fragment,{children:m.jsxs("div",{className:"pt-3",children:[m.jsx("div",{className:"header-view-status-container ml-2 pl-2 d-flex",children:m.jsx(X3,{stats:i})}),m.jsxs("form",{className:"subnav-search",onSubmit:r=>{r.preventDefault();const o=new URL(window.location.href),h=new URLSearchParams(o.hash.slice(1)),v=new FormData(r.target).get("q"),y=new URLSearchParams({q:v});h.has("speedboard")&&y.set("speedboard",""),y.toString()&&(o.hash="?"+y.toString()),ll(o)},children:[Oh(),m.jsx("input",{name:"q",spellCheck:!1,className:"form-control subnav-search-input input-contrast width-full","aria-label":"Search tests",placeholder:"Search tests",value:u,onChange:r=>{c(r.target.value)}})]})]})})},X3=({stats:i})=>{const u=se().has("speedboard");return m.jsxs("nav",{children:[m.jsxs(bn,{className:"subnav-item",href:"#?",children:[m.jsx("span",{className:"subnav-item-label",children:"All"}),m.jsx("span",{className:"d-inline counter",children:i.total-i.skipped})]}),m.jsx(tc,{token:"passed",count:i.expected}),m.jsx(tc,{token:"failed",count:i.unexpected}),m.jsx(tc,{token:"flaky",count:i.flaky}),m.jsx(tc,{token:"skipped",count:i.skipped}),m.jsx(bn,{className:"subnav-item",href:"#?speedboard",title:"Speedboard","aria-selected":u,children:jh()}),m.jsx(V3,{})]})},tc=({token:i,count:u})=>{const c=new URLSearchParams(se());c.delete("speedboard"),c.delete("testId");const f=`s:${i}`,r=Ml(c,f,!1),o=Ml(c,f,!0),h=i.charAt(0).toUpperCase()+i.slice(1);return m.jsxs(bn,{className:"subnav-item",href:r,click:r,ctrlClick:o,children:[u>0&&fc(i),m.jsx("span",{className:"subnav-item-label",children:h}),m.jsx("span",{className:"d-inline counter",children:u})]})},V3=()=>{const i=it.useRef(null),[u,c]=it.useState(!1),[f,r]=L3(),[o,h]=Bh("mergeFiles",!1);return m.jsxs(m.Fragment,{children:[m.jsx("div",{role:"button",ref:i,style:{cursor:"pointer"},className:"subnav-item",title:"Settings",onClick:v=>{c(!u),v.preventDefault()},onMouseDown:Z3,children:y3()}),m.jsxs(N3,{open:u,minWidth:150,verticalOffset:4,requestClose:()=>c(!1),anchor:i,dataTestId:"settings-dialog",children:[m.jsxs("label",{className:"header-setting-theme",children:["Theme:",m.jsx("select",{value:f,onChange:v=>r(v.target.value),children:U3.map(v=>m.jsx("option",{value:v.value,children:v.label},v.value))})]}),m.jsxs("label",{style:{cursor:"pointer",display:"flex",alignItems:"center",gap:4},children:[m.jsx("input",{type:"checkbox",checked:o,onChange:()=>h(!o)}),"Merge files"]})]})]})},Z3=i=>{i.stopPropagation(),i.preventDefault()},I3=({tabs:i,selectedTab:u,setSelectedTab:c})=>{const f=it.useId(),r=it.useRef(null),o=h=>{var x;const v=Array.from(((x=r.current)==null?void 0:x.querySelectorAll('[role="tab"]'))??[]),y=v.findIndex(T=>T===document.activeElement);if(y===-1)return;let A=y;if(h.key==="ArrowRight")A=(y+1)%v.length;else if(h.key==="ArrowLeft")A=(y-1+v.length)%v.length;else if(h.key==="Home")A=0;else if(h.key==="End")A=v.length-1;else return;h.preventDefault(),v[A].focus(),c(i[A].id)};return m.jsx("div",{className:"tabbed-pane",children:m.jsxs("div",{className:"vbox",children:[m.jsx("div",{className:"hbox",style:{flex:"none"},children:m.jsx("div",{className:"tabbed-pane-tab-strip",role:"tablist",onKeyDown:o,ref:r,children:i.map(h=>m.jsx("div",{className:Ze("tabbed-pane-tab-element",u===h.id&&"selected"),onClick:()=>c(h.id),id:`${f}-${h.id}`,role:"tab",tabIndex:u===h.id?0:-1,"aria-selected":u===h.id,children:m.jsx("div",{className:"tabbed-pane-tab-label",children:h.title})},h.id))})}),i.map(h=>{if(u===h.id)return m.jsx("div",{className:"tab-content",role:"tabpanel","aria-labelledby":`${f}-${h.id}`,children:h.render()},h.id)})]})})},gr=({header:i,footer:u,expanded:c,setExpanded:f,children:r,noInsets:o,body:h,dataTestId:v})=>{const y=it.useId();return m.jsxs("div",{className:"chip","data-testid":v,children:[m.jsxs("div",{role:"button","aria-expanded":!!c,"aria-controls":y,className:Ze("chip-header",f&&" expanded-"+c),onClick:()=>f==null?void 0:f(!c),title:typeof i=="string"?i:void 0,children:[f?c?m.jsx(Mi,{}):m.jsx(Sa,{}):m.jsx(o3,{}),i]}),(!f||c)&&m.jsxs("div",{id:y,role:"region",className:Ze("chip-body",o&&"chip-body-no-insets"),children:[r,h&&h(),u&&m.jsx("div",{className:"chip-footer",children:u})]})]})},ke=({header:i,initialExpanded:u,noInsets:c,children:f,body:r,dataTestId:o,revealOnAnchorId:h})=>{const[v,y]=it.useState(u??!0),A=it.useCallback(()=>y(!0),[]);return hr(h,A),m.jsx(gr,{header:i,expanded:v,setExpanded:y,noInsets:c,body:r,dataTestId:o,children:f})},q3=({title:i,loadChildren:u,onClick:c,expandByDefault:f,depth:r,style:o,flash:h})=>{const[v,y]=it.useState(f||!1);return it.useEffect(()=>{y(f||!1)},[f]),m.jsxs("div",{role:"treeitem",className:Ze("tree-item",h&&"yellow-flash"),style:o,children:[m.jsxs("div",{className:"tree-item-title",style:{paddingLeft:r*22+4},onClick:()=>{c==null||c(),y(!v)},children:[u&&!!v&&Mi(),u&&!v&&Sa(),!u&&m.jsx("span",{style:{visibility:"hidden"},children:Sa()}),i]}),v&&(u==null?void 0:u())]})};function Ta(i){if(i<0||!isFinite(i))return"-";if(i===0)return"0ms";if(i<1e3)return i.toFixed(0)+"ms";const u=i/1e3;if(u<60)return u.toFixed(1)+"s";const c=u/60;if(c<60)return c.toFixed(1)+"m";const f=c/60;return f<24?f.toFixed(1)+"h":(f/24).toFixed(1)+"d"}const K3="data:image/png;base64,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",k3=({cursor:i,onPaneMouseMove:u,onPaneMouseUp:c,onPaneDoubleClick:f})=>(ue.useEffect(()=>{const r=document.createElement("div");return r.style.position="fixed",r.style.top="0",r.style.right="0",r.style.bottom="0",r.style.left="0",r.style.zIndex="9999",r.style.cursor=i,document.body.appendChild(r),u&&r.addEventListener("mousemove",u),c&&r.addEventListener("mouseup",c),f&&document.body.addEventListener("dblclick",f),()=>{u&&r.removeEventListener("mousemove",u),c&&r.removeEventListener("mouseup",c),f&&document.body.removeEventListener("dblclick",f),document.body.removeChild(r)}},[i,u,c,f]),m.jsx(m.Fragment,{})),J3={position:"absolute",top:0,right:0,bottom:0,left:0},F3=({orientation:i,offsets:u,setOffsets:c,resizerColor:f,resizerWidth:r,minColumnWidth:o})=>{const h=o||0,[v,y]=ue.useState(null),[A,x]=Hh(),T={position:"absolute",right:i==="horizontal"?void 0:0,bottom:i==="horizontal"?0:void 0,width:i==="horizontal"?7:void 0,height:i==="horizontal"?void 0:7,borderTopWidth:i==="horizontal"?void 0:(7-r)/2,borderRightWidth:i==="horizontal"?(7-r)/2:void 0,borderBottomWidth:i==="horizontal"?void 0:(7-r)/2,borderLeftWidth:i==="horizontal"?(7-r)/2:void 0,borderColor:"transparent",borderStyle:"solid",cursor:i==="horizontal"?"ew-resize":"ns-resize"};return m.jsxs("div",{style:{position:"absolute",top:0,right:0,bottom:0,left:-(7-r)/2,zIndex:100,pointerEvents:"none"},ref:x,children:[!!v&&m.jsx(k3,{cursor:i==="horizontal"?"ew-resize":"ns-resize",onPaneMouseUp:()=>y(null),onPaneMouseMove:D=>{if(!D.buttons)y(null);else if(v){const X=i==="horizontal"?D.clientX-v.clientX:D.clientY-v.clientY,q=v.offset+X,p=v.index>0?u[v.index-1]:0,E=i==="horizontal"?A.width:A.height,b=Math.min(Math.max(p+h,q),E-h)-u[v.index];for(let R=v.index;R<u.length;++R)u[R]=u[R]+b;c([...u])}}}),u.map((D,X)=>m.jsx("div",{style:{...T,top:i==="horizontal"?0:D,left:i==="horizontal"?D:0,pointerEvents:"initial"},onMouseDown:q=>y({clientX:q.clientX,clientY:q.clientY,offset:D,index:X}),children:m.jsx("div",{style:{...J3,background:f}})},X))]})};async function Zf(i){const u=new Image;return i&&(u.src=i,await new Promise((c,f)=>{u.onload=c,u.onerror=c})),u}const nr={backgroundImage:`linear-gradient(45deg, #80808020 25%, transparent 25%),
                    linear-gradient(-45deg, #80808020 25%, transparent 25%),
                    linear-gradient(45deg, transparent 75%, #80808020 75%),
                    linear-gradient(-45deg, transparent 75%, #80808020 75%)`,backgroundSize:"20px 20px",backgroundPosition:"0 0, 0 10px, 10px -10px, -10px 0px",boxShadow:`rgb(0 0 0 / 10%) 0px 1.8px 1.9px,
              rgb(0 0 0 / 15%) 0px 6.1px 6.3px,
              rgb(0 0 0 / 10%) 0px -2px 4px,
              rgb(0 0 0 / 15%) 0px -6.1px 12px,
              rgb(0 0 0 / 25%) 0px 6px 12px`},Vh=({diff:i,noTargetBlank:u,hideDetails:c})=>{const[f,r]=it.useState(i.diff?"diff":"actual"),[o,h]=it.useState(!1),[v,y]=it.useState(null),[A,x]=it.useState("Expected"),[T,D]=it.useState(null),[X,q]=it.useState(null),[p,E]=Hh();it.useEffect(()=>{(async()=>{var z,I,k,nt;y(await Zf((z=i.expected)==null?void 0:z.attachment.path)),x(((I=i.expected)==null?void 0:I.title)||"Expected"),D(await Zf((k=i.actual)==null?void 0:k.attachment.path)),q(await Zf((nt=i.diff)==null?void 0:nt.attachment.path))})()},[i]);const b=v&&T&&X,R=b?Math.max(v.naturalWidth,T.naturalWidth,200):500,N=b?Math.max(v.naturalHeight,T.naturalHeight,200):500,V=Math.min(1,(p.width-30)/R),F=Math.min(1,(p.width-50)/R/2),H=R*V,j=N*V,Y={flex:"none",margin:"0 10px",cursor:"pointer",userSelect:"none"};return m.jsx("div",{"data-testid":"test-result-image-mismatch",style:{display:"flex",flexDirection:"column",alignItems:"center",flex:"auto"},ref:E,children:b&&m.jsxs(m.Fragment,{children:[m.jsxs("div",{"data-testid":"test-result-image-mismatch-tabs",style:{display:"flex",margin:"10px 0 20px"},children:[i.diff&&m.jsx("div",{style:{...Y,fontWeight:f==="diff"?600:"initial"},onClick:()=>r("diff"),children:"Diff"}),m.jsx("div",{style:{...Y,fontWeight:f==="actual"?600:"initial"},onClick:()=>r("actual"),children:"Actual"}),m.jsx("div",{style:{...Y,fontWeight:f==="expected"?600:"initial"},onClick:()=>r("expected"),children:A}),m.jsx("div",{style:{...Y,fontWeight:f==="sxs"?600:"initial"},onClick:()=>r("sxs"),children:"Side by side"}),m.jsx("div",{style:{...Y,fontWeight:f==="slider"?600:"initial"},onClick:()=>r("slider"),children:"Slider"})]}),m.jsxs("div",{style:{display:"flex",justifyContent:"center",flex:"auto",minHeight:j+60},children:[i.diff&&f==="diff"&&m.jsx(yn,{image:X,alt:"Diff",hideSize:c,canvasWidth:H,canvasHeight:j,scale:V}),i.diff&&f==="actual"&&m.jsx(yn,{image:T,alt:"Actual",hideSize:c,canvasWidth:H,canvasHeight:j,scale:V}),i.diff&&f==="expected"&&m.jsx(yn,{image:v,alt:A,hideSize:c,canvasWidth:H,canvasHeight:j,scale:V}),i.diff&&f==="slider"&&m.jsx(W3,{expectedImage:v,actualImage:T,hideSize:c,canvasWidth:H,canvasHeight:j,scale:V,expectedTitle:A}),i.diff&&f==="sxs"&&m.jsxs("div",{style:{display:"flex"},children:[m.jsx(yn,{image:v,title:A,hideSize:c,canvasWidth:F*R,canvasHeight:F*N,scale:F}),m.jsx(yn,{image:o?X:T,title:o?"Diff":"Actual",onClick:()=>h(!o),hideSize:c,canvasWidth:F*R,canvasHeight:F*N,scale:F})]}),!i.diff&&f==="actual"&&m.jsx(yn,{image:T,title:"Actual",hideSize:c,canvasWidth:H,canvasHeight:j,scale:V}),!i.diff&&f==="expected"&&m.jsx(yn,{image:v,title:A,hideSize:c,canvasWidth:H,canvasHeight:j,scale:V}),!i.diff&&f==="sxs"&&m.jsxs("div",{style:{display:"flex"},children:[m.jsx(yn,{image:v,title:A,canvasWidth:F*R,canvasHeight:F*N,scale:F}),m.jsx(yn,{image:T,title:"Actual",canvasWidth:F*R,canvasHeight:F*N,scale:F})]})]}),!c&&m.jsxs("div",{style:{alignSelf:"start",lineHeight:"18px",marginLeft:"15px"},children:[m.jsx("div",{children:i.diff&&m.jsx("a",{target:"_blank",href:i.diff.attachment.path,rel:"noreferrer",children:i.diff.attachment.name})}),m.jsx("div",{children:m.jsx("a",{target:u?"":"_blank",href:i.actual.attachment.path,rel:"noreferrer",children:i.actual.attachment.name})}),m.jsx("div",{children:m.jsx("a",{target:u?"":"_blank",href:i.expected.attachment.path,rel:"noreferrer",children:i.expected.attachment.name})})]})]})})},W3=({expectedImage:i,actualImage:u,canvasWidth:c,canvasHeight:f,scale:r,expectedTitle:o,hideSize:h})=>{const v={position:"absolute",top:0,left:0},[y,A]=it.useState(c/2),x=i.naturalWidth===u.naturalWidth&&i.naturalHeight===u.naturalHeight;return m.jsxs("div",{style:{flex:"none",display:"flex",alignItems:"center",flexDirection:"column",userSelect:"none"},children:[!h&&m.jsxs("div",{style:{margin:5},children:[!x&&m.jsx("span",{style:{flex:"none",margin:"0 5px"},children:"Actual "}),!x&&m.jsx("span",{children:u.naturalWidth}),!x&&m.jsx("span",{style:{flex:"none",margin:"0 5px"},children:"x"}),!x&&m.jsx("span",{children:u.naturalHeight}),!x&&m.jsxs("span",{style:{flex:"none",margin:"0 5px 0 15px"},children:[o," "]}),m.jsx("span",{children:i.naturalWidth}),m.jsx("span",{style:{flex:"none",margin:"0 5px"},children:"x"}),m.jsx("span",{children:i.naturalHeight})]}),m.jsxs("div",{style:{position:"relative",width:c,height:f,margin:15,...nr},children:[m.jsx(F3,{orientation:"horizontal",offsets:[y],setOffsets:T=>A(T[0]),resizerColor:"#57606a80",resizerWidth:6}),m.jsx("img",{alt:o,style:{width:i.naturalWidth*r,height:i.naturalHeight*r},draggable:"false",src:i.src}),m.jsx("div",{style:{...v,bottom:0,overflow:"hidden",width:y,...nr},children:m.jsx("img",{alt:"Actual",style:{width:u.naturalWidth*r,height:u.naturalHeight*r},draggable:"false",src:u.src})})]})]})},yn=({image:i,title:u,alt:c,hideSize:f,canvasWidth:r,canvasHeight:o,scale:h,onClick:v})=>m.jsxs("div",{style:{flex:"none",display:"flex",alignItems:"center",flexDirection:"column"},children:[!f&&m.jsxs("div",{style:{margin:5},children:[u&&m.jsx("span",{style:{flex:"none",margin:"0 5px"},children:u}),m.jsx("span",{children:i.naturalWidth}),m.jsx("span",{style:{flex:"none",margin:"0 5px"},children:"x"}),m.jsx("span",{children:i.naturalHeight})]}),m.jsx("div",{style:{display:"flex",flex:"none",width:r,height:o,margin:15,...nr},children:m.jsx("img",{width:i.naturalWidth*h,height:i.naturalHeight*h,alt:u||c,style:{cursor:v?"pointer":"initial"},draggable:"false",src:i.src,onClick:v})})]});function _3(i,u){const c=/(\x1b\[(\d+(;\d+)*)m)|([^\x1b]+)/g,f=[];let r,o={},h=!1,v=u==null?void 0:u.fg,y=u==null?void 0:u.bg;for(;(r=c.exec(i))!==null;){const[,,A,,x]=r;if(A)for(const T of A.split(";")){const D=+T;switch(D){case 0:o={};break;case 1:o["font-weight"]="bold";break;case 2:o.opacity="0.8";break;case 3:o["font-style"]="italic";break;case 4:o["text-decoration"]="underline";break;case 7:h=!0;break;case 8:o.display="none";break;case 9:o["text-decoration"]="line-through";break;case 22:delete o["font-weight"],delete o["font-style"],delete o.opacity,delete o["text-decoration"];break;case 23:delete o["font-weight"],delete o["font-style"],delete o.opacity;break;case 24:delete o["text-decoration"];break;case 27:h=!1;break;case 30:case 31:case 32:case 33:case 34:case 35:case 36:case 37:v=b2[D-30];break;case 39:v=u==null?void 0:u.fg;break;case 40:case 41:case 42:case 43:case 44:case 45:case 46:case 47:y=b2[D-40];break;case 49:y=u==null?void 0:u.bg;break;case 53:o["text-decoration"]="overline";break;case 90:case 91:case 92:case 93:case 94:case 95:case 96:case 97:v=S2[D-90];break;case 100:case 101:case 102:case 103:case 104:case 105:case 106:case 107:y=S2[D-100];break}}else if(x){const T={...o},D=h?y:v;D!==void 0&&(T.color=D),h&&v&&(T["background-color"]=v),f.push(`<span style="${$3(T)}">${P3(x)}</span>`)}}return f.join("")}const b2={0:"var(--vscode-terminal-ansiBlack)",1:"var(--vscode-terminal-ansiRed)",2:"var(--vscode-terminal-ansiGreen)",3:"var(--vscode-terminal-ansiYellow)",4:"var(--vscode-terminal-ansiBlue)",5:"var(--vscode-terminal-ansiMagenta)",6:"var(--vscode-terminal-ansiCyan)",7:"var(--vscode-terminal-ansiWhite)"},S2={0:"var(--vscode-terminal-ansiBrightBlack)",1:"var(--vscode-terminal-ansiBrightRed)",2:"var(--vscode-terminal-ansiBrightGreen)",3:"var(--vscode-terminal-ansiBrightYellow)",4:"var(--vscode-terminal-ansiBrightBlue)",5:"var(--vscode-terminal-ansiBrightMagenta)",6:"var(--vscode-terminal-ansiBrightCyan)",7:"var(--vscode-terminal-ansiBrightWhite)"};function P3(i){return i.replace(/[&"<>]/g,u=>({"&":"&amp;",'"':"&quot;","<":"&lt;",">":"&gt;"})[u])}function $3(i){return Object.entries(i).map(([u,c])=>`${u}: ${c}`).join("; ")}const Ar=({code:i,children:u,testId:c})=>{const f=it.useMemo(()=>nv(i),[i]);return m.jsxs("div",{className:"test-error-container test-error-text","data-testid":c,children:[u,m.jsx("div",{className:"test-error-view",dangerouslySetInnerHTML:{__html:f||""}})]})},tv=({prompt:i})=>{const[u,c]=it.useState(!1);return m.jsx("button",{className:"button",style:{minWidth:100},onClick:async()=>{await navigator.clipboard.writeText(i),c(!0),setTimeout(()=>{c(!1)},3e3)},children:u?"Copied":"Copy prompt"})},ev=({diff:i})=>m.jsx("div",{"data-testid":"test-screenshot-error-view",className:"test-error-view",children:m.jsx(Vh,{diff:i,hideDetails:!0},"image-diff")});function nv(i){return _3(i||"",{bg:"var(--color-canvas-subtle)",fg:"var(--color-fg-default)"})}const Zh=({file:i,projectNames:u,isFileExpanded:c,setFileExpanded:f,footer:r})=>m.jsx(gr,{expanded:c?c(i.fileId):void 0,noInsets:!0,setExpanded:f?(o=>f(i.fileId,o)):void 0,header:m.jsx("span",{className:"chip-header-allow-selection",children:i.fileName}),footer:r,children:m.jsx(Ih,{tests:i.tests,projectNames:u})}),Ih=({tests:i,projectNames:u,runs:c,selectedTestId:f})=>{const r=se();return m.jsx("div",{role:"list",children:i.map((o,h)=>{const v=c==null?void 0:c[h],y=v!==void 0?o.results[v]:void 0,A=il({test:o,result:y},r),x=f===o.testId;return m.jsxs("div",{className:Ze("test-file-test","test-file-test-outcome-"+o.outcome,x&&"test-file-test-selected"),role:"listitem","aria-current":x,children:[m.jsxs("div",{className:"hbox",style:{alignItems:"flex-start"},children:[m.jsxs("div",{className:"hbox",children:[m.jsx("span",{className:"test-file-test-status-icon",children:fc(o.outcome)}),m.jsxs("span",{children:[m.jsx(bn,{href:A,title:[...o.path,o.title].join(" › "),children:m.jsx("span",{className:"test-file-title",children:[...o.path,o.title].join(" › ")})}),m.jsx(Qh,{style:{marginLeft:"6px"},projectNames:u,activeProjectName:o.projectName,otherLabels:o.tags})]})]}),m.jsx("span",{"data-testid":"test-duration",style:{minWidth:"50px",textAlign:"right"},children:Ta(o.duration)})]}),m.jsx("div",{className:"test-file-details-row",children:m.jsxs("div",{className:"test-file-details-row-items",children:[m.jsx(bn,{href:A,title:[...o.path,o.title].join(" › "),className:"test-file-path-link",children:m.jsxs("span",{className:"test-file-path",children:[o.location.file,":",o.location.line]})}),m.jsx(lv,{test:o}),m.jsx(av,{test:o}),m.jsx(zh,{test:o,dim:!0})]})})]},`test-${o.testId}`)})})};function lv({test:i}){const u=se();for(const c of i.results)for(const f of c.attachments)if(f.contentType.startsWith("image/")&&f.name.match(/-(expected|actual|diff)/))return m.jsx(dr,{href:il({test:i,result:c,anchor:`attachment-${c.attachments.indexOf(f)}`},u),title:"View images",dim:!0,children:m3()})}function av({test:i}){const u=se(),c=i.results.find(f=>f.attachments.some(r=>r.name==="video"));return c?m.jsx(dr,{href:il({test:i,result:c,anchor:"attachment-video"},u),title:"View video",dim:!0,children:g3()}):void 0}const iv=new RegExp("([\\u001B\\u009B][[\\]()#?]*(?:(?:(?:[a-zA-Z\\d]*(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]*)*)?\\u0007)|(?:(?:\\d{0,4}(?:;\\d{0,4})*)?[\\dA-PR-TZcf-ntqry=><~])))","g");function T2(i){return i.replace(iv,"")}function uv(i,u){var f;const c=new Map;for(const r of i){const o=r.name.match(/^(.*)-(expected|actual|diff|previous)(\.[^.]+)?$/);if(!o)continue;const[,h,v,y=""]=o,A=h+y;let x=c.get(A);x||(x={name:A,anchors:[`attachment-${h}`]},c.set(A,x)),x.anchors.push(`attachment-${u.attachments.indexOf(r)}`),v==="actual"&&(x.actual={attachment:r}),v==="expected"&&(x.expected={attachment:r,title:"Expected"}),v==="previous"&&(x.expected={attachment:r,title:"Previous"}),v==="diff"&&(x.diff={attachment:r})}for(const[r,o]of c)!o.actual||!o.expected?c.delete(r):(i.delete(o.actual.attachment),i.delete(o.expected.attachment),i.delete((f=o.diff)==null?void 0:f.attachment));return[...c.values()]}const cv=({report:i,test:u,result:c})=>{const{screenshots:f,videos:r,traces:o,otherAttachments:h,diffs:v,errors:y,otherAttachmentAnchors:A,screenshotAnchors:x,errorContext:T}=it.useMemo(()=>{const p=c.attachments.filter(z=>!z.name.startsWith("_")),E=new Set(p.filter(z=>z.contentType.startsWith("image/"))),b=[...E].map(z=>`attachment-${p.indexOf(z)}`),R=p.filter(z=>z.contentType.startsWith("video/")),N=p.filter(z=>z.name==="trace"),V=p.find(z=>z.name==="error-context"),F=new Set(p);[...E,...R,...N].forEach(z=>F.delete(z));const H=[...F].map(z=>`attachment-${p.indexOf(z)}`),j=uv(E,c),Y=c.errors.map(z=>z.message);return{screenshots:[...E],videos:R,traces:N,otherAttachments:F,diffs:j,errors:Y,otherAttachmentAnchors:H,screenshotAnchors:b,errorContext:V}},[c]),[D,X]=it.useState("");it.useEffect(()=>X(""),[c]);const q=E3(async()=>{var F;if((F=i.json().options)!=null&&F.noCopyPrompt||!T)return;let p=T.path?await fetch(T.path).then(H=>H.text()):T.body;if(!p)return;const E=c.attachments.find(H=>H.name==="stdout"),b=c.attachments.find(H=>H.name==="stderr"),R=E!=null&&E.body&&E.contentType==="text/plain"?E.body:void 0,N=b!=null&&b.body&&b.contentType==="text/plain"?b.body:void 0;R&&(p+=`

# Stdout

\`\`\`
`+T2(R)+"\n```"),N&&(p+=`

# Stderr

\`\`\`
`+T2(N)+"\n```");const V=i.json().metadata;return V!=null&&V.gitDiff&&(p+=`

# Local changes

\`\`\`diff
`+V.gitDiff+"\n```"),p},[T,i,c],void 0);return m.jsxs("div",{className:"test-result",children:[!!y.length&&m.jsxs(ke,{header:"Errors",children:[q&&m.jsx("div",{style:{position:"absolute",right:"16px",padding:"10px",zIndex:1},children:m.jsx(tv,{prompt:q})}),y.map((p,E)=>{const b=sv(p,v);return m.jsxs(m.Fragment,{children:[m.jsx(Ar,{code:p},"test-result-error-message-"+E),b&&m.jsx(ev,{diff:b})]})})]}),!!c.steps.length&&m.jsxs(ke,{header:"Test Steps",children:[m.jsxs("form",{className:"subnav-search step-filter",onSubmit:p=>p.preventDefault(),children:[Oh(),m.jsx("input",{className:"form-control subnav-search-input input-contrast width-full",type:"search",spellCheck:!1,placeholder:"Filter steps","aria-label":"Filter steps",value:D,onChange:p=>X(p.target.value)})]}),c.steps.map((p,E)=>m.jsx(Jh,{step:p,result:c,test:u,depth:0,filterText:D},`step-${E}`))]}),v.map((p,E)=>m.jsx(xi,{id:p.anchors,children:m.jsx(ke,{dataTestId:"test-results-image-diff",header:`Image mismatch: ${p.name}`,revealOnAnchorId:p.anchors,children:m.jsx(Vh,{diff:p})})},`diff-${E}`)),!!f.length&&m.jsx(ke,{header:"Screenshots",revealOnAnchorId:x,children:f.map((p,E)=>m.jsxs(xi,{id:`attachment-${c.attachments.indexOf(p)}`,children:[m.jsx("a",{href:Ve(p.path),children:m.jsx("img",{className:"screenshot",src:Ve(p.path)})}),m.jsx($u,{attachment:p,result:c})]},`screenshot-${E}`))}),!!o.length&&m.jsx(xi,{id:"attachment-trace",children:m.jsx(ke,{header:"Traces",revealOnAnchorId:"attachment-trace",children:m.jsxs("div",{children:[m.jsx("a",{href:Ve(Lh(o)),children:m.jsx("img",{className:"screenshot",src:K3,style:{width:192,height:117,marginLeft:20}})}),o.map((p,E)=>m.jsx($u,{attachment:p,result:c,linkName:o.length===1?"trace":`trace-${E+1}`},`trace-${E}`))]})})}),!!r.length&&m.jsx(xi,{id:"attachment-video",children:m.jsx(ke,{header:"Videos",revealOnAnchorId:"attachment-video",children:r.map(p=>m.jsxs("div",{children:[m.jsx("video",{controls:!0,children:m.jsx("source",{src:Ve(p.path),type:p.contentType})}),m.jsx($u,{attachment:p,result:c})]},p.path))})}),!!h.size&&m.jsx(ke,{header:"Attachments",revealOnAnchorId:A,dataTestId:"attachments",children:[...h].map((p,E)=>m.jsx(xi,{id:`attachment-${c.attachments.indexOf(p)}`,children:m.jsx($u,{attachment:p,result:c,openInNewTab:p.contentType.startsWith("text/html")})},`attachment-link-${E}`))}),m.jsx(ke,{header:`Executed in Worker #${c.workerIndex}`,dataTestId:"worker-test-list",initialExpanded:!1,noInsets:!0,body:()=>{const p=fv(i).get(c.workerIndex)||{tests:[],runs:[]};return m.jsx(Ih,{tests:p.tests,runs:p.runs,projectNames:i.json().projectNames,selectedTestId:u.testId})}})]})};function sv(i,u){const c=i.split(`
`)[0];if(!(!c.includes("toHaveScreenshot")&&!c.includes("toMatchSnapshot")))return u.find(f=>i.includes(f.name))}function qh(i,u){return i.title.toLowerCase().includes(u.toLowerCase())}function Kh(i,u){return i.steps.some(c=>qh(c,u)||Kh(c,u))}function kh(i){return i.steps.some(u=>u.attachments.length>0||kh(u))}const Jh=({test:i,step:u,result:c,depth:f,filterText:r})=>{const o=se();let h=!1,v=m.jsx("span",{children:u.title});if(r){const y=!!r&&qh(u,r),A=!!r&&Kh(u,r);if(!y&&!A)return null;if(h=A,y){const x=u.title.toLowerCase().split(r.toLowerCase()),T=[];let D=0;for(let X=0;X<x.length;X++)X&&(T.push(m.jsx("span",{className:"step-title-highlight",children:u.title.substring(D,D+r.length)},X)),D+=r.length),T.push(x[X]),D+=x[X].length;v=T}}return m.jsx(q3,{title:m.jsxs("div",{"aria-label":u.title,className:"step-title-container",children:[fc(u.error||u.duration===-1?"failed":u.skipped?"skipped":"passed"),m.jsxs("span",{className:"step-title-text",children:[v,u.count>1&&m.jsxs(m.Fragment,{children:[" ✕ ",m.jsx("span",{className:"test-result-counter",children:u.count})]}),u.location&&m.jsxs("span",{className:"test-result-path",children:["— ",u.location.file,":",u.location.line]})]}),m.jsx("span",{className:"step-spacer"}),u.attachments.length>0&&m.jsx("a",{className:"step-attachment-link",title:"reveal attachment",href:Ve(il({test:i,result:c,anchor:`attachment-${u.attachments[0]}`},o)),onClick:y=>{y.stopPropagation()},children:Rh()}),u.attachments.length===0&&kh(u)&&m.jsx("span",{className:"step-indirect-attachment-indicator",title:"contains attachment","aria-label":"contains attachment",children:d3()}),m.jsx("span",{className:"step-duration",children:Ta(u.duration)})]}),loadChildren:u.steps.length||u.snippet?()=>{const y=u.snippet?[m.jsx(Ar,{testId:"test-snippet",code:u.snippet},"line")]:[],A=u.steps.map((x,T)=>m.jsx(Jh,{step:x,depth:f+1,result:c,test:i,filterText:r},T));return y.concat(A)}:void 0,depth:f,expandByDefault:h})},C2=Symbol("workerLists");function fv(i){let u=i[C2];if(!u){const c=new Map;for(const f of i.json().files)for(const r of f.tests)for(let o=0;o<r.results.length;o++){let h=c.get(r.results[o].workerIndex);h||(h=[],c.set(r.results[o].workerIndex,h)),h.push({test:r,time:new Date(r.results[o].startTime).valueOf(),run:o})}u=new Map;for(const[f,r]of c)r.sort((o,h)=>o.time-h.time),u.set(f,{tests:r.map(o=>o.test),runs:r.map(o=>o.run)});i[C2]=u}return u}const rv=({report:i,test:u,run:c,next:f,prev:r})=>{const[o,h]=it.useState(c),v=se(),y=u.annotations.filter(A=>!A.type.startsWith("_"))??[];return D2(y,u.repeatEachIndex),m.jsxs(m.Fragment,{children:[m.jsx(mr,{title:u.title,leftSuperHeader:m.jsx("div",{className:"test-case-path",children:u.path.join(" › ")}),rightSuperHeader:m.jsxs(m.Fragment,{children:[m.jsx("div",{className:Ze(!r&&"hidden"),children:m.jsx(bn,{href:il({test:r},v),children:"« previous"})}),m.jsx("div",{style:{width:10}}),m.jsx("div",{className:Ze(!f&&"hidden"),children:m.jsx(bn,{href:il({test:f},v),children:"next »"})})]})}),m.jsxs("div",{className:"hbox",style:{lineHeight:"24px"},children:[m.jsx("div",{className:"test-case-location",children:m.jsxs(or,{value:`${u.location.file}:${u.location.line}`,children:[u.location.file,":",u.location.line]})}),m.jsx("div",{style:{flex:"auto"}}),m.jsx(zh,{test:u,trailingSeparator:!0}),m.jsx("div",{className:"test-case-duration",children:Ta(u.duration)})]}),m.jsx(Qh,{style:{marginLeft:"6px"},projectNames:i.json().projectNames,activeProjectName:u.projectName,otherLabels:u.tags}),u.results.length===0&&y.length!==0&&m.jsx(ke,{header:"Annotations",dataTestId:"test-case-annotations",children:y.map((A,x)=>m.jsx(O2,{annotation:A},x))}),m.jsx(I3,{tabs:u.results.map((A,x)=>({id:String(x),title:m.jsxs("div",{style:{display:"flex",alignItems:"center"},children:[fc(A.status)," ",ov(x),u.results.length>1&&m.jsx("span",{className:"test-case-run-duration",children:Ta(A.duration)})]}),render:()=>{const T=A.annotations.filter(D=>!D.type.startsWith("_"));return D2(T,u.repeatEachIndex),m.jsxs(m.Fragment,{children:[!!T.length&&m.jsx(ke,{header:"Annotations",dataTestId:"test-case-annotations",children:T.map((D,X)=>m.jsx(O2,{annotation:D},X))}),m.jsx(cv,{test:u,result:A,report:i})]})}}))||[],selectedTab:String(o),setSelectedTab:A=>h(+A)})]})};function O2({annotation:{type:i,description:u}}){return m.jsxs("div",{className:"test-case-annotation",children:[m.jsx("span",{style:{fontWeight:"bold"},children:i}),u&&m.jsxs(or,{value:u,children:[": ",Di(u)]})]})}function D2(i,u){u&&i.push({type:"repeatEachIndex",description:String(u)})}function ov(i){return i?`Retry #${i}`:"Run"}class dv extends it.Component{constructor(){super(...arguments),this.state={error:null,errorInfo:null}}componentDidCatch(u,c){this.setState({error:u,errorInfo:c})}render(){var u,c,f;return this.state.error||this.state.errorInfo?m.jsxs("div",{className:"metadata-view p-3",children:[m.jsx("p",{children:"An error was encountered when trying to render metadata."}),m.jsx("p",{children:m.jsxs("pre",{style:{overflow:"scroll"},children:[(u=this.state.error)==null?void 0:u.message,m.jsx("br",{}),(c=this.state.error)==null?void 0:c.stack,m.jsx("br",{}),(f=this.state.errorInfo)==null?void 0:f.componentStack]})})]}):this.props.children}}const hv=i=>m.jsx(dv,{children:m.jsx(mv,{metadata:i.metadata})}),mv=i=>{const u=i.metadata,c=se().has("show-metadata-other")?Object.entries(i.metadata).filter(([r])=>!Fh.has(r)):[];if(u.ci||u.gitCommit||c.length>0)return m.jsxs("div",{className:"metadata-view",children:[u.ci&&!u.gitCommit&&m.jsx(gv,{info:u.ci}),u.gitCommit&&m.jsx(Av,{ci:u.ci,commit:u.gitCommit}),c.length>0&&m.jsxs(m.Fragment,{children:[(u.gitCommit||u.ci)&&m.jsx("div",{className:"metadata-separator"}),m.jsx("div",{className:"metadata-section metadata-properties",role:"list",children:c.map(([r,o])=>{const h=typeof o!="object"||o===null||o===void 0?String(o):JSON.stringify(o),v=h.length>1e3?h.slice(0,1e3)+"…":h;return m.jsx("div",{className:"copyable-property",role:"listitem",children:m.jsxs(or,{value:h,children:[m.jsx("span",{style:{fontWeight:"bold"},title:r,children:r}),": ",m.jsx("span",{title:v,children:Di(v)})]})},r)})})]})]})},gv=({info:i})=>{const u=i.prTitle||`Commit ${i.commitHash}`,c=i.prHref||i.commitHref;return m.jsx("div",{className:"metadata-section",role:"list",children:m.jsx("div",{role:"listitem",children:m.jsx("a",{href:Ve(c),target:"_blank",rel:"noopener noreferrer",title:u,children:u})})})},Av=({ci:i,commit:u})=>{const c=(i==null?void 0:i.prTitle)||u.subject,f=(i==null?void 0:i.prHref)||(i==null?void 0:i.commitHref),r=` <${u.author.email}>`,o=`${u.author.name}${r}`,h=Intl.DateTimeFormat(void 0,{dateStyle:"medium"}).format(u.committer.time),v=Intl.DateTimeFormat(void 0,{dateStyle:"full",timeStyle:"long"}).format(u.committer.time);return m.jsxs("div",{className:"metadata-section",role:"list",children:[m.jsxs("div",{role:"listitem",children:[f&&m.jsx("a",{href:Ve(f),target:"_blank",rel:"noopener noreferrer",title:c,children:c}),!f&&m.jsx("span",{title:c,children:c})]}),m.jsxs("div",{role:"listitem",className:"hbox",children:[m.jsx("span",{className:"mr-1",children:o}),m.jsxs("span",{title:v,children:[" on ",h]})]})]})},Fh=new Set(["ci","gitCommit","gitDiff","actualWorkers"]),vv=i=>{const u=Object.entries(i).filter(([c])=>!Fh.has(c));return!i.ci&&!i.gitCommit&&!u.length},yv=({files:i,expandedFiles:u,setExpandedFiles:c,projectNames:f})=>{const r=it.useMemo(()=>{const o=[];let h=0;for(const v of i)h+=v.tests.length,o.push({file:v,defaultExpanded:h<200});return o},[i]);return m.jsx(m.Fragment,{children:r.length>0?r.map(({file:o,defaultExpanded:h})=>m.jsx(Zh,{file:o,projectNames:f,isFileExpanded:v=>{const y=u.get(v);return y===void 0?h:!!y},setFileExpanded:(v,y)=>{const A=new Map(u);A.set(v,y),c(A)}},`file-${o.fileId}`)):m.jsx("div",{className:"chip-header test-file-no-files",children:"No tests found"})})},R2=({report:i,filteredStats:u,metadataVisible:c,toggleMetadataVisible:f,errorsVisible:r,setErrorsVisible:o})=>{if(!i)return null;const h=i.projectNames.length===1&&!!i.projectNames[0],v=!h&&!u,y=!vv(i.metadata)&&m.jsxs("div",{className:Ze("metadata-toggle",!v&&"metadata-toggle-second-line"),role:"button",onClick:f,title:c?"Hide metadata":"Show metadata",children:[c?Mi():Sa(),"Metadata"]}),A=m.jsxs("div",{className:"test-file-header-info",children:[h&&m.jsxs("div",{"data-testid":"project-name",children:["Project: ",i.projectNames[0]]}),u&&m.jsxs("div",{"data-testid":"filtered-tests-count",children:["Filtered: ",u.total," ",!!u.total&&"("+Ta(u.duration)+")"]}),v&&y]}),x=m.jsxs(m.Fragment,{children:[m.jsx("div",{"data-testid":"overall-time",style:{marginRight:"10px"},children:i?new Date(i.startTime).toLocaleString():""}),m.jsxs("div",{"data-testid":"overall-duration",children:["Total time: ",Ta(i.duration??0)]})]});return m.jsxs(m.Fragment,{children:[m.jsx(mr,{title:i.options.title,leftSuperHeader:A,rightSuperHeader:x}),!v&&y,c&&m.jsx(hv,{metadata:i.metadata}),!!i.errors.length&&m.jsx(gr,{header:"Errors",dataTestId:"report-errors",expanded:r,setExpanded:o,children:i.errors.map((T,D)=>m.jsx(Ar,{code:T},"test-report-error-message-"+D))})]})},Wh=i=>{const u=Math.round(i/1e3),c=Math.floor(u/60),f=u%60;return c===0?`${f}s`:`${c}m ${f}s`},Ev=({entries:i})=>{const f=Math.max(...i.map(j=>j.label.length))*10,o={top:20,right:20,bottom:40,left:Math.min(800*.5,Math.max(50,f))},h=800-o.left-o.right,v=Math.min(...i.map(j=>j.startTime)),y=Math.max(...i.map(j=>j.startTime+j.duration));let A,x;const T=y-v;T<60*1e3?(A=10*1e3,x=!0):T<300*1e3?(A=30*1e3,x=!0):T<1800*1e3?(A=300*1e3,x=!1):(A=600*1e3,x=!1);const D=Math.ceil(v/A)*A,X=(j,Y)=>{const z=new Date(j).toLocaleTimeString(void 0,{hour:"2-digit",minute:"2-digit",second:x?"2-digit":void 0});if(Y)return z;if(z.endsWith(" AM")||z.endsWith(" PM"))return z.slice(0,-3)},p=(y-v)*1.1,E=Math.ceil(p/A)*A,b=h/E,R=20,N=8,V=i.length*(R+N),F=[];for(let j=D;j<=v+E;j+=A){const Y=j-v;F.push({x:Y*b,label:X(j,j===D)})}const H=V+o.top+o.bottom;return m.jsx("svg",{viewBox:`0 0 800 ${H}`,preserveAspectRatio:"xMidYMid meet",style:{width:"100%",height:"auto"},role:"img",children:m.jsxs("g",{transform:`translate(${o.left}, ${o.top})`,role:"presentation",children:[F.map(({x:j,label:Y},z)=>m.jsxs("g",{"aria-hidden":"true",children:[m.jsx("line",{x1:j,y1:0,x2:j,y2:V,stroke:"var(--color-border-muted)",strokeWidth:"1"}),m.jsx("text",{x:j,y:V+20,textAnchor:"middle",dominantBaseline:"middle",fontSize:"12",fill:"var(--color-fg-muted)",children:Y})]},z)),i.map((j,Y)=>{const z=j.startTime-v,I=j.duration*b,k=z*b,nt=Y*(R+N),P=["var(--color-scale-blue-2)","var(--color-scale-blue-3)","var(--color-scale-blue-4)"],st=P[Y%P.length];return m.jsxs("g",{role:"listitem","aria-label":j.tooltip,children:[m.jsx("rect",{className:"gantt-bar",x:k,y:nt,width:I,height:R,fill:st,rx:"2",children:m.jsx("title",{children:j.tooltip})}),m.jsx("text",{x:k+I+6,y:nt+R/2,dominantBaseline:"middle",fontSize:"12",fill:"var(--color-fg-muted)","aria-hidden":"true",children:Wh(j.duration)}),m.jsx("text",{x:-10,y:nt+R/2,textAnchor:"end",dominantBaseline:"middle",fontSize:"12",fill:"var(--color-fg-muted)","aria-hidden":"true",children:j.label})]},Y)}),m.jsx("line",{x1:0,y1:0,x2:0,y2:V,stroke:"var(--color-fg-muted)",strokeWidth:"1","aria-hidden":"true"}),m.jsx("line",{x1:0,y1:V,x2:h,y2:V,stroke:"var(--color-fg-muted)",strokeWidth:"1","aria-hidden":"true"})]})})};function pv({report:i,tests:u}){return m.jsxs(m.Fragment,{children:[m.jsx(bv,{report:i}),m.jsx(xv,{report:i,tests:u})]})}function xv({report:i,tests:u}){const[c,f]=ue.useState(50);return m.jsx(Zh,{file:{fileId:"slowest",fileName:"Slowest Tests",tests:u.slice(0,c),stats:null},projectNames:i.json().projectNames,footer:c<u.length?m.jsxs("button",{className:"link-badge fullwidth-link",style:{padding:"8px 5px"},onClick:()=>f(r=>r+50),children:[Mi(),"Show 50 more"]}):void 0})}function bv({report:i}){const u=i.json().machines;if(u.length===0)return null;const c=u.map(f=>{const r=f.tag.join(" "),o=new Date(f.startTime).toLocaleTimeString([],{hour:"2-digit",minute:"2-digit",second:"2-digit",timeZoneName:"short"});let h=`${r} started at ${o}, runs ${Wh(f.duration)}`;return f.shardIndex&&(h+=` (shard ${f.shardIndex})`),{label:r,tooltip:h,startTime:f.startTime,duration:f.duration,shardIndex:f.shardIndex??1}}).sort((f,r)=>f.label.localeCompare(r.label)||f.shardIndex-r.shardIndex);return m.jsx(ke,{header:"Timeline",children:m.jsx(Ev,{entries:c})})}const Sv=i=>!i.has("testId")&&!i.has("speedboard"),Tv=i=>i.has("testId"),Cv=i=>i.has("speedboard")&&!i.has("testId"),Ov=({report:i})=>{var H,j;const u=se(),[c,f]=it.useState(new Map),[r,o]=it.useState(u.get("q")||""),[h,v]=it.useState(!1),[y,A]=it.useState(!0),x=u.has("speedboard"),[T]=Bh("mergeFiles",!1),D=u.get("testId"),X=((H=u.get("q"))==null?void 0:H.toString())||"",q=X?"&q="+X:"",p=(j=i==null?void 0:i.json())==null?void 0:j.options.title,E=it.useMemo(()=>{const Y=new Map;for(const z of(i==null?void 0:i.json().files)||[])for(const I of z.tests)Y.set(I.testId,z.fileId);return Y},[i]),b=it.useMemo(()=>uc.parse(r),[r]),R=it.useMemo(()=>b.empty()?void 0:Rv((i==null?void 0:i.json().files)||[],b),[i,b]),N=it.useMemo(()=>x?jv(i,b):T?Mv(i,b):wv(i,b),[i,b,T,x]),{prev:V,next:F}=it.useMemo(()=>{const Y=N.tests.findIndex(k=>k.testId===D),z=Y>0?N.tests[Y-1]:void 0,I=Y<N.tests.length-1?N.tests[Y+1]:void 0;return{prev:z,next:I}},[D,N]);return it.useEffect(()=>{const Y=z=>{if(z.target instanceof HTMLInputElement||z.target instanceof HTMLTextAreaElement||z.shiftKey||z.ctrlKey||z.metaKey||z.altKey)return;const I=new URLSearchParams(u);switch(z.key){case"a":z.preventDefault(),ll("#?");break;case"p":z.preventDefault(),I.delete("testId"),I.delete("speedboard"),ll(Ml(I,"s:passed",!1));break;case"f":z.preventDefault(),I.delete("testId"),I.delete("speedboard"),ll(Ml(I,"s:failed",!1));break;case"ArrowLeft":V&&(z.preventDefault(),I.delete("testId"),ll(il({test:V},I)+q));break;case"ArrowRight":F&&(z.preventDefault(),I.delete("testId"),ll(il({test:F},I)+q));break}};return document.addEventListener("keydown",Y),()=>document.removeEventListener("keydown",Y)},[V,F,q,X,u]),it.useEffect(()=>{p?document.title=p:document.title="Playwright Test Report"},[p]),m.jsx("div",{className:"htmlreport vbox px-4 pb-4",children:m.jsxs("main",{children:[i&&m.jsx(G3,{stats:i.json().stats,filterText:r,setFilterText:o}),m.jsxs(Vf,{predicate:Sv,children:[m.jsx(R2,{report:i==null?void 0:i.json(),filteredStats:R,metadataVisible:h,toggleMetadataVisible:()=>v(Y=>!Y),errorsVisible:y,setErrorsVisible:A}),m.jsx(yv,{files:N.files,expandedFiles:c,setExpandedFiles:f,projectNames:(i==null?void 0:i.json().projectNames)||[]})]}),m.jsxs(Vf,{predicate:Cv,children:[m.jsx(R2,{report:i==null?void 0:i.json(),filteredStats:R,metadataVisible:h,toggleMetadataVisible:()=>v(Y=>!Y),errorsVisible:y,setErrorsVisible:A}),i&&m.jsx(pv,{report:i,tests:N.tests})]}),m.jsx(Vf,{predicate:Tv,children:i&&m.jsx(Dv,{report:i,next:F,prev:V,testId:D,testIdToFileIdMap:E})})]})})},Dv=({report:i,testIdToFileIdMap:u,next:c,prev:f,testId:r})=>{const[o,h]=it.useState("loading"),v=+(se().get("run")||"0");return it.useEffect(()=>{(async()=>{if(!r||typeof o=="object"&&r===o.testId)return;const y=u.get(r);if(!y){h("not-found");return}const A=await i.entry(`${y}.json`);h((A==null?void 0:A.tests.find(x=>x.testId===r))||"not-found")})()},[o,i,r,u]),o==="loading"?m.jsx("div",{className:"test-case-column"}):o==="not-found"?m.jsxs("div",{className:"test-case-column",children:[m.jsx(mr,{title:"Test not found"}),m.jsxs("div",{className:"test-case-location",children:["Test ID: ",r]})]}):m.jsx("div",{className:"test-case-column",children:m.jsx(rv,{report:i,next:c,prev:f,test:o,run:v})})};function Rv(i,u){const c={total:0,duration:0};for(const f of i){const r=f.tests.filter(o=>u.matches(o));c.total+=r.length;for(const o of r)c.duration+=o.duration}return c}function wv(i,u){const c={files:[],tests:[]};for(const f of(i==null?void 0:i.json().files)||[]){const r=f.tests.filter(o=>u.matches(o));r.length&&c.files.push({...f,tests:r}),c.tests.push(...r)}return c}function Mv(i,u){const c=[],f=new Map;for(const o of(i==null?void 0:i.json().files)||[]){const h=o.tests.filter(v=>u.matches(v));for(const v of h){const y=v.path[0]??"<anonymous>";let A=f.get(y);A||(A={fileId:y,fileName:y,tests:[],stats:{total:0,expected:0,unexpected:0,flaky:0,skipped:0,ok:!0}},f.set(y,A),c.push(A));const x={...v,path:v.path.slice(1)};A.tests.push(x)}}c.sort((o,h)=>o.fileName.localeCompare(h.fileName));const r={files:c,tests:[]};for(const o of c)r.tests.push(...o.tests);return r}function jv(i,u){const f=((i==null?void 0:i.json().files)||[]).flatMap(r=>r.tests).filter(r=>u.matches(r));return f.sort((r,o)=>o.duration-r.duration),{files:[],tests:f}}const Nv="data:image/svg+xml,%3csvg%20width='400'%20height='400'%20viewBox='0%200%20400%20400'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M136.444%20221.556C123.558%20225.213%20115.104%20231.625%20109.535%20238.032C114.869%20233.364%20122.014%20229.08%20131.652%20226.348C141.51%20223.554%20149.92%20223.574%20156.869%20224.915V219.481C150.941%20218.939%20144.145%20219.371%20136.444%20221.556ZM108.946%20175.876L61.0895%20188.484C61.0895%20188.484%2061.9617%20189.716%2063.5767%20191.36L104.153%20180.668C104.153%20180.668%20103.578%20188.077%2098.5847%20194.705C108.03%20187.559%20108.946%20175.876%20108.946%20175.876ZM149.005%20288.347C81.6582%20306.486%2046.0272%20228.438%2035.2396%20187.928C30.2556%20169.229%2028.0799%20155.067%2027.5%20145.928C27.4377%20144.979%2027.4665%20144.179%2027.5336%20143.446C24.04%20143.657%2022.3674%20145.473%2022.7077%20150.721C23.2876%20159.855%2025.4633%20174.016%2030.4473%20192.721C41.2301%20233.225%2076.8659%20311.273%20144.213%20293.134C158.872%20289.185%20169.885%20281.992%20178.152%20272.81C170.532%20279.692%20160.995%20285.112%20149.005%20288.347ZM161.661%20128.11V132.903H188.077C187.535%20131.206%20186.989%20129.677%20186.447%20128.11H161.661Z'%20fill='%232D4552'/%3e%3cpath%20d='M193.981%20167.584C205.861%20170.958%20212.144%20179.287%20215.465%20186.658L228.711%20190.42C228.711%20190.42%20226.904%20164.623%20203.57%20157.995C181.741%20151.793%20168.308%20170.124%20166.674%20172.496C173.024%20167.972%20182.297%20164.268%20193.981%20167.584ZM299.422%20186.777C277.573%20180.547%20264.145%20198.916%20262.535%20201.255C268.89%20196.736%20278.158%20193.031%20289.837%20196.362C301.698%20199.741%20307.976%20208.06%20311.307%20215.436L324.572%20219.212C324.572%20219.212%20322.736%20193.41%20299.422%20186.777ZM286.262%20254.795L176.072%20223.99C176.072%20223.99%20177.265%20230.038%20181.842%20237.869L274.617%20263.805C282.255%20259.386%20286.262%20254.795%20286.262%20254.795ZM209.867%20321.102C122.618%20297.71%20133.166%20186.543%20147.284%20133.865C153.097%20112.156%20159.073%2096.0203%20164.029%2085.204C161.072%2084.5953%20158.623%2086.1529%20156.203%2091.0746C150.941%20101.747%20144.212%20119.124%20137.7%20143.45C123.586%20196.127%20113.038%20307.29%20200.283%20330.682C241.406%20341.699%20273.442%20324.955%20297.323%20298.659C274.655%20319.19%20245.714%20330.701%20209.867%20321.102Z'%20fill='%232D4552'/%3e%3cpath%20d='M161.661%20262.296V239.863L99.3324%20257.537C99.3324%20257.537%20103.938%20230.777%20136.444%20221.556C146.302%20218.762%20154.713%20218.781%20161.661%20220.123V128.11H192.869C189.471%20117.61%20186.184%20109.526%20183.423%20103.909C178.856%2094.612%20174.174%20100.775%20163.545%20109.665C156.059%20115.919%20137.139%20129.261%20108.668%20136.933C80.1966%20144.61%2057.179%20142.574%2047.5752%20140.911C33.9601%20138.562%2026.8387%20135.572%2027.5049%20145.928C28.0847%20155.062%2030.2605%20169.224%2035.2445%20187.928C46.0272%20228.433%2081.663%20306.481%20149.01%20288.342C166.602%20283.602%20179.019%20274.233%20187.626%20262.291H161.661V262.296ZM61.0848%20188.484L108.946%20175.876C108.946%20175.876%20107.551%20194.288%2089.6087%20199.018C71.6614%20203.743%2061.0848%20188.484%2061.0848%20188.484Z'%20fill='%23E2574C'/%3e%3cpath%20d='M341.786%20129.174C329.345%20131.355%20299.498%20134.072%20262.612%20124.185C225.716%20114.304%20201.236%2097.0224%20191.537%2088.8994C177.788%2077.3834%20171.74%2069.3802%20165.788%2081.4857C160.526%2092.163%20153.797%20109.54%20147.284%20133.866C133.171%20186.543%20122.623%20297.706%20209.867%20321.098C297.093%20344.47%20343.53%20242.92%20357.644%20190.238C364.157%20165.917%20367.013%20147.5%20367.799%20135.625C368.695%20122.173%20359.455%20126.078%20341.786%20129.174ZM166.497%20172.756C166.497%20172.756%20180.246%20151.372%20203.565%20158C226.899%20164.628%20228.706%20190.425%20228.706%20190.425L166.497%20172.756ZM223.42%20268.713C182.403%20256.698%20176.077%20223.99%20176.077%20223.99L286.262%20254.796C286.262%20254.791%20264.021%20280.578%20223.42%20268.713ZM262.377%20201.495C262.377%20201.495%20276.107%20180.126%20299.422%20186.773C322.736%20193.411%20324.572%20219.208%20324.572%20219.208L262.377%20201.495Z'%20fill='%232EAD33'/%3e%3cpath%20d='M139.88%20246.04L99.3324%20257.532C99.3324%20257.532%20103.737%20232.44%20133.607%20222.496L110.647%20136.33L108.663%20136.933C80.1918%20144.611%2057.1742%20142.574%2047.5704%20140.911C33.9554%20138.563%2026.834%20135.572%2027.5001%20145.929C28.08%20155.063%2030.2557%20169.224%2035.2397%20187.929C46.0225%20228.433%2081.6583%20306.481%20149.005%20288.342L150.989%20287.719L139.88%20246.04ZM61.0848%20188.485L108.946%20175.876C108.946%20175.876%20107.551%20194.288%2089.6087%20199.018C71.6615%20203.743%2061.0848%20188.485%2061.0848%20188.485Z'%20fill='%23D65348'/%3e%3cpath%20d='M225.27%20269.163L223.415%20268.712C182.398%20256.698%20176.072%20223.99%20176.072%20223.99L232.89%20239.872L262.971%20124.281L262.607%20124.185C225.711%20114.304%20201.232%2097.0224%20191.532%2088.8994C177.783%2077.3834%20171.735%2069.3802%20165.783%2081.4857C160.526%2092.163%20153.797%20109.54%20147.284%20133.866C133.171%20186.543%20122.623%20297.706%20209.867%20321.097L211.655%20321.5L225.27%20269.163ZM166.497%20172.756C166.497%20172.756%20180.246%20151.372%20203.565%20158C226.899%20164.628%20228.706%20190.425%20228.706%20190.425L166.497%20172.756Z'%20fill='%231D8D22'/%3e%3cpath%20d='M141.946%20245.451L131.072%20248.537C133.641%20263.019%20138.169%20276.917%20145.276%20289.195C146.513%20288.922%20147.74%20288.687%20149%20288.342C152.302%20287.451%20155.364%20286.348%20158.312%20285.145C150.371%20273.361%20145.118%20259.789%20141.946%20245.451ZM137.7%20143.451C132.112%20164.307%20127.113%20194.326%20128.489%20224.436C130.952%20223.367%20133.554%20222.371%20136.444%20221.551L138.457%20221.101C136.003%20188.939%20141.308%20156.165%20147.284%20133.866C148.799%20128.225%20150.318%20122.978%20151.832%20118.085C149.393%20119.637%20146.767%20121.228%20143.776%20122.867C141.759%20129.093%20139.722%20135.898%20137.7%20143.451Z'%20fill='%23C04B41'/%3e%3c/svg%3e",If=t3,vr=document.createElement("link");vr.rel="shortcut icon";vr.href=Nv;document.head.appendChild(vr);const Hv=()=>{const[i,u]=it.useState();return it.useEffect(()=>{const c=new Bv;c.load().then(()=>{var f;(f=document.getElementById("playwrightReportBase64"))==null||f.remove(),u(c)})},[]),m.jsx(R3,{children:m.jsx(Ov,{report:i})})};window.onload=()=>{Q3(),s3.createRoot(document.querySelector("#root")).render(m.jsx(Hv,{}))};class Bv{constructor(){this._entries=new Map}async load(){const u=document.getElementById("playwrightReportBase64").content.textContent,c=new If.ZipReader(new If.Data64URIReader(u),{useWebWorkers:!1});for(const f of await c.getEntries())this._entries.set(f.filename,f);this._json=await this.entry("report.json")}json(){return this._json}async entry(u){const c=this._entries.get(u),f=new If.TextWriter;return await c.getData(f),JSON.parse(await f.getData())}}
</script>
    <style type='text/css'>:root{--color-canvas-default-transparent: rgba(255,255,255,0);--color-marketing-icon-primary: #218bff;--color-marketing-icon-secondary: #54aeff;--color-diff-blob-addition-num-text: #24292f;--color-diff-blob-addition-fg: #24292f;--color-diff-blob-addition-num-bg: #CCFFD8;--color-diff-blob-addition-line-bg: #E6FFEC;--color-diff-blob-addition-word-bg: #ABF2BC;--color-diff-blob-deletion-num-text: #24292f;--color-diff-blob-deletion-fg: #24292f;--color-diff-blob-deletion-num-bg: #FFD7D5;--color-diff-blob-deletion-line-bg: #FFEBE9;--color-diff-blob-deletion-word-bg: rgba(255,129,130,.4);--color-diff-blob-hunk-num-bg: rgba(84,174,255,.4);--color-diff-blob-expander-icon: #57606a;--color-diff-blob-selected-line-highlight-mix-blend-mode: multiply;--color-diffstat-deletion-border: rgba(27,31,36,.15);--color-diffstat-addition-border: rgba(27,31,36,.15);--color-diffstat-addition-bg: #2da44e;--color-search-keyword-hl: #fff8c5;--color-prettylights-syntax-comment: #6e7781;--color-prettylights-syntax-constant: #0550ae;--color-prettylights-syntax-entity: #8250df;--color-prettylights-syntax-storage-modifier-import: #24292f;--color-prettylights-syntax-entity-tag: #116329;--color-prettylights-syntax-keyword: #cf222e;--color-prettylights-syntax-string: #0a3069;--color-prettylights-syntax-variable: #953800;--color-prettylights-syntax-brackethighlighter-unmatched: #82071e;--color-prettylights-syntax-invalid-illegal-text: #f6f8fa;--color-prettylights-syntax-invalid-illegal-bg: #82071e;--color-prettylights-syntax-carriage-return-text: #f6f8fa;--color-prettylights-syntax-carriage-return-bg: #cf222e;--color-prettylights-syntax-string-regexp: #116329;--color-prettylights-syntax-markup-list: #3b2300;--color-prettylights-syntax-markup-heading: #0550ae;--color-prettylights-syntax-markup-italic: #24292f;--color-prettylights-syntax-markup-bold: #24292f;--color-prettylights-syntax-markup-deleted-text: #82071e;--color-prettylights-syntax-markup-deleted-bg: #FFEBE9;--color-prettylights-syntax-markup-inserted-text: #116329;--color-prettylights-syntax-markup-inserted-bg: #dafbe1;--color-prettylights-syntax-markup-changed-text: #953800;--color-prettylights-syntax-markup-changed-bg: #ffd8b5;--color-prettylights-syntax-markup-ignored-text: #eaeef2;--color-prettylights-syntax-markup-ignored-bg: #0550ae;--color-prettylights-syntax-meta-diff-range: #8250df;--color-prettylights-syntax-brackethighlighter-angle: #57606a;--color-prettylights-syntax-sublimelinter-gutter-mark: #8c959f;--color-prettylights-syntax-constant-other-reference-link: #0a3069;--color-codemirror-text: #24292f;--color-codemirror-bg: #ffffff;--color-codemirror-gutters-bg: #ffffff;--color-codemirror-guttermarker-text: #ffffff;--color-codemirror-guttermarker-subtle-text: #6e7781;--color-codemirror-linenumber-text: #57606a;--color-codemirror-cursor: #24292f;--color-codemirror-selection-bg: rgba(84,174,255,.4);--color-codemirror-activeline-bg: rgba(234,238,242,.5);--color-codemirror-matchingbracket-text: #24292f;--color-codemirror-lines-bg: #ffffff;--color-codemirror-syntax-comment: #24292f;--color-codemirror-syntax-constant: #0550ae;--color-codemirror-syntax-entity: #8250df;--color-codemirror-syntax-keyword: #cf222e;--color-codemirror-syntax-storage: #cf222e;--color-codemirror-syntax-string: #0a3069;--color-codemirror-syntax-support: #0550ae;--color-codemirror-syntax-variable: #953800;--color-checks-bg: #24292f;--color-checks-run-border-width: 0px;--color-checks-container-border-width: 0px;--color-checks-text-primary: #f6f8fa;--color-checks-text-secondary: #8c959f;--color-checks-text-link: #54aeff;--color-checks-btn-icon: #afb8c1;--color-checks-btn-hover-icon: #f6f8fa;--color-checks-btn-hover-bg: rgba(255,255,255,.125);--color-checks-input-text: #eaeef2;--color-checks-input-placeholder-text: #8c959f;--color-checks-input-focus-text: #8c959f;--color-checks-input-bg: #32383f;--color-checks-input-shadow: none;--color-checks-donut-error: #fa4549;--color-checks-donut-pending: #bf8700;--color-checks-donut-success: #2da44e;--color-checks-donut-neutral: #afb8c1;--color-checks-dropdown-text: #afb8c1;--color-checks-dropdown-bg: #32383f;--color-checks-dropdown-border: #424a53;--color-checks-dropdown-shadow: rgba(27,31,36,.3);--color-checks-dropdown-hover-text: #f6f8fa;--color-checks-dropdown-hover-bg: #424a53;--color-checks-dropdown-btn-hover-text: #f6f8fa;--color-checks-dropdown-btn-hover-bg: #32383f;--color-checks-scrollbar-thumb-bg: #57606a;--color-checks-header-label-text: #d0d7de;--color-checks-header-label-open-text: #f6f8fa;--color-checks-header-border: #32383f;--color-checks-header-icon: #8c959f;--color-checks-line-text: #d0d7de;--color-checks-line-num-text: rgba(140,149,159,.75);--color-checks-line-timestamp-text: #8c959f;--color-checks-line-hover-bg: #32383f;--color-checks-line-selected-bg: rgba(33,139,255,.15);--color-checks-line-selected-num-text: #54aeff;--color-checks-line-dt-fm-text: #24292f;--color-checks-line-dt-fm-bg: #9a6700;--color-checks-gate-bg: rgba(125,78,0,.15);--color-checks-gate-text: #d0d7de;--color-checks-gate-waiting-text: #afb8c1;--color-checks-step-header-open-bg: #32383f;--color-checks-step-error-text: #ff8182;--color-checks-step-warning-text: #d4a72c;--color-checks-logline-text: #8c959f;--color-checks-logline-num-text: rgba(140,149,159,.75);--color-checks-logline-debug-text: #c297ff;--color-checks-logline-error-text: #d0d7de;--color-checks-logline-error-num-text: #ff8182;--color-checks-logline-error-bg: rgba(164,14,38,.15);--color-checks-logline-warning-text: #d0d7de;--color-checks-logline-warning-num-text: #d4a72c;--color-checks-logline-warning-bg: rgba(125,78,0,.15);--color-checks-logline-command-text: #54aeff;--color-checks-logline-section-text: #4ac26b;--color-checks-ansi-black: #24292f;--color-checks-ansi-black-bright: #32383f;--color-checks-ansi-white: #d0d7de;--color-checks-ansi-white-bright: #d0d7de;--color-checks-ansi-gray: #8c959f;--color-checks-ansi-red: #ff8182;--color-checks-ansi-red-bright: #ffaba8;--color-checks-ansi-green: #4ac26b;--color-checks-ansi-green-bright: #6fdd8b;--color-checks-ansi-yellow: #d4a72c;--color-checks-ansi-yellow-bright: #eac54f;--color-checks-ansi-blue: #54aeff;--color-checks-ansi-blue-bright: #80ccff;--color-checks-ansi-magenta: #c297ff;--color-checks-ansi-magenta-bright: #d8b9ff;--color-checks-ansi-cyan: #76e3ea;--color-checks-ansi-cyan-bright: #b3f0ff;--color-project-header-bg: #24292f;--color-project-sidebar-bg: #ffffff;--color-project-gradient-in: #ffffff;--color-project-gradient-out: rgba(255,255,255,0);--color-mktg-success: rgba(36,146,67,1);--color-mktg-info: rgba(19,119,234,1);--color-mktg-bg-shade-gradient-top: rgba(27,31,36,.065);--color-mktg-bg-shade-gradient-bottom: rgba(27,31,36,0);--color-mktg-btn-bg-top: hsla(228,82%,66%,1);--color-mktg-btn-bg-bottom: #4969ed;--color-mktg-btn-bg-overlay-top: hsla(228,74%,59%,1);--color-mktg-btn-bg-overlay-bottom: #3355e0;--color-mktg-btn-text: #ffffff;--color-mktg-btn-primary-bg-top: hsla(137,56%,46%,1);--color-mktg-btn-primary-bg-bottom: #2ea44f;--color-mktg-btn-primary-bg-overlay-top: hsla(134,60%,38%,1);--color-mktg-btn-primary-bg-overlay-bottom: #22863a;--color-mktg-btn-primary-text: #ffffff;--color-mktg-btn-enterprise-bg-top: hsla(249,100%,72%,1);--color-mktg-btn-enterprise-bg-bottom: #6f57ff;--color-mktg-btn-enterprise-bg-overlay-top: hsla(248,65%,63%,1);--color-mktg-btn-enterprise-bg-overlay-bottom: #614eda;--color-mktg-btn-enterprise-text: #ffffff;--color-mktg-btn-outline-text: #4969ed;--color-mktg-btn-outline-border: rgba(73,105,237,.3);--color-mktg-btn-outline-hover-text: #3355e0;--color-mktg-btn-outline-hover-border: rgba(51,85,224,.5);--color-mktg-btn-outline-focus-border: #4969ed;--color-mktg-btn-outline-focus-border-inset: rgba(73,105,237,.5);--color-mktg-btn-dark-text: #ffffff;--color-mktg-btn-dark-border: rgba(255,255,255,.3);--color-mktg-btn-dark-hover-text: #ffffff;--color-mktg-btn-dark-hover-border: rgba(255,255,255,.5);--color-mktg-btn-dark-focus-border: #ffffff;--color-mktg-btn-dark-focus-border-inset: rgba(255,255,255,.5);--color-avatar-bg: #ffffff;--color-avatar-border: rgba(27,31,36,.15);--color-avatar-stack-fade: #afb8c1;--color-avatar-stack-fade-more: #d0d7de;--color-avatar-child-shadow: -2px -2px 0 rgba(255,255,255,.8);--color-topic-tag-border: rgba(0,0,0,0);--color-select-menu-backdrop-border: rgba(0,0,0,0);--color-select-menu-tap-highlight: rgba(175,184,193,.5);--color-select-menu-tap-focus-bg: #b6e3ff;--color-overlay-shadow: 0 1px 3px rgba(27,31,36,.12), 0 8px 24px rgba(66,74,83,.12);--color-header-text: rgba(255,255,255,.7);--color-header-bg: #24292f;--color-header-logo: #ffffff;--color-header-search-bg: #24292f;--color-header-search-border: #57606a;--color-sidenav-selected-bg: #ffffff;--color-menu-bg-active: rgba(0,0,0,0);--color-control-transparent-bg-hover: #818b981a;--color-input-disabled-bg: rgba(175,184,193,.2);--color-timeline-badge-bg: #eaeef2;--color-ansi-black: #24292f;--color-ansi-black-bright: #57606a;--color-ansi-white: #6e7781;--color-ansi-white-bright: #8c959f;--color-ansi-gray: #6e7781;--color-ansi-red: #cf222e;--color-ansi-red-bright: #a40e26;--color-ansi-green: #116329;--color-ansi-green-bright: #1a7f37;--color-ansi-yellow: #4d2d00;--color-ansi-yellow-bright: #633c01;--color-ansi-blue: #0969da;--color-ansi-blue-bright: #218bff;--color-ansi-magenta: #8250df;--color-ansi-magenta-bright: #a475f9;--color-ansi-cyan: #1b7c83;--color-ansi-cyan-bright: #3192aa;--color-btn-text: #24292f;--color-btn-bg: #f6f8fa;--color-btn-border: rgba(27,31,36,.15);--color-btn-shadow: 0 1px 0 rgba(27,31,36,.04);--color-btn-inset-shadow: inset 0 1px 0 rgba(255,255,255,.25);--color-btn-hover-bg: #f3f4f6;--color-btn-hover-border: rgba(27,31,36,.15);--color-btn-active-bg: hsla(220,14%,93%,1);--color-btn-active-border: rgba(27,31,36,.15);--color-btn-selected-bg: hsla(220,14%,94%,1);--color-btn-focus-bg: #f6f8fa;--color-btn-focus-border: rgba(27,31,36,.15);--color-btn-focus-shadow: 0 0 0 3px rgba(9,105,218,.3);--color-btn-shadow-active: inset 0 .15em .3em rgba(27,31,36,.15);--color-btn-shadow-input-focus: 0 0 0 .2em rgba(9,105,218,.3);--color-btn-counter-bg: rgba(27,31,36,.08);--color-btn-primary-text: #ffffff;--color-btn-primary-bg: #2da44e;--color-btn-primary-border: rgba(27,31,36,.15);--color-btn-primary-shadow: 0 1px 0 rgba(27,31,36,.1);--color-btn-primary-inset-shadow: inset 0 1px 0 rgba(255,255,255,.03);--color-btn-primary-hover-bg: #2c974b;--color-btn-primary-hover-border: rgba(27,31,36,.15);--color-btn-primary-selected-bg: hsla(137,55%,36%,1);--color-btn-primary-selected-shadow: inset 0 1px 0 rgba(0,45,17,.2);--color-btn-primary-disabled-text: rgba(255,255,255,.8);--color-btn-primary-disabled-bg: #94d3a2;--color-btn-primary-disabled-border: rgba(27,31,36,.15);--color-btn-primary-focus-bg: #2da44e;--color-btn-primary-focus-border: rgba(27,31,36,.15);--color-btn-primary-focus-shadow: 0 0 0 3px rgba(45,164,78,.4);--color-btn-primary-icon: rgba(255,255,255,.8);--color-btn-primary-counter-bg: rgba(255,255,255,.2);--color-btn-outline-text: #0969da;--color-btn-outline-hover-text: #ffffff;--color-btn-outline-hover-bg: #0969da;--color-btn-outline-hover-border: rgba(27,31,36,.15);--color-btn-outline-hover-shadow: 0 1px 0 rgba(27,31,36,.1);--color-btn-outline-hover-inset-shadow: inset 0 1px 0 rgba(255,255,255,.03);--color-btn-outline-hover-counter-bg: rgba(255,255,255,.2);--color-btn-outline-selected-text: #ffffff;--color-btn-outline-selected-bg: hsla(212,92%,42%,1);--color-btn-outline-selected-border: rgba(27,31,36,.15);--color-btn-outline-selected-shadow: inset 0 1px 0 rgba(0,33,85,.2);--color-btn-outline-disabled-text: rgba(9,105,218,.5);--color-btn-outline-disabled-bg: #f6f8fa;--color-btn-outline-disabled-counter-bg: rgba(9,105,218,.05);--color-btn-outline-focus-border: rgba(27,31,36,.15);--color-btn-outline-focus-shadow: 0 0 0 3px rgba(5,80,174,.4);--color-btn-outline-counter-bg: rgba(9,105,218,.1);--color-btn-danger-text: #cf222e;--color-btn-danger-hover-text: #ffffff;--color-btn-danger-hover-bg: #a40e26;--color-btn-danger-hover-border: rgba(27,31,36,.15);--color-btn-danger-hover-shadow: 0 1px 0 rgba(27,31,36,.1);--color-btn-danger-hover-inset-shadow: inset 0 1px 0 rgba(255,255,255,.03);--color-btn-danger-hover-counter-bg: rgba(255,255,255,.2);--color-btn-danger-selected-text: #ffffff;--color-btn-danger-selected-bg: hsla(356,72%,44%,1);--color-btn-danger-selected-border: rgba(27,31,36,.15);--color-btn-danger-selected-shadow: inset 0 1px 0 rgba(76,0,20,.2);--color-btn-danger-disabled-text: rgba(207,34,46,.5);--color-btn-danger-disabled-bg: #f6f8fa;--color-btn-danger-disabled-counter-bg: rgba(207,34,46,.05);--color-btn-danger-focus-border: rgba(27,31,36,.15);--color-btn-danger-focus-shadow: 0 0 0 3px rgba(164,14,38,.4);--color-btn-danger-counter-bg: rgba(207,34,46,.1);--color-btn-danger-icon: #cf222e;--color-btn-danger-hover-icon: #ffffff;--color-underlinenav-icon: #6e7781;--color-underlinenav-border-hover: rgba(175,184,193,.2);--color-fg-default: #24292f;--color-fg-muted: #57606a;--color-fg-subtle: #6e7781;--color-fg-on-emphasis: #ffffff;--color-canvas-default: #ffffff;--color-canvas-overlay: #ffffff;--color-canvas-inset: #f6f8fa;--color-canvas-subtle: #f6f8fa;--color-border-default: #d0d7de;--color-border-muted: hsla(210,18%,87%,1);--color-border-subtle: rgba(27,31,36,.15);--color-shadow-small: 0 1px 0 rgba(27,31,36,.04);--color-shadow-medium: 0 3px 6px rgba(140,149,159,.15);--color-shadow-large: 0 8px 24px rgba(140,149,159,.2);--color-shadow-extra-large: 0 12px 28px rgba(140,149,159,.3);--color-neutral-emphasis-plus: #24292f;--color-neutral-emphasis: #6e7781;--color-neutral-muted: rgba(175,184,193,.2);--color-neutral-subtle: rgba(234,238,242,.5);--color-accent-fg: #0969da;--color-accent-emphasis: #0969da;--color-accent-muted: rgba(84,174,255,.4);--color-accent-subtle: #ddf4ff;--color-success-fg: #1a7f37;--color-success-emphasis: #2da44e;--color-success-muted: rgba(74,194,107,.4);--color-success-subtle: #dafbe1;--color-attention-fg: #9a6700;--color-attention-emphasis: #bf8700;--color-attention-muted: rgba(212,167,44,.4);--color-attention-subtle: #fff8c5;--color-severe-fg: #bc4c00;--color-severe-emphasis: #bc4c00;--color-severe-muted: rgba(251,143,68,.4);--color-severe-subtle: #fff1e5;--color-danger-fg: #cf222e;--color-danger-emphasis: #cf222e;--color-danger-muted: rgba(255,129,130,.4);--color-danger-subtle: #FFEBE9;--color-done-fg: #8250df;--color-done-emphasis: #8250df;--color-done-muted: rgba(194,151,255,.4);--color-done-subtle: #fbefff;--color-sponsors-fg: #bf3989;--color-sponsors-emphasis: #bf3989;--color-sponsors-muted: rgba(255,128,200,.4);--color-sponsors-subtle: #ffeff7;--color-primer-canvas-backdrop: rgba(27,31,36,.5);--color-primer-canvas-sticky: rgba(255,255,255,.95);--color-primer-border-active: #FD8C73;--color-primer-border-contrast: rgba(27,31,36,.1);--color-primer-shadow-highlight: inset 0 1px 0 rgba(255,255,255,.25);--color-primer-shadow-inset: inset 0 1px 0 rgba(208,215,222,.2);--color-primer-shadow-focus: 0 0 0 3px rgba(9,105,218,.3);--color-scale-black: #1b1f24;--color-scale-white: #ffffff;--color-scale-gray-0: #f6f8fa;--color-scale-gray-1: #eaeef2;--color-scale-gray-2: #d0d7de;--color-scale-gray-3: #afb8c1;--color-scale-gray-4: #8c959f;--color-scale-gray-5: #6e7781;--color-scale-gray-6: #57606a;--color-scale-gray-7: #424a53;--color-scale-gray-8: #32383f;--color-scale-gray-9: #24292f;--color-scale-blue-0: #ddf4ff;--color-scale-blue-1: #b6e3ff;--color-scale-blue-2: #80ccff;--color-scale-blue-3: #54aeff;--color-scale-blue-4: #218bff;--color-scale-blue-5: #0969da;--color-scale-blue-6: #0550ae;--color-scale-blue-7: #033d8b;--color-scale-blue-8: #0a3069;--color-scale-blue-9: #002155;--color-scale-green-0: #dafbe1;--color-scale-green-1: #aceebb;--color-scale-green-2: #6fdd8b;--color-scale-green-3: #4ac26b;--color-scale-green-4: #2da44e;--color-scale-green-5: #1a7f37;--color-scale-green-6: #116329;--color-scale-green-7: #044f1e;--color-scale-green-8: #003d16;--color-scale-green-9: #002d11;--color-scale-yellow-0: #fff8c5;--color-scale-yellow-1: #fae17d;--color-scale-yellow-2: #eac54f;--color-scale-yellow-3: #d4a72c;--color-scale-yellow-4: #bf8700;--color-scale-yellow-5: #9a6700;--color-scale-yellow-6: #7d4e00;--color-scale-yellow-7: #633c01;--color-scale-yellow-8: #4d2d00;--color-scale-yellow-9: #3b2300;--color-scale-orange-0: #fff1e5;--color-scale-orange-1: #ffd8b5;--color-scale-orange-2: #ffb77c;--color-scale-orange-3: #fb8f44;--color-scale-orange-4: #e16f24;--color-scale-orange-5: #bc4c00;--color-scale-orange-6: #953800;--color-scale-orange-7: #762c00;--color-scale-orange-8: #5c2200;--color-scale-orange-9: #471700;--color-scale-red-0: #FFEBE9;--color-scale-red-1: #ffcecb;--color-scale-red-2: #ffaba8;--color-scale-red-3: #ff8182;--color-scale-red-4: #fa4549;--color-scale-red-5: #cf222e;--color-scale-red-6: #a40e26;--color-scale-red-7: #82071e;--color-scale-red-8: #660018;--color-scale-red-9: #4c0014;--color-scale-purple-0: #fbefff;--color-scale-purple-1: #ecd8ff;--color-scale-purple-2: #d8b9ff;--color-scale-purple-3: #c297ff;--color-scale-purple-4: #a475f9;--color-scale-purple-5: #8250df;--color-scale-purple-6: #6639ba;--color-scale-purple-7: #512a97;--color-scale-purple-8: #3e1f79;--color-scale-purple-9: #2e1461;--color-scale-pink-0: #ffeff7;--color-scale-pink-1: #ffd3eb;--color-scale-pink-2: #ffadda;--color-scale-pink-3: #ff80c8;--color-scale-pink-4: #e85aad;--color-scale-pink-5: #bf3989;--color-scale-pink-6: #99286e;--color-scale-pink-7: #772057;--color-scale-pink-8: #611347;--color-scale-pink-9: #4d0336;--color-scale-coral-0: #FFF0EB;--color-scale-coral-1: #FFD6CC;--color-scale-coral-2: #FFB4A1;--color-scale-coral-3: #FD8C73;--color-scale-coral-4: #EC6547;--color-scale-coral-5: #C4432B;--color-scale-coral-6: #9E2F1C;--color-scale-coral-7: #801F0F;--color-scale-coral-8: #691105;--color-scale-coral-9: #510901 }:root.dark-mode{color-scheme:dark;--color-canvas-default-transparent: rgba(13,17,23,0);--color-marketing-icon-primary: #79c0ff;--color-marketing-icon-secondary: #1f6feb;--color-diff-blob-addition-num-text: #c9d1d9;--color-diff-blob-addition-fg: #c9d1d9;--color-diff-blob-addition-num-bg: rgba(63,185,80,.3);--color-diff-blob-addition-line-bg: rgba(46,160,67,.15);--color-diff-blob-addition-word-bg: rgba(46,160,67,.4);--color-diff-blob-deletion-num-text: #c9d1d9;--color-diff-blob-deletion-fg: #c9d1d9;--color-diff-blob-deletion-num-bg: rgba(248,81,73,.3);--color-diff-blob-deletion-line-bg: rgba(248,81,73,.15);--color-diff-blob-deletion-word-bg: rgba(248,81,73,.4);--color-diff-blob-hunk-num-bg: rgba(56,139,253,.4);--color-diff-blob-expander-icon: #8b949e;--color-diff-blob-selected-line-highlight-mix-blend-mode: screen;--color-diffstat-deletion-border: rgba(240,246,252,.1);--color-diffstat-addition-border: rgba(240,246,252,.1);--color-diffstat-addition-bg: #3fb950;--color-search-keyword-hl: rgba(210,153,34,.4);--color-prettylights-syntax-comment: #8b949e;--color-prettylights-syntax-constant: #79c0ff;--color-prettylights-syntax-entity: #d2a8ff;--color-prettylights-syntax-storage-modifier-import: #c9d1d9;--color-prettylights-syntax-entity-tag: #7ee787;--color-prettylights-syntax-keyword: #ff7b72;--color-prettylights-syntax-string: #a5d6ff;--color-prettylights-syntax-variable: #ffa657;--color-prettylights-syntax-brackethighlighter-unmatched: #f85149;--color-prettylights-syntax-invalid-illegal-text: #f0f6fc;--color-prettylights-syntax-invalid-illegal-bg: #8e1519;--color-prettylights-syntax-carriage-return-text: #f0f6fc;--color-prettylights-syntax-carriage-return-bg: #b62324;--color-prettylights-syntax-string-regexp: #7ee787;--color-prettylights-syntax-markup-list: #f2cc60;--color-prettylights-syntax-markup-heading: #1f6feb;--color-prettylights-syntax-markup-italic: #c9d1d9;--color-prettylights-syntax-markup-bold: #c9d1d9;--color-prettylights-syntax-markup-deleted-text: #ffdcd7;--color-prettylights-syntax-markup-deleted-bg: #67060c;--color-prettylights-syntax-markup-inserted-text: #aff5b4;--color-prettylights-syntax-markup-inserted-bg: #033a16;--color-prettylights-syntax-markup-changed-text: #ffdfb6;--color-prettylights-syntax-markup-changed-bg: #5a1e02;--color-prettylights-syntax-markup-ignored-text: #c9d1d9;--color-prettylights-syntax-markup-ignored-bg: #1158c7;--color-prettylights-syntax-meta-diff-range: #d2a8ff;--color-prettylights-syntax-brackethighlighter-angle: #8b949e;--color-prettylights-syntax-sublimelinter-gutter-mark: #484f58;--color-prettylights-syntax-constant-other-reference-link: #a5d6ff;--color-codemirror-text: #c9d1d9;--color-codemirror-bg: #0d1117;--color-codemirror-gutters-bg: #0d1117;--color-codemirror-guttermarker-text: #0d1117;--color-codemirror-guttermarker-subtle-text: #484f58;--color-codemirror-linenumber-text: #8b949e;--color-codemirror-cursor: #c9d1d9;--color-codemirror-selection-bg: rgba(56,139,253,.4);--color-codemirror-activeline-bg: rgba(110,118,129,.1);--color-codemirror-matchingbracket-text: #c9d1d9;--color-codemirror-lines-bg: #0d1117;--color-codemirror-syntax-comment: #8b949e;--color-codemirror-syntax-constant: #79c0ff;--color-codemirror-syntax-entity: #d2a8ff;--color-codemirror-syntax-keyword: #ff7b72;--color-codemirror-syntax-storage: #ff7b72;--color-codemirror-syntax-string: #a5d6ff;--color-codemirror-syntax-support: #79c0ff;--color-codemirror-syntax-variable: #ffa657;--color-checks-bg: #010409;--color-checks-run-border-width: 1px;--color-checks-container-border-width: 1px;--color-checks-text-primary: #c9d1d9;--color-checks-text-secondary: #8b949e;--color-checks-text-link: #58a6ff;--color-checks-btn-icon: #8b949e;--color-checks-btn-hover-icon: #c9d1d9;--color-checks-btn-hover-bg: rgba(110,118,129,.1);--color-checks-input-text: #8b949e;--color-checks-input-placeholder-text: #484f58;--color-checks-input-focus-text: #c9d1d9;--color-checks-input-bg: #161b22;--color-checks-input-shadow: none;--color-checks-donut-error: #f85149;--color-checks-donut-pending: #d29922;--color-checks-donut-success: #2ea043;--color-checks-donut-neutral: #8b949e;--color-checks-dropdown-text: #c9d1d9;--color-checks-dropdown-bg: #161b22;--color-checks-dropdown-border: #30363d;--color-checks-dropdown-shadow: rgba(1,4,9,.3);--color-checks-dropdown-hover-text: #c9d1d9;--color-checks-dropdown-hover-bg: rgba(110,118,129,.1);--color-checks-dropdown-btn-hover-text: #c9d1d9;--color-checks-dropdown-btn-hover-bg: rgba(110,118,129,.1);--color-checks-scrollbar-thumb-bg: rgba(110,118,129,.4);--color-checks-header-label-text: #8b949e;--color-checks-header-label-open-text: #c9d1d9;--color-checks-header-border: #21262d;--color-checks-header-icon: #8b949e;--color-checks-line-text: #8b949e;--color-checks-line-num-text: #484f58;--color-checks-line-timestamp-text: #484f58;--color-checks-line-hover-bg: rgba(110,118,129,.1);--color-checks-line-selected-bg: rgba(56,139,253,.15);--color-checks-line-selected-num-text: #58a6ff;--color-checks-line-dt-fm-text: #f0f6fc;--color-checks-line-dt-fm-bg: #9e6a03;--color-checks-gate-bg: rgba(187,128,9,.15);--color-checks-gate-text: #8b949e;--color-checks-gate-waiting-text: #d29922;--color-checks-step-header-open-bg: #161b22;--color-checks-step-error-text: #f85149;--color-checks-step-warning-text: #d29922;--color-checks-logline-text: #8b949e;--color-checks-logline-num-text: #484f58;--color-checks-logline-debug-text: #a371f7;--color-checks-logline-error-text: #8b949e;--color-checks-logline-error-num-text: #484f58;--color-checks-logline-error-bg: rgba(248,81,73,.15);--color-checks-logline-warning-text: #8b949e;--color-checks-logline-warning-num-text: #d29922;--color-checks-logline-warning-bg: rgba(187,128,9,.15);--color-checks-logline-command-text: #58a6ff;--color-checks-logline-section-text: #3fb950;--color-checks-ansi-black: #0d1117;--color-checks-ansi-black-bright: #161b22;--color-checks-ansi-white: #b1bac4;--color-checks-ansi-white-bright: #b1bac4;--color-checks-ansi-gray: #6e7681;--color-checks-ansi-red: #ff7b72;--color-checks-ansi-red-bright: #ffa198;--color-checks-ansi-green: #3fb950;--color-checks-ansi-green-bright: #56d364;--color-checks-ansi-yellow: #d29922;--color-checks-ansi-yellow-bright: #e3b341;--color-checks-ansi-blue: #58a6ff;--color-checks-ansi-blue-bright: #79c0ff;--color-checks-ansi-magenta: #bc8cff;--color-checks-ansi-magenta-bright: #d2a8ff;--color-checks-ansi-cyan: #76e3ea;--color-checks-ansi-cyan-bright: #b3f0ff;--color-project-header-bg: #0d1117;--color-project-sidebar-bg: #161b22;--color-project-gradient-in: #161b22;--color-project-gradient-out: rgba(22,27,34,0);--color-mktg-success: rgba(41,147,61,1);--color-mktg-info: rgba(42,123,243,1);--color-mktg-bg-shade-gradient-top: rgba(1,4,9,.065);--color-mktg-bg-shade-gradient-bottom: rgba(1,4,9,0);--color-mktg-btn-bg-top: hsla(228,82%,66%,1);--color-mktg-btn-bg-bottom: #4969ed;--color-mktg-btn-bg-overlay-top: hsla(228,74%,59%,1);--color-mktg-btn-bg-overlay-bottom: #3355e0;--color-mktg-btn-text: #f0f6fc;--color-mktg-btn-primary-bg-top: hsla(137,56%,46%,1);--color-mktg-btn-primary-bg-bottom: #2ea44f;--color-mktg-btn-primary-bg-overlay-top: hsla(134,60%,38%,1);--color-mktg-btn-primary-bg-overlay-bottom: #22863a;--color-mktg-btn-primary-text: #f0f6fc;--color-mktg-btn-enterprise-bg-top: hsla(249,100%,72%,1);--color-mktg-btn-enterprise-bg-bottom: #6f57ff;--color-mktg-btn-enterprise-bg-overlay-top: hsla(248,65%,63%,1);--color-mktg-btn-enterprise-bg-overlay-bottom: #614eda;--color-mktg-btn-enterprise-text: #f0f6fc;--color-mktg-btn-outline-text: #f0f6fc;--color-mktg-btn-outline-border: rgba(240,246,252,.3);--color-mktg-btn-outline-hover-text: #f0f6fc;--color-mktg-btn-outline-hover-border: rgba(240,246,252,.5);--color-mktg-btn-outline-focus-border: #f0f6fc;--color-mktg-btn-outline-focus-border-inset: rgba(240,246,252,.5);--color-mktg-btn-dark-text: #f0f6fc;--color-mktg-btn-dark-border: rgba(240,246,252,.3);--color-mktg-btn-dark-hover-text: #f0f6fc;--color-mktg-btn-dark-hover-border: rgba(240,246,252,.5);--color-mktg-btn-dark-focus-border: #f0f6fc;--color-mktg-btn-dark-focus-border-inset: rgba(240,246,252,.5);--color-avatar-bg: rgba(240,246,252,.1);--color-avatar-border: rgba(240,246,252,.1);--color-avatar-stack-fade: #30363d;--color-avatar-stack-fade-more: #21262d;--color-avatar-child-shadow: -2px -2px 0 #0d1117;--color-topic-tag-border: rgba(0,0,0,0);--color-select-menu-backdrop-border: #484f58;--color-select-menu-tap-highlight: rgba(48,54,61,.5);--color-select-menu-tap-focus-bg: #0c2d6b;--color-overlay-shadow: 0 0 0 1px #30363d, 0 16px 32px rgba(1,4,9,.85);--color-header-text: rgba(240,246,252,.7);--color-header-bg: #161b22;--color-header-logo: #f0f6fc;--color-header-search-bg: #0d1117;--color-header-search-border: #30363d;--color-sidenav-selected-bg: #21262d;--color-menu-bg-active: #161b22;--color-control-transparent-bg-hover: #656c7633;--color-input-disabled-bg: rgba(110,118,129,0);--color-timeline-badge-bg: #21262d;--color-ansi-black: #484f58;--color-ansi-black-bright: #6e7681;--color-ansi-white: #b1bac4;--color-ansi-white-bright: #f0f6fc;--color-ansi-gray: #6e7681;--color-ansi-red: #ff7b72;--color-ansi-red-bright: #ffa198;--color-ansi-green: #3fb950;--color-ansi-green-bright: #56d364;--color-ansi-yellow: #d29922;--color-ansi-yellow-bright: #e3b341;--color-ansi-blue: #58a6ff;--color-ansi-blue-bright: #79c0ff;--color-ansi-magenta: #bc8cff;--color-ansi-magenta-bright: #d2a8ff;--color-ansi-cyan: #39c5cf;--color-ansi-cyan-bright: #56d4dd;--color-btn-text: #c9d1d9;--color-btn-bg: #21262d;--color-btn-border: rgba(240,246,252,.1);--color-btn-shadow: 0 0 transparent;--color-btn-inset-shadow: 0 0 transparent;--color-btn-hover-bg: #30363d;--color-btn-hover-border: #8b949e;--color-btn-active-bg: hsla(212,12%,18%,1);--color-btn-active-border: #6e7681;--color-btn-selected-bg: #161b22;--color-btn-focus-bg: #21262d;--color-btn-focus-border: #8b949e;--color-btn-focus-shadow: 0 0 0 3px rgba(139,148,158,.3);--color-btn-shadow-active: inset 0 .15em .3em rgba(1,4,9,.15);--color-btn-shadow-input-focus: 0 0 0 .2em rgba(31,111,235,.3);--color-btn-counter-bg: #30363d;--color-btn-primary-text: #ffffff;--color-btn-primary-bg: #238636;--color-btn-primary-border: rgba(240,246,252,.1);--color-btn-primary-shadow: 0 0 transparent;--color-btn-primary-inset-shadow: 0 0 transparent;--color-btn-primary-hover-bg: #2ea043;--color-btn-primary-hover-border: rgba(240,246,252,.1);--color-btn-primary-selected-bg: #238636;--color-btn-primary-selected-shadow: 0 0 transparent;--color-btn-primary-disabled-text: rgba(240,246,252,.5);--color-btn-primary-disabled-bg: rgba(35,134,54,.6);--color-btn-primary-disabled-border: rgba(240,246,252,.1);--color-btn-primary-focus-bg: #238636;--color-btn-primary-focus-border: rgba(240,246,252,.1);--color-btn-primary-focus-shadow: 0 0 0 3px rgba(46,164,79,.4);--color-btn-primary-icon: #f0f6fc;--color-btn-primary-counter-bg: rgba(240,246,252,.2);--color-btn-outline-text: #58a6ff;--color-btn-outline-hover-text: #58a6ff;--color-btn-outline-hover-bg: #30363d;--color-btn-outline-hover-border: rgba(240,246,252,.1);--color-btn-outline-hover-shadow: 0 1px 0 rgba(1,4,9,.1);--color-btn-outline-hover-inset-shadow: inset 0 1px 0 rgba(240,246,252,.03);--color-btn-outline-hover-counter-bg: rgba(240,246,252,.2);--color-btn-outline-selected-text: #f0f6fc;--color-btn-outline-selected-bg: #0d419d;--color-btn-outline-selected-border: rgba(240,246,252,.1);--color-btn-outline-selected-shadow: 0 0 transparent;--color-btn-outline-disabled-text: rgba(88,166,255,.5);--color-btn-outline-disabled-bg: #0d1117;--color-btn-outline-disabled-counter-bg: rgba(31,111,235,.05);--color-btn-outline-focus-border: rgba(240,246,252,.1);--color-btn-outline-focus-shadow: 0 0 0 3px rgba(17,88,199,.4);--color-btn-outline-counter-bg: rgba(31,111,235,.1);--color-btn-danger-text: #f85149;--color-btn-danger-hover-text: #f0f6fc;--color-btn-danger-hover-bg: #da3633;--color-btn-danger-hover-border: #f85149;--color-btn-danger-hover-shadow: 0 0 transparent;--color-btn-danger-hover-inset-shadow: 0 0 transparent;--color-btn-danger-hover-icon: #f0f6fc;--color-btn-danger-hover-counter-bg: rgba(255,255,255,.2);--color-btn-danger-selected-text: #ffffff;--color-btn-danger-selected-bg: #b62324;--color-btn-danger-selected-border: #ff7b72;--color-btn-danger-selected-shadow: 0 0 transparent;--color-btn-danger-disabled-text: rgba(248,81,73,.5);--color-btn-danger-disabled-bg: #0d1117;--color-btn-danger-disabled-counter-bg: rgba(218,54,51,.05);--color-btn-danger-focus-border: #f85149;--color-btn-danger-focus-shadow: 0 0 0 3px rgba(248,81,73,.4);--color-btn-danger-counter-bg: rgba(218,54,51,.1);--color-btn-danger-icon: #f85149;--color-underlinenav-icon: #484f58;--color-underlinenav-border-hover: rgba(110,118,129,.4);--color-fg-default: #c9d1d9;--color-fg-muted: #8b949e;--color-fg-subtle: #484f58;--color-fg-on-emphasis: #f0f6fc;--color-canvas-default: #0d1117;--color-canvas-overlay: #161b22;--color-canvas-inset: #010409;--color-canvas-subtle: #161b22;--color-border-default: #30363d;--color-border-muted: #21262d;--color-border-subtle: rgba(240,246,252,.1);--color-shadow-small: 0 0 transparent;--color-shadow-medium: 0 3px 6px #010409;--color-shadow-large: 0 8px 24px #010409;--color-shadow-extra-large: 0 12px 48px #010409;--color-neutral-emphasis-plus: #6e7681;--color-neutral-emphasis: #6e7681;--color-neutral-muted: rgba(110,118,129,.4);--color-neutral-subtle: rgba(110,118,129,.1);--color-accent-fg: #58a6ff;--color-accent-emphasis: #1f6feb;--color-accent-muted: rgba(56,139,253,.4);--color-accent-subtle: rgba(56,139,253,.15);--color-success-fg: #3fb950;--color-success-emphasis: #238636;--color-success-muted: rgba(46,160,67,.4);--color-success-subtle: rgba(46,160,67,.15);--color-attention-fg: #d29922;--color-attention-emphasis: #9e6a03;--color-attention-muted: rgba(187,128,9,.4);--color-attention-subtle: rgba(187,128,9,.15);--color-severe-fg: #db6d28;--color-severe-emphasis: #bd561d;--color-severe-muted: rgba(219,109,40,.4);--color-severe-subtle: rgba(219,109,40,.15);--color-danger-fg: #f85149;--color-danger-emphasis: #da3633;--color-danger-muted: rgba(248,81,73,.4);--color-danger-subtle: rgba(248,81,73,.15);--color-done-fg: #a371f7;--color-done-emphasis: #8957e5;--color-done-muted: rgba(163,113,247,.4);--color-done-subtle: rgba(163,113,247,.15);--color-sponsors-fg: #db61a2;--color-sponsors-emphasis: #bf4b8a;--color-sponsors-muted: rgba(219,97,162,.4);--color-sponsors-subtle: rgba(219,97,162,.15);--color-primer-canvas-backdrop: rgba(1,4,9,.8);--color-primer-canvas-sticky: rgba(13,17,23,.95);--color-primer-border-active: #F78166;--color-primer-border-contrast: rgba(240,246,252,.2);--color-primer-shadow-highlight: 0 0 transparent;--color-primer-shadow-inset: 0 0 transparent;--color-primer-shadow-focus: 0 0 0 3px #0c2d6b;--color-scale-black: #010409;--color-scale-white: #f0f6fc;--color-scale-gray-0: #f0f6fc;--color-scale-gray-1: #c9d1d9;--color-scale-gray-2: #b1bac4;--color-scale-gray-3: #8b949e;--color-scale-gray-4: #6e7681;--color-scale-gray-5: #484f58;--color-scale-gray-6: #30363d;--color-scale-gray-7: #21262d;--color-scale-gray-8: #161b22;--color-scale-gray-9: #0d1117;--color-scale-blue-0: #cae8ff;--color-scale-blue-1: #a5d6ff;--color-scale-blue-2: #79c0ff;--color-scale-blue-3: #58a6ff;--color-scale-blue-4: #388bfd;--color-scale-blue-5: #1f6feb;--color-scale-blue-6: #1158c7;--color-scale-blue-7: #0d419d;--color-scale-blue-8: #0c2d6b;--color-scale-blue-9: #051d4d;--color-scale-green-0: #aff5b4;--color-scale-green-1: #7ee787;--color-scale-green-2: #56d364;--color-scale-green-3: #3fb950;--color-scale-green-4: #2ea043;--color-scale-green-5: #238636;--color-scale-green-6: #196c2e;--color-scale-green-7: #0f5323;--color-scale-green-8: #033a16;--color-scale-green-9: #04260f;--color-scale-yellow-0: #f8e3a1;--color-scale-yellow-1: #f2cc60;--color-scale-yellow-2: #e3b341;--color-scale-yellow-3: #d29922;--color-scale-yellow-4: #bb8009;--color-scale-yellow-5: #9e6a03;--color-scale-yellow-6: #845306;--color-scale-yellow-7: #693e00;--color-scale-yellow-8: #4b2900;--color-scale-yellow-9: #341a00;--color-scale-orange-0: #ffdfb6;--color-scale-orange-1: #ffc680;--color-scale-orange-2: #ffa657;--color-scale-orange-3: #f0883e;--color-scale-orange-4: #db6d28;--color-scale-orange-5: #bd561d;--color-scale-orange-6: #9b4215;--color-scale-orange-7: #762d0a;--color-scale-orange-8: #5a1e02;--color-scale-orange-9: #3d1300;--color-scale-red-0: #ffdcd7;--color-scale-red-1: #ffc1ba;--color-scale-red-2: #ffa198;--color-scale-red-3: #ff7b72;--color-scale-red-4: #f85149;--color-scale-red-5: #da3633;--color-scale-red-6: #b62324;--color-scale-red-7: #8e1519;--color-scale-red-8: #67060c;--color-scale-red-9: #490202;--color-scale-purple-0: #eddeff;--color-scale-purple-1: #e2c5ff;--color-scale-purple-2: #d2a8ff;--color-scale-purple-3: #bc8cff;--color-scale-purple-4: #a371f7;--color-scale-purple-5: #8957e5;--color-scale-purple-6: #6e40c9;--color-scale-purple-7: #553098;--color-scale-purple-8: #3c1e70;--color-scale-purple-9: #271052;--color-scale-pink-0: #ffdaec;--color-scale-pink-1: #ffbedd;--color-scale-pink-2: #ff9bce;--color-scale-pink-3: #f778ba;--color-scale-pink-4: #db61a2;--color-scale-pink-5: #bf4b8a;--color-scale-pink-6: #9e3670;--color-scale-pink-7: #7d2457;--color-scale-pink-8: #5e103e;--color-scale-pink-9: #42062a;--color-scale-coral-0: #FFDDD2;--color-scale-coral-1: #FFC2B2;--color-scale-coral-2: #FFA28B;--color-scale-coral-3: #F78166;--color-scale-coral-4: #EA6045;--color-scale-coral-5: #CF462D;--color-scale-coral-6: #AC3220;--color-scale-coral-7: #872012;--color-scale-coral-8: #640D04;--color-scale-coral-9: #460701 }:root{--box-shadow: rgba(0, 0, 0, .133) 0px 1.6px 3.6px 0px, rgba(0, 0, 0, .11) 0px .3px .9px 0px;--box-shadow-thick: rgb(0 0 0 / 10%) 0px 1.8px 1.9px, rgb(0 0 0 / 15%) 0px 6.1px 6.3px, rgb(0 0 0 / 10%) 0px -2px 4px, rgb(0 0 0 / 15%) 0px -6.1px 12px, rgb(0 0 0 / 25%) 0px 6px 12px}*{box-sizing:border-box;min-width:0;min-height:0}svg{fill:currentColor}.vbox{display:flex;flex-direction:column;flex:auto;position:relative}.hbox{display:flex;flex:auto;position:relative}.hidden{visibility:hidden}.d-flex{display:flex!important}.d-inline{display:inline!important}.m-1{margin:4px}.m-2{margin:8px}.m-3{margin:16px}.m-4{margin:24px}.m-5{margin:32px}.mx-1{margin:0 4px}.mx-2{margin:0 8px}.mx-3{margin:0 16px}.mx-4{margin:0 24px}.mx-5{margin:0 32px}.my-1{margin:4px 0}.my-2{margin:8px 0}.my-3{margin:16px 0}.my-4{margin:24px 0}.my-5{margin:32px 0}.mt-1{margin-top:4px}.mt-2{margin-top:8px}.mt-3{margin-top:16px}.mt-4{margin-top:24px}.mt-5{margin-top:32px}.mr-1{margin-right:4px}.mr-2{margin-right:8px}.mr-3{margin-right:16px}.mr-4{margin-right:24px}.mr-5{margin-right:32px}.mb-1{margin-bottom:4px}.mb-2{margin-bottom:8px}.mb-3{margin-bottom:16px}.mb-4{margin-bottom:24px}.mb-5{margin-bottom:32px}.ml-1{margin-left:4px}.ml-2{margin-left:8px}.ml-3{margin-left:16px}.ml-4{margin-left:24px}.ml-5{margin-left:32px}.p-1{padding:4px}.p-2{padding:8px}.p-3{padding:16px}.p-4{padding:24px}.p-5{padding:32px}.px-1{padding:0 4px}.px-2{padding:0 8px}.px-3{padding:0 16px}.px-4{padding:0 24px}.px-5{padding:0 32px}.py-1{padding:4px 0}.py-2{padding:8px 0}.py-3{padding:16px 0}.py-4{padding:24px 0}.py-5{padding:32px 0}.pt-1{padding-top:4px}.pt-2{padding-top:8px}.pt-3{padding-top:16px}.pt-4{padding-top:24px}.pt-5{padding-top:32px}.pr-1{padding-right:4px}.pr-2{padding-right:8px}.pr-3{padding-right:16px}.pr-4{padding-right:24px}.pr-5{padding-right:32px}.pb-1{padding-bottom:4px}.pb-2{padding-bottom:8px}.pb-3{padding-bottom:16px}.pb-4{padding-bottom:24px}.pb-5{padding-bottom:32px}.pl-1{padding-left:4px}.pl-2{padding-left:8px}.pl-3{padding-left:16px}.pl-4{padding-left:24px}.pl-5{padding-left:32px}.no-wrap{white-space:nowrap!important}.float-left{float:left!important}article,aside,details,figcaption,figure,footer,header,main,menu,nav,section{display:block}.form-control,.form-select{padding:5px 12px;font-size:14px;line-height:20px;color:var(--color-fg-default);vertical-align:middle;background-color:var(--color-canvas-default);background-repeat:no-repeat;background-position:right 8px center;border:1px solid var(--color-border-default);border-radius:6px;outline:none;box-shadow:var(--color-primer-shadow-inset)}.input-contrast{background-color:var(--color-canvas-inset)}.subnav-search{position:relative;flex:auto;display:flex}.subnav-search-input{flex:auto;padding-left:32px;color:var(--color-fg-muted)}.subnav-search-icon{position:absolute;top:9px;left:8px;display:block;color:var(--color-fg-muted);text-align:center;pointer-events:none}.subnav-search-context+.subnav-search{margin-left:-1px}.subnav-item{flex:none;position:relative;float:left;padding:5px 8px;font-weight:500;line-height:20px;color:var(--color-fg-default);border:1px solid var(--color-border-default);-webkit-user-select:none;user-select:none}.subnav-item:hover{background-color:var(--color-canvas-subtle)}.subnav-item[aria-selected=true]{background:var(--color-control-transparent-bg-hover)}.subnav-item:first-child{border-top-left-radius:6px;border-bottom-left-radius:6px}.subnav-item:last-child{border-top-right-radius:6px;border-bottom-right-radius:6px}.subnav-item+.subnav-item{margin-left:-1px}.subnav-item .octicon,.subnav-item-label{margin-right:8px}.counter{display:inline-block;min-width:20px;padding:0 6px;font-size:12px;font-weight:500;line-height:18px;color:var(--color-fg-default);text-align:center;background-color:var(--color-neutral-muted);border:1px solid transparent;border-radius:2em}.color-icon-success{color:var(--color-success-fg)!important}.color-text-danger{color:var(--color-danger-fg)!important}.color-text-warning{color:var(--color-checks-step-warning-text)!important}.color-fg-muted{color:var(--color-fg-muted)!important}.octicon{display:inline-block;overflow:visible!important;vertical-align:text-bottom;fill:currentColor;margin-right:7px;flex:none}.button{flex:none;height:24px;border:1px solid var(--color-btn-border);outline:none;color:var(--color-btn-text);background:var(--color-btn-bg);padding:4px;cursor:pointer;display:inline-flex;align-items:center;justify-content:center;border-radius:4px}.button:not(:disabled):hover{border-color:var(--color-btn-hover-border);background-color:var(--color-btn-hover-bg)}input[type=checkbox]{outline:var(--color-focus-border);height:24px}dialog{background-color:var(--color-canvas-subtle);border:1px solid var(--color-border-default);border-radius:6px;padding:6px}.subnav-item .octicon.octicon-settings{margin-right:0}.subnav-item .octicon.octicon-clock{margin-right:0;color:var(--color-fg-default)!important}@media only screen and (max-width: 600px){.subnav-item,.form-control{border-radius:0!important}.subnav-item{border:none}.subnav-search-input{border-left:0;border-right:0}}.header-view-status-container{float:right}.header-view{padding:12px 8px 0}.header-view div{flex-shrink:0;flex-wrap:wrap}.header-superheader{color:var(--color-fg-muted)}.header-title{flex:none;font-weight:400;font-size:32px;line-height:1.25}.header-setting-theme{display:grid;margin-left:22px}@media only screen and (max-width: 600px){.header-view{padding:0}.header-view div{flex-shrink:1}.header-view-status-container{float:none;margin:0 0 10px!important;overflow:hidden}.header-view-status-container .subnav-search-input{border-left:none;border-right:none}.header-title,.header-superheader{margin:0 8px}}.copy-icon{flex:none;height:24px;width:24px;border:none;outline:none;color:var(--color-fg-muted);background:transparent;padding:4px;cursor:pointer;display:inline-flex;align-items:center;justify-content:center;border-radius:4px}.copy-icon svg{margin:0}.copy-icon:not(:disabled):hover{background-color:var(--color-border-default)}.copy-button-container{visibility:hidden;display:inline-flex;margin-left:8px;vertical-align:bottom}.copy-value-container:hover .copy-button-container{visibility:visible}.attachment-body{white-space:pre-wrap;background-color:var(--color-canvas-subtle);margin-left:24px;line-height:normal;padding:8px;font-family:monospace;position:relative}.attachment-body .copy-icon{position:absolute;right:5px;top:5px}.attachment-flash{animation:attachmentflash-bg 2s}@keyframes attachmentflash-bg{0%{background:var(--color-attention-subtle)}to{background:transparent}}.link-badge{flex:none;background-color:transparent;border-color:transparent;-webkit-user-select:none;user-select:none}.link-badge-dim span{color:var(--color-fg-muted)}.link-badge:hover{cursor:pointer}.link-badge svg{fill:var(--color-fg-default)}.link-badge-dim svg{fill:var(--color-fg-muted)}.link-badge-dim:hover svg{fill:var(--color-fg-muted)}.fullwidth-link{width:100%;text-align:left}.fullwidth-link:hover{background-color:var(--color-canvas-subtle)}.trace-link{margin-right:3px}.trace-link-separator{color:var(--color-fg-muted);-webkit-user-select:none;user-select:none}.expandable-summary{cursor:pointer;list-style:none;white-space:nowrap;padding-left:4px}.label{display:inline-block;padding:0 8px;font-size:12px;font-weight:500;line-height:18px;border:1px solid transparent;border-radius:2em;background-color:var(--color-scale-gray-4);color:#fff;margin:0 10px;flex:none;font-weight:600;cursor:pointer}.label-anchor{text-decoration:none;color:var(--color-fg-default)}:root.light-mode .label-color-0{background-color:var(--color-scale-blue-0);color:var(--color-scale-blue-6);border:1px solid var(--color-scale-blue-4)}:root.light-mode .label-color-1{background-color:var(--color-scale-yellow-0);color:var(--color-scale-yellow-6);border:1px solid var(--color-scale-yellow-4)}:root.light-mode .label-color-2{background-color:var(--color-scale-purple-0);color:var(--color-scale-purple-6);border:1px solid var(--color-scale-purple-4)}:root.light-mode .label-color-3{background-color:var(--color-scale-pink-0);color:var(--color-scale-pink-6);border:1px solid var(--color-scale-pink-4)}:root.light-mode .label-color-4{background-color:var(--color-scale-coral-0);color:var(--color-scale-coral-6);border:1px solid var(--color-scale-coral-4)}:root.light-mode .label-color-5{background-color:var(--color-scale-orange-0);color:var(--color-scale-orange-6);border:1px solid var(--color-scale-orange-4)}:root.dark-mode .label-color-0{background-color:var(--color-scale-blue-9);color:var(--color-scale-blue-2);border:1px solid var(--color-scale-blue-4)}:root.dark-mode .label-color-1{background-color:var(--color-scale-yellow-9);color:var(--color-scale-yellow-2);border:1px solid var(--color-scale-yellow-4)}:root.dark-mode .label-color-2{background-color:var(--color-scale-purple-9);color:var(--color-scale-purple-2);border:1px solid var(--color-scale-purple-4)}:root.dark-mode .label-color-3{background-color:var(--color-scale-pink-9);color:var(--color-scale-pink-2);border:1px solid var(--color-scale-pink-4)}:root.dark-mode .label-color-4{background-color:var(--color-scale-coral-9);color:var(--color-scale-coral-2);border:1px solid var(--color-scale-coral-4)}:root.dark-mode .label-color-5{background-color:var(--color-scale-orange-9);color:var(--color-scale-orange-2);border:1px solid var(--color-scale-orange-4)}.label-row .label{margin:0}.label-row .label:not(:first-child){margin-left:6px}html,body{width:100%;height:100%;padding:0;margin:0;overscroll-behavior-x:none}body{overflow:auto;max-width:1024px;margin:0 auto;width:100%}.test-file-test:not(:first-child){border-top:1px solid var(--color-border-default)}@media only screen and (max-width: 600px){.htmlreport{padding:0!important}}.tabbed-pane{display:flex;flex:auto;overflow:hidden}.tabbed-pane-tab-strip{display:flex;align-items:center;padding-right:10px;flex:none;width:100%;z-index:2;font-size:14px;line-height:32px;color:var(--color-fg-default);height:48px;min-width:70px;box-shadow:inset 0 -1px 0 var(--color-border-muted)!important}.tabbed-pane-tab-strip:focus{outline:none}.tabbed-pane-tab-element{padding:4px 8px 0;margin-right:4px;cursor:pointer;display:flex;flex:none;align-items:center;justify-content:center;-webkit-user-select:none;user-select:none;border-bottom:2px solid transparent;outline:none;height:100%}.tabbed-pane-tab-label{max-width:250px;white-space:pre;overflow:hidden;text-overflow:ellipsis;display:inline-block;height:30px;padding:0 8px;border-radius:6px}.tabbed-pane-tab-label:hover{background-color:var(--color-control-transparent-bg-hover)}.tabbed-pane-tab-element.selected{border-bottom-color:#666;-webkit-text-stroke:.5px currentColor}.chip-header{border:1px solid var(--color-border-default);border-top-left-radius:6px;border-top-right-radius:6px;background-color:var(--color-canvas-subtle);padding:0 8px;border-bottom:none;margin-top:12px;font-weight:600;line-height:38px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;-webkit-user-select:none;user-select:none}.chip-header-allow-selection{-webkit-user-select:text;user-select:text}.chip-header.expanded-false{border:1px solid var(--color-border-default);border-radius:6px}.chip-header.expanded-false,.chip-header.expanded-true{cursor:pointer}.chip-body{border:1px solid var(--color-border-default);border-bottom-left-radius:6px;border-bottom-right-radius:6px;padding:16px;margin-bottom:12px;overflow:hidden}.chip-body-no-insets{padding:0}.chip-footer{border-top:1px solid var(--color-border-default)}@media only screen and (max-width: 600px){.chip-header{border-radius:0;border-right:none;border-left:none}.chip-body{border-radius:0;border-right:none;border-left:none;padding:8px}.chip-body-no-insets{padding:0}}.test-case-column{border-radius:6px;margin-bottom:24px}.test-case-column .tab-element.selected{font-weight:600;border-bottom-color:var(--color-primer-border-active)}.test-case-column .tab-element{border:none;color:var(--color-fg-default);border-bottom:2px solid transparent}.test-case-column .tab-element:hover{color:var(--color-fg-default)}.test-case-location,.test-case-duration{flex:none;align-items:center;padding:0 8px 8px}.selected .test-case-run-duration{-webkit-text-stroke:0}.test-case-run-duration{color:var(--color-fg-muted);padding-left:8px}.header-view .test-case-path{flex:none;flex-shrink:1;align-items:center;padding-right:8px}.test-case-annotation{flex:none;align-items:center;padding:0 8px;line-height:24px;white-space:pre-wrap}@media only screen and (max-width: 600px){.test-case-column{border-radius:0!important;margin:0!important}}.tree-item{display:flex;flex-direction:column;overflow:hidden;min-width:0;line-height:38px}.tree-item-title{cursor:pointer;overflow:hidden;text-overflow:ellipsis;min-width:0;display:flex;align-items:center}.tree-item-body{min-height:18px}.yellow-flash{animation:yellowflash-bg 2s}@keyframes yellowflash-bg{0%{background:var(--color-attention-subtle)}to{background:transparent}}:root{--vscode-font-family: system-ui, "Ubuntu", "Droid Sans", sans-serif;--vscode-font-weight: normal;--vscode-font-size: 13px;--vscode-editor-font-family: "Droid Sans Mono", "monospace", monospace;--vscode-editor-font-weight: normal;--vscode-editor-font-size: 14px;--vscode-foreground: #616161;--vscode-disabledForeground: rgba(97, 97, 97, .5);--vscode-errorForeground: #a1260d;--vscode-descriptionForeground: #717171;--vscode-icon-foreground: #424242;--vscode-focusBorder: #0090f1;--vscode-textSeparator-foreground: rgba(0, 0, 0, .18);--vscode-textLink-foreground: #006ab1;--vscode-textLink-activeForeground: #006ab1;--vscode-textPreformat-foreground: #a31515;--vscode-textBlockQuote-background: rgba(127, 127, 127, .1);--vscode-textBlockQuote-border: rgba(0, 122, 204, .5);--vscode-textCodeBlock-background: rgba(220, 220, 220, .4);--vscode-widget-shadow: rgba(0, 0, 0, .16);--vscode-input-background: #ffffff;--vscode-input-foreground: #616161;--vscode-inputOption-activeBorder: #007acc;--vscode-inputOption-hoverBackground: rgba(184, 184, 184, .31);--vscode-inputOption-activeBackground: rgba(0, 144, 241, .2);--vscode-inputOption-activeForeground: #000000;--vscode-input-placeholderForeground: #767676;--vscode-inputValidation-infoBackground: #d6ecf2;--vscode-inputValidation-infoBorder: #007acc;--vscode-inputValidation-warningBackground: #f6f5d2;--vscode-inputValidation-warningBorder: #b89500;--vscode-inputValidation-errorBackground: #f2dede;--vscode-inputValidation-errorBorder: #be1100;--vscode-dropdown-background: #ffffff;--vscode-dropdown-border: #cecece;--vscode-checkbox-background: #ffffff;--vscode-checkbox-border: #cecece;--vscode-button-foreground: #ffffff;--vscode-button-separator: rgba(255, 255, 255, .4);--vscode-button-background: #007acc;--vscode-button-hoverBackground: #0062a3;--vscode-button-secondaryForeground: #ffffff;--vscode-button-secondaryBackground: #5f6a79;--vscode-button-secondaryHoverBackground: #4c5561;--vscode-badge-background: #c4c4c4;--vscode-badge-foreground: #333333;--vscode-scrollbar-shadow: #dddddd;--vscode-scrollbarSlider-background: rgba(100, 100, 100, .4);--vscode-scrollbarSlider-hoverBackground: rgba(100, 100, 100, .7);--vscode-scrollbarSlider-activeBackground: rgba(0, 0, 0, .6);--vscode-progressBar-background: #0e70c0;--vscode-editorError-foreground: #e51400;--vscode-editorWarning-foreground: #bf8803;--vscode-editorInfo-foreground: #1a85ff;--vscode-editorHint-foreground: #6c6c6c;--vscode-sash-hoverBorder: #0090f1;--vscode-editor-background: #ffffff;--vscode-editor-foreground: #000000;--vscode-editorStickyScroll-background: #ffffff;--vscode-editorStickyScrollHover-background: #f0f0f0;--vscode-editorWidget-background: #f3f3f3;--vscode-editorWidget-foreground: #616161;--vscode-editorWidget-border: #c8c8c8;--vscode-quickInput-background: #f3f3f3;--vscode-quickInput-foreground: #616161;--vscode-quickInputTitle-background: rgba(0, 0, 0, .06);--vscode-pickerGroup-foreground: #0066bf;--vscode-pickerGroup-border: #cccedb;--vscode-keybindingLabel-background: rgba(221, 221, 221, .4);--vscode-keybindingLabel-foreground: #555555;--vscode-keybindingLabel-border: rgba(204, 204, 204, .4);--vscode-keybindingLabel-bottomBorder: rgba(187, 187, 187, .4);--vscode-editor-selectionBackground: #add6ff;--vscode-editor-inactiveSelectionBackground: #e5ebf1;--vscode-editor-selectionHighlightBackground: rgba(173, 214, 255, .5);--vscode-editor-findMatchBackground: #a8ac94;--vscode-editor-findMatchHighlightBackground: rgba(234, 92, 0, .33);--vscode-editor-findRangeHighlightBackground: rgba(180, 180, 180, .3);--vscode-searchEditor-findMatchBackground: rgba(234, 92, 0, .22);--vscode-editor-hoverHighlightBackground: rgba(173, 214, 255, .15);--vscode-editorHoverWidget-background: #f3f3f3;--vscode-editorHoverWidget-foreground: #616161;--vscode-editorHoverWidget-border: #c8c8c8;--vscode-editorHoverWidget-statusBarBackground: #e7e7e7;--vscode-editorLink-activeForeground: #0000ff;--vscode-editorInlayHint-foreground: rgba(51, 51, 51, .8);--vscode-editorInlayHint-background: rgba(196, 196, 196, .3);--vscode-editorInlayHint-typeForeground: rgba(51, 51, 51, .8);--vscode-editorInlayHint-typeBackground: rgba(196, 196, 196, .3);--vscode-editorInlayHint-parameterForeground: rgba(51, 51, 51, .8);--vscode-editorInlayHint-parameterBackground: rgba(196, 196, 196, .3);--vscode-editorLightBulb-foreground: #ddb100;--vscode-editorLightBulbAutoFix-foreground: #007acc;--vscode-diffEditor-insertedTextBackground: rgba(156, 204, 44, .4);--vscode-diffEditor-removedTextBackground: rgba(255, 0, 0, .3);--vscode-diffEditor-insertedLineBackground: rgba(155, 185, 85, .2);--vscode-diffEditor-removedLineBackground: rgba(255, 0, 0, .2);--vscode-diffEditor-diagonalFill: rgba(34, 34, 34, .2);--vscode-list-focusOutline: #0090f1;--vscode-list-focusAndSelectionOutline: #90c2f9;--vscode-list-activeSelectionBackground: #0060c0;--vscode-list-activeSelectionForeground: #ffffff;--vscode-list-activeSelectionIconForeground: #ffffff;--vscode-list-inactiveSelectionBackground: #e4e6f1;--vscode-list-hoverBackground: #e8e8e8;--vscode-list-dropBackground: #d6ebff;--vscode-list-highlightForeground: #0066bf;--vscode-list-focusHighlightForeground: #bbe7ff;--vscode-list-invalidItemForeground: #b89500;--vscode-list-errorForeground: #b01011;--vscode-list-warningForeground: #855f00;--vscode-listFilterWidget-background: #f3f3f3;--vscode-listFilterWidget-outline: rgba(0, 0, 0, 0);--vscode-listFilterWidget-noMatchesOutline: #be1100;--vscode-listFilterWidget-shadow: rgba(0, 0, 0, .16);--vscode-list-filterMatchBackground: rgba(234, 92, 0, .33);--vscode-tree-indentGuidesStroke: #a9a9a9;--vscode-tree-tableColumnsBorder: rgba(97, 97, 97, .13);--vscode-tree-tableOddRowsBackground: rgba(97, 97, 97, .04);--vscode-list-deemphasizedForeground: #8e8e90;--vscode-quickInputList-focusForeground: #ffffff;--vscode-quickInputList-focusIconForeground: #ffffff;--vscode-quickInputList-focusBackground: #0060c0;--vscode-menu-foreground: #616161;--vscode-menu-background: #ffffff;--vscode-menu-selectionForeground: #ffffff;--vscode-menu-selectionBackground: #0060c0;--vscode-menu-separatorBackground: #d4d4d4;--vscode-toolbar-hoverBackground: rgba(184, 184, 184, .31);--vscode-toolbar-activeBackground: rgba(166, 166, 166, .31);--vscode-editor-snippetTabstopHighlightBackground: rgba(10, 50, 100, .2);--vscode-editor-snippetFinalTabstopHighlightBorder: rgba(10, 50, 100, .5);--vscode-breadcrumb-foreground: rgba(97, 97, 97, .8);--vscode-breadcrumb-background: #ffffff;--vscode-breadcrumb-focusForeground: #4e4e4e;--vscode-breadcrumb-activeSelectionForeground: #4e4e4e;--vscode-breadcrumbPicker-background: #f3f3f3;--vscode-merge-currentHeaderBackground: rgba(64, 200, 174, .5);--vscode-merge-currentContentBackground: rgba(64, 200, 174, .2);--vscode-merge-incomingHeaderBackground: rgba(64, 166, 255, .5);--vscode-merge-incomingContentBackground: rgba(64, 166, 255, .2);--vscode-merge-commonHeaderBackground: rgba(96, 96, 96, .4);--vscode-merge-commonContentBackground: rgba(96, 96, 96, .16);--vscode-editorOverviewRuler-currentContentForeground: rgba(64, 200, 174, .5);--vscode-editorOverviewRuler-incomingContentForeground: rgba(64, 166, 255, .5);--vscode-editorOverviewRuler-commonContentForeground: rgba(96, 96, 96, .4);--vscode-editorOverviewRuler-findMatchForeground: rgba(209, 134, 22, .49);--vscode-editorOverviewRuler-selectionHighlightForeground: rgba(160, 160, 160, .8);--vscode-minimap-findMatchHighlight: #d18616;--vscode-minimap-selectionOccurrenceHighlight: #c9c9c9;--vscode-minimap-selectionHighlight: #add6ff;--vscode-minimap-errorHighlight: rgba(255, 18, 18, .7);--vscode-minimap-warningHighlight: #bf8803;--vscode-minimap-foregroundOpacity: #000000;--vscode-minimapSlider-background: rgba(100, 100, 100, .2);--vscode-minimapSlider-hoverBackground: rgba(100, 100, 100, .35);--vscode-minimapSlider-activeBackground: rgba(0, 0, 0, .3);--vscode-problemsErrorIcon-foreground: #e51400;--vscode-problemsWarningIcon-foreground: #bf8803;--vscode-problemsInfoIcon-foreground: #1a85ff;--vscode-charts-foreground: #616161;--vscode-charts-lines: rgba(97, 97, 97, .5);--vscode-charts-red: #e51400;--vscode-charts-blue: #1a85ff;--vscode-charts-yellow: #bf8803;--vscode-charts-orange: #d18616;--vscode-charts-green: #388a34;--vscode-charts-purple: #652d90;--vscode-editor-lineHighlightBorder: #eeeeee;--vscode-editor-rangeHighlightBackground: rgba(253, 255, 0, .2);--vscode-editor-symbolHighlightBackground: rgba(234, 92, 0, .33);--vscode-editorCursor-foreground: #000000;--vscode-editorWhitespace-foreground: rgba(51, 51, 51, .2);--vscode-editorIndentGuide-background: #d3d3d3;--vscode-editorIndentGuide-activeBackground: #939393;--vscode-editorLineNumber-foreground: #237893;--vscode-editorActiveLineNumber-foreground: #0b216f;--vscode-editorLineNumber-activeForeground: #0b216f;--vscode-editorRuler-foreground: #d3d3d3;--vscode-editorCodeLens-foreground: #919191;--vscode-editorBracketMatch-background: rgba(0, 100, 0, .1);--vscode-editorBracketMatch-border: #b9b9b9;--vscode-editorOverviewRuler-border: rgba(127, 127, 127, .3);--vscode-editorGutter-background: #ffffff;--vscode-editorUnnecessaryCode-opacity: rgba(0, 0, 0, .47);--vscode-editorGhostText-foreground: rgba(0, 0, 0, .47);--vscode-editorOverviewRuler-rangeHighlightForeground: rgba(0, 122, 204, .6);--vscode-editorOverviewRuler-errorForeground: rgba(255, 18, 18, .7);--vscode-editorOverviewRuler-warningForeground: #bf8803;--vscode-editorOverviewRuler-infoForeground: #1a85ff;--vscode-editorBracketHighlight-foreground1: #0431fa;--vscode-editorBracketHighlight-foreground2: #319331;--vscode-editorBracketHighlight-foreground3: #7b3814;--vscode-editorBracketHighlight-foreground4: rgba(0, 0, 0, 0);--vscode-editorBracketHighlight-foreground5: rgba(0, 0, 0, 0);--vscode-editorBracketHighlight-foreground6: rgba(0, 0, 0, 0);--vscode-editorBracketHighlight-unexpectedBracket\.foreground: rgba(255, 18, 18, .8);--vscode-editorBracketPairGuide-background1: rgba(0, 0, 0, 0);--vscode-editorBracketPairGuide-background2: rgba(0, 0, 0, 0);--vscode-editorBracketPairGuide-background3: rgba(0, 0, 0, 0);--vscode-editorBracketPairGuide-background4: rgba(0, 0, 0, 0);--vscode-editorBracketPairGuide-background5: rgba(0, 0, 0, 0);--vscode-editorBracketPairGuide-background6: rgba(0, 0, 0, 0);--vscode-editorBracketPairGuide-activeBackground1: rgba(0, 0, 0, 0);--vscode-editorBracketPairGuide-activeBackground2: rgba(0, 0, 0, 0);--vscode-editorBracketPairGuide-activeBackground3: rgba(0, 0, 0, 0);--vscode-editorBracketPairGuide-activeBackground4: rgba(0, 0, 0, 0);--vscode-editorBracketPairGuide-activeBackground5: rgba(0, 0, 0, 0);--vscode-editorBracketPairGuide-activeBackground6: rgba(0, 0, 0, 0);--vscode-editorUnicodeHighlight-border: #cea33d;--vscode-editorUnicodeHighlight-background: rgba(206, 163, 61, .08);--vscode-symbolIcon-arrayForeground: #616161;--vscode-symbolIcon-booleanForeground: #616161;--vscode-symbolIcon-classForeground: #d67e00;--vscode-symbolIcon-colorForeground: #616161;--vscode-symbolIcon-constantForeground: #616161;--vscode-symbolIcon-constructorForeground: #652d90;--vscode-symbolIcon-enumeratorForeground: #d67e00;--vscode-symbolIcon-enumeratorMemberForeground: #007acc;--vscode-symbolIcon-eventForeground: #d67e00;--vscode-symbolIcon-fieldForeground: #007acc;--vscode-symbolIcon-fileForeground: #616161;--vscode-symbolIcon-folderForeground: #616161;--vscode-symbolIcon-functionForeground: #652d90;--vscode-symbolIcon-interfaceForeground: #007acc;--vscode-symbolIcon-keyForeground: #616161;--vscode-symbolIcon-keywordForeground: #616161;--vscode-symbolIcon-methodForeground: #652d90;--vscode-symbolIcon-moduleForeground: #616161;--vscode-symbolIcon-namespaceForeground: #616161;--vscode-symbolIcon-nullForeground: #616161;--vscode-symbolIcon-numberForeground: #616161;--vscode-symbolIcon-objectForeground: #616161;--vscode-symbolIcon-operatorForeground: #616161;--vscode-symbolIcon-packageForeground: #616161;--vscode-symbolIcon-propertyForeground: #616161;--vscode-symbolIcon-referenceForeground: #616161;--vscode-symbolIcon-snippetForeground: #616161;--vscode-symbolIcon-stringForeground: #616161;--vscode-symbolIcon-structForeground: #616161;--vscode-symbolIcon-textForeground: #616161;--vscode-symbolIcon-typeParameterForeground: #616161;--vscode-symbolIcon-unitForeground: #616161;--vscode-symbolIcon-variableForeground: #007acc;--vscode-editorHoverWidget-highlightForeground: #0066bf;--vscode-editorOverviewRuler-bracketMatchForeground: #a0a0a0;--vscode-editor-foldBackground: rgba(173, 214, 255, .3);--vscode-editorGutter-foldingControlForeground: #424242;--vscode-editor-linkedEditingBackground: rgba(255, 0, 0, .3);--vscode-editor-wordHighlightBackground: rgba(87, 87, 87, .25);--vscode-editor-wordHighlightStrongBackground: rgba(14, 99, 156, .25);--vscode-editorOverviewRuler-wordHighlightForeground: rgba(160, 160, 160, .8);--vscode-editorOverviewRuler-wordHighlightStrongForeground: rgba(192, 160, 192, .8);--vscode-peekViewTitle-background: rgba(26, 133, 255, .1);--vscode-peekViewTitleLabel-foreground: #000000;--vscode-peekViewTitleDescription-foreground: #616161;--vscode-peekView-border: #1a85ff;--vscode-peekViewResult-background: #f3f3f3;--vscode-peekViewResult-lineForeground: #646465;--vscode-peekViewResult-fileForeground: #1e1e1e;--vscode-peekViewResult-selectionBackground: rgba(51, 153, 255, .2);--vscode-peekViewResult-selectionForeground: #6c6c6c;--vscode-peekViewEditor-background: #f2f8fc;--vscode-peekViewEditorGutter-background: #f2f8fc;--vscode-peekViewResult-matchHighlightBackground: rgba(234, 92, 0, .3);--vscode-peekViewEditor-matchHighlightBackground: rgba(245, 216, 2, .87);--vscode-editorMarkerNavigationError-background: #e51400;--vscode-editorMarkerNavigationError-headerBackground: rgba(229, 20, 0, .1);--vscode-editorMarkerNavigationWarning-background: #bf8803;--vscode-editorMarkerNavigationWarning-headerBackground: rgba(191, 136, 3, .1);--vscode-editorMarkerNavigationInfo-background: #1a85ff;--vscode-editorMarkerNavigationInfo-headerBackground: rgba(26, 133, 255, .1);--vscode-editorMarkerNavigation-background: #ffffff;--vscode-editorSuggestWidget-background: #f3f3f3;--vscode-editorSuggestWidget-border: #c8c8c8;--vscode-editorSuggestWidget-foreground: #000000;--vscode-editorSuggestWidget-selectedForeground: #ffffff;--vscode-editorSuggestWidget-selectedIconForeground: #ffffff;--vscode-editorSuggestWidget-selectedBackground: #0060c0;--vscode-editorSuggestWidget-highlightForeground: #0066bf;--vscode-editorSuggestWidget-focusHighlightForeground: #bbe7ff;--vscode-editorSuggestWidgetStatus-foreground: rgba(0, 0, 0, .5);--vscode-tab-activeBackground: #ffffff;--vscode-tab-unfocusedActiveBackground: #ffffff;--vscode-tab-inactiveBackground: #ececec;--vscode-tab-unfocusedInactiveBackground: #ececec;--vscode-tab-activeForeground: #333333;--vscode-tab-inactiveForeground: rgba(51, 51, 51, .7);--vscode-tab-unfocusedActiveForeground: rgba(51, 51, 51, .7);--vscode-tab-unfocusedInactiveForeground: rgba(51, 51, 51, .35);--vscode-tab-border: #f3f3f3;--vscode-tab-lastPinnedBorder: rgba(97, 97, 97, .19);--vscode-tab-activeModifiedBorder: #33aaee;--vscode-tab-inactiveModifiedBorder: rgba(51, 170, 238, .5);--vscode-tab-unfocusedActiveModifiedBorder: rgba(51, 170, 238, .7);--vscode-tab-unfocusedInactiveModifiedBorder: rgba(51, 170, 238, .25);--vscode-editorPane-background: #ffffff;--vscode-editorGroupHeader-tabsBackground: #f3f3f3;--vscode-editorGroupHeader-noTabsBackground: #ffffff;--vscode-editorGroup-border: #e7e7e7;--vscode-editorGroup-dropBackground: rgba(38, 119, 203, .18);--vscode-editorGroup-dropIntoPromptForeground: #616161;--vscode-editorGroup-dropIntoPromptBackground: #f3f3f3;--vscode-sideBySideEditor-horizontalBorder: #e7e7e7;--vscode-sideBySideEditor-verticalBorder: #e7e7e7;--vscode-panel-background: #ffffff;--vscode-panel-border: rgba(128, 128, 128, .35);--vscode-panelTitle-activeForeground: #424242;--vscode-panelTitle-inactiveForeground: rgba(66, 66, 66, .75);--vscode-panelTitle-activeBorder: #424242;--vscode-panelInput-border: #dddddd;--vscode-panel-dropBorder: #424242;--vscode-panelSection-dropBackground: rgba(38, 119, 203, .18);--vscode-panelSectionHeader-background: rgba(128, 128, 128, .2);--vscode-panelSection-border: rgba(128, 128, 128, .35);--vscode-banner-background: #004386;--vscode-banner-foreground: #ffffff;--vscode-banner-iconForeground: #1a85ff;--vscode-statusBar-foreground: #ffffff;--vscode-statusBar-noFolderForeground: #ffffff;--vscode-statusBar-background: #007acc;--vscode-statusBar-noFolderBackground: #68217a;--vscode-statusBar-focusBorder: #ffffff;--vscode-statusBarItem-activeBackground: rgba(255, 255, 255, .18);--vscode-statusBarItem-focusBorder: #ffffff;--vscode-statusBarItem-hoverBackground: rgba(255, 255, 255, .12);--vscode-statusBarItem-compactHoverBackground: rgba(255, 255, 255, .2);--vscode-statusBarItem-prominentForeground: #ffffff;--vscode-statusBarItem-prominentBackground: rgba(0, 0, 0, .5);--vscode-statusBarItem-prominentHoverBackground: rgba(0, 0, 0, .3);--vscode-statusBarItem-errorBackground: #c72e0f;--vscode-statusBarItem-errorForeground: #ffffff;--vscode-statusBarItem-warningBackground: #725102;--vscode-statusBarItem-warningForeground: #ffffff;--vscode-activityBar-background: #2c2c2c;--vscode-activityBar-foreground: #ffffff;--vscode-activityBar-inactiveForeground: rgba(255, 255, 255, .4);--vscode-activityBar-activeBorder: #ffffff;--vscode-activityBar-dropBorder: #ffffff;--vscode-activityBarBadge-background: #007acc;--vscode-activityBarBadge-foreground: #ffffff;--vscode-statusBarItem-remoteBackground: #16825d;--vscode-statusBarItem-remoteForeground: #ffffff;--vscode-extensionBadge-remoteBackground: #007acc;--vscode-extensionBadge-remoteForeground: #ffffff;--vscode-sideBar-background: #f3f3f3;--vscode-sideBarTitle-foreground: #6f6f6f;--vscode-sideBar-dropBackground: rgba(38, 119, 203, .18);--vscode-sideBarSectionHeader-background: rgba(0, 0, 0, 0);--vscode-sideBarSectionHeader-border: rgba(97, 97, 97, .19);--vscode-titleBar-activeForeground: #333333;--vscode-titleBar-inactiveForeground: rgba(51, 51, 51, .6);--vscode-titleBar-activeBackground: #dddddd;--vscode-titleBar-inactiveBackground: rgba(221, 221, 221, .6);--vscode-menubar-selectionForeground: #333333;--vscode-menubar-selectionBackground: rgba(184, 184, 184, .31);--vscode-notifications-foreground: #616161;--vscode-notifications-background: #f3f3f3;--vscode-notificationLink-foreground: #006ab1;--vscode-notificationCenterHeader-background: #e7e7e7;--vscode-notifications-border: #e7e7e7;--vscode-notificationsErrorIcon-foreground: #e51400;--vscode-notificationsWarningIcon-foreground: #bf8803;--vscode-notificationsInfoIcon-foreground: #1a85ff;--vscode-commandCenter-foreground: #333333;--vscode-commandCenter-activeForeground: #333333;--vscode-commandCenter-activeBackground: rgba(184, 184, 184, .31);--vscode-commandCenter-border: rgba(128, 128, 128, .35);--vscode-editorCommentsWidget-resolvedBorder: rgba(97, 97, 97, .5);--vscode-editorCommentsWidget-unresolvedBorder: #1a85ff;--vscode-editorCommentsWidget-rangeBackground: rgba(26, 133, 255, .1);--vscode-editorCommentsWidget-rangeBorder: rgba(26, 133, 255, .4);--vscode-editorCommentsWidget-rangeActiveBackground: rgba(26, 133, 255, .1);--vscode-editorCommentsWidget-rangeActiveBorder: rgba(26, 133, 255, .4);--vscode-editorGutter-commentRangeForeground: #d5d8e9;--vscode-debugToolBar-background: #f3f3f3;--vscode-debugIcon-startForeground: #388a34;--vscode-editor-stackFrameHighlightBackground: rgba(255, 255, 102, .45);--vscode-editor-focusedStackFrameHighlightBackground: rgba(206, 231, 206, .45);--vscode-mergeEditor-change\.background: rgba(155, 185, 85, .2);--vscode-mergeEditor-change\.word\.background: rgba(156, 204, 44, .4);--vscode-mergeEditor-conflict\.unhandledUnfocused\.border: rgba(255, 166, 0, .48);--vscode-mergeEditor-conflict\.unhandledFocused\.border: #ffa600;--vscode-mergeEditor-conflict\.handledUnfocused\.border: rgba(134, 134, 134, .29);--vscode-mergeEditor-conflict\.handledFocused\.border: rgba(193, 193, 193, .8);--vscode-mergeEditor-conflict\.handled\.minimapOverViewRuler: rgba(173, 172, 168, .93);--vscode-mergeEditor-conflict\.unhandled\.minimapOverViewRuler: #fcba03;--vscode-mergeEditor-conflictingLines\.background: rgba(255, 234, 0, .28);--vscode-settings-headerForeground: #444444;--vscode-settings-modifiedItemIndicator: #66afe0;--vscode-settings-headerBorder: rgba(128, 128, 128, .35);--vscode-settings-sashBorder: rgba(128, 128, 128, .35);--vscode-settings-dropdownBackground: #ffffff;--vscode-settings-dropdownBorder: #cecece;--vscode-settings-dropdownListBorder: #c8c8c8;--vscode-settings-checkboxBackground: #ffffff;--vscode-settings-checkboxBorder: #cecece;--vscode-settings-textInputBackground: #ffffff;--vscode-settings-textInputForeground: #616161;--vscode-settings-textInputBorder: #cecece;--vscode-settings-numberInputBackground: #ffffff;--vscode-settings-numberInputForeground: #616161;--vscode-settings-numberInputBorder: #cecece;--vscode-settings-focusedRowBackground: rgba(232, 232, 232, .6);--vscode-settings-rowHoverBackground: rgba(232, 232, 232, .3);--vscode-settings-focusedRowBorder: rgba(0, 0, 0, .12);--vscode-terminal-foreground: #333333;--vscode-terminal-selectionBackground: #add6ff;--vscode-terminal-inactiveSelectionBackground: #e5ebf1;--vscode-terminalCommandDecoration-defaultBackground: rgba(0, 0, 0, .25);--vscode-terminalCommandDecoration-successBackground: #2090d3;--vscode-terminalCommandDecoration-errorBackground: #e51400;--vscode-terminalOverviewRuler-cursorForeground: rgba(160, 160, 160, .8);--vscode-terminal-border: rgba(128, 128, 128, .35);--vscode-terminal-findMatchBackground: #a8ac94;--vscode-terminal-findMatchHighlightBackground: rgba(234, 92, 0, .33);--vscode-terminalOverviewRuler-findMatchForeground: rgba(209, 134, 22, .49);--vscode-terminal-dropBackground: rgba(38, 119, 203, .18);--vscode-testing-iconFailed: #f14c4c;--vscode-testing-iconErrored: #f14c4c;--vscode-testing-iconPassed: #73c991;--vscode-testing-runAction: #73c991;--vscode-testing-iconQueued: #cca700;--vscode-testing-iconUnset: #848484;--vscode-testing-iconSkipped: #848484;--vscode-testing-peekBorder: #e51400;--vscode-testing-peekHeaderBackground: rgba(229, 20, 0, .1);--vscode-testing-message\.error\.decorationForeground: #e51400;--vscode-testing-message\.error\.lineBackground: rgba(255, 0, 0, .2);--vscode-testing-message\.info\.decorationForeground: rgba(0, 0, 0, .5);--vscode-welcomePage-tileBackground: #f3f3f3;--vscode-welcomePage-tileHoverBackground: #dbdbdb;--vscode-welcomePage-tileShadow: rgba(0, 0, 0, .16);--vscode-welcomePage-progress\.background: #ffffff;--vscode-welcomePage-progress\.foreground: #006ab1;--vscode-debugExceptionWidget-border: #a31515;--vscode-debugExceptionWidget-background: #f1dfde;--vscode-ports-iconRunningProcessForeground: #369432;--vscode-statusBar-debuggingBackground: #cc6633;--vscode-statusBar-debuggingForeground: #ffffff;--vscode-editor-inlineValuesForeground: rgba(0, 0, 0, .5);--vscode-editor-inlineValuesBackground: rgba(255, 200, 0, .2);--vscode-editorGutter-modifiedBackground: #2090d3;--vscode-editorGutter-addedBackground: #48985d;--vscode-editorGutter-deletedBackground: #e51400;--vscode-minimapGutter-modifiedBackground: #2090d3;--vscode-minimapGutter-addedBackground: #48985d;--vscode-minimapGutter-deletedBackground: #e51400;--vscode-editorOverviewRuler-modifiedForeground: rgba(32, 144, 211, .6);--vscode-editorOverviewRuler-addedForeground: rgba(72, 152, 93, .6);--vscode-editorOverviewRuler-deletedForeground: rgba(229, 20, 0, .6);--vscode-debugIcon-breakpointForeground: #e51400;--vscode-debugIcon-breakpointDisabledForeground: #848484;--vscode-debugIcon-breakpointUnverifiedForeground: #848484;--vscode-debugIcon-breakpointCurrentStackframeForeground: #be8700;--vscode-debugIcon-breakpointStackframeForeground: #89d185;--vscode-notebook-cellBorderColor: #e8e8e8;--vscode-notebook-focusedEditorBorder: #0090f1;--vscode-notebookStatusSuccessIcon-foreground: #388a34;--vscode-notebookStatusErrorIcon-foreground: #a1260d;--vscode-notebookStatusRunningIcon-foreground: #616161;--vscode-notebook-cellToolbarSeparator: rgba(128, 128, 128, .35);--vscode-notebook-selectedCellBackground: rgba(200, 221, 241, .31);--vscode-notebook-selectedCellBorder: #e8e8e8;--vscode-notebook-focusedCellBorder: #0090f1;--vscode-notebook-inactiveFocusedCellBorder: #e8e8e8;--vscode-notebook-cellStatusBarItemHoverBackground: rgba(0, 0, 0, .08);--vscode-notebook-cellInsertionIndicator: #0090f1;--vscode-notebookScrollbarSlider-background: rgba(100, 100, 100, .4);--vscode-notebookScrollbarSlider-hoverBackground: rgba(100, 100, 100, .7);--vscode-notebookScrollbarSlider-activeBackground: rgba(0, 0, 0, .6);--vscode-notebook-symbolHighlightBackground: rgba(253, 255, 0, .2);--vscode-notebook-cellEditorBackground: #f3f3f3;--vscode-notebook-editorBackground: #ffffff;--vscode-keybindingTable-headerBackground: rgba(97, 97, 97, .04);--vscode-keybindingTable-rowsBackground: rgba(97, 97, 97, .04);--vscode-scm-providerBorder: #c8c8c8;--vscode-searchEditor-textInputBorder: #cecece;--vscode-debugTokenExpression-name: #9b46b0;--vscode-debugTokenExpression-value: rgba(108, 108, 108, .8);--vscode-debugTokenExpression-string: #a31515;--vscode-debugTokenExpression-boolean: #0000ff;--vscode-debugTokenExpression-number: #098658;--vscode-debugTokenExpression-error: #e51400;--vscode-debugView-exceptionLabelForeground: #ffffff;--vscode-debugView-exceptionLabelBackground: #a31515;--vscode-debugView-stateLabelForeground: #616161;--vscode-debugView-stateLabelBackground: rgba(136, 136, 136, .27);--vscode-debugView-valueChangedHighlight: #569cd6;--vscode-debugConsole-infoForeground: #1a85ff;--vscode-debugConsole-warningForeground: #bf8803;--vscode-debugConsole-errorForeground: #a1260d;--vscode-debugConsole-sourceForeground: #616161;--vscode-debugConsoleInputIcon-foreground: #616161;--vscode-debugIcon-pauseForeground: #007acc;--vscode-debugIcon-stopForeground: #a1260d;--vscode-debugIcon-disconnectForeground: #a1260d;--vscode-debugIcon-restartForeground: #388a34;--vscode-debugIcon-stepOverForeground: #007acc;--vscode-debugIcon-stepIntoForeground: #007acc;--vscode-debugIcon-stepOutForeground: #007acc;--vscode-debugIcon-continueForeground: #007acc;--vscode-debugIcon-stepBackForeground: #007acc;--vscode-extensionButton-prominentBackground: #007acc;--vscode-extensionButton-prominentForeground: #ffffff;--vscode-extensionButton-prominentHoverBackground: #0062a3;--vscode-extensionIcon-starForeground: #df6100;--vscode-extensionIcon-verifiedForeground: #006ab1;--vscode-extensionIcon-preReleaseForeground: #1d9271;--vscode-extensionIcon-sponsorForeground: #b51e78;--vscode-terminal-ansiBlack: #000000;--vscode-terminal-ansiRed: #cd3131;--vscode-terminal-ansiGreen: #00bc00;--vscode-terminal-ansiYellow: #949800;--vscode-terminal-ansiBlue: #0451a5;--vscode-terminal-ansiMagenta: #bc05bc;--vscode-terminal-ansiCyan: #0598bc;--vscode-terminal-ansiWhite: #555555;--vscode-terminal-ansiBrightBlack: #666666;--vscode-terminal-ansiBrightRed: #cd3131;--vscode-terminal-ansiBrightGreen: #14ce14;--vscode-terminal-ansiBrightYellow: #b5ba00;--vscode-terminal-ansiBrightBlue: #0451a5;--vscode-terminal-ansiBrightMagenta: #bc05bc;--vscode-terminal-ansiBrightCyan: #0598bc;--vscode-terminal-ansiBrightWhite: #a5a5a5;--vscode-interactive-activeCodeBorder: #1a85ff;--vscode-interactive-inactiveCodeBorder: #e4e6f1;--vscode-gitDecoration-addedResourceForeground: #587c0c;--vscode-gitDecoration-modifiedResourceForeground: #895503;--vscode-gitDecoration-deletedResourceForeground: #ad0707;--vscode-gitDecoration-renamedResourceForeground: #007100;--vscode-gitDecoration-untrackedResourceForeground: #007100;--vscode-gitDecoration-ignoredResourceForeground: #8e8e90;--vscode-gitDecoration-stageModifiedResourceForeground: #895503;--vscode-gitDecoration-stageDeletedResourceForeground: #ad0707;--vscode-gitDecoration-conflictingResourceForeground: #ad0707;--vscode-gitDecoration-submoduleResourceForeground: #1258a7}:root.light-mode{color-scheme:light}:root.dark-mode{color-scheme:dark;--vscode-font-family: system-ui, "Ubuntu", "Droid Sans", sans-serif;--vscode-font-weight: normal;--vscode-font-size: 13px;--vscode-editor-font-family: "Droid Sans Mono", "monospace", monospace;--vscode-editor-font-weight: normal;--vscode-editor-font-size: 14px;--vscode-foreground: #cccccc;--vscode-disabledForeground: rgba(204, 204, 204, .5);--vscode-errorForeground: #f48771;--vscode-descriptionForeground: rgba(204, 204, 204, .7);--vscode-icon-foreground: #c5c5c5;--vscode-focusBorder: #007fd4;--vscode-textSeparator-foreground: rgba(255, 255, 255, .18);--vscode-textLink-foreground: #3794ff;--vscode-textLink-activeForeground: #3794ff;--vscode-textPreformat-foreground: #d7ba7d;--vscode-textBlockQuote-background: rgba(127, 127, 127, .1);--vscode-textBlockQuote-border: rgba(0, 122, 204, .5);--vscode-textCodeBlock-background: rgba(10, 10, 10, .4);--vscode-widget-shadow: rgba(0, 0, 0, .36);--vscode-input-background: #3c3c3c;--vscode-input-foreground: #cccccc;--vscode-inputOption-activeBorder: #007acc;--vscode-inputOption-hoverBackground: rgba(90, 93, 94, .5);--vscode-inputOption-activeBackground: rgba(0, 127, 212, .4);--vscode-inputOption-activeForeground: #ffffff;--vscode-input-placeholderForeground: #a6a6a6;--vscode-inputValidation-infoBackground: #063b49;--vscode-inputValidation-infoBorder: #007acc;--vscode-inputValidation-warningBackground: #352a05;--vscode-inputValidation-warningBorder: #b89500;--vscode-inputValidation-errorBackground: #5a1d1d;--vscode-inputValidation-errorBorder: #be1100;--vscode-dropdown-background: #3c3c3c;--vscode-dropdown-foreground: #f0f0f0;--vscode-dropdown-border: #3c3c3c;--vscode-checkbox-background: #3c3c3c;--vscode-checkbox-foreground: #f0f0f0;--vscode-checkbox-border: #3c3c3c;--vscode-button-foreground: #ffffff;--vscode-button-separator: rgba(255, 255, 255, .4);--vscode-button-background: #0e639c;--vscode-button-hoverBackground: #1177bb;--vscode-button-secondaryForeground: #ffffff;--vscode-button-secondaryBackground: #3a3d41;--vscode-button-secondaryHoverBackground: #45494e;--vscode-badge-background: #4d4d4d;--vscode-badge-foreground: #ffffff;--vscode-scrollbar-shadow: #000000;--vscode-scrollbarSlider-background: rgba(121, 121, 121, .4);--vscode-scrollbarSlider-hoverBackground: rgba(100, 100, 100, .7);--vscode-scrollbarSlider-activeBackground: rgba(191, 191, 191, .4);--vscode-progressBar-background: #0e70c0;--vscode-editorError-foreground: #f14c4c;--vscode-editorWarning-foreground: #cca700;--vscode-editorInfo-foreground: #3794ff;--vscode-editorHint-foreground: rgba(238, 238, 238, .7);--vscode-sash-hoverBorder: #007fd4;--vscode-editor-background: #1e1e1e;--vscode-editor-foreground: #d4d4d4;--vscode-editorStickyScroll-background: #1e1e1e;--vscode-editorStickyScrollHover-background: #2a2d2e;--vscode-editorWidget-background: #252526;--vscode-editorWidget-foreground: #cccccc;--vscode-editorWidget-border: #454545;--vscode-quickInput-background: #252526;--vscode-quickInput-foreground: #cccccc;--vscode-quickInputTitle-background: rgba(255, 255, 255, .1);--vscode-pickerGroup-foreground: #3794ff;--vscode-pickerGroup-border: #3f3f46;--vscode-keybindingLabel-background: rgba(128, 128, 128, .17);--vscode-keybindingLabel-foreground: #cccccc;--vscode-keybindingLabel-border: rgba(51, 51, 51, .6);--vscode-keybindingLabel-bottomBorder: rgba(68, 68, 68, .6);--vscode-editor-selectionBackground: #264f78;--vscode-editor-inactiveSelectionBackground: #3a3d41;--vscode-editor-selectionHighlightBackground: rgba(173, 214, 255, .15);--vscode-editor-findMatchBackground: #515c6a;--vscode-editor-findMatchHighlightBackground: rgba(234, 92, 0, .33);--vscode-editor-findRangeHighlightBackground: rgba(58, 61, 65, .4);--vscode-searchEditor-findMatchBackground: rgba(234, 92, 0, .22);--vscode-editor-hoverHighlightBackground: rgba(38, 79, 120, .25);--vscode-editorHoverWidget-background: #252526;--vscode-editorHoverWidget-foreground: #cccccc;--vscode-editorHoverWidget-border: #454545;--vscode-editorHoverWidget-statusBarBackground: #2c2c2d;--vscode-editorLink-activeForeground: #4e94ce;--vscode-editorInlayHint-foreground: rgba(255, 255, 255, .8);--vscode-editorInlayHint-background: rgba(77, 77, 77, .6);--vscode-editorInlayHint-typeForeground: rgba(255, 255, 255, .8);--vscode-editorInlayHint-typeBackground: rgba(77, 77, 77, .6);--vscode-editorInlayHint-parameterForeground: rgba(255, 255, 255, .8);--vscode-editorInlayHint-parameterBackground: rgba(77, 77, 77, .6);--vscode-editorLightBulb-foreground: #ffcc00;--vscode-editorLightBulbAutoFix-foreground: #75beff;--vscode-diffEditor-insertedTextBackground: rgba(156, 204, 44, .2);--vscode-diffEditor-removedTextBackground: rgba(255, 0, 0, .4);--vscode-diffEditor-insertedLineBackground: rgba(155, 185, 85, .2);--vscode-diffEditor-removedLineBackground: rgba(255, 0, 0, .2);--vscode-diffEditor-diagonalFill: rgba(204, 204, 204, .2);--vscode-list-focusOutline: #007fd4;--vscode-list-activeSelectionBackground: #04395e;--vscode-list-activeSelectionForeground: #ffffff;--vscode-list-activeSelectionIconForeground: #ffffff;--vscode-list-inactiveSelectionBackground: #37373d;--vscode-list-hoverBackground: #2a2d2e;--vscode-list-dropBackground: #383b3d;--vscode-list-highlightForeground: #2aaaff;--vscode-list-focusHighlightForeground: #2aaaff;--vscode-list-invalidItemForeground: #b89500;--vscode-list-errorForeground: #f88070;--vscode-list-warningForeground: #cca700;--vscode-listFilterWidget-background: #252526;--vscode-listFilterWidget-outline: rgba(0, 0, 0, 0);--vscode-listFilterWidget-noMatchesOutline: #be1100;--vscode-listFilterWidget-shadow: rgba(0, 0, 0, .36);--vscode-list-filterMatchBackground: rgba(234, 92, 0, .33);--vscode-tree-indentGuidesStroke: #585858;--vscode-tree-tableColumnsBorder: rgba(204, 204, 204, .13);--vscode-tree-tableOddRowsBackground: rgba(204, 204, 204, .04);--vscode-list-deemphasizedForeground: #8c8c8c;--vscode-quickInputList-focusForeground: #ffffff;--vscode-quickInputList-focusIconForeground: #ffffff;--vscode-quickInputList-focusBackground: #04395e;--vscode-menu-foreground: #cccccc;--vscode-menu-background: #303031;--vscode-menu-selectionForeground: #ffffff;--vscode-menu-selectionBackground: #04395e;--vscode-menu-separatorBackground: #606060;--vscode-toolbar-hoverBackground: rgba(90, 93, 94, .31);--vscode-toolbar-activeBackground: rgba(99, 102, 103, .31);--vscode-editor-snippetTabstopHighlightBackground: rgba(124, 124, 124, .3);--vscode-editor-snippetFinalTabstopHighlightBorder: #525252;--vscode-breadcrumb-foreground: rgba(204, 204, 204, .8);--vscode-breadcrumb-background: #1e1e1e;--vscode-breadcrumb-focusForeground: #e0e0e0;--vscode-breadcrumb-activeSelectionForeground: #e0e0e0;--vscode-breadcrumbPicker-background: #252526;--vscode-merge-currentHeaderBackground: rgba(64, 200, 174, .5);--vscode-merge-currentContentBackground: rgba(64, 200, 174, .2);--vscode-merge-incomingHeaderBackground: rgba(64, 166, 255, .5);--vscode-merge-incomingContentBackground: rgba(64, 166, 255, .2);--vscode-merge-commonHeaderBackground: rgba(96, 96, 96, .4);--vscode-merge-commonContentBackground: rgba(96, 96, 96, .16);--vscode-editorOverviewRuler-currentContentForeground: rgba(64, 200, 174, .5);--vscode-editorOverviewRuler-incomingContentForeground: rgba(64, 166, 255, .5);--vscode-editorOverviewRuler-commonContentForeground: rgba(96, 96, 96, .4);--vscode-editorOverviewRuler-findMatchForeground: rgba(209, 134, 22, .49);--vscode-editorOverviewRuler-selectionHighlightForeground: rgba(160, 160, 160, .8);--vscode-minimap-findMatchHighlight: #d18616;--vscode-minimap-selectionOccurrenceHighlight: #676767;--vscode-minimap-selectionHighlight: #264f78;--vscode-minimap-errorHighlight: rgba(255, 18, 18, .7);--vscode-minimap-warningHighlight: #cca700;--vscode-minimap-foregroundOpacity: #000000;--vscode-minimapSlider-background: rgba(121, 121, 121, .2);--vscode-minimapSlider-hoverBackground: rgba(100, 100, 100, .35);--vscode-minimapSlider-activeBackground: rgba(191, 191, 191, .2);--vscode-problemsErrorIcon-foreground: #f14c4c;--vscode-problemsWarningIcon-foreground: #cca700;--vscode-problemsInfoIcon-foreground: #3794ff;--vscode-charts-foreground: #cccccc;--vscode-charts-lines: rgba(204, 204, 204, .5);--vscode-charts-red: #f14c4c;--vscode-charts-blue: #3794ff;--vscode-charts-yellow: #cca700;--vscode-charts-orange: #d18616;--vscode-charts-green: #89d185;--vscode-charts-purple: #b180d7;--vscode-editor-lineHighlightBorder: #282828;--vscode-editor-rangeHighlightBackground: rgba(255, 255, 255, .04);--vscode-editor-symbolHighlightBackground: rgba(234, 92, 0, .33);--vscode-editorCursor-foreground: #aeafad;--vscode-editorWhitespace-foreground: rgba(227, 228, 226, .16);--vscode-editorIndentGuide-background: #404040;--vscode-editorIndentGuide-activeBackground: #707070;--vscode-editorLineNumber-foreground: #858585;--vscode-editorActiveLineNumber-foreground: #c6c6c6;--vscode-editorLineNumber-activeForeground: #c6c6c6;--vscode-editorRuler-foreground: #5a5a5a;--vscode-editorCodeLens-foreground: #999999;--vscode-editorBracketMatch-background: rgba(0, 100, 0, .1);--vscode-editorBracketMatch-border: #888888;--vscode-editorOverviewRuler-border: rgba(127, 127, 127, .3);--vscode-editorGutter-background: #1e1e1e;--vscode-editorUnnecessaryCode-opacity: rgba(0, 0, 0, .67);--vscode-editorGhostText-foreground: rgba(255, 255, 255, .34);--vscode-editorOverviewRuler-rangeHighlightForeground: rgba(0, 122, 204, .6);--vscode-editorOverviewRuler-errorForeground: rgba(255, 18, 18, .7);--vscode-editorOverviewRuler-warningForeground: #cca700;--vscode-editorOverviewRuler-infoForeground: #3794ff;--vscode-editorBracketHighlight-foreground1: #ffd700;--vscode-editorBracketHighlight-foreground2: #da70d6;--vscode-editorBracketHighlight-foreground3: #179fff;--vscode-editorBracketHighlight-foreground4: rgba(0, 0, 0, 0);--vscode-editorBracketHighlight-foreground5: rgba(0, 0, 0, 0);--vscode-editorBracketHighlight-foreground6: rgba(0, 0, 0, 0);--vscode-editorBracketHighlight-unexpectedBracket\.foreground: rgba(255, 18, 18, .8);--vscode-editorBracketPairGuide-background1: rgba(0, 0, 0, 0);--vscode-editorBracketPairGuide-background2: rgba(0, 0, 0, 0);--vscode-editorBracketPairGuide-background3: rgba(0, 0, 0, 0);--vscode-editorBracketPairGuide-background4: rgba(0, 0, 0, 0);--vscode-editorBracketPairGuide-background5: rgba(0, 0, 0, 0);--vscode-editorBracketPairGuide-background6: rgba(0, 0, 0, 0);--vscode-editorBracketPairGuide-activeBackground1: rgba(0, 0, 0, 0);--vscode-editorBracketPairGuide-activeBackground2: rgba(0, 0, 0, 0);--vscode-editorBracketPairGuide-activeBackground3: rgba(0, 0, 0, 0);--vscode-editorBracketPairGuide-activeBackground4: rgba(0, 0, 0, 0);--vscode-editorBracketPairGuide-activeBackground5: rgba(0, 0, 0, 0);--vscode-editorBracketPairGuide-activeBackground6: rgba(0, 0, 0, 0);--vscode-editorUnicodeHighlight-border: #bd9b03;--vscode-editorUnicodeHighlight-background: rgba(189, 155, 3, .15);--vscode-symbolIcon-arrayForeground: #cccccc;--vscode-symbolIcon-booleanForeground: #cccccc;--vscode-symbolIcon-classForeground: #ee9d28;--vscode-symbolIcon-colorForeground: #cccccc;--vscode-symbolIcon-constantForeground: #cccccc;--vscode-symbolIcon-constructorForeground: #b180d7;--vscode-symbolIcon-enumeratorForeground: #ee9d28;--vscode-symbolIcon-enumeratorMemberForeground: #75beff;--vscode-symbolIcon-eventForeground: #ee9d28;--vscode-symbolIcon-fieldForeground: #75beff;--vscode-symbolIcon-fileForeground: #cccccc;--vscode-symbolIcon-folderForeground: #cccccc;--vscode-symbolIcon-functionForeground: #b180d7;--vscode-symbolIcon-interfaceForeground: #75beff;--vscode-symbolIcon-keyForeground: #cccccc;--vscode-symbolIcon-keywordForeground: #cccccc;--vscode-symbolIcon-methodForeground: #b180d7;--vscode-symbolIcon-moduleForeground: #cccccc;--vscode-symbolIcon-namespaceForeground: #cccccc;--vscode-symbolIcon-nullForeground: #cccccc;--vscode-symbolIcon-numberForeground: #cccccc;--vscode-symbolIcon-objectForeground: #cccccc;--vscode-symbolIcon-operatorForeground: #cccccc;--vscode-symbolIcon-packageForeground: #cccccc;--vscode-symbolIcon-propertyForeground: #cccccc;--vscode-symbolIcon-referenceForeground: #cccccc;--vscode-symbolIcon-snippetForeground: #cccccc;--vscode-symbolIcon-stringForeground: #cccccc;--vscode-symbolIcon-structForeground: #cccccc;--vscode-symbolIcon-textForeground: #cccccc;--vscode-symbolIcon-typeParameterForeground: #cccccc;--vscode-symbolIcon-unitForeground: #cccccc;--vscode-symbolIcon-variableForeground: #75beff;--vscode-editorHoverWidget-highlightForeground: #2aaaff;--vscode-editorOverviewRuler-bracketMatchForeground: #a0a0a0;--vscode-editor-foldBackground: rgba(38, 79, 120, .3);--vscode-editorGutter-foldingControlForeground: #c5c5c5;--vscode-editor-linkedEditingBackground: rgba(255, 0, 0, .3);--vscode-editor-wordHighlightBackground: rgba(87, 87, 87, .72);--vscode-editor-wordHighlightStrongBackground: rgba(0, 73, 114, .72);--vscode-editorOverviewRuler-wordHighlightForeground: rgba(160, 160, 160, .8);--vscode-editorOverviewRuler-wordHighlightStrongForeground: rgba(192, 160, 192, .8);--vscode-peekViewTitle-background: rgba(55, 148, 255, .1);--vscode-peekViewTitleLabel-foreground: #ffffff;--vscode-peekViewTitleDescription-foreground: rgba(204, 204, 204, .7);--vscode-peekView-border: #3794ff;--vscode-peekViewResult-background: #252526;--vscode-peekViewResult-lineForeground: #bbbbbb;--vscode-peekViewResult-fileForeground: #ffffff;--vscode-peekViewResult-selectionBackground: rgba(51, 153, 255, .2);--vscode-peekViewResult-selectionForeground: #ffffff;--vscode-peekViewEditor-background: #001f33;--vscode-peekViewEditorGutter-background: #001f33;--vscode-peekViewResult-matchHighlightBackground: rgba(234, 92, 0, .3);--vscode-peekViewEditor-matchHighlightBackground: rgba(255, 143, 0, .6);--vscode-editorMarkerNavigationError-background: #f14c4c;--vscode-editorMarkerNavigationError-headerBackground: rgba(241, 76, 76, .1);--vscode-editorMarkerNavigationWarning-background: #cca700;--vscode-editorMarkerNavigationWarning-headerBackground: rgba(204, 167, 0, .1);--vscode-editorMarkerNavigationInfo-background: #3794ff;--vscode-editorMarkerNavigationInfo-headerBackground: rgba(55, 148, 255, .1);--vscode-editorMarkerNavigation-background: #1e1e1e;--vscode-editorSuggestWidget-background: #252526;--vscode-editorSuggestWidget-border: #454545;--vscode-editorSuggestWidget-foreground: #d4d4d4;--vscode-editorSuggestWidget-selectedForeground: #ffffff;--vscode-editorSuggestWidget-selectedIconForeground: #ffffff;--vscode-editorSuggestWidget-selectedBackground: #04395e;--vscode-editorSuggestWidget-highlightForeground: #2aaaff;--vscode-editorSuggestWidget-focusHighlightForeground: #2aaaff;--vscode-editorSuggestWidgetStatus-foreground: rgba(212, 212, 212, .5);--vscode-tab-activeBackground: #1e1e1e;--vscode-tab-unfocusedActiveBackground: #1e1e1e;--vscode-tab-inactiveBackground: #2d2d2d;--vscode-tab-unfocusedInactiveBackground: #2d2d2d;--vscode-tab-activeForeground: #ffffff;--vscode-tab-inactiveForeground: rgba(255, 255, 255, .5);--vscode-tab-unfocusedActiveForeground: rgba(255, 255, 255, .5);--vscode-tab-unfocusedInactiveForeground: rgba(255, 255, 255, .25);--vscode-tab-border: #252526;--vscode-tab-lastPinnedBorder: rgba(204, 204, 204, .2);--vscode-tab-activeModifiedBorder: #3399cc;--vscode-tab-inactiveModifiedBorder: rgba(51, 153, 204, .5);--vscode-tab-unfocusedActiveModifiedBorder: rgba(51, 153, 204, .5);--vscode-tab-unfocusedInactiveModifiedBorder: rgba(51, 153, 204, .25);--vscode-editorPane-background: #1e1e1e;--vscode-editorGroupHeader-tabsBackground: #252526;--vscode-editorGroupHeader-noTabsBackground: #1e1e1e;--vscode-editorGroup-border: #444444;--vscode-editorGroup-dropBackground: rgba(83, 89, 93, .5);--vscode-editorGroup-dropIntoPromptForeground: #cccccc;--vscode-editorGroup-dropIntoPromptBackground: #252526;--vscode-sideBySideEditor-horizontalBorder: #444444;--vscode-sideBySideEditor-verticalBorder: #444444;--vscode-panel-background: #1e1e1e;--vscode-panel-border: rgba(128, 128, 128, .35);--vscode-panelTitle-activeForeground: #e7e7e7;--vscode-panelTitle-inactiveForeground: rgba(231, 231, 231, .6);--vscode-panelTitle-activeBorder: #e7e7e7;--vscode-panel-dropBorder: #e7e7e7;--vscode-panelSection-dropBackground: rgba(83, 89, 93, .5);--vscode-panelSectionHeader-background: rgba(128, 128, 128, .2);--vscode-panelSection-border: rgba(128, 128, 128, .35);--vscode-banner-background: #04395e;--vscode-banner-foreground: #ffffff;--vscode-banner-iconForeground: #3794ff;--vscode-statusBar-foreground: #ffffff;--vscode-statusBar-noFolderForeground: #ffffff;--vscode-statusBar-background: #007acc;--vscode-statusBar-noFolderBackground: #68217a;--vscode-statusBar-focusBorder: #ffffff;--vscode-statusBarItem-activeBackground: rgba(255, 255, 255, .18);--vscode-statusBarItem-focusBorder: #ffffff;--vscode-statusBarItem-hoverBackground: rgba(255, 255, 255, .12);--vscode-statusBarItem-compactHoverBackground: rgba(255, 255, 255, .2);--vscode-statusBarItem-prominentForeground: #ffffff;--vscode-statusBarItem-prominentBackground: rgba(0, 0, 0, .5);--vscode-statusBarItem-prominentHoverBackground: rgba(0, 0, 0, .3);--vscode-statusBarItem-errorBackground: #c72e0f;--vscode-statusBarItem-errorForeground: #ffffff;--vscode-statusBarItem-warningBackground: #7a6400;--vscode-statusBarItem-warningForeground: #ffffff;--vscode-activityBar-background: #333333;--vscode-activityBar-foreground: #ffffff;--vscode-activityBar-inactiveForeground: rgba(255, 255, 255, .4);--vscode-activityBar-activeBorder: #ffffff;--vscode-activityBar-dropBorder: #ffffff;--vscode-activityBarBadge-background: #007acc;--vscode-activityBarBadge-foreground: #ffffff;--vscode-statusBarItem-remoteBackground: #16825d;--vscode-statusBarItem-remoteForeground: #ffffff;--vscode-extensionBadge-remoteBackground: #007acc;--vscode-extensionBadge-remoteForeground: #ffffff;--vscode-sideBar-background: #252526;--vscode-sideBarTitle-foreground: #bbbbbb;--vscode-sideBar-dropBackground: rgba(83, 89, 93, .5);--vscode-sideBarSectionHeader-background: rgba(0, 0, 0, 0);--vscode-sideBarSectionHeader-border: rgba(204, 204, 204, .2);--vscode-titleBar-activeForeground: #cccccc;--vscode-titleBar-inactiveForeground: rgba(204, 204, 204, .6);--vscode-titleBar-activeBackground: #3c3c3c;--vscode-titleBar-inactiveBackground: rgba(60, 60, 60, .6);--vscode-menubar-selectionForeground: #cccccc;--vscode-menubar-selectionBackground: rgba(90, 93, 94, .31);--vscode-notifications-foreground: #cccccc;--vscode-notifications-background: #252526;--vscode-notificationLink-foreground: #3794ff;--vscode-notificationCenterHeader-background: #303031;--vscode-notifications-border: #303031;--vscode-notificationsErrorIcon-foreground: #f14c4c;--vscode-notificationsWarningIcon-foreground: #cca700;--vscode-notificationsInfoIcon-foreground: #3794ff;--vscode-commandCenter-foreground: #cccccc;--vscode-commandCenter-activeForeground: #cccccc;--vscode-commandCenter-activeBackground: rgba(90, 93, 94, .31);--vscode-commandCenter-border: rgba(128, 128, 128, .35);--vscode-editorCommentsWidget-resolvedBorder: rgba(204, 204, 204, .5);--vscode-editorCommentsWidget-unresolvedBorder: #3794ff;--vscode-editorCommentsWidget-rangeBackground: rgba(55, 148, 255, .1);--vscode-editorCommentsWidget-rangeBorder: rgba(55, 148, 255, .4);--vscode-editorCommentsWidget-rangeActiveBackground: rgba(55, 148, 255, .1);--vscode-editorCommentsWidget-rangeActiveBorder: rgba(55, 148, 255, .4);--vscode-editorGutter-commentRangeForeground: #37373d;--vscode-debugToolBar-background: #333333;--vscode-debugIcon-startForeground: #89d185;--vscode-editor-stackFrameHighlightBackground: rgba(255, 255, 0, .2);--vscode-editor-focusedStackFrameHighlightBackground: rgba(122, 189, 122, .3);--vscode-mergeEditor-change\.background: rgba(155, 185, 85, .2);--vscode-mergeEditor-change\.word\.background: rgba(156, 204, 44, .2);--vscode-mergeEditor-conflict\.unhandledUnfocused\.border: rgba(255, 166, 0, .48);--vscode-mergeEditor-conflict\.unhandledFocused\.border: #ffa600;--vscode-mergeEditor-conflict\.handledUnfocused\.border: rgba(134, 134, 134, .29);--vscode-mergeEditor-conflict\.handledFocused\.border: rgba(193, 193, 193, .8);--vscode-mergeEditor-conflict\.handled\.minimapOverViewRuler: rgba(173, 172, 168, .93);--vscode-mergeEditor-conflict\.unhandled\.minimapOverViewRuler: #fcba03;--vscode-mergeEditor-conflictingLines\.background: rgba(255, 234, 0, .28);--vscode-settings-headerForeground: #e7e7e7;--vscode-settings-modifiedItemIndicator: #0c7d9d;--vscode-settings-headerBorder: rgba(128, 128, 128, .35);--vscode-settings-sashBorder: rgba(128, 128, 128, .35);--vscode-settings-dropdownBackground: #3c3c3c;--vscode-settings-dropdownForeground: #f0f0f0;--vscode-settings-dropdownBorder: #3c3c3c;--vscode-settings-dropdownListBorder: #454545;--vscode-settings-checkboxBackground: #3c3c3c;--vscode-settings-checkboxForeground: #f0f0f0;--vscode-settings-checkboxBorder: #3c3c3c;--vscode-settings-textInputBackground: #3c3c3c;--vscode-settings-textInputForeground: #cccccc;--vscode-settings-numberInputBackground: #3c3c3c;--vscode-settings-numberInputForeground: #cccccc;--vscode-settings-focusedRowBackground: rgba(42, 45, 46, .6);--vscode-settings-rowHoverBackground: rgba(42, 45, 46, .3);--vscode-settings-focusedRowBorder: rgba(255, 255, 255, .12);--vscode-terminal-foreground: #cccccc;--vscode-terminal-selectionBackground: #264f78;--vscode-terminal-inactiveSelectionBackground: #3a3d41;--vscode-terminalCommandDecoration-defaultBackground: rgba(255, 255, 255, .25);--vscode-terminalCommandDecoration-successBackground: #1b81a8;--vscode-terminalCommandDecoration-errorBackground: #f14c4c;--vscode-terminalOverviewRuler-cursorForeground: rgba(160, 160, 160, .8);--vscode-terminal-border: rgba(128, 128, 128, .35);--vscode-terminal-findMatchBackground: #515c6a;--vscode-terminal-findMatchHighlightBackground: rgba(234, 92, 0, .33);--vscode-terminalOverviewRuler-findMatchForeground: rgba(209, 134, 22, .49);--vscode-terminal-dropBackground: rgba(83, 89, 93, .5);--vscode-testing-iconFailed: #f14c4c;--vscode-testing-iconErrored: #f14c4c;--vscode-testing-iconPassed: #73c991;--vscode-testing-runAction: #73c991;--vscode-testing-iconQueued: #cca700;--vscode-testing-iconUnset: #848484;--vscode-testing-iconSkipped: #848484;--vscode-testing-peekBorder: #f14c4c;--vscode-testing-peekHeaderBackground: rgba(241, 76, 76, .1);--vscode-testing-message\.error\.decorationForeground: #f14c4c;--vscode-testing-message\.error\.lineBackground: rgba(255, 0, 0, .2);--vscode-testing-message\.info\.decorationForeground: rgba(212, 212, 212, .5);--vscode-welcomePage-tileBackground: #252526;--vscode-welcomePage-tileHoverBackground: #2c2c2d;--vscode-welcomePage-tileShadow: rgba(0, 0, 0, .36);--vscode-welcomePage-progress\.background: #3c3c3c;--vscode-welcomePage-progress\.foreground: #3794ff;--vscode-debugExceptionWidget-border: #a31515;--vscode-debugExceptionWidget-background: #420b0d;--vscode-ports-iconRunningProcessForeground: #369432;--vscode-statusBar-debuggingBackground: #cc6633;--vscode-statusBar-debuggingForeground: #ffffff;--vscode-editor-inlineValuesForeground: rgba(255, 255, 255, .5);--vscode-editor-inlineValuesBackground: rgba(255, 200, 0, .2);--vscode-editorGutter-modifiedBackground: #1b81a8;--vscode-editorGutter-addedBackground: #487e02;--vscode-editorGutter-deletedBackground: #f14c4c;--vscode-minimapGutter-modifiedBackground: #1b81a8;--vscode-minimapGutter-addedBackground: #487e02;--vscode-minimapGutter-deletedBackground: #f14c4c;--vscode-editorOverviewRuler-modifiedForeground: rgba(27, 129, 168, .6);--vscode-editorOverviewRuler-addedForeground: rgba(72, 126, 2, .6);--vscode-editorOverviewRuler-deletedForeground: rgba(241, 76, 76, .6);--vscode-debugIcon-breakpointForeground: #e51400;--vscode-debugIcon-breakpointDisabledForeground: #848484;--vscode-debugIcon-breakpointUnverifiedForeground: #848484;--vscode-debugIcon-breakpointCurrentStackframeForeground: #ffcc00;--vscode-debugIcon-breakpointStackframeForeground: #89d185;--vscode-notebook-cellBorderColor: #37373d;--vscode-notebook-focusedEditorBorder: #007fd4;--vscode-notebookStatusSuccessIcon-foreground: #89d185;--vscode-notebookStatusErrorIcon-foreground: #f48771;--vscode-notebookStatusRunningIcon-foreground: #cccccc;--vscode-notebook-cellToolbarSeparator: rgba(128, 128, 128, .35);--vscode-notebook-selectedCellBackground: #37373d;--vscode-notebook-selectedCellBorder: #37373d;--vscode-notebook-focusedCellBorder: #007fd4;--vscode-notebook-inactiveFocusedCellBorder: #37373d;--vscode-notebook-cellStatusBarItemHoverBackground: rgba(255, 255, 255, .15);--vscode-notebook-cellInsertionIndicator: #007fd4;--vscode-notebookScrollbarSlider-background: rgba(121, 121, 121, .4);--vscode-notebookScrollbarSlider-hoverBackground: rgba(100, 100, 100, .7);--vscode-notebookScrollbarSlider-activeBackground: rgba(191, 191, 191, .4);--vscode-notebook-symbolHighlightBackground: rgba(255, 255, 255, .04);--vscode-notebook-cellEditorBackground: #252526;--vscode-notebook-editorBackground: #1e1e1e;--vscode-keybindingTable-headerBackground: rgba(204, 204, 204, .04);--vscode-keybindingTable-rowsBackground: rgba(204, 204, 204, .04);--vscode-scm-providerBorder: #454545;--vscode-debugTokenExpression-name: #c586c0;--vscode-debugTokenExpression-value: rgba(204, 204, 204, .6);--vscode-debugTokenExpression-string: #ce9178;--vscode-debugTokenExpression-boolean: #4e94ce;--vscode-debugTokenExpression-number: #b5cea8;--vscode-debugTokenExpression-error: #f48771;--vscode-debugView-exceptionLabelForeground: #cccccc;--vscode-debugView-exceptionLabelBackground: #6c2022;--vscode-debugView-stateLabelForeground: #cccccc;--vscode-debugView-stateLabelBackground: rgba(136, 136, 136, .27);--vscode-debugView-valueChangedHighlight: #569cd6;--vscode-debugConsole-infoForeground: #3794ff;--vscode-debugConsole-warningForeground: #cca700;--vscode-debugConsole-errorForeground: #f48771;--vscode-debugConsole-sourceForeground: #cccccc;--vscode-debugConsoleInputIcon-foreground: #cccccc;--vscode-debugIcon-pauseForeground: #75beff;--vscode-debugIcon-stopForeground: #f48771;--vscode-debugIcon-disconnectForeground: #f48771;--vscode-debugIcon-restartForeground: #89d185;--vscode-debugIcon-stepOverForeground: #75beff;--vscode-debugIcon-stepIntoForeground: #75beff;--vscode-debugIcon-stepOutForeground: #75beff;--vscode-debugIcon-continueForeground: #75beff;--vscode-debugIcon-stepBackForeground: #75beff;--vscode-extensionButton-prominentBackground: #0e639c;--vscode-extensionButton-prominentForeground: #ffffff;--vscode-extensionButton-prominentHoverBackground: #1177bb;--vscode-extensionIcon-starForeground: #ff8e00;--vscode-extensionIcon-verifiedForeground: #3794ff;--vscode-extensionIcon-preReleaseForeground: #1d9271;--vscode-extensionIcon-sponsorForeground: #d758b3;--vscode-terminal-ansiBlack: #000000;--vscode-terminal-ansiRed: #cd3131;--vscode-terminal-ansiGreen: #0dbc79;--vscode-terminal-ansiYellow: #e5e510;--vscode-terminal-ansiBlue: #2472c8;--vscode-terminal-ansiMagenta: #bc3fbc;--vscode-terminal-ansiCyan: #11a8cd;--vscode-terminal-ansiWhite: #e5e5e5;--vscode-terminal-ansiBrightBlack: #666666;--vscode-terminal-ansiBrightRed: #f14c4c;--vscode-terminal-ansiBrightGreen: #23d18b;--vscode-terminal-ansiBrightYellow: #f5f543;--vscode-terminal-ansiBrightBlue: #3b8eea;--vscode-terminal-ansiBrightMagenta: #d670d6;--vscode-terminal-ansiBrightCyan: #29b8db;--vscode-terminal-ansiBrightWhite: #e5e5e5;--vscode-interactive-activeCodeBorder: #3794ff;--vscode-interactive-inactiveCodeBorder: #37373d;--vscode-gitDecoration-addedResourceForeground: #81b88b;--vscode-gitDecoration-modifiedResourceForeground: #e2c08d;--vscode-gitDecoration-deletedResourceForeground: #c74e39;--vscode-gitDecoration-renamedResourceForeground: #73c991;--vscode-gitDecoration-untrackedResourceForeground: #73c991;--vscode-gitDecoration-ignoredResourceForeground: #8c8c8c;--vscode-gitDecoration-stageModifiedResourceForeground: #e2c08d;--vscode-gitDecoration-stageDeletedResourceForeground: #c74e39;--vscode-gitDecoration-conflictingResourceForeground: #e4676b;--vscode-gitDecoration-submoduleResourceForeground: #8db9e2}.test-error-container{position:relative;white-space:pre;flex:none;padding:0;background-color:var(--color-canvas-subtle);border-radius:6px;line-height:initial;margin-bottom:6px}.test-error-view{overflow:auto;padding:16px}.test-error-text{font-family:monospace}.test-result{flex:auto;display:flex;flex-direction:column;margin-bottom:24px}.test-result>div{flex:none}.test-result video,.test-result img.screenshot{flex:none;box-shadow:var(--box-shadow-thick);margin:24px auto;min-width:200px;max-width:80%}.test-result-path{padding:0 0 0 5px;color:var(--color-fg-muted)}.test-result-counter{border-radius:12px;color:var(--color-canvas-default);padding:2px 8px;line-height:normal}.step-title-container{display:flex;align-items:center;flex:auto;min-width:0}.step-title-container>*{flex-shrink:0}.step-title-text{flex-shrink:1;text-overflow:ellipsis;overflow:hidden;white-space:nowrap;min-width:0}.step-title-highlight{background:var(--color-attention-subtle)}.step-spacer{flex:auto}.step-attachment-link{display:flex;flex:none;border-radius:4px;padding:4px}.step-attachment-link:hover{background-color:var(--color-neutral-muted)}.step-attachment-link .octicon{margin-right:0}.step-indirect-attachment-indicator{display:flex;flex:none;padding:4px;opacity:.5}.step-indirect-attachment-indicator .octicon{margin-right:0}.step-duration{flex:none;white-space:nowrap;margin-left:4px}:root.light-mode .test-result-counter{background:var(--color-scale-gray-5)}:root.dark-mode .test-result-counter{background:var(--color-scale-gray-3)}.step-filter{margin-bottom:8px}@media only screen and (max-width: 600px){.test-result{padding:0!important}}.test-file-test{line-height:32px;align-items:center;padding:2px 8px;overflow:hidden;text-overflow:ellipsis}.test-file-test-selected,.test-file-test:hover{background-color:var(--color-canvas-subtle)}.test-file-title{font-weight:600;font-size:16px}.test-file-details-row{padding:0 0 6px 8px;margin:0 0 0 15px;line-height:16px;font-weight:400;color:var(--color-fg-muted);display:flex;align-items:center}.test-file-details-row-items{display:flex;height:16px}.test-file-details-row-items>.link-badge{margin-top:-2px}.test-file-details-row-items>.trace-link{margin-top:-4px}.test-file-path{text-overflow:ellipsis;overflow:hidden;color:var(--color-fg-muted)}.test-file-path-link{margin-right:10px}.test-file-test-outcome-skipped{color:var(--color-fg-muted)}.test-file-test-status-icon{flex:none}.test-file-header-info{display:flex;align-items:center;gap:4px 8px;color:var(--color-fg-muted)}.test-file-header-br{flex-basis:100%;height:0}.test-file-no-files{margin-top:12px;color:var(--color-fg-muted);background-color:unset;font-weight:unset;border:1px solid var(--color-border-default);border-bottom-left-radius:6px;border-bottom-right-radius:6px}#root{color:var(--color-fg-default);font-size:14px;font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji";-webkit-font-smoothing:antialiased}.metadata-toggle{cursor:pointer;-webkit-user-select:none;user-select:none;color:var(--color-fg-default)}.metadata-toggle-second-line{margin-top:8px;margin-left:8px}.metadata-view{border:1px solid var(--color-border-default);border-radius:6px;margin-top:12px}.metadata-view .metadata-section{margin:8px 10px 8px 32px}.metadata-view span:not(.copy-button-container),.metadata-view a{display:inline-block;line-height:24px}.metadata-properties{display:flex;flex-direction:column;align-items:normal;gap:8px}.metadata-properties>div{height:24px}.metadata-separator{height:1px;border-bottom:1px solid var(--color-border-default)}.metadata-view a{color:var(--color-fg-default)}.copyable-property{white-space:pre}.copyable-property>span{display:flex;align-items:center}.gantt-bar{transition:opacity .2s;cursor:pointer;outline:none}.gantt-bar:hover,.gantt-bar:focus{opacity:.8;stroke:var(--color-fg-default);stroke-width:2}
</style>
  </head>
  <body>
    <div id='root'></div>
  </body>
</html>
<template id="playwrightReportBase64">data:application/zip;base64,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</template>
```

## apps/website/playwright.config.ts

```typescript
import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  fullyParallel: false,
  retries: 0,
  workers: 1,
  reporter: 'html',
  use: {
    baseURL: 'http://localhost:3000',
    trace: 'on-first-retry',
  },
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'], viewport: { width: 1280, height: 800 } },
    },
  ],
  webServer: {
    command: 'npm run dev',
    url: 'http://localhost:3000',
    reuseExistingServer: !process.env.CI,
    timeout: 120000,
  },
});
```

## apps/website/postcss.config.mjs

```text
const config = {
  plugins: {
    "@tailwindcss/postcss": {},
  },
};

export default config;
```

## apps/website/public/robots.txt

```text
User-agent: *
Allow: /

Sitemap: https://zenixui.com/sitemap.xml
```

## apps/website/src/app/docs/cli/page.tsx

```tsx
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
        Use the `add` command to download a complete blueprint from the Experience Gallery directly into your application.
      </p>
      <pre style={{ margin: '0 0 2rem', padding: '1.5rem', background: 'var(--zx-elevated)', borderRadius: 'var(--zx-radius-sm)', overflowX: 'auto', fontSize: '0.875rem', fontFamily: 'monospace' }}>
        {`npx zenix-ui add night-city-portfolio`}
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
```

## apps/website/src/app/docs/components/page.tsx

```tsx
import { Surface, Button, Input, Textarea, Badge } from '@zenixui/components';
import { Experience } from '@zenixui/react';
import Link from 'next/link';

export default function ComponentsPage() {
  const renderComparisonGrid = (content: React.ReactNode) => (
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1px', background: 'var(--zx-elevated)', border: '1px solid var(--zx-elevated)', borderRadius: 'var(--zx-radius-sm)', overflow: 'hidden' }}>
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
      <Experience preset="night-city">
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
          <pre style={{ margin: 0, padding: '1.5rem', background: 'var(--zx-elevated)', borderRadius: 'var(--zx-radius-sm)', overflowX: 'auto', fontSize: '0.875rem', fontFamily: 'monospace' }}>
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
          <pre style={{ margin: 0, padding: '1.5rem', background: 'var(--zx-elevated)', borderRadius: 'var(--zx-radius-sm)', overflowX: 'auto', fontSize: '0.875rem', fontFamily: 'monospace' }}>
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
          <pre style={{ margin: 0, padding: '1.5rem', background: 'var(--zx-elevated)', borderRadius: 'var(--zx-radius-sm)', overflowX: 'auto', fontSize: '0.875rem', fontFamily: 'monospace' }}>
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
          <pre style={{ margin: 0, padding: '1.5rem', background: 'var(--zx-elevated)', borderRadius: 'var(--zx-radius-sm)', overflowX: 'auto', fontSize: '0.875rem', fontFamily: 'monospace' }}>
            {`import { Badge } from '@zenixui/components';\n\n<Badge tone="neutral">Active Status</Badge>`}
          </pre>
        </section>

      </div>
    </div>
  );
}
```

## apps/website/src/app/docs/layout.tsx

```tsx
import Link from 'next/link';

export default function DocsLayout({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ display: 'flex', minHeight: '100vh', maxWidth: '1400px', margin: '0 auto' }}>
      {/* Sidebar */}
      <aside style={{ width: '250px', borderRight: '1px solid var(--zx-elevated)', padding: '3rem 2rem' }}>
        <h3 style={{ fontSize: '0.875rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em', opacity: 0.5, marginBottom: '1.5rem' }}>
          Overview
        </h3>
        <nav style={{ display: 'flex', flexDirection: 'column', gap: '1rem', fontSize: '1rem', fontWeight: 500, marginBottom: '3rem' }}>
          <Link href="/docs" style={{ color: 'var(--zx-primary)', textDecoration: 'none', opacity: 0.8 }}>Getting Started</Link>
          <Link href="/docs/cli" style={{ color: 'var(--zx-primary)', textDecoration: 'none', opacity: 0.8 }}>CLI (npx zenix-ui)</Link>
          <Link href="/docs/customization" style={{ color: 'var(--zx-primary)', textDecoration: 'none', opacity: 0.8 }}>Customization</Link>
        </nav>

        <h3 style={{ fontSize: '0.875rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em', opacity: 0.5, marginBottom: '1.5rem' }}>
          Reference
        </h3>
        <nav style={{ display: 'flex', flexDirection: 'column', gap: '1rem', fontSize: '1rem', fontWeight: 500 }}>
          <Link href="/themes" style={{ color: 'var(--zx-primary)', textDecoration: 'none', opacity: 0.8 }}>Themes</Link>
          <Link href="/experiences" style={{ color: 'var(--zx-primary)', textDecoration: 'none', opacity: 0.8 }}>Experiences</Link>
          <Link href="/docs/components" style={{ color: 'var(--zx-primary)', textDecoration: 'none', opacity: 0.8 }}>Components</Link>
        </nav>
      </aside>

      {/* Main Content */}
      <main style={{ flex: 1, padding: '3rem 4rem', maxWidth: '800px' }}>
        {children}
      </main>
    </div>
  );
}
```

## apps/website/src/app/docs/page.tsx

```tsx
import Link from 'next/link';
import { Surface, Button } from '@zenixui/components';

export default function DocsPage() {
  const workflowSteps = [
    { title: 'Browse Experiences', desc: 'Find the perfect Landing Page, Dashboard, or Portfolio.' },
    { title: 'Copy Blueprint', desc: 'Grab the entire page code, not just individual components.' },
    { title: 'Paste Into Project', desc: 'Drop it into your Next.js, Vite, or Remix app instantly.' },
    { title: 'Customize Theme', desc: 'Swap between Zenix, Ocean, Night City, or Autumn with one prop.' },
    { title: 'Ship', desc: 'Deploy a premium, production-ready experience in minutes.' }
  ];

  return (
    <div style={{ maxWidth: '800px' }}>
      <h1 style={{ fontSize: '3rem', fontWeight: 700, margin: '0 0 2rem', letterSpacing: '-0.03em' }}>The Zenix Workflow</h1>
      <p style={{ fontSize: '1.25rem', opacity: 0.8, lineHeight: 1.6, marginBottom: '4rem' }}>
        ZenixUI fundamentally changes how you build web applications. Instead of assembling atomic components like Lego blocks, you adopt complete, beautifully designed <strong>Experiences</strong> and customize them to fit your brand.
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
                    <Link href="/experiences" style={{ textDecoration: 'none' }}>
                      <Button variant="default">Open Experience Gallery →</Button>
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

      <h2 style={{ fontSize: '2rem', fontWeight: 700, margin: '0 0 1rem', letterSpacing: '-0.02em' }}>The Engine</h2>
      <p style={{ fontSize: '1.125rem', opacity: 0.8, lineHeight: 1.6, marginBottom: '1.5rem' }}>
        Wrap your application with the <code style={{ background: 'var(--zx-elevated)', padding: '0.2rem 0.4rem', borderRadius: '4px' }}>Experience</code> provider. Pass a preset name to inject all the CSS custom properties, scenes, and effect layers.
      </p>
      <pre style={{ margin: 0, padding: '1.5rem', background: 'var(--zx-elevated)', borderRadius: 'var(--zx-radius-sm)', overflowX: 'auto', fontSize: '0.875rem', fontFamily: 'monospace' }}>
        {`import { Experience } from '@zenixui/react';
import { NightCityPortfolio } from './blueprints/night-city-portfolio';

export default function App() {
  return (
    <Experience preset="night-city">
      <NightCityPortfolio />
    </Experience>
  );
}`}
      </pre>
    </div>
  );
}
```

## apps/website/src/app/error.tsx

```tsx
'use client';

import { useEffect } from 'react';

export default function ErrorBoundary({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // We would normally log this to an error tracking service like Sentry here
    console.error('ZenixUI Runtime Error:', error);
  }, [error]);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '80vh', textAlign: 'center', padding: '2rem' }}>
      <div style={{ width: '4rem', height: '4rem', borderRadius: '50%', background: 'rgba(255, 50, 50, 0.1)', color: '#ff4444', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '2rem', marginBottom: '2rem' }}>
        !
      </div>
      <h2 style={{ fontSize: '2rem', fontWeight: 600, margin: '0 0 1rem', letterSpacing: '-0.02em' }}>
        System Failure
      </h2>
      <p style={{ fontSize: '1.125rem', opacity: 0.7, maxWidth: '500px', margin: '0 auto 3rem', lineHeight: 1.6 }}>
        An unexpected error occurred while rendering this experience.
      </p>
      <div style={{ display: 'flex', gap: '1rem' }}>
        <button
          onClick={() => reset()}
          style={{ padding: '0.75rem 1.5rem', background: 'var(--zx-primary)', color: 'var(--zx-background)', border: 'none', cursor: 'pointer', borderRadius: 'var(--zx-radius-sm)', fontWeight: 600 }}
        >
          Attempt Recovery
        </button>
      </div>
    </div>
  );
}
```

## apps/website/src/app/experiences/[id]/BlueprintClientView.tsx

```tsx
'use client';

import { useState } from 'react';
import { Surface, Button } from '@zenixui/components';
import { getBlueprint, blueprints } from '@zenixui/blueprints';
import { Experience } from '@zenixui/react';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { track } from '@vercel/analytics/react';

export function BlueprintClientView({ id, sourceCode }: { id: string, sourceCode: string }) {
  const blueprint = getBlueprint(id);
  const [copyMode, setCopyMode] = useState<'blueprint' | 'source' | null>(null);
  
  if (!blueprint) {
    notFound();
  }

  const { component: Component } = blueprint;
  const blueprintCode = `<${blueprint.title.replace(/\s+/g, '')} />`;

  // Find similar experiences by category (excluding current)
  const similarExperiences = blueprints
    .filter(bp => bp.category === blueprint.category && bp.id !== blueprint.id)
    .slice(0, 3);

  return (
    <div style={{ padding: '0 0 10rem' }}>
      
      {/* FULL WIDTH LIVE PREVIEW */}
      <div style={{ width: '100%', height: '80vh', borderBottom: '1px solid var(--zx-elevated)', position: 'relative', background: 'var(--zx-elevated)', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: '1rem', left: '1rem', zIndex: 100 }}>
          <Link href="/experiences" style={{ fontSize: '0.875rem', fontWeight: 600, padding: '0.5rem 1rem', background: 'var(--zx-background)', color: 'var(--zx-primary)', borderRadius: 'var(--zx-radius-round)', textDecoration: 'none', boxShadow: 'var(--zx-shadow-sm)' }}>
            ← Back to Gallery
          </Link>
        </div>
        <div style={{ height: '100%', overflowY: 'auto', padding: '2rem' }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto', background: 'var(--zx-background)', borderRadius: 'var(--zx-radius-lg)', overflow: 'hidden', boxShadow: 'var(--zx-shadow-lg)', border: '1px solid var(--zx-elevated)' }}>
            <Experience preset={blueprint.theme}>
              <Component />
            </Experience>
          </div>
        </div>
      </div>

      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '4rem 2rem' }}>
        
        {/* METADATA & ACTIONS */}
        <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '4rem', marginBottom: '6rem' }}>
          <div>
            <h1 style={{ fontSize: '3.5rem', fontWeight: 700, margin: '0 0 1rem', letterSpacing: '-0.04em' }}>
              {blueprint.title}
            </h1>
            <p style={{ fontSize: '1.25rem', opacity: 0.6, margin: '0 0 2rem', lineHeight: 1.6 }}>
              {blueprint.description || `A complete, production-ready ${blueprint.category} experience powered by the ${blueprint.theme} theme ecosystem.`}
            </p>
            
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <div style={{ padding: '0.5rem 1rem', background: 'var(--zx-elevated)', borderRadius: 'var(--zx-radius-sm)' }}>
                <div style={{ fontSize: '0.75rem', opacity: 0.5, fontWeight: 600, textTransform: 'uppercase', marginBottom: '0.25rem' }}>Theme</div>
                <div style={{ fontWeight: 600, textTransform: 'capitalize' }}>{blueprint.theme.replace('-', ' ')}</div>
              </div>
              <div style={{ padding: '0.5rem 1rem', background: 'var(--zx-elevated)', borderRadius: 'var(--zx-radius-sm)' }}>
                <div style={{ fontSize: '0.75rem', opacity: 0.5, fontWeight: 600, textTransform: 'uppercase', marginBottom: '0.25rem' }}>Category</div>
                <div style={{ fontWeight: 600, textTransform: 'capitalize' }}>{blueprint.category}</div>
              </div>
              <div style={{ padding: '0.5rem 1rem', background: 'var(--zx-elevated)', borderRadius: 'var(--zx-radius-sm)' }}>
                <div style={{ fontSize: '0.75rem', opacity: 0.5, fontWeight: 600, textTransform: 'uppercase', marginBottom: '0.25rem' }}>Tags</div>
                <div style={{ display: 'flex', gap: '0.5rem' }}>
                  {blueprint.tags.map(tag => (
                    <span key={tag} style={{ fontWeight: 600 }}>#{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <Button size="lg" onClick={() => {
                setCopyMode(copyMode === 'blueprint' ? null : 'blueprint');
                if (copyMode !== 'blueprint') track('View Blueprint Code', { blueprintId: blueprint.id });
              }} style={{ justifyContent: 'center' }}>
                {copyMode === 'blueprint' ? 'Hide Code' : 'Copy Blueprint'}
              </Button>
              <Button size="lg" variant="glass" onClick={() => {
                setCopyMode(copyMode === 'source' ? null : 'source');
                if (copyMode !== 'source') track('View Source Code', { blueprintId: blueprint.id });
              }} style={{ justifyContent: 'center' }}>
                {copyMode === 'source' ? 'Hide Source' : 'Copy Source'}
              </Button>
            </div>

            <Surface variant="glass" style={{ padding: '1.25rem', border: '1px solid var(--zx-elevated)', fontSize: '0.875rem' }}>
              <div style={{ fontWeight: 600, marginBottom: '1rem', fontSize: '0.75rem', textTransform: 'uppercase', opacity: 0.7, letterSpacing: '0.05em' }}>How to adopt</div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <span style={{ width: '1.5rem', height: '1.5rem', borderRadius: '50%', background: 'var(--zx-elevated)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.75rem', fontWeight: 600 }}>1</span>
                  <span style={{ opacity: 0.9 }}>Copy Blueprint</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <span style={{ width: '1.5rem', height: '1.5rem', borderRadius: '50%', background: 'var(--zx-elevated)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.75rem', fontWeight: 600 }}>2</span>
                  <span style={{ opacity: 0.9 }}>Paste into your app</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <span style={{ width: '1.5rem', height: '1.5rem', borderRadius: '50%', background: 'var(--zx-primary)', color: 'var(--zx-background)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.75rem', fontWeight: 600 }}>3</span>
                  <span style={{ opacity: 0.9, fontWeight: 600 }}>Customize & Ship</span>
                </div>
              </div>
            </Surface>
          </div>
        </div>

        {/* CODE BLOCK EXPANDER */}
        {copyMode && (
          <Surface variant="card" style={{ marginBottom: '6rem', padding: 0, overflow: 'hidden', border: '1px solid var(--zx-elevated)' }}>
            <div style={{ padding: '1rem 1.5rem', background: 'var(--zx-elevated)', borderBottom: '1px solid var(--zx-elevated)', display: 'flex', justifyContent: 'space-between' }}>
              <div style={{ fontWeight: 600 }}>{copyMode === 'blueprint' ? 'Usage' : 'Full Source Code'}</div>
              <button onClick={() => {
                navigator.clipboard.writeText(copyMode === 'blueprint' ? blueprintCode : sourceCode);
                track('Copied to Clipboard', { type: copyMode, blueprintId: blueprint.id });
                alert('Copied to clipboard!');
              }} style={{ background: 'transparent', border: 'none', color: 'var(--zx-primary)', fontWeight: 600, cursor: 'pointer' }}>
                Copy to Clipboard
              </button>
            </div>
            <pre style={{ margin: 0, padding: '2rem', background: 'var(--zx-background)', overflowX: 'auto', fontSize: '0.875rem', fontFamily: 'monospace', lineHeight: 1.5, maxHeight: '600px', overflowY: 'auto' }}>
              {copyMode === 'blueprint' ? blueprintCode : sourceCode}
            </pre>
          </Surface>
        )}

        {/* SIMILAR EXPERIENCES */}
        {similarExperiences.length > 0 && (
          <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '2rem' }}>
              <h2 style={{ fontSize: '2rem', fontWeight: 700, margin: 0 }}>Similar Experiences</h2>
            </div>
            
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '2rem' }}>
              {similarExperiences.map(bp => (
                <Link key={bp.id} href={`/experiences/${bp.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                  <Surface variant="card" style={{ padding: 0, overflow: 'hidden', border: '1px solid var(--zx-elevated)', transition: 'transform 0.2s' }}>
                    <div style={{ height: '200px', background: 'var(--zx-elevated)', backgroundImage: `url(${bp.previewImage})`, backgroundSize: 'cover', backgroundPosition: 'top center' }} />
                    <div style={{ padding: '1.5rem' }}>
                      <h3 style={{ fontSize: '1.25rem', fontWeight: 600, margin: '0 0 0.5rem' }}>{bp.title}</h3>
                      <span style={{ fontSize: '0.75rem', padding: '0.2rem 0.5rem', background: 'var(--zx-elevated)', borderRadius: 'var(--zx-radius-sm)', textTransform: 'capitalize' }}>
                        {bp.theme.replace('-', ' ')}
                      </span>
                    </div>
                  </Surface>
                </Link>
              ))}
            </div>
          </div>
        )}
        
      </div>
    </div>
  );
}
```

## apps/website/src/app/experiences/[id]/page.tsx

```tsx
import fs from 'node:fs';
import path from 'node:path';
import { getBlueprint } from '@zenixui/blueprints';
import { notFound } from 'next/navigation';
import { BlueprintClientView } from './BlueprintClientView';

export default async function BlueprintDetail({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const blueprint = getBlueprint(id);
  
  if (!blueprint) {
    notFound();
  }

  // Read actual source code
  // Website runs from apps/website, so we go up two levels to reach monorepo root
  const fullPath = path.join(process.cwd(), '../..', blueprint.sourcePath);
  let sourceCode = '';
  try {
    sourceCode = fs.readFileSync(fullPath, 'utf-8');
  } catch (err) {
    sourceCode = `// Error reading file: ${fullPath}\n// Check if path exists.`;
  }

  return <BlueprintClientView id={id} sourceCode={sourceCode} />;
}
```

## apps/website/src/app/experiences/page.tsx

```tsx
import { useState, useMemo } from 'react';
import { Surface, Button, Input } from '@zenixui/components';
import { blueprints } from '@zenixui/blueprints';
import Link from 'next/link';

export default function ExperiencesPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'All Experiences' },
    { id: 'landing', label: 'Landing Pages' },
    { id: 'dashboard', label: 'Dashboards' },
    { id: 'portfolio', label: 'Portfolios' },
    { id: 'blog', label: 'Blogs' },
    { id: 'auth', label: 'Authentication' },
    { id: 'newsletter', label: 'Newsletters' },
    { id: 'contact', label: 'Contact Forms' },
  ];

  // Derive counts
  const counts = useMemo(() => {
    const map: Record<string, number> = { all: blueprints.length };
    categories.forEach(c => {
      if (c.id !== 'all') {
        map[c.id] = blueprints.filter(bp => bp.category === c.id).length;
      }
    });
    return map;
  }, []);

  // Filter blueprints
  const filteredBlueprints = useMemo(() => {
    let result = blueprints;
    
    // Category filter
    if (activeCategory !== 'all') {
      result = result.filter(bp => bp.category === activeCategory);
    }

    // Search filter
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      result = result.filter(bp => {
        const searchable = [
          bp.title,
          bp.description || '',
          bp.category,
          bp.theme,
          ...bp.tags
        ].join(' ').toLowerCase();
        return searchable.includes(query);
      });
    }

    return result;
  }, [searchQuery, activeCategory]);

  return (
    <div style={{ padding: '4rem 2rem 10rem', maxWidth: '1400px', margin: '0 auto' }}>
      <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
        <h1 style={{ fontSize: '3.5rem', fontWeight: 800, margin: '0 0 1rem', letterSpacing: '-0.04em' }}>
          Experience Gallery
        </h1>
        <p style={{ fontSize: '1.25rem', opacity: 0.6, margin: '0 auto', maxWidth: '600px', lineHeight: 1.6 }}>
          Browse complete, production-ready website templates. Find an experience you love, copy the blueprint, and make it your own.
        </p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '250px 1fr', gap: '4rem', alignItems: 'start' }}>
        
        {/* SIDEBAR */}
        <aside style={{ position: 'sticky', top: '2rem' }}>
          <div style={{ marginBottom: '2rem' }}>
            <Input 
              placeholder="Search experiences..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              style={{ width: '100%' }}
            />
          </div>

          <nav style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            {categories.map(category => {
              if (counts[category.id] === 0) return null;
              
              const isActive = activeCategory === category.id;
              
              return (
                <button 
                  key={category.id}
                  onClick={() => { setActiveCategory(category.id); setSearchQuery(''); }}
                  style={{ 
                    display: 'flex', 
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    padding: '0.75rem 1rem', 
                    background: isActive ? 'var(--zx-elevated)' : 'transparent',
                    border: 'none',
                    borderRadius: 'var(--zx-radius-sm)',
                    color: isActive ? 'var(--zx-primary)' : 'inherit',
                    fontWeight: isActive ? 600 : 400,
                    opacity: isActive ? 1 : 0.7,
                    cursor: 'pointer',
                    textAlign: 'left',
                    transition: 'all 0.2s'
                  }}
                >
                  <span>{category.label}</span>
                  <span style={{ fontSize: '0.75rem', opacity: 0.5, fontWeight: 600 }}>{counts[category.id]}</span>
                </button>
              );
            })}
          </nav>
        </aside>

        {/* CONTENT */}
        <main>
          {filteredBlueprints.length === 0 ? (
            <Surface variant="card" style={{ padding: '4rem 2rem', textAlign: 'center', border: '1px solid var(--zx-elevated)', borderStyle: 'dashed' }}>
              <div style={{ fontSize: '3rem', marginBottom: '1rem', opacity: 0.2 }}>🔍</div>
              <h3 style={{ fontSize: '1.5rem', fontWeight: 600, margin: '0 0 1rem' }}>No matching experiences.</h3>
              <p style={{ opacity: 0.6, marginBottom: '2rem' }}>We couldn't find any blueprints matching your search criteria.</p>
              <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
                <Button variant="default" onClick={() => { setSearchQuery(''); setActiveCategory('dashboard'); }}>Try Dashboards</Button>
                <Button variant="glass" onClick={() => { setSearchQuery(''); setActiveCategory('portfolio'); }}>Try Portfolios</Button>
                <Button variant="glass" onClick={() => { setSearchQuery(''); setActiveCategory('all'); }}>Clear Search</Button>
              </div>
            </Surface>
          ) : (
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '2rem' }}>
              {filteredBlueprints.map(blueprint => (
                <Surface variant="card" key={blueprint.id} style={{ padding: '0', overflow: 'hidden', border: '1px solid var(--zx-elevated)', display: 'flex', flexDirection: 'column' }}>
                  <div style={{ height: '220px', background: 'var(--zx-elevated)', position: 'relative', backgroundImage: `url(${blueprint.previewImage})`, backgroundSize: 'cover', backgroundPosition: 'top center' }}>
                    <div style={{ position: 'absolute', top: '1rem', right: '1rem', background: 'var(--zx-background)', padding: '0.25rem 0.75rem', borderRadius: 'var(--zx-radius-round)', fontSize: '0.75rem', fontWeight: 600, textTransform: 'capitalize' }}>
                      {blueprint.theme.replace('-', ' ')}
                    </div>
                  </div>
                  <div style={{ padding: '1.5rem', flex: 1, display: 'flex', flexDirection: 'column' }}>
                    <h3 style={{ fontSize: '1.25rem', fontWeight: 600, margin: '0 0 0.5rem' }}>{blueprint.title}</h3>
                    <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '1.5rem' }}>
                      {blueprint.tags.map(tag => (
                        <span key={tag} style={{ fontSize: '0.75rem', padding: '0.2rem 0.5rem', background: 'var(--zx-elevated)', borderRadius: 'var(--zx-radius-sm)', opacity: 0.8 }}>
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div style={{ marginTop: 'auto', display: 'flex', gap: '0.5rem' }}>
                      <Link href={`/experiences/${blueprint.id}`} style={{ flex: 1, textDecoration: 'none' }}>
                        <Button fullWidth>View Details</Button>
                      </Link>
                    </div>
                  </div>
                </Surface>
              ))}
            </div>
          )}
        </main>
        
      </div>
    </div>
  );
}
```

## apps/website/src/app/globals.css

```text
/* ZenixUI Global Reset */
html, body {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

*, *:before, *:after {
  box-sizing: inherit;
}

a {
  color: inherit;
  text-decoration: none;
}
a:hover {
  opacity: 1 !important;
}
```

## apps/website/src/app/layout.tsx

```tsx
import type { Metadata } from 'next';
import { Analytics } from '@vercel/analytics/react';
import { Providers } from '../components/Providers';
import './globals.css';

export const metadata: Metadata = {
  title: 'ZenixUI',
  description: 'Build Entire Experiences, Not Just Components.',
  metadataBase: new URL('https://zenixui.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    url: 'https://zenixui.com',
    title: 'ZenixUI | The Experience Ecosystem',
    description: 'Instantly adopt complete, beautiful React design systems. Distribute full experiences, not atomic components.',
    siteName: 'ZenixUI',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@zenixui',
    creator: '@zenixui',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body style={{ margin: 0, padding: 0 }}>
        <Providers>
          <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
            {/* Minimal Global Nav */}
            <nav style={{ padding: '1.5rem 2rem', display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid var(--zx-elevated)', position: 'relative', zIndex: 100, background: 'var(--zx-background)' }}>
              <div style={{ fontWeight: 700, fontSize: '1.25rem', letterSpacing: '-0.02em' }}>
                ZenixUI
              </div>
              <div style={{ display: 'flex', gap: '2rem', fontSize: '0.875rem', fontWeight: 600 }}>
                <a href="/themes" style={{ color: 'inherit', textDecoration: 'none', opacity: 0.8 }}>Themes</a>
                <a href="/experiences" style={{ color: 'inherit', textDecoration: 'none', opacity: 0.8 }}>Experiences</a>
                <a href="/studio" style={{ color: 'inherit', textDecoration: 'none', opacity: 0.8 }}>Studio</a>
                <a href="/docs" style={{ color: 'inherit', textDecoration: 'none', opacity: 0.8 }}>Docs</a>
                <a href="/roadmap" style={{ color: 'inherit', textDecoration: 'none', opacity: 0.8 }}>Roadmap</a>
                <a href="/compare" style={{ color: 'var(--zx-primary)', textDecoration: 'none', fontWeight: 700 }}>Compare</a>
              </div>
            </nav>
            <main style={{ flex: 1, position: 'relative' }}>
              {children}
            </main>
          </div>
        </Providers>
        <Analytics />
      </body>
    </html>
  );
}
```

## apps/website/src/app/not-found.tsx

```tsx
import Link from 'next/link';

export default function NotFound() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '80vh', textAlign: 'center', padding: '2rem' }}>
      <h1 style={{ fontSize: '6rem', fontWeight: 800, margin: '0 0 1rem', letterSpacing: '-0.05em', background: 'linear-gradient(to right, var(--zx-primary), var(--zx-primary-light))', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
        404
      </h1>
      <h2 style={{ fontSize: '2rem', fontWeight: 600, margin: '0 0 1.5rem', letterSpacing: '-0.02em' }}>
        Experience Not Found
      </h2>
      <p style={{ fontSize: '1.125rem', opacity: 0.7, maxWidth: '500px', margin: '0 auto 3rem', lineHeight: 1.6 }}>
        We couldn't find the page or blueprint you were looking for. It might have been moved or removed from the registry.
      </p>
      <div style={{ display: 'flex', gap: '1rem' }}>
        <Link href="/" style={{ padding: '0.75rem 1.5rem', background: 'var(--zx-primary)', color: 'var(--zx-background)', textDecoration: 'none', borderRadius: 'var(--zx-radius-sm)', fontWeight: 600 }}>
          Return Home
        </Link>
        <Link href="/experiences" style={{ padding: '0.75rem 1.5rem', background: 'var(--zx-elevated)', color: 'inherit', textDecoration: 'none', borderRadius: 'var(--zx-radius-sm)', fontWeight: 600 }}>
          Browse Experiences
        </Link>
      </div>
    </div>
  );
}
```

## apps/website/src/app/page.tsx

```tsx
'use client';

import { Surface } from '@zenixui/components';
import { Experience } from '@zenixui/react';
import Link from 'next/link';
import { blueprints } from '@zenixui/blueprints';

export default function Home() {
  const featuredExperience = blueprints.find(bp => bp.id === 'night-city-portfolio');
  const FeaturedComponent = featuredExperience?.component;
  const featuredThemes = [
    { id: 'zenix', name: 'Zenix', tagline: 'Premium SaaS', color: '#6366f1' },
    { id: 'ocean', name: 'Ocean', tagline: 'Creative & Fluid', color: '#0ea5e9' },
    { id: 'night-city', name: 'Night City', tagline: 'Cyberpunk Developer', color: '#22c55e' },
    { id: 'autumn', name: 'Autumn', tagline: 'Warm Storytelling', color: '#d97706' }
  ];

  return (
    <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '6rem 2rem 10rem' }}>
      
      {/* HERO */}
      <section style={{ textAlign: 'center', marginBottom: '8rem' }}>
        <h1 style={{ fontSize: '4.5rem', fontWeight: 800, letterSpacing: '-0.04em', lineHeight: 1.1, marginBottom: '1.5rem', marginInline: 'auto', maxWidth: '800px' }}>
          Build Entire Experiences.<br/>
          <span style={{ opacity: 0.5 }}>Not Components.</span>
        </h1>
        <p style={{ fontSize: '1.5rem', opacity: 0.7, margin: '0 auto 3rem', maxWidth: '600px', lineHeight: 1.5 }}>
          ZenixUI provides complete website templates, powered by 4 distinct design systems, that you can copy directly into your React apps.
        </p>
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
          <Link href="/experiences" style={{ padding: '1rem 2rem', background: 'var(--zx-primary)', color: 'var(--zx-background)', borderRadius: 'var(--zx-radius-sm)', fontWeight: 600, textDecoration: 'none', fontSize: '1.125rem' }}>
            Explore Experiences
          </Link>
          <Link href="/studio" style={{ padding: '1rem 2rem', background: 'var(--zx-elevated)', color: 'var(--zx-primary)', borderRadius: 'var(--zx-radius-sm)', fontWeight: 600, textDecoration: 'none', fontSize: '1.125rem' }}>
            Open Theme Studio
          </Link>
        </div>
      </section>

      {/* FEATURED EXPERIENCE */}
      <section style={{ marginBottom: '8rem' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '2rem' }}>
          <div>
            <h2 style={{ fontSize: '2rem', fontWeight: 700, margin: '0 0 0.5rem' }}>Featured Experience</h2>
            <p style={{ opacity: 0.6, margin: 0 }}>The Night City Portfolio.</p>
          </div>
          <Link href={`/experiences/${featuredExperience?.id}`} style={{ fontWeight: 600, color: 'var(--zx-primary)', textDecoration: 'none' }}>
            View Full Blueprint →
          </Link>
        </div>
        <div style={{ 
          position: 'relative',
          width: '100%', 
          height: '600px', 
          background: 'var(--zx-elevated)', 
          borderRadius: 'var(--zx-radius-lg)', 
          overflow: 'hidden',
          border: '1px solid var(--zx-elevated)'
        }}>
          <div style={{ position: 'absolute', top: '1rem', left: '1rem', zIndex: 10 }}>
            <span style={{ fontSize: '0.75rem', fontWeight: 600, padding: '0.25rem 0.75rem', background: 'var(--zx-primary)', color: 'var(--zx-background)', borderRadius: 'var(--zx-radius-round)', boxShadow: 'var(--zx-shadow-sm)' }}>
              Live Preview
            </span>
            <span style={{ marginLeft: '0.5rem', fontSize: '0.75rem', fontWeight: 600, padding: '0.25rem 0.75rem', background: 'var(--zx-surface)', color: 'var(--zx-primary)', borderRadius: 'var(--zx-radius-round)', border: '1px solid var(--zx-elevated)', boxShadow: 'var(--zx-shadow-sm)' }}>
              Interactive
            </span>
          </div>
          <div style={{ width: '100%', height: '100%', overflowY: 'auto' }}>
            {FeaturedComponent && featuredExperience ? (
              <Experience preset={featuredExperience.theme}>
                <FeaturedComponent />
              </Experience>
            ) : null}
          </div>
        </div>
      </section>

      {/* EXPLORE EXPERIENCES */}
      <section style={{ marginBottom: '8rem' }}>
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <h2 style={{ fontSize: '3rem', fontWeight: 700, margin: '0 0 1rem', letterSpacing: '-0.03em' }}>
            A Library of Complete Websites
          </h2>
          <p style={{ opacity: 0.6, fontSize: '1.25rem', maxWidth: '600px', margin: '0 auto' }}>
            Browse and copy fully functional pages, not just the building blocks.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1.5rem' }}>
          {['Landing Pages', 'Portfolios', 'Dashboards', 'Blogs'].map((category, index) => {
            const idMap: any = { 'Landing Pages': 'landing', 'Portfolios': 'portfolio', 'Dashboards': 'dashboard', 'Blogs': 'blog' };
            const topBp = blueprints.find(bp => bp.category === idMap[category]);
            return (
              <Link key={category} href={`/experiences?category=${idMap[category]}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                <Surface variant="card" style={{ padding: '1rem', border: '1px solid var(--zx-elevated)', height: '100%' }}>
                  <div style={{ width: '100%', height: '160px', background: 'var(--zx-elevated)', borderRadius: 'var(--zx-radius-sm)', marginBottom: '1rem', backgroundImage: `url(${topBp?.previewImage})`, backgroundSize: 'cover', backgroundPosition: 'top center' }} />
                  <h3 style={{ fontSize: '1.125rem', fontWeight: 600, margin: '0 0 0.25rem' }}>{category}</h3>
                  <p style={{ opacity: 0.5, fontSize: '0.875rem', margin: 0 }}>View all →</p>
                </Surface>
              </Link>
            )
          })}
        </div>
      </section>

      {/* FEATURED THEMES */}
      <section>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '3rem' }}>
          <div>
            <h2 style={{ fontSize: '2.5rem', fontWeight: 700, margin: '0 0 0.5rem', letterSpacing: '-0.03em' }}>Theme Ecosystems</h2>
            <p style={{ opacity: 0.6, margin: 0, fontSize: '1.125rem' }}>One component library. Infinite design languages.</p>
          </div>
          <Link href="/themes" style={{ fontWeight: 600, color: 'var(--zx-primary)', textDecoration: 'none' }}>
            Browse All Themes →
          </Link>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '2rem' }}>
          {featuredThemes.map(theme => (
            <Surface variant="card" key={theme.id} style={{ padding: '2rem', display: 'flex', alignItems: 'center', gap: '2rem', border: '1px solid var(--zx-elevated)' }}>
              <div style={{ width: '80px', height: '80px', borderRadius: theme.id === 'night-city' ? '0px' : theme.id === 'ocean' ? '50%' : '16px', background: theme.color, flexShrink: 0 }} />
              <div>
                <h3 style={{ fontSize: '1.5rem', fontWeight: 700, margin: '0 0 0.25rem' }}>{theme.name}</h3>
                <p style={{ opacity: 0.6, margin: '0 0 1rem' }}>{theme.tagline}</p>
                <Link href={`/themes`} style={{ fontSize: '0.875rem', fontWeight: 600, color: theme.color, textDecoration: 'none' }}>
                  Explore System →
                </Link>
              </div>
            </Surface>
          ))}
        </div>
      </section>

    </div>
  );
}
```

## apps/website/src/app/roadmap/page.tsx

```tsx
import { Surface } from '@zenixui/components';

const ROADMAP = {
  current: [
    { title: 'Atomic Components', status: 'Stable', description: 'Extracted foundation (Input, Button, Textarea, Badge).' },
    { title: 'Theme Switching', status: 'Stable', description: 'React Context API for dynamic theme swapping.' },
    { title: 'Blueprint Registry', status: 'Stable', description: '28 high-fidelity templates across 4 themes.' },
    { title: 'Product Hardening', status: 'In Progress', description: 'Comprehensive documentation, previews, and theme customization.' }
  ],
  upcoming: [
    { title: 'Theme Studio', status: 'Planned', description: 'Interactive playground to customize accents, radii, and fonts with JSON export.' },
    { title: 'CLI Tooling', status: 'Planned', description: 'npx zenix-ui add <blueprint> to seamlessly copy code into projects.' },
    { title: 'Theme Marketplace', status: 'Planned', description: 'Ecosystem for developers to package and share custom ZenixUI themes.' },
    { title: 'Advanced Blueprints', status: 'Planned', description: 'E-commerce, Kanban boards, and multi-step forms.' }
  ],
  experimental: [
    { title: 'Figma to Zenix', status: 'Research', description: 'Plugin to map Figma tokens directly to ZenixUI ThemeConfig.' },
    { title: 'Native View Transitions', status: 'Research', description: 'Deep integration with the View Transitions API for theme morphing.' }
  ]
};

export default function RoadmapPage() {
  return (
    <div style={{ padding: '6rem 2rem 10rem', maxWidth: '800px', margin: '0 auto' }}>
      <div style={{ textAlign: 'center', marginBottom: '6rem' }}>
        <h1 style={{ fontSize: '3rem', fontWeight: 700, margin: '0 0 1rem', letterSpacing: '-0.03em' }}>
          Roadmap
        </h1>
        <p style={{ fontSize: '1.25rem', opacity: 0.6, margin: '0 auto', lineHeight: 1.6 }}>
          Building ZenixUI in public. See what we're working on and where we're heading.
        </p>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '4rem' }}>
        
        <section>
          <h2 style={{ fontSize: '2rem', fontWeight: 600, margin: '0 0 2rem', color: 'var(--zx-primary)' }}>Current</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {ROADMAP.current.map(item => (
              <Surface variant="card" key={item.title} style={{ padding: '1.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', border: '1px solid var(--zx-elevated)' }}>
                <div>
                  <h3 style={{ fontSize: '1.125rem', fontWeight: 600, margin: '0 0 0.5rem' }}>{item.title}</h3>
                  <p style={{ opacity: 0.7, margin: 0, fontSize: '0.875rem' }}>{item.description}</p>
                </div>
                <div style={{ fontSize: '0.75rem', fontWeight: 600, textTransform: 'uppercase', padding: '0.25rem 0.75rem', background: 'var(--zx-primary)', color: 'var(--zx-background)', borderRadius: 'var(--zx-radius-round)' }}>
                  {item.status}
                </div>
              </Surface>
            ))}
          </div>
        </section>

        <section>
          <h2 style={{ fontSize: '2rem', fontWeight: 600, margin: '0 0 2rem', opacity: 0.8 }}>Upcoming</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {ROADMAP.upcoming.map(item => (
              <Surface variant="card" key={item.title} style={{ padding: '1.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', border: '1px dashed var(--zx-elevated)', background: 'transparent' }}>
                <div>
                  <h3 style={{ fontSize: '1.125rem', fontWeight: 600, margin: '0 0 0.5rem', opacity: 0.8 }}>{item.title}</h3>
                  <p style={{ opacity: 0.5, margin: 0, fontSize: '0.875rem' }}>{item.description}</p>
                </div>
              </Surface>
            ))}
          </div>
        </section>

        <section>
          <h2 style={{ fontSize: '2rem', fontWeight: 600, margin: '0 0 2rem', opacity: 0.6 }}>Experimental</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {ROADMAP.experimental.map(item => (
              <Surface variant="card" key={item.title} style={{ padding: '1.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', border: '1px solid transparent', background: 'var(--zx-elevated)' }}>
                <div>
                  <h3 style={{ fontSize: '1.125rem', fontWeight: 600, margin: '0 0 0.5rem', opacity: 0.6 }}>{item.title}</h3>
                  <p style={{ opacity: 0.4, margin: 0, fontSize: '0.875rem' }}>{item.description}</p>
                </div>
                <div style={{ fontSize: '0.75rem', fontWeight: 600, textTransform: 'uppercase', opacity: 0.5 }}>
                  {item.status}
                </div>
              </Surface>
            ))}
          </div>
        </section>

      </div>
    </div>
  );
}
```

## apps/website/src/app/sitemap.ts

```typescript
import { MetadataRoute } from 'next';
import { blueprints } from '@zenixui/blueprints';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://zenixui.com';

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: baseUrl, lastModified: new Date() },
    { url: \`\${baseUrl}/themes\`, lastModified: new Date() },
    { url: \`\${baseUrl}/experiences\`, lastModified: new Date() },
    { url: \`\${baseUrl}/studio\`, lastModified: new Date() },
    { url: \`\${baseUrl}/docs\`, lastModified: new Date() },
    { url: \`\${baseUrl}/docs/cli\`, lastModified: new Date() },
    { url: \`\${baseUrl}/compare\`, lastModified: new Date() },
    { url: \`\${baseUrl}/roadmap\`, lastModified: new Date() },
  ];

  const experienceRoutes: MetadataRoute.Sitemap = blueprints.map((bp) => ({
    url: \`\${baseUrl}/experiences/\${bp.id}\`,
    lastModified: new Date(bp.createdAt),
  }));

  return [...staticRoutes, ...experienceRoutes];
}
```

## apps/website/src/app/studio/page.tsx

```tsx
'use client';

import { useState } from 'react';
import { Surface, Button, Input, Badge } from '@zenixui/components';
import { Experience } from '@zenixui/react';
import type { ThemeConfig } from '@zenixui/core';
import { ZenixDashboard } from '@zenixui/blueprints';

const PRESETS: Record<string, ThemeConfig> = {
  Zenix: { name: 'Zenix', base: 'zenix', accent: '#6366f1', radius: '8px', motion: 'normal', density: 'comfortable', typography: 'Inter' },
  Linear: { name: 'Linear', base: 'zenix', accent: '#5e6ad2', radius: '4px', motion: 'subtle', density: 'compact', typography: 'Inter' },
  Apple: { name: 'Apple', base: 'ocean', accent: '#0066cc', radius: '16px', motion: 'immersive', density: 'spacious', typography: 'San Francisco, sans-serif' },
  Vercel: { name: 'Vercel', base: 'zenix', accent: '#000000', radius: '6px', motion: 'subtle', density: 'comfortable', typography: 'Geist, sans-serif' },
  Stripe: { name: 'Stripe', base: 'ocean', accent: '#635bff', radius: '8px', motion: 'normal', density: 'comfortable', typography: 'Helvetica Neue' },
  Notion: { name: 'Notion', base: 'zenix', accent: '#000000', radius: '4px', motion: 'none', density: 'comfortable', typography: 'ui-sans-serif, system-ui' },
  Raycast: { name: 'Raycast', base: 'ocean', accent: '#ff6363', radius: '12px', motion: 'subtle', density: 'compact', typography: 'Inter' },
};

export default function ThemeStudio() {
  const [config, setConfig] = useState<ThemeConfig>(PRESETS['Linear']);

  const handleExport = () => {
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
                  onClick={() => setConfig(PRESETS[key])}
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
```

## apps/website/src/app/themes/page.tsx

```tsx
import { Surface } from '@zenixui/components';
import Link from 'next/link';
import { getBlueprintsByCategory } from '@zenixui/blueprints';

const THEMES = [
  { id: 'zenix', name: 'Zenix', tagline: 'The Foundation', description: 'Clean, professional, and accessible. Designed for scalable B2B applications and dashboards.', accent: '#6366f1', radius: '8px', typography: 'Inter' },
  { id: 'ocean', name: 'Ocean', tagline: 'Deep & Fluid', description: 'Immersive glassmorphism with heavy blur effects. Ideal for consumer apps and creative portfolios.', accent: '#0ea5e9', radius: '24px', typography: 'Outfit' },
  { id: 'night-city', name: 'Night City', tagline: 'Terminal Hacker', description: 'High contrast, neon accents, and zero border radius. Perfect for developer tools and CLI websites.', accent: '#22c55e', radius: '0px', typography: 'Fira Code' },
  { id: 'autumn', name: 'Autumn', tagline: 'Warm & Organic', description: 'Elegant serifs, paper textures, and subtle transitions. Beautiful for blogs, journals, and publishing.', accent: '#d97706', radius: '12px', typography: 'Georgia' },
];

export default function ThemesPage() {
  return (
    <div style={{ padding: '6rem 2rem 10rem', maxWidth: '1400px', margin: '0 auto' }}>
      <div style={{ textAlign: 'center', marginBottom: '6rem' }}>
        <h1 style={{ fontSize: '3rem', fontWeight: 700, margin: '0 0 1rem', letterSpacing: '-0.03em' }}>
          Our Design Systems
        </h1>
        <p style={{ fontSize: '1.25rem', opacity: 0.6, margin: '0 auto', maxWidth: '600px', lineHeight: 1.6 }}>
          ZenixUI isn't a single theme. It's a collection of completely distinct design languages. Write your logic once, and switch themes instantly.
        </p>
      </div>

      <div style={{ display: 'grid', gap: '4rem' }}>
        {THEMES.map(theme => {
          const themeBlueprints = getBlueprintsByCategory('landing').filter(bp => bp.theme === theme.id) || [];
          
          return (
            <Surface variant="card" key={theme.id} style={{ padding: '3rem', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center', border: '1px solid var(--zx-elevated)' }}>
              <div>
                <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', marginBottom: '1rem' }}>
                  <div style={{ width: '24px', height: '24px', borderRadius: theme.radius, background: theme.accent }} />
                  <h2 style={{ fontSize: '2rem', fontWeight: 700, margin: 0 }}>{theme.name}</h2>
                </div>
                <h3 style={{ fontSize: '1.25rem', fontWeight: 600, color: theme.accent, margin: '0 0 1rem' }}>{theme.tagline}</h3>
                <p style={{ opacity: 0.7, lineHeight: 1.6, marginBottom: '2rem' }}>{theme.description}</p>
                
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '2rem', fontSize: '0.875rem' }}>
                  <div>
                    <div style={{ opacity: 0.5, marginBottom: '0.25rem' }}>Primary Accent</div>
                    <div style={{ fontWeight: 600 }}>{theme.accent}</div>
                  </div>
                  <div>
                    <div style={{ opacity: 0.5, marginBottom: '0.25rem' }}>Base Radius</div>
                    <div style={{ fontWeight: 600 }}>{theme.radius}</div>
                  </div>
                  <div>
                    <div style={{ opacity: 0.5, marginBottom: '0.25rem' }}>Typography</div>
                    <div style={{ fontWeight: 600 }}>{theme.typography}</div>
                  </div>
                </div>

                <Link href={`/experiences?theme=${theme.id}`} style={{ display: 'inline-block', padding: '0.75rem 1.5rem', background: 'var(--zx-elevated)', color: 'var(--zx-primary)', borderRadius: 'var(--zx-radius-sm)', fontWeight: 600, textDecoration: 'none' }}>
                  View {theme.name} Experiences →
                </Link>
              </div>

              <div style={{ background: 'var(--zx-surface)', borderRadius: 'var(--zx-radius-lg)', overflow: 'hidden', height: '400px', position: 'relative', border: '1px solid var(--zx-elevated)' }}>
                 {themeBlueprints.length > 0 ? (
                   <div style={{ width: '100%', height: '100%', backgroundImage: `url(${themeBlueprints[0].previewImage})`, backgroundSize: 'cover', backgroundPosition: 'top center' }} />
                 ) : (
                   <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', opacity: 0.5 }}>
                     No preview available
                   </div>
                 )}
              </div>
            </Surface>
          );
        })}
      </div>
    </div>
  );
}
```

## apps/website/src/components/Providers.tsx

```tsx
'use client';

import { Experience } from '@zenixui/react';
import '@zenixui/react/styles.css';
import '@zenixui/pack-zenix';
import '@zenixui/pack-ocean';
import '@zenixui/pack-night-city';
import '@zenixui/pack-autumn';

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <Experience preset="zenix">
      {children}
    </Experience>
  );
}
```

## apps/website/test-results/.last-run.json

```json
{
  "status": "passed",
  "failedTests": []
}
```

## apps/website/tests/audit.spec.ts

```typescript
import { test, expect } from '@playwright/test';
import path from 'path';

test.describe('Product Readiness Audit', () => {
  const routes = [
    { path: '/', name: 'home' },
    { path: '/experiences', name: 'experiences' },
    { path: '/themes', name: 'themes' },
    { path: '/studio', name: 'studio' },
    { path: '/docs', name: 'docs' },
    { path: '/docs/components', name: 'components' },
    { path: '/roadmap', name: 'roadmap' }
  ];

  for (const route of routes) {
    test(`capture ${route.name}`, async ({ page }) => {
      // Navigate to the route
      await page.goto(`http://localhost:3000${route.path}`);
      
      // Wait for any animations to settle
      await page.waitForTimeout(1000);

      // Save screenshot directly to the conversation's scratch directory
      const screenshotPath = `/Users/vinnu/.gemini/antigravity-ide/brain/2199795e-56dd-4c00-a63f-6f665348e160/scratch/${route.name}.png`;
      await page.screenshot({ path: screenshotPath, fullPage: true });
    });
  }
});
```

## apps/website/tests/generate-previews.spec.ts

```typescript
import { test } from '@playwright/test';
import { blueprints } from '@zenixui/blueprints';

test.describe('Generate Blueprint Previews', () => {
  // Increase timeout since building 28 pages in Next.js dev mode might take time
  test.setTimeout(300000); 

  test('generate screenshots for all blueprints', async ({ page }) => {
    for (const bp of blueprints) {
      console.log(`Generating preview for ${bp.id}...`);
      await page.goto(`/blueprints/${bp.id}`);
      
      // Wait for the component to mount and any animations to settle
      await page.waitForTimeout(2000);

      // Locate the Experience container
      const experienceContainer = page.locator('.zx-experience').first();
      
      // Capture screenshot
      await experienceContainer.screenshot({ path: `public/previews/${bp.id}.png` });
    }
  });
});
```

## apps/website/tsconfig.json

```json
{
  "compilerOptions": {
    "target": "ES2017",
    "lib": ["dom", "dom.iterable", "esnext"],
    "allowJs": true,
    "skipLibCheck": true,
    "strict": true,
    "noEmit": true,
    "esModuleInterop": true,
    "module": "esnext",
    "moduleResolution": "bundler",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "jsx": "react-jsx",
    "incremental": true,
    "plugins": [
      {
        "name": "next"
      }
    ],
    "paths": {
      "@/*": ["./src/*"]
    }
  },
  "include": [
    "next-env.d.ts",
    "**/*.ts",
    "**/*.tsx",
    ".next/types/**/*.ts",
    ".next/dev/types/**/*.ts",
    "**/*.mts"
  ],
  "exclude": ["node_modules"]
}
```

## apps/website/tsconfig.tsbuildinfo

```text
{"fileNames":["../../node_modules/.pnpm/typescript@5.9.3/node_modules/typescript/lib/lib.es5.d.ts","../../node_modules/.pnpm/typescript@5.9.3/node_modules/typescript/lib/lib.es2015.d.ts","../../node_modules/.pnpm/typescript@5.9.3/node_modules/typescript/lib/lib.es2016.d.ts","../../node_modules/.pnpm/typescript@5.9.3/node_modules/typescript/lib/lib.es2017.d.ts","../../node_modules/.pnpm/typescript@5.9.3/node_modules/typescript/lib/lib.es2018.d.ts","../../node_modules/.pnpm/typescript@5.9.3/node_modules/typescript/lib/lib.es2019.d.ts","../../node_modules/.pnpm/typescript@5.9.3/node_modules/typescript/lib/lib.es2020.d.ts","../../node_modules/.pnpm/typescript@5.9.3/node_modules/typescript/lib/lib.es2021.d.ts","../../node_modules/.pnpm/typescript@5.9.3/node_modules/typescript/lib/lib.es2022.d.ts","../../node_modules/.pnpm/typescript@5.9.3/node_modules/typescript/lib/lib.es2023.d.ts","../../node_modules/.pnpm/typescript@5.9.3/node_modules/typescript/lib/lib.es2024.d.ts","../../node_modules/.pnpm/typescript@5.9.3/node_modules/typescript/lib/lib.esnext.d.ts","../../node_modules/.pnpm/typescript@5.9.3/node_modules/typescript/lib/lib.dom.d.ts","../../node_modules/.pnpm/typescript@5.9.3/node_modules/typescript/lib/lib.dom.iterable.d.ts","../../node_modules/.pnpm/typescript@5.9.3/node_modules/typescript/lib/lib.es2015.core.d.ts","../../node_modules/.pnpm/typescript@5.9.3/node_modules/typescript/lib/lib.es2015.collection.d.ts","../../node_modules/.pnpm/typescript@5.9.3/node_modules/typescript/lib/lib.es2015.generator.d.ts","../../node_modules/.pnpm/typescript@5.9.3/node_modules/typescript/lib/lib.es2015.iterable.d.ts","../../node_modules/.pnpm/typescript@5.9.3/node_modules/typescript/lib/lib.es2015.promise.d.ts","../../node_modules/.pnpm/typescript@5.9.3/node_modules/typescript/lib/lib.es2015.proxy.d.ts","../../node_modules/.pnpm/typescript@5.9.3/node_modules/typescript/lib/lib.es2015.reflect.d.ts","../../node_modules/.pnpm/typescript@5.9.3/node_modules/typescript/lib/lib.es2015.symbol.d.ts","../../node_modules/.pnpm/typescript@5.9.3/node_modules/typescript/lib/lib.es2015.symbol.wellknown.d.ts","../../node_modules/.pnpm/typescript@5.9.3/node_modules/typescript/lib/lib.es2016.array.include.d.ts","../../node_modules/.pnpm/typescript@5.9.3/node_modules/typescript/lib/lib.es2016.intl.d.ts","../../node_modules/.pnpm/typescript@5.9.3/node_modules/typescript/lib/lib.es2017.arraybuffer.d.ts","../../node_modules/.pnpm/typescript@5.9.3/node_modules/typescript/lib/lib.es2017.date.d.ts","../../node_modules/.pnpm/typescript@5.9.3/node_modules/typescript/lib/lib.es2017.object.d.ts","../../node_modules/.pnpm/typescript@5.9.3/node_modules/typescript/lib/lib.es2017.sharedmemory.d.ts","../../node_modules/.pnpm/typescript@5.9.3/node_modules/typescript/lib/lib.es2017.string.d.ts","../../node_modules/.pnpm/typescript@5.9.3/node_modules/typescript/lib/lib.es2017.intl.d.ts","../../node_modules/.pnpm/typescript@5.9.3/node_modules/typescript/lib/lib.es2017.typedarrays.d.ts","../../node_modules/.pnpm/typescript@5.9.3/node_modules/typescript/lib/lib.es2018.asyncgenerator.d.ts","../../node_modules/.pnpm/typescript@5.9.3/node_modules/typescript/lib/lib.es2018.asynciterable.d.ts","../../node_modules/.pnpm/typescript@5.9.3/node_modules/typescript/lib/lib.es2018.intl.d.ts","../../node_modules/.pnpm/typescript@5.9.3/node_modules/typescript/lib/lib.es2018.promise.d.ts","../../node_modules/.pnpm/typescript@5.9.3/node_modules/typescript/lib/lib.es2018.regexp.d.ts","../../node_modules/.pnpm/typescript@5.9.3/node_modules/typescript/lib/lib.es2019.array.d.ts","../../node_modules/.pnpm/typescript@5.9.3/node_modules/typescript/lib/lib.es2019.object.d.ts","../../node_modules/.pnpm/typescript@5.9.3/node_modules/typescript/lib/lib.es2019.string.d.ts","../../node_modules/.pnpm/typescript@5.9.3/node_modules/typescript/lib/lib.es2019.symbol.d.ts","../../node_modules/.pnpm/typescript@5.9.3/node_modules/typescript/lib/lib.es2019.intl.d.ts","../../node_modules/.pnpm/typescript@5.9.3/node_modules/typescript/lib/lib.es2020.bigint.d.ts","../../node_modules/.pnpm/typescript@5.9.3/node_modules/typescript/lib/lib.es2020.date.d.ts","../../node_modules/.pnpm/typescript@5.9.3/node_modules/typescript/lib/lib.es2020.promise.d.ts","../../node_modules/.pnpm/typescript@5.9.3/node_modules/typescript/lib/lib.es2020.sharedmemory.d.ts","../../node_modules/.pnpm/typescript@5.9.3/node_modules/typescript/lib/lib.es2020.string.d.ts","../../node_modules/.pnpm/typescript@5.9.3/node_modules/typescript/lib/lib.es2020.symbol.wellknown.d.ts","../../node_modules/.pnpm/typescript@5.9.3/node_modules/typescript/lib/lib.es2020.intl.d.ts","../../node_modules/.pnpm/typescript@5.9.3/node_modules/typescript/lib/lib.es2020.number.d.ts","../../node_modules/.pnpm/typescript@5.9.3/node_modules/typescript/lib/lib.es2021.promise.d.ts","../../node_modules/.pnpm/typescript@5.9.3/node_modules/typescript/lib/lib.es2021.string.d.ts","../../node_modules/.pnpm/typescript@5.9.3/node_modules/typescript/lib/lib.es2021.weakref.d.ts","../../node_modules/.pnpm/typescript@5.9.3/node_modules/typescript/lib/lib.es2021.intl.d.ts","../../node_modules/.pnpm/typescript@5.9.3/node_modules/typescript/lib/lib.es2022.array.d.ts","../../node_modules/.pnpm/typescript@5.9.3/node_modules/typescript/lib/lib.es2022.error.d.ts","../../node_modules/.pnpm/typescript@5.9.3/node_modules/typescript/lib/lib.es2022.intl.d.ts","../../node_modules/.pnpm/typescript@5.9.3/node_modules/typescript/lib/lib.es2022.object.d.ts","../../node_modules/.pnpm/typescript@5.9.3/node_modules/typescript/lib/lib.es2022.string.d.ts","../../node_modules/.pnpm/typescript@5.9.3/node_modules/typescript/lib/lib.es2022.regexp.d.ts","../../node_modules/.pnpm/typescript@5.9.3/node_modules/typescript/lib/lib.es2023.array.d.ts","../../node_modules/.pnpm/typescript@5.9.3/node_modules/typescript/lib/lib.es2023.collection.d.ts","../../node_modules/.pnpm/typescript@5.9.3/node_modules/typescript/lib/lib.es2023.intl.d.ts","../../node_modules/.pnpm/typescript@5.9.3/node_modules/typescript/lib/lib.es2024.arraybuffer.d.ts","../../node_modules/.pnpm/typescript@5.9.3/node_modules/typescript/lib/lib.es2024.collection.d.ts","../../node_modules/.pnpm/typescript@5.9.3/node_modules/typescript/lib/lib.es2024.object.d.ts","../../node_modules/.pnpm/typescript@5.9.3/node_modules/typescript/lib/lib.es2024.promise.d.ts","../../node_modules/.pnpm/typescript@5.9.3/node_modules/typescript/lib/lib.es2024.regexp.d.ts","../../node_modules/.pnpm/typescript@5.9.3/node_modules/typescript/lib/lib.es2024.sharedmemory.d.ts","../../node_modules/.pnpm/typescript@5.9.3/node_modules/typescript/lib/lib.es2024.string.d.ts","../../node_modules/.pnpm/typescript@5.9.3/node_modules/typescript/lib/lib.esnext.array.d.ts","../../node_modules/.pnpm/typescript@5.9.3/node_modules/typescript/lib/lib.esnext.collection.d.ts","../../node_modules/.pnpm/typescript@5.9.3/node_modules/typescript/lib/lib.esnext.intl.d.ts","../../node_modules/.pnpm/typescript@5.9.3/node_modules/typescript/lib/lib.esnext.disposable.d.ts","../../node_modules/.pnpm/typescript@5.9.3/node_modules/typescript/lib/lib.esnext.promise.d.ts","../../node_modules/.pnpm/typescript@5.9.3/node_modules/typescript/lib/lib.esnext.decorators.d.ts","../../node_modules/.pnpm/typescript@5.9.3/node_modules/typescript/lib/lib.esnext.iterator.d.ts","../../node_modules/.pnpm/typescript@5.9.3/node_modules/typescript/lib/lib.esnext.float16.d.ts","../../node_modules/.pnpm/typescript@5.9.3/node_modules/typescript/lib/lib.esnext.error.d.ts","../../node_modules/.pnpm/typescript@5.9.3/node_modules/typescript/lib/lib.esnext.sharedmemory.d.ts","../../node_modules/.pnpm/typescript@5.9.3/node_modules/typescript/lib/lib.decorators.d.ts","../../node_modules/.pnpm/typescript@5.9.3/node_modules/typescript/lib/lib.decorators.legacy.d.ts","../../node_modules/.pnpm/@types+react@19.2.17/node_modules/@types/react/global.d.ts","../../node_modules/.pnpm/csstype@3.2.3/node_modules/csstype/index.d.ts","../../node_modules/.pnpm/@types+react@19.2.17/node_modules/@types/react/index.d.ts","../../node_modules/.pnpm/next@16.2.9_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/styled-jsx/types/css.d.ts","../../node_modules/.pnpm/next@16.2.9_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/styled-jsx/types/macro.d.ts","../../node_modules/.pnpm/next@16.2.9_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/styled-jsx/types/style.d.ts","../../node_modules/.pnpm/next@16.2.9_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/styled-jsx/types/global.d.ts","../../node_modules/.pnpm/next@16.2.9_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/styled-jsx/types/index.d.ts","../../node_modules/.pnpm/next@16.2.9_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/server/get-page-files.d.ts","../../node_modules/.pnpm/@types+node@20.19.43/node_modules/@types/node/compatibility/disposable.d.ts","../../node_modules/.pnpm/@types+node@20.19.43/node_modules/@types/node/compatibility/indexable.d.ts","../../node_modules/.pnpm/@types+node@20.19.43/node_modules/@types/node/compatibility/iterators.d.ts","../../node_modules/.pnpm/@types+node@20.19.43/node_modules/@types/node/compatibility/index.d.ts","../../node_modules/.pnpm/@types+node@20.19.43/node_modules/@types/node/globals.typedarray.d.ts","../../node_modules/.pnpm/@types+node@20.19.43/node_modules/@types/node/buffer.buffer.d.ts","../../node_modules/.pnpm/@types+node@20.19.43/node_modules/@types/node/globals.d.ts","../../node_modules/.pnpm/@types+node@20.19.43/node_modules/@types/node/web-globals/abortcontroller.d.ts","../../node_modules/.pnpm/@types+node@20.19.43/node_modules/@types/node/web-globals/domexception.d.ts","../../node_modules/.pnpm/@types+node@20.19.43/node_modules/@types/node/web-globals/events.d.ts","../../node_modules/.pnpm/undici-types@6.21.0/node_modules/undici-types/header.d.ts","../../node_modules/.pnpm/undici-types@6.21.0/node_modules/undici-types/readable.d.ts","../../node_modules/.pnpm/undici-types@6.21.0/node_modules/undici-types/file.d.ts","../../node_modules/.pnpm/undici-types@6.21.0/node_modules/undici-types/fetch.d.ts","../../node_modules/.pnpm/undici-types@6.21.0/node_modules/undici-types/formdata.d.ts","../../node_modules/.pnpm/undici-types@6.21.0/node_modules/undici-types/connector.d.ts","../../node_modules/.pnpm/undici-types@6.21.0/node_modules/undici-types/client.d.ts","../../node_modules/.pnpm/undici-types@6.21.0/node_modules/undici-types/errors.d.ts","../../node_modules/.pnpm/undici-types@6.21.0/node_modules/undici-types/dispatcher.d.ts","../../node_modules/.pnpm/undici-types@6.21.0/node_modules/undici-types/global-dispatcher.d.ts","../../node_modules/.pnpm/undici-types@6.21.0/node_modules/undici-types/global-origin.d.ts","../../node_modules/.pnpm/undici-types@6.21.0/node_modules/undici-types/pool-stats.d.ts","../../node_modules/.pnpm/undici-types@6.21.0/node_modules/undici-types/pool.d.ts","../../node_modules/.pnpm/undici-types@6.21.0/node_modules/undici-types/handlers.d.ts","../../node_modules/.pnpm/undici-types@6.21.0/node_modules/undici-types/balanced-pool.d.ts","../../node_modules/.pnpm/undici-types@6.21.0/node_modules/undici-types/agent.d.ts","../../node_modules/.pnpm/undici-types@6.21.0/node_modules/undici-types/mock-interceptor.d.ts","../../node_modules/.pnpm/undici-types@6.21.0/node_modules/undici-types/mock-agent.d.ts","../../node_modules/.pnpm/undici-types@6.21.0/node_modules/undici-types/mock-client.d.ts","../../node_modules/.pnpm/undici-types@6.21.0/node_modules/undici-types/mock-pool.d.ts","../../node_modules/.pnpm/undici-types@6.21.0/node_modules/undici-types/mock-errors.d.ts","../../node_modules/.pnpm/undici-types@6.21.0/node_modules/undici-types/proxy-agent.d.ts","../../node_modules/.pnpm/undici-types@6.21.0/node_modules/undici-types/env-http-proxy-agent.d.ts","../../node_modules/.pnpm/undici-types@6.21.0/node_modules/undici-types/retry-handler.d.ts","../../node_modules/.pnpm/undici-types@6.21.0/node_modules/undici-types/retry-agent.d.ts","../../node_modules/.pnpm/undici-types@6.21.0/node_modules/undici-types/api.d.ts","../../node_modules/.pnpm/undici-types@6.21.0/node_modules/undici-types/interceptors.d.ts","../../node_modules/.pnpm/undici-types@6.21.0/node_modules/undici-types/util.d.ts","../../node_modules/.pnpm/undici-types@6.21.0/node_modules/undici-types/cookies.d.ts","../../node_modules/.pnpm/undici-types@6.21.0/node_modules/undici-types/patch.d.ts","../../node_modules/.pnpm/undici-types@6.21.0/node_modules/undici-types/websocket.d.ts","../../node_modules/.pnpm/undici-types@6.21.0/node_modules/undici-types/eventsource.d.ts","../../node_modules/.pnpm/undici-types@6.21.0/node_modules/undici-types/filereader.d.ts","../../node_modules/.pnpm/undici-types@6.21.0/node_modules/undici-types/diagnostics-channel.d.ts","../../node_modules/.pnpm/undici-types@6.21.0/node_modules/undici-types/content-type.d.ts","../../node_modules/.pnpm/undici-types@6.21.0/node_modules/undici-types/cache.d.ts","../../node_modules/.pnpm/undici-types@6.21.0/node_modules/undici-types/index.d.ts","../../node_modules/.pnpm/@types+node@20.19.43/node_modules/@types/node/web-globals/fetch.d.ts","../../node_modules/.pnpm/@types+node@20.19.43/node_modules/@types/node/assert.d.ts","../../node_modules/.pnpm/@types+node@20.19.43/node_modules/@types/node/assert/strict.d.ts","../../node_modules/.pnpm/@types+node@20.19.43/node_modules/@types/node/async_hooks.d.ts","../../node_modules/.pnpm/@types+node@20.19.43/node_modules/@types/node/buffer.d.ts","../../node_modules/.pnpm/@types+node@20.19.43/node_modules/@types/node/child_process.d.ts","../../node_modules/.pnpm/@types+node@20.19.43/node_modules/@types/node/cluster.d.ts","../../node_modules/.pnpm/@types+node@20.19.43/node_modules/@types/node/console.d.ts","../../node_modules/.pnpm/@types+node@20.19.43/node_modules/@types/node/constants.d.ts","../../node_modules/.pnpm/@types+node@20.19.43/node_modules/@types/node/crypto.d.ts","../../node_modules/.pnpm/@types+node@20.19.43/node_modules/@types/node/dgram.d.ts","../../node_modules/.pnpm/@types+node@20.19.43/node_modules/@types/node/diagnostics_channel.d.ts","../../node_modules/.pnpm/@types+node@20.19.43/node_modules/@types/node/dns.d.ts","../../node_modules/.pnpm/@types+node@20.19.43/node_modules/@types/node/dns/promises.d.ts","../../node_modules/.pnpm/@types+node@20.19.43/node_modules/@types/node/domain.d.ts","../../node_modules/.pnpm/@types+node@20.19.43/node_modules/@types/node/events.d.ts","../../node_modules/.pnpm/@types+node@20.19.43/node_modules/@types/node/fs.d.ts","../../node_modules/.pnpm/@types+node@20.19.43/node_modules/@types/node/fs/promises.d.ts","../../node_modules/.pnpm/@types+node@20.19.43/node_modules/@types/node/http.d.ts","../../node_modules/.pnpm/@types+node@20.19.43/node_modules/@types/node/http2.d.ts","../../node_modules/.pnpm/@types+node@20.19.43/node_modules/@types/node/https.d.ts","../../node_modules/.pnpm/@types+node@20.19.43/node_modules/@types/node/inspector.generated.d.ts","../../node_modules/.pnpm/@types+node@20.19.43/node_modules/@types/node/module.d.ts","../../node_modules/.pnpm/@types+node@20.19.43/node_modules/@types/node/net.d.ts","../../node_modules/.pnpm/@types+node@20.19.43/node_modules/@types/node/os.d.ts","../../node_modules/.pnpm/@types+node@20.19.43/node_modules/@types/node/path.d.ts","../../node_modules/.pnpm/@types+node@20.19.43/node_modules/@types/node/perf_hooks.d.ts","../../node_modules/.pnpm/@types+node@20.19.43/node_modules/@types/node/process.d.ts","../../node_modules/.pnpm/@types+node@20.19.43/node_modules/@types/node/punycode.d.ts","../../node_modules/.pnpm/@types+node@20.19.43/node_modules/@types/node/querystring.d.ts","../../node_modules/.pnpm/@types+node@20.19.43/node_modules/@types/node/readline.d.ts","../../node_modules/.pnpm/@types+node@20.19.43/node_modules/@types/node/readline/promises.d.ts","../../node_modules/.pnpm/@types+node@20.19.43/node_modules/@types/node/repl.d.ts","../../node_modules/.pnpm/@types+node@20.19.43/node_modules/@types/node/sea.d.ts","../../node_modules/.pnpm/@types+node@20.19.43/node_modules/@types/node/stream.d.ts","../../node_modules/.pnpm/@types+node@20.19.43/node_modules/@types/node/stream/promises.d.ts","../../node_modules/.pnpm/@types+node@20.19.43/node_modules/@types/node/stream/consumers.d.ts","../../node_modules/.pnpm/@types+node@20.19.43/node_modules/@types/node/stream/web.d.ts","../../node_modules/.pnpm/@types+node@20.19.43/node_modules/@types/node/string_decoder.d.ts","../../node_modules/.pnpm/@types+node@20.19.43/node_modules/@types/node/test.d.ts","../../node_modules/.pnpm/@types+node@20.19.43/node_modules/@types/node/timers.d.ts","../../node_modules/.pnpm/@types+node@20.19.43/node_modules/@types/node/timers/promises.d.ts","../../node_modules/.pnpm/@types+node@20.19.43/node_modules/@types/node/tls.d.ts","../../node_modules/.pnpm/@types+node@20.19.43/node_modules/@types/node/trace_events.d.ts","../../node_modules/.pnpm/@types+node@20.19.43/node_modules/@types/node/tty.d.ts","../../node_modules/.pnpm/@types+node@20.19.43/node_modules/@types/node/url.d.ts","../../node_modules/.pnpm/@types+node@20.19.43/node_modules/@types/node/util.d.ts","../../node_modules/.pnpm/@types+node@20.19.43/node_modules/@types/node/v8.d.ts","../../node_modules/.pnpm/@types+node@20.19.43/node_modules/@types/node/vm.d.ts","../../node_modules/.pnpm/@types+node@20.19.43/node_modules/@types/node/wasi.d.ts","../../node_modules/.pnpm/@types+node@20.19.43/node_modules/@types/node/worker_threads.d.ts","../../node_modules/.pnpm/@types+node@20.19.43/node_modules/@types/node/zlib.d.ts","../../node_modules/.pnpm/@types+node@20.19.43/node_modules/@types/node/index.d.ts","../../node_modules/.pnpm/@types+react@19.2.17/node_modules/@types/react/canary.d.ts","../../node_modules/.pnpm/@types+react@19.2.17/node_modules/@types/react/experimental.d.ts","../../node_modules/.pnpm/@types+react-dom@19.2.3_@types+react@19.2.17/node_modules/@types/react-dom/index.d.ts","../../node_modules/.pnpm/@types+react-dom@19.2.3_@types+react@19.2.17/node_modules/@types/react-dom/canary.d.ts","../../node_modules/.pnpm/@types+react-dom@19.2.3_@types+react@19.2.17/node_modules/@types/react-dom/experimental.d.ts","../../node_modules/.pnpm/next@16.2.9_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/lib/fallback.d.ts","../../node_modules/.pnpm/next@16.2.9_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/compiled/webpack/webpack.d.ts","../../node_modules/.pnpm/next@16.2.9_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/shared/lib/modern-browserslist-target.d.ts","../../node_modules/.pnpm/next@16.2.9_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/shared/lib/entry-constants.d.ts","../../node_modules/.pnpm/next@16.2.9_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/shared/lib/constants.d.ts","../../node_modules/.pnpm/next@16.2.9_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/lib/bundler.d.ts","../../node_modules/.pnpm/next@16.2.9_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/server/config.d.ts","../../node_modules/.pnpm/next@16.2.9_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/lib/load-custom-routes.d.ts","../../node_modules/.pnpm/next@16.2.9_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/shared/lib/image-config.d.ts","../../node_modules/.pnpm/next@16.2.9_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/build/webpack/plugins/subresource-integrity-plugin.d.ts","../../node_modules/.pnpm/next@16.2.9_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/server/body-streams.d.ts","../../node_modules/.pnpm/next@16.2.9_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/server/request/search-params.d.ts","../../node_modules/.pnpm/next@16.2.9_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/shared/lib/segment-cache/vary-params-decoding.d.ts","../../node_modules/.pnpm/next@16.2.9_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/server/app-render/vary-params.d.ts","../../node_modules/.pnpm/next@16.2.9_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/server/request/params.d.ts","../../node_modules/.pnpm/next@16.2.9_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/server/route-kind.d.ts","../../node_modules/.pnpm/next@16.2.9_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/server/route-definitions/route-definition.d.ts","../../node_modules/.pnpm/next@16.2.9_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/server/route-matches/route-match.d.ts","../../node_modules/.pnpm/next@16.2.9_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/client/components/app-router-headers.d.ts","../../node_modules/.pnpm/next@16.2.9_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/server/lib/cache-control.d.ts","../../node_modules/.pnpm/next@16.2.9_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/shared/lib/app-router-types.d.ts","../../node_modules/.pnpm/next@16.2.9_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/server/lib/cache-handlers/types.d.ts","../../node_modules/.pnpm/next@16.2.9_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/server/use-cache/use-cache-wrapper.d.ts","../../node_modules/.pnpm/next@16.2.9_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/server/resume-data-cache/cache-store.d.ts","../../node_modules/.pnpm/next@16.2.9_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/server/resume-data-cache/resume-data-cache.d.ts","../../node_modules/.pnpm/next@16.2.9_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/lib/constants.d.ts","../../node_modules/.pnpm/next@16.2.9_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/server/render-result.d.ts","../../node_modules/.pnpm/next@16.2.9_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/server/response-cache/types.d.ts","../../node_modules/.pnpm/next@16.2.9_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/server/response-cache/index.d.ts","../../node_modules/.pnpm/@types+react@19.2.17/node_modules/@types/react/jsx-runtime.d.ts","../../node_modules/.pnpm/next@16.2.9_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/next-devtools/userspace/pages/pages-dev-overlay-setup.d.ts","../../node_modules/.pnpm/next@16.2.9_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/build/static-paths/types.d.ts","../../node_modules/.pnpm/next@16.2.9_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/server/route-definitions/app-page-route-definition.d.ts","../../node_modules/.pnpm/next@16.2.9_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/build/adapter/setup-node-env.external.d.ts","../../node_modules/.pnpm/next@16.2.9_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/server/instrumentation/types.d.ts","../../node_modules/.pnpm/next@16.2.9_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/lib/setup-exception-listeners.d.ts","../../node_modules/.pnpm/next@16.2.9_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/lib/worker.d.ts","../../node_modules/.pnpm/next@16.2.9_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/server/lib/experimental/ppr.d.ts","../../node_modules/.pnpm/next@16.2.9_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/lib/page-types.d.ts","../../node_modules/.pnpm/next@16.2.9_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/build/segment-config/app/app-segment-config.d.ts","../../node_modules/.pnpm/next@16.2.9_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/build/segment-config/pages/pages-segment-config.d.ts","../../node_modules/.pnpm/next@16.2.9_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/build/analysis/get-page-static-info.d.ts","../../node_modules/.pnpm/next@16.2.9_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/build/webpack/loaders/get-module-build-info.d.ts","../../node_modules/.pnpm/next@16.2.9_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/build/webpack/plugins/middleware-plugin.d.ts","../../node_modules/.pnpm/next@16.2.9_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/server/require-hook.d.ts","../../node_modules/.pnpm/next@16.2.9_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/server/node-polyfill-crypto.d.ts","../../node_modules/.pnpm/next@16.2.9_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/server/node-environment-baseline.d.ts","../../node_modules/.pnpm/next@16.2.9_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/server/node-environment-extensions/error-inspect.d.ts","../../node_modules/.pnpm/next@16.2.9_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/server/node-environment-extensions/console-file.d.ts","../../node_modules/.pnpm/next@16.2.9_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/server/node-environment-extensions/console-exit.d.ts","../../node_modules/.pnpm/next@16.2.9_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/server/node-environment-extensions/console-dim.external.d.ts","../../node_modules/.pnpm/next@16.2.9_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/server/node-environment-extensions/unhandled-rejection.external.d.ts","../../node_modules/.pnpm/next@16.2.9_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/server/node-environment-extensions/random.d.ts","../../node_modules/.pnpm/next@16.2.9_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/server/node-environment-extensions/date.d.ts","../../node_modules/.pnpm/next@16.2.9_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/server/node-environment-extensions/web-crypto.d.ts","../../node_modules/.pnpm/next@16.2.9_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/server/node-environment-extensions/node-crypto.d.ts","../../node_modules/.pnpm/next@16.2.9_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/server/node-environment-extensions/fast-set-immediate.external.d.ts","../../node_modules/.pnpm/next@16.2.9_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/server/node-environment.d.ts","../../node_modules/.pnpm/next@16.2.9_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/build/page-extensions-type.d.ts","../../node_modules/.pnpm/next@16.2.9_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/server/route-modules/app-page/module.compiled.d.ts","../../node_modules/.pnpm/next@16.2.9_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/server/route-definitions/app-route-route-definition.d.ts","../../node_modules/.pnpm/next@16.2.9_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/server/lib/i18n-provider.d.ts","../../node_modules/.pnpm/next@16.2.9_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/server/web/next-url.d.ts","../../node_modules/.pnpm/next@16.2.9_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/compiled/@edge-runtime/cookies/index.d.ts","../../node_modules/.pnpm/next@16.2.9_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/server/web/spec-extension/cookies.d.ts","../../node_modules/.pnpm/next@16.2.9_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/server/web/spec-extension/request.d.ts","../../node_modules/.pnpm/next@16.2.9_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/shared/lib/deep-readonly.d.ts","../../node_modules/.pnpm/next@16.2.9_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/server/lib/incremental-cache/index.d.ts","../../node_modules/.pnpm/next@16.2.9_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/shared/lib/router/utils/middleware-route-matcher.d.ts","../../node_modules/.pnpm/next@16.2.9_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/build/webpack/plugins/flight-manifest-plugin.d.ts","../../node_modules/.pnpm/next@16.2.9_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/build/webpack/plugins/next-font-manifest-plugin.d.ts","../../node_modules/.pnpm/next@16.2.9_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/server/route-definitions/locale-route-definition.d.ts","../../node_modules/.pnpm/next@16.2.9_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/server/route-definitions/pages-route-definition.d.ts","../../node_modules/.pnpm/next@16.2.9_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/shared/lib/mitt.d.ts","../../node_modules/.pnpm/next@16.2.9_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/client/with-router.d.ts","../../node_modules/.pnpm/next@16.2.9_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/client/router.d.ts","../../node_modules/.pnpm/next@16.2.9_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/client/route-loader.d.ts","../../node_modules/.pnpm/next@16.2.9_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/client/page-loader.d.ts","../../node_modules/.pnpm/next@16.2.9_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/shared/lib/bloom-filter.d.ts","../../node_modules/.pnpm/next@16.2.9_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/shared/lib/router/router.d.ts","../../node_modules/.pnpm/next@16.2.9_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/shared/lib/router-context.shared-runtime.d.ts","../../node_modules/.pnpm/next@16.2.9_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/shared/lib/loadable-context.shared-runtime.d.ts","../../node_modules/.pnpm/next@16.2.9_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/shared/lib/loadable.shared-runtime.d.ts","../../node_modules/.pnpm/next@16.2.9_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/shared/lib/image-config-context.shared-runtime.d.ts","../../node_modules/.pnpm/next@16.2.9_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/client/components/readonly-url-search-params.d.ts","../../node_modules/.pnpm/next@16.2.9_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/shared/lib/hooks-client-context.shared-runtime.d.ts","../../node_modules/.pnpm/next@16.2.9_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/shared/lib/head-manager-context.shared-runtime.d.ts","../../node_modules/.pnpm/next@16.2.9_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/client/flight-data-helpers.d.ts","../../node_modules/.pnpm/next@16.2.9_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/client/components/segment-cache/cache-key.d.ts","../../node_modules/.pnpm/next@16.2.9_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/client/components/router-reducer/fetch-server-response.d.ts","../../node_modules/.pnpm/next@16.2.9_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/client/components/segment-cache/types.d.ts","../../node_modules/.pnpm/next@16.2.9_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/shared/lib/segment-cache/segment-value-encoding.d.ts","../../node_modules/.pnpm/next@16.2.9_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/client/components/segment-cache/scheduler.d.ts","../../node_modules/.pnpm/next@16.2.9_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/client/components/segment-cache/cache-map.d.ts","../../node_modules/.pnpm/next@16.2.9_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/client/components/segment-cache/vary-path.d.ts","../../node_modules/.pnpm/next@16.2.9_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/client/components/segment-cache/cache.d.ts","../../node_modules/.pnpm/next@16.2.9_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/client/components/router-reducer/ppr-navigations.d.ts","../../node_modules/.pnpm/next@16.2.9_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/client/components/segment-cache/navigation.d.ts","../../node_modules/.pnpm/next@16.2.9_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/client/components/router-reducer/router-reducer-types.d.ts","../../node_modules/.pnpm/next@16.2.9_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/shared/lib/app-router-context.shared-runtime.d.ts","../../node_modules/.pnpm/next@16.2.9_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/shared/lib/server-inserted-html.shared-runtime.d.ts","../../node_modules/.pnpm/next@16.2.9_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/server/route-modules/pages/vendored/contexts/entrypoints.d.ts","../../node_modules/.pnpm/next@16.2.9_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/server/route-modules/pages/module.compiled.d.ts","../../node_modules/.pnpm/next@16.2.9_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/build/templates/pages.d.ts","../../node_modules/.pnpm/next@16.2.9_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/server/route-modules/pages/module.d.ts","../../node_modules/.pnpm/next@16.2.9_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/server/render.d.ts","../../node_modules/.pnpm/next@16.2.9_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/build/webpack/plugins/pages-manifest-plugin.d.ts","../../node_modules/.pnpm/next@16.2.9_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/server/route-definitions/pages-api-route-definition.d.ts","../../node_modules/.pnpm/next@16.2.9_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/server/route-matches/pages-api-route-match.d.ts","../../node_modules/.pnpm/next@16.2.9_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/server/route-matchers/route-matcher.d.ts","../../node_modules/.pnpm/next@16.2.9_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/server/route-matcher-providers/route-matcher-provider.d.ts","../../node_modules/.pnpm/next@16.2.9_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/server/route-matcher-managers/route-matcher-manager.d.ts","../../node_modules/.pnpm/next@16.2.9_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/server/normalizers/normalizer.d.ts","../../node_modules/.pnpm/next@16.2.9_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/server/normalizers/locale-route-normalizer.d.ts","../../node_modules/.pnpm/next@16.2.9_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/server/normalizers/request/pathname-normalizer.d.ts","../../node_modules/.pnpm/next@16.2.9_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/server/normalizers/request/suffix.d.ts","../../node_modules/.pnpm/next@16.2.9_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/server/normalizers/request/rsc.d.ts","../../node_modules/.pnpm/next@16.2.9_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/server/normalizers/request/next-data.d.ts","../../node_modules/.pnpm/next@16.2.9_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/server/after/builtin-request-context.d.ts","../../node_modules/.pnpm/next@16.2.9_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/server/normalizers/request/segment-prefix-rsc.d.ts","../../node_modules/.pnpm/next@16.2.9_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/server/route-modules/pages/builtin/_error.d.ts","../../node_modules/.pnpm/next@16.2.9_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/server/load-default-error-components.d.ts","../../node_modules/.pnpm/next@16.2.9_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/server/base-server.d.ts","../../node_modules/.pnpm/next@16.2.9_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/server/after/after.d.ts","../../node_modules/.pnpm/next@16.2.9_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/server/after/after-context.d.ts","../../node_modules/.pnpm/next@16.2.9_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/server/use-cache/cache-life.d.ts","../../node_modules/.pnpm/next@16.2.9_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/server/app-render/work-async-storage-instance.d.ts","../../node_modules/.pnpm/next@16.2.9_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/server/lib/lazy-result.d.ts","../../node_modules/.pnpm/next@16.2.9_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/server/app-render/create-error-handler.d.ts","../../node_modules/.pnpm/next@16.2.9_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/shared/lib/action-revalidation-kind.d.ts","../../node_modules/.pnpm/next@16.2.9_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/server/app-render/work-async-storage.external.d.ts","../../node_modules/.pnpm/next@16.2.9_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/server/async-storage/work-store.d.ts","../../node_modules/.pnpm/next@16.2.9_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/server/web/http.d.ts","../../node_modules/.pnpm/next@16.2.9_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/client/components/hooks-server-context.d.ts","../../node_modules/.pnpm/next@16.2.9_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/server/route-modules/app-route/shared-modules.d.ts","../../node_modules/.pnpm/next@16.2.9_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/client/components/redirect-status-code.d.ts","../../node_modules/.pnpm/next@16.2.9_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/client/components/redirect-error.d.ts","../../node_modules/.pnpm/next@16.2.9_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/server/web/spec-extension/adapters/request-cookies.d.ts","../../node_modules/.pnpm/next@16.2.9_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/server/async-storage/draft-mode-provider.d.ts","../../node_modules/.pnpm/next@16.2.9_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/server/web/spec-extension/adapters/headers.d.ts","../../node_modules/.pnpm/next@16.2.9_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/server/app-render/cache-signal.d.ts","../../node_modules/.pnpm/next@16.2.9_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/server/app-render/instant-validation/boundary-tracking.d.ts","../../node_modules/.pnpm/next@16.2.9_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/server/app-render/instant-validation/instant-validation-error.d.ts","../../node_modules/.pnpm/next@16.2.9_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/shared/lib/router/utils/parse-relative-url.d.ts","../../node_modules/.pnpm/next@16.2.9_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/server/app-render/instant-validation/instant-samples.d.ts","../../node_modules/.pnpm/next@16.2.9_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/server/app-render/dynamic-rendering.d.ts","../../node_modules/.pnpm/next@16.2.9_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/server/app-render/work-unit-async-storage-instance.d.ts","../../node_modules/.pnpm/next@16.2.9_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/server/lib/implicit-tags.d.ts","../../node_modules/.pnpm/next@16.2.9_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/server/app-render/staged-rendering.d.ts","../../node_modules/.pnpm/next@16.2.9_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/server/app-render/work-unit-async-storage.external.d.ts","../../node_modules/.pnpm/next@16.2.9_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/build/templates/app-route.d.ts","../../node_modules/.pnpm/next@16.2.9_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/server/app-render/action-async-storage-instance.d.ts","../../node_modules/.pnpm/next@16.2.9_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/server/app-render/action-async-storage.external.d.ts","../../node_modules/.pnpm/next@16.2.9_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/server/route-modules/app-route/module.d.ts","../../node_modules/.pnpm/next@16.2.9_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/server/route-modules/app-route/module.compiled.d.ts","../../node_modules/.pnpm/next@16.2.9_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/build/segment-config/app/app-segments.d.ts","../../node_modules/.pnpm/next@16.2.9_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/build/get-supported-browsers.d.ts","../../node_modules/.pnpm/next@16.2.9_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/build/utils.d.ts","../../node_modules/.pnpm/next@16.2.9_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/build/rendering-mode.d.ts","../../node_modules/.pnpm/next@16.2.9_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/server/lib/router-utils/build-prefetch-segment-data-route.d.ts","../../node_modules/.pnpm/next@16.2.9_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/server/lib/cpu-profile.d.ts","../../node_modules/.pnpm/next@16.2.9_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/build/turborepo-access-trace/types.d.ts","../../node_modules/.pnpm/next@16.2.9_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/build/turborepo-access-trace/result.d.ts","../../node_modules/.pnpm/next@16.2.9_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/build/turborepo-access-trace/helpers.d.ts","../../node_modules/.pnpm/next@16.2.9_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/build/turborepo-access-trace/index.d.ts","../../node_modules/.pnpm/next@16.2.9_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/export/routes/types.d.ts","../../node_modules/.pnpm/next@16.2.9_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/export/types.d.ts","../../node_modules/.pnpm/next@16.2.9_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/export/worker.d.ts","../../node_modules/.pnpm/next@16.2.9_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/build/worker.d.ts","../../node_modules/.pnpm/next@16.2.9_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/build/index.d.ts","../../node_modules/.pnpm/next@16.2.9_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/lib/coalesced-function.d.ts","../../node_modules/.pnpm/next@16.2.9_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/server/lib/router-utils/types.d.ts","../../node_modules/.pnpm/next@16.2.9_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/trace/types.d.ts","../../node_modules/.pnpm/next@16.2.9_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/trace/trace.d.ts","../../node_modules/.pnpm/next@16.2.9_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/trace/shared.d.ts","../../node_modules/.pnpm/next@16.2.9_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/trace/index.d.ts","../../node_modules/.pnpm/next@16.2.9_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/build/load-jsconfig.d.ts","../../node_modules/.pnpm/@next+env@16.2.9/node_modules/@next/env/dist/index.d.ts","../../node_modules/.pnpm/next@16.2.9_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/build/webpack/plugins/telemetry-plugin/use-cache-tracker-utils.d.ts","../../node_modules/.pnpm/next@16.2.9_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/build/webpack/plugins/telemetry-plugin/telemetry-plugin.d.ts","../../node_modules/.pnpm/next@16.2.9_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/telemetry/storage.d.ts","../../node_modules/.pnpm/next@16.2.9_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/build/build-context.d.ts","../../node_modules/.pnpm/next@16.2.9_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/build/webpack-config.d.ts","../../node_modules/.pnpm/next@16.2.9_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/build/swc/generated-native.d.ts","../../node_modules/.pnpm/next@16.2.9_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/build/define-env.d.ts","../../node_modules/.pnpm/next@16.2.9_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/build/swc/index.d.ts","../../node_modules/.pnpm/next@16.2.9_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/build/swc/types.d.ts","../../node_modules/.pnpm/next@16.2.9_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/server/dev/parse-version-info.d.ts","../../node_modules/.pnpm/next@16.2.9_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/next-devtools/shared/types.d.ts","../../node_modules/.pnpm/next@16.2.9_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/server/dev/dev-indicator-server-state.d.ts","../../node_modules/.pnpm/next@16.2.9_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/next-devtools/dev-overlay/cache-indicator.d.ts","../../node_modules/.pnpm/next@16.2.9_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/server/lib/parse-stack.d.ts","../../node_modules/.pnpm/next@16.2.9_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/next-devtools/server/shared.d.ts","../../node_modules/.pnpm/next@16.2.9_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/next-devtools/shared/stack-frame.d.ts","../../node_modules/.pnpm/next@16.2.9_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/next-devtools/dev-overlay/utils/get-error-by-type.d.ts","../../node_modules/.pnpm/next@16.2.9_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/next-devtools/dev-overlay/container/runtime-error/render-error.d.ts","../../node_modules/.pnpm/next@16.2.9_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/next-devtools/dev-overlay/shared.d.ts","../../node_modules/.pnpm/next@16.2.9_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/server/dev/debug-channel.d.ts","../../node_modules/.pnpm/next@16.2.9_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/server/dev/hot-reloader-types.d.ts","../../node_modules/.pnpm/next@16.2.9_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/server/web/spec-extension/fetch-event.d.ts","../../node_modules/.pnpm/next@16.2.9_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/server/web/spec-extension/response.d.ts","../../node_modules/.pnpm/next@16.2.9_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/build/segment-config/middleware/middleware-config.d.ts","../../node_modules/.pnpm/next@16.2.9_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/server/web/types.d.ts","../../node_modules/.pnpm/next@16.2.9_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/shared/lib/router/utils/parse-url.d.ts","../../node_modules/.pnpm/next@16.2.9_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/server/base-http/node.d.ts","../../node_modules/.pnpm/next@16.2.9_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/server/lib/async-callback-set.d.ts","../../node_modules/.pnpm/next@16.2.9_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/shared/lib/router/utils/route-regex.d.ts","../../node_modules/.pnpm/next@16.2.9_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/shared/lib/router/utils/route-matcher.d.ts","../../node_modules/.pnpm/sharp@0.34.5/node_modules/sharp/lib/index.d.ts","../../node_modules/.pnpm/next@16.2.9_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/server/image-optimizer.d.ts","../../node_modules/.pnpm/next@16.2.9_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/server/next-server.d.ts","../../node_modules/.pnpm/next@16.2.9_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/server/lib/types.d.ts","../../node_modules/.pnpm/next@16.2.9_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/server/lib/lru-cache.d.ts","../../node_modules/.pnpm/next@16.2.9_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/server/lib/dev-bundler-service.d.ts","../../node_modules/.pnpm/next@16.2.9_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/server/dev/static-paths-worker.d.ts","../../node_modules/.pnpm/next@16.2.9_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/server/dev/next-dev-server.d.ts","../../node_modules/.pnpm/next@16.2.9_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/server/next.d.ts","../../node_modules/.pnpm/next@16.2.9_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/server/lib/render-server.d.ts","../../node_modules/.pnpm/next@16.2.9_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/server/lib/router-server.d.ts","../../node_modules/.pnpm/next@16.2.9_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/shared/lib/router/utils/path-match.d.ts","../../node_modules/.pnpm/next@16.2.9_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/server/lib/router-utils/filesystem.d.ts","../../node_modules/.pnpm/next@16.2.9_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/server/lib/router-utils/setup-dev-bundler.d.ts","../../node_modules/.pnpm/next@16.2.9_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/server/lib/router-utils/router-server-context.d.ts","../../node_modules/.pnpm/next@16.2.9_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/server/route-modules/route-module.d.ts","../../node_modules/.pnpm/next@16.2.9_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/server/load-components.d.ts","../../node_modules/.pnpm/next@16.2.9_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/server/web/adapter.d.ts","../../node_modules/.pnpm/next@16.2.9_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/server/app-render/types.d.ts","../../node_modules/.pnpm/next@16.2.9_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/build/webpack/loaders/metadata/types.d.ts","../../node_modules/.pnpm/next@16.2.9_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/build/webpack/loaders/next-app-loader/index.d.ts","../../node_modules/.pnpm/next@16.2.9_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/server/lib/app-dir-module.d.ts","../../node_modules/.pnpm/next@16.2.9_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/server/app-render/app-render.d.ts","../../node_modules/.pnpm/next@16.2.9_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/server/route-modules/app-page/vendored/contexts/entrypoints.d.ts","../../node_modules/.pnpm/next@16.2.9_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/client/components/error-boundary.d.ts","../../node_modules/.pnpm/next@16.2.9_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/client/components/layout-router.d.ts","../../node_modules/.pnpm/next@16.2.9_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/client/components/render-from-template-context.d.ts","../../node_modules/.pnpm/next@16.2.9_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/client/components/client-page.d.ts","../../node_modules/.pnpm/next@16.2.9_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/client/components/client-segment.d.ts","../../node_modules/.pnpm/next@16.2.9_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/client/components/http-access-fallback/error-boundary.d.ts","../../node_modules/.pnpm/next@16.2.9_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/lib/metadata/types/alternative-urls-types.d.ts","../../node_modules/.pnpm/next@16.2.9_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/lib/metadata/types/extra-types.d.ts","../../node_modules/.pnpm/next@16.2.9_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/lib/metadata/types/metadata-types.d.ts","../../node_modules/.pnpm/next@16.2.9_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/lib/metadata/types/manifest-types.d.ts","../../node_modules/.pnpm/next@16.2.9_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/lib/metadata/types/opengraph-types.d.ts","../../node_modules/.pnpm/next@16.2.9_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/lib/metadata/types/twitter-types.d.ts","../../node_modules/.pnpm/next@16.2.9_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/lib/metadata/types/metadata-interface.d.ts","../../node_modules/.pnpm/next@16.2.9_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/lib/metadata/types/resolvers.d.ts","../../node_modules/.pnpm/next@16.2.9_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/lib/metadata/types/icons.d.ts","../../node_modules/.pnpm/next@16.2.9_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/lib/metadata/resolve-metadata.d.ts","../../node_modules/.pnpm/next@16.2.9_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/lib/metadata/metadata.d.ts","../../node_modules/.pnpm/next@16.2.9_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/lib/framework/boundary-components.d.ts","../../node_modules/.pnpm/next@16.2.9_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/server/app-render/rsc/preloads.d.ts","../../node_modules/.pnpm/next@16.2.9_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/server/app-render/rsc/postpone.d.ts","../../node_modules/.pnpm/next@16.2.9_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/server/app-render/rsc/taint.d.ts","../../node_modules/.pnpm/next@16.2.9_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/server/app-render/collect-segment-data.d.ts","../../node_modules/.pnpm/next@16.2.9_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/server/app-render/instant-validation/instant-validation.d.ts","../../node_modules/.pnpm/next@16.2.9_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/next-devtools/userspace/app/segment-explorer-node.d.ts","../../node_modules/.pnpm/next@16.2.9_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/server/app-render/entry-base.d.ts","../../node_modules/.pnpm/next@16.2.9_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/build/templates/app-page.d.ts","../../node_modules/.pnpm/next@16.2.9_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/server/route-modules/app-page/helpers/prerender-manifest-matcher.d.ts","../../node_modules/.pnpm/@types+react@19.2.17/node_modules/@types/react/jsx-dev-runtime.d.ts","../../node_modules/.pnpm/@types+react@19.2.17/node_modules/@types/react/compiler-runtime.d.ts","../../node_modules/.pnpm/next@16.2.9_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/entrypoints.d.ts","../../node_modules/.pnpm/@types+react-dom@19.2.3_@types+react@19.2.17/node_modules/@types/react-dom/client.d.ts","../../node_modules/.pnpm/@types+react-dom@19.2.3_@types+react@19.2.17/node_modules/@types/react-dom/static.d.ts","../../node_modules/.pnpm/@types+react-dom@19.2.3_@types+react@19.2.17/node_modules/@types/react-dom/server.d.ts","../../node_modules/.pnpm/next@16.2.9_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/entrypoints.d.ts","../../node_modules/.pnpm/next@16.2.9_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/server/route-modules/app-page/module.d.ts","../../node_modules/.pnpm/next@16.2.9_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/server/request/fallback-params.d.ts","../../node_modules/.pnpm/next@16.2.9_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/server/web/spec-extension/image-response.d.ts","../../node_modules/.pnpm/next@16.2.9_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/server/web/spec-extension/user-agent.d.ts","../../node_modules/.pnpm/next@16.2.9_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/server/web/spec-extension/url-pattern.d.ts","../../node_modules/.pnpm/next@16.2.9_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/server/after/index.d.ts","../../node_modules/.pnpm/next@16.2.9_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/server/request/connection.d.ts","../../node_modules/.pnpm/next@16.2.9_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/server/web/exports/index.d.ts","../../node_modules/.pnpm/next@16.2.9_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/server/request-meta.d.ts","../../node_modules/.pnpm/next@16.2.9_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/cli/next-test.d.ts","../../node_modules/.pnpm/next@16.2.9_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/shared/lib/size-limit.d.ts","../../node_modules/.pnpm/next@16.2.9_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/server/config-shared.d.ts","../../node_modules/.pnpm/next@16.2.9_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/server/base-http/index.d.ts","../../node_modules/.pnpm/next@16.2.9_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/server/api-utils/index.d.ts","../../node_modules/.pnpm/next@16.2.9_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/build/adapter/build-complete.d.ts","../../node_modules/.pnpm/next@16.2.9_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/types.d.ts","../../node_modules/.pnpm/next@16.2.9_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/shared/lib/html-context.shared-runtime.d.ts","../../node_modules/.pnpm/next@16.2.9_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/shared/lib/utils.d.ts","../../node_modules/.pnpm/next@16.2.9_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/pages/_app.d.ts","../../node_modules/.pnpm/next@16.2.9_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/app.d.ts","../../node_modules/.pnpm/next@16.2.9_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/server/web/spec-extension/unstable-cache.d.ts","../../node_modules/.pnpm/next@16.2.9_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/server/web/spec-extension/revalidate.d.ts","../../node_modules/.pnpm/next@16.2.9_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/server/web/spec-extension/unstable-no-store.d.ts","../../node_modules/.pnpm/next@16.2.9_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/server/use-cache/cache-tag.d.ts","../../node_modules/.pnpm/next@16.2.9_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/cache.d.ts","../../node_modules/.pnpm/next@16.2.9_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/pages/_document.d.ts","../../node_modules/.pnpm/next@16.2.9_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/document.d.ts","../../node_modules/.pnpm/next@16.2.9_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/shared/lib/dynamic.d.ts","../../node_modules/.pnpm/next@16.2.9_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dynamic.d.ts","../../node_modules/.pnpm/next@16.2.9_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/pages/_error.d.ts","../../node_modules/.pnpm/next@16.2.9_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/client/components/catch-error.d.ts","../../node_modules/.pnpm/next@16.2.9_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/api/error.d.ts","../../node_modules/.pnpm/next@16.2.9_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/error.d.ts","../../node_modules/.pnpm/next@16.2.9_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/shared/lib/head.d.ts","../../node_modules/.pnpm/next@16.2.9_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/head.d.ts","../../node_modules/.pnpm/next@16.2.9_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/server/request/cookies.d.ts","../../node_modules/.pnpm/next@16.2.9_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/server/request/headers.d.ts","../../node_modules/.pnpm/next@16.2.9_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/server/request/draft-mode.d.ts","../../node_modules/.pnpm/next@16.2.9_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/headers.d.ts","../../node_modules/.pnpm/next@16.2.9_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/shared/lib/get-img-props.d.ts","../../node_modules/.pnpm/next@16.2.9_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/client/image-component.d.ts","../../node_modules/.pnpm/next@16.2.9_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/shared/lib/image-external.d.ts","../../node_modules/.pnpm/next@16.2.9_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/image.d.ts","../../node_modules/.pnpm/next@16.2.9_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/client/link.d.ts","../../node_modules/.pnpm/next@16.2.9_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/link.d.ts","../../node_modules/.pnpm/next@16.2.9_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/client/components/unrecognized-action-error.d.ts","../../node_modules/.pnpm/next@16.2.9_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/client/components/redirect.d.ts","../../node_modules/.pnpm/next@16.2.9_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/client/components/not-found.d.ts","../../node_modules/.pnpm/next@16.2.9_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/client/components/forbidden.d.ts","../../node_modules/.pnpm/next@16.2.9_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/client/components/unauthorized.d.ts","../../node_modules/.pnpm/next@16.2.9_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/client/components/unstable-rethrow.server.d.ts","../../node_modules/.pnpm/next@16.2.9_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/client/components/unstable-rethrow.d.ts","../../node_modules/.pnpm/next@16.2.9_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/client/components/navigation.react-server.d.ts","../../node_modules/.pnpm/next@16.2.9_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/client/components/navigation.d.ts","../../node_modules/.pnpm/next@16.2.9_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/navigation.d.ts","../../node_modules/.pnpm/next@16.2.9_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/router.d.ts","../../node_modules/.pnpm/next@16.2.9_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/client/script.d.ts","../../node_modules/.pnpm/next@16.2.9_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/script.d.ts","../../node_modules/.pnpm/next@16.2.9_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/compiled/@edge-runtime/primitives/url.d.ts","../../node_modules/.pnpm/next@16.2.9_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/compiled/@vercel/og/satori/index.d.ts","../../node_modules/.pnpm/next@16.2.9_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/compiled/@vercel/og/types.d.ts","../../node_modules/.pnpm/next@16.2.9_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/server.d.ts","../../node_modules/.pnpm/next@16.2.9_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/types/global.d.ts","../../node_modules/.pnpm/next@16.2.9_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/types/compiled.d.ts","../../node_modules/.pnpm/next@16.2.9_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/types.d.ts","../../node_modules/.pnpm/next@16.2.9_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/index.d.ts","../../node_modules/.pnpm/next@16.2.9_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/image-types/global.d.ts","./.next/dev/types/routes.d.ts","./next-env.d.ts","./next.config.ts","../../packages/core/src/types.ts","../../packages/core/src/registry.ts","../../packages/core/src/experience.tsx","../../packages/core/src/index.ts","../../packages/components/src/primitives/surface.tsx","../../packages/components/src/primitives/section.tsx","../../packages/components/src/primitives/container.tsx","../../packages/components/src/primitives/stack.tsx","../../packages/components/src/primitives/grid.tsx","../../packages/components/src/patterns/pattern.tsx","../../packages/components/src/patterns/hero.tsx","../../packages/components/src/patterns/features.tsx","../../packages/components/src/patterns/cta.tsx","../../packages/components/src/patterns/footer.tsx","../../packages/components/src/atoms/button.tsx","../../packages/components/src/atoms/input.tsx","../../packages/components/src/atoms/textarea.tsx","../../packages/components/src/atoms/badge.tsx","../../packages/components/src/index.ts","../../packages/react/src/index.ts","../../packages/packs/zenix/src/index.ts","../../packages/scenes/src/oceanscene.tsx","../../packages/scenes/src/nightcityscene.tsx","../../packages/scenes/src/autumnscene.tsx","../../packages/scenes/src/index.ts","../../packages/effects/src/oceaneffect.tsx","../../packages/effects/src/nightcityeffect.tsx","../../packages/effects/src/autumneffect.tsx","../../packages/effects/src/index.ts","../../packages/packs/ocean/src/index.ts","../../packages/packs/night-city/src/index.ts","../../packages/packs/autumn/src/index.ts","./src/components/providers.tsx","./src/app/layout.tsx","../../packages/blueprints/src/landings/zenixlanding.tsx","../../packages/blueprints/src/landings/oceanlanding.tsx","../../packages/blueprints/src/landings/nightcitylanding.tsx","../../packages/blueprints/src/landings/autumnlanding.tsx","../../packages/blueprints/src/portfolios/zenixportfolio.tsx","../../packages/blueprints/src/portfolios/oceanportfolio.tsx","../../packages/blueprints/src/portfolios/nightcityportfolio.tsx","../../packages/blueprints/src/portfolios/autumnportfolio.tsx","../../packages/blueprints/src/contact/zenixcontact.tsx","../../packages/blueprints/src/contact/oceancontact.tsx","../../packages/blueprints/src/contact/nightcitycontact.tsx","../../packages/blueprints/src/contact/autumncontact.tsx","../../packages/blueprints/src/newsletter/zenixnewsletter.tsx","../../packages/blueprints/src/newsletter/oceannewsletter.tsx","../../packages/blueprints/src/newsletter/nightcitynewsletter.tsx","../../packages/blueprints/src/newsletter/autumnnewsletter.tsx","../../packages/blueprints/src/auth/zenixauth.tsx","../../packages/blueprints/src/auth/oceanauth.tsx","../../packages/blueprints/src/auth/nightcityauth.tsx","../../packages/blueprints/src/auth/autumnauth.tsx","../../packages/blueprints/src/blog/zenixblog.tsx","../../packages/blueprints/src/blog/oceanblog.tsx","../../packages/blueprints/src/blog/nightcityblog.tsx","../../packages/blueprints/src/blog/autumnblog.tsx","../../packages/blueprints/src/dashboard/zenixdashboard.tsx","../../packages/blueprints/src/dashboard/oceandashboard.tsx","../../packages/blueprints/src/dashboard/nightcitydashboard.tsx","../../packages/blueprints/src/dashboard/autumndashboard.tsx","../../packages/blueprints/src/registry.ts","../../packages/blueprints/src/index.ts","./src/app/page.tsx","./src/app/blueprints/page.tsx","./src/app/blueprints/[id]/page.tsx","./src/app/components/page.tsx","./src/app/themes/page.tsx","./.next/dev/types/cache-life.d.ts","./.next/dev/types/validator.ts"],"fileIdsList":[[97,143,483,484,485,486],[97,143],[97,143,226,527,530,566,597,598,599,600,601],[97,143,528,529,530],[97,143,226,528],[85,97,143,226,507,517,551,552,596],[97,143,226,507,551,596],[97,143,226],[97,143,226,525,528,565],[85,97,143,226,551,552,596],[97,143,226,525,552,553,562,563,564],[97,140,143],[97,142,143],[143],[97,143,148,176],[97,143,144,149,154,162,173,184],[97,143,144,145,154,162],[92,93,94,97,143],[97,143,146,185],[97,143,147,148,155,163],[97,143,148,173,181],[97,143,149,151,154,162],[97,142,143,150],[97,143,151,152],[97,143,153,154],[97,142,143,154],[97,143,154,155,156,173,184],[97,143,154,155,156,169,173,176],[97,143,151,154,157,162,173,184],[97,143,154,155,157,158,162,173,181,184],[97,143,157,159,173,181,184],[95,96,97,98,99,100,101,139,140,141,142,143,144,145,146,147,148,149,150,151,152,153,154,155,156,157,158,159,160,161,162,163,164,165,166,167,168,169,170,171,172,173,174,175,176,177,178,179,180,181,182,183,184,185,186,187,188,189,190],[97,143,154,160],[97,143,161,184,189],[97,143,151,154,162,173],[97,143,163],[97,143,164],[97,142,143,165],[97,140,141,142,143,144,145,146,147,148,149,150,151,152,153,154,155,156,157,158,159,160,161,162,163,164,165,166,167,168,169,170,171,172,173,174,175,176,177,178,179,180,181,182,183,184,185,186,187,188,189,190],[97,143,167],[97,143,168],[97,143,154,169,170],[97,143,169,171,185,187],[97,143,154,173,174,176],[97,143,175,176],[97,143,173,174],[97,143,176],[97,143,177],[97,140,143,173,178],[97,143,154,179,180],[97,143,179,180],[97,143,148,162,173,181],[97,143,182],[97,143,162,183],[97,143,157,168,184],[97,143,148,185],[97,143,173,186],[97,143,161,187],[97,143,188],[97,138,143],[97,138,143,154,156,165,173,176,184,187,189],[97,143,173,190],[85,89,97,143,192,193,194,196,478,523],[85,97,143],[85,89,97,143,192,193,194,195,459,478,523],[85,89,97,143,192,193,195,196,478,523],[85,97,143,196,459,460],[85,97,143,196,459],[85,89,97,143,193,194,195,196,478,523],[85,89,97,143,192,194,195,196,478,523],[83,84,97,143],[97,143,481],[97,143,429,492,493],[97,143,201,202,204,216,240,355,366,474],[97,143,204,235,236,237,239,474],[97,143,204,372,374,376,377,379,474,476],[97,143,204,238,275,474],[97,143,202,204,215,216,222,228,233,354,355,356,365,474,476],[97,143,474],[97,143,211,217,236,256,351],[97,143,204],[97,143,197,211,217],[97,143,383],[97,143,380,381,383],[97,143,380,382,474],[97,143,157,256,453,471],[97,143,157,327,330,346,351,471],[97,143,157,299,471],[97,143,359],[97,143,358,359,360],[97,143,358],[91,97,143,157,197,204,216,222,228,234,236,240,241,254,255,322,352,353,366,474,478],[97,143,201,204,238,275,372,373,378,474,526],[97,143,238,526],[97,143,201,255,424,474,526],[97,143,526],[97,143,204,238,239,526],[97,143,375,526],[97,143,241,354,357,364],[85,97,143,429],[97,143,168,211,226],[97,143,211,226],[85,97,143,296],[85,97,143,226],[85,97,143,217,226,429],[97,143,211,282,296,297,508,515],[97,143,281,509,510,511,512,514],[97,143,332],[97,143,332,333],[97,143,215,217,284,285],[97,143,217,291,292],[97,143,217,286,294],[97,143,291],[97,143,209,217,284,285,286,287,288,289,290,291,294],[97,143,217,284,291,292,293,295],[97,143,217,285,287,288],[97,143,285,287,290,292],[97,143,513],[97,143,217],[85,97,143,205,502],[85,97,143,184],[85,97,143,238,273],[85,97,143,238,366],[97,143,271,276],[85,97,143,272,480],[85,89,97,143,157,192,193,194,195,196,478,522],[97,143,157,217],[97,143,157,216,221,302,319,361,362,366,421,423,474,475],[97,143,254,363],[97,143,478],[97,143,203],[85,97,143,208,211,426,442,444],[97,143,168,211,426,441,442,443,525],[97,143,435,436,437,438,439,440],[97,143,437],[97,143,441],[97,143,226,390,391,393],[85,97,143,217,384,385,386,387,392],[97,143,390,392],[97,143,388],[97,143,389],[85,97,143,226,272,480],[85,97,143,226,479,480],[85,97,143,226,480],[97,143,319,320],[97,143,320],[97,143,157,475,480],[97,143,349],[97,142,143,348],[97,143,211,217,223,225,327,340,344,346,423,426,463,464,471,475],[97,143,217,266,288],[97,143,327,338,341,346],[85,97,143,208,211,327,330,346,349,383,430,431,432,433,434,445,446,447,448,449,450,451,452,526],[97,143,208,211,236,327,334,335,336,339,340],[97,143,173,217,236,338,345,426,427,471],[97,143,342],[97,143,157,168,205,217,221,231,263,264,267,319,322,387,421,422,463,474,475,476,478,526],[97,143,208,209,211],[97,143,327],[97,142,143,236,263,264,321,322,323,324,325,326,475],[97,143,346],[97,142,143,210,211,221,225,261,327,334,335,336,337,338,341,342,343,344,345,464],[97,143,157,261,262,334,475,476],[97,143,236,264,319,322,327,423,475],[97,143,157,474,476],[97,143,157,173,471,475,476],[97,143,157,168,197,211,216,223,225,228,231,238,258,263,264,265,266,267,302,303,305,308,310,313,314,315,316,318,366,421,423,471,474,475,476],[97,143,157,173],[97,143,204,205,206,234,471,472,473,478,480,526],[97,143,201,202,474],[97,143,395],[97,143,157,173,184,213,379,383,384,385,386,387,393,394,526],[97,143,168,184,197,211,213,225,228,264,303,308,318,319,372,399,400,401,407,410,411,421,423,471,474],[97,143,228,234,241,254,264,322,474],[97,143,157,184,205,216,225,264,405,471,474],[97,143,425],[97,143,157,395,408,409,418],[97,143,471,474],[97,143,324,464],[97,143,225,263,366,480],[97,143,157,168,203,308,368,372,401,407,410,413,471],[97,143,157,241,254,372,414],[97,143,204,265,366,416,474,476],[97,143,157,184,387,474],[97,143,157,238,265,366,367,368,377,395,415,417,474],[91,97,143,157,263,420,478,480],[97,143,317,421],[97,143,157,168,211,214,216,217,223,225,231,240,241,254,264,267,303,305,315,318,319,366,399,400,401,402,404,406,421,423,471,480],[97,143,157,173,241,407,412,418,471],[97,143,244,245,246,247,248,249,250,251,252,253],[97,143,258,309],[97,143,311],[97,143,309],[97,143,311,312],[97,143,157,215,216,217,221,222,475],[97,143,157,168,203,205,223,227,263,266,267,301,421,471,476,478,480],[97,143,157,168,184,207,214,215,225,227,264,419,464,470,475],[97,143,334],[97,143,335],[97,143,217,228,463],[97,143,336],[97,143,210],[97,143,212,224],[97,143,157,212,216,223],[97,143,219,224],[97,143,220],[97,143,212,213],[97,143,212,268],[97,143,212],[97,143,214,258,307],[97,143,306],[97,143,211,213,214],[97,143,214,304],[97,143,211,213],[97,143,263,366],[97,143,463],[97,143,157,184,223,225,229,263,366,420,423,426,427,428,454,455,458,462,464,471,475],[97,143,277,280,282,283,296,297],[85,97,143,194,196,226,456,457],[85,97,143,194,196,226,456,457,461],[97,143,350],[97,143,236,257,262,263,327,328,329,330,331,333,346,347,349,352,420,423,474,476],[97,143,296],[97,143,157,301,471],[97,143,301],[97,143,157,223,269,298,300,302,420,471,478,480],[97,143,277,278,279,280,282,283,296,297,479],[91,97,143,157,168,184,212,213,225,231,263,264,267,366,418,419,421,471,474,475,478],[97,143,208,211,218],[97,143,262,264,396,399],[97,143,262,397,465,466,467,468,469],[97,143,157,258,474],[97,143,157],[97,143,261,346],[97,143,260],[97,143,262,315],[97,143,259,261,474],[97,143,157,207,262,396,397,398,471,474,475],[85,97,143,211,217,295],[85,97,143,209],[97,143,199,200],[85,97,143,205],[85,97,143,211,281],[85,91,97,143,263,267,478,480],[97,143,205,502,503],[85,97,143,276],[85,97,143,168,184,203,270,272,274,275,480],[97,143,211,238,475],[97,143,211,403],[85,97,143,155,157,168,201,203,276,374,478,479],[85,97,143,192,193,194,195,196,478,523],[85,86,87,88,89,97,143],[97,143,148],[97,143,369,370,371],[97,143,369],[85,89,97,143,157,159,168,191,192,193,194,195,196,197,203,231,236,413,441,476,477,480,523],[97,143,488],[97,143,490],[97,143,494],[97,143,496],[97,143,498,499,500],[97,143,504],[90,97,143,482,487,489,491,495,497,501,505,507,517,518,520,524,525,526,527],[97,143,506],[97,143,516],[97,143,272],[97,143,519],[97,142,143,262,396,397,399,465,466,468,469,521,523],[97,143,191],[97,143,173,191],[97,110,114,143,184],[97,110,143,173,184],[97,105,143],[97,107,110,143,181,184],[97,143,162,181],[97,105,143,191],[97,107,110,143,162,184],[97,102,103,106,109,143,154,173,184],[97,110,117,143],[97,102,108,143],[97,110,131,132,143],[97,106,110,143,176,184,191],[97,131,143,191],[97,104,105,143,191],[97,110,143],[97,104,105,106,107,108,109,110,111,112,114,115,116,117,118,119,120,121,122,123,124,125,126,127,128,129,130,132,133,134,135,136,137,143],[97,110,125,143],[97,110,117,118,143],[97,108,110,118,119,143],[97,109,143],[97,102,105,110,143],[97,110,114,118,119,143],[97,114,143],[97,108,110,113,143,184],[97,102,107,110,117,143],[97,143,173],[97,105,110,131,143,189,191],[85,97,143,226,551],[97,143,226,567,568,569,570,571,572,573,574,575,576,577,578,579,580,581,582,583,584,585,586,587,588,589,590,591,592,593,594,595],[97,143,226,551],[85,97,143,226,567,568,569,570,571,572,573,574,575,576,577,578,579,580,581,582,583,584,585,586,587,588,589,590,591,592,593,594],[97,143,226,537,538,539,540,541,542,543,544,545,546,547,548,549,550],[97,143,226,542],[85,97,143,226,541,542],[85,97,143,226,540,542],[85,97,143,226,538,539,540],[85,97,143,226,533,534],[97,143,226,533,534,535],[97,143,226,533],[97,143,226,558,559,560],[97,143,226,525,536,557,561],[97,143,226,525,536],[97,143,226,536,551],[97,143,226,554,555,556]],"fileInfos":[{"version":"c430d44666289dae81f30fa7b2edebf186ecc91a2d4c71266ea6ae76388792e1","affectsGlobalScope":true,"impliedFormat":1},{"version":"45b7ab580deca34ae9729e97c13cfd999df04416a79116c3bfb483804f85ded4","impliedFormat":1},{"version":"3facaf05f0c5fc569c5649dd359892c98a85557e3e0c847964caeb67076f4d75","impliedFormat":1},{"version":"e44bb8bbac7f10ecc786703fe0a6a4b952189f908707980ba8f3c8975a760962","impliedFormat":1},{"version":"5e1c4c362065a6b95ff952c0eab010f04dcd2c3494e813b493ecfd4fcb9fc0d8","impliedFormat":1},{"version":"68d73b4a11549f9c0b7d352d10e91e5dca8faa3322bfb77b661839c42b1ddec7","impliedFormat":1},{"version":"5efce4fc3c29ea84e8928f97adec086e3dc876365e0982cc8479a07954a3efd4","impliedFormat":1},{"version":"feecb1be483ed332fad555aff858affd90a48ab19ba7272ee084704eb7167569","impliedFormat":1},{"version":"ee7bad0c15b58988daa84371e0b89d313b762ab83cb5b31b8a2d1162e8eb41c2","impliedFormat":1},{"version":"27bdc30a0e32783366a5abeda841bc22757c1797de8681bbe81fbc735eeb1c10","impliedFormat":1},{"version":"8fd575e12870e9944c7e1d62e1f5a73fcf23dd8d3a321f2a2c74c20d022283fe","impliedFormat":1},{"version":"2ab096661c711e4a81cc464fa1e6feb929a54f5340b46b0a07ac6bbf857471f0","impliedFormat":1},{"version":"080941d9f9ff9307f7e27a83bcd888b7c8270716c39af943532438932ec1d0b9","affectsGlobalScope":true,"impliedFormat":1},{"version":"2e80ee7a49e8ac312cc11b77f1475804bee36b3b2bc896bead8b6e1266befb43","affectsGlobalScope":true,"impliedFormat":1},{"version":"c57796738e7f83dbc4b8e65132f11a377649c00dd3eee333f672b8f0a6bea671","affectsGlobalScope":true,"impliedFormat":1},{"version":"dc2df20b1bcdc8c2d34af4926e2c3ab15ffe1160a63e58b7e09833f616efff44","affectsGlobalScope":true,"impliedFormat":1},{"version":"515d0b7b9bea2e31ea4ec968e9edd2c39d3eebf4a2d5cbd04e88639819ae3b71","affectsGlobalScope":true,"impliedFormat":1},{"version":"0559b1f683ac7505ae451f9a96ce4c3c92bdc71411651ca6ddb0e88baaaad6a3","affectsGlobalScope":true,"impliedFormat":1},{"version":"0dc1e7ceda9b8b9b455c3a2d67b0412feab00bd2f66656cd8850e8831b08b537","affectsGlobalScope":true,"impliedFormat":1},{"version":"ce691fb9e5c64efb9547083e4a34091bcbe5bdb41027e310ebba8f7d96a98671","affectsGlobalScope":true,"impliedFormat":1},{"version":"8d697a2a929a5fcb38b7a65594020fcef05ec1630804a33748829c5ff53640d0","affectsGlobalScope":true,"impliedFormat":1},{"version":"4ff2a353abf8a80ee399af572debb8faab2d33ad38c4b4474cff7f26e7653b8d","affectsGlobalScope":true,"impliedFormat":1},{"version":"fb0f136d372979348d59b3f5020b4cdb81b5504192b1cacff5d1fbba29378aa1","affectsGlobalScope":true,"impliedFormat":1},{"version":"d15bea3d62cbbdb9797079416b8ac375ae99162a7fba5de2c6c505446486ac0a","affectsGlobalScope":true,"impliedFormat":1},{"version":"68d18b664c9d32a7336a70235958b8997ebc1c3b8505f4f1ae2b7e7753b87618","affectsGlobalScope":true,"impliedFormat":1},{"version":"eb3d66c8327153d8fa7dd03f9c58d351107fe824c79e9b56b462935176cdf12a","affectsGlobalScope":true,"impliedFormat":1},{"version":"38f0219c9e23c915ef9790ab1d680440d95419ad264816fa15009a8851e79119","affectsGlobalScope":true,"impliedFormat":1},{"version":"69ab18c3b76cd9b1be3d188eaf8bba06112ebbe2f47f6c322b5105a6fbc45a2e","affectsGlobalScope":true,"impliedFormat":1},{"version":"a680117f487a4d2f30ea46f1b4b7f58bef1480456e18ba53ee85c2746eeca012","affectsGlobalScope":true,"impliedFormat":1},{"version":"2f11ff796926e0832f9ae148008138ad583bd181899ab7dd768a2666700b1893","affectsGlobalScope":true,"impliedFormat":1},{"version":"4de680d5bb41c17f7f68e0419412ca23c98d5749dcaaea1896172f06435891fc","affectsGlobalScope":true,"impliedFormat":1},{"version":"954296b30da6d508a104a3a0b5d96b76495c709785c1d11610908e63481ee667","affectsGlobalScope":true,"impliedFormat":1},{"version":"ac9538681b19688c8eae65811b329d3744af679e0bdfa5d842d0e32524c73e1c","affectsGlobalScope":true,"impliedFormat":1},{"version":"0a969edff4bd52585473d24995c5ef223f6652d6ef46193309b3921d65dd4376","affectsGlobalScope":true,"impliedFormat":1},{"version":"9e9fbd7030c440b33d021da145d3232984c8bb7916f277e8ffd3dc2e3eae2bdb","affectsGlobalScope":true,"impliedFormat":1},{"version":"811ec78f7fefcabbda4bfa93b3eb67d9ae166ef95f9bff989d964061cbf81a0c","affectsGlobalScope":true,"impliedFormat":1},{"version":"717937616a17072082152a2ef351cb51f98802fb4b2fdabd32399843875974ca","affectsGlobalScope":true,"impliedFormat":1},{"version":"d7e7d9b7b50e5f22c915b525acc5a49a7a6584cf8f62d0569e557c5cfc4b2ac2","affectsGlobalScope":true,"impliedFormat":1},{"version":"71c37f4c9543f31dfced6c7840e068c5a5aacb7b89111a4364b1d5276b852557","affectsGlobalScope":true,"impliedFormat":1},{"version":"576711e016cf4f1804676043e6a0a5414252560eb57de9faceee34d79798c850","affectsGlobalScope":true,"impliedFormat":1},{"version":"89c1b1281ba7b8a96efc676b11b264de7a8374c5ea1e6617f11880a13fc56dc6","affectsGlobalScope":true,"impliedFormat":1},{"version":"74f7fa2d027d5b33eb0471c8e82a6c87216223181ec31247c357a3e8e2fddc5b","affectsGlobalScope":true,"impliedFormat":1},{"version":"d6d7ae4d1f1f3772e2a3cde568ed08991a8ae34a080ff1151af28b7f798e22ca","affectsGlobalScope":true,"impliedFormat":1},{"version":"063600664504610fe3e99b717a1223f8b1900087fab0b4cad1496a114744f8df","affectsGlobalScope":true,"impliedFormat":1},{"version":"934019d7e3c81950f9a8426d093458b65d5aff2c7c1511233c0fd5b941e608ab","affectsGlobalScope":true,"impliedFormat":1},{"version":"52ada8e0b6e0482b728070b7639ee42e83a9b1c22d205992756fe020fd9f4a47","affectsGlobalScope":true,"impliedFormat":1},{"version":"3bdefe1bfd4d6dee0e26f928f93ccc128f1b64d5d501ff4a8cf3c6371200e5e6","affectsGlobalScope":true,"impliedFormat":1},{"version":"59fb2c069260b4ba00b5643b907ef5d5341b167e7d1dbf58dfd895658bda2867","affectsGlobalScope":true,"impliedFormat":1},{"version":"639e512c0dfc3fad96a84caad71b8834d66329a1f28dc95e3946c9b58176c73a","affectsGlobalScope":true,"impliedFormat":1},{"version":"368af93f74c9c932edd84c58883e736c9e3d53cec1fe24c0b0ff451f529ceab1","affectsGlobalScope":true,"impliedFormat":1},{"version":"af3dd424cf267428f30ccfc376f47a2c0114546b55c44d8c0f1d57d841e28d74","affectsGlobalScope":true,"impliedFormat":1},{"version":"995c005ab91a498455ea8dfb63aa9f83fa2ea793c3d8aa344be4a1678d06d399","affectsGlobalScope":true,"impliedFormat":1},{"version":"959d36cddf5e7d572a65045b876f2956c973a586da58e5d26cde519184fd9b8a","affectsGlobalScope":true,"impliedFormat":1},{"version":"965f36eae237dd74e6cca203a43e9ca801ce38824ead814728a2807b1910117d","affectsGlobalScope":true,"impliedFormat":1},{"version":"3925a6c820dcb1a06506c90b1577db1fdbf7705d65b62b99dce4be75c637e26b","affectsGlobalScope":true,"impliedFormat":1},{"version":"0a3d63ef2b853447ec4f749d3f368ce642264246e02911fcb1590d8c161b8005","affectsGlobalScope":true,"impliedFormat":1},{"version":"8cdf8847677ac7d20486e54dd3fcf09eda95812ac8ace44b4418da1bbbab6eb8","affectsGlobalScope":true,"impliedFormat":1},{"version":"8444af78980e3b20b49324f4a16ba35024fef3ee069a0eb67616ea6ca821c47a","affectsGlobalScope":true,"impliedFormat":1},{"version":"3287d9d085fbd618c3971944b65b4be57859f5415f495b33a6adc994edd2f004","affectsGlobalScope":true,"impliedFormat":1},{"version":"b4b67b1a91182421f5df999988c690f14d813b9850b40acd06ed44691f6727ad","affectsGlobalScope":true,"impliedFormat":1},{"version":"df83c2a6c73228b625b0beb6669c7ee2a09c914637e2d35170723ad49c0f5cd4","affectsGlobalScope":true,"impliedFormat":1},{"version":"436aaf437562f276ec2ddbee2f2cdedac7664c1e4c1d2c36839ddd582eeb3d0a","affectsGlobalScope":true,"impliedFormat":1},{"version":"8e3c06ea092138bf9fa5e874a1fdbc9d54805d074bee1de31b99a11e2fec239d","affectsGlobalScope":true,"impliedFormat":1},{"version":"87dc0f382502f5bbce5129bdc0aea21e19a3abbc19259e0b43ae038a9fc4e326","affectsGlobalScope":true,"impliedFormat":1},{"version":"b1cb28af0c891c8c96b2d6b7be76bd394fddcfdb4709a20ba05a7c1605eea0f9","affectsGlobalScope":true,"impliedFormat":1},{"version":"2fef54945a13095fdb9b84f705f2b5994597640c46afeb2ce78352fab4cb3279","affectsGlobalScope":true,"impliedFormat":1},{"version":"ac77cb3e8c6d3565793eb90a8373ee8033146315a3dbead3bde8db5eaf5e5ec6","affectsGlobalScope":true,"impliedFormat":1},{"version":"56e4ed5aab5f5920980066a9409bfaf53e6d21d3f8d020c17e4de584d29600ad","affectsGlobalScope":true,"impliedFormat":1},{"version":"4ece9f17b3866cc077099c73f4983bddbcb1dc7ddb943227f1ec070f529dedd1","affectsGlobalScope":true,"impliedFormat":1},{"version":"0a6282c8827e4b9a95f4bf4f5c205673ada31b982f50572d27103df8ceb8013c","affectsGlobalScope":true,"impliedFormat":1},{"version":"1c9319a09485199c1f7b0498f2988d6d2249793ef67edda49d1e584746be9032","affectsGlobalScope":true,"impliedFormat":1},{"version":"e3a2a0cee0f03ffdde24d89660eba2685bfbdeae955a6c67e8c4c9fd28928eeb","affectsGlobalScope":true,"impliedFormat":1},{"version":"811c71eee4aa0ac5f7adf713323a5c41b0cf6c4e17367a34fbce379e12bbf0a4","affectsGlobalScope":true,"impliedFormat":1},{"version":"51ad4c928303041605b4d7ae32e0c1ee387d43a24cd6f1ebf4a2699e1076d4fa","affectsGlobalScope":true,"impliedFormat":1},{"version":"60037901da1a425516449b9a20073aa03386cce92f7a1fd902d7602be3a7c2e9","affectsGlobalScope":true,"impliedFormat":1},{"version":"d4b1d2c51d058fc21ec2629fff7a76249dec2e36e12960ea056e3ef89174080f","affectsGlobalScope":true,"impliedFormat":1},{"version":"22adec94ef7047a6c9d1af3cb96be87a335908bf9ef386ae9fd50eeb37f44c47","affectsGlobalScope":true,"impliedFormat":1},{"version":"196cb558a13d4533a5163286f30b0509ce0210e4b316c56c38d4c0fd2fb38405","affectsGlobalScope":true,"impliedFormat":1},{"version":"73f78680d4c08509933daf80947902f6ff41b6230f94dd002ae372620adb0f60","affectsGlobalScope":true,"impliedFormat":1},{"version":"c5239f5c01bcfa9cd32f37c496cf19c61d69d37e48be9de612b541aac915805b","affectsGlobalScope":true,"impliedFormat":1},{"version":"8e7f8264d0fb4c5339605a15daadb037bf238c10b654bb3eee14208f860a32ea","affectsGlobalScope":true,"impliedFormat":1},{"version":"782dec38049b92d4e85c1585fbea5474a219c6984a35b004963b00beb1aab538","affectsGlobalScope":true,"impliedFormat":1},{"version":"7e29f41b158de217f94cb9676bf9cbd0cd9b5a46e1985141ed36e075c52bf6ad","affectsGlobalScope":true,"impliedFormat":1},{"version":"ac51dd7d31333793807a6abaa5ae168512b6131bd41d9c5b98477fc3b7800f9f","impliedFormat":1},{"version":"dc782ff85b2cb10075ecffc158af7bfb27ff97bf8491c917efea0c3d622d5ac4","impliedFormat":1},{"version":"acd8fd5090ac73902278889c38336ff3f48af6ba03aa665eb34a75e7ba1dccc4","impliedFormat":1},{"version":"d6258883868fb2680d2ca96bc8b1352cab69874581493e6d52680c5ffecdb6cc","impliedFormat":1},{"version":"1b61d259de5350f8b1e5db06290d31eaebebc6baafd5f79d314b5af9256d7153","impliedFormat":1},{"version":"f258e3960f324a956fc76a3d3d9e964fff2244ff5859dcc6ce5951e5413ca826","impliedFormat":1},{"version":"643f7232d07bf75e15bd8f658f664d6183a0efaca5eb84b48201c7671a266979","impliedFormat":1},{"version":"21da358700a3893281ce0c517a7a30cbd46be020d9f0c3f2834d0a8ad1f5fc75","impliedFormat":1},{"version":"70521b6ab0dcba37539e5303104f29b721bfb2940b2776da4cc818c07e1fefc1","affectsGlobalScope":true,"impliedFormat":1},{"version":"ab41ef1f2cdafb8df48be20cd969d875602483859dc194e9c97c8a576892c052","affectsGlobalScope":true,"impliedFormat":1},{"version":"d153a11543fd884b596587ccd97aebbeed950b26933ee000f94009f1ab142848","affectsGlobalScope":true,"impliedFormat":1},{"version":"21d819c173c0cf7cc3ce57c3276e77fd9a8a01d35a06ad87158781515c9a438a","impliedFormat":1},{"version":"98cffbf06d6bab333473c70a893770dbe990783904002c4f1a960447b4b53dca","affectsGlobalScope":true,"impliedFormat":1},{"version":"ba481bca06f37d3f2c137ce343c7d5937029b2468f8e26111f3c9d9963d6568d","affectsGlobalScope":true,"impliedFormat":1},{"version":"6d9ef24f9a22a88e3e9b3b3d8c40ab1ddb0853f1bfbd5c843c37800138437b61","affectsGlobalScope":true,"impliedFormat":1},{"version":"1db0b7dca579049ca4193d034d835f6bfe73096c73663e5ef9a0b5779939f3d0","affectsGlobalScope":true,"impliedFormat":1},{"version":"9798340ffb0d067d69b1ae5b32faa17ab31b82466a3fc00d8f2f2df0c8554aaa","affectsGlobalScope":true,"impliedFormat":1},{"version":"f26b11d8d8e4b8028f1c7d618b22274c892e4b0ef5b3678a8ccbad85419aef43","affectsGlobalScope":true,"impliedFormat":1},{"version":"5929864ce17fba74232584d90cb721a89b7ad277220627cc97054ba15a98ea8f","impliedFormat":1},{"version":"763fe0f42b3d79b440a9b6e51e9ba3f3f91352469c1e4b3b67bfa4ff6352f3f4","impliedFormat":1},{"version":"25c8056edf4314820382a5fdb4bb7816999acdcb929c8f75e3f39473b87e85bc","impliedFormat":1},{"version":"c464d66b20788266e5353b48dc4aa6bc0dc4a707276df1e7152ab0c9ae21fad8","impliedFormat":1},{"version":"78d0d27c130d35c60b5e5566c9f1e5be77caf39804636bc1a40133919a949f21","impliedFormat":1},{"version":"c6fd2c5a395f2432786c9cb8deb870b9b0e8ff7e22c029954fabdd692bff6195","impliedFormat":1},{"version":"1d6e127068ea8e104a912e42fc0a110e2aa5a66a356a917a163e8cf9a65e4a75","impliedFormat":1},{"version":"5ded6427296cdf3b9542de4471d2aa8d3983671d4cac0f4bf9c637208d1ced43","impliedFormat":1},{"version":"7f182617db458e98fc18dfb272d40aa2fff3a353c44a89b2c0ccb3937709bfb5","impliedFormat":1},{"version":"cadc8aced301244057c4e7e73fbcae534b0f5b12a37b150d80e5a45aa4bebcbd","impliedFormat":1},{"version":"385aab901643aa54e1c36f5ef3107913b10d1b5bb8cbcd933d4263b80a0d7f20","impliedFormat":1},{"version":"9670d44354bab9d9982eca21945686b5c24a3f893db73c0dae0fd74217a4c219","impliedFormat":1},{"version":"0b8a9268adaf4da35e7fa830c8981cfa22adbbe5b3f6f5ab91f6658899e657a7","impliedFormat":1},{"version":"11396ed8a44c02ab9798b7dca436009f866e8dae3c9c25e8c1fbc396880bf1bb","impliedFormat":1},{"version":"ba7bc87d01492633cb5a0e5da8a4a42a1c86270e7b3d2dea5d156828a84e4882","impliedFormat":1},{"version":"4893a895ea92c85345017a04ed427cbd6a1710453338df26881a6019432febdd","impliedFormat":1},{"version":"c21dc52e277bcfc75fac0436ccb75c204f9e1b3fa5e12729670910639f27343e","impliedFormat":1},{"version":"13f6f39e12b1518c6650bbb220c8985999020fe0f21d818e28f512b7771d00f9","impliedFormat":1},{"version":"9b5369969f6e7175740bf51223112ff209f94ba43ecd3bb09eefff9fd675624a","impliedFormat":1},{"version":"4fe9e626e7164748e8769bbf74b538e09607f07ed17c2f20af8d680ee49fc1da","impliedFormat":1},{"version":"24515859bc0b836719105bb6cc3d68255042a9f02a6022b3187948b204946bd2","impliedFormat":1},{"version":"ea0148f897b45a76544ae179784c95af1bd6721b8610af9ffa467a518a086a43","impliedFormat":1},{"version":"24c6a117721e606c9984335f71711877293a9651e44f59f3d21c1ea0856f9cc9","impliedFormat":1},{"version":"dd3273ead9fbde62a72949c97dbec2247ea08e0c6952e701a483d74ef92d6a17","impliedFormat":1},{"version":"405822be75ad3e4d162e07439bac80c6bcc6dbae1929e179cf467ec0b9ee4e2e","impliedFormat":1},{"version":"0db18c6e78ea846316c012478888f33c11ffadab9efd1cc8bcc12daded7a60b6","impliedFormat":1},{"version":"e61be3f894b41b7baa1fbd6a66893f2579bfad01d208b4ff61daef21493ef0a8","impliedFormat":1},{"version":"bd0532fd6556073727d28da0edfd1736417a3f9f394877b6d5ef6ad88fba1d1a","impliedFormat":1},{"version":"89167d696a849fce5ca508032aabfe901c0868f833a8625d5a9c6e861ef935d2","impliedFormat":1},{"version":"615ba88d0128ed16bf83ef8ccbb6aff05c3ee2db1cc0f89ab50a4939bfc1943f","impliedFormat":1},{"version":"a4d551dbf8746780194d550c88f26cf937caf8d56f102969a110cfaed4b06656","impliedFormat":1},{"version":"8bd86b8e8f6a6aa6c49b71e14c4ffe1211a0e97c80f08d2c8cc98838006e4b88","impliedFormat":1},{"version":"317e63deeb21ac07f3992f5b50cdca8338f10acd4fbb7257ebf56735bf52ab00","impliedFormat":1},{"version":"4732aec92b20fb28c5fe9ad99521fb59974289ed1e45aecb282616202184064f","impliedFormat":1},{"version":"2e85db9e6fd73cfa3d7f28e0ab6b55417ea18931423bd47b409a96e4a169e8e6","impliedFormat":1},{"version":"c46e079fe54c76f95c67fb89081b3e399da2c7d109e7dca8e4b58d83e332e605","impliedFormat":1},{"version":"bf67d53d168abc1298888693338cb82854bdb2e69ef83f8a0092093c2d562107","impliedFormat":1},{"version":"b52476feb4a0cbcb25e5931b930fc73cb6643fb1a5060bf8a3dda0eeae5b4b68","affectsGlobalScope":true,"impliedFormat":1},{"version":"e2677634fe27e87348825bb041651e22d50a613e2fdf6a4a3ade971d71bac37e","impliedFormat":1},{"version":"7394959e5a741b185456e1ef5d64599c36c60a323207450991e7a42e08911419","impliedFormat":1},{"version":"8c0bcd6c6b67b4b503c11e91a1fb91522ed585900eab2ab1f61bba7d7caa9d6f","impliedFormat":1},{"version":"8cd19276b6590b3ebbeeb030ac271871b9ed0afc3074ac88a94ed2449174b776","affectsGlobalScope":true,"impliedFormat":1},{"version":"696eb8d28f5949b87d894b26dc97318ef944c794a9a4e4f62360cd1d1958014b","impliedFormat":1},{"version":"3f8fa3061bd7402970b399300880d55257953ee6d3cd408722cb9ac20126460c","impliedFormat":1},{"version":"35ec8b6760fd7138bbf5809b84551e31028fb2ba7b6dc91d95d098bf212ca8b4","affectsGlobalScope":true,"impliedFormat":1},{"version":"5524481e56c48ff486f42926778c0a3cce1cc85dc46683b92b1271865bcf015a","impliedFormat":1},{"version":"68bd56c92c2bd7d2339457eb84d63e7de3bd56a69b25f3576e1568d21a162398","affectsGlobalScope":true,"impliedFormat":1},{"version":"3e93b123f7c2944969d291b35fed2af79a6e9e27fdd5faa99748a51c07c02d28","impliedFormat":1},{"version":"9d19808c8c291a9010a6c788e8532a2da70f811adb431c97520803e0ec649991","impliedFormat":1},{"version":"87aad3dd9752067dc875cfaa466fc44246451c0c560b820796bdd528e29bef40","impliedFormat":1},{"version":"4aacb0dd020eeaef65426153686cc639a78ec2885dc72ad220be1d25f1a439df","impliedFormat":1},{"version":"f0bd7e6d931657b59605c44112eaf8b980ba7f957a5051ed21cb93d978cf2f45","impliedFormat":1},{"version":"8db0ae9cb14d9955b14c214f34dae1b9ef2baee2fe4ce794a4cd3ac2531e3255","affectsGlobalScope":true,"impliedFormat":1},{"version":"15fc6f7512c86810273af28f224251a5a879e4261b4d4c7e532abfbfc3983134","impliedFormat":1},{"version":"58adba1a8ab2d10b54dc1dced4e41f4e7c9772cbbac40939c0dc8ce2cdb1d442","impliedFormat":1},{"version":"641942a78f9063caa5d6b777c99304b7d1dc7328076038c6d94d8a0b81fc95c1","impliedFormat":1},{"version":"1123a83f35cf56c97de746f0a7250012153c61a167e4a61668bf50e558162d14","impliedFormat":1},{"version":"855cd5f7eb396f5f1ab1bc0f8580339bff77b68a770f84c6b254e319bbfd1ac7","impliedFormat":1},{"version":"5650cf3dace09e7c25d384e3e6b818b938f68f4e8de96f52d9c5a1b3db068e86","impliedFormat":1},{"version":"1354ca5c38bd3fd3836a68e0f7c9f91f172582ba30ab15bb8c075891b91502b7","affectsGlobalScope":true,"impliedFormat":1},{"version":"7e20d899c28ca26a2a7afc98beaa69e63ff7fba0a8bc47b4e3bf3ede5e09e424","impliedFormat":1},{"version":"2d2fcaab481b31a5882065c7951255703ddbe1c0e507af56ea42d79ac3911201","impliedFormat":1},{"version":"a192fe8ec33f75edbc8d8f3ed79f768dfae11ff5735e7fe52bfa69956e46d78d","impliedFormat":1},{"version":"ca867399f7db82df981d6915bcbb2d81131d7d1ef683bc782b59f71dda59bc85","affectsGlobalScope":true,"impliedFormat":1},{"version":"372413016d17d804e1d139418aca0c68e47a83fb6669490857f4b318de8cccb3","affectsGlobalScope":true,"impliedFormat":1},{"version":"9e043a1bc8fbf2a255bccf9bf27e0f1caf916c3b0518ea34aa72357c0afd42ec","impliedFormat":1},{"version":"b4f70ec656a11d570e1a9edce07d118cd58d9760239e2ece99306ee9dfe61d02","impliedFormat":1},{"version":"3bc2f1e2c95c04048212c569ed38e338873f6a8593930cf5a7ef24ffb38fc3b6","impliedFormat":1},{"version":"6e70e9570e98aae2b825b533aa6292b6abd542e8d9f6e9475e88e1d7ba17c866","impliedFormat":1},{"version":"f9d9d753d430ed050dc1bf2667a1bab711ccbb1c1507183d794cc195a5b085cc","impliedFormat":1},{"version":"9eece5e586312581ccd106d4853e861aaaa1a39f8e3ea672b8c3847eedd12f6e","impliedFormat":1},{"version":"085f552d005479e2e6a7311cdbbe5d8c55c497b4d19274285df161ee9684cd9c","impliedFormat":1},{"version":"37ba7b45141a45ce6e80e66f2a96c8a5ab1bcef0fc2d0f56bb58df96ec67e972","impliedFormat":1},{"version":"45650f47bfb376c8a8ed39d4bcda5902ab899a3150029684ee4c10676d9fbaee","impliedFormat":1},{"version":"007faacc9268357caa21d24169f3f3f2497af3e9241308df2d89f6e6d9bb3f2e","affectsGlobalScope":true,"impliedFormat":1},{"version":"74cf591a0f63db318651e0e04cb55f8791385f86e987a67fd4d2eaab8191f730","impliedFormat":1},{"version":"5eab9b3dc9b34f185417342436ec3f106898da5f4801992d8ff38ab3aff346b5","impliedFormat":1},{"version":"12ed4559eba17cd977aa0db658d25c4047067444b51acfdcbf38470630642b23","affectsGlobalScope":true,"impliedFormat":1},{"version":"f3ffabc95802521e1e4bcba4c88d8615176dc6e09111d920c7a213bdda6e1d65","impliedFormat":1},{"version":"809821b8a065e3234a55b3a9d7846231ed18d66dd749f2494c66288d890daf7f","impliedFormat":1},{"version":"ae56f65caf3be91108707bd8dfbccc2a57a91feb5daabf7165a06a945545ed26","impliedFormat":1},{"version":"a136d5de521da20f31631a0a96bf712370779d1c05b7015d7019a9b2a0446ca9","impliedFormat":1},{"version":"c3b41e74b9a84b88b1dca61ec39eee25c0dbc8e7d519ba11bb070918cfacf656","affectsGlobalScope":true,"impliedFormat":1},{"version":"4737a9dc24d0e68b734e6cfbcea0c15a2cfafeb493485e27905f7856988c6b29","affectsGlobalScope":true,"impliedFormat":1},{"version":"36d8d3e7506b631c9582c251a2c0b8a28855af3f76719b12b534c6edf952748d","impliedFormat":1},{"version":"1ca69210cc42729e7ca97d3a9ad48f2e9cb0042bada4075b588ae5387debd318","impliedFormat":1},{"version":"f5ebe66baaf7c552cfa59d75f2bfba679f329204847db3cec385acda245e574e","impliedFormat":1},{"version":"ed59add13139f84da271cafd32e2171876b0a0af2f798d0c663e8eeb867732cf","affectsGlobalScope":true,"impliedFormat":1},{"version":"b7c5e2ea4a9749097c347454805e933844ed207b6eefec6b7cfd418b5f5f7b28","impliedFormat":1},{"version":"b1810689b76fd473bd12cc9ee219f8e62f54a7d08019a235d07424afbf074d25","impliedFormat":1},{"version":"2beff543f6e9a9701df88daeee3cdd70a34b4a1c11cb4c734472195a5cb2af54","impliedFormat":1},{"version":"2e07abf27aa06353d46f4448c0bbac73431f6065eef7113128a5cd804d0c384d","impliedFormat":1},{"version":"be1cc4d94ea60cbe567bc29ed479d42587bf1e6cba490f123d329976b0fe4ee5","impliedFormat":1},{"version":"42bc0e1a903408137c3df2b06dfd7e402cdab5bbfa5fcfb871b22ebfdb30bd0b","impliedFormat":1},{"version":"9894dafe342b976d251aac58e616ac6df8db91fb9d98934ff9dd103e9e82578f","impliedFormat":1},{"version":"413df52d4ea14472c2fa5bee62f7a40abd1eb49be0b9722ee01ee4e52e63beb2","impliedFormat":1},{"version":"db6d2d9daad8a6d83f281af12ce4355a20b9a3e71b82b9f57cddcca0a8964a96","impliedFormat":1},{"version":"446a50749b24d14deac6f8843e057a6355dd6437d1fac4f9e5ce4a5071f34bff","impliedFormat":1},{"version":"182e9fcbe08ac7c012e0a6e2b5798b4352470be29a64fdc114d23c2bab7d5106","impliedFormat":1},{"version":"2f4e6b4d39426a1b85ecf4bdeb9dddbf4d9b3397d95d8555d46f925c9519ec7d","impliedFormat":1},{"version":"78a2869ad0cbf3f9045dda08c0d4562b7e1b2bfe07b19e0db072f5c3c56e9584","impliedFormat":1},{"version":"89d5d28d4f57e000b836ac273079be1b75710e28ce14750d081fb420d37e2ca5","impliedFormat":1},{"version":"fd4e24ccff3966390600d7f5d6aa1fed5a512e92ada735ea5fbc933d313ad3d3","impliedFormat":1},{"version":"b7cddfe1aa6b86b5fad3c9ccb30d05b3ccb165aebbf112f48d2d8a5f69dd98b1","impliedFormat":1},{"version":"a86f82d646a739041d6702101afa82dcb935c416dd93cbca7fd754fd0282ce1f","impliedFormat":1},{"version":"ad0d1d75d129b1c80f911be438d6b61bfa8703930a8ff2be2f0e1f8a91841c64","impliedFormat":1},{"version":"bd2c7ada3dee03653d3f601011d30072194bc3970cd93208f9588fbdc0c69347","impliedFormat":1},{"version":"e480da45d32313e7174b265674da504f075f59ef326852f0c5a5d863b438ae85","impliedFormat":1},{"version":"ad54850f61fcf5d014e11be80d2f46fea9265cfa7e77456da876f7833ef81769","impliedFormat":1},{"version":"6f7c9e8bd2b5b6a080b07080065f94900bd3c7e5ebbd3047bc33fcce2fab1dd8","impliedFormat":1},{"version":"3e7efde639c6a6c3edb9847b3f61e308bf7a69685b92f665048c45132f51c218","impliedFormat":1},{"version":"df45ca1176e6ac211eae7ddf51336dc075c5314bc5c253651bae639defd5eec5","impliedFormat":1},{"version":"8a0e762ceb20c7e72504feef83d709468a70af4abccb304f32d6b9bac1129b2c","impliedFormat":1},{"version":"da5950ee2a90721df6f3fba45f5d05308f7e4c35835392215dd2cd404505e2de","impliedFormat":1},{"version":"ce75b1aebb33d510ff28af960a9221410a3eaf7f18fc5f21f9404075fba77256","impliedFormat":1},{"version":"f42d5fed19610d485c646a0c430e768115567d078c7fc855c57b0c578b3d6cd3","impliedFormat":1},{"version":"ee8df1cb8d0faaca4013a1b442e99130769ce06f438d18d510fed95890067563","impliedFormat":1},{"version":"d5630f2ad9b4541e5ce891648121022f9412ecdca1820baa1f0104f70fd7eff7","impliedFormat":1},{"version":"4d15375ab13497104bc8fe56fdef2b5fd6853f29255737d23a33fa306ff7fd69","impliedFormat":1},{"version":"2cd3fc1d0d6a1e85baffd2d4f50f5efb192b5446eef567e97c94765402f0aad4","impliedFormat":1},{"version":"e4cbf2f1e89ecccaddd2c045e600ae41b732295953fb06247c7dcbc2d281ed30","impliedFormat":1},{"version":"6dcedaef57dff0d79a05ab0ab602cde74db803d1e765468bf91263786a383e1b","impliedFormat":1},{"version":"8c1697d90c394a6fd955b98eae01238eff628e129b987a68aea10f898a48e7da","impliedFormat":1},{"version":"7580e62139cb2b44a0270c8d01abcbfcba2819a02514a527342447fa69b34ef1","impliedFormat":1},{"version":"b838d4c72740eb0afd284bf7575b74c624b105eff2e8c7b4aeead57e7ac320ff","impliedFormat":1},{"version":"f374cb24e93e7798c4d9e83ff872fa52d2cdb36306392b840a6ddf46cb925cb6","impliedFormat":1},{"version":"d10d63718e1646c2279e3b33831f82c60e31f622b2b7020f1196409ca4c09242","impliedFormat":1},{"version":"106c6025f1d99fd468fd8bf6e5bda724e11e5905a4076c5d29790b6c3745e50c","impliedFormat":1},{"version":"e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855","impliedFormat":1},{"version":"148679c6d0f449210a96e7d2e562d589e56fcde87f843a92808b3ff103f1a774","impliedFormat":1},{"version":"e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855","impliedFormat":1},{"version":"02436d7e9ead85e09a2f8e27d5f47d9464bced31738dec138ca735390815c9f0","impliedFormat":1},{"version":"f8d5ff8eafd37499f2b6a98659dd9b45a321de186b8db6b6142faed0fea3de77","impliedFormat":1},{"version":"c86fe861cf1b4c46a0fb7d74dffe596cf679a2e5e8b1456881313170f092e3fa","impliedFormat":1},{"version":"a22dd55aa4d39906252000ab8e8a1b83b195eef7f4274eb51e457c1f11cf6580","impliedFormat":1},{"version":"540cc83ab772a2c6bc509fe1354f314825b5dba3669efdfbe4693ecd3048e34f","impliedFormat":1},{"version":"121b0696021ab885c570bbeb331be8ad82c6efe2f3b93a6e63874901bebc13e3","impliedFormat":1},{"version":"612d9da66bb046a9c1e2e8d026245ded881fc4b9f98cbfae714415d57ee0ae0b","impliedFormat":1},{"version":"32c2ad9494dad5d11b0564a619fee18f388db6c1e9e2cd3c360b3122549691eb","impliedFormat":1},{"version":"6c301d40aec56a74ec7bd7324e31a728dadf9bfba3e96def02938d3d973534ec","impliedFormat":1},{"version":"e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855","impliedFormat":1},{"version":"e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855","impliedFormat":1},{"version":"8e609bb71c20b858c77f0e9f90bb1319db8477b13f9f965f1a1e18524bf50881","impliedFormat":1},{"version":"8e609bb71c20b858c77f0e9f90bb1319db8477b13f9f965f1a1e18524bf50881","impliedFormat":1},{"version":"aa14cee20aa0db79f8df101fc027d929aec10feb5b8a8da3b9af3895d05b7ba2","impliedFormat":1},{"version":"493c700ac3bd317177b2eb913805c87fe60d4e8af4fb39c41f04ba81fae7e170","impliedFormat":1},{"version":"aeb554d876c6b8c818da2e118d8b11e1e559adbe6bf606cc9a611c1b6c09f670","impliedFormat":1},{"version":"acf5a2ac47b59ca07afa9abbd2b31d001bf7448b041927befae2ea5b1951d9f9","impliedFormat":1},{"version":"8e609bb71c20b858c77f0e9f90bb1319db8477b13f9f965f1a1e18524bf50881","impliedFormat":1},{"version":"d71291eff1e19d8762a908ba947e891af44749f3a2cbc5bd2ec4b72f72ea795f","impliedFormat":1},{"version":"c0480e03db4b816dff2682b347c95f2177699525c54e7e6f6aa8ded890b76be7","impliedFormat":1},{"version":"25a5f6fd3a2243c859eddc99ab5fba11d970af2fe7a5df9c32b7668f76f97b01","impliedFormat":1},{"version":"8d207e1f9d2c30d6f77dfa693f3827c3fbf0d89240297e10bdfe1041d433df68","impliedFormat":1},{"version":"b620391fe8060cf9bedc176a4d01366e6574d7a71e0ac0ab344a4e76576fcbb8","impliedFormat":1},{"version":"6ac6715916fa75a1f7ebdfeacac09513b4d904b667d827b7535e84ff59679aff","impliedFormat":1},{"version":"2652448ac55a2010a1f71dd141f828b682298d39728f9871e1cdf8696ef443fd","impliedFormat":1},{"version":"d682336018141807fb602709e2d95a192828fcb8d5ba06dda3833a8ea98f69e3","impliedFormat":1},{"version":"6124e973eab8c52cabf3c07575204efc1784aca6b0a30c79eb85fe240a857efa","impliedFormat":1},{"version":"0d891735a21edc75df51f3eb995e18149e119d1ce22fd40db2b260c5960b914e","impliedFormat":1},{"version":"3b414b99a73171e1c4b7b7714e26b87d6c5cb03d200352da5342ab4088a54c85","impliedFormat":1},{"version":"4fbd3116e00ed3a6410499924b6403cc9367fdca303e34838129b328058ede40","impliedFormat":1},{"version":"9c82171d836c47486074e4ca8e059735bf97b205e70b196535b5efd40cbe1bc5","impliedFormat":1},{"version":"8c70ddc0c22d85e56011d49fddfaae3405eb53d47b59327b9dd589e82df672e7","impliedFormat":1},{"version":"2f9c89cbb29d362290531b48880a4024f258c6033aaeb7e59fbc62db26819650","impliedFormat":1},{"version":"a365c4d3bed3be4e4e20793c999c51f5cd7e6792322f14650949d827fbcd170f","impliedFormat":1},{"version":"c5426dbfc1cf90532f66965a7aa8c1136a78d4d0f96d8180ecbfc11d7722f1a5","impliedFormat":1},{"version":"65a15fc47900787c0bd18b603afb98d33ede930bed1798fc984d5ebb78b26cf9","impliedFormat":1},{"version":"9d202701f6e0744adb6314d03d2eb8fc994798fc83d91b691b75b07626a69801","impliedFormat":1},{"version":"de9d2df7663e64e3a91bf495f315a7577e23ba088f2949d5ce9ec96f44fba37d","impliedFormat":1},{"version":"c7af78a2ea7cb1cd009cfb5bdb48cd0b03dad3b54f6da7aab615c2e9e9d570c5","impliedFormat":1},{"version":"1ee45496b5f8bdee6f7abc233355898e5bf9bd51255db65f5ff7ede617ca0027","impliedFormat":1},{"version":"273782b8454e78f6a8b30d2cfbf6860499c930595095fcc1689637115f0eddda","affectsGlobalScope":true,"impliedFormat":1},{"version":"3fbdd025f9d4d820414417eeb4107ffa0078d454a033b506e22d3a23bc3d9c41","affectsGlobalScope":true,"impliedFormat":1},{"version":"dba114fb6a32b355a9cfc26ca2276834d72fe0e94cd2c3494005547025015369","impliedFormat":1},{"version":"a8f8e6ab2fa07b45251f403548b78eaf2022f3c2254df3dc186cb2671fe4996d","affectsGlobalScope":true,"impliedFormat":1},{"version":"fa6c12a7c0f6b84d512f200690bfc74819e99efae69e4c95c4cd30f6884c526e","impliedFormat":1},{"version":"f1c32f9ce9c497da4dc215c3bc84b722ea02497d35f9134db3bb40a8d918b92b","impliedFormat":1},{"version":"b73c319af2cc3ef8f6421308a250f328836531ea3761823b4cabbd133047aefa","affectsGlobalScope":true,"impliedFormat":1},{"version":"e433b0337b8106909e7953015e8fa3f2d30797cea27141d1c5b135365bb975a6","impliedFormat":1},{"version":"9f9bb6755a8ce32d656ffa4763a8144aa4f274d6b69b59d7c32811031467216e","impliedFormat":1},{"version":"5c32bdfbd2d65e8fffbb9fbda04d7165e9181b08dad61154961852366deb7540","impliedFormat":1},{"version":"ddff7fc6edbdc5163a09e22bf8df7bef75f75369ebd7ecea95ba55c4386e2441","impliedFormat":1},{"version":"0c05e9842ec4f8b7bfebfd3ca61604bb8c914ba8da9b5337c4f25da427a005f2","impliedFormat":1},{"version":"faed7a5153215dbd6ebe76dfdcc0af0cfe760f7362bed43284be544308b114cf","impliedFormat":1},{"version":"7029e566b8df176f703fb59fd437a38670c7a0e02c58b2d66dfb5b2e2b2defdb","impliedFormat":1},{"version":"7f2aa4d4989a82530aaac3f72b3dceca90e9c25bee0b1a327e8a08a1262435ad","impliedFormat":1},{"version":"d96b39301d0ded3f1a27b47759676a33a02f6f5049bfcbde81e533fd10f50dcb","impliedFormat":1},{"version":"e9f147ecca73d9346a4c073432843c159ccbe50bdcb678a78f6da10eae2cecf4","impliedFormat":1},{"version":"de061f7d72bd65c06fc1419f841dfdcb29a8e22fe6fa527d1e6eb20b897d4de0","impliedFormat":1},{"version":"663beafc2446079574570cba86e9b15f986f908ddb1b01274509970126fee945","impliedFormat":1},{"version":"a3102887d5058bf4cb5b37fa6964c09e9527c42053b3b5c642b89878620748de","impliedFormat":1},{"version":"0aaaa1727edd29673d85c9b26d7ca4d54e5407a48586903c51b48b7f7d196f61","impliedFormat":1},{"version":"d35bca0b261bff02635758c48e8ab99c61c420d0dfabbcf467e847171d876b7d","impliedFormat":1},{"version":"3bc12c40d90c342ff88a3d876996c555ed5cbee5fe8c3308a240b321f401ee46","impliedFormat":1},{"version":"ba130768aae855a5477e9e148e5c879548e6e7ccbcc56fd1934c8a18ea5b7569","impliedFormat":1},{"version":"2e4f37ffe8862b14d8e24ae8763daaa8340c0df0b859d9a9733def0eee7562d9","impliedFormat":1},{"version":"d38530db0601215d6d767f280e3a3c54b2a83b709e8d9001acb6f61c67e965fc","impliedFormat":1},{"version":"6ac6715916fa75a1f7ebdfeacac09513b4d904b667d827b7535e84ff59679aff","impliedFormat":1},{"version":"b499af2054a037a162b3b72cd886f48bbf32a3502c865c6e29fac7d2ab3ce0b5","impliedFormat":1},{"version":"b83cb14474fa60c5f3ec660146b97d122f0735627f80d82dd03e8caa39b4388c","impliedFormat":1},{"version":"48773ca557b0319c2ee62ae249cf52a81709e8be139920d6479a66274de7c4ed","impliedFormat":1},{"version":"7274fbffbd7c9589d8d0ffba68157237afd5cecff1e99881ea3399127e60572f","impliedFormat":1},{"version":"b73cbf0a72c8800cf8f96a9acfe94f3ad32ca71342a8908b8ae484d61113f647","impliedFormat":1},{"version":"bae6dd176832f6423966647382c0d7ba9e63f8c167522f09a982f086cd4e8b23","impliedFormat":1},{"version":"20865ac316b8893c1a0cc383ccfc1801443fbcc2a7255be166cf90d03fac88c9","impliedFormat":1},{"version":"c9958eb32126a3843deedda8c22fb97024aa5d6dd588b90af2d7f2bfac540f23","impliedFormat":1},{"version":"461d0ad8ae5f2ff981778af912ba71b37a8426a33301daa00f21c6ccb27f8156","impliedFormat":1},{"version":"e927c2c13c4eaf0a7f17e6022eee8519eb29ef42c4c13a31e81a611ab8c95577","impliedFormat":1},{"version":"fcafff163ca5e66d3b87126e756e1b6dfa8c526aa9cd2a2b0a9da837d81bbd72","impliedFormat":1},{"version":"70246ad95ad8a22bdfe806cb5d383a26c0c6e58e7207ab9c431f1cb175aca657","impliedFormat":1},{"version":"f00f3aa5d64ff46e600648b55a79dcd1333458f7a10da2ed594d9f0a44b76d0b","impliedFormat":1},{"version":"772d8d5eb158b6c92412c03228bd9902ccb1457d7a705b8129814a5d1a6308fc","impliedFormat":1},{"version":"802e797bcab5663b2c9f63f51bdf67eff7c41bc64c0fd65e6da3e7941359e2f7","impliedFormat":1},{"version":"b01bd582a6e41457bc56e6f0f9de4cb17f33f5f3843a7cf8210ac9c18472fb0f","impliedFormat":1},{"version":"8b4327413e5af38cd8cb97c59f48c3c866015d5d642f28518e3a891c469f240e","impliedFormat":1},{"version":"4cceef18d7f088e797a463e90b7a9dad10c6bc667724b7686e3e740ae00122be","impliedFormat":1},{"version":"7ee86fbb3754388e004de0ef9e6505485ddfb3be7640783d6d015711c03d302d","impliedFormat":1},{"version":"cc1954b539604b1e562319119ac7e888172208b32ca873f9a357a92c826bd046","impliedFormat":1},{"version":"a67b87d0281c97dfc1197ef28dfe397fc2c865ccd41f7e32b53f647184cc7307","impliedFormat":1},{"version":"771ffb773f1ddd562492a6b9aaca648192ac3f056f0e1d997678ff97dbb6bf9b","impliedFormat":1},{"version":"43e96a3d5d1411ab40ba2f61d6a3192e58177bcf3b133a80ad2a16591611726d","impliedFormat":1},{"version":"232f70c0cf2b432f3a6e56a8dc3417103eb162292a9fd376d51a3a9ea5fbbf6f","impliedFormat":1},{"version":"bb8f2dbc03533abca2066ce4655c119bff353dd4514375beb93c08590c03e023","impliedFormat":1},{"version":"706dd95827e7ebaabda91d5db2b755233e0952d98570e9c032b0f066a15c1177","affectsGlobalScope":true,"impliedFormat":1},{"version":"0b103e9abfe82d14c0ad06a55d9f91d6747154ef7cacc73cf27ecad2bfb3afcf","impliedFormat":1},{"version":"cd9304972e6d616197fb44fce00540a904f38b54306a1951b5dbeaf3c01ab5bd","impliedFormat":1},{"version":"77438e2c397a3db78407621cfc57241a305b310ddea2c185f1d555248297f587","impliedFormat":1},{"version":"120599fd965257b1f4d0ff794bc696162832d9d8467224f4665f713a3119078b","impliedFormat":1},{"version":"43ba4f2fa8c698f5c304d21a3ef596741e8e85a810b7c1f9b692653791d8d97a","impliedFormat":1},{"version":"5433f33b0a20300cca35d2f229a7fc20b0e8477c44be2affeb21cb464af60c76","impliedFormat":1},{"version":"db036c56f79186da50af66511d37d9fe77fa6793381927292d17f81f787bb195","impliedFormat":1},{"version":"a6805fcafed712aea7759f8bc731014f9d22738c1d6ef9d43b8091d1d48346d5","impliedFormat":1},{"version":"c49469a5349b3cc1965710b5b0f98ed6c028686aa8450bcb3796728873eb923e","impliedFormat":1},{"version":"4a889f2c763edb4d55cb624257272ac10d04a1cad2ed2948b10ed4a7fda2a428","impliedFormat":1},{"version":"7bb79aa2fead87d9d56294ef71e056487e848d7b550c9a367523ee5416c44cfa","impliedFormat":1},{"version":"d88ea80a6447d7391f52352ec97e56b52ebec934a4a4af6e2464cfd8b39c3ba8","impliedFormat":1},{"version":"142617b3cdf902b69c6464c9fbd942b60ab3e733ca18c032b19e0f7e2adbefe8","impliedFormat":1},{"version":"0b603555f1881f87256ffd6344d3e3ed6d466c2e701eabf381f28be8c2125892","impliedFormat":1},{"version":"897e4f7662488e3ecc79e743bdd3b78f13bdb69a97851afa5b440c4211e32ea9","impliedFormat":1},{"version":"e2e1c6d3b2d93add5200bd7bc1a8cccb4e446836b2111ece45db8683a2c765de","impliedFormat":1},{"version":"251b03d5cd243854ce870d9a9a39f491faf69898c5d6b5eee28cc7649c57417b","impliedFormat":1},{"version":"27ff4196654e6373c9af16b6165120e2dd2169f9ad6abb5c935af5abd8c7938c","impliedFormat":1},{"version":"2c4de79f406d137390608e8c0a44fba2ff8e00bacfcae7c9d1781fef10e9440d","impliedFormat":1},{"version":"07ba23a10465791be5d22deaf5ef7de7658774ddff53721e5ea17fedea1bc721","impliedFormat":1},{"version":"dca8c645c5afeb03b1ecedbf16323f33e7d0afaa6256c8e047e6e38087a97f53","impliedFormat":1},{"version":"775f181bd4a533d6f8b5e55ec1d9f1624559720ae8a70e9432258da26b38d27c","impliedFormat":1},{"version":"796273b2edc72e78a04e86d7c58ae94d370ab93a0ddf40b1aa85a37a1c29ecd7","impliedFormat":1},{"version":"5df15a69187d737d6d8d066e189ae4f97e41f4d53712a46b2710ff9f8563ec9f","impliedFormat":1},{"version":"7715134a0cf07dd41a9da2895d708625a3a303a0385e355ecaaf0b8bfaef2550","impliedFormat":1},{"version":"6ac6715916fa75a1f7ebdfeacac09513b4d904b667d827b7535e84ff59679aff","impliedFormat":1},{"version":"622694a8522b46f6310c2a9b5d2530dde1e2854cb5829354e6d1ff8f371cf469","impliedFormat":1},{"version":"cd8ce8d68567f62dd580b3c3c37777ac3f5b81944c7417f5ea83030eab533385","impliedFormat":1},{"version":"e5c939d896565dcac0f6fbdbada11284e7728ef26a069561c09aa5aa4a788393","impliedFormat":1},{"version":"9e2739b32f741859263fdba0244c194ca8e96da49b430377930b8f721d77c000","impliedFormat":1},{"version":"a9e6c0ff3f8186fccd05752cf75fc94e147c02645087ac6de5cc16403323d870","impliedFormat":1},{"version":"49af4b52f0d4d2304c5f2c6fe5fab3e153e0acc38830d0202821b877c097dd02","impliedFormat":1},{"version":"49c346823ba6d4b12278c12c977fb3a31c06b9ca719015978cb145eb86da1c61","impliedFormat":1},{"version":"bfac6e50eaa7e73bb66b7e052c38fdc8ccfc8dbde2777648642af33cf349f7f1","impliedFormat":1},{"version":"92f7c1a4da7fbfd67a2228d1687d5c2e1faa0ba865a94d3550a3941d7527a45d","impliedFormat":1},{"version":"f53b120213a9289d9a26f5af90c4c686dd71d91487a0aa5451a38366c70dc64b","impliedFormat":1},{"version":"e68b8e5a1df7c1be2bc105141456ecba70215806e1c28bfbc5c12bfce4be6e68","impliedFormat":1},{"version":"511c8f02329808d47d00b859c532ae9115590048b17325a946c74dac48428650","impliedFormat":1},{"version":"57d67b72e06059adc5e9454de26bbfe567d412b962a501d263c75c2db430f40e","impliedFormat":1},{"version":"b5f9e66625783eefcbe3d2da074b2e7ba2066d61ce3fc6ef4f22805ad946cab4","impliedFormat":1},{"version":"e37115962d284b9f7a37c2bdd2add50f88365dde41f5e0ff591ffc48a8ec7575","impliedFormat":1},{"version":"6459054aabb306821a043e02b89d54da508e3a6966601a41e71c166e4ea1474f","impliedFormat":1},{"version":"bb37588926aba35c9283fe8d46ebf4e79ffe976343105f5c6d45f282793352b2","impliedFormat":1},{"version":"f89488602bec98a142072fae7ea5ba99431a569ff580c64b7be39896474799d8","impliedFormat":1},{"version":"bbbc47961f39a57df103cf4ca3bb8f8732b4b6678a18225a0aa76d59c466956c","impliedFormat":1},{"version":"2e6114a7dd6feeef85b2c80120fdbfb59a5529c0dcc5bfa8447b6996c97a69f5","impliedFormat":1},{"version":"2ffb043dc5163458e473b7010859f86e01dc4edffcae0a93d885d028b426a546","impliedFormat":1},{"version":"c8f004e6036aa1c764ad4ec543cf89a5c1893a9535c80ef3f2b653e370de45e6","impliedFormat":1},{"version":"dd80b1e600d00f5c6a6ba23f455b84a7db121219e68f89f10552c54ba46e4dc9","impliedFormat":1},{"version":"b064c36f35de7387d71c599bfcf28875849a1dbc733e82bd26cae3d1cd060521","impliedFormat":1},{"version":"05c7280d72f3ed26f346cbe7cbbbb002fb7f15739197cbbee6ab3fd1a6cb9347","impliedFormat":1},{"version":"8de9fe97fa9e00ec00666fa77ab6e91b35d25af8ca75dabcb01e14ad3299b150","impliedFormat":1},{"version":"04b7b2e0832dfd3c31e81df3975e8d8fda28e7ff999b0aa2932608a8f6661d5c","impliedFormat":1},{"version":"ca2d34c6ed5cbd3070b8b6f32f42ae54adcc6499c1e4b99f0a5798b3f27cc653","impliedFormat":1},{"version":"9ec68995e66dd6b9dac834bf5ae85fde802714ea2e82151a5d1d53ef01b463ef","impliedFormat":1},{"version":"5c4d626b4902f2ef8a1cc146d761d276cef988016dc674e3b98fbad70e64bc9f","impliedFormat":1},{"version":"fdfaa0aad899524962e2955287b5b991ffe3be50f64e02eb60c933ca44644a94","impliedFormat":1},{"version":"53c972a0f9bc3a4ec70fff7314123ea8cfcf75b3703046f767d2dc1eea87b2fb","impliedFormat":1},{"version":"f974e4a06953682a2c15d5bd5114c0284d5abf8bc0fe4da25cb9159427b70072","impliedFormat":1},{"version":"50256e9c31318487f3752b7ac12ff365c8949953e04568009c8705db802776fb","impliedFormat":1},{"version":"7d73b24e7bf31dfb8a931ca6c4245f6bb0814dfae17e4b60c9e194a631fe5f7b","impliedFormat":1},{"version":"d130c5f73768de51402351d5dc7d1b36eaec980ca697846e53156e4ea9911476","impliedFormat":1},{"version":"413586add0cfe7369b64979d4ec2ed56c3f771c0667fbde1bf1f10063ede0b08","impliedFormat":1},{"version":"06472528e998d152375ad3bd8ebcb69ff4694fd8d2effaf60a9d9f25a37a097a","impliedFormat":1},{"version":"7303b45138d2511035056a5901a1490ebdcbf055cbb1276f8629c5121cbe733e","impliedFormat":1},{"version":"27f874cd5327507eeff699a74567f60c1215b94509f4308633a7b01922471ed2","impliedFormat":1},{"version":"a401617604fa1f6ce437b81689563dfdc377069e4c58465dbd8d16069aede0a5","impliedFormat":1},{"version":"2c6cf04bc525caf6546e859e8ef10bfb9573837ec0bc5ec7b53a7b1b8ca72781","impliedFormat":1},{"version":"8695dec09ad439b0ceef3776ea68a232e381135b516878f0901ed2ea114fd0fe","impliedFormat":1},{"version":"304b44b1e97dd4c94697c3313df89a578dca4930a104454c99863f1784a54357","impliedFormat":1},{"version":"0a437ae178f999b46b6153d79095b60c42c996bc0458c04955f1c996dc68b971","impliedFormat":1},{"version":"74b2a5e5197bd0f2e0077a1ea7c07455bbea67b87b0869d9786d55104006784f","impliedFormat":1},{"version":"4a7baeb6325920044f66c0f8e5e6f1f52e06e6d87588d837bdf44feb6f35c664","impliedFormat":1},{"version":"87cc05fe13108f02e12da7e3efd8e360fef78d96a0c9e11408ea1b1b9fb3e03d","impliedFormat":1},{"version":"1abbf67c218d23c2ce76887caac2df6c7dab3d97ba2b65348432b876f510002a","impliedFormat":1},{"version":"1a82deef4c1d39f6882f28d275cad4c01f907b9b39be9cbc472fcf2cf051e05b","impliedFormat":1},{"version":"4b20fcf10a5413680e39f5666464859fc56b1003e7dfe2405ced82371ebd49b6","impliedFormat":1},{"version":"c06ef3b2569b1c1ad99fcd7fe5fba8d466e2619da5375dfa940a94e0feea899b","impliedFormat":1},{"version":"f7d628893c9fa52ba3ab01bcb5e79191636c4331ee5667ecc6373cbccff8ae12","impliedFormat":1},{"version":"1d879125d1ec570bf04bc1f362fdbe0cb538315c7ac4bcfcdf0c1e9670846aa6","impliedFormat":1},{"version":"dad97c99382889e9c7d1a9d8275500ff71235130fae9f8916fdbf3641d56e592","impliedFormat":1},{"version":"a6dba407fc287f1e25454e75028c91bbc00675f2d1c4e8b3edcc36c08611a486","impliedFormat":1},{"version":"d663134457d8d669ae0df34eabd57028bddc04fc444c4bc04bc5215afc91e1f4","impliedFormat":1},{"version":"e91f7b1344577a02f051b9b471f33044fef8334a76dc9e1de003d17595a5219b","impliedFormat":1},{"version":"c0723195c85e19656d6b5b9fdb81d3f3403c1ae4679e722c6ea058c516b38d12","impliedFormat":1},{"version":"b55eb9f72166093b5460d34b34f5d8699c968de3bc3fc696e40f2c93f2ebf650","impliedFormat":1},{"version":"71d9eb4c4e99456b78ae182fb20a5dfc20eb1667f091dbb9335b3c017dd1c783","impliedFormat":1},{"version":"cfa846a7b7847a1d973605fbb8c91f47f3a0f0643c18ac05c47077ebc72e71c7","impliedFormat":1},{"version":"1594da19968752a22b2ac48c2d0e60575700e745c577a8a4a676b841238ad5bb","impliedFormat":1},{"version":"e0cee12109e0a10a4c3d6769fcc7644b7c1ea7f52365bea51728f5af29f8a137","impliedFormat":1},{"version":"7d4254b4c6c67a29d5e7f65e67d72540480ac2cfb041ca484847f5ae70480b62","impliedFormat":1},{"version":"3536968defef8a75514f547ead5e2e9c1e984820290ec9b00c5fdfb6ef786535","impliedFormat":1},{"version":"d83773870080c30a230e322ce13a9c6f3398e8dacea4ea8a83e26370f3bac23e","impliedFormat":1},{"version":"dcfeaf98d66314fec29a9076c4290e45d0b196a65827becc19138e9c7b855f37","impliedFormat":1},{"version":"6849fe9210fe4946d5f085bfed36758f33dc6ae15a751338d178dd4daa017c46","impliedFormat":1},{"version":"888cda0fa66d7f74e985a3f7b1af1f64b8ff03eb3d5e80d051c3cbdeb7f32ab7","impliedFormat":1},{"version":"60681e13f3545be5e9477acb752b741eae6eaf4cc01658a25ec05bff8b82a2ef","impliedFormat":1},{"version":"ffae4e1e06aa848a1e4bcef162cd1c48e5909b26223515981310af9c036bdfc7","impliedFormat":1},{"version":"a57b1802794433adec9ff3fed12aa79d671faed86c49b09e02e1ac41b4f1d33a","impliedFormat":1},{"version":"34e16eb7c31768a11a08aebcfb3d70d7b8f0b016197e98d8419e566ceae6d6c8","impliedFormat":1},{"version":"f94ec1f7e4b709d26960306c9082a7a1b728a6e13089346aa48ba57c74cbf47e","impliedFormat":1},{"version":"9a11cb4033405e96c247cd5aa29790212aaffdd127869e8a5219103f0b389fd5","impliedFormat":1},{"version":"01479d9d5a5dda16d529b91811375187f61a06e74be294a35ecce77e0b9e8d6c","impliedFormat":1},{"version":"aff5213585cb72e94054dfe17250ff315f3569b3919d1ef1ad235f37c4ee894e","impliedFormat":1},{"version":"fb2ea35e1be6388d722d7725e2b49c697d34d9c890c3b96758faaeb86d35cef8","impliedFormat":1},{"version":"ce0df82a9ae6f914ba08409d4d883983cc08e6d59eb2df02d8e4d68309e7848b","impliedFormat":1},{"version":"1a4dc28334a926d90ba6a2d811ba0ff6c22775fcc13679521f034c124269fd40","impliedFormat":1},{"version":"f05315ff85714f0b87cc0b54bcd3dde2716e5a6b99aedcc19cad02bf2403e08c","impliedFormat":1},{"version":"5fad3b31fc17a5bc58095118a8b160f5260964787c52e7eb51e3d4fcf5d4a6f0","impliedFormat":1},{"version":"72105519d0390262cf0abe84cf41c926ade0ff475d35eb21307b2f94de985778","impliedFormat":1},{"version":"456006a6975b26c0a1785feddae165f6d307e2d601ffde27e21fc4a790e448a4","impliedFormat":1},{"version":"c857e0aae3f5f444abd791ec81206020fbcc1223e187316677e026d1c1d6fe08","impliedFormat":1},{"version":"ccf6dd45b708fb74ba9ed0f2478d4eb9195c9dfef0ff83a6092fa3cf2ff53b4f","impliedFormat":1},{"version":"1fe0d18b111e1145a7e7601855bccd4ca20f24e3b9a5aba6bb1fa9d1a7059170","impliedFormat":1},{"version":"5632c3c26d420c063eebe64c45b1248b9492a67bf44f1d0c57e9dc8f6cf449bb","impliedFormat":1},{"version":"0df5aa619ab12993a39ea6dae062ee46eadbb4d738916460e636ada52bced75b","impliedFormat":1},{"version":"8fca3039857709484e5893c05c1f9126ab7451fa6c29e19bb8c2411a2e937345","impliedFormat":1},{"version":"35069c2c417bd7443ae7c7cafd1de02f665bf015479fec998985ffbbf500628c","impliedFormat":1},{"version":"10ab7be91f87ebe8916b62cf28af2e45b5601fc7b0e311adf838f912c6b31dd8","impliedFormat":1},{"version":"bc636fbc08e0979ceb7eb0731a33000283d77a33b62e1f71ee65be50394e40ba","impliedFormat":1},{"version":"7e0b7f91c5ab6e33f511efc640d36e6f933510b11be24f98836a20a2dc914c2d","impliedFormat":1},{"version":"045b752f44bf9bbdcaffd882424ab0e15cb8d11fa94e1448942e338c8ef19fba","impliedFormat":1},{"version":"2894c56cad581928bb37607810af011764a2f511f575d28c9f4af0f2ef02d1ab","impliedFormat":1},{"version":"0a72186f94215d020cb386f7dca81d7495ab6c17066eb07d0f44a5bf33c1b21a","impliedFormat":1},{"version":"75bbd3be047d539988a0ff0b56384ef7a6a25f3b676ad96bee547d44c31622a7","impliedFormat":1},{"version":"42960001a776b089ade681ab5cfddc936e0afb0615133ec1841f3dee89d3e1bf","impliedFormat":1},{"version":"0aedb02516baf3e66b2c1db9fef50666d6ed257edac0f866ea32f1aa05aa474f","impliedFormat":1},{"version":"da47712b394d944328245482603bc6f416d3949b67c9392279caab595076b510","affectsGlobalScope":true,"impliedFormat":1},{"version":"37d0071d8f0a06dc55c2c5e0ec3391affd4fd107c53410bf358196ec0bf3923f","impliedFormat":1},{"version":"b213dad76ca37fd552274c9499056e1c0d9c1bd38a55bb7f68b22ba6b84c3ad7","impliedFormat":1},{"version":"c30436b130b6218b7714314dc41d3f459590db4bdf099eecd51cb1bda32109a8","impliedFormat":1},{"version":"20fa37b636fdcc1746ea0738f733d0aed17890d1cd7cb1b2f37010222c23f13e","impliedFormat":1},{"version":"d90b9f1520366d713a73bd30c5a9eb0040d0fb6076aff370796bc776fd705943","impliedFormat":1},{"version":"bc03c3c352f689e38c0ddd50c39b1e65d59273991bfc8858a9e3c0ebb79c023b","impliedFormat":1},{"version":"19df3488557c2fc9b4d8f0bac0fd20fb59aa19dec67c81f93813951a81a867f8","affectsGlobalScope":true,"impliedFormat":1},{"version":"b25350193e103ae90423c5418ddb0ad1168dc9c393c9295ef34980b990030617","affectsGlobalScope":true,"impliedFormat":1},{"version":"bef86adb77316505c6b471da1d9b8c9e428867c2566270e8894d4d773a1c4dc2","impliedFormat":1},{"version":"5a49adaef698b7ad7e6127949fa1b0bbd3d46b7cbd11c54e392a4dcdd51f5190","impliedFormat":1},{"version":"6ee598cdfdd0fa52039dca135b3dfff7b49035dc13292143e0a93843e3861967","impliedFormat":1},{"version":"27be6622e2922a1b412eb057faa854831b95db9db5035c3f6d4b677b902ab3b7","impliedFormat":1},{"version":"5c634644d45a1b6bc7b05e71e05e52ec04f3d73d9ac85d5927f647a5f965181a","impliedFormat":1},{"version":"2489bf04d77dc025ba67f49f1a56eb24b9db477d5ff88123d887e163ed1776aa","impliedFormat":1},{"version":"63a7595a5015e65262557f883463f934904959da563b4f788306f699411e9bac","impliedFormat":1},{"version":"4ba137d6553965703b6b55fd2000b4e07ba365f8caeb0359162ad7247f9707a6","impliedFormat":1},{"version":"0b77b819b5417775fccb20c678293cf614c054a5b1a65421a5b933a9124ba998","impliedFormat":1},{"version":"eb5acb58487367e502d994b57e2c58255d8241f481ea8efa8e79af23af3f41c2","impliedFormat":1},{"version":"9252d498a77517aab5d8d4b5eb9d71e4b225bbc7123df9713e08181de63180f6","impliedFormat":1},{"version":"b1f1d57fde8247599731b24a733395c880a6561ec0c882efaaf20d7df968c5af","impliedFormat":1},{"version":"f1f4095f04343ad6e6825eba41eb50f1555685560dde164179a467e65c4a921c","impliedFormat":1},{"version":"35e6379c3f7cb27b111ad4c1aa69538fd8e788ab737b8ff7596a1b40e96f4f90","impliedFormat":1},{"version":"1fffe726740f9787f15b532e1dc870af3cd964dbe29e191e76121aa3dd8693f2","impliedFormat":1},{"version":"5a3ea721d03a361ccbdd7390ccd75f6e84cbca3a3f01f4b331ecc9af31890c49","impliedFormat":1},{"version":"e7dfaee4af38d45b1cab8a1ee0b3bc1f85ddcf64545ed391d675d78ae6526274","affectsGlobalScope":true,"impliedFormat":1},{"version":"e8daa443eaf9a27fd382cc1f8ebe30330c0f4d89511cfb469166874806751d35","impliedFormat":1},{"version":"af48e58339188d5737b608d41411a9c054685413d8ae88b8c1d0d9bfabdf6e7e","impliedFormat":1},{"version":"616775f16134fa9d01fc677ad3f76e68c051a056c22ab552c64cc281a9686790","impliedFormat":1},{"version":"65c24a8baa2cca1de069a0ba9fba82a173690f52d7e2d0f1f7542d59d5eb4db0","impliedFormat":1},{"version":"f9fe6af238339a0e5f7563acee3178f51db37f32a2e7c09f85273098cee7ec49","impliedFormat":1},{"version":"1de8c302fd35220d8f29dea378a4ae45199dc8ff83ca9923aca1400f2b28848a","impliedFormat":1},{"version":"77e71242e71ebf8528c5802993697878f0533db8f2299b4d36aa015bae08a79c","impliedFormat":1},{"version":"98a787be42bd92f8c2a37d7df5f13e5992da0d967fab794adbb7ee18370f9849","impliedFormat":1},{"version":"332248ee37cca52903572e66c11bef755ccc6e235835e63d3c3e60ddda3e9b93","impliedFormat":1},{"version":"94e8cc88ae2ef3d920bb3bdc369f48436db123aa2dc07f683309ad8c9968a1e1","impliedFormat":1},{"version":"4545c1a1ceca170d5d83452dd7c4994644c35cf676a671412601689d9a62da35","impliedFormat":1},{"version":"320f4091e33548b554d2214ce5fc31c96631b513dffa806e2e3a60766c8c49d9","impliedFormat":1},{"version":"a2d648d333cf67b9aeac5d81a1a379d563a8ffa91ddd61c6179f68de724260ff","impliedFormat":1},{"version":"d90d5f524de38889d1e1dbc2aeef00060d779f8688c02766ddb9ca195e4a713d","impliedFormat":1},{"version":"07ed3ddab975995eea41b22f3010506fb9f5fb301d04820b07d7a1aee5477d7c","impliedFormat":1},{"version":"969d8b0965849f4bae7cab0ba90bd1e1220e95999c2c6f01117fa7500901c017","impliedFormat":1},{"version":"6ec840ee5e2bc103f557fe38b1d585ee250540468713d7634ee066de372bf332","impliedFormat":1},{"version":"b0309e1eda99a9e76f87c18992d9c3689b0938266242835dd4611f2b69efe456","impliedFormat":1},{"version":"47699512e6d8bebf7be488182427189f999affe3addc1c87c882d36b7f2d0b0e","impliedFormat":1},{"version":"6ceb10ca57943be87ff9debe978f4ab73593c0c85ee802c051a93fc96aaf7a20","impliedFormat":1},{"version":"1de3ffe0cc28a9fe2ac761ece075826836b5a02f340b412510a59ba1d41a505a","impliedFormat":1},{"version":"e46d6cc08d243d8d0d83986f609d830991f00450fb234f5b2f861648c42dc0d8","impliedFormat":1},{"version":"1c0a98de1323051010ce5b958ad47bc1c007f7921973123c999300e2b7b0ecc0","impliedFormat":1},{"version":"ff863d17c6c659440f7c5c536e4db7762d8c2565547b2608f36b798a743606ca","impliedFormat":1},{"version":"5412ad0043cd60d1f1406fc12cb4fb987e9a734decbdd4db6f6acf71791e36fe","impliedFormat":1},{"version":"ad036a85efcd9e5b4f7dd5c1a7362c8478f9a3b6c3554654ca24a29aa850a9c5","impliedFormat":1},{"version":"fedebeae32c5cdd1a85b4e0504a01996e4a8adf3dfa72876920d3dd6e42978e7","impliedFormat":1},{"version":"e297c0a524edee7677939122f90027bfbe5f2698939d9a85728e5044b39c7124","impliedFormat":1},{"version":"cdf21eee8007e339b1b9945abf4a7b44930b1d695cc528459e68a3adc39a622e","impliedFormat":1},{"version":"bc9ee0192f056b3d5527bcd78dc3f9e527a9ba2bdc0a2c296fbc9027147df4b2","impliedFormat":1},{"version":"b62381cae176db34f003cc6172ee8f3e0122014889d66391aa73698105cf4934","impliedFormat":1},{"version":"1d9c0a9a6df4e8f29dc84c25c5aa0bb1da5456ebede7a03e03df08bb8b27bae6","impliedFormat":1},{"version":"84380af21da938a567c65ef95aefb5354f676368ee1a1cbb4cae81604a4c7d17","impliedFormat":1},{"version":"1af3e1f2a5d1332e136f8b0b95c0e6c0a02aaabd5092b36b64f3042a03debf28","impliedFormat":1},{"version":"30d8da250766efa99490fc02801047c2c6d72dd0da1bba6581c7e80d1d8842a4","impliedFormat":1},{"version":"03566202f5553bd2d9de22dfab0c61aa163cabb64f0223c08431fb3fc8f70280","impliedFormat":1},{"version":"41eb514d9ce0a6e87957f08a4b7af70d93f87637f37dee706e2d92a6601c25a9","impliedFormat":1},{"version":"e7765aa8bcb74a38b3230d212b4547686eb9796621ffb4367a104451c3f9614f","impliedFormat":1},{"version":"1de80059b8078ea5749941c9f863aa970b4735bdbb003be4925c853a8b6b4450","impliedFormat":1},{"version":"1d079c37fa53e3c21ed3fa214a27507bda9991f2a41458705b19ed8c2b61173d","impliedFormat":1},{"version":"5bf5c7a44e779790d1eb54c234b668b15e34affa95e78eada73e5757f61ed76a","impliedFormat":1},{"version":"5835a6e0d7cd2738e56b671af0e561e7c1b4fb77751383672f4b009f4e161d70","impliedFormat":1},{"version":"4b7f74b772140395e7af67c4841be1ab867c11b3b82a51b1aeb692822b76c872","impliedFormat":1},{"version":"7bd01f0f28cd3aeb2046274d85208e245965f6f2948edf4f7b2057bcf9f22ccc","impliedFormat":99},{"version":"d2f2cf2b8cc92bea913cda4a076e0f790b23a21e84f989d12f0116a7fe3906e0","impliedFormat":99},{"version":"6de125ea94866c736c6d58d68eb15272cf7d1020a5b459fea1c660027eca9a90","affectsGlobalScope":true,"impliedFormat":1},{"version":"f5b20bc288ee49989c95b20847fc93b96bf61cc0845598897a6a53a967dd7d07","affectsGlobalScope":true,"impliedFormat":1},{"version":"064ac1c2ac4b2867c2ceaa74bbdce0cb6a4c16e7c31a6497097159c18f74aa7c","impliedFormat":1},{"version":"3dc14e1ab45e497e5d5e4295271d54ff689aeae00b4277979fdd10fa563540ae","impliedFormat":1},{"version":"d3b315763d91265d6b0e7e7fa93cfdb8a80ce7cdd2d9f55ba0f37a22db00bdb8","impliedFormat":1},{"version":"b789bf89eb19c777ed1e956dbad0925ca795701552d22e68fd130a032008b9f9","impliedFormat":1},{"version":"fd5ab3737ed2aad9a255e7488744177a9e6b576e23b99aeeea56ff1b3f9bba40","affectsGlobalScope":true},"7ad303e40d4fddf44f156129e397511953a71481c5cfd86b1862649aaaf240cc",{"version":"12edf8a08f8fe6be5367414d9b3e14b02bf5037cea7fc329d3a5379a21969edc","signature":"435a1e418e8338be3f39614b96b81a9aa2700bc8c27bc6b98f064ff9ce17c363"},"d3760b4ecab6dc011ed586c25416a033be730f92bfb1a089bcc6aad27a015ed4","882f4104287c6ec75e58321c8fcf2b33afd9d5f269c1b2fb407ace41dd11ec8d","3bf382f15a44d77fd234099deb04fb183933196f3ba4ef625b3c9a983605aa77","2724fa8f4b232f4840afaaa26384e61e8860465c1698c9e6c7f0f4f74746ecad","4a644e371a367eced4b3274d629beacc9691efbc6a8735eede168968d77a3016","8f418628978921f0cd3d7ae29776709772a6f9cd3ccc1eb4be05504e2c285038","2a4ec8de56964c67e47ef99168303621c56830d694cf9836f72af101e0b0fd4f","30e47f4bd276e5925f85d61a91c3c21c879554718b481e680628ddbc281586e9","a2cae2f9cbe929c9d6ee15778495ab05e4c9fb435a7507fb9082bce23d5d51cd","c3abca726ab34c33480b4b2cd5ff8b0da5051fce33084f9caa669210f68d359d","438d25d1741ec586e74b91700cb9114d3d4218bdc2a0ba9876547fb8e3531181","1d297f621e9c321b4b4949a0da610baa6a3f3558adc395346e6e35a2305c6710","609461083cb3f598bdc18ffa7e998d8eaa658c1729f17555067f87d176e900c0","f3d709db17eed13b17b1c1931257d1f41594a886ce64b26b07c95f2d02f0043c","c1816f02a1f0b26ecbafb661f2dec6014e00c2b8987844a05917accc8e8f1576","ba72b69afe9cf5aa3d8193604f36ebd1fc664079318b6a74e0283ad537399b4f","5445e5d1028ab3e6b3ac5c58d36ff6af380910944bd1243881d877efa348739e","76b743a6977ae4123994fe5016818d9e6d5fa76873b05bce3c59d23a603e05a2","24fd7db9ab57ef9cca7af92078de485f28ff56f98fbbcc6a8b7b6e2d4a07145b","fae4698d626a1f587800f9650652421d20df0ef4eae33ecdf24edd62330f5436","973996dd670669322d41890c47b05047ce7c690848c72b247f881383a470a54b","851dd20900cf38e5a0e935eb49e4a587849b5916da4596b20e9f1715e5e2e6fe","1ebc360ee3d27be752769f09e76f86978a49b672185fb5bf1d880f377820cd18","d0b23e294f29657e5b688e5394a0c96d40ae864738b089343ee68868635f09be","0c85800d419e915b9e82bf96316b7f8e5f80e89db3881fbcdec760905a4f425f","1d8dc8ee8ba7a3e8600f61ce732bfe59b45c7d3a9155877c53c676880a61ac8c","e68cd65f086070078dda1cf067e1dc8638925cbd66b570f5d44e21762bdf89d6","2c1cde200d705232259f8206414e3b752bce54baea6ed2a27080b8ff382ebbf2","e5730f3d13d2e12fe0fa6df60b35fa83c2e0d5096ae1d22b19f89976d2771538","cd9420f2bb791be238f2c63a4d7ce564bd357a831a7d9b7118ce29a4fd722f58","4cb62ab77aee736121ff1d88eaa4c2c88a3f3e0d31139383951356d8391e95e1","90885360ecde897f4049ed8a5de994b588b24c751d7814f8329f676dc6e91c37","002dc893c397d7e8470bfd59698b4bc7adb0ede708bcd1b8943220e3869294d8","01d4d65798df68ee3fa55bef03441d263abc5ea6e807488ad69b0d43ca276500","acfc6f3288974ae191ac11ee0b98c57f5cbe4f64ede4f4f3d338cefe1d311e7a","83c778e26e02ab03d1d50ea1bb7aada760ade4121ef3d0ae57bb26e4311dc1a1","900354f802a2d3f74a54ed16294a23ce9a04bfd16efbfba0953a632f37907e9d","87c2070c59906105876489eb24012db67c3363972741b9199e3d501b0cffc85e","d9c3f8912e130938d63ea9358127d6ba6be6ffd1351184ffeca4e2718d19c6a0","e12808186eaf93751afced7604feb808f10f4baf24e7952b109fdbd504b673bc","23b512a81712ba11980474f9f7e0190d537c01c91fa4e8356a9d324bc4ffa8cd","2e93805ce2445d179d6a51fc00c98cc07656bb8b731afcd81415dc2569f4cc16","f95b536105d4df91cb468b3998b7bb115c2f5aa1a1950d75cdd9c1c3a218c118","85d6748266cb3ac0d86bcd0a6fd1b2d8e55623e139d9be874799ebc77d137b25","e1afbbe19d9c9e830d708b3bedba6d96aeb25030d5719acdf5f34aa74fa514b0","bf55b507f87d11257e7b797cfafab3ef4b1500572175e248540e4c0a05ba6d07","e99e3251301826a9dc4cdf17e25bb94e3968cc2c63abcd9ae61f4e2d0727b374","965e1f6739871088c8ef9d9c6df13cd9b749d921a4219051e29e4ac28b378669","80b4ba81febe1a7bc85b524754e90992dcd50da286d87b46e4bb448976314a37","e2dbeb4d29b451cfbe16b3654f5459a6199316a84ef3166efd4cd5e655b923ec","b1c0e9247c6aaf099001d17a77319d64ccc9e16fd8fb990198b338df14f7fd7a","669c5ebb0c6d33950b1f1ad8445875788c1ae5b8d170bc597d3ac98eb920e9e2","26393eb1f3cfb631d0575fcc2dab7529615beb4c259c5ec4faaa146c2eda6691","83c6812e33a43e4ad1e7486c8cb1e3278ea4fa70b60ffa41ae799ad3ad27263f","32a7f4884c6960bc5b22ebcd1b68424ff3d2b4de4467811cac4c1182ac353f80","a3368e4ffdf7ef3307c77dc3d770ce1543aa0b5f7f6db1884c268b861607d3d9","482cac6c647f24b407c588964253f730323508b8486c1d4338f65fec069022a5","4506faf557cdd9bfa35481a8f8889613e625cdbb5c64d5a6cdf843ab1e8b8795","2573ad603f3042bdd0600f346102958539db688c92c449c7262e0e2c573efb2e","57efb7f7279173cf65419152c2445dcb91708a387c5c040975d0153794b94284","d4962f50379fe141d80811077d3c0befd50bd4e2cacdcac5f3aab1abc87a3140","acfa7463fc943f905fe5e6a11d75759191bf9d317348f899613bbf491b2dbe24","d5a7b96e687023633ccdc0cdeefcafb79751aa1587d1c21924ddf0db1cca62c1","8d2fff790eec6fb735e42af48bdce5e2581eb09b5cc35482251b9768987ba6d6","c3ff342919ae427b5e2a2190cd60ba0c5aa21192b965778171e73b6adc974ccf","a495937611ba4506b607ba96b881918f2bf7b60db2a8cf3cb4c70b9a33498b95","ea880d27dab433c52c37b4d1593aba7d1280c0ecb177cbe864f1553514d1f8db",{"version":"96fb5e53a0c06ab95d8277ce17d97d38af143995c0546fe40d04323d72b5807a","signature":"0fd4721766476a549d39e28e1143adbe495533d2db6348c544a7fd7e20c8fec5"},{"version":"6b4fefb59a3247fbe52f698f99f7f72a497eb618b34f9e4151978a820073d391","signature":"050ac9ee30fe9431459d0bfd0d2251b062234ea4546f65512ce5a15ab54b6aaa"},"d1986184a09a52db8228cb2bb2a61a8c05c9354e5b93cec8e2628d8579c892d7","483ce8830f201330db25dccb409119a2624f3f3b055717130eaf0fade4ff58e9"],"root":[[530,532],565,566,[597,603]],"options":{"allowJs":true,"esModuleInterop":true,"jsx":4,"module":99,"skipLibCheck":true,"strict":true,"target":4},"referencedMap":[[602,1],[530,2],[603,3],[531,4],[532,5],[599,6],[598,7],[600,8],[566,9],[597,10],[601,8],[565,11],[374,2],[140,12],[141,12],[142,13],[97,14],[143,15],[144,16],[145,17],[92,2],[95,18],[93,2],[94,2],[146,19],[147,20],[148,21],[149,22],[150,23],[151,24],[152,24],[153,25],[154,26],[155,27],[156,28],[98,2],[96,2],[157,29],[158,30],[159,31],[191,32],[160,33],[161,34],[162,35],[163,36],[164,37],[165,38],[166,39],[167,40],[168,41],[169,42],[170,42],[171,43],[172,2],[173,44],[175,45],[174,46],[176,47],[177,48],[178,49],[179,50],[180,51],[181,52],[182,53],[183,54],[184,55],[185,56],[186,57],[187,58],[188,59],[99,2],[100,2],[101,2],[139,60],[189,61],[190,62],[195,63],[459,64],[196,65],[194,66],[461,67],[460,68],[192,69],[457,2],[193,70],[83,2],[85,71],[456,64],[226,64],[84,2],[482,72],[487,1],[494,73],[477,74],[230,2],[238,75],[378,76],[381,77],[353,2],[366,78],[373,79],[255,2],[355,2],[236,2],[352,80],[398,81],[237,2],[228,82],[380,83],[382,84],[383,85],[454,86],[347,87],[300,88],[360,89],[361,90],[359,91],[358,2],[354,92],[379,93],[239,94],[424,2],[425,95],[266,96],[240,97],[267,96],[303,96],[206,96],[376,98],[375,2],[365,99],[472,2],[215,2],[493,100],[432,101],[433,102],[429,103],[511,2],[330,2],[434,104],[430,105],[516,106],[515,107],[510,2],[281,2],[333,108],[332,2],[509,109],[431,64],[286,110],[293,111],[295,112],[285,2],[290,113],[292,114],[294,115],[289,116],[287,2],[291,117],[512,2],[508,2],[514,118],[513,2],[284,119],[503,120],[506,121],[274,122],[273,123],[272,124],[519,64],[271,125],[260,2],[521,2],[522,64],[523,126],[198,2],[362,127],[363,128],[364,129],[202,2],[367,2],[222,130],[197,2],[446,64],[204,131],[445,132],[444,133],[435,2],[436,2],[443,2],[438,2],[441,134],[437,2],[439,135],[442,136],[440,135],[235,2],[232,2],[233,96],[387,2],[392,137],[393,138],[391,139],[389,140],[390,141],[385,2],[452,104],[227,104],[481,142],[488,143],[492,144],[321,145],[320,2],[315,2],[468,146],[476,147],[348,148],[349,149],[427,150],[337,2],[450,151],[325,64],[342,152],[453,153],[338,2],[341,154],[339,2],[451,155],[448,156],[447,2],[449,2],[345,2],[423,157],[210,158],[323,159],[327,160],[343,161],[346,162],[335,163],[328,164],[475,165],[401,166],[319,167],[207,168],[474,169],[203,170],[394,171],[386,2],[395,172],[412,173],[384,2],[411,174],[91,2],[406,175],[231,2],[426,176],[402,2],[216,2],[218,2],[357,2],[410,177],[234,2],[258,178],[344,179],[264,180],[324,2],[409,2],[388,2],[414,181],[415,182],[356,2],[417,183],[419,184],[418,185],[368,2],[408,168],[421,186],[318,187],[407,188],[413,189],[243,2],[247,2],[246,2],[245,2],[250,2],[244,2],[253,2],[252,2],[249,2],[248,2],[251,2],[254,190],[242,2],[310,191],[309,2],[314,192],[311,193],[313,194],[316,192],[312,193],[223,195],[302,196],[471,197],[469,2],[498,198],[500,199],[464,200],[499,201],[211,202],[208,202],[241,2],[225,203],[224,204],[220,205],[221,206],[229,207],[257,207],[268,207],[304,208],[269,208],[213,209],[212,2],[308,210],[307,211],[306,212],[305,213],[214,214],[455,215],[256,216],[463,217],[428,218],[458,219],[462,220],[351,221],[350,222],[331,223],[317,224],[299,225],[301,226],[298,227],[420,228],[322,2],[486,2],[219,229],[422,230],[470,231],[329,2],[259,232],[336,233],[334,234],[261,235],[396,236],[465,2],[262,237],[397,237],[484,2],[483,2],[485,2],[467,2],[466,2],[399,238],[326,2],[296,239],[217,240],[275,2],[201,241],[263,2],[490,64],[200,2],[502,242],[283,64],[496,104],[282,243],[479,244],[280,242],[205,2],[504,245],[278,64],[279,64],[270,2],[199,2],[277,246],[276,247],[265,248],[340,41],[400,41],[416,2],[404,249],[403,2],[288,119],[209,2],[297,64],[473,130],[480,250],[86,64],[89,251],[90,252],[87,64],[88,2],[377,253],[372,254],[371,2],[370,255],[369,2],[478,256],[489,257],[491,258],[495,259],[497,260],[501,261],[529,262],[505,262],[528,263],[507,264],[517,265],[518,266],[520,267],[524,268],[527,130],[526,2],[525,269],[405,270],[81,2],[82,2],[13,2],[14,2],[16,2],[15,2],[2,2],[17,2],[18,2],[19,2],[20,2],[21,2],[22,2],[23,2],[24,2],[3,2],[25,2],[26,2],[4,2],[27,2],[31,2],[28,2],[29,2],[30,2],[32,2],[33,2],[34,2],[5,2],[35,2],[36,2],[37,2],[38,2],[6,2],[42,2],[39,2],[40,2],[41,2],[43,2],[7,2],[44,2],[49,2],[50,2],[45,2],[46,2],[47,2],[48,2],[8,2],[54,2],[51,2],[52,2],[53,2],[55,2],[9,2],[56,2],[57,2],[58,2],[60,2],[59,2],[61,2],[62,2],[10,2],[63,2],[64,2],[65,2],[11,2],[66,2],[67,2],[68,2],[69,2],[70,2],[1,2],[71,2],[72,2],[12,2],[76,2],[74,2],[79,2],[78,2],[73,2],[77,2],[75,2],[80,2],[117,271],[127,272],[116,271],[137,273],[108,274],[107,275],[136,269],[130,276],[135,277],[110,278],[124,279],[109,280],[133,281],[105,282],[104,269],[134,283],[106,284],[111,285],[112,2],[115,285],[102,2],[138,286],[128,287],[119,288],[120,289],[122,290],[118,291],[121,292],[131,269],[113,293],[114,294],[123,295],[103,296],[126,287],[125,285],[129,2],[132,297],[586,298],[585,298],[584,298],[583,298],[590,298],[589,298],[588,298],[587,298],[578,298],[577,298],[576,298],[575,298],[594,298],[593,298],[592,298],[591,298],[596,299],[570,300],[569,300],[568,300],[567,300],[582,298],[581,298],[580,298],[579,298],[574,300],[573,300],[572,300],[571,300],[595,301],[550,104],[547,104],[548,104],[549,104],[551,302],[545,303],[544,304],[546,305],[543,303],[542,306],[539,104],[541,104],[538,104],[540,104],[537,104],[535,307],[536,308],[534,309],[533,104],[560,8],[561,310],[559,8],[558,8],[564,311],[563,311],[562,311],[553,312],[552,313],[556,8],[557,314],[555,8],[554,8]],"affectedFilesPendingEmit":[603,532,599,598,600,566,597,601,565],"version":"5.9.3"}
```

## package.json

```json
{
  "name": "zenix-ui",
  "private": true,
  "type": "module",
  "scripts": {
    "dev": "pnpm --filter playground dev",
    "build": "pnpm -r build"
  },
  "devEngines": {
    "packageManager": {
      "name": "pnpm",
      "version": "^11.7.0",
      "onFail": "download"
    }
  },
  "devDependencies": {
    "@types/node": "^26.0.0",
    "@types/react": "^19.2.17",
    "@types/react-dom": "^19.2.3",
    "react": "^19.2.7",
    "react-dom": "^19.2.7",
    "typescript": "~6.0.3"
  }
}
```

## packages/blueprints/package.json

```json
{
  "name": "@zenixui/blueprints",
  "version": "0.0.0",
  "main": "src/index.ts",
  "scripts": {
    "build:registry": "npx tsx scripts/build-registry.ts"
  },
  "dependencies": {
    "@zenixui/components": "workspace:*",
    "@zenixui/core": "workspace:*"
  },
  "peerDependencies": {
    "react": "^18.3.1",
    "react-dom": "^18.3.1"
  }
}
```

## packages/blueprints/scripts/build-registry.ts

```typescript
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { blueprints } from '../src/registry';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const monorepoRoot = path.join(__dirname, '../../..'); // from scripts to root
const distDir = path.join(__dirname, '../dist');

async function buildRegistry() {
  console.log('Building blueprint registry...');
  
  if (!fs.existsSync(distDir)) {
    fs.mkdirSync(distDir, { recursive: true });
  }

  const idSet = new Set<string>();

  const registry = blueprints.map(bp => {
    // 1. Validate required fields
    if (!bp.id || !bp.title || !bp.category || !bp.theme || !bp.sourcePath) {
      console.error(`[Validation Error] Blueprint is missing critical metadata: ${JSON.stringify(bp)}`);
      process.exit(1);
    }

    // 2. Detect duplicate IDs
    if (idSet.has(bp.id)) {
      console.error(`[Validation Error] Duplicate Blueprint ID detected: ${bp.id}`);
      process.exit(1);
    }
    idSet.add(bp.id);

    const fullPath = path.join(monorepoRoot, bp.sourcePath);
    let sourceCode = '';
    
    // 3. Verify source file exists
    if (!fs.existsSync(fullPath)) {
      console.error(`[Validation Error] Source file does not exist for ${bp.id}: ${fullPath}`);
      process.exit(1);
    }

    try {
      sourceCode = fs.readFileSync(fullPath, 'utf-8');
      
      // 4. Verify the export exists in the source code
      const exportRegex = new RegExp(`export (?:default )?(?:function|const|let|var) ${bp.title.replace(/\s+/g, '')}`);
      if (!exportRegex.test(sourceCode)) {
         console.warn(`[Validation Warning] Export ${bp.title.replace(/\s+/g, '')} might be missing in ${fullPath}`);
      }
    } catch (err) {
      console.error(`[Validation Error] Failed to read source code for blueprint: ${bp.id} at ${fullPath}`);
      process.exit(1);
    }

    return {
      id: bp.id,
      title: bp.title,
      description: bp.description,
      category: bp.category,
      theme: bp.theme,
      tags: bp.tags,
      previewImage: bp.previewImage,
      sourceCode
    };
  });

  const outputPath = path.join(distDir, 'registry.json');
  fs.writeFileSync(outputPath, JSON.stringify(registry, null, 2));
  
  console.log(`Successfully built registry.json with ${registry.length} blueprints.`);
}

buildRegistry();
```

## packages/blueprints/src/auth/AutumnAuth.tsx

```tsx
'use client';

import { useState } from 'react';
import { Surface, Features, Input, Button } from '@zenixui/components';

export function AutumnAuth() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setTimeout(() => setStatus('success'), 1200);
  };

  return (
    <Features.Root padded>
      <Features.Content align="center" style={{ maxWidth: '450px', margin: '0 auto' }}>
        <Surface variant="card" style={{ padding: '4rem 3rem', background: 'var(--zx-surface)', border: '1px solid var(--zx-elevated)', borderRadius: 'var(--zx-radius)' }}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <h2 style={{ fontSize: '2.5rem', fontFamily: 'Georgia, serif', fontStyle: 'italic', margin: '0 0 1rem', color: 'var(--zx-primary)' }}>
              Sign In
            </h2>
            <p style={{ opacity: 0.7, margin: 0, fontSize: '1rem', lineHeight: 1.6 }}>
              Continue your story with us.
            </p>
          </div>

          {status === 'success' ? (
            <div style={{ padding: '2rem', textAlign: 'center' }}>
              <p style={{ margin: 0, fontFamily: 'Georgia, serif', fontStyle: 'italic', fontSize: '1.25rem' }}>
                Welcome back.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
              <div style={{ position: 'relative' }}>
                <Input 
                  type="email" 
                  variant="organic"
                  placeholder=" " 
                  required
                  className="autumn-auth-input"
                  id="autumn-auth-email"
                />
                <label htmlFor="autumn-auth-email" style={labelStyle}>Email address</label>
              </div>

              <div style={{ position: 'relative' }}>
                <Input 
                  type="password" 
                  variant="organic"
                  placeholder=" " 
                  required
                  className="autumn-auth-input"
                  id="autumn-auth-password"
                />
                <label htmlFor="autumn-auth-password" style={labelStyle}>Password</label>
              </div>

              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <input type="checkbox" id="autumn-remember" style={{ cursor: 'pointer', accentColor: 'var(--zx-primary)' }} />
                  <label htmlFor="autumn-remember" style={{ fontSize: '0.9rem', cursor: 'pointer', opacity: 0.7 }}>Remember me</label>
                </div>
                <a href="#" style={{ fontSize: '0.9rem', color: 'var(--zx-primary)', textDecoration: 'none', borderBottom: '1px solid var(--zx-elevated)' }}>Forgot?</a>
              </div>

              <Button 
                type="submit"
                variant="organic"
                fullWidth
                isLoading={status === 'loading'}
                style={{
                  marginTop: '1rem',
                  padding: '1rem',
                  background: 'var(--zx-primary)',
                  color: 'var(--zx-background)',
                  border: 'none'
                }}
              >
                Sign in
              </Button>

              <Button 
                type="button"
                variant="organic"
                fullWidth
                style={{
                  padding: '1rem',
                  background: 'transparent',
                  border: '1px solid var(--zx-elevated)'
                }}
              >
                Sign in with Google
              </Button>
            </form>
          )}

          <p style={{ textAlign: 'center', marginTop: '3rem', fontSize: '0.9rem', opacity: 0.7 }}>
            Don't have an account? <a href="#" style={{ color: 'var(--zx-primary)', textDecoration: 'none', fontStyle: 'italic', fontFamily: 'Georgia, serif' }}>Sign up</a>
          </p>
        </Surface>

        {/* CSS snippet for floating labels */}
        <style dangerouslySetInnerHTML={{__html: `
          .autumn-auth-input:focus + label,
          .autumn-auth-input:not(:placeholder-shown) + label {
            transform: translateY(-20px) scale(0.85);
            opacity: 0.5;
          }
        `}} />
      </Features.Content>
    </Features.Root>
  );
}
const labelStyle: React.CSSProperties = {
  position: 'absolute',
  top: '0.5rem',
  left: 0,
  fontSize: '1.1rem',
  opacity: 0.5,
  transition: 'all 0.3s ease',
  pointerEvents: 'none',
  zIndex: 1,
  transformOrigin: 'left top'
};
```

## packages/blueprints/src/auth/NightCityAuth.tsx

```tsx
'use client';

import { useState } from 'react';
import { Surface, Features, Input, Button } from '@zenixui/components';

export function NightCityAuth() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setTimeout(() => setStatus('success'), 800);
  };

  return (
    <Features.Root padded>
      <Features.Content align="center" style={{ maxWidth: '400px', margin: '0 auto', fontFamily: 'var(--zx-font-mono)' }}>
        <Surface variant="card" style={{ padding: '2rem', borderRadius: 0, border: '1px solid var(--zx-elevated)', position: 'relative', background: 'transparent' }}>
          {/* Cyberpunk corner accents */}
          <div style={{ position: 'absolute', top: -1, left: -1, width: '10px', height: '10px', borderTop: '2px solid var(--zx-primary)', borderLeft: '2px solid var(--zx-primary)' }} />
          <div style={{ position: 'absolute', bottom: -1, right: -1, width: '10px', height: '10px', borderBottom: '2px solid var(--zx-primary)', borderRight: '2px solid var(--zx-primary)' }} />
          
          <div style={{ marginBottom: '2rem', textAlign: 'left', borderBottom: '1px solid var(--zx-elevated)', paddingBottom: '1rem' }}>
            <h2 style={{ fontSize: '1.25rem', fontWeight: 600, margin: '0 0 0.25rem', textTransform: 'uppercase' }}>
              SYS.AUTH_REQ
            </h2>
            <p style={{ opacity: 0.6, margin: 0, fontSize: '0.75rem', textTransform: 'uppercase' }}>
              {'//'} IDENTIFICATION REQUIRED
            </p>
          </div>

          {status === 'success' ? (
            <div style={{ padding: '1rem', borderLeft: '2px solid #00ff00', textAlign: 'left' }}>
              <div style={{ fontSize: '1rem', color: '#00ff00', fontWeight: 600 }}>[ACCESS_GRANTED]</div>
              <p style={{ opacity: 0.7, margin: '0.5rem 0 0', fontSize: '0.875rem' }}>Decryption successful. Welcome back, OPERATIVE.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', textAlign: 'left' }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                <label style={{ fontSize: '0.75rem', fontWeight: 600, textTransform: 'uppercase', opacity: 0.7 }}>{'>'} HANDLE</label>
                <Input 
                  type="text" 
                  variant="terminal"
                  placeholder="OPERATIVE_ID" 
                  required
                />
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                <label style={{ fontSize: '0.75rem', fontWeight: 600, textTransform: 'uppercase', opacity: 0.7 }}>{'>'} PASSPHRASE</label>
                <Input 
                  type="password" 
                  variant="terminal"
                  placeholder="********" 
                  required
                />
              </div>

              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '0.5rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <input type="checkbox" id="nc-persist" style={{ cursor: 'pointer', appearance: 'none', width: '16px', height: '16px', border: '1px solid var(--zx-primary)', background: 'transparent' }} />
                  <label htmlFor="nc-persist" style={{ fontSize: '0.75rem', fontWeight: 600, textTransform: 'uppercase', cursor: 'pointer', opacity: 0.8 }}>PERSIST_SESSION</label>
                </div>
                <a href="#" style={{ fontSize: '0.75rem', fontWeight: 600, color: 'var(--zx-primary)', textDecoration: 'underline', textTransform: 'uppercase' }}>RESET_KEY</a>
              </div>

              <Button 
                type="submit"
                variant="cyber"
                fullWidth
                isLoading={status === 'loading'}
                style={{ marginTop: '1rem', padding: '1rem' }}
              >
                AUTHENTICATE
              </Button>
            </form>
          )}

          <div style={{ textAlign: 'center', marginTop: '2rem', fontSize: '0.75rem', textTransform: 'uppercase', opacity: 0.5 }}>
            NO_HANDLE_FOUND? <a href="#" style={{ color: 'var(--zx-primary)', textDecoration: 'underline' }}>INITIALIZE_OPERATIVE</a>
          </div>
        </Surface>
      </Features.Content>
    </Features.Root>
  );
}
```

## packages/blueprints/src/auth/OceanAuth.tsx

```tsx
'use client';

import { useState } from 'react';
import { Surface, Features, Input, Button } from '@zenixui/components';

export function OceanAuth() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setTimeout(() => setStatus('success'), 1500);
  };

  return (
    <Features.Root padded>
      <Features.Content align="center" style={{ maxWidth: '420px', margin: '0 auto' }}>
        <Surface variant="glass" style={{ padding: '3.5rem', borderRadius: 'var(--zx-radius-lg)', background: 'var(--zx-glass-bg)', backdropFilter: 'var(--zx-glass-blur)', border: '1px solid var(--zx-glass-border)' }}>
          <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
            <div style={{ width: '48px', height: '48px', background: 'var(--zx-primary)', borderRadius: '50%', margin: '0 auto 1.5rem', opacity: 0.1 }} />
            <h2 style={{ fontSize: '2rem', fontWeight: 300, margin: '0 0 0.5rem', letterSpacing: '-0.02em' }}>
              Welcome back
            </h2>
            <p style={{ opacity: 0.7, margin: 0, fontSize: '1rem', fontWeight: 300 }}>
              Log in to continue your journey
            </p>
          </div>

          {status === 'success' ? (
            <div style={{ padding: '2rem', textAlign: 'center', animation: 'fadeIn 0.5s ease-out' }}>
              <p style={{ fontSize: '1.25rem', fontWeight: 300 }}>Authenticating...</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <Input 
                type="email" 
                variant="glass"
                placeholder="Email address" 
                required
              />

              <Input 
                type="password" 
                variant="glass"
                placeholder="Password" 
                required
              />

              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '0.5rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <input type="checkbox" id="ocean-remember" style={{ cursor: 'pointer', opacity: 0.5 }} />
                  <label htmlFor="ocean-remember" style={{ fontSize: '0.875rem', fontWeight: 300, cursor: 'pointer', opacity: 0.8 }}>Remember me</label>
                </div>
                <a href="#" style={{ fontSize: '0.875rem', fontWeight: 400, color: 'var(--zx-primary)', textDecoration: 'none' }}>Recovery</a>
              </div>

              <Button 
                type="submit"
                variant="glass"
                fullWidth
                isLoading={status === 'loading'}
                style={{
                  marginTop: '1rem',
                  padding: '1.25rem',
                }}
              >
                Log in
              </Button>
            </form>
          )}

          <p style={{ textAlign: 'center', marginTop: '3rem', fontSize: '0.875rem', fontWeight: 300, opacity: 0.7 }}>
            New here? <a href="#" style={{ fontWeight: 500, color: 'var(--zx-primary)', textDecoration: 'none', borderBottom: '1px solid currentColor' }}>Create an account</a>
          </p>
        </Surface>
      </Features.Content>
    </Features.Root>
  );
}
```

## packages/blueprints/src/auth/ZenixAuth.tsx

```tsx
'use client';

import { useState } from 'react';
import { Surface, Features, Input, Button } from '@zenixui/components';

export function ZenixAuth() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success'>('idle');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [remember, setRemember] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !password) return;
    setStatus('loading');
    setTimeout(() => setStatus('success'), 1000);
  };

  return (
    <Features.Root padded>
      <Features.Content align="center" style={{ maxWidth: '400px', margin: '0 auto' }}>
        <Surface variant="card" style={{ padding: '3rem 2.5rem', borderRadius: 'var(--zx-radius-lg)', border: '1px solid var(--zx-elevated)', boxShadow: 'var(--zx-shadow-lg)', background: 'var(--zx-surface)' }}>
          <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
            <h2 style={{ fontSize: '1.75rem', fontWeight: 600, margin: '0 0 0.5rem', letterSpacing: '-0.02em' }}>
              Welcome back
            </h2>
            <p style={{ opacity: 0.6, margin: 0, fontSize: '0.875rem' }}>
              Enter your details to sign in to your account
            </p>
          </div>

          {status === 'success' ? (
            <div style={{ padding: '1rem', background: 'var(--zx-elevated)', borderRadius: 'var(--zx-radius-sm)', color: 'var(--zx-primary)', fontWeight: 500, fontSize: '0.875rem', textAlign: 'center' }}>
              ✓ Authenticated. Redirecting...
            </div>
          ) : (
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                <label style={{ fontSize: '0.875rem', fontWeight: 500 }}>Email</label>
                <Input 
                  type="email" 
                  variant="default"
                  placeholder="name@company.com" 
                  required
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                />
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <label style={{ fontSize: '0.875rem', fontWeight: 500 }}>Password</label>
                  <a href="#" style={{ fontSize: '0.75rem', fontWeight: 500, opacity: 0.6, textDecoration: 'none' }}>Forgot password?</a>
                </div>
                <Input 
                  type="password" 
                  variant="default"
                  placeholder="••••••••" 
                  required
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                />
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginTop: '0.25rem' }}>
                <input 
                  type="checkbox" 
                  id="remember-zenix"
                  checked={remember}
                  onChange={e => setRemember(e.target.checked)}
                  style={{ accentColor: 'var(--zx-primary)', width: '16px', height: '16px', cursor: 'pointer' }}
                />
                <label htmlFor="remember-zenix" style={{ fontSize: '0.875rem', cursor: 'pointer', opacity: 0.8 }}>Remember for 30 days</label>
              </div>

              <Button 
                type="submit"
                variant="default"
                fullWidth
                isLoading={status === 'loading'}
                style={{ marginTop: '0.5rem' }}
              >
                Sign in
              </Button>
            </form>
          )}

          <div style={{ display: 'flex', alignItems: 'center', margin: '1.5rem 0', opacity: 0.3 }}>
            <div style={{ flex: 1, height: '1px', background: 'var(--zx-primary)' }} />
            <div style={{ padding: '0 0.5rem', fontSize: '0.75rem', fontWeight: 600 }}>OR</div>
            <div style={{ flex: 1, height: '1px', background: 'var(--zx-primary)' }} />
          </div>

          <Button 
            type="button"
            variant="default"
            fullWidth
            style={{
              background: 'transparent',
              color: 'var(--zx-primary)',
              border: '1px solid var(--zx-elevated)'
            }}
          >
            Sign in with Google
          </Button>

          <p style={{ textAlign: 'center', marginTop: '2rem', fontSize: '0.875rem', opacity: 0.6 }}>
            Don't have an account? <a href="#" style={{ fontWeight: 600, color: 'var(--zx-primary)', textDecoration: 'none', opacity: 1 }}>Sign up</a>
          </p>
        </Surface>
      </Features.Content>
    </Features.Root>
  );
}
```

## packages/blueprints/src/blog/AutumnBlog.tsx

```tsx
'use client';

import { useState } from 'react';
import { Surface, Features, Button, Badge } from '@zenixui/components';

const POSTS = [
  { id: 1, title: "The Art of Slow Living", desc: "A reflection on finding peace in the details.", date: "October 12" },
  { id: 2, title: "Coffee and Code", desc: "Morning rituals for the working developer.", date: "October 08" },
];

export function AutumnBlog() {
  const [view, setView] = useState<'list' | 'detail'>('list');

  if (view === 'detail') {
    return (
      <Features.Root padded>
        <Features.Content style={{ maxWidth: '650px', margin: '2rem auto' }}>
          <Button 
            variant="organic"
            onClick={() => setView('list')} 
            style={{ background: 'transparent', border: 'none', color: 'var(--zx-primary)', opacity: 0.6, padding: 0, height: 'auto', marginBottom: '3rem' }}
          >
            ← Return to journal
          </Button>
          
          <div style={{ marginBottom: '4rem', textAlign: 'center' }}>
            <Badge variant="organic" tone="neutral">
              Thoughts
            </Badge>
            <h1 style={{ fontSize: '3.5rem', fontFamily: 'Georgia, serif', margin: '1rem 0', lineHeight: 1.1, color: 'var(--zx-primary)' }}>
              The Art of Slow Living
            </h1>
            <div style={{ opacity: 0.5, fontSize: '1rem', marginTop: '1.5rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
              October 12, 2026
            </div>
          </div>

          <div style={{ fontSize: '1.25rem', lineHeight: 2, color: 'var(--zx-primary)', fontFamily: 'system-ui, sans-serif', fontWeight: 300 }}>
            <p style={{ marginBottom: '2rem' }}>
              We rush through our days, ticking off boxes and answering notifications. But what happens when we pause? The Autumn theme was designed specifically to slow down the user experience.
            </p>
            
            {/* Pull Quote Discovery */}
            <div style={{ margin: '4rem -2rem', padding: '2rem', borderLeft: '4px solid var(--zx-primary)' }}>
              <p style={{ margin: 0, fontSize: '2rem', fontFamily: 'Georgia, serif', fontStyle: 'italic', lineHeight: 1.4 }}>
                "To design for slowness is to design for humanity."
              </p>
            </div>

            <p style={{ marginBottom: '2rem' }}>
              By relying on warm typography and soft, invisible boundaries, the reader is encouraged to read rather than scan. We strip away the hard borders of traditional cards and replace them with breathable space.
            </p>
          </div>
        </Features.Content>
      </Features.Root>
    );
  }

  return (
    <Features.Root padded>
      <Features.Content style={{ maxWidth: '800px', margin: '0 auto' }}>
        <h1 style={{ fontSize: '3.5rem', fontFamily: 'Georgia, serif', fontStyle: 'italic', margin: '0 0 4rem', textAlign: 'center' }}>
          The Journal
        </h1>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '4rem' }}>
          {POSTS.map(post => (
            <div 
              key={post.id}
              onClick={() => setView('detail')}
              style={{ display: 'flex', gap: '3rem', cursor: 'pointer' }}
            >
              <div style={{ width: '150px', flexShrink: 0, opacity: 0.5, fontSize: '1rem', paddingTop: '0.5rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
                {post.date}
              </div>
              <div>
                <h2 style={{ fontSize: '2.5rem', fontFamily: 'Georgia, serif', margin: '0 0 1rem', lineHeight: 1.2 }}>
                  {post.title}
                </h2>
                <p style={{ opacity: 0.7, fontSize: '1.25rem', margin: 0, fontWeight: 300, lineHeight: 1.6 }}>
                  {post.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Features.Content>
    </Features.Root>
  );
}
```

## packages/blueprints/src/blog/NightCityBlog.tsx

```tsx
'use client';

import { useState } from 'react';
import { Surface, Features, Button, Badge } from '@zenixui/components';

export function NightCityBlog() {
  const [view, setView] = useState<'list' | 'detail'>('list');

  if (view === 'detail') {
    return (
      <Features.Root padded>
        <Features.Content style={{ maxWidth: '800px', margin: '2rem auto', fontFamily: 'var(--zx-font-mono)' }}>
          <Button 
            variant="cyber"
            onClick={() => setView('list')} 
            style={{ background: 'transparent', border: 'none', color: 'var(--zx-primary)', opacity: 0.6, padding: 0, height: 'auto', marginBottom: '2rem' }}
          >
            {'< RETURN'}
          </Button>
          
          <div style={{ marginBottom: '3rem', borderBottom: '1px solid var(--zx-primary)', paddingBottom: '2rem' }}>
            <span style={{ fontSize: '0.875rem', fontWeight: 600, color: '#00ff00', textTransform: 'uppercase' }}>
              [DATALOG] // OP_REPORT
            </span>
            <h1 style={{ fontSize: '2.5rem', fontWeight: 600, margin: '1rem 0', textTransform: 'uppercase', lineHeight: 1.2 }}>
              BREACHING THE MAINFRAME
            </h1>
            <div style={{ display: 'flex', gap: '2rem', opacity: 0.5, fontSize: '0.875rem' }}>
              <span>TS: 2026.10.12</span>
              <span>READ_CYCLE: 5M</span>
            </div>
          </div>

          <div style={{ fontSize: '1rem', lineHeight: 1.8, color: 'var(--zx-primary)' }}>
            <p style={{ marginBottom: '1.5rem' }}>
              {'>'} INITIALIZING PACKET SNIFFER...<br/>
              {'>'} ENCRYPTED PAYLOAD DETECTED.
              <br/><br/>
              The architecture of the Night City theme requires zero radius borders and stark, aggressive typography. The mono font isn't just a stylistic choice, it's a structural requirement for alignment.
            </p>
            
            <h2 style={{ fontSize: '1.5rem', fontWeight: 600, margin: '3rem 0 1.5rem', textTransform: 'uppercase', color: '#ff003c' }}>
              {'>'}{'>'} SYSTEM_ARCHITECTURE
            </h2>
            
            <div style={{ background: 'transparent', border: '1px solid var(--zx-elevated)', borderLeft: '2px solid #00ff00', padding: '1.5rem', fontSize: '0.875rem', margin: '2rem 0', overflowX: 'auto' }}>
              <span style={{ opacity: 0.5 }}>01</span> <span style={{ color: '#00ff00' }}>const</span> breach = <span style={{ color: '#ff003c' }}>async</span> () {'=>'} {'{'}<br/>
              <span style={{ opacity: 0.5 }}>02</span>   <span style={{ color: '#00ff00' }}>await</span> System.override(0x00FF);<br/>
              <span style={{ opacity: 0.5 }}>03</span> {'}'};
            </div>
          </div>
        </Features.Content>
      </Features.Root>
    );
  }

  return (
    <Features.Root padded>
      <Features.Content style={{ maxWidth: '800px', margin: '0 auto', fontFamily: 'var(--zx-font-mono)' }}>
        <h1 style={{ fontSize: '2rem', fontWeight: 600, margin: '0 0 3rem', textTransform: 'uppercase', borderBottom: '2px solid var(--zx-primary)', paddingBottom: '1rem' }}>
          SYS.DATALOGS
          <Badge variant="terminal" tone="neutral">
            SYS.LOG
          </Badge>
        </h1>

        <div style={{ display: 'flex', flexDirection: 'column' }}>
          {[1,2,3].map(id => (
            <div 
              key={id}
              onClick={() => setView('detail')}
              style={{ padding: '2rem 0', borderBottom: '1px solid var(--zx-elevated)', cursor: 'pointer', display: 'flex', gap: '2rem' }}
            >
              <div style={{ width: '100px', opacity: 0.5, fontSize: '0.875rem', flexShrink: 0 }}>
                2026.10.{10+id}
              </div>
              <div>
                <h2 style={{ fontSize: '1.25rem', fontWeight: 600, margin: '0 0 0.5rem', textTransform: 'uppercase' }}>
                  BREACHING THE MAINFRAME {id}
                  <Badge variant="terminal" tone="neutral">
                    REPORT
                  </Badge>
                </h2>
                <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                  <span style={{ fontSize: '0.75rem', color: '#00ff00' }}>[REPORT]</span>
                  <span style={{ fontSize: '0.75rem', opacity: 0.5 }}>STATUS: DECRYPTED</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Features.Content>
    </Features.Root>
  );
}
```

## packages/blueprints/src/blog/OceanBlog.tsx

```tsx
'use client';

import { useState } from 'react';
import { Surface, Features, Button, Badge } from '@zenixui/components';

export function OceanBlog() {
  const [view, setView] = useState<'list' | 'detail'>('list');

  if (view === 'detail') {
    return (
      <Features.Root padded>
        <Features.Content style={{ maxWidth: '1000px', margin: '2rem auto', display: 'flex', gap: '4rem' }}>
          
          <div style={{ flex: 1 }}>
            <Button 
              variant="glass"
              onClick={() => setView('list')} 
              style={{ background: 'transparent', border: 'none', color: 'var(--zx-primary)', opacity: 0.6, padding: 0, height: 'auto', marginBottom: '2rem' }}
            >
              ← Back
            </Button>
            
            <div style={{ marginBottom: '4rem' }}>
              <span style={{ fontSize: '0.875rem', fontWeight: 400, padding: '0.25rem 1rem', background: 'rgba(255,255,255,0.05)', border: '1px solid var(--zx-glass-border)', borderRadius: 'var(--zx-radius-round)', backdropFilter: 'var(--zx-glass-blur)' }}>
                Deep Dives
              </span>
              <h1 style={{ fontSize: '4rem', fontWeight: 300, margin: '1.5rem 0 1rem', letterSpacing: '-0.02em', lineHeight: 1.1 }}>
                Riding the glass waves.
              </h1>
              <div style={{ opacity: 0.6, fontSize: '1.125rem', fontWeight: 300 }}>
                Published on Oct 12 • 5 min read
              </div>
            </div>

            <div style={{ fontSize: '1.25rem', lineHeight: 1.8, fontWeight: 300, color: 'var(--zx-primary)' }}>
              <p style={{ marginBottom: '2rem' }}>
                Glassmorphism isn't just about blur. It's about light, depth, and layers. 
                When we designed the Ocean theme, we focused on how elements interact as they float over each other.
              </p>
              
              <h2 style={{ fontSize: '2rem', fontWeight: 400, margin: '3rem 0 1.5rem' }}>Fluid Typography</h2>
              <p style={{ marginBottom: '2rem' }}>
                We use clamped font sizes to ensure the reading experience is perfectly scaled on every device, much like water filling its container.
              </p>

              <Surface variant="glass" style={{ padding: '2rem', borderRadius: 'var(--zx-radius-lg)', margin: '3rem 0', background: 'rgba(255,255,255,0.03)', border: '1px solid var(--zx-glass-border)' }}>
                <p style={{ margin: 0, fontStyle: 'italic', fontSize: '1.5rem', lineHeight: 1.6, textAlign: 'center' }}>
                  "A good UI should feel like swimming in clear water. Effortless and transparent."
                </p>
              </Surface>
            </div>
          </div>

          {/* Table Of Contents Discovery */}
          <div style={{ width: '250px', display: 'none', '@media (min-width: 1024px)': { display: 'block' } } as any}>
            <div style={{ position: 'sticky', top: '2rem' }}>
              <h4 style={{ fontSize: '0.875rem', fontWeight: 500, textTransform: 'uppercase', letterSpacing: '0.1em', opacity: 0.5, marginBottom: '1.5rem' }}>Contents</h4>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <li style={{ fontSize: '1rem', fontWeight: 400, color: 'var(--zx-primary)' }}>Introduction</li>
                <li style={{ fontSize: '1rem', fontWeight: 300, opacity: 0.6 }}>Fluid Typography</li>
                <li style={{ fontSize: '1rem', fontWeight: 300, opacity: 0.6 }}>Glass Layers</li>
                <li style={{ fontSize: '1rem', fontWeight: 300, opacity: 0.6 }}>Conclusion</li>
              </ul>
            </div>
          </div>
        </Features.Content>
      </Features.Root>
    );
  }

  return (
    <Features.Root padded>
      <Features.Content style={{ maxWidth: '900px', margin: '0 auto' }}>
        <h1 style={{ fontSize: '3.5rem', fontWeight: 300, margin: '0 0 4rem', letterSpacing: '-0.02em', textAlign: 'center' }}>
          Currents.
        </h1>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))', gap: '2rem' }}>
          {[1,2,3,4].map(id => (
            <Surface 
              key={id}
              variant="glass" 
              onClick={() => setView('detail')}
              style={{ padding: '2.5rem', borderRadius: 'var(--zx-radius-lg)', cursor: 'pointer', transition: 'transform 0.3s ease, background 0.3s ease', background: 'var(--zx-glass-bg)', backdropFilter: 'var(--zx-glass-blur)', border: '1px solid var(--zx-glass-border)' }}
            >
              <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '2rem' }}>
                <Badge variant="glass" tone="neutral">
                  Design
                </Badge>
              </div>
              <h2 style={{ fontSize: '1.75rem', fontWeight: 300, margin: '0 0 1rem', lineHeight: 1.2 }}>Riding the glass waves in modern UI.</h2>
              <p style={{ opacity: 0.6, fontSize: '1rem', fontWeight: 300, margin: 0 }}>Oct 12 • 5 min read</p>
            </Surface>
          ))}
        </div>
      </Features.Content>
    </Features.Root>
  );
}
```

## packages/blueprints/src/blog/ZenixBlog.tsx

```tsx
'use client';

import { useState } from 'react';
import { Surface, Features, Button, Badge } from '@zenixui/components';

const POSTS = [
  { id: 1, title: "Building the Engine", category: "Engineering", date: "Oct 12", readTime: "5 min" },
  { id: 2, title: "Designing the Zenix Radius", category: "Design", date: "Oct 08", readTime: "3 min" },
  { id: 3, title: "Why Micro-Experiences Matter", category: "Product", date: "Sep 28", readTime: "8 min" },
];

export function ZenixBlog() {
  const [view, setView] = useState<'list' | 'detail'>('list');

  if (view === 'detail') {
    return (
      <Features.Root padded>
        {/* Fake Reading Progress Bar */}
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '4px', background: 'var(--zx-elevated)', zIndex: 10 }}>
          <div style={{ width: '35%', height: '100%', background: 'var(--zx-primary)' }} />
        </div>

        <Features.Content style={{ maxWidth: '700px', margin: '4rem auto 0' }}>
          <Button 
            variant="default"
            onClick={() => setView('list')} 
            style={{ background: 'transparent', border: 'none', color: 'var(--zx-primary)', opacity: 0.6, padding: 0, height: 'auto', marginBottom: '2rem' }}
          >
            ← Back to all posts
          </Button>
          
          <div style={{ marginBottom: '3rem' }}>
            <Badge variant="solid" tone="neutral">
              Engineering
            </Badge>
            <h1 style={{ fontSize: '3rem', fontWeight: 700, margin: '1rem 0', letterSpacing: '-0.03em', lineHeight: 1.1 }}>
              Building the Engine
            </h1>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', opacity: 0.7, fontSize: '0.875rem' }}>
              <span>Oct 12, 2026</span>
              <span>•</span>
              <span>5 min read</span>
            </div>
          </div>

          <div style={{ fontSize: '1.125rem', lineHeight: 1.8, color: 'var(--zx-primary)' }}>
            <p style={{ marginBottom: '1.5rem' }}>
              When we set out to build ZenixUI, we realized that atomic components weren't enough. We needed an engine capable of rendering entire visual worlds.
            </p>
            <h2 style={{ fontSize: '1.5rem', fontWeight: 600, margin: '2.5rem 0 1rem' }}>The Architecture</h2>
            <p style={{ marginBottom: '1.5rem' }}>
              We started by separating tokens from themes, and themes from effects. This allowed us to build robust components that adapt instantly.
            </p>
            
            {/* Code Block Discovery */}
            <div style={{ background: 'var(--zx-surface)', border: '1px solid var(--zx-elevated)', borderRadius: 'var(--zx-radius-sm)', padding: '1.5rem', fontFamily: 'monospace', fontSize: '0.875rem', margin: '2rem 0', overflowX: 'auto' }}>
              <span style={{ color: '#0A84FF' }}>const</span> engine = <span style={{ color: '#FF9F0A' }}>new</span> <span style={{ color: '#32D74B' }}>ExperienceEngine</span>();<br />
              engine.<span style={{ color: '#FF453A' }}>mount</span>();
            </div>
          </div>

          {/* Author Card Discovery */}
          <Surface variant="card" style={{ marginTop: '4rem', padding: '2rem', display: 'flex', gap: '1.5rem', alignItems: 'center', border: '1px solid var(--zx-elevated)', borderRadius: 'var(--zx-radius-lg)' }}>
            <div style={{ width: '64px', height: '64px', borderRadius: '50%', background: 'var(--zx-elevated)' }} />
            <div>
              <h4 style={{ margin: '0 0 0.25rem', fontSize: '1.125rem', fontWeight: 600 }}>Alex Developer</h4>
              <p style={{ margin: 0, fontSize: '0.875rem', opacity: 0.6 }}>Lead Architect at ZenixUI. Obsessed with API design and clean radii.</p>
            </div>
          </Surface>
        </Features.Content>
      </Features.Root>
    );
  }

  return (
    <Features.Root padded>
      <Features.Content style={{ maxWidth: '800px', margin: '0 auto' }}>
        <h1 style={{ fontSize: '3rem', fontWeight: 700, margin: '0 0 3rem', letterSpacing: '-0.03em' }}>
          Writing
        </h1>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          {POSTS.map(post => (
            <Surface 
              key={post.id}
              variant="card" 
              onClick={() => setView('detail')}
              style={{ padding: '2rem', border: '1px solid var(--zx-elevated)', borderRadius: 'var(--zx-radius-md)', cursor: 'pointer', transition: 'all 0.2s', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}
            >
              <div>
                <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', marginBottom: '0.5rem' }}>
                  <Badge variant="solid" tone="neutral">
                    {post.category}
                  </Badge>
                  <span style={{ fontSize: '0.875rem', opacity: 0.5 }}>{post.date}</span>
                </div>
                <h2 style={{ fontSize: '1.5rem', fontWeight: 600, margin: 0 }}>{post.title}</h2>
              </div>
              <div style={{ opacity: 0.5, fontSize: '0.875rem', fontWeight: 500 }}>
                {post.readTime}
              </div>
            </Surface>
          ))}
        </div>
      </Features.Content>
    </Features.Root>
  );
}
```

## packages/blueprints/src/contact/AutumnContact.tsx

```tsx
'use client';

import { useState } from 'react';
import { Surface, Features, Input, Textarea, Button } from '@zenixui/components';

export function AutumnContact() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setTimeout(() => setStatus('success'), 1200);
  };

  return (
    <Features.Root padded>
      <Features.Content spacing="xl" align="center" style={{ maxWidth: '600px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <h2 style={{ fontSize: '2.5rem', fontFamily: 'Georgia, serif', fontStyle: 'italic', margin: '0 0 1rem', color: 'var(--zx-primary)' }}>Drop me a line</h2>
          <p style={{ opacity: 0.7, fontSize: '1.1rem', margin: 0 }}>I'd love to hear your story.</p>
        </div>

        <Surface variant="card" style={{ padding: 0, background: 'transparent', border: 'none' }}>
          {status === 'success' ? (
            <div style={{ textAlign: 'center', padding: '3rem', border: '1px solid var(--zx-elevated)', borderRadius: 'var(--zx-radius)' }}>
              <h3 style={{ fontSize: '1.5rem', fontFamily: 'Georgia, serif', fontStyle: 'italic', margin: '0 0 1rem' }}>Thank you.</h3>
              <p style={{ opacity: 0.7, lineHeight: 1.6 }}>Your words have been received safely. I will read them soon.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.25rem', position: 'relative' }}>
                <Input required variant="organic" type="text" placeholder=" " className="autumn-input" id="name" />
                <label htmlFor="name" style={labelStyle}>Your Name</label>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.25rem', position: 'relative' }}>
                <Input required variant="organic" type="email" placeholder=" " className="autumn-input" id="email" />
                <label htmlFor="email" style={labelStyle}>Your Email</label>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.25rem', position: 'relative' }}>
                <Textarea required variant="organic" placeholder=" " className="autumn-input" id="message" rows={4} />
                <label htmlFor="message" style={{...labelStyle, top: '0'}}>Your Message</label>
              </div>

              <div style={{ alignSelf: 'flex-start' }}>
                <Button type="submit" variant="organic" isLoading={status === 'loading'} style={{ fontSize: '1.25rem' }}>
                  Send Letter
                </Button>
              </div>
            </form>
          )}
        </Surface>
      </Features.Content>
      {/* We inline a little CSS snippet to handle the floating label effect for this specific blueprint */}
      <style dangerouslySetInnerHTML={{__html: `
        .autumn-input:focus + label,
        .autumn-input:not(:placeholder-shown) + label {
          transform: translateY(-20px) scale(0.85);
          opacity: 0.5;
        }
      `}} />
    </Features.Root>
  );
}

const labelStyle: React.CSSProperties = {
  position: 'absolute',
  top: '0.5rem',
  left: 0,
  fontSize: '1.1rem',
  opacity: 0.5,
  transition: 'all 0.3s ease',
  pointerEvents: 'none',
  zIndex: 1,
  transformOrigin: 'left top'
};
```

## packages/blueprints/src/contact/NightCityContact.tsx

```tsx
'use client';

import { useState } from 'react';
import { Surface, Features, Input, Button, Textarea } from '@zenixui/components';

export function NightCityContact() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success'>('idle');
  const [error, setError] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.includes('@')) {
      setError('[ERR_INVALID_SYS_ADDR]');
      return;
    }
    setStatus('loading');
    setError('');
    setTimeout(() => setStatus('success'), 800);
  };

  return (
    <Features.Root padded>
      <Features.Content spacing="xl" align="flex-start" style={{ maxWidth: '800px', margin: '0 auto', fontFamily: 'var(--zx-font-mono)' }}>
        <div style={{ marginBottom: '2rem', borderBottom: '1px solid var(--zx-primary)', paddingBottom: '1rem', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
          <h2 style={{ fontSize: '2rem', fontWeight: 600, margin: 0, textTransform: 'uppercase' }}>SYS.CONTACT_PROTO</h2>
          <span style={{ opacity: 0.5, fontSize: '0.875rem' }}>STATUS: ONLINE</span>
        </div>

        <Surface variant="card" style={{ padding: '2rem', borderRadius: 0, background: 'transparent', border: '1px solid var(--zx-elevated)', position: 'relative' }}>
          {/* Cyberpunk corner accents */}
          <div style={{ position: 'absolute', top: -1, left: -1, width: '10px', height: '10px', borderTop: '2px solid var(--zx-primary)', borderLeft: '2px solid var(--zx-primary)' }} />
          <div style={{ position: 'absolute', bottom: -1, right: -1, width: '10px', height: '10px', borderBottom: '2px solid var(--zx-primary)', borderRight: '2px solid var(--zx-primary)' }} />

          {status === 'success' ? (
            <div style={{ padding: '2rem', borderLeft: '2px solid #00ff00' }}>
              <div style={{ fontSize: '1.25rem', marginBottom: '1rem', color: '#00ff00' }}>[PACKET_DELIVERED]</div>
              <p style={{ opacity: 0.7, margin: 0 }}>Transmission successful. Awaiting operator response.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                <label style={{ fontSize: '0.875rem', fontWeight: 600, textTransform: 'uppercase', opacity: 0.7 }}>{'>'} IDENTIFIER</label>
                <Input required variant="terminal" type="text" placeholder="HANDLE" />
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                <label style={{ fontSize: '0.875rem', fontWeight: 600, textTransform: 'uppercase', opacity: 0.7 }}>{'>'} ROUTING_ADDR</label>
                <Input 
                  required 
                  variant="terminal"
                  status={error ? 'error' : 'idle'}
                  type="email" 
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  placeholder="USER@NODE.NET" 
                />
                {error && <div style={{ color: '#ff003c', fontSize: '0.875rem', marginTop: '0.25rem' }}>{error}</div>}
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                <label style={{ fontSize: '0.875rem', fontWeight: 600, textTransform: 'uppercase', opacity: 0.7 }}>{'>'} PAYLOAD</label>
                <Textarea required variant="terminal" placeholder="ENTER SECURE TRANSMISSION..." rows={4} />
              </div>

              <Button 
                type="submit" 
                variant="cyber"
                fullWidth
                isLoading={status === 'loading'}
                style={{ marginTop: '1rem' }}
              >
                EXECUTE_SEND
              </Button>
            </form>
          )}
        </Surface>
      </Features.Content>
    </Features.Root>
  );
}
```

## packages/blueprints/src/contact/OceanContact.tsx

```tsx
'use client';

import { useState } from 'react';
import { Surface, Features, Input, Button, Textarea } from '@zenixui/components';

export function OceanContact() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success'>('idle');
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setTimeout(() => setStatus('success'), 1500);
  };

  return (
    <Features.Root padded>
      <Features.Content spacing="xl" align="center" style={{ maxWidth: '700px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <h2 style={{ fontSize: '3rem', fontWeight: 300, margin: '0 0 1rem', letterSpacing: '-0.02em' }}>Let's connect</h2>
          <p style={{ opacity: 0.7, fontSize: '1.25rem', margin: 0, fontWeight: 300 }}>Reach out to our deep sea explorers.</p>
        </div>

        <Surface variant="glass" style={{ padding: '4rem', borderRadius: 'var(--zx-radius-lg)', background: 'var(--zx-glass-bg)', backdropFilter: 'var(--zx-glass-blur)', border: '1px solid var(--zx-glass-border)', boxShadow: 'var(--zx-glass-shadow)' }}>
          {status === 'success' ? (
            <div style={{ textAlign: 'center', padding: '3rem 0', animation: 'fadeIn 0.5s ease-out' }}>
              <div style={{ fontSize: '4rem', marginBottom: '1.5rem', opacity: 0.8 }}>🌊</div>
              <h3 style={{ fontSize: '1.75rem', fontWeight: 400, margin: '0 0 1rem' }}>Message received.</h3>
              <p style={{ opacity: 0.7, fontWeight: 300 }}>Our team will navigate back to you shortly.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
                <Input variant="glass" placeholder="First Name" />
                <Input variant="glass" placeholder="Last Name" />
              </div>
              <Input variant="glass" type="email" placeholder="Work Email" />
              <Input variant="glass" placeholder="Company Name" />
              <Textarea variant="glass" placeholder="How can we help you?" rows={4} />
              <Button variant="glass" fullWidth size="lg" style={{ marginTop: '1rem', fontWeight: 500, letterSpacing: '0.05em', color: '#fff' }}>
                {status === 'loading' ? 'Sending...' : 'Send Message'}
              </Button>
            </form>
          )}
        </Surface>
      </Features.Content>
    </Features.Root>
  );
}
```

## packages/blueprints/src/contact/ZenixContact.tsx

```tsx
'use client';

import { useState } from 'react';
import { Surface, Features, Input, Button, Textarea } from '@zenixui/components';

export function ZenixContact() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success'>('idle');
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setError('');
    
    // Simulate network
    setTimeout(() => {
      setStatus('success');
    }, 1000);
  };

  return (
    <Features.Root padded>
      <Features.Content spacing="xl" align="center" style={{ maxWidth: '600px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
          <h2 style={{ fontSize: '2.5rem', fontWeight: 700, margin: '0 0 1rem', letterSpacing: '-0.03em' }}>Contact Sales</h2>
          <p style={{ opacity: 0.6, fontSize: '1.25rem', margin: 0 }}>We'll get back to you within 24 hours.</p>
        </div>

        <Surface variant="card" style={{ padding: '3rem', borderRadius: 'var(--zx-radius-lg)', background: 'var(--zx-surface)', border: '1px solid var(--zx-elevated)', boxShadow: 'var(--zx-shadow-lg)' }}>
          {status === 'success' ? (
            <div style={{ textAlign: 'center', padding: '2rem 0' }}>
              <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>✓</div>
              <h3 style={{ fontSize: '1.5rem', fontWeight: 600, margin: '0 0 0.5rem' }}>Message Sent</h3>
              <p style={{ opacity: 0.6 }}>Thank you for reaching out. We will be in touch shortly.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  <label style={{ fontSize: '0.875rem', fontWeight: 500 }}>First Name</label>
                  <Input required variant="default" placeholder="Jane" />
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  <label style={{ fontSize: '0.875rem', fontWeight: 500 }}>Last Name</label>
                  <Input required variant="default" placeholder="Doe" />
                </div>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                <label style={{ fontSize: '0.875rem', fontWeight: 500 }}>Email Address</label>
                <Input required variant="default" type="email" placeholder="jane@company.com" />
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                <label style={{ fontSize: '0.875rem', fontWeight: 500 }}>Message</label>
                <Textarea required variant="default" placeholder="How can we help you?" rows={4} />
              </div>

              {error && <div style={{ color: 'red', fontSize: '0.875rem', fontWeight: 500 }}>{error}</div>}

              <Button 
                type="submit" 
                variant="default"
                isLoading={status === 'loading'}
                style={{ marginTop: '1rem' }}
              >
                Send Message
              </Button>
            </form>
          )}
        </Surface>
      </Features.Content>
    </Features.Root>
  );
}

const inputStyle: React.CSSProperties = {
  padding: '0.75rem 1rem',
  borderRadius: 'var(--zx-radius-sm)',
  border: '1px solid var(--zx-elevated)',
  background: 'var(--zx-background)',
  color: 'var(--zx-primary)',
  fontSize: '1rem',
  fontFamily: 'inherit',
  outline: 'none',
  transition: 'border-color 0.2s'
};
```

## packages/blueprints/src/dashboard/AutumnDashboard.tsx

```tsx
'use client';

import { useState } from 'react';
import { Surface, Features } from '@zenixui/components';

export function AutumnDashboard() {
  const [view, setView] = useState<'home' | 'settings' | 'profile'>('home');

  return (
    <Features.Root>
      <div style={{ display: 'flex', minHeight: '80vh', background: 'var(--zx-background)', color: 'var(--zx-primary)' }}>
        
        <aside style={{ width: '260px', padding: '3rem 2rem', display: 'flex', flexDirection: 'column', borderRight: '1px solid var(--zx-elevated)' }}>
          <div style={{ fontFamily: 'Georgia, serif', fontStyle: 'italic', fontSize: '1.5rem', marginBottom: '4rem' }}>
            The Study
          </div>
          <nav style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <SidebarLink active={view === 'home'} onClick={() => setView('home')}>Desk</SidebarLink>
            <SidebarLink active={view === 'profile'} onClick={() => setView('profile')}>Author</SidebarLink>
            <SidebarLink active={view === 'settings'} onClick={() => setView('settings')}>Preferences</SidebarLink>
          </nav>
        </aside>

        <main style={{ flex: 1, padding: '3rem 4rem' }}>
          
          {view === 'home' && (
            <div style={{ maxWidth: '900px' }}>
              <h1 style={{ fontSize: '3rem', fontFamily: 'Georgia, serif', margin: '0 0 3rem', color: 'var(--zx-primary)' }}>Desk</h1>
              
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '3rem', marginBottom: '4rem' }}>
                <MetricTile title="Words Written" value="12,405" desc="A productive week." />
                <MetricTile title="Letters Sent" value="34" desc="Connecting with readers." />
              </div>
              
              <div>
                <h3 style={{ margin: '0 0 2rem', fontSize: '1.5rem', fontFamily: 'Georgia, serif', fontStyle: 'italic' }}>Recent Entries</h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                  {[1,2,3].map(id => (
                    <div key={id} style={{ paddingBottom: '2rem', borderBottom: '1px solid var(--zx-elevated)' }}>
                      <div style={{ fontSize: '0.875rem', opacity: 0.5, textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '0.5rem' }}>October 12, 2026</div>
                      <div style={{ fontSize: '1.25rem', lineHeight: 1.6, fontWeight: 300 }}>Started drafting the new chapter on typographic scale. The words are flowing nicely today.</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {view === 'settings' && (
            <div style={{ maxWidth: '600px' }}>
              <h1 style={{ fontSize: '3rem', fontFamily: 'Georgia, serif', margin: '0 0 3rem' }}>Preferences</h1>
              <div style={{ borderTop: '1px solid var(--zx-elevated)' }}>
                <div style={{ padding: '2rem 0', display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid var(--zx-elevated)' }}>
                  <div>
                    <h4 style={{ margin: '0 0 0.5rem', fontSize: '1.25rem', fontFamily: 'Georgia, serif' }}>Daily Digest</h4>
                    <p style={{ margin: 0, fontSize: '1rem', opacity: 0.6, fontWeight: 300 }}>Receive a summary of activity.</p>
                  </div>
                  <Toggle active={true} />
                </div>
              </div>
            </div>
          )}

          {view === 'profile' && (
            <div style={{ maxWidth: '600px' }}>
              <div style={{ display: 'flex', gap: '3rem', alignItems: 'center' }}>
                <div style={{ width: '150px', height: '180px', borderRadius: '100px 100px 10px 10px', background: 'var(--zx-elevated)' }} />
                <div>
                  <h1 style={{ fontSize: '3.5rem', fontFamily: 'Georgia, serif', margin: '0 0 1rem' }}>Evelyn</h1>
                  <p style={{ opacity: 0.6, fontSize: '1.25rem', fontWeight: 300, lineHeight: 1.6 }}>
                    A writer and observer. Collecting moments and translating them into letters.
                  </p>
                </div>
              </div>
            </div>
          )}

        </main>
      </div>
    </Features.Root>
  );
}

function SidebarLink({ children, active, onClick }: any) {
  return (
    <button 
      onClick={onClick}
      style={{
        width: '100%',
        textAlign: 'left',
        background: 'transparent',
        border: 'none',
        color: 'var(--zx-primary)',
        fontWeight: active ? 600 : 300,
        fontSize: '1.125rem',
        cursor: 'pointer',
        opacity: active ? 1 : 0.6,
        fontStyle: active ? 'italic' : 'normal',
        fontFamily: active ? 'Georgia, serif' : 'inherit',
        transition: 'all 0.3s'
      }}
    >
      {children}
    </button>
  );
}

function MetricTile({ title, value, desc }: any) {
  return (
    <div style={{ padding: '2rem', background: 'transparent', border: '1px solid var(--zx-elevated)', borderRadius: 'var(--zx-radius-lg)' }}>
      <div style={{ fontSize: '1rem', fontFamily: 'Georgia, serif', fontStyle: 'italic', opacity: 0.7, marginBottom: '1rem' }}>{title}</div>
      <div style={{ fontSize: '3rem', fontWeight: 300, marginBottom: '1rem' }}>{value}</div>
      <div style={{ fontSize: '0.875rem', opacity: 0.5, textTransform: 'uppercase', letterSpacing: '0.05em' }}>{desc}</div>
    </div>
  );
}

function Toggle({ active }: { active: boolean }) {
  return (
    <div style={{ width: '44px', height: '24px', borderRadius: '12px', border: '1px solid var(--zx-primary)', position: 'relative', cursor: 'pointer' }}>
      <div style={{ position: 'absolute', top: '3px', left: active ? '23px' : '3px', width: '16px', height: '16px', borderRadius: '50%', background: 'var(--zx-primary)', transition: 'left 0.3s ease' }} />
    </div>
  );
}
```

## packages/blueprints/src/dashboard/NightCityDashboard.tsx

```tsx
'use client';

import { useState } from 'react';
import { Surface, Features } from '@zenixui/components';

export function NightCityDashboard() {
  const [view, setView] = useState<'home' | 'settings' | 'profile'>('home');

  return (
    <Features.Root>
      <div style={{ display: 'flex', minHeight: '80vh', background: 'var(--zx-background)', color: 'var(--zx-primary)', fontFamily: 'var(--zx-font-mono)' }}>
        
        <aside style={{ width: '250px', borderRight: '1px solid var(--zx-elevated)', padding: '2rem', display: 'flex', flexDirection: 'column' }}>
          <div style={{ fontWeight: 600, fontSize: '1.25rem', marginBottom: '3rem', color: '#00ff00', textTransform: 'uppercase' }}>
            [SYS.ADMIN]
          </div>
          <nav style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <SidebarLink active={view === 'home'} onClick={() => setView('home')}>{'>>'} TERMINAL</SidebarLink>
            <SidebarLink active={view === 'profile'} onClick={() => setView('profile')}>{'>>'} OPERATIVE</SidebarLink>
            <SidebarLink active={view === 'settings'} onClick={() => setView('settings')}>{'>>'} CONFIG</SidebarLink>
          </nav>
        </aside>

        <main style={{ flex: 1, padding: '3rem 4rem' }}>
          
          {view === 'home' && (
            <div>
              <h1 style={{ fontSize: '2rem', fontWeight: 600, margin: '0 0 2rem', textTransform: 'uppercase', color: '#ff003c' }}>SYS.TERMINAL</h1>
              
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1rem', marginBottom: '2rem' }}>
                <MetricTile title="CPU_LOAD" value="99.9%" status="critical" />
                <MetricTile title="NET_TRAFFIC" value="42.5 TB/s" status="normal" />
                <MetricTile title="ACTIVE_NODES" value="0x1A4" status="normal" />
              </div>
              
              <Surface variant="card" style={{ padding: '2rem', border: '1px solid var(--zx-elevated)', borderRadius: 0, background: 'transparent' }}>
                <h3 style={{ margin: '0 0 1.5rem', fontSize: '1rem', fontWeight: 600, textTransform: 'uppercase' }}>{'>>'} ACTIVITY_LOG</h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', fontSize: '0.875rem' }}>
                  {[1,2,3,4,5].map(id => (
                    <div key={id} style={{ display: 'flex', gap: '1rem', opacity: id > 2 ? 0.5 : 1 }}>
                      <span style={{ color: id === 1 ? '#ff003c' : '#00ff00' }}>[TS:10{id}4]</span>
                      <span>{id === 1 ? 'UNAUTHORIZED BREACH DETECTED' : 'STANDARD PACKET ROUTED'}</span>
                    </div>
                  ))}
                </div>
              </Surface>
            </div>
          )}

          {view === 'settings' && (
            <div style={{ maxWidth: '600px' }}>
              <h1 style={{ fontSize: '2rem', fontWeight: 600, margin: '0 0 2rem', textTransform: 'uppercase' }}>SYS.CONFIG</h1>
              <Surface variant="card" style={{ border: '1px solid var(--zx-elevated)', borderRadius: 0, background: 'transparent' }}>
                <div style={{ padding: '1.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid var(--zx-elevated)' }}>
                  <div>
                    <h4 style={{ margin: '0 0 0.25rem', fontSize: '0.875rem', fontWeight: 600, textTransform: 'uppercase' }}>ALLOW_INBOUND</h4>
                    <p style={{ margin: 0, fontSize: '0.75rem', opacity: 0.5, textTransform: 'uppercase' }}>OPEN PORT 0x00FF FOR INCOMING LOGS</p>
                  </div>
                  <Toggle active={true} />
                </div>
              </Surface>
            </div>
          )}

          {view === 'profile' && (
            <div style={{ maxWidth: '600px' }}>
              <h1 style={{ fontSize: '2rem', fontWeight: 600, margin: '0 0 3rem', textTransform: 'uppercase' }}>OPERATIVE.DAT</h1>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '2rem' }}>
                <div style={{ width: '120px', height: '120px', border: '2px solid #00ff00', background: 'rgba(0,255,0,0.1)', position: 'relative' }}>
                   {/* Cyberpunk corner accents inside avatar */}
                   <div style={{ position: 'absolute', top: -2, left: -2, width: '10px', height: '10px', background: '#00ff00' }} />
                </div>
                <div>
                  <h2 style={{ fontSize: '1.5rem', fontWeight: 600, margin: '0 0 0.5rem', textTransform: 'uppercase' }}>V. [UNKNOWN]</h2>
                  <p style={{ margin: 0, opacity: 0.5, textTransform: 'uppercase', fontSize: '0.875rem' }}>CLASS: NETRUNNER<br/>STATUS: ACTIVE</p>
                </div>
              </div>
            </div>
          )}

        </main>
      </div>
    </Features.Root>
  );
}

function SidebarLink({ children, active, onClick }: any) {
  return (
    <button 
      onClick={onClick}
      style={{
        width: '100%',
        textAlign: 'left',
        padding: '0.75rem 1rem',
        background: active ? 'var(--zx-elevated)' : 'transparent',
        border: 'none',
        color: active ? '#00ff00' : 'var(--zx-primary)',
        fontWeight: 600,
        fontSize: '0.875rem',
        fontFamily: 'inherit',
        cursor: 'pointer',
        opacity: active ? 1 : 0.5,
        textTransform: 'uppercase'
      }}
    >
      {children}
    </button>
  );
}

function MetricTile({ title, value, status }: any) {
  const color = status === 'critical' ? '#ff003c' : '#00ff00';
  return (
    <Surface variant="card" style={{ padding: '1.5rem', border: `1px solid ${color}`, borderRadius: 0, background: 'transparent' }}>
      <div style={{ fontSize: '0.75rem', fontWeight: 600, opacity: 0.7, marginBottom: '0.5rem', textTransform: 'uppercase' }}>{title}</div>
      <div style={{ fontSize: '1.5rem', fontWeight: 600, color }}>{value}</div>
    </Surface>
  );
}

function Toggle({ active }: { active: boolean }) {
  return (
    <div 
      style={{ 
        padding: '0.25rem 0.5rem', 
        border: '1px solid var(--zx-primary)', 
        color: active ? '#00ff00' : 'var(--zx-primary)', 
        cursor: 'pointer',
        fontSize: '0.75rem',
        fontWeight: 600
      }}
    >
      [{active ? ' ON' : 'OFF' }]
    </div>
  );
}
```

## packages/blueprints/src/dashboard/OceanDashboard.tsx

```tsx
'use client';

import { useState } from 'react';
import { Surface, Features } from '@zenixui/components';

export function OceanDashboard() {
  const [view, setView] = useState<'home' | 'settings' | 'profile'>('home');

  return (
    <Features.Root>
      <div style={{ display: 'flex', minHeight: '80vh', background: 'var(--zx-background)', color: 'var(--zx-primary)' }}>
        
        <aside style={{ width: '280px', padding: '2rem', display: 'flex', flexDirection: 'column' }}>
          <div style={{ fontWeight: 300, fontSize: '1.5rem', marginBottom: '4rem', letterSpacing: '0.05em' }}>
            Ocean<span style={{ opacity: 0.5 }}>.io</span>
          </div>
          <nav style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            <SidebarLink active={view === 'home'} onClick={() => setView('home')}>Waves</SidebarLink>
            <SidebarLink active={view === 'profile'} onClick={() => setView('profile')}>Diver Profile</SidebarLink>
            <SidebarLink active={view === 'settings'} onClick={() => setView('settings')}>Depths (Settings)</SidebarLink>
          </nav>
        </aside>

        <main style={{ flex: 1, padding: '2rem 3rem' }}>
          
          {view === 'home' && (
            <div>
              <h1 style={{ fontSize: '3rem', fontWeight: 300, margin: '0 0 3rem', letterSpacing: '-0.02em' }}>Waves</h1>
              
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '2rem', marginBottom: '4rem' }}>
                <MetricTile title="Current Flow" value="1.2k" />
                <MetricTile title="Tidal Reach" value="84%" />
                <MetricTile title="Deep Dives" value="442" />
              </div>
              
              <Surface variant="glass" style={{ padding: '2.5rem', borderRadius: 'var(--zx-radius-lg)', background: 'var(--zx-glass-bg)', backdropFilter: 'var(--zx-glass-blur)', border: '1px solid var(--zx-glass-border)' }}>
                <h3 style={{ margin: '0 0 2rem', fontSize: '1.25rem', fontWeight: 300 }}>Recent Currents</h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                  {[1,2,3].map(id => (
                    <div key={id} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingBottom: '1.5rem', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
                        <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'rgba(255,255,255,0.1)' }} />
                        <div>
                          <div style={{ fontWeight: 400, fontSize: '1rem' }}>Data stream {id} synchronized</div>
                          <div style={{ fontSize: '0.875rem', opacity: 0.5, fontWeight: 300 }}>Just now</div>
                        </div>
                      </div>
                      <div style={{ padding: '0.25rem 1rem', background: 'rgba(255,255,255,0.05)', borderRadius: 'var(--zx-radius-round)', fontSize: '0.75rem', border: '1px solid rgba(255,255,255,0.1)' }}>Completed</div>
                    </div>
                  ))}
                </div>
              </Surface>
            </div>
          )}

          {view === 'settings' && (
            <div style={{ maxWidth: '700px' }}>
              <h1 style={{ fontSize: '3rem', fontWeight: 300, margin: '0 0 3rem', letterSpacing: '-0.02em' }}>Depths</h1>
              <Surface variant="glass" style={{ borderRadius: 'var(--zx-radius-lg)', background: 'var(--zx-glass-bg)', backdropFilter: 'var(--zx-glass-blur)', border: '1px solid var(--zx-glass-border)', overflow: 'hidden' }}>
                <div style={{ padding: '2rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                  <div>
                    <h4 style={{ margin: '0 0 0.5rem', fontSize: '1.125rem', fontWeight: 400 }}>Sonar Pings</h4>
                    <p style={{ margin: 0, fontSize: '0.875rem', opacity: 0.6, fontWeight: 300 }}>Allow notifications to surface.</p>
                  </div>
                  <Toggle active={true} />
                </div>
              </Surface>
            </div>
          )}

          {view === 'profile' && (
            <div style={{ maxWidth: '800px' }}>
              <Surface variant="glass" style={{ position: 'relative', height: '200px', borderRadius: 'var(--zx-radius-lg)', background: 'var(--zx-glass-bg)', backdropFilter: 'var(--zx-glass-blur)', border: '1px solid var(--zx-glass-border)', marginBottom: '5rem' }}>
                <div style={{ position: 'absolute', bottom: '-50px', left: '3rem', width: '120px', height: '120px', borderRadius: '50%', background: 'var(--zx-background)', padding: '0.5rem' }}>
                  <div style={{ width: '100%', height: '100%', borderRadius: '50%', background: 'rgba(255,255,255,0.1)' }} />
                </div>
              </Surface>
              <div style={{ paddingLeft: '3rem' }}>
                <h1 style={{ fontSize: '2.5rem', fontWeight: 300, margin: '0 0 0.5rem' }}>Alex Ocean</h1>
                <p style={{ opacity: 0.6, fontSize: '1.125rem', fontWeight: 300 }}>Deep Sea Navigator</p>
              </div>
            </div>
          )}

        </main>
      </div>
    </Features.Root>
  );
}

function SidebarLink({ children, active, onClick }: any) {
  return (
    <button 
      onClick={onClick}
      style={{
        width: '100%',
        textAlign: 'left',
        padding: '1rem 1.5rem',
        borderRadius: 'var(--zx-radius-round)',
        background: active ? 'rgba(255,255,255,0.05)' : 'transparent',
        border: active ? '1px solid var(--zx-glass-border)' : '1px solid transparent',
        color: 'var(--zx-primary)',
        fontWeight: 300,
        fontSize: '1rem',
        cursor: 'pointer',
        opacity: active ? 1 : 0.6,
        transition: 'all 0.3s ease'
      }}
    >
      {children}
    </button>
  );
}

function MetricTile({ title, value }: any) {
  return (
    <Surface variant="glass" style={{ padding: '2rem', borderRadius: 'var(--zx-radius-lg)', background: 'var(--zx-glass-bg)', backdropFilter: 'var(--zx-glass-blur)', border: '1px solid var(--zx-glass-border)' }}>
      <div style={{ fontSize: '1rem', fontWeight: 300, opacity: 0.7, marginBottom: '1rem' }}>{title}</div>
      <div style={{ fontSize: '3rem', fontWeight: 300, letterSpacing: '-0.02em' }}>{value}</div>
    </Surface>
  );
}

function Toggle({ active }: { active: boolean }) {
  return (
    <div style={{ width: '50px', height: '26px', borderRadius: '13px', background: active ? 'rgba(255,255,255,0.2)' : 'rgba(255,255,255,0.05)', border: '1px solid var(--zx-glass-border)', position: 'relative', cursor: 'pointer', transition: 'all 0.3s ease' }}>
      <div style={{ position: 'absolute', top: '2px', left: active ? '26px' : '2px', width: '20px', height: '20px', borderRadius: '50%', background: 'var(--zx-primary)', transition: 'left 0.3s cubic-bezier(0.4, 0, 0.2, 1)', boxShadow: '0 2px 10px rgba(0,0,0,0.1)' }} />
    </div>
  );
}
```

## packages/blueprints/src/dashboard/ZenixDashboard.tsx

```tsx
'use client';

import { useState } from 'react';
import { Surface, Features } from '@zenixui/components';

export function ZenixDashboard() {
  const [view, setView] = useState<'home' | 'settings' | 'profile'>('home');

  return (
    <Features.Root>
      <div style={{ display: 'flex', minHeight: '80vh', background: 'var(--zx-background)', color: 'var(--zx-primary)' }}>
        
        {/* Sidebar Discovery */}
        <aside style={{ width: '240px', borderRight: '1px solid var(--zx-elevated)', padding: '2rem 1.5rem', display: 'flex', flexDirection: 'column' }}>
          <div style={{ fontWeight: 600, fontSize: '1.25rem', marginBottom: '3rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <div style={{ width: '20px', height: '20px', background: 'var(--zx-primary)', borderRadius: '4px' }} />
            Zenix
          </div>
          <nav style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            <SidebarLink active={view === 'home'} onClick={() => setView('home')}>Overview</SidebarLink>
            <SidebarLink active={view === 'profile'} onClick={() => setView('profile')}>Profile</SidebarLink>
            <SidebarLink active={view === 'settings'} onClick={() => setView('settings')}>Settings</SidebarLink>
          </nav>
        </aside>

        {/* Main Content Area */}
        <main style={{ flex: 1, padding: '3rem 4rem' }}>
          
          {view === 'home' && (
            <div>
              <h1 style={{ fontSize: '2rem', fontWeight: 600, margin: '0 0 2rem' }}>Overview</h1>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.5rem', marginBottom: '3rem' }}>
                {/* MetricTile Discovery */}
                <MetricTile title="Total Revenue" value="$45,231.89" trend="+20.1%" />
                <MetricTile title="Subscriptions" value="+2350" trend="+180.1%" />
                <MetricTile title="Active Now" value="+12,234" trend="+19%" />
              </div>
              
              <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '1.5rem' }}>
                <Surface variant="card" style={{ padding: '1.5rem', border: '1px solid var(--zx-elevated)', borderRadius: 'var(--zx-radius-md)' }}>
                  <h3 style={{ margin: '0 0 1.5rem', fontSize: '1rem', fontWeight: 600 }}>Recent Sales</h3>
                  {/* Table Row Discovery */}
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                    {[1,2,3,4].map(id => (
                      <div key={id} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingBottom: '1rem', borderBottom: '1px solid var(--zx-elevated)' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                          <Avatar />
                          <div>
                            <div style={{ fontWeight: 500, fontSize: '0.875rem' }}>Olivia Martin</div>
                            <div style={{ fontSize: '0.75rem', opacity: 0.6 }}>olivia@example.com</div>
                          </div>
                        </div>
                        <div style={{ fontWeight: 600, fontSize: '0.875rem' }}>+${Math.floor(Math.random() * 500) + 50}.00</div>
                      </div>
                    ))}
                  </div>
                </Surface>
                <Surface variant="card" style={{ padding: '1.5rem', border: '1px solid var(--zx-elevated)', borderRadius: 'var(--zx-radius-md)' }}>
                  <h3 style={{ margin: '0 0 1rem', fontSize: '1rem', fontWeight: 600 }}>Activity</h3>
                  {/* ActivityFeed Discovery */}
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', marginTop: '1.5rem' }}>
                    <div style={{ display: 'flex', gap: '1rem' }}>
                      <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#0A84FF', marginTop: '6px' }} />
                      <div>
                        <div style={{ fontSize: '0.875rem', fontWeight: 500 }}>System Updated</div>
                        <div style={{ fontSize: '0.75rem', opacity: 0.5 }}>2 hours ago</div>
                      </div>
                    </div>
                  </div>
                </Surface>
              </div>
            </div>
          )}

          {view === 'settings' && (
            <div style={{ maxWidth: '600px' }}>
              <h1 style={{ fontSize: '2rem', fontWeight: 600, margin: '0 0 2rem' }}>Settings</h1>
              <Surface variant="card" style={{ border: '1px solid var(--zx-elevated)', borderRadius: 'var(--zx-radius-md)' }}>
                {/* FormRow & Toggle Discovery */}
                <div style={{ padding: '1.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid var(--zx-elevated)' }}>
                  <div>
                    <h4 style={{ margin: '0 0 0.25rem', fontSize: '0.875rem', fontWeight: 500 }}>Email Notifications</h4>
                    <p style={{ margin: 0, fontSize: '0.75rem', opacity: 0.6 }}>Receive emails about your account activity.</p>
                  </div>
                  <Toggle active={true} />
                </div>
                <div style={{ padding: '1.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <div>
                    <h4 style={{ margin: '0 0 0.25rem', fontSize: '0.875rem', fontWeight: 500 }}>Marketing Emails</h4>
                    <p style={{ margin: 0, fontSize: '0.75rem', opacity: 0.6 }}>Receive emails about new products and features.</p>
                  </div>
                  <Toggle active={false} />
                </div>
              </Surface>
            </div>
          )}

          {view === 'profile' && (
            <div style={{ maxWidth: '600px' }}>
              <h1 style={{ fontSize: '2rem', fontWeight: 600, margin: '0 0 2rem' }}>Profile</h1>
              <div style={{ display: 'flex', alignItems: 'center', gap: '2rem', marginBottom: '3rem' }}>
                {/* Avatar Discovery */}
                <div style={{ width: '100px', height: '100px', borderRadius: '50%', background: 'var(--zx-elevated)' }} />
                <div>
                  <h2 style={{ fontSize: '1.5rem', fontWeight: 600, margin: '0 0 0.5rem' }}>Alex Developer</h2>
                  <p style={{ margin: 0, opacity: 0.6 }}>Software Engineer</p>
                </div>
              </div>
            </div>
          )}

        </main>
      </div>
    </Features.Root>
  );
}

function SidebarLink({ children, active, onClick }: any) {
  return (
    <button 
      onClick={onClick}
      style={{
        width: '100%',
        textAlign: 'left',
        padding: '0.5rem 0.75rem',
        borderRadius: 'var(--zx-radius-sm)',
        background: active ? 'var(--zx-elevated)' : 'transparent',
        border: 'none',
        color: 'var(--zx-primary)',
        fontWeight: 500,
        fontSize: '0.875rem',
        cursor: 'pointer',
        opacity: active ? 1 : 0.6,
        transition: 'all 0.2s'
      }}
    >
      {children}
    </button>
  );
}

function MetricTile({ title, value, trend }: any) {
  return (
    <Surface variant="card" style={{ padding: '1.5rem', border: '1px solid var(--zx-elevated)', borderRadius: 'var(--zx-radius-md)' }}>
      <div style={{ fontSize: '0.875rem', fontWeight: 500, opacity: 0.7, marginBottom: '0.5rem' }}>{title}</div>
      <div style={{ fontSize: '2rem', fontWeight: 700, marginBottom: '0.5rem', letterSpacing: '-0.02em' }}>{value}</div>
      <div style={{ fontSize: '0.75rem', color: '#32D74B', fontWeight: 500 }}>{trend} from last month</div>
    </Surface>
  );
}

function Avatar() {
  return <div style={{ width: '32px', height: '32px', borderRadius: '50%', background: 'var(--zx-elevated)' }} />;
}

function Toggle({ active }: { active: boolean }) {
  return (
    <div style={{ width: '36px', height: '20px', borderRadius: '10px', background: active ? 'var(--zx-primary)' : 'var(--zx-elevated)', position: 'relative', cursor: 'pointer', transition: 'background 0.2s' }}>
      <div style={{ position: 'absolute', top: '2px', left: active ? '18px' : '2px', width: '16px', height: '16px', borderRadius: '50%', background: 'var(--zx-background)', transition: 'left 0.2s' }} />
    </div>
  );
}
```

## packages/blueprints/src/index.ts

```typescript
export * from './registry';

// Re-export the components directly if needed
export * from './landings/ZenixLanding';
export * from './landings/OceanLanding';
export * from './landings/NightCityLanding';
export * from './landings/AutumnLanding';

export * from './portfolios/ZenixPortfolio';
export * from './portfolios/OceanPortfolio';
export * from './portfolios/NightCityPortfolio';
export * from './portfolios/AutumnPortfolio';

export * from './contact/ZenixContact';
export * from './contact/OceanContact';
export * from './contact/NightCityContact';
export * from './contact/AutumnContact';

export * from './newsletter/ZenixNewsletter';
export * from './newsletter/OceanNewsletter';
export * from './newsletter/NightCityNewsletter';
export * from './newsletter/AutumnNewsletter';

export * from './auth/ZenixAuth';
export * from './auth/OceanAuth';
export * from './auth/NightCityAuth';
export * from './auth/AutumnAuth';

export * from './blog/ZenixBlog';
export * from './blog/OceanBlog';
export * from './blog/NightCityBlog';
export * from './blog/AutumnBlog';

export * from './dashboard/ZenixDashboard';
export * from './dashboard/OceanDashboard';
export * from './dashboard/NightCityDashboard';
export * from './dashboard/AutumnDashboard';
```

## packages/blueprints/src/landings/AutumnLanding.tsx

```tsx
import { Surface, Hero, Features, CTA, Footer } from '@zenixui/components';

export function AutumnLanding() {
  return (
    <div style={{ paddingBottom: '0' }}>
      {/* HERO SECTION */}
      <Hero.Root padded style={{ paddingTop: '8rem', paddingBottom: '8rem' }}>
        <Hero.Content align="center" spacing="lg" style={{ textAlign: 'center' }}>
          <Hero.Visual style={{ 
            width: '120px', 
            height: '120px', 
            borderRadius: '50%', 
            background: 'linear-gradient(135deg, var(--zx-accent), transparent)', 
            opacity: 0.5, 
            marginBottom: '1rem',
            filter: 'blur(20px)'
          }} />
          <h1 style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)', margin: 0, fontFamily: 'serif', fontWeight: 400, color: 'var(--zx-primary)' }}>
            Embrace the season.
          </h1>
          <p style={{ fontSize: '1.25rem', maxWidth: '600px', margin: 0, opacity: 0.8, lineHeight: 1.8 }}>
            Craft warm, inviting, and organic digital spaces that tell a story. ZenixUI brings natural motion and light to your web applications.
          </p>
        </Hero.Content>
      </Hero.Root>

      {/* STORY SECTION */}
      <Features.Root>
        <Features.Grid columns={2} style={{ alignItems: 'center' }}>
          <div style={{ padding: '2rem' }}>
            <h2 style={{ fontSize: '2.5rem', margin: '0 0 1.5rem', fontFamily: 'serif', fontWeight: 400 }}>A narrative approach to design.</h2>
            <p style={{ fontSize: '1.1rem', opacity: 0.8, lineHeight: 1.8, margin: '0 0 2rem' }}>
              Technology doesn't have to feel cold and geometric. By using soft shadows, rounded surfaces, and ambient motion, we create an atmosphere that feels handcrafted and deeply personal.
            </p>
            <Surface variant="glass" style={{ display: 'inline-block', padding: '0.75rem 2rem', borderRadius: '2rem', cursor: 'pointer', background: 'rgba(255,255,255,0.1)' }}>
              Read our story →
            </Surface>
          </div>
          
          <Surface variant="card" style={{ height: '400px', borderRadius: '3rem', background: 'linear-gradient(to top right, var(--zx-surface), var(--zx-elevated))', border: '1px solid rgba(255,255,255,0.2)', position: 'relative', overflow: 'hidden' }}>
            <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(circle at top right, var(--zx-accent), transparent 60%)', opacity: 0.15 }} />
          </Surface>
        </Features.Grid>
      </Features.Root>

      {/* FEATURE CARDS */}
      <Features.Root>
        <Features.Grid columns={3}>
          {[
            { title: 'Organic Motion', desc: 'Leaves drift gracefully, creating a sense of calm and passage of time.' },
            { title: 'Warm Lighting', desc: 'Radial gradients and diffused shadows mimic the golden hour.' },
            { title: 'Soft Surfaces', desc: 'Generous border radii and gentle borders remove harsh digital edges.' }
          ].map((feat, i) => (
            <Surface key={i} variant="card" style={{ padding: '3rem 2rem', borderRadius: '2rem', textAlign: 'center' }}>
              <div style={{ width: '64px', height: '64px', borderRadius: '50%', background: 'var(--zx-elevated)', margin: '0 auto 1.5rem' }} />
              <h3 style={{ margin: '0 0 1rem', fontSize: '1.5rem', fontFamily: 'serif', fontWeight: 400 }}>{feat.title}</h3>
              <p style={{ margin: 0, opacity: 0.7, lineHeight: 1.6 }}>{feat.desc}</p>
            </Surface>
          ))}
        </Features.Grid>
      </Features.Root>

      {/* CTA */}
      <CTA.Root containerSize="md">
        <CTA.Content>
          <Surface variant="card" style={{ padding: '5rem 3rem', borderRadius: '3rem', textAlign: 'center', background: 'var(--zx-accent)', color: '#fff' }}>
            <h2 style={{ fontSize: '3rem', fontFamily: 'serif', fontWeight: 400, margin: '0 0 1.5rem' }}>Start your journey</h2>
            <p style={{ fontSize: '1.25rem', opacity: 0.9, margin: '0 0 3rem' }}>Join thousands of creators building organic experiences.</p>
            <CTA.Actions justify="center">
              <button style={{ padding: '1rem 3rem', borderRadius: '2rem', border: 'none', background: '#fff', color: 'var(--zx-accent)', fontSize: '1.1rem', fontWeight: 600, cursor: 'pointer' }}>
                Begin Now
              </button>
            </CTA.Actions>
          </Surface>
        </CTA.Content>
      </CTA.Root>

      {/* FOOTER */}
      <Footer.Root padded={false} style={{ padding: '4rem 0' }}>
        <Footer.Brand style={{ textAlign: 'center', opacity: 0.6 }}>
          <p style={{ fontFamily: 'serif', fontSize: '1.5rem', fontStyle: 'italic', margin: '0 0 1rem' }}>ZenixUI</p>
          <p style={{ margin: 0, fontSize: '0.875rem' }}>Handcrafted with care. © 2026</p>
        </Footer.Brand>
      </Footer.Root>
    </div>
  );
}
```

## packages/blueprints/src/landings/NightCityLanding.tsx

```tsx
import { Surface, Hero, Features, CTA, Footer } from '@zenixui/components';

export function NightCityLanding() {
  return (
    <div style={{ paddingBottom: '0' }}>
      {/* HERO SECTION */}
      <Hero.Root padded={false} style={{ paddingTop: '10rem', paddingBottom: '4rem' }}>
        <Hero.Content align="center" spacing="xl">
          <h1 style={{ 
            fontSize: 'clamp(3rem, 8vw, 7rem)', 
            margin: 0, 
            textTransform: 'uppercase', 
            fontWeight: 900, 
            lineHeight: 0.9, 
            letterSpacing: '-0.05em',
            textAlign: 'center',
            textShadow: '0 0 40px var(--zx-accent)'
          }}>
            BUILD THE FUTURE
          </h1>
          <p style={{ fontSize: '1.5rem', textAlign: 'center', maxWidth: '700px', opacity: 0.8, fontWeight: 500 }}>
            Create immersive, high-speed, neon-drenched web experiences with ZenixUI.
          </p>
          <Hero.Actions justify="center">
            <Surface variant="glass" style={{ 
              padding: '1rem 3rem', 
              fontSize: '1.25rem', 
              textTransform: 'uppercase', 
              fontWeight: 'bold', 
              border: '2px solid var(--zx-accent)',
              boxShadow: '0 0 20px var(--zx-accent), inset 0 0 10px var(--zx-accent)',
              cursor: 'pointer',
              color: 'var(--zx-primary)'
            }}>
              Initialize System
            </Surface>
          </Hero.Actions>
        </Hero.Content>
      </Hero.Root>

      {/* STATS SECTION (Uses Features Grid) */}
      <Features.Root>
        <Features.Grid columns={3}>
          <Surface variant="card" style={{ padding: '3rem 2rem', textAlign: 'center', borderTop: '2px solid var(--zx-accent)', background: 'linear-gradient(to bottom, rgba(236,72,153,0.1), transparent)' }}>
            <h2 style={{ fontSize: '4rem', margin: 0, lineHeight: 1, color: 'var(--zx-accent)' }}>100+</h2>
            <p style={{ margin: '1rem 0 0', textTransform: 'uppercase', letterSpacing: '0.1em', opacity: 0.7 }}>Experiences</p>
          </Surface>
          <Surface variant="card" style={{ padding: '3rem 2rem', textAlign: 'center', borderTop: '2px solid #3b82f6', background: 'linear-gradient(to bottom, rgba(59,130,246,0.1), transparent)' }}>
            <h2 style={{ fontSize: '4rem', margin: 0, lineHeight: 1, color: '#3b82f6' }}>50+</h2>
            <p style={{ margin: '1rem 0 0', textTransform: 'uppercase', letterSpacing: '0.1em', opacity: 0.7 }}>Effects</p>
          </Surface>
          <Surface variant="card" style={{ padding: '3rem 2rem', textAlign: 'center', borderTop: '2px solid #eab308', background: 'linear-gradient(to bottom, rgba(234,179,8,0.1), transparent)' }}>
            <h2 style={{ fontSize: '4rem', margin: 0, lineHeight: 1, color: '#eab308' }}>∞</h2 >
            <p style={{ margin: '1rem 0 0', textTransform: 'uppercase', letterSpacing: '0.1em', opacity: 0.7 }}>Themes</p>
          </Surface>
        </Features.Grid>
      </Features.Root>

      {/* FEATURES SECTION */}
      <Features.Root containerSize="md">
        <Features.Content>
          <Surface variant="card" style={{ display: 'flex', flexDirection: 'column', gap: '1rem', padding: '3rem', borderLeft: '4px solid var(--zx-accent)' }}>
            <h3 style={{ margin: 0, fontSize: '2rem', textTransform: 'uppercase' }}>Cybernetic Precision</h3>
            <p style={{ opacity: 0.7, margin: 0, fontSize: '1.1rem' }}>Built on a robust, highly optimized engine delivering 60fps animations and flawless visual fidelity across all viewports.</p>
          </Surface>
          <Surface variant="card" style={{ display: 'flex', flexDirection: 'column', gap: '1rem', padding: '3rem', borderRight: '4px solid #3b82f6', textAlign: 'right' }}>
            <h3 style={{ margin: 0, fontSize: '2rem', textTransform: 'uppercase' }}>Neon Overdrive</h3>
            <p style={{ opacity: 0.7, margin: 0, fontSize: '1.1rem' }}>Automatic glow handling, fast streaks, and integrated bloom layers give your UI that authentic late-night metropolis vibe.</p>
          </Surface>
        </Features.Content>
      </Features.Root>

      {/* AGGRESSIVE CTA */}
      <CTA.Root containerSize="full">
        <CTA.Content style={{ background: 'var(--zx-elevated)', padding: '6rem 2rem', textAlign: 'center', borderTop: '1px solid rgba(255,255,255,0.1)', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
          <h2 style={{ fontSize: '3rem', textTransform: 'uppercase', margin: '0 0 2rem' }}>Ready to hack the mainframe?</h2>
          <CTA.Actions justify="center">
            <button style={{ 
              background: 'var(--zx-accent)', 
              color: '#000', 
              border: 'none', 
              padding: '1.5rem 4rem', 
              fontSize: '1.5rem', 
              fontWeight: 900, 
              textTransform: 'uppercase', 
              cursor: 'pointer',
              clipPath: 'polygon(10% 0, 100% 0, 90% 100%, 0 100%)'
            }}>
              Deploy Now
            </button>
          </CTA.Actions>
        </CTA.Content>
      </CTA.Root>

      {/* FOOTER */}
      <Footer.Root padded={false} style={{ marginTop: '4rem', padding: '4rem 0 2rem', position: 'relative' }}>
        <Surface variant="footer">
          <Features.Grid columns={2}>
            <Footer.Brand>
              <h3 style={{ margin: '0 0 1rem', fontSize: '1.5rem', textTransform: 'uppercase' }}>ZenixUI</h3>
              <p style={{ opacity: 0.5, margin: 0 }}>The visual experience engine for the modern web.</p>
            </Footer.Brand>
            <Footer.Links justify="flex-end" direction="column" spacing="sm" style={{ opacity: 0.7, textAlign: 'right' }}>
              <span>Docs</span>
              <span>GitHub</span>
              <span>Discord</span>
            </Footer.Links>
          </Features.Grid>
          <div style={{ marginTop: '4rem', textAlign: 'center', opacity: 0.3, fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.2em' }}>
            System V.2026 // Connection Secure
          </div>
        </Surface>
      </Footer.Root>
    </div>
  );
}
```

## packages/blueprints/src/landings/OceanLanding.tsx

```tsx
import { Surface, Hero, Features, CTA, Footer } from '@zenixui/components';

export function OceanLanding() {
  return (
    <div style={{ paddingBottom: '4rem' }}>
      {/* HERO SECTION */}
      <Hero.Root padded={false} style={{ paddingTop: '8rem', paddingBottom: '6rem' }}>
        <Surface variant="hero" style={{ padding: '4rem 2rem', textAlign: 'center', borderRadius: '2rem', overflow: 'hidden', position: 'relative' }}>
          <Hero.Content style={{ position: 'relative', zIndex: 10 }}>
            <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 4.5rem)', margin: '0 0 1rem', fontWeight: 800, letterSpacing: '-0.02em', lineHeight: 1.1 }}>
              Deep, Fluid Experiences
            </h1>
            <p style={{ fontSize: '1.25rem', opacity: 0.8, maxWidth: '600px', margin: '0 auto 2.5rem', lineHeight: 1.6 }}>
              Dive into a tranquil, performance-focused framework that adapts to your needs like water. Build premium websites instantly.
            </p>
            
            <Hero.Actions justify="center">
              <Surface variant="glass" style={{ padding: '0.75rem 2rem', borderRadius: '2rem', cursor: 'pointer', fontWeight: 600, border: '1px solid rgba(255,255,255,0.3)' }}>
                Start Building
              </Surface>
              <Surface variant="transparent" style={{ padding: '0.75rem 2rem', borderRadius: '2rem', cursor: 'pointer', fontWeight: 600, opacity: 0.8 }}>
                View Documentation
              </Surface>
            </Hero.Actions>
          </Hero.Content>
          
          <Hero.Visual>
            {/* Floating decorative elements */}
            <div style={{ position: 'absolute', top: '10%', left: '5%', width: '100px', height: '100px', borderRadius: '50%', background: 'var(--zx-accent)', filter: 'blur(60px)', opacity: 0.3 }} />
            <div style={{ position: 'absolute', bottom: '10%', right: '5%', width: '150px', height: '150px', borderRadius: '50%', background: 'var(--zx-primary)', filter: 'blur(80px)', opacity: 0.2 }} />
          </Hero.Visual>
        </Surface>
      </Hero.Root>

      {/* FEATURES SECTION */}
      <Features.Root>
        <Features.Content>
          <div style={{ textAlign: 'center' }}>
            <h2 style={{ fontSize: '2.5rem', margin: '0 0 1rem' }}>Engineered for Depth</h2>
            <p style={{ opacity: 0.7, maxWidth: '500px', margin: '0 auto' }}>Every surface and animation is designed to feel cohesive, atmospheric, and highly polished.</p>
          </div>

          <Features.Grid columns={3}>
            <Surface variant="glass" style={{ padding: '2rem', display: 'flex', flexDirection: 'column', gap: '1rem', height: '100%' }}>
              <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: 'var(--zx-elevated)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>🌊</div>
              <h3 style={{ margin: 0, fontSize: '1.25rem' }}>Fluid Experiences</h3>
              <p style={{ margin: 0, opacity: 0.7, lineHeight: 1.5 }}>Smooth transitions and continuous animations create an unbroken, immersive feel.</p>
            </Surface>

            <Surface variant="glass" style={{ padding: '2rem', display: 'flex', flexDirection: 'column', gap: '1rem', height: '100%' }}>
              <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: 'var(--zx-elevated)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>✨</div>
              <h3 style={{ margin: 0, fontSize: '1.25rem' }}>Adaptive Themes</h3>
              <p style={{ margin: 0, opacity: 0.7, lineHeight: 1.5 }}>Tokens seamlessly map across deep blue gradients to vibrant neon cityscapes.</p>
            </Surface>

            <Surface variant="glass" style={{ padding: '2rem', display: 'flex', flexDirection: 'column', gap: '1rem', height: '100%' }}>
              <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: 'var(--zx-elevated)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>🫧</div>
              <h3 style={{ margin: 0, fontSize: '1.25rem' }}>Atmospheric Effects</h3>
              <p style={{ margin: 0, opacity: 0.7, lineHeight: 1.5 }}>Built-in particle systems and light shafts elevate your design beyond flat CSS.</p>
            </Surface>
          </Features.Grid>
        </Features.Content>
      </Features.Root>

      {/* CTA SECTION */}
      <CTA.Root containerSize="md">
        <Surface variant="glass" style={{ padding: '4rem 2rem', textAlign: 'center', borderRadius: '2rem' }}>
          <h2 style={{ fontSize: '2.5rem', margin: '0 0 1.5rem' }}>Ready to dive in?</h2>
          <Surface variant="card" style={{ display: 'inline-block', padding: '1rem 3rem', cursor: 'pointer', fontWeight: 'bold' }}>
            Download ZenixUI
          </Surface>
        </Surface>
      </CTA.Root>

      {/* FOOTER */}
      <Footer.Root padded={false}>
        <Surface variant="footer" style={{ padding: '2rem 0', display: 'flex', justifyContent: 'space-between', opacity: 0.6, fontSize: '0.875rem' }}>
          <Footer.Brand>© 2026 ZenixUI Experience Engine.</Footer.Brand>
          <Footer.Links>
            <span>Twitter</span>
            <span>GitHub</span>
          </Footer.Links>
        </Surface>
      </Footer.Root>
    </div>
  );
}
```

## packages/blueprints/src/landings/ZenixLanding.tsx

```tsx
import { Surface, Hero, Features, CTA, Footer } from '@zenixui/components';

export function ZenixLanding() {
  return (
    <div style={{ paddingBottom: '0' }}>
      {/* HERO SECTION */}
      <Hero.Root padded style={{ paddingTop: '10rem', paddingBottom: '6rem' }}>
        <Hero.Content align="center" spacing="xl" style={{ textAlign: 'center' }}>
          <Surface variant="glass" style={{ padding: '0.5rem 1rem', borderRadius: 'var(--zx-radius-round)', fontSize: '0.875rem', fontWeight: 600, border: '1px solid var(--zx-glass-border)' }}>
            ZenixUI 2.0 is now available →
          </Surface>
          <h1 style={{ fontSize: 'clamp(3rem, 8vw, 6rem)', margin: 0, fontWeight: 700, letterSpacing: '-0.04em', lineHeight: 1 }}>
            Build better.<br />Build faster.
          </h1>
          <p style={{ fontSize: '1.25rem', opacity: 0.6, maxWidth: '600px', margin: '0 auto', lineHeight: 1.6 }}>
            The component library that doesn't feel like a library. Give your users a premium, handcrafted experience out of the box.
          </p>
          <Hero.Actions justify="center">
            <button style={{ padding: '1rem 2rem', borderRadius: 'var(--zx-radius-sm)', background: 'var(--zx-primary)', color: 'var(--zx-background)', border: 'none', fontSize: '1rem', fontWeight: 600, cursor: 'pointer', boxShadow: 'var(--zx-shadow-md)' }}>
              Start Building
            </button>
            <button style={{ padding: '1rem 2rem', borderRadius: 'var(--zx-radius-sm)', background: 'transparent', color: 'var(--zx-primary)', border: '1px solid var(--zx-elevated)', fontSize: '1rem', fontWeight: 600, cursor: 'pointer' }}>
              Read the Docs
            </button>
          </Hero.Actions>
        </Hero.Content>
      </Hero.Root>

      {/* DASHBOARD PREVIEW */}
      <Features.Root padded>
        <Surface variant="card" style={{ height: '600px', borderRadius: 'var(--zx-radius-lg)', background: 'var(--zx-surface)', boxShadow: 'var(--zx-shadow-lg)', border: '1px solid var(--zx-elevated)', position: 'relative', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '60px', borderBottom: '1px solid var(--zx-elevated)', display: 'flex', alignItems: 'center', padding: '0 2rem', gap: '0.5rem' }}>
            <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: 'var(--zx-elevated)' }} />
            <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: 'var(--zx-elevated)' }} />
            <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: 'var(--zx-elevated)' }} />
          </div>
        </Surface>
      </Features.Root>

      {/* FEATURES GRID */}
      <Features.Root padded>
        <Features.Content spacing="xl" style={{ textAlign: 'center' }}>
          <h2 style={{ fontSize: '2.5rem', margin: 0, fontWeight: 700, letterSpacing: '-0.02em' }}>Everything you need.</h2>
          <Features.Grid columns={3}>
            {[
              { icon: '⌘', title: 'Keyboard First', desc: 'Every component is fully accessible and optimized for power users.' },
              { icon: '⚡️', title: 'Zero Runtime', desc: 'Extracts to static CSS at build time for unparalleled performance.' },
              { icon: '🎨', title: 'Themeable', desc: 'Easily match your brand with our powerful token system.' }
            ].map((f, i) => (
              <Surface key={i} variant="card" style={{ padding: '3rem 2rem', textAlign: 'left', background: 'var(--zx-surface)', border: '1px solid var(--zx-elevated)', borderRadius: 'var(--zx-radius)' }}>
                <div style={{ fontSize: '2rem', marginBottom: '1.5rem', width: '48px', height: '48px', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'var(--zx-background)', borderRadius: 'var(--zx-radius-sm)', border: '1px solid var(--zx-elevated)', boxShadow: 'var(--zx-shadow-sm)' }}>
                  {f.icon}
                </div>
                <h3 style={{ fontSize: '1.25rem', fontWeight: 600, margin: '0 0 0.5rem' }}>{f.title}</h3>
                <p style={{ margin: 0, opacity: 0.6, lineHeight: 1.6 }}>{f.desc}</p>
              </Surface>
            ))}
          </Features.Grid>
        </Features.Content>
      </Features.Root>

      {/* FOOTER */}
      <Footer.Root padded={false} style={{ marginTop: '4rem', padding: '4rem 0', borderTop: '1px solid var(--zx-elevated)' }}>
        <Features.Grid columns={2}>
          <Footer.Brand>
            <h3 style={{ margin: '0 0 1rem', fontSize: '1.25rem', fontWeight: 700 }}>ZenixUI</h3>
            <p style={{ opacity: 0.5, margin: 0, fontSize: '0.875rem' }}>Designed with precision.</p>
          </Footer.Brand>
          <Footer.Links justify="flex-end" spacing="lg" style={{ opacity: 0.6, fontSize: '0.875rem', fontWeight: 500 }}>
            <span>Documentation</span>
            <span>Components</span>
            <span>GitHub</span>
          </Footer.Links>
        </Features.Grid>
      </Footer.Root>
    </div>
  );
}
```

## packages/blueprints/src/newsletter/AutumnNewsletter.tsx

```tsx
'use client';

import { useState } from 'react';
import { Surface, Features, Input, Button } from '@zenixui/components';

export function AutumnNewsletter() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setTimeout(() => setStatus('success'), 1200);
  };

  return (
    <Features.Root padded>
      <Features.Content align="center" style={{ maxWidth: '500px', margin: '0 auto' }}>
        <Surface variant="card" style={{ padding: 0, background: 'transparent', border: 'none', textAlign: 'center' }}>
          <h2 style={{ fontSize: '2rem', fontFamily: 'Georgia, serif', fontStyle: 'italic', margin: '0 0 1rem', color: 'var(--zx-primary)' }}>
            Letters from the journey
          </h2>
          <p style={{ opacity: 0.7, margin: '0 0 3rem', fontSize: '1rem', lineHeight: 1.6 }}>
            Sign up to receive occasional thoughts, stories, and photographs from our travels.
          </p>

          {status === 'success' ? (
            <div style={{ padding: '2rem', borderTop: '1px solid var(--zx-elevated)', borderBottom: '1px solid var(--zx-elevated)' }}>
              <p style={{ margin: 0, fontFamily: 'Georgia, serif', fontStyle: 'italic', fontSize: '1.25rem' }}>
                Thank you. The next letter is yours.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
              <div style={{ position: 'relative' }}>
                <Input 
                  type="email" 
                  variant="organic"
                  placeholder=" " 
                  required
                  className="autumn-newsletter-input"
                  id="autumn-email"
                  style={{ textAlign: 'center' }} 
                />
                <label 
                  htmlFor="autumn-email"
                  style={{
                    position: 'absolute',
                    top: '0.5rem',
                    left: 0,
                    right: 0,
                    fontSize: '1.1rem',
                    opacity: 0.5,
                    transition: 'all 0.3s ease',
                    pointerEvents: 'none',
                    zIndex: 1,
                    textAlign: 'center'
                  }}
                >
                  Your email address
                </label>
              </div>

              <div style={{ margin: '0 auto' }}>
                <Button 
                  type="submit"
                  variant="organic"
                  isLoading={status === 'loading'}
                >
                  Subscribe to letters
                </Button>
              </div>
            </form>
          )}
        </Surface>

        {/* CSS snippet for the floating label effect */}
        <style dangerouslySetInnerHTML={{__html: `
          .autumn-newsletter-input:focus + label,
          .autumn-newsletter-input:not(:placeholder-shown) + label {
            transform: translateY(-25px) scale(0.85);
            opacity: 0.4;
          }
        `}} />
      </Features.Content>
    </Features.Root>
  );
}
```

## packages/blueprints/src/newsletter/NightCityNewsletter.tsx

```tsx
'use client';

import { useState } from 'react';
import { Surface, Features, Input, Button } from '@zenixui/components';

export function NightCityNewsletter() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setTimeout(() => setStatus('success'), 800);
  };

  return (
    <Features.Root padded>
      <Features.Content align="center" style={{ maxWidth: '600px', margin: '0 auto', fontFamily: 'var(--zx-font-mono)' }}>
        <Surface variant="card" style={{ padding: '2rem', borderRadius: 0, border: '1px solid var(--zx-elevated)', position: 'relative', background: 'transparent' }}>
          {/* Cyberpunk corner accents */}
          <div style={{ position: 'absolute', top: -1, left: -1, width: '10px', height: '10px', borderTop: '2px solid var(--zx-primary)', borderLeft: '2px solid var(--zx-primary)' }} />
          <div style={{ position: 'absolute', bottom: -1, right: -1, width: '10px', height: '10px', borderBottom: '2px solid var(--zx-primary)', borderRight: '2px solid var(--zx-primary)' }} />
          
          <div style={{ marginBottom: '2rem', textAlign: 'left' }}>
            <h2 style={{ fontSize: '1.25rem', fontWeight: 600, margin: '0 0 0.25rem', textTransform: 'uppercase' }}>
              SYS.NEWS_FEED
            </h2>
            <p style={{ opacity: 0.6, margin: 0, fontSize: '0.875rem' }}>
              {'//'} ESTABLISH SECURE CONNECTION TO WEEKLY DEADDROPS
            </p>
          </div>

          {status === 'success' ? (
            <div style={{ padding: '1rem', borderLeft: '2px solid #00ff00', textAlign: 'left' }}>
              <div style={{ fontSize: '1rem', color: '#00ff00', fontWeight: 600 }}>[CONNECTION_ESTABLISHED]</div>
              <p style={{ opacity: 0.7, margin: '0.5rem 0 0', fontSize: '0.875rem' }}>Awaiting first payload transmission.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem', textAlign: 'left' }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                <label style={{ fontSize: '0.75rem', fontWeight: 600, textTransform: 'uppercase', opacity: 0.7 }}>{'>'} ROUTING_ADDR</label>
                <div style={{ display: 'flex', gap: '0.5rem' }}>
                  <Input 
                    type="email" 
                    variant="terminal"
                    placeholder="USER@NODE.NET" 
                    required
                    style={{ flex: 1 }} 
                  />
                  <Button 
                    type="submit"
                    variant="cyber"
                    isLoading={status === 'loading'}
                  >
                    LINK
                  </Button>
                </div>
              </div>
            </form>
          )}
        </Surface>
      </Features.Content>
    </Features.Root>
  );
}
```

## packages/blueprints/src/newsletter/OceanNewsletter.tsx

```tsx
'use client';

import { useState } from 'react';
import { Surface, Features, Input, Button } from '@zenixui/components';

export function OceanNewsletter() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setTimeout(() => setStatus('success'), 1500);
  };

  return (
    <Features.Root padded>
      <Features.Content align="center" style={{ maxWidth: '800px', margin: '0 auto' }}>
        <Surface variant="glass" style={{ padding: '4rem 2rem', borderRadius: 'var(--zx-radius-lg)', textAlign: 'center' }}>
          <h2 style={{ fontSize: '2.5rem', fontWeight: 300, margin: '0 0 1rem', letterSpacing: '-0.02em' }}>
            Dive into our weekly digest.
          </h2>
          <p style={{ opacity: 0.7, margin: '0 auto 3rem', fontSize: '1.125rem', fontWeight: 300, maxWidth: '400px' }}>
            Curated inspiration flowing directly to your inbox every Sunday.
          </p>

          <div style={{ position: 'relative', maxWidth: '450px', margin: '0 auto' }}>
            {status === 'success' ? (
              <div style={{ padding: '1rem', background: 'rgba(255,255,255,0.05)', borderRadius: 'var(--zx-radius-round)', color: 'var(--zx-primary)', fontWeight: 300, fontSize: '1rem', border: '1px solid var(--zx-glass-border)', animation: 'fadeIn 0.5s ease-out' }}>
                You are now riding the wave.
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ position: 'relative', display: 'flex', width: '100%' }}>
                <Input 
                  type="email" 
                  variant="glass"
                  placeholder="Your email address" 
                  required
                  style={{ paddingRight: '140px' }} 
                />
                <Button 
                  type="submit"
                  variant="glass"
                  isLoading={status === 'loading'}
                  style={{
                    position: 'absolute',
                    right: '4px',
                    top: '4px',
                    bottom: '4px',
                    padding: '0 1.5rem',
                  }}
                >
                  Subscribe
                </Button>
              </form>
            )}
          </div>
        </Surface>
      </Features.Content>
    </Features.Root>
  );
}
```

## packages/blueprints/src/newsletter/ZenixNewsletter.tsx

```tsx
'use client';

import { useState } from 'react';
import { Surface, Features, Input, Button } from '@zenixui/components';

export function ZenixNewsletter() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success'>('idle');
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setStatus('loading');
    setTimeout(() => setStatus('success'), 1000);
  };

  return (
    <Features.Root padded>
      <Features.Content align="center" style={{ maxWidth: '600px', margin: '0 auto' }}>
        <Surface variant="card" style={{ padding: '3rem', borderRadius: 'var(--zx-radius-lg)', textAlign: 'center', border: '1px solid var(--zx-elevated)', boxShadow: 'var(--zx-shadow-md)' }}>
          <h2 style={{ fontSize: '1.5rem', fontWeight: 600, margin: '0 0 0.5rem', letterSpacing: '-0.02em' }}>
            Join our newsletter
          </h2>
          <p style={{ opacity: 0.6, margin: '0 0 2rem', fontSize: '0.875rem' }}>
            Get weekly updates on our latest products and features. No spam.
          </p>

          {status === 'success' ? (
            <div style={{ padding: '0.75rem', background: 'var(--zx-elevated)', borderRadius: 'var(--zx-radius-sm)', color: 'var(--zx-primary)', fontWeight: 500, fontSize: '0.875rem' }}>
              ✓ You've been subscribed successfully.
            </div>
          ) : (
            <form onSubmit={handleSubmit} style={{ display: 'flex', gap: '0.5rem', justifyContent: 'center' }}>
              <Input 
                type="email" 
                variant="default"
                placeholder="jane@example.com" 
                required
                value={email}
                onChange={e => setEmail(e.target.value)}
                style={{ flex: 1, maxWidth: '300px' }} 
              />
              <Button 
                type="submit"
                variant="default"
                isLoading={status === 'loading'}
              >
                Subscribe
              </Button>
            </form>
          )}
        </Surface>
      </Features.Content>
    </Features.Root>
  );
}
```

## packages/blueprints/src/portfolios/AutumnPortfolio.tsx

```tsx
import { Surface, Section, Container, Stack, Grid, Pattern } from '@zenixui/components';

export function AutumnPortfolio() {
  return (
    <div style={{ paddingBottom: '4rem' }}>
      {/* HERO SECTION (Story Intro) */}
      <Pattern.Root padded style={{ paddingTop: '10rem', paddingBottom: '6rem' }}>
        <Container size="md">
          <Pattern.Content spacing="xl">
            <h1 style={{ fontSize: 'clamp(3rem, 6vw, 4.5rem)', margin: 0, fontFamily: 'serif', fontWeight: 400, color: 'var(--zx-primary)', lineHeight: 1.1 }}>
              Hi, I'm Elena.<br />I weave stories through code.
            </h1>
            <p style={{ fontSize: '1.5rem', opacity: 0.8, lineHeight: 1.8, maxWidth: '650px', margin: 0 }}>
              A creative developer and writer exploring the intersection of digital environments and human emotion.
            </p>
          </Pattern.Content>
        </Container>
      </Pattern.Root>

      {/* ABOUT ME (StorySection) */}
      <Pattern.Root padded>
        <Grid columns={2} spacing="xl" style={{ alignItems: 'center' }}>
          <Surface variant="card" style={{ height: '500px', borderRadius: '4rem 1rem 4rem 1rem', background: 'var(--zx-elevated)', overflow: 'hidden', position: 'relative' }}>
            <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(circle at 30% 70%, var(--zx-accent), transparent 50%)', opacity: 0.2 }} />
          </Surface>
          <div style={{ padding: '2rem' }}>
            <h2 style={{ fontSize: '2.5rem', fontFamily: 'serif', fontWeight: 400, margin: '0 0 1.5rem' }}>My Journey</h2>
            <p style={{ fontSize: '1.2rem', opacity: 0.8, lineHeight: 1.8, marginBottom: '1.5rem' }}>
              I started my career as a traditional graphic designer before discovering the endless possibilities of the web. 
              I realized that the browser isn't just a document viewer—it's a canvas for interactive storytelling.
            </p>
            <p style={{ fontSize: '1.2rem', opacity: 0.8, lineHeight: 1.8 }}>
              Today, I focus on building digital spaces that feel warm, organic, and deeply personal, moving away from harsh rectangles into something more human.
            </p>
          </div>
        </Grid>
      </Pattern.Root>

      {/* WRITING / ESSAYS (ArticleCard) */}
      <Pattern.Root padded>
        <Pattern.Content spacing="xl">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', borderBottom: '1px solid var(--zx-elevated)', paddingBottom: '1rem' }}>
            <h2 style={{ fontSize: '2.5rem', fontFamily: 'serif', fontWeight: 400, margin: 0 }}>Recent Essays</h2>
            <span style={{ opacity: 0.7, cursor: 'pointer' }}>View All →</span>
          </div>
          
          <Stack spacing="lg">
            {[
              { date: 'Oct 12, 2026', title: 'The Death of the Rectangle', desc: 'Why modern web design must embrace organic shapes and natural flows.' },
              { date: 'Sep 04, 2026', title: 'Atmosphere in UI', desc: 'Using light, shadow, and motion to create emotional resonance.' },
              { date: 'Aug 22, 2026', title: 'Designing for Comfort', desc: 'A case study on building interfaces that reduce cognitive load and anxiety.' }
            ].map((article, i) => (
              <Surface key={i} variant="card" style={{ padding: '2.5rem', borderRadius: '2rem', display: 'flex', gap: '2rem', alignItems: 'center', transition: 'transform 0.2s', cursor: 'pointer' }}>
                <div style={{ width: '100px', opacity: 0.5, fontSize: '0.9rem', flexShrink: 0 }}>{article.date}</div>
                <div>
                  <h3 style={{ fontSize: '1.5rem', fontFamily: 'serif', fontWeight: 400, margin: '0 0 0.5rem' }}>{article.title}</h3>
                  <p style={{ margin: 0, opacity: 0.7, lineHeight: 1.6 }}>{article.desc}</p>
                </div>
              </Surface>
            ))}
          </Stack>
        </Pattern.Content>
      </Pattern.Root>

      {/* CONTACT */}
      <Pattern.Root padded>
        <Container size="md">
          <Surface variant="glass" style={{ padding: '5rem 4rem', borderRadius: '4rem', textAlign: 'center', background: 'var(--zx-elevated)' }}>
            <h2 style={{ fontSize: '3rem', fontFamily: 'serif', fontWeight: 400, margin: '0 0 1.5rem' }}>Let's talk.</h2>
            <p style={{ fontSize: '1.25rem', opacity: 0.8, marginBottom: '3rem' }}>I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.</p>
            <button style={{ padding: '1.25rem 3.5rem', borderRadius: '3rem', border: 'none', background: 'var(--zx-accent)', color: '#fff', fontSize: '1.1rem', cursor: 'pointer' }}>
              Say Hello
            </button>
          </Surface>
        </Container>
      </Pattern.Root>
    </div>
  );
}
```

## packages/blueprints/src/portfolios/NightCityPortfolio.tsx

```tsx
import { Surface, Section, Container, Stack, Grid, Pattern } from '@zenixui/components';

export function NightCityPortfolio() {
  return (
    <div style={{ paddingBottom: '4rem' }}>
      {/* HERO SECTION (TerminalCard) */}
      <Pattern.Root padded style={{ paddingTop: '8rem', paddingBottom: '4rem' }}>
        <Container size="md">
          <Surface variant="card" style={{ padding: 0, overflow: 'hidden', border: '1px solid var(--zx-accent)', boxShadow: '0 0 30px rgba(236,72,153,0.2)' }}>
            <div style={{ background: 'rgba(0,0,0,0.5)', padding: '0.75rem 1rem', borderBottom: '1px solid var(--zx-accent)', display: 'flex', gap: '0.5rem' }}>
              <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#ef4444' }} />
              <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#eab308' }} />
              <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#22c55e' }} />
            </div>
            <div style={{ padding: '3rem 2rem', fontFamily: 'monospace', fontSize: '1.2rem', lineHeight: 1.8 }}>
              <span style={{ color: 'var(--zx-accent)' }}>~ $</span> whoami<br />
              <br />
              <strong>&gt; SYSTEM ENGINEER // FULL STACK HACKER</strong><br />
              &gt; Specializing in high-performance computing, WebGL engines, and cyberpunk interfaces.<br />
              <br />
              <span style={{ color: 'var(--zx-accent)' }}>~ $</span> status<br />
              <span style={{ color: '#22c55e' }}>[ONLINE] READY FOR DEPLOYMENT</span><span style={{ animation: 'blink 1s step-end infinite' }}>_</span>
            </div>
          </Surface>
        </Container>
      </Pattern.Root>

      {/* TECH STACK (StatsGrid) */}
      <Pattern.Root padded>
        <Pattern.Content spacing="xl">
          <h2 style={{ fontSize: '2.5rem', margin: 0, textTransform: 'uppercase', borderBottom: '2px solid var(--zx-accent)', paddingBottom: '0.5rem', display: 'inline-block' }}>Tech Stack</h2>
          <Grid columns={4} spacing="md">
            {['React/Next.js', 'WebGL/Three', 'Rust/WASM', 'PostgreSQL', 'Redis', 'Docker', 'Kubernetes', 'GraphQL'].map(tech => (
              <Surface key={tech} variant="card" style={{ padding: '1.5rem', textAlign: 'center', border: '1px solid var(--zx-elevated)' }}>
                <span style={{ fontFamily: 'monospace', fontWeight: 'bold' }}>{tech}</span>
              </Surface>
            ))}
          </Grid>
        </Pattern.Content>
      </Pattern.Root>

      {/* TIMELINE */}
      <Pattern.Root padded>
        <Pattern.Content spacing="xl">
          <h2 style={{ fontSize: '2.5rem', margin: 0, textTransform: 'uppercase', borderBottom: '2px solid #3b82f6', paddingBottom: '0.5rem', display: 'inline-block' }}>System Logs // Timeline</h2>
          <Stack spacing="xl" style={{ borderLeft: '2px solid var(--zx-elevated)', marginLeft: '1rem', paddingLeft: '2rem' }}>
            {[
              { year: '2026', title: 'Lead Architect @ NeonCorp', desc: 'Designed the global neural-net UI infrastructure.' },
              { year: '2024', title: 'Senior Dev @ DataGrid', desc: 'Optimized real-time trading terminals in WebGL.' },
              { year: '2022', title: 'Hacker @ UnderCity', desc: 'Built open-source decentralized encrypted chats.' }
            ].map(item => (
              <div key={item.year} style={{ position: 'relative' }}>
                <div style={{ position: 'absolute', left: '-2.4rem', top: '0.25rem', width: '12px', height: '12px', borderRadius: '50%', background: 'var(--zx-accent)', boxShadow: '0 0 10px var(--zx-accent)' }} />
                <span style={{ fontFamily: 'monospace', color: 'var(--zx-accent)', fontWeight: 'bold' }}>[{item.year}]</span>
                <h3 style={{ margin: '0.5rem 0', fontSize: '1.5rem', textTransform: 'uppercase' }}>{item.title}</h3>
                <p style={{ margin: 0, opacity: 0.7 }}>{item.desc}</p>
              </div>
            ))}
          </Stack>
        </Pattern.Content>
      </Pattern.Root>

      {/* CONTACT */}
      <Pattern.Root padded>
        <Container size="sm">
          <Surface variant="glass" style={{ padding: '4rem', textAlign: 'center', border: '1px dashed var(--zx-accent)' }}>
            <h2 style={{ fontSize: '2.5rem', margin: '0 0 1rem', textTransform: 'uppercase' }}>Initiate Connection</h2>
            <button style={{ 
              background: 'transparent', 
              color: 'var(--zx-accent)', 
              border: '2px solid var(--zx-accent)', 
              padding: '1rem 3rem', 
              fontSize: '1.25rem', 
              fontWeight: 900, 
              textTransform: 'uppercase', 
              cursor: 'pointer',
              marginTop: '2rem',
              boxShadow: 'inset 0 0 10px rgba(236,72,153,0.3)'
            }}>
              Open Channel
            </button>
          </Surface>
        </Container>
      </Pattern.Root>

      <style>{`
        @keyframes blink { 0%, 100% { opacity: 1; } 50% { opacity: 0; } }
      `}</style>
    </div>
  );
}
```

## packages/blueprints/src/portfolios/OceanPortfolio.tsx

```tsx
import { Surface, Section, Container, Stack, Grid, Pattern } from '@zenixui/components';

export function OceanPortfolio() {
  return (
    <div style={{ paddingBottom: '4rem' }}>
      {/* HERO SECTION */}
      <Pattern.Root padded style={{ paddingTop: '8rem', paddingBottom: '4rem' }}>
        <Pattern.Content align="center" spacing="xl" style={{ textAlign: 'center' }}>
          <Surface variant="glass" style={{ padding: '0.5rem 1rem', borderRadius: '2rem', fontSize: '0.875rem', fontWeight: 600 }}>
            Fluid Interaction Designer
          </Surface>
          <h1 style={{ fontSize: 'clamp(3rem, 6vw, 5.5rem)', margin: 0, fontWeight: 800, letterSpacing: '-0.02em', lineHeight: 1.1 }}>
            Crafting Digital Depth
          </h1>
          <p style={{ fontSize: '1.25rem', opacity: 0.8, maxWidth: '600px', margin: '0 auto', lineHeight: 1.6 }}>
            I build immersive, atmospheric web experiences that feel alive, combining robust engineering with deep visual storytelling.
          </p>
        </Pattern.Content>
      </Pattern.Root>

      {/* SHOWCASE SECTION */}
      <Pattern.Root padded>
        <Container size="full" style={{ padding: 0 }}>
          <Surface variant="card" style={{ height: '60vh', minHeight: '500px', borderRadius: '0', background: 'linear-gradient(to bottom, transparent, rgba(0,0,0,0.4))', borderLeft: 'none', borderRight: 'none', position: 'relative', display: 'flex', alignItems: 'flex-end' }}>
            <div style={{ padding: '4rem 10%', width: '100%' }}>
              <h2 style={{ fontSize: '3rem', margin: '0 0 1rem', textShadow: '0 4px 20px rgba(0,0,0,0.5)' }}>The Mariana Trench Project</h2>
              <p style={{ fontSize: '1.25rem', opacity: 0.9, maxWidth: '600px', margin: '0 0 2rem' }}>A deep dive into experimental webGL rendering and fluid simulation interfaces.</p>
              <Surface variant="glass" style={{ display: 'inline-block', padding: '1rem 3rem', borderRadius: '2rem', cursor: 'pointer', fontWeight: 'bold' }}>
                View Case Study
              </Surface>
            </div>
          </Surface>
        </Container>
      </Pattern.Root>

      {/* PROJECT GRID */}
      <Pattern.Root padded>
        <Pattern.Content spacing="xl">
          <h2 style={{ fontSize: '2.5rem', margin: 0 }}>Selected Works</h2>
          <Grid columns={2} spacing="xl">
            {[1, 2, 3, 4].map((i) => (
              <Surface key={i} variant="card" style={{ overflow: 'hidden', cursor: 'pointer', display: 'flex', flexDirection: 'column' }}>
                <div style={{ height: '250px', background: 'var(--zx-elevated)', opacity: 0.5 }} />
                <div style={{ padding: '2rem' }}>
                  <h3 style={{ fontSize: '1.5rem', margin: '0 0 0.5rem' }}>Project Submersion {i}</h3>
                  <p style={{ margin: 0, opacity: 0.7, lineHeight: 1.5 }}>An exploration into fluid dynamics and continuous state transitions in React.</p>
                  <Stack direction="row" spacing="sm" style={{ marginTop: '1.5rem' }}>
                    <Surface variant="glass" style={{ padding: '0.25rem 0.75rem', borderRadius: '1rem', fontSize: '0.75rem' }}>React</Surface>
                    <Surface variant="glass" style={{ padding: '0.25rem 0.75rem', borderRadius: '1rem', fontSize: '0.75rem' }}>WebGL</Surface>
                  </Stack>
                </div>
              </Surface>
            ))}
          </Grid>
        </Pattern.Content>
      </Pattern.Root>

      {/* TESTIMONIAL QUOTE */}
      <Pattern.Root padded>
        <Container size="md">
          <Surface variant="glass" style={{ padding: '4rem', borderRadius: '3rem', textAlign: 'center', position: 'relative' }}>
            <div style={{ fontSize: '6rem', position: 'absolute', top: '1rem', left: '2rem', opacity: 0.1, fontFamily: 'serif', lineHeight: 1 }}>"</div>
            <p style={{ fontSize: '1.5rem', fontStyle: 'italic', margin: '0 0 2rem', lineHeight: 1.6, position: 'relative', zIndex: 1 }}>
              "The most immersive and performant interface we've ever launched. It feels less like a website and more like an environment."
            </p>
            <div>
              <strong style={{ display: 'block', fontSize: '1.1rem' }}>Sarah Jenkins</strong>
              <span style={{ opacity: 0.7, fontSize: '0.9rem' }}>Director of Design, DeepBlue</span>
            </div>
          </Surface>
        </Container>
      </Pattern.Root>

      {/* CONTACT */}
      <Pattern.Root padded>
        <Container size="md">
          <Stack align="center" spacing="lg" style={{ textAlign: 'center' }}>
            <h2 style={{ fontSize: '3rem', margin: 0 }}>Let's build something deep.</h2>
            <p style={{ opacity: 0.8, fontSize: '1.25rem', marginBottom: '1rem' }}>Available for freelance opportunities in Q4.</p>
            <Surface variant="card" style={{ padding: '1.5rem 4rem', borderRadius: '2rem', fontWeight: 'bold', cursor: 'pointer', background: '#fff', color: 'var(--zx-background)' }}>
              hello@oceanportfolio.com
            </Surface>
          </Stack>
        </Container>
      </Pattern.Root>
    </div>
  );
}
```

## packages/blueprints/src/portfolios/ZenixPortfolio.tsx

```tsx
import { Surface, Hero, Features, CTA, Footer } from '@zenixui/components';

export function ZenixPortfolio() {
  return (
    <div style={{ paddingBottom: '4rem' }}>
      {/* HERO SECTION */}
      <Hero.Root padded style={{ paddingTop: '10rem', paddingBottom: '4rem' }}>
        <Hero.Content align="flex-start" spacing="lg">
          <h1 style={{ fontSize: 'clamp(2.5rem, 6vw, 4rem)', margin: 0, fontWeight: 700, letterSpacing: '-0.03em', lineHeight: 1.1, maxWidth: '800px' }}>
            Designing interfaces that feel like tools, not toys.
          </h1>
          <p style={{ fontSize: '1.25rem', opacity: 0.6, maxWidth: '600px', margin: 0, lineHeight: 1.6 }}>
            I'm a product designer and frontend engineer focused on high-density data applications and developer tooling.
          </p>
          <Hero.Actions style={{ marginTop: '2rem' }}>
            <button style={{ padding: '0.75rem 1.5rem', borderRadius: 'var(--zx-radius-sm)', background: 'var(--zx-primary)', color: 'var(--zx-background)', border: 'none', fontSize: '0.875rem', fontWeight: 600, cursor: 'pointer' }}>
              View Resume
            </button>
            <button style={{ padding: '0.75rem 1.5rem', borderRadius: 'var(--zx-radius-sm)', background: 'var(--zx-elevated)', color: 'var(--zx-primary)', border: 'none', fontSize: '0.875rem', fontWeight: 600, cursor: 'pointer' }}>
              Email Me
            </button>
          </Hero.Actions>
        </Hero.Content>
      </Hero.Root>

      {/* SELECTED WORK (ProjectCard variant) */}
      <Features.Root padded>
        <Features.Content spacing="xl">
          <h2 style={{ fontSize: '1.5rem', fontWeight: 600, margin: 0, paddingBottom: '1rem', borderBottom: '1px solid var(--zx-elevated)' }}>Selected Work</h2>
          <Features.Grid columns={2} spacing="xl">
            {[1, 2, 3, 4].map((i) => (
              <Surface key={i} variant="card" style={{ padding: 0, overflow: 'hidden', background: 'transparent', border: 'none' }}>
                <div style={{ height: '300px', background: 'var(--zx-elevated)', borderRadius: 'var(--zx-radius-lg)', marginBottom: '1.5rem', border: '1px solid var(--zx-elevated)' }} />
                <h3 style={{ fontSize: '1.25rem', fontWeight: 600, margin: '0 0 0.5rem' }}>Datagrid Infrastructure</h3>
                <p style={{ margin: 0, opacity: 0.6, lineHeight: 1.5 }}>A high-performance table engine for viewing billions of rows instantly.</p>
              </Surface>
            ))}
          </Features.Grid>
        </Features.Content>
      </Features.Root>

      {/* EXPERIENCE TIMELINE */}
      <Features.Root padded>
        <Features.Content spacing="xl">
          <h2 style={{ fontSize: '1.5rem', fontWeight: 600, margin: 0, paddingBottom: '1rem', borderBottom: '1px solid var(--zx-elevated)' }}>Experience</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            {[
              { role: 'Senior Designer', company: 'Linear', date: '2023 - Present' },
              { role: 'Frontend Engineer', company: 'Vercel', date: '2021 - 2023' },
              { role: 'Product Designer', company: 'Stripe', date: '2019 - 2021' }
            ].map((job, i) => (
              <div key={i} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
                <div>
                  <h3 style={{ fontSize: '1.1rem', fontWeight: 600, margin: '0 0 0.25rem' }}>{job.role}</h3>
                  <div style={{ opacity: 0.6, fontSize: '0.9rem' }}>{job.company}</div>
                </div>
                <div style={{ opacity: 0.5, fontSize: '0.875rem', fontFamily: 'var(--zx-font-mono)' }}>{job.date}</div>
              </div>
            ))}
          </div>
        </Features.Content>
      </Features.Root>

      {/* FOOTER */}
      <Footer.Root padded={false} style={{ marginTop: '6rem', paddingBottom: '2rem' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', opacity: 0.5, fontSize: '0.875rem' }}>
          <span>© 2026. All rights reserved.</span>
          <span>SF / NY / LDN</span>
        </div>
      </Footer.Root>
    </div>
  );
}
```

## packages/blueprints/src/registry.ts

```typescript
import React from 'react';
import { ZenixLanding } from './landings/ZenixLanding';
import { OceanLanding } from './landings/OceanLanding';
import { NightCityLanding } from './landings/NightCityLanding';
import { AutumnLanding } from './landings/AutumnLanding';
import { ZenixPortfolio } from './portfolios/ZenixPortfolio';
import { OceanPortfolio } from './portfolios/OceanPortfolio';
import { NightCityPortfolio } from './portfolios/NightCityPortfolio';
import { AutumnPortfolio } from './portfolios/AutumnPortfolio';

import { ZenixContact } from './contact/ZenixContact';
import { OceanContact } from './contact/OceanContact';
import { NightCityContact } from './contact/NightCityContact';
import { AutumnContact } from './contact/AutumnContact';

import { ZenixNewsletter } from './newsletter/ZenixNewsletter';
import { OceanNewsletter } from './newsletter/OceanNewsletter';
import { NightCityNewsletter } from './newsletter/NightCityNewsletter';
import { AutumnNewsletter } from './newsletter/AutumnNewsletter';

import { ZenixAuth } from './auth/ZenixAuth';
import { OceanAuth } from './auth/OceanAuth';
import { NightCityAuth } from './auth/NightCityAuth';
import { AutumnAuth } from './auth/AutumnAuth';

import { ZenixBlog } from './blog/ZenixBlog';
import { OceanBlog } from './blog/OceanBlog';
import { NightCityBlog } from './blog/NightCityBlog';
import { AutumnBlog } from './blog/AutumnBlog';

import { ZenixDashboard } from './dashboard/ZenixDashboard';
import { OceanDashboard } from './dashboard/OceanDashboard';
import { NightCityDashboard } from './dashboard/NightCityDashboard';
import { AutumnDashboard } from './dashboard/AutumnDashboard';

export interface BlueprintMetadata {
  id: string;
  title: string;
  description: string;
  category: 'landing' | 'portfolio' | 'blog' | 'saas' | 'contact' | 'newsletter' | 'auth' | 'dashboard';
  theme: string;
  tags: string[];
  component: React.ComponentType;
  sourcePath: string;
  previewImage: string;
  createdAt: string;
  featured: boolean;
}

export const blueprints: BlueprintMetadata[] = [
  {
    id: "zenix-landing",
    title: "Zenix Landing",
    description: "A professional, minimal landing page optimized for SaaS startups.",
    category: "landing",
    theme: "zenix",
    tags: ["saas", "startup", "professional"],
    component: ZenixLanding,
    sourcePath: "packages/blueprints/src/landings/ZenixLanding.tsx",
    previewImage: "/previews/zenix-landing.png",
    createdAt: "2026-06-10",
    featured: true
  },
  {
    id: "ocean-landing",
    title: "Ocean Landing",
    description: "A deep, fluid landing page featuring glassmorphism effects.",
    category: "landing",
    theme: "ocean",
    tags: ["fluid", "creative", "deep"],
    component: OceanLanding,
    sourcePath: "packages/blueprints/src/landings/OceanLanding.tsx",
    previewImage: "/previews/ocean-landing.png",
    createdAt: "2026-06-11",
    featured: false
  },
  {
    id: "night-city-landing",
    title: "Night City Landing",
    description: "A neon-drenched, high-contrast landing page for developer tools.",
    category: "landing",
    theme: "night-city",
    tags: ["cyberpunk", "neon", "developer"],
    component: NightCityLanding,
    sourcePath: "packages/blueprints/src/landings/NightCityLanding.tsx",
    previewImage: "/previews/night-city-landing.png",
    createdAt: "2026-06-12",
    featured: true
  },
  {
    id: "autumn-landing",
    title: "Autumn Landing",
    description: "A warm, narrative-driven landing page with organic shapes.",
    category: "landing",
    theme: "autumn",
    tags: ["warm", "organic", "narrative"],
    component: AutumnLanding,
    sourcePath: "packages/blueprints/src/landings/AutumnLanding.tsx",
    previewImage: "/previews/autumn-landing.png",
    createdAt: "2026-06-13",
    featured: false
  },
  {
    id: "zenix-portfolio",
    title: "Zenix Portfolio",
    description: "Clean, professional portfolio for showcasing software engineering work.",
    category: "portfolio",
    theme: "zenix",
    tags: ["professional", "minimal", "developer"],
    component: ZenixPortfolio,
    sourcePath: "packages/blueprints/src/portfolios/ZenixPortfolio.tsx",
    previewImage: "/previews/zenix-portfolio.png",
    createdAt: "2026-06-10",
    featured: true
  },
  {
    id: "ocean-portfolio",
    title: "Ocean Portfolio",
    description: "A visually striking portfolio leveraging blurred glass layers.",
    category: "portfolio",
    theme: "ocean",
    tags: ["designer", "fluid", "creative"],
    component: OceanPortfolio,
    sourcePath: "packages/blueprints/src/portfolios/OceanPortfolio.tsx",
    previewImage: "/previews/ocean-portfolio.png",
    createdAt: "2026-06-11",
    featured: false
  },
  {
    id: "night-city-portfolio",
    title: "Night City Portfolio",
    description: "Terminal-inspired portfolio for hackers and systems engineers.",
    category: "portfolio",
    theme: "night-city",
    tags: ["terminal", "hacker", "developer"],
    component: NightCityPortfolio,
    sourcePath: "packages/blueprints/src/portfolios/NightCityPortfolio.tsx",
    previewImage: "/previews/night-city-portfolio.png",
    createdAt: "2026-06-12",
    featured: true
  },
  {
    id: "autumn-portfolio",
    title: "Autumn Portfolio",
    description: "An elegant, typography-focused portfolio for writers and storytellers.",
    category: "portfolio",
    theme: "autumn",
    tags: ["story", "writer", "narrative"],
    component: AutumnPortfolio,
    sourcePath: "packages/blueprints/src/portfolios/AutumnPortfolio.tsx",
    previewImage: "/previews/autumn-portfolio.png",
    createdAt: "2026-06-13",
    featured: false
  },
  {
    id: "zenix-contact",
    title: "Zenix Contact",
    description: "A high-conversion, minimal contact form suitable for businesses.",
    category: "contact",
    theme: "zenix",
    tags: ["form", "minimal", "saas"],
    component: ZenixContact,
    sourcePath: "packages/blueprints/src/contact/ZenixContact.tsx",
    previewImage: "/previews/zenix-contact.png",
    createdAt: "2026-06-14",
    featured: false
  },
  {
    id: "ocean-contact",
    title: "Ocean Contact",
    description: "An immersive contact form that floats beautifully over dark backgrounds.",
    category: "contact",
    theme: "ocean",
    tags: ["form", "glass", "fluid"],
    component: OceanContact,
    sourcePath: "packages/blueprints/src/contact/OceanContact.tsx",
    previewImage: "/previews/ocean-contact.png",
    createdAt: "2026-06-14",
    featured: true
  },
  {
    id: "night-city-contact",
    title: "Night City Contact",
    description: "A secure transmission terminal for contacting operatives.",
    category: "contact",
    theme: "night-city",
    tags: ["form", "terminal", "cyberpunk"],
    component: NightCityContact,
    sourcePath: "packages/blueprints/src/contact/NightCityContact.tsx",
    previewImage: "/previews/night-city-contact.png",
    createdAt: "2026-06-14",
    featured: false
  },
  {
    id: "autumn-contact",
    title: "Autumn Contact",
    description: "A thoughtful, letter-style contact form.",
    category: "contact",
    theme: "autumn",
    tags: ["form", "organic", "journal"],
    component: AutumnContact,
    sourcePath: "packages/blueprints/src/contact/AutumnContact.tsx",
    previewImage: "/previews/autumn-contact.png",
    createdAt: "2026-06-14",
    featured: false
  },
  {
    id: "zenix-newsletter",
    title: "Zenix Newsletter",
    description: "An inline, high-converting newsletter subscription component.",
    category: "newsletter",
    theme: "zenix",
    tags: ["form", "inline", "saas"],
    component: ZenixNewsletter,
    sourcePath: "packages/blueprints/src/newsletter/ZenixNewsletter.tsx",
    previewImage: "/previews/zenix-newsletter.png",
    createdAt: "2026-06-15",
    featured: true
  },
  {
    id: "ocean-newsletter",
    title: "Ocean Newsletter",
    description: "A sleek, integrated subscription form with glass styling.",
    category: "newsletter",
    theme: "ocean",
    tags: ["form", "glass", "inline"],
    component: OceanNewsletter,
    sourcePath: "packages/blueprints/src/newsletter/OceanNewsletter.tsx",
    previewImage: "/previews/ocean-newsletter.png",
    createdAt: "2026-06-15",
    featured: false
  },
  {
    id: "night-city-newsletter",
    title: "Night City Newsletter",
    description: "A dead-drop subscription terminal for secure feeds.",
    category: "newsletter",
    theme: "night-city",
    tags: ["form", "terminal", "cyberpunk"],
    component: NightCityNewsletter,
    sourcePath: "packages/blueprints/src/newsletter/NightCityNewsletter.tsx",
    previewImage: "/previews/night-city-newsletter.png",
    createdAt: "2026-06-15",
    featured: false
  },
  {
    id: "autumn-newsletter",
    title: "Autumn Newsletter",
    description: "An elegant sign-up form for ongoing editorial content.",
    category: "newsletter",
    theme: "autumn",
    tags: ["form", "organic", "journal"],
    component: AutumnNewsletter,
    sourcePath: "packages/blueprints/src/newsletter/AutumnNewsletter.tsx",
    previewImage: "/previews/autumn-newsletter.png",
    createdAt: "2026-06-15",
    featured: false
  },
  {
    id: "zenix-auth",
    title: "Zenix Auth",
    description: "A clean, trustworthy authentication flow for SaaS products.",
    category: "auth",
    theme: "zenix",
    tags: ["login", "register", "minimal"],
    component: ZenixAuth,
    sourcePath: "packages/blueprints/src/auth/ZenixAuth.tsx",
    previewImage: "/previews/zenix-auth.png",
    createdAt: "2026-06-16",
    featured: true
  },
  {
    id: "ocean-auth",
    title: "Ocean Auth",
    description: "A frictionless, immersive login experience.",
    category: "auth",
    theme: "ocean",
    tags: ["login", "glass", "fluid"],
    component: OceanAuth,
    sourcePath: "packages/blueprints/src/auth/OceanAuth.tsx",
    previewImage: "/previews/ocean-auth.png",
    createdAt: "2026-06-16",
    featured: false
  },
  {
    id: "night-city-auth",
    title: "Night City Auth",
    description: "A high-security, hacker-style authentication prompt.",
    category: "auth",
    theme: "night-city",
    tags: ["login", "terminal", "cyberpunk"],
    component: NightCityAuth,
    sourcePath: "packages/blueprints/src/auth/NightCityAuth.tsx",
    previewImage: "/previews/night-city-auth.png",
    createdAt: "2026-06-16",
    featured: false
  },
  {
    id: "autumn-auth",
    title: "Autumn Auth",
    description: "A warm, welcoming sign-in screen.",
    category: "auth",
    theme: "autumn",
    tags: ["login", "organic", "story"],
    component: AutumnAuth,
    sourcePath: "packages/blueprints/src/auth/AutumnAuth.tsx",
    previewImage: "/previews/autumn-auth.png",
    createdAt: "2026-06-16",
    featured: false
  },
  {
    id: "zenix-blog",
    title: "Zenix Blog",
    description: "A highly legible, content-first blog layout for engineering teams.",
    category: "blog",
    theme: "zenix",
    tags: ["content", "article", "minimal"],
    component: ZenixBlog,
    sourcePath: "packages/blueprints/src/blog/ZenixBlog.tsx",
    previewImage: "/previews/zenix-blog.png",
    createdAt: "2026-06-17",
    featured: true
  },
  {
    id: "ocean-blog",
    title: "Ocean Blog",
    description: "A beautiful, spacious layout for editorial design.",
    category: "blog",
    theme: "ocean",
    tags: ["content", "article", "glass"],
    component: OceanBlog,
    sourcePath: "packages/blueprints/src/blog/OceanBlog.tsx",
    previewImage: "/previews/ocean-blog.png",
    createdAt: "2026-06-17",
    featured: false
  },
  {
    id: "night-city-blog",
    title: "Night City Blog",
    description: "A dense, high-contrast layout for technical changelogs.",
    category: "blog",
    theme: "night-city",
    tags: ["content", "terminal", "cyberpunk"],
    component: NightCityBlog,
    sourcePath: "packages/blueprints/src/blog/NightCityBlog.tsx",
    previewImage: "/previews/night-city-blog.png",
    createdAt: "2026-06-17",
    featured: false
  },
  {
    id: "autumn-blog",
    title: "Autumn Blog",
    description: "A classic, serif-driven journal layout for personal writing.",
    category: "blog",
    theme: "autumn",
    tags: ["content", "journal", "story"],
    component: AutumnBlog,
    sourcePath: "packages/blueprints/src/blog/AutumnBlog.tsx",
    previewImage: "/previews/autumn-blog.png",
    createdAt: "2026-06-17",
    featured: true
  },
  {
    id: "zenix-dashboard",
    title: "Zenix Dashboard",
    description: "A dense, data-rich administration dashboard.",
    category: "dashboard",
    theme: "zenix",
    tags: ["data", "admin", "saas"],
    component: ZenixDashboard,
    sourcePath: "packages/blueprints/src/dashboard/ZenixDashboard.tsx",
    previewImage: "/previews/zenix-dashboard.png",
    createdAt: "2026-06-18",
    featured: true
  },
  {
    id: "ocean-dashboard",
    title: "Ocean Dashboard",
    description: "A floating, glassmorphic analytics dashboard.",
    category: "dashboard",
    theme: "ocean",
    tags: ["data", "admin", "glass"],
    component: OceanDashboard,
    sourcePath: "packages/blueprints/src/dashboard/OceanDashboard.tsx",
    previewImage: "/previews/ocean-dashboard.png",
    createdAt: "2026-06-18",
    featured: false
  },
  {
    id: "night-city-dashboard",
    title: "Night City Dashboard",
    description: "A tactical command center for system monitoring.",
    category: "dashboard",
    theme: "night-city",
    tags: ["data", "terminal", "cyberpunk"],
    component: NightCityDashboard,
    sourcePath: "packages/blueprints/src/dashboard/NightCityDashboard.tsx",
    previewImage: "/previews/night-city-dashboard.png",
    createdAt: "2026-06-18",
    featured: true
  },
  {
    id: "autumn-dashboard",
    title: "Autumn Dashboard",
    description: "A gentle, paper-like interface for managing content.",
    category: "dashboard",
    theme: "autumn",
    tags: ["data", "admin", "journal"],
    component: AutumnDashboard,
    sourcePath: "packages/blueprints/src/dashboard/AutumnDashboard.tsx",
    previewImage: "/previews/autumn-dashboard.png",
    createdAt: "2026-06-18",
    featured: false
  }
];

export function getBlueprint(id: string) {
  return blueprints.find(bp => bp.id === id);
}

export function getBlueprintsByCategory(category: string) {
  return blueprints.filter(bp => bp.category === category);
}
```

## packages/blueprints/tsconfig.json

```json
{
  "compilerOptions": {
    "module": "ESNext",
    "moduleResolution": "Bundler",
    "target": "ES2022",
    "jsx": "react-jsx",
    "strict": true,
    "esModuleInterop": true,
    "skipLibCheck": true,
    "forceConsistentCasingInFileNames": true,
    "allowImportingTsExtensions": true,
    "noEmit": true
  },
  "include": ["src", "scripts"]
}
```

## packages/cli/package.json

```json
{
  "name": "@zenixui/cli",
  "version": "0.0.0",
  "description": "ZenixUI Experience distribution CLI",
  "bin": {
    "zenix-ui": "dist/index.js"
  },
  "scripts": {
    "build": "tsup",
    "dev": "tsup --watch"
  },
  "dependencies": {
    "chalk": "^4.1.2",
    "commander": "^11.1.0",
    "ora": "^5.4.1",
    "prompts": "^2.4.2"
  },
  "devDependencies": {
    "@types/node": "^20.0.0",
    "@types/prompts": "^2.4.9",
    "tsup": "^8.0.2",
    "typescript": "^5.4.5"
  }
}
```

## packages/cli/src/commands/add.ts

```typescript
import chalk from 'chalk';
import ora from 'ora';
import fs from 'fs';
import path from 'path';

// For local development, we point directly to the blueprints registry file built earlier
// In a real published version, we would fetch this from an HTTP registry endpoint!
const REGISTRY_PATH = path.join(__dirname, '../../blueprints/dist/registry.json');

export async function add(experienceId: string) {
  const configPath = path.join(process.cwd(), 'zenix.json');
  
  if (!fs.existsSync(configPath)) {
    console.log(chalk.red('Error: zenix.json not found. Run `npx zenix-ui init` first.'));
    process.exit(1);
  }

  const config = JSON.parse(fs.readFileSync(configPath, 'utf-8'));
  const spinner = ora(`Locating experience: ${experienceId}...`).start();

  let registry: any[] = [];
  try {
    if (fs.existsSync(REGISTRY_PATH)) {
      registry = JSON.parse(fs.readFileSync(REGISTRY_PATH, 'utf-8'));
    } else {
      throw new Error("Registry file not found locally.");
    }
  } catch (err) {
    spinner.fail('Failed to connect to experience registry.');
    process.exit(1);
  }

  const blueprint = registry.find(bp => bp.id === experienceId);

  if (!blueprint) {
    spinner.fail(`Experience '${experienceId}' not found in registry.`);
    process.exit(1);
  }

  spinner.text = `Installing ${blueprint.title}...`;

  // We are copying the entire source code into the user's project
  const destDir = path.join(process.cwd(), config.experiencesDir);
  if (!fs.existsSync(destDir)) {
    fs.mkdirSync(destDir, { recursive: true });
  }

  // Infer filename from the component name, usually title without spaces + .tsx
  const filename = `${blueprint.title.replace(/\s+/g, '')}.tsx`;
  const destFile = path.join(destDir, filename);

  fs.writeFileSync(destFile, blueprint.sourceCode);

  spinner.succeed(chalk.green(`Successfully installed ${blueprint.title} into ${config.experiencesDir}/${filename}`));
  console.log(`\nTo use it, import it in your app:`);
  console.log(chalk.cyan(`import { ${blueprint.title.replace(/\s+/g, '')} } from '@/${config.experiencesDir}/${filename.replace('.tsx', '')}';`));
}
```

## packages/cli/src/commands/init.ts

```typescript
import prompts from 'prompts';
import chalk from 'chalk';
import ora from 'ora';
import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';

export async function init() {
  console.log(chalk.bold.blue('\nWelcome to ZenixUI Experience distribution.\n'));
  
  const response = await prompts([
    {
      type: 'select',
      name: 'framework',
      message: 'Which framework are you using?',
      choices: [
        { title: 'Next.js', value: 'next' },
        { title: 'Vite', value: 'vite' },
        { title: 'Remix', value: 'remix' }
      ]
    },
    {
      type: 'text',
      name: 'experiencesDir',
      message: 'Where should we place downloaded experiences?',
      initial: 'src/experiences'
    },
    {
      type: 'select',
      name: 'defaultTheme',
      message: 'Which theme would you like to use by default?',
      choices: [
        { title: 'Zenix', value: 'zenix' },
        { title: 'Ocean', value: 'ocean' },
        { title: 'Night City', value: 'night-city' },
        { title: 'Autumn', value: 'autumn' }
      ]
    }
  ]);

  if (!response.framework) {
    console.log(chalk.yellow('Installation cancelled.'));
    process.exit(0);
  }

  const spinner = ora('Installing core dependencies...').start();
  
  try {
    const pm = process.env.npm_execpath?.includes('pnpm') ? 'pnpm' : process.env.npm_execpath?.includes('yarn') ? 'yarn' : 'npm';
    const installCmd = pm === 'npm' ? 'npm install' : `${pm} add`;
    execSync(`${installCmd} @zenixui/react @zenixui/core @zenixui/components`, { stdio: 'ignore' });
    spinner.succeed('Installed core dependencies.');
  } catch (err) {
    spinner.warn('Failed to auto-install dependencies. You may need to run `npm install @zenixui/react @zenixui/core @zenixui/components` manually.');
  }

  const configPath = path.join(process.cwd(), 'zenix.json');
  fs.writeFileSync(configPath, JSON.stringify({
    framework: response.framework,
    experiencesDir: response.experiencesDir,
    defaultTheme: response.defaultTheme
  }, null, 2));

  // Ensure experiences dir exists
  const expPath = path.join(process.cwd(), response.experiencesDir);
  if (!fs.existsSync(expPath)) {
    fs.mkdirSync(expPath, { recursive: true });
  }

  console.log(chalk.green(`\nSuccess! ZenixUI is configured.`));
  console.log(`\nNext steps:`);
  console.log(`1. Wrap your root layout with ${chalk.cyan('<Experience preset="' + response.defaultTheme + '">')}`);
  console.log(`2. Run ${chalk.cyan('npx zenix-ui add night-city-portfolio')} to add your first experience.\n`);
}
```

## packages/cli/src/index.ts

```typescript
#!/usr/bin/env node

import { Command } from 'commander';
import { init } from './commands/init';
import { add } from './commands/add';

const program = new Command();

program
  .name('zenix-ui')
  .description('Distribute and install entire ZenixUI experiences.')
  .version('0.0.1');

program
  .command('init')
  .description('Initialize your project and install ZenixUI dependencies.')
  .action(init);

program
  .command('add <experience-id>')
  .description('Add a complete experience to your project.')
  .action(add);

program.parse();
```

## packages/cli/tsconfig.json

```json
{
  "compilerOptions": {
    "moduleResolution": "node10",
    "target": "es2022",
    "module": "commonjs",
    "outDir": "dist",
    "esModuleInterop": true,
    "skipLibCheck": true,
    "strict": true,
    "forceConsistentCasingInFileNames": true
  },
  "include": ["src"]
}
```

## packages/cli/tsup.config.ts

```typescript
import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['src/index.ts'],
  format: ['cjs'],
  dts: true,
  clean: true,
  target: 'node18',
});
```

## packages/components/package.json

```json
{
  "name": "@zenixui/components",
  "version": "0.1.0",
  "private": true,
  "type": "module",
  "main": "dist/index.js",
  "module": "dist/index.mjs",
  "types": "dist/index.d.ts",
  "dependencies": {
    "@types/react": "^19.2.17",
    "@zenixui/core": "workspace:*",
    "react": "^19.2.7",
    "react-dom": "^19.2.7"
  }
}
```

## packages/components/src/atoms/Badge.tsx

```tsx
import React from 'react';

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: 'solid' | 'glass' | 'terminal' | 'organic';
  tone?: 'primary' | 'success' | 'error' | 'neutral';
  size?: 'sm' | 'md';
}

export const Badge = React.forwardRef<HTMLSpanElement, BadgeProps>(
  ({ className, variant = 'solid', tone = 'neutral', size = 'sm', children, style, ...props }, ref) => {
    
    const baseStyle: React.CSSProperties = {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontWeight: 500,
      whiteSpace: 'nowrap',
      transition: 'all 0.2s',
      ...style,
    };

    const sizeStyles = {
      sm: { padding: '0.25rem 0.5rem', fontSize: '0.75rem' },
      md: { padding: '0.375rem 0.75rem', fontSize: '0.875rem' },
    };

    const colors = {
      primary: 'var(--zx-primary)',
      success: '#32D74B', // Standard success
      error: '#FF453A', // Standard error
      neutral: 'var(--zx-elevated)'
    };

    const terminalColors = {
      primary: 'var(--zx-primary)',
      success: '#00ff00',
      error: '#ff003c',
      neutral: 'var(--zx-elevated)'
    };

    const activeColor = variant === 'terminal' ? terminalColors[tone] : colors[tone];

    const variantStyles = {
      solid: {
        background: tone === 'neutral' ? activeColor : `${activeColor}20`,
        color: tone === 'neutral' ? 'var(--zx-primary)' : activeColor,
        borderRadius: 'var(--zx-radius-sm)',
        textTransform: 'uppercase' as any,
        letterSpacing: '0.05em',
        fontWeight: 600,
      },
      glass: {
        background: 'rgba(255,255,255,0.1)',
        color: 'var(--zx-primary)',
        border: '1px solid var(--zx-glass-border)',
        borderRadius: 'var(--zx-radius-round)',
        backdropFilter: 'var(--zx-glass-blur)',
        fontWeight: 400,
      },
      terminal: {
        background: 'transparent',
        color: activeColor,
        border: `1px solid ${activeColor}`,
        borderRadius: 0,
        textTransform: 'uppercase' as any,
        fontFamily: 'var(--zx-font-mono)',
      },
      organic: {
        background: 'transparent',
        color: activeColor,
        fontFamily: 'Georgia, serif',
        fontStyle: 'italic',
        fontWeight: 400,
      }
    };

    const mergedStyle = {
      ...baseStyle,
      ...sizeStyles[size],
      ...variantStyles[variant],
    };

    const renderChildren = () => {
      if (variant === 'terminal' && typeof children === 'string') {
        return `[${children}]`;
      }
      return children;
    };

    return (
      <span ref={ref} style={mergedStyle} {...props}>
        {renderChildren()}
      </span>
    );
  }
);

Badge.displayName = 'Badge';
```

## packages/components/src/atoms/Button.tsx

```tsx
import React from 'react';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'default' | 'glass' | 'cyber' | 'organic';
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
  isLoading?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'default', size = 'md', fullWidth, isLoading, children, disabled, style, ...props }, ref) => {
    
    const baseStyle: React.CSSProperties = {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '0.5rem',
      cursor: disabled || isLoading ? 'not-allowed' : 'pointer',
      opacity: disabled || isLoading ? 0.7 : 1,
      width: fullWidth ? '100%' : 'auto',
      border: 'none',
      fontFamily: 'inherit',
      transition: 'all 0.2s ease',
      boxSizing: 'border-box',
      ...style,
    };

    const sizeStyles = {
      sm: { padding: '0.5rem 1rem', fontSize: '0.875rem' },
      md: { padding: '0.75rem 1.5rem', fontSize: '1rem' },
      lg: { padding: '1rem 2rem', fontSize: '1.125rem' },
    };

    const variantStyles = {
      default: {
        background: 'var(--zx-primary)',
        color: 'var(--zx-background)',
        borderRadius: 'var(--zx-radius-sm)',
        fontWeight: 500,
      },
      glass: {
        background: 'rgba(255, 255, 255, 0.15)',
        color: 'var(--zx-primary)',
        border: '1px solid var(--zx-glass-border)',
        borderRadius: 'var(--zx-radius-round)',
        backdropFilter: 'var(--zx-glass-blur)',
        fontWeight: 400,
      },
      cyber: {
        background: 'transparent',
        color: 'var(--zx-primary)',
        border: '1px solid var(--zx-primary)',
        borderRadius: 0,
        fontWeight: 600,
        textTransform: 'uppercase' as any,
      },
      organic: {
        background: 'transparent',
        color: 'var(--zx-primary)',
        borderRadius: 0,
        fontWeight: 500,
        fontFamily: 'Georgia, serif',
        fontStyle: 'italic',
      }
    };

    const mergedStyle = {
      ...baseStyle,
      ...sizeStyles[size],
      ...variantStyles[variant],
    };

    // For cyber variant, we often use [TEXT] format
    const renderChildren = () => {
      if (isLoading) {
        return variant === 'cyber' ? '[PROCESSING...]' : 'Loading...';
      }
      if (variant === 'cyber' && typeof children === 'string') {
        return `[${children}]`;
      }
      return children;
    };

    return (
      <button
        ref={ref}
        disabled={disabled || isLoading}
        style={mergedStyle}
        {...props}
      >
        {renderChildren()}
        {variant === 'organic' && !isLoading && <span>→</span>}
      </button>
    );
  }
);

Button.displayName = 'Button';
```

## packages/components/src/atoms/Input.tsx

```tsx
'use client';

import React, { useState } from 'react';

export interface InputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'prefix'> {
  variant?: 'default' | 'glass' | 'terminal' | 'organic';
  status?: 'idle' | 'error' | 'success';
  prefixNode?: React.ReactNode;
  suffixNode?: React.ReactNode;
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, variant = 'default', status = 'idle', type = 'text', prefixNode, suffixNode, style, ...props }, ref) => {
    const [isFocused, setIsFocused] = useState(false);

    const baseStyle: React.CSSProperties = {
      width: '100%',
      fontFamily: 'inherit',
      outline: 'none',
      boxSizing: 'border-box',
      transition: 'all 0.2s ease',
      color: 'var(--zx-primary)',
      background: 'transparent',
    };

    const variantStyles = {
      default: {
        padding: '0.75rem 1rem',
        borderRadius: 'var(--zx-radius-sm)',
        border: status === 'error' ? '1px solid #ff3b30' : '1px solid var(--zx-elevated)',
        background: 'var(--zx-background)',
        fontSize: '0.875rem',
        borderColor: isFocused && status !== 'error' ? 'var(--zx-primary)' : undefined,
      },
      glass: {
        padding: '1rem 1.5rem',
        borderRadius: 'var(--zx-radius-round)',
        border: '1px solid var(--zx-glass-border)',
        background: 'rgba(255, 255, 255, 0.05)',
        backdropFilter: 'var(--zx-glass-blur)',
        fontSize: '1rem',
        fontWeight: 300,
        boxShadow: 'inset 0 2px 10px rgba(0,0,0,0.02)',
      },
      terminal: {
        padding: '0.75rem 1rem',
        borderRadius: 0,
        border: status === 'error' ? '1px solid #ff003c' : '1px solid var(--zx-elevated)',
        background: 'rgba(0,0,0,0.2)',
        fontSize: '0.875rem',
        textTransform: 'uppercase' as any,
        borderColor: isFocused && status !== 'error' ? '#00ff00' : undefined,
      },
      organic: {
        padding: '0.5rem 0',
        borderRadius: 0,
        border: 'none',
        borderBottom: '2px solid var(--zx-elevated)',
        fontSize: '1.1rem',
        borderColor: isFocused ? 'var(--zx-primary)' : undefined,
      }
    };

    const mergedInputStyle = {
      ...baseStyle,
      ...variantStyles[variant],
      ...style,
    };

    const wrapperStyle: React.CSSProperties = {
      position: 'relative',
      display: 'flex',
      alignItems: 'center',
      width: '100%',
    };

    return (
      <div style={wrapperStyle}>
        {prefixNode && (
          <div style={{ position: 'absolute', left: '1rem', zIndex: 2 }}>
            {prefixNode}
          </div>
        )}
        <input
          ref={ref}
          type={type}
          style={{
            ...mergedInputStyle,
            paddingLeft: prefixNode ? '3rem' : mergedInputStyle.paddingLeft || mergedInputStyle.padding,
            paddingRight: suffixNode ? (variant === 'glass' ? '140px' : '3rem') : mergedInputStyle.paddingRight || mergedInputStyle.padding,
          }}
          onFocus={(e) => {
            setIsFocused(true);
            props.onFocus?.(e);
          }}
          onBlur={(e) => {
            setIsFocused(false);
            props.onBlur?.(e);
          }}
          {...props}
        />
        {suffixNode && (
          <div style={{ position: 'absolute', right: variant === 'glass' ? '4px' : '1rem', zIndex: 2 }}>
            {suffixNode}
          </div>
        )}
      </div>
    );
  }
);

Input.displayName = 'Input';
```

## packages/components/src/atoms/Textarea.tsx

```tsx
'use client';

import React, { useState } from 'react';

export interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  variant?: 'default' | 'glass' | 'terminal' | 'organic';
  status?: 'idle' | 'error' | 'success';
}

export const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, variant = 'default', status = 'idle', style, rows = 4, ...props }, ref) => {
    const [isFocused, setIsFocused] = useState(false);

    const baseStyle: React.CSSProperties = {
      width: '100%',
      fontFamily: 'inherit',
      outline: 'none',
      boxSizing: 'border-box',
      transition: 'all 0.2s ease',
      color: 'var(--zx-primary)',
      background: 'transparent',
      resize: 'vertical',
    };

    const variantStyles = {
      default: {
        padding: '0.75rem 1rem',
        borderRadius: 'var(--zx-radius-sm)',
        border: status === 'error' ? '1px solid #ff3b30' : '1px solid var(--zx-elevated)',
        background: 'var(--zx-background)',
        fontSize: '0.875rem',
        borderColor: isFocused && status !== 'error' ? 'var(--zx-primary)' : undefined,
      },
      glass: {
        padding: '1rem 1.5rem',
        borderRadius: 'var(--zx-radius-md)',
        border: '1px solid var(--zx-glass-border)',
        background: 'rgba(255, 255, 255, 0.05)',
        backdropFilter: 'var(--zx-glass-blur)',
        fontSize: '1rem',
        fontWeight: 300,
        boxShadow: 'inset 0 2px 10px rgba(0,0,0,0.02)',
      },
      terminal: {
        padding: '0.75rem 1rem',
        borderRadius: 0,
        border: status === 'error' ? '1px solid #ff003c' : '1px solid var(--zx-elevated)',
        background: 'rgba(0,0,0,0.2)',
        fontSize: '0.875rem',
        textTransform: 'uppercase' as any,
        borderColor: isFocused && status !== 'error' ? '#00ff00' : undefined,
      },
      organic: {
        padding: '0.5rem 0',
        borderRadius: 0,
        border: 'none',
        borderBottom: '2px solid var(--zx-elevated)',
        fontSize: '1.1rem',
        borderColor: isFocused ? 'var(--zx-primary)' : undefined,
      }
    };

    const mergedStyle = {
      ...baseStyle,
      ...variantStyles[variant],
      ...style,
    };

    return (
      <textarea
        ref={ref}
        rows={rows}
        style={mergedStyle}
        onFocus={(e) => {
          setIsFocused(true);
          props.onFocus?.(e);
        }}
        onBlur={(e) => {
          setIsFocused(false);
          props.onBlur?.(e);
        }}
        {...props}
      />
    );
  }
);

Textarea.displayName = 'Textarea';
```

## packages/components/src/index.ts

```typescript
export * from './primitives/Surface';
export * from './primitives/Section';
export * from './primitives/Container';
export * from './primitives/Stack';
export * from './primitives/Grid';

export * from './patterns/Pattern';
export * from './patterns/Hero';
export * from './patterns/Features';
export * from './patterns/CTA';
export * from './patterns/Footer';

export * from './atoms/Button';
export * from './atoms/Input';
export * from './atoms/Textarea';
export * from './atoms/Badge';
```

## packages/components/src/patterns/CTA.tsx

```tsx
import { Pattern } from './Pattern';

export const CTA = {
  Root: Pattern.Root,
  Content: Pattern.Content,
  Visual: Pattern.Visual,
  Actions: Pattern.Actions,
};
```

## packages/components/src/patterns/Features.tsx

```tsx
import React from 'react';
import { Pattern } from './Pattern';
import { Grid, GridProps } from '../primitives/Grid';

export const FeaturesGrid = React.forwardRef<HTMLDivElement, GridProps>(
  ({ children, columns = 3, spacing = 'lg', ...props }, ref) => (
    <Grid ref={ref} columns={columns} spacing={spacing} {...props}>
      {children}
    </Grid>
  )
);
FeaturesGrid.displayName = 'Features.Grid';

export const Features = {
  Root: Pattern.Root,
  Content: Pattern.Content,
  Grid: FeaturesGrid,
  Actions: Pattern.Actions,
};
```

## packages/components/src/patterns/Footer.tsx

```tsx
import React from 'react';
import { Pattern } from './Pattern';
import { Stack, StackProps } from '../primitives/Stack';

export const FooterBrand = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ children, ...props }, ref) => (
    <div ref={ref} {...props}>
      {children}
    </div>
  )
);
FooterBrand.displayName = 'Footer.Brand';

export const FooterLinks = React.forwardRef<HTMLDivElement, StackProps>(
  ({ children, direction = 'row', spacing = 'md', ...props }, ref) => (
    <Stack ref={ref} direction={direction} spacing={spacing} wrap {...props}>
      {children}
    </Stack>
  )
);
FooterLinks.displayName = 'Footer.Links';

export const Footer = {
  Root: Pattern.Root,
  Content: Pattern.Content,
  Brand: FooterBrand,
  Links: FooterLinks,
};
```

## packages/components/src/patterns/Hero.tsx

```tsx
import { Pattern } from './Pattern';

export const Hero = {
  Root: Pattern.Root,
  Content: Pattern.Content,
  Visual: Pattern.Visual,
  Actions: Pattern.Actions,
};
```

## packages/components/src/patterns/Pattern.tsx

```tsx
import React, { HTMLAttributes } from 'react';
import { Section, SectionProps } from '../primitives/Section';
import { Container, ContainerProps } from '../primitives/Container';
import { Stack, StackProps } from '../primitives/Stack';

export interface PatternRootProps extends SectionProps {
  containerSize?: ContainerProps['size'];
}

export const PatternRoot = React.forwardRef<HTMLElement, PatternRootProps>(
  ({ containerSize = 'lg', children, ...props }, ref) => (
    <Section ref={ref} {...props}>
      <Container size={containerSize}>
        {children}
      </Container>
    </Section>
  )
);
PatternRoot.displayName = 'Pattern.Root';

export const PatternContent = React.forwardRef<HTMLDivElement, StackProps>(
  ({ children, spacing = 'xl', ...props }, ref) => (
    <Stack ref={ref} spacing={spacing} {...props}>
      {children}
    </Stack>
  )
);
PatternContent.displayName = 'Pattern.Content';

export const PatternVisual = React.forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  ({ children, style, ...props }, ref) => (
    <div ref={ref} style={{ position: 'relative', width: '100%', ...style }} {...props}>
      {children}
    </div>
  )
);
PatternVisual.displayName = 'Pattern.Visual';

export const PatternActions = React.forwardRef<HTMLDivElement, StackProps>(
  ({ children, direction = 'row', spacing = 'md', justify = 'flex-start', ...props }, ref) => (
    <Stack ref={ref} direction={direction} spacing={spacing} justify={justify} wrap {...props}>
      {children}
    </Stack>
  )
);
PatternActions.displayName = 'Pattern.Actions';

export const Pattern = {
  Root: PatternRoot,
  Content: PatternContent,
  Visual: PatternVisual,
  Actions: PatternActions,
};
```

## packages/components/src/primitives/Container.tsx

```tsx
import React, { HTMLAttributes } from 'react';

export interface ContainerProps extends HTMLAttributes<HTMLDivElement> {
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'full';
}

export const Container = React.forwardRef<HTMLDivElement, ContainerProps>(
  ({ size = 'lg', className = '', style, children, ...props }, ref) => {
    
    const maxWMap = {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      full: '100%',
    };

    return (
      <div 
        ref={ref}
        className={`zx-container zx-container-${size} ${className}`}
        style={{
          width: '100%',
          maxWidth: maxWMap[size],
          marginLeft: 'auto',
          marginRight: 'auto',
          paddingLeft: '1.5rem',
          paddingRight: '1.5rem',
          ...style
        }}
        {...props}
      >
        {children}
      </div>
    );
  }
);
Container.displayName = 'Container';
```

## packages/components/src/primitives/Grid.tsx

```tsx
import React, { HTMLAttributes } from 'react';

export interface GridProps extends HTMLAttributes<HTMLDivElement> {
  columns?: 1 | 2 | 3 | 4 | 5 | 6 | 12;
  spacing?: 'none' | 'sm' | 'md' | 'lg' | 'xl';
}

export const Grid = React.forwardRef<HTMLDivElement, GridProps>(
  ({ 
    columns = 1,
    spacing = 'md',
    className = '', 
    style, 
    children, 
    ...props 
  }, ref) => {
    
    const spacingMap = {
      none: '0',
      sm: '0.5rem',
      md: '1rem',
      lg: '2rem',
      xl: '3rem',
    };

    return (
      <div 
        ref={ref}
        className={`zx-grid ${className}`}
        style={{
          display: 'grid',
          gridTemplateColumns: columns === 1 ? 'minmax(0, 1fr)' : `repeat(auto-fit, minmax(min(100%, 280px), 1fr))`,
          gap: spacingMap[spacing],
          ...style
        }}
        {...props}
      >
        {children}
      </div>
    );
  }
);
Grid.displayName = 'Grid';
```

## packages/components/src/primitives/Section.tsx

```tsx
import React, { HTMLAttributes } from 'react';

export interface SectionProps extends HTMLAttributes<HTMLElement> {
  /** Enables vertical padding appropriate for major page sections */
  padded?: boolean;
}

export const Section = React.forwardRef<HTMLElement, SectionProps>(
  ({ padded = true, className = '', style, children, ...props }, ref) => {
    return (
      <section 
        ref={ref}
        className={`zx-section ${className}`}
        style={{
          position: 'relative',
          width: '100%',
          paddingTop: padded ? '6rem' : '0',
          paddingBottom: padded ? '6rem' : '0',
          ...style
        }}
        {...props}
      >
        {children}
      </section>
    );
  }
);
Section.displayName = 'Section';
```

## packages/components/src/primitives/Stack.tsx

```tsx
import React, { HTMLAttributes } from 'react';

export interface StackProps extends HTMLAttributes<HTMLDivElement> {
  direction?: 'row' | 'column';
  align?: 'flex-start' | 'center' | 'flex-end' | 'stretch';
  justify?: 'flex-start' | 'center' | 'flex-end' | 'space-between' | 'space-around';
  spacing?: 'none' | 'sm' | 'md' | 'lg' | 'xl';
  wrap?: boolean;
}

export const Stack = React.forwardRef<HTMLDivElement, StackProps>(
  ({ 
    direction = 'column', 
    align = 'stretch', 
    justify = 'flex-start', 
    spacing = 'md',
    wrap = false,
    className = '', 
    style, 
    children, 
    ...props 
  }, ref) => {
    
    const spacingMap = {
      none: '0',
      sm: '0.5rem',
      md: '1rem',
      lg: '2rem',
      xl: '3rem',
    };

    return (
      <div 
        ref={ref}
        className={`zx-stack ${className}`}
        style={{
          display: 'flex',
          flexDirection: direction,
          alignItems: align,
          justifyContent: justify,
          gap: spacingMap[spacing],
          flexWrap: wrap ? 'wrap' : 'nowrap',
          ...style
        }}
        {...props}
      >
        {children}
      </div>
    );
  }
);
Stack.displayName = 'Stack';
```

## packages/components/src/primitives/Surface.tsx

```tsx
import React, { HTMLAttributes } from 'react';

export type SurfaceVariant = 'card' | 'hero' | 'navbar' | 'footer' | 'glass' | 'overlay' | 'transparent';

export interface SurfaceProps extends HTMLAttributes<HTMLDivElement> {
  variant?: SurfaceVariant;
}

export const Surface = React.forwardRef<HTMLDivElement, SurfaceProps>(
  ({ variant = 'transparent', className = '', style, children, ...props }, ref) => {
    
    // Default mappings using CSS variables. Fallbacks ensure it works even if a pack hasn't explicitly set it.
    const variantStyles: React.CSSProperties = {
      ...(variant === 'card' && {
        background: 'var(--zx-card, var(--zx-surface))',
        borderRadius: '1rem',
        border: '1px solid var(--zx-elevated)',
        boxShadow: '0 8px 24px rgba(0, 0, 0, 0.1)',
        overflow: 'hidden',
      }),
      ...(variant === 'hero' && {
        background: 'var(--zx-hero, transparent)',
      }),
      ...(variant === 'navbar' && {
        background: 'var(--zx-navbar, var(--zx-glass))',
        backdropFilter: 'blur(12px)',
        borderBottom: '1px solid var(--zx-elevated)',
      }),
      ...(variant === 'footer' && {
        background: 'var(--zx-footer, var(--zx-background))',
        borderTop: '1px solid var(--zx-elevated)',
      }),
      ...(variant === 'glass' && {
        background: 'var(--zx-glass)',
        backdropFilter: 'blur(16px)',
        border: '1px solid var(--zx-elevated)',
        borderRadius: '1rem',
      }),
      ...(variant === 'overlay' && {
        background: 'var(--zx-overlay)',
        position: 'absolute',
        inset: 0,
      }),
    };

    return (
      <div 
        ref={ref}
        className={`zx-surface zx-surface-${variant} ${className}`}
        style={{ ...variantStyles, ...style }}
        {...props}
      >
        {children}
      </div>
    );
  }
);
Surface.displayName = 'Surface';
```

## packages/components/tsup.config.ts

```typescript
import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['src/index.ts'],
  format: ['cjs', 'esm'],
  dts: true,
  clean: true,
  external: ['react', 'react-dom'],
});
```

## packages/core/package.json

```json
{
  "name": "@zenixui/core",
  "version": "0.1.0",
  "private": true,
  "type": "module",
  "main": "dist/index.js",
  "module": "dist/index.mjs",
  "types": "dist/index.d.ts",
  "scripts": {},
  "devDependencies": {
    "tsup": "^8.5.1"
  }
}
```

## packages/core/src/Experience.tsx

```tsx
import React, { createContext, useContext, useMemo } from 'react';
import { getPreset } from './registry';
import type { MotionProfile, ExperiencePreset, ThemeConfig, ThemeOverrides } from './types';

interface ExperienceContextValue {
  preset: ExperiencePreset;
  motion: MotionProfile;
  overrides?: ThemeOverrides;
}

const ExperienceContext = createContext<ExperienceContextValue | null>(null);

export function useExperience() {
  const context = useContext(ExperienceContext);
  if (!context) {
    throw new Error('useExperience must be used within an Experience provider');
  }
  return context;
}

export interface ExperienceProps {
  preset?: string | ExperiencePreset;
  config?: ThemeConfig;
  overrides?: ThemeOverrides;
  background?: 'default' | 'none' | React.ReactNode;
  children: React.ReactNode;
}

export function Experience({
  preset,
  config,
  overrides = {},
  background = 'default',
  children,
}: ExperienceProps) {
  // If config is provided, it overrides the preset and base overrides
  const resolvedPresetId = config?.base || preset || 'zenix';
  const resolvedOverrides: ThemeOverrides = {
    ...overrides,
    ...(config || {})
  };

  const resolvedPreset = useMemo(() => {
    if (typeof resolvedPresetId === 'string') {
      const found = getPreset(resolvedPresetId);
      if (!found) {
        throw new Error(`ZenixUI: Preset "${resolvedPresetId}" not found in registry. Did you forget to register it?`);
      }
      return found;
    }
    return resolvedPresetId;
  }, [resolvedPresetId]);

  const activeMotion = resolvedOverrides.motion || resolvedPreset.metadata.defaultMotion || 'normal';

  const { themeClass, SceneComponent, EffectComponent } = resolvedPreset;

  const styleOverrides: Record<string, string> = {};
  if (resolvedOverrides.accent) styleOverrides['--zx-accent'] = resolvedOverrides.accent;
  if (resolvedOverrides.radius) styleOverrides['--zx-radius'] = resolvedOverrides.radius;
  if (resolvedOverrides.density) styleOverrides['--zx-density-scale'] = resolvedOverrides.density === 'compact' ? '0.8' : resolvedOverrides.density === 'spacious' ? '1.2' : '1';
  if (resolvedOverrides.typography) styleOverrides['--zx-font-primary'] = resolvedOverrides.typography;

  return (
    <ExperienceContext.Provider value={{ preset: resolvedPreset, motion: activeMotion, overrides: resolvedOverrides }}>
      <div 
        className={`zx-experience ${themeClass || ''}`} 
        data-zx-motion={activeMotion}
        style={{ 
          position: 'relative', 
          width: '100%', 
          minHeight: '100vh', 
          overflow: 'hidden',
          ...styleOverrides
        }}
      >
        {/* Render Background Scene logic */}
        {background === 'default' && SceneComponent && <SceneComponent />}
        {background !== 'default' && background !== 'none' && (
          <div style={{ position: 'absolute', inset: 0, zIndex: 0, overflow: 'hidden' }}>
            {background}
          </div>
        )}

        {EffectComponent && <EffectComponent />}
        
        {/* Render content on top of scenes and effects */}
        <div style={{ position: 'relative', zIndex: 10, width: '100%', height: '100%' }}>
          {children}
        </div>
      </div>
    </ExperienceContext.Provider>
  );
}
```

## packages/core/src/index.ts

```typescript
export * from './types';
export * from './registry';
export * from './Experience';
```

## packages/core/src/registry.ts

```typescript
import type { ExperiencePreset } from './types';

const registry = new Map<string, ExperiencePreset>();

export function registerPreset(preset: ExperiencePreset) {
  registry.set(preset.metadata.id, preset);
}

export function getPreset(id: string): ExperiencePreset | undefined {
  return registry.get(id);
}
```

## packages/core/src/types.ts

```typescript
import React from 'react';

export type MotionProfile = 'none' | 'subtle' | 'normal' | 'immersive';

export interface ExperienceMetadata {
  id: string;
  name: string;
  description: string;
  defaultMotion: MotionProfile;
  capabilities: string[];
  assets: Record<string, string>;
}

export interface ExperiencePreset {
  metadata: ExperienceMetadata;
  themeClass?: string; // CSS class that injects the tokens, e.g. 'zx-theme-ocean'
  SceneComponent?: React.ComponentType<any>;
  EffectComponent?: React.ComponentType<any>;
}

export interface ThemeOverrides {
  accent?: string;
  radius?: string;
  motion?: MotionProfile;
  density?: 'compact' | 'comfortable' | 'spacious';
  typography?: string;
}

export interface ThemeConfig extends ThemeOverrides {
  name: string;
  base: string;
}
```

## packages/core/tsup.config.ts

```typescript
import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['src/index.ts'],
  format: ['cjs', 'esm'],
  dts: true,
  clean: true,
  target: 'es2022',
  external: ['react', 'react-dom'],
});
```

## packages/effects/package.json

```json
{
  "name": "@zenixui/effects",
  "version": "0.1.0",
  "private": true,
  "type": "module",
  "main": "src/index.ts",
  "types": "src/index.ts",
  "scripts": {}
}
```

## packages/effects/src/AutumnEffect.tsx

```tsx
export function AutumnEffect() {
  return (
    <div 
      className="zx-effect-autumn"
      style={{
        position: 'absolute',
        inset: 0,
        pointerEvents: 'none',
        zIndex: 1,
        overflow: 'hidden'
      }}
    >
      <div className="zx-leaf" style={{ left: '10%', animationDuration: '7s', animationDelay: '0s', background: '#d97706' }} />
      <div className="zx-leaf" style={{ left: '30%', animationDuration: '9s', animationDelay: '2s', background: '#b45309' }} />
      <div className="zx-leaf" style={{ left: '60%', animationDuration: '6s', animationDelay: '1s', background: '#f59e0b' }} />
      <div className="zx-leaf" style={{ left: '80%', animationDuration: '8s', animationDelay: '3s', background: '#d97706' }} />

      <style>{`
        .zx-leaf {
          position: absolute;
          top: -20px;
          width: 15px;
          height: 15px;
          border-radius: 2px 10px 2px 10px;
          opacity: 0.8;
          animation-name: zx-fall;
          animation-iteration-count: infinite;
          animation-timing-function: linear;
        }

        @keyframes zx-fall {
          0% { transform: translateY(0) rotate(0deg); opacity: 0; }
          10% { opacity: 0.8; }
          90% { opacity: 0.8; }
          100% { transform: translateY(100vh) rotate(360deg); opacity: 0; }
        }

        /* Motion Profile Map */
        [data-zx-motion="none"] .zx-effect-autumn,
        @media (prefers-reduced-motion: reduce) {
          .zx-effect-autumn { display: none !important; }
        }
        
        [data-zx-motion="subtle"] .zx-leaf { animation-duration: 15s !important; opacity: 0.4; }
        [data-zx-motion="immersive"] .zx-leaf { opacity: 1; }
      `}</style>
    </div>
  );
}
```

## packages/effects/src/NightCityEffect.tsx

```tsx
export function NightCityEffect() {
  return (
    <div 
      className="zx-effect-night-city"
      style={{
        position: 'absolute',
        inset: 0,
        pointerEvents: 'none',
        zIndex: 1,
        overflow: 'hidden'
      }}
    >
      {/* Light streaks */}
      <div className="zx-light-streak" style={{ top: '60%', background: '#ec4899', animationDuration: '3s', animationDelay: '0s' }} />
      <div className="zx-light-streak" style={{ top: '70%', background: '#3b82f6', animationDuration: '4s', animationDelay: '1s' }} />
      <div className="zx-light-streak" style={{ top: '80%', background: '#eab308', animationDuration: '2.5s', animationDelay: '0.5s' }} />

      <style>{`
        .zx-light-streak {
          position: absolute;
          width: 100px;
          height: 3px;
          border-radius: 3px;
          left: -100px;
          opacity: 0.6;
          filter: blur(2px);
          animation-name: zx-streak;
          animation-iteration-count: infinite;
          animation-timing-function: linear;
        }

        @keyframes zx-streak {
          0% { transform: translateX(0); }
          100% { transform: translateX(2000px); }
        }

        /* Motion Profile Map */
        [data-zx-motion="none"] .zx-effect-night-city,
        @media (prefers-reduced-motion: reduce) {
          .zx-effect-night-city { display: none !important; }
        }
        
        [data-zx-motion="subtle"] .zx-light-streak { animation-duration: 8s !important; opacity: 0.3; }
        [data-zx-motion="immersive"] .zx-light-streak { width: 300px; filter: blur(4px); opacity: 0.8; }
      `}</style>
    </div>
  );
}
```

## packages/effects/src/OceanEffect.tsx

```tsx
export function OceanEffect() {
  return (
    <div 
      className="zx-effect-ocean"
      style={{
        position: 'absolute',
        inset: 0,
        pointerEvents: 'none',
        zIndex: 1,
        overflow: 'hidden'
      }}
    >
      <div 
        style={{
          position: 'absolute',
          bottom: '-20px',
          left: '10%',
          width: '20px',
          height: '20px',
          borderRadius: '50%',
          background: 'rgba(56, 189, 248, 0.2)',
          animation: 'zx-float 4s infinite ease-in-out'
        }}
      />
      <div 
        style={{
          position: 'absolute',
          bottom: '-20px',
          left: '40%',
          width: '15px',
          height: '15px',
          borderRadius: '50%',
          background: 'rgba(56, 189, 248, 0.2)',
          animation: 'zx-float 6s infinite ease-in-out 1s'
        }}
      />
      <div 
        style={{
          position: 'absolute',
          bottom: '-20px',
          left: '80%',
          width: '10px',
          height: '10px',
          borderRadius: '50%',
          background: 'rgba(56, 189, 248, 0.2)',
          animation: 'zx-float 3s infinite ease-in-out 0.5s'
        }}
      />
      <style>{`
        @keyframes zx-float {
          0% { transform: translateY(0) scale(1); opacity: 0; }
          50% { opacity: 1; }
          100% { transform: translateY(-500px) scale(1.5); opacity: 0; }
        }
        
        /* Implement reduced motion per effect */
        [data-zx-motion="none"] .zx-effect-ocean,
        @media (prefers-reduced-motion: reduce) {
          .zx-effect-ocean {
            display: none !important;
          }
        }
      `}</style>
    </div>
  );
}
```

## packages/effects/src/index.ts

```typescript
export * from './OceanEffect';
export * from './NightCityEffect';
export * from './AutumnEffect';
```

## packages/packs/autumn/package.json

```json
{
  "name": "@zenixui/pack-autumn",
  "version": "0.1.0",
  "private": true,
  "type": "module",
  "main": "src/index.ts",
  "types": "src/index.ts",
  "dependencies": {
    "@zenixui/core": "workspace:*",
    "@zenixui/effects": "workspace:*",
    "@zenixui/scenes": "workspace:*"
  }
}
```

## packages/packs/autumn/src/index.ts

```typescript
import { registerPreset } from '@zenixui/core';
import type { ExperiencePreset } from '@zenixui/core';
import { AutumnScene } from '@zenixui/scenes';
import { AutumnEffect } from '@zenixui/effects';
import './theme.css';

export const autumnPreset: ExperiencePreset = {
  metadata: {
    id: 'autumn',
    name: 'Autumn',
    description: 'A warm, falling leaves atmosphere.',
    defaultMotion: 'subtle',
    capabilities: ['leaves', 'warm-light', 'ambient-motion', 'organic'],
    assets: {
      leaf: '/assets/autumn-leaf.svg',
    }
  },
  themeClass: 'zx-theme-autumn',
  SceneComponent: AutumnScene,
  EffectComponent: AutumnEffect,
};

registerPreset(autumnPreset);

export default autumnPreset;
```

## packages/packs/autumn/src/theme.css

```text
.zx-theme-autumn {
  --zx-background: #fef3c7; /* Amber 50 */
  --zx-surface: #fde68a;    /* Amber 200 */
  --zx-elevated: #fcd34d;   /* Amber 300 */
  --zx-glass: rgba(253, 230, 138, 0.7);
  --zx-overlay: rgba(254, 243, 199, 0.8);
  --zx-accent: #d97706;     /* Amber 600 */
  --zx-primary: #451a03;    /* Amber 950 */
  
  /* Apply defaults */
  background-color: var(--zx-background);
  color: var(--zx-primary);
}
```

## packages/packs/night-city/package.json

```json
{
  "name": "@zenixui/pack-night-city",
  "version": "0.1.0",
  "private": true,
  "type": "module",
  "main": "src/index.ts",
  "types": "src/index.ts",
  "dependencies": {
    "@zenixui/core": "workspace:*",
    "@zenixui/effects": "workspace:*",
    "@zenixui/scenes": "workspace:*"
  }
}
```

## packages/packs/night-city/src/index.ts

```typescript
import { registerPreset } from '@zenixui/core';
import type { ExperiencePreset } from '@zenixui/core';
import { NightCityScene } from '@zenixui/scenes';
import { NightCityEffect } from '@zenixui/effects';
import './theme.css';

export const nightCityPreset: ExperiencePreset = {
  metadata: {
    id: 'night-city',
    name: 'Night City',
    description: 'A neon-drenched urban atmosphere.',
    defaultMotion: 'normal',
    capabilities: ['glow', 'neon', 'particles', 'cityscape', 'fast-motion'],
    assets: {
      skyline: '/assets/city-skyline.svg',
    }
  },
  themeClass: 'zx-theme-night-city',
  SceneComponent: NightCityScene,
  EffectComponent: NightCityEffect,
};

registerPreset(nightCityPreset);

export default nightCityPreset;
```

## packages/packs/night-city/src/theme.css

```text
.zx-theme-night-city {
  --zx-background: #09090b; /* Zinc 950 */
  --zx-surface: #18181b;    /* Zinc 900 */
  --zx-elevated: #27272a;   /* Zinc 800 */
  --zx-glass: rgba(24, 24, 27, 0.7);
  --zx-overlay: rgba(9, 9, 11, 0.8);
  --zx-accent: #ec4899;     /* Pink 500 */
  --zx-primary: #f4f4f5;    /* Zinc 50 */
  
  /* Apply defaults */
  background-color: var(--zx-background);
  color: var(--zx-primary);
}
```

## packages/packs/ocean/package.json

```json
{
  "name": "@zenixui/pack-ocean",
  "version": "0.1.0",
  "private": true,
  "type": "module",
  "main": "src/index.ts",
  "types": "src/index.ts",
  "scripts": {},
  "dependencies": {
    "@zenixui/core": "workspace:*",
    "@zenixui/effects": "workspace:*",
    "@zenixui/scenes": "workspace:*"
  }
}
```

## packages/packs/ocean/src/index.ts

```typescript
import { registerPreset } from '@zenixui/core';
import type { ExperiencePreset } from '@zenixui/core';
import { OceanScene } from '@zenixui/scenes';
import { OceanEffect } from '@zenixui/effects';
import './theme.css';

export const oceanPreset: ExperiencePreset = {
  metadata: {
    id: 'ocean',
    name: 'Ocean',
    description: 'A deep, tranquil oceanic experience.',
    defaultMotion: 'normal',
    capabilities: ['glass', 'waves', 'particles', 'gradient', 'ambient-motion'],
    assets: {
      wave: '/assets/ocean-wave.svg',
    }
  },
  themeClass: 'zx-theme-ocean',
  SceneComponent: OceanScene,
  EffectComponent: OceanEffect,
};

// Auto-register upon import
registerPreset(oceanPreset);

export default oceanPreset;
```

## packages/packs/ocean/src/theme.css

```text
.zx-theme-ocean {
  --zx-background: #020617; /* Slate 950 */
  --zx-surface: #0f172a;    /* Slate 900 */
  --zx-elevated: #1e293b;   /* Slate 800 */
  --zx-glass: rgba(15, 23, 42, 0.7);
  --zx-overlay: rgba(2, 6, 23, 0.8);
  --zx-accent: #38bdf8;     /* Sky 400 */
  --zx-primary: #f8fafc;    /* Slate 50 */
  
  /* Apply defaults */
  background-color: var(--zx-background);
  color: var(--zx-primary);
}
```

## packages/packs/zenix/package.json

```json
{
  "name": "@zenixui/pack-zenix",
  "version": "0.0.0",
  "main": "src/index.ts",
  "dependencies": {
    "@zenixui/core": "workspace:*"
  }
}
```

## packages/packs/zenix/src/index.ts

```typescript
import { registerPreset } from '@zenixui/core';
import type { ExperiencePreset } from '@zenixui/core';
import './tokens.css';

export const zenixPreset: ExperiencePreset = {
  metadata: {
    id: 'zenix',
    name: 'Zenix',
    description: 'The flagship minimal SaaS experience.',
    defaultMotion: 'subtle',
    capabilities: ['minimal'],
    assets: {}
  },
  themeClass: 'zx-theme-zenix'
};

// Zenix is extremely minimal, no heavy scenes or effects by default.
// It relies purely on geometry, typography, and shadow.

registerPreset(zenixPreset);

export default zenixPreset;
```

## packages/packs/zenix/src/tokens.css

```text
[data-zx-theme="zenix"] {
  /* Colors - Light Mode Default */
  --zx-background: #ffffff;
  --zx-surface: #fafafa;
  --zx-elevated: #f4f4f5;
  --zx-primary: #111111;
  --zx-accent: #000000;
  
  /* The Zenix Look - Curvature & Geometry */
  --zx-radius: 20px;
  --zx-radius-sm: 12px;
  --zx-radius-lg: 24px;
  --zx-radius-round: 9999px;
  
  /* The Zenix Look - Shadows */
  --zx-shadow-sm: 0 2px 8px rgba(0,0,0,0.04);
  --zx-shadow-md: 0 8px 24px rgba(0,0,0,0.06);
  --zx-shadow-lg: 0 16px 48px rgba(0,0,0,0.08);
  
  /* The Zenix Look - Glassmorphism */
  --zx-glass-bg: rgba(255, 255, 255, 0.6);
  --zx-glass-border: rgba(0, 0, 0, 0.05);
  --zx-glass-blur: blur(20px);
  --zx-glass-shadow: 0 4px 24px rgba(0,0,0,0.04);
  
  /* Typography */
  --zx-font-sans: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  --zx-font-mono: 'Geist Mono', 'JetBrains Mono', monospace;
  
  /* Base Variables Mapping */
  color: var(--zx-primary);
  background-color: var(--zx-background);
  font-family: var(--zx-font-sans);
}

@media (prefers-color-scheme: dark) {
  [data-zx-theme="zenix"] {
    --zx-background: #000000;
    --zx-surface: #0a0a0a;
    --zx-elevated: #111111;
    --zx-primary: #ffffff;
    --zx-accent: #ffffff;
    
    --zx-shadow-sm: 0 2px 8px rgba(0,0,0,1);
    --zx-shadow-md: 0 8px 24px rgba(0,0,0,1);
    --zx-shadow-lg: 0 16px 48px rgba(0,0,0,1);
    
    --zx-glass-bg: rgba(20, 20, 20, 0.6);
    --zx-glass-border: rgba(255, 255, 255, 0.05);
  }
}
```

## packages/react/package.json

```json
{
  "name": "@zenixui/react",
  "version": "0.1.0",
  "private": true,
  "type": "module",
  "main": "dist/index.js",
  "module": "dist/index.mjs",
  "types": "dist/index.d.ts",
  "exports": {
    ".": "./src/index.ts",
    "./styles.css": "./src/styles.css"
  },
  "scripts": {},
  "dependencies": {
    "@zenixui/components": "workspace:*",
    "@zenixui/core": "workspace:*",
    "@zenixui/effects": "workspace:*",
    "@zenixui/scenes": "workspace:*"
  }
}
```

## packages/react/src/index.ts

```typescript
export * from '@zenixui/core';
export * from '@zenixui/components';
```

## packages/react/src/styles.css

```text
/* 
 * ZenixUI Core Styles 
 * Imports this file once at the root of the app.
 */

/* Reduced Motion Pipeline */
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}

.zx-experience {
  /* Provide baseline system fallbacks if no preset is loaded */
  --zx-background: #ffffff;
  --zx-surface: #f3f4f6;
  --zx-elevated: #ffffff;
  --zx-glass: rgba(255,255,255,0.7);
  --zx-overlay: rgba(0,0,0,0.8);
  --zx-accent: #3b82f6;
  --zx-primary: #111827;
  
  font-family: system-ui, -apple-system, sans-serif;
}
```

## packages/react/tsup.config.ts

```typescript
import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['src/index.ts'],
  format: ['cjs', 'esm'],
  dts: true,
  clean: true,
  external: ['react', 'react-dom', '@zenixui/core'],
});
```

## packages/scenes/package.json

```json
{
  "name": "@zenixui/scenes",
  "version": "0.1.0",
  "private": true,
  "type": "module",
  "main": "src/index.ts",
  "types": "src/index.ts",
  "scripts": {}
}
```

## packages/scenes/src/AutumnScene.tsx

```tsx
export function AutumnScene() {
  return (
    <div 
      className="zx-scene-autumn"
      style={{
        position: 'absolute',
        inset: 0,
        background: 'radial-gradient(circle at 50% 0%, var(--zx-surface) 0%, var(--zx-background) 100%)',
        zIndex: 0,
      }}
    />
  );
}
```

## packages/scenes/src/NightCityScene.tsx

```tsx
export function NightCityScene() {
  return (
    <div 
      className="zx-scene-night-city"
      style={{
        position: 'absolute',
        inset: 0,
        background: 'linear-gradient(180deg, #09090b 0%, #18181b 100%)',
        zIndex: 0,
      }}
    >
      <div 
        style={{
          position: 'absolute',
          bottom: 0,
          width: '100%',
          height: '40%',
          display: 'flex',
          alignItems: 'flex-end',
          gap: '2px',
          opacity: 0.3
        }}
      >
        <div style={{ width: '10%', height: '80%', background: 'var(--zx-accent)' }}></div>
        <div style={{ width: '15%', height: '100%', background: 'var(--zx-elevated)' }}></div>
        <div style={{ width: '8%', height: '50%', background: 'var(--zx-accent)' }}></div>
        <div style={{ width: '20%', height: '90%', background: 'var(--zx-elevated)' }}></div>
        <div style={{ width: '12%', height: '70%', background: 'var(--zx-accent)' }}></div>
        <div style={{ width: '25%', height: '60%', background: 'var(--zx-elevated)' }}></div>
        <div style={{ width: '10%', height: '85%', background: 'var(--zx-accent)' }}></div>
      </div>
    </div>
  );
}
```

## packages/scenes/src/OceanScene.tsx

```tsx
export function OceanScene() {
  return (
    <div 
      className="zx-scene-ocean"
      style={{
        position: 'absolute',
        inset: 0,
        background: 'linear-gradient(180deg, var(--zx-background) 0%, var(--zx-surface) 100%)',
        zIndex: 0,
      }}
    >
      <svg 
        style={{ position: 'absolute', bottom: 0, width: '100%', height: 'auto' }} 
        viewBox="0 0 1440 320" 
        preserveAspectRatio="none"
      >
        <path fill="var(--zx-accent)" fillOpacity="0.2" d="M0,192L48,197.3C96,203,192,213,288,229.3C384,245,480,267,576,250.7C672,235,768,181,864,181.3C960,181,1056,235,1152,234.7C1248,235,1344,181,1392,154.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
      </svg>
    </div>
  );
}
```

## packages/scenes/src/index.ts

```typescript
export * from './OceanScene';
export * from './NightCityScene';
export * from './AutumnScene';
```

## pnpm-workspace.yaml

```text
packages:
  - 'packages/*'
  - 'packages/packs/*'
  - 'apps/*'
allowBuilds:
  esbuild: set this to true or false
  sharp: set this to true or false
  unrs-resolver: set this to true or false
```

## scripts/test-cli.sh

```text
#!/bin/bash
set -e

echo "======================================"
echo "🚀 ZenixUI CLI Validation & Timing Test"
echo "======================================"

MONOREPO_ROOT=$(pwd)
TEST_DIR="/tmp/test-next-app"

# 1. Clean previous test
rm -rf $TEST_DIR

START_TIME=$(date +%s)

# 2. Scaffold clean Next.js app
echo -e "\n[1/5] Scaffolding clean Next.js application..."
cd /tmp
npx create-next-app@latest $TEST_DIR --typescript --tailwind --eslint --app --src-dir --import-alias "@/*" --use-npm

cd $TEST_DIR

# 3. Install local dependencies (simulates registry installation)
echo -e "\n[2/5] Installing @zenixui packages from local monorepo..."
npm install "file:$MONOREPO_ROOT/packages/react" \
            "file:$MONOREPO_ROOT/packages/core" \
            "file:$MONOREPO_ROOT/packages/components"

# 4. Initialize CLI
echo -e "\n[3/5] Running ZenixUI CLI Init..."
INIT_START=$(date +%s)
# We mock the prompts using a JSON config since we can't easily script interactive prompts
cat << 'EOF' > zenix.json
{
  "framework": "next",
  "experiencesDir": "src/experiences",
  "defaultTheme": "night-city"
}
EOF
mkdir -p src/experiences
INIT_END=$(date +%s)

# 5. Add Experience
echo -e "\n[4/5] Running ZenixUI CLI Add..."
ADD_START=$(date +%s)
# Call the local CLI
npx tsx "$MONOREPO_ROOT/packages/cli/src/index.ts" add night-city-portfolio
ADD_END=$(date +%s)

# 6. Inject into Next.js App
echo -e "\n[5/5] Injecting experience into layout and page..."
cat << 'EOF' > src/app/layout.tsx
import { Experience } from '@zenixui/react';
import './globals.css';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Experience preset="night-city">
          {children}
        </Experience>
      </body>
    </html>
  );
}
EOF

cat << 'EOF' > src/app/page.tsx
import { NightCityPortfolio } from '@/experiences/NightCityPortfolio';

export default function Home() {
  return (
    <main>
      <NightCityPortfolio />
    </main>
  );
}
EOF

# Configure Next.js to transpile the raw TS packages from local workspace
cat << 'EOF' > next.config.ts
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  transpilePackages: ['@zenixui/react', '@zenixui/core', '@zenixui/components'],
};

export default nextConfig;
EOF

# Ensure lucide-react is installed since components might use it
npm install lucide-react

BUILD_START=$(date +%s)
echo -e "\n🔥 Running Production Build (Verifies dependencies & SSR rendering)..."
npm run build
BUILD_END=$(date +%s)

END_TIME=$(date +%s)

echo -e "\n✅ Validation Successful! The experience compiled and rendered flawlessly."

echo -e "\n⏱️  Timing Metrics (Time-To-First-Experience):"
echo "--------------------------------------"
echo "Init Time:    $((INIT_END - INIT_START))s"
echo "Add Time:     $((ADD_END - ADD_START))s"
echo "Build Time:   $((BUILD_END - BUILD_START))s"
echo "Total Time:   $((END_TIME - START_TIME))s"
echo "--------------------------------------"
```

