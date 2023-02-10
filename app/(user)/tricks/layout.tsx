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
          heading="Graphic Designer's Bag of Tricks"
          message="Helpful tools I've discovered online"
          heroanchor="/tricks/#tricks-banner"
          custombg="custom-img13"
        />
        {children}
        <Footer anchor={'/tricks/#tricks'} />
      </body>
    </html>
  );
}
