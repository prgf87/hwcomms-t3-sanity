'use client';

import { usePreview } from '@/lib/sanity.preview';
import TrickList from '../resources/TrickList';

type Props = {
  query: string;
};

export default function PreviewTrickList({ query }: Props) {
  const tricks = usePreview(null, query);
  return <TrickList tricks={tricks} />;
}
