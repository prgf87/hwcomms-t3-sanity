'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import { SocialIcon } from 'react-social-icons';
import { motion } from 'framer-motion';
import Logo from '../modules/Logo';

function Navbar() {
  const [nav, setNav] = useState(false);
  const [color, setColor] = useState('transparent');
  const [textColor, setTextColor] = useState('white');
  const [dropdownOpen, setdropdownOpen] = useState(false);

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
      className="fixed top-0 left-0 w-full z-10 ease-in duration-300 "
    >
      <motion.div
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
        }}
        transition={{
          duration: 1.2,
          delay: 0.5,
        }}
        className="max-w-[1240px] mx-auto flex justify-between text-white items-center p-4"
      >
        <div
          style={{ color: `${textColor}` }}
          className="flex h-[55px] w-[120px] bg-cover transition-transform hover:scale-110 duration-200"
        >
          <Link href="/" className="pt-2">
            <Logo />
          </Link>
        </div>

        <ul style={{ color: `${textColor}` }} className="hidden md:flex gap-4">
          <li className="p-2 hover:text-gray-400 text-xs md:text-sm lg:text-lg link link-underline link-underline-black">
            <Link href="/#home">Home</Link>
          </li>
          <li className="p-2 hover:text-gray-400 text-xs md:text-sm lg:text-lg link link-underline link-underline-black">
            <Link href="/about">About</Link>
          </li>
          <li className="p-2 hover:text-gray-400 text-xs md:text-sm lg:text-lg link link-underline link-underline-black">
            <Link href="/contact">Contact</Link>
          </li>
          <li className="p-2 hover:text-gray-400 text-xs md:text-sm lg:text-lg link link-underline link-underline-black">
            <Link href="/services">Services</Link>
          </li>
          <li className="p-2 hover:text-gray-400 text-xs md:text-sm lg:text-lg link link-underline link-underline-black">
            <Link href="https://www.talkingpointsforlife.com/">
              Talking Points
            </Link>
          </li>

          <li className="relative">
            <button
              onClick={() => setdropdownOpen(!dropdownOpen)}
              className="flex justify-center items-center p-2 hover:text-gray-400 text-xs md:text-sm lg:text-lg link link-underline link-underline-black"
            >
              More
            </button>
            <div
              className={`${
                dropdownOpen
                  ? `top-full opacity-100 visible`
                  : 'top-[110%] invisible opacity-0'
              } absolute top-0 left-0 z-40 mt-2 w-[22rem] rounded bg-slate-800/60 py-2 shadow-card transition-all duration-300`}
            >
              <Link
                onClick={() => setdropdownOpen(!dropdownOpen)}
                href="http://haileycomms.substack.com/"
                className="block py-2 px-5 text-base font-semibold text-gray-200 hover:bg-gray-800/60 hover:text-primary link link-underline link-underline-black"
              >
                Hailey&apos;s SubStack Blog
              </Link>
              <Link
                onClick={() => setdropdownOpen(!dropdownOpen)}
                href="/resources"
                className="block py-2 px-5 text-base font-semibold text-gray-200 hover:bg-gray-800/60 hover:text-primary link link-underline link-underline-black"
              >
                Resources &amp; Tips
              </Link>
              <Link
                onClick={() => setdropdownOpen(!dropdownOpen)}
                href="/toolbox"
                className="block py-2 px-5 text-base font-semibold text-gray-200 hover:bg-gray-800/60 hover:text-primary link link-underline link-underline-black"
              >
                Writer&apos;s Toolbox
              </Link>
              <Link
                onClick={() => setdropdownOpen(!dropdownOpen)}
                href="/tricks"
                className="block py-2 px-5 text-base font-semibold text-gray-200 hover:bg-gray-800/60 hover:text-primary link link-underline link-underline-black"
              >
                Graphic Designer&apos;s Bag of Tricks
              </Link>
              <Link
                onClick={() => setdropdownOpen(!dropdownOpen)}
                href="/directory"
                className="block py-2 px-5 text-base font-semibold text-gray-200 hover:bg-gray-800/60 hover:text-primary link link-underline link-underline-black"
              >
                The Creator&apos;s Online Resource Directory
              </Link>
            </div>
          </li>
        </ul>
        <div className="pl-2 hidden sm:flex">
          <SocialIcon
            style={{ height: 30, width: 30 }}
            url="https://www.twitter.com"
            fgColor={textColor}
            bgColor="transparent"
            className="p-6 transition-transform hover:scale-125 duration-200"
          />
          <SocialIcon
            style={{ height: 30, width: 30 }}
            url="https://www.linkedin.com"
            fgColor={textColor}
            bgColor="transparent"
            className="p-6 transition-transform hover:scale-125 duration-200"
          />
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
          className="inline sm:hidden z-10"
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
