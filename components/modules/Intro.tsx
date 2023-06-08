'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import Image from 'next/image';

function Intro() {
  return (
    <section>
      <div className="sm:block w-full bg-gradient text-gray-100 min-h-screen">
        <motion.div
          initial={{
            opacity: 0,
          }}
          whileInView={{
            opacity: 1,
          }}
          transition={{
            delay: 1.5,
            duration: 0.5,
          }}
          viewport={{
            once: true,
          }}
          className="pt-8"
        >
          <div className="relative">
            <div className="z-[2]">
              <h1 className="text-2xl sm:text-3xl text-center sm:px-20 md:text-4xl lg:text-6xl sm:pt-8 lg:pt-4 pb-5 xl:pb-0 tracking-[5px] z-[2] uppercase">
                Think like a scientist
              </h1>
              <h2 className="text-2xl sm:text-3xl text-center sm:px-20 md:text-4xl lg:text-6xl lg:pt-4 tracking-[5px] text-gray-200 uppercase">
                Sound like a human
              </h2>
            </div>
          </div>

          <motion.section
            initial={{
              opacity: 0,
            }}
            whileInView={{
              opacity: 1,
            }}
            transition={{
              duration: 1.5,
              delay: 0,
            }}
            viewport={{
              once: true,
            }}
            className="max-w-3xl md:max-w-5xl lg:max-w-7xl mx-auto grid grid-cols-1"
          >
            <section className="lg:grid grid-cols-1 xl:grid-cols-2 max-w-[1440px] sm:gap-5 lg:mt-0">
              <Image
                src={'/images/img8.png'}
                width={1664}
                height={1664}
                alt={'/'}
                className="mt-4 sm:mt-10 w-[70vw] lg:w-[80vw] mx-auto"
              />
              <div className="mx-4 text-center mt-4 sm:mt-4 mb-5 px-10 md:px-20 xl:px-0">
                <h1 className="hidden sm:block text-2xl mb-8 sm:mb-0 sm:px-12 md:pb-5 lg:pb-5 pt-5 lg:pt-10 font-bold uppercase">
                  Deep understanding leads to deep connections.
                </h1>
                <p className="sm:px-6 md:px-2 text-center">
                  I am a seasoned communications consultant with over 15 years
                  of experience in the industry. My passion is helping teams and
                  entrepreneurs unlock the full potential of AI tools,
                  empowering them to thrive in today&apos;s competitive
                  landscape. With a little help from me, you can energize your
                  communications, create efficient workflows, and stay ahead of
                  the curve with the power of AI tools.
                  <br></br>
                  <br></br>
                  My unique approach to communications strategy blends empathy
                  practices with a deep knowledge of how our brains work, while
                  taking advantage of the latest technologies. Together, we can
                  connect to your desired audiences in meaningful ways, meeting
                  them where they are — not where we think they should be.
                  <br></br>
                  <br></br>
                  Take a look around and explore the various services I offer,
                  snapshots of my experience, and samples of my work.
                  <br></br>
                  <br></br>
                  PS — most of the art on this site was created by Midjourney.
                </p>
              </div>
            </section>

            <div className="col-span-2 xl:hidden mx-auto pt-5 relative bottom-[0px]">
              <div className="grid md:flex md:space-x-4 mx-auto">
                <Link href="/about">
                  <button className="mb-10 sm:mb-[4rem] text-lg btn1 w-48">
                    About me
                  </button>
                </Link>

                <Link href="/services">
                  <button className="mb-10 sm:mb-[4rem] text-lg btn1 w-48">
                    My Services
                  </button>
                </Link>
              </div>
            </div>
          </motion.section>
        </motion.div>
      </div>
    </section>
  );
}

export default Intro;
