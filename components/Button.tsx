'use client';

import Link from 'next/link';

const Button = () => {
  return (
    <div className="w-full flex justify-center items-center hover:scale-110 transition transform">
      <Link href="/contact/#contact">
        <button className="px-8 py-2 border hover:shadow-xl">Contact Me</button>
      </Link>
    </div>
  );
};

export default Button;
