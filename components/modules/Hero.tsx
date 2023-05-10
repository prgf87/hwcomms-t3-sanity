'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Cursor, useTypewriter } from 'react-simple-typewriter';

function Hero({ heading, message, custombg, position }: any) {
  const [text] = useTypewriter({
    words: ['', heading, message],
    loop: true,
    delaySpeed: 1000,
  });
  return (
    <section className="bg-black">
      <div className="relative h-[375px] z-[0]">
        <motion.div
        // initial={{
        //   opacity: 1,
        // }}
        // animate={{
        //   opacity: 1,
        // }}
        // transition={{
        //   duration: 0.5,
        //   delay: 0,
        // }}
        // viewport={{
        //   once: true,
        // }}
        >
          <Image
            src={`/images/${custombg}`}
            width={1920}
            height={800}
            alt={'Hero Image / Background Image'}
            priority
            className={`absolute top-0 ${position} h-[375px]`}
          />
        </motion.div>
        <motion.div
          initial={{
            opacity: 1,
            scale: 5,
          }}
          animate={{
            opacity: 0.7,
            scale: 1,
          }}
          transition={{
            duration: 1.2,
            delay: 0,
          }}
          viewport={{
            once: true,
          }}
          className="absolute w-full bg-black top-0 object-cover h-[375px] z-[1]"
        >
          {/* <motion.div
            // initial={{
            //   opacity: 1,
            //   scale: 1,
            // }}
            // animate={{
            //   opacity: 0.7,
            //   scale: 1,
            //   y: 0,
            // }}
            // transition={{
            //   duration: 1.2,
            //   delay: 1,
            // }}
            // viewport={{
            //   once: true,
            // }}
            className={`absolute h-[375px] top-[0] left-0 right-0 bottom-0 bg-black z-[2]`}
          /> */}
          <div className="absolute h-[375px] top-[0] left-0 right-0 bottom-0 text-gray-100 z-[2] mx-auto flex justify-center items-center opacity-100">
            <motion.div
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              transition={{
                duration: 0.5,
                delay: 1,
              }}
              viewport={{
                once: true,
              }}
              className="absolute h-[375px] top-[40] left-0 right-0 bottom-0 flex justify-center items-center"
            >
              <h1 className="text-lg sm:text-2xl md:text-5xl px-6">
                <span>{text}</span>
                <Cursor cursorColor="gray" />
              </h1>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;
