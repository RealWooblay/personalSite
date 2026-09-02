import type { Metadata } from 'next';
import { getSiteOrigin, isPublicLaunch } from '@/lib/site';
import './globals.css';

const siteOrigin = getSiteOrigin();
const publicLaunch = isPublicLaunch(siteOrigin);
const socialImage = siteOrigin
  ? new URL('/og.png', siteOrigin).toString()
  : null;

export const metadata: Metadata = {
  ...(siteOrigin ? { metadataBase: siteOrigin } : {}),
  ...(publicLaunch
    ? { alternates: { canonical: siteOrigin?.toString() } }
    : {}),
  title: {
    default: 'Jack Coleman | Software, AI & Robotics',
    template: '%s',
  },
  description:
    'Building technology for a future measured by how fully people can live.',
  openGraph: {
    title: 'Jack Coleman | Software, AI & Robotics',
    description:
      'Building technology for a future measured by how fully people can live.',
    type: 'website',
    ...(publicLaunch ? { url: siteOrigin?.toString() } : {}),
    ...(socialImage
      ? {
          images: [
            {
              url: socialImage,
              width: 1200,
              height: 630,
              alt: 'Building technology for a future measured by how fully people can live. Software, AI and robotics.',
            },
          ],
        }
      : {}),
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Jack Coleman | Software, AI & Robotics',
    description:
      'Building technology for a future measured by how fully people can live.',
    ...(socialImage ? { images: [socialImage] } : {}),
  },
  icons: { icon: '/favicon.svg' },
  robots: publicLaunch
    ? { index: true, follow: true }
    : { index: false, follow: false },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
