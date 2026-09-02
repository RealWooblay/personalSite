export function getSiteOrigin(): URL | null {
  const configuredUrl = process.env.PORTFOLIO_SITE_URL;
  const vercelProductionHost = process.env.VERCEL_PROJECT_PRODUCTION_URL;
  const value = configuredUrl ??
    (vercelProductionHost ? `https://${vercelProductionHost}` : null);

  if (!value) return null;

  try {
    return new URL(value);
  } catch {
    return null;
  }
}

export function isPublicLaunch(siteOrigin: URL | null): boolean {
  if (!siteOrigin) return false;
  if (process.env.PORTFOLIO_PUBLIC_SITE === 'false') return false;

  return (
    process.env.PORTFOLIO_PUBLIC_SITE === 'true' ||
    process.env.VERCEL_ENV === 'production'
  );
}
