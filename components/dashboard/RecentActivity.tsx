import { ChevronRightIcon, PulseIcon } from '@primer/octicons-react';
import {
  Box,
  Button,
  Heading,
  Label,
  StyledOcticon,
  Text
} from '@primer/react';
import React from 'react';

function RecentActivity() {
  return (
    <Box className="border rounded-md m-4">
      <Box className="flex items-center tracking-tight px-5 py-2 w-full border-b">
        <StyledOcticon
          icon={PulseIcon}
          size="medium"
          sx={{ mr: 3 }}
        />
        <Heading>Recent Activity</Heading>
        {/* <Button leadingIcon={ProjectIcon}>Details</Button> */}
      </Box>
      <Box
        display="flex"
        className="flex-col p-3 hover:bg-slate-50 border-b">
        <Box
          justifyContent="space-between"
          alignItems="center"
          display="flex">
          <Text>The Sliding Mr. Bones (Next Stop, Pottersville)</Text>
          <Box
            display="flex"
            flexDirection="column"
            alignItems="flex-end">
            <Text sx={{ fontSize: 2 }}>22/05/2008 </Text>
            <Text sx={{ fontSize: 1 }}>9:30am</Text>
          </Box>
          <StyledOcticon
            icon={ChevronRightIcon}
            className="mx-4"
          />
        </Box>
      </Box>

      <Box
        display="flex"
        className="flex-col p-3 hover:bg-slate-50 border-b">
        <Box
          justifyContent="space-between"
          alignItems="center"
          display="flex">
          <Text>The Sliding Mr. Bones (Next Stop, Pottersville)</Text>
          <Box
            display="flex"
            flexDirection="column"
            alignItems="flex-end">
            <Text sx={{ fontSize: 2 }}>22/05/2008 </Text>
            <Text sx={{ fontSize: 1 }}>9:30am</Text>
          </Box>
          <StyledOcticon
            icon={ChevronRightIcon}
            className="mx-4"
          />
        </Box>
      </Box>
    </Box>
  );
}

export default RecentActivity;
