'use client';

import { usePreview } from '@/lib/sanity.preview';
import DirectoryList from '../resources/directory/DirectoryList';

type Props = {
  query: string;
};

export default function PreviewDirectoryList({ query }: Props) {
  const directories = usePreview(null, query);
  return <DirectoryList directories={directories} />;
}
