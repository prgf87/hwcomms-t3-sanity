import { previewData } from 'next/headers';
import { groq } from 'next-sanity';
import { client } from '@/lib/sanity.client';
import PreviewSuspense from '@/components/PreviewSuspense';
import TipList from '@/components/TipList';
import PreviewTipList from '@/components/PreviewTipList';
import TipBanner from '@/components/TipBanner';

const queryTip = groq`
*[_type=='tip'] {
  ...,
  author->,
  categories[]->
} | order(_createdAt desc)
`;

export const revalidate = 60;

async function Resources() {
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
        <PreviewTipList query={queryTip} />
      </PreviewSuspense>
    );
  }
  const tips = await client.fetch(queryTip);

  return (
    <main>
      <TipBanner />
      <TipList tips={tips} />
    </main>
  );
}

export default Resources;
