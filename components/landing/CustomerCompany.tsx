import Image from 'next/image';
import React from 'react';
import notionformlogo from '../../assets/notionformicon.png';
export default function CustomerCompany() {
  const company = [
    notionformlogo,
    notionformlogo,
    notionformlogo,
    notionformlogo
  ];
  return (
    <div className="max-w-screen-md my-12 mx-3 md:mx-auto">
      <div className="grid grid-cols-4 gap-8">
        {company.map((c, id) => {
          return (
            <Image
              key={id}
              src={c}
              layout="responsive"
              alt=""
              className="opacity-30 grayscale"
            />
          );
        })}
      </div>
    </div>
  );
}
