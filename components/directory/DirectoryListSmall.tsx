import urlFor from '@/lib/urlFor';
import { Directory } from '@/typing';
import { ArrowUpRightIcon } from '@heroicons/react/24/solid';
import Image from 'next/image';
import ClientSideRoute from '../navigation/ClientSideRoute';

type Props = {
  directories: Directory[];
};

function DirectoryListSmall({ directories }: Props) {
  return (
    <>
      <div className="max-w-[800px] lg:max-w-7xl mx-auto">
        <div className="grid grid-cols-1 px-8 py-2 gap-y-4 pb-8 mt-8">
          {/* directories */}

          {directories.map((directory) => {
            return (
              <div key={directory._id}>
                <div className="grid grid-cols-2 group cursor-pointer text-sm text-center items-center">
                  <div className="relative w-40 h-40 drop-shadow-xl group-hover:scale-105 transition-transform duration-200 ease-out">
                    <Image
                      className="object-cover object-center rounded-full m-auto p-1"
                      src={urlFor(directory.mainImage).url()}
                      alt={directory.title}
                      fill
                    />
                    <div className="absolute w-[22rem] h-40 bg-opacity-40 bg-black rounded  text-white flex justify-between" />
                    <div className="relative right-[-10rem] top-4 z-[2] px-4">
                      <p className="font-bold line-clamp-2">
                        {directory.title}
                      </p>
                      <p>
                        {new Date(directory._createdAt).toLocaleDateString(
                          'en-US',
                          {
                            day: 'numeric',
                            month: 'long',
                            year: 'numeric',
                          }
                        )}
                      </p>

                      <div className="flex justify-center items-center">
                        <p className="mt-5 font-bold flex items-center group-hover:underline">
                          Read Directory
                          <ArrowUpRightIcon className="ml-2 h-4 w-4" />
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default DirectoryListSmall;
