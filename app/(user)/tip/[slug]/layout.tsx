'use client';

import TipBanner from '@/components/TipBanner';
import HeroHome from '@/components/HeroHome';
import Navbar from '@/components/Navbar';
import '../../../globals.css';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <HeroHome
          heading="Tips &amp; Resources"
          message="Search through our many tips and Resources"
          btnmsg="Learn More"
        />
        <TipBanner />
        {children}
      </body>
    </html>
  );
}
