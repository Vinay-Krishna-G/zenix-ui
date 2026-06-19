import { MetadataRoute } from 'next';
import { blueprints } from '@zenixui/blueprints';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://zenixui.com';

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: baseUrl, lastModified: new Date() },
    { url: \`\${baseUrl}/themes\`, lastModified: new Date() },
    { url: \`\${baseUrl}/experiences\`, lastModified: new Date() },
    { url: \`\${baseUrl}/studio\`, lastModified: new Date() },
    { url: \`\${baseUrl}/docs\`, lastModified: new Date() },
    { url: \`\${baseUrl}/docs/cli\`, lastModified: new Date() },
    { url: \`\${baseUrl}/compare\`, lastModified: new Date() },
    { url: \`\${baseUrl}/roadmap\`, lastModified: new Date() },
  ];

  const experienceRoutes: MetadataRoute.Sitemap = blueprints.map((bp) => ({
    url: \`\${baseUrl}/experiences/\${bp.id}\`,
    lastModified: new Date(bp.createdAt),
  }));

  return [...staticRoutes, ...experienceRoutes];
}
