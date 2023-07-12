import { previewData } from 'next/headers';
import { groq } from 'next-sanity';
import { client } from '@/lib/sanity.client';
import PreviewSuspense from '@/components/preview/PreviewSuspense';
import PreviewTrickList from '@/components/preview/PreviewTrickList';
import PreviewToolboxList from '@/components/preview/PreviewToolboxList';
import PreviewDirectoryList from '@/components/preview/PreviewDirectoryList';
import AiTools from '@/components/resources/AiTools';
import AiTools2 from '@/components/resources/AiTools2';
import CraftedByHailey from '@/components/resources/CraftedByHailey';
import ResourceDirectory from '@/components/resources/ResourceDirectory';
import DesignerTricks from '@/components/resources/DesignerTricks';
import WritersToolbox from '@/components/resources/WritersToolbox';
import PreviewCrafted from '@/components/preview/PreviewCrafted';
import PreviewAiTool from '@/components/preview/PreviewAiTool';
import PreviewAiTool2 from '@/components/preview/PreviewAiTool2';

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
const queryAiTool2 = groq`
*[_type=='aitool2'] {
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
        <PreviewCrafted query={queryCrafted} />
        <PreviewAiTool query={queryAiTool} />
        <PreviewAiTool2 query={queryAiTool2} />
      </PreviewSuspense>
    );
  }

  const tricks = await client.fetch(queryTrick);
  const toolboxes = await client.fetch(queryToolbox);
  const directories = await client.fetch(queryDirectory);
  const crafted = await client.fetch(queryCrafted);
  const aitool = await client.fetch(queryAiTool);
  const aitool2 = await client.fetch(queryAiTool2);

  return (
    <main className="relative top-0 bg-gradient-invert text-gray-200 grid grid-cols-1">
      <div className="overflow-x-hidden">
        <div className="mx-auto text-center">
          <div>
            <p className="max-w-3xl mt-8 lg:mb-4 font-light text-center text-gray-200 dark:text-gray-100 lg:text-xl px-10 lg:px-40 mx-auto">
              Feel free to explore these helpful resources for creators, all
              gathered in one place.
            </p>
            <p className="max-w-3xl mx-auto pb-8 lg:pb-4 lg:text-xl px-10">
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
          <hr className="max-w-7xl mb-8 border-dashed mx-auto" />
          <ul className="grid mx-auto lg:flex justify-center items-center gap-4 text-lg xl:text-xl">
            <li>
              <button>
                <a
                  href="/resources#aitool"
                  className="hover:text-gray-400 hover:font-thin underline"
                >
                  AI Tools (Free)
                </a>
              </button>
            </li>
            <li>
              <button>
                <a
                  href="/resources#aitool2"
                  className="hover:text-gray-400 hover:font-thin underline"
                >
                  AI Tools (Paid)
                </a>
              </button>
            </li>
            <li>
              <button>
                {' '}
                <a
                  href="/resources#crafted"
                  className="hover:text-gray-400 hover:font-thin underline"
                >
                  Crafted by Hailey
                </a>
              </button>
            </li>
            <li>
              <button>
                {' '}
                <a
                  href="/resources#toolbox"
                  className="hover:text-gray-400 hover:font-thin underline"
                >
                  Creative Writer&apos;s Toolbox
                </a>
              </button>
            </li>
            <li>
              <button>
                {' '}
                <a
                  href="/resources#trick"
                  className="hover:text-gray-400 hover:font-thin underline"
                >
                  Designer&apos;s Bag of Tricks
                </a>
              </button>
            </li>
            <li>
              <button>
                {' '}
                <a
                  href="/resources#directory"
                  className="hover:text-gray-400 hover:font-thin underline"
                >
                  Free Resources
                </a>
              </button>
            </li>
          </ul>

          <section>
            <main
              id="aitool"
              className="relative top-[-140px] md:top-[-80px]"
            />
            <AiTools aitool={aitool} />
          </section>

          <section>
            <main
              id="aitool2"
              className="relative top-[-140px] md:top-[-80px]"
            />
            <AiTools2 aitool2={aitool2} />
          </section>

          <section>
            <main
              id="crafted"
              className="relative top-[-140px] md:top-[-80px]"
            />
            <CraftedByHailey crafted={crafted} />
          </section>

          <section>
            <main
              id="toolbox"
              className="relative top-[-140px] md:top-[-80px]"
            />
            <WritersToolbox toolboxes={toolboxes} />
          </section>

          <section>
            <main id="trick" className="relative top-[-140px] md:top-[-80px]" />
            <DesignerTricks tricks={tricks} />
          </section>

          <section>
            <main
              id="directory"
              className="relative top-[-140px] md:top-[-80px]"
            />
            <ResourceDirectory directories={directories} />
          </section>
        </div>
      </div>
    </main>
  );
}

export default Resources;
