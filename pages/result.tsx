import React from 'react';
import TopScoreBoard from '../components/quiz/TopScoreBoard';

function Result() {
  return (
    <div className="mx-auto w-full flex flex-col h-screen items-center justify-center">
      <p className="bg-green-600 rounded-full w-40 h-40 text-center flex flex-col items-center justify-center text-white ring-8 ring-inset ring-white border-2 border-green-500">
        <span className="font-bold text-3xl">56</span>
        <hr className="text-white w-14 border bg-white font-bold" />
        <span className="font-bold">100</span>
      </p>
      <TopScoreBoard />
    </div>
  );
}

export default Result;
