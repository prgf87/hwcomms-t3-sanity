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
        {/* <Hero
          heading="Contact me"
          message="Use the form below to send me a message"
          custombg="custom-img3"
          heroanchor="/contact/#contact"
        /> */}
        {children}
        <Footer anchor={'contact/#contact'} />
      </body>
    </html>
  );
}
