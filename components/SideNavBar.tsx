import {
  BriefcaseIcon,
  CalendarIcon,
  FeedPersonIcon,
  GearIcon,
  HomeIcon,
  MailIcon,
  PeopleIcon,
  RocketIcon
} from '@primer/octicons-react';
import {
  Avatar,
  Box,
  CounterLabel,
  Heading,
  Label,
  SideNav,
  StyledOcticon,
  Text
} from '@primer/react';
import React from 'react';
import { frontendRoute } from '../constants/routes';

function SideNavBar({ selectedSidebarTab }: any) {
  return (
    <SideNav
      bordered
      sx={{ maxWidth: 360, borderRadius: 0 }}
      aria-label="Main">
      <SideNav.Link
        href={frontendRoute.DASHBOARD}
        selected={selectedSidebarTab == 1}>
        <Box
          display={'flex'}
          className="flex-col">
          <Heading
            as="h5"
            sx={{ fontSize: 1 }}>
            <StyledOcticon
              sx={{ mr: 2 }}
              size={16}
              icon={HomeIcon}
            />
            Dashboard
          </Heading>
          <Text className="text-gray-500">and some more content</Text>
        </Box>
      </SideNav.Link>

      <SideNav.Link
        href={frontendRoute.APPLICANT}
        variant="full"
        selected={selectedSidebarTab == 2}>
        <Box
          display={'flex'}
          className="flex-col">
          <Heading
            as="h5"
            sx={{ fontSize: 1 }}>
            <StyledOcticon
              sx={{ mr: 2 }}
              size={16}
              icon={PeopleIcon}
            />
            Applicants
          </Heading>

          <Text className="text-gray-500">See Applicant Process</Text>
        </Box>
      </SideNav.Link>

      <SideNav.Link
        href={frontendRoute.CALANDER}
        variant="full"
        selected={selectedSidebarTab == 3}>
        <Box
          display={'flex'}
          className="flex-col">
          <Heading
            as="h5"
            sx={{ fontSize: 1 }}>
            <StyledOcticon
              sx={{ mr: 2 }}
              size={16}
              icon={CalendarIcon}
            />
            Calendar
          </Heading>
          <Text className="text-gray-500">and some more content</Text>
        </Box>
      </SideNav.Link>

      <SideNav.Link
        href={frontendRoute.THEMES}
        variant="full"
        selected={selectedSidebarTab == 4}>
        <Box
          display={'flex'}
          className="flex-col">
          <Heading
            as="h5"
            sx={{ fontSize: 1 }}>
            <StyledOcticon
              sx={{ mr: 2 }}
              size={16}
              icon={PeopleIcon}
            />
            Themes
          </Heading>

          <Text className="text-gray-500">
            Add beautiful theme from wide array of free themes
          </Text>
        </Box>
      </SideNav.Link>

      <SideNav.Link
        href={frontendRoute.SETTINGS}
        selected={selectedSidebarTab == 5}>
        <StyledOcticon
          sx={{ mr: 2 }}
          size={16}
          icon={GearIcon}
        />
        <Text>Settings</Text>
      </SideNav.Link>
    </SideNav>
  );
}

export default SideNavBar;
