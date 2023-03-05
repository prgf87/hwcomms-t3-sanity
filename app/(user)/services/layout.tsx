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
          heading="Hailey Wilson Communication Services"
          message="Browse through the services I have to offer"
          custombg="custom-img16"
          heroanchor="/services/#services-list"
        /> */}
        {children}
        <Footer anchor={'/services/#services'} />
      </body>
    </html>
  );
}
