'use client';

import { usePreview } from '@/lib/sanity.preview';
import LatestNews from '../modules/LatestNews';

type Props = {
  query: string;
};

export default function PreviewQuoteCarousel({ query }: Props) {
  const news = usePreview(null, query);
  return <LatestNews news={news} />;
}
