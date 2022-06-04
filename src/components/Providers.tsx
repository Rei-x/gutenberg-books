import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import { QueryClient, QueryClientProvider } from 'react-query';

const queryClient = new QueryClient();

const Providers = ({ children }: { children: React.ReactNode; }) => <ChakraProvider>
  <QueryClientProvider client={queryClient}>
    {children}
  </QueryClientProvider>
</ChakraProvider>;

export default Providers;