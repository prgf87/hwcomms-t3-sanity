import { previewData } from 'next/headers';
import { groq } from 'next-sanity';
import { client } from '@/lib/sanity.client';
import PreviewSuspense from '@/components/preview/PreviewSuspense';
import PreviewTrickList from '@/components/preview/PreviewTrickList';
import PreviewToolboxList from '@/components/preview/PreviewToolboxList';
import PreviewDirectoryList from '@/components/preview/PreviewDirectoryList';
import AiTools from '@/components/resources/AiTools';
import CraftedByHailey from '@/components/resources/CraftedByHailey';
import ResourceDirectory from '@/components/resources/ResourceDirectory';
import DesignerTricks from '@/components/resources/DesignerTricks';
import WritersToolbox from '@/components/resources/WritersToolbox';

const queryTrick = groq`
*[_type=='trick'] {
  ...,
  author->,
  categories[]->
} | order(_createdAt desc)
`;
const queryToolbox = groq`
*[_type=='toolbox'] {
  ...,
  author->,
  categories[]->
} | order(_createdAt desc)
`;
const queryDirectory = groq`
*[_type=='directory'] {
  ...,
  author->,
  categories[]->
} | order(_createdAt desc)
`;
const queryCrafted = groq`
*[_type=='crafted'] {
  ...,
  author->,
  categories[]->
} | order(_createdAt desc)
`;
const queryAiTool = groq`
*[_type=='aitool'] {
  ...,
  author->,
  categories[]->
} | order(_createdAt desc)
`;

export const revalidate = 60;

async function Resources({ anchor }: any) {
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
        <PreviewTrickList query={queryTrick} />
        <PreviewToolboxList query={queryToolbox} />
        <PreviewDirectoryList query={queryDirectory} />
      </PreviewSuspense>
    );
  }

  const tricks = await client.fetch(queryTrick);
  const toolboxes = await client.fetch(queryToolbox);
  const directories = await client.fetch(queryDirectory);
  const crafted = await client.fetch(queryCrafted);
  const aitool = await client.fetch(queryAiTool);

  return (
    <main className="bg-gradient text-gray-200 grid grid-cols-1">
      <div className="overflow-x-hidden">
        <div className="mx-auto text-center">
          <div>
            <p className="max-w-3xl mt-8 lg:mb-4 font-light text-center text-gray-200 dark:text-gray-100 sm:text-xl px-10 sm:px-40 mx-auto">
              Feel free to explore these helpful resources for creators, all
              gathered in one place.
            </p>
            <p className="max-w-3xl mx-auto pb-8 sm:pb-4 sm:text-xl px-10">
              Check out{' '}
              <a
                href="https://haileycomms.substack.com/"
                className="font-semibold hover:text-gray-600 underline"
              >
                my blog
              </a>{' '}
              for the latest tips and resources.
            </p>
          </div>
          {/*Internal Navbar */}
          <hr className="max-w-7xl my-2 border-dashed mx-auto" />
          <ul className="flex-1 sm:flex w-3/4 mx-auto sm:space-x-8 justify-center items-center text-base lg:text-xl overflow-hidden">
            <li className="hover:text-gray-400">
              <button className="btn-4 py-1">
                <a href="/resources#aitool">AI Tools</a>
              </button>
            </li>
            <li className="py-2">
              <button className="btn-4 hover:text-gray-400 hover:underline">
                <a href="/resources#crafted">Crafted by Hailey</a>
              </button>
            </li>
            <li className="hover:text-gray-400">
              <button className="btn-4 py-1">
                <a href="/resources#toolbox">Creative Writer&apos;s Toolbox</a>
              </button>
            </li>
            <li className="hover:text-gray-400">
              <button className="btn-4 py-1">
                <a href="/resources#trick">Designer&apos;s Bag of Tricks</a>
              </button>
            </li>
            <li className="hover:text-gray-400">
              <button className="btn-4 py-1">
                <a href="/resources#directory">Online Resource Directory</a>
              </button>
            </li>
          </ul>
          <hr className="max-w-7xl my-2 border-dashed mx-auto" />

          <section>
            <main id="aitool" className="relative top-[-80px]" />
            <AiTools aitool={aitool} />
          </section>

          <section>
            <main id="crafted" className="relative top-[-80px]" />
            <CraftedByHailey crafted={crafted} />
          </section>

          <section>
            <main id="toolbox" className="relative top-[-80px]" />
            <WritersToolbox toolboxes={toolboxes} />
          </section>

          <section>
            <main id="trick" className="relative top-[-80px]" />
            <DesignerTricks tricks={tricks} />
          </section>

          <section>
            <main id="directory" className="relative top-[-80px]" />
            <ResourceDirectory directories={directories} />
          </section>
        </div>
      </div>
    </main>
  );
}

export default Resources;
