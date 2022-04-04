import { useEffect, useState } from 'react';
import {
  ChevronDoubleLeftIcon,
  ChevronDoubleRightIcon,
  PlayIcon,
  XIcon
} from '@heroicons/react/solid';
import { NextPage } from 'next';
import { useSession } from 'next-auth/react';
import Loader from '../../components/Loader';
import QuestionPanel from '../../components/quiz/QuestionPanel';
import { getQuiz } from '../../data/getQuiz';
import { calculateResult } from '../../data/calculateResult';
import LoggedUserCard from '../../components/LoggedUserCard';
import ResultModal from '../../components/quiz/result';
import QuitModal from '../../components/quiz/quit';
import { useRouter } from 'next/router';
import toast, { Toaster } from 'react-hot-toast';

type QuizQuestion = {
  id: number;
  question: string;
  option_list: string[];
  correct_answer: number;
};

const Dashboard: NextPage = () => {
  const router = useRouter();
  const [currentQuiz, setCurrentQuiz] = useState(0);
  const [quizlist, setquizlist] = useState<QuizQuestion[]>([]);
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
        if (data.length === 0) {
          toast.error('Could not get quiz from server');
        } else {
          setquizlist(data);
          setLoading(false);
        }
      })();
    }
  }, [size, router.query]);

  const getResult = async () => {
    const ans = quizlist.map((quiz: QuizQuestion) => quiz.correct_answer);
    const { correct, wrong, unattempted } = calculateResult(result, ans);
    setcorrect(correct);
    setwrong(wrong);
    setunattempted(unattempted);
    if (unattempted === quizlist.length) {
      toast.error('please attempt atleast 1 question');
    } else {
      setIsResultModalOpen(true);
    }
  };
  return loading || session.status === 'loading' ? (
    <>
      <Toaster />
      <Loader />
    </>
  ) : (
    <div className="overflow-x-hidden relative flex bg-orange-50 flex-col justify-center items-center w-screen h-screen">
      <Toaster />
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
    </div>
  );
};

export default Dashboard;
