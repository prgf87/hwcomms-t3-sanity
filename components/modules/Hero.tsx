'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

function Hero({ custombg, position }: any) {
  return (
    <section>
      <div className="relative h-[400px] z-[0]">
        <motion.div
          initial={{
            opacity: 0,
          }}
          animate={{
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
          <Image
            src={`/images/${custombg}`}
            width={1920}
            height={800}
            alt={'Hero Image / Background Image'}
            priority
            className={`absolute top-0 ${position} h-[400px]`}
          />
        </motion.div>
        <motion.div
          initial={{
            opacity: 1,
            scale: 1,
          }}
          animate={{
            opacity: 0.5,
            scale: 1,
          }}
          transition={{
            duration: 1,
            delay: 0,
          }}
          viewport={{
            once: true,
          }}
          className="absolute w-full bg-black top-0 object-cover h-[400px] z-[1]"
        ></motion.div>
      </div>
    </section>
  );
}

export default Hero;
