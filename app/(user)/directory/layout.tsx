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
          heading="The Creator's Online Resource Directory"
          message="The possibilities are endless..."
          heroanchor="/directory/#directory-banner"
          custombg="custom-img14"
        />
        {children}
        <Footer anchor={'/directory/#directory'} />
      </body>
    </html>
  );
}
