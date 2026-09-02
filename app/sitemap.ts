import type { MetadataRoute } from 'next';
import { projects } from '@/lib/projects';
import { getSiteOrigin, isPublicLaunch } from '@/lib/site';

export default function sitemap(): MetadataRoute.Sitemap {
  const siteOrigin = getSiteOrigin();
  const publicLaunch = isPublicLaunch(siteOrigin);

  if (!publicLaunch || !siteOrigin) return [];
  const lastModified = new Date();

  return [
    {
      url: siteOrigin.toString(),
      lastModified,
      changeFrequency: 'monthly',
      priority: 1,
    },
    ...projects.map((project) => ({
      url: new URL(`/work/${project.slug}`, siteOrigin).toString(),
      lastModified,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    })),
  ];
}
