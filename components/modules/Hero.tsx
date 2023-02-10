'use client';

import { motion } from 'framer-motion';
import { ChevronDownIcon } from '@heroicons/react/24/solid';
import { Cursor, useTypewriter } from 'react-simple-typewriter';

function Hero({ heading, message, heroanchor, custombg }: any) {
  const [text] = useTypewriter({
    words: ['', heading, message],
    loop: true,
    delaySpeed: 2000,
  });
  return (
    <div className="bg-black">
      <motion.section
        initial={{
          opacity: 0,
          scale: 1,
        }}
        animate={{
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1.5,
          delay: 0,
        }}
        viewport={{
          once: true,
        }}
        className={`flex items-center justify-center h-[50vh] ${custombg}`}
      />
      <motion.div
        initial={{
          y: 500,
          opacity: 1,
          scale: 1,
        }}
        animate={{
          opacity: 0.7,
          scale: 1,
          y: 0,
        }}
        transition={{
          duration: 1.2,
          delay: 0,
        }}
        viewport={{
          once: true,
        }}
        className={`absolute h-[100vh] top-[-50vh] left-0 right-0 bottom-0 bg-black z-[2]`}
      />
      <div className="absolute top-0 left-0 right-0 bottom-[25rem] text-white z-[2] mx-auto flex justify-center items-center">
        <motion.div
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: [0, 0.3, 1],
          }}
          whileInView={{
            opacity: 1,
          }}
          transition={{
            duration: 1.5,
            delay: 1,
          }}
          viewport={{
            once: true,
          }}
        >
          <div>
            <h1 className="text-lg sm:text-2xl md:text-4xl px-6">
              <span>{text}</span>
              <Cursor cursorColor="white" />
            </h1>
          </div>
        </motion.div>
        {/* <motion.div
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            duration: 1,
            delay: 1.5,
          }}
          viewport={{
            once: true,
          }}
        >
          <a href={heroanchor}>
            <button className="nav-chev-down absolute right-0 bottom-6 m-5 lg:m-20 md:pr-5 animate-bounce">
              <ChevronDownIcon className="h-6 w-6 md:h-10 md:w-10 text-white" />
            </button>
          </a>
        </motion.div> */}
      </div>
    </div>
  );
}

export default Hero;
