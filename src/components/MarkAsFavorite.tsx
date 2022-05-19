import { auth } from '@/firebase';
import useFavoriteBook from '@/hooks/useFavorite';
import { StarIcon } from '@chakra-ui/icons';
import { HStack, Link } from '@chakra-ui/react';
import React from 'react';

const MarkAsFavorite = ({ bookId }: { bookId: number; }) => {
  const [isFavorite, setFavorite] = useFavoriteBook(bookId);

  if (!auth.currentUser) return null;

  return (
    <HStack mt={4} cursor="pointer" onClick={() => setFavorite(!isFavorite)
    }>
      <Link textAlign="center" as="p">{isFavorite ? "Unmark as favorite" : "Mark as favorite"}</Link><StarIcon color={isFavorite ? "yellow.400" : "gray.400"} />
    </HStack>
  );
};

export default MarkAsFavorite;