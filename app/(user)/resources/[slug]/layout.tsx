'use client';

import Hero from '@/components/Hero';
import Navbar from '@/components/Navbar';
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
        <Navbar />
        <Hero
          heading="Tips &amp; Resources"
          message="Search through our many tips and Resources"
          href="/resources/#banner"
          custombg="custom-img4"
        />
        <TipBanner />
        {children}
      </>
    </>
  );
}
