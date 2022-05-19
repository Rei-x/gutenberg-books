import api from '@/api';
import React from 'react';
import { useQuery } from 'react-query';
import BookView from './BookView';

const FavoriteBookView = ({ bookId }: { bookId: string; }) => {
  const bookQuery = useQuery(["book", bookId], () => api.book.get(bookId));

  if (!bookQuery.data) return null;

  return (
    <BookView book={bookQuery.data} />
  );
};

export default FavoriteBookView;