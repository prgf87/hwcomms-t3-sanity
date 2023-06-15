'use client';

import { usePreview } from '@/lib/sanity.preview';
import AiTools from '../resources/AiTools';

type Props = {
  query: string;
};

export default function PreviewAiTool({ query }: Props) {
  const aitool = usePreview(null, query);
  return <AiTools aitool={aitool} />;
}
