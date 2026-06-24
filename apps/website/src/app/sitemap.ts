import { MetadataRoute } from 'next';
import { blueprints } from '@zenixui/blueprints';
import { articles } from '../data/articles';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://zenixui.com';

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: baseUrl, lastModified: new Date() },
    { url: `${baseUrl}/themes`, lastModified: new Date() },
    { url: `${baseUrl}/blueprints`, lastModified: new Date() },
    { url: `${baseUrl}/studio`, lastModified: new Date() },
    { url: `${baseUrl}/learn`, lastModified: new Date() },
    { url: `${baseUrl}/docs`, lastModified: new Date() },
    { url: `${baseUrl}/docs/cli`, lastModified: new Date() },
    { url: `${baseUrl}/docs/nextjs`, lastModified: new Date() },
    { url: `${baseUrl}/docs/vite`, lastModified: new Date() },
    { url: `${baseUrl}/docs/remix`, lastModified: new Date() },
    { url: `${baseUrl}/docs/astro`, lastModified: new Date() },
    { url: `${baseUrl}/compare`, lastModified: new Date() },
    { url: `${baseUrl}/roadmap`, lastModified: new Date() },
  ];

  const blueprintRoutes: MetadataRoute.Sitemap = blueprints.map((bp) => ({
    url: `${baseUrl}/blueprints/${bp.id}`,
    lastModified: new Date(bp.createdAt),
  }));

  const learnRoutes: MetadataRoute.Sitemap = articles.map((article) => ({
    url: `${baseUrl}/learn/${article.slug}`,
    lastModified: new Date(article.publishedAt),
  }));

  const categories = Array.from(new Set(blueprints.map(bp => bp.category)));
  const frameworks = ['react', 'nextjs', 'vite'];
  
  const templateRoutes: MetadataRoute.Sitemap = [];
  
  for (const fw of frameworks) {
    templateRoutes.push({ url: `${baseUrl}/${fw}-templates`, lastModified: new Date() });
    for (const category of categories) {
      templateRoutes.push({ url: `${baseUrl}/templates/${fw}-${category}-template`, lastModified: new Date() });
    }
  }

  return [...staticRoutes, ...blueprintRoutes, ...learnRoutes, ...templateRoutes];
}
