'use client';

import Link from 'next/link';

const Button = () => {
  return (
    <div className="w-full flex justify-center items-center transition ease-in duration-300">
      <Link href="/contact/#contact">
        <button className="px-8 py-2 btn1-large">Contact Me</button>
      </Link>
    </div>
  );
};

export default Button;
