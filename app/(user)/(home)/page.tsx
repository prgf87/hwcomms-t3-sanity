import { previewData } from 'next/headers';
import { groq } from 'next-sanity';
import { client } from '@/lib/sanity.client';
import PreviewPostList from '@/components/PreviewPostList';
import PreviewSuspense from '@/components/PreviewSuspense';
import PreviewTipList from '@/components/PreviewTipList';
import Intro from '@/components/Intro';
import QuoteCarousel from '@/components/QuoteCarousel';
import Snapshots from '@/components/Snapshots';
import ReviewCarousel from '@/components/ReviewCarousel';
import Banner from '@/components/Banner';
import PostList from '@/components/PostList';
import TipList from '@/components/TipList';
import Hero from '@/components/Hero';
import Link from 'next/link';
import ToolboxList from '@/components/ToolboxList';
import TrickList from '@/components/TrickList';
import Image from 'next/image';
import DirectoryList from '@/components/DirectoryList';

const query = groq`
*[_type=='post'][0..1] {
  ...,
  author->,
  categories[]->
} | order(_createdAt asc)
`;
const queryTip = groq`
*[_type=='tip'][0..1] {
  ...,
  author->,
  categories[]->
} | order(_createdAt asc)
`;
const queryQuote = groq`
*[_type=='quote'] {
  ...,
  author->,
  categories[]->
} | order(_createdAt asc)
`;
const queryReview = groq`
*[_type=='review'] {
  ...,
  author->,
  categories[]->
} | order(_createdAt asc)
`;
const queryToolbox = groq`
*[_type=='toolbox'][0..1] {
  ...,
  author->,
  categories[]->
} | order(_createdAt asc)
`;
const queryTrick = groq`
*[_type=='trick'][0..1] {
  ...,
  author->,
  categories[]->
} | order(_createdAt asc)
`;
const queryDirectory = groq`
*[_type=='directory'][0..1] {
  ...,
  author->,
  categories[]->
} | order(_createdAt asc)
`;

export const revalidate = 60;

export default async function HomePage() {
  if (previewData()) {
    return (
      <PreviewSuspense
        fallback={
          <div role="status">
            <p className="text-center text-lg animate-pulse text-[#5EBCAA]">
              Loading Preview Data...
            </p>
          </div>
        }
      >
        <PreviewPostList query={query} />
        <PreviewTipList query={queryTip} />
      </PreviewSuspense>
    );
  }
  const posts = await client.fetch(query);
  const tips = await client.fetch(queryTip);
  const quotes = await client.fetch(queryQuote);
  const reviews = await client.fetch(queryReview);
  const toolboxes = await client.fetch(queryToolbox);
  const tricks = await client.fetch(queryTrick);
  const directories = await client.fetch(queryDirectory);

  return (
    <main className="min-h-screen w-screen">
      <div className="overflow-x-hidden">
        <div id="home" className="snap-start" />
        <Hero
          heading="Hailey Wilson Communications"
          message="Where there's a Wilson, there's a way"
          heroanchor="/#intro"
          custombg="custom-img"
        />

        <div>
          <div id="intro" className="relative top-[-80px]" />
          <Intro />
        </div>
        <div>
          <div id="quotes" className="relative top-[-75px]" />
          <QuoteCarousel quotes={quotes} />
        </div>
        <div>
          <div id="snapshot" className="relative top-[-70px]" />
          <Snapshots />
        </div>
        <div>
          <div id="review" className="relative top-[-80px]" />
          <ReviewCarousel reviews={reviews} />
        </div>

        {/* Blog and Resources */}

        <div className="custom-img9 relative">
          <div className="grid grid-cols-1 max-w-3xl lg:max-w-7xl mx-auto text-gray-100">
            <div className="absolute left-0 top-0 right-0 bottom-0 bg-gradient-to-b from-black/70 to-black/50 z-[0]" />

            <div className="relative">
              <div id="tips" className="relative top-[-40px] " />
              <div className="z-[2] grid grid-cols-2 gap-10">
                <Link href="resources" className="col-span-2">
                  <h1 className="text-7xl text-center mt-20 text-gray-300 tracking-[15px] uppercase transition transform hover:scale-105 hover:text-gray-300 hover:text-opacity-75 mx-auto rounded-3xl">
                    Resources &amp; Tips
                  </h1>
                </Link>
                <div>
                  <h1 className="text-2xl text-center font-semibold tracking-[7px]">
                    Tips
                  </h1>
                  <TipList tips={tips} />
                </div>
                <div>
                  <h1 className="text-2xl text-center font-semibold tracking-[7px]">
                    Blog
                  </h1>
                  <PostList posts={posts} />
                </div>
                <div>
                  <h1 className="text-2xl text-center font-semibold tracking-[7px]">
                    Writer&apos;s Toolbox
                  </h1>
                  <ToolboxList toolboxes={toolboxes} />
                </div>
                <div>
                  <h1 className="text-2xl text-center font-semibold tracking-[7px]">
                    Bag of Tricks
                  </h1>
                  <TrickList tricks={tricks} />
                </div>

                <div className="col-span-2">
                  <h1 className="text-2xl text-center font-semibold tracking-[7px]">
                    Online Resource Directory{' '}
                  </h1>
                  <DirectoryList directories={directories} />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div id="banner" className="relative bottom-0" />
          <Banner />
        </div>
      </div>
    </main>
  );
}
