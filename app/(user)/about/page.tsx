import Banner from '@/components/Banner';
import Bio from '@/components/Bio';
import { groq } from 'next-sanity';
import { client } from '@/lib/sanity.client';
import PostBanner from '@/components/PostBanner';
import PostList from '@/components/PostList';
import TipBanner from '@/components/TipBanner';
import TipList from '@/components/TipList';
import Values from '@/components/Values';

const query = groq`
*[_type=='post'] {
  ...,
  author->,
  categories[]->
} | order(_createdAt desc)
`;
const queryTip = groq`
*[_type=='tip'] {
  ...,
  author->,
  categories[]->
} | order(_createdAt desc)
`;

export default async function AboutPage() {
  const posts = await client.fetch(query);
  const tips = await client.fetch(queryTip);
  return (
    <main>
      <Bio />
      <Values />
      <PostBanner />
      <PostList posts={posts} />
      <Banner />
      <TipBanner />
      <TipList tips={tips} />
    </main>
  );
}
