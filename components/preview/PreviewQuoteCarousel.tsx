'use client';

import { usePreview } from '@/lib/sanity.preview';
import QuoteCarousel from '../quote/QuoteCarousel';

type Props = {
  query: string;
};

export default function PreviewQuoteCarousel({ query }: Props) {
  const quotes = usePreview(null, query);
  return <QuoteCarousel quotes={quotes} />;
}
