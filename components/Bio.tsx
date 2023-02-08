'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ChevronDownIcon } from '@heroicons/react/24/solid';

function Bio() {
  return (
    <section>
      <div id="bio" className="relative top-[-100px]" />
      <section className="bg-gradient-invert text-gray-200">
        <div className="max-w-xl md:max-w-5xl lg:max-w-[1440px] text-[1.25rem] items-center mx-auto rounded-3xl">
          <div className="grid grid-cols-1 mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 space-x-2">
              <div className="grid m-auto rounded-full">
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
                    duration: 1,
                    delay: 1,
                  }}
                  viewport={{
                    once: true,
                  }}
                  className="z-[0]"
                >
                  <Image
                    src="/images/hailey3.jpg"
                    alt="Hailey Wilson Hiking"
                    width={960}
                    height={720}
                    className="rounded-full h-[50rem] max-w-[30rem] object-cover object-right ml-10 opacity-50 lg:opacity-100"
                  />
                </motion.div>
              </div>
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
                }}
                viewport={{
                  once: true,
                }}
                className="col-span-2 justify-center items-center mx-auto pl-8 md:mt-5 md:pr-20 z-[2]"
              >
                <h1 className="text-3xl md:text-4xl font-bold tracking-widest pr-2 text-center md:text-right">
                  Who is
                </h1>
                <h1 className="text-4xl md:text-4xl font-bold tracking-[10px] text-center md:text-right text-gray-100">
                  Hailey Wilson?
                </h1>
                <div className="text-left md:text-right">
                  <motion.p
                    initial={{
                      opacity: 0,
                      x: -500,
                    }}
                    whileInView={{
                      opacity: 1,
                      x: 0,
                    }}
                    transition={{
                      duration: 1,
                      delay: 0.5,
                    }}
                    viewport={{
                      once: true,
                    }}
                    className="px-4 pt-4"
                  >
                    As a down-to-earth communicator, strategist and storyteller,
                    I have a single goal for all of my projects: Be authentic.
                    Regardless if you&apos;re communicating internally or
                    externally, you are connecting with human beings. My mission
                    is to never lose that focus.
                  </motion.p>

                  <motion.p
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
                      delay: 0.5,
                    }}
                    viewport={{
                      once: true,
                    }}
                    className="px-4 pt-4"
                  >
                    I&apos;ve made a career of studying people and telling
                    stories that inform and inspire them. Striking that perfect
                    balance between professionalism, humor, and authenticity in
                    corporate communications can be challenging, but it is a
                    puzzle that I enjoy solving over and over again.
                  </motion.p>

                  <motion.p
                    initial={{
                      opacity: 0,
                      x: -500,
                    }}
                    whileInView={{
                      opacity: 1,
                      x: 0,
                    }}
                    transition={{
                      duration: 1,
                      delay: 0.5,
                    }}
                    viewport={{
                      once: true,
                    }}
                    className="px-4 pt-4"
                  >
                    Whether it is explaining complex energy issues to business
                    leaders, or detailing changes to a popular company policy to
                    employees, I meet each challenge by remembering successful
                    communications involve the following:
                  </motion.p>

                  <motion.p
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
                      delay: 0.5,
                    }}
                    viewport={{
                      once: true,
                    }}
                    className="py-2 px-6 pt-4"
                  >
                    ☞ Balancing what needs to be communicated with the way the
                    audience wants to hear it.
                  </motion.p>

                  <motion.p
                    initial={{
                      opacity: 0,
                      x: -500,
                    }}
                    whileInView={{
                      opacity: 1,
                      x: 0,
                    }}
                    transition={{
                      duration: 1,
                      delay: 0.5,
                    }}
                    viewport={{
                      once: true,
                    }}
                    className="py-2 px-6 pt-4"
                  >
                    ☞ Respecting the audience by using an authentic style and
                    avoiding jargon.
                  </motion.p>

                  <motion.p
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
                      delay: 0.5,
                    }}
                    viewport={{
                      once: true,
                    }}
                    className="py-2 px-6 pt-4"
                  >
                    ☞ Earning the audience&apos;s attention through descriptive
                    language and dynamic content.
                  </motion.p>

                  <motion.p
                    initial={{
                      opacity: 0,
                      x: -500,
                    }}
                    whileInView={{
                      opacity: 1,
                      x: 0,
                    }}
                    transition={{
                      duration: 1,
                      delay: 0.5,
                    }}
                    viewport={{
                      once: true,
                    }}
                    className="px-4 pt-4"
                  >
                    I&apos;ve had a lot of success by following these simple
                    rules and I&apos;m thankful to the hundreds of employees,
                    executives and community members who have taught me through
                    experience.
                  </motion.p>

                  <motion.p
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
                      delay: 0.5,
                    }}
                    viewport={{
                      once: true,
                    }}
                    className="px-4 pt-4 mb-2"
                  >
                    On a personal level, I am an avid photographer always on the
                    hunt for that perfect shot. Despite my extreme dislike of
                    strenuous exercise, I&apos;ve climbed up steep ravines and
                    braved windy summits to capture creamy sunsets and snowy
                    landscapes. When I&apos;m not looking through my camera
                    lens, I&apos;m writing and chronicling stories of my
                    eccentric family.
                  </motion.p>

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
                  >
                    <div className="flex justify-between gap-x-1 items-center my-10 lg:mt-5 mx-20 lg:mx-40">
                      <Link href="/contact">
                        <button className="btn1 px-12 py-4 text-xl mb-10 lg:mb-5 mt-3">
                          Get in Touch
                        </button>
                      </Link>

                      <Link href="https://www.talkingpointsforlife.com/">
                        <button className="btn1 px-12 py-4 text-xl mb-10 lg:mb-5 mt-3">
                          Talking Points
                        </button>
                      </Link>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            </div>
            <a href="#values" className="relative">
              <button className="nav-chev-down absolute right-[-14.5rem] bottom-[2.2rem] m-5 lg:m-20 md:pr-5 animate-bounce">
                <ChevronDownIcon className="h-6 w-6 md:h-10 md:w-10" />
              </button>
            </a>
          </div>
        </div>
      </section>
    </section>
  );
}

export default Bio;
