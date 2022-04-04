import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import Loader from '../components/Loader';
import { Navbar } from '../components/Navbar';
import ScoreBoard from '../components/ScoreBoard';
import { backendRoute } from '../constants/routes';
import {
  MY_TOP_RANKING,
  OVERALL_TOP_RANKING
} from './api/graphql/queries/_score';
import toast, { Toaster } from 'react-hot-toast';
type RankCol = {
  score: number;
  user_email: string;
  correct: number;
  wrong: number;
  unattempted: number;
};
function Profile() {
  const session = useSession();
  const [myTopRanks, setMyTopRanks] = useState<RankCol[]>([]);
  const [overallTopRanks, setOverallTopRanks] = useState<RankCol[]>([]);
  const router = useRouter();
  const [loading, setloading] = useState(true);

  useEffect(() => {
    if (session.status == 'authenticated') {
      (async () => {
        const mytopresp = await fetch(backendRoute.GQL, {
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

        if (!mytopdata.error && mytopdata.data.history.length != 0) {
          console.log('set data');
          setMyTopRanks(
            mytopdata.data.history.sort((a: any, b: any) => {
              return b.score - a.score;
            })
          );
        } else if (mytopdata.data.history.length == 0) {
          toast.error('please attempt a quiz before', { icon: '⚠️' });
          setMyTopRanks(prev => {
            const newTopRank = [...prev];
            newTopRank[0] = {
              score: 0,
              user_email: session.data?.user?.email?.toString()!,
              correct: 0,
              wrong: 0,
              unattempted: 0
            };
            return newTopRank;
          });
        } else {
          toast.error('Could not get data from server');
        }

        const overalltopresp = await fetch(backendRoute.GQL, {
          method: 'POST',
          headers: {
            'x-hasura-role': 'user'
          },
          body: JSON.stringify({
            query: OVERALL_TOP_RANKING
          })
        });
        const overalltopdata = await overalltopresp.json();
        if (!overalltopdata.error && overalltopdata.data.history.length != 0) {
          setOverallTopRanks(
            overalltopdata.data.history.sort((a: any, b: any) => {
              return b.score - a.score;
            })
          );
        } else if (mytopdata.data.history.length == 0) {
          setMyTopRanks(prev => {
            const newOverallRank = [...prev];
            newOverallRank[0] = {
              score: 0,
              user_email: session.data?.user?.email?.toString()!,
              correct: 0,
              wrong: 0,
              unattempted: 0
            };
            return newOverallRank;
          });
          toast('please attempt a quiz before', {
            icon: '⚠️'
          });
        } else {
          toast.error('Could not get data from server');
        }
        setloading(false);
      })();
    }

    return () => {};
  }, [session]);

  return session.status == 'loading' || loading ? (
    <Loader />
  ) : session.status == 'unauthenticated' ? (
    router.push(backendRoute.LOGIN)
  ) : (
    <>
      <Toaster />
      <nav className="fixed bg-none	z-40 top-0 left-0 right-0 backdrop-blur bg-clip-padding backdrop-filter bg-opacity-10">
        <Navbar />
      </nav>
      <div className="my-32 mx-auto w-full flex flex-col h-screen items-center justify-center">
        <div className="flex justify-around bg-slate-200 p-10 rounded-lg w-2/3 items-center">
          <div className="">
            <p className="text-5xl">{session.data?.user?.name}</p>
            <p className="text-gray-700">{session.data?.user?.email}</p>
          </div>
          <p className="bg-green-600 rounded-full w-40 h-40 text-center flex flex-col items-center justify-center text-white ring-8 ring-inset ring-white border-2 border-green-500">
            <span className="font-bold text-3xl">{myTopRanks[0].score}</span>
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
          <ScoreBoard data={overallTopRanks} />
        </div>
      </div>
    </>
  );
}

export default Profile;
