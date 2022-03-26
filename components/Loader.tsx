import { Box, Heading, Spinner } from '@primer/react';
import React from 'react';

function Loader() {
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      className="h-screen">
      <Spinner size="large" />
      <Heading className="pt-6 text-slate-600">
        Loading Data please wait
      </Heading>
    </Box>
  );
}

export default Loader;
