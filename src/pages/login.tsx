import Layout from '@/components/Layout';
import { NextPage } from 'next';
import React from 'react';
import { Button, Center } from '@chakra-ui/react';
import { GithubAuthProvider, signInWithPopup } from 'firebase/auth';
import { auth } from '@/firebase';
import { useRouter } from 'next/router';

const Login: NextPage = () => {
  const router = useRouter();
  const provider = new GithubAuthProvider();
  return (
    <Layout>
      <Center mt={4}>
        <Button onClick={() => signInWithPopup(auth, provider).then(() => router.push("/"))}>Login with Github</Button>
      </Center>
    </Layout>
  );
};

export default Login;