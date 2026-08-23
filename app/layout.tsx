import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Aegis CEO Office',
  description: 'A live mission control room for Aegis CEO orchestration.',
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
