import type { Metadata } from 'next';
import { Roboto } from 'next/font/google';

// @project
import './globals.css';
import MainLayout from '@/layout';

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['400', '500', '700', '900'],
});

export const metadata: Metadata = {
  title: 'Home - Netflix',
  description:
    'Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected...',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={roboto.className}>
        <MainLayout>{children}</MainLayout>
      </body>
    </html>
  );
}
