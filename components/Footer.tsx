import { ChevronRightIcon } from '@heroicons/react/24/solid';
import Image from 'next/image';
import Link from 'next/link';

import { SocialIcon } from 'react-social-icons';

export default function Footer() {
  return (
    <div className="p-10 bg-black text-gray-200">
      <div className="max-w-7xl mx-auto justify-center">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
          <div className="mb-5">
            <h4 className="font-bold text-2xl pb-4 flex place-content-center md:place-content-start">
              Hailey Wilson Communications
            </h4>

            <div className="text-gray-200 flex cursor-pointer place-content-left">
              <p className="hover:brightness-50 flex">
                <ChevronRightIcon className="h-5 w-5 pt-1 text-blue-500 " />
                <Link href={'/'}>
                  <u>Home</u>
                </Link>
              </p>
            </div>
            <div className="text-gray-200 flex cursor-pointer place-content-left">
              <p className="hover:brightness-50 flex">
                <ChevronRightIcon className="h-5 w-5 pt-1 text-blue-500 " />
                <Link href={'/services'}>
                  <u>Services</u>
                </Link>
              </p>
            </div>
            <div className="text-gray-200 flex cursor-pointer place-content-left">
              <p className="hover:brightness-50 flex">
                <ChevronRightIcon className="h-5 w-5 pt-1 text-blue-500 " />
                <Link href={'/contact'}>
                  <u>Contact</u>
                </Link>
              </p>
            </div>
            <div className="text-gray-200 flex cursor-pointer place-content-left">
              <p className="hover:brightness-50 flex">
                <ChevronRightIcon className="h-5 w-5 pt-1 text-blue-500 " />
                <Link href={'/blog'}>
                  <u>Blog</u>
                </Link>
              </p>
            </div>
            <div className="text-gray-200 flex cursor-pointer place-content-left">
              <p className="hover:brightness-50 flex">
                <ChevronRightIcon className="h-5 w-5 pt-1 text-blue-500 " />
                <Link href={'/'}>
                  <u>Tips &amp; Resources</u>
                </Link>
              </p>
            </div>
          </div>
          {/* <div className="mb-5">
            <h4 className="font-bold text-2xl pb-4 flex place-content-center md:place-content-start">
              Useful Links
            </h4>
            <ul className="text-gray-200">
              <li className="flex cursor-pointer place-content-center md:place-content-start">
                <ChevronRightIcon className="h-5 w-5 pt-1 text-blue-500 " />
                <p className="hover:brightness-50">
                  <Link href={'/'}>Home</Link>
                </p>
              </li>
              <li className="flex cursor-pointer place-content-center md:place-content-start">
                <ChevronRightIcon className="h-5 w-5 pt-1 text-blue-500 " />
                <p className="hover:brightness-50">
                  <Link href={'/about'}>About Us</Link>
                </p>
              </li>
              <li className="flex cursor-pointer place-content-center md:place-content-start">
                <ChevronRightIcon className="h-5 w-5 pt-1 text-blue-500 " />
                <p className="hover:brightness-50">
                  <Link href={'/policies/terms'}>Terms of Services</Link>
                </p>
              </li>
              <li className="flex cursor-pointer place-content-center md:place-content-start">
                <ChevronRightIcon className="h-5 w-5 pt-1 text-blue-500 " />
                <p className="hover:brightness-50">
                  <Link href={'/policies/privacy'}>Privacy policy</Link>
                </p>
              </li>
            </ul>
          </div> */}
          {/* <div className="mb-5">
            <h4 className="font-bold text-2xl pb-4 flex place-content-center md:place-content-start">
              Services
            </h4>
            <ul className="text-gray-200">
              <li className="flex  cursor-pointer place-content-center md:place-content-start">
                <ChevronRightIcon className="h-5 w-5 pt-1 text-blue-500 " />
                <p className="hover:brightness-50">
                  <Link href={'/contact'}>Contact Us</Link>
                </p>
              </li>
              <li className="flex cursor-pointer place-content-center md:place-content-start">
                <ChevronRightIcon className="h-5 w-5 pt-1 text-blue-500 " />
                <p className="hover:brightness-50">
                  <Link href={'/policies/returns'}>Returns Policy</Link>
                </p>
              </li>
              <li className="flex cursor-pointer place-content-center md:place-content-start">
                <ChevronRightIcon className="h-5 w-5 pt-1 text-blue-500 " />
                <p className="hover:brightness-50">
                  <Link href={'/policies/shipping'}>Shipping Policy</Link>
                </p>
              </li>
              <li className="flex cursor-pointer place-content-center md:place-content-start">
                <ChevronRightIcon className="h-5 w-5 pt-1 text-blue-500 " />
                <p className="hover:brightness-50">
                  <Link href={'/policies/cookies'}>Cookies Policy</Link>
                </p>
              </li>
            </ul>
          </div> */}

          <div className="mb-5 col-start-2 col-span-1">
            <h4 className="font-bold text-2xl pb-4 flex place-content-center md:place-content-start">
              Social Media
            </h4>
            <p className="text-sm italic px-12 md:px-0">
              Come and say hello over on our social media or send us an email
            </p>

            <div className="w-full">
              <div className="flex gap-3 p-2 pr-1 justify-evenly place-items-center">
                <div className="pl-2 py-5">
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
          <div className="hidden sm:block justify-end items-center cursor-pointer link link-underline link-underline-black">
            <h1 className="text-2xl font-bold pb-3">Contact me</h1>
            <p className="text-gray-200 place-content-center md:place-content-start">
              <strong>Email: </strong>&nbsp;hwilsoncomms@gmail.com
            </p>
            <div className="hidden sm:flex items-center">
              <SocialIcon
                url="/contact/#contact"
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
          </div>
          <p className="col-span-3 text-gray-200 flex place-content-center md:place-content-center">
            Copyright&nbsp;&copy;&nbsp;Hailey Wilson Communications
          </p>
        </div>
      </div>
    </div>
  );
}
