function Hero({ heading, message, btnmsg }: any) {
  return (
    <div className="flex items-center justify-center h-screen bg-fixed bg-fill bg-center custom-img">
      <div className="absolute top-0 left-0 right-0 bottom-0 h-screen bg-black/40 z-[2]" />
      <div className="p-5 text-white z-[2] mt-[10rem]">
        <h1 className="text-3xl lg:text-5xl font-bold">{heading}</h1>
        <p className="py-2 text-xl">{message}</p>
        <button className="px-8 py-2 border">{btnmsg}</button>
      </div>
    </div>
  );
}

export default Hero;
