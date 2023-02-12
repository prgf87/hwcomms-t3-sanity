import { ChevronRightIcon } from '@heroicons/react/24/solid';
import Link from 'next/link';

import { SocialIcon } from 'react-social-icons';
import BackToTop from '../navigation/BackToTop';

export default function Footer({ anchor }: any) {
  return (
    <div className="p-5 bg-black text-gray-200">
      <div className="md:max-w-7xl mx-auto justify-center">
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-2">
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
                <Link href={'/about'}>
                  <u>About</u>
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
                <Link href="/resources">
                  <u>Resources</u>
                </Link>
              </p>
            </div>
          </div>

          <div className="mb-5 col-start-2 col-span-1 px-8 place-content-center text-center w-full">
            <div className="grid mx-auto">
              <h4 className="font-bold text-xl pb-4 ">Social Media</h4>
              <p className="hidden md:block text-sm italic px-12 md:px-0">
                Come and say hello over on our social media or send us an email
              </p>

              <div className="w-full">
                <div className="flex gap-3 justify-evenly">
                  <div className="p-2 md:px-6 md:py-5 md:flex mt-5">
                    <SocialIcon
                      style={{ height: 30, width: 30 }}
                      url="https://www.facebook.com"
                      fgColor="white"
                      bgColor="transparent"
                      className="p-2 sm:p-6 transition-transform hover:scale-125 duration-200 hover:opacity-50"
                    />
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
          <div className="text-right">
            <div>
              <h1 className="text-xl font-bold pb-3">Contact me</h1>
              <p className="text-gray-200">
                <strong>Email: </strong>
                <a
                  href="mailto:hwilsoncomms@gmail.com"
                  className="cursor-pointer hover:text-gray-400"
                >
                  &nbsp;hwilsoncomms@gmail.com
                </a>
              </p>
            </div>
            <div className="flex justify-end items-center cursor-pointer mt-14 hover:opacity-50">
              <SocialIcon
                network="email"
                fgColor="white"
                bgColor="transparent"
                url="/contact/#contact"
              />
              <p className="md:hidden text-white lg:block uppercase text-xs">
                Get in touch
              </p>
            </div>
          </div>
          <div className="col-span-3">
            <p className=" text-gray-200 flex place-content-center md:place-content-center">
              Copyright&nbsp;&copy;&nbsp;Hailey Wilson Communications
            </p>
          </div>
          <div className="col-span-3 flex place-content-center py-5">
            <BackToTop path={anchor}>
              <button className="btn3 text-gray-200">Back To Top</button>
            </BackToTop>
          </div>
        </div>

        <div className="grid grid-cols-4 md:hidden gap-2">
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
                <Link href={'/about'}>
                  <u>About</u>
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
                <Link href="/resources">
                  <u>Resources</u>
                </Link>
              </p>
            </div>
          </div>

          {/* <div className="mb-5 px-8 place-content-center text-center w-full">
            <div className="grid mx-auto">
              <h4 className="font-bold text-xl pb-4 ">Social Media</h4>
              <p className="hidden md:block text-sm italic px-12 md:px-0">
                Come and say hello over on our social media or send us an email
              </p>

              <div className="w-full">
                <div className="flex gap-3 justify-evenly">
                  <div className="p-2 md:px-6 md:py-5 md:flex mt-5">
                    <SocialIcon
                      style={{ height: 30, width: 30 }}
                      url="https://www.facebook.com"
                      fgColor="white"
                      bgColor="transparent"
                      className="p-2 sm:p-6 transition-transform hover:scale-125 duration-200 hover:opacity-50"
                    />
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
          </div> */}

          {/* <div className="text-right">
            <div>
              <h1 className="text-xl font-bold pb-3">Contact me</h1>
              <p className="text-gray-200">
                <strong>Email: </strong>
                <a
                  href="mailto:hwilsoncomms@gmail.com"
                  className="cursor-pointer hover:text-gray-400"
                >
                  &nbsp;hwilsoncomms@gmail.com
                </a>
              </p>
            </div>
            <div className="flex justify-end items-center cursor-pointer mt-14 hover:opacity-50">
              <SocialIcon
                network="email"
                fgColor="white"
                bgColor="transparent"
                url="/contact/#contact"
              />
              <p className="md:hidden text-white lg:block uppercase text-xs">
                Get in touch
              </p>
            </div>
          </div> */}

          {/* <div className="">
            <p className=" text-gray-200 flex place-content-center md:place-content-center">
              Copyright&nbsp;&copy;&nbsp;Hailey Wilson Communications
            </p>
          </div> */}

          {/* <div className="flex place-content-center py-5">
            <BackToTop path={anchor}>
              <button className="btn3 text-gray-200">Back To Top</button>
            </BackToTop>
          </div> */}
        </div>
      </div>
    </div>
  );
}
