import Link from 'next/link';

function PostBanner() {
  return (
    <main className="max-w-[800px] lg:max-w-7xl mx-auto flex flex-col lg:flex-row lg:space-x-5 justify-between font-bold px-10 mt-10">
      <section>
        {/* <Link href="/blog">
          <h1 className="text-2xl md:text-4xl mb-2">Hailey&apos;s Blog</h1>
        </Link> */}
        <h2 className="mt-5 md:mt-0">
          Welcome to&nbsp;
          <span className="underline decoration-4 decoration-[#5EBCAA]">
            the best Resources online
          </span>
          &nbsp;for all your Communications needs
        </h2>
        <div className="mt-5 md:mt-2 text-gray-500 max-w-md">
          <p>| Talking points</p>
          <p>| The latest in Communications </p>
          <p>| Tips, Resources &amp; More</p>
        </div>
      </section>
    </main>
  );
}

export default PostBanner;
