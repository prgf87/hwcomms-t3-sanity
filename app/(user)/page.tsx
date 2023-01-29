import { previewData } from 'next/headers';
import { groq } from 'next-sanity';
import { client } from '@/lib/sanity.client';
import PreviewPostList from '@/components/PreviewPostList';
import PostList from '@/components/PostList';
import PreviewSuspense from '@/components/PreviewSuspense';

const query = groq`
*[_type=='post'] {
  ...,
  author->,
  categories[]->
} | order(_createdAt desc)
`;

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
      </PreviewSuspense>
    );
  }
  const posts = await client.fetch(query);

  return (
    <main>
      <PostList posts={posts} />
    </main>
  );
}
