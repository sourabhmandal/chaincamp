import { ZapIcon } from '@primer/octicons-react';
import Image from 'next/image';
import React from 'react';
import notionlogo from '../../assets/notion-logo.svg';
import unsplash3 from '../../assets/unsplash3.jpg';
import unsplash4 from '../../assets/unsplash4.jpg';

export default function FeatureTimeline() {
  return (
    <div className="overflow-hidden pt-16">
      <div className="relative max-w-xl px-4 mx-auto sm:px-6 lg:px-8 lg:max-w-screen-xl">
        <svg
          width="404"
          height="784"
          fill="none"
          viewBox="0 0 404 784"
          className="absolute hidden transform -translate-x-1/2 lg:block left-full -translate-y-1/4">
          <defs>
            <pattern
              id="b1e6e422-73f8-40a6-b5d9-c8586e37e0e7"
              x="0"
              y="0"
              width="20"
              height="20"
              patternUnits="userSpaceOnUse">
              <rect
                x="0"
                y="0"
                width="4"
                height="4"
                fill="currentColor"
                className="text-gray-200"></rect>
            </pattern>
          </defs>
          <rect
            width="404"
            height="784"
            fill="url(#b1e6e422-73f8-40a6-b5d9-c8586e37e0e7)"></rect>
        </svg>
        <div className="relative -mt-6 sm:-mt-12">
          <h2 className="text-3xl font-extrabold leading-8 tracking-tight text-center text-gray-900 sm:text-4xl sm:leading-10">
            Turn your Notion docs into a <br className="hidden sm:block" />
            professional
            <span className="gradient-text-accent">Knowledge Base</span>
            <br />
            <span id="typewriter" className="block mt-2 text-purple-500"></span>
          </h2>
          <p className="max-w-3xl px-6 mx-auto mt-4 text-base leading-7 text-left text-gray-500 sm:px-0 sm:text-center sm:text-xl">
            A knowledge base can provide all the information that your customers
            need in one place. It can range from FAQs about your
            product/service, common issues and their solutions, videos with
            tutorials on how to do things and more.
          </p>
        </div>

        <div className="w-5/6 m-auto">
          <section className="container flex-row mt-20 md:flex md:mt-16">
            <div className="flex flex-col justify-center flex-1 px-0 mb-8 lg:px-16 md:w-1/3 md:mb-32">
              <div className="inline-flex items-center justify-center w-56 py-1.5 text-sm font-semibold text-yellow-500 uppercase rounded-full bg-yellow-50 reveal delay-50">
                <Image
                  width={15}
                  height={15}
                  alt="Powered by Notion"
                  src={notionlogo}></Image>
                <span className="ml-1.5">Powered by Notion</span>
              </div>
              <h3 className="mt-2 mb-3 text-3xl font-bold leading-tight text-gray-900 reveal delay-60">
                Your content stays in Notion
              </h3>
              <div className="font-medium text-gray-800 reveal delay-70">
                Creating content, answering questions, and adding tutorial
                videos has never been easier with Notions amazing editor and
                block types. No coding or technical skills necessary. Just sign
                up and connect your Notion page to get started!
              </div>
              <div className="delay-90 reveal"></div>
            </div>
            <div className="flex-1 mt-12 ml-4 reveal md:mt-6 delay-70">
              <Image
                alt="Blow away customers by how great it looks"
                height={300}
                width={350}
                src={unsplash3}></Image>
            </div>
          </section>

          <section className="container flex-row-reverse mt-20 md:flex md:mt-16">
            <div className="flex flex-col justify-center flex-1 px-0 mb-8 lg:px-16 md:w-1/3 md:mb-32">
              <div className="flex items-center justify-center py-1.5 w-52 text-sm font-semibold text-blue-500 uppercase rounded-full bg-blue-50 reveal delay-50">
                <ZapIcon /> <span className="ml-1.5">Professional Look</span>
              </div>
              <h3 className="mt-2 mb-3 text-3xl font-bold leading-tight text-gray-900 reveal delay-60">
                Blow away customers by how great it looks
              </h3>
              <div className="font-medium text-gray-800 reveal delay-70">
                Your customers deserve a professional looking knowledge base.
                Sure, you can publish your Notion page on its own but it might
                come across as
                <b>unprofessional</b> with the messy Notion url, distracting
                links pointing to Notion and the lack of customizability. <br />
                <br />
                We went the extra mile, optimized HelpKit for all devices and
                <b>designed</b> it so beautifully, that your customers will get
                blown away.
              </div>
              <div className="delay-90 reveal"></div>
            </div>
            <div className="flex-1 mt-12 ml-4 reveal md:mt-6 delay-70">
              <Image
                alt="Blow away customers by how great it looks"
                height={300}
                width={350}
                src={unsplash4}></Image>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
