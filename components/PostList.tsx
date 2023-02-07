import urlFor from '@/lib/urlFor';
import { ArrowUpRightIcon, ChevronDownIcon } from '@heroicons/react/24/solid';
import Image from 'next/image';
import Link from 'next/link';
import ClientSideRoute from './ClientSideRoute';

type Props = {
  posts: Post[];
};

function PostList({ posts }: Props) {
  return (
    <>
      <div className="max-w-[800px] lg:max-w-7xl mx-auto">
        <hr className="border-2 border-[#5EBCAA] my-2" />

        <div className="grid grid-cols-1 md:grid-cols-2 max-grid-rows-4 px-10 gap-10 gap-y-16 pb-24">
          {/* Posts */}

          {posts.map((post) => {
            return (
              <ClientSideRoute
                key={post._id}
                route={`/blog/${post.slug.current}`}
              >
                <div className="flex flex-col group cursor-pointer">
                  <div className="relative w-full h-80 drop-shadow-xl group-hover:scale-105 transition-transform duration-200 ease-out">
                    <Image
                      className="object-cover object-left lg:object-center"
                      src={urlFor(post.mainImage).url()}
                      alt={post.author.name}
                      fill
                    />
                    <div className="absolute bottom-0 w-full bg-opacity-20 bg-black backdrop-blur-lg rounded drop-shadow-lg text-white p-10 flex justify-between">
                      <div>
                        <p className="font-bold">{post.title}</p>
                        <p>
                          {new Date(post._createdAt).toLocaleDateString(
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
                        {post.categories.map((category) => {
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
                    <p className="underline text-lg font-bold">{post.title}</p>
                    <p className="line-clamp-1 text-gray-300">
                      {post.description}
                    </p>
                  </div>
                  <div>
                    <p className="mt-5 font-bold flex items-center group-hover:underline">
                      Read Blog
                      <ArrowUpRightIcon className="ml-2 h-4 w-4" />
                    </p>
                  </div>
                </div>
              </ClientSideRoute>
            );
          })}
        </div>
      </div>
      <a href="#tips">
        <button className="nav-chev-down absolute right-0 bottom-[61.5rem] m-5 lg:m-20 md:pr-5 animate-bounce">
          <ChevronDownIcon className="h-6 w-6 md:h-10 md:w-10 text-white" />
        </button>
      </a>
      <div className="mb-6 flex items-center justify-center bottom-10 relative">
        <Link href="/blog">
          <button className="btn1-large text-xl">Hailey&apos; Blog</button>
        </Link>
      </div>
    </>
  );
}

export default PostList;
