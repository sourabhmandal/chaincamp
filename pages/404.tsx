import React from 'react';

function ErrorPage({ err }: any) {
  return (
    <div className="flex justify-center items-center h-screen flex-col">
      <p className="text-8xl">404</p>
      <p className="text-lg text-slate-600">
        Page Not Found <br />
        {err}
      </p>
    </div>
  );
}

export default ErrorPage;
