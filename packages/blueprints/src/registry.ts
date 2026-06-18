import React from 'react';
import { ZenixLanding } from './landings/ZenixLanding';
import { OceanLanding } from './landings/OceanLanding';
import { NightCityLanding } from './landings/NightCityLanding';
import { AutumnLanding } from './landings/AutumnLanding';
import { ZenixPortfolio } from './portfolios/ZenixPortfolio';
import { OceanPortfolio } from './portfolios/OceanPortfolio';
import { NightCityPortfolio } from './portfolios/NightCityPortfolio';
import { AutumnPortfolio } from './portfolios/AutumnPortfolio';

export interface BlueprintMetadata {
  id: string;
  title: string;
  category: 'landing' | 'portfolio' | 'blog' | 'saas';
  theme: string;
  tags: string[];
  component: React.ComponentType;
  sourcePath: string;
  previewImage: string;
}

export const blueprints: BlueprintMetadata[] = [
  {
    id: "zenix-landing",
    title: "Zenix Landing",
    category: "landing",
    theme: "zenix",
    tags: ["saas", "startup", "professional"],
    component: ZenixLanding,
    sourcePath: "packages/blueprints/src/landings/ZenixLanding.tsx",
    previewImage: "/previews/zenix-landing.png"
  },
  {
    id: "ocean-landing",
    title: "Ocean Landing",
    category: "landing",
    theme: "ocean",
    tags: ["fluid", "creative", "deep"],
    component: OceanLanding,
    sourcePath: "packages/blueprints/src/landings/OceanLanding.tsx",
    previewImage: "/previews/ocean-landing.png"
  },
  {
    id: "night-city-landing",
    title: "Night City Landing",
    category: "landing",
    theme: "night-city",
    tags: ["cyberpunk", "neon", "developer"],
    component: NightCityLanding,
    sourcePath: "packages/blueprints/src/landings/NightCityLanding.tsx",
    previewImage: "/previews/night-city-landing.png"
  },
  {
    id: "autumn-landing",
    title: "Autumn Landing",
    category: "landing",
    theme: "autumn",
    tags: ["warm", "organic", "narrative"],
    component: AutumnLanding,
    sourcePath: "packages/blueprints/src/landings/AutumnLanding.tsx",
    previewImage: "/previews/autumn-landing.png"
  },
  {
    id: "zenix-portfolio",
    title: "Zenix Portfolio",
    category: "portfolio",
    theme: "zenix",
    tags: ["professional", "minimal", "developer"],
    component: ZenixPortfolio,
    sourcePath: "packages/blueprints/src/portfolios/ZenixPortfolio.tsx",
    previewImage: "/previews/zenix-portfolio.png"
  },
  {
    id: "ocean-portfolio",
    title: "Ocean Portfolio",
    category: "portfolio",
    theme: "ocean",
    tags: ["designer", "fluid", "creative"],
    component: OceanPortfolio,
    sourcePath: "packages/blueprints/src/portfolios/OceanPortfolio.tsx",
    previewImage: "/previews/ocean-portfolio.png"
  },
  {
    id: "night-city-portfolio",
    title: "Night City Portfolio",
    category: "portfolio",
    theme: "night-city",
    tags: ["terminal", "hacker", "developer"],
    component: NightCityPortfolio,
    sourcePath: "packages/blueprints/src/portfolios/NightCityPortfolio.tsx",
    previewImage: "/previews/night-city-portfolio.png"
  },
  {
    id: "autumn-portfolio",
    title: "Autumn Portfolio",
    category: "portfolio",
    theme: "autumn",
    tags: ["story", "writer", "narrative"],
    component: AutumnPortfolio,
    sourcePath: "packages/blueprints/src/portfolios/AutumnPortfolio.tsx",
    previewImage: "/previews/autumn-portfolio.png"
  }
];

export function getBlueprint(id: string) {
  return blueprints.find(bp => bp.id === id);
}

export function getBlueprintsByCategory(category: string) {
  return blueprints.filter(bp => bp.category === category);
}
