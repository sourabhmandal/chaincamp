import { useSession } from 'next-auth/react';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { backendRoute, frontendRoute } from '../constants/routes';
import Loader from './Loader';
import Avatar from 'boring-avatars';
import { LogoutIcon, UserIcon } from '@heroicons/react/solid';

function LoggedUserCard() {
  const session = useSession();
  const [user, setuser] = useState({ name: '', email: '', picture_url: '' });
  useEffect(() => {
    (async () => {
      const resp = await fetch(backendRoute.GET_USER, {
        method: 'POST',
        body: JSON.stringify({
          email: session.data?.user?.email
        })
      });
      const data = await resp.json();
      setuser(data);
    })();

    return () => {};
  }, [session]);

  return session.status == 'loading' || session.status == 'unauthenticated' ? (
    <Loader />
  ) : (
    <div className="absolute items-center flex z-10 top-0 right-0 bg-white p-2 rounded-bl-lg border">
      <a
        href={frontendRoute.QUIZ}
        className="inline-block p-2 mr-2 text-base text-green-50 font-medium text-center leading-6 bg-green-500 hover:bg-green-600 focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 rounded-md shadow-sm">
        Quiz
      </a>
      {user.picture_url ? (
        <Image
          src={user.picture_url}
          height={40}
          width={40}
          className="rounded-full"
          alt="user-picture"
        />
      ) : (
        <Avatar
          size={40}
          name="Maria Mitchell"
          variant="marble"
          colors={['#92A1C6', '#146A7C', '#F0AB3D', '#C271B4', '#C20D90']}
        />
      )}
      <div className="text-right mx-2">
        <p className="ml-3 font-semibold">{user.name || ''}</p>
        <p className="ml-3 text-xs text-gray-700 ">{user.email || ''}</p>
      </div>
      <a
        href={frontendRoute.USER_PROFILE}
        className="inline-block p-2 mr-2 text-base text-yellow-50 font-medium text-center leading-6 bg-yellow-500 hover:bg-yellow-600 focus:ring-2 focus:ring-yellow-500 focus:ring-opacity-50 rounded-md shadow-sm">
        <UserIcon className="h-4 w-4" />
      </a>
      <a
        href={backendRoute.LOGOUT}
        className="inline-block p-2 text-base text-green-50 font-medium text-center leading-6 bg-red-500 hover:bg-red-600 focus:ring-2 focus:ring-red-500 focus:ring-opacity-50 rounded-md shadow-sm">
        <LogoutIcon className="h-4 w-4" />
      </a>
    </div>
  );
}

export default LoggedUserCard;
