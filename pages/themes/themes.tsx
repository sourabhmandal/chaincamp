import { ChevronDownIcon } from '@primer/octicons-react';
import { Box, Button, Heading, Pagehead } from '@primer/react';
import React from 'react';
import ThemeLayout from '.';
import DashboardBaseLayout from '../../components/dashboard/DashboardBaseLayout';

function ThemePage() {
  return (
    <>
      <Pagehead className="px-2">
        <Heading>Active Theme</Heading>
      </Pagehead>
      <div className="mx-2 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        <div className="h-40 w-full bg-slate-300 rounded-lg ring-2 ring-orange-400 ring-offset-4 text-center">
          themme
        </div>
      </div>
      <Pagehead className="px-2">
        <Heading>Browse Free Themes</Heading>
      </Pagehead>

      <div className="mx-2 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        <div className="h-40 w-full bg-slate-300 rounded-lg ring-2 ring-orange-400 ring-offset-4 text-center">
          themme
        </div>

        <div className="h-40 w-full bg-slate-300 rounded-lg ring-2 ring-orange-400 ring-offset-4 text-center">
          themme
        </div>
        <div className="h-40 w-full bg-slate-300 rounded-lg ring-2 ring-orange-400 ring-offset-4 text-center">
          themme
        </div>

        <div className="h-40 w-full bg-slate-300 rounded-lg ring-2 ring-orange-400 ring-offset-4 text-center">
          themme
        </div>
        <div className="h-40 w-full bg-slate-300 rounded-lg ring-2 ring-orange-400 ring-offset-4 text-center">
          themme
        </div>

        <div className="h-40 w-full bg-slate-300 rounded-lg ring-2 ring-orange-400 ring-offset-4 text-center">
          themme
        </div>
        <div className="h-40 w-full bg-slate-300 rounded-lg ring-2 ring-orange-400 ring-offset-4 text-center">
          themme
        </div>

        <div className="h-40 w-full bg-slate-300 rounded-lg ring-2 ring-orange-400 ring-offset-4 text-center">
          themme
        </div>
      </div>
      <Box
        padding={8}
        display="flex"
        alignItems="center"
        justifyContent="center"
        width="100%">
        <Button
          variant="primary"
          leadingIcon={ChevronDownIcon}
          size="large">
          Load More
        </Button>
      </Box>
    </>
  );
}

export default ThemePage;
