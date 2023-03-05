'use client';

import { ChevronDownIcon } from '@heroicons/react/24/solid';
import { motion } from 'framer-motion';

type Props = {};

function Values({}: Props) {
  return (
    <section className="relative left-0 top-0 right-0 bottom-0 min-h-screen flex items-center justify-center bg-fixed bg-fill bg-center custom-img10 text-gray-100 z-[0]">
      <div className="absolute min-h-screen left-0 top-0 right-0 bottom-0 object-cover bg-black/90 z-[2]">
        {/* <div className="absolute top-0 left-0 right-0 bottom-0 text-gray-200 text-[1rem] lg:text-[1.5rem] z-[2] mx-auto"> */}
        <motion.h1
          initial={{
            opacity: 0,
          }}
          whileInView={{
            opacity: 1,
          }}
          transition={{
            duration: 1,
          }}
          viewport={{
            once: true,
          }}
          className="text-2xl sm:text-5xl lg:text-7xl text-center pt-20 lg:pt-40 lg:pb-10 text-gray-200 tracking-widest sm:tracking-[15px] uppercase font-bold"
        >
          My Values
        </motion.h1>
        <div className="max-w-[1440px] mx-auto text-center grid">
          <div>
            <motion.div
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
            >
              <h2 className="pt-20 text-xl lg:text-3xl lg:tracking-[20px] text-gray-300 uppercase">
                Seek Extraordinary Experiences
              </h2>
              <p className="p-lite px-4 md:px-20 py-2">
                You deserve my best, so you&apos;ll get it. Which means that
                I&apos;m always on the lookout for a chance to delight you and
                your team (that&apos;s the fun part of the job!).
              </p>
            </motion.div>
            <motion.div
              initial={{
                opacity: 0,
              }}
              whileInView={{
                opacity: 1,
              }}
              transition={{
                duration: 1.5,
                delay: 0.5,
              }}
              viewport={{
                once: true,
              }}
              className="px-5"
            >
              <h2 className="pt-8 text-xl lg:text-3xl lg:tracking-[20px] text-gray-300 uppercase">
                Be Thorough
              </h2>
              <p className="p-lite px-4 md:px-20 py-2">
                My grandfather always said, “If you don&apos;t do it right, you
                might as well not do it at all.” I believe in doing the job well
                down to the smallest detail.
              </p>
            </motion.div>

            <motion.div
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
            >
              <h2 className="pt-8 text-xl lg:text-3xl lg:tracking-[20px] text-gray-300 uppercase">
                Have Integrity
              </h2>
              <p className="p-lite px-20 py-2">
                In my line of work, integrity presents itself in the form of
                radical candor. I will always tell you the truth (the good, the
                bad, the ugly).
              </p>
            </motion.div>
            <motion.div
              initial={{
                opacity: 0,
              }}
              whileInView={{
                opacity: 1,
              }}
              transition={{
                duration: 1.5,
                delay: 0.5,
              }}
              viewport={{
                once: true,
              }}
            >
              <h2 className="pt-8 text-xl lg:text-3xl lg:tracking-[20px] text-gray-300 uppercase">
                Move Forward, Move Fast
              </h2>
              <p className="p-lite px-20 py-2">
                In the literal interpretation of this value, excellent
                communications must be timely (no argument there), but “Moving
                Forward” also applies to doing my homework on learning the
                industry&apos;s best, newest ideas (and come up with a few on
                the way) so that your communications are fresh and relevant.
              </p>
            </motion.div>
            {/* <a href="#resume" className="relative">
              <button className="nav-chev-down absolute right-[-36.8rem] bottom-[-11rem] m-5 lg:m-20 md:pr-5 animate-bounce">
                <ChevronDownIcon className="h-6 w-6 md:h-10 md:w-10 text-white" />
              </button>
            </a> */}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Values;
