'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

// type Window ={
//   window: Window;
//   onload:
// }

function Intro() {
  // const videoRef = useRef(null);

  // const playVideo= () => {

  //   window.addEventListener( (e:any) {
  //     if (playing) {
  //       // 1) Generate dice roll

  //       const dice = Math.trunc(Math.random() * 6) + 1;
  //       // 2) change dice shown on screen based on roll
  //       diceEl.classList.remove('hidden');
  //       diceEl.src = `dice-${dice}.png`;

  //       if (dice !== 1) {
  //         //add value of dice to current score
  //         currentScore += dice;
  //         document.getElementById(`current--${activePlayer}`).textContent =
  //           currentScore;
  //       } else {
  //         //switch to next player
  //         switchPlayer();
  //       }
  //     }
  // }
  // });

  return (
    <div className="w-full bg-gradient text-gray-100 min-h-screen">
      <motion.div
        initial={{
          opacity: 0,
        }}
        whileInView={{
          opacity: 1,
        }}
        transition={{
          delay: 1,
          duration: 1.5,
        }}
        viewport={{
          once: true,
        }}
      >
        <h1 className="text-3xl text-center md:text-5xl lg:text-7xl pt-8 lg:pb-5 xl:pb-0 tracking-widest overflow-y-hidden z-[2]">
          Think like a scientist
        </h1>
        <h2 className="text-3xl text-center md:text-4xl lg:text-5xl tracking-[20px] text-gray-400 overflow-y-hidden">
          Sound like a human
        </h2>
      </motion.div>
      <section className="max-w-3xl lg:max-w-7xl mx-auto grid grid-cols-1">
        {/* <motion.div
          initial={{
            opacity: 0,
          }}
          whileInView={{
            opacity: 1,
          }}
          transition={{
            delay: 1.5,
            duration: 1.5,
          }}
          viewport={{
            once: true,
          }}
          className="hidden text-center py-5 lg:pt-5 uppercase "
        >
          <h1 className="text-3xl md:text-5xl lg:text-7xl pt-8 pb-0 sm:pb-20 xl:pb-0 tracking-widest">
            Think like a scientist
          </h1>
          <h2 className="text-xl md:text-4xl lg:text-5xl pt-4 tracking-[20px] text-gray-400">
            Sound like a human
          </h2>
        </motion.div> */}

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
            duration: 1.5,
            delay: 1.5,
          }}
          viewport={{
            once: true,
          }}
          className="xl:hidden mx-auto mb-2"
        >
          <video
            autoPlay
            muted
            playsInline
            loop
            width={960}
            height={960}
            className="h-80 w-80 md:h-[50vh] md:w-[50vh] m-6 object-cover mx-auto"
          >
            <source src="/videos/tpgif.mp4" type="video/webm" />
          </video>
        </motion.div>
        <section className="grid grid-cols-1 xl:grid-cols-2 max-w-[1440px] gap-5 mt-10">
          <motion.div
            initial={{
              opacity: 0,
              x: -100,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              delay: 0,
              duration: 1,
            }}
            viewport={{
              once: true,
            }}
            className="hidden xl:block mx-auto mb-10 sm:mb-0"
          >
            <video
              autoPlay
              muted
              playsInline
              loop
              width={960}
              height={960}
              className="h-80 w-80 md:h-[40vh] md:w-[40vh] xl:h-[65vh] xl:w-[65vh] m-6 object-cover"
            >
              <source src="/videos/tpgif.mp4" />
            </video>
            <div className="hidden md:flex xl:hidden items-center justify-center pt-5">
              <Link href="https://www.talkingpointsforlife.com/">
                <button className="mb-10 sm:mb-[2rem] text-xl btn1-large">
                  Talking Points
                </button>
              </Link>
            </div>
            <div className="hidden md:flex lg:hidden items-center justify-center">
              <Link href="/contact">
                <button className="mb-10 sm:mb-[4rem] text-xl btn1-large">
                  Contact Me
                </button>
              </Link>
            </div>
          </motion.div>

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
              delay: 0,
            }}
            viewport={{
              once: true,
            }}
            className="hidden xl:block mx-4 text-right text-[1.25rem] mb-5"
          >
            <h1 className="text-4xl font-bold px-4 md:pb-5 lg:pb-5 tracking-widest pt-5">
              Deep understanding leads to deep connections
            </h1>
            <p className="px-6 md:px-2 text-justify ml-10">
              Welcome! My unique approach to communications strategy blends
              empathy practices with a deep knowledge of how our brains work.
              This approach connects my clients to their desired audiences in
              meaningful ways. Together, we will meet them where they are -- not
              where we think they should be. Take a look around and explore the
              various services I offer, snapshots of my experience, and samples
              of my work.
              <br></br>
              <br></br>
              To summarise, what I provide for my clients are customized
              communication consultation services including internal/employee
              communication, crisis/issue management, change management, empathy
              training, empathy mapping, and design thinking workshops. I
              guarantee measurable results and help clients communicate
              effectively and navigate change.
              <br></br>
              <br></br>
              PS - most of the art on this site was created by MidJourney, an AI
              artist.
            </p>
            <div className="flex justify-center items-center mt-2">
              <Link href="https://www.talkingpointsforlife.com/">
                <button className="mb-12 sm:mb-[8rem] text-lg btn1-large">
                  Talking Points
                </button>
              </Link>
            </div>
          </motion.div>
        </section>
        <div className="md:col-span-2 xl:hidden">
          <div className="text-center mb-5 sm:mb-5 md:col-span-2">
            <h1 className="text-4xl font-bold px-4 pb-5 md:pb-5 md:px-2 lg:pb-5">
              Deep understanding leads to deep connections
            </h1>
            <p className="px-6 md:px-40">
              Welcome! My unique approach to communications strategy blends
              empathy practices with a deep knowledge of how our brains work.
              This approach connects my clients to their desired audiences in
              meaningful ways. Together, we will meet them where they are -- not
              where we think they should be. Take a look around and explore the
              various services I offer, snapshots of my experience, and samples
              of my work.
              <br></br>
              <br></br>
              To summarise, what I provide for my clients are customized
              communication consultation services including internal/employee
              communication, crisis/issue management, change management, empathy
              training, empathy mapping, and design thinking workshops. I
              guarantee measurable results and help clients communicate
              effectively and navigate change.
              <br></br>
              <br></br>
              PS - most of the art on this site was created by MidJourney, an AI
              artist.
            </p>
          </div>
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
          className="col-span-2 xl:hidden mx-auto pt-5"
        >
          <div className="flex justify-between items-center gap-x-10">
            <Link href="https://www.talkingpointsforlife.com/">
              <button className="mb-10 sm:mb-[4rem] text-lg btn1-large">
                Talking Points
              </button>
            </Link>
            <Link href="/services">
              <button className="mb-10 sm:mb-[4rem] text-lg btn1-large">
                My Services
              </button>
            </Link>
          </div>
        </motion.div>
      </section>

      {/* <section className="relative">
        <motion.div
          initial={{
            opacity: 0,
          }}
          whileInView={{
            opacity: 1,
          }}
          transition={{
            duration: 0.5,
          }}
          viewport={{
            once: true,
          }}
        >
          <a href="#quotes">
            <div className="nav-chev-down absolute right-0 bottom-[4.5rem] m-5 lg:m-20 md:pr-5 ">
              <button className="animate-bounce">
                <ChevronDownIcon className="h-6 w-6 md:h-10 md:w-10 text-white" />
              </button>
            </div>
          </a>
        </motion.div>
      </section> */}
    </div>
  );
}

export default Intro;
