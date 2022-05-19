import Layout from '@/components/Layout';
import { NextPage } from 'next';
import React from 'react';
import { Button, Center, VStack } from '@chakra-ui/react';
import { GithubAuthProvider, signInAnonymously, signInWithPopup } from 'firebase/auth';
import { auth } from '@/firebase';
import { useRouter } from 'next/router';

const Login: NextPage = () => {
  const router = useRouter();
  const provider = new GithubAuthProvider();
  return (
    <Layout>
      <Center mt={4}>
        <VStack>
          <Button onClick={() => signInWithPopup(auth, provider).then(() => router.push("/"))}>Login with Github</Button>
          <Button onClick={() => signInAnonymously(auth).then(() => router.push("/"))}>Login anonymously</Button>
        </VStack>
      </Center>
    </Layout>
  );
};

export default Login;