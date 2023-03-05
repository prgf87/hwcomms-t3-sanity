import { ChevronRightIcon } from '@heroicons/react/24/solid';
import Link from 'next/link';

import { SocialIcon } from 'react-social-icons';
import BackToTop from '../navigation/BackToTop';

export default function Footer({ anchor }: any) {
  return (
    <section className="bg-black text-white">
      <div className="grid grid-cols-1">
        <div className="hidden p-10 mt-5">
          <div className="text-gray-200 flex cursor-pointer place-content-center">
            <p className="hover:brightness-50 flex">
              <ChevronRightIcon className="h-5 w-5 pt-1 text-gray-200 " />
              <Link href={'/'}>
                <u>Home</u>
              </Link>
            </p>
          </div>
          <div className="text-gray-200 flex cursor-pointer place-content-center">
            <p className="hover:brightness-50 flex">
              <ChevronRightIcon className="h-5 w-5 pt-1 text-gray-200 " />
              <Link href={'/about'}>
                <u>About</u>
              </Link>
            </p>
          </div>
          <div className="text-gray-200 flex cursor-pointer place-content-center">
            <p className="hover:brightness-50 flex">
              <ChevronRightIcon className="h-5 w-5 pt-1 text-gray-200 " />
              <Link href={'/services'}>
                <u>Services</u>
              </Link>
            </p>
          </div>
          <div className="text-gray-200 flex cursor-pointer place-content-center">
            <p className="hover:brightness-50 flex">
              <ChevronRightIcon className="h-5 w-5 pt-1 text-gray-200 " />
              <Link href={'/contact'}>
                <u>Contact</u>
              </Link>
            </p>
          </div>

          <div className="text-gray-200 flex cursor-pointer place-content-center">
            <p className="hover:brightness-50 flex">
              <ChevronRightIcon className="h-5 w-5 pt-1 text-gray-200 " />
              <Link href="/resources">
                <u>Resources</u>
              </Link>
            </p>
          </div>
        </div>
        <div className="sm:hidden mb-5 pt-10 px-8 place-content-center text-center w-full">
          <div className="grid mx-auto">
            <h4 className="font-bold text-xl pb-4 ">Social Media</h4>
            <p className="hidden md:block italic px-12 md:px-0">
              Come and say hello over on social media or send me an email
            </p>

            <div className="w-full">
              <div className="flex gap-3 justify-evenly">
                <div className="p-2 md:px-6 md:py-5 md:flex">
                  <SocialIcon
                    style={{ height: 30, width: 30 }}
                    url="https://www.twitter.com"
                    fgColor="white"
                    bgColor="transparent"
                    className="sm:p-6 transition-transform hover:scale-125 duration-200 hover:opacity-50"
                  />
                  <SocialIcon
                    style={{ height: 30, width: 30 }}
                    url="https://www.linkedin.com"
                    fgColor="white"
                    bgColor="transparent"
                    className="sm:p-6 transition-transform hover:scale-125 duration-200 hover:opacity-50"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="sm:hidden p-10 text-center">
          <h1 className="text-xl font-bold pb-4">Contact me</h1>
          <p className="text-gray-200 italic">
            Please feel free to send me an email:
          </p>
          <p className="pt-8">
            <a
              href="mailto:hwilsoncomms@gmail.com"
              className="cursor-pointer hover:text-gray-400"
            >
              &nbsp;hwilsoncomms@gmail.com
            </a>
          </p>
        </div>
      </div>
      <div className="flex place-content-center py-10">
        <BackToTop path={anchor}>
          <button className="btn3 text-gray-200">Back To Top</button>
        </BackToTop>
      </div>
      <hr className="border-1 border-white" />
      <div className="flex justify-center items-center">
        <div className="p-5">
          <h1 className="text-center text-white">
            Hailey Wilson Communications
          </h1>
          <h1 className="text-center text-white">
            Copyright&nbsp;&copy;&nbsp;2023&nbsp;-&nbsp;All Rights Reserved
          </h1>
        </div>
      </div>
    </section>
  );
}
