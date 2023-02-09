/* eslint-disable @next/next/no-img-element */
'use client';

import { motion } from 'framer-motion';
import { ChevronDownIcon } from '@heroicons/react/24/solid';
import Link from 'next/link';

function Snapshots() {
  return (
    <>
      <section className="bg-gradient-invert min-h-screen">
        {/* <div className="snapshot grid xl:grid-cols-3 lg:grid-cols-2 grid-cols-1 max-w-[1440px] space-x-5 space-y-5 xl:space-x-20 xl:space-y-20 text-gray-200 text-center pt-5 lg:pt-20 p-20 lg:m-0"> */}
        <h1
          className="text-7xl text-gray-300 tracking-[20px] uppercase text-center pt-20"
          // className="xl:col-span-3 lg:col-span-2 col-span-1 mx-auto text-3xl lg:text-7xl tracking-[20px] uppercase text-gray-300"
        >
          Snapshots
        </h1>
        <div className="snapshot grid grid-cols-3 m-10 gap-10">
          <section className="diagonal">
            <div className="wrapper">
              <img src="/images/img27.png" alt="/" />
              <h2 className="section-title">Experienced Communicator</h2>
              <p>
                15 years of corporate communications experience with a focus on
                crisis and internal communications.
              </p>
            </div>
          </section>
          <section className="diagonal2">
            <div className="wrapper">
              <img src="/images/img12.png" alt="/" />
              <h2 className="section-title">Writer, Editor, and Producer</h2>
              <p>
                I create fun and inspiring content that shapes a corporate image
                and drives a positive narrative.
              </p>
            </div>
          </section>
          <section className="diagonal3 lg:col-span-2 xl:col-span-1">
            <div className="wrapper">
              <img src="/images/img26.png" alt="/" />
              <h2 className="section-title">Brain Nerd</h2>
              <p>
                My approach of blending brain science and empathy practices to
                create communications strategies has been proven on the
                frontlines of wildfires to control room floors of nuclear power
                plants.
              </p>
            </div>
          </section>
        </div>
        <div className="relative">
          <motion.div
            initial={{
              opacity: 1,
            }}
            whileFocus={{
              opacity: 1,
            }}
            transition={{
              duration: 1,
              delay: 3,
            }}
          >
            <div className="absolute right-0 bottom-[-3.5rem] m-5 lg:m-20 md:pr-5 ">
              <button className="animate-bounce">
                <Link href="#review">
                  <ChevronDownIcon className="h-6 w-6 md:h-10 md:w-10 text-white" />
                </Link>
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}

export default Snapshots;
