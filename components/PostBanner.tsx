function PostBanner() {
  return (
    <main className="max-w-[1240px] mx-auto flex flex-col lg:flex-row lg:space-x-5 justify-between font-bold px-10 my-10 ">
      <section>
        <h1 className="text-6xl mb-2">Hailey&apos;s Blog</h1>
        <h2 className="mt-5 md:mt-0">
          Welcome to&nbsp;
          <span className="underline decoration-4 decoration-[#5EBCAA]">
            the best Resources online
          </span>
          &nbsp;for all your Communincations needs
        </h2>
      </section>
      <div className="mt-5 md:mt-2 text-gray-400 max-w-md">
        <p>| Talking points</p>
        <p>| The latest in Communications </p>
        <p>| Tips, Resources &amp; More</p>
      </div>
    </main>
  );
}

export default PostBanner;
