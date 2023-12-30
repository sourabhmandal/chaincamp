import React from 'react';
import hasura from '/assets/hasura.svg';
import Image from 'next/image';
import { backendRoute, frontendRoute } from '../../constants/routes';
import { useSession } from 'next-auth/react';

export default function HeroSection() {
  const session = useSession();
  return (
    <div className="w-full text-center flex flex-col items-center bg-gray-100 p-20 leading-10">
      <p className="tracking-tight leading-tight font-black text-6xl">
        <div>Easily build your</div>
        <div className="text-green-500">Knowledge of Hasura</div>
        <span className="inline-flex items-center justify-center ml-1">
          with
          <Image
            height={50}
            width={70}
            src={hasura}
            alt="notion-logo"
          />
          HasuraChamp
        </span>
      </p>
      <br />
      <p className="text-lg font-bold m-3 text-gray-500">
        <div>Test your Knowledge of hasura ecosystem using</div>
        <div>Quizes from Hasura Champ.</div>
      </p>
      {session.status == 'authenticated' ? (
        <a
          href={frontendRoute.QUIZ}
          className="mt-5 inline-block py-3 px-7 mb-6 text-base text-green-50 font-medium text-center leading-6 bg-green-500 hover:bg-green-600 focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 rounded-md shadow-sm">
          Start Now Quiz
        </a>
      ) : (
        <div className="grid grid-cols-2 grid-rows-1 gap-4">
          <a
            href={backendRoute.LOGIN}
            className="mt-5 inline-block py-3 px-7 mb-6 text-base text-green-50 font-medium text-center leading-6 bg-green-500 hover:bg-green-600 focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 rounded-md shadow-sm">
            Login and Start
          </a>
          <a
            href={frontendRoute.QUIZ}
            className="mt-5 inline-block py-3 px-7 mb-6 text-base text-green-500 font-medium text-center leading-6 bg-slate-200 hover:bg-slate-300 focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 rounded-md shadow-sm">
            Try now without login
          </a>
        </div>
      )}
    </div>
  );
}
