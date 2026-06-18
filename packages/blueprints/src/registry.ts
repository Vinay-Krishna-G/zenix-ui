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
  category: 'landing' | 'portfolio' | 'blog' | 'saas' | 'contact' | 'newsletter' | 'auth' | 'dashboard';
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
  },
  {
    id: "zenix-contact",
    title: "Zenix Contact",
    category: "contact",
    theme: "zenix",
    tags: ["form", "minimal", "saas"],
    component: ZenixContact,
    sourcePath: "packages/blueprints/src/contact/ZenixContact.tsx",
    previewImage: "/previews/zenix-contact.png"
  },
  {
    id: "ocean-contact",
    title: "Ocean Contact",
    category: "contact",
    theme: "ocean",
    tags: ["form", "glass", "fluid"],
    component: OceanContact,
    sourcePath: "packages/blueprints/src/contact/OceanContact.tsx",
    previewImage: "/previews/ocean-contact.png"
  },
  {
    id: "night-city-contact",
    title: "Night City Contact",
    category: "contact",
    theme: "night-city",
    tags: ["form", "terminal", "cyberpunk"],
    component: NightCityContact,
    sourcePath: "packages/blueprints/src/contact/NightCityContact.tsx",
    previewImage: "/previews/night-city-contact.png"
  },
  {
    id: "autumn-contact",
    title: "Autumn Contact",
    category: "contact",
    theme: "autumn",
    tags: ["form", "organic", "journal"],
    component: AutumnContact,
    sourcePath: "packages/blueprints/src/contact/AutumnContact.tsx",
    previewImage: "/previews/autumn-contact.png"
  },
  {
    id: "zenix-newsletter",
    title: "Zenix Newsletter",
    category: "newsletter",
    theme: "zenix",
    tags: ["form", "inline", "saas"],
    component: ZenixNewsletter,
    sourcePath: "packages/blueprints/src/newsletter/ZenixNewsletter.tsx",
    previewImage: "/previews/zenix-newsletter.png"
  },
  {
    id: "ocean-newsletter",
    title: "Ocean Newsletter",
    category: "newsletter",
    theme: "ocean",
    tags: ["form", "glass", "inline"],
    component: OceanNewsletter,
    sourcePath: "packages/blueprints/src/newsletter/OceanNewsletter.tsx",
    previewImage: "/previews/ocean-newsletter.png"
  },
  {
    id: "night-city-newsletter",
    title: "Night City Newsletter",
    category: "newsletter",
    theme: "night-city",
    tags: ["form", "terminal", "cyberpunk"],
    component: NightCityNewsletter,
    sourcePath: "packages/blueprints/src/newsletter/NightCityNewsletter.tsx",
    previewImage: "/previews/night-city-newsletter.png"
  },
  {
    id: "autumn-newsletter",
    title: "Autumn Newsletter",
    category: "newsletter",
    theme: "autumn",
    tags: ["form", "organic", "journal"],
    component: AutumnNewsletter,
    sourcePath: "packages/blueprints/src/newsletter/AutumnNewsletter.tsx",
    previewImage: "/previews/autumn-newsletter.png"
  },
  {
    id: "zenix-auth",
    title: "Zenix Auth",
    category: "auth",
    theme: "zenix",
    tags: ["login", "register", "minimal"],
    component: ZenixAuth,
    sourcePath: "packages/blueprints/src/auth/ZenixAuth.tsx",
    previewImage: "/previews/zenix-auth.png"
  },
  {
    id: "ocean-auth",
    title: "Ocean Auth",
    category: "auth",
    theme: "ocean",
    tags: ["login", "glass", "fluid"],
    component: OceanAuth,
    sourcePath: "packages/blueprints/src/auth/OceanAuth.tsx",
    previewImage: "/previews/ocean-auth.png"
  },
  {
    id: "night-city-auth",
    title: "Night City Auth",
    category: "auth",
    theme: "night-city",
    tags: ["login", "terminal", "cyberpunk"],
    component: NightCityAuth,
    sourcePath: "packages/blueprints/src/auth/NightCityAuth.tsx",
    previewImage: "/previews/night-city-auth.png"
  },
  {
    id: "autumn-auth",
    title: "Autumn Auth",
    category: "auth",
    theme: "autumn",
    tags: ["login", "organic", "story"],
    component: AutumnAuth,
    sourcePath: "packages/blueprints/src/auth/AutumnAuth.tsx",
    previewImage: "/previews/autumn-auth.png"
  },
  {
    id: "zenix-blog",
    title: "Zenix Blog",
    category: "blog",
    theme: "zenix",
    tags: ["content", "article", "minimal"],
    component: ZenixBlog,
    sourcePath: "packages/blueprints/src/blog/ZenixBlog.tsx",
    previewImage: "/previews/zenix-blog.png"
  },
  {
    id: "ocean-blog",
    title: "Ocean Blog",
    category: "blog",
    theme: "ocean",
    tags: ["content", "article", "glass"],
    component: OceanBlog,
    sourcePath: "packages/blueprints/src/blog/OceanBlog.tsx",
    previewImage: "/previews/ocean-blog.png"
  },
  {
    id: "night-city-blog",
    title: "Night City Blog",
    category: "blog",
    theme: "night-city",
    tags: ["content", "terminal", "cyberpunk"],
    component: NightCityBlog,
    sourcePath: "packages/blueprints/src/blog/NightCityBlog.tsx",
    previewImage: "/previews/night-city-blog.png"
  },
  {
    id: "autumn-blog",
    title: "Autumn Blog",
    category: "blog",
    theme: "autumn",
    tags: ["content", "journal", "story"],
    component: AutumnBlog,
    sourcePath: "packages/blueprints/src/blog/AutumnBlog.tsx",
    previewImage: "/previews/autumn-blog.png"
  },
  {
    id: "zenix-dashboard",
    title: "Zenix Dashboard",
    category: "dashboard",
    theme: "zenix",
    tags: ["data", "admin", "saas"],
    component: ZenixDashboard,
    sourcePath: "packages/blueprints/src/dashboard/ZenixDashboard.tsx",
    previewImage: "/previews/zenix-dashboard.png"
  },
  {
    id: "ocean-dashboard",
    title: "Ocean Dashboard",
    category: "dashboard",
    theme: "ocean",
    tags: ["data", "admin", "glass"],
    component: OceanDashboard,
    sourcePath: "packages/blueprints/src/dashboard/OceanDashboard.tsx",
    previewImage: "/previews/ocean-dashboard.png"
  },
  {
    id: "night-city-dashboard",
    title: "Night City Dashboard",
    category: "dashboard",
    theme: "night-city",
    tags: ["data", "terminal", "cyberpunk"],
    component: NightCityDashboard,
    sourcePath: "packages/blueprints/src/dashboard/NightCityDashboard.tsx",
    previewImage: "/previews/night-city-dashboard.png"
  },
  {
    id: "autumn-dashboard",
    title: "Autumn Dashboard",
    category: "dashboard",
    theme: "autumn",
    tags: ["data", "admin", "journal"],
    component: AutumnDashboard,
    sourcePath: "packages/blueprints/src/dashboard/AutumnDashboard.tsx",
    previewImage: "/previews/autumn-dashboard.png"
  }
];

export function getBlueprint(id: string) {
  return blueprints.find(bp => bp.id === id);
}

export function getBlueprintsByCategory(category: string) {
  return blueprints.filter(bp => bp.category === category);
}
