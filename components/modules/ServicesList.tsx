'use client';

import React from 'react';

function ServicesList() {
  return (
    <section
      id="services-list"
      className="bg-gradient-invert w-screen min-h-screen"
    >
      <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-6xl text-center tracking-[20px] text-gray-200 px-20 py-5 lg:pt-16 xl:px-[30rem] uppercase">
        The ways in which I can help
      </h2>
      <div className="grid grid-cols-1 max-w-[70vw] lg:max-w-[45vw] items-center mx-auto">
        <div className="xl:absolute xl:top-[75%] xl:right-[50%] px-5 lg:-p-0">
          <video
            src="/videos/gif1.mp4"
            autoPlay
            muted
            playsInline
            loop
            width={960}
            height={960}
            className="rounded-lg"
          />
        </div>
        {/* <div className="xl:absolute xl:top-[75%] xl:right-[50%]">
          <video
            src="/videos/gif1.mp4"
            autoPlay
            muted
            playsInline
            loop
            width={960}
            height={960}
            className="rounded-lg"
          />
        </div> */}

        <div className="xl:absolute xl:max-w-[50vw] xl:right-[0] xl:top-[75%]">
          <div className="px-5 space-y-0.5 text-[0.9rem]">
            <div className="grid border-2 rounded-xl border-gray-800/20 p-[0.10rem] px-10 bg-slate-600/70 text-gray-200 hover:text-gray-300 hover:bg-gray-700/80 hover:border-gray-800/20 transition transform ease-in duration-500">
              <h1 className="text-2xl font-bold mt-1">
                Internal/Employee Communications Consultation
              </h1>
              <p className="mb-2 h-18">
                My services are customized to meet the specific needs of each
                client. I work collaboratively throughout the entire process and
                guarantee measurable results. Contact me to find out how I can
                help today.
              </p>
            </div>

            <div className="grid border-2 rounded-xl border-gray-800/20 p-[0.10rem] px-10 bg-slate-600/70 text-gray-200 hover:text-gray-300 hover:bg-gray-700/80 hover:border-gray-800/20 transition transform ease-in duration-500">
              <h1 className="text-2xl font-bold mt-1">
                Crisis Communication/Issue Management Consultation
              </h1>
              <p className="mb-2 h-18">
                Dealing with a sticky issue and not quite sure how to
                communicate it to your employees or customers? I&apos;ll create
                and execute a strategy to guide you through it.
              </p>
            </div>

            <div className="grid border-2 rounded-xl border-gray-800/20 p-[0.10rem] px-10 bg-slate-600/70 text-gray-200 hover:text-gray-300 hover:bg-gray-700/80 hover:border-gray-800/20 transition transform ease-in duration-500">
              <h1 className="text-2xl font-bold mt-1">
                Change Management Communications Consultation
              </h1>
              <p className="mb-2 h-18">
                Change is hard, but I can help you through it by executing a
                people-first strategy. Combining a deep knowledge of brain
                science and nearly 12 years of communications experience, I will
                create a plan to help your employees or customers navigate
                change.
              </p>
            </div>

            <div className="grid border-2 rounded-xl border-gray-800/20 p-[0.10rem] px-10 bg-slate-600/70 text-gray-200 hover:text-gray-300 hover:bg-gray-700/80 hover:border-gray-800/20 transition transform ease-in duration-500">
              <h1 className="text-2xl font-bold mt-1">
                Empathy Communications Training
              </h1>

              <p className="mb-2 h-18">
                While I can&apos;t make anyone feel more empathy, I can help you
                communicate more empathetically. This training is great for
                managers and customer-facing employees. I will give your team
                the ability to communicate effectively in high-stress situations
                (e.g., handling a customer complaint) with confidence.
              </p>
            </div>

            <div className="grid border-2 rounded-xl border-gray-800/20 p-[0.10rem] px-10 bg-slate-600/70 text-gray-200 hover:text-gray-300 hover:bg-gray-700/80 hover:border-gray-800/20 transition transform ease-in duration-500">
              <h1 className="text-2xl font-bold mt-1">
                Empathy Mapping Workshop
              </h1>

              <p className="mb-2 h-18">
                I&apos;ll work with your Marketing Team to create customer
                personas, and journey and empathy maps. This workshop is
                designed to give your team the skills and tools to fully
                understand your customers&apos; needs.
              </p>
            </div>

            <div className="grid border-2 rounded-xl border-gray-800/20 p-[0.10rem] px-10 bg-slate-600/70 text-gray-200 hover:text-gray-300 hover:bg-gray-700/80 hover:border-gray-800/20 transition transform ease-in duration-500">
              <h1 className="text-2xl font-bold mt-1">
                Design Thinking Workshop
              </h1>

              <p className="mb-2 h-18">
                Have a sticky project or process challenge? Designing a new
                product or program? Design Thinking is a proven way to
                crowdsource and test the best ideas from your team.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ServicesList;
