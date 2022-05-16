import Head from 'next/head';
import React from 'react';
import Navbar from './Navbar';

const Layout = ({ children }: { children: React.ReactNode; }) => {
  return (
    <div>
      <Head>
        <title>Gutenberg books</title>
        <meta name="description" content="Gutenberg books" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      {children}
    </div>
  );
};

export default Layout;