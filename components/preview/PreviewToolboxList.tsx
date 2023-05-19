'use client';

import { usePreview } from '@/lib/sanity.preview';
import ToolboxList from '../resources/ToolboxList';

type Props = {
  query: string;
};

export default function PreviewToolboxList({ query }: Props) {
  const toolboxes = usePreview(null, query);
  return <ToolboxList toolboxes={toolboxes} />;
}
