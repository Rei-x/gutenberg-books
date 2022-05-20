import { VStack, Spinner, Button, Text } from '@chakra-ui/react';
import React from 'react';
import { UseInfiniteQueryResult } from 'react-query';
import { ListBooks } from '@/types/booksGet';
import BookView from './BookView';
import { AnimatePresence, motion } from 'framer-motion';
import InfiniteScroll from 'react-infinite-scroll-component';
import Loading from './Loading';

const BookList = ({ booksQuery }: { booksQuery: UseInfiniteQueryResult<ListBooks, unknown>; }) => {

  const booksLength = booksQuery.data?.pages.reduce((acc, cur) => {
    return acc + cur.results.length;
  }, 0);

  return (
    <VStack as={AnimatePresence}>
      {booksQuery.isLoading && <Loading />}
      {booksQuery.isSuccess && <VStack gap="8" >
        <InfiniteScroll style={{ overflow: "hidden" }} hasMore={booksQuery.hasNextPage || false} dataLength={booksLength || 0} next={booksQuery.fetchNextPage} loader={<Loading />}>
          {booksQuery.data?.pages.map((page) => page.results.map((book) =>
            <BookView key={book.id} book={book} />))}
        </InfiniteScroll>
        {booksQuery.data?.pages[0].count === 0 && <Text layout as={motion.div} initial={{ opacity: 0, position: "absolute" }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0, position: "absolute" }}>There were no books that matched your query</Text>}
      </VStack>}
    </VStack>
  );
};

export default BookList;