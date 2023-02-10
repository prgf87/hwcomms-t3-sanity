import React from 'react';

function ServicesList() {
  return (
    <section id="services-list" className="bg-gradient-invert w-screen">
      <div className="grid grid-cols-1 xl:grid-cols-2 max-w-screen items-center min-h-screen">
        <div className="col-start-1 xl:col-span-2">
          <h2 className="text-2xl md:text-4xl lg:text-5xl xl:text-7xl text-center tracking-[20px] text-gray-200 px-20 py-5 xl:px-[20rem] ">
            How I can help you communicate better
          </h2>
        </div>
        <div>
          <div>
            <video
              src="/videos/gif1.webm"
              autoPlay
              muted
              playsInline
              loop
              width={960}
              height={960}
              className="bg-contain px-10 pb-5 mx-auto"
            />
          </div>
        </div>

        <div className="w-full md:w-3/5 mx-auto p-8">
          <div className="text-white">
            <div className="tab mb-1 w-full p-2 pt-1 overflow-hidden border-t">
              <span className="font-hairline text-xs">Design Thinking</span>
              <input
                className="absolute opacity-0 "
                id="tab-multi-one"
                type="checkbox"
                name="tabs"
              />
              <label
                className="block leading-normal whitespace-no-wrap cursor-pointer"
                htmlFor="tab-multi-one"
              ></label>
              <div className="tab-content overflow-hidden leading-normal">
                <p className="p-5">Box 1</p>
              </div>
            </div>
            <div className="tab mb-1 w-full p-2 pt-1 overflow-hidden border-t">
              <span className="font-hairline text-xs">Service Design</span>
              <input
                className="absolute opacity-0"
                id="tab-multi-two"
                type="checkbox"
                name="tabs"
              />
              <label
                className="block leading-normal whitespace-no-wrap cursor-pointer"
                htmlFor="tab-multi-two"
              ></label>
              <div className="tab-content overflow-hidden leading-normal">
                <p className="p-5">Box2</p>
              </div>
            </div>
            <div className="tab mb-1 w-full p-2 pt-1 overflow-hidden border-t">
              <span className="font-hairline text-xs">Agile Innovation</span>
              <input
                className="absolute opacity-0"
                id="tab-multi-three"
                type="checkbox"
                name="tabs"
              />
              <label
                className="block w-full whitespace-no-wrap cursor-pointer"
                htmlFor="tab-multi-three"
              ></label>

              <div className="tab-content overflow-hidden leading-normal">
                <p className="p-5">Box 3</p>
              </div>
            </div>
          </div>
        </div>

        {/* <div className="max-w-lg mx-auto mt-8">
          <div className="relative mb-1">
            <input type="checkbox" id="toggle1" className="toggle hidden" />
            <label
              className="title block font-bold bg-white p-4 cursor-pointer"
              for="toggle1"
            >
              Title goes here
            </label>
            <div className="content bg-white overflow-hidden">
              <p className="p-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat
              </p>
            </div>
          </div>
          <div className="relative mb-1">
            <input type="checkbox" id="toggle2" className="toggle hidden" />
            <label
              className="title block font-bold bg-white p-4 cursor-pointer"
              for="toggle2"
            >
              Title goes here
            </label>
            <div className="content bg-white overflow-hidden">
              <p className="p-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat
              </p>
            </div>
          </div>
          <div className="relative mb-1">
            <input type="checkbox" id="toggle3" className="toggle hidden" />
            <label
              className="title block font-bold bg-white p-4 cursor-pointer"
              for="toggle3"
            >
              Title goes here
            </label>
            <div className="content bg-white overflow-hidden">
              <p className="p-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat
              </p>
            </div>
          </div>
        </div> */}

        {/* <div className="pt-12 pb-24">
          <div className="px-20 space-y-6">
            <div className="grid border-2 rounded-xl border-gray-800/20 p-[0.10rem] px-10 bg-slate-600/70 text-gray-200 hover:text-gray-300 hover:bg-gray-700/80 hover:border-gray-800/20 transition transform ease-in duration-500">
              <h1 className="text-2xl font-bold">
                Internal/Employee Communications Consultation
              </h1>
              <p className="my-2 line-clamp-1 hover:line-clamp-none transition transform ease-in duration-500">
                My services are customized to meet the specific needs of each
                client. I work collaboratively throughout the entire process and
                guarantee measurable results. Contact me to find out how I can
                help today.
              </p>
            </div>

            <div className="grid border-2 rounded-xl border-gray-800/20 p-[0.10rem] px-10 bg-slate-600/70 text-gray-200 hover:text-gray-300 hover:bg-gray-700/80 hover:border-gray-800/20 transition transform ease-in duration-500">
              <h1 className="text-2xl font-bold">
                Crisis Communication/Issue Management Consultation
              </h1>
              <p className="my-2 line-clamp-1 hover:line-clamp-none transition transform ease-in duration-500">
                Dealing with a sticky issue and not quite sure how to
                communicate it to your employees or customers? I&apos;ll create
                and execute a strategy to guide you through it.
              </p>
            </div>

            <div className="grid border-2 rounded-xl border-gray-800/20 p-[0.10rem] px-10 bg-slate-600/70 text-gray-200 hover:text-gray-300 hover:bg-gray-700/80 hover:border-gray-800/20 transition transform ease-in duration-500">
              <h1 className="text-2xl font-bold">
                Change Management Communications Consultation
              </h1>
              <p className="my-2 line-clamp-1 hover:line-clamp-none transition transform ease-in duration-500">
                Change is hard, but I can help you through it by executing a
                people-first strategy. Combining a deep knowledge of brain
                science and nearly 15 years of communications experience, I will
                create a plan to help your employees or customers navigate
                change.
              </p>
            </div>

            <div className="grid border-2 rounded-xl border-gray-800/20 p-[0.10rem] px-10 bg-slate-600/70 text-gray-200 hover:text-gray-300 hover:bg-gray-700/80 hover:border-gray-800/20 transition transform ease-in duration-500">
              <h1 className="text-2xl font-bold">
                Empathy Communications Training
              </h1>

              <p className="my-2 line-clamp-1 hover:line-clamp-none transition transform ease-in duration-500">
                While I can&apos;t make anyone feel more empathy, I can help you
                communicate more empathetically. This training is great for
                managers and customer-facing employees. I will give your team
                the ability to communicate effectively in high-stress situations
                (e.g., handling a customer complaint) with confidence.
              </p>
            </div>

            <div className="grid border-2 rounded-xl border-gray-800/20 p-[0.10rem] px-10 bg-slate-600/70 text-gray-200 hover:text-gray-300 hover:bg-gray-700/80 hover:border-gray-800/20 transition transform ease-in duration-500">
              <h1 className="text-2xl font-bold">Empathy Mapping Workshop</h1>

              <p className="my-2 line-clamp-1 hover:line-clamp-none transition transform ease-in duration-500">
                I&apos;ll work with your Marketing Team to create customer
                personas, and journey and empathy maps. This workshop is
                designed to give your team the skills and tools to fully
                understand your customers&apos; needs.
              </p>
            </div>

            <div className="grid border-2 rounded-xl border-gray-800/20 p-[0.10rem] px-10 bg-slate-600/70 text-gray-200 hover:text-gray-300 hover:bg-gray-700/80 hover:border-gray-800/20 transition transform ease-in duration-500">
              <h1 className="text-2xl font-bold">Design Thinking Workshop</h1>

              <p className="my-2 line-clamp-1 hover:line-clamp-none transition transform ease-in duration-500">
                Have a sticky project or process challenge? Designing a new
                product or program? Design Thinking is a proven way to
                crowdsource and test the best ideas from your team.
              </p>
            </div>
          </div>
        </div> */}
      </div>
    </section>
  );
}

export default ServicesList;
