import unsplash1 from '../../assets/unsplash1.jpg';
import unsplash2 from '../../assets/unsplash2.jpg';
import Image from 'next/image';
import React from 'react';

function TwoCards() {
  return (
    <div className="flex flex-col bg-slate-100 grid-cols-2 gap-4 p-4 sm:p-8 md:p-16 lg:p-32 mx-auto md:grid">
      <div className="flex flex-col items-center justify-start">
        <h3 className="text-2xl font-extrabold leading-8 tracking-tight text-center text-gray-900 sm:text-3xl sm:leading-10">
          Standalone page
        </h3>
        <p className="w-4/5 mb-4 mt-1 text-sm text-center sm:text-base text-cool-gray-700">
          Public help center or docs page with your own domain, custom
          appearance and SEO optimization
        </p>
        <Image
          alt=""
          width={400}
          height={300}
          src={unsplash1}
          className="mt-4 w-11/12 m-auto sm:w-[72%] shadow transform hover:scale-[1.01] rounded transition-transform"
        />
      </div>
      <div className="flex flex-col items-center justify-start mt-4 md:mt-0">
        <h3 className="text-2xl font-extrabold leading-8 tracking-tight text-center text-gray-900 sm:text-3xl sm:leading-10">
          Embeddable widget
        </h3>
        <p className="w-4/5 mb-4 mt-1 text-sm text-center sm:text-base text-cool-gray-700">
          Install the widget on your website so users can get their answers in
          context
        </p>

        <Image
          alt=""
          width={400}
          height={300}
          src={unsplash2}
          className="mt-4 w-11/12 m-auto sm:w-[72%] shadow transform hover:scale-[1.01] rounded transition-transform"
        />
      </div>
    </div>
  );
}

export default TwoCards;
