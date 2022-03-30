import React, { useEffect, useState } from 'react';
import {
  ArrowCircleLeftIcon,
  ArrowCircleRightIcon,
  ChevronDoubleLeftIcon,
  ChevronDoubleRightIcon,
  ThumbUpIcon,
  XIcon
} from '@heroicons/react/solid';
import { NextPage } from 'next';
import { useSession } from 'next-auth/react';
import Loader from '../../components/Loader';
import QuestionPanel from '../../components/quiz/QuestionPanel';
import { getQuiz } from '../../data/getQuiz';
import { calculateResult, saveResultToDB } from '../../data/calculateResult';
import LoggedUserCard from '../../components/LoggedUserCard';
import ResultModal from '../../components/quiz/result';
import QuitModal from '../../components/quiz/quit';
import { PlayIcon } from '@primer/octicons-react';
import { useRouter } from 'next/router';

type QuizQuestion = {
  id: number;
  question: string;
  option_list: string[];
  correct_answer: number;
};

const Dashboard: NextPage = () => {
  const router = useRouter();
  const [currentQuiz, setCurrentQuiz] = useState(0);
  const [quizlist, setquizlist] = useState<QuizQuestion[]>([
    { id: 0, question: '', option_list: ['', '', '', ''], correct_answer: 0 }
  ]);
  const [loading, setLoading] = useState(true);
  const [isResultModalOpen, setIsResultModalOpen] = useState(false);
  const [correct, setcorrect] = useState(0);
  const [wrong, setwrong] = useState(0);
  const [isQuitModalOpen, setisQuitModalOpen] = useState(false);
  const [unattempted, setunattempted] = useState(0);
  const [result, setresult] = useState([
    -1, -1, -1, -1, -1, -1, -1, -1, -1, -1
  ]);
  const session = useSession();
  const { size } = router.query;

  useEffect(() => {
    if (router.query.size) {
      (async () => {
        const data = await getQuiz(parseInt(size?.toString()!));
        setquizlist(data);
        setTimeout(() => setLoading(false), 4000);
      })();
    }
  }, [size, router.query]);

  const getResult = async () => {
    const ans = quizlist.map((quiz: QuizQuestion) => quiz.correct_answer);
    const { correct, wrong, unattempted } = calculateResult(result, ans);
    setcorrect(correct);
    setwrong(wrong);
    setunattempted(unattempted);
    setIsResultModalOpen(true);
  };
  return loading || session.status === 'loading' ? (
    <Loader />
  ) : (
    <div className="overflow-x-hidden relative flex bg-orange-50 flex-col justify-center items-center w-screen h-screen">
      <ResultModal
        isOpen={isResultModalOpen}
        setIsOpen={setIsResultModalOpen}
        correct={correct}
        wrong={wrong}
        unattempted={unattempted}
      />
      <QuitModal
        isOpen={isQuitModalOpen}
        setIsOpen={setisQuitModalOpen}
      />
      {session.status == 'authenticated' ? <LoggedUserCard /> : <></>}
      <div className="absolute flex bottom-0 left-0 flex-row md:flex-col md:left-auto md:right-0 md:top-1/3 ">
        <button
          className="bg-red-500 px-4 py-3 hover:bg-red-700"
          onClick={() => setisQuitModalOpen(true)}>
          <XIcon className="h-5 w-5 text-gray-50" />
        </button>

        <button
          className="bg-orange-400 px-4 py-3  hover:bg-orange-500 disabled:bg-orange-300"
          onClick={() => setCurrentQuiz(prev => prev - 1)}
          disabled={currentQuiz == 0}>
          <ChevronDoubleLeftIcon className="h-5 w-5 text-gray-50" />
        </button>
        <button
          className="bg-purple-400 px-4 py-3  hover:bg-purple-500 disabled:bg-purple-300"
          onClick={() => setCurrentQuiz(prev => prev + 1)}
          disabled={currentQuiz == quizlist.length - 1}>
          <ChevronDoubleRightIcon className="h-5 w-5 text-gray-50" />
        </button>
        <button
          className="bg-green-500 px-4 py-3  hover:bg-green-600 disabled:bg-green-400"
          onClick={getResult}>
          <PlayIcon className="h-5 w-5 text-gray-50" />
        </button>
      </div>
      {/*@ts-ignore*/}
      <QuestionPanel
        question={quizlist[currentQuiz].question}
        option_list={quizlist[currentQuiz].option_list}
        q_num={currentQuiz + 1}
        selectedOpt={result[currentQuiz]}
        setresult={setresult}
      />
      {/* <div className="mx-auto grid grid-cols-2 grid-rows-2 md:grid-cols-4 md:grid-rows-2 gap-x-3 md:gap-x-8 gap-y-3 mt-8">
        <button className="bg-green-600 w-36 h-36 rounded-lg ring-8 ring-inset ring-white border-2 border-green-500 hover:bg-orange-500 hover:border-orange-500 font-bold text-lg">
          <div className="flex flex-col">
            <span className="px-2 rounded-full bg-white mx-auto">50/50</span>
            <span className="mx-auto text-white font-bold text-center text-lg">
              3
            </span>
          </div>
        </button>
        <button className="bg-green-600 w-36 h-36 rounded-lg ring-8 ring-inset ring-white border-2 border-green-500 hover:bg-orange-500 hover:border-orange-500 font-bold text-lg">
          <div className="flex flex-col">
            <span className="px-2 rounded-full bg-white mx-auto">Guess</span>
            <span className="mx-auto text-white font-bold text-center text-lg">
              3
            </span>
          </div>
        </button>
        <button className="bg-green-600 w-36 h-36 rounded-lg ring-8 ring-inset ring-white border-2 border-green-500 hover:bg-orange-500 hover:border-orange-500 font-bold text-lg">
          <div className="flex flex-col">
            <span className="px-2 rounded-full bg-white mx-auto">Pass</span>
            <span className="mx-auto text-white font-bold text-center text-lg">
              3
            </span>
          </div>
        </button>
        <button className="bg-green-600 w-36 h-36 rounded-lg ring-8 ring-inset ring-white border-2 border-green-500 hover:bg-orange-500 hover:border-orange-500 font-bold text-lg">
          <div className="flex flex-col">
            <span className="px-2 rounded-full bg-white mx-auto">Reveal</span>
            <span className="mx-auto text-white font-bold text-center text-lg">
              3
            </span>
          </div>
        </button>
      </div> */}
    </div>
  );
};

export default Dashboard;
