'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

function Hero({ custombg, position }: any) {
  return (
    <section className="bg-black">
      <div className="relative h-[300px] z-[0]">
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
            className={`absolute top-0 ${position} h-[300px]`}
          />
        </motion.div>
        <motion.div
          initial={{
            opacity: 1,
            scale: 1,
          }}
          animate={{
            opacity: 0.7,
            scale: 1,
          }}
          transition={{
            duration: 1,
            delay: 0,
          }}
          viewport={{
            once: true,
          }}
          className="absolute w-full bg-black top-0 object-cover h-[300px] z-[1]"
        />
      </div>
    </section>
  );
}

export default Hero;
