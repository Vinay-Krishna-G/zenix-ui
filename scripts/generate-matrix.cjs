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
  marketingCopy: string;
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
  launches: string;
  tags: string[]; // e.g. "Trending", "Editor's Pick"
  similarExperiences: string[];
}
`;
fs.writeFileSync(path.join(base, 'types.ts'), typesCode);

// industries
const industries = [
  { id: 'creator', name: 'Creator Economy' },
  { id: 'startup', name: 'Startups & AI' },
  { id: 'local', name: 'Local Business' },
  { id: 'studio', name: 'Agencies & Studios' },
  { id: 'health', name: 'Health & Wellness' }
];

let indExports = '';
industries.forEach(ind => {
  const code = `import { Industry } from '../types';\n\nexport const ${ind.id.replace('-', '_')}: Industry = { id: '${ind.id}', name: '${ind.name}' };\n`;
  fs.writeFileSync(path.join(base, 'industries', `${ind.id}.ts`), code);
  indExports += `export * from './${ind.id}';\n`;
});
fs.writeFileSync(path.join(base, 'industries', 'index.ts'), indExports);

// aesthetics (Design Languages)
const aesthetics = [
  { id: 'zenix-pure', name: 'Zenix Pure', desc: 'Precision, minimal spacing, clean typography' },
  { id: 'zenix-air', name: 'Zenix Air', desc: 'Glassmorphism, blur, floating elements' },
  { id: 'obsidian', name: 'Obsidian', desc: 'Luxury, deep blacks, high contrast' },
  { id: 'nova', name: 'Nova', desc: 'Neon glows, dark mode, futuristic' },
  { id: 'bloom', name: 'Bloom', desc: 'Organic shapes, editorial rhythm' },
  { id: 'zenix-command', name: 'Zenix Command', desc: 'Terminal, monospace, CLI, green phosphor' }
];

let aesExports = '';
aesthetics.forEach(aes => {
  const code = `import { Aesthetic } from '../types';\n\nexport const ${aes.id.replace('-', '_')}: Aesthetic = { id: '${aes.id}', name: '${aes.name}', description: '${aes.desc}' };\n`;
  fs.writeFileSync(path.join(base, 'aesthetics', `${aes.id}.ts`), code);
  aesExports += `export * from './${aes.id}';\n`;
});
fs.writeFileSync(path.join(base, 'aesthetics', 'index.ts'), aesExports);

// brands (Brand Packs)
const brands = [
  { id: 'ocean', name: 'Ocean', mood: 'Modern Startup', image: '/previews/brand-packs/media__1782817898804.png', usedFor: ['Fintech', 'SaaS'], primary: '#5E6AD2', surface: '#111113', bg: '#09090B' },
  { id: 'emerald', name: 'Emerald', mood: 'Architecture', image: '/previews/brand-packs/media__1782817898846.png', usedFor: ['Architecture', 'Luxury'], primary: '#22C55E', surface: '#111113', bg: '#09090B' },
  { id: 'neon', name: 'Neon', mood: 'AI & Cyberpunk', image: '/previews/brand-packs/media__1782817898832.png', usedFor: ['Gaming', 'AI'], primary: '#B6FF00', surface: '#1A0B1E', bg: '#09090B' },
  { id: 'sunset', name: 'Sunset', mood: 'Organic', image: '/previews/brand-packs/media__1782817898858.png', usedFor: ['Lifestyle', 'Food'], primary: '#F59E0B', surface: '#111113', bg: '#09090B' },
  { id: 'monochrome', name: 'Monochrome', mood: 'Editorial', image: '/previews/brand-packs/media__1782817898818.png', usedFor: ['Portfolios', 'Agencies'], primary: '#FAFAFA', surface: '#111113', bg: '#09090B' }
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
  { id: 'student-portfolio', personality: 'ATLAS', name: 'Launch Your Career', ind: 'creator', promise: 'Get shortlisted faster.', mktg: 'Designed for placements, internships and graduate applications. Deploy in under 3 minutes.', desc: 'Your digital resume, designed to land you the interview.', perfect: ['Final year students', 'Placements', 'Fresh graduates'], variants: [{id: 'modern', name: 'Modern', blueprintIdMap: {'zenix-air': 'ocean-portfolio', 'zenix-pure': 'zenix-portfolio'}}], files: 18, comp: 32, sec: 14, launches: '4,281', tags: ['Trending', "Editor's Pick"] },
  { id: 'developer-portfolio', personality: 'ORBIT', name: 'For Engineers Who Build', ind: 'creator', promise: 'Showcase your system design.', mktg: 'Build impossible things. Present them perfectly. A robust technical portfolio for serious developers.', desc: 'A robust technical portfolio.', perfect: ['Software Engineers', 'Open Source Maintainers'], variants: [{id: 'terminal', name: 'Terminal CLI', blueprintIdMap: {'zenix-command': 'midnight-portfolio'}}], files: 24, comp: 45, sec: 18, launches: '12,940', tags: ['Most Installed'] },
  { id: 'agency', personality: 'STUDIO', name: 'Win Better Clients', ind: 'studio', promise: 'High-end agency layout.', mktg: 'Your work deserves a flawless presentation. Close higher-ticket clients with an immersive digital studio.', desc: 'High-end agency layout.', perfect: ['Creative Agencies', 'Design Studios'], variants: [{id: 'creative', name: 'Creative', blueprintIdMap: {'zenix-air': 'ocean-portfolio'}}], files: 20, comp: 38, sec: 15, launches: '3,102', tags: ['Newest'] },
  { id: 'ai-startup', personality: 'NOVA', name: 'Launch Your AI Startup', ind: 'startup', promise: 'Convert visitors into beta testers.', mktg: 'The future of intelligence requires a future-proof website. Ship your AI wrapper tonight.', desc: 'The future of intelligence.', perfect: ['AI Wrappers', 'SaaS', 'Beta launches'], variants: [{id: 'cyber', name: 'Cyber', blueprintIdMap: {'nova': 'midnight-portfolio'}}], files: 22, comp: 40, sec: 16, launches: '8,432', tags: ['Trending'] },
  { id: 'fine-dining', personality: 'ORIGIN', name: 'Fine Dining Experience', ind: 'local', promise: 'Accept reservations immediately.', mktg: 'An exquisite digital presence for your culinary masterpiece. Take orders and book tables seamlessly.', desc: 'Launch this weekend.', perfect: ['Fine Dining', 'Michelin Star', 'High-end Cafes'], variants: [{id: 'classic', name: 'Classic', blueprintIdMap: {'bloom': 'autumn-portfolio'}}], files: 15, comp: 25, sec: 10, launches: '1,204', tags: [] },
  { id: 'dental-clinic', personality: 'PRISM', name: 'Dental & Health', ind: 'health', promise: 'Book appointments. Build trust.', mktg: 'Show your doctors, manage services, and build patient trust with a clinical, flawless UI.', desc: 'Show your doctors and services.', perfect: ['Dental Clinics', 'Therapists'], variants: [{id: 'clean', name: 'Clean', blueprintIdMap: {'zenix-pure': 'zenix-portfolio'}}], files: 19, comp: 33, sec: 12, launches: '2,890', tags: ['Updated Yesterday'] },
  { id: 'architecture', personality: 'FOUNDRY', name: 'Architecture Firm', ind: 'studio', promise: 'Design deserves beautiful presentation.', mktg: 'Showcase your blueprints and built spaces with a minimalist, structural aesthetic.', desc: 'Minimalist structural presentation.', perfect: ['Architects', 'Interior Designers'], variants: [{id: 'structure', name: 'Structure', blueprintIdMap: {'obsidian': 'zenix-portfolio'}}], files: 21, comp: 34, sec: 14, launches: '930', tags: [] },
  { id: 'creator-brand', personality: 'LUMINA', name: 'The Creator Kit', ind: 'creator', promise: 'Monetize your audience.', mktg: 'Sell courses, digital products, and manage your newsletter from one beautiful hub.', desc: 'Sell courses and digital products.', perfect: ['YouTubers', 'Newsletter Authors'], variants: [{id: 'vibrant', name: 'Vibrant', blueprintIdMap: {'zenix-air': 'ocean-portfolio'}}], files: 30, comp: 50, sec: 22, launches: '5,120', tags: ['Trending'] },
];

let expExports = '';
exps.forEach(exp => {
  const code = `import { Experience } from '../types';\n\nexport const ${exp.id.replace('-', '_')}: Experience = { id: '${exp.id}', personality: '${exp.personality}', name: '${exp.name}', industryId: '${exp.ind}', promise: '${exp.promise}', marketingCopy: '${exp.mktg}', description: '${exp.desc}', perfectFor: ${JSON.stringify(exp.perfect)}, averageSetupTime: '3 min', variants: ${JSON.stringify(exp.variants)}, includes: { outcomes: ['Homepage', 'Pricing', 'Dashboard', 'Blog', 'Contact', 'SEO', 'Mobile Ready', 'Dark Mode'], technicalDetails: { files: ${exp.files}, components: ${exp.comp}, sections: ${exp.sec} } }, coverImage: '/previews/glass-header.png', rating: 5.0, launches: '${exp.launches}', tags: ${JSON.stringify(exp.tags)}, similarExperiences: [] };\n`;
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
