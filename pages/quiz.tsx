import React, { useEffect } from 'react';
import {
  ArrowCircleLeftIcon,
  ArrowCircleRightIcon,
  XIcon
} from '@heroicons/react/solid';
import { NextPage } from 'next';
import { GET_ALL_QUIZ_IDS } from './api/graphql/queries/_quiz';
import { useSession } from 'next-auth/react';

const Dashboard: NextPage = () => {
  const session = useSession();

  const getQuiz = async () => {
    const res = await fetch('http://localhost:3000/api/graphql/gql', {
      method: 'POST',
      headers: {
        'x-hasura-role': 'user'
      },
      body: JSON.stringify({
        query: GET_ALL_QUIZ_IDS
      })
    });
    const json = await res.json();
    console.log(json);
  };

  useEffect(() => {
    getQuiz();
  }, []);
  return (
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
            readOnly
          />
          <span>Option 1</span>
        </div>
        <div className=" hover:border-1 hover:border-green-500 hover:ring-2 hover:ring-offset-4 rounded-lg cursor-pointer px-4 p-1 text-gray-800 hover:text-black font-bold text-lg hover:bg-green-500 opacity-70">
          <input
            type="radio"
            className="mr-4"
            readOnly
          />
          <span>Option 2</span>
        </div>
        <div className=" hover:border-1 hover:border-green-500 hover:ring-2 hover:ring-offset-4 rounded-lg cursor-pointer px-4 p-1 text-gray-800 hover:text-black font-bold text-lg hover:bg-green-500 opacity-70">
          <input
            type="radio"
            className="mr-4"
            readOnly
          />
          <span>Option 3</span>
        </div>
        <div className=" hover:border-1 hover:border-green-500 hover:ring-2 hover:ring-offset-4 rounded-lg cursor-pointer px-4 p-1 text-gray-800 hover:text-black font-bold text-lg hover:bg-green-500 opacity-70">
          <input
            type="radio"
            className="mr-4"
            readOnly
          />
          <span>Option 4</span>
        </div>
      </div>

      <div className="grid grid-cols-4 grid-rows-2 gap-x-8 gap-y-3 mt-8">
        <button className="bg-green-600 px-8 py-11 rounded-lg text-white ring-8 ring-inset ring-white border-2 border-green-500 hover:bg-orange-500 hover:border-orange-500 font-bold text-lg">
          50/50
        </button>
        <button className="bg-green-600 px-8 py-11 rounded-lg text-white ring-8 ring-inset ring-white border-2 border-green-500 hover:bg-orange-500 hover:border-orange-500 font-bold text-lg">
          Guess
        </button>
        <button className="bg-green-600 px-7 py-11 rounded-lg text-white ring-8 ring-inset ring-white border-2 border-green-500 hover:bg-orange-500 hover:border-orange-500 font-bold text-lg">
          Pass
        </button>
        <button className="bg-green-600 px-6 py-11 rounded-lg text-white ring-8 ring-inset ring-white border-2 border-green-500 hover:bg-orange-500 hover:border-orange-500 font-bold text-lg">
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
};

export default Dashboard;
