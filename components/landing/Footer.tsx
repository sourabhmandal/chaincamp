import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import hasura from '../../assets/hasura.svg';

export default function Footer() {
  return (
    <div className="w-full border-t">
      <div className="p-8 bg-white sm:p-6 dark:bg-gray-800">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0">
            <Link
              passHref
              href="/">
              <div className="flex items-center">
                <Image
                  src={hasura}
                  width={40}
                  height={40}
                  alt="FlowBite Logo"
                />

                <span className="ml-3 self-center text-xl font-extrabold whitespace-nowrap dark:text-white">
                  Hasura Champ
                </span>
              </div>
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:gap-6">
            <div>
              <h3 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                Resources
              </h3>
              <ul>
                <li className="mb-4">
                  <a
                    href="https://hasura.io/docs/latest/graphql/core/index/"
                    className="text-gray-600 hover:underline dark:text-gray-400">
                    Hasura Docs
                  </a>
                </li>
                <li>
                  <a
                    href="https://hasura.io/learn/"
                    rel="nofollow"
                    className="text-gray-600 hover:underline dark:text-gray-400">
                    Hasura Learn
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
                    href="https://github.com/hasura/graphql-engine"
                    className="text-gray-600 hover:underline dark:text-gray-400">
                    Github
                  </a>
                </li>
                <li>
                  <a
                    href="https://twitter.com/hasurahq"
                    className="text-gray-600 hover:underline dark:text-gray-400">
                    Twitter
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
            <a
              href="https://flowbite.com"
              className="hover:underline">
              Made with love
            </a>
            . Sourabh Mandal.
          </span>
          <div className="flex mt-4 space-x-6 sm:justify-center sm:mt-0">
            <a
              href="https://github.com/sourabhmandal/chaincamp"
              className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
              Github
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
