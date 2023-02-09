import { previewData } from 'next/headers';
import { groq } from 'next-sanity';
import { client } from '@/lib/sanity.client';
import Link from 'next/link';
import ToolboxList from '@/components/toolbox/ToolboxList';
import TrickList from '@/components/tricks/TrickList';
import DirectoryList from '@/components/directory/DirectoryList';
import PreviewPostList from '@/components/preview/PreviewPostList';
import PreviewSuspense from '@/components/preview/PreviewSuspense';
import PreviewTipList from '@/components/preview/PreviewTipList';
import Intro from '@/components/modules/Intro';
import Snapshots from '@/components/modules/Snapshots';
import PreviewToolboxList from '@/components/preview/PreviewToolboxList';
import PreviewTrickList from '@/components/preview/PreviewTrickList';
import PreviewDirectoryList from '@/components/preview/PreviewDirectoryList';
import PreviewQuoteCarousel from '@/components/preview/PreviewQuoteCarousel';
import PreviewReviewCarousel from '@/components/preview/PreviewReviewCarousel';
import QuoteCarousel from '@/components/quote/QuoteCarousel';
import ReviewCarousel from '@/components/review/ReviewCarousel';
import TipList from '@/components/tip/TipList';
import PostList from '@/components/post/PostList';
import Banner from '@/components/modules/Banner';

const query = groq`
*[_type=='post'] {
  ...,
  author->,
  categories[]->
} | order(_createdAt asc)
`;
const queryTip = groq`
*[_type=='tip'] {
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
*[_type=='toolbox'] {
  ...,
  author->,
  categories[]->
} | order(_createdAt asc)
`;
const queryTrick = groq`
*[_type=='trick'] {
  ...,
  author->,
  categories[]->
} | order(_createdAt asc)
`;
const queryDirectory = groq`
*[_type=='directory'] {
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
        <div>
          <h1 className="fixed text-7xl z-40 opacity-10 bottom-0">
            PREVIEW MODE - PREVIEW MODE - PREVIEW MODE PREVIEW MODE - PREVIEW
            MODE - PREVIEW MODE PREVIEW MODE - PREVIEW MODE - PREVIEW MODE
          </h1>
          <div className="flex flex-col">
            <div>
              <PreviewPostList query={query} />
            </div>
            <div>
              <PreviewTipList query={queryTip} />
            </div>
            <div>
              <PreviewToolboxList query={queryToolbox} />
            </div>
            <div>
              <PreviewTrickList query={queryTrick} />
            </div>
            <div>
              <PreviewDirectoryList query={queryDirectory} />
            </div>
            <div>
              <PreviewQuoteCarousel query={queryQuote} />
            </div>
            <div>
              <PreviewReviewCarousel query={queryReview} />
            </div>
          </div>
        </div>
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
    <main>
      <div>
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
