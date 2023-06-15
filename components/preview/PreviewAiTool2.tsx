'use client';

import { usePreview } from '@/lib/sanity.preview';
import AiTools2 from '../resources/AiTools';

type Props = {
  query: string;
};

export default function PreviewAiTool2({ query }: Props) {
  const aitool2 = usePreview(null, query);
  return <AiTools2 aitool2={aitool2} />;
}
