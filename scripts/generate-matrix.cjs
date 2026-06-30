const fs = require('fs');
const path = require('path');

const base = 'apps/website/src/lib/launchpad';

// Directories
['industries', 'experiences', 'brands', 'aesthetics'].forEach(dir => {
  fs.mkdirSync(path.join(base, dir), { recursive: true });
});

// types.ts
const typesCode = `
export interface Industry {
  id: string;
  name: string;
}

export interface Aesthetic {
  id: string;
  name: string;
  description: string;
}

export interface BrandPack {
  id: string;
  name: string;
  mood: string;
  image: string;
  usedFor: string[];
  colors: {
    primary: string;
    surface: string;
    background: string;
  };
}

export interface Variant {
  id: string;
  name: string;
  blueprintIdMap: Partial<Record<string, string>>;
}

export interface Experience {
  id: string;
  name: string;
  industryId: string;
  description: string;
  perfectFor: string[];
  averageSetupTime: string;
  variants: Variant[];
  includes: {
    outcomes: string[];
    technicalDetails: {
      files: number;
      components: number;
      sections: number;
    }
  };
  coverImage: string;
  rating: number;
  similarExperiences: string[];
}
`;
fs.writeFileSync(path.join(base, 'types.ts'), typesCode);

// industries
const industries = [
  { id: 'education', name: 'Education' },
  { id: 'healthcare', name: 'Healthcare' },
  { id: 'ecommerce', name: 'Ecommerce' },
  { id: 'personal', name: 'Personal' },
  { id: 'business', name: 'Business' },
  { id: 'creator', name: 'Creator' },
  { id: 'interactive', name: 'Interactive' },
  { id: 'dashboard', name: 'Dashboard' },
  { id: 'community', name: 'Community' }
];

let indExports = '';
industries.forEach(ind => {
  const code = `import { Industry } from '../types';\n\nexport const ${ind.id.replace('-', '_')}: Industry = { id: '${ind.id}', name: '${ind.name}' };\n`;
  fs.writeFileSync(path.join(base, 'industries', `${ind.id}.ts`), code);
  indExports += `export * from './${ind.id}';\n`;
});
fs.writeFileSync(path.join(base, 'industries', 'index.ts'), indExports);

// aesthetics
const aesthetics = [
  { id: 'glass', name: 'Glass', desc: 'blur, transparency, floating, soft shadows' },
  { id: 'minimal', name: 'Minimal', desc: 'clean lines, whitespace, high contrast' },
  { id: 'apple', name: 'Apple', desc: 'precision, minimal spacing, clean typography, gentle depth' },
  { id: 'terminal', name: 'Terminal', desc: 'monospace, CLI, ASCII, green phosphor' },
  { id: 'editorial', name: 'Editorial', desc: 'large typography, magazine rhythm, high whitespace, photography first' },
  { id: 'cyberpunk', name: 'Cyberpunk', desc: 'glow, neon, motion, noise' },
  { id: 'neo-brutalism', name: 'Neo Brutalism', desc: 'thick borders, playful layouts, loud colors, hard shadows' }
];

let aesExports = '';
aesthetics.forEach(aes => {
  const code = `import { Aesthetic } from '../types';\n\nexport const ${aes.id.replace('-', '_')}: Aesthetic = { id: '${aes.id}', name: '${aes.name}', description: '${aes.desc}' };\n`;
  fs.writeFileSync(path.join(base, 'aesthetics', `${aes.id}.ts`), code);
  aesExports += `export * from './${aes.id}';\n`;
});
fs.writeFileSync(path.join(base, 'aesthetics', 'index.ts'), aesExports);

// brands
const brands = [
  { id: 'tiffany', name: 'Tiffany', mood: 'Modern Startup', image: '/previews/brand-packs/media__1782817898804.png', usedFor: ['Fintech', 'Healthcare'], primary: '#21F1A8', surface: '#171717', bg: '#09090B' },
  { id: 'sand', name: 'Sand', mood: 'Architecture', image: '/previews/brand-packs/media__1782817898846.png', usedFor: ['Architecture', 'Luxury'], primary: '#004741', surface: '#F0EDE4', bg: '#FAFAF8' },
  { id: 'charcoal-violet', name: 'Charcoal Violet', mood: 'AI & Cyberpunk', image: '/previews/brand-packs/media__1782817898832.png', usedFor: ['Gaming', 'AI'], primary: '#B6FF00', surface: '#3C1A47', bg: '#1A0B1E' },
  { id: 'lime', name: 'Lime', mood: 'Organic', image: '/previews/brand-packs/media__1782817898858.png', usedFor: ['NGO', 'Food'], primary: '#E4FD97', surface: '#2D3E2C', bg: '#1B261A' },
  { id: 'true-pink', name: 'True Pink', mood: 'Fashion', image: '/previews/brand-packs/media__1782817898818.png', usedFor: ['Cosmetics', 'Lifestyle'], primary: '#FD1843', surface: '#FFF9FA', bg: '#FFFFFF' }
];

