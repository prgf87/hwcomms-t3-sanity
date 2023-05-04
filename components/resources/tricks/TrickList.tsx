import urlFor from '@/lib/urlFor';
import { Trick } from '@/typing';
import { ArrowUpRightIcon, ChevronDownIcon } from '@heroicons/react/24/solid';
import Image from 'next/image';
import Link from 'next/link';
import ClientSideRoute from '@/components/navigation/ClientSideRoute';

type Props = {
  tricks: Trick[];
};

function TrickList({ tricks }: Props) {
  return (
    <>
      <div className="max-w-[800px] lg:max-w-7xl mx-auto">
        <hr className="border-2 border-[#5EBCAA] my-2" />

        <div className="grid grid-cols-1 px-10 gap-10 gap-y-16 pb-24">
          {/* Posts */}

          {tricks.map((trick, index) => {
            return (
              <ClientSideRoute key={index} route={trick.linktotrick}>
                <div className="flex flex-col group cursor-pointer">
                  <div className="relative w-full h-80 drop-shadow-xl group-hover:scale-105 transition-transform duration-200 ease-out">
                    <Image
                      className="object-cover object-left lg:object-center"
                      src={urlFor(trick.mainImage).url()}
                      alt={trick.title}
                      fill
                    />
                    <div className="absolute bottom-0 w-full bg-opacity-20 bg-black backdrop-blur-lg rounded drop-shadow-lg text-white p-10 flex justify-between">
                      <div>
                        <p className="font-bold line-clamp-1">{trick.title}</p>
                        <p>
                          {new Date(trick._createdAt).toLocaleDateString(
                            'en-US',
                            {
                              day: 'numeric',
                              month: 'long',
                              year: 'numeric',
                            }
                          )}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="mt-5 flex-1">
                    <p className="underline text-lg font-bold line-clamp-1">
                      {trick.title}
                    </p>
                    <p className="line-clamp-1 text-gray-300">
                      {trick.description}
                    </p>
                  </div>
                  <div>
                    <p className="mt-5 font-bold flex items-center group-hover:underline">
                      Go to Tool
                      <ArrowUpRightIcon className="ml-2 h-4 w-4" />
                    </p>
                  </div>
                </div>
              </ClientSideRoute>
            );
          })}
        </div>
      </div>
      {/* <a href="#tips">
        <button className="nav-chev-down absolute right-0 bottom-[61.5rem] m-5 lg:m-20 md:pr-5 animate-bounce">
          <ChevronDownIcon className="h-6 w-6 md:h-10 md:w-10 text-white" />
        </button>
      </a>
    */}
      <div className="mb-6 flex items-center justify-center bottom-10 relative">
        <Link href="/blog">
          <button className="btn1-large text-xl">Bag of Tricks</button>
        </Link>
      </div>
    </>
  );
}

export default TrickList;
