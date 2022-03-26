import { ChevronRightIcon } from '@primer/octicons-react';
import { Box, Heading, StyledOcticon, Text } from '@primer/react';
import React from 'react';

function UpcomingEvents() {
  return (
    <Box className="border rounded-md m-4">
      <Box className="flex items-center justify-between tracking-tight px-5 py-2 w-full border-b">
        <Heading>Upcoming Events</Heading>
        {/* <Button leadingIcon={ProjectIcon}>Details</Button> */}
      </Box>

      <Box
        display="flex"
        className="flex-col p-3 hover:bg-slate-50 border-b">
        <Box
          alignItems="center"
          display="flex">
          <StyledOcticon
            icon={ChevronRightIcon}
            className="mx-4"
          />
          <Text>The Sliding Mr. Bones (Next Stop, Pottersville)</Text>
        </Box>
      </Box>

      <Box
        display="flex"
        className="flex-col p-3 hover:bg-slate-50 border-b">
        <Box
          alignItems="center"
          display="flex">
          <StyledOcticon
            icon={ChevronRightIcon}
            className="mx-4"
          />
          <Text>The Sliding Mr. Bones (Next Stop, Pottersville)</Text>
        </Box>
      </Box>

      <Box
        display="flex"
        className="flex-col p-3 hover:bg-slate-50 border-b">
        <Box
          alignItems="center"
          display="flex">
          <StyledOcticon
            icon={ChevronRightIcon}
            className="mx-4"
          />
          <Text>The Sliding Mr. Bones (Next Stop, Pottersville)</Text>
        </Box>
      </Box>
    </Box>
  );
}

export default UpcomingEvents;
