'use client';

import Link from 'next/link';
import { useEffect, useState, useRef } from 'react';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import { SocialIcon } from 'react-social-icons';
import { motion } from 'framer-motion';
import Logo from '../modules/Logo';
import Image from 'next/image';

function Navbar() {
  const [nav, setNav] = useState(false);
  const [color, setColor] = useState('transparent');
  const [textColor, setTextColor] = useState('white');
  const [dropdownOpen, setdropdownOpen] = useState(false);

  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleNav = () => {
    setNav(!nav);
  };

  const handleDropdownOutsideClick = (e: MouseEvent) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(e.target as Node)
    ) {
      setdropdownOpen(false);
    }
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
    document.addEventListener('mousedown', handleDropdownOutsideClick);
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
          duration: 0.5,
          delay: 0,
        }}
        className="max-w-[1240px] mx-auto flex justify-between text-white items-center p-4"
      >
        <div className="flex">
          <div
            style={{ color: `${textColor}` }}
            className="flex h-[55px] w-[120px] bg-cover transition-transform hover:scale-110 duration-200"
          >
            <Link href="/" className="pt-2">
              <Logo />
            </Link>
          </div>
          <div className="relative top-1.5 mb-4 left-[5vw] h-14 w-14 hover:scale-110 transition-transform ease-in-out duration-300">
            <Link href="https://www.talkingpointsforlife.com/">
              <Image
                src={'/images/tpfl-logo.png'}
                alt={'Logo'}
                width={490}
                height={490}
              />
            </Link>
          </div>
        </div>

        <ul style={{ color: `${textColor}` }} className="hidden md:flex gap-4">
          <li className="p-2 hover:text-gray-400 text-xs md:text-sm lg:text-lg">
            <Link href="/#home">Home</Link>
          </li>
          <li className="p-2 hover:text-gray-400 text-xs md:text-sm lg:text-lg">
            <Link href="/about">About</Link>
          </li>
          <li className="p-2 hover:text-gray-400 text-xs md:text-sm lg:text-lg">
            <Link href="/services">Services</Link>
          </li>
          <li className="p-2 hover:text-gray-400 text-xs md:text-sm lg:text-lg">
            <Link href="/contact">Contact</Link>
          </li>

          <li className="relative">
            <button
              onClick={() => setdropdownOpen(!dropdownOpen)}
              className="flex justify-center items-center p-2 hover:text-gray-400 text-xs md:text-sm lg:text-lg"
            >
              More
            </button>
            <div
              ref={dropdownRef}
              onClick={() => setdropdownOpen(!dropdownOpen)}
              className={`${
                dropdownOpen
                  ? `top-8 x-100 visible`
                  : 'top-0 x-0 invisible opacity-0'
              } absolute top-0 left-0 z-40 mt-2 w-[15rem] rounded-lg bg-slate-800 py-2 shadow-card transition-all duration-300`}
            >
              <Link
                href="/resources"
                className="block py-2 px-5 hover:text-gray-400 text-xs md:text-sm lg:text-lg"
              >
                Resource Directory
              </Link>
              <Link
                onClick={() => setdropdownOpen(!dropdownOpen)}
                href="http://haileycomms.substack.com/"
                className="block py-2 px-5 hover:text-gray-400 text-xs md:text-sm lg:text-lg"
              >
                Hailey&apos;s Blog
              </Link>
            </div>
          </li>
        </ul>

        <div className="pl-2 hidden sm:flex">
          <SocialIcon
            style={{ height: 30, width: 30 }}
            url="https://twitter.com/HaileyComms"
            fgColor={textColor}
            bgColor="transparent"
            className="p-6 transition-transform hover:scale-125 duration-200"
          />
          <SocialIcon
            style={{ height: 30, width: 30 }}
            url="https://www.linkedin.com/in/haileycomms/"
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
          className="inline md:hidden z-10"
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
              ? 'md:hidden absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center w-full h-screen bg-black text-center ease-in duration-300'
              : 'md:hidden absolute top-0 left-[-100%] right-0 bottom-0 flex justify-center items-center w-full h-screen bg-black text-center ease-in duration-300'
          }
        >
          <div className="absolute top-40">
            <Logo />
          </div>
          <div className="flex-grid justify-center items-center">
            <ul onClick={handleNav}>
              <li className="p-4 text-2xl hover:text-gray-500">
                <Link href="/">Home</Link>
              </li>
              <li className="p-4 text-2xl hover:text-gray-500">
                <Link href="/about">About</Link>
              </li>
              <li className="p-4 text-2xl hover:text-gray-500">
                <Link href="/services">Services</Link>
              </li>
              <li className="p-4 text-2xl hover:text-gray-500">
                <Link href="/contact">Contact</Link>
              </li>
              <li className="p-4 text-2xl hover:text-gray-500">
                <Link href="/resources">Resource Directory</Link>
              </li>
              <li className="p-4 text-2xl hover:text-gray-500">
                <Link href="http://haileycomms.substack.com/">
                  Hailey&apos;s Blog
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </motion.div>
    </header>
  );
}

export default Navbar;
