'use client';

import Image from 'next/image';
import React from 'react';

function ServicesList() {
  return (
    <section id="services-list" className="bg-gradient-invert w-full">
      <div className="min-h-screen mt-20 text-gray-200">
        <h1 className="text-2xl md:text-3xl lg:text-4xl xl:text-6xl text-center tracking-[10px]  sm:px-20 lg:pt-24 xl:px-[15rem] uppercase pt-8 sm:pt-20">
          I&apos;m here to help
        </h1>
        <div className="mx-8">
          <p className="max-w-3xl mx-auto pb-8 pt-4">
            My services are customized to meet the specific needs of each
            client.
            <br></br>I offer one-on-one consultations as well as workshops to
            benefit your whole team. <br></br>
            <br></br>Learn how to harness the power of AI tools for strategic
            marketing and communication, and stay on the cutting edge of
            innovation.
          </p>
          <p className="text-xl">
            <a
              href="/contact"
              className="font-semibold hover:text-gray-600 underline"
            >
              Contact me
            </a>{' '}
            for a free consultation.
          </p>
        </div>
        <div className="grid grid-cols-1 mx-auto sm:pt-10 max-w-7xl">
          <div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 my-8 mx-8 xl:mx-0">
              <div className="border bg-slate-600/70 rounded-xl p-8">
                <Image
                  src={'/images/service1.png'}
                  width={1000}
                  height={1000}
                  alt={'Image'}
                  className="h-40 w-40 m-auto rounded-full"
                />
                <h1 className="text-xl font-bold mt-4">
                  AI Safety Training for Individuals and Businesses
                </h1>
                <p className="mb-2 mt-4">
                  Safety first! I will help you establish guidelines and best
                  practices for using AI tools, balancing data protection with
                  the power of innovation. Learn about data-protection and
                  privacy laws, security, and transparency. I will empower you
                  to harness the full potential of AI in a responsible,
                  human-centered way.
                </p>
              </div>
              <div className="border bg-slate-600/70 rounded-xl p-8">
                <Image
                  src={'/images/service2.png'}
                  width={1000}
                  height={1000}
                  alt={'Image'}
                  className="h-40 w-40 m-auto rounded-full"
                />
                <h1 className="text-xl font-bold mt-4">
                  AI Marketing Tools Consultation
                </h1>
                <p className="mb-2 mt-4">
                  I will help you identify the right AI tools for your specific
                  needs, ensuring you invest in solutions that drive results.
                  Together we will design and implement AI workflows to maximize
                  efficiency and aid human creativity.
                </p>
              </div>
              <div className="border bg-slate-600/70 rounded-xl p-8">
                <Image
                  src={'/images/service3.png'}
                  width={1000}
                  height={1000}
                  alt={'Image'}
                  className="h-40 w-40 m-auto rounded-full"
                />
                <h1 className="text-xl font-bold mt-4">
                  Crisis Communication/Issue Management Consultation
                </h1>
                <p className="mb-2 mt-4">
                  Dealing with a sticky issue and not quite sure how to
                  communicate it to your employees or customers? I&apos;ll
                  create and execute a strategy to guide you through it.
                </p>
              </div>
              <div className="border bg-slate-600/70 rounded-xl p-8">
                <Image
                  src={'/images/service4.png'}
                  width={1000}
                  height={1000}
                  alt={'Image'}
                  className="h-40 w-40 m-auto rounded-full"
                />
                <h1 className="text-xl font-bold mt-4">
                  Internal/Employee Communications Consultation
                </h1>
                <p className="mb-2 mt-4">
                  Together, we will build communication strategies and practices
                  to ensure your employees are informed, engaged, and aligned
                  with your organization&apos;s mission. Good communication
                  leads to improved morale, job satisfaction and productivity.
                </p>
              </div>
              <div className="border bg-slate-600/70 rounded-xl p-8">
                <Image
                  src={'/images/service5.png'}
                  width={1000}
                  height={1000}
                  alt={'Image'}
                  className="h-40 w-40 m-auto rounded-full"
                />
                <h1 className="text-xl font-bold mt-4">
                  Change in Management Communications Consultation
                </h1>
                <p className="mb-2 mt-4">
                  Change is hard, but I can help you through it by executing a
                  people-first strategy. Combining a deep knowledge of brain
                  science and 15 years of communications experience, I will
                  create a plan to help your employees or customers navigate
                  change.
                </p>
              </div>
              <div className="border bg-slate-600/70 rounded-xl p-8">
                <Image
                  src={'/images/service6.png'}
                  width={1000}
                  height={1000}
                  alt={'Image'}
                  className="h-40 w-40 m-auto rounded-full"
                />
                <h1 className="text-xl font-bold mt-4">
                  Empathy Communications Training
                </h1>
                <p className="mb-2 mt-4">
                  While I can&apos;t make anyone feel more empathy, I can help
                  you communicate more empathetically. This training is great
                  for managers and customer-facing employees. I will give your
                  team the ability to communicate effectively in high-stress
                  situations (e.g., handling a customer complaint) with
                  confidence.
                </p>
              </div>
              <div className="border bg-slate-600/70 rounded-xl p-8">
                <Image
                  src={'/images/service7.png'}
                  width={1000}
                  height={1000}
                  alt={'Image'}
                  className="h-40 w-40 m-auto rounded-full"
                />
                <h1 className="text-xl font-bold mt-4">
                  Empathy Mapping Workshop
                </h1>
                <p className="mb-2 mt-4">
                  I&apos;ll work with your Marketing Team to create customer
                  personas, and journey and empathy maps. This workshop is
                  designed to give your team the skills and tools to fully
                  understand your customers&apos; needs.
                </p>
              </div>
              <div className="border bg-slate-600/70 rounded-xl p-8">
                <Image
                  src={'/images/service8.png'}
                  width={1000}
                  height={1000}
                  alt={'Image'}
                  className="h-40 w-40 m-auto rounded-full"
                />
                <h1 className="text-xl font-bold mt-4">
                  Design Thinking Workshop
                </h1>
                <p className="mb-2 mt-4">
                  Have a sticky project or process challenge? Designing a new
                  product or program? Design Thinking is a proven way to
                  crowdsource and test the best ideas from your team.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ServicesList;
