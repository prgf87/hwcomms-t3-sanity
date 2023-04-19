import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

type Props = {};

function BannerOptions({}: Props) {
  return (
    <div className="relative min-h-[30vh] bg-fixed z-0">
      <Image
        src={`/images/img7.png`}
        width={1920}
        height={800}
        alt={'/'}
        className="h-[30vh] object-cover"
        // objectFit={fill}
        // objectPosition={75% 50%}
      />
      <div className="absolute left-0 top-0 right-0 bottom-0 bg-black/60 z-[2] flex justify-center items-center sm:px-40">
        <div className="grid grid-cols-1 lg:grid-cols-3 mx-auto gap-4 z-[4]">
          <div>
            <Link href="/tricks">
              <button className="btn1-large sm:mx-10">Bag of Tricks</button>
            </Link>
          </div>
          <div>
            <Link href="/toolbox">
              <button className="btn1-large sm:mx-10">
                Writer&apos;s Toolbox
              </button>
            </Link>
          </div>
          <div>
            <Link href="/directory">
              <button className="btn1-large sm:mx-10">Online Directory</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BannerOptions;
