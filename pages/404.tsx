import { Box, Heading, Text } from '@primer/react';
import React from 'react';

function ErrorPage() {
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      className="h-screen"
      flexDirection="column">
      <Heading sx={{ fontSize: 60 }}>404</Heading>
      <Text
        sx={{ fontSize: 18 }}
        className="text-slate-600">
        Page Not Found
      </Text>
    </Box>
  );
}

export default ErrorPage;
