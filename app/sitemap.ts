import type { MetadataRoute } from 'next';
import { projects } from '@/lib/projects';

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = process.env.PORTFOLIO_SITE_URL;
  const publicLaunch = Boolean(
    siteUrl && process.env.PORTFOLIO_PUBLIC_SITE === 'true',
  );

  if (!publicLaunch || !siteUrl) return [];

  const origin = new URL(siteUrl);
  const lastModified = new Date();

  return [
    {
      url: origin.toString(),
      lastModified,
      changeFrequency: 'monthly',
      priority: 1,
    },
    ...projects.map((project) => ({
      url: new URL(`/work/${project.slug}`, origin).toString(),
      lastModified,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    })),
  ];
}
