import Link from 'next/link';
import React from 'react';

type Props = {};

function BannerBio({}: Props) {
  return (
    <div className="relative h-[50vh] bg-fixed custom-img5 z-0">
      <div className="absolute left-0 top-0 right-0 bottom-0 bg-black/40 z-[2] flex justify-center items-center">
        <Link href="/about/#resume">
          <button className="btn1-large mx-10">My Resume</button>
        </Link>
        <Link href="/about">
          <button className="btn1-large mx-10">About me</button>
        </Link>
        <Link href="/about/#values">
          <button className="btn1-large mx-10">My Values</button>
        </Link>
      </div>
    </div>
  );
}

export default BannerBio;
