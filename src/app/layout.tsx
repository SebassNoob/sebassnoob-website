import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

import { MediaQueryProvider } from './Providers/MediaQueryProvider';
const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'SebassNoob portfolio',
  description: 'A website to showcase what I do!',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'white' },
    { media: '(prefers-color-scheme: dark)', color: 'rgb(10, 25, 47)' },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <MediaQueryProvider>{children}</MediaQueryProvider>
      </body>
    </html>
  );
}
