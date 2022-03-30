import React from 'react';
import Tailwindlogo from '../assets/tailwindlogo.svg';
import { Disclosure } from '@headlessui/react';
import { ThreeBarsIcon, XIcon } from '@primer/octicons-react';
import Image from 'next/image';
import { Button } from '@primer/react';
import { backendRoute, frontendRoute } from '../constants/routes';
import { useSession } from 'next-auth/react';
import LoggedUserCard from './LoggedUserCard';
import Loader from './Loader';

export function Navbar() {
  const navigation = [
    { name: 'Dashboard', href: '#', current: true },
    { name: 'Team', href: '#', current: false },
    { name: 'Login', href: '#', current: false },
    { name: 'Calendar', href: '#', current: false }
  ];

  const session = useSession();

  return session.status == 'loading' ? (
    <Loader />
  ) : (
    <div className="relative">
      <nav className="border-b p-3 flex justify-between items-center border-gray-200">
        <div className="flex-shrink-0 flex items-center">
          <Image
            height={40}
            width={100}
            src={Tailwindlogo}
            alt="Workflow"
          />
        </div>
        {session.status == 'authenticated' ? (
          <LoggedUserCard />
        ) : (
          <a
            className="inline-block py-2 px-7 text-base text-green-50 font-medium text-center leading-6 bg-green-500 hover:bg-green-600 focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 rounded-md shadow-sm"
            href={backendRoute.LOGIN}>
            {navigation[2].name}
          </a>
        )}
      </nav>
    </div>
  );
}
