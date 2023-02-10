'use client';

import Banner from '@/components/navigation/Banner';
import Hero from '@/components/modules/Hero';
import Navbar from '@/components/navigation/Navbar';
import '../../globals.css';
import Footer from '@/components/navigation/Footer';

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
        <Banner />
        <Footer anchor={'/resources/#resources'} />
      </body>
    </html>
  );
}
