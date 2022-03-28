import { LogoGithubIcon } from '@primer/octicons-react';
import Image from 'next/image';
import React from 'react';
import nflogo from '../../assets/notionlogo.svg';

export default function Footer() {
  return (
    <div className="w-full mx-auto pt-10 px-10 border-t">
      <div className="p-4 bg-white sm:p-6 dark:bg-gray-800">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0">
            <a href="https://flowbite.com" className="flex items-center">
              <Image
                src={nflogo}
                width={40}
                height={40}
                alt="FlowBite Logo"></Image>
              <span className="ml-3 self-center text-xl font-extrabold whitespace-nowrap dark:text-white">
                Notion Kit
              </span>
            </a>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
            <div>
              <h3 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                Resources
              </h3>
              <ul>
                <li className="mb-4">
                  <a
                    href="https://flowbite.com"
                    className="text-gray-600 hover:underline dark:text-gray-400">
                    Flowbite
                  </a>
                </li>
                <li>
                  <a
                    href="https://tailwindcss.com/"
                    rel="nofollow"
                    className="text-gray-600 hover:underline dark:text-gray-400">
                    Tailwind CSS
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                Follow us
              </h3>
              <ul>
                <li className="mb-4">
                  <a
                    href="https://github.com/themesberg/flowbite"
                    className="text-gray-600 hover:underline dark:text-gray-400">
                    Github
                  </a>
                </li>
                <li>
                  <a
                    href="https://discord.gg/4eeurUVvTy"
                    className="text-gray-600 hover:underline dark:text-gray-400">
                    Discord
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                Legal
              </h3>
              <ul>
                <li className="mb-4">
                  <a
                    href="#"
                    target="_blank"
                    className="text-gray-600 hover:underline dark:text-gray-400">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    target="_blank"
                    className="text-gray-600 hover:underline dark:text-gray-400">
                    Terms &amp; Conditions
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
            © 2022{' '}
            <a href="https://flowbite.com" className="hover:underline">
              Flowbite™
            </a>
            . All Rights Reserved.
          </span>
          <div className="flex mt-4 space-x-6 sm:justify-center sm:mt-0">
            <a
              href="#"
              className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
              <LogoGithubIcon />
            </a>
            <a
              href="#"
              className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
              <LogoGithubIcon />
            </a>
            <a
              href="#"
              className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
              <LogoGithubIcon />
            </a>
            <a
              href="#"
              className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
              <LogoGithubIcon />
            </a>
            <a
              href="#"
              className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
              <LogoGithubIcon />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
