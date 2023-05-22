'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

function Bio() {
  return (
    <section className="bg-gradient">
      <div id="bio" className="relative top-[-100px]" />
      <section className="text-gray-300 sm:pt-20 lg:pt-0">
        <div className="sm:max-w-xl md:max-w-5xl lg:max-w-[1440px] text-[1rem] leading-5 sm:leading-7 sm:text-xl items-center mx-auto sm:px-10">
          <div className="grid grid-cols-1 mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 lg:min-h-[95vh] mx-auto sm:mt-20">
              <div className="grid">
                <motion.div
                  initial={{
                    opacity: 0,
                    x: -150,
                  }}
                  whileInView={{
                    opacity: 1,
                    x: 0,
                  }}
                  transition={{
                    duration: 0.5,
                    delay: 0.5,
                  }}
                  viewport={{
                    once: true,
                  }}
                  className="z-[0] flex justify-center items-center"
                >
                  <Image
                    src="/images/hailey3.jpg"
                    alt="Hailey Wilson Hiking"
                    width={960}
                    height={720}
                    className="h-[48rem] sm:h-[40rem] w-[40rem] object-cover object-right rounded-full m-auto sm:ml-20 lg:ml-60 absolute opacity-20 top-20 sm:top-0 sm:relative sm:opacity-100"
                  />
                </motion.div>
              </div>
              <motion.div
                initial={{
                  opacity: 0,
                  x: 150,
                }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                }}
                transition={{
                  duration: 0.5,
                  delay: 0.5,
                }}
                viewport={{
                  once: true,
                }}
                className="col-span-2 justify-center items-center mx-auto lg:pl-28 lg:pr-16 z-[2]"
              >
                <motion.div
                  initial={{
                    opacity: 0,
                  }}
                  whileInView={{
                    opacity: 1,
                  }}
                  transition={{
                    duration: 0.5,
                    delay: 0.5,
                  }}
                  viewport={{
                    once: true,
                  }}
                  className="px-4 py-2 mb-2 mt-20"
                >
                  <div className="ml-4 sm:ml-24">
                    <h1 className="text-2xl md:text-3xl lg:text-5xl font-bold tracking-widest sm:pr-2 text-left mt-40 sm:mt-12 uppercase">
                      Who is
                    </h1>
                    <h1 className="text-2xl md:text-3xl lg:text-5xl font-bold tracking-[10px] text-left text-gray-200 uppercase">
                      Hailey Wilson?
                    </h1>
                  </div>
                  <div className="sm:pl-8 lg:pl-20 text-left">
                    <p className="px-4 py-2 mt-6">
                      As a down to earth communicator, strategist and
                      storyteller, I have a single goal for all of my projects:
                    </p>

                    <h1 className="px-4 py-2 my-4 text-2xl sm:text-3xl uppercase sm:text-center font-bold">
                      Be authentic
                    </h1>

                    <p className="px-4 py-2">
                      Regardless if you&apos;re communicating internally or
                      externally, you are connecting with human beings. My
                      mission is to never lose that focus.
                    </p>

                    <p className="px-4 py-2">
                      I&apos;ve made a career of studying people and telling
                      stories that inform and inspire them.
                      <br></br>
                      <br></br>
                      Striking that perfect balance between professionalism,
                      humor, and authenticity in corporate communications can be
                      challenging, but it is a puzzle that I enjoy solving over
                      and over again.
                    </p>
                  </div>
                </motion.div>
              </motion.div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 pb-10 lg:pb-0 lg:min-h-[40vh] mx-auto sm:mt-4">
              <motion.div
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
                className="sm:col-span-2 justify-center items-center mx-auto md:pr-8 z-[2]"
              >
                <motion.div
                  initial={{
                    opacity: 0,
                    x: -200,
                  }}
                  whileInView={{
                    opacity: 1,
                    x: 0,
                  }}
                  transition={{
                    duration: 0.5,
                    delay: 0,
                  }}
                  viewport={{
                    once: true,
                  }}
                  className="px-4 sm:py-2 mb-2 sm:pt-20 lg:pt-0"
                >
                  <div className="lg:pl-24 text-left">
                    <h1 className="px-4 py-2 my-4 text-2xl sm:text-3xl uppercase sm:text-center font-bold">
                      up for the challenge
                    </h1>
                    <p className="px-4 py-2">
                      Whether it is explaining complex energy issues to business
                      leaders, or detailing changes to a popular company policy
                      to employees, I meet each challenge by remembering
                      successful communications involve the following:
                    </p>
                    <ul className="px-4">
                      <div className="flex justify-center items-center">
                        <p>☞ </p>
                        <p className="px-4 pt-4">
                          Balancing what needs to be communicated with the way
                          the audience wants to hear it.
                        </p>
                      </div>
                      <div className="flex justify-center items-center">
                        <p>☞ </p>
                        <p className="px-4 pt-4">
                          Respecting the audience by using an authentic style
                          and avoiding jargon.
                        </p>
                      </div>
                      <div className="flex justify-center items-center">
                        <p>☞ </p>
                        <p className="px-4 py-4">
                          Earning the audience&apos;s attention through
                          descriptive language and dynamic content.
                        </p>
                      </div>
                    </ul>
                    <p className="px-4 py-2">
                      I&apos;ve had a lot of success by following these simple
                      rules and I&apos;m thankful to the hundreds of employees,
                      executives and community members who have taught me
                      through experience.
                    </p>
                  </div>
                </motion.div>
              </motion.div>
              <div className="grid">
                <motion.div
                  initial={{
                    opacity: 0,
                    x: 200,
                  }}
                  whileInView={{
                    opacity: 1,
                    x: 0,
                  }}
                  transition={{
                    duration: 0.5,
                    delay: 0,
                  }}
                  viewport={{
                    once: true,
                  }}
                  className="z-[0] flex justify-center items-center"
                >
                  <Image
                    src="/images/hailey2.png"
                    alt="Hailey Wilson Hiking"
                    width={952}
                    height={1400}
                    className="h-[48rem] sm:h-[40rem]
                    sm:top-[-7rem] w-[40rem] object-cover object-center rounded-full m-auto absolute opacity-20 top-[55rem] sm:relative sm:opacity-100"
                  />
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
}

export default Bio;
