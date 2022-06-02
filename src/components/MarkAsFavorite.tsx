import { auth } from '../firebase';
import useFavoriteBook from '../hooks/useFavoriteBook';
import { StarIcon } from '@chakra-ui/icons';
import { HStack, Link } from '@chakra-ui/react';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';

const MarkAsFavorite = ({ bookId }: { bookId: string; }) => {
  const [isFavorite, setFavorite] = useFavoriteBook(bookId);
  const [user] = useAuthState(auth);

  if (!user) return null;

  return (
    <HStack mt={4} cursor="pointer" onClick={() => setFavorite(!isFavorite)
    }>
      <Link textAlign="center" as="p">{isFavorite ? "Unmark as favorite" : "Mark as favorite"}</Link><StarIcon color={isFavorite ? "yellow.400" : "gray.400"} />
    </HStack>
  );
};

export default React.memo(MarkAsFavorite);