let brandExports = '';
brands.forEach(br => {
  const code = `import { BrandPack } from '../types';\n\nexport const ${br.id.replace('-', '_')}: BrandPack = { id: '${br.id}', name: '${br.name}', mood: '${br.mood}', image: '${br.image}', usedFor: ${JSON.stringify(br.usedFor)}, colors: { primary: '${br.primary}', surface: '${br.surface}', background: '${br.bg}' } };\n`;
  fs.writeFileSync(path.join(base, 'brands', `${br.id}.ts`), code);
  brandExports += `export * from './${br.id}';\n`;
});
fs.writeFileSync(path.join(base, 'brands', 'index.ts'), brandExports);

// experiences
const exps = [
  { id: 'student-portfolio', name: 'Student Portfolio', ind: 'education', desc: 'Get hired faster.', perfect: ['Final year students', 'Internships', 'Placements', 'Graduate applications'], variants: [{id: 'modern', name: 'Modern', blueprintIdMap: {'glass': 'ocean-portfolio', 'minimal': 'zenix-portfolio', 'terminal': 'midnight-portfolio'}}], files: 18, comp: 32, sec: 14 },
  { id: 'developer-portfolio', name: 'Developer Portfolio', ind: 'personal', desc: 'Robust technical portfolio.', perfect: ['Software Engineers', 'Open Source Maintainers'], variants: [{id: 'terminal', name: 'Terminal CLI', blueprintIdMap: {'terminal': 'midnight-portfolio', 'cyberpunk': 'midnight-portfolio'}}], files: 24, comp: 45, sec: 18 },
  { id: 'agency', name: 'Agency', ind: 'business', desc: 'High-end agency layout.', perfect: ['Creative Agencies', 'Studios'], variants: [{id: 'creative', name: 'Creative', blueprintIdMap: {'glass': 'ocean-portfolio', 'editorial': 'autumn-portfolio'}}], files: 20, comp: 38, sec: 15 },
  { id: 'magazine', name: 'Magazine', ind: 'creator', desc: 'Editorial layout.', perfect: ['Writers', 'Publishers'], variants: [{id: 'editorial', name: 'Editorial', blueprintIdMap: {'editorial': 'autumn-portfolio'}}], files: 14, comp: 20, sec: 10 }
];

let expExports = '';
exps.forEach(exp => {
  const code = `import { Experience } from '../types';\n\nexport const ${exp.id.replace('-', '_')}: Experience = { id: '${exp.id}', name: '${exp.name}', industryId: '${exp.ind}', description: '${exp.desc}', perfectFor: ${JSON.stringify(exp.perfect)}, averageSetupTime: '3 minutes', variants: ${JSON.stringify(exp.variants)}, includes: { outcomes: ['Homepage', 'About', 'Blog', 'Contact', 'SEO', 'Mobile Ready'], technicalDetails: { files: ${exp.files}, components: ${exp.comp}, sections: ${exp.sec} } }, coverImage: '/previews/glass-header.png', rating: 5.0, similarExperiences: [] };\n`;
  fs.writeFileSync(path.join(base, 'experiences', `${exp.id}.ts`), code);
  expExports += `export * from './${exp.id}';\n`;
});
fs.writeFileSync(path.join(base, 'experiences', 'index.ts'), expExports);

// Root index.ts
fs.writeFileSync(path.join(base, 'index.ts'), `
export * from './types';
export * from './industries';
export * from './aesthetics';
export * from './brands';
export * from './experiences';

import * as industries from './industries';
import * as aesthetics from './aesthetics';
import * as brands from './brands';
import * as experiences from './experiences';

export const INDUSTRIES = Object.values(industries);
export const AESTHETICS = Object.values(aesthetics);
export const BRAND_PACKS = Object.values(brands);
export const EXPERIENCES = Object.values(experiences);
`);

console.log('Successfully generated modular data layer!');
