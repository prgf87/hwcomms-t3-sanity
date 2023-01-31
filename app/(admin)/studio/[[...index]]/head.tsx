export { NextStudioHead } from 'next-sanity/studio/head';

import { NextStudioHead } from 'next-sanity/studio/head';

export default function CustomStudioHead() {
  return (
    <>
      <NextStudioHead favicons={false} />
      <link rel="icon" type="image/jpg" sizes="32x32" href="/logo.jpg" />
    </>
  );
}
