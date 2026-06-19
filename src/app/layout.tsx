
'use client';

import dynamic from 'next/dynamic';
import { Inter } from 'next/font/google';
import { AppProvider } from '@/context/AppContext';
import ProductPreview from '@/components/product-preview';
import { Toaster } from '@/components/ui/toaster';
import { MobileBottomNav } from '@/components/layout/mobile-bottom-nav';
import './globals.css';

const SiteHeader = dynamic(
  () => import('@/components/site-header').then((mod) => mod.SiteHeader),
  { ssr: false }
);

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AppProvider>
          <SiteHeader />
          {children}
          <ProductPreview />
          <Toaster />
          <MobileBottomNav />
        </AppProvider>
      </body>
    </html>
  );
}
