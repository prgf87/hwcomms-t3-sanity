'use client';

import React from 'react';

function ServicesList() {
  return (
    <section id="services-list" className="bg-gradient-invert w-screen">
      <div className="min-h-screen my-20 text-gray-200">
        <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-6xl text-center tracking-[20px]  sm:px-20 py-5 lg:pt-16 xl:px-[15rem] uppercase pt-20">
          I&apos;m here to help
        </h2>
        <p className="text-2xl">
          <a href="/contact" className="font-semibold hover:text-gray-600">
            Contact me
          </a>{' '}
          for a free consultation
        </p>
        <div className="grid grid-cols-1 mx-auto pt-10 max-w-7xl">
          <div className="flex-row justify-center lg:flex lg:justify-evenly items-center">
            <video
              src="/videos/tpgif.mp4"
              autoPlay
              muted
              playsInline
              loop
              width={960}
              height={960}
              className="rounded-lg h-[30rem] w-[30rem]"
            />

            <div>
              <div className="h-[30rem] grid border-2 rounded-xl border-gray-800/20 p-[0.10rem] px-8 bg-slate-600/70 text-gray-200 hover:text-gray-300 hover:bg-gray-700/80 hover:border-gray-800/20 transition transform ease-in duration-300">
                <h1 className="text-xl font-bold mt-4 px-10">
                  Internal/Employee Communications Consultation
                </h1>
                <p className="mb-2 h-20">
                  My services are customized to meet the specific needs of each
                  client. I work collaboratively throughout the entire process
                  and guarantee measurable results. Contact me to find out how I
                  can help today.
                </p>
                <h1 className="text-xl font-bold mt-4 px-10">
                  Crisis Communication/Issue Management Consultation
                </h1>
                <p className="mb-2 h-20">
                  Dealing with a sticky issue and not quite sure how to
                  communicate it to your employees or customers? I&apos;ll
                  create and execute a strategy to guide you through it.
                </p>
                <h1 className="text-xl font-bold mt-4 px-10">
                  Change Management Communications Consultation
                </h1>
                <p className="mb-2 h-20">
                  Change is hard, but I can help you through it by executing a
                  people-first strategy. Combining a deep knowledge of brain
                  science and nearly 12 years of communications experience, I
                  will create a plan to help your employees or customers
                  navigate change.
                </p>
              </div>
            </div>
          </div>

          <div className="flex justify-evenly items-center">
            <div>
              <div className="h-[30rem] grid border-2 rounded-xl border-gray-800/20 p-[0.10rem] px-2 gap-y-2 bg-slate-600/70 text-gray-200 hover:text-gray-300 hover:bg-gray-700/80 hover:border-gray-800/20 transition transform ease-in duration-300">
                <h1 className="text-xl font-bold mt-4 px-10">
                  Empathy Communications Training
                </h1>
                <p className="mb-2 h-20">
                  While I can&apos;t make anyone feel more empathy, I can help
                  you communicate more empathetically. This training is great
                  for managers and customer-facing employees. I will give your
                  team the ability to communicate effectively in high-stress
                  situations (e.g., handling a customer complaint) with
                  confidence.
                </p>
                <h1 className="text-xl font-bold mt-4 px-10">
                  Empathy Mapping Workshop
                </h1>
                <p className="mb-2 h-20">
                  I&apos;ll work with your Marketing Team to create customer
                  personas, and journey and empathy maps. This workshop is
                  designed to give your team the skills and tools to fully
                  understand your customers&apos; needs.
                </p>
                <h1 className="text-xl font-bold mt-4 px-10">
                  Design Thinking Workshop
                </h1>
                <p className="mb-2 h-20">
                  Have a sticky project or process challenge? Designing a new
                  product or program? Design Thinking is a proven way to
                  crowdsource and test the best ideas from your team.
                </p>
              </div>
            </div>
            <video
              src="/videos/tpgif.mp4"
              autoPlay
              muted
              playsInline
              loop
              width={960}
              height={960}
              className="rounded-lg h-[30rem] w-[30rem]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default ServicesList;
