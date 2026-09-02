import type { MetadataRoute } from 'next';
import { getSiteOrigin, isPublicLaunch } from '@/lib/site';

export default function robots(): MetadataRoute.Robots {
  const siteOrigin = getSiteOrigin();
  const publicLaunch = isPublicLaunch(siteOrigin);

  if (!publicLaunch || !siteOrigin) {
    return { rules: { userAgent: '*', disallow: '/' } };
  }

  return {
    rules: { userAgent: '*', allow: '/' },
    sitemap: new URL('/sitemap.xml', siteOrigin).toString(),
  };
}
