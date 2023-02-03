'use client';

import Banner from '@/components/Banner';
import Bio from '@/components/Bio';
import { groq } from 'next-sanity';
import { client } from '@/lib/sanity.client';
import PostBanner from '@/components/PostBanner';
import PostList from '@/components/PostList';
import TipBanner from '@/components/TipBanner';
import TipList from '@/components/TipList';

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

export const revalidate = 60;

async function About() {
  const posts = await client.fetch(query);
  const tips = await client.fetch(queryTip);
  return (
    <div className="bg-main">
      <Bio />
      <PostBanner />
      <PostList posts={posts} />
      <Banner />
      <TipBanner />
      <TipList tips={tips} />
    </div>
  );
}

export default About;
