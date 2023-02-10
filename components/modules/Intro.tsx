'use client';

import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDownIcon } from '@heroicons/react/24/solid';

function Intro() {
  return (
    <div className="w-full bg-gradient text-gray-100 min-h-screen">
      <motion.div
        initial={{
          opacity: 0,
        }}
        whileInView={{
          opacity: 1,
        }}
        transition={{
          delay: 1,
          duration: 1.5,
        }}
        viewport={{
          once: true,
        }}
      >
        <h1 className="text-3xl text-center md:text-5xl lg:text-7xl pt-8 lg:pb-20 xl:pb-0 tracking-widest overflow-y-hidden z-[2]">
          Think like a scientist
        </h1>
        <h2 className="text-3xl text-center md:text-4xl lg:text-5xl pt-4 tracking-[20px] text-gray-400 overflow-y-hidden">
          Sound like a human
        </h2>
      </motion.div>
      <section className="max-w-3xl lg:max-w-7xl mx-auto grid grid-cols-1">
        {/* <motion.div
          initial={{
            opacity: 0,
          }}
          whileInView={{
            opacity: 1,
          }}
          transition={{
            delay: 1.5,
            duration: 1.5,
          }}
          viewport={{
            once: true,
          }}
          className="hidden text-center py-5 lg:pt-5 uppercase "
        >
          <h1 className="text-3xl md:text-5xl lg:text-7xl pt-8 pb-0 sm:pb-20 xl:pb-0 tracking-widest">
            Think like a scientist
          </h1>
          <h2 className="text-xl md:text-4xl lg:text-5xl pt-4 tracking-[20px] text-gray-400">
            Sound like a human
          </h2>
        </motion.div> */}

        <motion.div
          initial={{
            opacity: 0,
            x: -500,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
          }}
          transition={{
            duration: 1.5,
            delay: 1.5,
          }}
          viewport={{
            once: true,
          }}
          className="xl:hidden mx-auto mb-2"
        >
          <video
            src="/videos/tpgif.webm"
            autoPlay
            muted
            playsInline
            width={960}
            height={960}
            className="h-80 w-80 md:h-[40vh] md:w-[40vh] m-6 object-cover"
          />
        </motion.div>

        <section className="grid grid-cols-1 xl:grid-cols-2 max-w-[1440px] gap-5 mt-10">
          <motion.div
            initial={{
              opacity: 0,
              x: -100,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              delay: 0,
              duration: 1,
            }}
            viewport={{
              once: true,
            }}
            className="hidden xl:block mx-auto mb-10 sm:mb-0"
          >
            <video
              src="/videos/tpgif.webm"
              autoPlay
              muted
              playsInline
              width={960}
              height={960}
              className="h-[60vh] w-[60vh] mb-5"
            />
            <div className="hidden md:flex xl:hidden items-center justify-center pt-5">
              <Link href="https://www.talkingpointsforlife.com/">
                <button className="mb-10 sm:mb-[2rem] text-xl btn1-large">
                  Talking Points
                </button>
              </Link>
            </div>
            <div className="hidden md:flex lg:hidden items-center justify-center">
              <Link href="/contact">
                <button className="mb-10 sm:mb-[4rem] text-xl btn1-large">
                  Contact Me
                </button>
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{
              opacity: 0,
              x: 500,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 1,
              delay: 0,
            }}
            viewport={{
              once: true,
            }}
            className="hidden xl:block mx-4 text-right text-[1.25rem] mb-5"
          >
            <h1 className="text-4xl font-bold px-4 md:pb-5 lg:pb-5 tracking-widest">
              Deep understanding leads to deep connections
            </h1>
            <p className="p-lite px-4 pt-6">
              Welcome! My unique approach to communications strategy blends
              empathy practices with a deep knowledge of how our brains work.
              <br></br>
              <br></br>
              This approach connects my clients to their desired audiences in
              meaningful ways. Together, we will meet them where they are -- not
              where we think they should be.
              <br></br>
              <br></br>Take a look around and explore the various services I
              offer, snapshots of my experience, and samples of my work.{' '}
              <br></br>
              <br></br>PS - most of the art on this site was created by
              MidJourney, an AI artist.
            </p>
            <div className="flex justify-center items-center mt-10">
              <Link href="https://www.talkingpointsforlife.com/">
                <button className="mb-12 sm:mb-[8rem] text-xl btn1-large">
                  Talking Points
                </button>
              </Link>
            </div>
          </motion.div>
        </section>
        <div className="md:col-span-2 xl:hidden">
          <div className="text-center mb-5 sm:mb-5 md:col-span-2">
            <h1 className="text-4xl font-bold px-4 pb-5 md:pb-5 md:px-2 lg:pb-5">
              Deep understanding leads to deep connections
            </h1>
            <p className="px-6 md:px-2">
              Welcome! My unique approach to communications strategy blends
              empathy practices with a deep knowledge of how our brains work.
              <br></br>
              <br></br>
              This approach connects my clients to their desired audiences in
              meaningful ways. Together, we will meet them where they are -- not
              where we think they should be.
              <br></br>
              <br></br>Take a look around and explore the various services I
              offer, snapshots of my experience, and samples of my work.{' '}
              <br></br>
              <br></br>PS - most of the art on this site was created by
              MidJourney, an AI artist.
            </p>
          </div>
        </div>

        <motion.div
          initial={{
            opacity: 0,
          }}
          whileInView={{
            opacity: 1,
          }}
          transition={{
            duration: 1,
            delay: 1,
          }}
          viewport={{
            once: true,
          }}
          className="col-span-2 xl:hidden mx-auto pt-5"
        >
          <Link href="https://www.talkingpointsforlife.com/">
            <button className="mb-10 sm:mb-[4rem] text-xl btn1-large">
              Talking Points
            </button>
          </Link>
        </motion.div>
      </section>

      {/* <section className="relative">
        <motion.div
          initial={{
            opacity: 0,
          }}
          whileInView={{
            opacity: 1,
          }}
          transition={{
            duration: 0.5,
          }}
          viewport={{
            once: true,
          }}
        >
          <a href="#quotes">
            <div className="nav-chev-down absolute right-0 bottom-[4.5rem] m-5 lg:m-20 md:pr-5 ">
              <button className="animate-bounce">
                <ChevronDownIcon className="h-6 w-6 md:h-10 md:w-10 text-white" />
              </button>
            </div>
          </a>
        </motion.div>
      </section> */}
    </div>
  );
}

export default Intro;
