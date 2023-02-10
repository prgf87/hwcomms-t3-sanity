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
          heading="Writer's Toolbox"
          message="Find some of the best resources online for creative writers"
          heroanchor="/toolbox/#toolbox"
          custombg="custom-img12"
        />
        {children}
        <Footer anchor={'/resources/#resources'} />
      </body>
    </html>
  );
}
