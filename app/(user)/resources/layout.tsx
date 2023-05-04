'use client';

import '../../globals.css';
import Hero from '@/components/modules/Hero';
import Navbar from '@/components/navigation/Navbar';
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
        <div className="hero-image-container-resources">
          <Hero
            heading="Resources &amp; Tips"
            message="Resources &amp; Tips"
            heroanchor="/resources#resources-banner"
            custombg="img31.png"
            position="object-cover object-[center_top]"
          />
        </div>

        {children}

        <Footer anchor={'resources/#resources'} />
      </body>
    </html>
  );
}
