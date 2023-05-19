'use client';

import '../../globals.css';
import HeroResources from '@/components/modules/HeroResources';
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
          <HeroResources
            heading="The Online Resource Directory"
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
