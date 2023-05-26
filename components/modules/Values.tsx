'use client';

import { ChevronDownIcon } from '@heroicons/react/24/solid';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

type Props = {};

function Values({}: Props) {
  return (
    <section className="relative bg-black h-[1100px] sm:h-[950px] z-[0]">
      <Image
        src={'/images/img17.png'}
        alt={'Background Image'}
        width={1920}
        height={768}
        className="absolute object-fill"
      />
      <div className="absolute left-0 top-0 right-0 bottom-0 object-cover bg-gradient-to-b from-black/60 to-black z-[2] text-gray-200">
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
          className="text-xl sm:text-5xl lg:text-7xl text-center pt-20 pb-10 text-gray-200 tracking-widest sm:tracking-[5px] uppercase"
        >
          My Values
        </motion.h1>
        <div className="max-w-[900px] mx-auto text-center grid">
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
              <h2 className="text-xl lg:text-4xl lg:tracking-[5px] text-gray-300 uppercase">
                Seek Extraordinary Experiences
              </h2>
              <p className="p-lite px-4 sm:px-16 md:px-20 py-2">
                You deserve my best, so you&apos;ll get it. This means that
                I&apos;m always on the lookout for a chance to delight you and
                your team (that&apos;s the fun part of the job!).
              </p>

              <h2 className="pt-8 text-xl lg:text-4xl lg:tracking-[5px] text-gray-300 uppercase">
                Be Thorough
              </h2>
              <p className="p-lite px-4 sm:px-16 md:px-20 py-2">
                My grandfather always said, “If you don&apos;t do it right, you
                might as well not do it at all.” I believe in doing the job well
                down to the smallest detail.
              </p>

              <h2 className="pt-8 text-xl lg:text-4xl lg:tracking-[5px] text-gray-300 uppercase">
                Have Integrity
              </h2>
              <p className="p-lite px-4 sm:px-16 md:px-20 py-2">
                In my line of work, integrity presents itself in the form of
                radical candor. I will always tell you the truth (the good, the
                bad, the ugly).
              </p>

              <h2 className="pt-8 text-xl lg:text-4xl lg:tracking-[5px] text-gray-300 uppercase">
                Move Forward, Move Fast
              </h2>
              <p className="p-lite px-4 sm:px-16 md:px-20 py-2">
                In the literal interpretation of this value, excellent
                communications must be timely (no argument there), but “Moving
                Forward” also applies to doing my homework on learning the
                industry&apos;s best, newest ideas (and come up with a few on
                the way) so that your communications are fresh and relevant.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Values;
