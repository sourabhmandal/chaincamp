import { Spinner } from '@primer/react';
import React from 'react';

function Loader() {
  return (
    <div className="flex justify-center items-center h-screen flex-col">
      <Spinner size="large" />
      <p className="text-lg text-slate-600">Loading Data please wait</p>
    </div>
  );
}

export default Loader;
