import urlFor from '@/lib/urlFor';
import { Tip } from '@/typing';
import { ArrowUpRightIcon, ChevronDownIcon } from '@heroicons/react/24/solid';
import Image from 'next/image';
import Link from 'next/link';
// import Link from 'next/link';
import ClientSideRoute from './ClientSideRoute';

type Props = {
  tips: Tip[];
};

function TipList({ tips }: Props) {
  return (
    <>
      <div className="max-w-[800px] lg:max-w-7xl mx-auto">
        <hr className="border-2 border-[#5EBCAA] my-2" />

        <div className="grid grid-cols-1 px-10 gap-10 gap-y-16 pb-24">
          {/* Tips */}

          {tips.map((tip) => {
            return (
              <ClientSideRoute
                key={tip._id}
                route={`/resources/${tip.slug.current}`}
              >
                <div className="flex flex-col group cursor-pointer">
                  <div className="relative w-full h-80 drop-shadow-xl group-hover:scale-105 transition-transform duration-200 ease-out">
                    <Image
                      className="object-cover object-left lg:object-center"
                      src={urlFor(tip.mainImage).url()}
                      alt={tip.author.name}
                      fill
                    />
                    <div className="absolute bottom-0 w-full bg-opacity-20 bg-black backdrop-blur-lg rounded drop-shadow-lg text-white p-10 flex justify-between">
                      <div>
                        <p className="font-bold line-clamp-1">{tip.title}</p>
                        <p>
                          {new Date(tip._createdAt).toLocaleDateString(
                            'en-US',
                            {
                              day: 'numeric',
                              month: 'long',
                              year: 'numeric',
                            }
                          )}
                        </p>
                      </div>

                      <div className="flex flex-col md:flex-row gap-y-2 md:gap-x-2 items-center">
                        {tip.categories.map((category) => {
                          return (
                            <div
                              key={category._id}
                              className="bg-[#5EBCAA] text-center text-black px-3 py-1 rounded-full text-sm font-semibold"
                            >
                              <div>{category.title}</div>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                  <div className="mt-5 flex-1">
                    <p className="underline text-lg font-bold line-clamp-1">
                      {tip.title}
                    </p>
                    <p className="line-clamp-1 text-gray-300">
                      {tip.description}
                    </p>
                  </div>
                  <div>
                    <p className="mt-5 font-bold flex items-center group-hover:underline">
                      Read Tip
                      <ArrowUpRightIcon className="ml-2 h-4 w-4" />
                    </p>
                  </div>
                </div>
              </ClientSideRoute>
            );
          })}
        </div>
      </div>
      {/* <a href="#banner">
        <button className="nav-chev-down absolute right-[-19.4rem] bottom-[1.7rem] m-5 lg:m-20 md:pr-5 animate-bounce">
          <ChevronDownIcon className="h-6 w-6 md:h-10 md:w-10 text-white" />
        </button>
      </a>
      */}
      <div className="col-span-2 mb-6 flex items-center justify-center bottom-10 relative">
        <Link href="/resources">
          <button className="btn1-large text-xl">Resources &amp; Tips</button>
        </Link>
      </div>
    </>
  );
}

export default TipList;
