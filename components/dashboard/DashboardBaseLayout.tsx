import React, { ReactNode, useState } from 'react';
import { MarkGithubIcon, PersonIcon } from '@primer/octicons-react';
import { Box, UnderlineNav } from '@primer/react';
import SideNavBar from '../SideNavBar';
import { frontendRoute } from '../../constants/routes';
import Workspace from '../Workspace';

type DashboardBaseLayoutType = {
  children: ReactNode;
  selectedDashboadTab: number;
  className?: string;
};
function DashboardBaseLayout({
  children,
  selectedDashboadTab,
  className
}: DashboardBaseLayoutType) {
  return (
    <Workspace selectedSidebarTab={1}>
      <Box className="border-b px-3">
        <UnderlineNav aria-label="Main">
          <UnderlineNav.Link
            href={frontendRoute.DASHBOARD}
            selected={selectedDashboadTab == 1}>
            Home
          </UnderlineNav.Link>
          <UnderlineNav.Link
            href={frontendRoute.DASHBOARD_JOBS}
            selected={selectedDashboadTab == 2}>
            Job Listing
          </UnderlineNav.Link>
        </UnderlineNav>
      </Box>
      <div className={className}>{children}</div>
    </Workspace>
  );
}

export default DashboardBaseLayout;
