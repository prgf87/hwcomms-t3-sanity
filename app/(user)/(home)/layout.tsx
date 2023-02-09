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
        <div id="home" className="snap-start" />
        <Hero
          heading="Hailey Wilson Communications"
          message="Where there's a Wilson, there's a way"
          heroanchor="/#intro"
          custombg="custom-img"
        />

        {children}
        <Footer anchor={'/#home'} />
      </body>
    </html>
  );
}
