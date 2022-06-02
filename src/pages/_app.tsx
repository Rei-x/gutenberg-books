import React from 'react';
import Providers from '@/components/Providers';
import type { AppProps } from 'next/app';


function MyApp({ Component, pageProps }: AppProps) {
  return <Providers>
    <Component {...pageProps} />
  </Providers>;

}

export default MyApp;
