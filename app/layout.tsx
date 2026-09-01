import type { Metadata } from 'next';
import './globals.css';

const siteUrl = process.env.WOOBLAY_SITE_URL;
const siteOrigin = siteUrl ? new URL(siteUrl) : null;
const publicLaunch = Boolean(
  siteOrigin && process.env.WOOBLAY_PUBLIC_SITE === 'true',
);
const socialImage = siteOrigin
  ? new URL('/og.jpg', siteOrigin).toString()
  : null;

export const metadata: Metadata = {
  ...(siteOrigin ? { metadataBase: siteOrigin } : {}),
  ...(publicLaunch
    ? { alternates: { canonical: siteOrigin?.toString() } }
    : {}),
  title: {
    default: 'Wooblay | Systems, AI, Machines',
    template: '%s',
  },
  description:
    'NVIDIA Jetson vision, agent systems and interactive products by Wooblay.',
  openGraph: {
    title: 'Wooblay | Systems, AI, Machines',
    description:
      'NVIDIA Jetson vision, agent systems and interactive products by Wooblay.',
    type: 'website',
    ...(publicLaunch ? { url: siteOrigin?.toString() } : {}),
    ...(socialImage
      ? {
          images: [
            {
              url: socialImage,
              width: 1200,
              height: 630,
              alt: 'Wooblay | Systems, AI, Machines',
            },
          ],
        }
      : {}),
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Wooblay | Systems, AI, Machines',
    description:
      'NVIDIA Jetson vision, agent systems and interactive products by Wooblay.',
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
