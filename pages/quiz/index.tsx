import { NextPage } from 'next';
import { frontendRoute } from '../../constants/routes';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import Loader from '../../components/Loader';
import LoggedUserCard from '../../components/LoggedUserCard';

const Dashboard: NextPage = () => {
  const session = useSession();
  const router = useRouter();
  return session.status == 'loading' ? (
    <Loader />
  ) : (
    <div className="overflow-x-hidden relative flex bg-orange-50 flex-col justify-center items-center w-screen h-screen">
      {session.status == 'authenticated' ? <LoggedUserCard /> : <></>}
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
