import { ChevronRightIcon } from '@heroicons/react/24/solid';
import Link from 'next/link';
import { SocialIcon } from 'react-social-icons';
import BackToTop from '../navigation/BackToTop';

export default function Footer({ anchor }: any) {
  return (
    <section className="bg-black text-white">
      <div className="grid pt-8 text-center">
        <div className="grid mx-auto">
          <div className="w-full">
            <div className="flex gap-3 justify-evenly">
              <div className="p-2 md:px-6 md:py-5 md:flex">
                <SocialIcon
                  style={{ height: 30, width: 30 }}
                  url="https://twitter.com/HaileyComms"
                  fgColor="white"
                  bgColor="transparent"
                  className="sm:p-6 transition-transform hover:scale-125 duration-200 hover:opacity-50"
                />
                <SocialIcon
                  style={{ height: 30, width: 30 }}
                  url="https://www.linkedin.com/in/haileycomms/"
                  fgColor="white"
                  bgColor="transparent"
                  className="sm:p-6 transition-transform hover:scale-125 duration-200 hover:opacity-50"
                />
                <SocialIcon
                  style={{ height: 30, width: 30 }}
                  url="mailto:hwilsoncomms@gmail.com"
                  fgColor="white"
                  bgColor="transparent"
                  className="sm:p-6 transition-transform hover:scale-125 duration-200 hover:opacity-50"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="grid max-w-lg text-xs sm:text-lg mx-auto">
        <div className="flex space-x-2 sm:space-x-8 mt-8">
          <div className="text-gray-200 flex justify-center items-center cursor-pointer place-content-start">
            <ChevronRightIcon className="h-4 w-4 sm:h-5 sm:w-5 text-gray-200 " />

            <p className="hover:brightness-50 flex justify-center items-center hover:underline">
              <Link href={'/'}>Home</Link>
            </p>
          </div>
          <div className="text-gray-200 flex justify-center items-center cursor-pointer place-content-start">
            <ChevronRightIcon className="h-4 w-4 sm:h-5 sm:w-5 text-gray-200 " />

            <p className="hover:brightness-50 flex justify-center items-center hover:underline">
              <Link href={'/about'}>About</Link>
            </p>
          </div>
          <div className="text-gray-200 flex justify-center items-center cursor-pointer place-content-start">
            <ChevronRightIcon className="h-4 w-4 sm:h-5 sm:w-5 text-gray-200 " />

            <p className="hover:brightness-50 flex justify-center items-center hover:underline">
              <Link href={'/services'}>Services</Link>
            </p>
          </div>
          <div className="text-gray-200 flex justify-center items-center cursor-pointer place-content-start">
            <ChevronRightIcon className="h-4 w-4 sm:h-5 sm:w-5 text-gray-200 " />

            <p className="hover:brightness-50 flex justify-center items-center hover:underline">
              <Link href={'/contact'}>Contact</Link>
            </p>
          </div>
          <div className="text-gray-200 flex justify-center items-center cursor-pointer place-content-start">
            <ChevronRightIcon className="h-4 w-4 sm:h-5 sm:w-5 text-gray-200 " />

            <p className="hover:brightness-50 flex justify-center items-center hover:underline">
              <Link href="/resources">Resources</Link>
            </p>
          </div>
        </div>
      </div>

      <div className="flex place-content-center py-10">
        <BackToTop path={anchor}>
          <button className="btn4 text-gray-200">Back To Top</button>
        </BackToTop>
      </div>
      <hr className="border-1 border-white" />
      <div className="flex justify-center items-center">
        <div className="p-3 text-sm">
          <p className="text-center text-white">Hailey Wilson Communications</p>
          <p className="text-center text-white">
            Copyright&nbsp;&copy;&nbsp;2023&nbsp;-&nbsp;All Rights Reserved
          </p>
        </div>
      </div>
    </section>
  );
}
