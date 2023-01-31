import { motion } from 'framer-motion';

function Hero({ heading, message, btnmsg, custombg }: any) {
  return (
    <>
      <motion.section
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
        }}
        transition={{
          duration: 3,
          delay: 3,
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
          duration: 4,
          delay: -1,
        }}
        className={`absolute top-0 left-0 right-0 bottom-0 h-screen md:bg-black bg-black/60 z-[2]`}
      />
      <div className="absolute top-0 left-0 right-0 bottom-0 p-5 text-white z-[2] mt-[10rem] flex justify-center items-center">
        <motion.div
          initial={{
            x: -500,
            opacity: 0,
          }}
          animate={{
            x: 0,
            opacity: 1,
          }}
          transition={{
            duration: 1,
            delay: 6,
          }}
        >
          <h1 className="text-3xl lg:text-5xl font-bold">{heading}</h1>
          <p className="py-2 text-xl">{message}</p>
          <button className="px-8 py-2 border">{btnmsg}</button>
        </motion.div>
      </div>
    </>
  );
}

export default Hero;
