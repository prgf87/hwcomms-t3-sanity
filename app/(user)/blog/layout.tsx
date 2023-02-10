'use client';

import Hero from '@/components/modules/Hero';
import Footer from '@/components/navigation/Footer';
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
          heading="Hailey's Blog"
          message="Where there's a Wilson, there's a way"
          heroanchor="/blog/#blog-banner"
          custombg="custom-img5"
        />

        {children}
        <Footer anchor={'/blog/#blog'} />
      </body>
    </html>
  );
}
