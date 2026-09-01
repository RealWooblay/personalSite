import type { Metadata } from 'next';
import './globals.css';

const siteUrl = process.env.PORTFOLIO_SITE_URL;
const siteOrigin = siteUrl ? new URL(siteUrl) : null;
const publicLaunch = Boolean(
  siteOrigin && process.env.PORTFOLIO_PUBLIC_SITE === 'true',
);
const socialImage = siteOrigin
  ? new URL('/og.png', siteOrigin).toString()
  : null;

export const metadata: Metadata = {
  ...(siteOrigin ? { metadataBase: siteOrigin } : {}),
  ...(publicLaunch
    ? { alternates: { canonical: siteOrigin?.toString() } }
    : {}),
  title: {
    default: 'Software, AI & Robotics Portfolio',
    template: '%s',
  },
  description:
    'NVIDIA Jetson vision, robotics, agent systems and products built from prototype to production.',
  openGraph: {
    title: 'Software, AI & Robotics Portfolio',
    description:
      'Technology should help us live more fully. Selected work across software, AI and robotics.',
    type: 'website',
    ...(publicLaunch ? { url: siteOrigin?.toString() } : {}),
    ...(socialImage
      ? {
          images: [
            {
              url: socialImage,
              width: 1200,
              height: 630,
              alt: 'Technology should help us live more fully. Software, AI and robotics.',
            },
          ],
        }
      : {}),
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Software, AI & Robotics Portfolio',
    description:
      'Technology should help us live more fully. Selected work across software, AI and robotics.',
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
