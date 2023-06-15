'use client';

import { usePreview } from '@/lib/sanity.preview';
import CraftedByHailey from '../resources/CraftedByHailey';

type Props = {
  query: string;
};

export default function PreviewCrafted({ query }: Props) {
  const crafted = usePreview(null, query);
  return <CraftedByHailey crafted={crafted} />;
}
