import React, { useEffect, useState } from 'react';
import Loader from '../components/Loader';
import { useUser } from '@auth0/nextjs-auth0';
import { useHasuraUser } from '../hooks/getUser';
import { makeGqlRequest } from './api/graphql/_gqlrest';
import { GET_LOGGED_USER_DETAIL } from './api/graphql/queries/_user';
import {
  ArrowCircleLeftIcon,
  ArrowCircleRightIcon,
  XIcon
} from '@heroicons/react/solid';

function Dashboard() {
  const [loading, setloading] = useState<Boolean>(true);
  const { user } = useUser();
  const { hasuraUser, setHasuraUser } = useHasuraUser();

  const getUserDetails = async (user_email: string) => {
    const data = await makeGqlRequest(GET_LOGGED_USER_DETAIL, {
      user_email: user_email
    });
    const resp = await data.json();
    const newuser = {
      id: resp.data.users[0].id,
      name: resp.data.users[0].name,
      picture: resp.data.users[0].picture_url,
      email: resp.data.users[0].email,
      phone: resp.data.users[0].phone,
      role: resp.data.users[0].role,
      created_at: resp.data.users[0].created_at,
      updated_at: resp.data.users[0].updated_at
    };
    setHasuraUser(newuser);
  };

  useEffect(() => {
    const user_email = user?.email!;
    if (user_email && hasuraUser.id == 0) {
      (async () => {
        await getUserDetails(user_email);
      })();
    }
    if (hasuraUser.id != 0) setloading(false);
    return () => {};
  }, [user, hasuraUser]);

  return loading ? (
    <Loader />
  ) : (
    <div className="sm:flex bg-orange-50 flex-col justify-center items-center w-full h-screen">
      <div className="sm:flex max-w-7xl">
        <div className="text-3xl font-bold px-48 text-center">
          <span className="text-3xl font-bold mr-8">1. </span>This is first
          question This is first question This is first question This is first
          question This is first question This is first question?
        </div>
      </div>
      <div className="max-w-3xl grid grid-cols-1 grid-rows-4 gap-1 w-full p-8">
        <div className=" hover:border-1 hover:border-green-500 hover:ring-2 hover:ring-offset-4 rounded-lg cursor-pointer px-4 p-1 text-gray-800 hover:text-black font-bold text-lg hover:bg-green-500 opacity-70">
          <input
            type="radio"
            checked
            className="mr-4"
          />
          <span>Option 1</span>
        </div>
        <div className=" hover:border-1 hover:border-green-500 hover:ring-2 hover:ring-offset-4 rounded-lg cursor-pointer px-4 p-1 text-gray-800 hover:text-black font-bold text-lg hover:bg-green-500 opacity-70">
          <input
            type="radio"
            className="mr-4"
          />
          <span>Option 2</span>
        </div>
        <div className=" hover:border-1 hover:border-green-500 hover:ring-2 hover:ring-offset-4 rounded-lg cursor-pointer px-4 p-1 text-gray-800 hover:text-black font-bold text-lg hover:bg-green-500 opacity-70">
          <input
            type="radio"
            className="mr-4"
          />
          <span>Option 3</span>
        </div>
        <div className=" hover:border-1 hover:border-green-500 hover:ring-2 hover:ring-offset-4 rounded-lg cursor-pointer px-4 p-1 text-gray-800 hover:text-black font-bold text-lg hover:bg-green-500 opacity-70">
          <input
            type="radio"
            className="mr-4"
          />
          <span>Option 4</span>
        </div>
      </div>

      <div className="grid grid-cols-4 grid-rows-2 gap-x-8 gap-y-3 mt-8">
        <button className="bg-green-600 rounded-full px-8 py-11 rounded-lg text-white ring-8 ring-inset ring-white border-2 border-green-500 hover:bg-orange-500 hover:border-orange-500 font-bold text-lg">
          50/50
        </button>
        <button className="bg-green-600 rounded-full px-8 py-11 rounded-lg text-white ring-8 ring-inset ring-white border-2 border-green-500 hover:bg-orange-500 hover:border-orange-500 font-bold text-lg">
          Guess
        </button>
        <button className="bg-green-600 rounded-full px-7 py-11 rounded-lg text-white ring-8 ring-inset ring-white border-2 border-green-500 hover:bg-orange-500 hover:border-orange-500 font-bold text-lg">
          Pass
        </button>
        <button className="bg-green-600 rounded-full px-6 py-11 rounded-lg text-white ring-8 ring-inset ring-white border-2 border-green-500 hover:bg-orange-500 hover:border-orange-500 font-bold text-lg">
          Reveal
        </button>
        <p className="mx-auto font-bold text-center text-lg">3</p>
        <p className="mx-auto font-bold text-center text-lg">3</p>
        <p className="mx-auto font-bold text-center text-lg">3</p>
        <p className="mx-auto font-bold text-center text-lg">3</p>
      </div>

      <div className="flex flex-col items-end absolute right-0">
        <button className="bg-red-500 px-4 py-3 rounded-tl-lg hover:bg-red-600">
          <XIcon className="h-5 w-5 text-gray-50" />
        </button>

        <button className="bg-orange-400 px-4 py-3  hover:bg-orange-500">
          <ArrowCircleLeftIcon className="h-5 w-5 text-gray-50" />
        </button>
        <button className="bg-green-500 px-4 py-3 rounded-bl-lg  hover:bg-green-600">
          <ArrowCircleRightIcon className="h-5 w-5 text-gray-50" />
        </button>
      </div>
    </div>
  );
}

export default Dashboard;
