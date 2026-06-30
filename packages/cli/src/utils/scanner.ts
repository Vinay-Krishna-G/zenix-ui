import fs from 'fs';
import path from 'path';

export interface ProjectDNA {
  framework: string;
  tailwind: number | false;
  colors: {
    primary: string | null;
    surface: string | null;
  };
  radius: string | null;
  spacing: string | null;
  font: string | null;
  darkMode: boolean;
}

function detectFramework(pkgJson: any): string {
  const deps = { ...pkgJson.dependencies, ...pkgJson.devDependencies };
  if (deps['next']) return 'next';
  if (deps['vite']) return 'vite';
  if (deps['@remix-run/react']) return 'remix';
  if (deps['astro']) return 'astro';
  return 'unknown';
}

function detectTailwindVersion(pkgJson: any): number | false {
  const deps = { ...pkgJson.dependencies, ...pkgJson.devDependencies };
  const tw = deps['tailwindcss'];
  if (!tw) return false;
  if (tw.includes('4.')) return 4;
  if (tw.includes('3.')) return 3;
  return true; // Unknown version but installed
}

function parseCssVariables(cssContent: string) {
  const vars: Record<string, string> = {};
  const regex = /--([a-zA-Z0-9-]+):\s*([^;]+);/g;
  let match;
  while ((match = regex.exec(cssContent)) !== null) {
    vars[`--${match[1]}`] = match[2].trim();
  }
  return vars;
}

export function scanProject(cwd: string): ProjectDNA {
  const dna: ProjectDNA = {
    framework: 'unknown',
    tailwind: false,
    colors: { primary: null, surface: null },
    radius: null,
    spacing: null,
    font: null,
    darkMode: false,
  };

  const pkgPath = path.join(cwd, 'package.json');
  if (fs.existsSync(pkgPath)) {
    try {
      const pkgJson = JSON.parse(fs.readFileSync(pkgPath, 'utf-8'));
      dna.framework = detectFramework(pkgJson);
      dna.tailwind = detectTailwindVersion(pkgJson);
    } catch (e) {
      // Ignore parse errors
    }
  }

  // Attempt to find globals.css
  const possibleCssPaths = [
    'src/app/globals.css',
    'app/globals.css',
    'src/index.css',
    'src/styles/globals.css',
    'styles/globals.css'
  ];

  let cssContent = '';
  for (const p of possibleCssPaths) {
    const fullPath = path.join(cwd, p);
    if (fs.existsSync(fullPath)) {
      cssContent += fs.readFileSync(fullPath, 'utf-8') + '\n';
    }
  }

  if (cssContent) {
    const cssVars = parseCssVariables(cssContent);
    // Heuristics for shadcn or generic project tokens
    dna.colors.primary = cssVars['--primary'] || cssVars['--color-primary'] || null;
    dna.colors.surface = cssVars['--background'] || cssVars['--color-background'] || cssVars['--surface'] || null;
    dna.radius = cssVars['--radius'] || cssVars['--border-radius'] || null;
    
    if (cssContent.includes('.dark') || cssContent.includes('@media (prefers-color-scheme: dark)')) {
      dna.darkMode = true;
    }
  }

  // Check tailwind.config.*
  const twConfigPath = path.join(cwd, 'tailwind.config.ts') || path.join(cwd, 'tailwind.config.js');
  if (fs.existsSync(twConfigPath)) {
    const twContent = fs.readFileSync(twConfigPath, 'utf-8');
    // Basic heuristic search if not found in CSS
    if (!dna.font && twContent.includes('fontFamily:')) {
      dna.font = 'custom';
    }
  }

  // Fallback defaults for demonstration logic
  if (!dna.colors.primary) dna.colors.primary = '#000000';
  if (!dna.radius) dna.radius = '0.5rem';

  return dna;
}
