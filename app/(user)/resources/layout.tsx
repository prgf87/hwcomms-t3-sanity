'use client';

import Hero from '@/components/Hero';
import Navbar from '@/components/Navbar';
import '../../globals.css';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <Hero
          heading="Tips &amp; Resources"
          message="Search through our many tips and Resources"
          href="/resources/#resources-banner"
          custombg="custom-img4"
        />
        {children}
      </body>
    </html>
  );
}
