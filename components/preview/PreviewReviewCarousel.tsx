'use client';

import { usePreview } from '@/lib/sanity.preview';
import ReviewCarousel from '../modules/ReviewCarousel';

type Props = {
  query: string;
};

export default function PreviewReviewCarousel({ query }: Props) {
  const reviews = usePreview(null, query);
  return <ReviewCarousel reviews={reviews} />;
}
