'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

function Bio() {
  return (
    <section className="bg-gradient">
      <div id="bio" className="relative top-[-100px]" />
      <section className="text-gray-300 pt-20 lg:pt-0">
        <div className="sm:max-w-xl md:max-w-5xl lg:max-w-[1440px] text-[1rem] leading-5 sm:leading-7 sm:text-[1.3rem] items-center mx-auto sm:px-10">
          <div className="grid grid-cols-1 mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 lg:min-h-[95vh] mx-auto">
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
                    delay: 1,
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
                  delay: 1,
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
                    delay: 1,
                  }}
                  viewport={{
                    once: true,
                  }}
                  className="px-4 py-2 mb-2"
                >
                  <h1 className="text-3xl md:text-3xl lg:text-5xl font-bold tracking-widest sm:pr-2 text-center md:text-right mt-40 uppercase">
                    Who is?
                  </h1>
                  <h1 className="text-3xl md:text-3xl lg:text-5xl font-bold tracking-[10px] text-center md:text-right text-gray-200 uppercase">
                    Hailey Wilson
                  </h1>
                  <div className="sm:pl-8 lg:pl-28 text-justify">
                    <p className="px-4 py-2 mt-6">
                      As a down to earth communicator, strategist and
                      storyteller, I have a single goal for all of my projects:
                    </p>

                    <h1 className="px-4 py-2 my-4 text-3xl uppercase text-center font-bold">
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
                  >
                    <div className="sm:hidden grid grid-cols-1 lg:grid-cols-2 pb-10 lg:pb-0">
                      <div className="flex justify-evenly gap-x-1 items-center mt-10">
                        <Link href="/contact">
                          <button className="btn1-large">Get in Touch</button>
                        </Link>
                      </div>
                      <div className="flex justify-evenly gap-x-1 items-center mt-10">
                        <Link href="https://www.talkingpointsforlife.com/">
                          <button className="btn1-large">Talking Points</button>
                        </Link>
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              </motion.div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 pb-10 lg:pb-0 lg:min-h-[40vh] mx-auto">
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
                    duration: 1,
                    delay: 1.5,
                  }}
                  viewport={{
                    once: true,
                  }}
                  className="px-4 py-2 mb-2 pt-5 sm:pt-20 lg:pt-0"
                >
                  <div className="lg:pl-28 text-justify">
                    <p className="px-4 py-2">
                      Whether it is explaining complex energy issues to business
                      leaders, or detailing changes to a popular company policy
                      to employees, I meet each challenge by remembering
                      successful communications involve the following:
                    </p>
                    <p className="px-8 pt-4">
                      ☞ Balancing what needs to be communicated with the way the
                      audience wants to hear it.
                    </p>
                    <p className="px-8 pt-4">
                      ☞ Respecting the audience by using an authentic style and
                      avoiding jargon.
                    </p>
                    <p className="px-8 py-4">
                      ☞ Earning the audience&apos;s attention through
                      descriptive language and dynamic content.
                    </p>
                    <p className="px-4 py-2">
                      I&apos;ve had a lot of success by following these simple
                      rules and I&apos;m thankful to the hundreds of employees,
                      executives and community members who have taught me
                      through experience.
                    </p>
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
                      delay: 0,
                    }}
                    viewport={{
                      once: true,
                    }}
                  >
                    <div className="sm:hidden grid grid-cols-1 lg:grid-cols-2">
                      <div className="flex justify-evenly gap-x-1 items-center mt-10">
                        <Link href="/services">
                          <button className="btn1-large px-12 py-4 text-lg">
                            My Services
                          </button>
                        </Link>
                      </div>
                      <div className="flex justify-evenly gap-x-1 items-center mt-10">
                        <Link href="/resources">
                          <button className="btn1-large px-12 py-4 text-lg">
                            Resources
                          </button>
                        </Link>
                      </div>
                    </div>
                  </motion.div>
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
                    duration: 1,
                    delay: 1.5,
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
