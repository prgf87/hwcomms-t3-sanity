import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
// import { motion } from 'framer-motion';

function Intro() {
  return (
    <div className="w-full min-h-screen flex bg-gradient text-gray-100">
      <section className="max-w-3xl lg:max-w-7xl mx-auto grid grid-cols-1 pb-10">
        <div className="text-center py-5 lg:pt-5 lg:pb-5 uppercase">
          <h1 className="text-6xl pt-8 pb-4 tracking-widest">
            Think like a scientist
          </h1>
          <h2 className="text-5xl pt-4 tracking-[20px] text-gray-400">
            Sound like a human
          </h2>
        </div>
        <section className="grid grid-cols-2 max-w-[1040px]">
          <div className="relative mx-auto">
            <Image
              src="/images/gif2.gif"
              alt="Gif"
              width={960}
              height={960}
              className="h-[30rem] w-[30rem]"
            />
          </div>
          <div className="ml-8">
            <h1 className="text-4xl font-bold pb-5 lg:pb-10">
              Deep understanding leads to deep connections
            </h1>
            <p className="p-lite">
              Welcome! My unique approach to communications strategy blends
              empathy practices with a deep knowledge of how our brains work.
              <br></br>
              <br></br>
              This approach connects my clients to their desired audiences in
              meaningful ways. Together, we will meet them where they are -- not
              where we think they should be.
              <br></br>
              <br></br>Take a look around and explore the various services I
              offer, snapshots of my experience, and samples of my work.{' '}
              <br></br>
              <br></br>PS - most of the art on this site was created by
              MidJourney, an AI artist.
            </p>
          </div>
        </section>

        <div className="mx-auto">
          <Link href="https://www.talkingpointsforlife.com/">
            <button className="my-5 text-2xl btn1">Talking Points</button>
          </Link>
        </div>
      </section>
      <section>
        {/* <div className="justify-center items-center px-10 lg:px-20 pt-10">
          <h1 className="text-4xl font-bold">
            Deep understanding leads to deep connections
          </h1>

          <br></br>
          <p className="p-lite">
            Welcome! My unique approach to communications strategy blends
            empathy practices with a deep knowledge of how our brains work.
            <br></br>
            <br></br>
            This approach connects my clients to their desired audiences in
            meaningful ways. Together, we will meet them where they are -- not
            where we think they should be.
            <br></br>
            <br></br>Take a look around and explore the various services I
            offer, snapshots of my experience, and samples of my work. <br></br>
            <br></br>PS - most of the art on this site was created by
            MidJourney, an AI artist.
          </p>
        </div>
        <div className="m-auto">
          <Image
            src="/images/img9.png"
            alt="Intro Picture"
            width={1920}
            height={1080}
            className="p-8"
          />
        </div> */}
      </section>
    </div>
  );
}

export default Intro;
