import React, { ReactNode, useState } from 'react';
import { MarkGithubIcon, PersonIcon } from '@primer/octicons-react';
import {
  Box,
  CircleOcticon,
  Heading,
  Pagehead,
  StyledOcticon,
  Text,
  theme,
  UnderlineNav,
  Header,
  Avatar
} from '@primer/react';
import SideNavBar from './SideNavBar';

function Workspace({ children, selectedSidebarTab, className }: any) {
  return (
    <>
      <nav className="bg-slate-100 md:left-0 md:block md:fixed md:top-0 md:bottom-0 md:overflow-y-auto md:flex-row md:flex-nowrap md:overflow-hidden flex flex-wrap relative md:w-72 z-10">
        <Heading sx={{ fontSize: 13, my: 60, textAlign: 'center' }}>
          IncTools.io
        </Heading>
        <SideNavBar selectedSidebarTab={selectedSidebarTab} />
      </nav>
      <div className="md:ml-72">
        <Header sx={{ backgroundColor: '#fff' }}>
          <Header.Item full className="text-2xl font-bold">
            <Text sx={{ mr: 2 }} className="text-gray-600">
              Logged in as
            </Text>
            <Heading className="text-orange-400">Sourabh</Heading>
          </Header.Item>
          <Header.Item>
            <StyledOcticon
              className="border rounded-full"
              icon={PersonIcon}
              size={30}
              color={theme.colorSchemes.light.colors.ansi?.redBright}
              sx={{ border: '1px solid gray' }}
            />
          </Header.Item>
        </Header>
        <div className={className}>{children}</div>
      </div>
    </>
  );
}

export default Workspace;
