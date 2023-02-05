import { ChevronRightIcon } from '@heroicons/react/24/solid';
import Link from 'next/link';

import { SocialIcon } from 'react-social-icons';
import BackToTop from './BackToTop';

export default function Footer() {
  return (
    <div className="p-10 bg-black text-gray-200">
      <div className="md:max-w-7xl mx-auto justify-center">
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-2">
          <div className="mb-5 px-8 text-xs md:text-base">
            <h4 className="font-bold text-xl pb-4 flex place-content-center md:place-content-start">
              Hailey Wilson Communications
            </h4>

            <div className="text-gray-200 flex cursor-pointer place-content-left">
              <p className="hover:brightness-50 flex">
                <ChevronRightIcon className="h-5 w-5 pt-1 text-gray-200 " />
                <Link href={'/'}>
                  <u>Home</u>
                </Link>
              </p>
            </div>
            <div className="text-gray-200 flex cursor-pointer place-content-left">
              <p className="hover:brightness-50 flex">
                <ChevronRightIcon className="h-5 w-5 pt-1 text-gray-200 " />
                <Link href={'/services'}>
                  <u>Services</u>
                </Link>
              </p>
            </div>
            <div className="text-gray-200 flex cursor-pointer place-content-left">
              <p className="hover:brightness-50 flex">
                <ChevronRightIcon className="h-5 w-5 pt-1 text-gray-200 " />
                <Link href={'/contact'}>
                  <u>Contact</u>
                </Link>
              </p>
            </div>
            <div className="text-gray-200 flex cursor-pointer place-content-left">
              <p className="hover:brightness-50 flex">
                <ChevronRightIcon className="h-5 w-5 pt-1 text-gray-200 " />
                <Link href={'/blog'}>
                  <u>Blog</u>
                </Link>
              </p>
            </div>
            <div className="text-gray-200 flex cursor-pointer place-content-left">
              <p className="hover:brightness-50 flex">
                <ChevronRightIcon className="h-5 w-5 pt-1 text-gray-200 " />
                <Link href="/resources">
                  <u>Resources</u>
                </Link>
              </p>
            </div>
          </div>

          <div className="mb-5 col-start-2 col-span-1 px-8">
            <h4 className="font-bold text-xl pb-4 flex place-content-center md:place-content-start">
              Social Media
            </h4>
            <p className="hidden md:block text-sm italic px-12 md:px-0">
              Come and say hello over on our social media or send us an email
            </p>

            <div className="w-full">
              <div className="flex gap-3 justify-evenly place-items-center">
                <div className="p-0 md:px-6 md:py-5 md:flex">
                  <SocialIcon
                    style={{ height: 30, width: 30 }}
                    url="https://www.facebook.com"
                    fgColor="white"
                    bgColor="transparent"
                    className="sm:p-6"
                  />
                  <SocialIcon
                    style={{ height: 30, width: 30 }}
                    url="https://www.twitter.com"
                    fgColor="white"
                    bgColor="transparent"
                    className="sm:p-6"
                  />
                  <SocialIcon
                    style={{ height: 30, width: 30 }}
                    url="https://www.linkedin.com"
                    fgColor="white"
                    bgColor="transparent"
                    className="sm:p-6"
                  />
                </div>
              </div>
            </div>
          </div>
          <Link
            href="/contact"
            className="hidden sm:block justify-end items-center cursor-pointer px-8 text-xs"
          >
            <h1 className="text-xl font-bold pb-3">Contact me</h1>
            <p className="text-gray-200 place-content-center md:place-content-start">
              <strong>Email: </strong>&nbsp;hwilsoncomms@gmail.com
            </p>
            <div className="hidden sm:flex items-center justify-center md:justify-start">
              <SocialIcon
                url=""
                network="email"
                fgColor="white"
                bgColor="transparent"
              />
              <p
                style={{ color: 'white' }}
                className="uppercase text-xs hidden lg:block "
              >
                Get in touch
              </p>
            </div>
          </Link>
          <div className="col-span-3">
            <BackToTop path="/#home">
              <p className=" text-gray-200 flex place-content-center md:place-content-center">
                Copyright&nbsp;&copy;&nbsp;Hailey Wilson Communications
              </p>
            </BackToTop>
          </div>
        </div>
      </div>
    </div>
  );
}
