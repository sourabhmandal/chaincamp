import React from 'react';
/* This example requires Tailwind CSS v2.0+ */
import Tailwindlogo from '../assets/tailwindlogo.svg';
import { Disclosure, Menu, Transition } from '@headlessui/react';
import { BellIcon, ThreeBarsIcon, XIcon } from '@primer/octicons-react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@primer/react';
import { TEST_QUERY } from '../graphql/queries';
import { useQuery } from '@apollo/client';

export function Navbar() {
  const { loading, error, data } = useQuery(TEST_QUERY);

  if (loading) console.log(loading, data);
  if (error) console.log(error, data);
  if (data) console.log(data);

  const navigation = [
    { name: 'Dashboard', href: '#', current: true },
    { name: 'Team', href: '#', current: false },
    { name: 'Projects', href: '#', current: false },
    { name: 'Calendar', href: '#', current: false }
  ];

  function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ');
  }

  return (
    <div className="relative">
      <Disclosure as="nav" className="border-b border-gray-200">
        {({ open }) => (
          <>
            <div className="max-w-7xl mx-auto">
              <div className="relative flex items-center justify-between h-12">
                <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                  {/* Mobile menu button*/}
                  <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                    <span className="sr-only">Open main menu</span>
                    {open ? <XIcon size={16} /> : <ThreeBarsIcon size={16} />}
                  </Disclosure.Button>
                </div>
                <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                  <div className="flex-shrink-0 flex items-center">
                    <Image
                      height={40}
                      width={100}
                      src={Tailwindlogo}
                      alt="Workflow"
                    />
                  </div>
                </div>
                <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                  <Link
                    passHref
                    key={navigation[2].name}
                    href={navigation[2].href}>
                    <Button variant="primary" className="btn-mktg">
                      {navigation[2].name}
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </>
        )}
      </Disclosure>
    </div>
  );
}
