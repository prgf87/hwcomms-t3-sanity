import { motion } from 'framer-motion';
import { ChevronDownIcon } from '@heroicons/react/24/solid';
import { Cursor, useTypewriter } from 'react-simple-typewriter';

function Hero({ heading, message, href, custombg }: any) {
  const [text] = useTypewriter({
    words: ['', heading, message],
    loop: true,
    delaySpeed: 2500,
  });
  return (
    <section>
      <motion.section
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
        }}
        transition={{
          duration: 1,
          delay: 0.5,
        }}
        className={`flex items-center justify-center h-screen bg-fixed bg-fill bg-center ${custombg}`}
      />
      <motion.div
        initial={{
          opacity: 1,
        }}
        animate={{
          opacity: 0.7,
        }}
        transition={{
          duration: 1.5,
          delay: 0,
        }}
        className={`absolute top-0 left-0 right-0 bottom-0 h-screen bg-black z-[2]`}
      />
      <div className="absolute top-0 left-0 right-0 bottom-0 p-5 text-white z-[2] mx-auto flex justify-center items-center">
        <motion.div
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: [0, 0.7, 1],
          }}
          whileInView={{
            opacity: 1,
          }}
          transition={{
            duration: 1.5,
            delay: 1.5,
          }}
        >
          <div className="">
            <h1 className="text-lg sm:text-2xl md:text-4xl">
              <span>{text}</span>
              <Cursor cursorColor="white" />
            </h1>
          </div>
        </motion.div>
        <motion.div
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            duration: 1,
            delay: 3,
          }}
        >
          <a href={href}>
            <button className="absolute right-0 bottom-0 m-5 lg:m-20 md:pr-5 animate-bounce">
              <ChevronDownIcon className="h-6 w-6 md:h-10 md:w-10 text-white" />
            </button>
          </a>
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;
