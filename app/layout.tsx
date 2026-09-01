import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL(process.env.WOOBLAY_SITE_URL ?? 'http://localhost:3000'),
  title: {
    default: 'Wooblay — Systems, AI, Machines',
    template: '%s',
  },
  description: 'Software and AI systems engineer building infrastructure, intelligent products, agent tooling, and physical systems.',
  openGraph: {
    title: 'Wooblay — Systems, AI, Machines',
    description: 'Software and AI systems engineer building infrastructure, intelligent products, agent tooling, and physical systems.',
    type: 'website',
    images: [{ url: '/og.png', width: 1200, height: 630, alt: 'Wooblay — Systems, AI, Machines' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Wooblay — Systems, AI, Machines',
    description: 'Software and AI systems engineer building infrastructure, intelligent products, agent tooling, and physical systems.',
    images: ['/og.png'],
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
