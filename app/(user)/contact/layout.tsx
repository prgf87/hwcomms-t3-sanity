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
          heading="Contact me"
          message="Use the form below to send me a message"
          custombg="custom-img3"
          heroanchor="/contact/#contact"
        />
        {children}
        <Footer anchor={'/contact/#contact'} />
      </body>
    </html>
  );
}
