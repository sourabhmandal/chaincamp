import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Router, { useRouter } from 'next/router';
import { frontendRoute } from '../constants/routes';
import { CheckCircleIcon } from '@heroicons/react/solid';
import { DotsCircleHorizontalIcon } from '@heroicons/react/outline';
import { useState } from 'react';

type Props = {
  accessToken: string;
  refreshToken: string;
};

const Login: NextPage = () => {
  const router = useRouter();
  const [remeber, setRemeber] = useState(false);

  return (
    <section className="py-24 md:py-32 bg-white">
      <div className="container px-4 mx-auto">
        <div className="max-w-sm mx-auto">
          <div className="mb-6 text-center">
            <a
              className="inline-block mb-6"
              href="#">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}>
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"
                />
              </svg>
            </a>
            <h3 className="mb-4 text-2xl md:text-3xl font-bold">
              Sign in to your account
            </h3>
            <p className="text-lg text-coolGray-500 font-medium">
              Start your demo version
            </p>
          </div>
          <form action="">
            <div className="mb-6">
              <label
                className="block mb-2 text-coolGray-800 font-medium"
                htmlFor="">
                Email
              </label>
              <input
                className="appearance-none block w-full p-3 leading-5 text-coolGray-900 border border-coolGray-200 rounded-lg shadow-md placeholder-coolGray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50"
                type="email"
                placeholder="dev@shuffle.dev"
              />
            </div>
            <div className="mb-4">
              <label
                className="block mb-2 text-coolGray-800 font-medium"
                htmlFor="">
                Password
              </label>
              <input
                className="appearance-none block w-full p-3 leading-5 text-coolGray-900 border border-coolGray-200 rounded-lg shadow-md placeholder-coolGray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50"
                type="password"
                placeholder="************"
              />
            </div>
            <div className="flex flex-wrap items-center justify-between mb-6">
              <div className="w-full md:w-1/2">
                <button
                  className="flex items-center"
                  onClick={() => setRemeber(prev => !prev)}>
                  {remeber ? (
                    <CheckCircleIcon className="h-5 w-5 text-green-500" />
                  ) : (
                    <DotsCircleHorizontalIcon className="h-5 w-5 text-green-500" />
                  )}
                  <span className="ml-7 text-xs text-coolGray-800 font-medium">
                    Remember me
                  </span>
                </button>
              </div>
              <div className="w-full md:w-auto">
                <a
                  className="text-xs font-medium text-green-500 hover:text-green-600"
                  href="#">
                  Forgot your password?
                </a>
              </div>
            </div>
            <a
              className="inline-block py-3 px-7 mb-6 w-full text-base text-green-50 font-medium text-center leading-6 bg-green-500 hover:bg-green-600 focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 rounded-md shadow-sm"
              href="#">
              Sign In
            </a>
            <p className="text-center">
              <span className="text-xs font-medium">
                Don&rsquo;t have an account?{' '}
              </span>
              <a
                className="inline-block text-xs font-medium text-green-500 hover:text-green-600 hover:underline"
                href="#">
                Sign up
              </a>
            </p>
          </form>
        </div>
      </div>
    </section>
  );
};

Login.getInitialProps = async (ctx): Promise<any> => {
  // try {
  //   // Validating access payload
  //   if (ctx.query.error) throw ctx.query.error;

  //   // Setting http-only cookies on client
  //   const { accessToken, refreshToken } = ctx.query;
  //   return { accessToken, refreshToken };
  // } catch (err) {
  //   console.error(err);
  //   Router.push(frontendRoute.LANDING);
  // }
  return {};
};
export default Login;
