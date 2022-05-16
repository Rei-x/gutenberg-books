import { VStack, Spinner, Button, Text } from '@chakra-ui/react';
import React from 'react';
import { UseInfiniteQueryResult } from 'react-query';
import { ListBooks } from '@/types/booksGet';
import BookView from './BookView';

const BookList = ({ booksQuery }: { booksQuery: UseInfiniteQueryResult<ListBooks, unknown>; }) => {
  return (
    <VStack>
      {booksQuery.isLoading && <VStack>
        <Spinner />
        <Text>It can take up to a minute to load the data..</Text>
      </VStack>}
      {booksQuery.isSuccess && <VStack gap="8">
        {booksQuery.data?.pages.map((page) => page.results.map((book) =>
          <BookView key={book.id} book={book} />))}
        {booksQuery.hasNextPage &&
          <Button
            onClick={() => booksQuery.fetchNextPage()}
            isLoading={booksQuery.isFetchingNextPage}
          >
            Load more
          </Button>}
        {booksQuery.data?.pages[0].count === 0 && <Text>There are no books that matched your query</Text>}
      </VStack>}
    </VStack>
  );
};

export default BookList;