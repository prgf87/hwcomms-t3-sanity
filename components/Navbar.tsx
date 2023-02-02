import Link from 'next/link';
import { useEffect, useState } from 'react';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import { SocialIcon } from 'react-social-icons';
import { motion } from 'framer-motion';
import Image from 'next/image';

function Navbar() {
  const [nav, setNav] = useState(false);
  const [color, setColor] = useState('transparent');
  const [textColor, setTextColor] = useState('white');

  const handleNav = () => {
    setNav(!nav);
  };

  if (typeof document !== 'undefined') {
    const body: HTMLBodyElement | null = document.querySelector('body');
    if (nav === true) {
      body!.style.overflow = 'hidden';
    } else {
      body!.style.overflow = 'auto';
    }
  }

  useEffect(() => {
    const changeColor = () => {
      window.addEventListener('load', changeColor);
      if (window.scrollY >= 30) {
        setColor('#ffffff');
        setTextColor('#000000');
      } else {
        setColor('transparent');
        setTextColor('white');
      }
    };
    window.addEventListener('scroll', changeColor);
  }, []);

  return (
    <header
      style={{ backgroundColor: `${color}` }}
      className="fixed top-0 left-0 w-full z-10 ease-in duration-300"
    >
      <motion.div
        initial={{
          y: -100,
          opacity: 0,
        }}
        animate={{
          y: 0,
          opacity: 1,
        }}
        transition={{
          duration: 1,
          delay: 1,
        }}
        className="max-w-7xl m-auto flex justify-between text-white items-center p-4"
      >
        <div className="flex gap-2 my-2 h-[55px] w-[120px] cover">
          <Link href="/">
            <Image
              src={'/images/logo2.png'}
              alt="Site Logo"
              height={508}
              width={1038}
            />
          </Link>
        </div>

        <ul style={{ color: `${textColor}` }} className="hidden md:flex gap-4">
          <li className="p-2 hover:text-gray-400 text-xs md:text-sm lg:text-lg link link-underline link-underline-black">
            <Link href="/">Home</Link>
          </li>
          <li className="p-2 hover:text-gray-400 text-xs md:text-sm lg:text-lg link link-underline link-underline-black">
            <Link href="/services">Services</Link>
          </li>
          <li className="p-2 hover:text-gray-400 text-xs md:text-sm lg:text-lg link link-underline link-underline-black">
            <Link href="/contact">Contact</Link>
          </li>
          <li className="p-2 hover:text-gray-400 text-xs md:text-sm lg:text-lg link link-underline link-underline-black">
            <Link href="/blog">Blog</Link>
          </li>
          <li className="p-2 hover:text-gray-400 text-xs md:text-sm lg:text-lg link link-underline link-underline-black">
            <Link href="/resources">Resources</Link>
          </li>
        </ul>
        <div className="pl-2 py-5">
          <SocialIcon
            style={{ height: 30, width: 30 }}
            url="https://www.facebook.com"
            fgColor={textColor}
            bgColor="transparent"
            className="sm:p-6"
          />
          <SocialIcon
            style={{ height: 30, width: 30 }}
            url="https://www.twitter.com"
            fgColor={textColor}
            bgColor="transparent"
            className="sm:p-6"
          />
          <SocialIcon
            style={{ height: 30, width: 30 }}
            url="https://www.linkedin.com"
            fgColor={textColor}
            bgColor="transparent"
            className="sm:p-6"
          />
        </div>
        <div className="hidden sm:flex justify-center items-center cursor-pointer link link-underline link-underline-black">
          <SocialIcon
            network="email"
            fgColor={textColor}
            bgColor="transparent"
          />
          <p
            style={{ color: `${textColor}` }}
            className="uppercase text-xs hidden lg:block "
          >
            Get in touch
          </p>
        </div>

        {/*Mobile Menu Button */}
        <div
          onClick={() => {
            if (!nav === true) {
              setTextColor('white');
            } else if (!nav === false && window.scrollY >= 30) {
              setTextColor('#000000');
            }
          }}
          className="sm:hidden z-10"
        >
          {nav ? (
            <AiOutlineClose
              onClick={handleNav}
              size={30}
              style={{ color: `${textColor}` }}
            />
          ) : (
            <AiOutlineMenu
              onClick={handleNav}
              size={30}
              style={{ color: `${textColor}` }}
            />
          )}
        </div>
        {/*Mobile Menu */}
        <div
          className={
            nav
              ? 'sm:hidden absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center w-full h-screen bg-black text-center ease-in duration-300'
              : 'sm:hidden absolute top-0 left-[-100%] right-0 bottom-0 flex justify-center items-center w-full h-screen bg-black text-center ease-in duration-300'
          }
        >
          <ul onClick={handleNav}>
            <li className="p-4 text-4xl hover:text-gray-500">
              <Link href="/">Home</Link>
            </li>
            <li className="p-4 text-4xl hover:text-gray-500">
              <Link href="/about">About</Link>
            </li>
            <li className="p-4 text-4xl hover:text-gray-500">
              <Link href="/services">Services</Link>
            </li>
            <li className="p-4 text-4xl hover:text-gray-500">
              <Link href="/contact">Contact</Link>
            </li>
            <li className="p-4 text-4xl hover:text-gray-500">
              <Link href="/resources">Resources</Link>
            </li>
          </ul>
        </div>
      </motion.div>
    </header>
  );
}

export default Navbar;
