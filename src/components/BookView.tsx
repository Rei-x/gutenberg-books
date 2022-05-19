import { HStack, Box, Heading, Link, Image, Text } from '@chakra-ui/react';
import NextLink from "next/link";
import React, { useMemo } from 'react';
import { Book, ResourceType } from '@/types/booksGet';
import MarkAsFavorite from './MarkAsFavorite';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { motion } from 'framer-motion';
import 'react-lazy-load-image-component/src/effects/opacity.css';

const getImageFromBook = (book: Book) => {
  return book.resources.find((resource) => resource.type === ResourceType.ImageJPEG && resource.uri.endsWith("medium.jpg"))?.uri;
};

const getAuthorFromBook = (book: Book) => {
  return book.agents.find((agent) => agent.type === "Author")?.person;
};

const BookView = ({ book }: { book: Book; }) => {
  const image = useMemo(() => getImageFromBook(book), [book]);
  return (
    <HStack
      layout layoutId={book.id.toString()}
      as={motion.div}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }} alignItems="flex-start" key={book.id} width={"100%"} >
      <Box width="30%">
        {image && <Link>
          <NextLink href={`/book/${book.id}`}>
            <LazyLoadImage effect="opacity" src={image} alt={`Cover of the book`} />
          </NextLink>
        </Link>}
      </Box>
      <Box width="70%">
        <div>
          <Link>
            <NextLink href={`/book/${book.id}`}>
              <Heading as="h2" size="md">{book.title}</Heading>
            </NextLink>
          </Link>
          <Text>Downloads: {book.downloads}</Text>
          <Text>Author: {getAuthorFromBook(book)}</Text>
        </div>
        <MarkAsFavorite bookId={book.id.toString()} />
      </Box>
    </HStack>
  );
};

export default BookView;