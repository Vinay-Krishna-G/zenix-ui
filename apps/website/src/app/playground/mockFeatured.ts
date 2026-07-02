export interface Framework {
  id: string;
  name: string;
  icon: string;
}

export interface Identity {
  id: string;
  name: string;
}

export interface FeaturedExperience {
  id: string;
  title: string;
  tagline: string;
  shortDescription: string;
  designer: string;
  version: string;
  updatedAt: string;
  category: string;
  featuredReason: string;
  frameworks: Framework[];
  identities: Identity[];
  downloads: number;
  rating: number;
  premium: boolean;
  verified: boolean;
  previewBlueprint: string;
  screenshots: string[];
  actions: {
    primary: string;
    secondary: string;
  };
}

export const mockFeatured: FeaturedExperience = {
  id: 'feat-ocean-landing',
  title: 'Deep, Fluid Experiences',
  tagline: "This week's featured experience",
  shortDescription: 'A tranquil, performance-focused framework that adapts to your needs like water. Build premium SaaS websites instantly.',
  designer: 'Zenix Team',
  version: '3.2',
  updatedAt: '2 days ago',
  category: 'Landing',
  featuredReason: "Editor's Pick",
  frameworks: [
    { id: 'react', name: 'React', icon: '⚛️' },
    { id: 'next', name: 'Next.js', icon: '▲' },
    { id: 'vite', name: 'Vite', icon: '⚡' }
  ],
  identities: [
    { id: 'ocean', name: 'Ocean' },
    { id: 'editorial', name: 'Editorial' },
    { id: 'luxury', name: 'Luxury' }
  ],
  downloads: 12400,
  rating: 4.9,
  premium: true,
  verified: true,
  previewBlueprint: 'ocean-landing',
  screenshots: [],
  actions: {
    primary: 'Open Studio',
    secondary: 'Explore Experience'
  }
};
