'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import Image from 'next/image';

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
          duration: 0.5,
        }}
        viewport={{
          once: true,
        }}
        className="pt-8"
      >
        <h1 className="text-2xl sm:text-3xl text-center px-20 md:text-3xl lg:text-7xl lg:pt-8 pb-5 xl:pb-0 tracking-[15px] z-[2] uppercase">
          Think like a scientist
        </h1>
        <h2 className="text-2xl sm:text-3xl text-center px-20 md:text-3xl lg:text-[4.5rem] lg:pt-6 tracking-[15px] text-gray-200 uppercase">
          Sound like a human
        </h2>
      </motion.div>
      <motion.section
        initial={{
          opacity: 0,
        }}
        whileInView={{
          opacity: 1,
        }}
        transition={{
          duration: 0.5,
          delay: 1.5,
        }}
        viewport={{
          once: true,
        }}
        className="max-w-3xl md:max-w-5xl lg:max-w-7xl mx-auto grid grid-cols-1"
      >
        <section className="hidden lg:grid grid-cols-1 xl:grid-cols-2 max-w-[1440px] gap-5 mt-10">
          <Image
            src={'/images/img8.png'}
            width={1664}
            height={1664}
            alt={'/'}
            className="mt-10"
          />
          <div className="hidden xl:block mx-4 text-left text-[1.3rem] mb-5">
            <h1 className="text-3xl font-bold px-4 pr-36 ml-8 md:pb-5 lg:pb-5 pt-5">
              Deep understanding leads to deep connections
            </h1>
            <p className="px-6 md:px-2 text-left ml-10">
              Welcome! My unique approach to communications strategy blends
              empathy practices with a deep knowledge of how our brains work.
              This approach connects my clients to their desired audiences in
              meaningful ways. Together, we will meet them where they are -- not
              where we think they should be. Take a look around and explore the
              various services I offer, snapshots of my experience, and samples
              of my work.
              <br></br>
              <br></br>
              To summarise, what I provide for my clients are customized
              communication consultation services including internal/employee
              communication, crisis/issue management, change management, empathy
              training, empathy mapping, and design thinking workshops. I
              guarantee measurable results and help clients communicate
              effectively and navigate change.
              <br></br>
              <br></br>
              PS - most of the art on this site was created by MidJourney, an AI
              artist.
            </p>
          </div>
        </section>
        <div className="md:col-span-2 xl:hidden">
          <div className="text-center mb-5 sm:mb-5 md:col-span-2">
            <div className="md:grid px-10">
              <Image
                src={'/images/img8.png'}
                width={1664}
                height={1664}
                alt={'/'}
                className="mt-10 m-auto rounded-full"
              />
            </div>
            <h1 className="text-2xl font-bold px-20 pt-8 pb-5 md:pb-5 md:px-2 lg:pb-5">
              Deep understanding leads to deep connections
            </h1>
            <p className="px-6 md:px-40">
              Welcome! My unique approach to communications strategy blends
              empathy practices with a deep knowledge of how our brains work.
              This approach connects my clients to their desired audiences in
              meaningful ways. Together, we will meet them where they are -- not
              where we think they should be. Take a look around and explore the
              various services I offer, snapshots of my experience, and samples
              of my work.
              <br></br>
              <br></br>
              To summarise, what I provide for my clients are customized
              communication consultation services including internal/employee
              communication, crisis/issue management, change management, empathy
              training, empathy mapping, and design thinking workshops. I
              guarantee measurable results and help clients communicate
              effectively and navigate change.
              <br></br>
              <br></br>
              PS - most of the art on this site was created by MidJourney, an AI
              artist.
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
          <div className="flex-row space-x-4 mx-auto">
            <Link href="/services">
              <button className="mb-10 sm:mb-[4rem] text-lg btn1">
                My Services
              </button>
            </Link>

            <Link href="/contact">
              <button className="mb-10 sm:mb-[4rem] text-lg btn1">
                Contact Me
              </button>
            </Link>
          </div>
        </motion.div>
      </motion.section>
    </div>
  );
}

export default Intro;
