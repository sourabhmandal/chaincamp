import React, { useEffect, useState } from 'react';
import {
  ArrowCircleLeftIcon,
  ArrowCircleRightIcon,
  ThumbUpIcon,
  XIcon
} from '@heroicons/react/solid';
import { NextPage } from 'next';
import { useSession } from 'next-auth/react';
import Loader from '../../components/Loader';
import QuestionPanel from '../../components/quiz/QuestionPanel';
import { getQuiz } from '../../data/getQuiz';
import { frontendRoute } from '../../constants/routes';

const Dashboard: NextPage = () => {
  const session = useSession();
  return session.status == 'loading' ? (
    <Loader />
  ) : (
    <div className="overflow-x-hidden relative flex bg-orange-50 flex-col justify-center items-center w-screen h-screen">
      <a
        href={frontendRoute.QUIZ + '/10'}
        className={`mb-3 text-left tracking-wider hover:border-1 hover:border-green-500 hover:ring-2 hover:ring-offset-4 rounded-lg cursor-pointer px-20 p-1 text-gray-800 hover:text-black font-bold text-lg hover:bg-green-500 opacity-70`}>
        <span>10 Question Challenge</span>
      </a>
      <a
        href={frontendRoute.QUIZ + '/20'}
        className={`mb-3 text-left tracking-wider hover:border-1 hover:border-green-500 hover:ring-2 hover:ring-offset-4 rounded-lg cursor-pointer px-20 p-1 text-gray-800 hover:text-black font-bold text-lg hover:bg-green-500 opacity-70`}>
        <span>20 Question Challenge</span>
      </a>
      <a
        href={frontendRoute.QUIZ + '/30'}
        className={`mb-3 text-left tracking-wider hover:border-1 hover:border-green-500 hover:ring-2 hover:ring-offset-4 rounded-lg cursor-pointer px-20 p-1 text-gray-800 hover:text-black font-bold text-lg hover:bg-green-500 opacity-70`}>
        <span>30 Question Challenge</span>
      </a>
      <a
        href={frontendRoute.QUIZ + '/40'}
        className={`mb-3 text-left tracking-wider hover:border-1 hover:border-green-500 hover:ring-2 hover:ring-offset-4 rounded-lg cursor-pointer px-20 p-1 text-gray-800 hover:text-black font-bold text-lg hover:bg-green-500 opacity-70`}>
        <span>40 Question Challenge</span>
      </a>
    </div>
  );
};

export default Dashboard;
