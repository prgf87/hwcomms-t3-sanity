import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

type Props = {};

function BannerOptions({}: Props) {
  return (
    <div className="relative min-h-[30vh] bg-fixed z-0">
      <Image
        src={`/images/img31.png`}
        width={1920}
        height={800}
        alt={'/'}
        className="absolute h-[30vh] object-cover object-[center_top]"
      />

      <div className="absolute left-0 top-0 right-0 bottom-0 bg-black/50 z-[2] flex justify-center items-center sm:px-40">
        <div className="grid grid-cols-1 lg:grid-cols-3 mx-auto gap-4 z-[4] mt-28">
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
