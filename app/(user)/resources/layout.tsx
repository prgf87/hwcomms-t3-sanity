'use client';

import Footer from '@/components/modules/Footer';
import Hero from '@/components/modules/Hero';
import Navbar from '@/components/navigation/Navbar';
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
          heading="Resources &amp; Tips"
          message="Search through our many tips and Resources"
          heroanchor="/resources/#resources-banner"
          custombg="custom-img4"
        />
        {children}
        <Footer anchor={'/resources/#resources'} />
      </body>
    </html>
  );
}
