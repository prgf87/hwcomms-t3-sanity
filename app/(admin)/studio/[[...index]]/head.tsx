export { NextStudioHead } from 'next-sanity/studio/head';

import { NextStudioHead } from 'next-sanity/studio/head';

export default function CustomStudioHead() {
  return (
    <>
      <NextStudioHead favicons={false} />

      <link
        rel="icon"
        type="image/jpg"
        sizes="55x120"
        href="/images/logo2.jpg"
      />
    </>
  );
}
