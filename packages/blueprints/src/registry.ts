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
  dependencies?: string[];
  devDependencies?: string[];
  files?: string[];
  supportedFrameworks: string[];
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
    featured: true,
    supportedFrameworks: ['react', 'nextjs', 'vite']
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
    featured: false,
    supportedFrameworks: ['react', 'nextjs', 'vite']
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
    featured: true,
    supportedFrameworks: ['react', 'nextjs', 'vite']
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
    featured: false,
    supportedFrameworks: ['react', 'nextjs', 'vite']
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
    featured: true,
    supportedFrameworks: ['react', 'nextjs', 'vite']
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
    featured: false,
    supportedFrameworks: ['react', 'nextjs', 'vite']
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
    featured: true,
    supportedFrameworks: ['react', 'nextjs', 'vite']
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
    featured: false,
    supportedFrameworks: ['react', 'nextjs', 'vite']
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
    featured: false,
    supportedFrameworks: ['react', 'nextjs', 'vite']
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
    featured: true,
    supportedFrameworks: ['react', 'nextjs', 'vite']
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
    featured: false,
    supportedFrameworks: ['react', 'nextjs', 'vite']
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
    featured: false,
    supportedFrameworks: ['react', 'nextjs', 'vite']
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
    featured: true,
    supportedFrameworks: ['react', 'nextjs', 'vite']
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
    featured: false,
    supportedFrameworks: ['react', 'nextjs', 'vite']
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
    featured: false,
    supportedFrameworks: ['react', 'nextjs', 'vite']
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
    featured: false,
    supportedFrameworks: ['react', 'nextjs', 'vite']
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
    featured: true,
    supportedFrameworks: ['react', 'nextjs', 'vite']
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
    featured: false,
    supportedFrameworks: ['react', 'nextjs', 'vite']
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
    featured: false,
    supportedFrameworks: ['react', 'nextjs', 'vite']
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
    featured: false,
    supportedFrameworks: ['react', 'nextjs', 'vite']
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
    featured: true,
    supportedFrameworks: ['react', 'nextjs', 'vite']
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
    featured: false,
    supportedFrameworks: ['react', 'nextjs', 'vite']
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
    featured: false,
    supportedFrameworks: ['react', 'nextjs', 'vite']
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
    featured: true,
    supportedFrameworks: ['react', 'nextjs', 'vite']
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
    featured: true,
    supportedFrameworks: ['react', 'nextjs', 'vite']
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
    featured: false,
    supportedFrameworks: ['react', 'nextjs', 'vite']
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
    featured: true,
    supportedFrameworks: ['react', 'nextjs', 'vite']
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
    featured: false,
    supportedFrameworks: ['react', 'nextjs', 'vite']
  }
];

export function getBlueprint(id: string) {
  return blueprints.find(bp => bp.id === id);
}

export function getBlueprintsByCategory(category: string) {
  return blueprints.filter(bp => bp.category === category);
}
