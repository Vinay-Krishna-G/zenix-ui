export interface ArticleMetadata {
  slug: string;
  title: string;
  description: string;
  category: 'dashboard' | 'admin' | 'portfolio' | 'architecture';
  framework?: 'nextjs' | 'react' | 'vite';
  publishedAt: string;
  readTime: string;
  author: string;
}

export const articles: ArticleMetadata[] = [
  {
    slug: "how-to-build-a-saas-dashboard-in-nextjs",
    title: "How to Build a SaaS Dashboard in Next.js",
    description: "A comprehensive guide to architecture, routing, authentication, and layouts for Modern Next.js applications.",
    category: "dashboard",
    framework: "nextjs",
    publishedAt: "2026-06-24",
    readTime: "8 min read",
    author: "ZenixUI Team"
  },
  {
    slug: "how-to-build-a-react-admin-panel",
    title: "How to Build a React Admin Panel",
    description: "Learn best practices for data tables, state management, and permissions in enterprise React admin interfaces.",
    category: "admin",
    framework: "react",
    publishedAt: "2026-06-25",
    readTime: "10 min read",
    author: "ZenixUI Team"
  },
  {
    slug: "how-to-create-a-portfolio-website-with-vite",
    title: "How to Create a Portfolio Website with Vite",
    description: "Fast, minimal, and SEO-optimized portfolio setup using Vite, React, and modern CSS techniques.",
    category: "portfolio",
    framework: "vite",
    publishedAt: "2026-06-26",
    readTime: "6 min read",
    author: "ZenixUI Team"
  },
  {
    slug: "best-react-dashboard-templates-2026",
    title: "Best React Dashboard Templates in 2026",
    description: "A curated list of the most robust, highly-engineered React dashboard templates for production use.",
    category: "dashboard",
    framework: "react",
    publishedAt: "2026-06-27",
    readTime: "5 min read",
    author: "ZenixUI Team"
  }
];

export function getArticle(slug: string) {
  return articles.find(a => a.slug === slug);
}
