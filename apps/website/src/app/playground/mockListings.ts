import { blueprints } from '@zenixui/blueprints';

export interface ExperienceListing {
  id: string;
  blueprintId: string;
  name: string;
  creator: string;
  rating: number;
  installs: number;
  premium: boolean;
  featured: boolean;
  verified: boolean;
  collectionIds: string[];
  industries: string[];
  publishedAt: Date;
}

// Generate realistic mock listings from the existing blueprints
export const mockListings: ExperienceListing[] = blueprints.map((bp, index) => ({
  id: `listing-${bp.id}`,
  blueprintId: bp.id,
  name: bp.title,
  creator: index % 2 === 0 ? 'ZenixUI Team' : 'Community',
  rating: 4.5 + (Math.random() * 0.5), // 4.5 - 5.0
  installs: Math.floor(Math.random() * 10000) + 500,
  premium: index % 3 === 0,
  featured: index === 0,
  verified: true,
  collectionIds: ['startup', 'luxury'],
  industries: ['SaaS', 'Agency'],
  publishedAt: new Date(Date.now() - Math.random() * 10000000000),
}));
