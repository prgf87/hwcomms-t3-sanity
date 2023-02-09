'use client';

import { usePreview } from '@/lib/sanity.preview';
import TipList from '../tip/TipList';

type Props = {
  query: string;
};

export default function PreviewTipList({ query }: Props) {
  const tips = usePreview(null, query);
  return <TipList tips={tips} />;
}
