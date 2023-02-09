'use client';

import TipBanner from '@/components/tip/TipBanner';
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
