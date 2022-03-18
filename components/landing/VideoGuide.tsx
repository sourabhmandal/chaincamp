import React from 'react';

export default function VideoGuide() {
  return (
    <section
      id="productvideo"
      className="m-auto text-white body-font bg-[#131927]"
      data-v-78e4be5c="">
      <div
        className="container flex flex-col-reverse items-center w-4/5 px-2 py-16 mx-auto sm:py-24 md:flex-row"
        data-v-78e4be5c="">
        <div className="w-full mb-0 lg:max-w-lg lg:w-full md:w-1/2 md:mb-0">
          <iframe
            src="https://www.youtube.com/embed/wpAZICjeZnw"
            title="YouTube video player"
            frameBorder={0}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen={true}
            className="w-full h-auto sm:h-[280px] glow-shadow"
            style={{ borderRadius: 16 }}
            data-v-78e4be5c=""></iframe>
        </div>
        <div
          className="flex flex-col items-center text-center lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 md:items-start md:text-left"
          data-v-78e4be5c="">
          <h2
            className="mb-4 text-3xl font-bold text-white sm:text-4xl"
            data-v-78e4be5c="">
            Learn how
            <span className="gradient-text" data-v-78e4be5c="">
              HelpKit
            </span>
            works 🛠️
          </h2>
          <p className="mb-8 leading-relaxed" data-v-78e4be5c="">
            Watch Dominik demonstrating how you can get started creating your
            knowledge base with Notion and HelpKit.
          </p>
        </div>
      </div>
    </section>
  );
}
