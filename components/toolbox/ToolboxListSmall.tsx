import urlFor from '@/lib/urlFor';
import { Toolbox } from '@/typing';
import { ArrowUpRightIcon } from '@heroicons/react/24/solid';
import Image from 'next/image';
import ClientSideRoute from '../navigation/ClientSideRoute';

type Props = {
  toolboxes: Toolbox[];
};

function ToolboxListSmall({ toolboxes }: Props) {
  return (
    <>
      <div className="max-w-[800px] lg:max-w-7xl mx-auto">
        {/* <div className="col-span-2 flex items-center justify-center py-4">
          <Link href="/resources">
            <button className="btn1-large text-xl">Resources &amp; toolboxes</button>
          </Link>
        </div> */}
        <hr className="border-2 border-[#5EBCAA] my-2" />

        <div className="grid grid-cols-1 px-8 py-2 gap-y-4 pb-24 mt-8">
          {/* toolboxes */}

          {toolboxes.map((toolbox) => {
            return (
              <ClientSideRoute key={toolbox._id} route={toolbox.linktotoolbox}>
                <div className="grid grid-cols-2 group cursor-pointer text-sm text-center items-center">
                  <div className="relative w-40 h-40 drop-shadow-xl group-hover:scale-105 transition-transform duration-200 ease-out">
                    <Image
                      className="object-cover object-center rounded-full m-auto p-1"
                      src={urlFor(toolbox.mainImage).url()}
                      alt={toolbox.title}
                      fill
                    />
                    <div className="absolute w-[22rem] h-40 bg-opacity-30 bg-black backdrop-blur-md rounded  text-white flex justify-between" />
                    <div className="relative right-[-10rem] top-4 z-[2]">
                      <p className="font-bold line-clamp-2">{toolbox.title}</p>
                      <p>
                        {new Date(toolbox._createdAt).toLocaleDateString(
                          'en-US',
                          {
                            day: 'numeric',
                            month: 'long',
                            year: 'numeric',
                          }
                        )}
                      </p>
                      {/* <div className="flex flex-col md:flex-row gap-y-2 md:gap-x-2 items-center justify-center pt-2">
                        {toolbox.categories.map((category: any) => {
                          return (
                            <div
                              key={category._id}
                              className="bg-[#5EBCAA] text-center text-black px-3 py-1 rounded-full text-sm font-semibold"
                            >
                              <div>{category.title}</div>
                            </div>
                          );
                        })}
                      </div> */}
                      <div className="flex justify-center items-center">
                        <p className="mt-5 font-bold flex items-center group-hover:underline">
                          Read Tip
                          <ArrowUpRightIcon className="ml-2 h-4 w-4" />
                        </p>
                      </div>
                    </div>
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
    </>
  );
}

export default ToolboxListSmall;
