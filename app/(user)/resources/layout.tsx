'use client';

import '../../globals.css';
import Hero from '@/components/modules/Hero';
import Navbar from '@/components/navigation/Navbar';
import Footer from '@/components/navigation/Footer';
import ReviewCarousel from '@/components/modules/ReviewCarousel';

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
            message="Search through our many tips and resources"
            heroanchor="/resources/#resources-banner"
            custombg="img31.png"
            position="object-cover object-bottom"
          />
        </div>

        {children}

        <Footer anchor={'resources/#resources'} />
      </body>
    </html>
  );
}
