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
        <div id="home" className="snap-start" />
        <Hero
          heading="Hailey Wilson Communications"
          message="Where there's a Wilson, there's a way"
          custombg="bg1.png"
          position="object-cover object-[center_center]"
        />

        {children}
        <Footer anchor={'#home'} />
      </body>
    </html>
  );
}
