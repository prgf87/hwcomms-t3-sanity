import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

type Props = {};

function BannerBio({}: Props) {
  return (
    <div className="relative h-[300px] bg-fixed z-0">
      <Image
        src={`/images/img23.png`}
        width={1920}
        height={800}
        alt={'/'}
        className="h-[300px] object-cover"
      />
      <div className="absolute left-0 top-0 right-0 bottom-0 bg-black/20 z-[2] flex justify-center items-center sm:px-40">
        <div className="grid grid-cols-1 lg:grid-cols-3 mx-auto gap-4 z-[4]">
          <Link href="/about">
            <button className="btn1-large mx-2 lg:mx-10">About Me</button>
          </Link>
          <Link href="/services">
            <button className="btn1-large mx-2 lg:mx-10">My Services</button>
          </Link>
          <Link href="/contact#contact">
            <button className="btn1-large mx-2 lg:mx-10">Contact Me</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default BannerBio;
