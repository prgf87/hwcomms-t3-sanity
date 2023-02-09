'use client';

import { usePreview } from '@/lib/sanity.preview';
import PostList from '../post/PostList';

type Props = {
  query: string;
};

export default function PreviewPostList({ query }: Props) {
  const posts = usePreview(null, query);
  return <PostList posts={posts} />;
}
