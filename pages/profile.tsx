import { useSession } from 'next-auth/react';
import React, { useEffect, useState } from 'react';
import Loader from '../components/Loader';
import { Navbar } from '../components/Navbar';
import ScoreBoard from '../components/ScoreBoard';
import { MY_TOP_RANKING } from './api/graphql/queries/_score';

function Profile() {
  const session = useSession();
  const [myTopRanks, setMyTopRanks] = useState([]);
  const [overallTopRanks, setOverallTopRanks] = useState([]);

  useEffect(() => {
    (async () => {
      const mytopresp = await fetch('http://localhost:3000/api/graphql/gql', {
        method: 'POST',
        headers: {
          'x-hasura-role': 'user'
        },
        body: JSON.stringify({
          query: MY_TOP_RANKING,
          vars: { _eq: session.data?.user?.email }
        })
      });
      const mytopdata = await mytopresp.json();
      setMyTopRanks(mytopdata.data.history);

      const overalltopresp = await fetch(
        'http://localhost:3000/api/graphql/gql',
        {
          method: 'POST',
          headers: {
            'x-hasura-role': 'user'
          },
          body: JSON.stringify({
            query: MY_TOP_RANKING,
            vars: { _eq: session.data?.user?.email }
          })
        }
      );
      const overalltopdata = await overalltopresp.json();
      setOverallTopRanks(overalltopdata.data.history);
    })();

    return () => {};
  }, [session]);

  return session.status == 'loading' ? (
    <Loader />
  ) : (
    <>
      <Navbar />
      <div className="mx-auto w-full flex flex-col h-screen items-center justify-center">
        <div className="flex justify-around bg-slate-200 p-10 rounded-lg w-2/3 items-center">
          <div className="">
            <p className="text-5xl">{session.data?.user?.name}</p>
            <p className="text-gray-700">{session.data?.user?.email}</p>
          </div>
          <p className="bg-green-600 rounded-full w-40 h-40 text-center flex flex-col items-center justify-center text-white ring-8 ring-inset ring-white border-2 border-green-500">
            <span className="font-bold text-3xl">56</span>
            <hr className="text-white w-14 border bg-white font-bold" />
            <span className="font-bold">Best Score</span>
          </p>
        </div>

        <div className="mt-16 w-1/2">
          <p className="text-2xl font-bold text-gray-600">My Top Score</p>
          <hr className="mb-2" />
          <ScoreBoard data={myTopRanks} />
        </div>

        <div className="mt-16 w-1/2">
          <p className="text-2xl font-bold text-gray-600">Overall Top Score</p>
          <hr className="mb-2" />
          <ScoreBoard data={myTopRanks} />
        </div>
      </div>
    </>
  );
}

export default Profile;
