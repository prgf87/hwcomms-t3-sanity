/* eslint-disable @next/next/no-img-element */
'use client';

import { motion } from 'framer-motion';

function Snapshots() {
  return (
    <section className="bg-gradient-invert-x">
      <motion.h1
        initial={{
          opacity: 0,
        }}
        whileInView={{
          opacity: 1,
        }}
        transition={{
          duration: 1.5,
        }}
        viewport={{
          once: true,
        }}
        className="text-4xl sm:text-7xl text-gray-300 tracking-[20px] uppercase text-center pt-20"
      >
        Snapshots
      </motion.h1>
      <div className="snapshot grid grid-cols-1 xl:grid-cols-3 mx-10 sm:mx-40 lg:mx-40 xl:mx-20 mt-10 pb-20 gap-10 overflow-hidden">
        <motion.section
          initial={{
            opacity: 0,
            x: -100,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
          }}
          transition={{
            duration: 1.5,
          }}
          viewport={{
            once: true,
          }}
          className="diagonal"
        >
          <div className="wrapper">
            <img src="/images/img27.png" alt="/" />
            <h2 className="text-xl font-bold py-2 text-center">
              Experienced Communicator
            </h2>
            <p className="text-base text-center">
              15 years of corporate communications experience with a focus on
              crisis and internal communications.
            </p>
          </div>
        </motion.section>
        <motion.section
          initial={{
            opacity: 0,
            x: 100,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
          }}
          transition={{
            duration: 1.5,
          }}
          viewport={{
            once: true,
          }}
          className="diagonal3"
        >
          <div className="wrapper">
            <img src="/images/img26.png" alt="/" />
            <h2 className="text-xl font-bold py-2 text-center">Brain Nerd</h2>
            <p className="text-base text-center">
              My unique communications strategy blends brain science with
              empathy practices. This approach has been proven on the frontlines
              of wildfires and on the control room floors of nuclear power
              plants.
            </p>
          </div>
        </motion.section>
        <motion.section
          initial={{
            opacity: 0,
            y: 100,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 1.5,
          }}
          viewport={{
            once: true,
          }}
          className="diagonal2"
        >
          <div className="wrapper">
            <img src="/images/img12.png" alt="/" />
            <h2 className="text-xl font-bold py-2 text-center">
              Writer, Editor, and Producer
            </h2>
            <p className="text-base text-center">
              I create fun and inspiring content that shapes a corporate image
              and drives a positive narrative.
            </p>
          </div>
        </motion.section>
      </div>
    </section>
  );
}

export default Snapshots;
