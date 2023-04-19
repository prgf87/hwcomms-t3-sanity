'use client';

import Hero2 from '@/components/modules/Hero2';
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
        <Hero2 custombg="bg1.png" position="cover" />

        {children}
        <Footer anchor={'#home'} />
      </body>
    </html>
  );
}
