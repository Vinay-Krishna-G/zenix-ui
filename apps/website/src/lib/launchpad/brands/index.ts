import { BrandPack } from '../types';

export const tiffany: BrandPack = {
  id: 'tiffany',
  name: 'Tiffany',
  mood: 'Modern Startup',
  usedFor: ['Fintech', 'Healthcare', 'AI', 'Productivity'],
  image: '/previews/brand-packs/media__1782817898804.png',
  colors: { primary: '#21F1A8', surface: '#171717', background: '#09090B' }
};

export const true_pink: BrandPack = {
  id: 'true_pink',
  name: 'True Pink',
  mood: 'Beauty & Fashion',
  usedFor: ['Cosmetics', 'Influencer', 'Branding', 'Lifestyle'],
  image: '/previews/brand-packs/media__1782817898818.png',
  colors: { primary: '#FD1843', surface: '#FFF9FA', background: '#FFFFFF' }
};

export const charcoal_violet: BrandPack = {
  id: 'charcoal_violet',
  name: 'Charcoal Violet',
  mood: 'AI & Cyberpunk',
  usedFor: ['Gaming', 'Web3', 'AI', 'Music'],
  image: '/previews/brand-packs/media__1782817898832.png',
  colors: { primary: '#B6FF00', surface: '#3C1A47', background: '#1A0B1E' }
};

export const sand: BrandPack = {
  id: 'sand',
  name: 'Sand',
  mood: 'Architecture & Luxury',
  usedFor: ['Architecture', 'Interior Design', 'Hotel', 'Editorial'],
  image: '/previews/brand-packs/media__1782817898846.png',
  colors: { primary: '#004741', surface: '#F0EDE4', background: '#FAFAF8' }
};

export const lime_sprout: BrandPack = {
  id: 'lime_sprout',
  name: 'Lime Sprout',
  mood: 'Organic & Nature',
  usedFor: ['NGO', 'Sustainability', 'Food', 'Agriculture'],
  image: '/previews/brand-packs/media__1782817898858.png',
  colors: { primary: '#E4FD97', surface: '#2D3E2C', background: '#1B261A' }
};

export const BRAND_PACKS: Record<string, BrandPack> = {
  tiffany,
  true_pink,
  charcoal_violet,
  sand,
  lime_sprout
};
