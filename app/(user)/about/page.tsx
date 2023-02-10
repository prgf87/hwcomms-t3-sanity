import { previewData } from 'next/headers';
import { groq } from 'next-sanity';
import { client } from '@/lib/sanity.client';
import PreviewSuspense from '@/components/preview/PreviewSuspense';
import Banner from '@/components/navigation/Banner';
import Bio from '@/components/modules/Bio';
import Hero from '@/components/modules/Hero';
import Resume from '@/components/modules/Resume';
import Values from '@/components/modules/Values';

const queryExperience = groq`
*[_type=='experience'] {
  ...,
} | order(_createdAt asc)
`;

export default async function AboutPage() {
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
            <div>{/* <PreviewResume query={queryExperience} /> */}</div>
          </div>
        </div>
      </PreviewSuspense>
    );
  }

  const experiences = await client.fetch(queryExperience);
  return (
    <main>
      <div className="overflow-x-hidden">
        <div>
          <div id="home" className="fixed top-0" />
          <Hero
            heading="Learn about what drives me"
            message="Scroll down to find out more"
            custombg="custom-img2"
            heroanchor="#bio"
          />
        </div>
        <div>
          <div id="bio" className="relative top-[-80px]" />
          <Bio />
        </div>
        <div>
          <div id="values" className="relative top-[-70px]" />
          <Values />
        </div>
        <div>
          <div id="resume" className="relative top-[-70px]" />
          <Resume experiences={experiences} />
        </div>
        <div>
          <div id="banner" className="relative top-[-80px]" />
          <Banner />
        </div>
      </div>
    </main>
  );
}
