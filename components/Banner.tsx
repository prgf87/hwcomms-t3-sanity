'use client';

import Button from './Button';

function Banner() {
  return (
    <div className="custom-img3 bg-center grid m-auto h-[15rem] md:h-[20rem] lg:h-[30rem] z-[1]">
      <div className="relative top-0 left-0 right-0 bottom-0 h-[15rem] md:h-[20rem] lg:h-[30rem] bg-transient-to-b from-black/20 to-black/90 z-[2]" />
      <div className="absolute w-full h-[15rem] md:h-[20rem] lg:h-[30rem] flex items-center justify-center text-white z-[2]">
        <div className="z-10 text-white ">
          <h1 className="text-lg sm:text-2xl my-auto pb-10">
            I would love to work with you
          </h1>
          <br></br>
          <Button />
        </div>
      </div>
    </div>
  );
}

export default Banner;
