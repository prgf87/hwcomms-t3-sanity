import urlFor from '@/lib/urlFor';
import { ArrowUpRightIcon } from '@heroicons/react/24/solid';
import Image from 'next/image';
import ClientSideRoute from './ClientSideRoute';

type Props = {
  tips: Tip[];
};

function TipList({ tips }: Props) {
  console.log(tips);
  return (
    <div className="max-w-7xl mx-auto">
      <hr className="border-[#5EBCAA] mb-10" />
      <h1>Hello Tip List!</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 px-10 gap-10 gap-y-16 pb-24">
        {/* Tips */}

        {tips.map((tip) => {
          return (
            <ClientSideRoute key={tip._id} route={`/tip/${tip.slug.current}`}>
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
                      <p className="font-bold">{tip.title}</p>
                      <p>
                        {new Date(tip._createdAt).toLocaleDateString('en-US', {
                          day: 'numeric',
                          month: 'long',
                          year: 'numeric',
                        })}
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
                  <p className="underline text-lg font-bold">{tip.title}</p>
                  <p className="line-clamp-2 text-gray-500">
                    {tip.description}
                  </p>
                </div>
                <div>
                  <p className="mt-5 font-bold flex items-center group-hover:underline">
                    Read tip
                    <ArrowUpRightIcon className="ml-2 h-4 w-4" />
                  </p>
                </div>
              </div>
            </ClientSideRoute>
          );
        })}
      </div>
    </div>
  );
}

export default TipList;
