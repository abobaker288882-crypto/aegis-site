import type { Metadata, Viewport } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Aegis — Ship outcomes, not artifacts',
  description:
    'A skill suite that turns your coding agent into an accountable product team: plan, build, secure, test, commit, deploy, and verify live — without faking any step.',
  openGraph: {
    title: 'Aegis — Ship outcomes, not artifacts',
    description:
      'Turn your coding agent into an accountable product team: plan, build, secure, test, deploy, and verify live — without faking any step.',
    url: 'https://abobaker288882-crypto.github.io/',
    siteName: 'Aegis',
    images: [{ url: '/og.png', width: 1200, height: 630, alt: 'Aegis — from brief to shipped' }],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Aegis — Ship outcomes, not artifacts',
    description:
      'Turn your coding agent into an accountable product team — without faking any step.',
    images: ['/og.png'],
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#f6f7f8' },
    { media: '(prefers-color-scheme: dark)', color: '#0a0c0f' },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
