'use client';

import React from 'react';
import Image from 'next/image';
import PropTypes from 'prop-types';

function Hero2(custombg: any, position: any) {
  return (
    <div className="relative h-[400px]">
      <Image
        src={`/images/bg1.png`}
        width={1920}
        height={800}
        alt={'/'}
        priority
        className="absolute top-0 object-cover h-[400px]"
        // objectFit={fill}
        // objectPosition={75% 50%}
      />
    </div>
  );
}

Hero2.PropTypes = {};

export default Hero2;
