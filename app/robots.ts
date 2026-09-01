import type { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  const siteUrl = process.env.PORTFOLIO_SITE_URL;
  const publicLaunch = Boolean(
    siteUrl && process.env.PORTFOLIO_PUBLIC_SITE === 'true',
  );

  if (!publicLaunch || !siteUrl) {
    return { rules: { userAgent: '*', disallow: '/' } };
  }

  return {
    rules: { userAgent: '*', allow: '/' },
    sitemap: new URL('/sitemap.xml', siteUrl).toString(),
  };
}
