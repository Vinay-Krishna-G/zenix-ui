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
  personality: string;
  name: string;
  industryId: string;
  promise: string;
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
  { id: 'community', name: 'Community' },
  { id: 'ai', name: 'AI & SaaS' }
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
  { id: 'student-portfolio', personality: 'Atlas', name: 'Student Portfolio', ind: 'education', promise: 'Get shortlisted faster.', desc: 'Your digital resume, designed to land you the interview.', perfect: ['Final year students', 'Placements', 'MS applications', 'Fresh graduates'], variants: [{id: 'modern', name: 'Modern', blueprintIdMap: {'glass': 'ocean-portfolio', 'minimal': 'zenix-portfolio', 'terminal': 'midnight-portfolio'}}], files: 18, comp: 32, sec: 14 },
  { id: 'developer-portfolio', personality: 'Vertex', name: 'Developer Portfolio', ind: 'personal', promise: 'Showcase your system design.', desc: 'A robust technical portfolio.', perfect: ['Software Engineers', 'Open Source Maintainers'], variants: [{id: 'terminal', name: 'Terminal CLI', blueprintIdMap: {'terminal': 'midnight-portfolio', 'cyberpunk': 'midnight-portfolio'}}], files: 24, comp: 45, sec: 18 },
  { id: 'agency', personality: 'Nova', name: 'Agency Website', ind: 'business', promise: 'Close higher-ticket clients.', desc: 'High-end agency layout.', perfect: ['Creative Agencies', 'Studios'], variants: [{id: 'creative', name: 'Creative', blueprintIdMap: {'glass': 'ocean-portfolio', 'editorial': 'autumn-portfolio'}}], files: 20, comp: 38, sec: 15 },
  { id: 'ai-startup', personality: 'Pulse', name: 'AI Startup', ind: 'ai', promise: 'Convert visitors into beta testers.', desc: 'The future of intelligence.', perfect: ['AI Wrappers', 'SaaS', 'Beta launches'], variants: [{id: 'cyber', name: 'Cyber', blueprintIdMap: {'cyberpunk': 'midnight-portfolio', 'glass': 'ocean-portfolio'}}], files: 22, comp: 40, sec: 16 },
  { id: 'restaurant', personality: 'Origin', name: 'Restaurant', ind: 'business', promise: 'Take online orders. Accept reservations.', desc: 'Launch this weekend.', perfect: ['Local Restaurants', 'Cafes', 'Fine Dining'], variants: [{id: 'classic', name: 'Classic', blueprintIdMap: {'editorial': 'autumn-portfolio'}}], files: 15, comp: 25, sec: 10 },
  { id: 'healthcare', personality: 'Prism', name: 'Healthcare', ind: 'healthcare', promise: 'Book appointments. Build trust.', desc: 'Show your doctors and services.', perfect: ['Clinics', 'Dentists', 'Therapists'], variants: [{id: 'clean', name: 'Clean', blueprintIdMap: {'minimal': 'zenix-portfolio'}}], files: 19, comp: 33, sec: 12 },
];

let expExports = '';
exps.forEach(exp => {
  const code = `import { Experience } from '../types';\n\nexport const ${exp.id.replace('-', '_')}: Experience = { id: '${exp.id}', personality: '${exp.personality}', name: '${exp.name}', industryId: '${exp.ind}', promise: '${exp.promise}', description: '${exp.desc}', perfectFor: ${JSON.stringify(exp.perfect)}, averageSetupTime: '3 minutes', variants: ${JSON.stringify(exp.variants)}, includes: { outcomes: ['Homepage', 'About', 'Blog', 'Contact', 'SEO', 'Mobile Ready', 'Animations', 'Dark Mode'], technicalDetails: { files: ${exp.files}, components: ${exp.comp}, sections: ${exp.sec} } }, coverImage: '/previews/glass-header.png', rating: 5.0, similarExperiences: [] };\n`;
  fs.writeFileSync(path.join(base, 'experiences', `${exp.id.replace('-', '_')}.ts`), code);
  expExports += `export * from './${exp.id.replace('-', '_')}';\n`;
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
