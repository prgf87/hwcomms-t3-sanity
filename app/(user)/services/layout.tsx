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
          heading="Communication Services"
          message="Broswer through the services I offer"
          custombg="custom-img6"
          heroanchor="/services/#services-list"
        />
        {children}
        <Footer anchor={'/services/#services'} />
      </body>
    </html>
  );
}
