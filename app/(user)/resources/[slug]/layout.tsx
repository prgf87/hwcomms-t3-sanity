'use client';

import TipBanner from '@/components/TipBanner';
import '../../../globals.css';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <>
        <TipBanner />
        {children}
      </>
    </>
  );
}
