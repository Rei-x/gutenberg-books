import { VStack, Spinner, Button, Text, Wrap, WrapItem, ChakraComponent, Center, Box } from '@chakra-ui/react';
import React from 'react';
import { UseInfiniteQueryResult } from 'react-query';
import { ListBooks } from '@/types/booksGet';
import BookView from './BookView';
import { motion } from 'framer-motion';
import InfiniteScroll from 'react-infinite-scroll-component';
import Loading from './Loading';

const BookList = ({ booksQuery }: { booksQuery: UseInfiniteQueryResult<ListBooks, unknown>; }) => {

  const booksLength = booksQuery.data?.pages.reduce((acc, cur) => {
    return acc + cur.results.length;
  }, 0);

  return (
    <>
      {booksQuery.isLoading &&
        <Box mx="auto">
          <Loading />
        </Box>
      }
      {booksQuery.isSuccess && <Wrap as={InfiniteScroll as unknown as ChakraComponent<'div'>} spacing="4" style={{ overflow: "hidden" }} hasMore={booksQuery.hasNextPage || false} dataLength={booksLength || 0} next={booksQuery.fetchNextPage} loader={<Loading mt={10} mx="auto" />}>
        {booksQuery.data?.pages.map((page) => page.results.map((book) =>
          <WrapItem key={book.id}>
            <BookView book={book} />
          </WrapItem>))}
      </Wrap>}
      {booksQuery.data?.pages[0].count === 0 && <Center>
        <Text layout as={motion.div} initial={{ opacity: 0, position: "absolute" }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0, position: "absolute" }}>There were no books that matched your query</Text>
      </Center>}
    </>
  );
};

export default BookList;