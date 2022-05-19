import FavoriteBookView from '@/components/FavoriteBookView';
import Layout from '@/components/Layout';
import { auth } from '@/firebase';
import useFavoriteBooks from '@/hooks/useFavoriteBooks';
import { Container, VStack, Text } from '@chakra-ui/react';
import { NextPage } from 'next';
import { useRouter } from 'next/router';
import React, { useEffect } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';

const FavoriteBooks: NextPage = () => {
  const [favoriteBooks] = useFavoriteBooks();
  const [user] = useAuthState(auth);
  const router = useRouter();

  useEffect(() => {
    if (!user) router.push("/");
  }, [user, router]);

  return (
    <Layout>
      <Container my={12}>
        <VStack gap={8}>
          {favoriteBooks?.map((bookId) => <FavoriteBookView key={bookId} bookId={bookId} />)}
        </VStack>
        {favoriteBooks?.length === 0 && <Text textAlign="center">You don&apos;t have any favorite books.</Text>}
      </Container>
    </Layout>
  );
};

export default FavoriteBooks;