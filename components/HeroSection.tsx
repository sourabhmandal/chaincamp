import React from 'react';
import Notionlogo from '../assets/notion-logo.svg';
import { Button, Text } from '@primer/react';
import Image from 'next/image';
import { RocketIcon } from '@primer/octicons-react';

export default function HeroSection() {
  return (
    <div className="w-full text-center flex flex-col items-center bg-gray-100 p-20 leading-10">
      <Text
        as="h1"
        className="tracking-tight leading-tight"
        fontWeight={900}
        fontSize={50}>
        <div>Easily build your</div>
        <div className="text-amber-600">Knowledge Base</div>
        <span className="inline-flex items-center justify-center ml-1">
          with
          <Image height={50} width={70} src={Notionlogo} alt="notion-logo" />
          Notion
        </span>
      </Text>
      <br />
      <Text as="p" className="text-lg font-bold m-3 text-gray-500">
        <div>Turn your Notion docs into a hosted self-service Knowledge</div>
        <div>Base for your customers – no code required.</div>
      </Text>
      <Button
        leadingIcon={RocketIcon}
        variant="primary"
        className="mt-5"
        size="large">
        Create Carrer Page Now
      </Button>
      <span>
        <Text as="span" className="font-bold">
          Free{' '}
        </Text>
        7 day trial. No credit card required.
      </span>
    </div>
  );
}
