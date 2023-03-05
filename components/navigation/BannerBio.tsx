import Link from 'next/link';
import React from 'react';

type Props = {};

function BannerBio({}: Props) {
  return (
    <div className="relative min-h-[25vh] bg-fixed custom-img5 z-0">
      <div className="absolute left-0 top-0 right-0 bottom-0 bg-black/40 z-[2] flex justify-center items-center">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-y-5 py-10">
          <Link href="/about/#resume">
            <button className="btn1-large mx-2 lg:mx-10">My Resume</button>
          </Link>
          <Link href="/contact">
            <button className="btn1-large mx-2 lg:mx-10">Contact Me</button>
          </Link>
          <Link href="/about/#values">
            <button className="btn1-large mx-2 lg:mx-10">My Values</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default BannerBio;
