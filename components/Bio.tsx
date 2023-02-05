'use client';

import Image from 'next/image';
import Link from 'next/link';

function Bio() {
  return (
    <section>
      <div id="bio" className="relative top-[-100px]" />
      <section className="bg-transient-to-b from-zinc-900/90 via-zinc-900/20 to-transparent text-gray-200">
        <div className="max-w-lg md:max-w-xl lg:max-w-7xl text-[1.5rem] items-center m-auto  rounded-3xl">
          <div className="grid grid-cols-1 mx-auto mt-20">
            <div className="grid grid-cols-2 mx-auto space-x-20">
              <div className="justify-center items-center m-auto pl-8">
                <h1 className="text-3xl md:text-4xl font-bold md:mt-4 tracking-[2px] text-right">
                  Who is
                </h1>
                <h1 className="text-4xl md:text-4xl font-bold tracking-[10px] text-left text-gray-100">
                  Hailey Wilson?
                </h1>
              </div>
              <div className="h-40 w-40 lg:h-60 lg:w-60 rounded-full overflow-hidden border-4 border-gray-900 flex items-center">
                <Image
                  src={'/images/img1.png'}
                  alt="/"
                  width={1024}
                  height={1024}
                />
              </div>
            </div>
            <div className="col-span-2 text-center lg:px-20">
              <p className="p-8">
                As a down-to-earth communicator, strategist and storyteller, I
                have a single goal for all of my projects: Be authentic.
                Regardless if you&apos;re communicating internally or
                externally, you are connecting with human beings. My mission is
                to never lose that focus. I&apos;ve made a career of studying
                people and telling stories that inform and inspire them.
                Striking that perfect balance between professionalism, humor,
                and authenticity in corporate communications can be challenging,
                but it is a puzzle that I enjoy solving over and over again.
                Whether it is explaining complex energy issues to business
                leaders, or detailing changes to a popular company policy to
                employees, I meet each challenge by remembering successful
                communications involve the following:
              </p>

              <p className="py-2 px-10 md:px-16">
                ☞ Balancing what needs to be communicated with the way the
                audience wants to hear it.
              </p>
              <p className="py-2 px-10 md:px-16">
                ☞ Respecting the audience by using an authentic style and
                avoiding jargon.
              </p>
              <p className="py-2 px-10 md:px-16">
                ☞ Earning the audience&apos;s attention through descriptive
                language and dynamic content.
              </p>

              <p className="p-8">
                I&apos;ve had a lot of success by following these simple rules
                and I&apos;m thankful to the hundreds of employees, executives
                and community members who have taught me through experience.
              </p>

              <p className="pb-8 px-8 mb-2">
                On a personal level, I am an avid photographer always on the
                hunt for that perfect shot. Despite my extreme dislike of
                strenuous exercise, I&apos;ve climbed up steep ravines and
                braved windy summits to capture creamy sunsets and snowy
                landscapes. When I&apos;m not looking through my camera lens,
                I&apos;m writing and chronicling stories of my eccentric family.
              </p>
            </div>
            <div className="col-span-2 flex justify-center items-center">
              <Link href="/contact">
                <button className="btn1-large px-12 py-4 text-2xl mb-10 mt-3">
                  Get in Touch
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
}

export default Bio;
